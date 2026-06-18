// ---------------------------------------------------------------------------
// Admin session cookie — HMAC-signed, no external dependency
// Cookie: wp_admin={expiry}.{hmac}
// ---------------------------------------------------------------------------

const COOKIE_NAME = 'wp_admin';
const TTL = 60 * 60 * 8; // 8 hours

async function hmac(value: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return btoa(String.fromCharCode(...new Uint8Array(sig)));
}

export async function createSessionCookie(secret: string): Promise<string> {
  const expiry = Math.floor(Date.now() / 1000) + TTL;
  const sig = await hmac(String(expiry), secret);
  return `${COOKIE_NAME}=${expiry}.${sig}; HttpOnly; Secure; SameSite=Strict; Max-Age=${TTL}; Path=/`;
}

export async function verifySession(
  cookieHeader: string | null,
  secret: string
): Promise<boolean> {
  if (!cookieHeader || !secret) return false;

  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  if (!match) return false;

  const parts = match[1].split('.');
  if (parts.length !== 2) return false;
  const [expiry, sig] = parts;

  if (parseInt(expiry, 10) < Math.floor(Date.now() / 1000)) return false;

  const expected = await hmac(expiry, secret);
  return expected === sig;
}

export function clearSessionCookie(): string {
  return `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/`;
}
