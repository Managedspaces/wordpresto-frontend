/**
 * Shared copy for the static (non-Worker-profile) content pages.
 *
 * Each page's <title>, meta description, H1 and intro live here ONCE, so the
 * visible page and its generated Markdown mirror always read the same source.
 * This is what keeps the mirrors auto-updating: edit the copy here and both the
 * page and `npm run generate:markdown` pick it up on the next build, with no
 * second place to forget.
 *
 * The homepage keeps its own source in `pages.ts`, and Worker profiles live in
 * `workerProfiles.ts`. Both are already single-sourced the same way.
 */

export interface StaticPageMeta {
  /** Browser <title> / search-intent title. */
  seoTitle: string;
  /** Meta description. */
  metaDescription: string;
  /** Visible H1 (kept identical to the Markdown mirror's first heading). */
  h1: string;
  /** Visible intro paragraph. */
  intro: string;
}

export const workersDirectory: StaticPageMeta = {
  seoTitle: 'Content workflow Workers | WordPresto',
  metaDescription:
    'Meet the specialist Workers in the WordPresto content workflow, from content analysis and brief building to voice review, approval reporting and CMS handoff.',
  h1: 'Specialist Workers for every stage of the content workflow.',
  intro:
    'WordPresto brings in the right specialists for the stage you are at, so each piece of content gets the support it actually needs.',
};

export const seoWorkersDirectory: StaticPageMeta = {
  seoTitle: 'SEO Workers for search, structure and authority | WordPresto',
  metaDescription:
    'Meet the SEO Workers in the WordPresto workflow, covering SEO title and metadata, search snippets, schema, technical health, trust and author credibility, and evidence gaps. Review-led and human-approved.',
  h1: 'SEO Workers for search, structure and authority.',
  intro:
    'The SEO Workers help writers and editorial teams make content easier to understand, structure, retrieve and approve. They review metadata, search snippets, schema, technical health, trust and evidence, and surface what matters while the writer is still shaping the work. Every output is for human review.',
};

export const prestobot: StaticPageMeta = {
  seoTitle: 'WordPrestoBot, the Word Presto web crawler | Word Presto',
  metaDescription:
    'What WordPrestoBot is, why it visited your site, and how to control it with robots.txt. The read-only web crawler operated by Word Presto.',
  h1: 'WordPrestoBot, our web crawler',
  intro:
    'If you found this page from a line in your server logs, hello, and thanks for checking. WordPrestoBot is the web crawler operated by Word Presto, an agentic content and SEO workflow tool. It reads public HTML to extract SEO and content signals on behalf of a Word Presto user, and nothing more.',
};

export const specialistsDirectory: StaticPageMeta = {
  seoTitle: 'The Word Presto specialist bench | WordPresto',
  metaDescription:
    'Meet the four teams behind Emma: Content Production, SEO, Operations and Approval / Governance. Every specialist has a defined role, and every change still needs the Editor to approve it.',
  h1: 'The specialist bench behind Emma.',
  intro:
    'Word Presto is not one generic AI writer. It is a bench of specialist Workers, organised into four teams, that Emma brings in at the right moment. Specialists review, draft and prepare. Only the Editor approves.',
};

export const contentProductionTeam: StaticPageMeta = {
  seoTitle: 'Content Production Team | WordPresto specialists',
  metaDescription:
    'The Content Production Team plans, drafts, rewrites and proofs the copy, turning briefs into structured, ready content for the Editor to review.',
  h1: 'Content Production Team',
  intro:
    'Plans, drafts, rewrites and proofs the copy, turning briefs into structured, ready content.',
};

export const seoTeam: StaticPageMeta = {
  seoTitle: 'SEO Team | WordPresto specialists',
  metaDescription:
    'The SEO Team works search intent, structure, technical signals, evidence and internal relationships into the content, not bolted on at the end.',
  h1: 'SEO Team',
  intro:
    'Works search intent, structure, technical signals, evidence and internal relationships into the content, not bolted on at the end.',
};

export const operationsManagementTeam: StaticPageMeta = {
  seoTitle: 'Operations / Management | WordPresto specialists',
  metaDescription:
    'Operations / Management coordinates the review flow and keeps every piece of work ready for a human decision.',
  h1: 'Operations / Management',
  intro:
    'Coordinates the review flow and keeps every piece of work ready for a human decision.',
};

export const approvalGovernanceTeam: StaticPageMeta = {
  seoTitle: 'Approval / Governance Team | WordPresto specialists',
  metaDescription:
    'The Approval / Governance Team checks risk, evidence, approval state and whether proposed changes are ready for the Editor.',
  h1: 'Approval / Governance Team',
  intro:
    'Checks risk, evidence, approval state and whether proposed changes are ready for the Editor.',
};

export const workflowDemo: StaticPageMeta = {
  seoTitle: 'WordPresto workflow demo, editorial and search intelligence in one workflow',
  metaDescription:
    "A senior writer's rough notes move through WordPresto. Brief, structure, voice profile, review, metadata and CMS handoff, without handing judgement to a machine.",
  h1: 'See rough thinking become review-ready.',
  intro:
    "A senior writer's messy notes, on why generic SaaS tools fail growing SMEs, move through WordPresto. Brief, voice profile, structure, search intelligence, review and handoff.",
};
