/**
 * Generates Markdown mirror files from the shared data sources.
 * Output:
 * - public/pages/{slug}.md  (legacy LLM resource paths)
 * - public/index.md, public/workers/index.md, public/workflow-demo/index.md  (direct URL mirrors)
 * - public/workers/{slug}/index.md  (direct URL mirrors per worker)
 *
 * Run: npx tsx scripts/generate-page-markdown.ts  (or via prebuild)
 *
 * Single source of truth:
 * - Homepage: src/data/pages.ts
 * - Worker profiles: src/data/workerProfiles.ts
 */
import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { homePage } from '../src/data/pages';
import { workerProfiles } from '../src/data/workerProfiles';

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
/*  Render homepage as Markdown                                         */
/* ------------------------------------------------------------------ */
function renderHomepageMarkdown() {
  const p = homePage;
  const lines: string[] = [
    `---`,
    `title: "${p.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${p.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${SITE_URL}/"`,
    `focus: "${p.focus}"`,
    `---`,
    ``,
    `# ${p.pageTitle}`,
    ``,
    p.metaDescription,
    ``,
    `---`,
    ``,
    p.summary,
    ``,
  ];

  for (const section of p.sections) {
    if (section.id === 'hero') continue;
    lines.push(`## ${section.heading}`, ``);
    if (section.body) lines.push(section.body, ``);
    if (section.note) lines.push(`> ${section.note}`, ``);
    if (section.items?.length) {
      for (const item of section.items) {
        const text = item.body ? `${item.title}: ${item.body}` : item.title;
        lines.push(`- ${text}`);
      }
      lines.push(``);
    }
  }

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
    `title: "WordPresto workflow demo | Editorial and search intelligence in one workflow"`,
    `description: "A senior writer's rough notes move through WordPresto from brief, structure and voice profile to review, metadata and CMS handoff."`,
    `canonical: "${SITE_URL}/workflow-demo/"`,
    `focus: "Workflow demo"`,
    `---`,
    ``,
    `# See rough thinking become review-ready`,
    ``,
    `A senior writer's messy notes move through WordPresto. Brief, voice profile, structure, search intelligence, review and handoff work together without handing judgement to a machine.`,
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
// Content Workers are every profile that is not on the SEO team. SEO Workers
// are listed separately so each directory mirror matches its HTML page.
const contentProfiles = workerProfiles.filter((w) => w.team !== 'seo');
const seoProfiles = workerProfiles.filter((w) => w.team === 'seo');

function renderWorkersIndexMarkdown() {
  const lines: string[] = [
    `---`,
    `title: "Content workflow Workers | WordPresto"`,
    `description: "Meet the specialist Workers in the WordPresto content workflow: from content analysis and brief building to voice review, approval reporting and CMS handoff."`,
    `canonical: "${SITE_URL}/workers/"`,
    `---`,
    ``,
    `# Specialist Workers for every stage of the content workflow.`,
    ``,
    `WordPresto brings in the right specialists for the stage you are at, so each piece of content gets the support it actually needs.`,
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
    `title: "SEO Workers for search, structure and authority | WordPresto"`,
    `description: "Meet the SEO Workers in the WordPresto workflow: SEO title and metadata, search snippets, schema, technical health, trust and author credibility, and evidence gaps. Review-led and human-approved."`,
    `canonical: "${SITE_URL}/workers/seo/"`,
    `---`,
    ``,
    `# SEO Workers for search, structure and authority.`,
    ``,
    `The SEO Workers help writers and editorial teams make content easier to understand, structure, retrieve and approve. They review metadata, search snippets, schema, technical health, trust and evidence while the writer is still shaping the work. Every output is for human review.`,
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

// Homepage
const homeMd = renderHomepageMarkdown();
writeMirror('pages/index.md', homeMd);
writeMirror('index.md', homeMd);

// Workflow demo
const workflowDemoMd = renderWorkflowDemoMarkdown();
writeMirror('pages/workflow-demo.md', workflowDemoMd);
writeMirror('workflow-demo/index.md', workflowDemoMd);

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
