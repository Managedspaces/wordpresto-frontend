import type { APIRoute } from 'astro';
import { getDb } from '@/lib/db';
import { getPricingInfo } from '@/lib/countries';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^https?:\/\/.+\..+/;

function trim(v: unknown, max = 500): string {
  return String(v ?? '').trim().slice(0, max);
}

function safeArray(v: unknown, itemMax = 100, listMax = 40): string[] {
  if (!Array.isArray(v)) return [];
  return v.map((x) => String(x).trim().slice(0, itemMax)).filter(Boolean).slice(0, listMax);
}

// Web Crypto API — works in Node.js, Vercel Edge, and Cloudflare Workers
async function hashIp(ip: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

// GET /api/waitlist?token=<DIAGNOSTIC_TOKEN> — restricted health check
// Only active when DIAGNOSTIC_TOKEN env var is set. Returns 404 otherwise.
export const GET: APIRoute = async ({ request }) => {
  const respond = (status: number, body: object) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  const expectedToken = process.env.DIAGNOSTIC_TOKEN;
  if (!expectedToken) {
    return respond(404, { ok: false });
  }

  const { searchParams } = new URL(request.url);
  if (searchParams.get('token') !== expectedToken) {
    return respond(401, { ok: false });
  }

  if (!process.env.DATABASE_URL) {
    return respond(503, { ok: false, error: 'DATABASE_URL not configured.' });
  }
  try {
    const sql = getDb();
    const rows = await sql`
      SELECT EXISTS (
        SELECT 1 FROM information_schema.tables
        WHERE table_name = 'waitlist_applications'
      ) AS table_exists
    ` as Array<{ table_exists: boolean }>;
    const exists = rows[0]?.table_exists === true;
    return respond(exists ? 200 : 503, {
      ok: exists,
      db: 'connected',
      table: exists ? 'ok' : 'missing',
    });
  } catch {
    return respond(500, { ok: false, db: 'error' });
  }
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const json = (status: number, body: object) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: 'Invalid request.' });
  }

  // Honeypot — bots fill this, humans don't see it
  if (body.hp_field) {
    return json(200, { ok: true }); // silent accept
  }

  // --- Collect and sanitise ---
  const fullName    = trim(body.full_name, 200);
  const email       = trim(body.email, 300).toLowerCase();
  const company     = trim(body.company_name, 200) || null;
  const role        = trim(body.role, 100);
  const countryCode = trim(body.country_code, 3).toUpperCase();
  const countryName = trim(body.country_name, 100) || null;
  const detectedCC  = trim(body.detected_country_code, 3).toUpperCase() || null;
  const industry    = trim(body.industry, 100);
  const industryCtx = trim(body.industry_context, 1000) || null;
  const writingNeeds       = safeArray(body.writing_needs);
  const currentFrustration = trim(body.current_frustration, 2000) || null;
  const workflowPainPoints = safeArray(body.workflow_pain_points);
  const workflowNotes      = trim(body.workflow_notes, 2000) || null;
  const currentStack       = safeArray(body.current_stack);
  const monthlyVolume      = trim(body.monthly_volume, 100) || null;
  const teamSetup          = trim(body.team_setup, 100) || null;
  const valueLevel         = trim(body.value_level, 100);
  const monthlyValueBand   = trim(body.monthly_value_band, 50);
  const monthlyValueLabel  = trim(body.monthly_value_label, 100) || null;
  const timeline           = trim(body.timeline, 100);
  const finalNotes         = trim(body.final_notes, 3000) || null;
  const consentToContact   = body.consent_to_contact === true;
  const openToCall         = body.open_to_call === true;

  // Derive pricing from country
  const pricing       = countryCode ? getPricingInfo(countryCode) : null;
  const currencyShown = (pricing?.currencySymbol ?? trim(body.currency_shown, 10)) || null;
  const pricingRegion = (pricing?.pricingRegion ?? trim(body.pricing_region, 30)) || null;

  // Validate website URL
  let websiteUrl: string | null = trim(body.website_url, 500) || null;
  if (websiteUrl) {
    if (!URL_RE.test(websiteUrl)) {
      const candidate = `https://${websiteUrl}`;
      websiteUrl = URL_RE.test(candidate) ? candidate : null;
    }
  }

  // --- Required field validation ---
  const missing: string[] = [];
  if (!fullName)                       missing.push('full_name');
  if (!email || !EMAIL_RE.test(email)) missing.push('email');
  if (!role)                           missing.push('role');
  if (!countryCode)                    missing.push('country_code');
  if (!industry)                       missing.push('industry');
  if (writingNeeds.length === 0)       missing.push('writing_needs');
  if (workflowPainPoints.length === 0) missing.push('workflow_pain_points');
  if (!valueLevel)                     missing.push('value_level');
  if (!monthlyValueBand)               missing.push('monthly_value_band');
  if (!timeline)                       missing.push('timeline');
  if (!consentToContact)               missing.push('consent_to_contact');

  if (missing.length > 0) {
    return json(422, { ok: false, error: 'Please complete all required fields.' });
  }

  // IP hash — Web Crypto API (works in Node.js + Edge runtimes)
  const ipHash = clientAddress ? await hashIp(clientAddress) : null;

  // --- Database insert ---
  if (!process.env.DATABASE_URL) {
    return json(503, { ok: false, error: 'Service temporarily unavailable. Please try again shortly.' });
  }

  try {
    const sql = getDb();
    await sql`
      INSERT INTO waitlist_applications (
        full_name, email, company_name, website_url, role,
        country_code, country_name, detected_country_code,
        currency_shown, pricing_region,
        industry, industry_context,
        writing_needs, current_frustration,
        workflow_pain_points, workflow_notes,
        current_stack, monthly_volume, team_setup,
        value_level, monthly_value_band, monthly_value_label, timeline,
        final_notes, consent_to_contact, open_to_call,
        source, user_agent, ip_hash
      ) VALUES (
        ${fullName}, ${email}, ${company}, ${websiteUrl}, ${role},
        ${countryCode}, ${countryName}, ${detectedCC},
        ${currencyShown}, ${pricingRegion},
        ${industry}, ${industryCtx},
        ${JSON.stringify(writingNeeds)}::jsonb, ${currentFrustration},
        ${JSON.stringify(workflowPainPoints)}::jsonb, ${workflowNotes},
        ${JSON.stringify(currentStack)}::jsonb, ${monthlyVolume}, ${teamSetup},
        ${valueLevel}, ${monthlyValueBand}, ${monthlyValueLabel}, ${timeline},
        ${finalNotes}, ${consentToContact}, ${openToCall},
        ${'waitlist-form'},
        ${request.headers.get('user-agent')?.slice(0, 500) ?? null},
        ${ipHash}
      )
    `;
  } catch (err) {
    // Log the full PG error (code, detail, hint) to Vercel function logs
    const pgCode = (err as Record<string, unknown>).code as string | undefined;
    const pgDetail = (err as Record<string, unknown>).detail as string | undefined;
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[waitlist] db error — code:', pgCode, '| detail:', pgDetail, '| msg:', msg);

    // Table missing — db:setup not run
    if (pgCode === '42P01') {
      return json(503, { ok: false, error: 'Service temporarily unavailable. Please try again shortly.' });
    }

    return json(500, { ok: false, error: 'Something went wrong. Please try again.' });
  }

  // --- Optional Resend notification ---
  const resendKey  = process.env.RESEND_API_KEY;
  const notifyTo   = process.env.WAITLIST_NOTIFY_TO;
  const notifyFrom = process.env.WAITLIST_NOTIFY_FROM;

  if (resendKey && notifyTo && notifyFrom) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: notifyFrom,
        to: [notifyTo],
        subject: `New waitlist application — ${fullName}`,
        html: `
          <p><strong>${fullName}</strong> (${email}) joined the waitlist.</p>
          <ul>
            <li>Role: ${role}</li>
            <li>Country: ${countryName ?? countryCode}</li>
            <li>Industry: ${industry}</li>
            <li>Timeline: ${timeline}</li>
            <li>Value band: ${monthlyValueBand}</li>
          </ul>
        `.trim(),
      });
    } catch (err) {
      console.error('[waitlist] resend error:', err instanceof Error ? err.message : String(err));
    }
  }

  return json(200, { ok: true });
};
