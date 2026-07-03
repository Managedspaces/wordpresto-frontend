// Marketing-safe worker/team manifest for the public site.
//
// SOURCE OF TRUTH: this mirrors the WordPresto product app's real worker
// registry and team assignments —
//   shared/workflows/workers.ts        (WORKER_REGISTRY: id, name, role, department, status)
//   client/src/lib/workerCards.ts      (WORKER_TEAM, TEAM_DISPLAY_ORDER, TEAM_PURPOSE,
//                                        BETA_DASHBOARD_HIDDEN_WORKER_IDS)
// in the separate `WordPresto` app repository. The two sites are not a monorepo
// and do not share a build, so this file is hand-mirrored rather than imported.
//
// TODO: replace this file with a generated export once the app repo publishes a
// marketing-safe JSON manifest (or the repos share a workspace). Until then, any
// change to WORKER_REGISTRY / WORKER_TEAM in the app repo must be re-mirrored here.
//
// 43 workers exist in the app registry; `safe_edit` and `publishing` are
// deliberately hidden from the live workforce (guarded execution capabilities
// not yet enabled), matching BETA_DASHBOARD_HIDDEN_WORKER_IDS. That leaves the
// 41 specialists shown across the site.

export type TeamId = 'content' | 'seo' | 'operations' | 'governance';

export type WorkerStatus = 'available' | 'partial' | 'planned';

export interface TeamMeta {
  id: TeamId;
  name: string;
  summary: string;
  color: string;
  /** Team page on the marketing site. */
  href: string;
  cta: string;
}

export interface WorkerEntry {
  id: string;
  name: string;
  roleTitle: string;
  department: string;
  team: TeamId;
  status: WorkerStatus;
  /** Slug of an existing /workers/[slug]/ profile page, or null if not built yet. */
  slug: string | null;
}

// Public team order for the marketing site (distinct from the app's internal
// Command Centre dashboard order, which leads with Operations).
export const TEAM_ORDER: TeamId[] = ['content', 'seo', 'operations', 'governance'];

export const TEAM_META: Record<TeamId, TeamMeta> = {
  content: {
    id: 'content',
    name: 'Content Production Team',
    summary: 'Plans, drafts, rewrites and proofs the copy, turning briefs into structured, ready content.',
    color: 'var(--team-content)',
    href: '/specialists/content-production/',
    cta: 'Browse Content Workers',
  },
  seo: {
    id: 'seo',
    name: 'SEO Team',
    summary: 'Works search intent, structure, technical signals, evidence and internal relationships into the content, not bolted on at the end.',
    color: 'var(--team-seo)',
    href: '/specialists/seo/',
    cta: 'Browse SEO Workers',
  },
  operations: {
    id: 'operations',
    name: 'Operations / Management',
    summary: 'Coordinates the review flow and keeps every piece of work ready for a human decision.',
    color: 'var(--team-strategy)',
    href: '/specialists/operations-management/',
    cta: 'Browse Operations',
  },
  governance: {
    id: 'governance',
    name: 'Approval / Governance Team',
    summary: 'Checks risk, evidence, approval state and whether proposed changes are ready for the Editor.',
    color: 'var(--team-governance)',
    href: '/specialists/approval-governance/',
    cta: 'Browse Approval Workers',
  },
};

