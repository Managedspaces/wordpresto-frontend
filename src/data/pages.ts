export interface PageSection {
  id: string;
  eyebrow?: string;
  heading: string;
  body?: string;
  items?: Array<{ title: string; body: string }>;
  note?: string;
}

export interface PageData {
  slug: string;
  pageTitle: string;
  seoTitle: string;
  metaDescription: string;
  focus: string;
  summary: string;
  sections: PageSection[];
}

export const homePage: PageData = {
  slug: '/',
  pageTitle: 'Word Presto is the agentic content engine for writers, editors and publishing teams.',
  seoTitle: 'Content workflow engine for writers and publishing teams | Word Presto',
  metaDescription:
    'Plan, brief, write, review, improve and prepare content for search, readers and CMS handoff.',
  focus: 'Content workflow engine for writers and publishing teams',
  summary:
    'Word Presto puts the writer at the centre, then surrounds the writing process with structure, search, evidence, review, approval and CMS preparation. It gives teams a clear path from idea to approval before anything is published.',
  sections: [
    {
      id: 'hero',
      heading: 'Word Presto is the agentic content engine for writers, editors and publishing teams.',
      body: 'Plan, brief, write, review, improve and prepare content for search, readers and CMS handoff, without handing judgement to a black box.',
      note: 'Built for writers, editors, website teams and agencies who want structure, search-readiness and quality control without losing their own judgement.',
    },
    {
      id: 'problem',
      eyebrow: 'The desk, before',
      heading: 'Content does not fail because people cannot write. It fails because the workflow is messy.',
      body: 'Briefs are vague. Drafts arrive without structure. Good ideas get lost in notes, chats and half-finished documents.',
      items: [
        { title: 'Unclear brief', body: 'Writers start guessing what the page is even for.' },
        { title: 'Draft lacks structure', body: 'No shared shape, so every draft reads differently.' },
        { title: 'Checks happen too late', body: 'Important questions surface after the page is already written.' },
        { title: 'Support missing', body: 'Important points move forward without enough support.' },
        { title: 'Review unclear', body: 'No clear gate, so nobody knows what "done" means.' },
        { title: 'CMS prep left until the end', body: 'Page details and handoff notes become a last-minute scramble.' },
      ],
    },
    {
      id: 'product',
      eyebrow: 'How it works',
      heading: 'A structured place for content to move from idea to approval.',
      body: 'Each stage has a clear role, output and review point.',
      note: 'Not a project board — a copy desk, where every piece of work has a folder it moves through.',
      items: [
        { title: 'Plan', body: 'Turn loose ideas and business priorities into a clear direction.' },
        { title: 'Brief', body: 'Give writers the goal, audience, angle and structure before drafting starts.' },
        { title: 'Draft', body: 'Help the first version follow the purpose of the page.' },
        { title: 'Review', body: 'Surface what needs attention before the piece reaches the website or CMS.' },
        { title: 'Improve', body: 'Tighten sections that are unclear, thin, repetitive or not doing their job.' },
        { title: 'Approve', body: 'Human sign-off before anything moves to publishing.' },
        { title: 'Prepare for CMS', body: 'Package the approved work for clean handoff.' },
      ],
    },
    {
      id: 'capabilities',
      eyebrow: 'Before the website',
      heading: 'Before it reaches the website.',
      body: 'Most of the important work happens before anything is published. Word Presto gives that work a clearer path: from idea, to brief, to draft, to review, to improvement, to approval and handoff.',
      items: [
        { title: 'Plan the work', body: 'Turn loose ideas and business priorities into a clear direction for the page.' },
        { title: 'Create the brief', body: 'Give writers the goal, audience, angle and structure before anyone starts drafting.' },
        { title: 'Shape the draft', body: 'Help the first version follow the purpose of the page instead of starting from a blank document.' },
        { title: 'Review the work', body: 'Surface what needs attention before the piece reaches the website, CMS or client.' },
        { title: 'Improve the weak parts', body: 'Tighten sections that are unclear, thin, repetitive or not doing their job.' },
        { title: 'Prepare the handoff', body: 'Package the approved work so it can move cleanly into a website, CMS or client review process.' },
      ],
    },
    {
      id: 'seo',
      eyebrow: 'Search, built in',
      heading: 'SEO belongs in the writing workflow, not after it.',
      body: 'Search performance is not a plugin you add at the end. It is shaped by the brief, the structure, the intent, the evidence, the internal links, the metadata and the quality of the finished page.',
      note: 'Word Presto helps writers see those signals while the work is still being shaped, so SEO becomes part of the editorial process rather than a last-minute checklist.',
      items: [
        { title: 'Match the page to search intent before drafting', body: '' },
        { title: 'Structure headings and sections around the job the page needs to do', body: '' },
        { title: 'Surface weak sections, missing support and evidence gaps', body: '' },
        { title: 'Prepare titles, descriptions, slugs and CMS fields before handoff', body: '' },
        { title: 'Keep human judgement in control of what moves forward', body: '' },
      ],
    },
    {
      id: 'use-cases',
      eyebrow: 'Three routes out',
      heading: 'Use Word Presto with the stack you have, or the one you are building next.',
      body: 'One content engine. Three ways the finished work leaves the desk.',
      items: [
        {
          title: 'Automated Astro + CMS builds',
          body: 'The engine behind structured, content-led websites where pages, briefs, updates and handoff notes are planned before they become templates.',
        },
        {
          title: 'CMS-connected workflows',
          body: 'Connect to WordPress, Payload, Sanity or a custom CMS so content is planned, reviewed and prepared before publishing.',
        },
        {
          title: 'Standalone content engine',
          body: 'Manage briefs, drafts, reviews and approvals before handing content to a client, editor or website team.',
        },
      ],
    },
    {
      id: 'workers',
      eyebrow: 'The team',
      heading: 'Specialist Workers for each stage of the content workflow.',
      body: 'Specialist Workers support each stage of the content workflow, from strategy and structure to drafting, proofing, SEO review, evidence, approval and CMS handoff. SEO is part of the workflow, not a separate mode.',
    },
    {
      id: 'seo-workers',
      eyebrow: 'Search & SEO',
      heading: 'SEO Workers, working inside the writing.',
      body: 'A second team of specialists helps content be understood, structured, retrieved and approved. They review titles and metadata, search snippets, schema, technical signals, trust and evidence while the writer is still shaping the work. Every suggestion goes through human review.',
    },
    {
      id: 'approval',
      eyebrow: 'Human approval',
      heading: 'Faster content work, without removing human judgement.',
      body: 'Workers plan, draft, check and suggest. People still approve what moves forward — nothing reaches the CMS without human sign-off. This is review-led publishing, not blind automation.',
      items: [
        { title: 'Workers do not publish without approval.', body: '' },
        { title: 'Outputs are structured for human review.', body: '' },
        { title: 'Risks, gaps and weak sections are surfaced early.', body: '' },
        { title: 'The system supports human judgement — it never overrides it.', body: '' },
      ],
    },
    {
      id: 'audience',
      eyebrow: 'Who it is for',
      heading: 'Built for the people responsible for content outcomes.',
      items: [
        {
          title: 'Copywriters',
          body: 'Better briefs, clearer review notes, SEO-aware structure and a working canvas that helps improve drafts without flattening your voice.',
        },
        {
          title: 'Business owners',
          body: 'A clear view of what content is being made, why it matters and whether it is ready to publish.',
        },
        {
          title: 'Website teams',
          body: 'A clearer path from draft to page, with structure, metadata, internal link notes, evidence gaps and CMS handoff already attached.',
        },
        {
          title: 'Agencies',
          body: 'A repeatable content process for client work, where writers, SEO reviewers and approvers can work from the same brief, canvas and approval trail.',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Give your content workflow somewhere better to live.',
      body: 'Plan, produce, review and improve content before it reaches the CMS, website or client.',
    },
  ],
};

export const allPages: PageData[] = [homePage];
