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

export const workflowDemo: StaticPageMeta = {
  seoTitle: 'WordPresto workflow demo, editorial and search intelligence in one workflow',
  metaDescription:
    "A senior writer's rough notes move through WordPresto. Brief, structure, voice profile, review, metadata and CMS handoff, without handing judgement to a machine.",
  h1: 'See rough thinking become review-ready.',
  intro:
    "A senior writer's messy notes, on why generic SaaS tools fail growing SMEs, move through WordPresto. Brief, voice profile, structure, search intelligence, review and handoff.",
};
