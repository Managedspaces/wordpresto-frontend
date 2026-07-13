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
    cmsStatus: string;
    cmsNote: string;
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
      body: 'Word Presto adapts one approved idea into channel-ready versions for social, and reviews and improves the content already on your site, ready for handoff. Nothing goes live until a person approves it.',
      sourceKicker: 'Human-approved source',
      sourceTitle: 'Approved Content',
      sourceNote1: 'Clear. Accurate. On brand.',
      sourceNote2: 'Write once, adapt everywhere.',
      connector: 'Prepared for',
      socialLabel: 'Social channels',
      cmsLabel: 'Website & CMS',
      readyStatus: 'Ready',
      cmsStatus: 'Connected',
      cmsNote: 'Import, improve and hand corrections back.',
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
      pageTitle: 'Word Presto é o motor de conteúdo orientado por agentes para escritores, editores e equipas editoriais.',
      seoTitle: 'Motor de fluxo de trabalho de conteúdos para escritores e equipas editoriais | Word Presto',
      metaDescription: 'Planear, definir o briefing, escrever, rever, melhorar e preparar conteúdos para motores de busca, leitores e entrega ao CMS.',
    },
    hero: {
      eyebrow: 'o motor de conteúdos por detrás da publicação',
      h1Prefix: 'Word Presto é o',
      h1Agentic: 'orientado por agentes',
      h1Suffix: 'motor de conteúdos para escritores, editores e equipas editoriais.',
      body: 'No centro está a Emma, a sua editora-chefe. Ela mantém o briefing, o rascunho, as evidências, o SEO, a revisão e a aprovação a fluir por uma secretária editorial calma, enquanto o senhor mantém a palavra final.',
      approvalNoteLine1: 'A Emma prepara. O editor aprova.',
      approvalNoteLine2: 'Nada é publicado sem a sua aprovação.',
      ctaPrimary: 'Inscreva-se agora',
      ctaSecondary: 'Veja a secretária editorial',
      demoLink: 'Veja o pensamento inicial tornar-se pronto para revisão',
      preparesLabel: 'prepara conteúdos para',
    },
    board: {
      note: 'a sua secretária, coordenada',
      title: 'Painel de Operações Editoriais',
      liveLabel: 'SECRETÁRIA · AO VIVO',
      editorInChief: 'EDITOR-CHEFE',
      you: 'O senhor',
      finalCall: 'a decisão final',
      emmaRole: 'EDITOR-CHEFE',
      emmaSub: 'Manter o briefing, o rascunho e a revisão em andamento',
      preparing: 'Preparação',
      canvasLabel: 'CANVAS · guia de lançamento',
      workingSurface: 'a superfície de trabalho',
      chip1: 'Vera · verificação de alegações',
      chip2: 'Voz · à deriva §2',
      specialistDesk: 'Balcão especializado',
      reportsThroughEmma: 'relatórios através da Emma',
      gateApproval: 'É necessária aprovação do editor',
      gateCms: 'Pronto para entrega ao CMS',
      stamp: 'A aguardar validação',
    },
    operatingModel: {
      eyebrow: 'O modelo operacional',
      h2: 'Este não é mais um painel de conteúdos.',
      body: 'A maior parte do trabalho de conteúdos não falha porque as pessoas não sabem escrever. Falha porque o briefing muda, as revisões chegam tarde, as alegações perdem as fontes, o SEO é adicionado no final e ninguém sabe quem aprovou o quê.',
      note: 'O Word Presto dá um balcão ao trabalho. A Emma gere-o.',
      beforeLabel: 'ANTES · DISPERSOS',
      beforeCards: [
        { title: 'Briefing vago', body: 'Ninguém concordou com o objetivo da página.', note: '?' },
        { title: 'A reescrita chegou tarde', body: 'As notas chegaram depois de o rascunho estar concluído.' },
        { title: 'Alegação sem provas', body: 'Avançou na mesma.', note: 'fonte?' },
        { title: 'Aprovação confusa', body: 'Quem aprovou isto?' },
      ],
      emmaRole: 'EDITOR-CHEFE',
      afterLabel: 'DEPOIS · UM BALCÃO',
      afterHeader: 'O balcão, em ordem',
      afterItems: [
        'Briefing acordado e arquivado',
        'O SEO foi verificado no rascunho, e não depois',
        'As alegações trazem consigo as respetivas provas',
        'A aprovação cabe ao Editor',
      ],
    },
    emmaDesk: {
      eyebrow: 'No centro da secretária',
      h2: 'Conheça a Emma, a sua editora-chefe.',
      badgeRole: 'EDITOR-CHEFE',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'É ela quem está a tratar do assunto', body: 'Mantém em vista o objetivo, o público, o tom, o contexto e as decisões anteriores, para que o trabalho não se desvie.' },
        { title: 'É ela que gere a secretária', body: 'Conduz cada trabalho desde o briefing até ao rascunho, revisão, análise e aprovação, sem perder o fio à meada.' },
        { title: 'Ela recorre aos especialistas', body: 'Encaminha reclamações, SEO, provas, gravações de voz, links, riscos e transferências para o especialista certo no momento certo.' },
        { title: 'Ela protege a sua autoridade', body: 'Emma pode recomendar e preparar. Apenas o Editor pode aprovar.' },
      ],
    },
    commitments: {
      eyebrow: 'A constituição editorial',
      h2: 'Os quatro compromissos da Emma.',
      body: 'Os padrões que a Emma respeita em cada trabalho: as regras que tornam a secretária digna de confiança.',
      panelTitle: 'Aplicado a cada trabalho',
      panelLabel: 'QUATRO COMPROMISSOS',
      items: [
        { num: '01', title: 'A verdade factual acima de tudo', body: 'Sem números inventados. Sem alegações infundadas. Sem fingir que provas fracas são fortes.' },
        { num: '02', title: 'Diga a verdade', body: 'Emma não vai bajular um rascunho mal feito. Ela diz-lhe o que precisa de ser melhorado.' },
        { num: '03', title: 'Proteja o seu trabalho', body: 'Nada é publicado sem a aprovação do Editor.' },
        { num: '04', title: 'Lembre-se do que é importante', body: 'Emma familiariza-se com as normas, a linha de orientação e as decisões que definem o projeto.' },
      ],
    },
    canvas: {
      eyebrow: 'A superfície de trabalho',
      h2: 'Uma superfície de trabalho para a cópia final.',
      body: 'O Canvas é onde a Emma reúne o trabalho: páginas importadas, rascunhos, reescritas, notas de revisão, conclusões de especialistas e decisões de aprovação.',
      points: [
        'Importe, crie rascunhos, reescreva, reveja e corrija num único local.',
        'As conclusões dos especialistas chegam como notas de margem, não como reuniões.',
        'A aprovação final continua a ser sempre necessária.',
      ],
      docLabel: 'launch-guide.md · Edição da Emma',
      draftLabel: 'RASCUNHO · §1&ndash;§4',
      docHeading: 'Lançar com confiança',
      sectionLabel: '§3 · REVISÃO',
      marginLabel: 'NOTAS DE MARGEM',
      marginNotes: [
        { tag: 'RECLAMAÇÕES', text: 'A afirmação precisa de uma fonte antes de ser aprovada.' },
        { tag: 'RESUMO', text: 'Esta secção desviou-se do resumo.' },
        { tag: 'VOZ', text: 'A voz é demasiado genérica aqui.' },
        { tag: 'METADADOS', text: 'A opção B de metadados é a mais forte.' },
      ],
      footerLeft: 'A aprovação final ainda é necessária',
      footerRight: 'voltar ao Editor',
      annotation: 'uma superfície, sem separadores',
    },
    specialists: {
      eyebrow: 'A bancada de especialistas',
      h2Suffix: 'especialistas. Um editor-chefe.',
      body: 'A Emma não está a trabalhar sozinha. Por trás dela está toda a bancada de especialistas da Word Presto: profissionais de produção de conteúdos, SEO, operações e governança de aprovações, cada um com uma função e um lugar definidos no fluxo de trabalho.',
      note: 'A Emma chama o especialista certo no momento certo, e depois devolve as conclusões que precisam do julgamento do Editor.',
      teamsSuffix: ' equipas',
      coordinatedThroughEmma: 'coordenado através da Emma',
      editorApprovalRequired: 'É necessária aprovação do editor',
      chipsLabel: 'Alguns dos especialistas que a Emma pode trazer:',
      browseProfiles: 'Consultar perfis de especialistas',
      teamLabel: 'EQUIPA',
      specialistSingular: 'ESPECIALISTA',
      specialistPlural: 'ESPECIALISTAS',
    },
    languages: {
      eyebrow: 'Voz nativa',
      h2: 'O mesmo padrão. Voz nativa.',
      body: 'Quando trabalha noutro idioma, não recebe uma Emma traduzida. Tem um editor-chefe que gere a mesma secção no seu próprio idioma e estilo.',
      closingText: 'Seis editores. Um padrão.',
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
      eyebrow: 'O portão',
      h2: 'Apenas o Editor pode aprovar o trabalho.',
      body: 'A Emma pode preparar o trabalho. Os especialistas podem revê-lo. O Canvas pode organizá-lo. Mas só o Editor pode aprová-lo.',
      finalLine: 'Nada é publicado até que o responsável humano dê o seu aval.',
      docTitle: 'Aprovação',
      filename: 'guia-de-lancamento.md',
      row1: 'Resumo da redação da Emma',
      row1Status: 'Preparado',
      row2: 'Revisões de especialistas',
      row2Status: 'Em',
      row3: 'Aprovação do editor',
      row3Status: 'à sua espera',
      approvedByLabel: 'aprovado por',
      stampText: 'Aprovado',
      pillText: 'o Editor é quem decide',
    },
    publish: {
      eyebrow: 'Escreva uma vez · Publique em todo o lado',
      h2: 'Uma ideia aprovada, pronta para todos os canais.',
      body: 'O Word Presto adapta uma ideia aprovada em versões prontas para publicação nas redes sociais, e revê e melhora o conteúdo já presente no seu site, deixando-o pronto para ser entregue. Nada é publicado sem a aprovação de uma pessoa.',
      sourceKicker: 'Fonte aprovada por pessoas',
      sourceTitle: 'Conteúdo aprovado',
      sourceNote1: 'Claro. Preciso. Em linha com a marca.',
      sourceNote2: 'Escreva uma vez, adapte em todo o lado.',
      connector: 'Elaborado para',
      socialLabel: 'Redes sociais',
      cmsLabel: 'Sítio Web e CMS',
      readyStatus: 'Pronto',
      cmsStatus: 'Ligado',
      cmsNote: 'Importe, melhore e devolva as correções manualmente.',
      footerLead: 'Os agentes preparam cada versão.',
      footerEmphasis: 'As pessoas continuam a tomar a decisão.',
      footerTail: 'Aprovação humana antes de qualquer conteúdo ser publicado.',
    },
    cta: {
      h2: 'Coloque a Emma no centro da sua operação de conteúdos.',
      body: 'Para escritores, editores e equipas editoriais que precisam de melhorar o trabalho de conteúdo sem abdicar do controlo editorial.',
      ctaPrimary: 'Inscreva-se agora',
      ctaSecondary: 'Veja a secretária editorial',
      markText: 'PAPEL · TINTA · SINAL · CONTROLO',
    },
    footer: {
      deskHeading: 'A secretária',
      deskLinks: ['A Emma gere a secretária', 'O Canvas', 'Balcão especializado'],
      standardsHeading: 'Normas',
      standardsLinks: ['Quatro compromissos', 'Aprovação do editor', 'Voz nativa'],
      forHeading: 'Para',
      forLinks: ['Escritores', 'Editores', 'Equipas editoriais'],
      copyright: '© 2026 Word Presto',
      tagline2: 'A Emma prepara · o Editor aprova',
    },
  },

  'pt-br': {
    seo: {
      pageTitle: 'Word Presto é o mecanismo de conteúdo agêntico para escritores, editores e equipes editoriais.',
      seoTitle: 'Mecanismo de fluxo de trabalho de conteúdo para escritores e equipes editoriais | Word Presto',
      metaDescription: 'Planeje, faça o briefing, escreva, revise, melhore e prepare o conteúdo para mecanismos de busca, leitores e entrega ao CMS.',
    },
    hero: {
      eyebrow: 'o mecanismo de conteúdo por trás da publicação',
      h1Prefix: 'Word Presto é o',
      h1Agentic: 'agêntico',
      h1Suffix: 'mecanismo de conteúdo para escritores, editores e equipes editoriais.',
      body: 'No centro está Emma, sua editora-chefe. Ela mantém o briefing, o rascunho, as evidências, o SEO, a revisão e a aprovação fluindo por uma mesa editorial tranquila, enquanto você mantém a palavra final.',
      approvalNoteLine1: 'Emma prepara. O editor aprova.',
      approvalNoteLine2: 'Nada é publicado sem a sua aprovação.',
      ctaPrimary: 'Inscreva-se agora',
      ctaSecondary: 'Veja a mesa editorial',
      demoLink: 'Veja o pensamento inicial se tornar pronto para revisão',
      preparesLabel: 'prepara conteúdo para',
    },
    board: {
      note: 'sua mesa, coordenada',
      title: 'Painel de operações editoriais',
      liveLabel: 'MESA · AO VIVO',
      editorInChief: 'EDITOR-CHEFE',
      you: 'O senhor',
      finalCall: 'a decisão final',
      emmaRole: 'EDITOR-GERENTE',
      emmaSub: 'Mantendo o briefing, o rascunho e a revisão em andamento',
      preparing: 'Preparando',
      canvasLabel: 'CANVAS · guia de lançamento',
      workingSurface: 'a superfície de trabalho',
      chip1: 'Vera · verificando alegações',
      chip2: 'Voz · à deriva §2',
      specialistDesk: 'Secretaria especializada',
      reportsThroughEmma: 'relatórios por meio da Emma',
      gateApproval: 'É necessária aprovação do editor',
      gateCms: 'Pronto para entrega ao CMS',
      stamp: 'Aguardando aprovação final',
    },
    operatingModel: {
      eyebrow: 'O modelo operacional',
      h2: 'Este não é mais um painel de conteúdo.',
      body: 'A maioria dos trabalhos de conteúdo não fracassa porque as pessoas não sabem escrever. Fracassa porque o briefing muda, as revisões chegam atrasadas, as alegações perdem suas fontes, o SEO é acrescentado no final e ninguém sabe quem aprovou o quê.',
      note: 'O Word Presto dá ao trabalho uma mesa. A Emma a administra.',
      beforeLabel: 'ANTES · DISPERSOS',
      beforeCards: [
        { title: 'Briefing vago', body: 'Ninguém concordou sobre a finalidade da página.', note: '?' },
        { title: 'A reescrita chegou atrasada', body: 'As observações vieram depois que o rascunho foi concluído.' },
        { title: 'Alegação, sem evidências', body: 'Seguimos em frente mesmo assim.', note: 'fonte?' },
        { title: 'Aprovação confusa', body: 'Quem aprovou isto?' },
      ],
      emmaRole: 'EDITOR-GERENTE',
      afterLabel: 'DEPOIS · UMA MESA',
      afterHeader: 'A mesa, em ordem',
      afterItems: [
        'Briefing aprovado e arquivado',
        'SEO verificado no rascunho, e não depois',
        'As alegações trazem consigo as provas',
        'A aprovação cabe ao Editor',
      ],
    },
    emmaDesk: {
      eyebrow: 'No centro da mesa de trabalho',
      h2: 'Conheça Emma, sua editora-chefe.',
      badgeRole: 'EDITOR-GERENTE',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'Ela é a responsável pelo briefing', body: 'Mantém em vista o objetivo, o público, o tom, o contexto e as decisões anteriores, para que o trabalho não perca o rumo.' },
        { title: 'Ela gerencia a mesa de trabalho', body: 'Conduz cada peça desde o briefing até o rascunho, a revisão, a análise e a aprovação, sem perder o fio da meada.' },
        { title: 'Ela convoca os especialistas', body: 'Encaminha reclamações, SEO, provas, gravações de voz, links, riscos e tarefas de transferência ao especialista certo no momento certo.' },
        { title: 'Ela protege a sua autoridade', body: 'Emma pode recomendar e preparar. Apenas o Editor pode aprovar.' },
      ],
    },
    commitments: {
      eyebrow: 'A constituição editorial',
      h2: 'Os quatro compromissos da Emma.',
      body: 'Os padrões que Emma segue em cada trabalho: as regras que tornam a mesa de trabalho confiável.',
      panelTitle: 'Aplicado a cada trabalho',
      panelLabel: 'QUATRO COMPROMISSOS',
      items: [
        { num: '01', title: 'A verdade fundamental, acima de tudo', body: 'Sem números inventados. Sem alegações sem fundamento. Sem fingir que evidências fracas são fortes.' },
        { num: '02', title: 'Diga a verdade', body: 'Emma não vai bajular um rascunho ruim. Ela diz o que precisa ser melhorado.' },
        { num: '03', title: 'Proteja o seu trabalho', body: 'Nada é publicado sem a aprovação do Editor.' },
        { num: '04', title: 'Lembre-se do que realmente importa', body: 'Emma conhece os padrões, o tom e as decisões que moldam o projeto.' },
      ],
    },
    canvas: {
      eyebrow: 'A superfície de trabalho',
      h2: 'Uma superfície de trabalho para a cópia em si.',
      body: 'O Canvas é onde Emma reúne o trabalho: páginas importadas, rascunhos, reescritas, anotações de revisão, conclusões de especialistas e decisões de aprovação.',
      points: [
        'Importe, crie rascunhos, reescreva, revise e analise tudo em um só lugar.',
        'As conclusões dos especialistas chegam como notas de margem, não como reuniões.',
        'A aprovação final ainda é necessária, como sempre.',
      ],
      docLabel: 'launch-guide.md · Edição de Emma',
      draftLabel: 'RASCUNHO · §1&ndash;§4',
      docHeading: 'Lançamento com confiança',
      sectionLabel: '§3 · PROVA',
      marginLabel: 'NOTAS DE MARGEM',
      marginNotes: [
        { tag: 'RECLAMAÇÕES', text: 'A afirmação precisa de uma fonte antes da aprovação.' },
        { tag: 'RESUMO', text: 'Esta seção se desviou do resumo.' },
        { tag: 'VOZ', text: 'A voz está muito genérica aqui.' },
        { tag: 'METADADOS', text: 'A opção B de metadados é a mais forte.' },
      ],
      footerLeft: 'A aprovação final ainda é necessária',
      footerRight: 'voltar ao Editor',
      annotation: 'uma superfície única, sem abas',
    },
    specialists: {
      eyebrow: 'A bancada de especialistas',
      h2Suffix: 'especialistas. Um editor-chefe.',
      body: 'Emma não está trabalhando sozinha. Por trás dela está toda a bancada de especialistas da Word Presto: profissionais de produção de conteúdo, SEO, operações e governança de aprovação, cada um com uma função e um lugar definidos no fluxo de trabalho.',
      note: 'A Emma chama o especialista certo na hora certa, e depois devolve os achados que precisam do julgamento do Editor.',
      teamsSuffix: 'equipes',
      coordinatedThroughEmma: 'coordenado por meio de Emma',
      editorApprovalRequired: 'É necessária aprovação do editor',
      chipsLabel: 'Alguns dos especialistas que Emma pode trazer:',
      browseProfiles: 'Explore os perfis dos especialistas',
      teamLabel: 'EQUIPE',
      specialistSingular: 'ESPECIALISTA',
      specialistPlural: 'ESPECIALISTAS',
    },
    languages: {
      eyebrow: 'Voz nativa',
      h2: 'Mesmo padrão. Voz nativa.',
      body: 'Quando você trabalha em outro idioma, não recebe uma Emma traduzida. Você conta com uma editora-chefe que gerencia a mesma editoria em seu próprio idioma e estilo.',
      closingText: 'Seis editores. Um padrão.',
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
      eyebrow: 'O portão',
      h2: 'Somente o Editor pode aprovar o trabalho.',
      body: 'Emma pode preparar o trabalho. Os especialistas podem revisá-lo. O Canvas pode organizá-lo. Mas somente o Editor pode aprová-lo.',
      finalLine: 'Nada entra no ar até que a pessoa responsável dê o sinal verde.',
      docTitle: 'Aprovação',
      filename: 'guia-de-lancamento.md',
      row1: 'Resumo da redação da Emma',
      row1Status: 'Preparado',
      row2: 'Revisões de especialistas',
      row2Status: 'Em',
      row3: 'Aprovação do Editor',
      row3Status: 'à sua espera',
      approvedByLabel: 'aprovado por',
      stampText: 'Aprovado',
      pillText: 'o Editor é quem detém a caneta',
    },
    publish: {
      eyebrow: 'Escreva uma vez · Publique em todos os lugares',
      h2: 'Uma ideia aprovada, pronta para cada canal.',
      body: 'O Word Presto adapta uma ideia aprovada em versões prontas para cada canal, para redes sociais, e revisa e melhora o conteúdo já existente no seu site, deixando-o pronto para a entrega. Nada entra no ar até que uma pessoa o aprove.',
      sourceKicker: 'Fonte aprovada por humanos',
      sourceTitle: 'Conteúdo aprovado',
      sourceNote1: 'Claro. Preciso. Fiel à marca.',
      sourceNote2: 'Escreva uma vez, adapte em todos os lugares.',
      connector: 'Preparado para',
      socialLabel: 'Canais sociais',
      cmsLabel: 'Site e CMS',
      readyStatus: 'Pronto',
      cmsStatus: 'Conectado',
      cmsNote: 'Importe, aprimore e devolva as correções manualmente.',
      footerLead: 'Os agentes preparam cada versão.',
      footerEmphasis: 'As pessoas ainda tomam a decisão final.',
      footerTail: 'Aprovação humana antes de qualquer conteúdo ir ao ar.',
    },
    cta: {
      h2: 'Coloque a Emma no centro da sua operação de conteúdo.',
      body: 'Para redatores, editores e equipes de publicação que precisam de um trabalho de conteúdo de qualidade sem abrir mão do controle editorial.',
      ctaPrimary: 'Inscreva-se agora',
      ctaSecondary: 'Veja a mesa editorial',
      markText: 'PAPEL · TINTA · SINAL · CONTROLE',
    },
    footer: {
      deskHeading: 'A bancada',
      deskLinks: ['A Emma gerencia a bancada', 'O Canvas', 'Secretaria especializada'],
      standardsHeading: 'Padrões',
      standardsLinks: ['Quatro compromissos', 'Aprovação do editor', 'Voz nativa'],
      forHeading: 'Para',
      forLinks: ['Redatores', 'Editores', 'Equipes de publicação'],
      copyright: '© 2026 Word Presto',
      tagline2: 'A Emma prepara · o editor aprova',
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
      body: 'Word Presto adapta una idea aprobada en versiones listas para redes sociales, y revisa y mejora el contenido que ya está en tu sitio, listo para la entrega. Nada se publica hasta que una persona lo aprueba.',
      sourceKicker: 'Fuente aprobada por personas',
      sourceTitle: 'Contenido aprobado',
      sourceNote1: 'Claro. Preciso. Fiel a la marca.',
      sourceNote2: 'Escribe una vez, adapta en todas partes.',
      connector: 'Preparado para',
      socialLabel: 'Redes sociales',
      cmsLabel: 'Sitio y CMS',
      readyStatus: 'Listo',
      cmsStatus: 'Conectado',
      cmsNote: 'Importa, mejora y devuelve las correcciones.',
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
      pageTitle: 'Word Presto ist die agentische Content-Engine für Autoren, Redakteure und Verlagsteams.',
      seoTitle: 'Content-Workflow-Engine für Autoren und Verlagsteams | Word Presto',
      metaDescription: 'Planen, briefen, verfassen, überprüfen, verbessern und bereiten Sie Inhalte für Suchmaschinen, Leser und die Übergabe an das CMS vor.',
    },
    hero: {
      eyebrow: 'die Content-Engine hinter dem Publizieren',
      h1Prefix: 'Word Presto ist die ',
      h1Agentic: 'agentische',
      h1Suffix: 'Content-Engine für Autoren, Redakteure und Verlagsteams.',
      body: 'Im Mittelpunkt steht Emma, Ihre Chefredakteurin. Sie sorgt dafür, dass Briefing, Entwurf, Belege, SEO, Überprüfung und Freigabe über einen einzigen, übersichtlichen Redaktionsschreibtisch laufen, während Sie das letzte Wort behalten.',
      approvalNoteLine1: 'Emma bereitet vor. Der Redakteur genehmigt.',
      approvalNoteLine2: 'Ohne Ihre Freigabe wird nichts veröffentlicht.',
      ctaPrimary: 'Jetzt registrieren',
      ctaSecondary: 'Sehen Sie sich den Redaktionsschreibtisch an',
      demoLink: 'Erleben Sie, wie aus groben Gedanken ein überprüfungsreifes Manuskript wird',
      preparesLabel: 'bereitet Inhalte vor für',
    },
    board: {
      note: 'Ihren Schreibtisch, koordiniert',
      title: 'Redaktionsübersicht',
      liveLabel: 'DESK · LIVE',
      editorInChief: 'CHEFREDAKTEUR',
      you: 'Sie',
      finalCall: 'die endgültige Entscheidung',
      emmaRole: 'CHEFREDAKTEUR',
      emmaSub: 'Hält Briefing, Entwurf und Überprüfung in Bewegung',
      preparing: 'Vorbereitung',
      canvasLabel: 'CANVAS · Einführungsleitfaden',
      workingSurface: 'die Arbeitsfläche',
      chip1: 'Vera · Prüfung von Ansprüchen',
      chip2: 'Stimme · Drift §2',
      specialistDesk: 'Fachreferat',
      reportsThroughEmma: 'Berichte über Emma',
      gateApproval: 'Freigabe durch den Redakteur erforderlich',
      gateCms: 'Bereit zur Übergabe an das CMS',
      stamp: 'Wartet auf Freigabe',
    },
    operatingModel: {
      eyebrow: 'Das Betriebsmodell',
      h2: 'Dies ist kein weiteres Content-Dashboard.',
      body: 'Die meisten Content-Projekte scheitern nicht daran, dass die Beteiligten nicht schreiben können. Sie scheitern daran, dass sich die Vorgaben ändern, Rückmeldungen zu spät eintreffen, Aussagen ihre Quellenangaben verlieren, SEO erst am Ende nachträglich hinzugefügt wird und niemand weiß, wer was genehmigt hat.',
      note: 'Word Presto gibt der Arbeit einen Schreibtisch. Emma führt ihn.',
      beforeLabel: 'VORHER · VERSTREUT',
      beforeCards: [
        { title: 'Unklarer Auftrag', body: 'Niemand war sich einig, wozu diese Seite dient.', note: '?' },
        { title: 'Die Überarbeitung kam zu spät', body: 'Anmerkungen kamen erst nach Fertigstellung des Entwurfs.' },
        { title: 'Behauptung, keine Belege', body: 'Trotzdem weitergemacht.', note: 'Quelle?' },
        { title: 'Unübersichtliche Genehmigung', body: 'Wer hat dies freigegeben?' },
      ],
      emmaRole: 'CHEFREDAKTEUR',
      afterLabel: 'NACHHER · EIN SCHREIBTISCH',
      afterHeader: 'Der Schreibtisch, in der richtigen Reihenfolge',
      afterItems: [
        'Auftrag vereinbart und dokumentiert',
        'SEO im Entwurf geprüft, nicht erst danach',
        'Behauptungen müssen belegt werden',
        'Die Genehmigung obliegt dem Herausgeber',
      ],
    },
    emmaDesk: {
      eyebrow: 'Im Zentrum des Schreibtisches',
      h2: 'Lernen Sie Emma kennen, Ihre geschäftsführende Redakteurin.',
      badgeRole: 'CHEFREDAKTEUR',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'Sie ist für das Dossier zuständig', body: 'Behält das Ziel, die Zielgruppe, den Ton, den Kontext und frühere Entscheidungen stets im Blick, damit die Arbeit nicht vom Kurs abkommt.' },
        { title: 'Sie leitet die Redaktion', body: 'Bewegt jedes Stück vom Briefing über den Entwurf, das Korrekturlesen, die Überprüfung bis zur Freigabe, ohne den roten Faden zu verlieren.' },
        { title: 'Sie zieht die Spezialisten hinzu', body: 'Leitet Schadensfälle, SEO, Belege, Sprachaufnahmen, Links, Risiken und Übergabeaufgaben zum richtigen Zeitpunkt an den richtigen Spezialisten weiter.' },
        { title: 'Sie schützt Ihre Autorität', body: 'Emma kann empfehlen und vorbereiten. Nur der Herausgeber kann genehmigen.' },
      ],
    },
    commitments: {
      eyebrow: 'Die redaktionelle Verfassung',
      h2: 'Emmas vier Grundsätze.',
      body: 'Die Standards, die Emma bei jedem Auftrag anwendet: die Regeln, die die Redaktion vertrauenswürdig machen.',
      panelTitle: 'Wird bei jedem Auftrag eingehalten',
      panelLabel: 'VIER VERPFLICHTUNGEN',
      items: [
        { num: '01', title: 'Die Grundwahrheit steht an erster Stelle', body: 'Keine erfundenen Zahlen. Keine unbelegten Behauptungen. Kein Vorgeben, schwache Belege seien stark.' },
        { num: '02', title: 'Die Wahrheit sagen', body: 'Emma wird einen schlechten Entwurf nicht beschönigen. Sie sagt Ihnen, woran noch gearbeitet werden muss.' },
        { num: '03', title: 'Schützen Sie Ihre Arbeit', body: 'Nichts wird veröffentlicht ohne die Freigabe des Editors.' },
        { num: '04', title: 'Behalten Sie das Wesentliche im Blick', body: 'Emma macht sich mit den Standards, dem Ton und den Entscheidungen vertraut, die das Projekt prägen.' },
      ],
    },
    canvas: {
      eyebrow: 'Die Arbeitsfläche',
      h2: 'Eine Arbeitsfläche für das eigentliche Exemplar.',
      body: 'Im „Canvas“ führt „Emma“ alle Arbeitsergebnisse zusammen: importierte Seiten, Entwürfe, Überarbeitungen, Korrekturanmerkungen, fachliche Befunde und Genehmigungsentscheidungen.',
      points: [
        'Importieren, Entwerfen, Überarbeiten, Korrekturlesen und Prüfen – alles an einem Ort.',
        'Fachliche Erkenntnisse werden als Randnotizen übermittelt, nicht in Besprechungen.',
        'Eine endgültige Genehmigung ist stets erforderlich.',
      ],
      docLabel: 'launch-guide.md · Bearbeitung durch Emma',
      draftLabel: 'ENTWURF · §1&ndash;§4',
      docHeading: 'Mit Zuversicht starten',
      sectionLabel: '§3 · KORREKTUR',
      marginLabel: 'RANDNOTIZEN',
      marginNotes: [
        { tag: 'BEHAUPTUNGEN', text: 'Für die Genehmigung der Behauptung ist eine Quellenangabe erforderlich.' },
        { tag: 'AUFTRAG', text: 'Dieser Abschnitt weicht vom Auftrag ab.' },
        { tag: 'STIMME', text: 'Die Stimme ist hier zu allgemein gehalten.' },
        { tag: 'METADATEN', text: 'Die Metadaten-Option B ist am stärksten.' },
      ],
      footerLeft: 'Die endgültige Genehmigung steht noch aus.',
      footerRight: 'Zurück zum Editor',
      annotation: 'eine Fläche, keine Registerkarten',
    },
    specialists: {
      eyebrow: 'Die Fachwerkbank',
      h2Suffix: 'Spezialisten. Ein Chefredakteur.',
      body: 'Emma arbeitet nicht allein. Hinter ihr steht das gesamte Word Presto-Spezialistenteam: Mitarbeiter aus den Bereichen Content-Produktion, SEO, Betrieb und Freigabeverwaltung, von denen jeder eine festgelegte Rolle und einen festen Platz im Arbeitsablauf hat.',
      note: 'Emma holt zur richtigen Zeit die richtige Spezialistin dazu und gibt dann die Erkenntnisse zurück, die das Urteil des Editors brauchen.',
      teamsSuffix: ' Teams',
      coordinatedThroughEmma: 'koordiniert durch Emma',
      editorApprovalRequired: 'Freigabe durch den Redakteur erforderlich',
      chipsLabel: 'Einige der Fachleute, die Emma hinzuziehen kann:',
      browseProfiles: 'Profile von Fachleuten durchsuchen',
      teamLabel: 'TEAM',
      specialistSingular: 'SPEZIALIST',
      specialistPlural: 'SPEZIALISTEN',
    },
    languages: {
      eyebrow: 'Muttersprachliche Stimme',
      h2: 'Gleicher Standard. Muttersprachliche Stimme.',
      body: 'Wenn Sie in einer anderen Sprache arbeiten, erhalten Sie keine übersetzte Version von Emma. Sie bekommen eine leitende Redakteurin, die denselben Ressortbereich in ihrer eigenen Sprache und mit ihren eigenen Redewendungen führt.',
      closingText: 'Sechs Redakteure. Ein Standard.',
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
      h2: 'Nur der Redakteur kann die Arbeit genehmigen.',
      body: 'Emma kann die Arbeit vorbereiten. Fachleute können sie prüfen. Die Canvas kann sie organisieren. Aber nur der Redakteur kann sie genehmigen.',
      finalLine: 'Nichts wird live geschaltet, bis die verantwortliche Person zustimmt.',
      docTitle: 'Genehmigung',
      filename: 'launch-guide.md',
      row1: 'Emmas Redaktionszusammenfassung',
      row1Status: 'Vorbereitet',
      row2: 'Fachprüfungen',
      row2Status: 'In',
      row3: 'Freigabe durch den Redakteur',
      row3Status: 'erwartet Sie',
      approvedByLabel: 'genehmigt von',
      stampText: 'Genehmigt',
      pillText: 'der Redakteur hat das letzte Wort',
    },
    publish: {
      eyebrow: 'Einmal schreiben · Überall veröffentlichen',
      h2: 'Eine genehmigte Idee, bereit für jeden Kanal.',
      body: 'Word Presto passt eine genehmigte Idee an kanalgerechte Versionen für soziale Medien an und überprüft sowie verbessert die bereits auf Ihrer Website vorhandenen Inhalte, bereit zur Übergabe. Nichts wird live geschaltet, bis eine Person es genehmigt.',
      sourceKicker: 'Von Menschen genehmigte Quelle',
      sourceTitle: 'Genehmigte Inhalte',
      sourceNote1: 'Klar. Präzise. Markenkonform.',
      sourceNote2: 'Einmal schreiben, überall anpassen.',
      connector: 'Vorbereitet für',
      socialLabel: 'Soziale Kanäle',
      cmsLabel: 'Website & CMS',
      readyStatus: 'Bereit',
      cmsStatus: 'Verbunden',
      cmsNote: 'Importieren, verbessern und Korrekturen zurückgeben.',
      footerLead: 'Die Mitarbeiter bereiten jede Version vor.',
      footerEmphasis: 'Die Menschen treffen diese Entscheidung nach wie vor.',
      footerTail: 'Vor der Veröffentlichung ist eine Genehmigung durch einen Mitarbeiter erforderlich.',
    },
    cta: {
      h2: 'Stellen Sie Emma in den Mittelpunkt Ihrer Content-Strategie.',
      body: 'Für Autoren, Redakteure und Verlagsteams, die bessere Inhalte bearbeiten möchten, ohne die redaktionelle Kontrolle aufzugeben.',
      ctaPrimary: 'Jetzt registrieren',
      ctaSecondary: 'Sehen Sie sich den Redaktionsschreibtisch an',
      markText: 'PAPIER · TINTE · SIGNAL · STEUERUNG',
    },
    footer: {
      deskHeading: 'Der Schreibtisch',
      deskLinks: ['Emma leitet den Schreibtisch', 'Die Canvas', 'Fachreferat'],
      standardsHeading: 'Standards',
      standardsLinks: ['Vier Verpflichtungen', 'Genehmigung durch die Redaktion', 'Muttersprachliche Stimme'],
      forHeading: 'Für',
      forLinks: ['Autoren', 'Redaktion', 'Redaktionsteams'],
      copyright: '© 2026 Word Presto',
      tagline2: 'Emma bereitet vor · der Redakteur genehmigt',
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
      body: "Word Presto adapte une idée approuvée en versions prêtes pour les réseaux sociaux, et révise et améliore le contenu déjà présent sur votre site, prêt pour la remise. Rien n'est publié tant qu'une personne ne l'a pas approuvé.",
      sourceKicker: 'Source approuvée par des humains',
      sourceTitle: 'Contenu approuvé',
      sourceNote1: 'Clair. Précis. Fidèle à la marque.',
      sourceNote2: 'Écrivez une fois, adaptez partout.',
      connector: 'Préparé pour',
      socialLabel: 'Réseaux sociaux',
      cmsLabel: 'Site et CMS',
      readyStatus: 'Prêt',
      cmsStatus: 'Connecté',
      cmsNote: 'Importez, améliorez et renvoyez les corrections.',
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
