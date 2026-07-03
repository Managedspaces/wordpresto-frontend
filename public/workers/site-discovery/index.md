---
title: "Site Discovery Worker (planned) | WordPresto"
description: "Claire is the planned site discovery specialist for Word Presto: a bounded, owner-scoped discovery of a domain's URLs and a crawl-limited internal link picture. Not yet live."
canonical: "https://wordpresto.com/workers/site-discovery/"
worker: "Claire"
role: "Site Discovery Worker"
stage: "Site discovery"
output: "Planned discovery review"
---

# Planned: map the pages before deeper site intelligence begins.

Claire is the planned site discovery specialist for Word Presto: a bounded, owner-scoped discovery of a domain's URLs and a crawl-limited internal link picture. Not yet live.

---

Claire is the planned site discovery specialist for Word Presto. Her role is to support a bounded, owner-scoped discovery of a single domain's URLs and a crawl-limited internal link picture. She is not live yet. This page describes the intended capability: a careful discovery layer that helps the platform understand which pages exist, how they may connect, and which URLs may need review, without pretending to produce a complete site inventory.

## A site map is only useful if it is honest about its limits.

Discovery can easily overpromise. A crawler may miss pages, hit limits, respect robots rules, fail on JavaScript-heavy routes, or see only part of the link graph. Treating that as a complete source of truth creates bad decisions. Claire is designed to keep discovery bounded, explicit and review-only.

## Planned discovery without fake completeness.

Claire is intended to discover URLs from approved sources and produce a review-only picture of the site's crawl-limited structure. She should never claim a complete inventory or confirmed orphan status without enough evidence.

### Checks

- Owned-domain URL discovery
- Sitemap and crawl-limited URL signals
- Internal link picture within strict limits
- Candidate orphan signals
- Discovery limitations
- Manual checks required before treating data as complete

### Improves

- Project intelligence setup
- Site-level content visibility
- Early inventory planning
- Internal link and orphan-risk review

### Prepares

- Discovered URL list
- Crawl-limited link picture
- Candidate orphan notes
- Discovery limitation summary

### Surfaces for human review

- Pages discovered during the bounded pass
- URLs that may need inspection
- Gaps requiring manual confirmation
- Limits of what the discovery pass could see

## What Claire is planned to work from, and what she would produce.

### Works from

- Owned domain
- Sitemap signals where available
- Crawl-limited page discovery
- Internal links found during discovery
- Robots and safety constraints

### Produces

- Discovered URL list
- Crawl-limited link picture
- Candidate orphan notes
- Discovery limitations
- Manual follow-up checks

## When to use Claire

### A new website project is being set up.

Claire will help discover the initial set of pages the project should know about.

### The content inventory needs more source data.

She will support a bounded discovery pass before inventory expansion.

### Internal link planning needs a site picture.

Claire will provide a limited link view that other workers can review.

### Candidate orphan pages need investigation.

She will flag candidates without pretending they are confirmed.

### A site audit needs a starting URL set.

Claire will help build the first review list.

### Editors need discovery limits made visible.

She will show what was discovered, what was not, and what needs manual checking.

## Claire is planned, not live.

Claire must be presented as a planned capability until the site discovery workflow is actually built and wired. She should not be shown as runnable, and the page should not imply full-site discovery already exists.

### Boundary checklist

- Claire does not run today — this page describes a planned capability only.
- Discovery results, when built, will always be labelled crawl-limited, never complete.
- Candidate orphan pages will be flagged for review, never confirmed automatically.
- Robots, ownership and crawl limits will always be respected, not bypassed.

### Will not

- Run today as an active worker
- Claim a complete site inventory
- Ignore robots, ownership or crawl limits
- Confirm orphan pages from partial crawl data
- Publish, edit or write to any CMS

## Workers Claire is planned to work alongside.

- **page_inspector**: Inspects individual URLs discovered or supplied for review. Output: Page signals.
- **Nora — Content Inventory Worker**: Classifies discovered pages as content assets. Output: Inventory review.
- **internal_linking**: Reviews page-level relationship signals after pages are inspected. Output: Link assessment.
