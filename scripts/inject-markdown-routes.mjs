/**
 * Post-build script: inject Accept: text/markdown content-negotiation routes
 * into .vercel/output/config.json BEFORE the "handle: filesystem" directive.
 *
 * Vercel's Build Output API evaluates routes in order. Routes before
 * "handle: filesystem" run before static file serving, so a has-based rewrite
 * can intercept Accept: text/markdown requests and serve the static .md mirror
 * without needing Edge Middleware to fire.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const configPath = join(__dirname, '../.vercel/output/config.json');

const config = JSON.parse(readFileSync(configPath, 'utf8'));

const ACCEPT_MD = '(?:.*text/markdown.*)';
const MD_HEADERS = {
  'content-type': 'text/markdown; charset=utf-8',
  'vary': 'Accept',
};

// One route per negotiated path. src uses PCRE-compatible regex (Vercel's RE2).
const markdownRoutes = [
  {
    src: '^/$',
    has: [{ type: 'header', key: 'accept', value: ACCEPT_MD }],
    dest: '/index.md',
    headers: MD_HEADERS,
  },
  {
    src: '^/workflow-demo/?$',
    has: [{ type: 'header', key: 'accept', value: ACCEPT_MD }],
    dest: '/workflow-demo/index.md',
    headers: MD_HEADERS,
  },
  {
    src: '^/workers/?$',
    has: [{ type: 'header', key: 'accept', value: ACCEPT_MD }],
    dest: '/workers/index.md',
    headers: MD_HEADERS,
  },
  {
    src: '^/workers/([^/]+)/?$',
    has: [{ type: 'header', key: 'accept', value: ACCEPT_MD }],
    dest: '/workers/$1/index.md',
    headers: MD_HEADERS,
  },
  {
    src: '^/sitemap/?$',
    has: [{ type: 'header', key: 'accept', value: ACCEPT_MD }],
    dest: '/sitemap.md',
    headers: MD_HEADERS,
  },
  {
    src: '^/prestobot/?$',
    has: [{ type: 'header', key: 'accept', value: ACCEPT_MD }],
    dest: '/prestobot/index.md',
    headers: MD_HEADERS,
  },
  {
    src: '^/pricing/?$',
    has: [{ type: 'header', key: 'accept', value: ACCEPT_MD }],
    dest: '/pricing/index.md',
    headers: MD_HEADERS,
  },
  // Homepage locale mirrors (src/data/i18n/home.ts) — see context.md.
  ...['pt', 'pt-br', 'es', 'de', 'fr'].map((locale) => ({
    src: `^/${locale}/?$`,
    has: [{ type: 'header', key: 'accept', value: ACCEPT_MD }],
    dest: `/${locale}/index.md`,
    headers: MD_HEADERS,
  })),
];

const fsIndex = config.routes.findIndex((r) => r.handle === 'filesystem');
if (fsIndex === -1) {
  console.error('[inject-markdown-routes] ERROR: "handle: filesystem" not found in config.json');
  process.exit(1);
}

config.routes.splice(fsIndex, 0, ...markdownRoutes);

writeFileSync(configPath, JSON.stringify(config, null, '\t'));
console.log(
  `[inject-markdown-routes] Injected ${markdownRoutes.length} markdown negotiation routes at position ${fsIndex} (before filesystem handler)`
);
