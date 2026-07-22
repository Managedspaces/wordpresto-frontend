/**
 * Generates Markdown mirror files from the shared data sources.
 * Output:
 * - public/pages/{slug}.md  (legacy LLM resource paths, English only)
 * - public/index.md, public/workers/index.md, public/workflow-demo/index.md  (direct URL mirrors)
 * - public/{locale}/index.md  (homepage mirror per non-English locale, e.g. public/pt/index.md)
 * - public/workers/{slug}/index.md  (direct URL mirrors per worker)
 *
 * Run: npx tsx scripts/generate-page-markdown.ts  (or via prebuild)
 *
 * Single source of truth:
 * - Homepage: src/data/i18n/home.ts (all locales) — see context.md for the i18n plan
 * - Worker profiles: src/data/workerProfiles.ts (English only for now — see context.md, "Phase 2/3")
 */
import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { homeContent, type HomeContent } from '../src/data/i18n/home';
import { LOCALES, DEFAULT_LOCALE, localeHref, type Locale } from '../src/i18n/locales';
import { TOTAL_SPECIALISTS } from '../src/data/workerRegistry';
import { workerProfiles } from '../src/data/workerProfiles';
import { workflowDemo } from '../src/data/staticPages';
import { workersHubContent, seoWorkersContent } from '../src/data/i18n/workersDirectory';
import { prestobotContent } from '../src/data/i18n/prestobot';
import { pricingContent } from '../src/data/i18n/pricing';

const workersDirectory = workersHubContent.en;
const seoWorkersDirectory = seoWorkersContent.en;
const prestobot = prestobotContent.en;

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const OUT_DIR = join(PUBLIC_DIR, 'pages');
const SITE_URL = 'https://wordpresto.com';

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(join(OUT_DIR, 'workers'), { recursive: true });

function writeMirror(relativePath: string, content: string) {
  const outPath = join(PUBLIC_DIR, relativePath);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, content, 'utf8');
  console.log(`✓ Markdown mirror: ${outPath}`);
}

