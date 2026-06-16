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
  pageTitle: 'WordPresto is the content engine behind better publishing workflows.',
  seoTitle: 'Content workflow engine for publishing teams | WordPresto',
  metaDescription:
    'Plan, brief, write, review and improve content before it reaches your CMS, website or client.',
  focus: 'Content workflow engine for publishing teams',
  summary:
    'WordPresto is a structured content workflow engine. It gives teams a clear path from idea to approval — plan, brief, draft, review, improve, approve and prepare for handoff — before anything is published.',
  sections: [
    {
      id: 'hero',
      heading: 'WordPresto is the content engine behind better publishing workflows.',
      body: 'Plan, brief, write, review and improve content before it reaches your CMS, website or client.',
      note: 'Built for copywriters, business owners, website teams and agencies who need structure, quality control and momentum without handing judgement to a black box.',
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
      body: 'Most of the important work happens before anything is published. WordPresto gives that work a clearer path: from idea, to brief, to draft, to review, to improvement, to approval and handoff.',
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
      id: 'use-cases',
      eyebrow: 'Three routes out',
      heading: 'Use WordPresto with the stack you have, or the one you are building next.',
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
      body: 'Each Worker is a specialist role with clear inputs, outputs and limits. Browse the team and open any Worker to see where they sit in the workflow.',
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
          body: 'Better briefs, clearer review notes and a structured way to improve drafts without losing your voice.',
        },
        {
          title: 'Business owners',
          body: 'A clear view of what content is being made, why it matters and whether it is ready to publish.',
        },
        {
          title: 'Website teams',
          body: 'A clearer handoff from draft to page, with the purpose, structure and review notes already attached.',
        },
        {
          title: 'Agencies',
          body: 'A repeatable content process that helps teams move faster while keeping review and approval visible.',
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
