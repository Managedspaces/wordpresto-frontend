# CLAUDE.md

## Project

This is the WordPresto Astro frontend marketing site.

WordPresto is the content engine behind better publishing workflows. The site should present WordPresto as a human, tactile, paper-and-ink content workflow system for copywriters, business owners, website teams and agencies.

The front-end should not feel like an AI SaaS dashboard, chatbot product or generic SEO tool.

## Core Positioning

Homepage visible positioning:

> WordPresto is the content engine behind better publishing workflows.

Supporting line:

> Plan, brief, write, review and improve content before it reaches your CMS, website or client.

Keep the homepage focused on content workflow, human review, publishing preparation and useful handoff.

Do not lead with SEO, technical audits, metadata, accessibility, schema, conversion alignment or internal Worker machinery on the homepage.

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
seoTitle: "Content workflow engine for publishing teams | WordPresto",
pageTitle: "WordPresto is the content engine behind better publishing workflows.",
metaDescription: "Plan, brief, write, review and improve content before it reaches your CMS, website or client."
```

Use `astro-seo` for metadata.

Include:

* title
* meta description
* canonical
* Open Graph
* Twitter card
* robots defaults

## Markdown Mirrors And LLM Files

Each page should have a generated Markdown version.

The Astro page and Markdown mirror must come from the same source of truth.

Do not manually duplicate copy in `.astro` and `.md`.

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

Avoid visible homepage language:

* SEO
* metadata
* schema
* accessibility
* conversion alignment
* technical audit
* capabilities
* cannibalisation
* internal linking

Those concepts can exist deeper in the product, but they should not be the homepage front door.

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
* “autopilot publishing”
* “write blogs in seconds”
* overexplaining AI

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
* Approval Reporter
* Publishing Preparer

Deeper Worker pages can introduce more specific worker roles.

## Validation Before Completion

Before reporting completion, verify:

* Astro build passes
* no horizontal overflow on mobile
* homepage is readable on mobile
* waitlist form works on mobile
* CTAs route to `/waitlist`
* visible homepage copy does not expose technical/SEO/internal capability language
* `<title>` and visible H1 are separate where required
* meta description exists
* OG image exists
* Markdown mirrors generate
* `llms.txt` and `llm.txt` exist
* no Payload/CMS dependency was added
* no Supabase/Aurora dependency was added