/* ------------------------------------------------------------------ */
/*  Render homepage as Markdown, one per locale                        */
/* ------------------------------------------------------------------ */
// Note: the specialist-bench team names/summaries (workerRegistry.ts) are
// still English-only (see context.md, "Phase 2"), so they render in English
// inside every locale's mirror too, matching the live page for now.
function renderHomepageMarkdown(locale: Locale, t: HomeContent) {
  const canonical = locale === DEFAULT_LOCALE ? `${SITE_URL}/` : `${SITE_URL}${localeHref(locale, '/')}`;
  const strip = (html: string) => html.replace(/&rsquo;/g, '’').replace(/&ndash;/g, '–').replace(/<[^>]+>/g, '');

  const lines: string[] = [
    `---`,
    `title: "${t.seo.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${t.seo.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${canonical}"`,
    `lang: "${locale}"`,
    `---`,
    ``,
    `# ${t.hero.h1Prefix}${t.hero.h1Agentic}${t.hero.h1Suffix}`,
    ``,
    t.seo.metaDescription,
    ``,
    `---`,
    ``,
    t.hero.body,
    ``,
    `> ${t.hero.approvalNoteLine1} ${t.hero.approvalNoteLine2}`,
    ``,
    `## ${t.operatingModel.h2}`,
    ``,
    t.operatingModel.body,
    ``,
    `> ${t.operatingModel.note}`,
    ``,
    ...t.operatingModel.afterItems.map((item) => `- ${item}`),
    ``,
    `## ${t.emmaDesk.h2}`,
    ``,
    ...t.emmaDesk.cards.flatMap((c) => [`- **${c.title}**: ${c.body}`]),
    ``,
    `## ${strip(t.commitments.h2)}`,
    ``,
    t.commitments.body,
    ``,
    ...t.commitments.items.map((it) => `- **${it.title}**: ${strip(it.body)}`),
    ``,
    `## ${t.canvas.h2}`,
    ``,
    t.canvas.body,
    ``,
    ...t.canvas.points.map((pt) => `- ${pt}`),
    ``,
    `## ${TOTAL_SPECIALISTS}${t.specialists.h2Suffix}`,
    ``,
    t.specialists.body,
    ``,
    `> ${strip(t.specialists.note)}`,
    ``,
    `## ${t.languages.h2}`,
    ``,
    t.languages.body,
    ``,
    ...t.languages.editors.map((e) => `- **${e.name}** — ${e.city} · ${e.lang}`),
    ``,
    `## ${t.approval.h2}`,
    ``,
    t.approval.body,
    ``,
    `> ${t.approval.finalLine}`,
    ``,
    `## ${t.publish.h2}`,
    ``,
    t.publish.body,
    ``,
    `- ${t.publish.socialLabel}: LinkedIn, X, Facebook, Instagram`,
    `- ${t.publish.cmsLabel}: WordPress, Sanity, Astro`,
    ``,
    `> ${t.publish.footerLead} ${t.publish.footerEmphasis}. ${t.publish.footerTail}`,
    ``,
    `## ${t.cta.h2}`,
    ``,
    t.cta.body,
    ``,
  ];

  lines.push(
    `## Agent-readable resources`,
    ``,
    `- LLM index: ${SITE_URL}/llms.txt`,
    `- Full Markdown context: ${SITE_URL}/llms-full.txt`,
    `- Markdown sitemap: ${SITE_URL}/sitemap.md`,
    `- Workers directory: ${SITE_URL}/workers/index.md`,
    ``,
  );

  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/*  Render workflow demo as Markdown                                    */
/* ------------------------------------------------------------------ */
function renderWorkflowDemoMarkdown() {
  return [
    `---`,
    `title: "${workflowDemo.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${workflowDemo.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${SITE_URL}/workflow-demo/"`,
    `focus: "Workflow demo"`,
    `---`,
    ``,
    `# ${workflowDemo.h1}`,
    ``,
    workflowDemo.intro,
    ``,
    `## What the demo shows`,
    ``,
    `- A rough practitioner note becomes a structured content signal map.`,
    `- Editorial and search intelligence tracks work alongside each other.`,
    `- Voice, evidence, structure, review and handoff happen before publishing.`,
    `- Nothing is published automatically. Human approval is required first.`,
    ``,
    `## Workflow stages`,
    ``,
    `- Writer primer: messy source notes and preserved phrases.`,
    `- Content analysis: argument, audience tensions, key phrases and evidence gaps.`,
    `- Search intent: reader need, query family, journey stage and snippet opportunity.`,
    `- Brief and structure: a practical plan before drafting begins.`,
    `- Voice profile: register, phrases to protect and phrases to avoid.`,
    `- Draft and section review: shaping work without losing the writer's judgement.`,
    `- Evidence and approval: surfacing what is ready, weak or risky.`,
    `- CMS handoff: preparing approved content for a website, CMS or client workflow.`,
    ``,
    `## Boundary`,
    ``,
    `The demo is intentionally review-led. WordPresto workers assist with structure, review, improvement and handoff, but people approve what moves forward.`,
    ``,
  ].join('\n');
}

/* ------------------------------------------------------------------ */
/*  Render WordPrestoBot crawler page as Markdown                       */
/* ------------------------------------------------------------------ */
function renderPrestobotMarkdown() {
  return [
    `---`,
    `title: "${prestobot.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${prestobot.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${SITE_URL}/prestobot/"`,
    `focus: "WordPrestoBot web crawler"`,
    `---`,
    ``,
    `# ${prestobot.h1}`,
    ``,
    prestobot.intro,
    ``,
    `You will have seen something like this in your access logs:`,
    ``,
    '```',
    `Mozilla/5.0 (compatible; WordPrestoBot/1.0; +https://wordpresto.com/prestobot)`,
    '```',
    ``,
    `## Why it visited your site`,
    ``,
    `WordPrestoBot only fetches pages on behalf of a Word Presto user. In almost every case that is one of two things:`,
    ``,
    `- A site owner analysing their own site, running an SEO or content review of pages they control.`,
    `- A read-only competitive or research check, a user looking at publicly available pages to understand how a topic is covered.`,
    ``,
    `It reads public HTML to extract SEO and content signals: titles, headings, metadata, links and structured data. That is it.`,
    ``,
    `## What it does, and does not, do`,
    ``,
    `WordPrestoBot does:`,
    ``,
    `- request publicly accessible pages over normal HTTPS,`,
    `- identify itself honestly in the User-Agent on every request,`,
    `- respect robots.txt,`,
    `- crawl gently, with modest request rates, timeouts and response-size limits.`,
    ``,
    `WordPrestoBot does not:`,
    ``,
    `- log in, submit forms, or interact with your site,`,
    `- make any changes, post content, or place orders,`,
    `- attempt to access private, gated, or admin areas,`,
    `- collect personal data or bypass access controls.`,
    ``,
    `## How to control it`,
    ``,
    `One robots.txt rule controls every Word Presto crawl, because all of our crawlers share the single token WordPrestoBot.`,
    ``,
    `Block it entirely:`,
    ``,
    '```',
    `User-agent: WordPrestoBot`,
    `Disallow: /`,
    '```',
    ``,
    `Block only specific areas:`,
    ``,
    '```',
    `User-agent: WordPrestoBot`,
    `Disallow: /private/`,
    `Disallow: /checkout/`,
    '```',
    ``,
    `Or set a crawl delay:`,
    ``,
    '```',
    `User-agent: WordPrestoBot`,
    `Crawl-delay: 10`,
    '```',
    ``,
    `Changes take effect on our next visit. We honour robots.txt, so a disallow is respected without any need to contact us.`,
    ``,
    `## How to recognise it`,
    ``,
    `- User-Agent token: WordPrestoBot`,
    `- Every request links back here: +https://wordpresto.com/prestobot`,
    `- Some fetches add a short note describing the specific action, for example "read-only single page" or "sitemap and llms.txt only". Same token, same rules.`,
    ``,
    `If a request claims to be WordPrestoBot but does not link to this page, treat it as spoofed and feel free to block it.`,
    ``,
    `## Questions or concerns?`,
    ``,
    `If WordPrestoBot is causing problems, or you would like it to stop visiting, the fastest fix is the robots.txt rule above. You can also reach us at hello@wordpresto.com. Tell us the domain and we will help.`,
    ``,
  ].join('\n');
}

/* ------------------------------------------------------------------ */
/*  Render pricing page as Markdown                                     */
/* ------------------------------------------------------------------ */
// Deliberately number-free for plan prices: the live page fetches plans and
// top-up packs from the app's public pricing API at load time, so any prices
// written here would go stale. The mirror describes the pricing model in
// prose and points readers at the live page. The example workflow credit
// costs ARE stable marketing copy (same source the page uses), so they stay.
function renderPricingMarkdown() {
  const pricing = pricingContent.en;
  return [
    `---`,
    `title: "${pricing.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${pricing.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${SITE_URL}/pricing/"`,
    `focus: "Pricing, credit plans and top-up packs"`,
    `---`,
    ``,
    `# ${pricing.h1}`,
    ``,
    pricing.intro,
    ``,
    `## How pricing works`,
    ``,
    `- New accounts can start with a short paid trial that gives full platform access, then converts to the entry plan automatically. A card is required, and it can be cancelled before the trial ends. The exact trial price, length and included credits are shown live on the pricing page.`,
    `- Word Presto is priced as monthly or annual plans, each including a monthly pool of credits.`,
    `- Credits are the one currency across the workflow: planning, briefs, drafting, review, SEO research, site crawling and analysis, publishing preparation and social publishing all draw from the same pool.`,
    `- Annual billing is available on plans that offer it, at a saving over paying monthly.`,
    `- One-time top-up packs add extra credits for heavier months without a second subscription.`,
    ``,
    `Current plan prices, included credits and top-up pack prices are served live from the Word Presto app on the pricing page itself: ${SITE_URL}/pricing/. They are not mirrored here because this file would go stale.`,
    ``,
    `## ${pricing.rateH2}`,
    ``,
    pricing.rateBody,
    ``,
    ...pricing.exampleCosts.map(
      (item) =>
        `- ${item.label}: ${item.credits.toLocaleString('en-GB')} credits${item.note ? ` (${item.note})` : ''}`,
    ),
    ``,
    `## Notes`,
    ``,
    pricing.footnoteUsage,
    ``,
    pricing.footnoteVat,
    ``,
    `## Early access`,
    ``,
    pricing.ctaBody,
    ``,
    `Join now: ${SITE_URL}/waitlist`,
    ``,
  ].join('\n');
}

/* ------------------------------------------------------------------ */
/*  Render worker profile as Markdown                                   */
/* ------------------------------------------------------------------ */
function renderWorkerMarkdown(w: (typeof workerProfiles)[number]) {
  const output = w.heroTagPills.output.replace('Output · ', '');
  const canonicalUrl = `${SITE_URL}/workers/${w.slug}/`;

  const lines: string[] = [
    `---`,
    `title: "${w.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${w.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${canonicalUrl}"`,
    `worker: "${w.name}"`,
    `role: "${w.role}"`,
    `stage: "${w.stage}"`,
    `output: "${output}"`,
    `---`,
    ``,
    `# ${w.h1}`,
    ``,
    w.metaDescription,
    ``,
    `---`,
    ``,
    w.heroPara1,
    ``,
    `## ${w.problemH2}`,
    ``,
    w.problemPara,
    ``,
    `## ${w.helpsH2}`,
    ``,
    w.helpsPara,
    ``,
    `### Checks`,
    ``,
  ];

  for (const item of w.checks) lines.push(`- ${item}`);
  lines.push(``, `### Improves`, ``);
  for (const item of w.improves) lines.push(`- ${item}`);
  lines.push(``, `### Prepares`, ``);
  for (const item of w.prepares) lines.push(`- ${item}`);
  lines.push(``, `### Surfaces for human review`, ``);
  for (const item of w.surfaces) lines.push(`- ${item}`);

  lines.push(``, `## ${w.ioH2}`, ``, `### Works from`, ``);
  for (const item of w.worksFrom) lines.push(`- ${item}`);
  lines.push(``, `### Produces`, ``);
  for (const item of w.produces) lines.push(`- ${item}`);

  lines.push(``, `## When to use ${w.name}`, ``);
  for (const s of w.scenarios) {
    lines.push(`### ${s.title}`, ``, s.description, ``);
  }

  lines.push(`## ${w.boundaryH2}`, ``, w.boundaryPara, ``, `### Boundary checklist`, ``);
  for (const item of w.boundaryChecklist) lines.push(`- ${item}`);

  lines.push(``, `### Will not`, ``);
  for (const item of w.willNot) lines.push(`- ${item.text}`);

  lines.push(``, `## ${w.relatedH2}`, ``);
  for (const rel of w.relatedWorkerIds) {
    const relProfile = workerProfiles.find((p) => p.id === rel.id);
    const label = relProfile ? `${relProfile.name} — ${relProfile.role}` : rel.id;
    lines.push(`- **${label}**: ${rel.description} Output: ${rel.outputLabel}.`);
  }

  lines.push(``);
  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/*  Render workers index as Markdown                                    */
/* ------------------------------------------------------------------ */
// Directory placement mirrors the HTML pages exactly: /workers/ and
// /workers/seo/ both render getWorkersByTeam() from workerRegistry.ts (the
// real org team), so the split here matches by `profile.team` too. Governance
// and operations profiles appear in neither list, matching the live pages.
const contentProfiles = workerProfiles.filter((w) => w.team === 'content');
const seoProfiles = workerProfiles.filter((w) => w.team === 'seo');

function renderWorkersIndexMarkdown() {
  const lines: string[] = [
    `---`,
    `title: "${workersDirectory.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${workersDirectory.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${SITE_URL}/workers/"`,
    `---`,
    ``,
    `# ${workersDirectory.h1}`,
    ``,
    workersDirectory.intro,
    ``,
    `See also the [SEO Workers directory](${SITE_URL}/workers/seo/).`,
    ``,
    `---`,
    ``,
    `## Content Worker directory (${contentProfiles.length} specialist roles)`,
    ``,
  ];

  for (const w of contentProfiles) {
    const output = w.heroTagPills.output.replace('Output · ', '');
    lines.push(
      `### ${w.name} — ${w.role}`,
      ``,
      `- Stage: ${w.stage}`,
      `- Output: ${output}`,
      `- URL: ${SITE_URL}/workers/${w.slug}/`,
      `- Markdown: ${SITE_URL}/workers/${w.slug}/index.md`,
      `- Legacy Markdown: ${SITE_URL}/pages/workers/${w.slug}.md`,
      ``,
      w.metaDescription,
      ``,
    );
  }

  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/*  Render SEO workers index as Markdown                                */
/* ------------------------------------------------------------------ */
function renderSeoWorkersIndexMarkdown() {
  const lines: string[] = [
    `---`,
    `title: "${seoWorkersDirectory.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${seoWorkersDirectory.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${SITE_URL}/workers/seo/"`,
    `---`,
    ``,
    `# ${seoWorkersDirectory.h1}`,
    ``,
    seoWorkersDirectory.intro,
    ``,
    `See also the [Content Workers directory](${SITE_URL}/workers/).`,
    ``,
    `---`,
    ``,
    `## SEO Worker directory (${seoProfiles.length} specialist roles)`,
    ``,
  ];

  for (const w of seoProfiles) {
    const output = w.heroTagPills.output.replace('Output · ', '');
    lines.push(
      `### ${w.name} — ${w.role}`,
      ``,
      `- Stage: ${w.stage}`,
      `- Output: ${output}`,
      `- URL: ${SITE_URL}/workers/${w.slug}/`,
      `- Markdown: ${SITE_URL}/workers/${w.slug}/index.md`,
      `- Legacy Markdown: ${SITE_URL}/pages/workers/${w.slug}.md`,
      ``,
      w.metaDescription,
      ``,
    );
  }

  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/*  Generate all files                                                  */
/* ------------------------------------------------------------------ */

// Homepage — English at the legacy root paths, every other locale at
// public/{locale}/index.md (matching its live route exactly).
for (const l of LOCALES) {
  const md = renderHomepageMarkdown(l.code, homeContent[l.code]);
  if (l.code === DEFAULT_LOCALE) {
    writeMirror('pages/index.md', md);
    writeMirror('index.md', md);
  } else {
    writeMirror(`${l.path}/index.md`, md);
  }
}

// Workflow demo
const workflowDemoMd = renderWorkflowDemoMarkdown();
writeMirror('pages/workflow-demo.md', workflowDemoMd);
writeMirror('workflow-demo/index.md', workflowDemoMd);

// WordPrestoBot crawler page
const prestobotMd = renderPrestobotMarkdown();
writeMirror('pages/prestobot.md', prestobotMd);
writeMirror('prestobot/index.md', prestobotMd);

// Pricing page
const pricingMd = renderPricingMarkdown();
writeMirror('pages/pricing.md', pricingMd);
writeMirror('pricing/index.md', pricingMd);

// Workers index (content)
const workersIndexMd = renderWorkersIndexMarkdown();
writeMirror('pages/workers/index.md', workersIndexMd);
writeMirror('workers/index.md', workersIndexMd);

// SEO workers index. Only the nested URL mirror is written: a flat
// pages/workers/seo.md would be picked up by the worker scan in generate-llms
// and mistaken for a Worker profile.
const seoWorkersIndexMd = renderSeoWorkersIndexMarkdown();
writeMirror('workers/seo/index.md', seoWorkersIndexMd);

// Worker profiles
for (const w of workerProfiles) {
  const md = renderWorkerMarkdown(w);
  writeMirror(`pages/workers/${w.slug}.md`, md);
  writeMirror(`workers/${w.slug}/index.md`, md);
}
