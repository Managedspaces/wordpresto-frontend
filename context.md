# Frontend Internationalisation (i18n) Plan

Status: **Phase 0 + homepage (Phase 1a) shipped.** URL structure is
subdirectory-prefixed (`/pt/`, `/pt-br/`, `/es/`, `/de/`, `/fr/`, English
unprefixed at `/`), translation is done directly rather than via a paid MT
provider + external reviewer pass, and full-site scope (every page, all 41
workers) is confirmed rather than staged by traffic. Automatic translation
of newly-added pages going forward is intentionally deferred — noted at the
bottom of this doc, not built yet.

**Done:**
- Astro `i18n` config (manual routing) in `astro.config.mjs`.
- `src/i18n/locales.ts` (locale list/helpers), `src/i18n/flags.ts` (shared flag SVGs).
- `src/data/i18n/common.ts` — shared nav/footer strings, all 6 locales.
- `src/data/i18n/home.ts` — full homepage copy, all 6 locales.
- `src/components/HomePage.astro` — the homepage extracted into a single
  locale-parameterised component (previously all copy lived inline in
  `src/pages/index.astro`, undocumented and un-mirrored — see `CLAUDE.md`).
  `src/pages/index.astro` (English) and `src/pages/[locale]/index.astro`
  (the other 5) are now thin wrappers around it.
- A hover-reveal locale switcher (flag icons) in the masthead. Kept to a
  single inline flag + dropdown deliberately: 6 flags shown inline broke
  the masthead layout once translated nav labels ran longer than English
  (e.g. Portuguese "Especialistas" collided with the centred logo).
- `scripts/generate-page-markdown.ts` now generates the homepage Markdown
  mirror from `home.ts` per locale (`public/{locale}/index.md`), replacing
  the old `src/data/pages.ts` (deleted — it was a second, un-synced copy of
  homepage content used only by the mirror generator).
- `scripts/inject-markdown-routes.mjs`, `scripts/check-mirror-sync.mjs` and
  `src/data/siteRoutes.ts` extended so the 5 new locale homepages get
  Accept:-negotiation, mirror-drift checking and sitemap entries the same
  as every other page.

**Also done:** the specialist-bench team names/summaries/CTAs
(`src/data/workerRegistry.ts` — "Content Production Team", "SEO Team", etc.,
their one-line descriptions, and the "Browse ... Workers" buttons) are now
translated too, via `getTeamMeta(id, locale)` / `getTeamGroups(max, locale)`.
The homepage's specialist bench section is fully localised in all 6
locales, including correct singular/plural on the "N SPECIALIST(S)" count
label. `TEAM_META` (English) stays as the untranslated default for the
`/specialists/*` pages, which don't take a locale yet — see below.

**Also done:** `/waitlist` — the multi-step application form is now fully
localised in all 6 locales. `src/data/i18n/waitlist.ts` covers every visible
string (page meta, success state, all 7 step headings/subheads, every field
label/placeholder/error message, and every option array). Option `value`s
stay in English across locales (only the `label` translates) so the data
written to Postgres and the Resend notification email stay analysable in
one language regardless of which locale a lead applied from. The page was
extracted into `src/components/WaitlistPage.astro`, parameterised by
`locale`, with `src/pages/waitlist.astro` (English) and
`src/pages/[locale]/waitlist.astro` (the other 5) as thin wrappers,
following the same pattern as the homepage. The client-side step/validation
script (progress label, pricing bands, button/banner text, API error
messages) reads its strings from a `<script type="application/json"
id="wl-i18n">` tag rendered server-side, rather than being rewritten
per-locale. `src/pages/api/waitlist.ts` now returns a stable `errorCode`
field (`invalid_request` / `missing_fields` / `service_unavailable` /
`server_error`) alongside its English `error` message, so the client can
show a localised message without server-side i18n. All 4 waitlist CTAs on
the homepage now use `localeHref(locale, '/waitlist')` again — they'd been
temporarily hardcoded to the plain English path since the route didn't
exist yet (see the PR that fixed the resulting 404s on every translated
page). Verified with `tsc --noEmit`, `astro build`, a full internal-link
sweep of the built output, and a Playwright pass through the German and
French forms (multi-step navigation, translated pricing bands in the
right currency, no mobile overflow).

