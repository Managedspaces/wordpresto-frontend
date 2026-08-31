/**
 * Post-build guard: keep the internal link graph locale-correct.
 *
 * Runs after `astro build`, against the built HTML in dist/client, and reads
 * the rendered pages rather than the .astro sources so it sees exactly what a
 * visitor and a crawler get. It fails the build (non-zero exit) when:
 *
 *   1. A localised page links to an English URL that HAS a translated twin.
 *      This is the leak that made every translated homepage hand its readers
 *      back to the English Specialists pages: a hardcoded "/specialists/seo/"
 *      looks harmless in a component that renders in six languages. Linking an
 *      English-only page (/pricing/, the legal pages) is fine and not flagged,
 *      because there is nothing else to link yet. Language-switcher links are
 *      exempt too: they carry rel="alternate" hreflang, and crossing languages
 *      is the entire point of them.
 *
 *   2. A page cannot be reached from its own locale's homepage without
 *      switching language. A page whose only inbound link is in another
 *      language is invisible to a reader who stays in theirs, whatever the
 *      sitemap says.
 *
 *   3. An internal link points at a page that was not built. The site has none
 *      of these today and it is cheap to keep it that way.
 *
 * Checks 1 and 2 both need the same fact: which locale-agnostic paths exist in
 * which locales. That is derived from the build output, never hand-listed, so a
 * newly translated page is covered the moment it ships.
 *
 * Run: node scripts/check-internal-links.mjs  (wired into `build`)
 */
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST_DIR = join(ROOT, 'dist', 'client');

/** URL segments of the non-default locales, longest first so "pt-br" beats "pt". */
const LOCALE_SEGMENTS = ['pt-br', 'pt', 'es', 'de', 'fr'];
const DEFAULT_LOCALE = 'en';

/**
 * Pages known to be unreachable in their own language, with the reason. Each
 * entry is a locale-agnostic path and suppresses check 2 for every locale.
 *
 * This is a record of accepted debt, not a place to park new failures. An entry
 * should come with a plan to remove it; if you are adding one to get a build
 * green, fix the link instead.
 */
const ORPHAN_ALLOWLIST = new Map([
  // Reachable only from the English /sitemap/ today. Needs a footer entry, which
  // is a one-line change once the nav label lands in src/data/i18n/common.ts.
  ['/prestobot/', 'pending a footer link in the Company column'],
]);

const errors = [];

/* ----------------------------- helpers ----------------------------- */

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

/** dist/client/de/workers/index.html -> /de/workers/ */
function routeForFile(file) {
  const rel = '/' + relative(DIST_DIR, file).split(/[\\/]/).join('/');
  if (rel.endsWith('/index.html')) return rel.slice(0, -'index.html'.length);
  return rel.replace(/\.html$/, '/');
}

function localeOf(route) {
  for (const seg of LOCALE_SEGMENTS) {
    if (route === `/${seg}/` || route.startsWith(`/${seg}/`)) return seg;
  }
  return DEFAULT_LOCALE;
}

/** Strip the locale prefix: /de/workers/ -> /workers/, and / stays /. */
function agnosticPath(route) {
  const locale = localeOf(route);
  if (locale === DEFAULT_LOCALE) return route;
  return route.slice(locale.length + 1) || '/';
}

function localePath(locale, path) {
  if (locale === DEFAULT_LOCALE) return path;
  return path === '/' ? `/${locale}/` : `/${locale}${path}`;
}

/**
 * Resolve one href to an internal route, or null for anything not an internal
 * page link (external, mailto, tel, bare fragment, asset with an extension).
 */
