import type { APIRoute } from 'astro';

export const prerender = false;

// ---------------------------------------------------------------------------
// Svix signature verification (Resend uses Svix for webhook delivery)
// https://docs.svix.com/receiving/verifying-payloads/how-manual
// ---------------------------------------------------------------------------
async function verifySvix(
  rawBody: string,
  svixId: string,
  svixTimestamp: string,
  svixSignature: string,
  secret: string // "whsec_<base64>" format from Resend dashboard
): Promise<boolean> {
  // Reject missing headers
  if (!svixId || !svixTimestamp || !svixSignature) return false;

  // Reject timestamps older than 5 minutes (replay protection)
  const ts = parseInt(svixTimestamp, 10);
  if (isNaN(ts) || Math.abs(Math.floor(Date.now() / 1000) - ts) > 300) return false;

  // Decode the base64 secret (strip "whsec_" prefix if present)
  const b64 = secret.replace(/^whsec_/, '');
  const secretBytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

  // Signed content: "<svix-id>.<svix-timestamp>.<raw-body>"
  const toSign = `${svixId}.${svixTimestamp}.${rawBody}`;
  const key = await crypto.subtle.importKey(
    'raw',
    secretBytes,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(toSign));
  const computed = btoa(String.fromCharCode(...new Uint8Array(sig)));

  // Header may contain multiple signatures: "v1,<sig1> v1,<sig2>"
  return svixSignature.split(' ').some((s) => s.replace(/^v1,/, '') === computed);
}

// ---------------------------------------------------------------------------
// Resend event shapes (subset we care about)
// ---------------------------------------------------------------------------
interface ResendEvent {
  type: string;
  data: {
    email_id?: string;
    from?: string;
    to?: string[];
    subject?: string;
    bounce?: unknown;
    [key: string]: unknown;
  };
}

// ---------------------------------------------------------------------------
// POST /api/resend-webhook
// ---------------------------------------------------------------------------
export const POST: APIRoute = async ({ request }) => {
  const secret = process.env.RESEND_WEBHOOK_SECRET;

  if (!secret) {
    // Webhook endpoint exists but secret not configured — accept and warn.
    // This allows Resend to confirm the URL during initial setup.
    console.warn('[resend-webhook] RESEND_WEBHOOK_SECRET not set — skipping signature verification');
    return new Response('ok', { status: 200 });
  }

  const rawBody = await request.text();

  const verified = await verifySvix(
    rawBody,
    request.headers.get('svix-id') ?? '',
    request.headers.get('svix-timestamp') ?? '',
    request.headers.get('svix-signature') ?? '',
    secret
  );

  if (!verified) {
    console.error('[resend-webhook] signature verification failed — rejecting request');
    return new Response('Unauthorized', { status: 401 });
  }

  let event: ResendEvent;
  try {
    event = JSON.parse(rawBody) as ResendEvent;
  } catch {
    return new Response('Bad request', { status: 400 });
  }

  const { type, data } = event;
  const id = data.email_id ?? '?';

  switch (type) {
    case 'email.sent':
      console.log(`[resend-webhook] sent     | id=${id} to=${data.to?.join(',')}`);
      break;
    case 'email.delivered':
      console.log(`[resend-webhook] delivered | id=${id}`);
      break;
    case 'email.delivery_delayed':
      console.warn(`[resend-webhook] delayed   | id=${id}`);
      break;
    case 'email.bounced':
      console.error(`[resend-webhook] bounced   | id=${id}`, data.bounce ?? '');
      break;
    case 'email.complained':
      console.warn(`[resend-webhook] complaint | id=${id}`);
      break;
    default:
      console.log(`[resend-webhook] event=${type} | id=${id}`);
  }

  return new Response('ok', { status: 200 });
};
