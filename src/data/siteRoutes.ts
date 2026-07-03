/**
 * Single source of truth for WordPresto's top-level routes.
 *
 * Everything except the data-driven Worker profile pages lives here. The
 * Worker profiles come from `workerProfiles` and are appended by each sitemap,
 * so adding a Worker updates both sitemaps automatically.
 *
 * Both sitemaps consume this list, so a page can never be present in one and
 * missing from the other:
 *   - XML sitemap:  src/pages/sitemap.xml.ts     (entries where `inXml` is true)
 *   - HTML sitemap: src/pages/sitemap/index.astro (grouped by `group`)
 *
 * When you add a public page, add it here once.
 *
 * Auth-gated routes (/admin/*) and API endpoints (/api/*) are intentionally
 * omitted: they should not be advertised to crawlers or agents.
 */

import { LOCALES, DEFAULT_LOCALE, localeHref } from '@/i18n/locales';
import { TEAM_ORDER, TEAM_META } from '@/data/workerRegistry';

export type RouteGroup = 'main' | 'machine';

export type ChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export interface SiteRoute {
  /** Path relative to the site root, with a trailing slash for pages. */
  path: string;
  /** Human-readable label for the visible HTML sitemap. */
  label: string;
  /** Short description for the visible HTML sitemap. */
  description: string;
  /** Which section of the visible HTML sitemap this route belongs to. */
  group: RouteGroup;
  /** Whether to emit a <url> entry in sitemap.xml. */
  inXml: boolean;
  /** XML <changefreq>. Only used when `inXml` is true. */
  changefreq?: ChangeFreq;
  /** XML <priority>. Only used when `inXml` is true. */
  priority?: number;
  /** Markdown mirror URL, when the page has one. */
  markdown?: string;
}

