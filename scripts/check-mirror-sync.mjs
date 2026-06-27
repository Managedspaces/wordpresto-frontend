/**
 * Post-build guard: keep the generated Markdown mirrors honest.
 *
 * Runs after `astro build`, against the built HTML in dist/client and the
 * mirrors in public/. It fails the build (non-zero exit) when:
 *
 *   1. A content page's mirror has drifted from the page it mirrors. We compare
 *      the page's <title>, meta description and first <h1> with the mirror's
 *      frontmatter `title:` / `description:` and first `# ` heading. This is the
 *      automated backstop for "edited the page but forgot the mirror source":
 *      pages and mirrors that read the same data file can never drift, and this
 *      catch makes sure it stays that way.
 *
 *   2. A URL advertised in sitemap.xml is marked noindex. Submitting a noindex
 *      URL to search engines is contradictory and trips Search Console.
 *
 * Run: node scripts/check-mirror-sync.mjs  (wired into `build`)
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const DIST_DIR = join(ROOT, 'dist', 'client');
const BASE = 'https://wordpresto.com';

const errors = [];

/* ----------------------------- helpers ----------------------------- */

function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&middot;/g, '·')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function normalise(s) {
  return decodeEntities(String(s))
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function readFile(path) {
  return existsSync(path) ? readFileSync(path, 'utf8') : null;
}

function htmlTitle(html) {
  return html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? null;
}

// Capture the opening quote (group 1) and use a backreference so an apostrophe
// inside the value (e.g. "writer's") is not mistaken for the closing delimiter.
function attrContent(tag) {
  return tag?.match(/\bcontent=(["'])([\s\S]*?)\1/i)?.[2] ?? null;
}

function htmlMetaDescription(html) {
  const tag = html.match(/<meta\b[^>]*\bname=["']description["'][^>]*>/i)?.[0];
  return attrContent(tag);
}

function htmlFirstH1(html) {
  return html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? null;
}

function htmlIsNoindex(html) {
  const tag = html.match(/<meta\b[^>]*\bname=["']robots["'][^>]*>/i)?.[0];
  return /noindex/i.test(attrContent(tag) ?? '');
}

function mdFrontmatter(md, key) {
  const m = md.match(new RegExp(`^${key}:\\s*"([\\s\\S]*?)"\\s*$`, 'm'));
  return m ? m[1].replace(/\\"/g, '"') : null;
}

function mdFirstH1(md) {
  return md.match(/^#\s+(.+)$/m)?.[1] ?? null;
}

function htmlPathForRoute(route) {
  const rel = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}index.html`;
  return join(DIST_DIR, rel);
}

/* --------------------- 1. mirror ↔ page sync ----------------------- */

// Direct-URL content mirrors (public/**/index.md), excluding the legacy
// public/pages/** copies and resources with no 1:1 HTML page (e.g. sitemap.md).
const contentPages = [
  { route: '/', md: 'index.md' },
  { route: '/workflow-demo/', md: 'workflow-demo/index.md' },
  { route: '/workers/', md: 'workers/index.md' },
  { route: '/prestobot/', md: 'prestobot/index.md' },
];

const workersDir = join(PUBLIC_DIR, 'workers');
if (existsSync(workersDir)) {
  for (const entry of readdirSync(workersDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue; // skip workers/index.md (handled above)
    contentPages.push({
      route: `/workers/${entry.name}/`,
      md: `workers/${entry.name}/index.md`,
    });
  }
}

let checked = 0;
for (const page of contentPages) {
  const html = readFile(htmlPathForRoute(page.route));
  const md = readFile(join(PUBLIC_DIR, page.md));
  if (html === null) {
    errors.push(`${page.route}: built HTML not found (expected ${htmlPathForRoute(page.route)})`);
    continue;
  }
  if (md === null) {
    errors.push(`${page.route}: Markdown mirror not found (expected public/${page.md})`);
    continue;
  }

  const fields = [
    ['title', htmlTitle(html), mdFrontmatter(md, 'title')],
    ['description', htmlMetaDescription(html), mdFrontmatter(md, 'description')],
    ['h1', htmlFirstH1(html), mdFirstH1(md)],
  ];

  for (const [field, htmlVal, mdVal] of fields) {
    if (htmlVal === null || mdVal === null) {
      errors.push(`${page.route}: could not read ${field} from ${htmlVal === null ? 'page' : 'mirror'}`);
      continue;
    }
    if (normalise(htmlVal) !== normalise(mdVal)) {
      errors.push(
        `${page.route}: ${field} drift\n     page:   ${normalise(htmlVal)}\n     mirror: ${normalise(mdVal)}`,
      );
    }
  }
  checked++;
}

/* ------------- 2. no noindex URLs advertised in sitemap.xml --------- */

const sitemapXml = readFile(join(DIST_DIR, 'sitemap.xml'));
let sitemapUrls = 0;
if (sitemapXml === null) {
  errors.push('dist/client/sitemap.xml not found');
} else {
  const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  sitemapUrls = locs.length;
  for (const loc of locs) {
    const route = loc.replace(BASE, '') || '/';
    const html = readFile(htmlPathForRoute(route));
    if (html === null) continue; // server-rendered routes have no static html
    if (htmlIsNoindex(html)) {
      errors.push(`sitemap.xml advertises ${route}, but that page is marked noindex`);
    }
  }
}

/* ------------------------------ report ----------------------------- */

if (errors.length) {
  console.error('✗ Mirror sync check failed:\n');
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(
  `✓ Mirror sync check passed (${checked} content pages in sync, ${sitemapUrls} sitemap URLs indexable)`,
);
