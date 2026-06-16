// Worker profile image manifest for the marketing site.
// Mirrors WORKER_PROFILE_IMAGE from client/src/lib/agentProfileImages.ts
// for content-workflow workers only. SEO workers are not shown on the homepage.
//
// Image path pattern: /agents/profiles/profile-{n}-{size}.webp
// Sizes: 192 (standard card), 384 (2× srcset)

export interface WorkerData {
  id: string;
  name: string;       // First name shown on card
  role: string;       // Job display name shown on card
  department: string; // Department shown as tag
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
    role: 'Brief Builder',
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
    role: 'Draft Writer',
    department: 'Editorial Drafting',
    team: 'content',
    stage: 'Draft',
    summary: 'Builds a first draft that follows the brief — structured, on-purpose, and ready for review rather than starting from a blank page.',
    output: 'Shaped draft',
    image: '/agents/profiles/profile-18-192.webp',
    image2x: '/agents/profiles/profile-18-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'draft_quality_reviewer',
    name: 'Quinn',
    role: 'Draft Reviewer',
    department: 'Draft Quality',
    team: 'content',
    stage: 'Review',
    summary: 'Checks whether the draft is clear, structured and ready to move forward — before it reaches a client or gets published.',
    output: 'Review notes',
    image: '/agents/profiles/profile-19-192.webp',
    image2x: '/agents/profiles/profile-19-384.webp',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'readability',
    name: 'Priya',
    role: 'Readability Editor',
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
    id: 'approval_report',
    name: 'Audrey',
    role: 'Approval Reporter',
    department: 'Approval Reporting',
    team: 'governance',
    stage: 'Approve',
    summary: 'Summarises what is ready, what still needs attention and what should not move forward — so humans can make a confident sign-off decision.',
    output: 'Approval report',
    image: '/agents/profiles/profile-21-192.webp',
    image2x: '/agents/profiles/profile-21-384.webp',
    teamColor: 'var(--team-governance)',
  },
  {
    id: 'cms_handoff',
    name: 'Ravi',
    role: 'Publishing Preparer',
    department: 'CMS Handoff',
    team: 'content',
    stage: 'Prepare',
    summary: 'Packages approved content with the metadata, structure and notes needed for clean handoff to a CMS, website or client.',
    output: 'Handoff pack',
    image: '/agents/profiles/profile-33-192.webp',
    image2x: '/agents/profiles/profile-33-384.webp',
    teamColor: 'var(--team-content)',
  },
];
