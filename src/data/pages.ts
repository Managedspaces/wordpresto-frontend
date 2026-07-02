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
      body: 'At the centre is Emma, your managing editor. She keeps the brief, draft, evidence, SEO, review and approval moving through one calm editorial desk, while you keep the final say.',
      note: 'Emma prepares. The Editor approves. Nothing publishes without your sign-off.',
    },
    {
      id: 'not-dashboard',
      eyebrow: 'The operating model',
      heading: 'This is not another content dashboard.',
      body: 'Most content work does not fall apart because people cannot write. It falls apart because the brief changes, reviews arrive late, claims lose their sources, SEO gets bolted on at the end, and nobody knows who has approved what.',
      note: 'Word Presto gives the work a desk. Emma runs it.',
      items: [
        { title: 'Brief agreed and on file', body: '' },
        { title: 'SEO checked in the draft, not after', body: '' },
        { title: 'Claims carry their evidence', body: '' },
        { title: 'Approval sits with the Editor', body: '' },
      ],
    },
    {
      id: 'emma-desk',
      eyebrow: 'At the centre of the desk',
      heading: 'Meet Emma, your managing editor.',
      items: [
        { title: 'She keeps the project in view', body: 'Emma reads the living context behind the work: pages, queries, metrics, gaps, voice, previous decisions and what the Editor has already approved.' },
        { title: 'She keeps the work moving', body: 'From brief to draft, proofing, review and approval, Emma keeps the next right step clear.' },
        { title: 'She brings in the specialists', body: 'Claims, voice, SEO, evidence, links, risk and handoff all come through the right desk at the right time.' },
        { title: 'She knows the line', body: 'Emma can recommend, route and prepare. Only the Editor can approve.' },
      ],
    },
    {
      id: 'commitments',
      eyebrow: 'The editorial constitution',
      heading: "Emma's four commitments.",
      body: 'The standards Emma holds to on every piece of work: the rules that make the desk trustworthy.',
      items: [
        { title: 'Ground truth above all', body: 'No invented figures. No unsupported claims. No pretending weak evidence is strong.' },
        { title: 'Say the honest thing', body: 'Emma will not flatter a bad draft. She tells you what needs work.' },
        { title: 'Protect your work', body: "Nothing publishes without the Editor's approval." },
        { title: 'Remember what matters', body: 'Emma learns the standards, voice and decisions that shape the project.' },
      ],
    },
    {
      id: 'canvas',
      eyebrow: 'The working surface',
      heading: 'One working surface for the actual copy.',
      body: 'The Canvas is where Emma brings the work together: imported pages, drafts, rewrites, proofing notes, specialist findings and approval decisions.',
      items: [
        { title: 'Import, draft, rewrite, proof and review in one place.', body: '' },
        { title: 'Specialist findings arrive as margin notes, not meetings.', body: '' },
        { title: 'Final approval still required, always.', body: '' },
      ],
    },
    {
      id: 'specialists',
      eyebrow: 'The specialist bench',
      heading: '41 specialists. One managing editor.',
      body: 'Emma is not working alone. Behind her is the full Word Presto specialist bench: content production, SEO, operations and approval governance workers, each with a defined role and place in the workflow.',
      note: "Emma brings in the right specialist at the right moment, then returns the findings that need the Editor's judgement.",
      items: [
        { title: 'Content Production Team', body: 'Plans, drafts, rewrites and proofs the copy, turning briefs into structured, ready content.' },
        { title: 'SEO Team', body: 'Works search intent, structure and technical signals into the draft, not bolted on at the end.' },
        { title: 'Operations / Management', body: 'Coordinates the review flow and keeps every piece of work ready for a human decision.' },
        { title: 'Approval / Governance', body: 'Checks risk, evidence and readiness, and whether a change is ready for the Editor.' },
      ],
    },
    {
      id: 'languages',
      eyebrow: 'Native voice',
      heading: 'Same standard. Native voice.',
      body: 'When you work in another language, you do not get Emma translated. You get a managing editor who runs the same desk in her own language and idiom.',
      note: 'Six editors. One standard.',
      items: [
        { title: 'Emma', body: 'Dublin · English' },
        { title: 'Aurora', body: 'Lisbon · Portuguese' },
        { title: 'Francisca', body: 'São Paulo · Brazilian Portuguese' },
        { title: 'Sofía', body: 'Madrid · Spanish' },
        { title: 'Sabine', body: 'Berlin · German' },
        { title: 'Ambre', body: 'Paris · French' },
      ],
    },
    {
      id: 'approval',
      eyebrow: 'The gate',
      heading: 'Only the Editor can approve the work.',
      body: 'Emma can prepare the work. Specialists can review it. The Canvas can organise it. But only the Editor can approve it.',
      note: 'Nothing goes live until the human in charge says yes.',
    },
    {
      id: 'cta',
      heading: 'Put Emma at the centre of your content operation.',
      body: 'For writers, editors and publishing teams who need better content work without giving up editorial control.',
    },
  ],
};

export const allPages: PageData[] = [homePage];
