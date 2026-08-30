/**
 * Homepage v4 — "Data Powered Publishing" content.
 *
 * This is the source of truth for the new English homepage
 * (`src/components/HomePageV4.astro`) AND for its Markdown mirror
 * (`scripts/generate-page-markdown.ts`). One copy, two consumers, so the
 * post-build `check-mirror-sync.mjs` guard can never find drift.
 *
 * The previous homepage's copy stays untouched in `home.ts` and still serves
 * the five non-English locales; see context.md for the changeover note.
 */

export interface EcosystemNode {
  /** Stable id, used to wire the SVG links and the caption panel together. */
  id: string;
  /** Node centre in the 1000x800 diagram viewBox. */
  x: number;
  y: number;
  /** Ids this node lights up with when selected. */
  related: string[];
  /** Accessible name for the node's button. */
  label: string;
  /** The line shown in the shared caption panel when this node is selected. */
  caption: string;
}

export interface LoopNode {
  id: string;
  /** Sprite symbol id for the node's platform mark. */
  icon: string;
  kicker: string;
  title: string;
  meta: string;
  /** Node centre in the 1000x620 loop viewBox. */
  x: number;
  y: number;
  related: string[];
  caption: string;
}

export interface PillarRow {
  /** Two-digit editorial number, e.g. "01". */
  number: string;
  kicker: string;
  /** The giant serif word: Write / Publish / Engage / Rank / Track. */
  title: string;
  lead: string;
  /** Body paragraphs; the design renders a blank line between them. */
  body: string[];
  closing: string;
  /** Basename of the WebP set in /home (e.g. "write" → write-640.webp). */
  image: string;
  imageAlt: string;
}

export interface HomeV4Content {
  seo: { pageTitle: string; seoTitle: string; metaDescription: string };
  hero: {
    eyebrow: string;
    h1: string;
    body: string[];
    serifLine: string;
    ctaPrimary: string;
    trialNote: string;
    preparesLabel: string;
    preparesFor: string[];
  };
  desk: {
    kicker: string;
    boardTitle: string;
    liveLabel: string;
    you: { role: string; title: string; badge: string };
    emma: { name: string; role: string; body: string; status: string };
    canvas: {
      label: string;
      note: string;
      lines: { tag: string; text: string }[];
    };
    specialists: { title: string; body: string };
    states: { label: string; badge: string; tone: 'review' | 'ready' }[];
    annotation: string;
  };
  pillars: { rows: PillarRow[] };
  /**
   * "As seen on" strip label. The outlet NAMES and their listing URLs are in
   * `@/data/asSeenOn`; only this label lives here.
   */
  asSeenOn: { label: string };
  ecosystem: {
    kicker: string;
    exampleBadge: string;
    h2: string;
    body: string;
    emphasis: string;
    /** Shown in the caption panel before anything is selected. */
    defaultCaption: string;
    /** Instruction for the diagram's interaction, announced to screen readers. */
    instruction: string;
    site: {
      url: string;
      kicker: string;
      headline: string;
      tiles: string[];
      docLine: string;
      docStatus: string;
    };
    nodes: EcosystemNode[];
  };
  loop: {
    kicker: string;
    exampleBadge: string;
    h2: string;
    body: string;
    axisLeft: string;
    axisRight: string;
    centre: { url: string; title: string; body: string };
    defaultCaption: string;
    instruction: string;
    nodes: LoopNode[];
  };
  channels: {
    kicker: string;
    h2: string;
    body: string;
    emphasis: string;
    source: {
      label: string;
      title: string;
      items: string[];
      footnoteLabel: string;
      footnote: string;
    };
    arrowLabel: string;
    socialLabel: string;
    cmsLabel: string;
    cmsBody: string;
    destinations: { icon: string; name: string; state: string; group: 'social' | 'cms' }[];
    safetyNote: string;
    safetyEmphasis: string;
  };
  dpp: {
    kicker: string;
    h2Line1: string;
    h2Line2: string;
    paragraphs: string[];
    punchline: string;
    leverageLabel: string;
    leverage: string[];
    closing: string;
  };
  signIn: {
    h2: string;
    body: string;
    cta: string;
    strip: string;
    stripSub: string;
  };
}

