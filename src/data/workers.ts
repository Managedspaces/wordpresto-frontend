// Worker profile card manifest (images, marketing summary, output) for the
// /workers/ and /workers/seo/ directory pages. Worker ids, names, departments
// and portraits match the backend WORKER_REGISTRY in shared/workflows/workers.ts.
//
// `team` here is a page-grouping split (which directory a card appears in),
// kept separate from the real org team assignment. For the authoritative
// team/department roster used site-wide (homepage specialist bench, /specialists/
// pages, counts), see `workerRegistry.ts`, which mirrors the backend's
// WORKER_TEAM mapping.
//
// Only a subset of the full 41-worker roster has a rich marketing card here;
// the rest are listed lean via `workerRegistry.ts` until profile pages exist.
//
// Image path pattern: /agents/profiles/profile-{n}-{size}.webp
// Sizes: 192 (1×), 384 (2× srcset)

export interface WorkerData {
  id: string;
  name: string;       // First name shown on card
  role: string;       // Worker display title
  department: string; // Department tag
  team: 'content' | 'governance' | 'seo';
  stage: string;
  summary: string;
  output: string;
  image: string;
  image2x: string;
  teamColor: string;
}

export const workers: WorkerData[] = [
  {
    id: 'content_analyst',
    name: 'Omar',
    role: 'Content Analyst',
    department: 'Content Review',
    team: 'content',
    stage: 'Analyse',
    summary: 'Reviews the existing content, context and purpose so the workflow starts from a clear understanding of what is already there.',
    output: 'Content analysis',
    image: '/agents/profiles/profile-05-192.webp',
    image2x: '/agents/profiles/profile-05-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'structure',
    name: 'Marcus',
    role: 'Structure Worker',
    department: 'Editorial Architecture',
    team: 'content',
    stage: 'Structure',
    summary: 'Shapes headings, sections and page flow so the content has a clear editorial structure before or during drafting.',
    output: 'Content structure',
    image: '/agents/profiles/profile-07-192.webp',
    image2x: '/agents/profiles/profile-07-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'voice_style',
    name: 'Helena',
    role: 'Voice & Style Worker',
    department: 'Brand Voice',
    team: 'content',
    stage: 'Voice',
    summary: 'Keeps tone, style and persona consistent so content sounds like the right brand, expert or publication.',
    output: 'Voice & style guidance',
    image: '/agents/profiles/profile-08-192.webp',
    image2x: '/agents/profiles/profile-08-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'content_brief_builder',
    name: 'Luca',
    role: 'Content Brief Builder',
    department: 'Editorial Planning',
    team: 'content',
    stage: 'Brief',
    summary: 'Turns a topic and goal into a structured content brief — purpose, audience, angle and sections — before any drafting starts.',
    output: 'Content brief',
    image: '/agents/profiles/profile-13-192.webp',
    image2x: '/agents/profiles/profile-13-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'draft_rewrite',
    name: 'Ellis',
    role: 'Draft Rewrite Worker',
    department: 'Editorial Drafting',
    team: 'content',
    stage: 'Draft',
    summary: 'Builds and rewrites drafts that follow the brief — structured, on-purpose, and ready for review.',
    output: 'Shaped draft',
    image: '/agents/profiles/profile-18-192.webp',
    image2x: '/agents/profiles/profile-18-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'draft_quality_reviewer',
    name: 'Quinn',
    role: 'Draft Quality Reviewer',
    department: 'Draft Quality',
    team: 'content',
    stage: 'Review',
    summary: 'Checks whether the draft is clear, structured and ready to move forward before it reaches a client or CMS.',
    output: 'Review notes',
    image: '/agents/profiles/profile-19-192.webp',
    image2x: '/agents/profiles/profile-19-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'section_rewrite',
    name: 'Rosa',
    role: 'Section Rewrite Worker',
    department: 'Section Editing',
    team: 'content',
    stage: 'Improve',
    summary: 'Rewrites individual sections that are unclear, thin or off-brief without touching the rest of the piece.',
    output: 'Rewritten sections',
    image: '/agents/profiles/profile-20-192.webp',
    image2x: '/agents/profiles/profile-20-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'approval_report',
    name: 'Audrey',
    role: 'Approval Report Worker',
    department: 'Approval Reporting',
    team: 'content',
    stage: 'Approve',
    summary: 'Summarises what is ready, what needs attention and what should not move forward so humans can make a confident sign-off decision.',
    output: 'Approval report',
    image: '/agents/profiles/profile-21-192.webp',
    image2x: '/agents/profiles/profile-21-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'readability',
    name: 'Priya',
    role: 'Readability Worker',
    department: 'Readability',
    team: 'content',
    stage: 'Improve',
    summary: 'Tightens sentences, simplifies structure and improves flow so the content reads clearly for its intended audience.',
    output: 'Improved draft',
    image: '/agents/profiles/profile-25-192.webp',
    image2x: '/agents/profiles/profile-25-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'brief_draft_alignment',
    name: 'Ada',
    role: 'Brief-to-Draft Alignment Worker',
    department: 'Brief Alignment',
    team: 'content',
    stage: 'Review',
    summary: 'Checks that the draft actually fulfils the brief — surfacing gaps, drift and misaligned sections before they go any further.',
    output: 'Alignment report',
    image: '/agents/profiles/profile-32-192.webp',
    image2x: '/agents/profiles/profile-32-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'cms_handoff',
    name: 'Ravi',
    role: 'CMS Handoff & Publishing Package Worker',
    department: 'CMS Handoff',
    team: 'content',
    stage: 'Handoff',
    summary: 'Packages approved content with the structure, metadata and notes needed for clean handoff to a CMS, website or client.',
    output: 'Handoff pack',
    image: '/agents/profiles/profile-33-192.webp',
    image2x: '/agents/profiles/profile-33-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'editorial_risk_claims',
    name: 'Vera',
    role: 'Editorial Risk & Claims Compliance Worker',
    department: 'Editorial Compliance',
    team: 'content',
    stage: 'Review',
    summary: 'Flags unsupported claims, risky statements and compliance issues in content before it is approved or published.',
    output: 'Risk & compliance report',
    image: '/agents/profiles/profile-34-192.webp',
    image2x: '/agents/profiles/profile-34-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'content_refresh_brief',
    name: 'Iris',
    role: 'Content Refresh Brief Worker',
    department: 'Content Refresh',
    team: 'content',
    stage: 'Refresh',
    summary: 'Produces a structured brief for refreshing existing content — what to update, what to cut and what to add.',
    output: 'Refresh brief',
    image: '/agents/profiles/profile-35-192.webp',
    image2x: '/agents/profiles/profile-35-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'content_distribution_brief',
    name: 'Nina',
    role: 'Content Distribution Brief Worker',
    department: 'Content Distribution',
    team: 'content',
    stage: 'Distribution',
    summary: 'Creates a distribution brief that maps where approved content should go and how it should be adapted for each channel.',
    output: 'Distribution brief',
    image: '/agents/profiles/profile-37-192.webp',
    image2x: '/agents/profiles/profile-37-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'clarity_proofing',
    name: 'Esme',
    role: 'Creative Writing Worker',
    department: 'Clarity & Proofing',
    team: 'content',
    stage: 'Proofing',
    summary: 'Proofs grammar, clarity, tone and risk-aware wording, tightening the writing so it is polished and consistent before it reaches review.',
    output: 'Clarity review',
    image: '/agents/profiles/profile-42-192.webp',
    image2x: '/agents/profiles/profile-42-384.webp',
    teamColor: 'var(--team-content)',
  },
];

