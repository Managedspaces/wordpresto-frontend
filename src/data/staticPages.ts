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

export const workflowDemo: StaticPageMeta = {
  seoTitle: 'WordPresto workflow demo, editorial and search intelligence in one workflow',
  metaDescription:
    "A senior writer's rough notes move through WordPresto. Brief, structure, voice profile, review, metadata and CMS handoff, without handing judgement to a machine.",
  h1: 'See rough thinking become review-ready.',
  intro:
    "A senior writer's messy notes, on why generic SaaS tools fail growing SMEs, move through WordPresto. Brief, voice profile, structure, search intelligence, review and handoff.",
};