// The five pillar rows. `image` keys into the responsive WebP set generated
// from the design's source art (see public/home/).
const PILLAR_ROWS: PillarRow[] = [
  {
    number: '01',
    kicker: 'Intelligence converges into content',
    title: 'Write',
    lead: 'Start with more than a blank page.',
    body: [
      'Good writing starts before the first sentence. Word Presto brings the brief, audience, research, search intent, source material and project knowledge into the Canvas before you begin.',
      'Then write your way. Start from scratch, develop an idea, rewrite a section or ask Word Presto for a complete first draft.',
    ],
    closing: 'The technology can do a lot of the work. The judgement about what is worth saying remains yours.',
    image: 'write',
    imageAlt: 'Notes, references and marked-up pages converging into a single draft',
  },
  {
    number: '02',
    kicker: 'Content moves outward',
    title: 'Publish',
    lead: 'Take one piece of work further.',
    body: [
      'A useful piece of writing should not have to be started again every time you want to use it somewhere else.',
      'Take an article, website page, guide or draft from your Canvas and adapt it for LinkedIn, X, Facebook, Bluesky, Instagram or another publishing destination. Word Presto creates a new version for that use case, while the original stays intact.',
    ],
    closing: 'One idea. More places for it to matter.',
    image: 'publish',
    imageAlt: 'An approved page moving outward into websites, posts and feeds',
  },
  {
    number: '03',
    kicker: 'People and conversations respond',
    title: 'Engage',
    lead: 'Publishing is only half the conversation.',
    body: [
      'The best opportunities to engage are rarely sitting in your own feed waiting to be found.',
      'Word Presto helps you follow the people, subjects and conversations that matter to your market, see what is gaining attention and find places where you genuinely have something useful to add. Draft a reply, develop an idea or bring the conversation back into your content work.',
    ],
    closing: 'Better reasons to join the conversation.',
    image: 'engage',
    imageAlt: 'Conversations, replies and shares forming around a published story',
  },
  {
    number: '04',
    kicker: 'Search and market visibility develops',
    title: 'Rank',
    lead: 'Help good work get found.',
    body: [
      'Search intelligence should make writing better informed, not make it sound as though it was written for a search engine.',
      'Word Presto brings together what people are searching for, what your site already covers, how existing pages are performing and where useful opportunities are being missed. Existing pages can come back into the editorial process too, ready to review, improve and develop.',
    ],
    closing: 'Write for people. Give search engines enough evidence to understand why it matters.',
    image: 'rank',
    imageAlt: 'A stack of pages rising into search visibility',
  },
  {
    number: '05',
    kicker: 'Results return as new intelligence',
    title: 'Track',
    lead: 'Learn what happens after you publish.',
    body: [
      'Rankings move. People search. Posts get responses. Pages earn attention.',
      'Word Presto brings those signals back into the project so the next piece of work starts with more information than the last. Over time it builds a deeper understanding of your website, audience, market and what actually produces a response.',
    ],
    closing: 'Publish. Observe. Learn. Write again with more information.',
    image: 'track',
    imageAlt: 'Results from every channel returning to the desk as new intelligence',
  },
];

