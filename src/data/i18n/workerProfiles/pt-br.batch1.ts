import type { WorkerProfileTranslatable } from './types';

export const ptBrBatch1: Record<string, WorkerProfileTranslatable> = {
  voice_style: {
    seoTitle: 'Worker de Voz e Estilo | WordPresto',
    metaDescription:
      'Helena verifica cada rascunho em relação às suas regras de voz e exemplos aprovados, ajustando-o ao seu estilo antes da revisão. Para times com uma voz consistente para manter.',
    h1: 'Mantenha a voz no trabalho.',
    heroPara1:
      'Quando vários redatores e ferramentas de IA trabalham no mesmo site, a voz da marca vai se perdendo página a página. Helena lê suas regras de voz e exemplos aprovados, depois verifica e ajusta cada rascunho, para que ele ainda soe como você quando chegar à revisão.',
    heroPara2:
      'Para times que precisam manter uma voz consistente em briefings, rascunhos, revisões e trabalhos de conteúdo com apoio de IA.',
    problemEyebrow: 'Onde a voz começa a se perder',
    problemH2: 'A voz da marca é a primeira coisa a quebrar em um fluxo de trabalho com apoio de IA.',
    problemPara:
      'Gerar texto nunca foi a parte difícil. A parte difícil é que cada redator, e cada ferramenta de IA, tem sua própria voz padrão. Em um site real, essa perda de consistência é a diferença entre uma marca e uma pilha de páginas.',
    problemAnnotation: '↘ mesmo parágrafo, duas vozes',
    beforeStamp: 'Fora da voz',
    beforeHtml: `<p>No <span class="ba-strike">cenário digital acelerado</span> de hoje, <span class="ba-strike">aproveitar</span> <span class="ba-strike">soluções de IA de ponta</span> pode <span class="ba-strike">revolucionar</span> sua estratégia de conteúdo e desbloquear resultados <span class="ba-strike">transformadores</span>.</p>`,
    beforeTags: ['5 frases clichê', 'Sem estilo próprio', 'Soa genérico'],
    beforeNote: 'nada disso soa como a gente',
    afterStamp: 'Na voz',
    afterHtml: `<p>A maioria dos times de conteúdo não precisa de mais volume. Precisa de uma forma de manter <span class="ba-hl">uma única voz em todas as páginas</span>, mesmo quando pessoas diferentes, e a IA, estão escrevendo.</p>`,
    afterTags: ['Direto e confiante', 'Concreto', 'Alinhado à marca'],
    afterNote: 'agora soa como a marca',
    helpsEyebrow: 'Como esse Worker ajuda',
    helpsH2: 'Um editor de voz que lê cada rascunho em relação ao seu estilo próprio.',
    helpsPara:
      'Helena faz o trabalho que um bom editor de voz faz: de forma consistente, em cada página, antes que alguém precise ler o rascunho sem preparo nenhum.',
    checks: [
      'Tom em relação às regras de voz da marca',
      'Expressões proibidas e clichês',
      'Consistência entre as seções',
    ],
    improves: [
      'Frases fora da voz, reescritas no estilo certo',
      'Formulações vagas transformadas em algo concreto',
      'Ritmo e legibilidade',
    ],
    prepares: [
      'Um rascunho ajustado, pronto para reescrita',
      'Notas de orientação de voz e estilo',
      'Uma passagem limpa para a revisão',
    ],
    surfaces: [
      'Decisões de voz sobre as quais não tem certeza',
      'Sentido que pode ter mudado',
      'Afirmações que precisam de um olhar humano',
    ],
    ioH2: 'De onde Helena parte, e o que ela produz.',
    worksFrom: [
      'Regras de voz da marca',
      'Exemplos aprovados',
      'Briefing de conteúdo',
      'Rascunho existente',
      'Notas de revisão',
    ],
    produces: [
      'Orientação de voz e estilo',
      'Rascunho ajustado',
      'Seção reescrita',
      'Notas de revisão',
      'Pacote de handoff',
    ],
    scenarios: [
      {
        title: 'Três redatores, uma marca, três vozes.',
        description:
          'Helena lê cada rascunho em relação às mesmas regras de voz, então a assinatura muda, mas a voz não.',
      },
      {
        title: 'Rascunhos de IA que estão corretos, mas soam como os de todo mundo.',
        description:
          'Ela remove o registro genérico da IA e traz a escrita de volta para o seu estilo próprio antes da revisão.',
      },
      {
        title: 'Um freelancer novo ainda não encontrou a voz.',
        description:
          'Helena transforma o "quase lá, mas ainda não é a gente" em orientações concretas, frase por frase, para o freelancer aplicar.',
      },
      {
        title: 'Migração de páginas antigas com o tom todo desalinhado.',
        description:
          'Ela sinaliza primeiro os piores casos, para que o trabalho de reajuste de voz comece onde realmente importa.',
      },
      {
        title: 'Uma campanha precisa soar como uma peça só, não dez.',
        description:
          'Em landing pages, e-mails e posts, Helena mantém uma única voz, para que a campanha se leia como um todo.',
      },
      {
        title: 'Você está reescrevendo suas regras de voz e precisa de um teste.',
        description:
          'Passe algumas páginas reais por Helena para ver onde as novas regras realmente funcionam, e onde não funcionam.',
      },
    ],
    boundaryH2: 'Helena ajusta a voz. Quem decide continua sendo humano.',
    boundaryPara:
      'Voz é uma questão de julgamento, não de regra fixa. Helena sugere, verifica e prepara. Ela foi construída deliberadamente para parar onde começa o julgamento editorial, e nada do que ela toca é publicado sem a aprovação de uma pessoa.',
    boundaryChecklist: [
      'Helena sugere reescritas alinhadas à voz, mas nunca publica.',
      'As decisões de voz são estruturadas para um editor revisar.',
      'Trechos incertos ou arriscados são sinalizados, não escondidos.',
      'Helena apoia o julgamento editorial, nunca o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar ou enviar para o CMS' },
      { color: 'red', text: 'Substituir a decisão de um editor' },
      { color: 'amber', text: 'Neutralizar uma escolha deliberada' },
    ],
    relatedH2: 'Workers para os quais Helena faz o handoff.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Reescreve o rascunho completo usando as orientações de voz de Helena.',
        outputLabel: 'Rascunho reescrito',
        ctaLabel: 'Como Ellis reescreve',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Verifica se o rascunho ajustado está claro e pronto.',
        outputLabel: 'Resumo da revisão',
        ctaLabel: 'Como Quinn revisa',
      },
      {
        id: 'approval_report',
        description: 'Reúne a revisão em uma decisão de aprovação clara.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como Audrey aprova',
      },
    ],
    ctaH2: 'Mantenha a voz no trabalho.',
    ctaPara:
      'Adicione Helena ao seu fluxo de trabalho de conteúdo e mantenha uma única voz em todas as páginas, com aprovação humana antes de qualquer publicação.',
    guidanceFooterLabel: 'ADEQUAÇÃO DE VOZ',
    guidanceFooterValue: 'Forte · pronto para revisão',
  },

  content_analyst: {
    seoTitle: 'Worker de Análise de Conteúdo | WordPresto',
    metaDescription:
      'Omar analisa o conteúdo existente, o contexto e o propósito antes de qualquer edição ou reescrita começar. Para times que precisam de uma base clara antes de mexer em uma página.',
    h1: 'Entenda a página antes de reescrevê-la.',
    heroPara1:
      'A maioria das reescritas começa no lugar errado. Elas mudam o que é fácil de mudar, em vez do que realmente precisa mudar. Omar lê a página existente primeiro: o que ela está tentando fazer, se está funcionando e o que vale a pena manter. Isso dá ao trabalho seguinte uma base clara.',
    heroPara2:
      'Para revisões de conteúdo, migrações de site e qualquer reescrita que precise partir de evidências, e não de instinto.',
    problemEyebrow: 'Onde as reescritas dão errado',
    problemH2: 'Reescrever sem ler é a forma mais rápida de perder o que já estava funcionando.',
    problemPara:
      'Uma página que está no ar há dois anos tem algo nela: uma estrutura que os leitores responderam bem, um tom que funcionava, seções que rankeavam. Reescrever do zero sem revisar o que já existe significa começar cada projeto mais atrás do que precisaria.',
    problemAnnotation: '↘ análise primeiro, depois o briefing',
    beforeStamp: 'Sem análise',
    beforeHtml: `<p>Precisamos <span class="ba-strike">reescrever completamente</span> a homepage. Só <span class="ba-strike">deixe mais moderna</span> e <span class="ba-strike">acrescente mais palavras-chave</span>. A atual está <span class="ba-strike">longa demais e sem graça</span>.</p>`,
    beforeTags: ['Sem base', 'Direção vaga', 'Nada para construir a partir disso'],
    beforeNote: 'reescrevendo com base em um palpite',
    afterStamp: 'Análise concluída',
    afterHtml: `<p>A homepage atual tem <span class="ba-hl">segunda e terceira seções fortes</span> que têm bom desempenho. O parágrafo de abertura precisa ser substituído. A estrutura está sólida. Não é preciso reescrever tudo.</p>`,
    afterTags: ['Base clara', 'Escopo específico', 'Trabalho definido'],
    afterNote: 'agora sabemos o que mudar',
    helpsEyebrow: 'Como esse Worker ajuda',
    helpsH2: 'Um leitor de conteúdo que mapeia o que já existe antes de qualquer mudança.',
    helpsPara:
      'Omar faz o trabalho de análise que deveria acontecer antes de todo briefing ser escrito, mas raramente acontece: ler a página existente pelo que ela é e pelo que está tentando fazer.',
    checks: [
      'Se a página está cumprindo o propósito declarado',
      'Quais estrutura e seções já estão funcionando',
      'Lacunas entre a intenção e o conteúdo atual',
    ],
    improves: [
      'O escopo da reescrita, para cobrir menos, mas mudar mais',
      'A qualidade do briefing, dando aos redatores uma base real',
      'A priorização, para que as mudanças mais importantes venham primeiro',
    ],
    prepares: [
      'Um resumo da análise de conteúdo',
      'Uma visão clara do que manter, mudar ou cortar',
      'Um ponto de partida para o briefing ou a etapa de estrutura',
    ],
    surfaces: [
      'Páginas em que um ajuste leve já é suficiente',
      'Problemas estruturais que vão afetar qualquer reescrita',
      'Desalinhamentos entre o propósito da página e o conteúdo',
    ],
    ioH2: 'De onde Omar parte, e o que ele produz.',
    worksFrom: [
      'Conteúdo existente da página',
      'Objetivo declarado da página ou briefing',
      'Diretrizes da marca',
      'Definição de público',
      'Notas de revisões anteriores, se houver',
    ],
    produces: [
      'Resumo da análise de conteúdo',
      'O que manter, mudar ou cortar',
      'Notas de entrada para o briefing',
      'Relatório de lacunas',
      'Observações estruturais',
    ],
    scenarios: [
      {
        title: 'Uma migração de site com 200 páginas para revisar.',
        description:
          'Omar lê cada página com o mesmo padrão, sinalizando o que vale a pena manter e o que deve ser descartado.',
      },
      {
        title: 'Um briefing de atualização sem escopo claro.',
        description:
          'Ele mapeia o conteúdo existente para que o briefing tenha um ponto de partida específico, em vez de uma direção genérica.',
      },
      {
        title: 'Um site herdado que você não construiu.',
        description:
          'Omar dá uma visão rápida do que já existe, do que está funcionando e do que é ruído.',
      },
      {
        title: 'Uma página de bom desempenho que você tem receio de mexer.',
        description:
          'Ele identifica quais partes importam, para que você melhore ao redor delas em vez de substituí-las.',
      },
      {
        title: 'Um cliente insistindo em uma reescrita completa.',
        description:
          'A análise costuma mostrar que um ajuste mais leve já é suficiente, o que economiza orçamento e preserva o que já funciona.',
      },
      {
        title: 'Preparando o terreno para um redator novo no cliente.',
        description:
          'Uma análise de conteúdo dá a qualquer redator um briefing de verdade, em vez de começar do zero.',
      },
    ],
    boundaryH2: 'Omar analisa. Editores e clientes decidem.',
    boundaryPara:
      'A análise de conteúdo é um insumo, não uma instrução. Omar mapeia o que existe e sinaliza o que importa. O que muda, o que fica e o que é cortado é uma decisão do editor ou do cliente.',
    boundaryChecklist: [
      'Omar revisa e analisa, mas nunca altera o conteúdo diretamente.',
      'A análise dele é estruturada para um editor humano agir a partir dela.',
      'Decisões pouco claras ou contestadas são sinalizadas, não resolvidas.',
      'A análise apoia o julgamento editorial, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Editar ou reescrever páginas' },
      { color: 'red', text: 'Tomar decisões finais de escopo' },
      { color: 'amber', text: 'Sobrepor prioridades do cliente' },
    ],
    relatedH2: 'Workers para os quais Omar passa o trabalho.',
    relatedWorkerIds: [
      {
        id: 'structure',
        description: 'Usa a análise para moldar a hierarquia e o fluxo das seções.',
        outputLabel: 'Estrutura de conteúdo',
        ctaLabel: 'Como Marcus estrutura',
      },
      {
        id: 'content_brief_builder',
        description: 'Constrói o briefing a partir dos insights da análise.',
        outputLabel: 'Briefing de conteúdo',
        ctaLabel: 'Como Luca elabora o briefing',
      },
      {
        id: 'draft_rewrite',
        description: 'Reescreve com uma visão clara da página existente.',
        outputLabel: 'Rascunho ajustado',
        ctaLabel: 'Como Ellis reescreve',
      },
    ],
    ctaH2: 'Entenda a página antes de reescrevê-la.',
    ctaPara:
      'Adicione Omar ao seu fluxo de trabalho e toda reescrita começa a partir de uma visão clara do que já existe.',
    guidanceFooterLabel: 'STATUS DA ANÁLISE',
    guidanceFooterValue: 'Concluída · pronta para o briefing',
  },

  structure: {
    seoTitle: 'Worker de Estrutura | WordPresto',
    metaDescription:
      'Marcus organiza títulos, seções e o fluxo da página para dar ao conteúdo uma estrutura editorial clara, antes ou durante a redação. Para páginas que precisam de uma forma adequada antes de começar a escrever.',
    h1: 'Dê a cada rascunho uma forma mais clara.',
    heroPara1:
      'Conteúdo sem estrutura é difícil de revisar, fácil de interpretar errado e frustrante de editar. Marcus mapeia a hierarquia de títulos, a ordem das seções e o fluxo do conteúdo, para que cada rascunho comece ou continue com uma forma que faça sentido editorialmente e para o leitor.',
    heroPara2:
      'Para páginas que precisam de uma etapa estrutural antes da redação, de um reajuste no meio do rascunho ou de uma reorganização depois de pronto.',
    problemEyebrow: 'Onde a estrutura falha',
    problemH2: 'Conteúdo mal estruturado não se conserta com uma escrita melhor.',
    problemPara:
      'Você pode melhorar cada frase de uma página e ela ainda vai falhar se as seções estiverem na ordem errada, se os títulos não contarem uma história, ou se o ponto mais importante estiver enterrado no meio. Estrutura não é formatação, é lógica editorial.',
    problemAnnotation: '↘ primeiro a forma, depois a escrita',
    beforeStamp: 'Sem estrutura',
    beforeHtml: `<p>A página traz <span class="ba-strike">preços, depois a introdução, depois recursos, depois por que nos escolher</span>. Cada seção foi <span class="ba-strike">escrita separadamente</span> e não há <span class="ba-strike">um caminho de leitura claro</span> ao longo da página.</p>`,
    beforeTags: ['Seções fora de ordem', 'Sem fluxo claro', 'Difícil de acompanhar'],
    beforeNote: 'os leitores não vão chegar ao final',
    afterStamp: 'Estruturada',
    afterHtml: `<p>A abertura estabelece o propósito. A seção de recursos segue a ordem das perguntas do leitor. As provas vêm antes dos preços. <span class="ba-hl">Caminho de leitura claro, do problema até a decisão</span>.</p>`,
    afterTags: ['Fluxo lógico', 'Ordem editorial', 'Pronta para redação'],
    afterNote: 'os redatores conseguem trabalhar a partir disso',
    helpsEyebrow: 'Como esse Worker ajuda',
    helpsH2: 'Uma arquitetura editorial que dá a cada página um caminho de leitura.',
    helpsPara:
      'Marcus faz o trabalho estrutural que evita que o conteúdo vire uma pilha de seções soltas. Toda página que passa por uma etapa de estrutura sai com uma forma clara e defensável.',
    checks: [
      'Hierarquia de títulos e lógica das seções',
      'Ordem das seções em relação à jornada do leitor',
      'Elementos estruturais ausentes ou duplicados',
    ],
    improves: [
      'A sequência das seções, para seguir a lógica editorial',
      'A clareza dos títulos, para que cada um cumpra uma função editorial',
      'O fluxo da página, da abertura ao fechamento',
    ],
    prepares: [
      'Um roteiro estruturado para o redator',
      'Estrutura de títulos para o CMS',
      'Notas de seção para o briefing',
    ],
    surfaces: [
      'Decisões estruturais que precisam de input editorial',
      'Seções cujo propósito não está claro',
      'Blocos de conteúdo que pertencem a outra página',
    ],
    ioH2: 'De onde Marcus parte, e o que ele produz.',
    worksFrom: [
      'Briefing de conteúdo ou objetivo declarado da página',
      'Rascunho existente ou notas brutas',
      'Análise de conteúdo',
      'Diretrizes da marca',
      'Notas sobre a jornada do leitor',
    ],
    produces: [
      'Roteiro de conteúdo estruturado',
      'Hierarquia de títulos ordenada',
      'Plano de seções',
      'Notas de fluxo para o redator',
      'Recomendações estruturais',
    ],
    scenarios: [
      {
        title: 'Uma página longa escrita em uma única sessão, sem forma definida.',
        description:
          'Marcus reorganiza as seções em uma ordem de leitura clara, sem que o redator precise começar de novo.',
      },
      {
        title: 'Um briefing que precisa de um esqueleto estrutural antes da redação.',
        description:
          'Ele mapeia a hierarquia de títulos para que os redatores saibam exatamente o que vai em cada lugar.',
      },
      {
        title: 'Uma landing page com seções demais competindo entre si.',
        description:
          'Marcus identifica quais seções merecem estar ali e em que ordem devem aparecer.',
      },
      {
        title: 'Uma página migrada que foi estruturada para outro propósito.',
        description:
          'Ele reformula a estrutura para o objetivo atual, sem mexer no conteúdo em si.',
      },
      {
        title: 'Uma página de produto em que a seção mais importante vem por último.',
        description:
          'Muitas vezes, mover as provas para antes dos preços é tudo o que uma página precisa para ter melhor desempenho.',
      },
      {
        title: 'Um time de conteúdo em que cada redator estrutura de um jeito diferente.',
        description:
          'Uma etapa de estrutura cria um padrão de forma compartilhado antes de a escrita começar.',
      },
    ],
    boundaryH2: 'Marcus estrutura. Editores e clientes aprovam a forma.',
    boundaryPara:
      'Estrutura é uma recomendação, não uma diretriz. Marcus mapeia o melhor caminho de leitura com base no objetivo do conteúdo. Usar essa forma, ajustá-la ou descartá-la é uma decisão editorial e do cliente.',
    boundaryChecklist: [
      'Marcus estrutura e organiza, mas nunca reescreve o conteúdo.',
      'As escolhas estruturais são documentadas para os editores revisarem.',
      'Seções com propósito pouco claro são sinalizadas, não removidas.',
      'A estrutura apoia o briefing, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever ou editar o texto' },
      { color: 'red', text: 'Remover seções sem instrução' },
      { color: 'amber', text: 'Impor uma estrutura contrária ao briefing' },
    ],
    relatedH2: 'Workers para os quais Marcus faz o handoff.',
    relatedWorkerIds: [
      {
        id: 'content_brief_builder',
        description: 'Constrói o briefing em torno da estrutura aprovada.',
        outputLabel: 'Briefing de conteúdo',
        ctaLabel: 'Como Luca elabora o briefing',
      },
      {
        id: 'draft_rewrite',
        description: 'Redige dentro da estrutura que Marcus define.',
        outputLabel: 'Rascunho ajustado',
        ctaLabel: 'Como Ellis redige',
      },
      {
        id: 'voice_style',
        description: 'Aplica orientação de voz ao rascunho já estruturado.',
        outputLabel: 'Orientação de voz e estilo',
        ctaLabel: 'Como Helena ajusta a voz',
      },
    ],
    ctaH2: 'Dê a cada rascunho uma forma mais clara.',
    ctaPara:
      'Adicione Marcus ao seu fluxo de trabalho e toda página começa com uma estrutura editorial que redatores e editores realmente conseguem usar.',
    guidanceFooterLabel: 'STATUS DA ESTRUTURA',
    guidanceFooterValue: 'Delineada · pronta para redação',
  },

  content_brief_builder: {
    seoTitle: 'Worker de Criação de Briefings | WordPresto',
    metaDescription:
      'Luca transforma um tema e um objetivo em um briefing de conteúdo estruturado: propósito, público, ângulo e seções, antes de qualquer redação começar.',
    h1: 'Comece com um briefing que os redatores realmente conseguem usar.',
    heroPara1:
      'A maioria dos briefings de conteúdo é fraca demais para ajudar ou detalhada demais para deixar espaço para a escrita. Luca constrói briefings estruturados que dão aos redatores o contexto e a direção de que precisam, sem escrever por eles: propósito, público, ângulo, direção de tom e um plano de seções claro.',
    heroPara2:
      'Para novos projetos de conteúdo, briefings de agência e fluxos de trabalho com apoio de IA em que o resultado precisa de um ponto de partida claro.',
    problemEyebrow: 'Onde os briefings falham com os redatores',
    problemH2: 'Um briefing fraco produz um rascunho que você vai ter que reescrever de qualquer jeito.',
    problemPara:
      "Um briefing que diz 'escreva sobre nosso serviço para nossos clientes' não é um briefing. É uma instrução para adivinhar. Cada hora que um redator passa trabalhando a partir de um briefing vago é uma hora produzindo conteúdo que vai precisar de revisão estrutural antes de poder ser usado.",
    problemAnnotation: '↘ o briefing decide a qualidade do rascunho',
    beforeStamp: 'Briefing fraco',
    beforeHtml: `<p>Escreva um <span class="ba-strike">post de blog sobre nossa ferramenta de gestão de projetos</span>. Deixe <span class="ba-strike">envolvente e amigável para SEO</span>. Cerca de <span class="ba-strike">800 palavras</span>. Inclua uma <span class="ba-strike">chamada para ação no final</span>.</p>`,
    beforeTags: ['Sem público definido', 'Sem ângulo', 'Sem orientação de estrutura'],
    beforeNote: 'cada redator vai produzir algo diferente',
    afterStamp: 'Briefing claro',
    afterHtml: `<p><span class="ba-hl">Objetivo: ajudar gerentes de projeto de agências</span> a entender por que handoffs estruturados reduzem as rodadas de revisão. Público: tomadores de decisão. Ângulo: o custo de handoffs mal feitos. Seções: problema, abordagem, prova, próximo passo.</p>`,
    afterTags: ['Público específico', 'Ângulo claro', 'Seções estruturadas'],
    afterNote: 'os redatores conseguem partir daqui',
    helpsEyebrow: 'Como esse Worker ajuda',
    helpsH2: 'Um briefing que dá direção aos redatores sem tirar o julgamento deles.',
    helpsPara:
      'Luca constrói a estrutura do briefing que evita rodadas de reescrita. Um briefing bem delimitado, com um ângulo real, um público claro e orientação de seções, produz rascunhos melhores, porque os redatores sabem o que estão construindo.',
    checks: [
      'Se o propósito está claro e específico',
      'Se o público está definido o suficiente para se escrever para ele',
      'Se o ângulo é distinto e defensável',
    ],
    improves: [
      'O escopo do briefing, para ser acionável, não só indicativo',
      'A estrutura de seções, para que o roteiro seja utilizável',
      'A direção de tom e voz, para que o redator tenha um registro de partida',
    ],
    prepares: [
      'Um briefing de conteúdo estruturado',
      'Um plano de seções delineado',
      'Direção de escrita e restrições',
    ],
    surfaces: [
      'Temas que precisam de mais pesquisa antes',
      'Briefings que precisam de input do cliente antes da redação',
      'Conflitos de escopo que vão gerar rodadas de revisão mais tarde',
    ],
    ioH2: 'De onde Luca parte, e o que ele produz.',
    worksFrom: [
      'Tema ou assunto do conteúdo',
      'Objetivo declarado',
      'Definição de público',
      'Diretrizes de voz da marca',
      'Análise de conteúdo ou notas de pesquisa',
    ],
    produces: [
      'Briefing de conteúdo estruturado',
      'Roteiro de seções',
      'Notas de público e tom',
      'Restrições de escrita',
      'Handoff para o redator ou o Worker de redação',
    ],
    scenarios: [
      {
        title: 'Iniciando um novo programa de conteúdo com briefings consistentes.',
        description:
          'Luca constrói cada briefing com o mesmo padrão, para que os rascunhos partam do mesmo nível de direção.',
      },
      {
        title: 'Elaborando briefings para ferramentas de redação com apoio de IA.',
        description:
          'Um briefing estruturado é a diferença entre um rascunho de IA utilizável e um que precisa ser reescrito por completo.',
      },
      {
        title: 'Briefing de agência para um cliente recém-chegado.',
        description:
          'Luca transforma as notas de onboarding em um briefing que o redator consegue usar, sem adivinhar as preferências do cliente.',
      },
      {
        title: 'Montando um calendário de conteúdo com direção de verdade.',
        description:
          'Cada peça do calendário recebe um resumo de briefing que esclarece para que serve e para quem é.',
      },
      {
        title: 'Um lançamento de produto com várias peças de conteúdo.',
        description:
          'Uma estrutura de briefing aplicada de forma consistente faz com que todas as peças fiquem alinhadas, sem reuniões constantes de alinhamento.',
      },
      {
        title: 'Um redator novo na marca.',
        description:
          'Um briefing claro substitui semanas de transferência implícita de conhecimento por um documento de referência.',
      },
    ],
    boundaryH2: 'Luca elabora o briefing. Redatores e editores tomam as decisões criativas.',
    boundaryPara:
      'Um briefing é um ponto de partida, não um roteiro fechado. Luca estrutura o briefing para que a direção fique clara, mas a escrita, as escolhas de voz e os julgamentos criativos cabem ao redator e ao editor.',
    boundaryChecklist: [
      'Luca constrói briefings, mas nunca escreve o conteúdo em si.',
      'As decisões do briefing são documentadas para o editor ou o cliente revisarem.',
      'Lacunas de direção são sinalizadas antes de a redação começar.',
      'O briefing apoia o redator, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Redigir ou escrever conteúdo' },
      { color: 'red', text: 'Tomar decisões de posicionamento de marca' },
      { color: 'amber', text: 'Sobrepor o escopo acordado' },
    ],
    relatedH2: 'Workers para os quais Luca faz o handoff.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Parte do briefing e constrói o rascunho ajustado.',
        outputLabel: 'Rascunho ajustado',
        ctaLabel: 'Como Ellis redige',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Verifica se o rascunho realmente corresponde ao briefing.',
        outputLabel: 'Relatório de alinhamento',
        ctaLabel: 'Como Ada verifica',
      },
      {
        id: 'voice_style',
        description: 'Aplica as regras de voz de acordo com a direção do briefing.',
        outputLabel: 'Orientação de voz e estilo',
        ctaLabel: 'Como Helena ajusta a voz',
      },
    ],
    ctaH2: 'Comece com um briefing que os redatores realmente conseguem usar.',
    ctaPara:
      'Adicione Luca ao seu fluxo de trabalho e toda peça de conteúdo começa com um briefing claro que reduz as rodadas de revisão.',
    guidanceFooterLabel: 'STATUS DO BRIEFING',
    guidanceFooterValue: 'Pronto para redação',
  },

  draft_rewrite: {
    seoTitle: 'Worker de Reescrita de Rascunho | WordPresto',
    metaDescription:
      'Ellis constrói e reescreve rascunhos que seguem o briefing: estruturados, com propósito claro e prontos para revisão. Para conteúdos que precisam de um rascunho ajustado antes de começar a edição ou a revisão.',
    h1: 'Reescreva rascunhos sem perder o ponto principal.',
    heroPara1:
      'Um rascunho que se afasta do briefing, esconde o ponto principal ou fica duas vezes mais longo do que precisa não está pronto para revisão. Ellis reescreve rascunhos que seguem a estrutura do briefing, lideram com o que importa e têm uma leitura boa o suficiente para um editor tomar decisões a partir deles.',
    heroPara2:
      'Para primeiros rascunhos, rascunhos gerados por IA que precisam de ajuste e reescritas em que o briefing mudou.',
    problemEyebrow: 'Onde os rascunhos ficam aquém',
    problemH2: 'Um rascunho que se perde não pode ser editado até ganhar forma. Ele precisa ser reescrito.',
    problemPara:
      'A maioria dos primeiros rascunhos, de redatores e de IA, cobre o território certo, mas não na ordem certa. O ponto principal fica escondido. As seções se perdem. A introdução gasta três parágrafos para se aquecer. Deixar um rascunho pronto para revisão exige mais do que corrigir frases.',
    problemAnnotation: '↘ dê forma ao rascunho, depois revise',
    beforeStamp: 'Sem forma',
    beforeHtml: `<p>Somos uma <span class="ba-strike">fornecedora líder de soluções inovadoras</span>. Fundada em 2018, <span class="ba-strike">nosso time de profissionais dedicados</span> trabalha duro todos os dias para <span class="ba-strike">entregar valor aos nossos valiosos clientes</span>. Acreditamos na <span class="ba-strike">excelência</span>.</p>`,
    beforeTags: ['Sem ponto claro', 'Abertura genérica', 'Não segue o briefing'],
    beforeNote: 'esse rascunho não dá para editar',
    afterStamp: 'De acordo com o briefing',
    afterHtml: `<p>Bons handoffs de conteúdo levam <span class="ba-hl">duas rodadas de revisão em vez de cinco</span>. A diferença está em ter um briefing que todo mundo no projeto realmente leu antes de a escrita começar.</p>`,
    afterTags: ['Guiado pelo ponto principal', 'Fiel ao briefing', 'Pronto para revisão'],
    afterNote: 'agora um editor consegue trabalhar a partir disso',
    helpsEyebrow: 'Como esse Worker ajuda',
    helpsH2: 'Um redator que segue o briefing e produz algo com que um editor consegue trabalhar.',
    helpsPara:
      'Ellis faz a redação e a reescrita que levam o conteúdo a um nível revisável. O objetivo não é uma peça finalizada, é um rascunho com forma clara, que segue o briefing e dá ao editor algo real para trabalhar.',
    checks: [
      'Se o rascunho segue a estrutura do briefing',
      'Se a abertura estabelece o ponto principal',
      'Se as seções estão em uma ordem lógica',
    ],
    improves: [
      'A abertura, para que o ponto principal venha na frente',
      'A estrutura de seções, para seguir a lógica do briefing',
      'A extensão e o ritmo, para não se alongar demais',
    ],
    prepares: [
      'Um rascunho ajustado, pronto para revisão editorial',
      'Uma reescrita que o time do briefing pode aprovar',
      'Conteúdo pronto para uma etapa de voz ou qualidade',
    ],
    surfaces: [
      'Lacunas do briefing que surgiram durante a redação',
      'Seções que precisam de input do cliente ou de um especialista',
      'Trechos em que a intenção não está clara',
    ],
    ioH2: 'De onde Ellis parte, e o que ele produz.',
    worksFrom: [
      'Briefing de conteúdo',
      'Rascunho existente ou notas brutas',
      'Diretrizes de voz da marca',
      'Roteiro de estrutura',
      'Notas de pesquisa',
    ],
    produces: [
      'Rascunho ajustado',
      'Seções de conteúdo reescritas',
      'Notas de redação para o editor',
      'Notas de desvio do briefing',
      'Rascunho pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Um rascunho de IA que está correto, mas totalmente sem forma.',
        description:
          'Ellis dá a ele estrutura e uma abertura forte, transformando o resultado em um rascunho revisável.',
      },
      {
        title: 'Um primeiro rascunho de um redator novo que precisa de trabalho estrutural.',
        description: 'Ele reformula sem reescrever tudo, preservando o que já funciona.',
      },
      {
        title: 'Um briefing que mudou no meio do projeto.',
        description: 'Ellis reescreve as seções afetadas de acordo com a nova direção.',
      },
      {
        title: 'Uma página revisada por gente demais, que perdeu a coerência.',
        description:
          'Uma única reescrita limpa, alinhada ao briefing original, recupera a consistência.',
      },
      {
        title: 'Conteúdo necessário com urgência, sem tempo para várias rodadas.',
        description:
          'Um primeiro rascunho limpo poupa os ciclos de revisão que rascunhos vagos costumam gerar.',
      },
      {
        title: 'Um cliente que quer ver um rascunho antes de aprovar a produção completa.',
        description: 'Ellis produz um rascunho enxuto que dá ao cliente algo real para reagir.',
      },
    ],
    boundaryH2: 'Ellis redige. Editores e clientes tomam as decisões finais.',
    boundaryPara:
      'Um rascunho ajustado é um insumo para a edição, não o produto final. Ellis reescreve para levar o conteúdo a um nível revisável. Decisões criativas, aprovação e mudanças finais são decisões editoriais e do cliente.',
    boundaryChecklist: [
      'Ellis redige e reescreve, mas nunca publica.',
      'Os rascunhos são estruturados para um editor revisar e aprovar.',
      'Desvios do briefing são registrados, não corrigidos silenciosamente.',
      'A redação apoia o briefing, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar ou finalizar conteúdo' },
      { color: 'red', text: 'Sobrepor o escopo do briefing' },
      { color: 'amber', text: 'Tomar decisões de tom sem o briefing' },
    ],
    relatedH2: 'Workers para os quais Ellis faz o handoff.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: 'Aplica as regras de voz ao rascunho ajustado de Ellis.',
        outputLabel: 'Orientação de voz e estilo',
        ctaLabel: 'Como Helena ajusta a voz',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa o rascunho quanto à clareza e à prontidão.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como Quinn revisa',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Verifica se o rascunho cumpre o briefing.',
        outputLabel: 'Relatório de alinhamento',
        ctaLabel: 'Como Ada verifica',
      },
    ],
    ctaH2: 'Reescreva rascunhos sem perder o ponto principal.',
    ctaPara:
      'Adicione Ellis ao seu fluxo de trabalho e todo rascunho chega à revisão já ajustado, estruturado e alinhado ao briefing.',
    guidanceFooterLabel: 'STATUS DO RASCUNHO',
    guidanceFooterValue: 'Ajustado · pronto para revisão',
  },

  draft_quality_reviewer: {
    seoTitle: 'Worker de Revisão de Qualidade do Rascunho | WordPresto',
    metaDescription:
      'Quinn verifica se um rascunho está claro, estruturado e pronto para avançar antes de chegar a um cliente ou ao CMS. Para times que precisam de uma revisão estruturada antes da aprovação.',
    h1: 'Revise o rascunho antes de ele avançar.',
    heroPara1:
      'Um rascunho que vai para um cliente ou uma reunião de revisão com problemas estruturais, seções pouco claras ou desvio do briefing faz todo mundo perder tempo. Quinn verifica cada rascunho antes de ele avançar: se está claro, se está estruturado, se segue o briefing e se está pronto para a próxima etapa.',
    heroPara2:
      'Para portões de qualidade antes da entrega ao cliente, antes do handoff para o CMS e antes de qualquer conteúdo ser aprovado.',
    problemEyebrow: 'Onde os rascunhos avançam cedo demais',
    problemH2: 'Um rascunho que chega à revisão cedo demais custa mais caro do que esperar.',
    problemPara:
      'Enviar um rascunho para um cliente ou um editor sênior antes de ele estar pronto não é eficiência, é um investimento ao contrário. O custo de uma revisão estrutural depois do feedback do cliente é maior do que uma etapa de revisão antes de o rascunho sair do time.',
    problemAnnotation: '↘ revise antes de avançar',
    beforeStamp: 'Não revisado',
    beforeHtml: `<p>Aqui está o <span class="ba-strike">rascunho finalizado</span> para sua revisão. Estamos <span class="ba-strike">satisfeitos com ele</span>. Nos avise <span class="ba-strike">se quiser alguma mudança</span>. Achamos que ele cobre <span class="ba-strike">tudo</span> o que você pediu.</p>`,
    beforeTags: ['Não verificado', 'Briefing não conferido', 'Problemas não identificados'],
    beforeNote: 'o cliente vai encontrar os problemas',
    afterStamp: 'Revisado',
    afterHtml: `<p>A segunda seção esconde o principal benefício. A abertura tem boa leitura. <span class="ba-hl">Três problemas específicos sinalizados</span> antes de o rascunho chegar ao cliente, cada um com uma correção clara.</p>`,
    afterTags: ['Problemas sinalizados', 'Briefing conferido', 'Pronto para apresentar'],
    afterNote: 'problemas encontrados antes do handoff',
    helpsEyebrow: 'Como esse Worker ajuda',
    helpsH2: 'Uma verificação de qualidade que pega os problemas antes que virem comentários do cliente.',
    helpsPara:
      'Quinn faz a etapa de revisão estruturada que deveria acontecer entre a redação e a entrega. Não é uma revisão linha a linha, é uma verificação de prontidão que identifica se o rascunho está claro, estruturado e pronto para avançar.',
    checks: [
      'Se o rascunho cobre o briefing',
      'Se as seções estão claras e em ordem',
      'Se a abertura estabelece o propósito',
    ],
    improves: [
      'O feedback de revisão, para ser específico e acionável',
      'A avaliação de qualidade do rascunho, para dar aos editores uma visão clara',
      'As notas de handoff, para que a próxima etapa fique clara',
    ],
    prepares: [
      'Notas de revisão estruturadas para o editor',
      'Uma decisão clara de prontidão para o time',
      'Problemas específicos e correções sugeridas',
    ],
    surfaces: [
      'Problemas estruturais que exigem reescrita',
      'Lacunas ou desvios do briefing que o redator não percebeu',
      'Seções que precisam de input do cliente ou de um especialista',
    ],
    ioH2: 'De onde Quinn parte, e o que ele produz.',
    worksFrom: [
      'Conteúdo do rascunho',
      'Briefing de conteúdo original',
      'Diretrizes de voz da marca',
      'Critérios de revisão',
      'Notas de revisões anteriores',
    ],
    produces: [
      'Notas de revisão estruturadas',
      'Avaliação de prontidão',
      'Sinalizações específicas de problemas',
      'Recomendações de correção',
      'Notas de handoff para a próxima etapa',
    ],
    scenarios: [
      {
        title: 'Um rascunho pronto para entrega ao cliente na sexta-feira.',
        description:
          'Quinn verifica na quinta-feira, para que qualquer problema seja corrigido antes de o cliente ver.',
      },
      {
        title: 'Uma peça longa com contribuição de três redatores.',
        description:
          'Ele identifica onde a voz muda, onde as seções se contradizem e onde a estrutura se quebra.',
      },
      {
        title: 'Um rascunho de IA que passou por uma verificação básica.',
        description:
          'Quinn aplica padrões editoriais, não só gramática: clareza, estrutura e alinhamento ao briefing.',
      },
      {
        title: 'Um programa de conteúdo com qualidade inconsistente.',
        description:
          'Uma etapa de revisão consistente, sempre na mesma fase, cria uma base de qualidade que o time pode usar como referência.',
      },
      {
        title: 'Um briefing que mudou no meio do rascunho.',
        description:
          'Quinn verifica o rascunho em relação ao briefing final, não ao original, e sinaliza o que precisa ser atualizado.',
      },
      {
        title: 'Um cliente que deixa comentários detalhados de revisão em todo rascunho.',
        description:
          'Menos problemas chegando ao cliente significa menos rodadas de revisão e uma aprovação mais rápida.',
      },
    ],
    boundaryH2: 'Quinn revisa. Editores e clientes decidem o que mudar.',
    boundaryPara:
      'Uma revisão é um insumo estruturado para a edição, não um conjunto de instruções. Quinn identifica os problemas e os sinaliza com clareza. O que muda, e como, é uma decisão editorial e do cliente.',
    boundaryChecklist: [
      'Quinn revisa e sinaliza, mas nunca edita diretamente.',
      'As notas de revisão são estruturadas para um editor agir a partir delas.',
      'Decisões incertas ou subjetivas são sinalizadas como perguntas, não como decisões.',
      'A revisão apoia o julgamento editorial, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Editar ou reescrever conteúdo' },
      { color: 'red', text: 'Tomar decisões finais sobre o conteúdo' },
      { color: 'amber', text: 'Aprovar conteúdo para publicação' },
    ],
    relatedH2: 'Workers para os quais Quinn passa o trabalho.',
    relatedWorkerIds: [
      {
        id: 'section_rewrite',
        description: 'Reescreve as seções específicas que Quinn sinaliza como fracas.',
        outputLabel: 'Seções reescritas',
        ctaLabel: 'Como Rosa reescreve',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Verifica o alinhamento entre briefing e rascunho em detalhe.',
        outputLabel: 'Relatório de alinhamento',
        ctaLabel: 'Como Ada verifica o alinhamento',
      },
      {
        id: 'approval_report',
        description: 'Reúne a revisão em uma decisão de aprovação.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como Audrey aprova',
      },
    ],
    ctaH2: 'Revise o rascunho antes de ele avançar.',
    ctaPara:
      'Adicione Quinn ao seu fluxo de trabalho e todo rascunho chega ao cliente ou ao CMS já verificado, com os problemas sinalizados antes de virarem rodadas de revisão.',
    guidanceFooterLabel: 'STATUS DA REVISÃO',
    guidanceFooterValue: 'Verificado · problemas sinalizados',
  },

  section_rewrite: {
    seoTitle: 'Worker de Reescrita de Seções | WordPresto',
    metaDescription:
      'Rosa reescreve seções específicas que estão pouco claras, rasas ou fora do briefing, sem mexer no resto do texto. Para melhorias pontuais em nível de seção depois da revisão.',
    h1: 'Corrija a seção fraca sem reescrever a página inteira.',
    heroPara1:
      'Quando as notas de revisão sinalizam uma seção específica como rasa, fora do briefing ou pouco clara, a resposta não é reescrever a página inteira. Rosa reescreve a seção específica que precisa de correção, seguindo o briefing e a voz do conteúdo ao redor, sem mexer no que já está funcionando.',
    heroPara2:
      'Para melhorias pontuais de seção depois da revisão do rascunho, correções no meio da produção e pedidos de revisão específicos de clientes ou editores.',
    problemEyebrow: 'Onde as seções deixam as páginas a desejar',
    problemH2: 'Uma seção fraca pode comprometer uma página que, de resto, funciona bem.',
    problemPara:
      'Raramente é a página inteira que precisa de uma reescrita. Costuma ser a terceira seção que esconde o ponto principal, ou a seção de prova que não tem conteúdo suficiente, ou a conclusão que não fecha bem. Reescrever a página inteira para corrigir uma seção desperdiça o trabalho que já está bom.',
    problemAnnotation: '↘ corrija a seção, não a página',
    beforeStamp: 'Precisa de trabalho',
    beforeHtml: `<p>Nosso <span class="ba-strike">time tem ampla experiência</span> nessa área e <span class="ba-strike">nos orgulhamos</span> de entregar <span class="ba-strike">um trabalho de alta qualidade</span>. Temos <span class="ba-strike">muitos clientes satisfeitos</span> que ficariam felizes em <span class="ba-strike">nos recomendar</span>.</p>`,
    beforeTags: ['Afirmações vagas', 'Sem detalhes concretos', 'Tom fora do briefing'],
    beforeNote: 'essa seção não está fazendo nada',
    afterStamp: 'Reescrita',
    afterHtml: `<p>Reduzimos as rodadas de revisão em 40% em doze clientes de agência no último ano, usando <span class="ba-hl">fluxos de trabalho estruturados de briefing a rascunho</span> que a maioria dos times consegue implementar em menos de duas semanas.</p>`,
    afterTags: ['Específica', 'De acordo com o briefing', 'Justifica seu lugar'],
    afterNote: 'agora essa seção funciona',
    helpsEyebrow: 'Como esse Worker ajuda',
    helpsH2: 'Uma editora de seções que corrige o que precisa ser corrigido, sem mexer no que não precisa.',
    helpsPara:
      'Rosa reescreve em nível de seção: o parágrafo específico, o bloco de prova fraco, a introdução que não convence. Sem reescrever a página inteira, sem mexer nas seções que já estão funcionando.',
    checks: [
      'Se a seção cumpre o propósito declarado',
      'Se ela combina com o briefing e o tom ao redor',
      'Se ela justifica seu lugar na estrutura da página',
    ],
    improves: [
      'A clareza e a especificidade da seção',
      'O alinhamento de tom da seção com o resto do texto',
      'A extensão e a economia da seção',
    ],
    prepares: [
      'Uma seção reescrita, pronta para inserir',
      'Notas de seção para o editor',
      'Confirmação de alinhamento com o briefing',
    ],
    surfaces: [
      'Seções em que reescrever não basta e é preciso mudar a estrutura',
      'Informações que faltam e que o redator precisa fornecer',
      'Conflitos de briefing que causaram o problema na seção',
    ],
    ioH2: 'De onde Rosa parte, e o que ela produz.',
    worksFrom: [
      'A seção específica a reescrever',
      'Briefing de conteúdo original',
      'Notas de revisão',
      'Diretrizes de voz da marca',
      'Contexto da página ao redor',
    ],
    produces: [
      'Seção reescrita',
      'Notas de edição da seção',
      'Verificação de alinhamento com o briefing',
      'Notas de handoff para o editor',
    ],
    scenarios: [
      {
        title: 'Uma revisão sinalizou a seção de prova como rasa demais.',
        description:
          'Rosa reescreve essa seção com detalhes mais concretos, sem mudar nada ao redor.',
      },
      {
        title: 'Um cliente pediu que uma seção fosse reconsiderada depois da aprovação.',
        description:
          'Ela reescreve a seção específica de acordo com a observação do cliente, sem reabrir o resto do texto.',
      },
      {
        title: 'A introdução não combina com a página que o briefing descreveu.',
        description:
          'Uma reescrita pontual da introdução realinha a abertura da página sem uma revisão completa.',
      },
      {
        title: 'Um rascunho de IA em que algumas seções estão boas e uma claramente não está.',
        description: 'Rosa corrige a seção fraca e deixa as outras como estão.',
      },
      {
        title: 'Um artigo longo em que o terço do meio perde o ritmo.',
        description:
          'Reescrever em nível de seção o trecho do meio, que está fraco, coloca o texto de volta nos trilhos.',
      },
      {
        title: 'Um redator que produziu um rascunho forte, mas teve dificuldade com a chamada para ação.',
        description: 'Reescrever uma seção é mais rápido e melhor do que devolver o texto inteiro.',
      },
    ],
    boundaryH2: 'Rosa reescreve seções. Editores aprovam as mudanças.',
    boundaryPara:
      'Uma seção reescrita é uma opção de substituição, não uma edição final. Rosa produz a versão revisada; se ela entra, é ajustada ou é devolvida é uma decisão editorial.',
    boundaryChecklist: [
      'Rosa reescreve seções, mas nunca as publica.',
      'As seções reescritas são apresentadas para revisão editorial.',
      'O escopo se limita à seção sinalizada, a menos que haja outra instrução.',
      'As reescritas de seção seguem o briefing, não a preferência do Worker.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever além da seção combinada' },
      { color: 'red', text: 'Publicar mudanças diretamente' },
      { color: 'amber', text: 'Alterar o escopo do briefing' },
    ],
    relatedH2: 'Workers com os quais Rosa trabalha lado a lado.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa o rascunho completo e sinaliza quais seções precisam de trabalho.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como Quinn revisa',
      },
      {
        id: 'readability',
        description: 'Melhora o fluxo e a clareza depois das reescritas de seção.',
        outputLabel: 'Rascunho aprimorado',
        ctaLabel: 'Como Priya aprimora',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Verifica se a seção reescrita está alinhada ao briefing.',
        outputLabel: 'Relatório de alinhamento',
        ctaLabel: 'Como Ada verifica',
      },
    ],
    ctaH2: 'Corrija a seção fraca sem reescrever a página inteira.',
    ctaPara:
      'Adicione Rosa ao seu fluxo de trabalho e as correções pontuais de seção acontecem rápido, com precisão e sem mexer no que já está funcionando.',
    guidanceFooterLabel: 'STATUS DA SEÇÃO',
    guidanceFooterValue: 'Reescrita · pronta para o editor',
  },

  approval_report: {
    seoTitle: 'Worker de Relatório de Aprovação | WordPresto',
    metaDescription:
      'Audrey resume o que está pronto, o que precisa de atenção e o que não deve avançar, para que as pessoas tomem uma decisão de aprovação com confiança.',
    h1: 'Torne a aprovação mais confiável.',
    heroPara1:
      'Decisões de aprovação tomadas sem uma visão clara do que está pronto costumam dar errado de duas formas: aprova-se o que não deveria, ou trava-se o que já estava pronto para avançar. Audrey monta um relatório de aprovação estruturado, para que quem toma a decisão de aprovação tenha as informações de que realmente precisa.',
    heroPara2:
      'Para diretores editoriais, líderes de projeto, gerentes de conta e qualquer pessoa que precise tomar uma decisão de aprovação com confiança, sem ler cada rascunho linha por linha.',
    problemEyebrow: 'Onde a aprovação falha',
    problemH2: 'A aprovação só é confiável quando quem aprova tem as informações certas.',
    problemPara:
      'A maioria dos problemas de aprovação são problemas de informação. Quem vai assinar não tem uma visão clara do que foi revisado e do que não foi, ou está lendo cada rascunho sozinho porque não existe um resumo. De qualquer forma, isso leva mais tempo do que deveria e as decisões ficam menos confiáveis do que precisariam ser.',
    problemAnnotation: '↘ aprovação sem achismo',
    beforeStamp: 'Sem relatório',
    beforeHtml: `<p><span class="ba-strike">Aqui estão os 14 rascunhos</span> para aprovação. Alguns já foram revisados, <span class="ba-strike">não sabemos ao certo quais</span>. Tem umas <span class="ba-strike">notas na pasta compartilhada</span> em algum lugar. Nos avise <span class="ba-strike">se estiver de acordo em aprovar</span>.</p>`,
    beforeTags: ['Sem resumo', 'Sem status claro', 'Quem aprova fica no escuro'],
    beforeNote: 'ninguém consegue aprovar isso com confiança',
    afterStamp: 'Relatório pronto',
    afterHtml: `<p><span class="ba-hl">9 peças prontas para aprovação. 3 precisam de revisão pontual antes de aprovar. 2 sinalizadas para revisão editorial</span>, com problemas específicos anotados e próximos passos recomendados para cada uma.</p>`,
    afterTags: ['Status claro', 'Sinalizações específicas', 'Quem aprova tem tudo o que precisa'],
    afterNote: 'a aprovação pode acontecer agora',
    helpsEyebrow: 'Como esse Worker ajuda',
    helpsH2: 'Um relatório que dá a quem aprova uma visão clara, não uma pilha de rascunhos.',
    helpsPara:
      'Audrey reúne tudo o que quem aprova precisa em um único relatório estruturado: o que está pronto, o que não está, quais são os problemas específicos e o que precisa acontecer a seguir. As decisões de aprovação ficam mais rápidas e mais confiáveis.',
    checks: [
      'Se cada peça passou pelas etapas de revisão exigidas',
      'Se os problemas pendentes estão claramente documentados',
      'Se algo está sinalizado como risco antes da aprovação',
    ],
    improves: [
      'A velocidade do processo de aprovação, eliminando ambiguidades',
      'A confiança na aprovação, trazendo à tona as informações certas',
      'A documentação de aprovação para auditoria e referência',
    ],
    prepares: [
      'Um relatório de aprovação estruturado',
      'Um status claro de pronto/não pronto para cada peça',
      'Próximos passos específicos para o que ainda não foi aprovado',
    ],
    surfaces: [
      'Conteúdo que precisa de mais revisão antes da aprovação',
      'Problemas de conformidade ou risco que precisam ser resolvidos antes',
      'Peças travadas por falta de informação',
    ],
    ioH2: 'De onde Audrey parte, e o que ela produz.',
    worksFrom: [
      'Notas de revisão de qualidade do rascunho',
      'Sinalizações de risco e conformidade',
      'Relatórios de alinhamento ao briefing',
      'Critérios de aprovação vigentes',
      'Status do conteúdo em todo o projeto',
    ],
    produces: [
      'Relatório de aprovação estruturado',
      'Classificação pronto / precisa de atenção / não pronto',
      'Notas de problemas específicos com próximos passos',
      'Documentação de aprovação',
      'Notas de handoff para o CMS ou a publicação',
    ],
    scenarios: [
      {
        title: 'Um lote de 20 peças de conteúdo precisa da aprovação do diretor até sexta-feira.',
        description:
          'Audrey produz um relatório que o diretor consegue revisar em 20 minutos, em vez de 2 horas.',
      },
      {
        title: 'Um cliente revisando uma migração de site antes do lançamento.',
        description:
          'O relatório de aprovação dá ao cliente uma visão clara do que já foi revisado, do que está pronto e do que ainda está pendente.',
      },
      {
        title: 'Um programa de conteúdo sensível a questões de conformidade.',
        description:
          'Audrey acompanha quais peças já passaram pela revisão de conformidade e destaca as que ainda não passaram.',
      },
      {
        title: 'Uma agência em que as decisões de aprovação são inconsistentes.',
        description: 'Um relatório estruturado cria um padrão de aprovação que vale para todos os projetos.',
      },
      {
        title: 'Um projeto que travou na aprovação e ninguém sabe por quê.',
        description:
          'O relatório identifica exatamente o que está travando cada peça e o que precisa acontecer para ela avançar.',
      },
      {
        title: 'Vários stakeholders com critérios de aprovação diferentes.',
        description:
          'Um único relatório mapeia todos os critérios e mostra o status de cada peça em relação a cada conjunto de exigências.',
      },
    ],
    boundaryH2: 'Audrey relata. Humanos aprovam.',
    boundaryPara:
      'Aprovação é uma decisão humana. Audrey fornece as informações estruturadas que tornam essa decisão confiável. A decisão final, e a responsabilidade que vem junto, é sempre de uma pessoa.',
    boundaryChecklist: [
      'Audrey relata o status, mas nunca aprova o conteúdo por conta própria.',
      'Os relatórios de aprovação são estruturados para quem tem essa responsabilidade revisar.',
      'Sinalizações de risco e conformidade são incluídas, não filtradas.',
      'O relatório apoia o julgamento de aprovação, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Aprovar ou dar sinal verde ao conteúdo' },
      { color: 'red', text: 'Ignorar sinalizações de conformidade' },
      { color: 'amber', text: 'Marcar conteúdo como pronto sem evidências' },
    ],
    relatedH2: 'Workers com os quais Audrey trabalha.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Fornece a revisão de qualidade que alimenta o relatório de aprovação.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como Quinn revisa',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Sinaliza problemas de conformidade e risco antes da aprovação.',
        outputLabel: 'Relatório de risco e conformidade',
        ctaLabel: 'Como Vera sinaliza riscos',
      },
      {
        id: 'cms_handoff',
        description: 'Pega o conteúdo aprovado e o prepara para o handoff ao CMS.',
        outputLabel: 'Pacote de handoff',
        ctaLabel: 'Como Ravi faz o handoff',
      },
    ],
    ctaH2: 'Torne a aprovação mais confiável.',
    ctaPara:
      'Adicione Audrey ao seu fluxo de trabalho e toda decisão de aprovação é tomada com uma visão clara e completa do que está pronto e do que não está.',
    guidanceFooterLabel: 'STATUS DA APROVAÇÃO',
    guidanceFooterValue: 'Pronto para aprovação humana',
  },

  readability: {
    seoTitle: 'Worker de Legibilidade | WordPresto',
    metaDescription:
      'Priya enxuga frases, simplifica a estrutura e melhora o fluxo para que o conteúdo tenha uma leitura clara para o público-alvo. Para rascunhos que estão corretos, mas mais difíceis de ler do que deveriam.',
    h1: 'Torne o bom conteúdo mais fácil de ler.',
    heroPara1:
      'Um conteúdo pode ser factualmente correto, bem estruturado e alinhado ao briefing, e ainda assim ser mais difícil de ler do que precisa. Priya enxuga frases, quebra parágrafos densos, remove qualificações desnecessárias e melhora o fluxo, sem mudar o sentido nem perder a voz.',
    heroPara2:
      'Para rascunhos que já estão prontos em conteúdo, mas precisam de uma etapa de legibilidade antes da revisão ou da entrega.',
    problemEyebrow: 'Onde a legibilidade falha',
    problemH2: 'Conteúdo denso e correto ainda assim perde leitores.',
    problemPara:
      'A maioria dos problemas de legibilidade não tem a ver com as palavras, tem a ver com o tamanho das frases, a densidade dos parágrafos e a proporção entre ressalvas e afirmações diretas. Um leitor que desiste no terceiro parágrafo não leu o conteúdo, por mais preciso que ele fosse.',
    problemAnnotation: '↘ legível significa realmente lido',
    beforeStamp: 'Difícil de ler',
    beforeHtml: `<p>No contexto do <span class="ba-strike">atual cenário digital, em que</span> muitas organizações estão <span class="ba-strike">cada vez mais buscando aproveitar</span> as ferramentas disponíveis, é importante <span class="ba-strike">ter em mente que</span> a abordagem adotada vai <span class="ba-strike">inevitavelmente ter</span> um impacto nos resultados.</p>`,
    beforeTags: ['Longa demais', 'Cheia de ressalvas', 'Soa evasiva'],
    beforeNote: 'ninguém vai ler isso até o final',
    afterStamp: 'Legível',
    afterHtml: `<p>As ferramentas que você usa afetam seus resultados. <span class="ba-hl">Escolher a abordagem certa é a decisão mais importante</span>, e costuma ser a que os times dedicam menos tempo a pensar.</p>`,
    afterTags: ['Curta e direta', 'Clara', 'Leitura natural'],
    afterNote: 'essa versão é lida até o final',
    helpsEyebrow: 'Como esse Worker ajuda',
    helpsH2: 'Uma etapa de legibilidade que faz o conteúdo realmente ser lido.',
    helpsPara:
      'Priya faz o trabalho em nível de frase e de parágrafo que transforma um conteúdo tecnicamente correto em algo que o leitor termina de ler. Não é uma reescrita, é uma etapa de enxugamento que remove tudo o que dificulta a leitura.',
    checks: [
      'O tamanho das frases em relação ao público-alvo',
      'A densidade dos parágrafos e a facilidade de escaneamento',
      'Ressalvas e qualificações desnecessárias',
    ],
    improves: [
      'A estrutura das frases, para uma leitura natural',
      'O tamanho dos parágrafos e o espaço para respirar',
      'As frases de abertura, para que cada parágrafo comece pelo ponto principal',
    ],
    prepares: [
      'Um rascunho aprimorado, já com a etapa de legibilidade aplicada',
      'Notas de legibilidade para o editor',
      'Conteúdo pronto para a revisão final',
    ],
    surfaces: [
      'Seções em que o sentido foi sacrificado em nome da densidade',
      'Trechos que precisam de mais informação para fazer sentido',
      'Desalinhamentos de nível entre o conteúdo e o leitor',
    ],
    ioH2: 'De onde Priya parte, e o que ela produz.',
    worksFrom: [
      'Rascunho existente',
      'Definição de público',
      'Diretrizes de voz da marca',
      'Meta de legibilidade ou nota do briefing',
      'Notas de revisão',
    ],
    produces: [
      'Rascunho aprimorado',
      'Notas da etapa de legibilidade',
      'Melhorias específicas de frases e parágrafos',
      'Notas de handoff para o editor',
    ],
    scenarios: [
      {
        title: 'Uma página de produto técnica escrita por um engenheiro.',
        description: 'Priya traduz sem simplificar demais: clara para o público-alvo, mas ainda precisa.',
      },
      {
        title: 'Um artigo longo que é denso do início ao fim.',
        description:
          'Uma etapa de legibilidade cria espaço para respirar e torna o texto legível de uma só vez.',
      },
      {
        title: 'Conteúdo produzido por IA que está gramaticalmente correto, mas difícil de escanear.',
        description: 'Ela melhora o fluxo e o ritmo das frases, sem mudar a estrutura.',
      },
      {
        title: 'Um documento de conformidade que o jurídico precisa ler.',
        description: 'Melhorias de legibilidade tornam a leitura mais rápida e a ação mais fácil.',
      },
      {
        title: 'Um cliente que sempre diz que o conteúdo "parece pesado".',
        description: 'Uma etapa de legibilidade costuma resolver isso sem mudanças estruturais.',
      },
      {
        title: 'Uma landing page com uma taxa de rejeição alta.',
        description:
          'Legibilidade costuma ser a diferença entre uma página que a pessoa lê e uma página que a pessoa abandona.',
      },
    ],
    boundaryH2: 'Priya melhora a legibilidade. Redatores e editores mantêm a voz.',
    boundaryPara:
      'Uma etapa de legibilidade melhora o fluxo sem mudar o sentido nem sobrepor decisões de voz. Se uma frase é deliberadamente complexa por razões estilísticas, Priya sinaliza isso em vez de simplificá-la.',
    boundaryChecklist: [
      'Priya melhora a legibilidade, mas nunca muda o sentido.',
      'Decisões estilísticas que parecem erros são sinalizadas, não alteradas.',
      'As mudanças de legibilidade são documentadas para revisão editorial.',
      'A legibilidade apoia a voz, não a substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Mudar o sentido ou a intenção' },
      { color: 'red', text: 'Sobrepor escolhas de estilo deliberadas' },
      { color: 'amber', text: 'Simplificar conteúdo especializado sem orientação' },
    ],
    relatedH2: 'Workers com os quais Priya trabalha lado a lado.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Produz o rascunho ajustado que a etapa de legibilidade segue.',
        outputLabel: 'Rascunho ajustado',
        ctaLabel: 'Como Ellis redige',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa o rascunho aprimorado quanto à clareza e à prontidão.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como Quinn revisa',
      },
      {
        id: 'section_rewrite',
        description: 'Reescreve seções que precisam de mais do que uma etapa de legibilidade.',
        outputLabel: 'Seções reescritas',
        ctaLabel: 'Como Rosa reescreve',
      },
    ],
    ctaH2: 'Torne o bom conteúdo mais fácil de ler.',
    ctaPara:
      'Adicione Priya ao seu fluxo de trabalho e todo rascunho passa por uma etapa de legibilidade antes de chegar à revisão ou à entrega.',
    guidanceFooterLabel: 'LEGIBILIDADE',
    guidanceFooterValue: 'Aprimorado · pronto para revisão',
  },

  brief_draft_alignment: {
    seoTitle: 'Worker de Alinhamento entre Briefing e Rascunho | WordPresto',
    metaDescription:
      'Ada verifica se o rascunho realmente cumpre o briefing, sinalizando lacunas, desvios e seções desalinhadas antes que avancem.',
    h1: 'Verifique se o rascunho realmente segue o briefing.',
    heroPara1:
      'Um rascunho que parece bom, mas não segue o briefing, é um problema que vai aparecer na revisão ou, pior, na entrega ao cliente. Ada compara o rascunho final com o briefing original, seção por seção, e sinaliza lacunas, desvios de escopo ou desalinhamentos antes de o rascunho avançar.',
    heroPara2:
      'Para etapas de revisão de rascunho, programas de conteúdo com muitos briefings e qualquer projeto em que a fidelidade ao briefing precise ser verificada antes da entrega.',
    problemEyebrow: 'Onde os rascunhos se afastam dos briefings',
    problemH2: 'Um rascunho que segue o briefing é exceção, não regra.',
    problemPara:
      'Briefings se perdem ao longo da produção. Redatores interpretam de formas diferentes. Ferramentas de IA preenchem lacunas com seus próprios padrões. Quando o rascunho chega à revisão, muitas vezes ele já está cobrindo um terreno diferente do que foi briefado. A única forma de perceber isso é verificando.',
    problemAnnotation: '↘ verifique o briefing, não só o rascunho',
    beforeStamp: 'Não verificado',
    beforeHtml: `<p>O rascunho <span class="ba-strike">parece bom</span> para nós. Ele cobre os <span class="ba-strike">pontos principais</span> e tem o <span class="ba-strike">tamanho certo</span>. Achamos que <span class="ba-strike">atende ao briefing</span>, embora não tenhamos <span class="ba-strike">verificado seção por seção</span>.</p>`,
    beforeTags: ['Não verificado', 'Possível desvio do briefing', 'Lacunas não identificadas'],
    beforeNote: 'isso vai falhar na revisão do cliente',
    afterStamp: 'Verificado',
    afterHtml: `<p>A segunda seção se afasta do público declarado. A seção de prova está faltando. A abertura está bem alinhada. <span class="ba-hl">Três lacunas específicas identificadas</span> em relação ao briefing, cada uma com uma correção clara.</p>`,
    afterTags: ['Briefing verificado', 'Lacunas sinalizadas', 'Correções específicas'],
    afterNote: 'agora o time sabe o que corrigir',
    helpsEyebrow: 'Como esse Worker ajuda',
    helpsH2: 'Uma verificação de briefing que pega os desvios antes que virem problema para o cliente.',
    helpsPara:
      'Ada faz a comparação estruturada entre briefing e rascunho que a maioria dos times pula porque está com pressa demais. Lacunas e desvios pegos antes da entrega não custam nada. Pegos na revisão do cliente, custam rodadas de revisão.',
    checks: [
      'Se cada seção do briefing está presente e foi contemplada',
      'Se o público e o propósito se mantêm do início ao fim',
      'Se o ângulo e a intenção do briefing sobrevivem no rascunho',
    ],
    improves: [
      'O relatório de alinhamento ao briefing, para que as lacunas sejam específicas',
      'A orientação de revisão, para que as correções sejam pontuais',
      'As notas de handoff do rascunho, para que o redator saiba exatamente o que resolver',
    ],
    prepares: [
      'Um relatório de alinhamento estruturado',
      'Comparação do briefing seção por seção',
      'Notas de correção específicas para o redator',
    ],
    surfaces: [
      'Desvios de escopo que surgiram durante a produção',
      'Seções do briefing interpretadas de forma diferente',
      'Conteúdo exigido pelo briefing que está faltando',
    ],
    ioH2: 'De onde Ada parte, e o que ela produz.',
    worksFrom: [
      'Briefing de conteúdo final',
      'Rascunho atual',
      'Alterações no briefing feitas durante o projeto, se houver',
      'Notas de revisão',
      'Definições de público e propósito',
    ],
    produces: [
      'Relatório de alinhamento entre briefing e rascunho',
      'Comparação seção por seção',
      'Sinalizações de lacunas e desvios',
      'Notas de correção para o redator',
      'Handoff para revisão ou correção',
    ],
    scenarios: [
      {
        title: 'Um rascunho reescrito no meio do projeto que pode ter perdido o alinhamento com o briefing.',
        description:
          'Ada verifica o rascunho atual em relação ao briefing final, independentemente do histórico de revisões.',
      },
      {
        title: 'Um programa de conteúdo em que vários redatores trabalharam com o mesmo briefing.',
        description:
          'Ela verifica cada rascunho com o mesmo padrão e identifica onde as interpretações divergiram.',
      },
      {
        title: 'Um rascunho gerado por IA que usou o briefing como ponto de partida.',
        description:
          'Ferramentas de IA preenchem lacunas com padrões próprios; Ada identifica quais padrões substituíram exigências do briefing.',
      },
      {
        title: 'Um cliente que confere os briefings com cuidado antes de aprovar rascunhos.',
        description:
          'Um relatório de alinhamento antes da entrega ao cliente faz com que a revisão do cliente se concentre em decisões criativas, não em conformidade com o briefing.',
      },
      {
        title: 'Um briefing longo com muitas exigências específicas.',
        description:
          'Ada acompanha cada exigência e confirma quais foram cumpridas, quais foram cumpridas em parte e quais estão faltando.',
      },
      {
        title: 'Uma rodada de revisão que mudou o escopo do briefing.',
        description:
          'Ela verifica o alinhamento novamente depois de mudanças no briefing, para confirmar que o rascunho foi atualizado de acordo.',
      },
    ],
    boundaryH2: 'Ada verifica o alinhamento. Redatores e editores fazem as mudanças.',
    boundaryPara:
      'Um relatório de alinhamento é um insumo estruturado para a revisão, não uma lista de mudanças obrigatórias. Ada identifica o que não bate com o briefing; resolver isso, e como, é uma decisão do redator e do editor.',
    boundaryChecklist: [
      'Ada verifica o alinhamento, mas nunca reescreve o conteúdo.',
      'As constatações de alinhamento são estruturadas para revisão editorial.',
      'Seções ambíguas do briefing são sinalizadas como perguntas, não resolvidas.',
      'O alinhamento apoia o briefing, não o altera.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever ou editar conteúdo' },
      { color: 'red', text: 'Sobrepor alterações do briefing acordadas com o cliente' },
      { color: 'amber', text: 'Classificar lacunas como menores sem input editorial' },
    ],
    relatedH2: 'Workers com os quais Ada trabalha lado a lado.',
    relatedWorkerIds: [
      {
        id: 'content_brief_builder',
        description: 'Constrói o briefing que Ada usa como referência.',
        outputLabel: 'Briefing de conteúdo',
        ctaLabel: 'Como Luca elabora o briefing',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa a qualidade em paralelo à verificação de alinhamento.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como Quinn revisa',
      },
      {
        id: 'draft_rewrite',
        description: 'Reescreve o rascunho depois que as lacunas de alinhamento são identificadas.',
        outputLabel: 'Rascunho ajustado',
        ctaLabel: 'Como Ellis reescreve',
      },
    ],
    ctaH2: 'Verifique se o rascunho realmente segue o briefing.',
    ctaPara:
      'Adicione Ada ao seu fluxo de trabalho e todo rascunho vai para a revisão já com a verificação de alinhamento ao briefing feita.',
    guidanceFooterLabel: 'STATUS DE ALINHAMENTO',
    guidanceFooterValue: 'Verificado · lacunas sinalizadas',
  },
};