**Also done:** `/specialists/*` — the hub page and all four team pages
(`content-production`, `seo`, `operations-management`, `approval-governance`)
are localised in all 6 locales. The four team pages were near-byte-identical
duplicates of each other (same layout, differing only by team id, breadcrumb
label and one note paragraph), so this pass also consolidated them into a
single `src/components/SpecialistTeamPage.astro`, parameterised by `locale`
and `teamId`, replacing four separate `.astro` files that would otherwise
have needed to become 20 (4 teams × 5 locales). The hub reuses
`src/data/i18n/home.ts`'s `specialists` section (eyebrow, team/specialist
labels, chip copy) rather than duplicating those strings a second time;
page-specific copy (h1/intro/meta, breadcrumb labels, note paragraphs) lives
in the new `src/data/i18n/specialists.ts`. Non-English team pages route
through a single dynamic `src/pages/[locale]/specialists/[team].astro`
(`getStaticPaths` fans out over all 5 locales × 4 teams), while English
keeps its four literal wrapper files for consistency with the rest of the
site's routing. Worker profile links, the `/workers/` nav links and the
footer's `/sitemap/` link deliberately stay unprefixed English URLs on
these pages, same reasoning as the waitlist CTA fix in #61: `/workers/*`
and `/sitemap/` don't have locale routes yet, so `localeHref()` would 404.
Verified with `tsc --noEmit`, `astro build` (25 new pages: 5 hub + 20 team),
a full internal-link sweep, and Playwright screenshots of the German hub
and French SEO team page (including a 375px mobile pass).

**Also done:** `/workers/` and `/workers/seo/` — the two Worker directory
pages are localised in all 6 locales, via `src/data/i18n/workersDirectory.ts`
and two new components (`WorkersHubPage.astro`, `SeoWorkersPage.astro`).
Only the page chrome translates (hero, directory header, stage/output
labels, "View profile", the cross-link block, footer): the Worker cards
themselves (name, role, department, stage, summary, output — from
`src/data/workers.ts`) stay English, same scoping decision as the
`/specialists/*` pages, since individual Worker profile pages
(`/workers/[slug]/`) aren't translated yet. No Markdown mirror per locale
either, for the same reason: these pages are mostly a list of English
Worker profiles, so a translated mirror would be mostly-English until the
profile pages themselves translate. Fixed a latent two-sources-of-truth bug
found while doing this: `scripts/generate-page-markdown.ts` was still
reading the English intro copy for these two pages from
`src/data/staticPages.ts`'s `workersDirectory`/`seoWorkersDirectory`
exports, a leftover duplicate of what's now in `workersDirectory.ts` —
removed those two exports and pointed the generator at
`workersHubContent.en` / `seoWorkersContent.en` instead, so there is exactly
one source of English copy for these pages, same as the homepage. Now that
`/workers/` and `/workers/seo/` have locale routes, also restored
`localeHref()` for the `/workers/` links inside `SpecialistsHubPage.astro`
and `SpecialistTeamPage.astro` (previously pinned to plain English per the
"don't localise into a 404" rule) — the individual Worker *profile* links
(`/workers/{slug}/`) stay plain English, since those pages are still
English-only.

**Also done:** `/prestobot/` (the WordPrestoBot crawler explainer) is fully
localised in all 6 locales via `src/data/i18n/prestobot.ts` and
`PrestobotPage.astro`. Technical literals — the User-Agent string,
robots.txt syntax, the `WordPrestoBot` name, internal action tokens like
`read-only single page` — stay untranslated by design; they're
identifiers, not prose. Along the way, removed 5 more now-unused
`StaticPageMeta` exports from `src/data/staticPages.ts`
(`specialistsDirectory`, `contentProductionTeam`, `seoTeam`,
`operationsManagementTeam`, `approvalGovernanceTeam`, `prestobot`) that
were leftover duplicates from the specialists and prestobot translation
passes — only `workflowDemo` remains there now, still English-only.

**Decision: `/sitemap/` stays English-only.** It's a machine-oriented
route index built from `siteRoutes.ts`, which already lists every locale's
URLs (that's the whole point of the file — one list feeds both the XML
and HTML sitemaps for every page in every locale). Translating the page
chrome would be quick, but the bulk of the page is ~75 route labels and
descriptions, most of them locale-variant duplicates of the same handful
of English pages ("Specialists (Deutsch)", "Specialists (Français)"...).
There's no real reader value in 5 more copies of that same list with a
translated heading, so it's left as a single English page that already
surfaces every locale's URLs for discovery. Revisit only if this
reasoning changes.

