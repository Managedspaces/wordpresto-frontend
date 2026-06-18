import { defineMiddleware } from 'astro:middleware';

const STATIC_MARKDOWN_MAP: Record<string, string> = {
  '/': '/index.md',
  '/workflow-demo/': '/workflow-demo/index.md',
  '/workers/': '/workers/index.md',
  '/sitemap/': '/sitemap.md',
  '/waitlist/': '/pages/waitlist.md',
};

export const onRequest = defineMiddleware(async (context, next) => {
  const accept = context.request.headers.get('Accept') ?? '';
  if (!accept.includes('text/markdown')) return next();

  const { pathname } = new URL(context.request.url);

  // Loop prevention: don't intercept .md or .txt fetches
  if (pathname.endsWith('.md') || pathname.endsWith('.txt')) return next();

  let mdPath = STATIC_MARKDOWN_MAP[pathname];

  if (!mdPath) {
    const workerMatch = pathname.match(/^\/workers\/([^/]+)\/?$/);
    if (workerMatch) mdPath = `/workers/${workerMatch[1]}/index.md`;
  }

  if (!mdPath) return next();

  try {
    const mdUrl = new URL(mdPath, context.request.url);
    const mdResponse = await fetch(mdUrl.toString());
    if (!mdResponse.ok) return next();

    const content = await mdResponse.text();
    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'x-markdown-tokens': String(Math.ceil(content.length / 4)),
      },
    });
  } catch {
    return next();
  }
});