export const homeV4: HomeV4Content = {
  seo: {
    pageTitle: 'Word Presto — Better information in. Better writing out.',
    seoTitle: 'Word Presto — Better information in. Better writing out.',
    metaDescription:
      'Word Presto brings research, evidence, search intelligence and publishing support into one editorial workflow. Write it yourself, work with Emma, or let Word Presto help with the heavy lifting.',
  },

  hero: {
    eyebrow: 'Data Powered Publishing',
    h1: 'Better information in. Better writing out.',
    body: [
      'Word Presto brings research, evidence, search intelligence and publishing support into one editorial workflow.',
      'Write it yourself, work with Emma, or let Word Presto help with the heavy lifting.',
    ],
    serifLine: 'How much help you want is up to you.',
    ctaPrimary: 'Start your 7-day free trial',
    trialNote: 'Full access. Cancel any time before it renews.',
    preparesLabel: 'prepares content for',
    preparesFor: ['WordPress', 'Astro', 'Payload', 'Sanity'],
  },

  desk: {
    kicker: 'your editorial desk',
    boardTitle: 'Editorial operations board',
    liveLabel: 'desk · live',
    you: {
      role: 'Editor-in-chief',
      title: 'Ideas, judgement and the final call',
      badge: 'in control',
    },
    emma: {
      name: 'Emma',
      role: 'managing editor',
      body: 'Keeping the work moving',
      status: 'preparing',
    },
    canvas: {
      label: 'Canvas · launch guide',
      note: 'the working document',
      lines: [
        { tag: 'CLAIMS', text: 'Vera · claim in §2 needs a source' },
        { tag: 'VOICE', text: 'This section is drifting from the brief' },
        { tag: 'META', text: 'Option B is the strongest description' },
      ],
    },
    specialists: {
      title: 'Specialist desk',
      body: 'Research, review and publishing specialists around the document',
    },
    states: [
      { label: 'Awaiting review', badge: 'Ready for you', tone: 'review' },
      { label: 'Ready for CMS handoff', badge: 'Ready', tone: 'ready' },
    ],
    annotation: 'One desk. The work, the intelligence behind it and what happens next.',
  },

  pillars: { rows: PILLAR_ROWS },

  asSeenOn: { label: 'As seen on' },

  ecosystem: {
    kicker: 'The modern brand ecosystem',
    exampleBadge: 'Example content ecosystem',
    h2: 'Your brand doesn’t live on one webpage.',
    body: 'Search, social, conversations, authority and your website all influence how people discover and understand you.',
    emphasis: 'Word Presto treats them as one connected publishing system.',
    defaultCaption: 'Your website sits at the centre. Choose a surface to see how it connects back.',
    instruction: 'Select a surface to see how it connects back to the website.',
    site: {
      url: 'vantia.co.uk',
      kicker: 'Your website · the centre of your brand',
      headline: 'Ideas your audience can actually use',
      tiles: ['Research worth sharing', 'Questions worth answering', 'Ideas worth developing'],
      docLine: 'Guide · What customers want to know before they decide',
      docStatus: 'updated',
    },
    nodes: [
      {
        id: 'google',
        x: 140,
        y: 72,
        related: ['ai', 'publications', 'linkedin'],
        label: 'Search result',
        caption:
          'A strong page becomes more than a search result. It becomes something people (and increasingly other systems) can discover, reference and use.',
      },
      {
        id: 'linkedin',
        x: 500,
        y: 64,
        related: ['profile', 'google', 'ai', 'communities'],
        label: 'LinkedIn post',
        caption:
          'One useful idea takes a different form when it reaches a feed. The subject stays connected to the original work while the format changes for the people reading it there.',
      },
      {
        id: 'instagram',
        x: 860,
        y: 80,
        related: ['linkedin', 'youtube', 'communities'],
        label: 'Instagram carousel',
        caption:
          'One story, told in a form people save and send on, the same questions your best pages answer.',
      },
      {
        id: 'youtube',
        x: 900,
        y: 304,
        related: ['instagram', 'google', 'ai'],
        label: 'Video',
        caption:
          'Video answers the question the page also answers, so it turns up in search, feeds and recommendations alike.',
      },
      {
        id: 'ai',
        x: 850,
        y: 592,
        related: ['google', 'publications', 'profile', 'linkedin'],
        label: 'AI answer',
        caption:
          'AI systems build their understanding from the wider network of content, identity, authority and references around your brand.',
      },
      {
        id: 'communities',
        x: 570,
        y: 704,
        related: ['linkedin', 'instagram', 'google'],
        label: 'Conversation',
        caption:
          'Replies, questions and reactions are not just numbers underneath a post. They are evidence of what people understood, challenged or cared enough about to discuss.',
      },
      {
        id: 'reviews',
        x: 240,
        y: 696,
        related: ['google', 'linkedin', 'ai'],
        label: 'Customer review',
        caption:
          'Customer language strengthens the story people, search engines and AI systems associate with your business.',
      },
      {
        id: 'publications',
        x: 90,
        y: 456,
        related: ['google', 'ai', 'profile'],
        label: 'Publication reference',
        caption:
          'When other people reference your work, the idea travels beyond the page it started on. Expertise accumulates across the wider body of work, not inside a single article.',
      },
      {
        id: 'profile',
        x: 120,
        y: 232,
        related: ['linkedin', 'publications', 'ai'],
        label: 'Author profile',
        caption:
          'A credible person behind the writing is part of the evidence. Expertise connects to the company, not just the page.',
      },
    ],
  },

  loop: {
    kicker: 'The modern funnel',
    exampleBadge: 'Example customer journey',
    h2: 'The funnel stopped being a funnel.',
    body: 'Nobody moves down a straight line from awareness to decision any more. They notice you somewhere, go quiet, ask people they trust, search for you by name, check whether you are credible, ask an AI to summarise you — and arrive already decided. Then they tell someone else, and it starts again.',
    axisLeft: 'Search · Authority · Trust',
    axisRight: 'Social · Attention · Conversation',
    centre: {
      url: 'vantia.co.uk',
      title: 'Your body of work',
      body: 'Everything connects back to here.',
    },
    defaultCaption: 'At the centre is your body of work. Every loop passes back through it.',
    instruction: 'Select a moment to see how the loop connects.',
    // Ordered as the journey runs, not as the diagram is laid out: attention
    // first, then search and trust. On narrow screens the cards stack in this
    // order, so the story reads correctly without the figure-of-eight.
    nodes: [
      {
        id: 'li',
        icon: '#wpv4-linkedin',
        kicker: 'Unprompted attention',
        title: 'Sees something useful they were not looking for',
        meta: 'the journey starts here',
        x: 785,
        y: 145,
        related: ['ig', 'convo', 'page', 'ai'],
        caption:
          'Almost nobody starts by searching for you. They start by noticing something worth their time, from someone they were already reading.',
      },
      {
        id: 'ig',
        icon: '#wpv4-instagram',
        kicker: 'Saved for later',
        title: 'Keeps it, and contacts nobody',
        meta: 'no enquiry, no signal',
        x: 905,
        y: 268,
        related: ['li', 'yt', 'convo'],
        caption:
          'Most of the journey is invisible. Work gets saved, forwarded and remembered long before anyone fills in a form.',
      },
      {
        id: 'yt',
        icon: '#wpv4-youtube',
        kicker: 'Quiet research',
        title: 'Watches enough to decide whether you are worth it',
        meta: 'in recommendations',
        x: 895,
        y: 392,
        related: ['ig', 'page', 'ai'],
        caption:
          'The research happens without you. By the time you hear from someone, they have usually made most of their mind up already.',
      },
      {
        id: 'convo',
        icon: '#wpv4-bluesky',
        kicker: 'Asks people they trust',
        title: '“Has anyone here actually worked with them?”',
        meta: 'active discussion',
        x: 775,
        y: 480,
        related: ['li', 'article', 'ig'],
        caption:
          'A recommendation from someone they already trust outweighs anything you say about yourself. This is the part of the funnel you cannot buy.',
      },
      {
        id: 'page',
        icon: '#wpv4-google',
        kicker: 'Searches by name',
        title: 'Looks you up directly, not by category',
        meta: 'branded search · rising',
        x: 215,
        y: 145,
        related: ['ai', 'article', 'li'],
        caption:
          'A branded search is not the top of the funnel. It is evidence that something earlier in the loop already worked.',
      },
      {
        id: 'article',
        icon: '#wpv4-doc',
        kicker: 'Reads the detail',
        title: 'Finds the page that answers the real question',
        meta: 'referenced externally',
        x: 95,
        y: 268,
        related: ['page', 'ai', 'convo'],
        caption:
          'One genuinely useful page does the work of a sales call, and does it at three in the morning without you.',
      },
      {
        id: 'review',
        icon: '#wpv4-star',
        kicker: 'Checks you are credible',
        title: '“Did this actually work for people like us?”',
        meta: 'Ashgrove Studio',
        x: 105,
        y: 392,
        related: ['page', 'li'],
        caption:
          'Trust gets verified somewhere you do not control. What other customers said is part of your evidence whether you like it or not.',
      },
      {
        id: 'ai',
        icon: '#wpv4-ai',
        kicker: 'Asks an AI to summarise you',
        title: 'Gets an answer assembled from everything above',
        meta: 'cited by another source',
        x: 225,
        y: 480,
        related: ['page', 'article', 'li'],
        caption:
          'An assistant answers from the whole picture, not one page. What it says about you is built out of every loop that came before it.',
      },
    ],
  },

  channels: {
    kicker: 'Source · destination-specific work',
    h2: 'One piece of work. More ways to use it.',
    body: 'From there, Word Presto can prepare new versions for the places where the idea needs to travel. Each becomes its own piece of work that you can review and change without rewriting the source.',
    emphasis: 'The original stays intact.',
    source: {
      label: 'Source',
      title: 'Your Canvas',
      items: ['Article', 'Guide', 'Website page', 'Draft', 'Original idea'],
      footnoteLabel: 'One source of truth.',
      footnote: 'Everything else is prepared from here.',
    },
    arrowLabel: 'Prepared for',
    socialLabel: 'Destination-specific work',
    cmsLabel: 'Website / CMS preparation',
    cmsBody:
      'Bring existing website content into the Canvas. Review it, improve it, then prepare the finished work for its destination.',
    destinations: [
      { icon: '#wpv4-linkedin', name: 'LinkedIn', state: 'Adapted', group: 'social' },
      { icon: '#wpv4-x', name: 'X', state: 'Adapted', group: 'social' },
      { icon: '#wpv4-bluesky', name: 'Bluesky', state: 'Adapted', group: 'social' },
      { icon: '#wpv4-facebook', name: 'Facebook', state: 'Adapted', group: 'social' },
      { icon: '#wpv4-instagram-solid', name: 'Instagram', state: 'Prepared', group: 'social' },
      { icon: '#wpv4-wordpress', name: 'WordPress', state: 'Connected', group: 'cms' },
      { icon: '#wpv4-sanity', name: 'Sanity', state: 'Connected', group: 'cms' },
      { icon: '#wpv4-astro', name: 'Astro', state: 'Connected', group: 'cms' },
    ],
    safetyNote:
      'Word Presto does the repetitive work of understanding the destination and preparing another version.',
    safetyEmphasis: 'You decide whether it represents the original idea properly.',
  },

  dpp: {
    kicker: 'Data powered publishing',
    h2Line1: 'There is a lot of AI inside Word Presto.',
    h2Line2: 'There should be.',
    paragraphs: [
      'It can analyse more information than a writer should have to gather manually. It can research, compare, organise, draft, review, adapt and learn from what happens next.',
      'But replacing the person doing the thinking is not the point.',
    ],
    punchline: 'The point is leverage.',
    leverageLabel: 'What leverage looks like',
    leverage: [
      'Better information before you write.',
      'More help while you work.',
      'Less repetitive work when you’re finished.',
      'More ways to use something good.',
      'Better evidence about what deserves attention next.',
    ],
    closing: 'That is Data Powered Publishing.',
  },

  signIn: {
    h2: 'Put Word Presto behind your writing.',
    body: 'For writers, editors and content teams who want the advantages of modern AI, search intelligence and publishing technology without handing over the work that makes their content worth reading.',
    cta: 'Join now',
    strip: 'Write · Publish · Engage · Rank · Track',
    stripSub: 'Word Presto · Data Powered Publishing',
  },
};