// SEO Workers. These sit alongside the content Workers in the same workflow and
// use the identical card and profile-page pattern. They are kept in a separate
// array so the homepage (which renders `workers`) stays writer-led, while the
// /workers/ directory and the profile route render the full team.
//
// ids, names, departments and portraits mirror the backend WORKER_REGISTRY and
// WORKER_PROFILE_IMAGE exactly (shared/workflows/workers.ts). Only `available`,
// publicly-appropriate review/draft Workers are shown — internal Workers such as
// Safe Edit and Publishing are deliberately not exposed.
export const seoWorkers: WorkerData[] = [
  {
    id: 'seo_metadata',
    name: 'Nadia',
    role: 'SEO Title & Metadata Worker',
    department: 'SEO Metadata',
    team: 'content',
    stage: 'Metadata',
    summary: 'Reviews the SEO title, meta description and H1 against search intent, then drafts clearer options for the writer to approve.',
    output: 'Metadata drafts',
    image: '/agents/profiles/profile-22-192.webp',
    image2x: '/agents/profiles/profile-22-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'serp_snippet_opportunity',
    name: 'Morgan',
    role: 'SERP Snippet Worker',
    department: 'SERP Optimisation',
    team: 'seo',
    stage: 'Snippets',
    summary: 'Looks at how a page is likely to appear in search results and points out snippet and rich-result opportunities worth shaping for.',
    output: 'Snippet review',
    image: '/agents/profiles/profile-38-192.webp',
    image2x: '/agents/profiles/profile-38-384.webp',
    teamColor: 'var(--team-seo)',
  },
  {
    id: 'schema',
    name: 'Sofia',
    role: 'Schema Worker',
    department: 'Structured Data',
    team: 'seo',
    stage: 'Structured data',
    summary: 'Reviews the structured data on a page and recommends the schema types that match what the page actually is, for review.',
    output: 'Schema review',
    image: '/agents/profiles/profile-10-192.webp',
    image2x: '/agents/profiles/profile-10-384.webp',
    teamColor: 'var(--team-seo)',
  },
  {
    id: 'technical_health',
    name: 'Maya',
    role: 'Technical Health Worker',
    department: 'Technical Review',
    team: 'seo',
    stage: 'Technical',
    summary: 'Checks the technical signals behind a page — metadata, headings, indexability and structure — and reports what needs a closer look.',
    output: 'Technical findings',
    image: '/agents/profiles/profile-02-192.webp',
    image2x: '/agents/profiles/profile-02-384.webp',
    teamColor: 'var(--team-seo)',
  },
  {
    id: 'trust_author_credibility',
    name: 'Alex',
    role: 'Trust & Author Credibility Worker',
    department: 'Trust & Credibility',
    team: 'content',
    stage: 'Trust',
    summary: 'Reviews the trust and authorship signals around a page so readers, and search engines, can see who stands behind the content.',
    output: 'Trust review',
    image: '/agents/profiles/profile-39-192.webp',
    image2x: '/agents/profiles/profile-39-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'evidence_gap',
    name: 'Theo',
    role: 'Evidence Gap Worker',
    department: 'Evidence Assurance',
    team: 'governance',
    stage: 'Evidence',
    summary: 'Turns weak or missing evidence into a clear checklist, so claims are supported before a page is approved or handed off.',
    output: 'Evidence checklist',
    image: '/agents/profiles/profile-23-192.webp',
    image2x: '/agents/profiles/profile-23-384.webp',
    teamColor: 'var(--team-governance)',
  },
];

// Combined list for lookups (e.g. resolving related Workers across both teams).
// The homepage must keep using `workers` only; use this where the full team is
// needed, such as the /workers/ directory and the profile route.
export const allWorkers: WorkerData[] = [...workers, ...seoWorkers];
