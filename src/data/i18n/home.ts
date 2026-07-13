import type { Locale } from '@/i18n/locales';

export interface HomeContent {
  seo: { pageTitle: string; seoTitle: string; metaDescription: string };
  hero: {
    eyebrow: string;
    h1Prefix: string;
    h1Agentic: string;
    h1Suffix: string;
    body: string;
    approvalNoteLine1: string;
    approvalNoteLine2: string;
    ctaPrimary: string;
    ctaSecondary: string;
    demoLink: string;
    preparesLabel: string;
  };
  board: {
    note: string;
    title: string;
    liveLabel: string;
    editorInChief: string;
    you: string;
    finalCall: string;
    emmaRole: string;
    emmaSub: string;
    preparing: string;
    canvasLabel: string;
    workingSurface: string;
    chip1: string;
    chip2: string;
    specialistDesk: string;
    reportsThroughEmma: string;
    gateApproval: string;
    gateCms: string;
    stamp: string;
  };
  operatingModel: {
    eyebrow: string;
    h2: string;
    body: string;
    note: string;
    beforeLabel: string;
    beforeCards: { title: string; body: string; note?: string }[];
    emmaRole: string;
    afterLabel: string;
    afterHeader: string;
    afterItems: string[];
  };
  emmaDesk: {
    eyebrow: string;
    h2: string;
    badgeRole: string;
    badgeCity: string;
    cards: { title: string; body: string }[];
  };
  commitments: {
    eyebrow: string;
    h2: string;
    body: string;
    panelTitle: string;
    panelLabel: string;
    items: { num: string; title: string; body: string }[];
  };
  canvas: {
    eyebrow: string;
    h2: string;
    body: string;
    points: string[];
    docLabel: string;
    draftLabel: string;
    docHeading: string;
    sectionLabel: string;
    marginLabel: string;
    marginNotes: { tag: string; text: string }[];
    footerLeft: string;
    footerRight: string;
    annotation: string;
  };
  specialists: {
    eyebrow: string;
    h2Suffix: string;
    body: string;
    note: string;
    teamsSuffix: string;
    coordinatedThroughEmma: string;
    editorApprovalRequired: string;
    chipsLabel: string;
    browseProfiles: string;
    teamLabel: string;
    specialistSingular: string;
    specialistPlural: string;
  };
  languages: {
    eyebrow: string;
    h2: string;
    body: string;
    closingText: string;
    editors: { name: string; city: string; lang: string }[];
  };
  approval: {
    eyebrow: string;
    h2: string;
    body: string;
    finalLine: string;
    docTitle: string;
    filename: string;
    row1: string;
    row1Status: string;
    row2: string;
    row2Status: string;
    row3: string;
    row3Status: string;
    approvedByLabel: string;
    stampText: string;
    pillText: string;
  };
  publish: {
    eyebrow: string;
    h2: string;
    body: string;
    sourceKicker: string;
    sourceTitle: string;
    sourceNote1: string;
    sourceNote2: string;
    connector: string;
    socialLabel: string;
    cmsLabel: string;
    readyStatus: string;
    footerLead: string;
    footerEmphasis: string;
    footerTail: string;
  };
  cta: {
    h2: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    markText: string;
  };
  footer: {
    deskHeading: string;
    deskLinks: [string, string, string];
    standardsHeading: string;
    standardsLinks: [string, string, string];
    forHeading: string;
    forLinks: [string, string, string];
    copyright: string;
    tagline2: string;
  };
}

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    seo: {
      pageTitle: 'Word Presto is the agentic content engine for writers, editors and publishing teams.',
      seoTitle: 'Content workflow engine for writers and publishing teams | Word Presto',
      metaDescription: 'Plan, brief, write, review, improve and prepare content for search, readers and CMS handoff.',
    },
    hero: {
      eyebrow: 'the content engine behind publishing',
      h1Prefix: 'Word Presto is the ',
      h1Agentic: 'agentic',
      h1Suffix: ' content engine for writers, editors and publishing teams.',
      body: 'At the centre is Emma, your managing editor. She keeps the brief, draft, evidence, SEO, review and approval moving through one calm editorial desk, while you keep the final say.',
      approvalNoteLine1: 'Emma prepares. The Editor approves.',
      approvalNoteLine2: 'Nothing publishes without your sign-off.',
      ctaPrimary: 'Join now',
      ctaSecondary: 'See the editorial desk',
      demoLink: 'See rough thinking become review-ready',
      preparesLabel: 'prepares content for',
    },
    board: {
      note: 'your desk, coordinated',
      title: 'Editorial operations board',
      liveLabel: 'DESK · LIVE',
      editorInChief: 'EDITOR-IN-CHIEF',
      you: 'You',
      finalCall: 'the final call',
      emmaRole: 'MANAGING EDITOR',
      emmaSub: 'Keeping the brief, draft and review moving',
      preparing: 'Preparing',
      canvasLabel: 'CANVAS · launch-guide',
      workingSurface: 'the working surface',
      chip1: 'Vera · checking claims',
      chip2: 'Voice · drifting §2',
      specialistDesk: 'Specialist desk',
      reportsThroughEmma: 'reports through Emma',
      gateApproval: 'Editor approval required',
      gateCms: 'Ready for CMS handoff',
      stamp: 'Awaiting sign-off',
    },
    operatingModel: {
      eyebrow: 'The operating model',
      h2: 'This is not another content dashboard.',
      body: 'Most content work does not fall apart because people cannot write. It falls apart because the brief changes, reviews arrive late, claims lose their sources, SEO gets bolted on at the end, and nobody knows who has approved what.',
      note: 'Word Presto gives the work a desk. Emma runs it.',
      beforeLabel: 'BEFORE · SCATTERED',
      beforeCards: [
        { title: 'Vague brief', body: 'Nobody agreed what the page is for.', note: '?' },
        { title: 'Rewrite arrived late', body: 'Notes came after the draft was done.' },
        { title: 'Claim, no evidence', body: 'Moved forward anyway.', note: 'source?' },
        { title: 'Messy approval', body: 'Who signed off on this?' },
      ],
      emmaRole: 'MANAGING EDITOR',
      afterLabel: 'AFTER · ONE DESK',
      afterHeader: 'The desk, in order',
      afterItems: [
        'Brief agreed and on file',
        'SEO checked in the draft, not after',
        'Claims carry their evidence',
        'Approval sits with the Editor',
      ],
    },
    emmaDesk: {
      eyebrow: 'At the centre of the desk',
      h2: 'Meet Emma, your managing editor.',
      badgeRole: 'MANAGING EDITOR',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'She holds the brief', body: 'Keeps the goal, audience, voice, context and previous decisions in view, so the work does not drift.' },
        { title: 'She runs the desk', body: 'Moves each piece from brief to draft, proofing, review and approval without losing the thread.' },
        { title: 'She calls in the specialists', body: 'Sends claims, SEO, evidence, voice, links, risk and handoff work to the right specialist at the right time.' },
        { title: 'She protects your authority', body: 'Emma can recommend and prepare. Only the Editor can approve.' },
      ],
    },
    commitments: {
      eyebrow: 'The editorial constitution',
      h2: 'Emma&rsquo;s four commitments.',
      body: 'The standards Emma holds to on every piece of work: the rules that make the desk trustworthy.',
      panelTitle: 'Held on every piece of work',
      panelLabel: 'FOUR COMMITMENTS',
      items: [
        { num: '01', title: 'Ground truth above all', body: 'No invented figures. No unsupported claims. No pretending weak evidence is strong.' },
        { num: '02', title: 'Say the honest thing', body: 'Emma will not flatter a bad draft. She tells you what needs work.' },
        { num: '03', title: 'Protect your work', body: 'Nothing publishes without the Editor&rsquo;s approval.' },
        { num: '04', title: 'Remember what matters', body: 'Emma learns the standards, voice and decisions that shape the project.' },
      ],
    },
    canvas: {
      eyebrow: 'The working surface',
      h2: 'One working surface for the actual copy.',
      body: 'The Canvas is where Emma brings the work together: imported pages, drafts, rewrites, proofing notes, specialist findings and approval decisions.',
      points: [
        'Import, draft, rewrite, proof and review in one place.',
        'Specialist findings arrive as margin notes, not meetings.',
        'Final approval still required, always.',
      ],
      docLabel: 'launch-guide.md · Emma editing',
      draftLabel: 'DRAFT · §1&ndash;§4',
      docHeading: 'Launching with confidence',
      sectionLabel: '§3 · PROOF',
      marginLabel: 'MARGIN NOTES',
      marginNotes: [
        { tag: 'CLAIMS', text: 'Claim needs a source before approval.' },
        { tag: 'BRIEF', text: 'This section has drifted from the brief.' },
        { tag: 'VOICE', text: 'Voice is too generic here.' },
        { tag: 'METADATA', text: 'Metadata option B is strongest.' },
      ],
      footerLeft: 'Final approval still required',
      footerRight: 'back to the Editor',
      annotation: 'one surface, not tabs',
    },
    specialists: {
      eyebrow: 'The specialist bench',
      h2Suffix: ' specialists. One managing editor.',
      body: 'Emma is not working alone. Behind her is the full Word Presto specialist bench: content production, SEO, operations and approval governance workers, each with a defined role and place in the workflow.',
      note: 'Emma brings in the right specialist at the right moment, then returns the findings that need the Editor&rsquo;s judgement.',
      teamsSuffix: ' teams',
      coordinatedThroughEmma: 'coordinated through Emma',
      editorApprovalRequired: 'Editor approval required',
      chipsLabel: 'A few of the specialists Emma can bring in:',
      browseProfiles: 'Browse specialist profiles',
      teamLabel: 'TEAM',
      specialistSingular: 'SPECIALIST',
      specialistPlural: 'SPECIALISTS',
    },
    languages: {
      eyebrow: 'Native voice',
      h2: 'Same standard. Native voice.',
      body: 'When you work in another language, you do not get Emma translated. You get a managing editor who runs the same desk in her own language and idiom.',
      closingText: 'Six editors. One standard.',
      editors: [
        { name: 'Emma', city: 'Dublin', lang: 'English' },
        { name: 'Aurora', city: 'Lisbon', lang: 'Portuguese' },
        { name: 'Francisca', city: 'São Paulo', lang: 'Brazilian Portuguese' },
        { name: 'Sofía', city: 'Madrid', lang: 'Spanish' },
        { name: 'Sabine', city: 'Berlin', lang: 'German' },
        { name: 'Ambre', city: 'Paris', lang: 'French' },
      ],
    },
    approval: {
      eyebrow: 'The gate',
      h2: 'Only the Editor can approve the work.',
      body: 'Emma can prepare the work. Specialists can review it. The Canvas can organise it. But only the Editor can approve it.',
      finalLine: 'Nothing goes live until the human in charge says yes.',
      docTitle: 'Approval',
      filename: 'launch-guide.md',
      row1: 'Emma&rsquo;s desk summary',
      row1Status: 'Prepared',
      row2: 'Specialist reviews',
      row2Status: 'In',
      row3: 'Editor sign-off',
      row3Status: 'awaiting you',
      approvedByLabel: 'approved by',
      stampText: 'Approved',
      pillText: 'the Editor holds the pen',
    },
    publish: {
      eyebrow: 'Write once · Publish everywhere',
      h2: 'One approved idea, ready for every channel.',
      body: 'Word Presto prepares channel-ready versions for your social platforms and your CMS, structured, on brand and consistent. Nothing goes live until a person approves it.',
      sourceKicker: 'Human-approved source',
      sourceTitle: 'Approved Content',
      sourceNote1: 'Clear. Accurate. On brand.',
      sourceNote2: 'Write once, adapt everywhere.',
      connector: 'Publishes to',
      socialLabel: 'Social channels',
      cmsLabel: 'CMS & delivery',
      readyStatus: 'Ready',
      footerLead: 'Agents prepare every version.',
      footerEmphasis: 'People still make the call',
      footerTail: 'Human approval before anything goes live.',
    },
    cta: {
      h2: 'Put Emma at the centre of your content operation.',
      body: 'For writers, editors and publishing teams who need better content work without giving up editorial control.',
      ctaPrimary: 'Join now',
      ctaSecondary: 'See the editorial desk',
      markText: 'PAPER · INK · SIGNAL · CONTROL',
    },
    footer: {
      deskHeading: 'The desk',
      deskLinks: ['Emma runs the desk', 'The Canvas', 'Specialist desk'],
      standardsHeading: 'Standards',
      standardsLinks: ['Four commitments', 'Editor approval', 'Native voice'],
      forHeading: 'For',
      forLinks: ['Writers', 'Editors', 'Publishing teams'],
      copyright: '© 2026 Word Presto',
      tagline2: 'Emma prepares · the Editor approves',
    },
  },

  pt: {
    seo: {
      pageTitle: 'A Word Presto é o motor de conteúdo agêntico para escritores, editores e equipas de publicação.',
      seoTitle: 'Motor de fluxo de trabalho de conteúdo para escritores e equipas de publicação | Word Presto',
      metaDescription: 'Planeie, faça o briefing, escreva, reveja, melhore e prepare o conteúdo para a pesquisa, os leitores e a integração com o CMS.',
    },
    hero: {
      eyebrow: 'o motor de conteúdo por detrás da publicação',
      h1Prefix: 'A Word Presto é o motor de conteúdo ',
      h1Agentic: 'agêntico',
      h1Suffix: ' para escritores, editores e equipas de publicação.',
      body: 'No centro está a Emma, a sua editora-chefe. Ela mantém o briefing, o rascunho, as evidências, o SEO, a revisão e a aprovação a avançar através de uma única redação, enquanto a decisão final é sempre sua.',
      approvalNoteLine1: 'A Emma prepara. O Editor aprova.',
      approvalNoteLine2: 'Nada é publicado sem a sua autorização.',
      ctaPrimary: 'Aderir agora',
      ctaSecondary: 'Ver a redação',
      demoLink: 'Veja ideias soltas tornarem-se prontas para revisão',
      preparesLabel: 'prepara conteúdo para',
    },
    board: {
      note: 'a sua redação, coordenada',
      title: 'Painel de operações editoriais',
      liveLabel: 'REDAÇÃO · AO VIVO',
      editorInChief: 'EDITOR-CHEFE',
      you: 'Você',
      finalCall: 'a decisão final',
      emmaRole: 'EDITORA-CHEFE',
      emmaSub: 'A manter o briefing, o rascunho e a revisão em andamento',
      preparing: 'A preparar',
      canvasLabel: 'CANVAS · guia-de-lançamento',
      workingSurface: 'a superfície de trabalho',
      chip1: 'Vera · a verificar afirmações',
      chip2: 'Voz · a desviar-se §2',
      specialistDesk: 'Mesa de especialistas',
      reportsThroughEmma: 'reporta através da Emma',
      gateApproval: 'Aprovação do Editor necessária',
      gateCms: 'Pronto para integração com o CMS',
      stamp: 'A aguardar aprovação',
    },
    operatingModel: {
      eyebrow: 'O modelo de funcionamento',
      h2: 'Isto não é mais um painel de conteúdo.',
      body: 'A maior parte do trabalho de conteúdo não falha porque as pessoas não sabem escrever. Falha porque o briefing muda, as revisões chegam tarde, as afirmações perdem as suas fontes, o SEO é encaixado no final, e ninguém sabe quem aprovou o quê.',
      note: 'A Word Presto dá ao trabalho uma redação. A Emma gere-a.',
      beforeLabel: 'ANTES · DISPERSO',
      beforeCards: [
        { title: 'Briefing vago', body: 'Ninguém acordou para que serve a página.', note: '?' },
        { title: 'Revisão chegou tarde', body: 'As notas chegaram depois de o rascunho estar pronto.' },
        { title: 'Afirmação sem evidência', body: 'Avançou na mesma.', note: 'fonte?' },
        { title: 'Aprovação confusa', body: 'Quem aprovou isto?' },
      ],
      emmaRole: 'EDITORA-CHEFE',
      afterLabel: 'DEPOIS · UMA REDAÇÃO',
      afterHeader: 'A redação, em ordem',
      afterItems: [
        'Briefing acordado e arquivado',
        'SEO verificado no rascunho, não depois',
        'Afirmações com evidência associada',
        'Aprovação a cargo do Editor',
      ],
    },
    emmaDesk: {
      eyebrow: 'No centro da redação',
      h2: 'Conheça a Emma, a sua editora-chefe.',
      badgeRole: 'EDITORA-CHEFE',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'Ela guarda o briefing', body: 'Mantém o objetivo, o público, a voz, o contexto e as decisões anteriores sempre presentes, para que o trabalho não se desvie.' },
        { title: 'Ela gere a redação', body: 'Move cada peça do briefing ao rascunho, revisão e aprovação sem perder o fio.' },
        { title: 'Ela chama os especialistas', body: 'Envia trabalho de afirmações, SEO, evidência, voz, ligações, risco e integração ao especialista certo, no momento certo.' },
        { title: 'Ela protege a sua autoridade', body: 'A Emma pode recomendar e preparar. Só o Editor pode aprovar.' },
      ],
    },
    commitments: {
      eyebrow: 'A constituição editorial',
      h2: 'Os quatro compromissos da Emma.',
      body: 'Os padrões que a Emma segue em cada trabalho: as regras que tornam a redação fiável.',
      panelTitle: 'Mantidos em cada trabalho',
      panelLabel: 'QUATRO COMPROMISSOS',
      items: [
        { num: '01', title: 'A verdade acima de tudo', body: 'Sem números inventados. Sem afirmações sem base. Sem fingir que uma evidência fraca é forte.' },
        { num: '02', title: 'Diz o que é honesto', body: 'A Emma não elogia um mau rascunho. Diz-lhe o que precisa de trabalho.' },
        { num: '03', title: 'Protege o seu trabalho', body: 'Nada é publicado sem a aprovação do Editor.' },
        { num: '04', title: 'Lembra o que importa', body: 'A Emma aprende os padrões, a voz e as decisões que moldam o projeto.' },
      ],
    },
    canvas: {
      eyebrow: 'A superfície de trabalho',
      h2: 'Uma única superfície para o texto em si.',
      body: 'O Canvas é onde a Emma junta o trabalho: páginas importadas, rascunhos, reescritas, notas de revisão, conclusões dos especialistas e decisões de aprovação.',
      points: [
        'Importe, redija, reescreva, reveja e aprove num só lugar.',
        'As conclusões dos especialistas chegam como notas de margem, não reuniões.',
        'A aprovação final continua sempre necessária.',
      ],
      docLabel: 'guia-de-lançamento.md · Emma a editar',
      draftLabel: 'RASCUNHO · §1&ndash;§4',
      docHeading: 'Lançar com confiança',
      sectionLabel: '§3 · PROVA',
      marginLabel: 'NOTAS DE MARGEM',
      marginNotes: [
        { tag: 'AFIRMAÇÕES', text: 'A afirmação precisa de uma fonte antes da aprovação.' },
        { tag: 'BRIEFING', text: 'Esta secção desviou-se do briefing.' },
        { tag: 'VOZ', text: 'A voz está demasiado genérica aqui.' },
        { tag: 'METADADOS', text: 'A opção B de metadados é a mais forte.' },
      ],
      footerLeft: 'Aprovação final continua necessária',
      footerRight: 'de volta ao Editor',
      annotation: 'uma superfície, não separadores',
    },
    specialists: {
      eyebrow: 'A equipa de especialistas',
      h2Suffix: ' especialistas. Uma editora-chefe.',
      body: 'A Emma não trabalha sozinha. Por trás dela está toda a equipa de especialistas da Word Presto: produção de conteúdo, SEO, operações e governação de aprovação, cada um com um papel e lugar definidos no fluxo de trabalho.',
      note: 'A Emma chama o especialista certo no momento certo, e depois devolve as conclusões que precisam do julgamento do Editor.',
      teamsSuffix: ' equipas',
      coordinatedThroughEmma: 'coordenados pela Emma',
      editorApprovalRequired: 'Aprovação do Editor necessária',
      chipsLabel: 'Alguns dos especialistas que a Emma pode chamar:',
      browseProfiles: 'Ver perfis de especialistas',
      teamLabel: 'EQUIPA',
      specialistSingular: 'ESPECIALISTA',
      specialistPlural: 'ESPECIALISTAS',
    },
    languages: {
      eyebrow: 'Voz nativa',
      h2: 'O mesmo padrão. Voz nativa.',
      body: 'Quando trabalha noutro idioma, não recebe a Emma traduzida. Recebe uma editora-chefe que gere a mesma redação no seu próprio idioma e estilo.',
      closingText: 'Seis editoras. Um só padrão.',
      editors: [
        { name: 'Emma', city: 'Dublin', lang: 'Inglês' },
        { name: 'Aurora', city: 'Lisboa', lang: 'Português' },
        { name: 'Francisca', city: 'São Paulo', lang: 'Português do Brasil' },
        { name: 'Sofía', city: 'Madrid', lang: 'Espanhol' },
        { name: 'Sabine', city: 'Berlim', lang: 'Alemão' },
        { name: 'Ambre', city: 'Paris', lang: 'Francês' },
      ],
    },
    approval: {
      eyebrow: 'A porta de saída',
      h2: 'Só o Editor pode aprovar o trabalho.',
      body: 'A Emma pode preparar o trabalho. Os especialistas podem revê-lo. O Canvas pode organizá-lo. Mas só o Editor pode aprová-lo.',
      finalLine: 'Nada vai ao ar até a pessoa responsável dizer que sim.',
      docTitle: 'Aprovação',
      filename: 'guia-de-lançamento.md',
      row1: 'Resumo da redação da Emma',
      row1Status: 'Preparado',
      row2: 'Revisões dos especialistas',
      row2Status: 'Concluídas',
      row3: 'Aprovação do Editor',
      row3Status: 'a aguardar',
      approvedByLabel: 'aprovado por',
      stampText: 'Aprovado',
      pillText: 'o Editor tem a palavra final',
    },
    publish: {
      eyebrow: 'Escreva uma vez · Publique em todo o lado',
      h2: 'Uma ideia aprovada, pronta para cada canal.',
      body: 'A Word Presto prepara versões prontas para cada canal, para as suas redes sociais e o seu CMS, estruturadas, fiéis à marca e consistentes. Nada é publicado até uma pessoa aprovar.',
      sourceKicker: 'Fonte aprovada por humanos',
      sourceTitle: 'Conteúdo aprovado',
      sourceNote1: 'Claro. Rigoroso. Fiel à marca.',
      sourceNote2: 'Escreva uma vez, adapte em todo o lado.',
      connector: 'Publica em',
      socialLabel: 'Redes sociais',
      cmsLabel: 'CMS e entrega',
      readyStatus: 'Pronto',
      footerLead: 'Os agentes preparam cada versão.',
      footerEmphasis: 'A decisão continua a ser das pessoas',
      footerTail: 'Aprovação humana antes de qualquer publicação.',
    },
    cta: {
      h2: 'Coloque a Emma no centro da sua operação de conteúdo.',
      body: 'Para escritores, editores e equipas de publicação que precisam de um melhor trabalho de conteúdo sem abdicar do controlo editorial.',
      ctaPrimary: 'Aderir agora',
      ctaSecondary: 'Ver a redação',
      markText: 'PAPEL · TINTA · SINAL · CONTROLO',
    },
    footer: {
      deskHeading: 'A redação',
      deskLinks: ['A Emma gere a redação', 'O Canvas', 'Mesa de especialistas'],
      standardsHeading: 'Padrões',
      standardsLinks: ['Quatro compromissos', 'Aprovação do Editor', 'Voz nativa'],
      forHeading: 'Para',
      forLinks: ['Escritores', 'Editores', 'Equipas de publicação'],
      copyright: '© 2026 Word Presto',
      tagline2: 'A Emma prepara · o Editor aprova',
    },
  },

  'pt-br': {
    seo: {
      pageTitle: 'A Word Presto é o motor de conteúdo agêntico para escritores, editores e equipes de publicação.',
      seoTitle: 'Motor de fluxo de trabalho de conteúdo para escritores e equipes de publicação | Word Presto',
      metaDescription: 'Planeje, faça o briefing, escreva, revise, melhore e prepare o conteúdo para busca, leitores e integração com o CMS.',
    },
    hero: {
      eyebrow: 'o motor de conteúdo por trás da publicação',
      h1Prefix: 'A Word Presto é o motor de conteúdo ',
      h1Agentic: 'agêntico',
      h1Suffix: ' para escritores, editores e equipes de publicação.',
      body: 'No centro está a Emma, sua editora-chefe. Ela mantém o briefing, o rascunho, as evidências, o SEO, a revisão e a aprovação avançando em uma única redação, enquanto a decisão final é sempre sua.',
      approvalNoteLine1: 'A Emma prepara. O Editor aprova.',
      approvalNoteLine2: 'Nada é publicado sem a sua autorização.',
      ctaPrimary: 'Junte-se agora',
      ctaSecondary: 'Ver a redação',
      demoLink: 'Veja ideias soltas virarem algo pronto para revisão',
      preparesLabel: 'prepara conteúdo para',
    },
    board: {
      note: 'sua redação, coordenada',
      title: 'Painel de operações editoriais',
      liveLabel: 'REDAÇÃO · AO VIVO',
      editorInChief: 'EDITOR-CHEFE',
      you: 'Você',
      finalCall: 'a decisão final',
      emmaRole: 'EDITORA-CHEFE',
      emmaSub: 'Mantendo o briefing, o rascunho e a revisão em andamento',
      preparing: 'Preparando',
      canvasLabel: 'CANVAS · guia-de-lancamento',
      workingSurface: 'a superfície de trabalho',
      chip1: 'Vera · verificando afirmações',
      chip2: 'Voz · desviando §2',
      specialistDesk: 'Mesa de especialistas',
      reportsThroughEmma: 'reporta pela Emma',
      gateApproval: 'Aprovação do Editor necessária',
      gateCms: 'Pronto para integração com o CMS',
      stamp: 'Aguardando aprovação',
    },
    operatingModel: {
      eyebrow: 'O modelo de funcionamento',
      h2: 'Isso não é mais um painel de conteúdo.',
      body: 'A maior parte do trabalho de conteúdo não desanda porque as pessoas não sabem escrever. Desanda porque o briefing muda, as revisões chegam atrasadas, as afirmações perdem suas fontes, o SEO é encaixado no final, e ninguém sabe quem aprovou o quê.',
      note: 'A Word Presto dá ao trabalho uma redação. A Emma comanda.',
      beforeLabel: 'ANTES · DISPERSO',
      beforeCards: [
        { title: 'Briefing vago', body: 'Ninguém combinou para que a página serve.', note: '?' },
        { title: 'Revisão chegou atrasada', body: 'As notas vieram depois do rascunho pronto.' },
        { title: 'Afirmação sem evidência', body: 'Foi em frente do mesmo jeito.', note: 'fonte?' },
        { title: 'Aprovação confusa', body: 'Quem aprovou isso?' },
      ],
      emmaRole: 'EDITORA-CHEFE',
      afterLabel: 'DEPOIS · UMA REDAÇÃO',
      afterHeader: 'A redação, em ordem',
      afterItems: [
        'Briefing combinado e arquivado',
        'SEO verificado no rascunho, não depois',
        'Afirmações com evidência junto',
        'Aprovação nas mãos do Editor',
      ],
    },
    emmaDesk: {
      eyebrow: 'No centro da redação',
      h2: 'Conheça a Emma, sua editora-chefe.',
      badgeRole: 'EDITORA-CHEFE',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'Ela guarda o briefing', body: 'Mantém o objetivo, o público, a voz, o contexto e as decisões anteriores sempre à vista, para o trabalho não sair do rumo.' },
        { title: 'Ela comanda a redação', body: 'Move cada peça do briefing ao rascunho, revisão e aprovação sem perder o fio.' },
        { title: 'Ela chama os especialistas', body: 'Manda o trabalho de afirmações, SEO, evidência, voz, links, risco e integração para o especialista certo, na hora certa.' },
        { title: 'Ela protege sua autoridade', body: 'A Emma pode recomendar e preparar. Só o Editor pode aprovar.' },
      ],
    },
    commitments: {
      eyebrow: 'A constituição editorial',
      h2: 'Os quatro compromissos da Emma.',
      body: 'Os padrões que a Emma segue em todo trabalho: as regras que tornam a redação confiável.',
      panelTitle: 'Mantidos em todo trabalho',
      panelLabel: 'QUATRO COMPROMISSOS',
      items: [
        { num: '01', title: 'A verdade acima de tudo', body: 'Sem números inventados. Sem afirmações sem base. Sem fingir que uma evidência fraca é forte.' },
        { num: '02', title: 'Fala o que é verdade', body: 'A Emma não elogia um rascunho ruim. Ela diz o que precisa melhorar.' },
        { num: '03', title: 'Protege seu trabalho', body: 'Nada é publicado sem a aprovação do Editor.' },
        { num: '04', title: 'Lembra do que importa', body: 'A Emma aprende os padrões, a voz e as decisões que moldam o projeto.' },
      ],
    },
    canvas: {
      eyebrow: 'A superfície de trabalho',
      h2: 'Uma única superfície para o texto em si.',
      body: 'O Canvas é onde a Emma junta o trabalho: páginas importadas, rascunhos, reescritas, notas de revisão, achados dos especialistas e decisões de aprovação.',
      points: [
        'Importe, redija, reescreva, revise e aprove em um só lugar.',
        'Os achados dos especialistas chegam como notas de margem, não reuniões.',
        'A aprovação final continua sempre necessária.',
      ],
      docLabel: 'guia-de-lancamento.md · Emma editando',
      draftLabel: 'RASCUNHO · §1&ndash;§4',
      docHeading: 'Lançando com confiança',
      sectionLabel: '§3 · PROVA',
      marginLabel: 'NOTAS DE MARGEM',
      marginNotes: [
        { tag: 'AFIRMAÇÕES', text: 'A afirmação precisa de uma fonte antes da aprovação.' },
        { tag: 'BRIEFING', text: 'Essa seção saiu do briefing.' },
        { tag: 'VOZ', text: 'A voz está genérica demais aqui.' },
        { tag: 'METADADOS', text: 'A opção B de metadados é a mais forte.' },
      ],
      footerLeft: 'Aprovação final continua necessária',
      footerRight: 'de volta pro Editor',
      annotation: 'uma superfície, não abas',
    },
    specialists: {
      eyebrow: 'O time de especialistas',
      h2Suffix: ' especialistas. Uma editora-chefe.',
      body: 'A Emma não trabalha sozinha. Por trás dela está todo o time de especialistas da Word Presto: produção de conteúdo, SEO, operações e governança de aprovação, cada um com um papel e lugar definidos no fluxo de trabalho.',
      note: 'A Emma chama o especialista certo na hora certa, e depois devolve os achados que precisam do julgamento do Editor.',
      teamsSuffix: ' times',
      coordinatedThroughEmma: 'coordenados pela Emma',
      editorApprovalRequired: 'Aprovação do Editor necessária',
      chipsLabel: 'Alguns dos especialistas que a Emma pode chamar:',
      browseProfiles: 'Ver perfis de especialistas',
      teamLabel: 'EQUIPE',
      specialistSingular: 'ESPECIALISTA',
      specialistPlural: 'ESPECIALISTAS',
    },
    languages: {
      eyebrow: 'Voz nativa',
      h2: 'O mesmo padrão. Voz nativa.',
      body: 'Quando você trabalha em outro idioma, não ganha a Emma traduzida. Você ganha uma editora-chefe que comanda a mesma redação no seu próprio idioma e jeito de falar.',
      closingText: 'Seis editoras. Um só padrão.',
      editors: [
        { name: 'Emma', city: 'Dublin', lang: 'Inglês' },
        { name: 'Aurora', city: 'Lisboa', lang: 'Português' },
        { name: 'Francisca', city: 'São Paulo', lang: 'Português do Brasil' },
        { name: 'Sofía', city: 'Madri', lang: 'Espanhol' },
        { name: 'Sabine', city: 'Berlim', lang: 'Alemão' },
        { name: 'Ambre', city: 'Paris', lang: 'Francês' },
      ],
    },
    approval: {
      eyebrow: 'A porta de saída',
      h2: 'Só o Editor pode aprovar o trabalho.',
      body: 'A Emma pode preparar o trabalho. Os especialistas podem revisar. O Canvas pode organizar. Mas só o Editor pode aprovar.',
      finalLine: 'Nada vai ao ar até a pessoa responsável dizer sim.',
      docTitle: 'Aprovação',
      filename: 'guia-de-lancamento.md',
      row1: 'Resumo da redação da Emma',
      row1Status: 'Preparado',
      row2: 'Revisões dos especialistas',
      row2Status: 'Concluídas',
      row3: 'Aprovação do Editor',
      row3Status: 'aguardando',
      approvedByLabel: 'aprovado por',
      stampText: 'Aprovado',
      pillText: 'o Editor tem a palavra final',
    },
    publish: {
      eyebrow: 'Escreva uma vez · Publique em todo lugar',
      h2: 'Uma ideia aprovada, pronta para cada canal.',
      body: 'A Word Presto prepara versões prontas para cada canal, para as suas redes sociais e o seu CMS, estruturadas, fiéis à marca e consistentes. Nada vai ao ar até uma pessoa aprovar.',
      sourceKicker: 'Fonte aprovada por humanos',
      sourceTitle: 'Conteúdo aprovado',
      sourceNote1: 'Claro. Preciso. Fiel à marca.',
      sourceNote2: 'Escreva uma vez, adapte em todo lugar.',
      connector: 'Publica em',
      socialLabel: 'Redes sociais',
      cmsLabel: 'CMS e entrega',
      readyStatus: 'Pronto',
      footerLead: 'Os agentes preparam cada versão.',
      footerEmphasis: 'A decisão continua sendo das pessoas',
      footerTail: 'Aprovação humana antes de qualquer publicação.',
    },
    cta: {
      h2: 'Coloque a Emma no centro da sua operação de conteúdo.',
      body: 'Para escritores, editores e equipes de publicação que precisam de um trabalho de conteúdo melhor sem abrir mão do controle editorial.',
      ctaPrimary: 'Junte-se agora',
      ctaSecondary: 'Ver a redação',
      markText: 'PAPEL · TINTA · SINAL · CONTROLE',
    },
    footer: {
      deskHeading: 'A redação',
      deskLinks: ['A Emma comanda a redação', 'O Canvas', 'Mesa de especialistas'],
      standardsHeading: 'Padrões',
      standardsLinks: ['Quatro compromissos', 'Aprovação do Editor', 'Voz nativa'],
      forHeading: 'Para',
      forLinks: ['Escritores', 'Editores', 'Equipes de publicação'],
      copyright: '© 2026 Word Presto',
      tagline2: 'A Emma prepara · o Editor aprova',
    },
  },

  es: {
    seo: {
      pageTitle: 'Word Presto es el motor de contenido agéntico para redactores, editores y equipos de publicación.',
      seoTitle: 'Motor de flujo de trabajo de contenido para redactores y equipos de publicación | Word Presto',
      metaDescription: 'Planifica, redacta el brief, escribe, revisa, mejora y prepara el contenido para la búsqueda, los lectores y la entrega al CMS.',
    },
    hero: {
      eyebrow: 'el motor de contenido detrás de la publicación',
      h1Prefix: 'Word Presto es el motor de contenido ',
      h1Agentic: 'agéntico',
      h1Suffix: ' para redactores, editores y equipos de publicación.',
      body: 'En el centro está Emma, tu editora jefa. Mantiene el brief, el borrador, la evidencia, el SEO, la revisión y la aprobación avanzando por una única redacción, mientras tú conservas la última palabra.',
      approvalNoteLine1: 'Emma prepara. El Editor aprueba.',
      approvalNoteLine2: 'Nada se publica sin tu visto bueno.',
      ctaPrimary: 'Únete ahora',
      ctaSecondary: 'Ver la redacción',
      demoLink: 'Mira una idea suelta convertirse en algo listo para revisar',
      preparesLabel: 'prepara contenido para',
    },
    board: {
      note: 'tu redacción, coordinada',
      title: 'Panel de operaciones editoriales',
      liveLabel: 'REDACCIÓN · EN VIVO',
      editorInChief: 'EDITOR JEFE',
      you: 'Tú',
      finalCall: 'la decisión final',
      emmaRole: 'EDITORA JEFA',
      emmaSub: 'Manteniendo el brief, el borrador y la revisión en marcha',
      preparing: 'Preparando',
      canvasLabel: 'CANVAS · guia-de-lanzamiento',
      workingSurface: 'la superficie de trabajo',
      chip1: 'Vera · verificando afirmaciones',
      chip2: 'Voz · desviándose §2',
      specialistDesk: 'Mesa de especialistas',
      reportsThroughEmma: 'reporta a través de Emma',
      gateApproval: 'Aprobación del Editor requerida',
      gateCms: 'Listo para la entrega al CMS',
      stamp: 'Pendiente de aprobación',
    },
    operatingModel: {
      eyebrow: 'El modelo de funcionamiento',
      h2: 'Esto no es otro panel de contenido.',
      body: 'La mayoría del trabajo de contenido no falla porque la gente no sepa escribir. Falla porque el brief cambia, las revisiones llegan tarde, las afirmaciones pierden sus fuentes, el SEO se añade al final, y nadie sabe quién ha aprobado qué.',
      note: 'Word Presto le da al trabajo una redacción. Emma la dirige.',
      beforeLabel: 'ANTES · DISPERSO',
      beforeCards: [
        { title: 'Brief impreciso', body: 'Nadie acordó para qué sirve la página.', note: '?' },
        { title: 'La revisión llegó tarde', body: 'Las notas llegaron después de terminar el borrador.' },
        { title: 'Afirmación sin evidencia', body: 'Avanzó de todos modos.', note: '¿fuente?' },
        { title: 'Aprobación confusa', body: '¿Quién dio el visto bueno a esto?' },
      ],
      emmaRole: 'EDITORA JEFA',
      afterLabel: 'DESPUÉS · UNA REDACCIÓN',
      afterHeader: 'La redacción, en orden',
      afterItems: [
        'Brief acordado y archivado',
        'SEO revisado en el borrador, no después',
        'Las afirmaciones llevan su evidencia',
        'La aprobación recae en el Editor',
      ],
    },
    emmaDesk: {
      eyebrow: 'En el centro de la redacción',
      h2: 'Conoce a Emma, tu editora jefa.',
      badgeRole: 'EDITORA JEFA',
      badgeCity: 'DUBLÍN',
      cards: [
        { title: 'Ella guarda el brief', body: 'Mantiene el objetivo, el público, la voz, el contexto y las decisiones anteriores siempre a la vista, para que el trabajo no se desvíe.' },
        { title: 'Ella dirige la redacción', body: 'Mueve cada pieza del brief al borrador, la revisión y la aprobación sin perder el hilo.' },
        { title: 'Ella convoca a los especialistas', body: 'Envía trabajo de afirmaciones, SEO, evidencia, voz, enlaces, riesgo y entrega al especialista adecuado, en el momento adecuado.' },
        { title: 'Ella protege tu autoridad', body: 'Emma puede recomendar y preparar. Solo el Editor puede aprobar.' },
      ],
    },
    commitments: {
      eyebrow: 'La constitución editorial',
      h2: 'Los cuatro compromisos de Emma.',
      body: 'Los estándares que Emma mantiene en cada trabajo: las reglas que hacen que la redacción sea fiable.',
      panelTitle: 'Mantenidos en cada trabajo',
      panelLabel: 'CUATRO COMPROMISOS',
      items: [
        { num: '01', title: 'La verdad ante todo', body: 'Sin cifras inventadas. Sin afirmaciones sin respaldo. Sin fingir que una evidencia débil es sólida.' },
        { num: '02', title: 'Dice lo honesto', body: 'Emma no adula un mal borrador. Te dice qué necesita trabajo.' },
        { num: '03', title: 'Protege tu trabajo', body: 'Nada se publica sin la aprobación del Editor.' },
        { num: '04', title: 'Recuerda lo que importa', body: 'Emma aprende los estándares, la voz y las decisiones que dan forma al proyecto.' },
      ],
    },
    canvas: {
      eyebrow: 'La superficie de trabajo',
      h2: 'Una sola superficie para el texto real.',
      body: 'El Canvas es donde Emma reúne el trabajo: páginas importadas, borradores, reescrituras, notas de revisión, hallazgos de especialistas y decisiones de aprobación.',
      points: [
        'Importa, redacta, reescribe, corrige y revisa en un solo lugar.',
        'Los hallazgos de los especialistas llegan como notas al margen, no reuniones.',
        'La aprobación final sigue siendo siempre necesaria.',
      ],
      docLabel: 'guia-de-lanzamiento.md · Emma editando',
      draftLabel: 'BORRADOR · §1&ndash;§4',
      docHeading: 'Lanzar con confianza',
      sectionLabel: '§3 · PRUEBA',
      marginLabel: 'NOTAS AL MARGEN',
      marginNotes: [
        { tag: 'AFIRMACIONES', text: 'La afirmación necesita una fuente antes de aprobarse.' },
        { tag: 'BRIEF', text: 'Esta sección se ha desviado del brief.' },
        { tag: 'VOZ', text: 'La voz es demasiado genérica aquí.' },
        { tag: 'METADATOS', text: 'La opción B de metadatos es la más sólida.' },
      ],
      footerLeft: 'La aprobación final sigue siendo necesaria',
      footerRight: 'de vuelta al Editor',
      annotation: 'una superficie, no pestañas',
    },
    specialists: {
      eyebrow: 'El equipo de especialistas',
      h2Suffix: ' especialistas. Una editora jefa.',
      body: 'Emma no trabaja sola. Detrás de ella está todo el equipo de especialistas de Word Presto: producción de contenido, SEO, operaciones y gobernanza de aprobación, cada uno con un rol y un lugar definidos en el flujo de trabajo.',
      note: 'Emma convoca al especialista adecuado en el momento adecuado, y luego devuelve los hallazgos que necesitan el criterio del Editor.',
      teamsSuffix: ' equipos',
      coordinatedThroughEmma: 'coordinados a través de Emma',
      editorApprovalRequired: 'Aprobación del Editor requerida',
      chipsLabel: 'Algunos de los especialistas que Emma puede convocar:',
      browseProfiles: 'Ver perfiles de especialistas',
      teamLabel: 'EQUIPO',
      specialistSingular: 'ESPECIALISTA',
      specialistPlural: 'ESPECIALISTAS',
    },
    languages: {
      eyebrow: 'Voz nativa',
      h2: 'El mismo estándar. Voz nativa.',
      body: 'Cuando trabajas en otro idioma, no recibes a Emma traducida. Recibes una editora jefa que dirige la misma redacción en su propio idioma y estilo.',
      closingText: 'Seis editoras. Un solo estándar.',
      editors: [
        { name: 'Emma', city: 'Dublín', lang: 'Inglés' },
        { name: 'Aurora', city: 'Lisboa', lang: 'Portugués' },
        { name: 'Francisca', city: 'São Paulo', lang: 'Portugués de Brasil' },
        { name: 'Sofía', city: 'Madrid', lang: 'Español' },
        { name: 'Sabine', city: 'Berlín', lang: 'Alemán' },
        { name: 'Ambre', city: 'París', lang: 'Francés' },
      ],
    },
    approval: {
      eyebrow: 'La puerta de salida',
      h2: 'Solo el Editor puede aprobar el trabajo.',
      body: 'Emma puede preparar el trabajo. Los especialistas pueden revisarlo. El Canvas puede organizarlo. Pero solo el Editor puede aprobarlo.',
      finalLine: 'Nada sale en directo hasta que la persona responsable dice que sí.',
      docTitle: 'Aprobación',
      filename: 'guia-de-lanzamiento.md',
      row1: 'Resumen de la redacción de Emma',
      row1Status: 'Preparado',
      row2: 'Revisiones de especialistas',
      row2Status: 'Listas',
      row3: 'Visto bueno del Editor',
      row3Status: 'a la espera',
      approvedByLabel: 'aprobado por',
      stampText: 'Aprobado',
      pillText: 'el Editor tiene la última palabra',
    },
    publish: {
      eyebrow: 'Escribe una vez · Publica en todas partes',
      h2: 'Una idea aprobada, lista para cada canal.',
      body: 'Word Presto prepara versiones listas para cada canal, para tus redes sociales y tu CMS, estructuradas, fieles a la marca y coherentes. Nada se publica hasta que una persona lo aprueba.',
      sourceKicker: 'Fuente aprobada por personas',
      sourceTitle: 'Contenido aprobado',
      sourceNote1: 'Claro. Preciso. Fiel a la marca.',
      sourceNote2: 'Escribe una vez, adapta en todas partes.',
      connector: 'Publica en',
      socialLabel: 'Redes sociales',
      cmsLabel: 'CMS y entrega',
      readyStatus: 'Listo',
      footerLead: 'Los agentes preparan cada versión.',
      footerEmphasis: 'La decisión sigue siendo de las personas',
      footerTail: 'Aprobación humana antes de publicar nada.',
    },
    cta: {
      h2: 'Pon a Emma en el centro de tu operación de contenido.',
      body: 'Para redactores, editores y equipos de publicación que necesitan un mejor trabajo de contenido sin renunciar al control editorial.',
      ctaPrimary: 'Únete ahora',
      ctaSecondary: 'Ver la redacción',
      markText: 'PAPEL · TINTA · SEÑAL · CONTROL',
    },
    footer: {
      deskHeading: 'La redacción',
      deskLinks: ['Emma dirige la redacción', 'El Canvas', 'Mesa de especialistas'],
      standardsHeading: 'Estándares',
      standardsLinks: ['Cuatro compromisos', 'Aprobación del Editor', 'Voz nativa'],
      forHeading: 'Para',
      forLinks: ['Redactores', 'Editores', 'Equipos de publicación'],
      copyright: '© 2026 Word Presto',
      tagline2: 'Emma prepara · el Editor aprueba',
    },
  },

  de: {
    seo: {
      pageTitle: 'Word Presto ist die agentische Content-Engine für Autoren, Redakteure und Publishing-Teams.',
      seoTitle: 'Content-Workflow-Engine für Autoren und Publishing-Teams | Word Presto',
      metaDescription: 'Planen, briefen, schreiben, prüfen, verbessern und Inhalte für Suche, Leser und CMS-Übergabe vorbereiten.',
    },
    hero: {
      eyebrow: 'die Content-Engine hinter besserem Publizieren',
      h1Prefix: 'Word Presto ist die ',
      h1Agentic: 'agentische',
      h1Suffix: ' Content-Engine für Autoren, Redakteure und Publishing-Teams.',
      body: 'Im Zentrum steht Emma, Ihre Chefredakteurin. Sie hält Briefing, Entwurf, Belege, SEO, Review und Freigabe an einer ruhigen Redaktionsschaltstelle zusammen, während Sie die letzte Entscheidung behalten.',
      approvalNoteLine1: 'Emma bereitet vor. Der Editor gibt frei.',
      approvalNoteLine2: 'Nichts wird veröffentlicht ohne Ihre Freigabe.',
      ctaPrimary: 'Jetzt beitreten',
      ctaSecondary: 'Die Redaktion ansehen',
      demoLink: 'Sehen Sie, wie eine grobe Idee review-reif wird',
      preparesLabel: 'bereitet Inhalte vor für',
    },
    board: {
      note: 'Ihre Redaktion, koordiniert',
      title: 'Redaktionelles Lagebild',
      liveLabel: 'REDAKTION · LIVE',
      editorInChief: 'CHEFREDAKTEUR',
      you: 'Sie',
      finalCall: 'die letzte Entscheidung',
      emmaRole: 'CHEFREDAKTEURIN',
      emmaSub: 'Hält Briefing, Entwurf und Review in Bewegung',
      preparing: 'In Vorbereitung',
      canvasLabel: 'CANVAS · launch-guide',
      workingSurface: 'die Arbeitsfläche',
      chip1: 'Vera · prüft Behauptungen',
      chip2: 'Stimme · driftet §2',
      specialistDesk: 'Spezialisten-Team',
      reportsThroughEmma: 'berichtet über Emma',
      gateApproval: 'Freigabe durch Editor erforderlich',
      gateCms: 'Bereit für CMS-Übergabe',
      stamp: 'Freigabe ausstehend',
    },
    operatingModel: {
      eyebrow: 'Das Betriebsmodell',
      h2: 'Das ist kein weiteres Content-Dashboard.',
      body: 'Die meiste Content-Arbeit scheitert nicht, weil Menschen nicht schreiben können. Sie scheitert, weil sich das Briefing ändert, Reviews zu spät kommen, Behauptungen ihre Quellen verlieren, SEO erst am Ende angeflanscht wird und niemand weiß, wer was freigegeben hat.',
      note: 'Word Presto gibt der Arbeit eine Redaktion. Emma leitet sie.',
      beforeLabel: 'VORHER · VERSTREUT',
      beforeCards: [
        { title: 'Vages Briefing', body: 'Niemand hat geklärt, wofür die Seite da ist.', note: '?' },
        { title: 'Überarbeitung kam zu spät', body: 'Anmerkungen kamen, nachdem der Entwurf fertig war.' },
        { title: 'Behauptung ohne Beleg', body: 'Ging trotzdem weiter.', note: 'Quelle?' },
        { title: 'Unklare Freigabe', body: 'Wer hat das eigentlich abgesegnet?' },
      ],
      emmaRole: 'CHEFREDAKTEURIN',
      afterLabel: 'NACHHER · EINE REDAKTION',
      afterHeader: 'Die Redaktion, geordnet',
      afterItems: [
        'Briefing abgestimmt und dokumentiert',
        'SEO im Entwurf geprüft, nicht danach',
        'Behauptungen tragen ihre Belege',
        'Freigabe liegt beim Editor',
      ],
    },
    emmaDesk: {
      eyebrow: 'Im Zentrum der Redaktion',
      h2: 'Lernen Sie Emma kennen, Ihre Chefredakteurin.',
      badgeRole: 'CHEFREDAKTEURIN',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'Sie hält das Briefing fest', body: 'Behält Ziel, Zielgruppe, Stimme, Kontext und frühere Entscheidungen im Blick, damit die Arbeit nicht abdriftet.' },
        { title: 'Sie leitet die Redaktion', body: 'Bewegt jedes Stück vom Briefing über Entwurf, Korrektur, Review bis zur Freigabe, ohne den Faden zu verlieren.' },
        { title: 'Sie holt die Spezialisten', body: 'Schickt Arbeit zu Behauptungen, SEO, Belegen, Stimme, Links, Risiko und Übergabe zur richtigen Zeit an die richtige Spezialistin.' },
        { title: 'Sie schützt Ihre Entscheidungsgewalt', body: 'Emma kann empfehlen und vorbereiten. Nur der Editor kann freigeben.' },
      ],
    },
    commitments: {
      eyebrow: 'Die redaktionelle Verfassung',
      h2: 'Emmas vier Grundsätze.',
      body: 'Die Standards, an die sich Emma bei jedem Stück Arbeit hält: die Regeln, die die Redaktion vertrauenswürdig machen.',
      panelTitle: 'Gilt für jedes Stück Arbeit',
      panelLabel: 'VIER GRUNDSÄTZE',
      items: [
        { num: '01', title: 'Wahrheit über allem', body: 'Keine erfundenen Zahlen. Keine unbelegten Behauptungen. Kein Vortäuschen, dass schwache Belege stark seien.' },
        { num: '02', title: 'Sagt die ehrliche Meinung', body: 'Emma schmeichelt keinem schwachen Entwurf. Sie sagt Ihnen, was noch Arbeit braucht.' },
        { num: '03', title: 'Schützt Ihre Arbeit', body: 'Nichts wird veröffentlicht ohne die Freigabe des Editors.' },
        { num: '04', title: 'Merkt sich, was zählt', body: 'Emma lernt die Standards, die Stimme und die Entscheidungen, die das Projekt prägen.' },
      ],
    },
    canvas: {
      eyebrow: 'Die Arbeitsfläche',
      h2: 'Eine Arbeitsfläche für den eigentlichen Text.',
      body: 'Im Canvas bringt Emma die Arbeit zusammen: importierte Seiten, Entwürfe, Überarbeitungen, Korrekturnotizen, Erkenntnisse der Spezialisten und Freigabeentscheidungen.',
      points: [
        'Importieren, entwerfen, überarbeiten, korrigieren und reviewen an einem Ort.',
        'Erkenntnisse der Spezialisten kommen als Randnotizen, nicht als Meetings.',
        'Die finale Freigabe bleibt immer erforderlich.',
      ],
      docLabel: 'launch-guide.md · Emma bearbeitet',
      draftLabel: 'ENTWURF · §1&ndash;§4',
      docHeading: 'Mit Zuversicht starten',
      sectionLabel: '§3 · BELEGE',
      marginLabel: 'RANDNOTIZEN',
      marginNotes: [
        { tag: 'BEHAUPTUNGEN', text: 'Behauptung braucht vor der Freigabe eine Quelle.' },
        { tag: 'BRIEFING', text: 'Dieser Abschnitt ist vom Briefing abgewichen.' },
        { tag: 'STIMME', text: 'Die Stimme ist hier zu generisch.' },
        { tag: 'METADATEN', text: 'Metadaten-Option B ist am stärksten.' },
      ],
      footerLeft: 'Finale Freigabe bleibt erforderlich',
      footerRight: 'zurück an den Editor',
      annotation: 'eine Fläche, keine Tabs',
    },
    specialists: {
      eyebrow: 'Das Spezialisten-Team',
      h2Suffix: ' Spezialisten. Eine Chefredakteurin.',
      body: 'Emma arbeitet nicht allein. Hinter ihr steht das gesamte Word-Presto-Spezialisten-Team: Content-Produktion, SEO, Betrieb und Freigabe-Governance, jede und jeder mit klar definierter Rolle und Platz im Workflow.',
      note: 'Emma holt zur richtigen Zeit die richtige Spezialistin dazu und gibt dann die Erkenntnisse zurück, die das Urteil des Editors brauchen.',
      teamsSuffix: ' Teams',
      coordinatedThroughEmma: 'koordiniert über Emma',
      editorApprovalRequired: 'Freigabe durch Editor erforderlich',
      chipsLabel: 'Ein paar der Spezialisten, die Emma hinzuziehen kann:',
      browseProfiles: 'Alle Spezialisten-Profile ansehen',
      teamLabel: 'TEAM',
      specialistSingular: 'SPEZIALIST',
      specialistPlural: 'SPEZIALISTEN',
    },
    languages: {
      eyebrow: 'Muttersprachliche Stimme',
      h2: 'Gleicher Standard. Muttersprachliche Stimme.',
      body: 'Wenn Sie in einer anderen Sprache arbeiten, bekommen Sie nicht Emma übersetzt. Sie bekommen eine Chefredakteurin, die dieselbe Redaktion in ihrer eigenen Sprache und Ausdrucksweise leitet.',
      closingText: 'Sechs Chefredakteurinnen. Ein Standard.',
      editors: [
        { name: 'Emma', city: 'Dublin', lang: 'Englisch' },
        { name: 'Aurora', city: 'Lissabon', lang: 'Portugiesisch' },
        { name: 'Francisca', city: 'São Paulo', lang: 'Brasilianisches Portugiesisch' },
        { name: 'Sofía', city: 'Madrid', lang: 'Spanisch' },
        { name: 'Sabine', city: 'Berlin', lang: 'Deutsch' },
        { name: 'Ambre', city: 'Paris', lang: 'Französisch' },
      ],
    },
    approval: {
      eyebrow: 'Das Tor',
      h2: 'Nur der Editor kann die Arbeit freigeben.',
      body: 'Emma kann die Arbeit vorbereiten. Spezialisten können sie reviewen. Das Canvas kann sie organisieren. Aber nur der Editor kann sie freigeben.',
      finalLine: 'Nichts geht live, bevor die verantwortliche Person Ja sagt.',
      docTitle: 'Freigabe',
      filename: 'launch-guide.md',
      row1: 'Emmas Redaktionszusammenfassung',
      row1Status: 'Vorbereitet',
      row2: 'Spezialisten-Reviews',
      row2Status: 'Eingegangen',
      row3: 'Freigabe durch Editor',
      row3Status: 'wartet auf Sie',
      approvedByLabel: 'freigegeben von',
      stampText: 'Freigegeben',
      pillText: 'der Editor hat den Stift in der Hand',
    },
    publish: {
      eyebrow: 'Einmal schreiben · Überall veröffentlichen',
      h2: 'Eine freigegebene Idee, bereit für jeden Kanal.',
      body: 'Word Presto bereitet kanalfertige Versionen für Ihre sozialen Plattformen und Ihr CMS vor, strukturiert, markengerecht und konsistent. Nichts geht live, bevor ein Mensch es freigibt.',
      sourceKicker: 'Von Menschen freigegebene Quelle',
      sourceTitle: 'Freigegebener Inhalt',
      sourceNote1: 'Klar. Präzise. Markengerecht.',
      sourceNote2: 'Einmal schreiben, überall anpassen.',
      connector: 'Veröffentlicht auf',
      socialLabel: 'Soziale Kanäle',
      cmsLabel: 'CMS & Auslieferung',
      readyStatus: 'Bereit',
      footerLead: 'Die Agenten bereiten jede Version vor.',
      footerEmphasis: 'Die Entscheidung treffen weiterhin Menschen',
      footerTail: 'Menschliche Freigabe, bevor etwas live geht.',
    },
    cta: {
      h2: 'Stellen Sie Emma ins Zentrum Ihrer Content-Arbeit.',
      body: 'Für Autoren, Redakteure und Publishing-Teams, die bessere Content-Arbeit wollen, ohne die redaktionelle Kontrolle abzugeben.',
      ctaPrimary: 'Jetzt beitreten',
      ctaSecondary: 'Die Redaktion ansehen',
      markText: 'PAPIER · TINTE · SIGNAL · KONTROLLE',
    },
    footer: {
      deskHeading: 'Die Redaktion',
      deskLinks: ['Emma leitet die Redaktion', 'Das Canvas', 'Spezialisten-Team'],
      standardsHeading: 'Standards',
      standardsLinks: ['Vier Grundsätze', 'Freigabe durch Editor', 'Muttersprachliche Stimme'],
      forHeading: 'Für',
      forLinks: ['Autoren', 'Redakteure', 'Publishing-Teams'],
      copyright: '© 2026 Word Presto',
      tagline2: 'Emma bereitet vor · der Editor gibt frei',
    },
  },

  fr: {
    seo: {
      pageTitle: 'Word Presto est le moteur de contenu agentique pour les rédacteurs, éditeurs et équipes de publication.',
      seoTitle: 'Moteur de workflow de contenu pour rédacteurs et équipes de publication | Word Presto',
      metaDescription: 'Planifiez, briefez, rédigez, révisez, améliorez et préparez le contenu pour la recherche, les lecteurs et la remise au CMS.',
    },
    hero: {
      eyebrow: 'le moteur de contenu derrière la publication',
      h1Prefix: 'Word Presto est le moteur de contenu ',
      h1Agentic: 'agentique',
      h1Suffix: ' pour les rédacteurs, éditeurs et équipes de publication.',
      body: 'Au centre se trouve Emma, votre rédactrice en chef. Elle fait avancer le brief, le brouillon, les preuves, le SEO, la révision et la validation depuis un seul bureau éditorial serein, tandis que vous gardez le dernier mot.',
      approvalNoteLine1: 'Emma prépare. L’Éditeur valide.',
      approvalNoteLine2: 'Rien n’est publié sans votre feu vert.',
      ctaPrimary: 'Rejoindre maintenant',
      ctaSecondary: 'Voir le bureau éditorial',
      demoLink: 'Voyez une idée brute devenir prête à réviser',
      preparesLabel: 'prépare du contenu pour',
    },
    board: {
      note: 'votre bureau, coordonné',
      title: 'Tableau des opérations éditoriales',
      liveLabel: 'BUREAU · EN DIRECT',
      editorInChief: 'RÉDACTEUR EN CHEF',
      you: 'Vous',
      finalCall: 'la décision finale',
      emmaRole: 'RÉDACTRICE EN CHEF',
      emmaSub: 'Fait avancer le brief, le brouillon et la révision',
      preparing: 'En préparation',
      canvasLabel: 'CANVAS · guide-de-lancement',
      workingSurface: 'la surface de travail',
      chip1: 'Vera · vérifie les affirmations',
      chip2: 'Ton · dérive §2',
      specialistDesk: 'Équipe de spécialistes',
      reportsThroughEmma: 'rend compte via Emma',
      gateApproval: 'Validation de l’Éditeur requise',
      gateCms: 'Prêt pour la remise au CMS',
      stamp: 'En attente de validation',
    },
    operatingModel: {
      eyebrow: 'Le modèle de fonctionnement',
      h2: 'Ce n’est pas un tableau de bord de contenu de plus.',
      body: 'La plupart des projets de contenu échouent, pas parce que les gens ne savent pas écrire. Ils échouent parce que le brief change, les révisions arrivent tard, les affirmations perdent leurs sources, le SEO est ajouté à la fin, et personne ne sait qui a validé quoi.',
      note: 'Word Presto donne au travail un bureau. Emma le dirige.',
      beforeLabel: 'AVANT · ÉPARPILLÉ',
      beforeCards: [
        { title: 'Brief vague', body: 'Personne ne s’est mis d’accord sur l’objet de la page.', note: '?' },
        { title: 'Révision arrivée tard', body: 'Les notes sont arrivées après le brouillon terminé.' },
        { title: 'Affirmation sans preuve', body: 'Publiée quand même.', note: 'source ?' },
        { title: 'Validation confuse', body: 'Qui a donné son accord ?' },
      ],
      emmaRole: 'RÉDACTRICE EN CHEF',
      afterLabel: 'APRÈS · UN SEUL BUREAU',
      afterHeader: 'Le bureau, dans l’ordre',
      afterItems: [
        'Brief validé et archivé',
        'SEO vérifié dans le brouillon, pas après',
        'Les affirmations portent leurs preuves',
        'La validation revient à l’Éditeur',
      ],
    },
    emmaDesk: {
      eyebrow: 'Au centre du bureau',
      h2: 'Découvrez Emma, votre rédactrice en chef.',
      badgeRole: 'RÉDACTRICE EN CHEF',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'Elle garde le brief en tête', body: 'Garde l’objectif, le public, le ton, le contexte et les décisions précédentes en vue, pour que le travail ne dérive pas.' },
        { title: 'Elle dirige le bureau', body: 'Fait avancer chaque élément du brief au brouillon, à la relecture, à la révision et à la validation sans perdre le fil.' },
        { title: 'Elle fait appel aux spécialistes', body: 'Envoie le travail sur les affirmations, le SEO, les preuves, le ton, les liens, les risques et la remise au bon spécialiste, au bon moment.' },
        { title: 'Elle protège votre autorité', body: 'Emma peut recommander et préparer. Seul l’Éditeur peut valider.' },
      ],
    },
    commitments: {
      eyebrow: 'La constitution éditoriale',
      h2: 'Les quatre engagements d’Emma.',
      body: 'Les standards qu’Emma respecte sur chaque projet : les règles qui rendent le bureau fiable.',
      panelTitle: 'Respectés sur chaque projet',
      panelLabel: 'QUATRE ENGAGEMENTS',
      items: [
        { num: '01', title: 'La vérité avant tout', body: 'Aucun chiffre inventé. Aucune affirmation sans preuve. Jamais faire passer une preuve faible pour solide.' },
        { num: '02', title: 'Dit ce qui est honnête', body: 'Emma ne flattera pas un mauvais brouillon. Elle vous dit ce qui doit être retravaillé.' },
        { num: '03', title: 'Protège votre travail', body: 'Rien n’est publié sans la validation de l’Éditeur.' },
        { num: '04', title: 'Se souvient de ce qui compte', body: 'Emma apprend les standards, le ton et les décisions qui façonnent le projet.' },
      ],
    },
    canvas: {
      eyebrow: 'La surface de travail',
      h2: 'Une seule surface pour le texte lui-même.',
      body: 'Le Canvas est l’endroit où Emma rassemble le travail : pages importées, brouillons, réécritures, notes de relecture, conclusions des spécialistes et décisions de validation.',
      points: [
        'Importez, rédigez, réécrivez, relisez et révisez au même endroit.',
        'Les conclusions des spécialistes arrivent en notes de marge, pas en réunions.',
        'La validation finale reste toujours nécessaire.',
      ],
      docLabel: 'guide-de-lancement.md · Emma en cours d’édition',
      draftLabel: 'BROUILLON · §1&ndash;§4',
      docHeading: 'Se lancer en toute confiance',
      sectionLabel: '§3 · PREUVES',
      marginLabel: 'NOTES DE MARGE',
      marginNotes: [
        { tag: 'AFFIRMATIONS', text: 'Cette affirmation a besoin d’une source avant validation.' },
        { tag: 'BRIEF', text: 'Cette section s’est éloignée du brief.' },
        { tag: 'TON', text: 'Le ton est trop générique ici.' },
        { tag: 'MÉTADONNÉES', text: 'L’option B de métadonnées est la plus solide.' },
      ],
      footerLeft: 'La validation finale reste nécessaire',
      footerRight: 'retour à l’Éditeur',
      annotation: 'une surface, pas des onglets',
    },
    specialists: {
      eyebrow: 'L’équipe de spécialistes',
      h2Suffix: ' spécialistes. Une seule rédactrice en chef.',
      body: 'Emma ne travaille pas seule. Derrière elle se trouve toute l’équipe de spécialistes Word Presto : production de contenu, SEO, opérations et gouvernance de validation, chacun avec un rôle et une place définis dans le workflow.',
      note: 'Emma fait appel au bon spécialiste au bon moment, puis renvoie les conclusions qui nécessitent le jugement de l’Éditeur.',
      teamsSuffix: ' équipes',
      coordinatedThroughEmma: 'coordonnées via Emma',
      editorApprovalRequired: 'Validation de l’Éditeur requise',
      chipsLabel: 'Quelques-uns des spécialistes qu’Emma peut mobiliser :',
      browseProfiles: 'Voir les profils des spécialistes',
      teamLabel: 'ÉQUIPE',
      specialistSingular: 'SPÉCIALISTE',
      specialistPlural: 'SPÉCIALISTES',
    },
    languages: {
      eyebrow: 'Voix native',
      h2: 'Même standard. Voix native.',
      body: 'Quand vous travaillez dans une autre langue, vous ne récupérez pas Emma traduite. Vous obtenez une rédactrice en chef qui dirige le même bureau dans sa propre langue et son propre style.',
      closingText: 'Six rédactrices en chef. Un seul standard.',
      editors: [
        { name: 'Emma', city: 'Dublin', lang: 'Anglais' },
        { name: 'Aurora', city: 'Lisbonne', lang: 'Portugais' },
        { name: 'Francisca', city: 'São Paulo', lang: 'Portugais du Brésil' },
        { name: 'Sofía', city: 'Madrid', lang: 'Espagnol' },
        { name: 'Sabine', city: 'Berlin', lang: 'Allemand' },
        { name: 'Ambre', city: 'Paris', lang: 'Français' },
      ],
    },
    approval: {
      eyebrow: 'Le verrou',
      h2: 'Seul l’Éditeur peut valider le travail.',
      body: 'Emma peut préparer le travail. Les spécialistes peuvent le réviser. Le Canvas peut l’organiser. Mais seul l’Éditeur peut le valider.',
      finalLine: 'Rien n’est mis en ligne avant que la personne responsable dise oui.',
      docTitle: 'Validation',
      filename: 'guide-de-lancement.md',
      row1: 'Résumé du bureau d’Emma',
      row1Status: 'Préparé',
      row2: 'Révisions des spécialistes',
      row2Status: 'Reçues',
      row3: 'Feu vert de l’Éditeur',
      row3Status: 'en attente',
      approvedByLabel: 'validé par',
      stampText: 'Validé',
      pillText: 'l’Éditeur a le dernier mot',
    },
    publish: {
      eyebrow: 'Écrivez une fois · Publiez partout',
      h2: 'Une idée approuvée, prête pour chaque canal.',
      body: "Word Presto prépare des versions prêtes pour chaque canal, pour vos réseaux sociaux et votre CMS, structurées, fidèles à la marque et cohérentes. Rien n'est publié tant qu'une personne ne l'a pas approuvé.",
      sourceKicker: 'Source approuvée par des humains',
      sourceTitle: 'Contenu approuvé',
      sourceNote1: 'Clair. Précis. Fidèle à la marque.',
      sourceNote2: 'Écrivez une fois, adaptez partout.',
      connector: 'Publie sur',
      socialLabel: 'Réseaux sociaux',
      cmsLabel: 'CMS et diffusion',
      readyStatus: 'Prêt',
      footerLead: 'Les agents préparent chaque version.',
      footerEmphasis: 'La décision revient toujours aux humains',
      footerTail: 'Validation humaine avant toute mise en ligne.',
    },
    cta: {
      h2: 'Placez Emma au centre de votre production de contenu.',
      body: 'Pour les rédacteurs, éditeurs et équipes de publication qui veulent un meilleur travail de contenu sans renoncer au contrôle éditorial.',
      ctaPrimary: 'Rejoindre maintenant',
      ctaSecondary: 'Voir le bureau éditorial',
      markText: 'PAPIER · ENCRE · SIGNAL · CONTRÔLE',
    },
    footer: {
      deskHeading: 'Le bureau',
      deskLinks: ['Emma dirige le bureau', 'Le Canvas', 'Équipe de spécialistes'],
      standardsHeading: 'Standards',
      standardsLinks: ['Quatre engagements', 'Validation de l’Éditeur', 'Voix native'],
      forHeading: 'Pour',
      forLinks: ['Rédacteurs', 'Éditeurs', 'Équipes de publication'],
      copyright: '© 2026 Word Presto',
      tagline2: 'Emma prépare · l’Éditeur valide',
    },
  },
};
