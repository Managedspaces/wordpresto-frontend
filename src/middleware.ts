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
  '/pricing/',
  '/pricing',
]);

function isNegotiatedPath(pathname: string): boolean {
  if (NEGOTIATED_PATHS.has(pathname)) return true;
  return /^\/workers\/[^/]+\/?$/.test(pathname);
}

// ── AEO crawler-ingest capture ────────────────────────────────────────────────
// AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …) run NO
// JavaScript, so no client analytics tag can ever see them — a hit to a .md /
// llms.txt file is only visible server-side, by its User-Agent. This edge
// middleware runs before static serving, so it's the one place we CAN see it.
// We forward likely crawler hits to the app's Site Signals collector, which does
// the AUTHORITATIVE classification and only records real AI crawlers. Best-effort
// and fully self-disabling: with no site id + write key configured, it's a no-op.

/** A markdown/LLM resource whose crawler hits we want to register (.md, llms.txt, llm.txt). */
function isMarkdownResource(pathname: string): boolean {
  return pathname.endsWith('.md') || pathname === '/llms.txt' || pathname === '/llm.txt' || pathname.endsWith('/llms.txt');
}

/** Broad, cheap pre-filter so we don't forward obvious humans — the backend does the real classification. */
const CRAWLER_UA = /bot|crawler|spider|gpt|claude|perplexity|google-extended|ccbot|bytespider|anthropic|oai-|amazonbot|applebot|meta-external|diffbot|cohere|youbot|duckassist/i;

function forwardCrawlHit(locals: unknown, pathname: string, userAgent: string, contentLength: string | null): void {
  const env = import.meta.env as Record<string, string | undefined>;
  const siteId = env.WORDPRESTO_CRAWL_SITE_ID;
  const writeKey = env.WORDPRESTO_CRAWL_WRITE_KEY;
  if (!siteId || !writeKey) return; // not configured yet → clean no-op

  const base = env.PUBLIC_APP_API_BASE || env.PUBLIC_APP_BASE || 'https://app.wordpresto.com';
  const bytes = Number(contentLength);
  const promise = fetch(`${base.replace(/\/$/, '')}/api/site-signals/crawl`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${writeKey}` },
    body: JSON.stringify({ siteId, path: pathname, userAgent, bytes: Number.isFinite(bytes) ? bytes : 0 }),
  }).catch(() => { /* best-effort telemetry — never affect the response */ });

  // Run it AFTER the response is sent (Vercel edge) so it never adds latency; fall back to fire-and-forget.
  const waitUntil = (locals as { runtime?: { waitUntil?: (p: Promise<unknown>) => void } })?.runtime?.waitUntil;
  if (typeof waitUntil === 'function') waitUntil(promise);
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = new URL(context.request.url);
  const userAgent = context.request.headers.get('user-agent') ?? '';

  const needsVary = isNegotiatedPath(pathname);
  const trackCrawler = isMarkdownResource(pathname) && CRAWLER_UA.test(userAgent);

  // Fast path: nothing to do for this request.
  if (!needsVary && !trackCrawler) return next();

  const response = await next();

  // Register the AI-crawler hit to this markdown resource (server-side — the only place it's visible).
  if (trackCrawler) {
    forwardCrawlHit(context.locals, pathname, userAgent, response.headers.get('content-length'));
  }

  // Add Vary: Accept to HTML responses so CDNs know this URL has multiple
  // representations and should not serve a cached HTML for markdown requests.
  if (needsVary) {
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
  }

  return response;
});
