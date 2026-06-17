/**
 * Generates Markdown mirror files from the shared page source of truth.
 * Output: public/pages/{slug}.md
 * Run: node scripts/generate-page-markdown.mjs  (or via prebuild)
 *
 * Both the Astro page and the Markdown file derive from the same data sources:
 * - Homepage: inline data below (mirrors src/data/pages.ts)
 * - Workers: read from src/data/workerProfiles.ts via tsx/import
 *
 * Worker mirrors are generated from workerProfiles data directly.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'pages');

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(join(OUT_DIR, 'workers'), { recursive: true });

/* ------------------------------------------------------------------ */
/*  Homepage data                                                       */
/* ------------------------------------------------------------------ */
const pages = [
  {
    slug: 'index',
    canonicalUrl: 'https://wordpresto.com/',
    pageTitle: 'Word Presto is the content engine behind better publishing workflows.',
    seoTitle: 'Content workflow engine for publishing teams | Word Presto',
    metaDescription:
      'Plan, brief, write, review and improve content before it reaches your CMS, website or client.',
    focus: 'Content workflow engine for publishing teams',
    summary:
      'Word Presto is a structured content workflow engine. It gives teams a clear path from idea to approval: plan, brief, draft, review, improve, approve and prepare for handoff, before anything is published.',
    sections: [
      {
        heading: 'The problem: messy workflows, not poor writers',
        body: 'Content does not fail because people cannot write. It fails because the workflow is messy. Briefs are vague. Drafts arrive without structure. Good ideas get lost in notes, chats and half-finished documents.',
        items: [
          'Unclear brief: writers start guessing what the page is even for.',
          'Draft lacks structure: no shared shape, so every draft reads differently.',
          'Checks happen too late: important questions surface after the page is already written.',
          'Support missing: important points move forward without enough support.',
          'Review unclear: no clear gate, so nobody knows what "done" means.',
          'CMS prep left until the end: page details and handoff notes become a last-minute scramble.',
        ],
      },
      {
        heading: 'How it works: a structured path from idea to approval',
        body: 'A structured place for content to move from idea to approval. Each stage has a clear role, output and review point. Not a project board: a copy desk, where every piece of work has a folder it moves through.',
        items: [
          '01 · Plan: turn loose ideas and business priorities into a clear direction.',
          '02 · Brief: give writers the goal, audience, angle and structure before drafting starts.',
          '03 · Draft: help the first version follow the purpose of the page.',
          '04 · Review: surface what needs attention before the piece reaches the website or CMS.',
          '05 · Improve: tighten sections that are unclear, thin, repetitive or not doing their job.',
          '06 · Approve: human sign-off before anything moves to publishing.',
          '07 · Prepare for CMS: package the approved work for clean handoff.',
        ],
      },
      {
        heading: 'Before it reaches the website',
        body: 'Most of the important work happens before anything is published. Word Presto gives that work a clearer path: from idea, to brief, to draft, to review, to improvement, to approval and handoff.',
        items: [
          'Plan the work: turn loose ideas and business priorities into a clear direction for the page.',
          'Create the brief: give writers the goal, audience, angle and structure before anyone starts drafting.',
          'Shape the draft: help the first version follow the purpose of the page.',
          'Review the work: surface what needs attention before the piece reaches the website, CMS or client.',
          'Improve the weak parts: tighten sections that are unclear, thin, repetitive or not doing their job.',
          'Prepare the handoff: package the approved work so it can move cleanly into a website, CMS or client review process.',
        ],
      },
      {
        heading: 'Three ways to use Word Presto',
        body: 'One content engine. Three ways the finished work leaves the desk.',
        items: [
          'Automated Astro + CMS builds: the engine behind structured, content-led websites where pages, briefs, updates and handoff notes are planned before they become templates.',
          'CMS-connected workflows: connect to WordPress, Payload, Sanity or a custom CMS so content is planned, reviewed and prepared before publishing.',
          'Standalone content engine: manage briefs, drafts, reviews and approvals before handing content to a client, editor or website team.',
        ],
      },
      {
        heading: 'Specialist Workers',
        body: 'Each Worker is a specialist role with clear inputs, outputs and limits. 14 Workers covering the full content workflow.',
        items: [
          'Helena (Voice & Style) — keeps brand voice consistent across every draft.',
          'Omar (Content Analyst) — reviews existing content before any editing starts.',
          'Marcus (Structure Worker) — shapes heading hierarchy and page flow.',
          'Luca (Content Brief Builder) — turns topics into structured content briefs.',
          'Ellis (Draft Rewrite Worker) — rewrites drafts that follow the brief.',
          'Quinn (Draft Quality Reviewer) — checks drafts before they move forward.',
          'Rosa (Section Rewrite Worker) — fixes weak sections without touching the rest.',
          'Audrey (Approval Report Worker) — summarises what is ready for sign-off.',
          'Priya (Readability Worker) — tightens sentences and improves flow.',
          'Ada (Brief-to-Draft Alignment Worker) — checks draft fulfils the brief.',
          'Ravi (CMS Handoff Worker) — packages approved content for clean CMS handoff.',
          'Vera (Editorial Risk & Claims Worker) — flags risky claims before approval.',
          'Iris (Content Refresh Brief Worker) — briefs content refresh work.',
          'Nina (Content Distribution Brief Worker) — maps content to channels.',
        ],
      },
      {
        heading: 'Human approval: review-led publishing',
        body: 'Faster content work, without removing human judgement. Workers plan, draft, check and suggest. People still approve what moves forward: nothing reaches the CMS without human sign-off. This is review-led publishing, not blind automation.',
        items: [
          'Workers do not publish without approval.',
          'Outputs are structured for human review.',
          'Risks, gaps and weak sections are surfaced early.',
          'The system supports human judgement: it never overrides it.',
        ],
      },
      {
        heading: 'Who it is for',
        body: 'Built for the people responsible for content outcomes.',
        items: [
          'Copywriters: better briefs, clearer review notes and a structured way to improve drafts without losing your voice.',
          'Business owners: a clear view of what content is being made, why it matters and whether it is ready to publish.',
          'Website teams: a clearer handoff from draft to page, with the purpose, structure and review notes already attached.',
          'Agencies: a repeatable content process that helps teams move faster while keeping review and approval visible.',
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Worker profile data (mirrors src/data/workerProfiles.ts)           */
/* ------------------------------------------------------------------ */
const workerProfiles = [
  {
    slug: 'voice-style',
    name: 'Helena',
    role: 'Voice & Style Worker',
    stage: 'Brand Voice',
    output: 'Voice & style guidance',
    canonicalUrl: 'https://wordpresto.com/workers/voice-style/',
    seoTitle: 'Voice & Style Worker | WordPresto',
    metaDescription: 'Helena checks every draft against your voice rules and approved examples, shaping it back to your house style before review. For teams with one consistent voice to keep.',
    h1: 'Keep the voice in the work.',
    heroPara1: 'When different writers and AI tools all touch the same site, brand voice drifts page by page. Helena reads your voice rules and approved examples, then checks and shapes every draft, so it still sounds like you by the time it reaches review.',
    problemH2: 'Brand voice is the first thing to break in an AI-assisted workflow.',
    problemPara: 'Generating text was never the hard part. The hard part is that every writer, and every AI tool, has its own default voice. Across a real site, that drift is the difference between a brand and a pile of pages.',
    helpsH2: 'A voice editor that reads every draft against your house style.',
    helpsPara: 'Helena does the work a good voice editor does: consistently, on every page, before anyone has to read the draft cold.',
    worksFrom: ['Brand voice rules', 'Approved examples', 'Content brief', 'Existing draft', 'Review notes'],
    produces: ['Voice & style guidance', 'Shaped draft', 'Rewritten section', 'Review notes', 'Handoff pack'],
    boundaryH2: 'Helena shapes the voice. People still make the call.',
    boundaryPara: 'Voice is a judgement, not a rule. Helena suggests, checks and prepares. She is deliberately built to stop where editorial judgement begins, and nothing she touches is published without a human approving it.',
    willNot: ['Publish or push to CMS', 'Override an editor', 'Flatten a deliberate choice'],
    relatedWorkers: ['Ellis (Draft Rewrite)', 'Quinn (Draft Quality Reviewer)', 'Audrey (Approval Report)'],
  },
  {
    slug: 'content-analyst',
    name: 'Omar',
    role: 'Content Analyst',
    stage: 'Analyse',
    output: 'Content analysis',
    canonicalUrl: 'https://wordpresto.com/workers/content-analyst/',
    seoTitle: 'Content Analyst Worker | WordPresto',
    metaDescription: 'Omar reviews existing content, context and purpose before any editing or rewriting starts. For teams that need a clear baseline before they touch a page.',
    h1: 'Understand the page before you rewrite it.',
    heroPara1: 'Most rewrites start in the wrong place. They change what is easy to change rather than what actually needs changing. Omar reads the existing page first: what it is trying to do, whether it is working, and what is worth keeping. That gives the work that follows a clear foundation.',
    problemH2: 'Rewriting without reading is how you lose what was already working.',
    problemPara: 'A page that has been live for two years has something in it: structure that readers responded to, a tone that fitted, sections that ranked. Rewriting from scratch without reviewing what is there first means starting every project further back than you need to.',
    helpsH2: 'A content reader that maps what is there before anything changes.',
    helpsPara: 'Omar does the analysis work that should happen before every brief is written, but rarely does: reading the existing page for what it is and what it is trying to do.',
    worksFrom: ['Existing page content', 'Stated page goal or brief', 'Brand guidelines', 'Audience definition', 'Any prior review notes'],
    produces: ['Content analysis summary', 'What to keep, change or cut', 'Brief input notes', 'Gap report', 'Structural observations'],
    boundaryH2: 'Omar analyses. Editors and clients decide.',
    boundaryPara: 'Content analysis is an input, not an instruction. Omar maps what is there and flags what matters. What changes, what stays and what gets cut is a judgement call for the editor or client to make.',
    willNot: ['Edit or rewrite pages', 'Make final scope decisions', 'Override client priorities'],
    relatedWorkers: ['Marcus (Structure)', 'Luca (Content Brief Builder)', 'Ellis (Draft Rewrite)'],
  },
  {
    slug: 'structure',
    name: 'Marcus',
    role: 'Structure Worker',
    stage: 'Structure',
    output: 'Content structure',
    canonicalUrl: 'https://wordpresto.com/workers/structure/',
    seoTitle: 'Structure Worker | WordPresto',
    metaDescription: 'Marcus shapes headings, sections and page flow so content has a clear editorial structure before or during drafting. For pages that need a proper shape before writing starts.',
    h1: 'Give every draft a clearer shape.',
    heroPara1: 'Content without structure is hard to review, easy to misread, and frustrating to edit. Marcus maps the heading hierarchy, section order and content flow so every draft starts or continues with a shape that makes sense editorially and for the reader.',
    problemH2: 'Badly structured content cannot be fixed by better writing.',
    problemPara: 'You can improve every sentence on a page and it will still fail if the sections are in the wrong order, if the headings do not tell a story, or if the most important point is buried in the middle. Structure is not formatting, it is editorial logic.',
    helpsH2: 'Editorial architecture that gives every page a reading path.',
    helpsPara: 'Marcus does the structural work that prevents content from becoming a pile of sections. Every page that goes through a structure pass comes out with a clear, defensible shape.',
    worksFrom: ['Content brief or stated page goal', 'Existing draft or raw notes', 'Content analysis', 'Brand guidelines', 'Reader journey notes'],
    produces: ['Structured content outline', 'Ordered heading hierarchy', 'Section plan', 'Flow notes for the writer', 'Structural recommendations'],
    boundaryH2: 'Marcus structures. Editors and clients approve the shape.',
    boundaryPara: 'Structure is a recommendation, not a directive. Marcus maps the best reading path based on the content goal. Whether to use that shape, adjust it or overrule it is an editorial and client decision.',
    willNot: ['Rewrite or edit copy', 'Remove sections without instruction', 'Impose structure against the brief'],
    relatedWorkers: ['Luca (Content Brief Builder)', 'Ellis (Draft Rewrite)', 'Helena (Voice & Style)'],
  },
  {
    slug: 'content-brief-builder',
    name: 'Luca',
    role: 'Content Brief Builder',
    stage: 'Brief',
    output: 'Content brief',
    canonicalUrl: 'https://wordpresto.com/workers/content-brief-builder/',
    seoTitle: 'Content Brief Builder | WordPresto',
    metaDescription: 'Luca turns a topic and goal into a structured content brief: purpose, audience, angle and sections, before any drafting starts.',
    h1: 'Start with a brief that writers can actually use.',
    heroPara1: 'Most content briefs are either too thin to help or too prescriptive to leave room for writing. Luca builds structured briefs that give writers the context and direction they need without doing the writing for them: purpose, audience, angle, tone direction and a clear section plan.',
    problemH2: 'A weak brief produces a draft you will have to rewrite anyway.',
    problemPara: "A brief that says 'write about our service for our customers' is not a brief. It is an instruction to guess. Every hour a writer spends working from a vague brief is an hour spent producing content that will need structural revision before it can be used.",
    helpsH2: 'A brief that gives writers direction without removing their judgement.',
    helpsPara: 'Luca builds the brief structure that prevents rewrite rounds. A well-scoped brief with a real angle, a clear audience and section guidance produces better drafts because writers know what they are building.',
    worksFrom: ['Content topic or subject', 'Stated goal', 'Audience definition', 'Brand voice guidelines', 'Content analysis or research notes'],
    produces: ['Structured content brief', 'Section outline', 'Audience and tone notes', 'Writing constraints', 'Handoff to writer or drafting Worker'],
    boundaryH2: 'Luca briefs. Writers and editors make the creative decisions.',
    boundaryPara: 'A brief is a starting point, not a script. Luca structures the brief so the direction is clear, but the writing, voice choices and creative judgements are for the writer and editor to make.',
    willNot: ['Draft or write content', 'Make brand positioning decisions', 'Override agreed scope'],
    relatedWorkers: ['Ellis (Draft Rewrite)', 'Ada (Brief-to-Draft Alignment)', 'Helena (Voice & Style)'],
  },
  {
    slug: 'draft-rewrite',
    name: 'Ellis',
    role: 'Draft Rewrite Worker',
    stage: 'Draft',
    output: 'Shaped draft',
    canonicalUrl: 'https://wordpresto.com/workers/draft-rewrite/',
    seoTitle: 'Draft Rewrite Worker | WordPresto',
    metaDescription: 'Ellis builds and rewrites drafts that follow the brief: structured, on-purpose, and ready for review. For content that needs a shaped draft before editing or review starts.',
    h1: 'Rewrite drafts without losing the point.',
    heroPara1: 'A draft that wanders from the brief, buries the main point or runs twice as long as it needs to is not ready for review. Ellis rewrites drafts that follow the brief structure, lead with what matters and read well enough for an editor to make decisions from.',
    problemH2: 'A draft that wanders cannot be edited into shape. It has to be rewritten.',
    problemPara: 'Most first drafts, from writers and from AI, cover the right territory without covering it in the right order. The main point is buried. Sections drift. The introduction spends three paragraphs warming up. Getting a draft ready for review means more than fixing sentences.',
    helpsH2: 'A drafter that follows the brief and produces something an editor can work from.',
    helpsPara: 'Ellis does the drafting and rewriting that gets content to reviewable quality. The goal is not a finished piece; it is a draft that has a clear shape, follows the brief and gives an editor something real to work with.',
    worksFrom: ['Content brief', 'Existing draft or raw notes', 'Brand voice guidelines', 'Structure outline', 'Research notes'],
    produces: ['Shaped draft', 'Rewritten content sections', 'Drafting notes for the editor', 'Brief deviation notes', 'Ready-for-review draft'],
    boundaryH2: 'Ellis drafts. Editors and clients make the final calls.',
    boundaryPara: 'A shaped draft is an input to editorial, not the finished product. Ellis rewrites to get content to reviewable quality. Creative decisions, sign-off and final changes are editorial and client decisions.',
    willNot: ['Publish or finalise content', 'Override brief scope', 'Make tone decisions without brief'],
    relatedWorkers: ['Helena (Voice & Style)', 'Quinn (Draft Quality Reviewer)', 'Ada (Brief-to-Draft Alignment)'],
  },
  {
    slug: 'draft-quality-reviewer',
    name: 'Quinn',
    role: 'Draft Quality Reviewer',
    stage: 'Review',
    output: 'Review notes',
    canonicalUrl: 'https://wordpresto.com/workers/draft-quality-reviewer/',
    seoTitle: 'Draft Quality Reviewer | WordPresto',
    metaDescription: 'Quinn checks whether a draft is clear, structured and ready to move forward before it reaches a client or CMS. For teams that need a structured review before sign-off.',
    h1: 'Review the draft before it moves forward.',
    heroPara1: "A draft that goes to a client or review meeting with structural issues, unclear sections or brief drift wastes everyone's time. Quinn checks each draft before it moves: is it clear, is it structured, does it follow the brief, and is it ready for the next step.",
    problemH2: 'A draft that reaches review too soon costs more than waiting.',
    problemPara: 'Sending a draft to a client or senior editor before it is ready is not efficiency; it is a backwards investment. The cost of a structural revision after client feedback is higher than a review pass before the draft leaves the team.',
    helpsH2: 'A quality check that catches issues before they become client comments.',
    helpsPara: 'Quinn does the structured review pass that should happen between drafting and delivery. Not a line edit; a readiness check that identifies whether the draft is clear, structured and ready to move.',
    worksFrom: ['Draft content', 'Original content brief', 'Brand voice guidelines', 'Review criteria', 'Prior review notes'],
    produces: ['Structured review notes', 'Readiness assessment', 'Specific issue flags', 'Fix recommendations', 'Handoff notes for next step'],
    boundaryH2: 'Quinn reviews. Editors and clients decide what to change.',
    boundaryPara: 'A review is a structured input to editorial, not a set of instructions. Quinn identifies issues and flags them clearly. What gets changed, and how, is an editorial and client decision.',
    willNot: ['Edit or rewrite content', 'Make final content decisions', 'Approve content for publication'],
    relatedWorkers: ['Rosa (Section Rewrite)', 'Ada (Brief-to-Draft Alignment)', 'Audrey (Approval Report)'],
  },
  {
    slug: 'section-rewrite',
    name: 'Rosa',
    role: 'Section Rewrite Worker',
    stage: 'Improve',
    output: 'Rewritten sections',
    canonicalUrl: 'https://wordpresto.com/workers/section-rewrite/',
    seoTitle: 'Section Rewrite Worker | WordPresto',
    metaDescription: 'Rosa rewrites individual sections that are unclear, thin or off-brief without touching the rest of the piece. For targeted section-level improvements after review.',
    h1: 'Fix the weak section without rewriting the whole page.',
    heroPara1: 'When review notes flag a specific section as thin, off-brief or unclear, the answer is not a full page rewrite. Rosa rewrites the specific section that needs fixing, working against the brief and in the voice of the surrounding content, without disturbing what is working.',
    problemH2: 'One weak section can undermine a page that otherwise works.',
    problemPara: 'It is rarely the whole page that needs a rewrite. Usually it is the third section that buries the point, or the proof section that does not have enough in it, or the conclusion that does not close. Rewriting the whole page to fix one section wastes the work that is already good.',
    helpsH2: 'A section editor that fixes what needs fixing without touching what does not.',
    helpsPara: 'Rosa rewrites at section level: the specific paragraph, the weak proof block, the introduction that does not land. No full-page rewrite, no disruption to the sections that are working.',
    worksFrom: ['The specific section for rewrite', 'Original content brief', 'Review notes', 'Brand voice guidelines', 'Surrounding page context'],
    produces: ['Rewritten section', 'Section edit notes', 'Brief alignment check', 'Handoff notes for editor'],
    boundaryH2: 'Rosa rewrites sections. Editors approve the changes.',
    boundaryPara: 'A rewritten section is a replacement option, not a final edit. Rosa produces the revised version; whether it goes in, gets adjusted, or gets sent back is an editorial decision.',
    willNot: ['Rewrite beyond the agreed section', 'Publish changes directly', 'Alter brief scope'],
    relatedWorkers: ['Quinn (Draft Quality Reviewer)', 'Priya (Readability)', 'Ada (Brief-to-Draft Alignment)'],
  },
  {
    slug: 'approval-report',
    name: 'Audrey',
    role: 'Approval Report Worker',
    stage: 'Approve',
    output: 'Approval report',
    canonicalUrl: 'https://wordpresto.com/workers/approval-report/',
    seoTitle: 'Approval Report Worker | WordPresto',
    metaDescription: 'Audrey summarises what is ready, what needs attention and what should not move forward, so humans can make a confident sign-off decision.',
    h1: 'Make approval easier to trust.',
    heroPara1: 'Approval decisions made without a clear picture of what is ready often go wrong in one of two ways: things are approved that should not be, or things are held up that were ready to move. Audrey assembles a structured approval report so the person making the sign-off decision has the information they actually need.',
    problemH2: 'Approval is only reliable when the approver has the right information.',
    problemPara: 'Most approval problems are information problems. The person signing off either does not have a clear view of what was reviewed and what was not, or they are reading every draft themselves because there is no summary. Either way, it takes longer than it should and the decisions are less confident than they need to be.',
    helpsH2: 'A report that gives approvers a clear view, not a pile of drafts.',
    helpsPara: 'Audrey assembles everything the approver needs into one structured report: what is ready, what is not, what the specific issues are, and what needs to happen next. Sign-off decisions become faster and more confident.',
    worksFrom: ['Draft quality review notes', 'Risk and compliance flags', 'Brief alignment reports', 'Current approval criteria', 'Content status across the project'],
    produces: ['Structured approval report', 'Ready / needs attention / not ready classification', 'Specific issue notes with next steps', 'Sign-off documentation', 'Handoff notes for CMS or publishing'],
    boundaryH2: 'Audrey reports. Humans approve.',
    boundaryPara: 'Approval is a human decision. Audrey provides the structured information that makes that decision reliable. The sign-off call, and the responsibility that comes with it, is always with a person.',
    willNot: ['Approve or sign off content', 'Bypass compliance flags', 'Mark content ready without evidence'],
    relatedWorkers: ['Quinn (Draft Quality Reviewer)', 'Vera (Editorial Risk & Claims)', 'Ravi (CMS Handoff)'],
  },
  {
    slug: 'readability',
    name: 'Priya',
    role: 'Readability Worker',
    stage: 'Improve',
    output: 'Improved draft',
    canonicalUrl: 'https://wordpresto.com/workers/readability/',
    seoTitle: 'Readability Worker | WordPresto',
    metaDescription: 'Priya tightens sentences, simplifies structure and improves flow so content reads clearly for its intended audience. For drafts that are correct but harder to read than they need to be.',
    h1: 'Make good content easier to read.',
    heroPara1: 'Content can be factually accurate, well-structured and on-brief, and still be harder to read than it needs to be. Priya tightens sentences, breaks up dense paragraphs, removes unnecessary qualification and improves flow, without changing meaning or losing voice.',
    problemH2: 'Dense, correct content still loses readers.',
    problemPara: 'Most readability problems are not about the words; they are about sentence length, paragraph density and the ratio of hedging to assertion. A reader who gives up at paragraph three has not read the content, however accurate it was.',
    helpsH2: 'A readability pass that gets content actually read.',
    helpsPara: 'Priya does the sentence-level and paragraph-level work that turns technically correct content into something a reader finishes. Not a rewrite; a tightening pass that removes everything that makes reading harder.',
    worksFrom: ['Existing draft', 'Audience definition', 'Brand voice guidelines', 'Readability target or brief note', 'Review notes'],
    produces: ['Improved draft', 'Readability pass notes', 'Specific sentence and paragraph improvements', 'Editor handoff notes'],
    boundaryH2: 'Priya improves readability. Writers and editors keep the voice.',
    boundaryPara: 'A readability pass improves flow without changing meaning or overriding voice decisions. If a sentence is deliberately complex for stylistic reasons, Priya surfaces it rather than flattening it.',
    willNot: ['Change meaning or intent', 'Override deliberate style choices', 'Simplify specialist content without guidance'],
    relatedWorkers: ['Ellis (Draft Rewrite)', 'Quinn (Draft Quality Reviewer)', 'Rosa (Section Rewrite)'],
  },
  {
    slug: 'brief-draft-alignment',
    name: 'Ada',
    role: 'Brief-to-Draft Alignment Worker',
    stage: 'Review',
    output: 'Alignment report',
    canonicalUrl: 'https://wordpresto.com/workers/brief-draft-alignment/',
    seoTitle: 'Brief-to-Draft Alignment Worker | WordPresto',
    metaDescription: 'Ada checks that the draft actually fulfils the brief, surfacing gaps, drift and misaligned sections before they go any further.',
    h1: 'Check whether the draft actually follows the brief.',
    heroPara1: 'A draft that looks good but does not follow the brief is a problem that will surface at review or, worse, at client delivery. Ada compares the final draft against the original brief, section by section, and flags any gaps, scope drift or misalignments before the draft moves forward.',
    problemH2: 'A draft that follows the brief is the exception, not the rule.',
    problemPara: 'Briefs drift during production. Writers interpret differently. AI tools fill gaps with their own defaults. By the time a draft reaches review, it is often covering different ground to what was briefed. The only way to catch it is to check.',
    helpsH2: 'A brief-check that catches drift before it becomes a client problem.',
    helpsPara: 'Ada does the structured comparison between brief and draft that most teams skip because they are moving too fast. Gaps and drift caught before delivery are free. Caught at client review, they cost revision rounds.',
    worksFrom: ['Final content brief', 'Current draft', 'Any mid-project brief amendments', 'Review notes', 'Audience and purpose definitions'],
    produces: ['Brief-to-draft alignment report', 'Section-by-section comparison', 'Gap and drift flags', 'Fix notes for the writer', 'Handoff to review or revision'],
    boundaryH2: 'Ada checks alignment. Writers and editors make the changes.',
    boundaryPara: 'An alignment report is a structured input to revision, not a list of required changes. Ada identifies what does not match the brief; whether to address it, and how, is a writer and editor decision.',
    willNot: ['Rewrite or edit content', 'Override brief amendments agreed with client', 'Mark gaps as minor without editorial input'],
    relatedWorkers: ['Luca (Content Brief Builder)', 'Quinn (Draft Quality Reviewer)', 'Ellis (Draft Rewrite)'],
  },
  {
    slug: 'cms-handoff',
    name: 'Ravi',
    role: 'CMS Handoff & Publishing Package Worker',
    stage: 'Handoff',
    output: 'Handoff pack',
    canonicalUrl: 'https://wordpresto.com/workers/cms-handoff/',
    seoTitle: 'CMS Handoff Worker | WordPresto',
    metaDescription: 'Ravi packages approved content with the structure, metadata and notes needed for clean handoff to a CMS, website or client. For teams that need a publishing-ready content package.',
    h1: 'Prepare approved content for a cleaner handoff.',
    heroPara1: 'Approved content that arrives in a CMS without the right metadata, formatting guidance and notes creates work at the point where it should be simple. Ravi takes the approved draft and produces a complete publishing package: content, metadata, formatting notes, CMS fields. The handoff is clean from the first time.',
    problemH2: 'Bad handoffs cost more time than bad drafts.',
    problemPara: 'A piece of content that reaches a CMS editor or developer without proper metadata, formatting notes or field guidance gets published with errors, or gets sent back for information. The handoff step is cheap to get right and expensive to get wrong.',
    helpsH2: 'A publishing package that CMS editors and developers can act on immediately.',
    helpsPara: 'Ravi produces the complete handoff package that turns approved content into publishable content. Meta fields, formatting guidance, URL slug, image notes: everything needed for a clean first publish.',
    worksFrom: ['Approved final draft', 'CMS field requirements', 'Metadata brief', 'Brand guidelines', 'Asset and image references'],
    produces: ['Complete handoff pack', 'Populated CMS field notes', 'URL and slug guidance', 'Image and asset notes', 'Publish-ready content document'],
    boundaryH2: 'Ravi packages. Publishing teams and editors decide what goes live.',
    boundaryPara: 'A handoff pack is a publishing-ready document, not permission to publish. What goes live, when, and in what form is a decision for the publishing team, client or editorial director.',
    willNot: ['Publish content directly', 'Approve content for publication', 'Guess at missing metadata'],
    relatedWorkers: ['Audrey (Approval Report)', 'Vera (Editorial Risk & Claims)', 'Quinn (Draft Quality Reviewer)'],
  },
  {
    slug: 'editorial-risk-claims',
    name: 'Vera',
    role: 'Editorial Risk & Claims Compliance Worker',
    stage: 'Review',
    output: 'Risk & compliance report',
    canonicalUrl: 'https://wordpresto.com/workers/editorial-risk-claims/',
    seoTitle: 'Editorial Risk & Claims Worker | WordPresto',
    metaDescription: 'Vera flags unsupported claims, risky statements and compliance issues in content before it is approved or published.',
    h1: 'Flag risky claims before they move forward.',
    heroPara1: 'Content that contains unsupported claims, legally risky language or compliance issues does not fail at the point of publication; it fails at the point of complaint, challenge or audit. Vera reviews content for claims that cannot be substantiated, statements that create liability, and language that needs compliance clearance.',
    problemH2: 'Risky content looks fine until it is challenged.',
    problemPara: 'A claim that cannot be supported, a comparison that implies something false, or language that creates liability looks identical to good copy until someone questions it. Catching these before publication is free. Addressing them after is not.',
    helpsH2: 'A compliance check that finds claims risks before they reach publication.',
    helpsPara: 'Vera reviews content for the claims and language that create risk, not to remove strong copy, but to ensure that what gets published can be defended.',
    worksFrom: ['Draft or approved content', 'Compliance guidelines', 'Sector-specific regulatory context', 'Claims evidence or sourcing', 'Prior compliance notes'],
    produces: ['Risk and compliance report', 'Flagged claims with evidence requirements', 'Compliance clearance documentation', 'Fix options for flagged language', 'Approval input for Audrey'],
    boundaryH2: 'Vera flags. Legal and compliance teams make the calls.',
    boundaryPara: 'A risk report is an input to editorial and compliance review, not a sign-off. Vera identifies risks and flags them clearly. Whether to act on them, how, and whether content can proceed is a decision for legal, compliance and editorial teams.',
    willNot: ['Provide legal clearance', 'Approve content with unresolved compliance flags', 'Remove claims without explicit instruction'],
    relatedWorkers: ['Quinn (Draft Quality Reviewer)', 'Audrey (Approval Report)', 'Ravi (CMS Handoff)'],
  },
  {
    slug: 'content-refresh-brief',
    name: 'Iris',
    role: 'Content Refresh Brief Worker',
    stage: 'Refresh',
    output: 'Refresh brief',
    canonicalUrl: 'https://wordpresto.com/workers/content-refresh-brief/',
    seoTitle: 'Content Refresh Brief Worker | WordPresto',
    metaDescription: 'Iris produces a structured brief for refreshing existing content: what to update, what to cut and what to add. For teams refreshing pages with clear direction rather than guesswork.',
    h1: 'Refresh content with a clearer reason.',
    heroPara1: 'Refreshing content without a brief is how you end up with pages that have been rewritten three times and still do not work. Iris produces a structured refresh brief covering what to update, what to cut, what to add, and why, so every refresh starts with clear direction rather than a blank page review.',
    problemH2: 'Refreshing without a brief produces a different version of the same problem.',
    problemPara: 'A content refresh without clear direction tends to do one of two things: update what is easy to update and leave the structural problems intact, or trigger a full rewrite when a light edit would have been enough. A refresh brief defines the scope before work starts.',
    helpsH2: 'A refresh brief that scopes the work before a writer touches the page.',
    helpsPara: 'Iris turns a refresh request into a structured brief with specific update, cut and add instructions so writers and editors know exactly what the refresh is for and what it needs to achieve.',
    worksFrom: ['Existing page content', 'Refresh goals or trigger notes', 'Content analysis', 'Brand and product updates', 'Audience or market change notes'],
    produces: ['Structured refresh brief', 'Update / cut / add section plan', 'Refresh rationale notes', 'Writer handoff brief', 'Scope and success criteria'],
    boundaryH2: 'Iris briefs the refresh. Writers and editors make the changes.',
    boundaryPara: 'A refresh brief is a scope document, not a set of approved changes. Iris maps what needs to happen; whether to proceed, and how, is an editorial and client decision.',
    willNot: ['Edit or rewrite pages directly', 'Retire or remove content', 'Expand refresh scope without editorial approval'],
    relatedWorkers: ['Omar (Content Analyst)', 'Ada (Brief-to-Draft Alignment)', 'Ellis (Draft Rewrite)'],
  },
  {
    slug: 'content-distribution-brief',
    name: 'Nina',
    role: 'Content Distribution Brief Worker',
    stage: 'Distribution',
    output: 'Distribution brief',
    canonicalUrl: 'https://wordpresto.com/workers/content-distribution-brief/',
    seoTitle: 'Content Distribution Brief Worker | WordPresto',
    metaDescription: 'Nina creates a distribution brief that maps where approved content should go and how it should be adapted for each channel.',
    h1: 'Plan where approved content should go next.',
    heroPara1: 'Approved content that goes directly from sign-off to a single channel wastes most of its value. Nina produces a distribution brief that maps the approved content to the channels where it fits, with adaptation notes for each, so the same piece extends further without being diluted.',
    problemH2: 'Most content gets published once and forgotten.',
    problemPara: 'Approved long-form content often reaches one channel, in one format, at one time. The channel adaptations that would extend its reach (newsletter extract, LinkedIn post, social card, key quote) never happen because there is no plan for them. A distribution brief changes that.',
    helpsH2: 'A distribution brief that maps approved content to channels with adaptation guidance.',
    helpsPara: 'Nina turns approved content into a channel distribution brief: where it goes, how it adapts for each channel, and what the writer or social team needs to produce for each one.',
    worksFrom: ['Approved content', 'Channel list and audience definitions', 'Distribution goals', 'Brand voice guidelines', 'Publishing calendar or timing notes'],
    produces: ['Distribution brief', 'Per-channel adaptation notes', 'Format and length guidance', 'Publishing timing notes', 'Handoff to content or social team'],
    boundaryH2: 'Nina plans distribution. Content and social teams produce the adaptations.',
    boundaryPara: 'A distribution brief is a plan, not produced content. Nina maps where content should go and how it should adapt. The adapted versions, the publishing decisions and the channel judgements are for the content and social teams to make.',
    willNot: ['Produce adapted content for channels', 'Publish or schedule content', 'Expand distribution scope without approval'],
    relatedWorkers: ['Audrey (Approval Report)', 'Ravi (CMS Handoff)', 'Iris (Content Refresh Brief)'],
  },
];

/* ------------------------------------------------------------------ */
/*  Render homepage as Markdown                                         */
/* ------------------------------------------------------------------ */
function renderHomepageMarkdown(page) {
  const lines = [
    `---`,
    `title: "${page.pageTitle.replace(/"/g, '\\"')}"`,
    `seoTitle: "${page.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${page.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${page.canonicalUrl}"`,
    `focus: "${page.focus}"`,
    `---`,
    ``,
    `# ${page.pageTitle}`,
    ``,
    page.metaDescription,
    ``,
    `---`,
    ``,
    page.summary,
    ``,
  ];

  for (const section of page.sections) {
    lines.push(`## ${section.heading}`, ``);
    if (section.body) lines.push(section.body, ``);
    if (section.items?.length) {
      for (const item of section.items) {
        lines.push(`- ${item}`);
      }
      lines.push(``);
    }
  }

  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/*  Render worker profile as Markdown                                   */
/* ------------------------------------------------------------------ */
function renderWorkerMarkdown(w) {
  const lines = [
    `---`,
    `title: "${w.seoTitle.replace(/"/g, '\\"')}"`,
    `description: "${w.metaDescription.replace(/"/g, '\\"')}"`,
    `canonical: "${w.canonicalUrl}"`,
    `worker: "${w.name}"`,
    `role: "${w.role}"`,
    `stage: "${w.stage}"`,
    `output: "${w.output}"`,
    `---`,
    ``,
    `# ${w.h1}`,
    ``,
    w.metaDescription,
    ``,
    `---`,
    ``,
    w.heroPara1,
    ``,
    `## ${w.problemH2}`,
    ``,
    w.problemPara,
    ``,
    `## ${w.helpsH2}`,
    ``,
    w.helpsPara,
    ``,
    `## Works from`,
    ``,
  ];

  for (const item of w.worksFrom) lines.push(`- ${item}`);
  lines.push(``, `## Produces`, ``);
  for (const item of w.produces) lines.push(`- ${item}`);

  lines.push(
    ``,
    `## ${w.boundaryH2}`,
    ``,
    w.boundaryPara,
    ``,
    `### Will not`,
    ``,
  );
  for (const item of w.willNot) lines.push(`- ${item}`);

  lines.push(``, `## Related Workers`, ``);
  for (const item of w.relatedWorkers) lines.push(`- ${item}`);
  lines.push(``);

  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/*  Render workers index as Markdown                                    */
/* ------------------------------------------------------------------ */
function renderWorkersIndexMarkdown(workers) {
  const lines = [
    `---`,
    `title: "Content workflow Workers | WordPresto"`,
    `description: "Meet the specialist Workers in the WordPresto content workflow: from content analysis and brief building to voice review, approval reporting and CMS handoff."`,
    `canonical: "https://wordpresto.com/workers/"`,
    `---`,
    ``,
    `# Specialist Workers for every stage of the content workflow.`,
    ``,
    `WordPresto brings in the right specialists for the stage you are at, so each piece of content gets the support it actually needs.`,
    ``,
    `---`,
    ``,
    `## Worker directory (${workers.length} specialist roles)`,
    ``,
  ];

  for (const w of workers) {
    lines.push(
      `### ${w.name} — ${w.role}`,
      ``,
      `- Stage: ${w.stage}`,
      `- Output: ${w.output}`,
      `- URL: ${w.canonicalUrl}`,
      `- Markdown: https://wordpresto.com/pages/workers/${w.slug}.md`,
      ``,
      w.metaDescription,
      ``,
    );
  }

  return lines.join('\n');
}

/* ------------------------------------------------------------------ */
/*  Generate all files                                                  */
/* ------------------------------------------------------------------ */
for (const page of pages) {
  const md = renderHomepageMarkdown(page);
  const outPath = join(OUT_DIR, `${page.slug}.md`);
  writeFileSync(outPath, md, 'utf8');
  console.log(`✓ Markdown mirror: ${outPath}`);
}

const workersIndexMd = renderWorkersIndexMarkdown(workerProfiles);
const workersIndexPath = join(OUT_DIR, 'workers', 'index.md');
writeFileSync(workersIndexPath, workersIndexMd, 'utf8');
console.log(`✓ Markdown mirror: ${workersIndexPath}`);

for (const w of workerProfiles) {
  const md = renderWorkerMarkdown(w);
  const outPath = join(OUT_DIR, 'workers', `${w.slug}.md`);
  writeFileSync(outPath, md, 'utf8');
  console.log(`✓ Markdown mirror: ${outPath}`);
}
