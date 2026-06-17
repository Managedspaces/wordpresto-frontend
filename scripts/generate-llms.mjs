/**
 * Generates:
 *   public/llms.txt        — curated LLM entry point (llms.txt standard)
 *   public/llm.txt         — alias of llms.txt
 *   public/llms-full.txt   — consolidated full Markdown context for agents
 *   public/sitemap.md      — human and agent-readable Markdown sitemap
 *
 * Run: node scripts/generate-llms.mjs  (or via prebuild)
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const PAGES_DIR = join(PUBLIC_DIR, 'pages');
const WORKERS_DIR = join(PAGES_DIR, 'workers');
const SITE_URL = 'https://wordpresto.com';

mkdirSync(PUBLIC_DIR, { recursive: true });

function readGeneratedMarkdown(relativePath) {
  const filePath = join(PUBLIC_DIR, relativePath);
  if (!existsSync(filePath)) return '';
  return readFileSync(filePath, 'utf8').trim();
}

function stripFrontmatter(markdown) {
  return markdown.replace(/^---[\s\S]*?---\s*/, '').trim();
}

function extractTitle(markdown, fallback) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() ?? fallback;
}

function extractDescription(markdown) {
  const match = markdown.match(/^description:\s+"(.+)"$/m);
  return match?.[1]?.trim() ?? '';
}

const workerFiles = existsSync(WORKERS_DIR)
  ? readdirSync(WORKERS_DIR)
      .filter((f) => f.endsWith('.md') && f !== 'index.md')
      .sort((a, b) => a.localeCompare(b))
  : [];

const pageResources = [
  {
    title: 'Home',
    htmlPath: '/',
    markdownPath: '/index.md',
    legacyMarkdownPath: '/pages/index.md',
    sourcePath: 'pages/index.md',
    focus: 'Overview of WordPresto, the content engine behind better publishing workflows.',
  },
  {
    title: 'Workflow demo',
    htmlPath: '/workflow-demo/',
    markdownPath: '/workflow-demo/index.md',
    legacyMarkdownPath: '/pages/workflow-demo.md',
    sourcePath: 'pages/workflow-demo.md',
    focus: 'Step-by-step demo showing rough thinking becoming review-ready content.',
  },
  {
    title: 'Workers directory',
    htmlPath: '/workers/',
    markdownPath: '/workers/index.md',
    legacyMarkdownPath: '/pages/workers/index.md',
    sourcePath: 'pages/workers/index.md',
    focus: 'Directory of the specialist Workers used in the WordPresto content workflow.',
  },
];

const workerResources = workerFiles.map((file) => {
  const slug = file.replace(/\.md$/, '');
  const markdown = readGeneratedMarkdown(`pages/workers/${file}`);
  return {
    title: extractTitle(markdown, slug),
    htmlPath: `/workers/${slug}/`,
    markdownPath: `/workers/${slug}/index.md`,
    legacyMarkdownPath: `/pages/workers/${file}`,
    sourcePath: `pages/workers/${file}`,
    focus: extractDescription(markdown) || 'Worker profile in the WordPresto content workflow.',
  };
});

const allResources = [...pageResources, ...workerResources];

/* ------------------------------------------------------------------ */
/*  llms.txt                                                            */
/* ------------------------------------------------------------------ */
const llmsLines = [
  '# WordPresto',
  '',
  '> WordPresto is the content engine behind better publishing workflows.',
  '',
  'WordPresto helps copywriters, business owners, website teams and agencies plan, brief, write, review, improve, approve and prepare content before it reaches a CMS, website or client.',
  '',
  'The product is review-led. Workers assist with structured content work, but humans retain judgement and final approval. WordPresto is not a chatbot product, not generic AI content generation, and not blind autopilot publishing.',
  '',
  '## Agent guidance',
  '',
  '- Prefer the Markdown URLs listed here over scraping HTML.',
  '- Use direct Markdown mirrors first: `/index.md`, `/workers/index.md`, `/workers/{slug}/index.md`.',
  '- Use `/llms-full.txt` when you need consolidated context in one file.',
  '- Do not assume public marketing pages expose write, publish, commerce, auth or CMS APIs unless a documented API says so.',
  '- Publishing and editing are not live capabilities on this public marketing site.',
  '',
  '## Core pages',
  '',
];