// One entry per visible worker (safe_edit and publishing excluded, matching the
// app's BETA_DASHBOARD_HIDDEN_WORKER_IDS). `slug` is set only where an existing
// /workers/[slug]/ profile page exists in workerProfiles.ts.
export const WORKERS: WorkerEntry[] = [
  // ---- Content Production Team ----
  { id: 'content_analyst', name: 'Omar', roleTitle: 'Content reviewer', department: 'Content Review', team: 'content', status: 'available', slug: 'content-analyst' },
  { id: 'structure', name: 'Marcus', roleTitle: 'Structure editor', department: 'Editorial Architecture', team: 'content', status: 'available', slug: 'structure' },
  { id: 'content_inventory', name: 'Nora', roleTitle: 'Content inventory specialist', department: 'Content Inventory', team: 'content', status: 'available', slug: null },
  { id: 'voice_style', name: 'Helena', roleTitle: 'Brand voice specialist', department: 'Brand Voice', team: 'content', status: 'available', slug: 'voice-style' },
  { id: 'content_brief_builder', name: 'Luca', roleTitle: 'Editorial brief writer', department: 'Editorial Planning', team: 'content', status: 'available', slug: 'content-brief-builder' },
  { id: 'draft_rewrite', name: 'Ellis', roleTitle: 'Draft copy specialist', department: 'Editorial Drafting', team: 'content', status: 'available', slug: 'draft-rewrite' },
  { id: 'draft_quality_reviewer', name: 'Quinn', roleTitle: 'Draft quality specialist', department: 'Draft Quality', team: 'content', status: 'available', slug: 'draft-quality-reviewer' },
  { id: 'section_rewrite', name: 'Rosa', roleTitle: 'Section rewrite specialist', department: 'Section Editing', team: 'content', status: 'available', slug: 'section-rewrite' },
  { id: 'approval_report', name: 'Audrey', roleTitle: 'Approval report specialist', department: 'Approval Reporting', team: 'content', status: 'available', slug: 'approval-report' },
  { id: 'seo_metadata', name: 'Nadia', roleTitle: 'SEO metadata specialist', department: 'SEO Metadata', team: 'content', status: 'available', slug: 'seo-metadata' },
  { id: 'readability', name: 'Priya', roleTitle: 'Readability reviewer', department: 'Readability', team: 'content', status: 'available', slug: 'readability' },
  { id: 'brief_draft_alignment', name: 'Ada', roleTitle: 'Brief alignment reviewer', department: 'Brief Alignment', team: 'content', status: 'available', slug: 'brief-draft-alignment' },
  { id: 'cms_handoff', name: 'Ravi', roleTitle: 'CMS handoff reviewer', department: 'CMS Handoff', team: 'content', status: 'available', slug: 'cms-handoff' },
  { id: 'editorial_risk_claims', name: 'Vera', roleTitle: 'Editorial compliance reviewer', department: 'Editorial Compliance', team: 'content', status: 'available', slug: 'editorial-risk-claims' },
  { id: 'trust_author_credibility', name: 'Alex', roleTitle: 'Trust & credibility specialist', department: 'Trust & Credibility', team: 'content', status: 'available', slug: 'trust-author-credibility' },
  { id: 'content_refresh_brief', name: 'Iris', roleTitle: 'Content refresh specialist', department: 'Content Refresh', team: 'content', status: 'available', slug: 'content-refresh-brief' },
  { id: 'content_distribution_brief', name: 'Nina', roleTitle: 'Distribution brief specialist', department: 'Content Distribution', team: 'content', status: 'available', slug: 'content-distribution-brief' },
  { id: 'clarity_proofing', name: 'Esme', roleTitle: 'Clarity & proofing specialist', department: 'Clarity & Proofing', team: 'content', status: 'available', slug: null },

  // ---- SEO Team ----
  { id: 'page_inspector', name: 'Patrick', roleTitle: 'Source examiner', department: 'Discovery', team: 'seo', status: 'available', slug: null },
  { id: 'technical_health', name: 'Maya', roleTitle: 'Technical reviewer', department: 'Technical Review', team: 'seo', status: 'available', slug: 'technical-health' },
  { id: 'intent_analyst', name: 'Yuna', roleTitle: 'Search intent specialist', department: 'Search Intelligence', team: 'seo', status: 'available', slug: null },
  { id: 'evidence', name: 'Kenji', roleTitle: 'Evidence reviewer', department: 'Provenance', team: 'seo', status: 'available', slug: null },
  { id: 'internal_linking', name: 'Leo', roleTitle: 'Content relationship specialist', department: 'Content Relationships', team: 'seo', status: 'available', slug: null },
  { id: 'schema', name: 'Sofia', roleTitle: 'Structured-data reviewer', department: 'Structured Data', team: 'seo', status: 'available', slug: 'schema' },
  { id: 'accessibility', name: 'Mara', roleTitle: 'Accessibility reviewer', department: 'Accessibility', team: 'seo', status: 'available', slug: null },
  { id: 'cannibalisation_overlap', name: 'Cleo', roleTitle: 'Content cannibalisation analyst', department: 'Content Cannibalisation', team: 'seo', status: 'available', slug: null },
  { id: 'content_decay', name: 'Faye', roleTitle: 'Content freshness analyst', department: 'Content Freshness', team: 'seo', status: 'available', slug: null },
  { id: 'topical_authority', name: 'Zara', roleTitle: 'Topical coverage analyst', department: 'Topical Coverage', team: 'seo', status: 'available', slug: null },
  { id: 'conversion_alignment', name: 'Diane', roleTitle: 'Conversion alignment analyst', department: 'Conversion Review', team: 'seo', status: 'available', slug: null },
  { id: 'content_format_serp_fit', name: 'Ivan', roleTitle: 'Content format analyst', department: 'Content Format', team: 'seo', status: 'available', slug: null },
  { id: 'internal_link_pathway', name: 'Felix', roleTitle: 'Internal link pathway analyst', department: 'Internal Linking', team: 'seo', status: 'available', slug: null },
  { id: 'content_pruning_consolidation', name: 'Hugo', roleTitle: 'Content maintenance specialist', department: 'Content Maintenance', team: 'seo', status: 'available', slug: null },
  { id: 'serp_snippet_opportunity', name: 'Morgan', roleTitle: 'SERP snippet specialist', department: 'SERP Optimisation', team: 'seo', status: 'available', slug: 'serp-snippet-opportunity' },
  { id: 'site_discovery', name: 'Claire', roleTitle: 'Site discovery specialist', department: 'Site Discovery', team: 'seo', status: 'planned', slug: null },
  { id: 'semantic_search_analyzer', name: 'Sema', roleTitle: 'Semantic coverage analyst', department: 'Semantic Intelligence', team: 'seo', status: 'available', slug: null },
  { id: 'competitor_intel', name: 'Cassius', roleTitle: 'Competitive analyst', department: 'Competitive Intelligence', team: 'seo', status: 'available', slug: null },

  // ---- Operations / Management ----
  { id: 'review_queue', name: 'Riley', roleTitle: 'Review queue coordinator', department: 'Change Planning', team: 'operations', status: 'available', slug: null },

  // ---- Approval / Governance Team ----
  { id: 'safe_change_planner', name: 'Sam', roleTitle: 'Change planning specialist', department: 'Change Planning', team: 'governance', status: 'available', slug: null },
  { id: 'review', name: 'Helen', roleTitle: 'Review editor', department: 'Editorial Approval', team: 'governance', status: 'available', slug: null },
  { id: 'evidence_gap', name: 'Theo', roleTitle: 'Evidence gap specialist', department: 'Evidence Assurance', team: 'governance', status: 'available', slug: 'evidence-gap' },
  { id: 'editorial_approval_gate', name: 'Dana', roleTitle: 'Editorial gate reviewer', department: 'Editorial Approval Gate', team: 'governance', status: 'available', slug: null },
];

