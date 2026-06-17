/**
 * Generates Markdown mirror files from the shared data sources.
 * Output: public/pages/{slug}.md
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
const OUT_DIR = join(ROOT, 'public', 'pages');

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(join(OUT_DIR, 'workers'), { recursive: true });

/* ------------------------------------------------------------------ */
/*  Render homepage as Markdown                                         */
/* ------------------------------------------------------------------ */
function renderHomepageMarkdown() {
  const p = homePage;
  const lines: string[] = [
    `---`,
    `title: "${p.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${p.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "https://wordpresto.com/"`,
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

  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/*  Render worker profile as Markdown                                   */
/* ------------------------------------------------------------------ */
function renderWorkerMarkdown(w: (typeof workerProfiles)[number]) {
  const output = w.heroTagPills.output.replace('Output · ', '');
  const canonicalUrl = `https://wordpresto.com/workers/${w.slug}/`;

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
function renderWorkersIndexMarkdown() {
  const lines: string[] = [
    `---`,
    `title: "Content workflow Workers | WordPresto"`,
    `description: "Meet the specialist Workers in the WordPresto content workflow: from content analysis and brief building to voice review, approval reporting and CMS handoff."`,
    `canonical: "https://wordpresto.com/workers/"`,
    `---`,
    ``,
    `# Specialist Workers for every stage of the content workflow.`,
    ``,
    `WordPresto brings in the right specialists for the stage you are at, so each piece of content gets the support it actually needs.`,
    ``,
    `---`,
    ``,
    `## Worker directory (${workerProfiles.length} specialist roles)`,
    ``,
  ];

  for (const w of workerProfiles) {
    const output = w.heroTagPills.output.replace('Output · ', '');
    const canonicalUrl = `https://wordpresto.com/workers/${w.slug}/`;
    lines.push(
      `### ${w.name} — ${w.role}`,
      ``,
      `- Stage: ${w.stage}`,
      `- Output: ${output}`,
      `- URL: ${canonicalUrl}`,
      `- Markdown: https://wordpresto.com/pages/workers/${w.slug}.md`,
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
const homeMd = renderHomepageMarkdown();
const homeOutPath = join(OUT_DIR, 'index.md');
writeFileSync(homeOutPath, homeMd, 'utf8');
console.log(`✓ Markdown mirror: ${homeOutPath}`);

const workersIndexMd = renderWorkersIndexMarkdown();
const workersIndexPath = join(OUT_DIR, 'workers', 'index.md');
writeFileSync(workersIndexPath, workersIndexMd, 'utf8');
console.log(`✓ Markdown mirror: ${workersIndexPath}`);

for (const w of workerProfiles) {
  const md = renderWorkerMarkdown(w);
  const outPath = join(OUT_DIR, 'workers', `${w.slug}.md`);
  writeFileSync(outPath, md, 'utf8');
  console.log(`✓ Markdown mirror: ${outPath}`);
}