for (const resource of pageResources) {
  llmsLines.push(`- [${resource.title}](${SITE_URL}${resource.markdownPath}): ${resource.focus}`);
}

llmsLines.push('', '## Worker profiles', '');
for (const resource of workerResources) {
  llmsLines.push(`- [${resource.title}](${SITE_URL}${resource.markdownPath}): ${resource.focus}`);
}

llmsLines.push(
  '',
  '## Complete context',
  '',
  `- [Full Markdown context](${SITE_URL}/llms-full.txt): Consolidated public site context.`,
  `- [Markdown sitemap](${SITE_URL}/sitemap.md): Human and agent-readable route index.`,
  `- [XML sitemap](${SITE_URL}/sitemap.xml): Search crawler sitemap.`,
  `- [Agent skills](${SITE_URL}/.well-known/agent-skills/index.json): Public read-only guidance for agents using WordPresto content.`,
  `- [MCP card](${SITE_URL}/.well-known/mcp.json): Discovery metadata for public read-only resources.`,
  '',
  '## Canonical domain',
  '',
  SITE_URL,
  '',
);

/* ------------------------------------------------------------------ */
/*  sitemap.md                                                          */
/* ------------------------------------------------------------------ */
const sitemapLines = [
  '# WordPresto Markdown sitemap',
  '',
  'A readable index of public WordPresto pages and their Markdown mirrors.',
  '',
  '## Public pages',
  '',
];

for (const resource of allResources) {
  sitemapLines.push(
    `### ${resource.title}`,
    '',
    `- HTML: ${SITE_URL}${resource.htmlPath}`,
    `- Markdown: ${SITE_URL}${resource.markdownPath}`,
    `- Legacy Markdown: ${SITE_URL}${resource.legacyMarkdownPath}`,
    `- Focus: ${resource.focus}`,
    '',
  );
}

sitemapLines.push(
  '## Agent discovery',
  '',
  `- LLM index: ${SITE_URL}/llms.txt`,
  `- Full context: ${SITE_URL}/llms-full.txt`,
  `- XML sitemap: ${SITE_URL}/sitemap.xml`,
  `- MCP card: ${SITE_URL}/.well-known/mcp.json`,
  `- Agent skills: ${SITE_URL}/.well-known/agent-skills/index.json`,
  '',
);

/* ------------------------------------------------------------------ */
/*  llms-full.txt                                                       */
/* ------------------------------------------------------------------ */
const fullLines = [
  '# WordPresto full Markdown context',
  '',
  'This file consolidates the main public WordPresto marketing and Worker content for AI agents. Prefer individual Markdown mirrors when you only need one page.',
  '',
  '## Site index',
  '',
  ...allResources.map((r) => `- ${r.title}: ${SITE_URL}${r.markdownPath}`),
  '',
  '---',
  '',
];

for (const resource of allResources) {
  const markdown = stripFrontmatter(readGeneratedMarkdown(resource.sourcePath));
  if (!markdown) continue;
  fullLines.push(
    `# ${resource.title}`,
    '',
    `Canonical: ${SITE_URL}${resource.htmlPath}`,
    `Markdown: ${SITE_URL}${resource.markdownPath}`,
    '',
    markdown,
    '',
    '---',
    '',
  );
}

/* ------------------------------------------------------------------ */
/*  Write all outputs                                                   */
/* ------------------------------------------------------------------ */
const llmsContent = llmsLines.join('\n');
const outputs = [
  ['llms.txt', llmsContent],
  ['llm.txt', llmsContent],
  ['sitemap.md', sitemapLines.join('\n')],
  ['llms-full.txt', fullLines.join('\n')],
];

for (const [filename, content] of outputs) {
  const outPath = join(PUBLIC_DIR, filename);
  writeFileSync(outPath, content, 'utf8');
  console.log(`✓ Generated: ${outPath}`);
}
