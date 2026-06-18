import { defineMiddleware } from 'astro:middleware';

// Bundle all Markdown mirrors into the Edge Function at build time.
// Vite resolves import.meta.glob before the edge bundle step, so the content
// is embedded as string literals — no network request at runtime.
const markdownFiles = import.meta.glob<string>('/public/**/*.md', {
  as: 'raw',
  eager: true,
});

// Paths that support Accept: text/markdown content negotiation.
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

function getMarkdown(pathname: string): string | null {
  let key: string;

  if (pathname === '/' || pathname === '') {
    key = '/public/index.md';
  } else if (pathname === '/workflow-demo/' || pathname === '/workflow-demo') {
    key = '/public/workflow-demo/index.md';
  } else if (pathname === '/workers/' || pathname === '/workers') {
    key = '/public/workers/index.md';
  } else if (pathname === '/sitemap/' || pathname === '/sitemap') {
    key = '/public/sitemap.md';
  } else {
    const workerMatch = pathname.match(/^\/workers\/([^/]+)\/?$/);
    if (workerMatch) key = `/public/workers/${workerMatch[1]}/index.md`;
    else return null;
  }

  return markdownFiles[key] ?? null;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = new URL(context.request.url);

  // Never intercept direct .md or .txt file requests.
  if (pathname.endsWith('.md') || pathname.endsWith('.txt')) return next();

  const negotiated = isNegotiatedPath(pathname);

  // Serve bundled Markdown for Accept: text/markdown on negotiated paths.
  const accept = context.request.headers.get('Accept') ?? '';
  if (accept.includes('text/markdown') && negotiated) {
    const content = getMarkdown(pathname);
    if (content) {
      return new Response(content, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'x-markdown-tokens': String(Math.ceil(content.length / 4)),
        },
      });
    }
  }

  const response = await next();

  // For negotiated paths, add Vary: Accept to HTML responses.
  // This tells Cloudflare/CDN to cache different responses per Accept value,
  // preventing a cached HTML entry from being served for markdown requests.
  if (negotiated) {
    const headers = new Headers(response.headers);
    const existing = headers.get('Vary');
    headers.set('Vary', existing ? `${existing}, Accept` : 'Accept');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  return response;
});
