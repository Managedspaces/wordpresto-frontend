# Frontend Internationalisation (i18n) Plan

Status: **proposed, not started**. This document is the plan only; no
translation or routing code has been built yet. Update the Status line as
phases land.

## Why now

The homepage "Same standard. Native voice." section presents six editor
personas, each tied to a real language and country: Emma (English, Ireland),
Aurora (Portuguese, Portugal), Francisca (Brazilian Portuguese, Brazil),
Sofía (Spanish, Spain), Sabine (German, Germany), Ambre (French, France).
The product narrative already promises "one standard, native voice" across
these languages. The public site should back that up: right now the entire
frontend is English-only.

## Target locales

| Locale code | Language | Editor | Notes |
|---|---|---|---|
| `en` (default) | English | Emma | Current content, no prefix |
| `pt` | Portuguese (Portugal) | Aurora | European Portuguese, not interchangeable with pt-BR |
| `pt-br` | Brazilian Portuguese | Francisca | Distinct vocabulary/formality from pt |
| `es` | Spanish (Spain) | Sofía | |
| `de` | German | Sabine | |
| `fr` | French | Ambre | |

`pt` and `pt-br` are kept as two separate locales, not one "Portuguese"
locale with regional notes — that's the whole point of having two named
editors for them.

## Recommended approach: Astro's native i18n routing

The site is Astro 6 on Vercel with static prerendering already. Astro has
had first-class i18n routing since v4 (`i18n` config block in
`astro.config.mjs`), which:

- generates `/en/...`, `/pt/...`, `/pt-br/...` etc. path prefixes
  automatically (with `prefixDefaultLocale: false` so English stays at `/`
  and other locales get a prefix)
- provides `getRelativeLocaleUrl()` / `getLocaleByPath()` helpers for
  building locale-aware links without hand-rolling path logic
- ships a routing middleware that composes with the existing custom
  middleware (the markdown-negotiation edge middleware already in
  `astro.config.mjs`) via `sequence()`

This is preferred over a third-party i18n library (astro-i18next, etc.)
because it needs zero new runtime dependencies, matches how the rest of the
build already works (static generation, no client framework), and avoids
adding a dependency that could fall out of sync with Astro version upgrades.

**Do not add a CMS or a translation-as-a-service platform (Lokalise,
Crowdin, etc.) in the first phase.** The project's stated preference is
data-file-driven content with generated mirrors, not third-party content
infra. Revisit this only if translator headcount/workflow demands it later.

## The real work: fixing content architecture before translating

Translating six languages will multiply any existing content debt by 6x, so
this has to be fixed first, not worked around.

**Current problem (documented in this repo's own CLAUDE.md):** homepage
copy lives in two places — `src/pages/index.astro` has the visible copy
inline, and `src/data/pages.ts` is a separate mirror source for the
generated Markdown files. They're kept in sync by hand today. Translating
would mean editing four places per string instead of one.

**Fix:** before translating anything, make `src/data/pages.ts` (and the
equivalent `workerProfiles.ts`, `workers.ts`, `staticPages.ts`,
`workerRegistry.ts`) the *only* place copy lives, and have `index.astro`
and the other `.astro` pages render from it, not duplicate it. This
was already flagged as tech debt; i18n is the forcing function to finally
fix it.

**Locale dictionary shape.** Once copy is centralised, key every string by
locale rather than duplicating whole files per language:

```ts
// src/data/i18n/pages.ts
export const homePage: Record<Locale, PageData> = {
  en: { pageTitle: '...', sections: [...] },
  pt: { pageTitle: '...', sections: [...] },
  'pt-br': { ... },
  es: { ... },
  de: { ... },
  fr: { ... },
};
```

Same pattern for `workerProfiles.ts`, `workers.ts`, `staticPages.ts`,
`workerRegistry.ts` (worker names like "Omar", "Nadia" stay untranslated —
they're proper names — but `roleTitle`, `department`, `capability`-style
copy translates). This keeps a single Astro page template per route,
parameterised by locale, instead of six copies of every `.astro` file.

## Content volume (why this has to be phased)

| Content area | English volume today | Priority |
|---|---|---|
| Homepage (`pages.ts` + `index.astro`) | ~120 lines of copy across 10 sections | **P0** |
| Static pages (waitlist, workflow-demo, prestobot, sitemap) | `staticPages.ts`, ~100 lines | **P0** |
| Specialist/team pages (`/specialists/*`) | 5 pages, team summaries + 41 short worker entries | **P1** |
| Worker profile pages (`/workers/[slug]/`) | `workerProfiles.ts`, 3,100+ lines for 20 profiles (long-form: hero copy, before/after examples, scenarios, boundary checklists) | **P2** |

Worker profiles are by far the largest and lowest-conversion-value content
(deep long-tail SEO pages, not the pages a first-time visitor or waitlist
signup depends on). They should translate last, and can be prioritised
worker-by-worker using actual traffic data once P0/P1 ship.

## Phased rollout

**Phase 0 — Architecture (no visible change)**
- Add `i18n` config to `astro.config.mjs` (locales, defaultLocale: `en`,
  `prefixDefaultLocale: false`).
- Refactor `pages.ts`, `staticPages.ts` into locale dictionaries; make
  `index.astro` and other static pages render from them instead of
  duplicating copy.
- Add a `Locale` type and a small `t()`/lookup helper.
- No new languages live yet; this phase is a pure refactor, verified by
  confirming the English site is byte-identical in rendered output.

**Phase 1 — Homepage + waitlist + nav in all 6 locales**
- Translate `pages.ts` (homepage), `staticPages.ts` (waitlist, prestobot,
  workflow-demo, sitemap meta), masthead/footer nav strings.
- Locale switcher in the masthead (small, text-based — flag icons already
  exist from the editor tiles and can be reused here for visual consistency).
- hreflang `<link rel="alternate">` tags for all 6 locales + x-default on
  every localised page, wired through `astro-seo` (already a dependency).
- Per-locale canonical URLs; extend `sitemap.xml.ts` and the HTML sitemap to
  emit all locale variants.
- Extend `generate-page-markdown.ts` so each locale gets its own
  `public/{locale}/index.md` etc., and `generate-llms.mjs` so `llms.txt`
  either covers all locales or each locale gets its own (needs a decision —
  see Open Questions).
- Waitlist form: the existing country-based currency localisation
  (`src/lib/countries.ts`) stays as-is (it's about currency, not UI
  language) but form labels/validation copy need translating.

**Phase 2 — Specialists / team pages**
- Translate `workerRegistry.ts` display fields (`roleTitle`, `department`)
  and the four team-page summaries in `staticPages.ts`.
- Team page routes get locale variants: `/pt/specialists/seo/`, etc.

**Phase 3 — Worker profile pages**
- Translate `workerProfiles.ts`, worker-by-worker, prioritised by traffic
  once analytics exist for the English pages.
- Given the volume (150+ lines of copy per worker × 20+ workers × 5
  non-English locales), this is the long pole. Consider machine-translating
  a first draft into a working branch per locale and having a native
  reviewer edit rather than translating from scratch.

## Translation workflow

1. **Machine-translate a first pass** (DeepL API or similar) directly into
   the locale dictionary files, keeping strings keyed exactly like English
   so nothing is missed.
2. **Native review pass** by a fluent speaker per locale — not just
   linguistic correctness but tone: the whole site's voice (British English,
   plain, non-hypey, editorial) needs to survive translation, not just the
   literal meaning. This is exactly the kind of review Aurora/Francisca/
   Sofía/Sabine/Ambre already represent in the product's own narrative, so
   there's a natural way to frame this internally ("each locale gets edited
   by someone who'd actually vouch for it").
