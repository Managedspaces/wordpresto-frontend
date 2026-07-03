import type { WorkerProfileTranslatable } from './types';

export const ptBatch1: Record<string, WorkerProfileTranslatable> = {
  voice_style: {
    seoTitle: 'Voice & Style Worker | WordPresto',
    metaDescription:
      'A Helena confere cada rascunho com as suas regras de voz e exemplos aprovados, devolvendo-o ao estilo da casa antes da revisão. Para equipas que precisam de manter uma voz consistente.',
    h1: 'Mantenha a voz no trabalho.',
    heroPara1:
      'Quando vários redatores e ferramentas de IA mexem no mesmo site, a voz da marca vai-se desviando de página em página. A Helena lê as suas regras de voz e os exemplos aprovados, depois confere e molda cada rascunho, para que continue a soar como a sua marca quando chega à revisão.',
    heroPara2:
      'Para equipas que precisam de uma voz consistente em briefings, rascunhos, revisões e trabalho de conteúdo assistido por IA.',
    problemEyebrow: 'Onde a voz começa a desviar-se',
    problemH2: 'A voz da marca é a primeira coisa a quebrar num fluxo de trabalho assistido por IA.',
    problemPara:
      'Gerar texto nunca foi a parte difícil. A parte difícil é que cada redator, e cada ferramenta de IA, tem a sua própria voz por defeito. Num site real, esse desvio é a diferença entre uma marca e uma pilha de páginas.',
    problemAnnotation: '↘ o mesmo parágrafo, duas vozes',
    beforeStamp: 'Fora da voz',
    beforeHtml: `<p>No <span class="ba-strike">panorama digital em constante mudança</span> de hoje, <span class="ba-strike">tirar partido</span> de <span class="ba-strike">soluções de IA de última geração</span> pode <span class="ba-strike">revolucionar</span> a sua estratégia de conteúdo e desbloquear resultados <span class="ba-strike">verdadeiramente disruptivos</span>.</p>`,
    beforeTags: ['5 frases feitas', 'Sem estilo da casa', 'Soa a genérico'],
    beforeNote: 'nada disto soa a nós',
    afterStamp: 'Na voz certa',
    afterHtml: `<p>A maioria das equipas de conteúdo não precisa de mais produção. Precisa de uma forma de manter <span class="ba-hl">uma só voz em todas as páginas</span>, mesmo quando pessoas diferentes, e IA, estão a escrever.</p>`,
    afterTags: ['Simples e seguro', 'Concreto', 'Fiel à marca'],
    afterNote: 'agora soa à marca',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma editora de voz que lê cada rascunho à luz do estilo da casa.',
    helpsPara:
      'A Helena faz o trabalho de uma boa editora de voz: de forma consistente, em todas as páginas, antes de alguém ter de ler o rascunho sem preparação.',
    checks: [
      'O tom face às regras de voz da marca',
      'Expressões proibidas e frases feitas',
      'Consistência entre secções',
    ],
    improves: [
      'Frases fora da voz, reescritas no estilo certo',
      'Linguagem vaga tornada concreta',
      'Ritmo e legibilidade',
    ],
    prepares: [
      'Um rascunho moldado, pronto para reescrita',
      'Notas de orientação de voz e estilo',
      'Uma transferência limpa para revisão',
    ],
    surfaces: [
      'Decisões de voz sobre as quais não tem certeza',
      'Significado que possa ter mudado',
      'Afirmações que precisam de um olhar humano',
    ],
    ioH2: 'Com que material a Helena trabalha, e o que produz.',
    worksFrom: [
      'Regras de voz da marca',
      'Exemplos aprovados',
      'Briefing de conteúdo',
      'Rascunho existente',
      'Notas de revisão',
    ],
    produces: [
      'Orientação de voz e estilo',
      'Rascunho moldado',
      'Secção reescrita',
      'Notas de revisão',
      'Pacote de transferência',
    ],
    scenarios: [
      {
        title: 'Três redatores, uma marca, três vozes.',
        description:
          'A Helena lê cada rascunho segundo as mesmas regras de voz, para que a assinatura mude mas a voz não.',
      },
      {
        title: 'Rascunhos de IA que estão bem, mas soam a toda a gente.',
        description:
          'Ela retira o registo genérico de IA e traz o texto de volta ao estilo da casa antes da revisão.',
      },
      {
        title: 'Um novo freelancer ainda não encontrou a voz.',
        description:
          'A Helena transforma um "quase lá, mas ainda não somos nós" em orientação concreta, frase a frase, que a pessoa pode aplicar.',
      },
      {
        title: 'Migração de páginas antigas com o tom espalhado por todo o lado.',
        description:
          'Ela assinala primeiro os piores casos, para que a passagem de reformulação de voz comece onde realmente importa.',
      },
      {
        title: 'Uma campanha que precisa de parecer uma só peça, não dez.',
        description:
          'Em páginas de destino, emails e publicações, a Helena mantém uma só voz para que a campanha se leia como um todo.',
      },
      {
        title: 'Está a reescrever as suas regras de voz e precisa de as testar.',
        description:
          'Passe algumas páginas reais pela Helena para ver onde as novas regras realmente resultam, e onde não resultam.',
      },
    ],
    boundaryH2: 'A Helena molda a voz. As pessoas continuam a decidir.',
    boundaryPara:
      'A voz é uma questão de critério, não uma regra fixa. A Helena sugere, confere e prepara. Foi propositadamente concebida para parar onde começa o critério editorial, e nada do que toca é publicado sem a aprovação de uma pessoa.',
    boundaryChecklist: [
      'A Helena sugere reescritas na voz certa, nunca publica.',
      'As decisões de voz são estruturadas para um editor rever.',
      'Frases incertas ou arriscadas são assinaladas, não escondidas.',
      'A Helena apoia o critério editorial, nunca o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar ou enviar para o CMS' },
      { color: 'red', text: 'Sobrepor-se a um editor' },
      { color: 'amber', text: 'Neutralizar uma escolha deliberada' },
    ],
    relatedH2: 'Workers a quem a Helena transfere o trabalho.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: "Reescreve o rascunho completo com base na orientação de voz da Helena.",
        outputLabel: 'Rascunho reescrito',
        ctaLabel: 'Como o Ellis reescreve',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Confere o rascunho moldado quanto a clareza e prontidão.',
        outputLabel: 'Resumo da revisão',
        ctaLabel: 'Como o Quinn revê',
      },
      {
        id: 'approval_report',
        description: 'Reúne a revisão numa decisão de aprovação clara.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como a Audrey aprova',
      },
    ],
    ctaH2: 'Mantenha a voz no trabalho.',
    ctaPara:
      'Adicione a Helena ao seu fluxo de trabalho de conteúdo e mantenha uma só voz em todas as páginas, com aprovação humana antes de qualquer publicação.',
    guidanceFooterLabel: 'ADEQUAÇÃO DE VOZ',
    guidanceFooterValue: 'Forte · pronta para revisão',
  },

  content_analyst: {
    seoTitle: 'Content Analyst Worker | WordPresto',
    metaDescription:
      'O Omar analisa o conteúdo existente, o contexto e o propósito antes de qualquer edição ou reescrita. Para equipas que precisam de um ponto de partida claro antes de mexerem numa página.',
    h1: 'Perceba a página antes de a reescrever.',
    heroPara1:
      'A maioria das reescritas começa no sítio errado. Mudam o que é fácil de mudar, em vez do que realmente precisa de mudar. O Omar lê primeiro a página existente: o que ela está a tentar fazer, se está a resultar, e o que vale a pena manter. Isso dá ao trabalho seguinte uma base clara.',
    heroPara2:
      'Para revisões de conteúdo, migrações de site, e qualquer reescrita que precise de partir de evidências, e não de intuição.',
    problemEyebrow: 'Onde as reescritas correm mal',
    problemH2: 'Reescrever sem ler é como se perde o que já estava a resultar.',
    problemPara:
      'Uma página que está no ar há dois anos tem algo nela: uma estrutura à qual os leitores responderam, um tom que encaixava, secções que se posicionaram bem na pesquisa. Reescrever do zero sem primeiro analisar o que já lá está significa começar cada projeto mais atrás do que é preciso.',
    problemAnnotation: '↘ primeiro a análise, depois o briefing',
    beforeStamp: 'Sem análise',
    beforeHtml: `<p>Precisamos de <span class="ba-strike">reescrever completamente</span> a página inicial. É só <span class="ba-strike">torná-la mais moderna</span> e <span class="ba-strike">acrescentar mais palavras-chave</span>. A atual está <span class="ba-strike">demasiado longa e aborrecida</span>.</p>`,
    beforeTags: ['Sem ponto de partida', 'Direção vaga', 'Nada para construir a partir daí'],
    beforeNote: 'a reescrever a partir de um palpite',
    afterStamp: 'Análise concluída',
    afterHtml: `<p>A página inicial atual tem <span class="ba-hl">uma segunda e uma terceira secções fortes</span> que têm bom desempenho. O parágrafo de abertura precisa de ser substituído. A estrutura é sólida. Não é preciso reescrever tudo.</p>`,
    afterTags: ['Ponto de partida claro', 'Âmbito específico', 'Trabalho definido'],
    afterNote: 'agora sabemos o que mudar',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um leitor de conteúdo que mapeia o que já existe antes de qualquer mudança.',
    helpsPara:
      'O Omar faz o trabalho de análise que devia acontecer antes de qualquer briefing ser escrito, mas raramente acontece: ler a página existente para perceber o que ela é e o que está a tentar fazer.',
    checks: [
      'Se a página está a cumprir o propósito definido',
      'Que estrutura e secções já estão a resultar',
      'Lacunas entre a intenção e o conteúdo atual',
    ],
    improves: [
      'O âmbito da reescrita, para que abranja menos mas mude mais',
      'A qualidade do briefing, dando aos redatores um ponto de partida real',
      'A priorização, para que as mudanças mais importantes venham primeiro',
    ],
    prepares: [
      'Um resumo da análise de conteúdo',
      'Uma visão clara do que manter, mudar ou cortar',
      'Um ponto de partida para o briefing ou para a passagem de estrutura',
    ],
    surfaces: [
      'Páginas em que uma edição ligeira é suficiente',
      'Problemas estruturais que vão afetar qualquer reescrita',
      'Desalinhamentos entre o propósito da página e o conteúdo',
    ],
    ioH2: 'Com que material o Omar trabalha, e o que produz.',
    worksFrom: [
      'Conteúdo existente da página',
      'Objetivo definido da página ou briefing',
      'Diretrizes da marca',
      'Definição do público',
      'Notas de revisões anteriores, se existirem',
    ],
    produces: [
      'Resumo da análise de conteúdo',
      'O que manter, mudar ou cortar',
      'Notas de contributo para o briefing',
      'Relatório de lacunas',
      'Observações estruturais',
    ],
    scenarios: [
      {
        title: 'Uma migração de site com 200 páginas para rever.',
        description:
          'O Omar lê cada página segundo o mesmo critério, assinalando o que vale a pena manter e o que deve ser retirado.',
      },
      {
        title: 'Um briefing de atualização sem âmbito claro.',
        description:
          'Ele mapeia o conteúdo existente para que o briefing tenha um ponto de partida específico, em vez de uma direção genérica.',
      },
      {
        title: 'Um site herdado que não foi criado por si.',
        description:
          'O Omar dá-lhe uma visão rápida do que lá está, do que está a resultar, e do que é ruído.',
      },
      {
        title: 'Uma página com bom desempenho que tem receio de tocar.',
        description:
          'Ele identifica que partes importam, para poder melhorar em torno delas em vez de as substituir.',
      },
      {
        title: 'Um cliente a insistir numa reescrita completa.',
        description:
          'A análise revela muitas vezes que um toque mais ligeiro é suficiente, o que poupa orçamento e preserva o que já está a resultar.',
      },
      {
        title: 'A preparar o terreno para um redator novo no cliente.',
        description:
          'Uma análise de conteúdo dá a qualquer redator um briefing real, em vez de começar do zero.',
      },
    ],
    boundaryH2: 'O Omar analisa. Editores e clientes decidem.',
    boundaryPara:
      'A análise de conteúdo é um contributo, não uma instrução. O Omar mapeia o que existe e assinala o que importa. O que muda, o que fica e o que é cortado é uma decisão de critério do editor ou do cliente.',
    boundaryChecklist: [
      'O Omar analisa e avalia, nunca altera conteúdo diretamente.',
      'A sua análise é estruturada para um editor humano agir sobre ela.',
      'Decisões pouco claras ou contestadas são assinaladas, não resolvidas.',
      'A análise apoia o critério editorial, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Editar ou reescrever páginas' },
      { color: 'red', text: 'Tomar decisões finais sobre o âmbito' },
      { color: 'amber', text: 'Sobrepor-se às prioridades do cliente' },
    ],
    relatedH2: 'Workers a quem o Omar transfere o trabalho.',
    relatedWorkerIds: [
      {
        id: 'structure',
        description: 'Usa a análise para moldar a hierarquia e o fluxo das secções.',
        outputLabel: 'Estrutura de conteúdo',
        ctaLabel: 'Como o Marcus estrutura',
      },
      {
        id: 'content_brief_builder',
        description: 'Constrói o briefing a partir das conclusões da análise.',
        outputLabel: 'Briefing de conteúdo',
        ctaLabel: 'Como o Luca faz o briefing',
      },
      {
        id: 'draft_rewrite',
        description: 'Reescreve com uma visão clara da página existente.',
        outputLabel: 'Rascunho moldado',
        ctaLabel: 'Como o Ellis reescreve',
      },
    ],
    ctaH2: 'Perceba a página antes de a reescrever.',
    ctaPara:
      'Adicione o Omar ao seu fluxo de trabalho e cada reescrita parte de uma visão clara do que já existe.',
    guidanceFooterLabel: 'ESTADO DA ANÁLISE',
    guidanceFooterValue: 'Concluída · pronta para briefing',
  },

  structure: {
    seoTitle: 'Structure Worker | WordPresto',
    metaDescription:
      'O Marcus molda títulos, secções e o fluxo da página para que o conteúdo tenha uma estrutura editorial clara antes ou durante a redação. Para páginas que precisam de uma forma adequada antes de a escrita começar.',
    h1: 'Dê a cada rascunho uma forma mais clara.',
    heroPara1:
      'Conteúdo sem estrutura é difícil de rever, fácil de interpretar mal, e frustrante de editar. O Marcus mapeia a hierarquia de títulos, a ordem das secções e o fluxo do conteúdo, para que cada rascunho comece ou continue com uma forma que faça sentido editorialmente e para o leitor.',
    heroPara2:
      'Para páginas que precisam de uma passagem estrutural antes da redação, de uma remodelação a meio do rascunho, ou de uma reorganização depois de escrito.',
    problemEyebrow: 'Onde a estrutura falha',
    problemH2: 'Conteúdo mal estruturado não se resolve com melhor escrita.',
    problemPara:
      'Pode melhorar todas as frases de uma página e ela continuará a falhar se as secções estiverem pela ordem errada, se os títulos não contarem uma história, ou se o ponto mais importante estiver enterrado a meio. Estrutura não é formatação, é lógica editorial.',
    problemAnnotation: '↘ primeiro a forma, depois a escrita',
    beforeStamp: 'Sem estrutura',
    beforeHtml: `<p>A página aborda <span class="ba-strike">preços, depois a introdução, depois funcionalidades, depois porquê nós</span>. Cada secção foi <span class="ba-strike">escrita em separado</span> e não existe <span class="ba-strike">um percurso de leitura claro</span> ao longo da página.</p>`,
    beforeTags: ['Secções fora de ordem', 'Sem fluxo claro', 'Difícil de seguir'],
    beforeNote: 'os leitores não vão chegar ao fim',
    afterStamp: 'Estruturada',
    afterHtml: `<p>A abertura estabelece o propósito. A secção de funcionalidades segue as perguntas do leitor por ordem. As provas vêm antes do preço. <span class="ba-hl">Percurso de leitura claro, do problema à decisão</span>.</p>`,
    afterTags: ['Fluxo lógico', 'Ordem editorial', 'Pronta a redigir'],
    afterNote: 'os redatores conseguem trabalhar a partir disto',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Arquitetura editorial que dá a cada página um percurso de leitura.',
    helpsPara:
      'O Marcus faz o trabalho estrutural que evita que o conteúdo se torne uma pilha de secções. Toda a página que passa por uma passagem de estrutura sai com uma forma clara e defensável.',
    checks: [
      'A hierarquia de títulos e a lógica das secções',
      'A ordem das secções face ao percurso do leitor',
      'Elementos estruturais em falta ou duplicados',
    ],
    improves: [
      'A sequência das secções, para seguir a lógica editorial',
      'A clareza dos títulos, para que cada um cumpra uma função editorial',
      'O fluxo da página, da abertura ao fecho',
    ],
    prepares: [
      'Um esboço estruturado para o redator',
      'A estrutura de títulos para o CMS',
      'Notas de secção para o briefing',
    ],
    surfaces: [
      'Decisões estruturais que precisam de contributo editorial',
      'Secções cujo propósito não é claro',
      'Blocos de conteúdo que pertencem a outra página',
    ],
    ioH2: 'Com que material o Marcus trabalha, e o que produz.',
    worksFrom: [
      'Briefing de conteúdo ou objetivo definido da página',
      'Rascunho existente ou notas em bruto',
      'Análise de conteúdo',
      'Diretrizes da marca',
      'Notas sobre o percurso do leitor',
    ],
    produces: [
      'Esboço de conteúdo estruturado',
      'Hierarquia de títulos ordenada',
      'Plano de secções',
      'Notas de fluxo para o redator',
      'Recomendações estruturais',
    ],
    scenarios: [
      {
        title: 'Uma página longa, escrita numa só sessão, sem forma definida.',
        description:
          'O Marcus reorganiza as secções numa ordem de leitura clara, sem que o redator tenha de começar de novo.',
      },
      {
        title: 'Um briefing que precisa de um esqueleto estrutural antes da redação.',
        description:
          'Ele mapeia a hierarquia de títulos para que os redatores saibam exatamente o que vai onde.',
      },
      {
        title: 'Uma página de destino com demasiadas secções a competir entre si.',
        description:
          'O Marcus identifica que secções merecem o seu lugar e em que ordem devem surgir.',
      },
      {
        title: 'Uma página migrada que foi estruturada para um propósito diferente.',
        description:
          'Ele remodela a estrutura para o objetivo atual sem tocar no próprio conteúdo.',
      },
      {
        title: 'Uma página de produto em que a secção mais importante vem em último lugar.',
        description:
          'Mover as provas para antes do preço é muitas vezes tudo o que uma página precisa para ter melhor desempenho.',
      },
      {
        title: 'Uma equipa de conteúdo em que cada redator estrutura de forma diferente.',
        description:
          'Uma passagem de estrutura cria um padrão de forma partilhado antes de a escrita começar.',
      },
    ],
    boundaryH2: 'O Marcus estrutura. Editores e clientes aprovam a forma.',
    boundaryPara:
      'A estrutura é uma recomendação, não uma diretiva. O Marcus mapeia o melhor percurso de leitura com base no objetivo do conteúdo. Usar essa forma, ajustá-la ou rejeitá-la é uma decisão editorial e do cliente.',
    boundaryChecklist: [
      'O Marcus estrutura e organiza, nunca reescreve conteúdo.',
      'As escolhas estruturais são documentadas para os editores reverem.',
      'Secções com propósito pouco claro são assinaladas, não removidas.',
      'A estrutura apoia o briefing, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever ou editar o texto' },
      { color: 'red', text: 'Remover secções sem instrução' },
      { color: 'amber', text: 'Impor uma estrutura contrária ao briefing' },
    ],
    relatedH2: 'Workers a quem o Marcus transfere o trabalho.',
    relatedWorkerIds: [
      {
        id: 'content_brief_builder',
        description: 'Constrói o briefing em torno da estrutura aprovada.',
        outputLabel: 'Briefing de conteúdo',
        ctaLabel: 'Como o Luca faz o briefing',
      },
      {
        id: 'draft_rewrite',
        description: 'Redige dentro do enquadramento estrutural definido pelo Marcus.',
        outputLabel: 'Rascunho moldado',
        ctaLabel: 'Como o Ellis redige',
      },
      {
        id: 'voice_style',
        description: 'Aplica a orientação de voz ao rascunho já estruturado.',
        outputLabel: 'Orientação de voz e estilo',
        ctaLabel: 'Como a Helena aplica a voz',
      },
    ],
    ctaH2: 'Dê a cada rascunho uma forma mais clara.',
    ctaPara:
      'Adicione o Marcus ao seu fluxo de trabalho e cada página parte de uma estrutura editorial que redatores e editores conseguem realmente usar.',
    guidanceFooterLabel: 'ESTADO DA ESTRUTURA',
    guidanceFooterValue: 'Esboçada · pronta para redação',
  },

  content_brief_builder: {
    seoTitle: 'Content Brief Builder | WordPresto',
    metaDescription:
      'O Luca transforma um tema e um objetivo num briefing de conteúdo estruturado: propósito, público, ângulo e secções, antes de a redação começar.',
    h1: 'Comece com um briefing que os redatores conseguem realmente usar.',
    heroPara1:
      'A maioria dos briefings de conteúdo é demasiado pobre para ajudar, ou demasiado prescritiva para deixar espaço à escrita. O Luca constrói briefings estruturados que dão aos redatores o contexto e a direção de que precisam, sem escrever por eles: propósito, público, ângulo, direção de tom e um plano de secções claro.',
    heroPara2:
      'Para novos projetos de conteúdo, briefings de agência, e fluxos de trabalho assistidos por IA em que o resultado precisa de um ponto de partida claro.',
    problemEyebrow: 'Onde os briefings falham aos redatores',
    problemH2: 'Um briefing fraco produz um rascunho que terá de reescrever de qualquer forma.',
    problemPara:
      'Um briefing que diz "escreva sobre o nosso serviço para os nossos clientes" não é um briefing. É uma instrução para adivinhar. Cada hora que um redator passa a trabalhar a partir de um briefing vago é uma hora gasta a produzir conteúdo que vai precisar de revisão estrutural antes de poder ser usado.',
    problemAnnotation: '↘ o briefing decide a qualidade do rascunho',
    beforeStamp: 'Briefing fraco',
    beforeHtml: `<p>Escreva um <span class="ba-strike">artigo de blogue sobre a nossa ferramenta de gestão de projetos</span>. Torne-o <span class="ba-strike">cativante e otimizado para SEO</span>. Cerca de <span class="ba-strike">800 palavras</span>. Inclua uma <span class="ba-strike">chamada para ação no final</span>.</p>`,
    beforeTags: ['Sem público definido', 'Sem ângulo', 'Sem orientação de estrutura'],
    beforeNote: 'cada redator vai produzir algo diferente',
    afterStamp: 'Briefing claro',
    afterHtml: `<p><span class="ba-hl">Objetivo: ajudar gestores de projeto em agências</span> a perceber porque é que transferências estruturadas reduzem as rondas de revisão. Público: decisores. Ângulo: o custo de transferências fracas. Secções: problema, abordagem, prova, próximo passo.</p>`,
    afterTags: ['Público específico', 'Ângulo claro', 'Secções estruturadas'],
    afterNote: 'os redatores conseguem partir daqui',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um briefing que dá direção aos redatores sem lhes retirar o critério.',
    helpsPara:
      'O Luca constrói a estrutura de briefing que evita rondas de reescrita. Um briefing bem delimitado, com um ângulo real, um público claro e orientação de secções, produz melhores rascunhos porque os redatores sabem o que estão a construir.',
    checks: [
      'Se o propósito é claro e específico',
      'Se o público está suficientemente definido para se escrever para ele',
      'Se o ângulo é distinto e defensável',
    ],
    improves: [
      'O âmbito do briefing, para que seja acionável, e não apenas indicativo',
      'A estrutura de secções, para que o esboço seja utilizável',
      'A direção de tom e voz, para que o redator tenha um registo de partida',
    ],
    prepares: [
      'Um briefing de conteúdo estruturado',
      'Um plano de secções esboçado',
      'Direção de escrita e restrições',
    ],
    surfaces: [
      'Temas que precisam de mais investigação antes de avançar',
      'Briefings que precisam de contributo do cliente antes da redação',
      'Conflitos de âmbito que vão gerar rondas de revisão mais tarde',
    ],
    ioH2: 'Com que material o Luca trabalha, e o que produz.',
    worksFrom: [
      'Tema ou assunto do conteúdo',
      'Objetivo definido',
      'Definição do público',
      'Diretrizes de voz da marca',
      'Análise de conteúdo ou notas de investigação',
    ],
    produces: [
      'Briefing de conteúdo estruturado',
      'Esboço de secções',
      'Notas de público e tom',
      'Restrições de escrita',
      'Transferência para o redator ou para o Worker de redação',
    ],
    scenarios: [
      {
        title: 'A começar um novo programa de conteúdo com briefings consistentes.',
        description:
          'O Luca constrói todos os briefings segundo o mesmo padrão, para que os rascunhos partam do mesmo nível de direção.',
      },
      {
        title: 'A dar briefing a ferramentas de redação assistidas por IA.',
        description:
          'Um briefing estruturado é a diferença entre um rascunho de IA utilizável e um que precisa de ser totalmente reescrito.',
      },
      {
        title: 'Uma agência a preparar o briefing para um cliente recém-integrado.',
        description:
          'O Luca transforma as notas de acolhimento num briefing sobre o qual o redator pode agir sem ter de adivinhar as preferências do cliente.',
      },
      {
        title: 'A construir um calendário de conteúdo com direção real.',
        description:
          'Cada peça do calendário recebe um resumo de briefing que esclarece para que serve e para quem é.',
      },
      {
        title: 'O lançamento de um produto com várias peças de conteúdo.',
        description:
          'Uma estrutura de briefing aplicada de forma consistente faz com que todas as peças fiquem alinhadas sem chamadas constantes de alinhamento.',
      },
      {
        title: 'Um redator novo na marca.',
        description:
          'Um briefing claro substitui semanas de transmissão implícita de conhecimento por um documento a que a pessoa pode recorrer.',
      },
    ],
    boundaryH2: 'O Luca prepara o briefing. Redatores e editores tomam as decisões criativas.',
    boundaryPara:
      'Um briefing é um ponto de partida, não um guião. O Luca estrutura o briefing para que a direção seja clara, mas a escrita, as escolhas de voz e o critério criativo cabem ao redator e ao editor.',
    boundaryChecklist: [
      'O Luca constrói briefings, nunca escreve o próprio conteúdo.',
      'As decisões de briefing são documentadas para revisão do editor ou do cliente.',
      'Lacunas na direção são assinaladas antes de a redação começar.',
      'O briefing apoia o redator, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Redigir ou escrever conteúdo' },
      { color: 'red', text: 'Tomar decisões de posicionamento de marca' },
      { color: 'amber', text: 'Sobrepor-se ao âmbito acordado' },
    ],
    relatedH2: 'Workers a quem o Luca transfere o trabalho.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Pega no briefing e constrói o rascunho moldado.',
        outputLabel: 'Rascunho moldado',
        ctaLabel: 'Como o Ellis redige',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Confere se o rascunho corresponde mesmo ao briefing.',
        outputLabel: 'Relatório de alinhamento',
        ctaLabel: 'Como a Ada verifica',
      },
      {
        id: 'voice_style',
        description: 'Aplica as regras de voz de acordo com a direção do briefing.',
        outputLabel: 'Orientação de voz e estilo',
        ctaLabel: 'Como a Helena aplica a voz',
      },
    ],
    ctaH2: 'Comece com um briefing que os redatores conseguem realmente usar.',
    ctaPara:
      'Adicione o Luca ao seu fluxo de trabalho e cada peça de conteúdo parte de um briefing claro que reduz as rondas de revisão.',
    guidanceFooterLabel: 'ESTADO DO BRIEFING',
    guidanceFooterValue: 'Pronto para redação',
  },

  draft_rewrite: {
    seoTitle: 'Draft Rewrite Worker | WordPresto',
    metaDescription:
      'O Ellis constrói e reescreve rascunhos que seguem o briefing: estruturados, com propósito, e prontos para revisão. Para conteúdo que precisa de um rascunho moldado antes de a edição ou a revisão começarem.',
    h1: 'Reescreva rascunhos sem perder o essencial.',
    heroPara1:
      'Um rascunho que se afasta do briefing, enterra o ponto principal ou tem o dobro do tamanho que devia, não está pronto para revisão. O Ellis reescreve rascunhos que seguem a estrutura do briefing, avançam logo com o que importa e se leem bem o suficiente para um editor tomar decisões a partir deles.',
    heroPara2:
      'Para primeiros rascunhos, rascunhos gerados por IA que precisam de ser moldados, e reescritas em que o briefing mudou.',
    problemEyebrow: 'Onde os rascunhos ficam aquém',
    problemH2: 'Um rascunho que se dispersa não se corrige com edição. Tem de ser reescrito.',
    problemPara:
      'A maioria dos primeiros rascunhos, de redatores ou de IA, aborda o terreno certo, mas não pela ordem certa. O ponto principal fica enterrado. As secções desviam-se. A introdução gasta três parágrafos a aquecer. Preparar um rascunho para revisão exige mais do que corrigir frases.',
    problemAnnotation: '↘ primeiro molde o rascunho, depois reveja-o',
    beforeStamp: 'Por moldar',
    beforeHtml: `<p>Somos um <span class="ba-strike">fornecedor líder de soluções inovadoras</span>. Fundada em 2018, <span class="ba-strike">a nossa equipa de profissionais dedicados</span> trabalha arduamente todos os dias para <span class="ba-strike">entregar valor aos nossos estimados clientes</span>. Acreditamos na <span class="ba-strike">excelência</span>.</p>`,
    beforeTags: ['Sem ponto claro', 'Abertura genérica', 'Não segue o briefing'],
    beforeNote: 'este rascunho não se corrige com edição',
    afterStamp: 'Fiel ao briefing',
    afterHtml: `<p>Boas transferências de conteúdo levam <span class="ba-hl">duas rondas de revisão em vez de cinco</span>. A diferença está em ter um briefing que toda a gente no projeto leu mesmo antes de a escrita começar.</p>`,
    afterTags: ['Guiado pelo essencial', 'Fiel ao briefing', 'Pronto para revisão'],
    afterNote: 'agora um editor consegue trabalhar a partir disto',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um redator que segue o briefing e produz algo com que um editor pode trabalhar.',
    helpsPara:
      'O Ellis faz a redação e a reescrita que levam o conteúdo a um nível de qualidade revisível. O objetivo não é uma peça acabada; é um rascunho com uma forma clara, fiel ao briefing, que dá ao editor algo real com que trabalhar.',
    checks: [
      'Se o rascunho segue a estrutura do briefing',
      'Se a abertura estabelece o ponto principal',
      'Se as secções estão numa ordem lógica',
    ],
    improves: [
      'A abertura, para que o ponto principal venha primeiro',
      'A estrutura de secções, para seguir a lógica do briefing',
      'A extensão e o ritmo, para não se alongar demasiado',
    ],
    prepares: [
      'Um rascunho moldado, pronto para revisão editorial',
      'Uma reescrita que a equipa do briefing pode aprovar',
      'Conteúdo pronto para uma passagem de voz ou de qualidade',
    ],
    surfaces: [
      'Lacunas do briefing que surgiram durante a redação',
      'Secções que precisam de contributo do cliente ou de um especialista',
      'Passagens em que a intenção não é clara',
    ],
    ioH2: 'Com que material o Ellis trabalha, e o que produz.',
    worksFrom: [
      'Briefing de conteúdo',
      'Rascunho existente ou notas em bruto',
      'Diretrizes de voz da marca',
      'Esboço de estrutura',
      'Notas de investigação',
    ],
    produces: [
      'Rascunho moldado',
      'Secções de conteúdo reescritas',
      'Notas de redação para o editor',
      'Notas de desvio ao briefing',
      'Rascunho pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Um rascunho de IA rigoroso, mas completamente por moldar.',
        description:
          'O Ellis dá-lhe estrutura e um arranque, transformando o resultado num rascunho revisível.',
      },
      {
        title: 'Um primeiro rascunho de um redator novo que precisa de trabalho estrutural.',
        description: 'Ele remodela sem reescrever tudo, preservando o que resulta.',
      },
      {
        title: 'Um briefing que mudou a meio do projeto.',
        description: 'O Ellis reescreve as secções afetadas de acordo com a nova direção.',
      },
      {
        title: 'Uma página revista por demasiadas pessoas e que perdeu coerência.',
        description:
          'Uma única passagem de reescrita limpa, de acordo com o briefing original, restaura a consistência.',
      },
      {
        title: 'Conteúdo necessário com rapidez, sem tempo para várias rondas.',
        description:
          'Um primeiro rascunho limpo poupa os ciclos de revisão que rascunhos vagos costumam gerar.',
      },
      {
        title: 'Um cliente que quer ver um rascunho antes de aprovar a produção completa.',
        description: 'O Ellis produz um rascunho conciso que dá ao cliente algo real a que reagir.',
      },
    ],
    boundaryH2: 'O Ellis redige. Editores e clientes tomam as decisões finais.',
    boundaryPara:
      'Um rascunho moldado é um contributo para a edição, não o produto final. O Ellis reescreve para levar o conteúdo a um nível de qualidade revisível. As decisões criativas, a aprovação final e as últimas alterações cabem à edição e ao cliente.',
    boundaryChecklist: [
      'O Ellis redige e reescreve, nunca publica.',
      'Os rascunhos são estruturados para um editor rever e aprovar.',
      'Os desvios ao briefing são assinalados, não corrigidos silenciosamente.',
      'A redação apoia o briefing, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar ou finalizar conteúdo' },
      { color: 'red', text: 'Sobrepor-se ao âmbito do briefing' },
      { color: 'amber', text: 'Tomar decisões de tom sem briefing' },
    ],
    relatedH2: 'Workers a quem o Ellis transfere o trabalho.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: 'Aplica as regras de voz ao rascunho moldado pelo Ellis.',
        outputLabel: 'Orientação de voz e estilo',
        ctaLabel: 'Como a Helena aplica a voz',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Revê o rascunho quanto a clareza e prontidão.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como o Quinn revê',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Confere se o rascunho cumpre o briefing.',
        outputLabel: 'Relatório de alinhamento',
        ctaLabel: 'Como a Ada verifica',
      },
    ],
    ctaH2: 'Reescreva rascunhos sem perder o essencial.',
    ctaPara:
      'Adicione o Ellis ao seu fluxo de trabalho e cada rascunho chega à revisão já moldado, estruturado e fiel ao briefing.',
    guidanceFooterLabel: 'ESTADO DO RASCUNHO',
    guidanceFooterValue: 'Moldado · pronto para revisão',
  },

  draft_quality_reviewer: {
    seoTitle: 'Draft Quality Reviewer | WordPresto',
    metaDescription:
      'O Quinn verifica se um rascunho está claro, estruturado e pronto para avançar, antes de chegar a um cliente ou ao CMS. Para equipas que precisam de uma revisão estruturada antes da aprovação final.',
    h1: 'Reveja o rascunho antes de ele avançar.',
    heroPara1:
      'Um rascunho que chega a um cliente ou a uma reunião de revisão com problemas estruturais, secções pouco claras ou desvio ao briefing faz perder tempo a toda a gente. O Quinn verifica cada rascunho antes de avançar: está claro, está estruturado, segue o briefing, e está pronto para o próximo passo.',
    heroPara2:
      'Para pontos de controlo de qualidade antes da entrega ao cliente, antes da transferência para o CMS, e antes de qualquer conteúdo ser aprovado.',
    problemEyebrow: 'Onde os rascunhos avançam cedo demais',
    problemH2: 'Um rascunho que chega à revisão cedo demais custa mais do que esperar.',
    problemPara:
      'Enviar um rascunho a um cliente ou a um editor sénior antes de estar pronto não é eficiência; é um investimento ao contrário. O custo de uma revisão estrutural depois do feedback do cliente é mais elevado do que uma passagem de revisão antes de o rascunho sair da equipa.',
    problemAnnotation: '↘ reveja antes de avançar',
    beforeStamp: 'Não revisto',
    beforeHtml: `<p>Aqui está o <span class="ba-strike">rascunho terminado</span> para a sua revisão. Estamos <span class="ba-strike">satisfeitos com ele</span>. Diga-nos <span class="ba-strike">se quiser alguma alteração</span>. Achamos que cobre <span class="ba-strike">tudo</span> o que pediu.</p>`,
    beforeTags: ['Não verificado', 'Briefing não confirmado', 'Problemas não detetados'],
    beforeNote: 'o cliente é que vai encontrar os problemas',
    afterStamp: 'Revisto',
    afterHtml: `<p>A segunda secção enterra o principal benefício. A abertura lê-se bem. <span class="ba-hl">Três problemas específicos assinalados</span> antes de o rascunho chegar ao cliente, cada um com uma correção clara.</p>`,
    afterTags: ['Problemas assinalados', 'Briefing confirmado', 'Pronto para apresentar'],
    afterNote: 'problemas encontrados antes da transferência',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma verificação de qualidade que apanha os problemas antes de se tornarem comentários do cliente.',
    helpsPara:
      'O Quinn faz a passagem de revisão estruturada que devia acontecer entre a redação e a entrega. Não é uma edição linha a linha; é uma verificação de prontidão que identifica se o rascunho está claro, estruturado e pronto para avançar.',
    checks: [
      'Se o rascunho cobre o briefing',
      'Se as secções estão claras e por ordem',
      'Se a abertura estabelece o propósito',
    ],
    improves: [
      'O feedback de revisão, para que seja específico e acionável',
      'A avaliação de qualidade do rascunho, para que os editores tenham uma visão clara',
      'As notas de transferência, para que o próximo passo seja claro',
    ],
    prepares: [
      'Notas de revisão estruturadas para o editor',
      'Uma decisão clara de prontidão para a equipa',
      'Problemas específicos e correções sugeridas',
    ],
    surfaces: [
      'Problemas estruturais que precisam de reescrita',
      'Lacunas ou desvios ao briefing que o redator não detetou',
      'Secções que precisam de contributo do cliente ou de um especialista',
    ],
    ioH2: 'Com que material o Quinn trabalha, e o que produz.',
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
      'Notas de transferência para o próximo passo',
    ],
    scenarios: [
      {
        title: 'Um rascunho pronto para entrega ao cliente na sexta-feira.',
        description:
          'O Quinn verifica-o na quinta-feira, para que qualquer problema seja corrigido antes de o cliente o ver.',
      },
      {
        title: 'Uma peça longa com contributos de três redatores.',
        description:
          'Ele identifica onde a voz muda, onde as secções se contradizem, e onde a estrutura falha.',
      },
      {
        title: 'Um rascunho de IA que passou uma verificação básica.',
        description:
          'O Quinn aplica padrões editoriais, não apenas gramática: clareza, estrutura e alinhamento com o briefing.',
      },
      {
        title: 'Um programa de conteúdo com qualidade inconsistente.',
        description:
          'Uma passagem de revisão consistente, na mesma fase, cria um padrão de qualidade que a equipa pode usar como referência.',
      },
      {
        title: 'Um briefing que mudou a meio do rascunho.',
        description:
          'O Quinn confere o rascunho com o briefing final, não com o original, e assinala o que precisa de ser atualizado.',
      },
      {
        title: 'Um cliente que deixa comentários de revisão detalhados em todos os rascunhos.',
        description:
          'Menos problemas a chegar ao cliente significa menos rondas de revisão e uma aprovação mais rápida.',
      },
    ],
    boundaryH2: 'O Quinn revê. Editores e clientes decidem o que mudar.',
    boundaryPara:
      'Uma revisão é um contributo estruturado para a edição, não um conjunto de instruções. O Quinn identifica os problemas e assinala-os com clareza. O que muda, e como, é uma decisão editorial e do cliente.',
    boundaryChecklist: [
      'O Quinn revê e assinala, nunca edita diretamente.',
      'As notas de revisão são estruturadas para um editor agir sobre elas.',
      'Decisões incertas ou subjetivas são assinaladas como perguntas, não como decisões.',
      'A revisão apoia o critério editorial, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Editar ou reescrever conteúdo' },
      { color: 'red', text: 'Tomar decisões finais sobre o conteúdo' },
      { color: 'amber', text: 'Aprovar conteúdo para publicação' },
    ],
    relatedH2: 'Workers a quem o Quinn transfere o trabalho.',
    relatedWorkerIds: [
      {
        id: 'section_rewrite',
        description: 'Reescreve as secções específicas que o Quinn assinala como fracas.',
        outputLabel: 'Secções reescritas',
        ctaLabel: 'Como a Rosa reescreve',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Confere em detalhe o alinhamento entre o briefing e o rascunho.',
        outputLabel: 'Relatório de alinhamento',
        ctaLabel: 'Como a Ada alinha',
      },
      {
        id: 'approval_report',
        description: 'Reúne a revisão numa decisão de aprovação final.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como a Audrey aprova',
      },
    ],
    ctaH2: 'Reveja o rascunho antes de ele avançar.',
    ctaPara:
      'Adicione o Quinn ao seu fluxo de trabalho e cada rascunho chega ao cliente ou ao CMS já verificado, com os problemas assinalados antes de se tornarem rondas de revisão.',
    guidanceFooterLabel: 'ESTADO DA REVISÃO',
    guidanceFooterValue: 'Verificado · problemas assinalados',
  },

  section_rewrite: {
    seoTitle: 'Section Rewrite Worker | WordPresto',
    metaDescription:
      'A Rosa reescreve secções específicas que estão pouco claras, fracas ou fora do briefing, sem tocar no resto da peça. Para melhorias direcionadas ao nível da secção, depois da revisão.',
    h1: 'Corrija a secção fraca sem reescrever a página inteira.',
    heroPara1:
      'Quando as notas de revisão assinalam uma secção específica como fraca, fora do briefing ou pouco clara, a resposta não é reescrever a página inteira. A Rosa reescreve a secção específica que precisa de correção, trabalhando de acordo com o briefing e na voz do conteúdo em redor, sem perturbar o que já está a funcionar.',
    heroPara2:
      'Para melhorias direcionadas de secção depois da revisão do rascunho, correções a meio da produção, e pedidos específicos de revisão de clientes ou editores.',
    problemEyebrow: 'Onde as secções deixam a página a perder',
    problemH2: 'Uma única secção fraca pode comprometer uma página que, de resto, funciona.',
    problemPara:
      'Raramente é a página inteira que precisa de ser reescrita. Normalmente é a terceira secção que enterra o essencial, ou a secção de prova que não tem conteúdo suficiente, ou a conclusão que não fecha. Reescrever a página inteira para corrigir uma secção desperdiça o trabalho que já está bom.',
    problemAnnotation: '↘ corrija a secção, não a página',
    beforeStamp: 'Precisa de trabalho',
    beforeHtml: `<p>A nossa <span class="ba-strike">equipa tem vasta experiência</span> nesta área e <span class="ba-strike">orgulhamo-nos</span> de entregar <span class="ba-strike">trabalho de alta qualidade</span>. Temos <span class="ba-strike">muitos clientes satisfeitos</span> que teriam todo o gosto em <span class="ba-strike">recomendar-nos</span>.</p>`,
    beforeTags: ['Afirmações vagas', 'Sem detalhes concretos', 'Tom fora do briefing'],
    beforeNote: 'esta secção não está a fazer nada',
    afterStamp: 'Reescrita',
    afterHtml: `<p>Reduzimos as rondas de revisão em 40% em doze clientes de agência no último ano, usando <span class="ba-hl">fluxos de trabalho estruturados do briefing ao rascunho</span> que a maioria das equipas consegue montar em menos de duas semanas.</p>`,
    afterTags: ['Específica', 'Fiel ao briefing', 'Merece o seu lugar'],
    afterNote: 'agora esta secção funciona',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma editora de secções que corrige o que precisa de correção sem tocar no resto.',
    helpsPara:
      'A Rosa reescreve ao nível da secção: o parágrafo específico, o bloco de prova fraco, a introdução que não convence. Sem reescrever a página inteira, sem perturbar as secções que já funcionam.',
    checks: [
      'Se a secção cumpre o propósito definido',
      'Se corresponde ao briefing e ao tom envolvente',
      'Se está a merecer o seu lugar na estrutura da página',
    ],
    improves: [
      'A clareza e o rigor da secção',
      'O alinhamento de tom da secção com o resto da peça',
      'A extensão e a economia da secção',
    ],
    prepares: [
      'Uma secção reescrita, pronta a inserir',
      'Notas de secção para o editor',
      'Confirmação de alinhamento com o briefing',
    ],
    surfaces: [
      'Secções em que uma reescrita não chega e é preciso mudar a estrutura',
      'Informação em falta que o redator precisa de fornecer',
      'Conflitos de briefing que originaram o problema da secção',
    ],
    ioH2: 'Com que material a Rosa trabalha, e o que produz.',
    worksFrom: [
      'A secção específica a reescrever',
      'Briefing de conteúdo original',
      'Notas de revisão',
      'Diretrizes de voz da marca',
      'Contexto envolvente da página',
    ],
    produces: [
      'Secção reescrita',
      'Notas de edição da secção',
      'Verificação de alinhamento com o briefing',
      'Notas de transferência para o editor',
    ],
    scenarios: [
      {
        title: 'Uma revisão assinalou a secção de prova como demasiado fraca.',
        description:
          'A Rosa reescreve essa secção com detalhes mais concretos, sem mudar nada em redor.',
      },
      {
        title: 'Um cliente pediu para reconsiderar uma secção depois da aprovação.',
        description:
          'Ela reescreve a secção específica de acordo com a nota do cliente, sem reabrir o resto da peça.',
      },
      {
        title: 'A introdução não corresponde à página descrita no briefing.',
        description:
          'Uma reescrita direcionada da introdução realinha a abertura da página sem uma revisão completa.',
      },
      {
        title: 'Um rascunho de IA em que algumas secções estão boas e uma claramente não.',
        description: 'A Rosa corrige a secção fraca e deixa as outras como estão.',
      },
      {
        title: 'Um artigo longo em que o terço do meio perde o ritmo.',
        description:
          'A reescrita ao nível da secção do meio fraco recoloca a peça nos eixos.',
      },
      {
        title: 'Um redator que produziu um bom rascunho mas teve dificuldade com a chamada para ação.',
        description:
          'Uma única reescrita de secção é mais rápida e melhor do que devolver a peça inteira.',
      },
    ],
    boundaryH2: 'A Rosa reescreve secções. Os editores aprovam as alterações.',
    boundaryPara:
      'Uma secção reescrita é uma opção de substituição, não uma edição final. A Rosa produz a versão revista; se entra, se é ajustada, ou se é devolvida, é uma decisão editorial.',
    boundaryChecklist: [
      'A Rosa reescreve secções, nunca as publica.',
      'As secções reescritas são apresentadas para revisão editorial.',
      'O âmbito limita-se à secção assinalada, salvo instrução em contrário.',
      'As reescritas de secção apoiam o briefing, não a preferência do Worker.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever para além da secção acordada' },
      { color: 'red', text: 'Publicar alterações diretamente' },
      { color: 'amber', text: 'Alterar o âmbito do briefing' },
    ],
    relatedH2: 'Workers com quem a Rosa trabalha.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Revê o rascunho completo e assinala que secções precisam de trabalho.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como o Quinn revê',
      },
      {
        id: 'readability',
        description: 'Melhora a fluidez e a clareza depois das reescritas de secção.',
        outputLabel: 'Rascunho melhorado',
        ctaLabel: 'Como a Priya melhora',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Confere se a secção reescrita está alinhada com o briefing.',
        outputLabel: 'Relatório de alinhamento',
        ctaLabel: 'Como a Ada verifica',
      },
    ],
    ctaH2: 'Corrija a secção fraca sem reescrever a página inteira.',
    ctaPara:
      'Adicione a Rosa ao seu fluxo de trabalho e as correções direcionadas de secção acontecem depressa, com precisão e sem perturbar o que já está a funcionar.',
    guidanceFooterLabel: 'ESTADO DA SECÇÃO',
    guidanceFooterValue: 'Reescrita · pronta para o editor',
  },

  approval_report: {
    seoTitle: 'Approval Report Worker | WordPresto',
    metaDescription:
      'A Audrey resume o que está pronto, o que precisa de atenção e o que não deve avançar, para que as pessoas tomem uma decisão de aprovação com confiança.',
    h1: 'Torne a aprovação mais fácil de confiar.',
    heroPara1:
      'Decisões de aprovação tomadas sem uma visão clara do que está pronto costumam falhar de uma de duas formas: aprova-se o que não devia ser aprovado, ou fica parado o que já estava pronto para avançar. A Audrey reúne um relatório de aprovação estruturado, para que a pessoa que toma a decisão final tenha a informação de que realmente precisa.',
    heroPara2:
      'Para diretores editoriais, responsáveis de projeto, gestores de conta, e qualquer pessoa que precise de tomar uma decisão de aprovação com confiança sem ler cada rascunho linha a linha.',
    problemEyebrow: 'Onde a aprovação falha',
    problemH2: 'A aprovação só é fiável quando quem aprova tem a informação certa.',
    problemPara:
      'A maioria dos problemas de aprovação são problemas de informação. Quem dá a aprovação final ou não tem uma visão clara do que foi revisto e do que não foi, ou está a ler cada rascunho pessoalmente porque não existe um resumo. De qualquer das formas, demora mais do que devia e as decisões ficam menos seguras do que precisam de ser.',
    problemAnnotation: '↘ aprovação sem adivinhação',
    beforeStamp: 'Sem relatório',
    beforeHtml: `<p><span class="ba-strike">Aqui estão os 14 rascunhos</span> para aprovação. Alguns já foram revistos, <span class="ba-strike">não temos a certeza de quais</span>. Há umas <span class="ba-strike">notas na pasta partilhada</span> algures. Diga-nos <span class="ba-strike">se está confortável em aprovar</span>.</p>`,
    beforeTags: ['Sem resumo', 'Sem estado claro', 'Quem aprova fica a adivinhar'],
    beforeNote: 'ninguém consegue aprovar isto com confiança',
    afterStamp: 'Relatório pronto',
    afterHtml: `<p><span class="ba-hl">9 peças prontas para aprovação. 3 precisam de uma pequena revisão antes de aprovar. 2 assinaladas para revisão editorial</span>, com os problemas específicos anotados e os próximos passos recomendados para cada uma.</p>`,
    afterTags: ['Estado claro', 'Sinalizações específicas', 'Quem aprova tem tudo o que precisa'],
    afterNote: 'a aprovação já pode acontecer',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um relatório que dá a quem aprova uma visão clara, e não uma pilha de rascunhos.',
    helpsPara:
      'A Audrey reúne tudo o que quem aprova precisa num único relatório estruturado: o que está pronto, o que não está, quais são os problemas específicos, e o que precisa de acontecer a seguir. As decisões de aprovação tornam-se mais rápidas e mais seguras.',
    checks: [
      'Se cada peça passou pelas fases de revisão exigidas',
      'Se os problemas pendentes estão claramente documentados',
      'Se algo foi assinalado como risco antes da aprovação',
    ],
    improves: [
      'A rapidez do processo de aprovação, ao remover a ambiguidade',
      'A confiança na aprovação, ao destacar a informação certa',
      'A documentação de aprovação, para auditoria e referência',
    ],
    prepares: [
      'Um relatório de aprovação estruturado',
      'Um estado claro de pronto/não pronto para cada peça',
      'Próximos passos específicos para tudo o que ainda não foi aprovado',
    ],
    surfaces: [
      'Conteúdo que precisa de mais revisão antes da aprovação',
      'Problemas de conformidade ou de risco que devem ser resolvidos primeiro',
      'Peças paradas por falta de informação',
    ],
    ioH2: 'Com que material a Audrey trabalha, e o que produz.',
    worksFrom: [
      'Notas de revisão de qualidade dos rascunhos',
      'Sinalizações de risco e conformidade',
      'Relatórios de alinhamento com o briefing',
      'Critérios de aprovação em vigor',
      'Estado do conteúdo em todo o projeto',
    ],
    produces: [
      'Relatório de aprovação estruturado',
      'Classificação pronto / precisa de atenção / não pronto',
      'Notas específicas de problemas com próximos passos',
      'Documentação de aprovação',
      'Notas de transferência para o CMS ou publicação',
    ],
    scenarios: [
      {
        title: 'Um lote de 20 peças de conteúdo precisa da aprovação do diretor até sexta-feira.',
        description:
          'A Audrey produz um relatório que o diretor consegue rever em 20 minutos em vez de 2 horas.',
      },
      {
        title: 'Um cliente a rever uma migração de site antes do lançamento.',
        description:
          'O relatório de aprovação dá ao cliente uma visão clara do que foi revisto, do que está pronto, e do que ainda falta.',
      },
      {
        title: 'Um programa de conteúdo sensível a questões de conformidade.',
        description:
          'A Audrey acompanha que peças passaram a revisão de conformidade e destaca as que não passaram.',
      },
      {
        title: 'Uma agência onde as decisões de aprovação são inconsistentes.',
        description:
          'Um relatório estruturado cria um padrão de aprovação que se aplica a todos os projetos.',
      },
      {
        title: 'Um projeto que ficou parado na aprovação e ninguém sabe porquê.',
        description:
          'O relatório identifica exatamente o que está a bloquear cada peça e o que precisa de acontecer para a fazer avançar.',
      },
      {
        title: 'Várias partes interessadas com critérios de aprovação diferentes.',
        description:
          'Um único relatório mapeia todos os critérios e mostra o estado de cada peça face a cada conjunto de requisitos.',
      },
    ],
    boundaryH2: 'A Audrey reporta. As pessoas aprovam.',
    boundaryPara:
      'A aprovação é uma decisão humana. A Audrey fornece a informação estruturada que torna essa decisão fiável. A decisão final, e a responsabilidade que a acompanha, é sempre de uma pessoa.',
    boundaryChecklist: [
      'A Audrey reporta o estado, nunca aprova o conteúdo por si própria.',
      'Os relatórios de aprovação são estruturados para a pessoa designada os rever.',
      'As sinalizações de risco e conformidade são incluídas, não filtradas.',
      'O relatório apoia o critério de aprovação, não o substitui.',
    ],
    willNot: [
      { color: 'red', text: 'Aprovar ou dar luz verde ao conteúdo' },
      { color: 'red', text: 'Ignorar sinalizações de conformidade' },
      { color: 'amber', text: 'Marcar conteúdo como pronto sem evidência' },
    ],
    relatedH2: 'Workers com quem a Audrey trabalha.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Fornece a revisão de qualidade que alimenta o relatório de aprovação.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como o Quinn revê',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Assinala problemas de conformidade e de risco antes da aprovação.',
        outputLabel: 'Relatório de risco e conformidade',
        ctaLabel: 'Como a Vera assinala riscos',
      },
      {
        id: 'cms_handoff',
        description: 'Pega no conteúdo aprovado e prepara-o para a transferência para o CMS.',
        outputLabel: 'Pacote de transferência',
        ctaLabel: 'Como o Ravi faz a transferência',
      },
    ],
    ctaH2: 'Torne a aprovação mais fácil de confiar.',
    ctaPara:
      'Adicione a Audrey ao seu fluxo de trabalho e cada decisão de aprovação é tomada com uma visão clara e completa do que está pronto e do que não está.',
    guidanceFooterLabel: 'ESTADO DA APROVAÇÃO',
    guidanceFooterValue: 'Pronto para aprovação humana',
  },

  readability: {
    seoTitle: 'Readability Worker | WordPresto',
    metaDescription:
      'A Priya aperta frases, simplifica a estrutura e melhora a fluidez, para que o conteúdo se leia com clareza para o público a que se destina. Para rascunhos corretos, mas mais difíceis de ler do que precisam de ser.',
    h1: 'Torne o bom conteúdo mais fácil de ler.',
    heroPara1:
      'O conteúdo pode ser factualmente correto, bem estruturado e fiel ao briefing, e ainda assim ser mais difícil de ler do que precisa. A Priya aperta frases, quebra parágrafos densos, remove qualificações desnecessárias e melhora a fluidez, sem alterar o significado nem perder a voz.',
    heroPara2:
      'Para rascunhos que já estão prontos em substância, mas precisam de uma passagem de legibilidade antes da revisão ou da entrega.',
    problemEyebrow: 'Onde a legibilidade falha',
    problemH2: 'Conteúdo denso e correto continua a perder leitores.',
    problemPara:
      'A maioria dos problemas de legibilidade não tem a ver com as palavras; tem a ver com o tamanho das frases, a densidade dos parágrafos e a proporção entre cautela e afirmação. Um leitor que desiste no terceiro parágrafo não leu o conteúdo, por mais rigoroso que fosse.',
    problemAnnotation: '↘ legível significa mesmo lido',
    beforeStamp: 'Difícil de ler',
    beforeHtml: `<p>No contexto <span class="ba-strike">do atual panorama digital em que</span> muitas organizações procuram <span class="ba-strike">cada vez mais tirar partido</span> das ferramentas disponíveis, é importante <span class="ba-strike">ter em conta que</span> a abordagem escolhida terá <span class="ba-strike">inevitavelmente</span> impacto nos resultados.</p>`,
    beforeTags: ['Demasiado longa', 'Sobrecarregada de qualificações', 'Soa a evasiva'],
    beforeNote: 'ninguém vai ler isto até ao fim',
    afterStamp: 'Legível',
    afterHtml: `<p>As ferramentas que usa afetam os seus resultados. <span class="ba-hl">Escolher a abordagem certa é a decisão que mais importa</span>, e é normalmente aquela a que as equipas dedicam menos tempo.</p>`,
    afterTags: ['Curta e direta', 'Clara', 'Lê-se com naturalidade'],
    afterNote: 'esta versão é lida',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma passagem de legibilidade que faz o conteúdo ser mesmo lido.',
    helpsPara:
      'A Priya faz o trabalho ao nível da frase e do parágrafo que transforma conteúdo tecnicamente correto em algo que o leitor termina de ler. Não é uma reescrita; é uma passagem de aperto que remove tudo o que torna a leitura mais difícil.',
    checks: [
      'O tamanho das frases face ao público a que se destinam',
      'A densidade dos parágrafos e a facilidade de leitura rápida',
      'Qualificações e cautelas desnecessárias',
    ],
    improves: [
      'A estrutura das frases, para se lerem com naturalidade',
      'O tamanho dos parágrafos e o espaço para respirar',
      'As frases de abertura, para que cada parágrafo comece pelo essencial',
    ],
    prepares: [
      'Um rascunho melhorado, com uma passagem de legibilidade aplicada',
      'Notas de legibilidade para o editor',
      'Conteúdo pronto para a revisão final',
    ],
    surfaces: [
      'Secções em que o significado foi sacrificado em nome da densidade',
      'Passagens que precisam de informação adicional para fazer sentido',
      'Desajustes de nível entre o conteúdo e o público',
    ],
    ioH2: 'Com que material a Priya trabalha, e o que produz.',
    worksFrom: [
      'Rascunho existente',
      'Definição do público',
      'Diretrizes de voz da marca',
      'Meta de legibilidade ou nota do briefing',
      'Notas de revisão',
    ],
    produces: [
      'Rascunho melhorado',
      'Notas da passagem de legibilidade',
      'Melhorias específicas a frases e parágrafos',
      'Notas de transferência para o editor',
    ],
    scenarios: [
      {
        title: 'Uma página técnica de produto escrita por um engenheiro.',
        description:
          'A Priya traduz sem simplificar em excesso: clara para o público-alvo, mas ainda rigorosa.',
      },
      {
        title: 'Um artigo longo, denso do início ao fim.',
        description:
          'Uma passagem de legibilidade cria espaço para respirar e torna a peça legível de uma só vez.',
      },
      {
        title: 'Conteúdo gerado por IA, gramaticalmente correto mas difícil de percorrer com o olhar.',
        description: 'Ela melhora a fluidez e o ritmo das frases sem mudar a estrutura.',
      },
      {
        title: 'Um documento de conformidade que o departamento jurídico tem de ler.',
        description:
          'As melhorias de legibilidade tornam-no mais rápido de ler e mais fácil de agir sobre ele.',
      },
      {
        title: 'Um cliente que continua a dizer que o conteúdo "parece pesado".',
        description: 'Uma passagem de legibilidade costuma resolver isto sem alterações estruturais.',
      },
      {
        title: 'Uma página de destino com uma taxa de rejeição elevada.',
        description:
          'A legibilidade é muitas vezes a diferença entre uma página que se lê e uma página que se abandona.',
      },
    ],
    boundaryH2: 'A Priya melhora a legibilidade. Redatores e editores mantêm a voz.',
    boundaryPara:
      'Uma passagem de legibilidade melhora a fluidez sem alterar o significado nem se sobrepor às decisões de voz. Se uma frase é deliberadamente complexa por razões de estilo, a Priya assinala-a em vez de a simplificar.',
    boundaryChecklist: [
      'A Priya melhora a legibilidade, nunca altera o significado.',
      'Decisões de estilo que parecem erros são assinaladas, não alteradas.',
      'As alterações de legibilidade são documentadas para revisão editorial.',
      'A legibilidade apoia a voz, não se sobrepõe a ela.',
    ],
    willNot: [
      { color: 'red', text: 'Alterar o significado ou a intenção' },
      { color: 'red', text: 'Sobrepor-se a escolhas de estilo deliberadas' },
      { color: 'amber', text: 'Simplificar conteúdo especializado sem orientação' },
    ],
    relatedH2: 'Workers com quem a Priya trabalha.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Produz o rascunho moldado sobre o qual incide a passagem de legibilidade.',
        outputLabel: 'Rascunho moldado',
        ctaLabel: 'Como o Ellis redige',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Revê o rascunho melhorado quanto a clareza e prontidão.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como o Quinn revê',
      },
      {
        id: 'section_rewrite',
        description: 'Reescreve secções que precisam de mais do que uma passagem de legibilidade.',
        outputLabel: 'Secções reescritas',
        ctaLabel: 'Como a Rosa reescreve',
      },
    ],
    ctaH2: 'Torne o bom conteúdo mais fácil de ler.',
    ctaPara:
      'Adicione a Priya ao seu fluxo de trabalho e cada rascunho recebe uma passagem de legibilidade antes de chegar à revisão ou à entrega.',
    guidanceFooterLabel: 'LEGIBILIDADE',
    guidanceFooterValue: 'Melhorada · pronta para revisão',
  },

  brief_draft_alignment: {
    seoTitle: 'Brief-to-Draft Alignment Worker | WordPresto',
    metaDescription:
      'A Ada confere se o rascunho cumpre mesmo o briefing, destacando lacunas, desvios e secções desalinhadas antes de avançarem.',
    h1: 'Confirme se o rascunho segue mesmo o briefing.',
    heroPara1:
      'Um rascunho que parece bom mas não segue o briefing é um problema que vai aparecer na revisão ou, pior, na entrega ao cliente. A Ada compara o rascunho final com o briefing original, secção a secção, e assinala quaisquer lacunas, desvios de âmbito ou desalinhamentos antes de o rascunho avançar.',
    heroPara2:
      'Para fases de revisão de rascunhos, programas de conteúdo com muitos briefings, e qualquer projeto em que a fidelidade ao briefing precise de ser confirmada antes da entrega.',
    problemEyebrow: 'Onde os rascunhos se desviam dos briefings',
    problemH2: 'Um rascunho que segue o briefing é a exceção, não a regra.',
    problemPara:
      'Os briefings desviam-se durante a produção. Os redatores interpretam de forma diferente. As ferramentas de IA preenchem lacunas com as suas próprias predefinições. Quando um rascunho chega à revisão, muitas vezes já está a cobrir um terreno diferente do que foi definido no briefing. A única forma de o detetar é verificar.',
    problemAnnotation: '↘ verifique o briefing, não só o rascunho',
    beforeStamp: 'Não verificado',
    beforeHtml: `<p>O rascunho <span class="ba-strike">parece-nos bom</span>. Cobre os <span class="ba-strike">pontos principais</span> e tem a <span class="ba-strike">extensão certa</span>. Achamos que <span class="ba-strike">cumpre o briefing</span>, embora não o tenhamos <span class="ba-strike">verificado secção a secção</span>.</p>`,
    beforeTags: ['Não verificado', 'Possível desvio ao briefing', 'Lacunas não detetadas'],
    beforeNote: 'isto vai falhar na revisão do cliente',
    afterStamp: 'Verificado',
    afterHtml: `<p>A segunda secção desvia-se do público definido. A secção de prova está em falta. A abertura está bem alinhada. <span class="ba-hl">Três lacunas específicas identificadas</span> face ao briefing, cada uma com uma correção clara.</p>`,
    afterTags: ['Briefing verificado', 'Lacunas assinaladas', 'Correções específicas'],
    afterNote: 'agora a equipa sabe o que corrigir',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma verificação de briefing que apanha o desvio antes de se tornar um problema com o cliente.',
    helpsPara:
      'A Ada faz a comparação estruturada entre o briefing e o rascunho que a maioria das equipas salta por estar a avançar depressa demais. Lacunas e desvios detetados antes da entrega não custam nada. Detetados na revisão do cliente, custam rondas de revisão.',
    checks: [
      'Se cada secção do briefing está presente e foi abordada',
      'Se o público e o propósito se mantêm ao longo de todo o texto',
      'Se o ângulo e a intenção do briefing sobrevivem no rascunho',
    ],
    improves: [
      'O relatório de alinhamento com o briefing, para que as lacunas sejam específicas',
      'A orientação de revisão, para que as correções sejam direcionadas',
      'As notas de transferência do rascunho, para que o redator saiba exatamente o que resolver',
    ],
    prepares: [
      'Um relatório de alinhamento estruturado',
      'Comparação com o briefing, secção a secção',
      'Notas de correção específicas para o redator',
    ],
    surfaces: [
      'Desvios de âmbito que se instalaram durante a produção',
      'Secções do briefing interpretadas de forma diferente',
      'Conteúdo em falta que era exigido pelo briefing',
    ],
    ioH2: 'Com que material a Ada trabalha, e o que produz.',
    worksFrom: [
      'Briefing de conteúdo final',
      'Rascunho atual',
      'Quaisquer alterações ao briefing feitas a meio do projeto',
      'Notas de revisão',
      'Definições de público e propósito',
    ],
    produces: [
      'Relatório de alinhamento entre o briefing e o rascunho',
      'Comparação secção a secção',
      'Sinalizações de lacunas e desvios',
      'Notas de correção para o redator',
      'Transferência para revisão ou correção',
    ],
    scenarios: [
      {
        title: 'Um rascunho reescrito a meio do projeto que pode ter perdido o alinhamento com o briefing.',
        description:
          'A Ada confere o rascunho atual com o briefing final, independentemente do histórico de revisões.',
      },
      {
        title: 'Um programa de conteúdo em que vários redatores trabalharam com o mesmo briefing.',
        description:
          'Ela verifica cada rascunho segundo o mesmo critério e identifica onde as interpretações divergiram.',
      },
      {
        title: 'Um rascunho gerado por IA que usou o briefing como ponto de partida.',
        description:
          'As ferramentas de IA preenchem lacunas com predefinições; a Ada identifica que predefinições substituíram requisitos do briefing.',
      },
      {
        title: 'Um cliente que confere os briefings com cuidado antes de aprovar rascunhos.',
        description:
          'Um relatório de alinhamento antes da entrega ao cliente faz com que a revisão do cliente se concentre nas decisões criativas, e não na conformidade com o briefing.',
      },
      {
        title: 'Um briefing longo, com muitos requisitos específicos.',
        description:
          'A Ada acompanha cada requisito e confirma quais foram cumpridos, quais foram parcialmente cumpridos, e quais estão em falta.',
      },
      {
        title: 'Uma ronda de revisão que mudou o âmbito do briefing.',
        description:
          'Ela volta a verificar o alinhamento depois de alterações ao briefing, para confirmar que o rascunho foi atualizado em conformidade.',
      },
    ],
    boundaryH2: 'A Ada verifica o alinhamento. Redatores e editores fazem as alterações.',
    boundaryPara:
      'Um relatório de alinhamento é um contributo estruturado para a revisão, não uma lista de alterações obrigatórias. A Ada identifica o que não corresponde ao briefing; se e como resolver isso é uma decisão do redator e do editor.',
    boundaryChecklist: [
      'A Ada verifica o alinhamento, nunca reescreve conteúdo.',
      'As conclusões de alinhamento são estruturadas para revisão editorial.',
      'Secções ambíguas do briefing são assinaladas como perguntas, não resolvidas.',
      'O alinhamento apoia o briefing, não o altera.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever ou editar conteúdo' },
      { color: 'red', text: 'Sobrepor-se a alterações do briefing acordadas com o cliente' },
      { color: 'amber', text: 'Classificar lacunas como menores sem contributo editorial' },
    ],
    relatedH2: 'Workers com quem a Ada trabalha.',
    relatedWorkerIds: [
      {
        id: 'content_brief_builder',
        description: 'Constrói o briefing com que a Ada compara o rascunho.',
        outputLabel: 'Briefing de conteúdo',
        ctaLabel: 'Como o Luca faz o briefing',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Revê a qualidade em paralelo com a verificação de alinhamento.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como o Quinn revê',
      },
      {
        id: 'draft_rewrite',
        description: 'Reescreve o rascunho depois de identificadas as lacunas de alinhamento.',
        outputLabel: 'Rascunho moldado',
        ctaLabel: 'Como o Ellis reescreve',
      },
    ],
    ctaH2: 'Confirme se o rascunho segue mesmo o briefing.',
    ctaPara:
      'Adicione a Ada ao seu fluxo de trabalho e cada rascunho vai para revisão com a verificação de alinhamento ao briefing já feita.',
    guidanceFooterLabel: 'ESTADO DO ALINHAMENTO',
    guidanceFooterValue: 'Verificado · lacunas assinaladas',
  },
};
