# CLAUDE.md

## Project

This is the WordPresto Astro frontend marketing site.

WordPresto is a writer-centred, agentic content workflow system. It puts the writer at the centre, then surrounds the writing process with SEO, structure, evidence, review, approval and CMS preparation. The site should present it as a human, tactile, paper-and-ink content workflow for writers, editors, copywriters, business owners, website teams and agencies.

The front-end should not feel like an AI SaaS dashboard, chatbot product, generic SEO automation tool, Yoast/RankMath-style checklist, Surfer/Clearscope clone, AI content generator or black-box publishing tool.

### Brand wordmark

Visible body copy uses **Word Presto** (two words) to match the existing rendered site. The single-token **WordPresto** is used in machine-readable contexts (`llms.txt`, structured data, the domain). When writing visible copy, match the surrounding components — they use "Word Presto". Do not mix the two within visible copy.

## Core Positioning

Homepage visible positioning:

> Word Presto is the agentic content engine for writers, editors and publishing teams.

Supporting line:

> Plan, brief, write, review, improve and prepare content for search, readers and CMS handoff, without handing judgement to a black box.

Core idea: the writer is at the centre; SEO, structure, evidence, review, approval and CMS preparation are wrapped around the writing process, not bolted on at the end.

Keep the homepage writer-led, workflow-led and human-review-led. SEO is **embedded** in the workflow and may be visible, but it is one signal among many — never the main frame.

Do not reposition the homepage as a generic SEO automation tool, a checklist product, a Surfer/Clearscope clone, an AI content generator or a black-box publishing tool. The brand strapline "The content engine behind better publishing workflows" remains valid in footer/brand contexts, but the hero leads with writers.

## Visual Direction

Use the approved V6 design direction.

The site should feel:

* tactile
* paper-led
* editorial
* human
* warm
* flat
* structured
* practical
* creative without being decorative

Use:

* warm paper backgrounds
* black ink typography
* graphite rules
* folded corners
* paper tabs
* review slips
* content brief sheets
* marked-up drafts
* Worker profile cards
* approval stamps
* subtle paper shadows
* restrained hand-written annotation details

Avoid:

* AI gradients
* blue-violet/purple AI styling
* neon
* robots
* glowing effects
* glassmorphism
* generic SaaS dashboards
* floating fake app panels
* generic feature-card grids

## Responsive And Mobile-First

Build mobile-first.

Every page and component must work cleanly from small mobile screens upward.

Rules:

* Start layout CSS from mobile defaults, then enhance with larger breakpoints.
* Do not rely on desktop grid layouts collapsing automatically without checking.
* Paper mockup compositions must adapt safely on mobile. They may stack, crop less aggressively, simplify, or become a single readable artefact.
* No horizontal overflow.
* No clipped text.
* No tiny unreadable paper artefacts on mobile.
* CTA buttons must remain easy to tap.
* Multi-step waitlist form must be fully usable on mobile.
* Sticky nav must not consume too much mobile viewport height.
* Use sensible spacing and readable type sizes at mobile widths.
* Test at common mobile widths before considering the page complete.

## Astro Architecture

Use Astro.

Do not add Payload or any CMS unless explicitly requested.

Prefer:

* Astro pages/components
* shared content/data files
* generated Markdown mirrors
* simple server endpoints where needed
* Neon only for the waitlist/application form

Do not introduce unnecessary client-side frameworks unless the interaction genuinely needs them.

## SEO And Metadata

Every page must separate:

1. Search-intent `<title>`
2. Human visible page title/H1
3. Unique meta description

Do not automatically reuse the visible H1 as the browser title unless deliberately set.

Example:

```ts
seoTitle: "Content workflow engine for writers and publishing teams | Word Presto",
pageTitle: "Word Presto is the agentic content engine for writers, editors and publishing teams.",
metaDescription: "Plan, brief, write, review, improve and prepare content for search, readers and CMS handoff."
```

Use `astro-seo` for metadata.

Include:

* title
* meta description
* canonical
* Open Graph
* Twitter card
* robots defaults

## Analytics

Analytics load from the `<head>` in `src/layouts/BaseLayout.astro`, so they apply to every page.

Two tools run side by side:

* **Google Analytics** (gtag), with the measurement ID set inline. It is a public value, so it lives directly in the layout.
* **Microsoft Clarity** (heatmaps and session recordings), using the `@microsoft/clarity` package. The project ID is read from the `PUBLIC_CLARITY_PROJECT_ID` environment variable, not hardcoded.

Rules for Clarity:

* The variable must keep the `PUBLIC_` prefix so Astro exposes it to the browser.
* Clarity only initialises when the variable is set, so it is a clean no-op for local builds and previews that do not define it.
* Set `PUBLIC_CLARITY_PROJECT_ID` in the Vercel project Environment Variables (Production) for it to run on the live site.

Keep analytics light. Do not add further third-party trackers without a clear reason.

## Markdown Mirrors And LLM Files

Each page should have a generated Markdown version.

The Markdown mirror is generated from the shared data file, not from the `.astro` page:

* `src/data/i18n/home.ts` is the single source of truth for the homepage, in all locales — both the live page (`src/components/HomePage.astro`, rendered by `src/pages/index.astro` for English and `src/pages/[locale]/index.astro` for every other locale) and the generated Markdown mirrors read from it. There is no separate mirror-only copy of the homepage any more.
* `scripts/generate-page-markdown.ts` renders the mirrors; it runs via `prebuild`. The homepage mirror is generated once per locale: English at the legacy `public/index.md` / `public/pages/index.md`, every other locale at `public/{locale}/index.md` (e.g. `public/pt/index.md`), matching its live route exactly.
* `src/data/workerProfiles.ts` is the source of truth for Worker pages (English only for now).

