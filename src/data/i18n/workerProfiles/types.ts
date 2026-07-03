// Translatable subset of WorkerProfile (src/data/workerProfiles.ts).
//
// Fields deliberately excluded here (id, slug, name, role, department,
// team, stage, teamColor, portrait, portrait2x, heroWorksAlongside,
// heroTagPills): these form the worker taxonomy used consistently across
// the whole site (directory cards, specialist team pages, breadcrumbs),
// and stay English in every locale so a worker's title/team/stage reads
// identically wherever it appears — same decision as /workers/,
// /workers/seo/ and /specialists/*.
//
// English is not duplicated here: src/data/workerProfiles.ts is already
// the single source of truth for English. Locale files in this directory
// provide only the overlay for non-English locales, merged onto the
// English WorkerProfile at read time — see index.ts.

export interface WorkerProfileTranslatable {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroPara1: string;
  heroPara2: string;
  problemEyebrow: string;
  problemH2: string;
  problemPara: string;
  problemAnnotation: string;
  beforeStamp: string;
  /** HTML string — translate the visible text only, keep every tag/class/entity intact. */
  beforeHtml: string;
  beforeTags: string[];
  beforeNote: string;
  afterStamp: string;
  /** HTML string — translate the visible text only, keep every tag/class/entity intact. */
  afterHtml: string;
  afterTags: string[];
  afterNote: string;
  helpsEyebrow: string;
  helpsH2: string;
  helpsPara: string;
  checks: string[];
  improves: string[];
  prepares: string[];
  surfaces: string[];
  ioH2: string;
  worksFrom: string[];
  produces: string[];
  scenarios: { title: string; description: string }[];
  boundaryH2: string;
  boundaryPara: string;
  boundaryChecklist: string[];
  /** `color` stays as-is (it drives a CSS class); only `text` translates. */
  willNot: Array<{ color: 'red' | 'amber'; text: string }>;
  relatedH2: string;
  /** `id` stays as-is (it's a lookup key into workerProfiles.ts); the rest translates. */
  relatedWorkerIds: Array<{
    id: string;
    description: string;
    outputLabel: string;
    ctaLabel: string;
  }>;
  ctaH2: string;
  ctaPara: string;
  guidanceFooterLabel: string;
  guidanceFooterValue: string;
}
