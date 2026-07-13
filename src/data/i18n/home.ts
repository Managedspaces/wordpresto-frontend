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
      pageTitle: 'Word Presto é a plataforma de conteúdo inteligente para escritores, editores e equipes de publicação.',
      seoTitle: 'Motor de fluxo de conteúdo para escritores e equipes editoriais | Word Presto',
      metaDescription: 'Planeje, faça o briefing, escreva, revise, melhore e prepare o conteúdo para buscas, leitores e envio ao CMS.',
    },
    hero: {
      eyebrow: 'o motor de conteúdo por trás da publicação',
      h1Prefix: 'Word Presto é o',
      h1Agentic: 'motor agêntico',
      h1Suffix: 'de conteúdo para escritores, editores e equipes editoriais.',
      body: 'No centro está a Emma, sua editora-chefe. Ela mantém o briefing, o rascunho, as evidências, o SEO, a revisão e a aprovação fluindo em uma única mesa editorial tranquila, enquanto você mantém a palavra final.',
      approvalNoteLine1: 'Emma prepara. O editor aprova.',
      approvalNoteLine2: 'Nada é publicado sem a sua aprovação.',
      ctaPrimary: 'Inscreva-se agora',
      ctaSecondary: 'Veja a mesa editorial',
      demoLink: 'Veja uma ideia inicial se transformar em algo pronto para revisão',
      preparesLabel: 'prepara conteúdo para',
    },
    board: {
      note: 'sua mesa, coordenada',
      title: 'Painel de operações editoriais',
      liveLabel: 'MESA · AO VIVO',
      editorInChief: 'EDITOR-CHEFE',
      you: 'Você',
      finalCall: 'a decisão final',
      emmaRole: 'EDITOR-CHEFE',
      emmaSub: 'Manter o briefing, o rascunho e a revisão em andamento',
      preparing: 'Preparando',
      canvasLabel: 'CANVAS · guia de lançamento',
      workingSurface: 'a superfície de trabalho',
      chip1: 'Vera · checando fontes',
      chip2: 'Voz · à deriva §2',
      specialistDesk: 'Mesa de especialistas',
      reportsThroughEmma: 'reportagens via Emma',
      gateApproval: 'Precisa de aprovação do editor',
      gateCms: 'Pronto para enviar ao CMS',
      stamp: 'Aguardando liberação',
    },
    operatingModel: {
      eyebrow: 'O modelo de operação',
      h2: 'Isso não é só mais um painel de conteúdo.',
      body: 'A maioria dos trabalhos de conteúdo não fracassa porque as pessoas não sabem escrever. Fracassa porque o briefing muda, as revisões chegam atrasadas, as afirmações perdem as fontes, o SEO é encaixado de última hora e ninguém sabe quem aprovou o quê.',
      note: 'Word Presto dá um lar para o trabalho. Quem comanda é Emma.',
      beforeLabel: 'ANTES · TUDO ESPALHADO',
      beforeCards: [
        { title: 'Briefing vago', body: 'Ninguém definiu o objetivo da página.', note: '?' },
        { title: 'Reescrita chegou atrasada', body: 'Os comentários vieram depois do rascunho pronto.' },
        { title: 'Afirmação sem comprovação', body: 'Mesmo assim, seguiu em frente.', note: 'fonte?' },
        { title: 'Aprovação bagunçada', body: 'Quem deu o sinal verde?' },
      ],
      emmaRole: 'EDITOR-CHEFE',
      afterLabel: 'DEPOIS · UMA ÚNICA MESA',
      afterHeader: 'A mesa, organizada',
      afterItems: [
        'Briefing aprovado e registrado',
        'SEO verificado no rascunho, não depois',
        'As alegações vêm com suas provas',
        'Quem aprova é o Editor',
      ],
    },
    emmaDesk: {
      eyebrow: 'No centro da mesa',
      h2: 'Conheça Emma, sua editora-chefe.',
      badgeRole: 'EDITOR-CHEFE',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'Ela é quem manda no processo', body: 'Ela mantém o objetivo, o público, o tom, o contexto e as decisões anteriores em vista, para o trabalho não perder o rumo.' },
        { title: 'Ela comanda a mesa', body: 'Ela leva cada peça do briefing ao rascunho, revisão, verificação e aprovação sem perder o fio da meada.' },
        { title: 'Ela chama os especialistas', body: 'Ela envia alegações, SEO, evidências, tom, links, riscos e trabalhos de transição para o especialista certo na hora certa.' },
        { title: 'Ela protege sua autoridade', body: 'Emma pode recomendar e preparar. Só o Editor pode aprovar.' },
      ],
    },
    commitments: {
      eyebrow: 'A constituição editorial',
      h2: 'Os quatro compromissos da Emma.',
      body: 'Os padrões que Emma segue em cada trabalho: as regras que tornam a mesa confiável.',
      panelTitle: 'Mantido em cada trabalho',
      panelLabel: 'QUATRO COMPROMISSOS',
      items: [
        { num: '01', title: 'A verdade dos fatos acima de tudo', body: 'Sem números inventados. Sem alegações sem fundamento. Sem fingir que evidências fracas são fortes.' },
        { num: '02', title: 'Diga a verdade honesta', body: 'Emma não vai elogiar um rascunho ruim. Ela diz o que precisa ser melhorado.' },
        { num: '03', title: 'Proteja seu trabalho', body: 'Nada é publicado sem a aprovação do Editor.' },
        { num: '04', title: 'Lembre-se do que importa', body: 'Emma aprende os padrões, o tom e as decisões que moldam o projeto.' },
      ],
    },
    canvas: {
      eyebrow: 'A superfície de trabalho',
      h2: 'Uma superfície de trabalho só para o texto final.',
      body: 'O Canvas é onde a Emma junta tudo: páginas importadas, rascunhos, reescritas, anotações de revisão, achados dos especialistas e decisões de aprovação.',
      points: [
        'Importe, rascunhe, reescreva, revise e aprove tudo num lugar só.',
        'Os achados dos especialistas chegam como anotações na margem, não em reuniões.',
        'A aprovação final ainda é necessária, sempre.',
      ],
      docLabel: 'launch-guide.md · Emma editando',
      draftLabel: 'RASCUNHO · §1&ndash;§4',
      docHeading: 'Lançando com confiança',
      sectionLabel: '§3 · PROVA',
      marginLabel: 'ANOTAÇÕES NA MARGEM',
      marginNotes: [
        { tag: 'AFIRMAÇÕES', text: 'Essa afirmação precisa de uma fonte antes de ser aprovada.' },
        { tag: 'RESUMO', text: 'Esta seção se afastou do resumo.' },
        { tag: 'VOZ', text: 'A voz está genérica demais aqui.' },
        { tag: 'METADADOS', text: 'A opção B de metadados é a mais forte.' },
      ],
      footerLeft: 'A aprovação final ainda é necessária',
      footerRight: 'voltar ao Editor',
      annotation: 'uma superfície só, sem abas',
    },
    specialists: {
      eyebrow: 'A equipe de especialistas',
      h2Suffix: 'especialistas. Um editor-chefe.',
      body: 'A Emma não trabalha sozinha. Por trás dela está toda a equipe de especialistas da Word Presto: profissionais de produção de conteúdo, SEO, operações e governança de aprovação, cada um com seu papel e lugar no fluxo de trabalho.',
      note: 'A Emma chama o especialista certo na hora certa, e depois devolve os achados que precisam do julgamento do Editor.',
      teamsSuffix: 'equipes',
      coordinatedThroughEmma: 'coordenado pela Emma',
      editorApprovalRequired: 'Precisa de aprovação do editor',
      chipsLabel: 'Alguns especialistas que a Emma pode chamar:',
      browseProfiles: 'Navegue pelos perfis dos especialistas',
      teamLabel: 'EQUIPE',
      specialistSingular: 'ESPECIALISTA',
      specialistPlural: 'ESPECIALISTAS',
    },
    languages: {
      eyebrow: 'Voz nativa',
      h2: 'Mesmo padrão. Voz nativa.',
      body: 'Quando você trabalha em outro idioma, não é uma tradução da Emma. Você ganha uma editora-chefe que toca a mesma editoria no próprio idioma e estilo dela.',
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
      h2: 'Só o editor pode aprovar o trabalho.',
      body: 'A Emma prepara o trabalho, os especialistas revisam, o Canvas organiza, mas só o Editor dá a aprovação final.',
      finalLine: 'Nada vai ao ar até que a pessoa responsável dê o ok.',
      docTitle: 'Aprovação',
      filename: 'guia-de-lancamento.md',
      row1: 'Resumo da redação da Emma',
      row1Status: 'Preparado',
      row2: 'Revisão dos especialistas',
      row2Status: 'Em',
      row3: 'Aprovação do editor',
      row3Status: 'esperando por você',
      approvedByLabel: 'aprovado por',
      stampText: 'Aprovado',
      pillText: 'quem decide é o editor',
    },
    publish: {
      eyebrow: 'Escreva uma vez · Publique em todos os lugares',
      h2: 'Uma ideia aprovada, pronta para qualquer canal.',
      body: 'O Word Presto transforma uma ideia aprovada em versões prontas para redes sociais, além de revisar e melhorar o conteúdo já existente no seu site, tudo pronto para entrega. Nada vai ao ar sem a aprovação de uma pessoa.',
      sourceKicker: 'Fonte aprovada por humanos',
      sourceTitle: 'Conteúdo aprovado',
      sourceNote1: 'Claro. Preciso. Na medida da marca.',
      sourceNote2: 'Escreva uma vez, adapte em qualquer lugar.',
      connector: 'Preparado para',
      socialLabel: 'Redes sociais',
      cmsLabel: 'Site e CMS',
      readyStatus: 'Pronto',
      cmsStatus: 'Conectado',
      cmsNote: 'Importe, melhore e devolva as correções manualmente.',
      footerLead: 'Os agentes preparam cada versão.',
      footerEmphasis: 'Quem decide ainda é a pessoa.',
      footerTail: 'Aprovação humana antes de qualquer coisa ir ao ar.',
    },
    cta: {
      h2: 'Coloque a Emma no centro da sua operação de conteúdo.',
      body: 'Para escritores, editores e equipes de publicação que querem produzir conteúdo de qualidade sem perder o controle editorial.',
      ctaPrimary: 'Inscreva-se agora',
      ctaSecondary: 'Veja a mesa editorial',
      markText: 'PAPEL · TINTA · SINAL · CONTROLE',
    },
    footer: {
      deskHeading: 'A mesa',
      deskLinks: ['A Emma fica na mesa', 'O Canvas', 'Mesa de especialistas'],
      standardsHeading: 'Padrões',
      standardsLinks: ['Quatro compromissos', 'Aprovação do editor', 'Voz nativa'],
      forHeading: 'Para',
      forLinks: ['Escritores', 'Editores', 'Equipes de publicação'],
      copyright: '© 2026 Word Presto',
      tagline2: 'A Emma prepara · o editor aprova',
    },
  },

  es: {
    seo: {
      pageTitle: 'Word Presto es el motor de contenido agéntico para escritores, editores y equipos editoriales.',
      seoTitle: 'Motor de flujo de trabajo de contenido para escritores y equipos editoriales | Word Presto',
      metaDescription: 'Planifica, define el briefing, escribe, revisa, mejora y prepara el contenido para buscadores, lectores y la entrega al CMS.',
    },
    hero: {
      eyebrow: 'el motor de contenido detrás de la publicación',
      h1Prefix: 'Word Presto es el',
      h1Agentic: 'agéntico',
      h1Suffix: 'motor de contenido para escritores, editores y equipos editoriales.',
      body: 'En el centro está Emma, tu editora jefe. Ella mantiene el briefing, el borrador, la evidencia, el SEO, la revisión y la aprobación fluyendo en un escritorio editorial tranquilo, mientras tú tienes la última palabra.',
      approvalNoteLine1: 'Emma lo prepara. El editor lo aprueba.',
      approvalNoteLine2: 'Nada se publica sin tu visto bueno.',
      ctaPrimary: 'Únete ahora',
      ctaSecondary: 'Ver el escritorio editorial',
      demoLink: 'Ver cómo una idea en bruto se vuelve lista para revisión',
      preparesLabel: 'prepara contenido para',
    },
    board: {
      note: 'tu escritorio, coordinado',
      title: 'Panel de operaciones editoriales',
      liveLabel: 'ESCRITORIO · EN VIVO',
      editorInChief: 'EDITOR JEFE',
      you: 'Tú',
      finalCall: 'la última palabra',
      emmaRole: 'EDITOR JEFE',
      emmaSub: 'Manteniendo el briefing, el borrador y la revisión en movimiento',
      preparing: 'Preparando',
      canvasLabel: 'CANVAS · guía de inicio',
      workingSurface: 'la superficie de trabajo',
      chip1: 'Vera · verificando reclamaciones',
      chip2: 'Voz · a la deriva §2',
      specialistDesk: 'Mesa de especialistas',
      reportsThroughEmma: 'informes a través de Emma',
      gateApproval: 'Se requiere aprobación del editor',
      gateCms: 'Listo para entrega al CMS',
      stamp: 'Esperando aprobación',
    },
    operatingModel: {
      eyebrow: 'El modelo operativo',
      h2: 'Esto no es otro panel de contenido.',
      body: 'La mayoría del trabajo de contenido no fracasa porque la gente no sepa escribir. Fracasa porque el brief cambia, las revisiones llegan tarde, las afirmaciones pierden sus fuentes, el SEO se añade al final y nadie sabe quién aprobó qué.',
      note: 'Word Presto le da un escritorio al trabajo. Emma lo gestiona.',
      beforeLabel: 'ANTES · DISPERSOS',
      beforeCards: [
        { title: 'Brief vago', body: 'Nadie se puso de acuerdo sobre para qué es la página.', note: '?' },
        { title: 'La reescritura llegó tarde', body: 'Las notas llegaron después de que el borrador estuviera listo.' },
        { title: 'Afirmación sin evidencia', body: 'Se siguió adelante de todas formas.', note: '¿fuente?' },
        { title: 'Aprobación desordenada', body: '¿Quién dio el visto bueno a esto?' },
      ],
      emmaRole: 'EDITOR JEFE',
      afterLabel: 'DESPUÉS · UN ESCRITORIO',
      afterHeader: 'El escritorio, en orden',
      afterItems: [
        'Brief acordado y archivado',
        'SEO revisado en el borrador, no después',
        'Las afirmaciones llevan sus pruebas',
        'La aprobación la tiene el editor',
      ],
    },
    emmaDesk: {
      eyebrow: 'En el centro del escritorio',
      h2: 'Te presentamos a Emma, tu editora jefe.',
      badgeRole: 'EDITOR JEFE',
      badgeCity: 'DUBLÍN',
      cards: [
        { title: 'Ella tiene el encargo', body: 'Mantiene el objetivo, la audiencia, el tono, el contexto y las decisiones anteriores a la vista, para que el trabajo no se desvíe.' },
        { title: 'Ella dirige el escritorio', body: 'Mueve cada pieza desde el resumen hasta el borrador, la corrección, la revisión y la aprobación sin perder el hilo.' },
        { title: 'Ella convoca a los especialistas', body: 'Envía reclamaciones, SEO, pruebas, tono, enlaces, riesgos y trabajo de traspaso al especialista adecuado en el momento adecuado.' },
        { title: 'Ella protege tu autoridad', body: 'Emma puede recomendar y preparar. Solo el editor puede aprobar.' },
      ],
    },
    commitments: {
      eyebrow: 'La constitución editorial',
      h2: 'Los cuatro compromisos de Emma.',
      body: 'Los estándares que Emma aplica en cada trabajo: las reglas que hacen que el escritorio sea confiable.',
      panelTitle: 'Se aplica en cada trabajo',
      panelLabel: 'CUATRO COMPROMISOS',
      items: [
        { num: '01', title: 'La verdad fundamental ante todo', body: 'Nada de cifras inventadas. Nada de afirmaciones sin respaldo. Nada de fingir que la evidencia débil es fuerte.' },
        { num: '02', title: 'Di lo honesto', body: 'Emma no halagará un borrador malo. Te dice lo que necesita trabajo.' },
        { num: '03', title: 'Protege tu trabajo', body: 'Nada se publica sin la aprobación del Editor.' },
        { num: '04', title: 'Recuerda lo que importa', body: 'Emma aprende los estándares, el tono y las decisiones que dan forma al proyecto.' },
      ],
    },
    canvas: {
      eyebrow: 'La superficie de trabajo',
      h2: 'Una superficie de trabajo para la copia real.',
      body: 'El Canvas es donde Emma reúne todo el trabajo: páginas importadas, borradores, reescrituras, notas de corrección, hallazgos de especialistas y decisiones de aprobación.',
      points: [
        'Importa, redacta, reescribe, revisa y corrige, todo en un solo lugar.',
        'Los hallazgos de los especialistas llegan como notas al margen, no como reuniones.',
        'La aprobación final siempre es necesaria.',
      ],
      docLabel: 'launch-guide.md · Emma editando',
      draftLabel: 'BORRADOR · §1&ndash;§4',
      docHeading: 'Lanzar con confianza',
      sectionLabel: '§3 · PRUEBA',
      marginLabel: 'NOTAS AL MARGEN',
      marginNotes: [
        { tag: 'RECLAMOS', text: 'El reclamo necesita una fuente antes de la aprobación.' },
        { tag: 'RESUMEN', text: 'Esta sección se ha desviado del resumen.' },
        { tag: 'VOZ', text: 'Aquí la voz es demasiado genérica.' },
        { tag: 'METADATOS', text: 'La opción B de metadatos es la más fuerte.' },
      ],
      footerLeft: 'Aún se requiere la aprobación final',
      footerRight: 'volver al Editor',
      annotation: 'una superficie, sin pestañas',
    },
    specialists: {
      eyebrow: 'El banco de especialistas',
      h2Suffix: 'especialistas. Un editor jefe.',
      body: 'Emma no trabaja sola. Detrás de ella está todo el banco de especialistas de Word Presto: personal de producción de contenido, SEO, operaciones y gobernanza de aprobaciones, cada uno con un rol y un lugar definidos en el flujo de trabajo.',
      note: 'Emma convoca al especialista adecuado en el momento adecuado, y luego devuelve los hallazgos que necesitan el criterio del Editor.',
      teamsSuffix: ' equipos',
      coordinatedThroughEmma: 'coordinado a través de Emma',
      editorApprovalRequired: 'Se requiere aprobación del editor',
      chipsLabel: 'Algunos de los especialistas que Emma puede traer:',
      browseProfiles: 'Explora los perfiles de los especialistas',
      teamLabel: 'EQUIPO',
      specialistSingular: 'ESPECIALISTA',
      specialistPlural: 'ESPECIALISTAS',
    },
    languages: {
      eyebrow: 'Voz nativa',
      h2: 'Mismo estándar. Voz nativa.',
      body: 'Cuando trabajas en otro idioma, no te dan a Emma traducida. Te dan una editora jefe que dirige la misma sección en su propio idioma y estilo.',
      closingText: 'Seis editores. Un mismo estándar.',
      editors: [
        { name: 'Emma', city: 'Dublín', lang: 'Inglés' },
        { name: 'Aurora', city: 'Lisboa', lang: 'Portugués' },
        { name: 'Francisca', city: 'São Paulo', lang: 'Portugués brasileño' },
        { name: 'Sofía', city: 'Madrid', lang: 'Español' },
        { name: 'Sabine', city: 'Berlín', lang: 'Alemán' },
        { name: 'Ambre', city: 'París', lang: 'Francés' },
      ],
    },
    approval: {
      eyebrow: 'La puerta',
      h2: 'Solo el editor puede aprobar el trabajo.',
      body: 'Emma puede preparar el trabajo. Los especialistas pueden revisarlo. El Canvas puede organizarlo. Pero solo el editor puede aprobarlo.',
      finalLine: 'Nada se publica hasta que el responsable humano dé el visto bueno.',
      docTitle: 'Aprobación',
      filename: 'guía-de-inicio.md',
      row1: 'Resumen de la redacción de Emma',
      row1Status: 'Preparado',
      row2: 'Revisiones de especialistas',
      row2Status: 'En',
      row3: 'Aprobación del editor',
      row3Status: 'te esperamos',
      approvedByLabel: 'aprobado por',
      stampText: 'Aprobado',
      pillText: 'el editor tiene la última palabra',
    },
    publish: {
      eyebrow: 'Escribe una vez · Publica en todas partes',
      h2: 'Una idea aprobada, lista para cualquier canal.',
      body: 'Word Presto adapta una idea aprobada para crear versiones listas para publicar en redes sociales, y revisa y mejora el contenido que ya tienes en tu web, dejándolo listo para la entrega. Nada se publica hasta que una persona lo apruebe.',
      sourceKicker: 'Fuente verificada por humanos',
      sourceTitle: 'Contenido aprobado',
      sourceNote1: 'Claro. Preciso. Fiel a la marca.',
      sourceNote2: 'Escribe una vez, adáptalo en todas partes.',
      connector: 'Preparado para',
      socialLabel: 'Redes sociales',
      cmsLabel: 'Sitio web y CMS',
      readyStatus: 'Listo',
      cmsStatus: 'Conectado',
      cmsNote: 'Importa, mejora y devuelve las correcciones a mano.',
      footerLead: 'Los agentes preparan cada versión.',
      footerEmphasis: 'La gente sigue tomando la decisión final',
      footerTail: 'Se necesita la aprobación humana antes de publicar nada.',
    },
    cta: {
      h2: 'Pon a Emma en el centro de tu operación de contenidos.',
      body: 'Para escritores, editores y equipos de publicación que necesitan mejor contenido sin perder el control editorial.',
      ctaPrimary: 'Únete ahora',
      ctaSecondary: 'Ver el escritorio editorial',
      markText: 'PAPEL · TINTA · SEÑAL · CONTROL',
    },
    footer: {
      deskHeading: 'El escritorio',
      deskLinks: ['Emma gestiona el escritorio', 'El Canvas', 'Mesa de especialistas'],
      standardsHeading: 'Estándares',
      standardsLinks: ['Cuatro compromisos', 'Aprobación del editor', 'Voz nativa'],
      forHeading: 'Para',
      forLinks: ['Escritores', 'Editores', 'Equipos de publicación'],
      copyright: '© 2026 Word Presto',
      tagline2: 'Emma prepara · el editor aprueba',
    },
  },

  de: {
    seo: {
      pageTitle: 'Word Presto ist die smarte Content-Engine für Autoren, Redakteure und Verlage.',
      seoTitle: 'Content-Workflow-Engine für Autoren und Redaktionsteams | Word Presto',
      metaDescription: 'Inhalte planen, briefen, schreiben, prüfen, verbessern und für Suchmaschinen, Leser und die Übergabe ans CMS vorbereiten.',
    },
    hero: {
      eyebrow: 'die Content-Engine hinter dem Publishing',
      h1Prefix: 'Word Presto ist die ',
      h1Agentic: 'agentische',
      h1Suffix: 'Content-Plattform für Autoren, Redakteure und Verlagsteams.',
      body: 'Im Mittelpunkt steht Emma, deine Chefredakteurin. Sie sorgt dafür, dass Briefing, Entwurf, Quellen, SEO, Prüfung und Freigabe in einer ruhigen Redaktion zusammenlaufen – du behältst das letzte Wort.',
      approvalNoteLine1: 'Emma bereitet vor. Der Redakteur gibt frei.',
      approvalNoteLine2: 'Ohne deine Freigabe wird nichts veröffentlicht.',
      ctaPrimary: 'Jetzt mitmachen',
      ctaSecondary: 'Redaktion ansehen',
      demoLink: 'Sieh zu, wie aus ersten Gedanken etwas Prüffähiges wird',
      preparesLabel: 'bereitet Inhalte vor für',
    },
    board: {
      note: 'deinen Schreibtisch, koordiniert',
      title: 'Redaktionsübersicht',
      liveLabel: 'DESK · LIVE',
      editorInChief: 'CHEFREDAKTEUR',
      you: 'Du',
      finalCall: 'die letzte Entscheidung',
      emmaRole: 'CHEFREDAKTEUR',
      emmaSub: 'Briefing, Entwurf und Prüfung am Laufen halten',
      preparing: 'Vorbereiten',
      canvasLabel: 'CANVAS · Einführungsleitfaden',
      workingSurface: 'die Arbeitsfläche',
      chip1: 'Vera · prüft Behauptungen',
      chip2: 'Voice · driftet §2',
      specialistDesk: 'Fachredaktion',
      reportsThroughEmma: 'Berichte über Emma',
      gateApproval: 'Freigabe durch Redaktion nötig',
      gateCms: 'Bereit zur Übergabe ans CMS',
      stamp: 'Wartet auf Freigabe',
    },
    operatingModel: {
      eyebrow: 'Das Betriebsmodell',
      h2: 'Das ist kein weiteres Content-Dashboard.',
      body: 'Die meisten Content-Projekte scheitern nicht, weil die Leute nicht schreiben können. Sie scheitern, weil sich das Briefing ändert, Reviews zu spät kommen, Quellen verloren gehen, SEO erst hinten dran geklatscht wird und keiner mehr weiß, wer was freigegeben hat.',
      note: 'Word Presto gibt der Arbeit einen Schreibtisch. Emma führt ihn.',
      beforeLabel: 'VORHER · VERSTREUT',
      beforeCards: [
        { title: 'Unklares Briefing', body: 'Niemand wusste, wofür die Seite eigentlich gedacht war.', note: '?' },
        { title: 'Umschreibung kam zu spät', body: 'Anmerkungen kamen erst, nachdem der Entwurf fertig war.' },
        { title: 'Behauptung, kein Beleg', body: 'Trotzdem weitergemacht.', note: 'Quelle?' },
        { title: 'Durcheinander bei der Freigabe', body: 'Wer hat das abgesegnet?' },
      ],
      emmaRole: 'CHEFREDAKTEUR',
      afterLabel: 'NACHHER · EIN SCHREIBTISCH',
      afterHeader: 'Der Schreibtisch, ordentlich',
      afterItems: [
        'Briefing abgestimmt und abgelegt',
        'SEO im Entwurf geprüft, nicht erst danach',
        'Behauptungen liefern ihre Belege gleich mit.',
        'Die Freigabe liegt beim Editor.',
      ],
    },
    emmaDesk: {
      eyebrow: 'Mitten auf dem Schreibtisch',
      h2: 'Lern Emma kennen – deine Managing Editorin.',
      badgeRole: 'CHEFREDAKTEUR',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'Sie hat den Überblick über das Briefing.', body: 'Sie behält Ziel, Zielgruppe, Ton, Kontext und bisherige Entscheidungen im Blick – so bleibt die Arbeit fokussiert.' },
        { title: 'Sie führt den Schreibtisch.', body: 'Sie bringt jeden Text vom Briefing über Entwurf, Korrektur, Review bis zur Freigabe – ohne den Faden zu verlieren.' },
        { title: 'Sie holt die Spezialisten dazu.', body: 'Sie leitet Claims, SEO, Belege, Ton, Links, Risiken und Übergaben zur richtigen Zeit an die richtigen Spezialisten weiter.' },
        { title: 'Sie schützt deine Autorität.', body: 'Emma kann empfehlen und vorbereiten. Nur der Editor gibt frei.' },
      ],
    },
    commitments: {
      eyebrow: 'Die redaktionelle Verfassung',
      h2: 'Emmas vier Grundsätze.',
      body: 'Die Standards, an die Emma sich bei jedem Auftrag hält – die Regeln, die den Schreibtisch vertrauenswürdig machen.',
      panelTitle: 'Gilt für jeden Auftrag',
      panelLabel: 'VIER VERPFLICHTUNGEN',
      items: [
        { num: '01', title: 'Wahrheit über alles', body: 'Keine erfundenen Zahlen. Keine unbelegten Behauptungen. Kein Schönreden schwacher Belege.' },
        { num: '02', title: 'Sag ehrlich, was Sache ist.', body: 'Emma schönt keinen schlechten Entwurf. Sie sagt dir, wo noch Arbeit nötig ist.' },
        { num: '03', title: 'Schütz deine Arbeit.', body: 'Nichts wird veröffentlicht ohne die Freigabe des Editors.' },
        { num: '04', title: 'Vergiss nicht, worauf es ankommt.', body: 'Emma lernt die Standards, den Ton und die Entscheidungen, die das Projekt prägen.' },
      ],
    },
    canvas: {
      eyebrow: 'Die Arbeitsfläche',
      h2: 'Eine Arbeitsfläche für den eigentlichen Text.',
      body: 'Im Canvas bringt Emma alles zusammen: importierte Seiten, Entwürfe, Überarbeitungen, Korrekturhinweise, fachliche Einschätzungen und Freigabeentscheidungen.',
      points: [
        'Importieren, entwerfen, umschreiben, korrekturlesen und prüfen – alles an einem Ort.',
        'Fachliche Hinweise landen als Randnotizen, nicht in Meetings.',
        'Die finale Freigabe ist trotzdem immer nötig.',
      ],
      docLabel: 'launch-guide.md · Emma bearbeitet',
      draftLabel: 'ENTWURF · §1&ndash;§4',
      docHeading: 'Mit gutem Gefühl veröffentlichen',
      sectionLabel: '§3 · KORREKTUR',
      marginLabel: 'RANDNOTIZEN',
      marginNotes: [
        { tag: 'BEHAUPTUNGEN', text: 'Behauptung braucht vor der Freigabe eine Quelle.' },
        { tag: 'BRIEFING', text: 'Dieser Abschnitt weicht vom Briefing ab.' },
        { tag: 'TONALITÄT', text: 'Die Tonalität ist hier zu allgemein.' },
        { tag: 'METADATEN', text: 'Metadaten-Option B ist die stärkste.' },
      ],
      footerLeft: 'Finale Freigabe noch erforderlich',
      footerRight: 'zurück zum Editor',
      annotation: 'eine Oberfläche, keine Tabs',
    },
    specialists: {
      eyebrow: 'Die Fachwerkbank',
      h2Suffix: 'Fachleute. Ein Chefredakteur.',
      body: 'Emma arbeitet nicht allein. Hinter ihr steht die gesamte Word-Presto-Fachwerkbank: Content-Produktion, SEO, Operations und Freigabe-Governance – alle mit einer klaren Rolle und einem festen Platz im Workflow.',
      note: 'Emma holt zur richtigen Zeit die richtige Spezialistin dazu und gibt dann die Erkenntnisse zurück, die das Urteil des Editors brauchen.',
      teamsSuffix: ' Teams',
      coordinatedThroughEmma: 'koordiniert durch Emma',
      editorApprovalRequired: 'Freigabe durch Redaktion nötig',
      chipsLabel: 'Ein paar der Spezialist:innen, die Emma dir vermitteln kann:',
      browseProfiles: 'Durch die Profile der Spezialist:innen stöbern',
      teamLabel: 'TEAM',
      specialistSingular: 'SPEZIALIST:IN',
      specialistPlural: 'SPEZIALIST:INNEN',
    },
    languages: {
      eyebrow: 'Muttersprachliche Stimme',
      h2: 'Gleicher Standard. Muttersprachliche Stimme.',
      body: 'Wenn du in einer anderen Sprache arbeitest, bekommst du nicht einfach eine übersetzte Version von Emma. Stattdessen übernimmt eine Chefredakteurin den gleichen Bereich – in ihrer eigenen Sprache und mit ihrem eigenen Sprachgefühl.',
      closingText: 'Sechs Redakteur:innen. Ein Standard.',
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
      body: 'Emma kann die Arbeit vorbereiten. Fachleute können sie prüfen. Die Canvas kann sie organisieren. Aber nur der Editor kann sie freigeben.',
      finalLine: 'Erst wenn der Mensch, der die Verantwortung trägt, sein Okay gibt, geht etwas live.',
      docTitle: 'Freigabe',
      filename: 'launch-guide.md',
      row1: 'Emmas Redaktionszusammenfassung',
      row1Status: 'Vorbereitet',
      row2: 'Fachprüfungen',
      row2Status: 'In',
      row3: 'Freigabe durch den Editor',
      row3Status: 'wartet auf dich',
      approvedByLabel: 'freigegeben von',
      stampText: 'Freigegeben',
      pillText: 'der Editor hat das letzte Wort',
    },
    publish: {
      eyebrow: 'Einmal schreiben · Überall veröffentlichen',
      h2: 'Eine freigegebene Idee, bereit für alle Kanäle.',
      body: 'Word Presto passt eine freigegebene Idee in versionen für soziale Kanäle an, prüft und verbessert die Inhalte auf deiner Website und übergibt sie fertig. Nichts geht live, bevor ein Mensch es freigibt.',
      sourceKicker: 'Von Menschen freigegebene Quelle',
      sourceTitle: 'Freigegebene Inhalte',
      sourceNote1: 'Klar. Präzise. Markenkonform.',
      sourceNote2: 'Einmal schreiben, überall anpassen.',
      connector: 'Vorbereitet für',
      socialLabel: 'Soziale Kanäle',
      cmsLabel: 'Website & CMS',
      readyStatus: 'Bereit',
      cmsStatus: 'Verbunden',
      cmsNote: 'Importieren, verbessern und Korrekturen zurückgeben.',
      footerLead: 'Die Agenten bereiten jede Version vor.',
      footerEmphasis: 'Die Leute treffen trotzdem die Entscheidung',
      footerTail: 'Menschliche Freigabe, bevor etwas live geht.',
    },
    cta: {
      h2: 'Stell Emma ins Zentrum deiner Content-Operation.',
      body: 'Für Autoren, Redakteure und Verlagsteams, die bessere Inhalte brauchen, ohne die redaktionelle Kontrolle abzugeben.',
      ctaPrimary: 'Jetzt mitmachen',
      ctaSecondary: 'Redaktion ansehen',
      markText: 'PAPIER · TINTE · SIGNAL · STEUERUNG',
    },
    footer: {
      deskHeading: 'Der Schreibtisch',
      deskLinks: ['Emma leitet den Schreibtisch', 'Die Canvas', 'Fachredaktion'],
      standardsHeading: 'Standards',
      standardsLinks: ['Vier Verpflichtungen', 'Redaktionelle Freigabe', 'Muttersprachliche Stimme'],
      forHeading: 'Für',
      forLinks: ['Autoren', 'Redakteure', 'Redaktionsteams'],
      copyright: '© 2026 Word Presto',
      tagline2: 'Emma bereitet vor · die Redaktion gibt frei',
    },
  },

  fr: {
    seo: {
      pageTitle: 'Word Presto est le moteur de contenu agentique destiné aux auteurs, aux rédacteurs et aux équipes éditoriales.',
      seoTitle: 'Moteur de flux de travail pour rédacteurs et équipes éditoriales | Word Presto',
      metaDescription: 'Planifiez, briefez, rédigez, relisez, améliorez et préparez le contenu pour le référencement, les lecteurs et la transmission au CMS.',
    },
    hero: {
      eyebrow: 'le moteur de contenu au cœur de l\'édition',
      h1Prefix: 'Word Presto est le',
      h1Agentic: 'agentique',
      h1Suffix: 'moteur de contenu pour les auteurs, les rédacteurs et les équipes éditoriales.',
      body: 'Au centre se trouve Emma, votre rédactrice en chef. Elle assure le suivi du brief, du brouillon, des sources, du SEO, de la relecture et de l\'approbation depuis un seul bureau éditorial apaisé, tandis que vous gardez le dernier mot.',
      approvalNoteLine1: 'Emma prépare. Le rédacteur en chef approuve.',
      approvalNoteLine2: 'Rien n\'est publié sans votre validation.',
      ctaPrimary: 'Rejoignez-nous',
      ctaSecondary: 'Voir le bureau éditorial',
      demoLink: 'Voyez une réflexion brute devenir prête pour la relecture',
      preparesLabel: 'prépare le contenu pour',
    },
    board: {
      note: 'votre bureau, coordonné',
      title: 'Tableau des opérations éditoriales',
      liveLabel: 'BUREAU · EN DIRECT',
      editorInChief: 'RÉDACTEUR EN CHEF',
      you: 'Vous',
      finalCall: 'la décision finale',
      emmaRole: 'RÉDACTEUR EN CHEF',
      emmaSub: 'Faire avancer le brief, le brouillon et la relecture',
      preparing: 'Préparation',
      canvasLabel: 'CANVAS · guide de lancement',
      workingSurface: 'la surface de travail',
      chip1: 'Vera · vérification des réclamations',
      chip2: 'Voix · à la dérive §2',
      specialistDesk: 'Bureau spécialisé',
      reportsThroughEmma: 'rapports via Emma',
      gateApproval: 'Approbation de l\'éditeur requise',
      gateCms: 'Prêt pour la remise au CMS',
      stamp: 'En attente de validation',
    },
    operatingModel: {
      eyebrow: 'Le modèle opérationnel',
      h2: 'Ceci n\'est pas un énième tableau de bord de contenu.',
      body: 'La plupart des travaux de contenu n\'échouent pas parce que les gens ne savent pas écrire. Ils échouent parce que le brief change, les relectures arrivent en retard, les affirmations perdent leurs sources, le SEO est ajouté à la dernière minute, et personne ne sait qui a approuvé quoi.',
      note: 'Word Presto donne un bureau au travail. C\'est Emma qui le gère.',
      beforeLabel: 'AVANT · DISPERSÉ',
      beforeCards: [
        { title: 'Brief vague', body: 'Personne ne s\'est accordé sur l\'objectif de la page.', note: '?' },
        { title: 'La réécriture est arrivée en retard', body: 'Les notes sont arrivées après que le brouillon ait été terminé.' },
        { title: 'Affirmation sans preuve', body: 'Avancé quand même.', note: 'source ?' },
        { title: 'Approbation désordonnée', body: 'Qui a validé ceci ?' },
      ],
      emmaRole: 'RÉDACTEUR EN CHEF',
      afterLabel: 'APRÈS · UN BUREAU',
      afterHeader: 'Le bureau, en ordre',
      afterItems: [
        'Brief approuvé et archivé',
        'SEO vérifié dans le brouillon, pas après',
        'Les allégations sont accompagnées de leurs preuves',
        'La décision finale appartient au rédacteur en chef',
      ],
    },
    emmaDesk: {
      eyebrow: 'Au centre du bureau',
      h2: 'Voici Emma, votre rédactrice en chef.',
      badgeRole: 'RÉDACTEUR EN CHEF',
      badgeCity: 'DUBLIN',
      cards: [
        { title: 'C\'est elle qui détient le dossier', body: 'Elle garde en vue l\'objectif, le public, la voix, le contexte et les décisions antérieures, afin que le travail ne dévie pas.' },
        { title: 'Elle dirige le bureau', body: 'Elle fait passer chaque pièce du brief à la rédaction, à la relecture, à la révision et à l\'approbation sans perdre le fil.' },
        { title: 'Elle fait appel aux spécialistes', body: 'Elle envoie les réclamations, le référencement, les preuves, la voix, les liens, les risques et les travaux de transfert au bon spécialiste au bon moment.' },
        { title: 'Elle protège votre autorité', body: 'Emma peut recommander et préparer. Seul le rédacteur en chef peut approuver.' },
      ],
    },
    commitments: {
      eyebrow: 'La charte éditoriale',
      h2: 'Les quatre engagements d’Emma.',
      body: 'Les normes auxquelles Emma se tient pour chaque travail : les règles qui rendent le bureau digne de confiance.',
      panelTitle: 'Respecté pour chaque travail',
      panelLabel: 'QUATRE ENGAGEMENTS',
      items: [
        { num: '01', title: 'La vérité fondamentale avant tout', body: 'Pas de chiffres inventés. Pas d\'affirmations non étayées. Pas de prétention que des preuves faibles sont solides.' },
        { num: '02', title: 'Dites la vérité', body: 'Emma ne flattera pas un mauvais brouillon. Elle vous dit ce qui doit être amélioré.' },
        { num: '03', title: 'Protégez votre travail', body: 'Rien n’est publié sans la validation de l’Éditeur.' },
        { num: '04', title: 'N\'oubliez pas ce qui compte', body: 'Emma apprend les normes, la voix et les décisions qui façonnent le projet.' },
      ],
    },
    canvas: {
      eyebrow: 'La surface de travail',
      h2: 'Une surface de travail pour la copie proprement dite.',
      body: 'C\'est dans le Canvas qu\'Emma rassemble l\'ensemble des travaux : pages importées, brouillons, réécritures, notes de relecture, conclusions des experts et décisions d\'approbation.',
      points: [
        'Importez, rédigez, réécrivez, relisez et révisez, le tout au même endroit.',
        'Les conclusions des spécialistes sont consignées sous forme de notes en marge, et non lors de réunions.',
        'Une validation finale est toujours requise.',
      ],
      docLabel: 'launch-guide.md · Modification d\'Emma',
      draftLabel: 'BROUILLON · §1&ndash;§4',
      docHeading: 'Se lancer en toute confiance',
      sectionLabel: '§3 · REVISION',
      marginLabel: 'NOTES EN MARGE',
      marginNotes: [
        { tag: 'REVENDICATIONS', text: 'Cette revendication doit être étayée par une source avant d\'être approuvée.' },
        { tag: 'CAHIER DES CHARGES', text: 'Cette section s\'est écartée du cahier des charges.' },
        { tag: 'TON', text: 'Le ton est trop générique ici.' },
        { tag: 'MÉTADONNÉES', text: 'L\'option B pour les métadonnées est la plus solide.' },
      ],
      footerLeft: 'Une approbation définitive est encore requise',
      footerRight: 'Retour à l\'éditeur',
      annotation: 'une seule surface, pas d\'onglets',
    },
    specialists: {
      eyebrow: 'Le pôle des spécialistes',
      h2Suffix: 'des spécialistes. Un rédacteur en chef.',
      body: 'Emma ne travaille pas seule. Derrière elle se trouve l\'ensemble du pôle de spécialistes de Word Presto : production de contenu, SEO, opérations et gouvernance des approbations, chacun ayant un rôle et une place définis dans le flux de travail.',
      note: 'Emma fait appel au bon spécialiste au bon moment, puis renvoie les conclusions qui nécessitent le jugement de l’Éditeur.',
      teamsSuffix: ' équipes',
      coordinatedThroughEmma: 'coordonné par Emma',
      editorApprovalRequired: 'Approbation de l\'éditeur requise',
      chipsLabel: 'Voici quelques-uns des spécialistes qu\'Emma peut mettre à votre disposition :',
      browseProfiles: 'Parcourez les profils des spécialistes',
      teamLabel: 'ÉQUIPE',
      specialistSingular: 'SPÉCIALISTE',
      specialistPlural: 'SPÉCIALISTES',
    },
    languages: {
      eyebrow: 'Voix native',
      h2: 'Même qualité. Voix native.',
      body: 'Lorsque vous travaillez dans une autre langue, vous n\'obtenez pas une version traduite d\'Emma. Vous bénéficiez d\'une rédactrice en chef qui dirige le même service dans sa propre langue et son propre idiome.',
      closingText: 'Six rédacteurs. Une norme.',
      editors: [
        { name: 'Emma', city: 'Dublin', lang: 'Anglais' },
        { name: 'Aurora', city: 'Lisbonne', lang: 'portugais' },
        { name: 'Francisca', city: 'São Paulo', lang: 'portugais brésilien' },
        { name: 'Sofía', city: 'Madrid', lang: 'Espagnol' },
        { name: 'Sabine', city: 'Berlin', lang: 'Allemand' },
        { name: 'Ambre', city: 'Paris', lang: 'Français' },
      ],
    },
    approval: {
      eyebrow: 'Le portail',
      h2: 'Seul le rédacteur en chef peut approuver le travail.',
      body: 'Emma peut préparer le travail. Des spécialistes peuvent le réviser. Le Canvas peut l\'organiser. Mais seul le rédacteur en chef peut l\'approuver.',
      finalLine: 'Rien n\'est mis en ligne tant que le responsable humain n\'a pas donné son accord.',
      docTitle: 'Approbation',
      filename: 'guide-de-mise-en-route.md',
      row1: 'Résumé du bureau d’Emma',
      row1Status: 'Préparé',
      row2: 'Révisions par des spécialistes',
      row2Status: 'Dans',
      row3: 'Validation du rédacteur en chef',
      row3Status: 'vous attend',
      approvedByLabel: 'approuvé par',
      stampText: 'Approuvé',
      pillText: 'C\'est le rédacteur en chef qui tient la plume',
    },
    publish: {
      eyebrow: 'Écrivez une fois · Publiez partout',
      h2: 'Une idée approuvée, prête pour tous les canaux.',
      body: 'Word Presto adapte une idée approuvée en versions prêtes pour les réseaux sociaux, et révise et améliore le contenu déjà présent sur votre site, prêt à être transmis. Rien n\'est mis en ligne tant qu\'une personne ne l\'a pas approuvé.',
      sourceKicker: 'Source approuvée par des humains',
      sourceTitle: 'Contenu approuvé',
      sourceNote1: 'Clair. Précis. Conforme à la marque.',
      sourceNote2: 'Écrivez une fois, adaptez partout.',
      connector: 'Préparé pour',
      socialLabel: 'Réseaux sociaux',
      cmsLabel: 'Site web et CMS',
      readyStatus: 'Prêt',
      cmsStatus: 'Connecté',
      cmsNote: 'Importez, améliorez et renvoyez les corrections manuellement.',
      footerLead: 'Les agents préparent chaque version.',
      footerEmphasis: 'Ce sont toujours les humains qui prennent la décision finale.',
      footerTail: 'Une validation humaine est requise avant toute mise en ligne.',
    },
    cta: {
      h2: 'Placez Emma au cœur de votre stratégie de contenu.',
      body: 'Pour les auteurs, rédacteurs et équipes éditoriales qui souhaitent améliorer leurs contenus sans perdre le contrôle éditorial.',
      ctaPrimary: 'Rejoignez-nous',
      ctaSecondary: 'Voir le bureau éditorial',
      markText: 'PAPIER · ENCRE · SIGNAL · CONTRÔLE',
    },
    footer: {
      deskHeading: 'Le bureau',
      deskLinks: ['Emma gère le bureau', 'Le Canvas', 'Bureau spécialisé'],
      standardsHeading: 'Normes',
      standardsLinks: ['Quatre engagements', 'Validation par l\'éditeur', 'Voix native'],
      forHeading: 'Pour',
      forLinks: ['Auteurs', 'Rédacteurs', 'Équipes éditoriales'],
      copyright: '© 2026 Word Presto',
      tagline2: 'Emma prépare · l\'éditeur approuve',
    },
  },
};
