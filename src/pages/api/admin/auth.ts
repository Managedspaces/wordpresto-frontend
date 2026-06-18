import type { APIRoute } from 'astro';
import { createSessionCookie, clearSessionCookie } from '@/lib/adminAuth';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const redirect = (path: string, cookie?: string) => {
    const headers: Record<string, string> = { Location: path };
    if (cookie) headers['Set-Cookie'] = cookie;
    return new Response(null, { status: 302, headers });
  };

  const form = await request.formData().catch(() => null);
  if (!form) return redirect('/admin/login?error=1');

  const action = form.get('action');

  if (action === 'logout') {
    return redirect('/admin/login', clearSessionCookie());
  }

  const username = String(form.get('username') ?? '').trim();
  const password = String(form.get('password') ?? '');

  const expectedUser   = process.env.ADMIN_USERNAME;
  const expectedPass   = process.env.ADMIN_PASSWORD;
  const sessionSecret  = process.env.ADMIN_SESSION_SECRET;

  if (!expectedUser || !expectedPass || !sessionSecret) {
    console.error('[admin/auth] ADMIN_USERNAME, ADMIN_PASSWORD or ADMIN_SESSION_SECRET not set');
    return redirect('/admin/login?error=1');
  }

  if (username !== expectedUser || password !== expectedPass) {
    return redirect('/admin/login?error=1');
  }

  const cookie = await createSessionCookie(sessionSecret);
  return redirect('/admin/waitlist', cookie);
};