export const TOTAL_SPECIALISTS = WORKERS.length;
export const TOTAL_TEAMS = TEAM_ORDER.length;

export function getWorkersByTeam(team: TeamId): WorkerEntry[] {
  return WORKERS.filter((w) => w.team === team);
}

export interface TeamGroup extends TeamMeta {
  workers: WorkerEntry[];
  count: number;
  /** A handful of representative workers for homepage chips, not the full team. */
  examples: WorkerEntry[];
  moreCount: number;
}

/** Representative workers for a team card: profiled workers first, then the rest, capped at `max`. */
export function getExampleWorkers(team: TeamId, max = 6): WorkerEntry[] {
  const all = getWorkersByTeam(team);
  const withProfile = all.filter((w) => w.slug);
  const withoutProfile = all.filter((w) => !w.slug);
  return [...withProfile, ...withoutProfile].slice(0, max);
}

export function getTeamGroups(exampleMax = 6): TeamGroup[] {
  return TEAM_ORDER.map((team) => {
    const workers = getWorkersByTeam(team);
    const examples = getExampleWorkers(team, exampleMax);
    return {
      ...TEAM_META[team],
      workers,
      count: workers.length,
      examples,
      moreCount: Math.max(0, workers.length - examples.length),
    };
  });
}

export function getWorker(id: string): WorkerEntry | undefined {
  return WORKERS.find((w) => w.id === id);
}