export const siteRoutes: SiteRoute[] = [
  {
    path: '/',
    label: 'Home',
    description: 'The content engine behind better publishing workflows.',
    group: 'main',
    inXml: true,
    changefreq: 'weekly',
    priority: 1.0,
    markdown: '/index.md',
  },
  // Homepage locale variants (src/data/i18n/home.ts) — only the homepage is
  // translated so far; see context.md for the rest-of-site rollout plan.
  ...LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).map((l) => ({
    path: `/${l.path}/`,
    label: `Home (${l.label})`,
    description: 'The content engine behind better publishing workflows.',
    group: 'main' as const,
    inXml: true,
    changefreq: 'weekly' as const,
    priority: 0.9,
    markdown: `/${l.path}/index.md`,
  })),
  {
    path: '/workers/',
    label: 'Workers',
    description: 'All specialist Workers in the content workflow.',
    group: 'main',
    inXml: true,
    changefreq: 'weekly',
    priority: 0.9,
    markdown: '/workers/index.md',
  },
  {
    path: '/workers/seo/',
    label: 'SEO Workers',
    description: 'The SEO Workers directory: search, structure, schema, trust and evidence.',
    group: 'main',
    inXml: true,
    changefreq: 'weekly',
    priority: 0.9,
    markdown: '/workers/seo/index.md',
  },
  // Workers directory locale variants (src/data/i18n/workersDirectory.ts).
  // No Markdown mirror yet: these pages mostly list Worker profiles, which
  // stay English-only until the dedicated Worker-profile translation pass.
  ...LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).flatMap((l) => [
    {
      path: localeHref(l.code, '/workers/'),
      label: `Workers (${l.label})`,
      description: 'All specialist Workers in the content workflow.',
      group: 'main' as const,
      inXml: true,
      changefreq: 'weekly' as const,
      priority: 0.8,
    },
    {
      path: localeHref(l.code, '/workers/seo/'),
      label: `SEO Workers (${l.label})`,
      description: 'The SEO Workers directory: search, structure, schema, trust and evidence.',
      group: 'main' as const,
      inXml: true,
      changefreq: 'weekly' as const,
      priority: 0.8,
    },
  ]),
  {
    path: '/specialists/',
    label: 'Specialists',
    description: 'The four specialist teams behind Emma: Content Production, SEO, Operations and Approval / Governance.',
    group: 'main',
    inXml: true,
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    path: '/specialists/content-production/',
    label: 'Content Production Team',
    description: 'Plans, drafts, rewrites and proofs the copy, turning briefs into structured, ready content.',
    group: 'main',
    inXml: true,
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    path: '/specialists/seo/',
    label: 'SEO Team',
    description: 'Works search intent, structure, technical signals, evidence and internal relationships into the content.',
    group: 'main',
    inXml: true,
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    path: '/specialists/operations-management/',
    label: 'Operations / Management',
    description: 'Coordinates the review flow and keeps every piece of work ready for a human decision.',
    group: 'main',
    inXml: true,
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/specialists/approval-governance/',
    label: 'Approval / Governance Team',
    description: 'Checks risk, evidence, approval state and whether proposed changes are ready for the Editor.',
    group: 'main',
    inXml: true,
    changefreq: 'weekly',
    priority: 0.6,
  },
  // Specialists hub + team page locale variants (src/data/i18n/specialists.ts).
  ...LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).flatMap((l) => [
    {
      path: localeHref(l.code, '/specialists/'),
      label: `Specialists (${l.label})`,
      description: 'The four specialist teams behind Emma: Content Production, SEO, Operations and Approval / Governance.',
      group: 'main' as const,
      inXml: true,
      changefreq: 'weekly' as const,
      priority: 0.7,
    },
    ...TEAM_ORDER.map((id) => ({
      path: localeHref(l.code, TEAM_META[id].href),
      label: `${TEAM_META[id].name} (${l.label})`,
      description: TEAM_META[id].summary,
      group: 'main' as const,
      inXml: true,
      changefreq: 'weekly' as const,
      priority: 0.6,
    })),
  ]),
  {
    // noindex (see src/pages/workflow-demo/index.astro): listed for humans on
    // the HTML sitemap, but kept out of sitemap.xml so search engines are not
    // asked to index a page marked noindex.
    path: '/workflow-demo/',
    label: 'Workflow demo',
    description: 'See a full content workflow run end to end.',
    group: 'main',
    inXml: false,
    markdown: '/workflow-demo/index.md',
  },
  {
    // noindex (see src/pages/waitlist.astro): HTML sitemap only, not in
    // sitemap.xml.
    path: '/waitlist/',
    label: 'Join the waitlist',
    description: 'Early access application.',
    group: 'main',
    inXml: false,
  },
  // Waitlist locale variants (src/data/i18n/waitlist.ts).
  ...LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).map((l) => ({
    path: `/${l.path}/waitlist/`,
    label: `Join the waitlist (${l.label})`,
    description: 'Early access application.',
    group: 'main' as const,
    inXml: false,
  })),
  {
    path: '/prestobot/',
    label: 'WordPrestoBot',
    description: 'About WordPrestoBot, the Word Presto web crawler, and how to control it.',
    group: 'main',
    inXml: true,
    changefreq: 'monthly',
    priority: 0.4,
    markdown: '/prestobot/index.md',
  },
  // Prestobot locale variants (src/data/i18n/prestobot.ts). No Markdown
  // mirror per locale yet — the generator's prestobot renderer has a lot of
  // hardcoded English prose beyond the StaticPageMeta fields; revisit in the
  // same follow-up pass as /workers/, /workflow-demo/ and /sitemap/ mirrors.
  ...LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).map((l) => ({
    path: localeHref(l.code, '/prestobot/'),
    label: `WordPrestoBot (${l.label})`,
    description: 'About WordPrestoBot, the Word Presto web crawler, and how to control it.',
    group: 'main' as const,
    inXml: true,
    changefreq: 'monthly' as const,
    priority: 0.3,
  })),
  {
    path: '/sitemap/',
    label: 'Site map',
    description: 'Every page on wordpresto.com, organised by section.',
    group: 'main',
    inXml: true,
    changefreq: 'monthly',
    priority: 0.3,
    markdown: '/sitemap.md',
  },
  {
    path: '/privacy/',
    label: 'Privacy Policy',
    description: 'How Word Presto collects, uses and protects personal data.',
    group: 'main',
    inXml: true,
    changefreq: 'yearly',
    priority: 0.2,
  },
  {
    path: '/terms/',
    label: 'Terms & Conditions',
    description: 'The terms that govern use of wordpresto.com and the Word Presto application.',
    group: 'main',
    inXml: true,
    changefreq: 'yearly',
    priority: 0.2,
  },
  {
    path: '/cookies/',
    label: 'Cookie Policy',
    description: 'What cookies wordpresto.com uses, why, and how to control them.',
    group: 'main',
    inXml: true,
    changefreq: 'yearly',
    priority: 0.2,
  },
  {
    path: '/fair-use/',
    label: 'Fair Use Policy',
    description: 'What is and is not acceptable use of the Word Presto content workflow platform.',
    group: 'main',
    inXml: true,
    changefreq: 'yearly',
    priority: 0.2,
  },

  // Machine-readable resources: surfaced on the HTML sitemap, not in sitemap.xml.
  {
    path: '/sitemap.xml',
    label: 'sitemap.xml',
    description: 'XML sitemap for search engines. Updates automatically when pages are added.',
    group: 'machine',
    inXml: false,
  },
  {
    path: '/sitemap.md',
    label: 'sitemap.md',
    description: 'Human and agent-readable Markdown route index.',
    group: 'machine',
    inXml: false,
  },
  {
    path: '/llms.txt',
    label: 'llms.txt',
    description: 'Site index for large language models.',
    group: 'machine',
    inXml: false,
  },
  {
    path: '/llms-full.txt',
    label: 'llms-full.txt',
    description: 'Consolidated full Markdown context for agents.',
    group: 'machine',
    inXml: false,
  },
];

/** Routes that should appear in sitemap.xml. */
export const xmlRoutes = siteRoutes.filter((r) => r.inXml);

/** Primary pages, for the top of the visible HTML sitemap. */
export const mainRoutes = siteRoutes.filter((r) => r.group === 'main');

/** Machine-readable resources, for the foot of the visible HTML sitemap. */
export const machineRoutes = siteRoutes.filter((r) => r.group === 'machine');