3. **No string ships without a native reviewer sign-off**, even if MT output
   looks fine. Silent MT-only pages would violate the site's own "human
   review, not black box" positioning.
4. Keep a simple translation-status field per locale/section (e.g. a
   `status: 'draft' | 'reviewed' | 'live'` in the dictionary or a tracked
   spreadsheet) so partially-translated locales aren't accidentally
   presented as complete.

## SEO / technical checklist

- [ ] `hreflang` alternate links on every page (all locales + x-default)
- [ ] Per-locale canonical URLs (not a single canonical pointing at `/en/`)
- [ ] Per-locale `<title>`/meta description (not reused across locales)
- [ ] `sitemap.xml` includes all locale URLs with correct `hreflang` blocks
- [ ] Markdown mirrors (`public/{locale}/...md`) and `llms.txt`/
      `llms-full.txt` extended per locale or clearly scoped to English with
      a note (needs a decision, see below)
- [ ] OG images: either locale-specific or confirmed to be language-neutral
      enough to reuse (current `generate-og.mjs` output should be checked)
- [ ] `astro-seo`'s `languageAlternates` prop used consistently via
      `BaseLayout.astro` rather than hand-added per page

## Open questions (need your call before Phase 0 starts)

1. **URL structure**: subdirectory prefix (`wordpresto.com/pt/`, what this
   plan assumes) vs subdomain (`pt.wordpresto.com`) vs ccTLD. Subdirectory
   is simplest for a single Vercel project and is what's assumed above —
   flag if you want something else.
2. **llms.txt / markdown mirrors**: should these exist per-locale, or stay
   English-only with a note that they're the canonical machine-readable
   source regardless of UI locale? (Affects LLM/agent discoverability more
   than human SEO.)
3. **Translation source**: DeepL API (paid, higher quality for these
   language pairs) vs a cheaper/free MT option for the first draft. Native
   review happens either way; this only affects draft quality and cost.
4. **Reviewer sourcing**: do you already have native speakers lined up per
   locale, or does that need arranging before Phase 1 can actually ship
   (as opposed to just being built)?
5. **Phase 3 scope**: translate all 41 worker profiles eventually, or
   permanently keep the long-tail profile pages English-only and only
   localise homepage/specialists/waitlist? This changes the total project
   size substantially.

## Explicitly out of scope for this plan

- Adding a CMS or translation-management platform.
- Localising the WordPresto product app itself (separate repo, separate
  effort — this plan is frontend-marketing-site only).
- Automatic browser-language redirect (can be added later as a small
  enhancement once locales exist; starting with it risks trapping users on
  an incomplete locale before Phase 3 ships).
