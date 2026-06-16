// Worker profile image manifest for the marketing site.
// Mirrors WORKER_PROFILE_IMAGE from client/src/lib/agentProfileImages.ts
// for content-workflow workers only. SEO workers are not shown on the homepage.
//
// Image path pattern: /agents/profiles/profile-{n}-{size}.webp
// Sizes: 192 (1×), 384 (2× srcset)

export interface WorkerData {
  id: string;
  name: string;       // First name shown on card
  role: string;       // Worker display title
  department: string; // Department tag
  team: 'content' | 'governance';
  stage: string;
  summary: string;
  output: string;
  image: string;
  image2x: string;
  teamColor: string;
}

export const workers: WorkerData[] = [
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
    team: 'governance',
    stage: 'Approve',
    summary: 'Summarises what is ready, what needs attention and what should not move forward so humans can make a confident sign-off decision.',
    output: 'Approval report',
    image: '/agents/profiles/profile-21-192.webp',
    image2x: '/agents/profiles/profile-21-384.webp',
    teamColor: 'var(--team-governance)',
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
    stage: 'Prepare',
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
    team: 'governance',
    stage: 'Review',
    summary: 'Flags unsupported claims, risky statements and compliance issues in content before it is approved or published.',
    output: 'Risk & compliance report',
    image: '/agents/profiles/profile-34-192.webp',
    image2x: '/agents/profiles/profile-34-384.webp',
    teamColor: 'var(--team-governance)',
  },
  {
    id: 'content_refresh_brief',
    name: 'Iris',
    role: 'Content Refresh Brief Worker',
    department: 'Content Refresh',
    team: 'content',
    stage: 'Plan',
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
    stage: 'Prepare',
    summary: 'Creates a distribution brief that maps where approved content should go and how it should be adapted for each channel.',
    output: 'Distribution brief',
    image: '/agents/profiles/profile-37-192.webp',
    image2x: '/agents/profiles/profile-37-384.webp',
    teamColor: 'var(--team-content)',
  },
];