**Also done:** `/workers/[slug]/` — all 20 individual Worker profile pages
are now localised in all 6 locales (100 new pages). This was the largest
single piece of the whole i18n effort: ~150 lines of rich prose per
worker (hero copy, a before/after voice example, four "what it
checks/improves/prepares/surfaces" lists, works-from/produces lists, six
scenarios, a boundary checklist, related-worker blurbs, a CTA) × 20
workers × 5 locales. Translation work was parallelised across 10
background agents (one per locale per half of the roster, 10 workers
each) to keep each agent's task a manageable, focused chunk rather than
one enormous single-shot translation; each wrote a
`src/data/i18n/workerProfiles/{locale}.batch{1,2}.ts` file matching a
shared `WorkerProfileTranslatable` interface, merged at read time onto
the English `workerProfiles.ts` record via `getLocalizedProfile()` — the
same "don't duplicate English" pattern as `getTeamMeta()`.

Same taxonomy decision as `/workers/`, `/workers/seo/` and
`/specialists/*`: `role`, `department`, `stage`, `team`, and all three
`heroTagPills` values stay English (they're the same fixed worker
vocabulary that appears identically across every page a worker's title
shows up on). Worker/person names (Helena, Omar, etc.) stay untouched as
proper names. Everything else — hero paragraphs, the before/after voice
example (HTML markup preserved, only visible text translated), all the
descriptive lists, scenarios, boundary copy, related-worker blurbs, CTA —
is fully translated. `beforeHtml`/`afterHtml`'s `<span class="ba-strike">`
/`<span class="ba-hl">` markup and `relatedWorkerIds[].id` lookup keys
were kept byte-identical to English throughout; only the surrounding text
translates.

No Markdown mirror per locale for these pages either, consistent with the
`/workers/` decision (and honestly out of scope at this volume — 20
workers × 5 locales of markdown would be its own project). The XML
sitemap (`sitemap.xml.ts`) does include all 100 locale profile URLs for
crawler discovery, even without a mirror; the human HTML sitemap stays
English-only per the existing `/sitemap/` decision above.

Cross-links to profile pages from `/workers/`, `/workers/seo/` and
`/specialists/*` now use `localeHref()` instead of plain English paths,
now that the route exists in every locale — the last of the
"revisit once the route exists" follow-ups flagged in earlier phases.

**Found and fixed two pre-existing translation gaps while building this
pass:** the "What it checks / improves / prepares" quad-card headings on
every profile page were hardcoded English strings never wired to any
locale dictionary (now in `workerProfilePageChrome`), and the footer's
"How it works" link was hardcoded English across *every* previously
shipped translated page (specialists, workers directory, prestobot, and
this one) — added `commonStrings.howItWorks` and fixed all six
components. Caught via visual Playwright review of a live German page,
not by code inspection alone — a reminder that string-audit greps don't
catch everything and a real screenshot pass matters.

**New page, English-only for now:** `/pricing/` shipped after the passes
above, already structured for this plan: all visible copy lives in
`src/data/i18n/pricing.ts` (typed `Partial<Record<Locale, ...>> & { en }`)
consumed by a locale-parameterised `src/components/PricingPage.astro`, with
`src/pages/pricing.astro` as the thin English wrapper. Translating it later
means adding the 5 locale entries plus a
`src/pages/[locale]/pricing.astro` route — no component surgery. Note the
page's plan prices, credits and top-up packs are NOT copy: they load
client-side from the app's public pricing API
(`GET {PUBLIC_APP_API_BASE || https://app.wordpresto.com}/api/public/pricing`)
so pricing changes in the app reflect on the site without a redeploy, with
the client strings injected via a `<script type="application/json"
id="pricing-config">` tag (the `#wl-i18n` pattern). If the API is
unreachable or returns an unusable shape the page shows an honest
"pricing is being finalised" fallback with the waitlist CTA — it never
renders invented numbers. The two footnote lines under the plans grid are
required copy, rendered verbatim; do not reword them. The Markdown mirror
(`public/pricing/index.md`) deliberately carries no plan prices, only the
pricing model in prose plus the stable example workflow credit costs. The
homepage masthead's previously dead Pricing link (`href="#"`) now points
at `/pricing/` (unprefixed, same convention as other not-yet-localised
routes).