Do not hand-edit the generated `.md` files.

### i18n

The site is being translated into `pt`, `pt-br`, `es`, `de` and `fr` alongside English — see `context.md` for the full plan. The homepage and the waitlist form are translated so far: `src/i18n/locales.ts` (locale list/helpers), `src/data/i18n/common.ts` (shared nav/footer strings), `src/data/i18n/home.ts` (homepage copy) and `src/data/i18n/waitlist.ts` (waitlist form copy) are the locale-keyed data files. The specialist-bench team names/summaries (`src/data/workerRegistry.ts`) are translated too, via `getTeamMeta(id, locale)` / `getTeamGroups(max, locale)` — `TEAM_META` itself stays English-only as the default for the `/specialists/*` pages, which aren't locale-routed yet. When translating a new page, follow the homepage's pattern: extract every visible string into a `Record<Locale, ...>` dictionary in `src/data/i18n/`, parameterise a shared component in `src/components/` by `locale`, and add a thin `src/pages/[locale]/{page}.astro` route alongside the existing English one. For pages with client-side scripts that need locale strings (like the waitlist form), serialise them into a `<script type="application/json">` tag rendered server-side and parse it at script init, rather than duplicating the script per locale — see `WaitlistPage.astro` (`#wl-i18n`) for the pattern. Waitlist form option `value`s stay in English across every locale (only the `label` translates) so data in Postgres and the Resend notification email stay analysable in one language.

Generate:

```txt
public/pages/[page].md
public/llms.txt
public/llm.txt
```

`llms.txt` should describe:

* what WordPresto is
* site structure
* page focus
* canonical URLs
* Markdown mirror URLs
* intended audience
* what the site is not

## Homepage Language Rules

Use plain, human workflow language:

* content workflow
* briefs
* drafts
* review notes
* improvement
* approval
* website handoff
* CMS handoff
* client handoff
* Workers
* publishing preparation
* human review

SEO is now part of the homepage story, framed as embedded in the workflow. The following are allowed in visible homepage copy when described as part of planning, writing, review and handoff (not as a standalone tool):

* SEO
* search intent
* metadata
* titles, descriptions, slugs, CMS fields
* internal links
* evidence gaps

Still avoid as visible homepage language (these stay deeper in the product):

* schema
* accessibility
* conversion alignment
* technical audit
* cannibalisation
* "automated SEO auditing" / "fully automated SEO" as a primary frame

Frame SEO as a signal the writer sees while shaping the work, never as a bolt-on module or a checklist product.

## Waitlist

All main CTAs temporarily link to:

```txt
/waitlist
```

The waitlist is a multi-step application form backed by Neon Postgres.

It should collect structured early-access information without feeling heavy.

Use:

* server-side validation
* honeypot spam protection
* no raw IP storage
* country-based currency localisation
* Resend notification if configured

Do not add Supabase, Aurora, Payload or a CMS.

## Copy Style

Use British English.

Tone:

* clear
* practical
* warm
* direct
* non-hypey
* human
* product-led

Avoid:

* “AI magic”
* “10x content”
* “revolutionary”
* “game-changing”
* “best”
* “autopilot publishing”
* “write blogs in seconds”
* “scale content without headcount”
* “AI writes for you”
* “set and forget”
* “one-click publishing”
* “guaranteed rankings”
* overexplaining AI
* em dashes (use commas, full stops or "without ..." phrasing instead)

Avoid "AI-powered" phrasing unless it is genuinely necessary.

Do not overuse the product name in body copy.

## Components

Keep components purposeful.

Good components:

* paper sheets
* review slips
* Worker cards
* workflow folders
* content brief panels
* approval stamps
* form steps
* simple CTA blocks

Avoid:

* generic SaaS card grids
* decorative widgets
* dashboard-like panels
* excessive icon boxes
* abstract AI visuals

## Worker Presentation

Workers should feel like specialist roles in a publishing workflow, not gimmicky AI agents.

Homepage Worker cards should use plain role language, such as:

* Planner
* Brief Writer
* Draft Reviewer
* Section Editor
* SEO Reviewer
* Approval Reporter
* Publishing Preparer

SEO review is an explicit stage in the workflow, not a separate mode. Present it as one specialist role among many, sitting alongside drafting, proofing, evidence, approval and CMS handoff.

Deeper Worker pages can introduce more specific worker roles.

## Validation Before Completion

Before reporting completion, verify:

* Astro build passes
* no horizontal overflow on mobile
* homepage is readable on mobile
* waitlist form works on mobile
* CTAs route to `/waitlist`
* homepage hero leads with writers and editors, not with SEO
* SEO is framed as embedded in the workflow, never as a standalone tool or checklist
* visible homepage copy does not expose deeper-only language (schema, accessibility, conversion alignment, technical audit, cannibalisation)
* no em dashes in homepage copy
* `<title>` and visible H1 are separate where required
* meta description exists
* OG image exists
* Markdown mirrors generate
* `llms.txt` and `llm.txt` exist
* no Payload/CMS dependency was added
* no Supabase/Aurora dependency was added
