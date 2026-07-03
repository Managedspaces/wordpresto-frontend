import type { Locale } from '@/i18n/locales';

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
  /**
   * Portrait number. 1-40 per the app repo's canonical portrait map
   * (docs/agent-profile-map.md, WORKER_PROFILE_IMAGE in agentProfileImages.ts).
   * 42-44 are marketing-only portraits (profile50.zip) assigned locally to the
   * three workers added after that 40-portrait set — the app repo has no
   * portrait mapping for them yet. null renders an initials avatar instead.
   */
  portrait: number | null;
}

// Spare marketing-only portraits from profile50.zip, not yet assigned to a
// worker. Use the next one here when a new worker needs a portrait, then
// remove it from this list.
export const SPARE_PORTRAITS = [45, 46, 47, 48, 49, 50, 51];

/** Deterministic asset path pattern from the app repo's portrait map: /agents/profiles/profile-{nn}-{size}.webp */
export function workerImage(entry: WorkerEntry): { src: string; src2x: string } | null {
  if (!entry.portrait) return null;
  const nn = String(entry.portrait).padStart(2, '0');
  return {
    src: `/agents/profiles/profile-${nn}-192.webp`,
    src2x: `/agents/profiles/profile-${nn}-384.webp`,
  };
}

/** Upper-case initials fallback for workers without an assigned portrait. */
export function workerInitials(name: string): string {
  return name.slice(0, 2).toUpperCase();
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

// Translated name/summary/cta per locale. `color` and `href` never change
// by locale, so they stay only in TEAM_META above; getTeamMeta() below
// merges the two. English (`en`) intentionally mirrors TEAM_META verbatim
// so there is one wording to maintain, not two.
type TeamCopy = Record<TeamId, Pick<TeamMeta, 'name' | 'summary' | 'cta'>>;

const TEAM_I18N: Record<Locale, TeamCopy> = {
  en: {
    content: { name: 'Content Production Team', summary: 'Plans, drafts, rewrites and proofs the copy, turning briefs into structured, ready content.', cta: 'Browse Content Workers' },
    seo: { name: 'SEO Team', summary: 'Works search intent, structure, technical signals, evidence and internal relationships into the content, not bolted on at the end.', cta: 'Browse SEO Workers' },
    operations: { name: 'Operations / Management', summary: 'Coordinates the review flow and keeps every piece of work ready for a human decision.', cta: 'Browse Operations' },
    governance: { name: 'Approval / Governance Team', summary: 'Checks risk, evidence, approval state and whether proposed changes are ready for the Editor.', cta: 'Browse Approval Workers' },
  },
  pt: {
    content: { name: 'Equipa de Produção de Conteúdo', summary: 'Planeia, redige, reescreve e revê o texto, transformando briefings em conteúdo estruturado e pronto.', cta: 'Ver especialistas de conteúdo' },
    seo: { name: 'Equipa de SEO', summary: 'Trabalha a intenção de pesquisa, a estrutura, os sinais técnicos, a evidência e as relações internas no conteúdo, não como um extra final.', cta: 'Ver especialistas de SEO' },
    operations: { name: 'Operações / Gestão', summary: 'Coordena o fluxo de revisão e mantém cada peça de trabalho pronta para uma decisão humana.', cta: 'Ver Operações' },
    governance: { name: 'Equipa de Aprovação / Governação', summary: 'Verifica o risco, a evidência, o estado de aprovação e se as alterações propostas estão prontas para o Editor.', cta: 'Ver especialistas de aprovação' },
  },
  'pt-br': {
    content: { name: 'Time de Produção de Conteúdo', summary: 'Planeja, redige, reescreve e revisa o texto, transformando briefings em conteúdo estruturado e pronto.', cta: 'Ver especialistas de conteúdo' },
    seo: { name: 'Time de SEO', summary: 'Trabalha a intenção de busca, a estrutura, os sinais técnicos, as evidências e as relações internas no conteúdo, não como um extra do final.', cta: 'Ver especialistas de SEO' },
    operations: { name: 'Operações / Gestão', summary: 'Coordena o fluxo de revisão e mantém cada parte do trabalho pronta para uma decisão humana.', cta: 'Ver Operações' },
    governance: { name: 'Time de Aprovação / Governança', summary: 'Verifica o risco, as evidências, o status de aprovação e se as mudanças propostas estão prontas para o Editor.', cta: 'Ver especialistas de aprovação' },
  },
  es: {
    content: { name: 'Equipo de Producción de Contenido', summary: 'Planifica, redacta, reescribe y corrige el texto, convirtiendo los briefs en contenido estructurado y listo.', cta: 'Ver especialistas de contenido' },
    seo: { name: 'Equipo de SEO', summary: 'Trabaja la intención de búsqueda, la estructura, las señales técnicas, la evidencia y las relaciones internas en el contenido, no como algo añadido al final.', cta: 'Ver especialistas de SEO' },
    operations: { name: 'Operaciones / Gestión', summary: 'Coordina el flujo de revisión y mantiene cada pieza de trabajo lista para una decisión humana.', cta: 'Ver Operaciones' },
    governance: { name: 'Equipo de Aprobación / Gobernanza', summary: 'Verifica el riesgo, la evidencia, el estado de aprobación y si los cambios propuestos están listos para el Editor.', cta: 'Ver especialistas de aprobación' },
  },
  de: {
    content: { name: 'Content-Produktions-Team', summary: 'Plant, entwirft, überarbeitet und korrigiert den Text und macht aus Briefings strukturierten, fertigen Content.', cta: 'Content-Spezialist:innen ansehen' },
    seo: { name: 'SEO-Team', summary: 'Arbeitet Suchintention, Struktur, technische Signale, Belege und interne Verknüpfungen in den Content ein, statt sie am Ende anzuflanschen.', cta: 'SEO-Spezialist:innen ansehen' },
    operations: { name: 'Operations / Management', summary: 'Koordiniert den Review-Fluss und hält jedes Stück Arbeit bereit für eine menschliche Entscheidung.', cta: 'Operations ansehen' },
    governance: { name: 'Freigabe-/Governance-Team', summary: 'Prüft Risiko, Belege, Freigabestatus und ob vorgeschlagene Änderungen bereit für den Editor sind.', cta: 'Freigabe-Spezialist:innen ansehen' },
  },
  fr: {
    content: { name: 'Équipe de Production de Contenu', summary: 'Planifie, rédige, réécrit et relit le texte, transformant les briefs en contenu structuré et prêt.', cta: 'Voir les spécialistes contenu' },
    seo: { name: 'Équipe SEO', summary: 'Intègre l’intention de recherche, la structure, les signaux techniques, les preuves et les relations internes dans le contenu, pas ajoutés à la fin.', cta: 'Voir les spécialistes SEO' },
    operations: { name: 'Opérations / Gestion', summary: 'Coordonne le flux de révision et garde chaque élément de travail prêt pour une décision humaine.', cta: 'Voir les opérations' },
    governance: { name: 'Équipe Validation / Gouvernance', summary: 'Vérifie le risque, les preuves, l’état de validation et si les changements proposés sont prêts pour l’Éditeur.', cta: 'Voir les spécialistes validation' },
  },
};

/** TeamMeta with name/summary/cta translated for `locale`; color/href are locale-independent. */
export function getTeamMeta(id: TeamId, locale: Locale = 'en'): TeamMeta {
  return { ...TEAM_META[id], ...TEAM_I18N[locale][id] };
}

// One entry per visible worker (safe_edit and publishing excluded, matching the
// app's BETA_DASHBOARD_HIDDEN_WORKER_IDS). `slug` is set only where an existing
// /workers/[slug]/ profile page exists in workerProfiles.ts.
export const WORKERS: WorkerEntry[] = [
  // ---- Content Production Team ----
  { id: 'content_analyst', name: 'Omar', roleTitle: 'Content reviewer', department: 'Content Review', team: 'content', status: 'available', slug: 'content-analyst', portrait: 5 },
  { id: 'structure', name: 'Marcus', roleTitle: 'Structure editor', department: 'Editorial Architecture', team: 'content', status: 'available', slug: 'structure', portrait: 7 },
  { id: 'content_inventory', name: 'Nora', roleTitle: 'Content inventory specialist', department: 'Content Inventory', team: 'content', status: 'available', slug: 'content-inventory', portrait: 14 },
  { id: 'voice_style', name: 'Helena', roleTitle: 'Brand voice specialist', department: 'Brand Voice', team: 'content', status: 'available', slug: 'voice-style', portrait: 8 },
  { id: 'content_brief_builder', name: 'Luca', roleTitle: 'Editorial brief writer', department: 'Editorial Planning', team: 'content', status: 'available', slug: 'content-brief-builder', portrait: 13 },
  { id: 'draft_rewrite', name: 'Ellis', roleTitle: 'Draft copy specialist', department: 'Editorial Drafting', team: 'content', status: 'available', slug: 'draft-rewrite', portrait: 18 },
  { id: 'draft_quality_reviewer', name: 'Quinn', roleTitle: 'Draft quality specialist', department: 'Draft Quality', team: 'content', status: 'available', slug: 'draft-quality-reviewer', portrait: 19 },
  { id: 'section_rewrite', name: 'Rosa', roleTitle: 'Section rewrite specialist', department: 'Section Editing', team: 'content', status: 'available', slug: 'section-rewrite', portrait: 20 },
  { id: 'approval_report', name: 'Audrey', roleTitle: 'Approval report specialist', department: 'Approval Reporting', team: 'content', status: 'available', slug: 'approval-report', portrait: 21 },
  { id: 'seo_metadata', name: 'Nadia', roleTitle: 'SEO metadata specialist', department: 'SEO Metadata', team: 'content', status: 'available', slug: 'seo-metadata', portrait: 22 },
  { id: 'readability', name: 'Priya', roleTitle: 'Readability reviewer', department: 'Readability', team: 'content', status: 'available', slug: 'readability', portrait: 25 },
  { id: 'brief_draft_alignment', name: 'Ada', roleTitle: 'Brief alignment reviewer', department: 'Brief Alignment', team: 'content', status: 'available', slug: 'brief-draft-alignment', portrait: 32 },
  { id: 'cms_handoff', name: 'Ravi', roleTitle: 'CMS handoff reviewer', department: 'CMS Handoff', team: 'content', status: 'available', slug: 'cms-handoff', portrait: 33 },
  { id: 'editorial_risk_claims', name: 'Vera', roleTitle: 'Editorial compliance reviewer', department: 'Editorial Compliance', team: 'content', status: 'available', slug: 'editorial-risk-claims', portrait: 34 },
  { id: 'trust_author_credibility', name: 'Alex', roleTitle: 'Trust & credibility specialist', department: 'Trust & Credibility', team: 'content', status: 'available', slug: 'trust-author-credibility', portrait: 39 },
  { id: 'content_refresh_brief', name: 'Iris', roleTitle: 'Content refresh specialist', department: 'Content Refresh', team: 'content', status: 'available', slug: 'content-refresh-brief', portrait: 35 },
  { id: 'content_distribution_brief', name: 'Nina', roleTitle: 'Distribution brief specialist', department: 'Content Distribution', team: 'content', status: 'available', slug: 'content-distribution-brief', portrait: 37 },
  { id: 'clarity_proofing', name: 'Esme', roleTitle: 'Clarity & proofing specialist', department: 'Clarity & Proofing', team: 'content', status: 'available', slug: 'clarity-proofing', portrait: 42 },

  // ---- SEO Team ----
  { id: 'page_inspector', name: 'Patrick', roleTitle: 'Source examiner', department: 'Discovery', team: 'seo', status: 'available', slug: null, portrait: 1 },
  { id: 'technical_health', name: 'Maya', roleTitle: 'Technical reviewer', department: 'Technical Review', team: 'seo', status: 'available', slug: 'technical-health', portrait: 2 },
  { id: 'intent_analyst', name: 'Yuna', roleTitle: 'Search intent specialist', department: 'Search Intelligence', team: 'seo', status: 'available', slug: null, portrait: 6 },
  { id: 'evidence', name: 'Kenji', roleTitle: 'Evidence reviewer', department: 'Provenance', team: 'seo', status: 'available', slug: null, portrait: 3 },
  { id: 'internal_linking', name: 'Leo', roleTitle: 'Content relationship specialist', department: 'Content Relationships', team: 'seo', status: 'available', slug: null, portrait: 9 },
  { id: 'schema', name: 'Sofia', roleTitle: 'Structured-data reviewer', department: 'Structured Data', team: 'seo', status: 'available', slug: 'schema', portrait: 10 },
  { id: 'accessibility', name: 'Mara', roleTitle: 'Accessibility reviewer', department: 'Accessibility', team: 'seo', status: 'available', slug: null, portrait: 24 },
  { id: 'cannibalisation_overlap', name: 'Cleo', roleTitle: 'Content cannibalisation analyst', department: 'Content Cannibalisation', team: 'seo', status: 'available', slug: 'cannibalisation-overlap', portrait: 26 },
  { id: 'content_decay', name: 'Faye', roleTitle: 'Content freshness analyst', department: 'Content Freshness', team: 'seo', status: 'available', slug: 'content-decay', portrait: 27 },
  { id: 'topical_authority', name: 'Zara', roleTitle: 'Topical coverage analyst', department: 'Topical Coverage', team: 'seo', status: 'available', slug: 'topical-authority', portrait: 28 },
  { id: 'conversion_alignment', name: 'Diane', roleTitle: 'Conversion alignment analyst', department: 'Conversion Review', team: 'seo', status: 'available', slug: 'conversion-alignment', portrait: 29 },
  { id: 'content_format_serp_fit', name: 'Ivan', roleTitle: 'Content format analyst', department: 'Content Format', team: 'seo', status: 'available', slug: 'content-format-serp-fit', portrait: 30 },
  { id: 'internal_link_pathway', name: 'Felix', roleTitle: 'Internal link pathway analyst', department: 'Internal Linking', team: 'seo', status: 'available', slug: 'internal-link-pathway', portrait: 31 },
  { id: 'content_pruning_consolidation', name: 'Hugo', roleTitle: 'Content maintenance specialist', department: 'Content Maintenance', team: 'seo', status: 'available', slug: 'content-pruning-consolidation', portrait: 36 },
  { id: 'serp_snippet_opportunity', name: 'Morgan', roleTitle: 'SERP snippet specialist', department: 'SERP Optimisation', team: 'seo', status: 'available', slug: 'serp-snippet-opportunity', portrait: 38 },
  { id: 'site_discovery', name: 'Claire', roleTitle: 'Site discovery specialist', department: 'Site Discovery', team: 'seo', status: 'planned', slug: null, portrait: 17 },
  { id: 'semantic_search_analyzer', name: 'Sema', roleTitle: 'Semantic coverage analyst', department: 'Semantic Intelligence', team: 'seo', status: 'available', slug: null, portrait: 43 },
  { id: 'competitor_intel', name: 'Cassius', roleTitle: 'Competitive analyst', department: 'Competitive Intelligence', team: 'seo', status: 'available', slug: null, portrait: 44 },

  // ---- Operations / Management ----
  { id: 'review_queue', name: 'Riley', roleTitle: 'Review queue coordinator', department: 'Change Planning', team: 'operations', status: 'available', slug: null, portrait: 16 },

  // ---- Approval / Governance Team ----
  { id: 'safe_change_planner', name: 'Sam', roleTitle: 'Change planning specialist', department: 'Change Planning', team: 'governance', status: 'available', slug: null, portrait: 15 },
  { id: 'review', name: 'Helen', roleTitle: 'Review editor', department: 'Editorial Approval', team: 'governance', status: 'available', slug: null, portrait: 4 },
  { id: 'evidence_gap', name: 'Theo', roleTitle: 'Evidence gap specialist', department: 'Evidence Assurance', team: 'governance', status: 'available', slug: 'evidence-gap', portrait: 23 },
  { id: 'editorial_approval_gate', name: 'Dana', roleTitle: 'Editorial gate reviewer', department: 'Editorial Approval Gate', team: 'governance', status: 'available', slug: null, portrait: 40 },
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

export function getTeamGroups(exampleMax = 6, locale: Locale = 'en'): TeamGroup[] {
  return TEAM_ORDER.map((team) => {
    const workers = getWorkersByTeam(team);
    const examples = getExampleWorkers(team, exampleMax);
    return {
      ...getTeamMeta(team, locale),
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