**Site-wide copy change: "waitlist" wording retired from visible copy.**
The owner shifted the posture from "sign up to the waitlist" to a direct
join framing. CTA labels are now "Join now" (en) / "Aderir agora" (pt) /
"Junte-se agora" (pt-br) / "Únete ahora" (es) / "Jetzt beitreten" (de) /
"Rejoindre maintenant" (fr) — updated in `common.ts` (`joinWaitlist` key,
name kept as an internal id), `home.ts` (`ctaPrimary` ×2 per locale),
`pricing.ts`, `waitlist.ts` (page title/H1/submit/consent/success copy in
all 6 locales, e.g. en H1 is now "Join Word Presto."), plus hardcoded
strings in `workflow-demo/index.astro`, `sitemap/index.astro`,
`siteRoutes.ts` labels and `legal.ts` (waitlist mentions reworded to
"early-access application"). The `/waitlist` ROUTE, the `/api/waitlist`
endpoint, the `waitlist_applications` table, the `waitlistContent` /
`joinWaitlist` identifiers and the auth-gated `/admin/waitlist` pages are
deliberately unchanged — the multi-step application form IS the join
mechanism, and renaming the route would break links/SEO and backend
wiring. Verified via Playwright innerText sweep across en/pt/pt-br/es/de/fr
homepages, waitlist pages, pricing, workflow-demo, sitemap and privacy.

**Next up:** `/workflow-demo/` (1,937 lines) is the only major page left
untranslated. It's a dense, narrative workflow-demo essay
(`noindex`, not an SEO page) — deliberately deferred earlier in this plan
as needing focused, unhurried attention rather than being folded into a
larger batch. With the worker-profile pass now setting a proven pattern
for parallelising very large translation volumes across background
agents, the same approach applies well here.

hreflang tags and hreflang-aware hreflang/canonical linking between locale
variants are not wired up yet — each locale page has its own correct
canonical URL, but pages don't yet cross-link to their sibling locales via
`<link rel="alternate" hreflang="...">`. That's a quick follow-up once more
of the site is translated (not much value in hreflang between just 6
homepage variants when every other page is still English-only).

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

## Decisions (resolve the former "open questions")

1. **URL structure**: subdirectory prefix confirmed — `/pt/`, `/pt-br/`,
   `/es/`, `/de/`, `/fr/`, English unprefixed at `/`. Implemented.
2. **Translation source**: done directly rather than via a paid MT API. No
   separate native-reviewer pass is planned for now — flag any specific
   string that reads wrong and it'll be fixed directly.
3. **Scope**: full site, all 41 workers, not staged by traffic. The
   remaining work is sequenced by what's easiest to ship correctly next
   (team names/summaries, then the rest of the site, then worker profiles
   as the largest piece), not by cutting scope.
4. **llms.txt / markdown mirrors**: per-locale, confirmed. Homepage mirrors
   are live (`public/{locale}/index.md`); the rest of the site's mirrors
   will follow the same page as its live route is translated. `llms.txt`
   itself (the site-wide index) stays a single English file for now — it
   links to the canonical (English) URLs; revisit once most of the site has
   locale variants worth indexing separately.
5. **Auto-translation of newly-added pages**: explicitly deferred, per your
   note — "we can work on later." Nothing in this pass builds that pipeline;
   every new page still needs its dictionary entries added by hand for now.

## Explicitly out of scope for this pass

- Adding a CMS or translation-management platform.
- Localising the WordPresto product app itself (separate repo, separate
  effort — this plan is frontend-marketing-site only).
- Automatic browser-language redirect.
- Automatic translation pipeline for new pages (see decision 5 above).
- hreflang cross-linking between locale variants (see "Known gap" above).

## Deploy pipeline check (2026-07-08)

Confirmed via GitHub's API that the Word Presto tracking-tag change
(PR #102) is merged into `main` and the file content on `main` HEAD
includes it. This doc-only change (this paragraph) is a follow-up PR to
isolate whether merges to `main` are reaching the live Vercel production
deployment, since the Site Signals dashboard reported no events received
after the tracking-tag merge.
