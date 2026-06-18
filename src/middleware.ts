import { defineMiddleware } from 'astro:middleware';

// Bundle all Markdown mirrors into the Edge Function at build time.
// Vite resolves import.meta.glob before the edge bundle step, so the content
// is embedded as string literals — no network request at runtime.
const markdownFiles = import.meta.glob<string>('/public/**/*.md', {
  as: 'raw',
  eager: true,
});

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
  const accept = context.request.headers.get('Accept') ?? '';
  if (!accept.includes('text/markdown')) return next();

  const { pathname } = new URL(context.request.url);
  if (pathname.endsWith('.md') || pathname.endsWith('.txt')) return next();

  const content = getMarkdown(pathname);
  if (!content) return next();

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept',
      'x-markdown-tokens': String(Math.ceil(content.length / 4)),
    },
  });
});