function internalRoute(href) {
  if (!href) return null;
  if (/^(?:https?:|mailto:|tel:|data:|#)/i.test(href)) return null;
  if (!href.startsWith('/')) return null;
  const path = href.split('#')[0].split('?')[0];
  if (!path) return null;
  if (/\.[a-z0-9]+$/i.test(path)) return null; // /favicon.png, /llms.txt, ...
  return path.endsWith('/') ? path : `${path}/`;
}

/**
 * Every <a> in the document, with the one distinction the checks below care
 * about: a language switcher marks itself `rel="alternate" hreflang="..."`, and
 * pointing at another language is the whole job of that link, not a leak.
 */
function anchorsIn(html) {
  return [...html.matchAll(/<a\b([^>]*?)>/gi)].map((m) => {
    const attrs = m[1];
    return {
      href: attrs.match(/\bhref=(["'])([\s\S]*?)\1/i)?.[2]?.trim() ?? null,
      isAlternate: /\bhreflang=/i.test(attrs),
    };
  });
}

/* --------------------------- read the build ------------------------ */

if (!existsSync(DIST_DIR)) {
  console.error(`✗ Internal link check: no build found at ${DIST_DIR}. Run astro build first.`);
  process.exit(1);
}

/** route -> { locale, agnostic, links: Set<route> } */
const pages = new Map();
for (const file of walk(DIST_DIR)) {
  const route = routeForFile(file);
  const links = new Set();
  const alternates = new Set();
  for (const { href, isAlternate } of anchorsIn(readFileSync(file, 'utf8'))) {
    const target = internalRoute(href);
    if (!target || target === route) continue;
    (isAlternate ? alternates : links).add(target);
  }
  pages.set(route, { locale: localeOf(route), agnostic: agnosticPath(route), links, alternates });
}

/** locale-agnostic path -> Set of locales it is built in. */
const builtIn = new Map();
for (const page of pages.values()) {
  if (!builtIn.has(page.agnostic)) builtIn.set(page.agnostic, new Set());
  builtIn.get(page.agnostic).add(page.locale);
}

/* --------------------- 1. cross-locale link leaks ------------------- */

let leaksChecked = 0;
for (const [route, page] of pages) {
  if (page.locale === DEFAULT_LOCALE) continue;
  for (const target of page.links) {
    if (localeOf(target) !== DEFAULT_LOCALE) continue;
    leaksChecked++;
    const twin = localePath(page.locale, target);
    if (pages.has(twin)) {
      errors.push(
        `${route}: links to ${target}, but ${twin} exists. ` +
          `Build the href with localeHref(locale, "${target}").`,
      );
    }
  }
}

/* ------------------ 2. reachable in your own language --------------- */

let orphans = 0;
for (const locale of [DEFAULT_LOCALE, ...LOCALE_SEGMENTS]) {
  const home = localePath(locale, '/');
  if (!pages.has(home)) continue;

  // Walk out from the locale homepage, following only same-language links.
  const seen = new Set([home]);
  const queue = [home];
  while (queue.length) {
    const current = queue.shift();
    for (const target of pages.get(current)?.links ?? []) {
      if (seen.has(target) || !pages.has(target)) continue;
      if (localeOf(target) !== locale) continue;
      seen.add(target);
      queue.push(target);
    }
  }

  for (const [route, page] of pages) {
    if (page.locale !== locale || seen.has(route)) continue;
    if (ORPHAN_ALLOWLIST.has(page.agnostic)) continue;
    orphans++;
    errors.push(
      `${route}: no page in this language links to it, so it is unreachable ` +
        `from ${home} without switching language.`,
    );
  }
}

/* ------------------------- 3. links that 404 ------------------------ */

let linksChecked = 0;
for (const [route, page] of pages) {
  for (const target of [...page.links, ...page.alternates]) {
    linksChecked++;
    // Server-rendered routes (the /waitlist redirects) have no built HTML, so
    // only flag a target that also has no file on disk under public/.
    if (pages.has(target)) continue;
    if (existsSync(join(DIST_DIR, target.replace(/^\//, '')))) continue;
    if (existsSync(join(ROOT, 'public', target.replace(/^\//, '')))) continue;
    errors.push(`${route}: links to ${target}, which was not built.`);
  }
}

/* ------------------------------ report ------------------------------ */

if (errors.length) {
  console.error('✗ Internal link check failed:\n');
  for (const e of errors) console.error(`  - ${e}`);
  console.error('');
  process.exit(1);
}

const allowed = [...ORPHAN_ALLOWLIST].map(([p, why]) => `${p} (${why})`).join(', ');
console.log(
  `✓ Internal link check passed (${pages.size} pages, ${linksChecked} internal links, ` +
    `${leaksChecked} cross-locale links verified, ${orphans} orphans)` +
    (allowed ? `\n  known orphans, allowlisted: ${allowed}` : ''),
);
