import { defineMiddleware } from 'astro:middleware';

// Paths that support Accept: text/markdown content negotiation.
// Markdown serving is handled by Vercel routing rewrites injected via
// scripts/inject-markdown-routes.mjs. The middleware's job here is to
// add Vary: Accept to HTML responses so CDN layers cache variants correctly.
const NEGOTIATED_PATHS = new Set([
  '/',
  '/workflow-demo/',
  '/workflow-demo',
  '/workers/',
  '/workers',
  '/sitemap/',
  '/sitemap',
]);

function isNegotiatedPath(pathname: string): boolean {
  if (NEGOTIATED_PATHS.has(pathname)) return true;
  return /^\/workers\/[^/]+\/?$/.test(pathname);
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = new URL(context.request.url);

  if (!isNegotiatedPath(pathname)) return next();

  const response = await next();

  // Add Vary: Accept to HTML responses so CDNs know this URL has multiple
  // representations and should not serve a cached HTML for markdown requests.
  const ct = response.headers.get('content-type') ?? '';
  if (ct.includes('text/html')) {
    const headers = new Headers(response.headers);
    const existing = headers.get('vary');
    headers.set('vary', existing ? `${existing}, Accept` : 'Accept');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  return response;
});
