/**
 * Generates Markdown mirror files from the shared page source of truth.
 * Output: public/pages/{slug}.md
 * Run: node scripts/generate-page-markdown.mjs  (or via prebuild)
 *
 * Both the Astro page and the Markdown file derive from src/data/pages.ts.
 * This script reads the compiled JS output via tsx for type safety,
 * but accepts the data inline for deterministic builds without tsx.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'pages');

mkdirSync(OUT_DIR, { recursive: true });

/* ------------------------------------------------------------------ */
/*  Page data — mirrors src/data/pages.ts                              */
/*  Keep in sync when updating page content.                           */
/* ------------------------------------------------------------------ */
const pages = [
  {
    slug: 'index',
    canonicalUrl: 'https://wordpresto.com/',
    pageTitle: 'Word Presto is the content engine behind better publishing workflows.',
    seoTitle: 'Content workflow engine for publishing teams | Word Presto',
    metaDescription:
      'Plan, brief, write, review and improve content before it reaches your CMS, website or client.',
    focus: 'Content workflow engine for publishing teams',
    summary:
      'Word Presto is a structured content workflow engine. It gives teams a clear path from idea to approval — plan, brief, draft, review, improve, approve and prepare for handoff — before anything is published.',
    sections: [
      {
        heading: 'The problem: messy workflows, not poor writers',
        body: 'Content does not fail because people cannot write. It fails because the workflow is messy. Briefs are vague. Drafts arrive without structure. Good ideas get lost in notes, chats and half-finished documents.',
        items: [
          'Unclear brief — writers start guessing what the page is even for.',
          'Draft lacks structure — no shared shape, so every draft reads differently.',
          'Checks happen too late — important questions surface after the page is already written.',
          'Support missing — important points move forward without enough support.',
          'Review unclear — no clear gate, so nobody knows what "done" means.',
          'CMS prep left until the end — page details and handoff notes become a last-minute scramble.',
        ],
      },
      {
        heading: 'How it works: a structured path from idea to approval',
        body: 'A structured place for content to move from idea to approval. Each stage has a clear role, output and review point. Not a project board — a copy desk, where every piece of work has a folder it moves through.',
        items: [
          '01 · Plan — Turn loose ideas and business priorities into a clear direction.',
          '02 · Brief — Give writers the goal, audience, angle and structure before drafting starts.',
          '03 · Draft — Help the first version follow the purpose of the page.',
          '04 · Review — Surface what needs attention before the piece reaches the website or CMS.',
          '05 · Improve — Tighten sections that are unclear, thin, repetitive or not doing their job.',
          '06 · Approve — Human sign-off before anything moves to publishing.',
          '07 · Prepare for CMS — Package the approved work for clean handoff.',
        ],
      },
      {
        heading: 'Before it reaches the website',
        body: 'Most of the important work happens before anything is published. Word Presto gives that work a clearer path: from idea, to brief, to draft, to review, to improvement, to approval and handoff.',
        items: [
          'Plan the work — turn loose ideas and business priorities into a clear direction for the page.',
          'Create the brief — give writers the goal, audience, angle and structure before anyone starts drafting.',
          'Shape the draft — help the first version follow the purpose of the page.',
          'Review the work — surface what needs attention before the piece reaches the website, CMS or client.',
          'Improve the weak parts — tighten sections that are unclear, thin, repetitive or not doing their job.',
          'Prepare the handoff — package the approved work so it can move cleanly into a website, CMS or client review process.',
        ],
      },
      {
        heading: 'Three ways to use Word Presto',
        body: 'One content engine. Three ways the finished work leaves the desk.',
        items: [
          'Automated Astro + CMS builds — the engine behind structured, content-led websites where pages, briefs, updates and handoff notes are planned before they become templates.',
          'CMS-connected workflows — connect to WordPress, Payload, Sanity or a custom CMS so content is planned, reviewed and prepared before publishing.',
          'Standalone content engine — manage briefs, drafts, reviews and approvals before handing content to a client, editor or website team.',
        ],
      },
      {
        heading: 'Specialist Workers',
        body: 'Each Worker is a specialist role with clear inputs, outputs and limits.',
        items: [
          'Planner (Strategy & Planning) — turns loose ideas into content direction. Output: Content direction.',
          'Brief Writer (Content Production) — creates the working brief. Output: Page brief.',
          'Draft Reviewer (Approval & Governance) — checks whether the draft is clear and structured. Output: Review summary.',
          'Section Editor (Content Production) — tightens weak sections. Output: Edited sections.',
          'Approval Reporter (Approval & Governance) — summarises what is ready and what needs attention. Output: Approval report.',
          'Publishing Preparer (CMS Preparation) — packages approved work for handoff. Output: Handoff pack.',
        ],
      },
      {
        heading: 'Human approval: review-led publishing',
        body: 'Faster content work, without removing human judgement. Workers plan, draft, check and suggest. People still approve what moves forward — nothing reaches the CMS without human sign-off. This is review-led publishing, not blind automation.',
        items: [
          'Workers do not publish without approval.',
          'Outputs are structured for human review.',
          'Risks, gaps and weak sections are surfaced early.',
          'The system supports human judgement — it never overrides it.',
        ],
      },
      {
        heading: 'Who it is for',
        body: 'Built for the people responsible for content outcomes.',
        items: [
          'Copywriters — better briefs, clearer review notes and a structured way to improve drafts without losing your voice.',
          'Business owners — a clear view of what content is being made, why it matters and whether it is ready to publish.',
          'Website teams — a clearer handoff from draft to page, with the purpose, structure and review notes already attached.',
          'Agencies — a repeatable content process that helps teams move faster while keeping review and approval visible.',
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Render each page as Markdown                                        */
/* ------------------------------------------------------------------ */
function renderMarkdown(page) {
  const lines = [
    `---`,
    `title: "${page.pageTitle.replace(/"/g, '\\"')}"`,
    `seoTitle: "${page.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${page.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${page.canonicalUrl}"`,
    `focus: "${page.focus}"`,
    `---`,
    ``,
    `# ${page.pageTitle}`,
    ``,
    page.metaDescription,
    ``,
    `---`,
    ``,
    page.summary,
    ``,
  ];

  for (const section of page.sections) {
    lines.push(`## ${section.heading}`, ``);
    if (section.body) lines.push(section.body, ``);
    if (section.items?.length) {
      for (const item of section.items) {
        lines.push(`- ${item}`);
      }
      lines.push(``);
    }
  }

  return lines.join('\n');
}

for (const page of pages) {
  const md = renderMarkdown(page);
  const outPath = join(OUT_DIR, `${page.slug}.md`);
  writeFileSync(outPath, md, 'utf8');
  console.log(`✓ Markdown mirror: ${outPath}`);
}
