export interface WorkerProfile {
  id: string;
  slug: string;
  name: string;
  /** The branded "X Worker" title used in the hero and CTA eyebrows. */
  role: string;
  /** The plain analyst/specialist title used on the worker-slip card, matching workerRegistry.ts's roleTitle. Falls back to `role` when not set. */
  roleTitle?: string;
  department: string;
  team: 'content' | 'governance' | 'seo';
  stage: string;
  teamColor: string;
  portrait: string;
  portrait2x: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroPara1: string;
  heroPara2: string;
  heroWorksAlongside: string[];
  heroTagPills: { team: string; stage: string; output: string };
  problemEyebrow: string;
  problemH2: string;
  problemPara: string;
  problemAnnotation: string;
  beforeStamp: string;
  beforeHtml: string;
  beforeTags: string[];
  beforeNote: string;
  afterStamp: string;
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
  willNot: Array<{ color: 'red' | 'amber'; text: string }>;
  relatedH2: string;
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

export const workerProfiles: WorkerProfile[] = [
  // 1. Helena - Voice & Style Worker
  {
    id: 'voice_style',
    slug: 'voice-style',
    name: 'Helena',
    role: 'Voice & Style Worker',
    department: 'Brand Voice',
    team: 'content',
    stage: 'Voice',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-08-192.webp',
    portrait2x: '/agents/profiles/profile-08-384.webp',
    seoTitle: 'Voice & Style Worker | WordPresto',
    metaDescription:
      'Helena checks every draft against your voice rules and approved examples, shaping it back to your house style before review. For teams with one consistent voice to keep.',
    h1: 'Keep the voice in the work.',
    heroPara1:
      'When different writers and AI tools all touch the same site, brand voice drifts page by page. Helena reads your voice rules and approved examples, then checks and shapes every draft, so it still sounds like you by the time it reaches review.',
    heroPara2:
      'For teams that need one consistent voice across briefs, drafts, reviews and AI-assisted content work.',
    heroWorksAlongside: ['Ellis', 'Quinn', 'Audrey'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Brand Voice',
      output: 'Output · Voice & style guidance',
    },
    problemEyebrow: 'Where the voice starts to drift',
    problemH2: 'Brand voice is the first thing to break in an AI-assisted workflow.',
    problemPara:
      'Generating text was never the hard part. The hard part is that every writer, and every AI tool, has its own default voice. Across a real site, that drift is the difference between a brand and a pile of pages.',
    problemAnnotation: '↘ same paragraph, two voices',
    beforeStamp: 'Off voice',
    beforeHtml: `<p>In today&rsquo;s <span class="ba-strike">fast-paced digital landscape</span>, <span class="ba-strike">leveraging</span> <span class="ba-strike">cutting-edge AI solutions</span> can <span class="ba-strike">revolutionise</span> your content strategy and unlock <span class="ba-strike">game-changing</span> results.</p>`,
    beforeTags: ['5 cliché phrases', 'No house style', 'Reads as generic'],
    beforeNote: 'none of this sounds like us',
    afterStamp: 'On voice',
    afterHtml: `<p>Most content teams don&rsquo;t need more output. They need a way to keep <span class="ba-hl">one voice across every page</span>, even when different people, and AI, are doing the writing.</p>`,
    afterTags: ['Plain & confident', 'Concrete', 'On brand'],
    afterNote: 'now it sounds like the brand',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A voice editor that reads every draft against your house style.',
    helpsPara:
      'Helena does the work a good voice editor does: consistently, on every page, before anyone has to read the draft cold.',
    checks: [
      'Tone against brand voice rules',
      'Banned and cliché phrasing',
      'Consistency across sections',
    ],
    improves: [
      'Off-voice sentences, rewritten in style',
      'Vague phrasing made concrete',
      'Rhythm and readability',
    ],
    prepares: [
      'A shaped draft, ready for rewrite',
      'Voice and style guidance notes',
      'A clean handoff to review',
    ],
    surfaces: [
      'Voice calls it is unsure about',
      'Meaning that may have shifted',
      'Claims that need a human eye',
    ],
    ioH2: 'What Helena works from, and what she produces.',
    worksFrom: [
      'Brand voice rules',
      'Approved examples',
      'Content brief',
      'Existing draft',
      'Review notes',
    ],
    produces: [
      'Voice & style guidance',
      'Shaped draft',
      'Rewritten section',
      'Review notes',
      'Handoff pack',
    ],
    scenarios: [
      {
        title: 'Three writers, one brand, three voices.',
        description:
          'Helena reads each draft against the same voice rules, so the by-line changes but the voice does not.',
      },
      {
        title: 'AI drafts that are fine, but sound like everyone else.',
        description:
          'She strips the generic AI register and pulls the writing back toward your house style before review.',
      },
      {
        title: 'A new freelancer has not found the voice yet.',
        description:
          "Helena turns 'close, but not quite us' into concrete, sentence-level guidance they can act on.",
      },
      {
        title: 'Migrating old pages with tone all over the place.',
        description:
          'She flags the worst offenders first, so a re-voicing pass starts where it actually matters.',
      },
      {
        title: 'A campaign needs to feel like one piece, not ten.',
        description:
          'Across landing pages, emails and posts, Helena holds a single voice so the campaign reads as one.',
      },
      {
        title: 'You are rewriting your voice rules and need a test.',
        description:
          'Run a few real pages through Helena to see where the new rules actually land, and where they do not.',
      },
    ],
    boundaryH2: 'Helena shapes the voice. People still make the call.',
    boundaryPara:
      'Voice is a judgement, not a rule. Helena suggests, checks and prepares. She is deliberately built to stop where editorial judgement begins, and nothing she touches is published without a human approving it.',
    boundaryChecklist: [
      'Helena suggests on-voice rewrites, she never publishes.',
      'Voice calls are structured for an editor to review.',
      'Uncertain or risky lines are surfaced, not hidden.',
      'Helena supports editorial judgement, it never replaces it.',
    ],
    willNot: [
      { color: 'red', text: 'Publish or push to CMS' },
      { color: 'red', text: 'Override an editor' },
      { color: 'amber', text: 'Flatten a deliberate choice' },
    ],
    relatedH2: 'Workers Helena hands off to.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: "Rewrites the full draft using Helena's voice guidance.",
        outputLabel: 'Rewritten draft',
        ctaLabel: 'How Ellis rewrites',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Checks the shaped draft for clarity and readiness.',
        outputLabel: 'Review summary',
        ctaLabel: 'How Quinn reviews',
      },
      {
        id: 'approval_report',
        description: 'Assembles the review into a clear approval decision.',
        outputLabel: 'Approval report',
        ctaLabel: 'How Audrey approves',
      },
    ],
    ctaH2: 'Keep the voice in the work.',
    ctaPara:
      'Add Helena to your content workflow and hold one voice across every page, with human approval before anything ships.',
    guidanceFooterLabel: 'VOICE FIT',
    guidanceFooterValue: 'Strong · ready for review',
  },

  // 2. Omar - Content Analyst
  {
    id: 'content_analyst',
    slug: 'content-analyst',
    name: 'Omar',
    role: 'Content Analyst',
    department: 'Content Review',
    team: 'content',
    stage: 'Analyse',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-05-192.webp',
    portrait2x: '/agents/profiles/profile-05-384.webp',
    seoTitle: 'Content Analyst Worker | WordPresto',
    metaDescription:
      'Omar reviews existing content, context and purpose before any editing or rewriting starts. For teams that need a clear baseline before they touch a page.',
    h1: 'Understand the page before you rewrite it.',
    heroPara1:
      'Most rewrites start in the wrong place. They change what is easy to change rather than what actually needs changing. Omar reads the existing page first: what it is trying to do, whether it is working, and what is worth keeping. That gives the work that follows a clear foundation.',
    heroPara2:
      'For content reviews, site migrations, and any rewrite that needs to start from evidence rather than instinct.',
    heroWorksAlongside: ['Marcus', 'Luca', 'Ellis'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Analyse',
      output: 'Output · Content analysis',
    },
    problemEyebrow: 'Where rewrites go wrong',
    problemH2: 'Rewriting without reading is how you lose what was already working.',
    problemPara:
      'A page that has been live for two years has something in it: structure that readers responded to, a tone that fitted, sections that ranked. Rewriting from scratch without reviewing what is there first means starting every project further back than you need to.',
    problemAnnotation: '↘ analysis first, then the brief',
    beforeStamp: 'No analysis',
    beforeHtml: `<p>We need to <span class="ba-strike">completely rewrite</span> the homepage. Just <span class="ba-strike">make it more modern</span> and <span class="ba-strike">add more keywords</span>. The current one is <span class="ba-strike">too long and boring</span>.</p>`,
    beforeTags: ['No baseline', 'Vague direction', 'Nothing to build from'],
    beforeNote: 'rewriting from a guess',
    afterStamp: 'Analysis done',
    afterHtml: `<p>The existing homepage has <span class="ba-hl">strong second and third sections</span> that perform well. The intro paragraph needs replacing. Structure is sound. No full rewrite needed.</p>`,
    afterTags: ['Clear baseline', 'Specific scope', 'Work defined'],
    afterNote: 'now we know what to change',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A content reader that maps what is there before anything changes.',
    helpsPara:
      'Omar does the analysis work that should happen before every brief is written, but rarely does: reading the existing page for what it is and what it is trying to do.',
    checks: [
      'Whether the page is fulfilling its stated purpose',
      'What structure and sections are already working',
      'Gaps between intent and current content',
    ],
    improves: [
      'Rewrite scope, so it covers less but changes more',
      'Brief quality, by giving writers a real baseline',
      'Prioritisation, so the most important changes go first',
    ],
    prepares: [
      'A content analysis summary',
      'A clear view of what to keep, change or cut',
      'A starting point for the brief or structure pass',
    ],
    surfaces: [
      'Pages where a light edit is enough',
      'Structural problems that will affect any rewrite',
      'Misalignments between page purpose and content',
    ],
    ioH2: 'What Omar works from, and what he produces.',
    worksFrom: [
      'Existing page content',
      'Stated page goal or brief',
      'Brand guidelines',
      'Audience definition',
      'Any prior review notes',
    ],
    produces: [
      'Content analysis summary',
      'What to keep, change or cut',
      'Brief input notes',
      'Gap report',
      'Structural observations',
    ],
    scenarios: [
      {
        title: 'A site migration with 200 pages to review.',
        description:
          'Omar reads each page to a consistent standard, flagging what is worth carrying forward and what should be retired.',
      },
      {
        title: 'A refresh brief with no clear scope.',
        description:
          'He maps the existing content so the brief has a specific starting point rather than a general direction.',
      },
      {
        title: 'An inherited website you did not build.',
        description:
          'Omar gives you a quick picture of what is there, what is working, and what is noise.',
      },
      {
        title: 'A high-performing page that you are nervous to touch.',
        description:
          'He identifies which parts of it matter so you can improve around them rather than replacing them.',
      },
      {
        title: 'A client insisting on a full rewrite.',
        description:
          'Analysis often reveals a lighter touch is enough, which saves budget and preserves what is already working.',
      },
      {
        title: 'Preparing for a writer who is new to the client.',
        description:
          'A content analysis gives any writer a real brief rather than starting from a blank page.',
      },
    ],
    boundaryH2: 'Omar analyses. Editors and clients decide.',
    boundaryPara:
      'Content analysis is an input, not an instruction. Omar maps what is there and flags what matters. What changes, what stays and what gets cut is a judgement call for the editor or client to make.',
    boundaryChecklist: [
      'Omar reviews and analyses, he never changes content directly.',
      'His analysis is structured for a human editor to act on.',
      'Unclear or contested decisions are flagged, not resolved.',
      'Analysis supports editorial judgement, it does not replace it.',
    ],
    willNot: [
      { color: 'red', text: 'Edit or rewrite pages' },
      { color: 'red', text: 'Make final scope decisions' },
      { color: 'amber', text: 'Override client priorities' },
    ],
    relatedH2: 'Workers Omar passes to.',
    relatedWorkerIds: [
      {
        id: 'structure',
        description: 'Uses the analysis to shape section hierarchy and flow.',
        outputLabel: 'Content structure',
        ctaLabel: 'How Marcus structures',
      },
      {
        id: 'content_brief_builder',
        description: 'Builds the brief from analysis insights.',
        outputLabel: 'Content brief',
        ctaLabel: 'How Luca briefs',
      },
      {
        id: 'draft_rewrite',
        description: 'Rewrites with a clear picture of the existing page.',
        outputLabel: 'Shaped draft',
        ctaLabel: 'How Ellis rewrites',
      },
    ],
    ctaH2: 'Understand the page before you rewrite it.',
    ctaPara:
      'Add Omar to your workflow and every rewrite starts from a clear picture of what is already there.',
    guidanceFooterLabel: 'ANALYSIS STATUS',
    guidanceFooterValue: 'Complete · brief-ready',
  },

  // 3. Marcus - Structure Worker
  {
    id: 'structure',
    slug: 'structure',
    name: 'Marcus',
    role: 'Structure Worker',
    department: 'Editorial Architecture',
    team: 'content',
    stage: 'Structure',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-07-192.webp',
    portrait2x: '/agents/profiles/profile-07-384.webp',
    seoTitle: 'Structure Worker | WordPresto',
    metaDescription:
      'Marcus shapes headings, sections and page flow so content has a clear editorial structure before or during drafting. For pages that need a proper shape before writing starts.',
    h1: 'Give every draft a clearer shape.',
    heroPara1:
      'Content without structure is hard to review, easy to misread, and frustrating to edit. Marcus maps the heading hierarchy, section order and content flow so every draft starts or continues with a shape that makes sense editorially and for the reader.',
    heroPara2:
      'For pages in need of a structural pass before drafting, mid-draft re-shaping, or post-draft reorganisation.',
    heroWorksAlongside: ['Omar', 'Luca', 'Ellis'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Structure',
      output: 'Output · Content structure',
    },
    problemEyebrow: 'Where structure breaks down',
    problemH2: 'Badly structured content cannot be fixed by better writing.',
    problemPara:
      'You can improve every sentence on a page and it will still fail if the sections are in the wrong order, if the headings do not tell a story, or if the most important point is buried in the middle. Structure is not formatting, it is editorial logic.',
    problemAnnotation: '↘ shape first, write second',
    beforeStamp: 'No structure',
    beforeHtml: `<p>The page covers <span class="ba-strike">pricing, then the intro, then features, then why us</span>. Each section was <span class="ba-strike">written separately</span> and there is <span class="ba-strike">no clear reading path</span> through the page.</p>`,
    beforeTags: ['Sections out of order', 'No clear flow', 'Hard to follow'],
    beforeNote: 'readers will not make it to the end',
    afterStamp: 'Structured',
    afterHtml: `<p>Opening establishes purpose. Features section follows reader questions in order. Proof before pricing. <span class="ba-hl">Clear reading path from problem to decision</span>.</p>`,
    afterTags: ['Logical flow', 'Editorial order', 'Ready to draft'],
    afterNote: 'writers can work from this',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'Editorial architecture that gives every page a reading path.',
    helpsPara:
      'Marcus does the structural work that prevents content from becoming a pile of sections. Every page that goes through a structure pass comes out with a clear, defensible shape.',
    checks: [
      'Heading hierarchy and section logic',
      'Section order against reader journey',
      'Missing or duplicated structural elements',
    ],
    improves: [
      'Section sequencing so it follows editorial logic',
      'Heading clarity so each one does editorial work',
      'Page flow from opening to close',
    ],
    prepares: [
      'A structured outline for the writer',
      'Heading structure for the CMS',
      'Section notes for the brief',
    ],
    surfaces: [
      'Structural decisions that need editorial input',
      'Sections where purpose is unclear',
      'Content blocks that belong on a different page',
    ],
    ioH2: 'What Marcus works from, and what he produces.',
    worksFrom: [
      'Content brief or stated page goal',
      'Existing draft or raw notes',
      'Content analysis',
      'Brand guidelines',
      'Reader journey notes',
    ],
    produces: [
      'Structured content outline',
      'Ordered heading hierarchy',
      'Section plan',
      'Flow notes for the writer',
      'Structural recommendations',
    ],
    scenarios: [
      {
        title: 'A long-form page written in one session that lacks shape.',
        description:
          'Marcus reorganises the sections into a clear reading order without the writer having to start again.',
      },
      {
        title: 'A brief that needs a structural skeleton before drafting.',
        description:
          'He maps the heading hierarchy so writers know exactly what goes where.',
      },
      {
        title: 'A landing page with too many competing sections.',
        description:
          'Marcus identifies which sections earn their place and in which order they should appear.',
      },
      {
        title: 'A migrated page that was structured for a different purpose.',
        description:
          'He reshapes the structure for the current goal without touching the content itself.',
      },
      {
        title: 'A product page where the most important section is last.',
        description:
          'Moving proof before pricing is often all a page needs to perform better.',
      },
      {
        title: 'A content team where each writer structures differently.',
        description:
          'A structure pass creates a shared shape standard before writing starts.',
      },
    ],
    boundaryH2: 'Marcus structures. Editors and clients approve the shape.',
    boundaryPara:
      'Structure is a recommendation, not a directive. Marcus maps the best reading path based on the content goal. Whether to use that shape, adjust it or overrule it is an editorial and client decision.',
    boundaryChecklist: [
      'Marcus structures and organises, he never rewrites content.',
      'Structural choices are documented for editors to review.',
      'Unclear purpose sections are flagged, not removed.',
      'Structure supports the brief, it does not override it.',
    ],
    willNot: [
      { color: 'red', text: 'Rewrite or edit copy' },
      { color: 'red', text: 'Remove sections without instruction' },
      { color: 'amber', text: 'Impose structure against the brief' },
    ],
    relatedH2: 'Workers Marcus hands off to.',
    relatedWorkerIds: [
      {
        id: 'content_brief_builder',
        description: 'Builds the brief around the approved structure.',
        outputLabel: 'Content brief',
        ctaLabel: 'How Luca briefs',
      },
      {
        id: 'draft_rewrite',
        description: 'Drafts within the structural framework Marcus sets.',
        outputLabel: 'Shaped draft',
        ctaLabel: 'How Ellis drafts',
      },
      {
        id: 'voice_style',
        description: 'Applies voice guidance to the structurally shaped draft.',
        outputLabel: 'Voice & style guidance',
        ctaLabel: 'How Helena voices',
      },
    ],
    ctaH2: 'Give every draft a clearer shape.',
    ctaPara:
      'Add Marcus to your workflow and every page starts with an editorial structure that writers and editors can actually work from.',
    guidanceFooterLabel: 'STRUCTURE STATUS',
    guidanceFooterValue: 'Outlined · draft-ready',
  },

  // 4. Luca - Content Brief Builder
  {
    id: 'content_brief_builder',
    slug: 'content-brief-builder',
    name: 'Luca',
    role: 'Content Brief Builder',
    department: 'Editorial Planning',
    team: 'content',
    stage: 'Brief',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-13-192.webp',
    portrait2x: '/agents/profiles/profile-13-384.webp',
    seoTitle: 'Content Brief Builder | WordPresto',
    metaDescription:
      'Luca turns a topic and goal into a structured content brief: purpose, audience, angle and sections, before any drafting starts.',
    h1: 'Start with a brief that writers can actually use.',
    heroPara1:
      'Most content briefs are either too thin to help or too prescriptive to leave room for writing. Luca builds structured briefs that give writers the context and direction they need without doing the writing for them: purpose, audience, angle, tone direction and a clear section plan.',
    heroPara2:
      'For new content projects, agency briefs, AI-assisted workflows where the output needs a clear starting point.',
    heroWorksAlongside: ['Omar', 'Marcus', 'Ellis'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Brief',
      output: 'Output · Content brief',
    },
    problemEyebrow: 'Where briefs fail writers',
    problemH2: 'A weak brief produces a draft you will have to rewrite anyway.',
    problemPara:
      "A brief that says 'write about our service for our customers' is not a brief. It is an instruction to guess. Every hour a writer spends working from a vague brief is an hour spent producing content that will need structural revision before it can be used.",
    problemAnnotation: '↘ the brief decides the draft quality',
    beforeStamp: 'Weak brief',
    beforeHtml: `<p>Write a <span class="ba-strike">blog post about our project management tool</span>. Make it <span class="ba-strike">engaging and SEO-friendly</span>. Around <span class="ba-strike">800 words</span>. Include a <span class="ba-strike">call to action at the end</span>.</p>`,
    beforeTags: ['No audience', 'No angle', 'No structure guidance'],
    beforeNote: 'every writer will produce something different',
    afterStamp: 'Clear brief',
    afterHtml: `<p><span class="ba-hl">Goal: help agency project managers</span> understand why structured handoffs reduce revision rounds. Audience: decision-makers. Angle: cost of weak handoffs. Sections: problem, approach, proof, next step.</p>`,
    afterTags: ['Specific audience', 'Clear angle', 'Structured sections'],
    afterNote: 'writers can start from this',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: "A brief that gives writers direction without removing their judgement.",
    helpsPara:
      'Luca builds the brief structure that prevents rewrite rounds. A well-scoped brief with a real angle, a clear audience and section guidance produces better drafts because writers know what they are building.',
    checks: [
      'Whether purpose is clear and specific',
      'Whether audience is defined enough to write to',
      'Whether the angle is distinct and arguable',
    ],
    improves: [
      'Brief scope so it is actionable, not just directional',
      'Section structure so the outline is usable',
      'Tone and voice direction so the writer has a starting register',
    ],
    prepares: [
      'A structured content brief',
      'An outlined section plan',
      'Writing direction and constraints',
    ],
    surfaces: [
      'Topics where more research is needed first',
      'Briefs that need client input before drafting',
      'Scope conflicts that will cause revision rounds later',
    ],
    ioH2: 'What Luca works from, and what he produces.',
    worksFrom: [
      'Content topic or subject',
      'Stated goal',
      'Audience definition',
      'Brand voice guidelines',
      'Content analysis or research notes',
    ],
    produces: [
      'Structured content brief',
      'Section outline',
      'Audience and tone notes',
      'Writing constraints',
      'Handoff to writer or drafting Worker',
    ],
    scenarios: [
      {
        title: 'Starting a new content programme with consistent briefs.',
        description:
          'Luca builds every brief to the same standard, so drafts start from the same quality of direction.',
      },
      {
        title: 'Briefing AI-assisted drafting tools.',
        description:
          'A structured brief is the difference between a usable AI draft and one that needs a full rewrite.',
      },
      {
        title: 'Agency briefing for a client they have just onboarded.',
        description:
          'Luca turns the intake notes into a brief that a writer can act on without guessing at client preferences.',
      },
      {
        title: 'Building a content calendar with actual direction in it.',
        description:
          'Each piece in the calendar gets a brief summary that clarifies what it is for and who it is for.',
      },
      {
        title: 'A product launch with multiple content pieces.',
        description:
          'One brief structure applied consistently means all the pieces align without constant alignment calls.',
      },
      {
        title: 'A writer who is new to the brand.',
        description:
          'A clear brief replaces weeks of implicit knowledge transfer with a document they can refer to.',
      },
    ],
    boundaryH2: 'Luca briefs. Writers and editors make the creative decisions.',
    boundaryPara:
      'A brief is a starting point, not a script. Luca structures the brief so the direction is clear, but the writing, voice choices and creative judgements are for the writer and editor to make.',
    boundaryChecklist: [
      'Luca builds briefs, he never writes the content itself.',
      'Brief decisions are documented for editor or client review.',
      'Gaps in direction are flagged before drafting starts.',
      'The brief supports the writer, it does not replace them.',
    ],
    willNot: [
      { color: 'red', text: 'Draft or write content' },
      { color: 'red', text: 'Make brand positioning decisions' },
      { color: 'amber', text: 'Override agreed scope' },
    ],
    relatedH2: 'Workers Luca hands off to.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Takes the brief and builds the shaped draft.',
        outputLabel: 'Shaped draft',
        ctaLabel: 'How Ellis drafts',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Checks the draft actually matches the brief.',
        outputLabel: 'Alignment report',
        ctaLabel: 'How Ada checks',
      },
      {
        id: 'voice_style',
        description: 'Applies voice rules against the brief direction.',
        outputLabel: 'Voice & style guidance',
        ctaLabel: 'How Helena voices',
      },
    ],
    ctaH2: 'Start with a brief that writers can actually use.',
    ctaPara:
      'Add Luca to your workflow and every piece of content starts with a clear brief that reduces revision rounds.',
    guidanceFooterLabel: 'BRIEF STATUS',
    guidanceFooterValue: 'Ready for drafting',
  },

  // 5. Ellis - Draft Rewrite Worker
  {
    id: 'draft_rewrite',
    slug: 'draft-rewrite',
    name: 'Ellis',
    role: 'Draft Rewrite Worker',
    department: 'Editorial Drafting',
    team: 'content',
    stage: 'Draft',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-18-192.webp',
    portrait2x: '/agents/profiles/profile-18-384.webp',
    seoTitle: 'Draft Rewrite Worker | WordPresto',
    metaDescription:
      'Ellis builds and rewrites drafts that follow the brief: structured, on-purpose, and ready for review. For content that needs a shaped draft before editing or review starts.',
    h1: 'Rewrite drafts without losing the point.',
    heroPara1:
      'A draft that wanders from the brief, buries the main point or runs twice as long as it needs to is not ready for review. Ellis rewrites drafts that follow the brief structure, lead with what matters and read well enough for an editor to make decisions from.',
    heroPara2:
      'For first drafts, AI-generated drafts that need shaping, and rewrites where the brief has changed.',
    heroWorksAlongside: ['Luca', 'Helena', 'Quinn'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Draft',
      output: 'Output · Shaped draft',
    },
    problemEyebrow: 'Where drafts fall short',
    problemH2: 'A draft that wanders cannot be edited into shape. It has to be rewritten.',
    problemPara:
      'Most first drafts, from writers and from AI, cover the right territory without covering it in the right order. The main point is buried. Sections drift. The introduction spends three paragraphs warming up. Getting a draft ready for review means more than fixing sentences.',
    problemAnnotation: '↘ shape the draft, then review it',
    beforeStamp: 'Unshaped',
    beforeHtml: `<p>We are a <span class="ba-strike">leading provider of innovative solutions</span>. Founded in 2018, <span class="ba-strike">our team of dedicated professionals</span> works hard every day to <span class="ba-strike">deliver value to our valued customers</span>. We believe in <span class="ba-strike">excellence</span>.</p>`,
    beforeTags: ['No clear point', 'Generic opener', 'Not brief-led'],
    beforeNote: 'this draft cannot be edited',
    afterStamp: 'On brief',
    afterHtml: `<p>Good content handoffs take <span class="ba-hl">two rounds of revision instead of five</span>. The difference is having a brief that everyone on the project has actually read before writing starts.</p>`,
    afterTags: ['Led by the point', 'Brief-following', 'Ready for review'],
    afterNote: 'now an editor can work from this',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A drafter that follows the brief and produces something an editor can work from.',
    helpsPara:
      'Ellis does the drafting and rewriting that gets content to reviewable quality. The goal is not a finished piece; it is a draft that has a clear shape, follows the brief and gives an editor something real to work with.',
    checks: [
      'Whether the draft follows the brief structure',
      'Whether the opening establishes the main point',
      'Whether sections are in a logical order',
    ],
    improves: [
      'Opener so the main point leads',
      'Section structure so it follows brief logic',
      'Length and pacing so it does not run over',
    ],
    prepares: [
      'A shaped draft ready for editorial review',
      'A rewrite that the brief team can sign off',
      'Content ready for a voice or quality pass',
    ],
    surfaces: [
      'Brief gaps that emerged during drafting',
      'Sections that need client or SME input',
      'Passages where the intent is unclear',
    ],
    ioH2: 'What Ellis works from, and what he produces.',
    worksFrom: [
      'Content brief',
      'Existing draft or raw notes',
      'Brand voice guidelines',
      'Structure outline',
      'Research notes',
    ],
    produces: [
      'Shaped draft',
      'Rewritten content sections',
      'Drafting notes for the editor',
      'Brief deviation notes',
      'Ready-for-review draft',
    ],
    scenarios: [
      {
        title: 'An AI draft that is accurate but completely unshaped.',
        description:
          'Ellis gives it structure and a lead, turning output into a reviewable draft.',
      },
      {
        title: 'A first draft from a new writer that needs structural work.',
        description:
          'He reshapes without rewriting the whole thing, preserving what works.',
      },
      {
        title: 'A brief that changed mid-project.',
        description:
          'Ellis rewrites the affected sections against the new direction.',
      },
      {
        title: 'A page that has been revised by too many people and lost coherence.',
        description:
          'One clean rewrite pass against the original brief restores consistency.',
      },
      {
        title: 'Content needed quickly with no time for multiple rounds.',
        description:
          'A clean first draft saves the revision cycles that vague first drafts generate.',
      },
      {
        title: 'A client wanting to see a draft before approving full production.',
        description:
          'Ellis produces a tight draft that gives clients something real to react to.',
      },
    ],
    boundaryH2: 'Ellis drafts. Editors and clients make the final calls.',
    boundaryPara:
      'A shaped draft is an input to editorial, not the finished product. Ellis rewrites to get content to reviewable quality. Creative decisions, sign-off and final changes are editorial and client decisions.',
    boundaryChecklist: [
      'Ellis drafts and rewrites, he never publishes.',
      'Drafts are structured for an editor to review and approve.',
      'Brief deviations are noted, not silently corrected.',
      'Drafting supports the brief, it does not override it.',
    ],
    willNot: [
      { color: 'red', text: 'Publish or finalise content' },
      { color: 'red', text: 'Override brief scope' },
      { color: 'amber', text: 'Make tone decisions without brief' },
    ],
    relatedH2: 'Workers Ellis hands off to.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: "Applies voice rules to Ellis's shaped draft.",
        outputLabel: 'Voice & style guidance',
        ctaLabel: 'How Helena voices',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Reviews the draft for clarity and readiness.',
        outputLabel: 'Review notes',
        ctaLabel: 'How Quinn reviews',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Checks the draft fulfils the brief.',
        outputLabel: 'Alignment report',
        ctaLabel: 'How Ada checks',
      },
    ],
    ctaH2: 'Rewrite drafts without losing the point.',
    ctaPara:
      'Add Ellis to your workflow and every draft reaches review already shaped, structured and brief-led.',
    guidanceFooterLabel: 'DRAFT STATUS',
    guidanceFooterValue: 'Shaped · ready for review',
  },

  // 6. Quinn - Draft Quality Reviewer
  {
    id: 'draft_quality_reviewer',
    slug: 'draft-quality-reviewer',
    name: 'Quinn',
    role: 'Draft Quality Reviewer',
    department: 'Draft Quality',
    team: 'content',
    stage: 'Review',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-19-192.webp',
    portrait2x: '/agents/profiles/profile-19-384.webp',
    seoTitle: 'Draft Quality Reviewer | WordPresto',
    metaDescription:
      'Quinn checks whether a draft is clear, structured and ready to move forward before it reaches a client or CMS. For teams that need a structured review before sign-off.',
    h1: 'Review the draft before it moves forward.',
    heroPara1:
      "A draft that goes to a client or review meeting with structural issues, unclear sections or brief drift wastes everyone's time. Quinn checks each draft before it moves: is it clear, is it structured, does it follow the brief, and is it ready for the next step.",
    heroPara2:
      'For quality gates before client delivery, before CMS handoff, and before any content is approved.',
    heroWorksAlongside: ['Ellis', 'Ada', 'Rosa'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Review',
      output: 'Output · Review notes',
    },
    problemEyebrow: 'Where drafts move too early',
    problemH2: 'A draft that reaches review too soon costs more than waiting.',
    problemPara:
      'Sending a draft to a client or senior editor before it is ready is not efficiency; it is a backwards investment. The cost of a structural revision after client feedback is higher than a review pass before the draft leaves the team.',
    problemAnnotation: '↘ review before it moves',
    beforeStamp: 'Not reviewed',
    beforeHtml: `<p>Here is the <span class="ba-strike">finished draft</span> for your review. We are <span class="ba-strike">happy with it</span>. Let us know <span class="ba-strike">if you want any changes</span>. We think it covers <span class="ba-strike">everything</span> you asked for.</p>`,
    beforeTags: ['Not checked', 'Brief not verified', 'Issues not spotted'],
    beforeNote: 'the client will find the problems',
    afterStamp: 'Reviewed',
    afterHtml: `<p>Section two buries the main benefit. Opening reads well. <span class="ba-hl">Three specific issues flagged</span> before the draft reaches the client, each with a clear fix.</p>`,
    afterTags: ['Issues flagged', 'Brief checked', 'Ready to present'],
    afterNote: 'problems found before handoff',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A quality check that catches issues before they become client comments.',
    helpsPara:
      'Quinn does the structured review pass that should happen between drafting and delivery. Not a line edit; a readiness check that identifies whether the draft is clear, structured and ready to move.',
    checks: [
      'Whether the draft covers the brief',
      'Whether sections are clear and in order',
      'Whether the opening establishes the purpose',
    ],
    improves: [
      'Review feedback so it is specific and actionable',
      'Draft quality assessment so editors have a clear view',
      'Handoff notes so the next step is clear',
    ],
    prepares: [
      'Structured review notes for the editor',
      'A clear readiness decision for the team',
      'Specific issues and suggested fixes',
    ],
    surfaces: [
      'Structural issues that need a rewrite',
      'Brief gaps or drift the writer missed',
      'Sections that need client or SME input',
    ],
    ioH2: 'What Quinn works from, and what he produces.',
    worksFrom: [
      'Draft content',
      'Original content brief',
      'Brand voice guidelines',
      'Review criteria',
      'Prior review notes',
    ],
    produces: [
      'Structured review notes',
      'Readiness assessment',
      'Specific issue flags',
      'Fix recommendations',
      'Handoff notes for next step',
    ],
    scenarios: [
      {
        title: 'A draft ready for client delivery on Friday.',
        description:
          'Quinn checks it on Thursday so any issues can be fixed before the client sees them.',
      },
      {
        title: 'A long-form piece that three writers contributed to.',
        description:
          'He identifies where the voice shifts, where sections contradict each other, and where the structure breaks down.',
      },
      {
        title: 'An AI draft that passed a basic check.',
        description:
          'Quinn applies editorial standards, not just grammar: clarity, structure and brief alignment.',
      },
      {
        title: 'A content programme where quality is inconsistent.',
        description:
          'A consistent review pass at the same stage creates a quality baseline the team can measure against.',
      },
      {
        title: 'A brief that changed mid-draft.',
        description:
          'Quinn checks the draft against the final brief, not the original, and flags what needs updating.',
      },
      {
        title: 'A client who leaves detailed revision comments on every draft.',
        description:
          'Fewer issues reaching the client means fewer revision rounds and faster sign-off.',
      },
    ],
    boundaryH2: 'Quinn reviews. Editors and clients decide what to change.',
    boundaryPara:
      'A review is a structured input to editorial, not a set of instructions. Quinn identifies issues and flags them clearly. What gets changed, and how, is an editorial and client decision.',
    boundaryChecklist: [
      'Quinn reviews and flags, he never edits directly.',
      'Review notes are structured for an editor to act on.',
      'Uncertain or subjective calls are flagged as questions, not decisions.',
      'Review supports editorial judgement, it does not override it.',
    ],
    willNot: [
      { color: 'red', text: 'Edit or rewrite content' },
      { color: 'red', text: 'Make final content decisions' },
      { color: 'amber', text: 'Approve content for publication' },
    ],
    relatedH2: 'Workers Quinn passes to.',
    relatedWorkerIds: [
      {
        id: 'section_rewrite',
        description: 'Rewrites the specific sections Quinn flags as weak.',
        outputLabel: 'Rewritten sections',
        ctaLabel: 'How Rosa rewrites',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Checks brief-to-draft alignment in detail.',
        outputLabel: 'Alignment report',
        ctaLabel: 'How Ada aligns',
      },
      {
        id: 'approval_report',
        description: 'Assembles the review into a sign-off decision.',
        outputLabel: 'Approval report',
        ctaLabel: 'How Audrey approves',
      },
    ],
    ctaH2: 'Review the draft before it moves forward.',
    ctaPara:
      'Add Quinn to your workflow and every draft reaches the client or CMS already checked, with issues flagged before they become revision rounds.',
    guidanceFooterLabel: 'REVIEW STATUS',
    guidanceFooterValue: 'Checked · issues flagged',
  },

  // 7. Rosa - Section Rewrite Worker
  {
    id: 'section_rewrite',
    slug: 'section-rewrite',
    name: 'Rosa',
    role: 'Section Rewrite Worker',
    department: 'Section Editing',
    team: 'content',
    stage: 'Improve',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-20-192.webp',
    portrait2x: '/agents/profiles/profile-20-384.webp',
    seoTitle: 'Section Rewrite Worker | WordPresto',
    metaDescription:
      'Rosa rewrites individual sections that are unclear, thin or off-brief without touching the rest of the piece. For targeted section-level improvements after review.',
    h1: 'Fix the weak section without rewriting the whole page.',
    heroPara1:
      'When review notes flag a specific section as thin, off-brief or unclear, the answer is not a full page rewrite. Rosa rewrites the specific section that needs fixing, working against the brief and in the voice of the surrounding content, without disturbing what is working.',
    heroPara2:
      'For targeted section improvements after draft review, mid-production fixes, and specific revision requests from clients or editors.',
    heroWorksAlongside: ['Quinn', 'Ellis', 'Priya'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Improve',
      output: 'Output · Rewritten sections',
    },
    problemEyebrow: 'Where sections let pages down',
    problemH2: 'One weak section can undermine a page that otherwise works.',
    problemPara:
      'It is rarely the whole page that needs a rewrite. Usually it is the third section that buries the point, or the proof section that does not have enough in it, or the conclusion that does not close. Rewriting the whole page to fix one section wastes the work that is already good.',
    problemAnnotation: '↘ fix the section, not the page',
    beforeStamp: 'Needs work',
    beforeHtml: `<p>Our <span class="ba-strike">team has extensive experience</span> in this area and we <span class="ba-strike">pride ourselves</span> on delivering <span class="ba-strike">high-quality work</span>. We have <span class="ba-strike">many satisfied clients</span> who would be happy to <span class="ba-strike">recommend us</span>.</p>`,
    beforeTags: ['Vague claims', 'No specifics', 'Off-brief tone'],
    beforeNote: 'this section is doing nothing',
    afterStamp: 'Rewritten',
    afterHtml: `<p>We have reduced revision rounds by 40% across twelve agency clients in the last year, using <span class="ba-hl">structured brief-to-draft workflows</span> that most teams can set up in under two weeks.</p>`,
    afterTags: ['Specific', 'On brief', 'Earns its place'],
    afterNote: 'now this section works',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A section editor that fixes what needs fixing without touching what does not.',
    helpsPara:
      'Rosa rewrites at section level: the specific paragraph, the weak proof block, the introduction that does not land. No full-page rewrite, no disruption to the sections that are working.',
    checks: [
      'Whether the section fulfils its stated purpose',
      'Whether it matches the brief and surrounding tone',
      'Whether it is earning its place in the page structure',
    ],
    improves: [
      'Section clarity and specificity',
      'Section tone alignment with the rest of the piece',
      'Section length and economy',
    ],
    prepares: [
      'A rewritten section, ready to drop in',
      'Section notes for the editor',
      'Brief alignment confirmation',
    ],
    surfaces: [
      'Sections where a rewrite is not enough and structural change is needed',
      'Missing information that the writer needs to supply',
      'Brief conflicts that caused the section problem',
    ],
    ioH2: 'What Rosa works from, and what she produces.',
    worksFrom: [
      'The specific section for rewrite',
      'Original content brief',
      'Review notes',
      'Brand voice guidelines',
      'Surrounding page context',
    ],
    produces: [
      'Rewritten section',
      'Section edit notes',
      'Brief alignment check',
      'Handoff notes for editor',
    ],
    scenarios: [
      {
        title: 'A review flagged the proof section as too thin.',
        description:
          'Rosa rewrites that section with stronger specifics, without changing anything around it.',
      },
      {
        title: 'A client requested one section be reconsidered after sign-off.',
        description:
          'She rewrites the specific section against the client note without reopening the rest of the piece.',
      },
      {
        title: 'The introduction does not match the page the brief described.',
        description:
          'A targeted intro rewrite realigns the page opener without a full revision.',
      },
      {
        title: 'An AI draft where some sections are good and one is clearly not.',
        description:
          'Rosa fixes the weak section and leaves the others in place.',
      },
      {
        title: 'A long-form article where the middle third loses momentum.',
        description:
          'Section-level rewriting of the weak middle brings the piece back on track.',
      },
      {
        title: 'A writer who produced a strong draft but struggled with the CTA.',
        description:
          'One section rewrite is faster and better than sending the whole piece back.',
      },
    ],
    boundaryH2: 'Rosa rewrites sections. Editors approve the changes.',
    boundaryPara:
      'A rewritten section is a replacement option, not a final edit. Rosa produces the revised version; whether it goes in, gets adjusted, or gets sent back is an editorial decision.',
    boundaryChecklist: [
      'Rosa rewrites sections, she never publishes them.',
      'Rewritten sections are presented for editorial review.',
      'Scope is limited to the flagged section unless instructed otherwise.',
      "Section rewrites support the brief, not the Worker's preference.",
    ],
    willNot: [
      { color: 'red', text: 'Rewrite beyond the agreed section' },
      { color: 'red', text: 'Publish changes directly' },
      { color: 'amber', text: 'Alter brief scope' },
    ],
    relatedH2: 'Workers Rosa works alongside.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Reviews the full draft and flags which sections need work.',
        outputLabel: 'Review notes',
        ctaLabel: 'How Quinn reviews',
      },
      {
        id: 'readability',
        description: 'Improves flow and clarity after section rewrites.',
        outputLabel: 'Improved draft',
        ctaLabel: 'How Priya improves',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Checks the rewritten section aligns with the brief.',
        outputLabel: 'Alignment report',
        ctaLabel: 'How Ada checks',
      },
    ],
    ctaH2: 'Fix the weak section without rewriting the whole page.',
    ctaPara:
      'Add Rosa to your workflow and targeted section fixes happen quickly, precisely and without disturbing what is already working.',
    guidanceFooterLabel: 'SECTION STATUS',
    guidanceFooterValue: 'Rewritten · ready for editor',
  },

  // 8. Audrey - Approval Report Worker
  {
    id: 'approval_report',
    slug: 'approval-report',
    name: 'Audrey',
    role: 'Approval Report Worker',
    department: 'Approval Reporting',
    team: 'content',
    stage: 'Approve',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-21-192.webp',
    portrait2x: '/agents/profiles/profile-21-384.webp',
    seoTitle: 'Approval Report Worker | WordPresto',
    metaDescription:
      'Audrey summarises what is ready, what needs attention and what should not move forward, so humans can make a confident sign-off decision.',
    h1: 'Make approval easier to trust.',
    heroPara1:
      'Approval decisions made without a clear picture of what is ready often go wrong in one of two ways: things are approved that should not be, or things are held up that were ready to move. Audrey assembles a structured approval report so the person making the sign-off decision has the information they actually need.',
    heroPara2:
      'For editorial directors, project leads, account managers and anyone who needs to make a confident approval call without reading every draft line by line.',
    heroWorksAlongside: ['Quinn', 'Vera', 'Ravi'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Approve',
      output: 'Output · Approval report',
    },
    problemEyebrow: 'Where approval breaks down',
    problemH2: 'Approval is only reliable when the approver has the right information.',
    problemPara:
      'Most approval problems are information problems. The person signing off either does not have a clear view of what was reviewed and what was not, or they are reading every draft themselves because there is no summary. Either way, it takes longer than it should and the decisions are less confident than they need to be.',
    problemAnnotation: '↘ approval without guesswork',
    beforeStamp: 'No report',
    beforeHtml: `<p><span class="ba-strike">Here are all 14 drafts</span> for approval. Some have been reviewed, <span class="ba-strike">not sure which ones</span>. There are some <span class="ba-strike">notes in the shared folder</span> somewhere. Let us know <span class="ba-strike">if you are happy to approve</span>.</p>`,
    beforeTags: ['No summary', 'No clear status', 'Approver left guessing'],
    beforeNote: 'no one can approve this confidently',
    afterStamp: 'Report ready',
    afterHtml: `<p><span class="ba-hl">9 pieces ready for sign-off. 3 need minor revision before approval. 2 flagged for editorial review</span>, with specific issues noted and recommended next steps for each.</p>`,
    afterTags: ['Clear status', 'Specific flags', 'Approver has everything they need'],
    afterNote: 'approval can happen now',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A report that gives approvers a clear view, not a pile of drafts.',
    helpsPara:
      'Audrey assembles everything the approver needs into one structured report: what is ready, what is not, what the specific issues are, and what needs to happen next. Sign-off decisions become faster and more confident.',
    checks: [
      'Whether each piece has been through the required review stages',
      'Whether outstanding issues are clearly documented',
      'Whether anything is flagged as a risk before approval',
    ],
    improves: [
      'Approval process speed by removing ambiguity',
      'Approval confidence by surfacing the right information',
      'Sign-off documentation for audit and reference',
    ],
    prepares: [
      'A structured approval report',
      'A clear ready/not ready status for each piece',
      'Specific next steps for anything not yet approved',
    ],
    surfaces: [
      'Content that needs more review before sign-off',
      'Compliance or risk issues that should be resolved first',
      'Pieces being held up by information that is missing',
    ],
    ioH2: 'What Audrey works from, and what she produces.',
    worksFrom: [
      'Draft quality review notes',
      'Risk and compliance flags',
      'Brief alignment reports',
      'Current approval criteria',
      'Content status across the project',
    ],
    produces: [
      'Structured approval report',
      'Ready / needs attention / not ready classification',
      'Specific issue notes with next steps',
      'Sign-off documentation',
      'Handoff notes for CMS or publishing',
    ],
    scenarios: [
      {
        title: 'A content batch of 20 pieces needs director sign-off by Friday.',
        description:
          'Audrey produces a report the director can review in 20 minutes rather than 2 hours.',
      },
      {
        title: 'A client reviewing a site migration before launch.',
        description:
          'The approval report gives clients a clear view of what has been reviewed, what is ready, and what is still outstanding.',
      },
      {
        title: 'A compliance-sensitive content programme.',
        description:
          'Audrey tracks which pieces have cleared compliance review and surfaces those that have not.',
      },
      {
        title: 'An agency where approval decisions are inconsistent.',
        description:
          'A structured report creates an approval standard that applies to every project.',
      },
      {
        title: 'A project that stalled at approval and no one knows why.',
        description:
          'The report identifies exactly what is blocking each piece and what needs to happen to move it forward.',
      },
      {
        title: 'Multiple stakeholders with different approval criteria.',
        description:
          'One report maps all criteria and shows the status of each piece against each set of requirements.',
      },
    ],
    boundaryH2: 'Audrey reports. Humans approve.',
    boundaryPara:
      'Approval is a human decision. Audrey provides the structured information that makes that decision reliable. The sign-off call, and the responsibility that comes with it, is always with a person.',
    boundaryChecklist: [
      'Audrey reports on status, she never approves content herself.',
      'Approval reports are structured for the designated approver to review.',
      'Risk and compliance flags are included, not filtered out.',
      'The report supports approval judgement, it does not replace it.',
    ],
    willNot: [
      { color: 'red', text: 'Approve or sign off content' },
      { color: 'red', text: 'Bypass compliance flags' },
      { color: 'amber', text: 'Mark content ready without evidence' },
    ],
    relatedH2: 'Workers Audrey works with.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Provides the quality review that feeds the approval report.',
        outputLabel: 'Review notes',
        ctaLabel: 'How Quinn reviews',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Flags compliance and risk issues before approval.',
        outputLabel: 'Risk & compliance report',
        ctaLabel: 'How Vera flags risks',
      },
      {
        id: 'cms_handoff',
        description: 'Takes approved content and prepares it for CMS handoff.',
        outputLabel: 'Handoff pack',
        ctaLabel: 'How Ravi hands off',
      },
    ],
    ctaH2: 'Make approval easier to trust.',
    ctaPara:
      'Add Audrey to your workflow and every approval decision is made with a clear, complete picture of what is ready and what is not.',
    guidanceFooterLabel: 'APPROVAL STATUS',
    guidanceFooterValue: 'Ready for human sign-off',
  },

  // 9. Priya - Readability Worker
  {
    id: 'readability',
    slug: 'readability',
    name: 'Priya',
    role: 'Readability Worker',
    department: 'Readability',
    team: 'content',
    stage: 'Improve',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-25-192.webp',
    portrait2x: '/agents/profiles/profile-25-384.webp',
    seoTitle: 'Readability Worker | WordPresto',
    metaDescription:
      'Priya tightens sentences, simplifies structure and improves flow so content reads clearly for its intended audience. For drafts that are correct but harder to read than they need to be.',
    h1: 'Make good content easier to read.',
    heroPara1:
      'Content can be factually accurate, well-structured and on-brief, and still be harder to read than it needs to be. Priya tightens sentences, breaks up dense paragraphs, removes unnecessary qualification and improves flow, without changing meaning or losing voice.',
    heroPara2:
      'For drafts that are ready in substance but need a readability pass before review or delivery.',
    heroWorksAlongside: ['Ellis', 'Rosa', 'Quinn'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Improve',
      output: 'Output · Improved draft',
    },
    problemEyebrow: 'Where readability fails',
    problemH2: 'Dense, correct content still loses readers.',
    problemPara:
      'Most readability problems are not about the words; they are about sentence length, paragraph density and the ratio of hedging to assertion. A reader who gives up at paragraph three has not read the content, however accurate it was.',
    problemAnnotation: '↘ readable means actually read',
    beforeStamp: 'Hard to read',
    beforeHtml: `<p>In the context of <span class="ba-strike">the current digital landscape where</span> many organisations are <span class="ba-strike">increasingly looking to leverage</span> available tools, it is important to <span class="ba-strike">bear in mind that</span> the approach taken will <span class="ba-strike">inevitably have</span> an impact on outcomes.</p>`,
    beforeTags: ['Too long', 'Over-qualified', 'Reads as evasive'],
    beforeNote: 'no one will read this to the end',
    afterStamp: 'Readable',
    afterHtml: `<p>The tools you use affect your results. <span class="ba-hl">Choosing the right approach is the decision that matters most</span>, and it is usually the one teams spend the least time on.</p>`,
    afterTags: ['Short and direct', 'Clear', 'Reads naturally'],
    afterNote: 'this version gets read',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A readability pass that gets content actually read.',
    helpsPara:
      'Priya does the sentence-level and paragraph-level work that turns technically correct content into something a reader finishes. Not a rewrite; a tightening pass that removes everything that makes reading harder.',
    checks: [
      'Sentence length against intended audience',
      'Paragraph density and scanning ease',
      'Unnecessary qualification and hedging',
    ],
    improves: [
      'Sentence structure so it reads naturally',
      'Paragraph length and breathing room',
      'Opening sentences so each paragraph leads with the point',
    ],
    prepares: [
      'An improved draft with a readability pass applied',
      'Readability notes for the editor',
      'Content ready for final review',
    ],
    surfaces: [
      'Sections where meaning was sacrificed for density',
      'Passages that need additional information to make sense',
      'Audience-level mismatches between content and reader',
    ],
    ioH2: 'What Priya works from, and what she produces.',
    worksFrom: [
      'Existing draft',
      'Audience definition',
      'Brand voice guidelines',
      'Readability target or brief note',
      'Review notes',
    ],
    produces: [
      'Improved draft',
      'Readability pass notes',
      'Specific sentence and paragraph improvements',
      'Editor handoff notes',
    ],
    scenarios: [
      {
        title: 'A technical product page written by an engineer.',
        description:
          'Priya translates without dumbing down: clear for the target audience, still accurate.',
      },
      {
        title: 'A long-form article that is dense from end to end.',
        description:
          'A readability pass creates breathing room and makes the piece readable in one sitting.',
      },
      {
        title: 'Content produced from AI that is grammatically fine but hard to scan.',
        description:
          'She improves flow and sentence rhythm without changing the structure.',
      },
      {
        title: 'A compliance document that legal have to read.',
        description:
          'Readability improvements make it faster to read and easier to act on.',
      },
      {
        title: "A client who keeps saying the content 'feels heavy'.",
        description:
          'A readability pass usually resolves this without structural changes.',
      },
      {
        title: 'A landing page with a high bounce rate.',
        description:
          'Readability is often the difference between a page someone reads and a page someone leaves.',
      },
    ],
    boundaryH2: 'Priya improves readability. Writers and editors keep the voice.',
    boundaryPara:
      'A readability pass improves flow without changing meaning or overriding voice decisions. If a sentence is deliberately complex for stylistic reasons, Priya surfaces it rather than flattening it.',
    boundaryChecklist: [
      'Priya improves readability, she never changes meaning.',
      'Stylistic decisions that look like errors are surfaced, not changed.',
      'Readability changes are documented for editorial review.',
      'Readability supports the voice, it does not override it.',
    ],
    willNot: [
      { color: 'red', text: 'Change meaning or intent' },
      { color: 'red', text: 'Override deliberate style choices' },
      { color: 'amber', text: 'Simplify specialist content without guidance' },
    ],
    relatedH2: 'Workers Priya works alongside.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Produces the shaped draft that the readability pass follows.',
        outputLabel: 'Shaped draft',
        ctaLabel: 'How Ellis drafts',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Reviews the improved draft for clarity and readiness.',
        outputLabel: 'Review notes',
        ctaLabel: 'How Quinn reviews',
      },
      {
        id: 'section_rewrite',
        description: 'Rewrites sections that need more than a readability pass.',
        outputLabel: 'Rewritten sections',
        ctaLabel: 'How Rosa rewrites',
      },
    ],
    ctaH2: 'Make good content easier to read.',
    ctaPara:
      'Add Priya to your workflow and every draft gets a readability pass before it reaches review or delivery.',
    guidanceFooterLabel: 'READABILITY',
    guidanceFooterValue: 'Improved · ready for review',
  },

  // 10. Ada - Brief-to-Draft Alignment Worker
  {
    id: 'brief_draft_alignment',
    slug: 'brief-draft-alignment',
    name: 'Ada',
    role: 'Brief-to-Draft Alignment Worker',
    department: 'Brief Alignment',
    team: 'content',
    stage: 'Review',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-32-192.webp',
    portrait2x: '/agents/profiles/profile-32-384.webp',
    seoTitle: 'Brief-to-Draft Alignment Worker | WordPresto',
    metaDescription:
      'Ada checks that the draft actually fulfils the brief, surfacing gaps, drift and misaligned sections before they go any further.',
    h1: 'Check whether the draft actually follows the brief.',
    heroPara1:
      'A draft that looks good but does not follow the brief is a problem that will surface at review or, worse, at client delivery. Ada compares the final draft against the original brief, section by section, and flags any gaps, scope drift or misalignments before the draft moves forward.',
    heroPara2:
      'For draft review stages, brief-heavy content programmes, and any project where brief adherence needs to be verified before delivery.',
    heroWorksAlongside: ['Luca', 'Quinn', 'Ellis'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Review',
      output: 'Output · Alignment report',
    },
    problemEyebrow: 'Where drafts drift from briefs',
    problemH2: 'A draft that follows the brief is the exception, not the rule.',
    problemPara:
      'Briefs drift during production. Writers interpret differently. AI tools fill gaps with their own defaults. By the time a draft reaches review, it is often covering different ground to what was briefed. The only way to catch it is to check.',
    problemAnnotation: '↘ check the brief, not just the draft',
    beforeStamp: 'Not checked',
    beforeHtml: `<p>The draft <span class="ba-strike">looks good</span> to us. It covers the <span class="ba-strike">main points</span> and is the <span class="ba-strike">right length</span>. We think it <span class="ba-strike">meets the brief</span> though we have not <span class="ba-strike">checked it section by section</span>.</p>`,
    beforeTags: ['Not verified', 'Brief drift possible', 'Gaps not spotted'],
    beforeNote: 'this will fail at client review',
    afterStamp: 'Checked',
    afterHtml: `<p>Section two drifts from the stated audience. The proof section is missing. Opening aligns well. <span class="ba-hl">Three specific gaps identified</span> against the brief, each with a clear fix.</p>`,
    afterTags: ['Brief checked', 'Gaps flagged', 'Fixes specific'],
    afterNote: 'now the team knows what to fix',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A brief-check that catches drift before it becomes a client problem.',
    helpsPara:
      'Ada does the structured comparison between brief and draft that most teams skip because they are moving too fast. Gaps and drift caught before delivery are free. Caught at client review, they cost revision rounds.',
    checks: [
      'Whether each brief section is present and addressed',
      'Whether audience and purpose are maintained throughout',
      'Whether the angle and intent from the brief survive in the draft',
    ],
    improves: [
      'Brief alignment reporting so gaps are specific',
      'Revision guidance so fixes are targeted',
      'Draft handoff notes so the writer knows exactly what to address',
    ],
    prepares: [
      'A structured alignment report',
      'Section-by-section brief comparison',
      'Specific fix notes for the writer',
    ],
    surfaces: [
      'Scope drift that crept in during production',
      'Brief sections that were interpreted differently',
      'Missing content that was required by the brief',
    ],
    ioH2: 'What Ada works from, and what she produces.',
    worksFrom: [
      'Final content brief',
      'Current draft',
      'Any mid-project brief amendments',
      'Review notes',
      'Audience and purpose definitions',
    ],
    produces: [
      'Brief-to-draft alignment report',
      'Section-by-section comparison',
      'Gap and drift flags',
      'Fix notes for the writer',
      'Handoff to review or revision',
    ],
    scenarios: [
      {
        title: 'A draft that was rewritten mid-project and may have lost brief alignment.',
        description:
          'Ada checks the current draft against the final brief, regardless of revision history.',
      },
      {
        title: 'A content programme where multiple writers worked to the same brief.',
        description:
          'She checks each draft to the same standard and identifies where interpretations diverged.',
      },
      {
        title: 'An AI-generated draft that used the brief as a starting point.',
        description:
          'AI tools fill gaps with defaults; Ada identifies which defaults replaced brief requirements.',
      },
      {
        title: 'A client who checks briefs carefully before approving drafts.',
        description:
          'An alignment report before client delivery means the client review focuses on creative decisions, not brief compliance.',
      },
      {
        title: 'A long brief with many specific requirements.',
        description:
          'Ada tracks every requirement and confirms which ones are met, which are partially met, and which are missing.',
      },
      {
        title: 'A revision round that changed the brief scope.',
        description:
          'She re-checks alignment after brief changes to confirm the draft was updated accordingly.',
      },
    ],
    boundaryH2: 'Ada checks alignment. Writers and editors make the changes.',
    boundaryPara:
      'An alignment report is a structured input to revision, not a list of required changes. Ada identifies what does not match the brief; whether to address it, and how, is a writer and editor decision.',
    boundaryChecklist: [
      'Ada checks alignment, she never rewrites content.',
      'Alignment findings are structured for editorial review.',
      'Ambiguous brief sections are flagged as questions, not resolved.',
      'Alignment supports the brief, it does not change it.',
    ],
    willNot: [
      { color: 'red', text: 'Rewrite or edit content' },
      { color: 'red', text: 'Override brief amendments agreed with client' },
      { color: 'amber', text: 'Mark gaps as minor without editorial input' },
    ],
    relatedH2: 'Workers Ada works alongside.',
    relatedWorkerIds: [
      {
        id: 'content_brief_builder',
        description: 'Builds the brief that Ada checks against.',
        outputLabel: 'Content brief',
        ctaLabel: 'How Luca briefs',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Reviews quality alongside alignment checking.',
        outputLabel: 'Review notes',
        ctaLabel: 'How Quinn reviews',
      },
      {
        id: 'draft_rewrite',
        description: 'Rewrites the draft after alignment gaps are identified.',
        outputLabel: 'Shaped draft',
        ctaLabel: 'How Ellis rewrites',
      },
    ],
    ctaH2: 'Check whether the draft actually follows the brief.',
    ctaPara:
      'Add Ada to your workflow and every draft goes to review with a brief alignment check already done.',
    guidanceFooterLabel: 'ALIGNMENT STATUS',
    guidanceFooterValue: 'Checked · gaps flagged',
  },

  // 11. Ravi - CMS Handoff & Publishing Package Worker
  {
    id: 'cms_handoff',
    slug: 'cms-handoff',
    name: 'Ravi',
    role: 'CMS Handoff & Publishing Package Worker',
    department: 'CMS Handoff',
    team: 'content',
    stage: 'Handoff',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-33-192.webp',
    portrait2x: '/agents/profiles/profile-33-384.webp',
    seoTitle: 'CMS Handoff Worker | WordPresto',
    metaDescription:
      'Ravi packages approved content with the structure, metadata and notes needed for clean handoff to a CMS, website or client. For teams that need a publishing-ready content package.',
    h1: 'Prepare approved content for a cleaner handoff.',
    heroPara1:
      'Approved content that arrives in a CMS without the right metadata, formatting guidance and notes creates work at the point where it should be simple. Ravi takes the approved draft and produces a complete publishing package: content, metadata, formatting notes, CMS fields. The handoff is clean from the first time.',
    heroPara2:
      'For content teams handing off to developers, CMS editors, or clients who manage their own publishing.',
    heroWorksAlongside: ['Audrey', 'Vera', 'Quinn'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Handoff',
      output: 'Output · Handoff pack',
    },
    problemEyebrow: 'Where handoffs create extra work',
    problemH2: 'Bad handoffs cost more time than bad drafts.',
    problemPara:
      'A piece of content that reaches a CMS editor or developer without proper metadata, formatting notes or field guidance gets published with errors, or gets sent back for information. The handoff step is cheap to get right and expensive to get wrong.',
    problemAnnotation: '↘ handoff right the first time',
    beforeStamp: 'Not packaged',
    beforeHtml: `<p><span class="ba-strike">Here is the approved content</span> in a Word doc. The <span class="ba-strike">meta description is somewhere in there</span> I think. Let us know if you <span class="ba-strike">need anything else</span>. The <span class="ba-strike">images are in my Downloads folder</span>.</p>`,
    beforeTags: ['Incomplete', 'No metadata', 'CMS editor left guessing'],
    beforeNote: 'this will take two more rounds to sort out',
    afterStamp: 'Packaged',
    afterHtml: `<p>Content, meta title, meta description, alt text, URL slug, image filenames and CMS field notes all <span class="ba-hl">packaged in a single handoff document</span> ready for the CMS editor to publish.</p>`,
    afterTags: ['Complete', 'CMS-ready', 'No back-and-forth needed'],
    afterNote: 'this can be published on receipt',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A publishing package that CMS editors and developers can act on immediately.',
    helpsPara:
      'Ravi produces the complete handoff package that turns approved content into publishable content. Meta fields, formatting guidance, URL slug, image notes: everything needed for a clean first publish.',
    checks: [
      'Whether all required metadata fields are populated',
      'Whether formatting is correct for the target CMS',
      'Whether images and assets are properly referenced',
    ],
    improves: [
      'Handoff completeness so CMS editors can publish without follow-up',
      'Metadata quality so SEO and accessibility fields are correct',
      'Publishing consistency across a content programme',
    ],
    prepares: [
      'A complete handoff pack',
      'Populated CMS field notes',
      'Formatting and asset guidance',
    ],
    surfaces: [
      'Missing metadata that needs writer or client input',
      'Content that is not ready for CMS despite being approved',
      'CMS-specific requirements that the content does not yet meet',
    ],
    ioH2: 'What Ravi works from, and what he produces.',
    worksFrom: [
      'Approved final draft',
      'CMS field requirements',
      'Metadata brief',
      'Brand guidelines',
      'Asset and image references',
    ],
    produces: [
      'Complete handoff pack',
      'Populated CMS field notes',
      'URL and slug guidance',
      'Image and asset notes',
      'Publish-ready content document',
    ],
    scenarios: [
      {
        title: 'A content programme handing off to a WordPress editor.',
        description:
          "Ravi produces a handoff pack that maps every field in the editor's template.",
      },
      {
        title: 'An Astro site build where content needs to be structured for frontmatter.',
        description:
          'He packages content in the format the developer needs, including all frontmatter fields.',
      },
      {
        title: 'A client who manages their own CMS but finds handoffs confusing.',
        description:
          "A clear, complete handoff document reduces the client's publishing errors and support requests.",
      },
      {
        title: 'A batch of 30 approved pages all needing metadata.',
        description:
          'Ravi works through the batch consistently, so every page is packaged to the same standard.',
      },
      {
        title: 'A migration project with legacy content needing re-packaging.',
        description:
          'He updates metadata and formatting notes for the new CMS without touching the approved copy.',
      },
      {
        title: 'A launch deadline where the CMS editor has one hour to publish.',
        description:
          'A complete handoff pack means they can spend that hour publishing, not chasing missing information.',
      },
    ],
    boundaryH2: 'Ravi packages. Publishing teams and editors decide what goes live.',
    boundaryPara:
      'A handoff pack is a publishing-ready document, not permission to publish. What goes live, when, and in what form is a decision for the publishing team, client or editorial director.',
    boundaryChecklist: [
      'Ravi packages content, he never publishes it.',
      'Handoff packs are structured for the receiving team to verify.',
      'Incomplete information is flagged, not guessed.',
      'The handoff supports publishing, it does not authorise it.',
    ],
    willNot: [
      { color: 'red', text: 'Publish content directly' },
      { color: 'red', text: 'Approve content for publication' },
      { color: 'amber', text: 'Guess at missing metadata' },
    ],
    relatedH2: 'Workers Ravi works with.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Confirms what is approved before handoff packaging begins.',
        outputLabel: 'Approval report',
        ctaLabel: 'How Audrey approves',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Clears compliance and risk before the handoff pack is produced.',
        outputLabel: 'Risk & compliance report',
        ctaLabel: 'How Vera flags risks',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Provides the final quality review before handoff.',
        outputLabel: 'Review notes',
        ctaLabel: 'How Quinn reviews',
      },
    ],
    ctaH2: 'Prepare approved content for a cleaner handoff.',
    ctaPara:
      'Add Ravi to your workflow and every piece of approved content arrives at the CMS with everything needed to publish it cleanly.',
    guidanceFooterLabel: 'HANDOFF STATUS',
    guidanceFooterValue: 'Ready for CMS review',
  },

  // 12. Vera - Editorial Risk & Claims Compliance Worker
  {
    id: 'editorial_risk_claims',
    slug: 'editorial-risk-claims',
    name: 'Vera',
    role: 'Editorial Risk & Claims Compliance Worker',
    department: 'Editorial Compliance',
    team: 'content',
    stage: 'Review',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-34-192.webp',
    portrait2x: '/agents/profiles/profile-34-384.webp',
    seoTitle: 'Editorial Risk & Claims Worker | WordPresto',
    metaDescription:
      'Vera flags unsupported claims, risky statements and compliance issues in content before it is approved or published.',
    h1: 'Flag risky claims before they move forward.',
    heroPara1:
      'Content that contains unsupported claims, legally risky language or compliance issues does not fail at the point of publication; it fails at the point of complaint, challenge or audit. Vera reviews content for claims that cannot be substantiated, statements that create liability, and language that needs compliance clearance.',
    heroPara2:
      'For content teams in regulated industries, agencies with compliance obligations, and any team publishing claims that need to be defensible.',
    heroWorksAlongside: ['Quinn', 'Audrey', 'Ravi'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Review',
      output: 'Output · Risk & compliance report',
    },
    problemEyebrow: 'Where claims become problems',
    problemH2: 'Risky content looks fine until it is challenged.',
    problemPara:
      'A claim that cannot be supported, a comparison that implies something false, or language that creates liability looks identical to good copy until someone questions it. Catching these before publication is free. Addressing them after is not.',
    problemAnnotation: '↘ flag before publish, not after',
    beforeStamp: 'Not checked',
    beforeHtml: `<p>Our platform is <span class="ba-strike">the most secure</span> solution available. We <span class="ba-strike">guarantee</span> complete data protection and our customers <span class="ba-strike">always achieve</span> better results. We are <span class="ba-strike">the industry leader</span> in this space.</p>`,
    beforeTags: ['Unsupported superlatives', 'Unqualified guarantees', 'Comparative claims without evidence'],
    beforeNote: 'every sentence here is a risk',
    afterStamp: 'Reviewed',
    afterHtml: `<p>Platform security section: <span class="ba-hl">two claims flagged for evidencing</span>, one superlative needs qualifying or removing, guarantee language needs legal review before this piece can be approved.</p>`,
    afterTags: ['Specific flags', 'Evidencing noted', 'Legal review indicated'],
    afterNote: 'risks are visible before approval',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A compliance check that finds claims risks before they reach publication.',
    helpsPara:
      'Vera reviews content for the claims and language that create risk, not to remove strong copy, but to ensure that what gets published can be defended.',
    checks: [
      'Unsupported or unqualified claims',
      'Comparative language that implies false superiority',
      'Compliance-sensitive language in regulated areas',
    ],
    improves: [
      'Claims language so it is specific and defensible',
      'Risk visibility so approvers have the information they need',
      'Compliance documentation for audit purposes',
    ],
    prepares: [
      'A risk and compliance report',
      'Specific claim flags with evidence or fix options',
      'Compliance clearance notes for approval',
    ],
    surfaces: [
      'Claims needing third-party evidence',
      'Language requiring legal review',
      'Regulated-sector terminology that needs specialist clearance',
    ],
    ioH2: 'What Vera works from, and what she produces.',
    worksFrom: [
      'Draft or approved content',
      'Compliance guidelines',
      'Sector-specific regulatory context',
      'Claims evidence or sourcing',
      'Prior compliance notes',
    ],
    produces: [
      'Risk and compliance report',
      'Flagged claims with evidence requirements',
      'Compliance clearance documentation',
      'Fix options for flagged language',
      'Approval input for Audrey',
    ],
    scenarios: [
      {
        title: 'A financial services firm publishing investment-related content.',
        description:
          'Vera applies sector compliance standards to the draft before it reaches the compliance team.',
      },
      {
        title: 'A healthcare brand making claims about outcomes.',
        description:
          'Claims about results and effectiveness are flagged for clinical evidence before approval.',
      },
      {
        title: 'An agency writing comparative content for a client.',
        description:
          'Comparative claims are reviewed for substantiation before the client sees them.',
      },
      {
        title: 'A product launch with bold performance claims.',
        description:
          'Vera flags which claims need evidence and which need softening before the launch copy goes live.',
      },
      {
        title: 'A content refresh picking up old pages with outdated claims.',
        description:
          'She identifies claims that were once accurate but are no longer defensible.',
      },
      {
        title: 'A B2B brand writing about market position.',
        description:
          'Market leadership and superiority claims are reviewed for substantiation before publication.',
      },
    ],
    boundaryH2: 'Vera flags. Legal and compliance teams make the calls.',
    boundaryPara:
      'A risk report is an input to editorial and compliance review, not a sign-off. Vera identifies risks and flags them clearly. Whether to act on them, how, and whether content can proceed is a decision for legal, compliance and editorial teams.',
    boundaryChecklist: [
      'Vera flags risks, she never approves or clears content.',
      'Risk reports are structured for editorial and legal review.',
      'Compliance decisions are flagged, not made.',
      'Risk reporting supports editorial sign-off, it does not replace legal review.',
    ],
    willNot: [
      { color: 'red', text: 'Provide legal clearance' },
      { color: 'red', text: 'Approve content with unresolved compliance flags' },
      { color: 'amber', text: 'Remove claims without explicit instruction' },
    ],
    relatedH2: 'Workers Vera works alongside.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Reviews quality before the compliance check.',
        outputLabel: 'Review notes',
        ctaLabel: 'How Quinn reviews',
      },
      {
        id: 'approval_report',
        description: 'Includes compliance flags in the approval report.',
        outputLabel: 'Approval report',
        ctaLabel: 'How Audrey approves',
      },
      {
        id: 'cms_handoff',
        description: 'Receives clearance confirmation before producing the handoff pack.',
        outputLabel: 'Handoff pack',
        ctaLabel: 'How Ravi hands off',
      },
    ],
    ctaH2: 'Flag risky claims before they move forward.',
    ctaPara:
      'Add Vera to your workflow and compliance issues are identified before publication, not after.',
    guidanceFooterLabel: 'RISK REVIEW',
    guidanceFooterValue: 'Needs evidence check',
  },

  // 13. Iris - Content Refresh Brief Worker
  {
    id: 'content_refresh_brief',
    slug: 'content-refresh-brief',
    name: 'Iris',
    role: 'Content Refresh Brief Worker',
    department: 'Content Refresh',
    team: 'content',
    stage: 'Refresh',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-35-192.webp',
    portrait2x: '/agents/profiles/profile-35-384.webp',
    seoTitle: 'Content Refresh Brief Worker | WordPresto',
    metaDescription:
      'Iris produces a structured brief for refreshing existing content: what to update, what to cut and what to add. For teams refreshing pages with clear direction rather than guesswork.',
    h1: 'Refresh content with a clearer reason.',
    heroPara1:
      'Refreshing content without a brief is how you end up with pages that have been rewritten three times and still do not work. Iris produces a structured refresh brief covering what to update, what to cut, what to add, and why, so every refresh starts with clear direction rather than a blank page review.',
    heroPara2:
      'For content refresh programmes, site migrations with existing content, and teams updating pages to reflect changes in product, audience or market.',
    heroWorksAlongside: ['Omar', 'Ada', 'Ellis'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Refresh',
      output: 'Output · Refresh brief',
    },
    problemEyebrow: 'Where refresh projects go wrong',
    problemH2: 'Refreshing without a brief produces a different version of the same problem.',
    problemPara:
      'A content refresh without clear direction tends to do one of two things: update what is easy to update and leave the structural problems intact, or trigger a full rewrite when a light edit would have been enough. A refresh brief defines the scope before work starts.',
    problemAnnotation: '↘ brief the refresh, then do it',
    beforeStamp: 'No brief',
    beforeHtml: `<p>Can we <span class="ba-strike">refresh this page</span>? It feels a bit <span class="ba-strike">outdated</span>. Maybe <span class="ba-strike">update some of the copy</span> and <span class="ba-strike">add some new stuff</span>. Just make it <span class="ba-strike">better</span> generally.</p>`,
    beforeTags: ['No scope', 'No direction', 'No success criteria'],
    beforeNote: 'this will produce random changes',
    afterStamp: 'Briefed',
    afterHtml: `<p><span class="ba-hl">Update: introduction and proof section</span>. Cut: case study block (outdated). Add: product feature section from Q1 update. Keep: structure and CTA. Rationale provided for each decision.</p>`,
    afterTags: ['Clear scope', 'Specific changes', 'Rationale included'],
    afterNote: 'writers know exactly what to do',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A refresh brief that scopes the work before a writer touches the page.',
    helpsPara:
      'Iris turns a refresh request into a structured brief with specific update, cut and add instructions so writers and editors know exactly what the refresh is for and what it needs to achieve.',
    checks: [
      'Whether the page purpose is still current',
      'Whether existing sections are worth keeping',
      'Whether the refresh scope is proportionate to the problem',
    ],
    improves: [
      'Refresh direction so it is specific, not vague',
      'Scope definition so the brief covers change, not just update',
      'Writer efficiency by removing ambiguity about what to do',
    ],
    prepares: [
      'A structured refresh brief',
      'An update / cut / add section plan',
      'Rationale notes for the brief owner',
    ],
    surfaces: [
      'Pages where a structural change is needed, not just a refresh',
      'Refresh requests that lack clear rationale',
      'Content that should be retired rather than updated',
    ],
    ioH2: 'What Iris works from, and what she produces.',
    worksFrom: [
      'Existing page content',
      'Refresh goals or trigger notes',
      'Content analysis',
      'Brand and product updates',
      'Audience or market change notes',
    ],
    produces: [
      'Structured refresh brief',
      'Update / cut / add section plan',
      'Refresh rationale notes',
      'Writer handoff brief',
      'Scope and success criteria',
    ],
    scenarios: [
      {
        title: 'A product page that needs updating after a rebrand.',
        description:
          'Iris maps what needs changing against the new brand direction and produces a specific update brief.',
      },
      {
        title: 'A content programme refreshing 50 pages in Q1.',
        description:
          'She briefs each refresh consistently so writers are not reinventing scope for every page.',
      },
      {
        title: 'A site that has grown organically and has inconsistent pages.',
        description:
          'Refresh briefs create a consistent standard for each page type.',
      },
      {
        title: 'A blog archive with posts that are outdated but still traffic-generating.',
        description:
          'Iris briefs a targeted update that improves accuracy without removing what readers found useful.',
      },
      {
        title: 'A new product feature that needs adding to existing pages.',
        description:
          'She scopes which pages need updating, what to add, and where it fits.',
      },
      {
        title: 'A client who keeps requesting small changes to the same pages.',
        description:
          'A proper refresh brief resolves the underlying issues rather than patching them page by page.',
      },
    ],
    boundaryH2: 'Iris briefs the refresh. Writers and editors make the changes.',
    boundaryPara:
      'A refresh brief is a scope document, not a set of approved changes. Iris maps what needs to happen; whether to proceed, and how, is an editorial and client decision.',
    boundaryChecklist: [
      'Iris briefs the refresh, she never makes the changes.',
      'Refresh briefs are structured for writer and editor review.',
      'Pages recommended for retirement are flagged, not removed.',
      'The refresh brief supports editorial scope, it does not set it unilaterally.',
    ],
    willNot: [
      { color: 'red', text: 'Edit or rewrite pages directly' },
      { color: 'red', text: 'Retire or remove content' },
      { color: 'amber', text: 'Expand refresh scope without editorial approval' },
    ],
    relatedH2: 'Workers Iris works alongside.',
    relatedWorkerIds: [
      {
        id: 'content_analyst',
        description: 'Provides the analysis that informs the refresh brief.',
        outputLabel: 'Content analysis',
        ctaLabel: 'How Omar analyses',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Checks the refresh draft against the refresh brief.',
        outputLabel: 'Alignment report',
        ctaLabel: 'How Ada checks',
      },
      {
        id: 'draft_rewrite',
        description: 'Rewrites the sections flagged in the refresh brief.',
        outputLabel: 'Shaped draft',
        ctaLabel: 'How Ellis rewrites',
      },
    ],
    ctaH2: 'Refresh content with a clearer reason.',
    ctaPara:
      'Add Iris to your workflow and every refresh starts with a brief that tells writers exactly what to change and why.',
    guidanceFooterLabel: 'REFRESH STATUS',
    guidanceFooterValue: 'Briefed · ready for writer',
  },

  // 14. Nina - Content Distribution Brief Worker
  {
    id: 'content_distribution_brief',
    slug: 'content-distribution-brief',
    name: 'Nina',
    role: 'Content Distribution Brief Worker',
    department: 'Content Distribution',
    team: 'content',
    stage: 'Distribution',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-37-192.webp',
    portrait2x: '/agents/profiles/profile-37-384.webp',
    seoTitle: 'Content Distribution Brief Worker | WordPresto',
    metaDescription:
      'Nina creates a distribution brief that maps where approved content should go and how it should be adapted for each channel.',
    h1: 'Plan where approved content should go next.',
    heroPara1:
      'Approved content that goes directly from sign-off to a single channel wastes most of its value. Nina produces a distribution brief that maps the approved content to the channels where it fits, with adaptation notes for each, so the same piece extends further without being diluted.',
    heroPara2:
      'For content teams, agencies and marketing leads who need a structured distribution plan rather than a social afterthought.',
    heroWorksAlongside: ['Ravi', 'Audrey', 'Iris'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Distribution',
      output: 'Output · Distribution brief',
    },
    problemEyebrow: 'Where distribution falls apart',
    problemH2: 'Most content gets published once and forgotten.',
    problemPara:
      'Approved long-form content often reaches one channel, in one format, at one time. The channel adaptations that would extend its reach (newsletter extract, LinkedIn post, social card, key quote) never happen because there is no plan for them. A distribution brief changes that.',
    problemAnnotation: '↘ plan the distribution before it goes live',
    beforeStamp: 'No plan',
    beforeHtml: `<p>Great, the article is <span class="ba-strike">approved</span>! Let's <span class="ba-strike">post it on LinkedIn</span> and <span class="ba-strike">send it to the newsletter</span>. Someone can <span class="ba-strike">write some social posts</span> if they have time. <span class="ba-strike">Probably fine as is</span>.</p>`,
    beforeTags: ['No channel plan', 'No adaptation guidance', 'Distribution left to chance'],
    beforeNote: 'this content will be used once',
    afterStamp: 'Briefed',
    afterHtml: `<p>Website: publish full piece. LinkedIn: <span class="ba-hl">executive summary with key finding</span>. Newsletter: 200-word extract, problem-first. Social: three quotes with context. Timing and adaptation notes for each channel.</p>`,
    afterTags: ['Channel-specific', 'Adaptation-ready', 'Structured distribution'],
    afterNote: 'the same content works harder',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A distribution brief that maps approved content to channels with adaptation guidance.',
    helpsPara:
      'Nina turns approved content into a channel distribution brief: where it goes, how it adapts for each channel, and what the writer or social team needs to produce for each one.',
    checks: [
      'Whether the content suits the channels being planned for',
      'Whether adaptation needs are channel-appropriate',
      'Whether the distribution plan is proportionate to the content',
    ],
    improves: [
      'Distribution planning so it is channel-specific, not generic',
      'Adaptation guidance so each version serves its channel',
      'Content value by extending reach without diluting quality',
    ],
    prepares: [
      'A structured distribution brief',
      'Per-channel adaptation notes',
      'Format and length guidance for each channel',
    ],
    surfaces: [
      'Channels that are not a good fit for the content',
      'Content that would benefit from repurposing before distribution',
      'Distribution timing conflicts or sequencing issues',
    ],
    ioH2: 'What Nina works from, and what she produces.',
    worksFrom: [
      'Approved content',
      'Channel list and audience definitions',
      'Distribution goals',
      'Brand voice guidelines',
      'Publishing calendar or timing notes',
    ],
    produces: [
      'Distribution brief',
      'Per-channel adaptation notes',
      'Format and length guidance',
      'Publishing timing notes',
      'Handoff to content or social team',
    ],
    scenarios: [
      {
        title: 'A long-form article that needs extracting for LinkedIn and email.',
        description:
          'Nina briefs the extracts specifically so each one works for its channel and audience.',
      },
      {
        title: 'A product launch with content going out across five channels.',
        description:
          'She maps the launch content to each channel with timing and adaptation notes in one brief.',
      },
      {
        title: 'An agency producing content for a client with a complex channel mix.',
        description:
          'The distribution brief becomes the handoff to the social and email teams, not a separate conversation.',
      },
      {
        title: 'A content programme where distribution is an afterthought.',
        description:
          'Nina builds distribution into the workflow at the point of approval, not as a separate task.',
      },
      {
        title: 'A piece of research that can support multiple content formats.',
        description:
          'She maps which insights work for which channels and briefs the adaptations accordingly.',
      },
      {
        title: 'A team where the writer and social manager work separately.',
        description:
          'A distribution brief bridges the two teams without the writer having to brief the social team directly.',
      },
    ],
    boundaryH2: 'Nina plans distribution. Content and social teams produce the adaptations.',
    boundaryPara:
      'A distribution brief is a plan, not produced content. Nina maps where content should go and how it should adapt. The adapted versions, the publishing decisions and the channel judgements are for the content and social teams to make.',
    boundaryChecklist: [
      'Nina briefs distribution, she never produces adapted content.',
      'Distribution briefs are structured for channel teams to action.',
      'Channel fit questions are flagged, not assumed.',
      'The brief supports channel teams, it does not replace their judgement.',
    ],
    willNot: [
      { color: 'red', text: 'Produce adapted content for channels' },
      { color: 'red', text: 'Publish or schedule content' },
      { color: 'amber', text: 'Expand distribution scope without approval' },
    ],
    relatedH2: 'Workers Nina works alongside.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Confirms content is approved before distribution is planned.',
        outputLabel: 'Approval report',
        ctaLabel: 'How Audrey approves',
      },
      {
        id: 'cms_handoff',
        description: 'Handles the primary channel handoff in parallel.',
        outputLabel: 'Handoff pack',
        ctaLabel: 'How Ravi hands off',
      },
      {
        id: 'content_refresh_brief',
        description: 'Feeds distributed content back into refresh planning.',
        outputLabel: 'Refresh brief',
        ctaLabel: 'How Iris refreshes',
      },
    ],
    ctaH2: 'Plan where approved content should go next.',
    ctaPara:
      'Add Nina to your workflow and every approved piece leaves with a channel distribution plan already written.',
    guidanceFooterLabel: 'DISTRIBUTION',
    guidanceFooterValue: 'Briefed · channel-ready',
  },

  /* =================================================================== */
  /*  SEO WORKERS                                                        */
  /*  ids, names, departments and portraits mirror the backend          */
  /*  WORKER_REGISTRY (shared/workflows/workers.ts) exactly. SEO Workers */
  /*  support the writer and editor and never publish or rank anything   */
  /*  on their own. Every output is review-only and human-approved.      */
  /* =================================================================== */

  // 15. Nadia - SEO Title & Metadata Worker
  {
    id: 'seo_metadata',
    slug: 'seo-metadata',
    name: 'Nadia',
    role: 'SEO Title & Metadata Worker',
    department: 'SEO Metadata',
    team: 'content',
    stage: 'Metadata',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-22-192.webp',
    portrait2x: '/agents/profiles/profile-22-384.webp',
    seoTitle: 'SEO Title & Metadata Worker | WordPresto',
    metaDescription:
      'Nadia reviews the SEO title, meta description and H1 against search intent, then drafts clearer options for the writer to approve. Metadata that reads well for people and search.',
    h1: 'Get the title, description and H1 right.',
    heroPara1:
      'The title, meta description and H1 are the first thing a reader sees in search, and the easiest thing to leave as an afterthought. Nadia reads them against the page and the intent behind the query, flags what is missing, weak, overlong or off the mark, and drafts clearer options.',
    heroPara2:
      'For writers and editors who want metadata that reflects the page honestly, without guessing at character limits or chasing keywords.',
    heroWorksAlongside: ['Morgan', 'Sofia', 'Quinn'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Metadata',
      output: 'Output · Metadata drafts',
    },
    problemEyebrow: 'Where the click is won or lost',
    problemH2: 'Good content with a weak title still loses the click.',
    problemPara:
      'Metadata is usually written last, in a hurry, by whoever is closest to the publish button. The result is titles that repeat the brand, descriptions that restate the H1 and pages that undersell what they actually offer. Nadia treats the SERP-facing layer as part of the writing.',
    problemAnnotation: '↘ title says nothing, description repeats it',
    beforeStamp: 'Weak',
    beforeHtml: `<p><strong>Title:</strong> <span class="ba-strike">Home | Blog | Our Company Name Ltd</span><br/><strong>Description:</strong> <span class="ba-strike">Welcome to our blog where we write about lots of things in our industry.</span></p>`,
    beforeTags: ['No intent match', 'Brand-stuffed', 'Says nothing'],
    beforeNote: 'why would anyone click this',
    afterStamp: 'Clear',
    afterHtml: `<p><strong>Title:</strong> <span class="ba-hl">How to choose a content workflow (a practical guide)</span><br/><strong>Description:</strong> <span class="ba-hl">A plain walkthrough of how to plan, brief, review and approve content, with the questions to ask before you commit.</span></p>`,
    afterTags: ['Matches intent', 'Specific', 'Honest promise'],
    afterNote: 'now it earns the click',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A metadata editor that reads intent, not just keywords.',
    helpsPara:
      'Nadia checks the title, description and H1 the way a careful editor would: against what the page is for and what the reader was looking for, then proposes drafts you can accept, edit or reject.',
    checks: [
      'Title, description and H1 against search intent',
      'Length, duplication and keyword stuffing',
      'Promises the page does not actually keep',
    ],
    improves: [
      'Vague titles made specific and readable',
      'Descriptions that say what the page offers',
      'H1 and title that work together, not against',
    ],
    prepares: [
      'Draft metadata with length guidance',
      'Clear before-and-after for review',
      'Notes on the intent each option targets',
    ],
    surfaces: [
      'Titles where intent is genuinely unclear',
      'Claims in metadata that need evidence',
      'Compliance-sensitive wording to check',
    ],
    ioH2: 'What Nadia works from, and what she produces.',
    worksFrom: [
      'Page content and current H1',
      'Existing title and meta description',
      'Detected search intent',
      'Target topic or query',
      'Brand and compliance rules',
    ],
    produces: [
      'Draft SEO title options',
      'Draft meta description',
      'H1 suggestions',
      'Length and intent notes',
      'Review-ready metadata pack',
    ],
    scenarios: [
      {
        title: 'A strong article with a forgettable title.',
        description:
          'Nadia rewrites the title and description to match what readers are actually searching for, without overpromising.',
      },
      {
        title: 'Titles that all start with the brand name.',
        description:
          'She moves the value to the front so the page leads with what it offers, not who published it.',
      },
      {
        title: 'Descriptions that just repeat the heading.',
        description:
          'Nadia turns a restated H1 into a description that tells the reader what they will get from the page.',
      },
      {
        title: 'A page targeting the wrong intent.',
        description:
          'When the metadata promises one thing and the page delivers another, she flags the mismatch for a human to resolve.',
      },
      {
        title: 'Migrating a library of old posts.',
        description:
          'She reviews titles and descriptions at scale and surfaces the weakest first, so a metadata pass starts where it counts.',
      },
      {
        title: 'A regulated topic where wording matters.',
        description:
          'Nadia drafts carefully and surfaces claims that need sign-off, rather than writing a promise the page cannot back up.',
      },
    ],
    boundaryH2: 'Nadia drafts the metadata. People decide what ships.',
    boundaryPara:
      'A title is a promise to a reader. Nadia proposes and checks, but she is built to stop at the draft. Nothing she writes is published or pushed to a CMS without a person approving it first.',
    boundaryChecklist: [
      'Nadia drafts metadata, she never publishes it.',
      'Every option is shown for an editor to approve.',
      'Mismatches and risky claims are surfaced, not hidden.',
      'Nadia supports the writer, she does not replace judgement.',
    ],
    willNot: [
      { color: 'red', text: 'Publish or push to CMS' },
      { color: 'red', text: 'Promise rankings or traffic' },
      { color: 'amber', text: 'Stuff keywords to game search' },
    ],
    relatedH2: 'Workers Nadia works with.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Looks at how the page appears in results and where snippets can be won.',
        outputLabel: 'Snippet review',
        ctaLabel: 'How Morgan reviews',
      },
      {
        id: 'schema',
        description: 'Reviews structured data so the page can qualify for richer results.',
        outputLabel: 'Schema review',
        ctaLabel: 'How Sofia reviews',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Checks the draft itself is clear and ready before metadata is finalised.',
        outputLabel: 'Review notes',
        ctaLabel: 'How Quinn reviews',
      },
    ],
    ctaH2: 'Get the title, description and H1 right.',
    ctaPara:
      'Add Nadia to your workflow and every page reaches review with metadata that reflects it honestly and reads well in search.',
    guidanceFooterLabel: 'METADATA',
    guidanceFooterValue: 'Drafted · ready for review',
  },

  // 16. Morgan - SERP Snippet Worker
  {
    id: 'serp_snippet_opportunity',
    slug: 'serp-snippet-opportunity',
    name: 'Morgan',
    role: 'SERP Snippet Worker',
    department: 'SERP Optimisation',
    team: 'seo',
    stage: 'Snippets',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-38-192.webp',
    portrait2x: '/agents/profiles/profile-38-384.webp',
    seoTitle: 'SERP Snippet Worker | WordPresto',
    metaDescription:
      'Morgan reviews how a page is likely to appear in search results and points out snippet and rich-result opportunities worth shaping for. Review-only, never a guarantee.',
    h1: 'Shape how the page shows up in search.',
    heroPara1:
      'A page does not just rank, it appears. The title, description and the way content is structured all shape what a reader sees in the results. Morgan reviews those snippet elements and points out where a clear answer, a list or a structured section could earn a richer result.',
    heroPara2:
      'For editors who want their pages to read well in search results, not only on the page itself.',
    heroWorksAlongside: ['Nadia', 'Sofia', 'Omar'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Snippets',
      output: 'Output · Snippet review',
    },
    problemEyebrow: 'Where the page meets the results',
    problemH2: 'The result a reader sees is not always the page you wrote.',
    problemPara:
      'Search engines build the snippet, not you. If the page buries its answer, has no clear list or question structure, or leaves the description to chance, the result reads as flat as everything around it. Morgan reviews the elements that shape that snippet, honestly, without promising a feature will be granted.',
    problemAnnotation: '↘ the answer is there, just buried',
    beforeStamp: 'Buried',
    beforeHtml: `<p><span class="ba-strike">There are many factors to consider and it depends on a range of things, which we will explore in detail throughout this article in the sections below.</span></p>`,
    beforeTags: ['No clear answer', 'No structure', 'Flat snippet'],
    beforeNote: 'nothing for search to pull',
    afterStamp: 'Liftable',
    afterHtml: `<p><span class="ba-hl">A content workflow has six stages: plan, brief, write, review, improve and approve.</span> Each one is covered below.</p>`,
    afterTags: ['Direct answer', 'Listable', 'Snippet-ready'],
    afterNote: 'now there is something to feature',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A reviewer who reads the page the way a result page does.',
    helpsPara:
      'Morgan looks at the title, description and on-page structure together and surfaces concrete, reviewable opportunities, so the page has the best honest chance of a clear, useful snippet.',
    checks: [
      'Title and description quality for results',
      'Whether the page answers its query directly',
      'Structure that supports lists, steps or FAQs',
    ],
    improves: [
      'Answers moved up and made explicit',
      'Sections shaped for a cleaner snippet',
      'Question-led content made scannable',
    ],
    prepares: [
      'A list of rich-result opportunities',
      'Suggested snippet improvements',
      'Notes on which result types fit the page',
    ],
    surfaces: [
      'Opportunities that need a schema check',
      'Claims that would need evidence to feature',
      'Where intent and format do not match',
    ],
    ioH2: 'What Morgan works from, and what he produces.',
    worksFrom: [
      'Page title and meta description',
      'Headings and content structure',
      'Detected search intent',
      'Question and list patterns on the page',
      'Schema review where available',
    ],
    produces: [
      'Snippet opportunity review',
      'Rich-result suggestions',
      'Structure improvement notes',
      'Priority of quick wins',
      'Review-ready summary',
    ],
    scenarios: [
      {
        title: 'A how-to that never lists its steps.',
        description:
          'Morgan suggests a clear numbered structure so the steps can be read at a glance and stand a chance of featuring.',
      },
      {
        title: 'An FAQ page with the answers hidden in prose.',
        description:
          'He points out where short, direct answers would help both readers and the results page.',
      },
      {
        title: 'A strong guide with a flat description.',
        description:
          'Morgan flags the snippet elements that are letting the page down and hands them to Nadia for redrafting.',
      },
      {
        title: 'A page that could earn a rich result.',
        description:
          'He notes which structured result types genuinely fit and refers the schema work to Sofia, without promising Google will grant it.',
      },
      {
        title: 'Comparing two pages competing for the same query.',
        description:
          'Morgan reviews how each is likely to appear and surfaces which structure serves the reader best.',
      },
      {
        title: 'A reader question buried three paragraphs deep.',
        description:
          'He recommends leading with the answer so the page is useful immediately, on the page and in search.',
      },
    ],
    boundaryH2: 'Morgan reviews the opportunity. Search still decides.',
    boundaryPara:
      'No tool controls what a search engine shows. Morgan reviews and recommends, and is careful never to promise a snippet, a ranking or traffic. Every suggestion is for a person to weigh and approve.',
    boundaryChecklist: [
      'Morgan reviews snippets, he never guarantees one.',
      'Recommendations are shown for an editor to approve.',
      'Opportunities needing schema or evidence are flagged.',
      'Morgan supports the writer, he does not replace judgement.',
    ],
    willNot: [
      { color: 'red', text: 'Guarantee a featured snippet' },
      { color: 'red', text: 'Promise rankings or traffic' },
      { color: 'amber', text: 'Force structure that hurts reading' },
    ],
    relatedH2: 'Workers Morgan works with.',
    relatedWorkerIds: [
      {
        id: 'seo_metadata',
        description: 'Drafts the title and description that shape the snippet.',
        outputLabel: 'Metadata drafts',
        ctaLabel: 'How Nadia drafts',
      },
      {
        id: 'schema',
        description: 'Reviews the structured data that rich results depend on.',
        outputLabel: 'Schema review',
        ctaLabel: 'How Sofia reviews',
      },
      {
        id: 'content_analyst',
        description: 'Assesses the underlying content the snippet is drawn from.',
        outputLabel: 'Content analysis',
        ctaLabel: 'How Omar reviews',
      },
    ],
    ctaH2: 'Shape how the page shows up in search.',
    ctaPara:
      'Add Morgan to your workflow and every page reaches review with its snippet opportunities surfaced, honestly and ready to act on.',
    guidanceFooterLabel: 'SNIPPET',
    guidanceFooterValue: 'Reviewed · opportunities noted',
  },

  // 17. Sofia - Schema Worker
  {
    id: 'schema',
    slug: 'schema',
    name: 'Sofia',
    role: 'Schema Worker',
    department: 'Structured Data',
    team: 'seo',
    stage: 'Structured data',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-10-192.webp',
    portrait2x: '/agents/profiles/profile-10-384.webp',
    seoTitle: 'Schema Worker | WordPresto',
    metaDescription:
      'Sofia reviews the structured data on a page and recommends the schema types that match what the page actually is, for human review. No invented fields, no false markup.',
    h1: 'Describe the page so machines understand it too.',
    heroPara1:
      'Structured data tells search engines what a page actually is: an article, a product, a guide, a business. Sofia reviews the schema already present, assesses what the page really represents, and recommends the types that fit, so the markup describes the page honestly.',
    heroPara2:
      'For teams who want structured data that reflects the content, not a pile of markup copied between templates.',
    heroWorksAlongside: ['Nadia', 'Morgan', 'Maya'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Structured data',
      output: 'Output · Schema review',
    },
    problemEyebrow: 'Where the markup drifts from the page',
    problemH2: 'Structured data only helps when it tells the truth.',
    problemPara:
      'Schema is easy to copy and hard to keep honest. Pages inherit markup from a template, describe themselves as something they are not, or carry no structured data at all. Sofia reviews what is there against what the page actually is, and recommends types that match.',
    problemAnnotation: '↘ marked as a product, reads as an article',
    beforeStamp: 'Mismatched',
    beforeHtml: `<p><span class="ba-strike">@type: Product</span> on a page that is plainly a how-to guide, with <span class="ba-strike">no Article or HowTo markup</span> anywhere.</p>`,
    beforeTags: ['Wrong type', 'Inherited markup', 'Describes nothing'],
    beforeNote: 'this is not a product page',
    afterStamp: 'Matched',
    afterHtml: `<p><span class="ba-hl">@type: HowTo</span> with article context, recommended because the page is a step-by-step guide. <span class="ba-hl">Suggested for review.</span></p>`,
    afterTags: ['Type fits page', 'Honest markup', 'For approval'],
    afterNote: 'now the markup matches reality',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A reviewer who matches schema to what the page really is.',
    helpsPara:
      'Sofia reports the structured data she detects, assesses the apparent page type, and recommends suitable schema. She never invents fields or marks a page as something it is not.',
    checks: [
      'Structured data already on the page',
      'Whether detected types match the content',
      'Missing schema the page could honestly use',
    ],
    improves: [
      'Type recommendations that fit the page',
      'Markup that reflects the real content',
      'Clarity on what each type is for',
    ],
    prepares: [
      'A schema review with detected types',
      'Recommended types for approval',
      'Notes on why each type fits',
    ],
    surfaces: [
      'Markup that claims more than the page does',
      'Fields that would need real data to fill',
      'Cases where a human should decide the type',
    ],
    ioH2: 'What Sofia works from, and what she produces.',
    worksFrom: [
      'Existing structured data',
      'Page content and headings',
      'Apparent page type',
      'Business or organisation context',
      'Technical review where available',
    ],
    produces: [
      'Detected schema report',
      'Recommended schema types',
      'Reasoning for each recommendation',
      'Notes on fields that need real data',
      'Review-ready schema summary',
    ],
    scenarios: [
      {
        title: 'A guide carrying product markup from a template.',
        description:
          'Sofia flags the mismatch and recommends the article or how-to types that actually describe the page.',
      },
      {
        title: 'A page with no structured data at all.',
        description:
          'She assesses what the page is and recommends a sensible starting set, for a person to approve.',
      },
      {
        title: 'A business page missing organisation details.',
        description:
          'Sofia points out the schema that would describe the organisation, without inventing facts to fill it.',
      },
      {
        title: 'An FAQ that could support FAQ markup.',
        description:
          'She notes the opportunity and refers the snippet implications to Morgan, leaving the decision to the editor.',
      },
      {
        title: 'Schema copied across a whole section.',
        description:
          'Sofia reviews where the inherited markup no longer fits the individual pages it sits on.',
      },
      {
        title: 'A claim-heavy page in a regulated field.',
        description:
          'She surfaces markup that would assert more than the page can support and leaves it for human review.',
      },
    ],
    boundaryH2: 'Sofia recommends the schema. People approve the markup.',
    boundaryPara:
      'Structured data is a statement about the page. Sofia reviews and recommends, but never writes false markup, invents fields or marks a page as something it is not. Recommendations go through human approval before anything is applied.',
    boundaryChecklist: [
      'Sofia recommends schema, she never fakes markup.',
      'Detected types and recommendations are shown for review.',
      'Fields that need real data are surfaced, not filled.',
      'Sofia supports the team, she does not replace judgement.',
    ],
    willNot: [
      { color: 'red', text: 'Write false or invented markup' },
      { color: 'red', text: 'Mark a page as what it is not' },
      { color: 'amber', text: 'Fill fields without real data' },
    ],
    relatedH2: 'Workers Sofia works with.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Connects schema opportunities to how the page appears in results.',
        outputLabel: 'Snippet review',
        ctaLabel: 'How Morgan reviews',
      },
      {
        id: 'technical_health',
        description: 'Checks the wider technical signals the page depends on.',
        outputLabel: 'Technical findings',
        ctaLabel: 'How Maya reviews',
      },
      {
        id: 'seo_metadata',
        description: 'Drafts the title and description that sit alongside the markup.',
        outputLabel: 'Metadata drafts',
        ctaLabel: 'How Nadia drafts',
      },
    ],
    ctaH2: 'Describe the page so machines understand it too.',
    ctaPara:
      'Add Sofia to your workflow and every page reaches review with structured data that matches what it actually is.',
    guidanceFooterLabel: 'SCHEMA',
    guidanceFooterValue: 'Reviewed · types recommended',
  },

  // 18. Maya - Technical Health Worker
  {
    id: 'technical_health',
    slug: 'technical-health',
    name: 'Maya',
    role: 'Technical Health Worker',
    department: 'Technical Review',
    team: 'seo',
    stage: 'Technical',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-02-192.webp',
    portrait2x: '/agents/profiles/profile-02-384.webp',
    seoTitle: 'Technical Health Worker | WordPresto',
    metaDescription:
      'Maya checks the technical signals behind a page, metadata, headings, indexability and structure, and reports what needs a closer look. Standards-backed and review-only.',
    h1: 'Check the technical signals behind the page.',
    heroPara1:
      'Great writing can still be held back by quiet technical problems: a missing title, a broken heading order, a page that cannot be indexed. Maya reviews those signals against established standards and reports findings by category, so nothing technical is left to chance.',
    heroPara2:
      'For editors and website teams who want a clear, standards-backed read on a page before it goes live.',
    heroWorksAlongside: ['Sofia', 'Nadia', 'Alex'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Technical',
      output: 'Output · Technical findings',
    },
    problemEyebrow: 'Where good content quietly underperforms',
    problemH2: 'A strong page can be let down by signals no one checked.',
    problemPara:
      'Technical issues rarely announce themselves. A page with a missing meta title, headings that skip levels, or an accidental noindex can read perfectly while quietly underperforming. Maya reviews these signals against standards and reports what needs attention, in plain language.',
    problemAnnotation: '↘ reads fine, set to noindex',
    beforeStamp: 'Unchecked',
    beforeHtml: `<p>Heading order: <span class="ba-strike">H1 → H3 → H3</span>. Meta title: <span class="ba-strike">missing</span>. Indexable: <span class="ba-strike">no (noindex set)</span>.</p>`,
    beforeTags: ['Skipped heading', 'No title', 'Not indexable'],
    beforeNote: 'this will never be found',
    afterStamp: 'Reviewed',
    afterHtml: `<p>Heading order: <span class="ba-hl">H1 → H2 → H3</span>. Meta title: <span class="ba-hl">present and reviewed</span>. Indexable: <span class="ba-hl">yes</span>. Flagged for fix before publish.</p>`,
    afterTags: ['Clean hierarchy', 'Title present', 'Indexable'],
    afterNote: 'now the basics hold up',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A technical reviewer who reports findings, not noise.',
    helpsPara:
      'Maya runs standards-backed technical checks and groups what she finds into clear categories with scores, so a person can see what matters and decide what to fix. She reviews, she does not change the page.',
    checks: [
      'Metadata, headings and indexability',
      'Page structure and technical signals',
      'Schema presence and accessibility basics',
    ],
    improves: [
      'A clear picture of technical health',
      'Findings grouped by category',
      'A sensible order to fix things in',
    ],
    prepares: [
      'Standards-backed technical findings',
      'Category scores for the page',
      'Notes on what to check before publish',
    ],
    surfaces: [
      'Issues that need a developer to resolve',
      'Findings that need a human decision',
      'Signals a single page cannot confirm alone',
    ],
    ioH2: 'What Maya works from, and what she produces.',
    worksFrom: [
      'Page metadata and headings',
      'Indexability signals',
      'Page structure and content sections',
      'Schema presence',
      'Accessibility and technical signals',
    ],
    produces: [
      'Technical health findings',
      'Category scores',
      'Prioritised issues to review',
      'Notes for developers where needed',
      'Review-ready technical summary',
    ],
    scenarios: [
      {
        title: 'A page accidentally set to noindex.',
        description:
          'Maya flags it before publish, so a page meant to be found is not quietly hidden from search.',
      },
      {
        title: 'Headings that skip from H1 to H3.',
        description:
          'She reports the broken hierarchy so the structure reads cleanly for readers, assistive tech and search.',
      },
      {
        title: 'A new template before it ships.',
        description:
          'Maya reviews the technical signals on a sample page so issues are caught once, not on every page later.',
      },
      {
        title: 'A content refresh that touched the markup.',
        description:
          'She checks that titles, headings and indexability still hold up after the edit.',
      },
      {
        title: 'A page that reads well but ranks poorly.',
        description:
          'Maya surfaces the technical signals that might be holding it back, for a person to investigate.',
      },
      {
        title: 'Handing a list of fixes to a developer.',
        description:
          'She groups findings by category and priority so the technical work is clear and scoped.',
      },
    ],
    boundaryH2: 'Maya reports the findings. People decide the fixes.',
    boundaryPara:
      'A technical review is information, not an instruction. Maya checks and reports, but she does not edit the page, change settings or push anything live. Her findings are for a person to act on.',
    boundaryChecklist: [
      'Maya reviews the page, she never edits it.',
      'Findings are reported for a person to act on.',
      'Issues needing a developer are flagged clearly.',
      'Maya supports the team, she does not replace judgement.',
    ],
    willNot: [
      { color: 'red', text: 'Edit the page or change settings' },
      { color: 'red', text: 'Publish or push anything live' },
      { color: 'amber', text: 'Claim a fix without human review' },
    ],
    relatedH2: 'Workers Maya works with.',
    relatedWorkerIds: [
      {
        id: 'schema',
        description: 'Reviews the structured data among the technical signals.',
        outputLabel: 'Schema review',
        ctaLabel: 'How Sofia reviews',
      },
      {
        id: 'seo_metadata',
        description: 'Drafts the metadata Maya checks for presence and quality.',
        outputLabel: 'Metadata drafts',
        ctaLabel: 'How Nadia drafts',
      },
      {
        id: 'trust_author_credibility',
        description: 'Reviews the trust signals that sit alongside technical health.',
        outputLabel: 'Trust review',
        ctaLabel: 'How Alex reviews',
      },
    ],
    ctaH2: 'Check the technical signals behind the page.',
    ctaPara:
      'Add Maya to your workflow and every page reaches review with its technical signals checked against standards.',
    guidanceFooterLabel: 'TECHNICAL',
    guidanceFooterValue: 'Reviewed · findings logged',
  },

  // 19. Alex - Trust & Author Credibility Worker
  {
    id: 'trust_author_credibility',
    slug: 'trust-author-credibility',
    name: 'Alex',
    role: 'Trust & Author Credibility Worker',
    department: 'Trust & Credibility',
    team: 'content',
    stage: 'Trust',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-39-192.webp',
    portrait2x: '/agents/profiles/profile-39-384.webp',
    seoTitle: 'Trust & Author Credibility Worker | WordPresto',
    metaDescription:
      'Alex reviews the trust, authorship and credibility signals around a page so readers and search engines can see who stands behind the content. Review-only, never invented.',
    h1: 'Show who stands behind the content.',
    heroPara1:
      'On topics that affect money, health or major decisions, readers and search engines both want to know who wrote this and why they can be trusted. Alex reviews the author context, organisation identity, evidence support and credibility signals around a page, and reports where trust is clear and where it is missing.',
    heroPara2:
      'For teams publishing advice-led or higher-stakes content who want their credibility to be visible, not assumed.',
    heroWorksAlongside: ['Theo', 'Vera', 'Sofia'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Trust',
      output: 'Output · Trust review',
    },
    problemEyebrow: 'Where credibility goes unsaid',
    problemH2: 'Good advice from nobody in particular is hard to trust.',
    problemPara:
      'Plenty of genuinely expert content is published with no visible author, no organisation context and no sign of who reviewed it. The expertise is real, but the reader cannot see it, and neither can search. Alex reviews the signals that make credibility visible.',
    problemAnnotation: '↘ expert advice, no named author',
    beforeStamp: 'Unattributed',
    beforeHtml: `<p>Medical guidance published with <span class="ba-strike">no author byline</span>, <span class="ba-strike">no reviewer</span> and <span class="ba-strike">no organisation context</span>.</p>`,
    beforeTags: ['No author', 'No review', 'High-stakes topic'],
    beforeNote: 'who is telling me this?',
    afterStamp: 'Attributed',
    afterHtml: `<p>The same guidance with a <span class="ba-hl">named author and credentials</span>, <span class="ba-hl">a reviewer</span> and <span class="ba-hl">clear organisation context</span>. Flagged for sign-off.</p>`,
    afterTags: ['Named author', 'Reviewed by', 'Clear ownership'],
    afterNote: 'now the trust is visible',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A reviewer who checks whether trust is actually visible.',
    helpsPara:
      'Alex reviews authorship, organisation ownership, evidence support and credibility signals, returns a readiness read and surfaces what needs a human eye, especially on sensitive topics. He reports signals, he never invents credentials.',
    checks: [
      'Author byline, bio and credentials',
      'Organisation ownership and context',
      'Evidence support and review signals',
    ],
    improves: [
      'A clear picture of trust readiness',
      'Gaps in authorship made visible',
      'Where credibility could be shown better',
    ],
    prepares: [
      'A trust and credibility review',
      'A readiness read for the page',
      'Notes on sensitive-topic risk',
    ],
    surfaces: [
      'High-stakes claims that need expertise shown',
      'Missing author or reviewer context',
      'Credibility decisions for a human to make',
    ],
    ioH2: 'What Alex works from, and what he produces.',
    worksFrom: [
      'Author context and byline',
      'Organisation and ownership signals',
      'Evidence support on the page',
      'Topic sensitivity (advice, health, money)',
      'Schema credibility signals',
    ],
    produces: [
      'Trust and credibility review',
      'A trust readiness read',
      'Authorship gap notes',
      'Sensitive-topic risk flags',
      'Review-ready trust summary',
    ],
    scenarios: [
      {
        title: 'Health or finance advice with no named author.',
        description:
          'Alex flags the missing authorship so a real, qualified person can be credited before the page goes live.',
      },
      {
        title: 'A respected organisation that never says so.',
        description:
          'He points out where organisation context and ownership could make existing credibility visible.',
      },
      {
        title: 'A page that should show a reviewer.',
        description:
          'Alex notes where a reviewed-by signal would reassure readers on a higher-stakes topic.',
      },
      {
        title: 'Claims that lean on expertise not shown.',
        description:
          'He surfaces where the page assumes authority it has not demonstrated, and refers evidence work to Theo.',
      },
      {
        title: 'Preparing content for a regulated sector.',
        description:
          'Alex reviews trust signals alongside Vera so credibility and compliance are considered together.',
      },
      {
        title: 'A guest post from an unknown contributor.',
        description:
          'He flags the missing author context so a person can decide how to attribute and stand behind it.',
      },
    ],
    boundaryH2: 'Alex reviews the trust signals. People stand behind the page.',
    boundaryPara:
      'Credibility cannot be manufactured. Alex reviews and reports, but he never invents an author, fabricates credentials or claims a review that did not happen. What he surfaces is for a person to act on honestly.',
    boundaryChecklist: [
      'Alex reviews trust signals, he never invents them.',
      'Authorship gaps are surfaced for a person to fill.',
      'Sensitive-topic risks are flagged for human review.',
      'Alex supports the team, he does not replace judgement.',
    ],
    willNot: [
      { color: 'red', text: 'Invent authors or credentials' },
      { color: 'red', text: 'Claim a review that did not happen' },
      { color: 'amber', text: 'Assume authority the page has not shown' },
    ],
    relatedH2: 'Workers Alex works with.',
    relatedWorkerIds: [
      {
        id: 'evidence_gap',
        description: 'Turns weak or missing evidence into a clear checklist.',
        outputLabel: 'Evidence checklist',
        ctaLabel: 'How Theo reviews',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Flags unsupported claims and compliance risk before approval.',
        outputLabel: 'Risk & compliance report',
        ctaLabel: 'How Vera reviews',
      },
      {
        id: 'schema',
        description: 'Reviews the structured data that carries credibility signals.',
        outputLabel: 'Schema review',
        ctaLabel: 'How Sofia reviews',
      },
    ],
    ctaH2: 'Show who stands behind the content.',
    ctaPara:
      'Add Alex to your workflow and every page reaches review with its trust and authorship signals checked and visible.',
    guidanceFooterLabel: 'TRUST',
    guidanceFooterValue: 'Reviewed · signals checked',
  },

  // 20. Theo - Evidence Gap Worker
  {
    id: 'evidence_gap',
    slug: 'evidence-gap',
    name: 'Theo',
    role: 'Evidence Gap Worker',
    department: 'Evidence Assurance',
    team: 'governance',
    stage: 'Evidence',
    teamColor: 'var(--team-governance)',
    portrait: '/agents/profiles/profile-23-192.webp',
    portrait2x: '/agents/profiles/profile-23-384.webp',
    seoTitle: 'Evidence Gap Worker | WordPresto',
    metaDescription:
      'Theo turns weak or missing evidence into a clear checklist, so claims are supported before a page is approved or handed off. What to back up, where to source it, what to hold.',
    h1: 'Back up the claims before they go live.',
    heroPara1:
      'Content is full of claims: figures, comparisons, statements of fact. Some are solid, some are guesses, and some should not be published until they are checked. Theo gathers the evidence warnings raised across the workflow and turns them into a single, practical checklist of what to support, where to find it, and what to hold.',
    heroPara2:
      'For editors and reviewers who want claims supported before approval, not after a reader, or a regulator, notices.',
    heroWorksAlongside: ['Alex', 'Vera', 'Audrey'],
    heroTagPills: {
      team: 'Approval & Governance',
      stage: 'Stage · Evidence',
      output: 'Output · Evidence checklist',
    },
    problemEyebrow: 'Where claims outrun the proof',
    problemH2: 'The risky claims are rarely the ones that look risky.',
    problemPara:
      'A confident sentence reads as fact whether or not anything backs it. Across a draft, unsupported figures and tidy-sounding comparisons slip through because no one is tracking which claim needs a source. Theo consolidates those gaps into one checklist, so nothing rests on an assumption no one checked.',
    problemAnnotation: '↘ a precise number, no source',
    beforeStamp: 'Unsupported',
    beforeHtml: `<p>Our method is <span class="ba-strike">proven to cut review time by 40%</span> and is <span class="ba-strike">the most accurate on the market</span>.</p>`,
    beforeTags: ['No source', 'Superlative claim', 'Needs evidence'],
    beforeNote: 'where does 40% come from?',
    afterStamp: 'Checked',
    afterHtml: `<p>Flagged: <span class="ba-hl">"40%" needs a source or removal</span>. <span class="ba-hl">"Most accurate" needs proof or rewording.</span> Safe interim wording suggested.</p>`,
    afterTags: ['Source required', 'Reword or prove', 'For review'],
    afterNote: 'now nothing ships on a guess',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A checklist that turns vague worry into specific actions.',
    helpsPara:
      'Theo consolidates evidence warnings into a structured checklist: what needs support, a suggested source, the level of risk, whether it should block approval, and safe interim wording. The work of supporting a claim stays with people.',
    checks: [
      'Claims that lack a source',
      'Figures and comparisons that need proof',
      'Statements that may overstate the case',
    ],
    improves: [
      'Vague worries turned into clear actions',
      'A single view of every evidence gap',
      'Priority and risk on each item',
    ],
    prepares: [
      'An evidence checklist for the page',
      'Suggested sources to look for',
      'Safe interim wording where useful',
    ],
    surfaces: [
      'Claims that should block approval',
      'High-risk statements for a human to weigh',
      'Sources that need a person to verify',
    ],
    ioH2: 'What Theo works from, and what he produces.',
    worksFrom: [
      'Evidence warnings from the workflow',
      'Claims and figures in the draft',
      'Topic sensitivity and risk',
      'Existing sources on the page',
      'Review and compliance notes',
    ],
    produces: [
      'A consolidated evidence checklist',
      'Required-evidence items',
      'Suggested sources and risk levels',
      'Approval-blocking flags',
      'Safe interim wording',
    ],
    scenarios: [
      {
        title: 'A precise statistic with no citation.',
        description:
          'Theo flags the figure, marks it as needing a source, and suggests safe wording until one is found.',
      },
      {
        title: 'A superlative the page cannot prove.',
        description:
          'He surfaces "the best" or "the most accurate" as claims that need evidence or a rewrite before approval.',
      },
      {
        title: 'A draft full of confident assertions.',
        description:
          'Theo pulls every unsupported claim into one checklist so a reviewer is not hunting for them line by line.',
      },
      {
        title: 'A regulated topic near sign-off.',
        description:
          'He marks the claims that should block approval until they are properly supported, and hands risk to Vera.',
      },
      {
        title: 'Preparing a page for handoff.',
        description:
          'Theo confirms the evidence checklist is clear before Audrey assembles the approval report.',
      },
      {
        title: 'A claim that leans on unseen expertise.',
        description:
          'He coordinates with Alex so authority and evidence are both shown, not assumed.',
      },
    ],
    boundaryH2: 'Theo finds the gaps. People supply the proof.',
    boundaryPara:
      'Evidence is a human responsibility. Theo identifies what needs support and how risky each gap is, but he does not invent sources, fabricate figures or approve a claim. Filling and verifying the evidence stays with people.',
    boundaryChecklist: [
      'Theo finds gaps, he never invents evidence.',
      'Every item is shown for a person to resolve.',
      'Claims that should block approval are flagged.',
      'Theo supports the reviewer, he does not replace judgement.',
    ],
    willNot: [
      { color: 'red', text: 'Invent sources or figures' },
      { color: 'red', text: 'Approve an unsupported claim' },
      { color: 'amber', text: 'Wave through a high-risk statement' },
    ],
    relatedH2: 'Workers Theo works with.',
    relatedWorkerIds: [
      {
        id: 'trust_author_credibility',
        description: 'Reviews whether the authority behind the claims is visible.',
        outputLabel: 'Trust review',
        ctaLabel: 'How Alex reviews',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Flags unsupported claims and compliance risk before approval.',
        outputLabel: 'Risk & compliance report',
        ctaLabel: 'How Vera reviews',
      },
      {
        id: 'approval_report',
        description: 'Assembles the evidence checklist into the approval decision.',
        outputLabel: 'Approval report',
        ctaLabel: 'How Audrey approves',
      },
    ],
    ctaH2: 'Back up the claims before they go live.',
    ctaPara:
      'Add Theo to your workflow and every page reaches review with its evidence gaps gathered into one clear checklist.',
    guidanceFooterLabel: 'EVIDENCE',
    guidanceFooterValue: 'Checked · gaps listed',
  },

  // 21. Esme - Clarity & Proofing Worker
  {
    id: 'clarity_proofing',
    slug: 'clarity-proofing',
    name: 'Esme',
    role: 'Creative Writing Worker',
    roleTitle: 'Clarity & Proofing Specialist',
    department: 'Clarity & Proofing',
    team: 'content',
    stage: 'Proofing',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-42-192.webp',
    portrait2x: '/agents/profiles/profile-42-384.webp',
    seoTitle: 'Clarity & Proofing Worker | WordPresto',
    metaDescription:
      'Esme proofs grammar, clarity, tone and risk-aware wording, producing review-only suggestions so editors can improve the copy without handing control to automation.',
    h1: 'Make the writing cleaner before it reaches review.',
    heroPara1:
      'Good editing is not just fixing typos. It is knowing where a sentence drifts, where a phrase sounds almost right, where the tone has slipped, and where the reader has to work too hard. Esme proofs the writing itself: grammar, spelling, punctuation, clarity, concision, readability, tone, consistency, repetition, word choice and risk-aware language. She produces review-only suggestions so editors can improve the copy without handing control of the page to automation.',
    heroPara2:
      'For drafting workflows, content reviews, page updates, client edits and final editorial checks before approval.',
    heroWorksAlongside: ['Helena', 'Quinn', 'Dana'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Proofing',
      output: 'Output · Clarity review',
    },
    problemEyebrow: 'Where editing workflows go wrong',
    problemH2: 'A page can be factually right and still difficult to read.',
    problemPara:
      'Most content does not fail because every sentence is broken. It fails because small problems accumulate: a vague phrase here, a long sentence there, repeated wording, weak transitions, punctuation noise, tone drift and unnecessary complexity. Esme catches the language-level issues before they become review friction.',
    problemAnnotation: '↘ proof the writing, then approve it',
    beforeStamp: 'Raw draft',
    beforeHtml: `<p>The page has been designed to help users understand the service offering and it gives a number of different examples that may be useful for people who are potentially considering making a booking.</p>`,
    beforeTags: ['Long sentence', 'Vague wording', 'Flat rhythm', 'Weak conversion language'],
    beforeNote: 'this makes the page feel unfinished',
    afterStamp: 'After Esme',
    afterHtml: `<p>The page explains the service clearly, gives practical examples, and helps potential clients decide whether to book.</p>`,
    afterTags: ['Clearer sentence', 'Less repetition', 'Stronger reader focus', 'Cleaner rhythm'],
    afterNote: 'editors can review the suggestion, not rewrite from scratch',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A proofing pass that improves the writing without taking control from the editor.',
    helpsPara:
      'Esme reviews the language at sentence, paragraph and page level. She highlights issues that make the copy harder to read, less consistent, less polished or riskier than it needs to be. She does not rewrite the page for the editor. She gives specific, reviewable suggestions so a human can accept, reject or adapt the change.',
    checks: [
      'Grammar, spelling and punctuation',
      'Clarity, concision and sentence length',
      'Repetition, weak phrasing and word choice',
      'Tone, voice fit and consistency',
      'Risk-aware wording and overstatement',
    ],
    improves: [
      'Readability before a page reaches final review',
      'Sentence-level precision without changing the approved meaning',
      'Consistency across sections, drafts and page updates',
    ],
    prepares: [
      'A structured clarity and proofing review',
      'Sentence-level suggestions for human review',
      'A list of wording issues that need editorial judgement',
    ],
    surfaces: [
      'Phrases that are technically correct but awkward',
      'Sentences that need simplifying',
      'Tone drift from the selected voice or page purpose',
      'Risky claims, overstatements or unclear wording',
    ],
    ioH2: 'What Esme works from, and what she produces.',
    worksFrom: [
      'Page or draft text',
      'Writing Canvas content',
      'Section rewrite output',
      'Voice and style signals',
      'Draft quality review signals',
    ],
    produces: [
      'Clarity review',
      'Grammar and punctuation suggestions',
      'Concision and readability flags',
      'Tone and consistency notes',
      'Risk-aware wording alerts',
    ],
    scenarios: [
      {
        title: 'A page is nearly ready but still feels rough.',
        description:
          'Esme finds the language-level friction: awkward sentences, repeated phrases, unclear wording and punctuation issues.',
      },
      {
        title: 'A draft has been edited by several people.',
        description:
          'She checks for consistency so the page does not feel stitched together from different voices.',
      },
      {
        title: 'A client has made manual copy changes.',
        description:
          "Esme reviews the new wording without undoing the client's intent or silently rewriting the page.",
      },
      {
        title: 'A page needs a Grammarly-style proofing pass inside the Word Presto workflow.',
        description:
          'She gives practical sentence-level suggestions while keeping the editor in control.',
      },
      {
        title: 'A regulated or sensitive topic needs careful wording.',
        description:
          'Esme flags overstatement, risky phrasing and language that may need a human compliance check.',
      },
      {
        title: 'A final draft is moving towards approval.',
        description:
          'She catches small issues before the Editorial Approval Gate reviews the page.',
      },
    ],
    boundaryH2: 'Esme proofs the writing. Editors decide what changes.',
    boundaryPara:
      'A clarity review is not an automatic rewrite. Esme produces suggestions, flags and review notes. The editor decides what to accept, what to reject and what needs a different human edit.',
    boundaryChecklist: [
      'Esme suggests, she never applies.',
      'Suggestions are designed for review inside the editorial workflow.',
      'Tone and clarity notes support human judgement, they do not replace it.',
      'Risk-aware wording is flagged for review, not treated as legal or compliance approval.',
    ],
    willNot: [
      { color: 'red', text: 'Edit or rewrite live content directly' },
      { color: 'red', text: 'Apply suggestions without human approval' },
      { color: 'red', text: 'Publish, update WordPress, or write to any CMS' },
      { color: 'red', text: 'Call an external provider for this local proofing pass' },
      { color: 'red', text: 'Invent facts, evidence or brand rules' },
    ],
    relatedH2: 'Workers Esme works alongside.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: 'Checks whether the copy fits the configured voice before proofing tightens the language.',
        outputLabel: 'Voice review',
        ctaLabel: 'How Helena checks',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Checks whether the draft covers the approved changes and has quality risks.',
        outputLabel: 'Draft quality review',
        ctaLabel: 'How Quinn reviews',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Reviews whether the content is ready for human editorial approval.',
        outputLabel: 'Approval gate',
        ctaLabel: 'How Dana decides',
      },
    ],
    ctaH2: 'Make the writing cleaner before it reaches review.',
    ctaPara:
      'Add Esme to your workflow and every page gets a careful proofing pass before it reaches final approval.',
    guidanceFooterLabel: 'PROOFING STATUS',
    guidanceFooterValue: 'Suggestions ready · awaiting editor',
  },

  // 22. Cleo - Cannibalisation & Overlap Worker
  {
    id: 'cannibalisation_overlap',
    slug: 'cannibalisation-overlap',
    name: 'Cleo',
    role: 'Cannibalisation & Overlap Worker',
    roleTitle: 'Content Cannibalisation Analyst',
    department: 'Content Cannibalisation',
    team: 'seo',
    stage: 'Overlap review',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-26-192.webp',
    portrait2x: '/agents/profiles/profile-26-384.webp',
    seoTitle: 'Cannibalisation & Overlap Worker | WordPresto',
    metaDescription:
      'Cleo reviews a page for intent conflict, overlap risk and unclear content role, helping editors decide whether to sharpen, support, consolidate or manually check a page against others.',
    h1: 'Find pages that are trying to do too many jobs.',
    heroPara1:
      'Content cannibalisation is not only a site-wide ranking problem. It can start inside a single page: mixed intent, unclear editorial role, metadata that promises the wrong thing, thin sections that belong elsewhere, or page copy that competes with another likely asset. Cleo reviews a page for intent conflict, overlap risk and unclear content role. She helps editors decide whether the page should be sharpened, supported, consolidated or manually checked against other pages.',
    heroPara2:
      'For SEO reviews, content audits, topical planning and page improvement workflows.',
    heroWorksAlongside: ['Yuna', 'Zara', 'Hugo'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Overlap review',
      output: 'Output · Cannibalisation review',
    },
    problemEyebrow: 'Where cannibalisation starts',
    problemH2: 'Pages compete when their role is unclear.',
    problemPara:
      'A page may try to be a guide, a service page, a comparison page and a sales page all at once. Or it may contain a thin section that should be a separate supporting article. Or its title and meta description may promise an intent the body does not satisfy. Cleo reviews those overlap signals before the site becomes harder to manage.',
    problemAnnotation: '↘ clarify the page role',
    beforeStamp: 'Overlap risk',
    beforeHtml: `<p>The page introduces the service, compares alternatives, answers broad FAQs and targets a guide-style title.</p>`,
    beforeTags: ['Mixed intent', 'Unclear role', 'Thin supporting sections', 'SERP promise mismatch'],
    beforeNote: 'the page may compete with future content',
    afterStamp: 'Role clarified',
    afterHtml: `<p>The page is positioned as a service decision page, with guide content moved into supporting assets.</p>`,
    afterTags: ['Clear page role', 'Cleaner intent', 'Better cluster planning', 'Manual checks listed'],
    afterNote: 'the editor knows what this page is for',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A cannibalisation review that stays honest about its limits.',
    helpsPara:
      'Cleo reviews the page-level signals already available in the workflow. She can flag risk indicators and manual checks, but she does not claim full cross-site cannibalisation detection unless site crawl and ranking data exist.',
    checks: [
      'Within-page intent conflict',
      'Metadata promise mismatch',
      'Unclear editorial role',
      'Thin sections that may belong elsewhere',
      'Page-level overlap risk',
      'Manual cross-page checks needed',
    ],
    improves: [
      'Clarity of page purpose',
      'Topic-cluster planning',
      'Content consolidation decisions',
      'Confidence before rewriting or expanding a page',
    ],
    prepares: [
      'Cannibalisation risk review',
      'Recommended page role',
      'Manual overlap checks',
      'Suggested next action',
    ],
    surfaces: [
      'Pages trying to serve competing intents',
      'Sections that may deserve their own page',
      'Metadata that may compete with another asset',
      'Risks requiring crawl, keyword or SERP confirmation',
    ],
    ioH2: 'What Cleo works from, and what she produces.',
    worksFrom: [
      'Intent assessment',
      'Content inventory signals',
      'Metadata review',
      'Link and relationship signals',
      'Page structure and content depth',
    ],
    produces: [
      'Overlap risk review',
      'Recommended page role',
      'Intent conflict notes',
      'Manual cross-page checks',
      'Consolidation prompts',
    ],
    scenarios: [
      {
        title: 'A page feels unfocused.',
        description:
          'Cleo checks whether the page is mixing intents or trying to serve too many purposes.',
      },
      {
        title: 'You suspect keyword cannibalisation.',
        description:
          'She reviews page-level risk and lists what needs cross-page confirmation.',
      },
      {
        title: 'Metadata and content do not match.',
        description:
          'Cleo flags when the title or meta description promises a different page than the body delivers.',
      },
      {
        title: 'A content cluster is becoming messy.',
        description:
          'She helps identify whether a page should be sharpened, split, supported or consolidated.',
      },
      {
        title: 'A section feels too thin.',
        description:
          'Cleo flags content that may be better as a supporting page or internal link target.',
      },
      {
        title: 'A rewrite might make overlap worse.',
        description:
          'She helps editors protect the page role before copy changes begin.',
      },
    ],
    boundaryH2: 'Cleo flags risk. Editors decide the content strategy.',
    boundaryPara:
      'Cleo does not merge pages, redirect URLs, delete content or declare confirmed site-wide cannibalisation from page-only evidence. She gives the editor a structured risk review and manual checks.',
    boundaryChecklist: [
      'Cleo flags overlap risk, she never merges or deletes pages.',
      'Cross-page cannibalisation claims are only made with supporting crawl or ranking data.',
      'Recommended page roles are proposals for editorial review, not automatic changes.',
      'Manual checks are listed clearly so editors know what still needs confirming.',
    ],
    willNot: [
      { color: 'red', text: 'Merge, prune or redirect pages' },
      { color: 'red', text: 'Confirm cross-page cannibalisation without supporting data' },
      { color: 'red', text: 'Rewrite titles or content automatically' },
      { color: 'red', text: 'Delete sections or pages' },
      { color: 'red', text: 'Publish or apply changes to a CMS' },
    ],
    relatedH2: 'Workers Cleo works alongside.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Identifies the reader intent Cleo checks for conflict.',
        outputLabel: 'Intent assessment',
        ctaLabel: 'How Yuna identifies',
      },
      {
        id: 'topical_authority',
        description: 'Reviews topic-cluster depth and support.',
        outputLabel: 'Coverage review',
        ctaLabel: 'How Zara reviews',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Helps turn overlap findings into maintenance recommendations.',
        outputLabel: 'Maintenance review',
        ctaLabel: 'How Hugo helps',
      },
    ],
    ctaH2: 'Clarify the role before the page competes with itself.',
    ctaPara:
      'Cleo helps editors see overlap risk, mixed intent and consolidation questions before content moves forward.',
    guidanceFooterLabel: 'OVERLAP STATUS',
    guidanceFooterValue: 'Needs review · role unclear',
  },

  // 23. Faye - Content Decay & Refresh Priority Worker
  {
    id: 'content_decay',
    slug: 'content-decay',
    name: 'Faye',
    role: 'Content Decay & Refresh Priority Worker',
    roleTitle: 'Content Freshness Analyst',
    department: 'Content Freshness',
    team: 'seo',
    stage: 'Content freshness',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-27-192.webp',
    portrait2x: '/agents/profiles/profile-27-384.webp',
    seoTitle: 'Content Decay & Refresh Priority Worker | WordPresto',
    metaDescription:
      'Faye reviews freshness signals and content decay risk, helping editors decide whether a page is still current, needs monitoring, should be refreshed, or requires urgent review.',
    h1: 'Know when a page is starting to lose its edge.',
    heroPara1:
      'Some pages fail slowly. The copy still exists, the URL still loads, but the evidence is old, the title promises something current, the examples feel dated, or the topic has moved on. Faye reviews freshness signals and content decay risk. She helps editors decide whether a page is still current, needs monitoring, should be refreshed, or requires urgent review.',
    heroPara2:
      'For content audits, refresh planning, SEO maintenance and pages where age, accuracy or timeliness matters.',
    heroWorksAlongside: ['Nora', 'Hugo', 'Iris'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Content freshness',
      output: 'Output · Refresh priority review',
    },
    problemEyebrow: 'Where content decay starts',
    problemH2: 'A page can look finished while its usefulness is fading.',
    problemPara:
      'Content decay is often subtle. A date in the title, an old example, an unsupported claim, a stale comparison, or a page type that needs regular updates can slowly reduce trust and performance. Faye looks for the signals that tell editors a page needs attention before it becomes a bigger ranking or credibility problem.',
    problemAnnotation: '↘ find decay before the page slips',
    beforeStamp: 'Stale content',
    beforeHtml: `<p>The title promises a current guide, but the examples, evidence and recommendations have not been reviewed recently.</p>`,
    beforeTags: ['Temporal promise', 'Old examples', 'Weak evidence freshness', 'No maintenance cadence'],
    beforeNote: 'the page may no longer deserve trust',
    afterStamp: 'Refresh planned',
    afterHtml: `<p>The page is marked for review, outdated examples are flagged, and a practical maintenance cadence is recommended.</p>`,
    afterTags: ['Clear status', 'Useful priority', 'Human review', 'No fake update'],
    afterNote: 'the editor knows what needs attention',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'Freshness review without pretending to update the page.',
    helpsPara:
      'Faye reviews in-memory page signals and identifies content that may need refreshing. She does not edit, schedule, publish or invent updated facts. She gives the editor a clear maintenance signal.',
    checks: [
      'Temporal language in titles, metadata and copy',
      'Evidence freshness',
      'Content type sensitivity to age',
      'SERP promise mismatch',
      'Maintenance cadence indicators',
      'Trust risks from outdated information',
    ],
    improves: [
      'Content maintenance planning',
      'Refresh prioritisation',
      'Editorial visibility of ageing pages',
      'Confidence before updating or leaving a page alone',
    ],
    prepares: [
      'Refresh priority review',
      'Recommended maintenance cadence',
      'Stale-signal checklist',
      'Human review prompts',
    ],
    surfaces: [
      'Dated claims or examples',
      'Current-year promises that need confirmation',
      'Pages that should be monitored',
      'Content that may need urgent review',
    ],
    ioH2: 'What Faye works from, and what she produces.',
    worksFrom: [
      'Page title and metadata',
      'Page copy',
      'Evidence review signals',
      'Content inventory signals',
      'Intent and format signals',
    ],
    produces: [
      'Freshness review',
      'Decay risk status',
      'Refresh priority',
      'Maintenance cadence',
      'Manual checks',
    ],
    scenarios: [
      {
        title: 'A page contains dates, trends or current advice.',
        description:
          'Faye checks whether the page still feels current enough to trust.',
      },
      {
        title: 'A page has slipped in performance.',
        description:
          'She helps identify whether freshness may be part of the problem.',
      },
      {
        title: 'A content audit needs refresh priorities.',
        description:
          'Faye helps separate pages that are fine from pages that need attention.',
      },
      {
        title: 'A title promises something up to date.',
        description:
          'She checks whether the body actually supports that promise.',
      },
      {
        title: 'A page includes evidence, examples or statistics.',
        description:
          'Faye flags items that may need verification or replacement.',
      },
      {
        title: 'A maintenance workflow needs structure.',
        description:
          'She recommends whether to monitor, refresh or urgently review the page.',
      },
    ],
    boundaryH2: 'Faye flags freshness risk. Editors decide the update.',
    boundaryPara:
      'Faye does not update facts, rewrite sections, schedule refreshes or publish changes. She reviews the available signals and tells the editor what needs attention.',
    boundaryChecklist: [
      'Faye flags freshness risk, she never rewrites or updates content herself.',
      'Freshness signals are reviewed from what already exists, not invented facts or dates.',
      'Refresh priority is a recommendation for editorial planning, not an automatic schedule.',
      'Inferred decay risk is flagged for review, not treated as confirmed ranking loss.',
    ],
    willNot: [
      { color: 'red', text: 'Rewrite outdated content automatically' },
      { color: 'red', text: 'Invent fresh examples, dates or evidence' },
      { color: 'red', text: 'Schedule updates' },
      { color: 'red', text: 'Publish or apply changes to a CMS' },
      { color: 'red', text: 'Treat inferred freshness risk as confirmed ranking loss' },
    ],
    relatedH2: 'Workers Faye works alongside.',
    relatedWorkerIds: [
      {
        id: 'content_inventory',
        description: 'Classifies the page as a content asset and identifies useful inventory signals.',
        outputLabel: 'Inventory review',
        ctaLabel: 'How Nora classifies',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Reviews whether weak or ageing content should be refreshed, consolidated or pruned.',
        outputLabel: 'Maintenance review',
        ctaLabel: 'How Hugo reviews',
      },
      {
        id: 'content_refresh_brief',
        description: 'Turns refresh findings into a structured content refresh brief.',
        outputLabel: 'Refresh brief',
        ctaLabel: 'How Iris plans',
      },
    ],
    ctaH2: 'Keep ageing pages visible before they become problems.',
    ctaPara:
      'Faye helps editors spot content decay, review priority and maintenance cadence before the page loses trust.',
    guidanceFooterLabel: 'FRESHNESS STATUS',
    guidanceFooterValue: 'Refresh recommended · review needed',
  },

  // 24. Zara - Topical Authority & Coverage Gap Worker
  {
    id: 'topical_authority',
    slug: 'topical-authority',
    name: 'Zara',
    role: 'Topical Authority & Coverage Gap Worker',
    roleTitle: 'Topical Coverage Analyst',
    department: 'Topical Coverage',
    team: 'seo',
    stage: 'Topical coverage',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-28-192.webp',
    portrait2x: '/agents/profiles/profile-28-384.webp',
    seoTitle: 'Topical Authority & Coverage Gap Worker | WordPresto',
    metaDescription:
      'Zara reviews topical coverage signals and content gaps, helping editors see whether a page looks strong, needs support, is incomplete, or requires a wider content plan.',
    h1: 'See whether the page has enough topical support.',
    heroPara1:
      'A page may cover its subject clearly but still sit in a weak content cluster. It may lack supporting pages, miss related subtopics, sit too far from its hub, or carry a topic role that the site has not properly built around. Zara reviews topical coverage signals and content gaps. She helps editors see whether a page looks strong, needs support, is incomplete, or requires a wider content plan.',
    heroPara2:
      'For SEO audits, topic-cluster planning, content briefs and pages that need stronger authority signals.',
    heroWorksAlongside: ['Yuna', 'Leo', 'Sema'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Topical coverage',
      output: 'Output · Coverage gap review',
    },
    problemEyebrow: 'Where topical authority weakens',
    problemH2: 'One good page does not always make a strong topic.',
    problemPara:
      'Search performance often depends on the surrounding content system. A page may need supporting explainers, comparison pages, service pages, evidence-led resources, internal links or clearer topic-cluster placement. Zara reviews whether the page appears well-supported or whether it is carrying too much topic responsibility on its own.',
    problemAnnotation: '↘ build the topic around the page',
    beforeStamp: 'Weak support',
    beforeHtml: `<p>The page covers the main subject, but there are no obvious supporting resources, internal pathways or related subtopic coverage.</p>`,
    beforeTags: ['Thin cluster', 'Missing support', 'Weak internal context', 'Manual checks needed'],
    beforeNote: 'the page is working alone',
    afterStamp: 'Coverage improved',
    afterHtml: `<p>The page role is clarified and supporting content needs are listed for planning.</p>`,
    afterTags: ['Clear page role', 'Gap list', 'Better cluster plan', 'Human decision'],
    afterNote: 'the editor knows what to build next',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'Topical coverage review before expanding content.',
    helpsPara:
      'Zara reviews topic depth, cluster support and missing coverage signals from the page evidence available. She does not create new pages or claim a complete site-wide topic map without crawl and project data.',
    checks: [
      'Topic role and page purpose',
      'Supporting subtopic gaps',
      'Internal link and cluster support',
      'Intent coverage',
      'Orphan-risk signals',
      'Manual topic-cluster checks needed',
    ],
    improves: [
      'Content planning quality',
      'Topic-cluster structure',
      'Internal support decisions',
      'Confidence before building briefs or new pages',
    ],
    prepares: [
      'Coverage gap review',
      'Recommended page role',
      'Supporting content ideas',
      'Manual cluster checks',
    ],
    surfaces: [
      'Missing supporting pages',
      'Thin topic coverage',
      'Weak internal link support',
      'Cluster conflicts or gaps that need confirmation',
    ],
    ioH2: 'What Zara works from, and what she produces.',
    worksFrom: [
      'Intent assessment',
      'Content relationship signals',
      'Content inventory review',
      'Page structure and depth',
      'Evidence gap signals',
    ],
    produces: [
      'Coverage review',
      'Topic gap list',
      'Recommended page role',
      'Supporting content prompts',
      'Manual cluster checks',
    ],
    scenarios: [
      {
        title: 'A page needs stronger topic authority.',
        description:
          'Zara checks whether the surrounding content support appears strong enough.',
      },
      {
        title: 'You are planning a content cluster.',
        description:
          "She identifies supporting content gaps from the page's topic role.",
      },
      {
        title: 'A page seems too broad.',
        description:
          'Zara flags whether subtopics may need separate supporting assets.',
      },
      {
        title: 'Internal linking feels weak.',
        description:
          'She checks whether the page has enough topic relationship support.',
      },
      {
        title: 'A brief needs better topical context.',
        description:
          'Zara helps define what else the article or page should cover or connect to.',
      },
      {
        title: 'Search performance depends on authority.',
        description:
          'She gives editors a clearer view of topic depth and coverage gaps.',
      },
    ],
    boundaryH2: 'Zara reviews coverage. Editors decide the content plan.',
    boundaryPara:
      'Zara does not create pages, build clusters automatically, publish new content or claim complete site-wide authority from one page review. She flags coverage signals and planning gaps.',
    boundaryChecklist: [
      'Zara flags coverage gaps, she never creates or publishes pages herself.',
      'Supporting content ideas are prompts for planning, not automatic briefs.',
      'Site-wide cluster claims are only made with supporting project or crawl data.',
      'Manual checks are listed clearly so editors know what still needs confirming.',
    ],
    willNot: [
      { color: 'red', text: 'Create or publish supporting pages' },
      { color: 'red', text: 'Invent a complete topic map' },
      { color: 'red', text: 'Confirm site-wide cluster coverage without project data' },
      { color: 'red', text: 'Rewrite the page automatically' },
      { color: 'red', text: 'Apply changes to a CMS' },
    ],
    relatedH2: 'Workers Zara works alongside.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Clarifies the reader intent Zara checks against topical coverage.',
        outputLabel: 'Intent assessment',
        ctaLabel: 'How Yuna clarifies',
      },
      {
        id: 'internal_linking',
        description: 'Reviews links and reader pathways that support topic connection.',
        outputLabel: 'Link assessment',
        ctaLabel: 'How Leo reviews',
      },
      {
        id: 'semantic_search_analyzer',
        description: 'Uses vector-grounded retrieval to find deeper semantic coverage gaps.',
        outputLabel: 'Semantic coverage review',
        ctaLabel: 'How Sema finds gaps',
      },
    ],
    ctaH2: 'Build stronger content around the page.',
    ctaPara:
      'Zara helps editors see where a page needs topical support, related assets or better cluster planning.',
    guidanceFooterLabel: 'COVERAGE STATUS',
    guidanceFooterValue: 'Needs support · gaps found',
  },

  // 25. Diane - Conversion & CTA Alignment Worker
  {
    id: 'conversion_alignment',
    slug: 'conversion-alignment',
    name: 'Diane',
    role: 'Conversion & CTA Alignment Worker',
    roleTitle: 'Conversion Alignment Analyst',
    department: 'Conversion Review',
    team: 'seo',
    stage: 'Conversion review',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-29-192.webp',
    portrait2x: '/agents/profiles/profile-29-384.webp',
    seoTitle: 'Conversion & CTA Alignment Worker | WordPresto',
    metaDescription:
      'Diane reviews conversion alignment: CTA clarity, trust signals, proof gaps, metadata promise match and whether the next step makes sense for the page intent.',
    h1: 'Check whether the page gives the reader a clear next step.',
    heroPara1:
      "Content can satisfy search intent and still fail commercially. The page may explain the topic well but bury the call to action, miss trust signals, ask for the wrong action, or create a conversion path that does not match the reader's stage. Diane reviews conversion alignment: CTA clarity, trust signals, proof gaps, metadata promise match and whether the next step makes sense for the page intent.",
    heroPara2:
      'For service pages, landing pages, commercial content, lead-generation pages and final page reviews before handoff.',
    heroWorksAlongside: ['Yuna', 'Ivan', 'Leo'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Conversion review',
      output: 'Output · Conversion alignment review',
    },
    problemEyebrow: 'Where conversion alignment breaks',
    problemH2: 'A page can be useful and still leave the reader stranded.',
    problemPara:
      'The problem is often not the lack of a button. It is the wrong action, weak proof, vague trust signals, unclear timing or a next step that does not match why the reader arrived. Diane reviews whether the page leads somewhere sensible.',
    problemAnnotation: '↘ align intent with action',
    beforeStamp: 'Weak path',
    beforeHtml: `<p>The page explains the service, but the CTA is generic, proof is thin and the next step appears too late.</p>`,
    beforeTags: ['Weak CTA', 'Missing proof', 'Low trust', 'Poor timing'],
    beforeNote: 'the reader has no clear reason to act',
    afterStamp: 'Path clarified',
    afterHtml: `<p>The page gives relevant proof, a clearer next step and a CTA that matches the reader's decision stage.</p>`,
    afterTags: ['Better trust', 'Clear action', 'Intent fit', 'Human review'],
    afterNote: 'the editor can improve the path',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'Conversion review without pretending to run experiments.',
    helpsPara:
      'Diane reviews conversion signals already visible in the page evidence. She does not run A/B tests, access analytics or rewrite sales copy automatically. She gives editors a practical review of whether the page supports action.',
    checks: [
      'CTA presence and clarity',
      'Intent-to-action alignment',
      'Trust and proof signals',
      'Metadata promise match',
      'Reader decision path',
      'Conversion distractions or weak next steps',
    ],
    improves: [
      'Commercial page clarity',
      'CTA placement and relevance',
      'Trust-building before action',
      'Editorial visibility of weak conversion paths',
    ],
    prepares: [
      'Conversion alignment review',
      'CTA improvement prompts',
      'Trust signal gap list',
      'Recommended next action',
    ],
    surfaces: [
      'Missing or weak CTAs',
      'Proof gaps',
      'CTA mismatch with page intent',
      'Links or sections that distract from conversion',
    ],
    ioH2: 'What Diane works from, and what she produces.',
    worksFrom: [
      'Intent assessment',
      'Page structure',
      'Metadata review',
      'Evidence and trust signals',
      'Link pathway signals',
    ],
    produces: [
      'Conversion alignment review',
      'CTA clarity notes',
      'Trust gap list',
      'Recommended next step',
      'Decision-path findings',
    ],
    scenarios: [
      {
        title: 'A service page is not creating action.',
        description:
          'Diane checks whether the page has a clear, believable route to enquiry or booking.',
      },
      {
        title: 'A page has traffic but weak leads.',
        description:
          "She reviews whether the next step matches the reader's likely stage.",
      },
      {
        title: 'A CTA feels generic.',
        description:
          'Diane checks whether the action is specific enough for the page purpose.',
      },
      {
        title: 'Trust signals are thin.',
        description:
          'She flags missing proof, reassurance or credibility context.',
      },
      {
        title: 'A page mixes information and sales.',
        description:
          'Diane helps clarify whether the conversion path supports or interrupts the reader.',
      },
      {
        title: 'A page is going to final review.',
        description:
          'She checks whether the editor should improve the path before approval.',
      },
    ],
    boundaryH2: 'Diane reviews the path. Editors decide the change.',
    boundaryPara:
      'Diane does not run experiments, access analytics, rewrite CTAs automatically or guarantee conversion improvement. She reviews alignment and gives human editors practical findings.',
    boundaryChecklist: [
      'Diane flags conversion risk, she never rewrites CTAs or copy herself.',
      'Findings come from page-level evidence, not analytics access or live experiments.',
      'Recommended next steps are prompts for editorial review, not automatic changes.',
      'No claim of guaranteed conversion improvement is made.',
    ],
    willNot: [
      { color: 'red', text: 'Run A/B tests' },
      { color: 'red', text: 'Access analytics or claim conversion uplift' },
      { color: 'red', text: 'Rewrite calls to action automatically' },
      { color: 'red', text: 'Add forms, buttons or tracking' },
      { color: 'red', text: 'Publish or apply changes to a CMS' },
    ],
    relatedH2: 'Workers Diane works alongside.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Clarifies the reader intent Diane aligns with the page action.',
        outputLabel: 'Intent assessment',
        ctaLabel: 'How Yuna clarifies',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Checks whether the page format supports the expected search shape.',
        outputLabel: 'Format review',
        ctaLabel: 'How Ivan checks',
      },
      {
        id: 'internal_linking',
        description: 'Reviews links and pathways around the next step.',
        outputLabel: 'Link assessment',
        ctaLabel: 'How Leo reviews',
      },
    ],
    ctaH2: 'Turn useful pages into clearer journeys.',
    ctaPara:
      'Diane helps editors see whether the page gives readers enough trust, clarity and direction to take the next step.',
    guidanceFooterLabel: 'CONVERSION STATUS',
    guidanceFooterValue: 'Needs review · weak path',
  },

  // 26. Ivan - Content Format & SERP Fit Worker
  {
    id: 'content_format_serp_fit',
    slug: 'content-format-serp-fit',
    name: 'Ivan',
    role: 'Content Format & SERP Fit Worker',
    roleTitle: 'Content Format Analyst',
    department: 'Content Format',
    team: 'seo',
    stage: 'Content format',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-30-192.webp',
    portrait2x: '/agents/profiles/profile-30-384.webp',
    seoTitle: 'Content Format & SERP Fit Worker | WordPresto',
    metaDescription:
      'Ivan reviews whether the current content format matches the likely intent and expected page shape, flagging format conflicts and metadata that promises a different experience.',
    h1: 'Check whether the page is in the right shape for the job.',
    heroPara1:
      'A page can target the right topic and still use the wrong format. The searcher may need a guide, comparison, checklist, service page, explainer, FAQ, product-style page or decision page, while the content gives them something else. Ivan reviews whether the current content format matches the likely intent and expected page shape. He flags format conflicts, missing structural elements and places where metadata promises a different experience from the page itself.',
    heroPara2:
      'For SEO reviews, content briefs, page rewrites and format decisions before drafting.',
    heroWorksAlongside: ['Yuna', 'Zara', 'Diane'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Content format',
      output: 'Output · Format fit review',
    },
    problemEyebrow: 'Where content format goes wrong',
    problemH2: 'The page answers the topic in the wrong shape.',
    problemPara:
      'A "guide" that behaves like a sales page. A service page that reads like a blog post. A comparison page with no comparison structure. An FAQ page with no real questions. These format mismatches make the page harder for readers and search engines to understand. Ivan checks whether the page format fits the promise.',
    problemAnnotation: '↘ match the shape to the intent',
    beforeStamp: 'Poor fit',
    beforeHtml: `<p>The title promises a practical guide, but the page is mostly a company overview with no steps, examples or decision support.</p>`,
    beforeTags: ['Format mismatch', 'Missing sections', 'Weak SERP fit', 'Poor reader expectation match'],
    beforeNote: 'the page feels like the wrong result',
    afterStamp: 'Format clarified',
    afterHtml: `<p>The page is marked as a service decision page, with guide content moved into a supporting brief.</p>`,
    afterTags: ['Clear format', 'Better expectations', 'Useful structure', 'Review-ready'],
    afterNote: 'the editor knows what shape to build',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'Format review before writing more copy.',
    helpsPara:
      'Ivan reviews the current page shape and compares it with the likely expected format. He does not fetch live SERPs or rewrite the page. He gives editors a structured format assessment.',
    checks: [
      'Current page format',
      'Expected format based on intent',
      'Format-specific missing sections',
      'Metadata promise alignment',
      'Structure and content-type mismatch',
      'Reader expectation gaps',
    ],
    improves: [
      'Page planning before rewrite',
      'Brief quality',
      'Search-intent alignment',
      'Structural decisions before copy is written',
    ],
    prepares: [
      'Format fit review',
      'Recommended page format',
      'Missing section list',
      'Rewrite guidance for editors',
    ],
    surfaces: [
      'Wrong-format pages',
      'Mixed page types',
      'Missing comparison, guide, FAQ or service elements',
      'Metadata that promises a different content experience',
    ],
    ioH2: 'What Ivan works from, and what he produces.',
    worksFrom: [
      'Intent assessment',
      'Page structure',
      'Metadata review',
      'Content inventory signals',
      'Schema and SERP snippet signals',
    ],
    produces: [
      'Format fit review',
      'Recommended format',
      'Missing structure notes',
      'SERP-fit concerns',
      'Human rewrite prompts',
    ],
    scenarios: [
      {
        title: 'A page targets the right topic but feels wrong.',
        description:
          'Ivan checks whether the issue is format, not just copy.',
      },
      {
        title: 'A brief needs a clearer page type.',
        description:
          'He helps decide whether the page should be a guide, service page, comparison, explainer or FAQ.',
      },
      {
        title: 'A title promises a format the page does not deliver.',
        description:
          'Ivan flags the mismatch before metadata or copy changes go further.',
      },
      {
        title: 'A rewrite is about to start.',
        description:
          'He gives the editor a better structure before drafting.',
      },
      {
        title: 'Search intent and conversion needs conflict.',
        description:
          'Ivan helps clarify the shape that can serve both.',
      },
      {
        title: 'A page has missing expected sections.',
        description:
          'He lists format-specific gaps for human review.',
      },
    ],
    boundaryH2: 'Ivan recommends the shape. Editors decide the structure.',
    boundaryPara:
      'Ivan does not fetch live SERPs, rewrite the page, create schema or publish changes. He reviews the page format and gives editors a structured recommendation.',
    boundaryChecklist: [
      'Ivan recommends format, he never rewrites the page himself.',
      'Format assessments come from page evidence, not live SERP fetches.',
      'Recommended structure is a prompt for editorial review, not an automatic change.',
      'No ranking improvement is guaranteed.',
    ],
    willNot: [
      { color: 'red', text: 'Fetch or fabricate SERP layouts' },
      { color: 'red', text: 'Rewrite the page automatically' },
      { color: 'red', text: 'Create or apply schema' },
      { color: 'red', text: 'Guarantee ranking improvement' },
      { color: 'red', text: 'Publish or write to any CMS' },
    ],
    relatedH2: 'Workers Ivan works alongside.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Clarifies the reader intent Ivan uses to assess format fit.',
        outputLabel: 'Intent assessment',
        ctaLabel: 'How Yuna clarifies',
      },
      {
        id: 'topical_authority',
        description: 'Checks whether the format has enough topical support.',
        outputLabel: 'Coverage review',
        ctaLabel: 'How Zara reviews',
      },
      {
        id: 'conversion_alignment',
        description: 'Checks whether the chosen format supports the next step.',
        outputLabel: 'Conversion review',
        ctaLabel: 'How Diane checks',
      },
    ],
    ctaH2: 'Put the page in the right shape before improving it.',
    ctaPara:
      'Ivan helps editors choose the format that matches the search intent, reader expectation and page purpose.',
    guidanceFooterLabel: 'FORMAT STATUS',
    guidanceFooterValue: 'Poor fit · review needed',
  },

  // 27. Felix - Internal Link Pathway Worker
  {
    id: 'internal_link_pathway',
    slug: 'internal-link-pathway',
    name: 'Felix',
    role: 'Internal Link Pathway Worker',
    roleTitle: 'Internal Link Pathway Analyst',
    department: 'Internal Linking',
    team: 'seo',
    stage: 'Internal linking',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-31-192.webp',
    portrait2x: '/agents/profiles/profile-31-384.webp',
    seoTitle: 'Internal Link Pathway Worker | WordPresto',
    metaDescription:
      'Felix reviews internal link pathway health: orphan risk, anchor text quality, hub-and-spoke relationships, missing next-step links, competing links and pathway coherence.',
    h1: 'Review the paths readers and crawlers can actually follow.',
    heroPara1:
      'Internal links are not just SEO signals. They are routes through the site. Good links help readers move from question to proof, from guide to service, from supporting page to commercial page and from broad topic to specific action. Felix reviews internal link pathway health: orphan risk, anchor text quality, hub-and-spoke relationships, missing next-step links, competing links and pathway coherence.',
    heroPara2:
      'For internal link audits, page reviews, topic-cluster improvements and conversion-path checks.',
    heroWorksAlongside: ['Leo', 'Zara', 'Diane'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Internal linking',
      output: 'Output · Pathway review',
    },
    problemEyebrow: 'Where internal linking goes wrong',
    problemH2: 'Links exist, but they do not always create a useful path.',
    problemPara:
      'A page may have internal links that are vague, disconnected, buried, distracting or pointed at the wrong next step. It may fail to connect to its hub, support pages or conversion path. Felix reviews whether links form a coherent pathway, not just whether links are present.',
    problemAnnotation: '↘ turn links into journeys',
    beforeStamp: 'Weak pathway',
    beforeHtml: `<p>The page links to three unrelated posts and uses vague anchors that do not explain why the reader should click.</p>`,
    beforeTags: ['Loose links', 'Weak anchors', 'No hub relationship', 'Poor next step'],
    beforeNote: 'the site feels disconnected',
    afterStamp: 'Pathway clarified',
    afterHtml: `<p>Links support the page role, use descriptive anchors and lead to useful supporting or conversion pages.</p>`,
    afterTags: ['Clear anchors', 'Better cluster path', 'Useful next step', 'Review-safe'],
    afterNote: 'the reader has a route forward',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'Internal link pathway review before link edits.',
    helpsPara:
      'Felix reviews already-visible page signals and link context. He does not edit anchors, fetch linked pages, crawl the whole site or publish changes. He gives editors a structured pathway review.',
    checks: [
      'Internal link presence and placement',
      'Anchor text clarity',
      'Missing next-step links',
      'Hub, spoke and supporting-page signals',
      'Competing or distracting links',
      'Pathway coherence',
    ],
    improves: [
      'Reader movement through the site',
      'Internal link quality',
      'Topic-cluster support',
      'Conversion-path clarity',
    ],
    prepares: [
      'Internal pathway review',
      'Link action prompts',
      'Anchor-quality notes',
      'Manual site-graph checks',
    ],
    surfaces: [
      'Weak anchors',
      'Missing supporting links',
      'Confusing link paths',
      "Internal links that may compete with the page's purpose",
    ],
    ioH2: 'What Felix works from, and what he produces.',
    worksFrom: [
      'Internal links',
      'Anchor text',
      'Content relationship review',
      'Intent and format signals',
      'Conversion alignment signals',
    ],
    produces: [
      'Pathway review',
      'Anchor-quality notes',
      'Missing-link prompts',
      'Competing pathway risks',
      'Recommended link actions',
    ],
    scenarios: [
      {
        title: 'A page has links but no clear journey.',
        description:
          'Felix checks whether the links form a useful pathway.',
      },
      {
        title: 'A topic cluster needs better support.',
        description:
          'He reviews whether the page connects to hubs, spokes or supporting pages.',
      },
      {
        title: 'Anchor text feels vague.',
        description:
          'Felix flags links that do not explain their destination.',
      },
      {
        title: 'A page has weak conversion movement.',
        description:
          'He checks whether internal links support or distract from the intended next step.',
      },
      {
        title: 'A page may be isolated.',
        description:
          'Felix lists orphan-risk signals and manual checks.',
      },
      {
        title: 'Editors are planning link improvements.',
        description:
          'He gives reviewable link actions before anyone edits the page.',
      },
    ],
    boundaryH2: 'Felix reviews pathways. Editors decide link changes.',
    boundaryPara:
      'Felix does not add, remove or rewrite links automatically. He does not crawl the full site or confirm full orphan status unless discovery data exists. He produces review-only pathway findings.',
    boundaryChecklist: [
      'Felix flags pathway issues, he never edits links himself.',
      'Findings come from already-visible page signals, not a full site crawl.',
      'Orphan status is only confirmed when discovery data exists.',
      'Recommended link actions are prompts for editorial review, not automatic changes.',
    ],
    willNot: [
      { color: 'red', text: 'Edit links or anchors automatically' },
      { color: 'red', text: 'Fetch every linked page' },
      { color: 'red', text: 'Confirm site-wide orphan status without crawl data' },
      { color: 'red', text: 'Create redirects or navigation changes' },
      { color: 'red', text: 'Publish or write to any CMS' },
    ],
    relatedH2: 'Workers Felix works alongside.',
    relatedWorkerIds: [
      {
        id: 'internal_linking',
        description: 'Reviews the broader page relationship layer.',
        outputLabel: 'Link assessment',
        ctaLabel: 'How Leo reviews',
      },
      {
        id: 'topical_authority',
        description: 'Checks whether link pathways support the topic cluster.',
        outputLabel: 'Coverage review',
        ctaLabel: 'How Zara reviews',
      },
      {
        id: 'conversion_alignment',
        description: 'Checks whether the pathway supports the intended action.',
        outputLabel: 'Conversion review',
        ctaLabel: 'How Diane checks',
      },
    ],
    ctaH2: 'Make internal links work like a system.',
    ctaPara:
      'Felix helps editors turn loose links into clear reader pathways, topic support and reviewable link actions.',
    guidanceFooterLabel: 'PATHWAY STATUS',
    guidanceFooterValue: 'Needs review · weak pathways',
  },

  // 28. Hugo - Content Pruning & Consolidation Worker
  {
    id: 'content_pruning_consolidation',
    slug: 'content-pruning-consolidation',
    name: 'Hugo',
    role: 'Content Pruning & Consolidation Worker',
    roleTitle: 'Content Maintenance Specialist',
    department: 'Content Maintenance',
    team: 'seo',
    stage: 'Content maintenance',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-36-192.webp',
    portrait2x: '/agents/profiles/profile-36-384.webp',
    seoTitle: 'Content Pruning & Consolidation Worker | WordPresto',
    metaDescription:
      'Hugo reviews content maintenance signals: overlap risk, thin content, decay, unclear role, weak pathways and consolidation prompts, helping editors decide the safest next maintenance action.',
    h1: 'Decide whether weak content should be improved, merged or left alone.',
    heroPara1:
      'Not every underperforming page needs a rewrite. Some pages need refreshing. Some need consolidating. Some should be kept because they serve a narrow but valid purpose. Some need a careful pruning discussion before the site becomes bloated and confusing. Hugo reviews content maintenance signals: overlap risk, thin content, decay, unclear role, weak pathways and consolidation prompts. He helps editors decide the safest next maintenance action.',
    heroPara2:
      'For content audits, pruning reviews, consolidation planning and long-term site maintenance.',
    heroWorksAlongside: ['Cleo', 'Faye', 'Nora'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Content maintenance',
      output: 'Output · Maintenance review',
    },
    problemEyebrow: 'Where content maintenance goes wrong',
    problemH2: 'Teams either keep everything or cut too quickly.',
    problemPara:
      'Content pruning is risky when it is based on shallow signals. A page may look weak but still support a niche journey, internal pathway, compliance need or long-tail topic. Another page may look harmless while causing overlap, decay or cluster confusion. Hugo helps make maintenance decisions more careful.',
    problemAnnotation: '↘ improve, consolidate or review before cutting',
    beforeStamp: 'Unsafe pruning',
    beforeHtml: `<p>The page is thin and old, so the team deletes it without checking links, overlap, page role or supporting value.</p>`,
    beforeTags: ['Thin signal only', 'No pathway check', 'No role review', 'Risky deletion'],
    beforeNote: 'maintenance becomes guesswork',
    afterStamp: 'Careful review',
    afterHtml: `<p>The page is marked as a consolidation candidate with manual checks before any action.</p>`,
    afterTags: ['Review-safe', 'Role-aware', 'Checks listed', 'No auto-delete'],
    afterNote: 'the editor decides with context',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'Maintenance review without destructive action.',
    helpsPara:
      'Hugo combines already-available signals and turns them into a reviewable maintenance recommendation. He does not delete pages, merge content, create redirects or publish changes.',
    checks: [
      'Thin or weak content signals',
      'Content decay and freshness risk',
      'Cannibalisation and overlap risk',
      'Page role clarity',
      'Internal link/pathway value',
      'Manual checks before pruning or consolidation',
    ],
    improves: [
      'Content maintenance planning',
      'Safer pruning decisions',
      'Consolidation review quality',
      'Visibility of pages that need action or protection',
    ],
    prepares: [
      'Maintenance recommendation',
      'Consolidation candidate review',
      'Pruning caution notes',
      'Manual verification checklist',
    ],
    surfaces: [
      'Pages that may need refresh instead of pruning',
      'Pages that may belong inside another asset',
      'Risks before deleting or consolidating',
      'Missing data needed before a final decision',
    ],
    ioH2: 'What Hugo works from, and what he produces.',
    worksFrom: [
      'Content inventory signals',
      'Cannibalisation review',
      'Freshness review',
      'Internal pathway signals',
      'Topical coverage signals',
    ],
    produces: [
      'Maintenance review',
      'Recommended action',
      'Consolidation prompts',
      'Pruning cautions',
      'Manual checks',
    ],
    scenarios: [
      {
        title: 'A page looks weak but might still matter.',
        description:
          'Hugo checks whether the page has value before anyone considers pruning.',
      },
      {
        title: 'Content overlap is suspected.',
        description:
          'He helps decide whether to consolidate, sharpen or manually review.',
      },
      {
        title: 'A page is old and thin.',
        description:
          'Hugo separates refresh opportunities from consolidation candidates.',
      },
      {
        title: 'A site has too many similar pages.',
        description:
          'He gives editors a safer maintenance path than blind deletion.',
      },
      {
        title: 'Internal links depend on the page.',
        description:
          'Hugo flags pathway risk before removal or consolidation.',
      },
      {
        title: 'A maintenance plan needs reviewable actions.',
        description:
          'He turns messy signals into a structured recommendation.',
      },
    ],
    boundaryH2: 'Hugo recommends maintenance. Editors decide the action.',
    boundaryPara:
      'Hugo does not delete, merge, redirect, rewrite or publish. He only recommends a maintenance direction and lists the manual checks needed before action.',
    boundaryChecklist: [
      'Hugo recommends a direction, he never deletes or merges pages himself.',
      'Findings combine existing review signals, not fresh destructive analysis.',
      'Manual checks are always listed before any pruning or consolidation.',
      'Weak signals alone are never treated as enough for destructive action.',
    ],
    willNot: [
      { color: 'red', text: 'Delete or prune pages' },
      { color: 'red', text: 'Merge content automatically' },
      { color: 'red', text: 'Create redirects' },
      { color: 'red', text: 'Rewrite or republish content' },
      { color: 'red', text: 'Treat weak signals as enough for destructive action' },
    ],
    relatedH2: 'Workers Hugo works alongside.',
    relatedWorkerIds: [
      {
        id: 'cannibalisation_overlap',
        description: 'Flags overlap and unclear page-role risks.',
        outputLabel: 'Overlap review',
        ctaLabel: 'How Cleo reviews',
      },
      {
        id: 'content_decay',
        description: 'Reviews whether the page needs refreshing or urgent review.',
        outputLabel: 'Freshness review',
        ctaLabel: 'How Faye reviews',
      },
      {
        id: 'content_inventory',
        description: 'Classifies the page as a content asset before maintenance decisions.',
        outputLabel: 'Inventory review',
        ctaLabel: 'How Nora classifies',
      },
    ],
    ctaH2: 'Make content maintenance safer.',
    ctaPara:
      'Hugo helps editors decide whether a page should be refreshed, consolidated, protected or reviewed before any destructive action is considered.',
    guidanceFooterLabel: 'MAINTENANCE STATUS',
    guidanceFooterValue: 'Needs review · consolidate candidate',
  },

  // 29. Nora - Content Inventory Worker
  {
    id: 'content_inventory',
    slug: 'content-inventory',
    name: 'Nora',
    role: 'Content Inventory Worker',
    roleTitle: 'Content Inventory Specialist',
    department: 'Content Inventory',
    team: 'content',
    stage: 'Content inventory',
    teamColor: 'var(--team-content)',
    portrait: '/agents/profiles/profile-14-192.webp',
    portrait2x: '/agents/profiles/profile-14-384.webp',
    seoTitle: 'Content Inventory Worker | WordPresto',
    metaDescription:
      'Nora reviews the page as a content asset, identifying page type, structural signals, content gaps and inventory metadata that can help editors plan better work.',
    h1: 'Understand what kind of content asset you are dealing with.',
    heroPara1:
      'Before a page can be improved, it needs to be classified. Is it a service page, guide, article, landing page, comparison page, support page or something else? What signals are present? What is missing? What would help future planning? Nora reviews the page as a content asset. She identifies page type, structural signals, content gaps and inventory metadata that can help editors plan better work.',
    heroPara2:
      'For content audits, page reviews, content planning and early-stage editorial assessment.',
    heroWorksAlongside: ['Patrick', 'Yuna', 'Hugo'],
    heroTagPills: {
      team: 'Content Production',
      stage: 'Stage · Content inventory',
      output: 'Output · Inventory review',
    },
    problemEyebrow: 'Where content planning goes wrong',
    problemH2: 'Teams start improving pages before they know what the page is meant to be.',
    problemPara:
      'A page can only be judged properly once its role is clear. A thin service page, a weak article and an incomplete comparison page need different actions. Without inventory context, every recommendation risks becoming generic. Nora gives the workflow a clearer content classification before deeper review begins.',
    problemAnnotation: '↘ classify the asset before improving it',
    beforeStamp: 'Unclear asset',
    beforeHtml: `<p>The page has service copy, FAQs and guide-style sections, but no clear content type.</p>`,
    beforeTags: ['Unclear role', 'Mixed structure', 'Missing metadata', 'Hard to plan'],
    beforeNote: 'the team does not know what job the page has',
    afterStamp: 'Inventory reviewed',
    afterHtml: `<p>The page is classified as a service decision page with missing proof, FAQ depth and related-page support.</p>`,
    afterTags: ['Clearer type', 'Planning gaps', 'Better workflow routing', 'Review-ready'],
    afterNote: 'the editor knows what kind of asset this is',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'Page-level inventory without pretending to crawl the whole site.',
    helpsPara:
      'Nora reviews the inspected page as a single content asset. She does not build a full site inventory, crawl linked pages or classify the entire domain. She gives editors a useful page-level inventory review.',
    checks: [
      'Apparent page type',
      'Content and structural signals',
      'Missing asset elements',
      'Page role clarity',
      'Planning metadata needs',
      'Manual checks for future inventory work',
    ],
    improves: [
      'Content audit clarity',
      'Page review routing',
      'Brief and maintenance planning',
      'Understanding of what kind of page is being reviewed',
    ],
    prepares: [
      'Content inventory review',
      'Apparent asset classification',
      'Missing-signal list',
      'Planning notes for future work',
    ],
    surfaces: [
      'Pages with unclear purpose',
      'Missing content elements',
      'Mixed page-type signals',
      'Metadata that would help future content planning',
    ],
    ioH2: 'What Nora works from, and what she produces.',
    worksFrom: [
      'Page copy',
      'Page structure',
      'Metadata',
      'Source signals',
      'Existing worker findings where available',
    ],
    produces: [
      'Inventory review',
      'Page-type classification',
      'Missing asset signals',
      'Planning metadata notes',
      'Manual checks',
    ],
    scenarios: [
      {
        title: 'A page review needs a starting classification.',
        description:
          'Nora identifies what kind of content asset the workflow is handling.',
      },
      {
        title: 'A content audit is messy.',
        description:
          'She gives each reviewed page clearer inventory context.',
      },
      {
        title: 'A page has mixed signals.',
        description:
          'Nora flags when the page behaves like more than one content type.',
      },
      {
        title: 'A maintenance decision is coming.',
        description:
          'She helps clarify whether the asset should be refreshed, consolidated or expanded.',
      },
      {
        title: 'A brief needs page-type context.',
        description:
          'Nora gives the brief builder a clearer starting point.',
      },
      {
        title: 'The team needs planning metadata.',
        description:
          'She lists what would make the asset easier to manage later.',
      },
    ],
    boundaryH2: 'Nora classifies the page. Editors decide what it becomes.',
    boundaryPara:
      'Nora does not create a complete site inventory, crawl the domain, edit content or publish changes. She reviews the current page and prepares planning context.',
    boundaryChecklist: [
      'Nora classifies the page, she never edits or restructures it herself.',
      'Reviews cover the current page, not a full-site crawl or inventory.',
      'Planning notes are prompts for editorial routing, not automatic actions.',
      'Missing-signal lists are flagged for review, not treated as confirmed gaps.',
    ],
    willNot: [
      { color: 'red', text: 'Crawl the full site' },
      { color: 'red', text: 'Confirm full inventory coverage' },
      { color: 'red', text: 'Rewrite or restructure the page automatically' },
      { color: 'red', text: 'Create or delete content records' },
      { color: 'red', text: 'Publish or write to any CMS' },
    ],
    relatedH2: 'Workers Nora works alongside.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extracts the source signals Nora uses for classification.',
        outputLabel: 'Page signals',
        ctaLabel: 'How Patrick extracts',
      },
      {
        id: 'intent_analyst',
        description: 'Reviews whether the apparent page type matches reader intent.',
        outputLabel: 'Intent assessment',
        ctaLabel: 'How Yuna reviews',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Uses inventory context before recommending maintenance action.',
        outputLabel: 'Maintenance review',
        ctaLabel: 'How Hugo uses it',
      },
    ],
    ctaH2: 'Classify the page before deciding what to do with it.',
    ctaPara:
      'Nora helps editors understand the content asset, its missing signals and its planning role before deeper work begins.',
    guidanceFooterLabel: 'INVENTORY STATUS',
    guidanceFooterValue: 'Asset reviewed · gaps found',
  },

  // 30. Sema - Semantic Coverage Analyser
  {
    id: 'semantic_search_analyzer',
    slug: 'semantic-search-analyzer',
    name: 'Sema',
    role: 'Semantic Coverage Analyser',
    roleTitle: 'Semantic Coverage Analyst',
    department: 'Semantic Intelligence',
    team: 'seo',
    stage: 'Semantic intelligence',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-43-192.webp',
    portrait2x: '/agents/profiles/profile-43-384.webp',
    seoTitle: 'Semantic Coverage Analyser | WordPresto',
    metaDescription:
      "Sema reviews semantic coverage by comparing content against Word Presto's knowledge layer and project context, surfacing missing subtopics and thinly covered entities.",
    h1: 'Find the concepts the page is missing.',
    heroPara1:
      "Good content does not just mention the target keyword. It covers the entities, subtopics, relationships and supporting ideas that make the page genuinely useful. Sema reviews semantic coverage by comparing the content against Word Presto's knowledge layer and project context. She surfaces missing subtopics, thinly covered entities and coverage gaps that should be reviewed before the page is approved.",
    heroPara2:
      'For advanced SEO reviews, content briefs, topical authority work and pages that need deeper semantic coverage.',
    heroWorksAlongside: ['Zara', 'Kenji', 'Cassius'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Semantic intelligence',
      output: 'Output · Semantic coverage review',
    },
    problemEyebrow: 'Where semantic SEO goes wrong',
    problemH2: 'Pages mention the topic but miss the surrounding meaning.',
    problemPara:
      'A page can include the right keyword and still fail to cover the subject properly. It may skip key entities, avoid important comparisons, miss supporting concepts or leave questions unanswered. Sema looks beyond keyword presence. She reviews whether the page has enough semantic depth to deserve confidence.',
    problemAnnotation: '↘ cover the topic, not just the term',
    beforeStamp: 'Thin coverage',
    beforeHtml: `<p>The page mentions the service but misses key conditions, decision factors, supporting evidence and related entities.</p>`,
    beforeTags: ['Keyword present', 'Entities missing', 'Thin subtopics', 'Weak depth'],
    beforeNote: 'the page sounds relevant but feels incomplete',
    afterStamp: 'Coverage reviewed',
    afterHtml: `<p>Sema lists missing entities, thin subtopics and evidence-backed gaps for the editor to review.</p>`,
    afterTags: ['Entity gaps', 'Topic depth', 'Source-linked findings', 'Review-safe'],
    afterNote: 'the editor knows what is missing',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'Semantic coverage review with evidence boundaries.',
    helpsPara:
      'Sema compares content against available knowledge and project context, then produces reviewable coverage gaps. She does not stuff keywords, fabricate entities or rewrite the page automatically.',
    checks: [
      'Missing subtopics',
      'Thinly covered entities',
      'Semantic depth',
      'Term distribution health',
      'Coverage gaps against retrieved knowledge',
      'Evidence support for suggested additions',
    ],
    improves: [
      'Topic depth',
      'Brief quality',
      'Authority-building content plans',
      'Confidence before content approval',
    ],
    prepares: [
      'Semantic coverage review',
      'Entity and subtopic gap list',
      'Evidence-linked findings',
      'Review prompts for editors',
    ],
    surfaces: [
      'Important concepts missing from the draft',
      'Overused or underdeveloped terms',
      'Coverage gaps that need source support',
      'Areas where the page is semantically thin',
    ],
    ioH2: 'What Sema works from, and what she produces.',
    worksFrom: [
      'Draft or page content',
      'Project context',
      'Knowledge neighbours',
      'Evidence signals',
      'Topic and entity candidates',
    ],
    produces: [
      'Semantic coverage review',
      'Entity gap list',
      'Subtopic findings',
      'Term-distribution signal',
      'Evidence-linked recommendations',
    ],
    scenarios: [
      {
        title: 'A page needs deeper topical authority.',
        description:
          'Sema identifies what the content is missing beyond obvious keywords.',
      },
      {
        title: 'A draft feels shallow.',
        description:
          'She finds missing entities, subtopics and supporting concepts.',
      },
      {
        title: 'A brief needs richer context.',
        description:
          'Sema gives editors coverage gaps to consider before drafting.',
      },
      {
        title: 'A page competes in a complex topic.',
        description:
          'She helps surface the concepts stronger pages usually cover.',
      },
      {
        title: 'A content update needs evidence-led expansion.',
        description:
          'Sema lists gaps that should be reviewed with supporting context.',
      },
      {
        title: 'You want semantic SEO without keyword stuffing.',
        description:
          'She focuses on meaning, coverage and source-linked gaps.',
      },
    ],
    boundaryH2: 'Sema identifies gaps. Editors decide what belongs in the page.',
    boundaryPara:
      'Sema does not automatically add topics, stuff keywords, rewrite copy or publish. Her findings are review-only and should be judged by an editor.',
    boundaryChecklist: [
      'Sema flags gaps, she never adds topics or rewrites copy herself.',
      'Coverage findings are compared against retrieved knowledge, not invented from nothing.',
      'Suggested additions are prompts for editorial review, not automatic insertions.',
      'Retrieved neighbours are treated as signals for review, not unquestionable truth.',
    ],
    willNot: [
      { color: 'red', text: 'Stuff keywords into content' },
      { color: 'red', text: 'Invent unsupported entities' },
      { color: 'red', text: 'Rewrite or expand the page automatically' },
      { color: 'red', text: 'Publish or write to any CMS' },
      { color: 'red', text: 'Treat retrieved neighbours as unquestionable truth' },
    ],
    relatedH2: 'Workers Sema works alongside.',
    relatedWorkerIds: [
      {
        id: 'topical_authority',
        description: 'Reviews page-level topic support and cluster gaps.',
        outputLabel: 'Coverage review',
        ctaLabel: 'How Zara reviews',
      },
      {
        id: 'evidence',
        description: 'Reviews whether suggested additions are supported.',
        outputLabel: 'Evidence bundle',
        ctaLabel: 'How Kenji reviews',
      },
      {
        id: 'competitor_intel',
        description: 'Compares coverage against real competitor SERP evidence when available.',
        outputLabel: 'Competitor coverage review',
        ctaLabel: 'How Cassius compares',
      },
    ],
    ctaH2: 'Find the meaning the page has not covered yet.',
    ctaPara:
      'Sema helps editors strengthen topical depth with reviewable semantic gaps, not keyword stuffing.',
    guidanceFooterLabel: 'SEMANTIC STATUS',
    guidanceFooterValue: 'Coverage gaps found · review needed',
  },

  // 31. Cassius - Competitor Intelligence Worker
  {
    id: 'competitor_intel',
    slug: 'competitor-intel',
    name: 'Cassius',
    role: 'Competitor Intelligence Worker',
    roleTitle: 'Competitive Analyst',
    department: 'Competitive Intelligence',
    team: 'seo',
    stage: 'Competitive intelligence',
    teamColor: 'var(--team-seo)',
    portrait: '/agents/profiles/profile-44-192.webp',
    portrait2x: '/agents/profiles/profile-44-384.webp',
    seoTitle: 'Competitor Intelligence Worker | WordPresto',
    metaDescription:
      'Cassius reviews competitor coverage from stored SERP competitor data, surfacing the subtopics, entities and angles competitors appear to cover that your content may be missing.',
    h1: 'See what ranking competitors cover that you do not.',
    heroPara1:
      'Competitor analysis is useful only when it is grounded in real search evidence. Cassius reviews competitor coverage from stored SERP competitor data and compares it with the page or draft under review. He surfaces the subtopics, entities and angles competitors appear to cover that your content may be missing.',
    heroPara2:
      'For competitive SEO reviews, content-gap analysis, keyword-led planning and pages being improved for a known search opportunity.',
    heroWorksAlongside: ['Sema', 'Yuna', 'Kenji'],
    heroTagPills: {
      team: 'Search & SEO',
      stage: 'Stage · Competitive intelligence',
      output: 'Output · Competitor coverage review',
    },
    problemEyebrow: 'Where competitor analysis goes wrong',
    problemH2: 'Teams copy competitors instead of understanding the gap.',
    problemPara:
      'Competitive review should not mean scraping ideas and imitating another page. It should help editors understand what the ranking landscape appears to cover, what the current draft misses, and which gaps are genuinely relevant. Cassius turns competitor evidence into reviewable content intelligence.',
    problemAnnotation: '↘ compare coverage without copying',
    beforeStamp: 'Shallow competitor check',
    beforeHtml: `<p>Competitors mention several decision factors, but the draft only covers the basic definition.</p>`,
    beforeTags: ['Missing angles', 'Thin comparison', 'SERP evidence needed', 'No copy strategy'],
    beforeNote: 'the page lacks competitive context',
    afterStamp: 'Coverage compared',
    afterHtml: `<p>Cassius lists competitor-covered subtopics and entities that the editor should review.</p>`,
    afterTags: ['Real SERP basis', 'Gap list', 'Human judgement', 'No imitation'],
    afterNote: 'the editor can decide what belongs',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'Competitor coverage review from real SERP evidence.',
    helpsPara:
      'Cassius uses existing competitor SERP data where available. If there is no stored SERP data, he shows an honest gated state rather than inventing competitor findings.',
    checks: [
      'Competitor-covered subtopics',
      'Missing entities and angles',
      'Draft versus SERP competitor coverage',
      'Repeated competitor themes',
      'Evidence limitations',
      'No-data states when SERP evidence is missing',
    ],
    improves: [
      'Competitive content planning',
      'Gap-led brief quality',
      'Search opportunity review',
      'Awareness of what ranking pages appear to address',
    ],
    prepares: [
      'Competitor coverage review',
      'SERP-grounded gap list',
      'Content angle prompts',
      'Evidence limitation notes',
    ],
    surfaces: [
      'Relevant competitor-covered topics',
      'Missing decision factors',
      'SERP themes worth considering',
      'Areas where competitor evidence is too thin or unavailable',
    ],
    ioH2: 'What Cassius works from, and what he produces.',
    worksFrom: [
      'Draft or page content',
      'Stored SERP competitor data',
      'Keyword or search opportunity context',
      'Semantic coverage signals',
      'Evidence review signals',
    ],
    produces: [
      'Competitor coverage review',
      'SERP-grounded gap list',
      'Missing entity notes',
      'Competitive angle prompts',
      'No-data state when required',
    ],
    scenarios: [
      {
        title: 'A page is targeting a competitive keyword.',
        description:
          'Cassius checks what ranking competitors appear to cover that the page may miss.',
      },
      {
        title: 'A content brief needs competitor context.',
        description:
          'He provides gap-led prompts without turning the brief into imitation.',
      },
      {
        title: 'A draft feels weaker than the SERP.',
        description:
          'Cassius identifies missing angles and entities for human review.',
      },
      {
        title: 'A keyword research action has produced SERP data.',
        description:
          'He uses that stored data to ground competitor coverage findings.',
      },
      {
        title: 'A page is being refreshed for SEO performance.',
        description:
          'Cassius helps editors see whether competitor coverage has moved ahead.',
      },
      {
        title: 'The team needs honest competitive evidence.',
        description:
          'He shows no-data states when competitor SERP evidence is not available.',
      },
    ],
    boundaryH2: 'Cassius compares coverage. Editors decide what to use.',
    boundaryPara:
      'Cassius does not copy competitor content, fetch hidden competitor pages, invent SERP data or guarantee ranking improvements. He turns available competitor evidence into reviewable gaps.',
    boundaryChecklist: [
      'Cassius compares coverage, he never copies competitor content.',
      'Findings are grounded in stored SERP data, not invented competitor claims.',
      'A no-data state is shown honestly when SERP evidence is missing.',
      'No ranking improvement is guaranteed.',
    ],
    willNot: [
      { color: 'red', text: 'Copy competitor content' },
      { color: 'red', text: 'Invent competitor findings without SERP data' },
      { color: 'red', text: 'Fetch live competitor pages unless a future workflow explicitly supports it' },
      { color: 'red', text: 'Rewrite the page automatically' },
      { color: 'red', text: 'Publish or write to any CMS' },
    ],
    relatedH2: 'Workers Cassius works alongside.',
    relatedWorkerIds: [
      {
        id: 'semantic_search_analyzer',
        description: 'Finds semantic gaps from the knowledge layer and project context.',
        outputLabel: 'Semantic coverage review',
        ctaLabel: 'How Sema finds gaps',
      },
      {
        id: 'intent_analyst',
        description: 'Clarifies the intent behind the competitive search opportunity.',
        outputLabel: 'Intent assessment',
        ctaLabel: 'How Yuna clarifies',
      },
      {
        id: 'evidence',
        description: 'Reviews whether competitor-led findings are properly supported.',
        outputLabel: 'Evidence bundle',
        ctaLabel: 'How Kenji reviews',
      },
    ],
    ctaH2: 'Understand the gap before you compete.',
    ctaPara:
      'Cassius helps editors compare coverage against real SERP competitor evidence without copying, guessing or fabricating data.',
    guidanceFooterLabel: 'COMPETITOR STATUS',
    guidanceFooterValue: 'Gaps found · evidence required',
  },

  // 32. Sam - Safe Change Planner
  {
    id: 'safe_change_planner',
    slug: 'safe-change-planner',
    name: 'Sam',
    role: 'Safe Change Planner',
    roleTitle: 'Change Planning Specialist',
    department: 'Change Planning',
    team: 'governance',
    stage: 'Change planning',
    teamColor: 'var(--team-governance)',
    portrait: '/agents/profiles/profile-15-192.webp',
    portrait2x: '/agents/profiles/profile-15-384.webp',
    seoTitle: 'Safe Change Planner | WordPresto',
    metaDescription:
      'Sam converts worker findings into structured proposed changes, labelling affected area, risk and expected benefit, without editing the page or applying anything.',
    h1: 'Turn findings into changes that can be reviewed safely.',
    heroPara1:
      'A finding is not yet a change. "The page needs clearer structure" is useful, but an editor still needs to know what might change, where, why, what risk is involved and whether the change should move forward. Sam converts worker findings into structured proposed changes. He prepares the review layer without editing the page or applying anything.',
    heroPara2:
      'For content analysis, approval preparation, review queues and safe-edit planning.',
    heroWorksAlongside: ['Riley', 'Helen', 'Dana'],
    heroTagPills: {
      team: 'Approval & Governance',
      stage: 'Stage · Change planning',
      output: 'Output · Change plan',
    },
    problemEyebrow: 'Where change planning goes wrong',
    problemH2: 'Teams jump from finding to edit too quickly.',
    problemPara:
      'A worker may identify a real issue, but the next step should not be automatic editing. The proposed change needs context: what area is affected, why the change matters, how risky it is and what benefit is expected. Sam creates that decision layer.',
    problemAnnotation: '↘ plan the change before editing',
    beforeStamp: 'Raw finding',
    beforeHtml: `<p>The page needs a stronger introduction and clearer next step.</p>`,
    beforeTags: ['No affected area', 'No risk label', 'No priority', 'No approval state'],
    beforeNote: 'the editor still has to interpret the finding',
    afterStamp: 'Planned change',
    afterHtml: `<p>Revise the introduction to clarify the page promise and add a relevant next step after the first section.</p>`,
    afterTags: ['Affected area', 'Expected benefit', 'Risk noted', 'Approval required'],
    afterNote: 'the change is ready for review',
    helpsEyebrow: 'How this Worker helps',
    helpsH2: 'A structured plan before any content change.',
    helpsPara:
      "Sam maps findings to proposed changes. He does not rewrite, apply or publish. He prepares a human-reviewable plan that can move into Riley's queue or a later approval workflow.",
    checks: [
      'Worker findings and recommendations',
      'Affected content area',
      'Change type',
      'Priority and expected benefit',
      'Risk level',
      'Evidence or approval requirements',
    ],
    improves: [
      'Safety of content workflows',
      'Quality of review decisions',
      'Clarity before edits begin',
      'Separation between recommendation and action',
    ],
    prepares: [
      'Proposed change plan',
      'Affected-area labels',
      'Risk and benefit notes',
      'Approval-ready review items',
    ],
    surfaces: [
      'Changes that need approval',
      'High-risk edits',
      'Items needing more evidence',
      'Recommendations that are not safe-edit ready',
    ],
    ioH2: 'What Sam works from, and what he produces.',
    worksFrom: [
      'Worker findings',
      'Evidence review',
      'Content analysis outputs',
      'Risk and claims signals',
      'Page context',
    ],
    produces: [
      'Change plan',
      'Proposed changes',
      'Affected-area notes',
      'Risk labels',
      'Expected benefit',
    ],
    scenarios: [
      {
        title: 'A review has produced several findings.',
        description:
          'Sam turns them into proposed changes the editor can evaluate.',
      },
      {
        title: 'The team needs to avoid automatic edits.',
        description:
          'He creates a planning layer before any content is touched.',
      },
      {
        title: 'A recommendation may be risky.',
        description:
          'Sam flags risk and evidence needs before it moves forward.',
      },
      {
        title: 'A page is entering the review queue.',
        description:
          'He prepares the structured items Riley can organise.',
      },
      {
        title: 'The editor needs clearer priorities.',
        description:
          'Sam labels what matters most and why.',
      },
      {
        title: 'A change should not be safe-edit ready yet.',
        description:
          'He keeps proposed changes in review-only state until approved.',
      },
    ],
    boundaryH2: 'Sam plans changes. Editors approve or reject them.',
    boundaryPara:
      'Sam does not edit the page, draft safe edits, apply changes or publish. He prepares proposed changes for human decision.',
    boundaryChecklist: [
      'Sam plans changes, he never edits or applies them himself.',
      'Proposed changes stay review-only until an editor approves them.',
      'Risk and evidence needs are flagged, not skipped or assumed safe.',
      'A finding is never treated as already approved.',
    ],
    willNot: [
      { color: 'red', text: 'Rewrite content automatically' },
      { color: 'red', text: 'Apply proposed changes' },
      { color: 'red', text: 'Treat a finding as approved' },
      { color: 'red', text: 'Publish or write to any CMS' },
      { color: 'red', text: 'Bypass evidence or risk checks' },
    ],
    relatedH2: 'Workers Sam works alongside.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: "Turns Sam's proposed changes into a decision queue.",
        outputLabel: 'Review queue',
        ctaLabel: 'How Riley organises',
      },
      {
        id: 'review',
        description: 'Summarises review actions for human editors.',
        outputLabel: 'Review summary',
        ctaLabel: 'How Helen summarises',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Checks whether proposed changes block approval.',
        outputLabel: 'Approval gate',
        ctaLabel: 'How Dana decides',
      },
    ],
    ctaH2: 'Plan the change before the edit.',
    ctaPara:
      'Sam turns findings into structured proposed changes so human editors can approve, reject or defer with context.',
    guidanceFooterLabel: 'CHANGE STATUS',
    guidanceFooterValue: 'Proposed · awaiting review',
  },
];

export function getWorkerProfileBySlug(slug: string): WorkerProfile | undefined {
  return workerProfiles.find((w) => w.slug === slug);
}

export function getWorkerByWorkerId(id: string): WorkerProfile | undefined {
  return workerProfiles.find((w) => w.id === id);
}
