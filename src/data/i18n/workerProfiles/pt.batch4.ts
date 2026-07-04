import type { WorkerProfileTranslatable } from './types';

export const ptBatch4: Record<string, WorkerProfileTranslatable> = {
  safe_change_planner: {
    seoTitle: 'Safe Change Planner | WordPresto',
    metaDescription:
      'O Sam converte as conclusões dos Workers em propostas de alteração estruturadas, indicando a área afetada, o risco e o benefício esperado, sem editar a página nem aplicar seja o que for.',
    h1: 'Transforme conclusões em alterações que podem ser revistas com segurança.',
    heroPara1:
      'Uma conclusão ainda não é uma alteração. "A página precisa de uma estrutura mais clara" é útil, mas um editor continua a precisar de saber o que pode mudar, onde, porquê, que risco está envolvido e se a alteração deve avançar. O Sam converte as conclusões dos Workers em propostas de alteração estruturadas. Prepara a camada de revisão sem editar a página nem aplicar seja o que for.',
    heroPara2:
      'Para análise de conteúdo, preparação da aprovação, filas de revisão e planeamento de edições seguras.',
    problemEyebrow: 'Onde o planeamento de alterações corre mal',
    problemH2: 'As equipas saltam da conclusão para a edição depressa demais.',
    problemPara:
      'Um Worker pode identificar um problema real, mas o passo seguinte não deve ser a edição automática. A alteração proposta precisa de contexto: que área é afetada, porque é que a alteração importa, quão arriscada é e que benefício se espera. O Sam cria essa camada de decisão.',
    problemAnnotation: '↘ planeie a alteração antes de editar',
    beforeStamp: 'Conclusão em bruto',
    beforeHtml: `<p>A página precisa de uma introdução mais forte e de um próximo passo mais claro.</p>`,
    beforeTags: ['Sem área afetada', 'Sem etiqueta de risco', 'Sem prioridade', 'Sem estado de aprovação'],
    beforeNote: 'o editor ainda tem de interpretar a conclusão',
    afterStamp: 'Alteração planeada',
    afterHtml: `<p>Reveja a introdução para clarificar a promessa da página e acrescente um próximo passo relevante depois da primeira secção.</p>`,
    afterTags: ['Área afetada', 'Benefício esperado', 'Risco assinalado', 'Aprovação necessária'],
    afterNote: 'a alteração está pronta para revisão',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um plano estruturado antes de qualquer alteração de conteúdo.',
    helpsPara:
      'O Sam associa conclusões a propostas de alteração. Não reescreve, não aplica nem publica. Prepara um plano revisível por humanos que pode passar para a fila do Riley ou para um fluxo de aprovação posterior.',
    checks: [
      'As conclusões e recomendações dos Workers',
      'A área de conteúdo afetada',
      'O tipo de alteração',
      'A prioridade e o benefício esperado',
      'O nível de risco',
      'Os requisitos de evidência ou de aprovação',
    ],
    improves: [
      'A segurança dos fluxos de trabalho de conteúdo',
      'A qualidade das decisões de revisão',
      'A clareza antes de as edições começarem',
      'A separação entre recomendação e ação',
    ],
    prepares: [
      'Um plano de alterações propostas',
      'Etiquetas de área afetada',
      'Notas de risco e benefício',
      'Itens de revisão prontos para aprovação',
    ],
    surfaces: [
      'Alterações que precisam de aprovação',
      'Edições de alto risco',
      'Itens que precisam de mais evidência',
      'Recomendações que ainda não estão prontas para edição segura',
    ],
    ioH2: 'Com que material o Sam trabalha, e o que produz.',
    worksFrom: [
      'Conclusões dos Workers',
      'Revisão de evidência',
      'Resultados da análise de conteúdo',
      'Sinais de risco e de afirmações',
      'Contexto da página',
    ],
    produces: [
      'Plano de alterações',
      'Alterações propostas',
      'Notas de área afetada',
      'Etiquetas de risco',
      'Benefício esperado',
    ],
    scenarios: [
      {
        title: 'Uma revisão produziu várias conclusões.',
        description: 'O Sam transforma-as em propostas de alteração que o editor pode avaliar.',
      },
      {
        title: 'A equipa precisa de evitar edições automáticas.',
        description: 'Ele cria uma camada de planeamento antes de qualquer conteúdo ser tocado.',
      },
      {
        title: 'Uma recomendação pode ser arriscada.',
        description: 'O Sam assinala o risco e as necessidades de evidência antes de a recomendação avançar.',
      },
      {
        title: 'Uma página está a entrar na fila de revisão.',
        description: 'Ele prepara os itens estruturados que o Riley pode organizar.',
      },
      {
        title: 'O editor precisa de prioridades mais claras.',
        description: 'O Sam etiqueta o que importa mais e porquê.',
      },
      {
        title: 'Uma alteração ainda não deve estar pronta para edição segura.',
        description: 'Ele mantém as alterações propostas apenas em estado de revisão até serem aprovadas.',
      },
    ],
    boundaryH2: 'O Sam planeia alterações. Os editores aprovam-nas ou rejeitam-nas.',
    boundaryPara:
      'O Sam não edita a página, não redige edições seguras, não aplica alterações nem publica. Prepara propostas de alteração para decisão humana.',
    boundaryChecklist: [
      'O Sam planeia alterações, nunca as edita nem as aplica.',
      'As alterações propostas mantêm-se apenas em revisão até um editor as aprovar.',
      'As necessidades de risco e de evidência são assinaladas, nunca ignoradas ou presumidas seguras.',
      'Uma conclusão nunca é tratada como já aprovada.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever conteúdo automaticamente' },
      { color: 'red', text: 'Aplicar as alterações propostas' },
      { color: 'red', text: 'Tratar uma conclusão como aprovada' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Contornar verificações de evidência ou de risco' },
    ],
    relatedH2: 'Workers com quem o Sam trabalha.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: 'Transforma as propostas de alteração do Sam numa fila de decisão.',
        outputLabel: 'Fila de revisão',
        ctaLabel: 'Como o Riley organiza',
      },
      {
        id: 'review',
        description: 'Resume as ações de revisão para editores humanos.',
        outputLabel: 'Resumo da revisão',
        ctaLabel: 'Como a Helen resume',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Verifica se as alterações propostas bloqueiam a aprovação.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como a Dana decide',
      },
    ],
    ctaH2: 'Planeie a alteração antes da edição.',
    ctaPara:
      'O Sam transforma conclusões em propostas de alteração estruturadas, para que os editores humanos possam aprovar, rejeitar ou adiar com contexto.',
    guidanceFooterLabel: 'ESTADO DA ALTERAÇÃO',
    guidanceFooterValue: 'Proposta · a aguardar revisão',
  },

  review: {
    seoTitle: 'Review Worker | WordPresto',
    metaDescription:
      'A Helen reúne conclusões e recomendações num resumo de revisão estruturado para ação humana, tornando a revisão compreensível sem remover a nuance.',
    h1: 'Transforme conclusões complexas numa revisão editorial clara.',
    heroPara1:
      'A revisão de uma página pode envolver problemas técnicos, lacunas de conteúdo, preocupações de evidência, notas de legibilidade, problemas de intenção e bloqueios de aprovação. Os editores precisam de um resumo claro, não de mais uma pilha de conclusões desligadas entre si. A Helen reúne conclusões e recomendações num resumo de revisão estruturado para ação humana. Torna a revisão compreensível sem remover a nuance.',
    heroPara2:
      'Para auditorias de página, análise de conteúdo, preparação da aprovação e transferência entre as conclusões dos Workers e as decisões do editor.',
    problemEyebrow: 'Onde os resumos de revisão falham',
    problemH2: 'Uma auditoria útil continua a falhar se o editor não conseguir agir a partir dela.',
    problemPara:
      'Demasiadas conclusões criam fadiga. Pouco detalhe esconde o risco. Um bom resumo de revisão precisa de preservar os sinais importantes e, ao mesmo tempo, tornar clara a próxima ação. A Helen dá aos editores a versão que conseguem realmente usar.',
    problemAnnotation: '↘ resumir sem achatar a evidência',
    beforeStamp: 'Revisão pouco clara',
    beforeHtml: `<p>As conclusões técnicas, de conteúdo e de evidência aparecem em separado, sem uma ordem de ação clara.</p>`,
    beforeTags: ['Conclusões dispersas', 'Sem resumo', 'Prioridade pouco clara', 'Difícil de aprovar'],
    beforeNote: 'o editor tem de reconstruir a história',
    afterStamp: 'Resumo editorial',
    afterHtml: `<p>A Helen agrupa as conclusões, destaca os bloqueios e lista as ações de revisão por ordem.</p>`,
    afterTags: ['Resumo claro', 'Priorizado', 'Revisível', 'Liderado por humanos'],
    afterNote: 'o editor sabe o que precisa de atenção',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma camada de revisão para a tomada de decisão humana.',
    helpsPara:
      'A Helen lê as conclusões disponíveis e transforma-as num resumo calmo e estruturado. Não aprova, não edita, não aplica nem publica. Ajuda o editor a compreender o que importa.',
    checks: [
      'As conclusões e recomendações dos Workers',
      'Os itens de revisão manual',
      'A prioridade e a gravidade',
      'As limitações da evidência',
      'Os bloqueios de aprovação',
      'A ordem das ações',
    ],
    improves: [
      'A clareza editorial',
      'A rapidez da revisão humana',
      'A preparação da aprovação',
      'A compreensão entre equipas',
    ],
    prepares: [
      'Resumo de revisão',
      'Lista de ações priorizada',
      'Notas de revisão manual',
      'Resumo de bloqueios',
    ],
    surfaces: [
      'Os problemas críticos em primeiro lugar',
      'Itens que precisam de critério manual',
      'Conclusões contraditórias ou incertas',
      'Recomendações que ainda não devem avançar',
    ],
    ioH2: 'Com que material a Helen trabalha, e o que produz.',
    worksFrom: [
      'Resultados dos Workers',
      'Itens da fila de revisão',
      'Alterações propostas',
      'Limitações de evidência',
      'Sinais de aprovação',
    ],
    produces: [
      'Resumo de revisão editorial',
      'Lista de ações prioritárias',
      'Notas de revisão manual',
      'Resumo de bloqueios',
      'Contexto de apoio à decisão',
    ],
    scenarios: [
      {
        title: 'A revisão de uma página tem demasiadas conclusões.',
        description: 'A Helen transforma-as num resumo claro.',
      },
      {
        title: 'Um editor precisa da próxima ação.',
        description: 'Ela destaca o que rever primeiro.',
      },
      {
        title: 'É preciso fazer uma transferência.',
        description: 'A Helen torna as conclusões legíveis para alguém que não fez a análise.',
      },
      {
        title: 'A aprovação está a aproximar-se.',
        description: 'Ela põe em evidência os bloqueios e os itens de revisão por resolver.',
      },
      {
        title: 'As conclusões estão misturadas entre equipas.',
        description: 'A Helen agrupa problemas técnicos, de conteúdo, de evidência e de governação numa única revisão.',
      },
      {
        title: 'A equipa precisa de uma visão editorial calma.',
        description: 'Ela reduz o ruído sem esconder preocupações importantes.',
      },
    ],
    boundaryH2: 'A Helen resume. Os editores decidem.',
    boundaryPara:
      'A Helen não aprova conteúdo, não edita texto, não aplica alterações nem publica. Prepara um resumo de revisão para que os humanos possam tomar melhores decisões.',
    boundaryChecklist: [
      'A Helen resume conclusões, nunca aprova nem edita o conteúdo.',
      'Os bloqueios são sempre postos em evidência, nunca escondidos para fazer uma página parecer pronta.',
      'Os resumos preservam a nuance importante, em vez de a achatarem.',
      'A revisão jurídica, de conformidade ou de acessibilidade especializada nunca é substituída.',
    ],
    willNot: [
      { color: 'red', text: 'Aprovar conteúdo automaticamente' },
      { color: 'red', text: 'Reescrever ou aplicar correções' },
      { color: 'red', text: 'Esconder bloqueios para fazer uma página parecer pronta' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Substituir a revisão jurídica, de conformidade ou de acessibilidade especializada' },
    ],
    relatedH2: 'Workers com quem a Helen trabalha.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: 'Organiza as alterações propostas em itens de decisão.',
        outputLabel: 'Fila de revisão',
        ctaLabel: 'Como o Riley organiza',
      },
      {
        id: 'safe_change_planner',
        description: 'Transforma conclusões em propostas de alteração.',
        outputLabel: 'Plano de alterações',
        ctaLabel: 'Como o Sam planeia',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Usa o estado da revisão para avaliar a prontidão para aprovação.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como a Dana avalia',
      },
    ],
    ctaH2: 'Dê aos editores a revisão sobre a qual podem agir.',
    ctaPara:
      'A Helen transforma as conclusões dos Workers num resumo editorial claro, para que os revisores humanos possam decidir o que acontece a seguir.',
    guidanceFooterLabel: 'ESTADO DA REVISÃO',
    guidanceFooterValue: 'Resumo pronto · ação do editor necessária',
  },

  editorial_approval_gate: {
    seoTitle: 'Editorial Approval Gate Worker | WordPresto',
    metaDescription:
      'A Dana lê os resultados já produzidos pelos Workers e gera um portão de aprovação conservador, dizendo ao revisor humano se o conteúdo parece pronto para revisão, precisa de correção ou está bloqueado.',
    h1: 'Verifique se o trabalho está pronto para aprovação humana.',
    heroPara1:
      'A aprovação não devia ser uma sensação. Antes de o conteúdo avançar, o editor precisa de saber se as verificações essenciais estão limpas, se restam bloqueios e se ainda falta correção, evidência ou revisão especializada. A Dana lê os resultados já produzidos pelos Workers e gera um portão de aprovação conservador. Não aprova automaticamente. Diz ao revisor humano se o conteúdo parece pronto para revisão, precisa de correção ou está bloqueado.',
    heroPara2:
      'Para verificações editoriais finais, fluxos de aprovação, preparação da transferência para o CMS e governação de conteúdo.',
    problemEyebrow: 'Onde os fluxos de aprovação correm mal',
    problemH2: 'O conteúdo avança porque toda a gente presume que outra pessoa o verificou.',
    problemPara:
      'Uma página pode ter um bom texto e continuar a conter lacunas de evidência por resolver, problemas de acessibilidade, problemas de metadados, preocupações de confiança, bloqueios na transferência para o CMS ou risco editorial. Se estes problemas estiverem dispersos pelos resultados dos vários Workers, são fáceis de deixar escapar. A Dana reúne o estado final da revisão num único portão.',
    problemAnnotation: '↘ verifique a prontidão antes da aprovação',
    beforeStamp: 'Aprovação solta',
    beforeHtml: `<p>O rascunho parece pronto, mas as verificações de evidência, metadados e acessibilidade ainda contêm itens por resolver.</p>`,
    beforeTags: ['Bloqueios por resolver', 'Sem portão final', 'Riscos dispersos', 'Aprovação pouco clara'],
    beforeNote: 'o editor tem de andar à procura dos problemas',
    afterStamp: 'Portão revisto',
    afterHtml: `<p>A Dana resume a prontidão, os bloqueios e as próximas ações antes de o editor humano aprovar.</p>`,
    afterTags: ['Portão conservador', 'Estado claro', 'Bloqueios priorizados', 'Decisão humana'],
    afterNote: 'a aprovação torna-se mais segura',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um portão final conservador antes de o conteúdo avançar.',
    helpsPara:
      'A Dana revê os resultados já calculados pelos Workers e determina se o conteúdo parece pronto para revisão editorial humana. Não certifica conformidade, não publica conteúdo nem aprova automaticamente.',
    checks: [
      'O estado do relatório de aprovação',
      'Os problemas de risco editorial e de afirmações',
      'As lacunas de evidência',
      'O estado da acessibilidade',
      'A prontidão dos metadados de SEO e do snippet de SERP',
      'Os sinais de schema e de confiança',
      'Os bloqueios da transferência para o CMS',
      'A qualidade do rascunho e o estado da revisão',
    ],
    improves: [
      'A confiança na aprovação',
      'A governação editorial',
      'A visibilidade dos bloqueios',
      'A prontidão antes da transferência ou do fluxo de publicação',
    ],
    prepares: [
      'Decisão do portão de aprovação',
      'Pontuação de prontidão',
      'Lista de bloqueios',
      'Recomendações priorizadas',
    ],
    surfaces: [
      'Bloqueios definitivos',
      'Itens que precisam de correção',
      'Evidência de revisão em falta',
      'Razões pelas quais o conteúdo ainda não deve avançar',
    ],
    ioH2: 'Com que material a Dana trabalha, e o que produz.',
    worksFrom: [
      'Resumo de revisão',
      'Fila de revisão',
      'Revisão de lacunas de evidência',
      'Conclusões de risco editorial',
      'Resultados de acessibilidade, metadados, schema e confiança',
    ],
    produces: [
      'Revisão do portão de aprovação',
      'Decisão do portão',
      'Pontuação de prontidão',
      'Lista de bloqueios',
      'Recomendações priorizadas',
    ],
    scenarios: [
      {
        title: 'Uma página está perto da aprovação final.',
        description: 'A Dana verifica se as conclusões dos Workers ainda por resolver continuam a bloquear o avanço.',
      },
      {
        title: 'Vários Workers de revisão já correram.',
        description: 'Ela combina o estado num único portão de prontidão claro.',
      },
      {
        title: 'Um rascunho está a caminhar para a transferência para o CMS.',
        description: 'A Dana assinala bloqueios antes de a transferência criar risco operacional.',
      },
      {
        title: 'O editor precisa de um ponto de decisão conservador.',
        description: 'Ela só dá "aprovado para revisão" quando as verificações estão suficientemente limpas.',
      },
      {
        title: 'A governação importa.',
        description: 'A Dana mantém visíveis os problemas de risco, evidência e acessibilidade antes da validação final.',
      },
      {
        title: 'Uma página ainda não deve avançar.',
        description: 'Ela explica porquê e lista as ações de maior prioridade.',
      },
    ],
    boundaryH2: 'A Dana controla a prontidão no portão. Os humanos aprovam.',
    boundaryPara:
      'A Dana não aprova conteúdo automaticamente, não certifica conformidade, não publica nem escreve num CMS. O seu trabalho é tornar visível o estado da aprovação para que um revisor humano possa decidir.',
    boundaryChecklist: [
      'A Dana controla a prontidão no portão, nunca aprova o conteúdo.',
      'A conformidade (jurídica, médica, financeira, de acessibilidade) nunca é certificada pela Dana.',
      'Os bloqueios são sempre postos em evidência, nunca escondidos para fazer o conteúdo parecer pronto.',
      'A decisão do portão é conservadora: itens pouco claros ou por resolver assumem por defeito que precisam de correção.',
    ],
    willNot: [
      { color: 'red', text: 'Aprovar conteúdo automaticamente' },
      { color: 'red', text: 'Certificar conformidade jurídica, médica, financeira ou de acessibilidade' },
      { color: 'red', text: 'Publicar ou transferir conteúdo sozinha' },
      { color: 'red', text: 'Esconder bloqueios para fazer o conteúdo parecer pronto' },
      { color: 'red', text: 'Reescrever ou aplicar correções' },
    ],
    relatedH2: 'Workers com quem a Dana trabalha.',
    relatedWorkerIds: [
      {
        id: 'review',
        description: 'Resume as conclusões e as ações de revisão antes do portão final.',
        outputLabel: 'Resumo da revisão',
        ctaLabel: 'Como a Helen resume',
      },
      {
        id: 'safe_change_planner',
        description: 'Transforma conclusões em propostas de alteração que a Dana pode avaliar quanto a bloqueios.',
        outputLabel: 'Plano de alterações',
        ctaLabel: 'Como o Sam planeia',
      },
      {
        id: 'review_queue',
        description: 'Organiza os itens por resolver que a Dana pode tratar como bloqueios de aprovação.',
        outputLabel: 'Fila de revisão',
        ctaLabel: 'Como o Riley organiza',
      },
    ],
    ctaH2: 'Torne a prontidão explícita antes da aprovação.',
    ctaPara:
      'A Dana ajuda os editores a ver se o conteúdo está pronto para aprovação humana, precisa de correção ou deve ser bloqueado antes da transferência.',
    guidanceFooterLabel: 'ESTADO DO PORTÃO',
    guidanceFooterValue: 'Precisa de correção · decisão do editor necessária',
  },

  site_discovery: {
    seoTitle: 'Site Discovery Worker | WordPresto',
    metaDescription:
      'A Claire ajuda a identificar as páginas de um projeto de website, para que os editores vejam o que precisa de revisão, onde estão as oportunidades de conteúdo e como o site começa a encaixar-se.',
    h1: 'Encontre as páginas antes de o trabalho começar.',
    heroPara1:
      'Um bom fluxo de trabalho de conteúdo começa por saber o que já existe. A Claire ajuda a identificar as páginas de um projeto de website, para que os editores vejam o que precisa de revisão, onde estão as oportunidades de conteúdo e como o site começa a encaixar-se. Dá à equipa uma visão organizada das páginas do site, sinais de conteúdo iniciais e notas de descoberta, para que o resto dos Workers do Word Presto possa partir de uma imagem de projeto mais clara.',
    heroPara2:
      'Para projetos de website, auditorias de conteúdo, planeamento de revisão de páginas, revisões de ligação interna e inteligência de projeto numa fase inicial.',
    problemEyebrow: 'Onde os projetos de site se tornam confusos',
    problemH2: 'Não é possível melhorar o conteúdo se não souber com que páginas está a lidar.',
    problemPara:
      'A maior parte do trabalho de conteúdo começa tarde demais no processo. As equipas avançam para uma página, uma palavra-chave ou um rascunho antes de compreenderem o site mais amplo. Páginas importantes passam despercebidas. Páginas fracas ficam escondidas. Oportunidades de ligação são ignoradas. O projeto começa com fragmentos em vez de um mapa. A Claire dá ao fluxo de trabalho um ponto de partida mais claro.',
    problemAnnotation: '↘ descubra as páginas, depois decida o que precisa de trabalho',
    beforeStamp: 'Ponto de partida confuso',
    beforeHtml: `<p>A equipa tem uma página inicial, algumas páginas de serviço e algumas publicações de blogue, mas não tem uma visão clara do que deve ser revisto primeiro.</p>`,
    beforeTags: ['Páginas dispersas', 'Prioridade de revisão pouco clara', 'Visão fraca do site', 'Difícil de planear'],
    beforeNote: 'o projeto começa a partir de fragmentos',
    afterStamp: 'Revisão de descoberta',
    afterHtml: `<p>A Claire organiza as páginas conhecidas, destaca as verificações de acompanhamento e prepara o site para uma revisão mais profunda.</p>`,
    afterTags: ['Lista de páginas mais clara', 'Melhor fluxo de revisão', 'Sinais de conteúdo visíveis', 'Pronto para os Workers'],
    afterNote: 'a equipa sabe por onde começar',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma camada de descoberta para projetos de website.',
    helpsPara:
      'A Claire ajuda a equipa a compreender as páginas que compõem um projeto de website. Prepara a visão de partida para o inventário de conteúdo, a inspeção de páginas, a revisão de links e uma inteligência de projeto mais profunda.',
    checks: [
      'As páginas que devem fazer parte do projeto',
      'As secções do site e os grupos de páginas',
      'Sinais iniciais de conteúdo e de estrutura',
      'Páginas que podem precisar de revisão',
      'Oportunidades de relação interna',
      'Verificações de acompanhamento para os editores',
    ],
    improves: [
      'A configuração do projeto',
      'O planeamento de auditorias de conteúdo',
      'A priorização da revisão de páginas',
      'A visibilidade da ligação interna e da estrutura do site',
    ],
    prepares: [
      'Revisão de descoberta do site',
      'Lista de páginas para inspeção',
      'Notas iniciais de estrutura do site',
      'Sugestões de revisão de acompanhamento',
    ],
    surfaces: [
      'Páginas que valem a pena inspecionar',
      'Secções que podem estar pobres ou pouco claras',
      'Áreas em que a estrutura do site precisa de atenção',
      'Páginas que podem precisar de links internos mais fortes',
    ],
    ioH2: 'Com que material a Claire trabalha, e o que produz.',
    worksFrom: [
      'Projeto de website',
      'Páginas conhecidas do site',
      'Secções do site',
      'Relações entre páginas',
      'Contexto de configuração do projeto',
    ],
    produces: [
      'Revisão de descoberta do site',
      'Páginas para revisão',
      'Notas de secções do site',
      'Sugestões de relação interna',
      'Verificações de acompanhamento',
    ],
    scenarios: [
      {
        title: 'Um novo projeto de website está a começar.',
        description: 'A Claire ajuda a estabelecer que páginas devem fazer parte da primeira revisão.',
      },
      {
        title: 'Uma auditoria de site precisa de estrutura.',
        description: 'Ela dá aos editores uma visão mais clara das páginas e secções com que estão a trabalhar.',
      },
      {
        title: 'Um inventário de conteúdo precisa de um ponto de partida.',
        description: 'A Claire prepara o contexto de descoberta de páginas antes de a Nora classificar os ativos.',
      },
      {
        title: 'O trabalho de ligação interna precisa de uma visão do site.',
        description: 'Ela põe em evidência as relações entre páginas e as áreas que podem precisar de revisão de links.',
      },
      {
        title: 'A equipa não sabe por onde começar.',
        description: 'A Claire ajuda a transformar um website num projeto revisível.',
      },
      {
        title: 'Um projeto precisa de inteligência mais profunda.',
        description: 'Ela dá aos outros Workers um mapa de partida mais limpo antes de a análise continuar.',
      },
    ],
    boundaryH2: 'A Claire descobre páginas. Os editores decidem o que importa.',
    boundaryPara:
      'A Claire ajuda a organizar o site para revisão. Não decide a estratégia, não elimina páginas, não reescreve texto nem publica. Os editores escolhem que páginas inspecionar, priorizar e melhorar.',
    boundaryChecklist: [
      'A Claire organiza as páginas para revisão, nunca as edita nem as elimina.',
      'As páginas descobertas são uma lista de partida para os editores, não uma ordem de prioridade automática.',
      'As notas de estrutura do site apoiam o planeamento, não substituem o critério humano sobre a estratégia.',
      'As verificações de acompanhamento são listadas com clareza, para que os editores saibam o que ainda precisa de confirmação.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever ou editar conteúdo' },
      { color: 'red', text: 'Eliminar, juntar ou redirecionar páginas' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Tratar todas as páginas descobertas como automaticamente importantes' },
      { color: 'red', text: 'Substituir a revisão humana das prioridades do site' },
    ],
    relatedH2: 'Workers com quem a Claire trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Inspeciona páginas individuais depois de serem selecionadas para revisão.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como o Patrick inspeciona',
      },
      {
        id: 'content_inventory',
        description: 'Classifica as páginas como ativos de conteúdo e regista sinais de planeamento.',
        outputLabel: 'Revisão de inventário',
        ctaLabel: 'Como a Nora classifica',
      },
      {
        id: 'internal_linking',
        description: 'Revê como as páginas selecionadas se ligam a conteúdo relacionado.',
        outputLabel: 'Avaliação de links',
        ctaLabel: 'Como o Leo revê',
      },
    ],
    ctaH2: 'Dê a cada projeto de website um ponto de partida mais claro.',
    ctaPara:
      'A Claire ajuda o Word Presto a passar de páginas dispersas para um fluxo de revisão organizado, para que os editores saibam o que existe e por onde deve começar o trabalho.',
    guidanceFooterLabel: 'ESTADO DA DESCOBERTA',
    guidanceFooterValue: 'Páginas prontas para revisão',
  },

  page_inspector: {
    seoTitle: 'Page Inspector Worker | WordPresto',
    metaDescription:
      'O Patrick inspeciona a página e extrai os sinais de origem de que o resto do fluxo de trabalho depende: título, meta description, títulos, links, imagens, schema, contagem de palavras e estrutura visível da página.',
    h1: 'Comece pelo que a página realmente diz.',
    heroPara1:
      'Antes de o Word Presto recomendar alterações, a página precisa de ser lida com rigor. O Patrick inspeciona a página e extrai os sinais de origem de que o resto do fluxo de trabalho depende: título, meta description, títulos, links, imagens, schema, contagem de palavras e estrutura visível da página. Dá à equipa uma imagem exata e atual da página tal como ela realmente é, e não como alguém presume que seja.',
    heroPara2:
      'Para revisão de páginas, auditorias de conteúdo, verificações técnicas, briefing e qualquer etapa do fluxo de trabalho que precise de partir de factos confirmados sobre a página, e não de suposições.',
    problemEyebrow: 'Onde a revisão de páginas corre mal',
    problemH2: 'Não é possível rever uma página que não foi realmente inspecionada.',
    problemPara:
      'As equipas trabalham muitas vezes de memória, a partir de uma captura de ecrã antiga ou do que uma página devia conter, em vez do que realmente contém. Os títulos são reescritos sem verificar o que está ao vivo. Os títulos de secção são presumidos em vez de confirmados. A falta de schema passa despercebida. A revisão começa a partir de suposições, em vez de a partir da própria página. O Patrick inspeciona primeiro, para que o resto do fluxo de trabalho comece a partir do que realmente lá está.',
    problemAnnotation: '↘ inspecione primeiro, recomende depois',
    beforeStamp: 'Suposição',
    beforeHtml: `<p>A equipa presume que a página ainda tem o título antigo, um H1 claro e links internos a funcionar, sem verificar a página ao vivo.</p>`,
    beforeTags: ['Título presumido', 'Títulos não confirmados', 'Schema desconhecido', 'Sem verificação de origem'],
    beforeNote: 'a revisão começa a partir de uma suposição',
    afterStamp: 'Página inspecionada',
    afterHtml: `<p>O Patrick confirma o título, a meta description, os títulos, os links, as imagens, o schema e a contagem de palavras que estão ao vivo.</p>`,
    afterTags: ['Sinais de origem confirmados', 'Estrutura mapeada', 'Schema verificado', 'Pronta para revisão'],
    afterNote: 'a revisão começa a partir de factos',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma camada de origem para a revisão ao nível da página.',
    helpsPara:
      'O Patrick lê a página ao vivo e extrai os seus sinais de origem, dando aos outros Workers e editores um ponto de partida confirmado, em vez de presumido.',
    checks: [
      'O título da página e a meta description',
      'A estrutura e a hierarquia dos títulos de secção',
      'A estrutura e as secções visíveis da página',
      'Os links internos e de saída',
      'A presença de imagens e de texto alternativo',
      'A presença de marcação de schema',
      'A contagem de palavras',
    ],
    improves: [
      'A precisão da revisão de páginas',
      'Os pontos de partida de briefing e de auditoria',
      'A confiança nas verificações técnicas',
      'A qualidade da transferência para outros Workers',
    ],
    prepares: [
      'Resumo de sinais de página',
      'Factos de origem confirmados',
      'Notas de estrutura para revisão',
      'Sinalizações de elementos em falta',
    ],
    surfaces: [
      'Títulos ou descrições que podem precisar de atenção',
      'Problemas na estrutura de títulos de secção',
      'Schema em falta ou pobre',
      'Páginas com contagens de palavras invulgarmente baixas',
    ],
    ioH2: 'Com que material o Patrick trabalha, e o que produz.',
    worksFrom: [
      'URL da página ao vivo',
      'Projeto de website',
      'Resultados da descoberta do site',
      'Metadados existentes da página',
    ],
    produces: [
      'Resumo de sinais de página',
      'Título e meta description confirmados',
      'Notas de títulos de secção e de estrutura',
      'Inventário de links e imagens',
      'Verificação da presença de schema',
    ],
    scenarios: [
      {
        title: 'Uma página é selecionada para revisão.',
        description: 'O Patrick confirma exatamente o que a página ao vivo contém antes de a revisão começar.',
      },
      {
        title: 'Um título ou meta description precisa de verificação.',
        description: 'Ele reporta os valores atuais ao vivo, em vez do que a equipa presume que sejam.',
      },
      {
        title: 'É preciso fazer uma verificação técnica.',
        description: 'O Patrick põe em evidência os sinais de schema, títulos de secção e estrutura para a Maya avaliar mais a fundo.',
      },
      {
        title: 'Um briefing de conteúdo precisa de factos de origem.',
        description: 'Ele dá ao autor do briefing uma imagem confirmada da página tal como está hoje.',
      },
      {
        title: 'Uma auditoria cobre muitas páginas.',
        description: 'O Patrick inspeciona cada página, para que a auditoria seja construída com base em informação atual, e não presumida.',
      },
      {
        title: 'A seguir vem a revisão de intenção de pesquisa ou de evidência.',
        description: 'Ele entrega à Yuna e ao Kenji uma página de origem confirmada com que trabalhar.',
      },
    ],
    boundaryH2: 'O Patrick reporta o que a página diz. Os editores decidem o que fazer com isso.',
    boundaryPara:
      'O Patrick inspeciona e reporta sinais de origem. Não reescreve a página, não julga a qualidade, não atribui prioridade nem publica. Os editores e outros Workers usam as suas conclusões para decidir o que acontece a seguir.',
    boundaryChecklist: [
      'O Patrick reporta a página tal como existe, nunca a edita nem a reescreve.',
      'As suas conclusões são factos de origem, não julgamentos de qualidade nem decisões de prioridade.',
      'Os elementos em falta são assinalados com clareza, nunca presumidos como estando bem em silêncio.',
      'O critério técnico ou editorial mais aprofundado fica com o Worker ou editor relevante.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever ou editar o conteúdo da página' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Julgar a qualidade do conteúdo ou atribuir prioridade' },
      { color: 'red', text: 'Presumir factos da página sem verificar a página ao vivo' },
      { color: 'red', text: 'Substituir a revisão humana do que as conclusões significam' },
    ],
    relatedH2: 'Workers com quem o Patrick trabalha.',
    relatedWorkerIds: [
      {
        id: 'technical_health',
        description: 'Pega nos sinais de página confirmados e revê o panorama técnico mais amplo.',
        outputLabel: 'Conclusões técnicas',
        ctaLabel: 'Como a Maya revê',
      },
      {
        id: 'intent_analyst',
        description: 'Usa a página inspecionada para avaliar até que ponto corresponde à intenção de pesquisa.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como a Yuna avalia',
      },
      {
        id: 'evidence',
        description: 'Confere as afirmações da página inspecionada face à evidência disponível.',
        outputLabel: 'Pacote de evidência',
        ctaLabel: 'Como o Kenji revê',
      },
    ],
    ctaH2: 'Comece cada revisão de página a partir de factos confirmados.',
    ctaPara:
      'O Patrick dá ao Word Presto uma leitura exata da própria página, para que o resto do fluxo de trabalho se construa sobre o que realmente lá está.',
    guidanceFooterLabel: 'ESTADO DA INSPEÇÃO',
    guidanceFooterValue: 'Sinais de página prontos para revisão',
  },

  accessibility: {
    seoTitle: 'Accessibility Worker | WordPresto',
    metaDescription:
      'A Mara revê os sinais de acessibilidade disponíveis na evidência da página, assinalando estrutura de títulos fraca, alternativas de imagem em falta, texto de link pouco claro, riscos de legibilidade e verificações que precisam de confirmação humana.',
    h1: 'Traga os problemas de acessibilidade para o fluxo de revisão.',
    heroPara1:
      'A acessibilidade determina se as pessoas conseguem ler, navegar, compreender e usar uma página. Devia ser visível antes de o conteúdo chegar à aprovação. A Mara revê os sinais de acessibilidade disponíveis na evidência da página. Assinala problemas como estrutura de títulos fraca, alternativas de imagem em falta, texto de link pouco claro, riscos de legibilidade e verificações manuais que precisam de confirmação humana.',
    heroPara2:
      'Para revisões de página, auditorias técnicas, verificações de qualidade de conteúdo e revisão final antes da aprovação.',
    problemEyebrow: 'Onde a revisão de acessibilidade corre mal',
    problemH2: 'As equipas verificam muitas vezes a acessibilidade tarde demais.',
    problemPara:
      'Se a lógica dos títulos é confusa, o texto dos links é vago ou as imagens não têm alternativas úteis, o problema devia ser visível durante a revisão, não depois do lançamento. A Mara traz esses sinais para o fluxo de trabalho editorial numa fase inicial.',
    problemAnnotation: '↘ ponha isso em evidência durante a revisão, não depois do lançamento',
    beforeStamp: 'Verificado tarde demais',
    beforeHtml: `<p>Uma página é lançada com uma ordem de títulos confusa, texto de links vago e alternativas de imagem em falta, e nada disto é detetado até depois do lançamento.</p>`,
    beforeTags: ['Ordem de títulos pouco clara', 'Texto de links vago', 'Texto alternativo em falta', 'Detetado depois do lançamento'],
    beforeNote: 'o problema só aparece quando já está ao vivo',
    afterStamp: 'Revisão de acessibilidade',
    afterHtml: `<p>A Mara assinala os problemas de títulos, texto de links, imagens e legibilidade antes de a página chegar à aprovação.</p>`,
    afterTags: ['Problemas assinalados cedo', 'Verificações manuais listadas', 'Orientação de correção pronta', 'Revisto antes da aprovação'],
    afterNote: 'o problema é visível antes do lançamento',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de acessibilidade sem certificação falsa.',
    helpsPara:
      'A Mara transforma os sinais de página disponíveis em conclusões de acessibilidade revisíveis. Não afirma conformidade nem substitui os testes manuais.',
    checks: [
      'A estrutura de títulos',
      'A presença de texto alternativo nas imagens',
      'A clareza do texto dos links',
      'Os sinais de legibilidade',
      'As verificações manuais de acessibilidade necessárias',
      'Os riscos de acessibilidade visíveis na evidência da página',
    ],
    improves: [
      'A visibilidade antecipada dos problemas de acessibilidade',
      'A qualidade da transferência editorial',
      'A revisão comum de acessibilidade ao nível da página',
      'A prontidão antes da aprovação',
    ],
    prepares: [
      'Conclusões de acessibilidade',
      'Checklist de verificação manual',
      'Notas de gravidade dos problemas',
      'Orientação de correção para revisão humana',
    ],
    surfaces: [
      'Alternativas de imagem em falta ou fracas',
      'Texto de links vago',
      'Preocupações com a estrutura de títulos',
      'Verificações que precisam de uma auditoria humana ou especializada',
    ],
    ioH2: 'Com que material a Mara trabalha, e o que produz.',
    worksFrom: [
      'Estrutura da página',
      'Sinais de imagens',
      'Texto de links e de âncoras',
      'Sinais de legibilidade',
      'Conclusões da revisão técnica',
    ],
    produces: [
      'Revisão de acessibilidade',
      'Problemas detetados',
      'Verificações manuais',
      'Orientação de correção',
      'Estado da revisão',
    ],
    scenarios: [
      {
        title: 'Uma página está a ser revista antes da aprovação.',
        description: 'A Mara acrescenta uma passagem de acessibilidade à revisão antes de a página avançar.',
      },
      {
        title: 'A revisão técnica encontrou problemas estruturais.',
        description: 'Ela verifica se esses problemas também afetam a lógica de títulos ou a navegação.',
      },
      {
        title: 'Uma página contém muitas imagens.',
        description: 'A Mara assinala as imagens sem alternativas úteis para os editores resolverem.',
      },
      {
        title: 'Os links são vagos ou repetitivos.',
        description: 'Ela põe em evidência o texto de links que precisa de ser mais claro para os leitores e para as tecnologias de apoio.',
      },
      {
        title: 'A estrutura de títulos parece confusa.',
        description: 'A Mara revê a ordem dos títulos e assinala onde pode confundir leitores ou leitores de ecrã.',
      },
      {
        title: 'A equipa precisa de notas de acessibilidade honestas.',
        description: 'Ela reporta o que a evidência sustenta e lista o que ainda precisa de uma verificação manual.',
      },
    ],
    boundaryH2: 'A Mara assinala problemas de acessibilidade. Não certifica conformidade.',
    boundaryPara:
      'A Mara faz uma passagem de acessibilidade apenas de revisão, com base na evidência de página disponível. Não substitui os testes manuais, os testes com leitores de ecrã, a revisão jurídica nem uma auditoria formal WCAG.',
    boundaryChecklist: [
      'A Mara assinala os problemas visíveis na evidência da página, nunca edita títulos, links ou texto alternativo.',
      'As suas conclusões são um ponto de partida para revisão, não uma certificação de conformidade.',
      'As verificações que não consegue confirmar a partir da evidência disponível são listadas como verificações manuais, nunca ignoradas em silêncio.',
      'As auditorias formais de acessibilidade e as decisões de conformidade jurídica ficam com um revisor humano qualificado.',
    ],
    willNot: [
      { color: 'red', text: 'Certificar conformidade de acessibilidade' },
      { color: 'red', text: 'Fazer testes manuais completos de tecnologia de apoio' },
      { color: 'red', text: 'Editar automaticamente títulos, links ou texto alternativo' },
      { color: 'red', text: 'Publicar correções de acessibilidade' },
      { color: 'red', text: 'Inventar problemas não sustentados pela evidência da página' },
    ],
    relatedH2: 'Workers com quem a Mara trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrai a estrutura da página, os links e os sinais de imagem que a Mara revê.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como o Patrick inspeciona',
      },
      {
        id: 'technical_health',
        description: 'Verifica o SEO técnico e os sinais relacionados com a saúde da página.',
        outputLabel: 'Conclusões técnicas',
        ctaLabel: 'Como a Maya revê',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Usa o estado da acessibilidade como parte da revisão de prontidão.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como a Dana decide',
      },
    ],
    ctaH2: 'Torne a acessibilidade visível antes da aprovação.',
    ctaPara:
      'A Mara ajuda os editores a ver os problemas de acessibilidade cedo, com clareza e honestidade, antes de o conteúdo avançar.',
    guidanceFooterLabel: 'ESTADO DA ACESSIBILIDADE',
    guidanceFooterValue: 'Precisa de revisão · verificações prontas',
  },

  intent_analyst: {
    seoTitle: 'Intent Analyst Worker | WordPresto',
    metaDescription:
      'A Yuna revê se o conteúdo, a estrutura, os metadados e o próximo passo de uma página estão alinhados com a provável intenção de pesquisa ou do leitor.',
    h1: 'Verifique se a página corresponde ao que o leitor veio procurar.',
    heroPara1:
      'Uma página pode estar bem escrita e continuar a falhar a intenção. Pode responder à pergunta errada, prometer mais do que entrega, ou misturar várias necessidades do leitor numa única página confusa. A Yuna revê se o conteúdo, a estrutura, os metadados e o próximo passo estão alinhados com a provável intenção de pesquisa ou do leitor.',
    heroPara2:
      'Para revisões de página, briefings de conteúdo, auditorias de SEO, reescritas de página e planeamento editorial orientado pela pesquisa.',
    problemEyebrow: 'Onde a estratégia de conteúdo corre mal',
    problemH2: 'A página responde a alguma coisa, mas nem sempre à coisa que importa.',
    problemPara:
      'A intenção de pesquisa é a razão por trás da visita. Um leitor pode querer uma definição, uma comparação, prova, um guia, pistas de preço, tranquilização ou uma forma clara de agir. A Yuna verifica se a página está a servir essa razão.',
    problemAnnotation: '↘ verifique a razão antes da reescrita',
    beforeStamp: 'Intenção pouco clara',
    beforeHtml: `<p>A página lê-se bem, mas mistura várias necessidades do leitor numa só secção, pelo que não é claro a que pergunta realmente responde.</p>`,
    beforeTags: ['Necessidades do leitor misturadas', 'Metadados prometem demais', 'Sem próximo passo claro', 'Intenção não confirmada'],
    beforeNote: 'a página é otimizada antes de a intenção estar clara',
    afterStamp: 'Avaliação de intenção',
    afterHtml: `<p>A Yuna confirma a intenção provável, assinala as lacunas entre a promessa e a entrega, e recomenda um ângulo de página mais claro.</p>`,
    afterTags: ['Intenção confirmada', 'Lacunas do leitor listadas', 'Ângulo recomendado', 'Pronta para reescrita'],
    afterNote: 'a reescrita visa a razão certa',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de intenção antes da otimização.',
    helpsPara:
      'A Yuna compara o que a página parece prometer com o que realmente entrega. Ajuda o editor a ver se a função da página é suficientemente clara antes de a reescrever, expandir ou aprovar.',
    checks: [
      'A provável intenção do leitor ou de pesquisa',
      'A promessa dos metadados face ao que a página entrega',
      'As perguntas do leitor em falta',
      'A adequação do formato da página',
      'A ordem das secções',
      'O alinhamento do próximo passo',
    ],
    improves: [
      'A adequação à intenção de pesquisa',
      'A qualidade do briefing',
      'A clareza do propósito da página',
      'A direção da reescrita',
    ],
    prepares: [
      'Avaliação de intenção',
      'Lacunas nas necessidades do leitor',
      'Ângulo de página recomendado',
      'Próximas ações alinhadas com a pesquisa',
    ],
    surfaces: [
      'Desalinhamento de intenção',
      'Objetivos de página misturados ou concorrentes',
      'Informação de decisão em falta',
      'Secções que distraem do propósito da página',
    ],
    ioH2: 'Com que material a Yuna trabalha, e o que produz.',
    worksFrom: [
      'Título da página e metadados',
      'Texto da página',
      'Estrutura da página',
      'Sinais de origem',
      'Contexto de tópico ou de palavra-chave, quando disponível',
    ],
    produces: [
      'Avaliação de intenção',
      'Lacunas nas necessidades do leitor',
      'Notas sobre a promessa de pesquisa',
      'Função de página recomendada',
      'Próximas ações alinhadas com a intenção',
    ],
    scenarios: [
      {
        title: 'Uma página tem bom posicionamento mas não converte.',
        description: 'A Yuna verifica se a página está mesmo a servir a intenção para a qual está posicionada.',
      },
      {
        title: 'Um rascunho parece desfocado.',
        description: 'Ela identifica em torno de que necessidade do leitor o rascunho deve ser construído.',
      },
      {
        title: 'Os metadados prometem algo que a página não entrega.',
        description: 'A Yuna assinala a lacuna entre a promessa de pesquisa e o conteúdo real.',
      },
      {
        title: 'Um briefing de conteúdo precisa de uma necessidade do leitor clara.',
        description: 'Ela dá ao autor do briefing uma intenção confirmada em torno da qual planear.',
      },
      {
        title: 'É preciso tomar uma decisão de formato de página.',
        description: 'A Yuna entrega ao Ivan uma avaliação de intenção para verificar o formato.',
      },
      {
        title: 'As recomendações de SEO estão a puxar em direções diferentes.',
        description: 'Ela ancora a revisão no que o leitor realmente veio procurar.',
      },
    ],
    boundaryH2: 'A Yuna esclarece a intenção. Os editores decidem a estratégia.',
    boundaryPara:
      'A Yuna não reescreve a página, não escolhe a estratégia de negócio nem garante melhoria de posicionamento. Dá aos editores uma avaliação de intenção revisível.',
    boundaryChecklist: [
      'A Yuna avalia a intenção a partir da página e do seu contexto, nunca reescreve o conteúdo.',
      'A sua avaliação é um ponto de partida para o planeamento, não uma decisão de estratégia.',
      'Os ângulos de página recomendados são sugestões para os editores, não alterações automáticas.',
      'Os resultados de posicionamento nunca são prometidos nem implícitos nas suas conclusões.',
    ],
    willNot: [
      { color: 'red', text: 'Ir buscar ou fabricar dados de SERP ao vivo' },
      { color: 'red', text: 'Reescrever conteúdo automaticamente' },
      { color: 'red', text: 'Garantir melhoria de posicionamento' },
      { color: 'red', text: 'Escolher a estratégia sem revisão humana' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem a Yuna trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrai os sinais de origem que a Yuna revê.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como o Patrick inspeciona',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Verifica se o formato da página corresponde à forma esperada na pesquisa.',
        outputLabel: 'Revisão de formato',
        ctaLabel: 'Como o Ivan verifica',
      },
      {
        id: 'conversion_alignment',
        description: 'Verifica se o próximo passo se ajusta à intenção do leitor.',
        outputLabel: 'Revisão de conversão',
        ctaLabel: 'Como a Diane verifica',
      },
    ],
    ctaH2: 'Faça a página corresponder à razão do leitor.',
    ctaPara:
      'A Yuna ajuda a garantir que o trabalho de otimização visa a intenção certa antes de a equipa reescrever ou aprovar seja o que for.',
    guidanceFooterLabel: 'ESTADO DA INTENÇÃO',
    guidanceFooterValue: 'Precisa de revisão · lacunas encontradas',
  },

  evidence: {
    seoTitle: 'Evidence Worker | WordPresto',
    metaDescription:
      'O Kenji revê a evidência por trás das conclusões e recomendações, verificando a força do suporte, afirmações sem sustentação, proveniência e limitações antes da aprovação.',
    h1: 'Saiba quais as recomendações que estão realmente sustentadas.',
    heroPara1:
      'Os fluxos de trabalho de conteúdo produzem muitos conselhos. Alguns estão bem fundamentados. Outros são fracos. Alguns dependem de dados em falta, de recuperação parcial ou de suposições que precisam de verificação manual. O Kenji revê a evidência por trás das conclusões. Verifica a força do suporte, as recomendações sem sustentação, a proveniência e as limitações.',
    heroPara2:
      'Para auditorias de conteúdo, fluxos de aprovação, revisão de lacunas de evidência, verificações de risco e qualquer recomendação que precise de ser defensável.',
    problemEyebrow: 'Onde as recomendações correm mal',
    problemH2: 'Um conselho só é útil se souber o que o sustenta.',
    problemPara:
      'Uma recomendação pode soar confiante e continuar a assentar em evidência ténue. Pode ir além do que sinais de página limitados sustentam, depender de recuperação em falta, ou implicar uma certeza que o fluxo de trabalho não tem. O Kenji protege os editores da falsa confiança.',
    problemAnnotation: '↘ separe o que está provado do que é presumido',
    beforeStamp: 'Confiança falsa',
    beforeHtml: `<p>Uma recomendação lê-se como facto assente, mas na verdade assenta num único sinal parcial, sem qualquer recuperação que a sustente.</p>`,
    beforeTags: ['Suporte pouco claro', 'Proveniência em falta', 'Confiança exagerada', 'Não verificado'],
    beforeNote: 'o conselho parece certo, mas não é',
    afterStamp: 'Pacote de evidência',
    afterHtml: `<p>O Kenji separa as conclusões sustentadas das fracas e lista exatamente o que ainda precisa de verificação manual.</p>`,
    afterTags: ['Força do suporte mostrada', 'Conclusões fracas assinaladas', 'Proveniência registada', 'Pronto para aprovação'],
    afterNote: 'a confiança corresponde à evidência',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de evidência antes da aprovação.',
    helpsPara:
      'O Kenji revê se as conclusões estão sustentadas por material de origem disponível, sinais de página, normas ou contexto recuperado. Não inventa provas em falta.',
    checks: [
      'A força do suporte por trás das conclusões',
      'As recomendações sem sustentação',
      'As limitações da evidência',
      'A proveniência da recuperação, quando existe',
      'As afirmações que precisam de verificação manual',
      'As áreas em que faltam dados',
    ],
    improves: [
      'A fiabilidade dos resultados de revisão',
      'A confiança editorial',
      'A separação entre evidência, inferência e especulação',
    ],
    prepares: [
      'Revisão de fiabilidade da evidência',
      'Lista de conclusões sem sustentação',
      'Notas de proveniência',
      'Sugestões de verificação manual',
    ],
    surfaces: [
      'Afirmações que precisam de suporte mais forte',
      'Recomendações baseadas em evidência parcial',
      'Material de origem em falta',
      'Limitações que deviam ser visíveis antes da aprovação',
    ],
    ioH2: 'Com que material o Kenji trabalha, e o que produz.',
    worksFrom: [
      'Sinais de página',
      'Conclusões dos Workers',
      'Proveniência de recuperação disponível',
      'Atribuição a normas',
      'Sinais de lacunas de evidência e de risco',
    ],
    produces: [
      'Pacote de evidência',
      'Revisão da força do suporte',
      'Lista de conclusões sem sustentação',
      'Resumo de limitações',
      'Notas de verificação manual',
    ],
    scenarios: [
      {
        title: 'Uma recomendação precisa de ser defensável.',
        description: 'O Kenji verifica o que realmente a sustenta antes de chegar à aprovação.',
      },
      {
        title: 'Uma página faz afirmações.',
        description: 'Ele revê se essas afirmações têm suporte adequado por trás.',
      },
      {
        title: 'Um fluxo de trabalho usa contexto recuperado.',
        description: 'O Kenji verifica a proveniência desse contexto antes de ser usado como base.',
      },
      {
        title: 'Uma aprovação de conteúdo está a aproximar-se.',
        description: 'Ele dá à Dana um pacote de evidência para ponderar como parte da revisão de prontidão.',
      },
      {
        title: 'Os Workers discordam ou produzem conclusões incertas.',
        description: 'O Kenji revê o suporte por trás de cada conclusão para ajudar os editores a julgar em qual confiar.',
      },
      {
        title: 'O tema é sensível ou de alto risco.',
        description: 'Ele trabalha junto com a Vera para assinalar onde a evidência e o risco de conformidade se sobrepõem.',
      },
    ],
    boundaryH2: 'O Kenji revê a evidência. Os editores decidem o que fazer.',
    boundaryPara:
      'O Kenji não certifica verdade, conformidade ou impacto no posicionamento. Se a evidência está em falta, ele diz que está em falta.',
    boundaryChecklist: [
      'O Kenji revê o suporte por trás das conclusões, nunca edita nem aprova o conteúdo.',
      'A evidência em falta ou fraca é reportada com clareza, nunca promovida a certeza em silêncio.',
      'A sua revisão é um contributo para a decisão de aprovação, não a decisão em si.',
      'As afirmações que vão além do que a evidência disponível sustenta são assinaladas para verificação manual.',
    ],
    willNot: [
      { color: 'red', text: 'Inventar citações, factos ou provas' },
      { color: 'red', text: 'Tratar evidência fraca como certeza' },
      { color: 'red', text: 'Ir buscar fontes sem relação e tratá-las como evidência confirmada' },
      { color: 'red', text: 'Aprovar afirmações automaticamente' },
      { color: 'red', text: 'Publicar ou editar conteúdo' },
    ],
    relatedH2: 'Workers com quem o Kenji trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Fornece os factos de origem para a revisão de evidência.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como o Patrick inspeciona',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Usa a evidência e o contexto das afirmações para assinalar risco.',
        outputLabel: 'Relatório de risco e conformidade',
        ctaLabel: 'Como a Vera assinala riscos',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Usa o estado da evidência como parte da revisão final de prontidão.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como a Dana decide',
      },
    ],
    ctaH2: 'Torne as recomendações defensáveis.',
    ctaPara:
      'O Kenji ajuda os editores a ver quais as conclusões bem fundamentadas, quais são fracas e quais precisam de mais evidência antes da aprovação.',
    guidanceFooterLabel: 'ESTADO DA EVIDÊNCIA',
    guidanceFooterValue: 'Limitações assinaladas · revisão necessária',
  },

  internal_linking: {
    seoTitle: 'Content Relationship Worker | WordPresto',
    metaDescription:
      'O Leo revê como uma página se liga a outro conteúdo: links internos, links externos, qualidade das âncoras, percursos do leitor e se a página parece isolada ou mal ligada.',
    h1: 'Verifique se a página se liga ao resto do site.',
    heroPara1:
      'Uma página raramente funciona sozinha. Precisa de páginas relacionadas, recursos de apoio, próximos passos claros e links internos úteis. O Leo revê como a página se liga a outro conteúdo. Verifica os links internos, os links externos, a qualidade das âncoras, os percursos do leitor e se a página parece isolada ou mal ligada.',
    heroPara2:
      'Para revisões de página, verificações de ligação interna, fluxos de trabalho de melhoria de conteúdo e planeamento editorial.',
    problemEyebrow: 'Onde as relações de conteúdo correm mal',
    problemH2: 'Uma página útil pode continuar fora do percurso.',
    problemPara:
      'Uma página pode não ter um próximo passo claro, texto de âncora vago, links de apoio fracos, demasiadas distrações ou nenhuma relação óbvia com o cluster temático em redor. O Leo verifica se a página se comporta como parte de um site ligado.',
    problemAnnotation: '↘ verifique as ligações, não só o texto',
    beforeStamp: 'Página isolada',
    beforeHtml: `<p>A página lê-se bem por si só, mas não tem um próximo passo claro, tem texto de âncora vago e nenhuma ligação óbvia ao cluster temático em redor.</p>`,
    beforeTags: ['Sem próximo passo', 'Âncoras vagas', 'Ligação de cluster fraca', 'Parece isolada'],
    beforeNote: 'a página fica fora do percurso',
    afterStamp: 'Revisão de relação',
    afterHtml: `<p>O Leo revê os links e os percursos da página e assinala onde as ligações precisam de atenção editorial.</p>`,
    afterTags: ['Percursos revistos', 'Âncoras fracas assinaladas', 'Verificações manuais listadas', 'Pronta para revisão'],
    afterNote: 'as ligações da página são visíveis',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma passagem de relação ao nível da página.',
    helpsPara:
      'O Leo revê os links e os percursos visíveis na página. Não rastreia o site inteiro nem confirma todas as páginas órfãs. Dá aos editores uma revisão de relação ao nível da página, bem fundamentada.',
    checks: [
      'A presença de links internos',
      'O uso de links externos',
      'A clareza do texto de âncora',
      'Os percursos de próximo passo do leitor',
      'O risco de página órfã ao nível da página',
      'Os sinais de conteúdo de apoio',
    ],
    improves: [
      'A movimentação do leitor entre páginas',
      'A utilidade dos links internos',
      'A coerência do cluster temático',
      'A visibilidade dos percursos fracos',
    ],
    prepares: [
      'Avaliação de links',
      'Revisão de percursos',
      'Notas de qualidade das âncoras',
      'Verificações manuais do grafo do site',
    ],
    surfaces: [
      'Links de próximo passo em falta',
      'Âncoras genéricas ou fracas',
      'Links que distraem',
      'Páginas que podem precisar de apoio de cluster mais forte',
    ],
    ioH2: 'Com que material o Leo trabalha, e o que produz.',
    worksFrom: [
      'Links da página',
      'Texto de âncora',
      'Estrutura da página',
      'Sinais de intenção',
      'Sinais de inventário de conteúdo',
    ],
    produces: [
      'Revisão de relação',
      'Avaliação de links internos',
      'Notas de qualidade das âncoras',
      'Lacunas nos percursos do leitor',
      'Verificações manuais do grafo do site',
    ],
    scenarios: [
      {
        title: 'Uma página parece isolada.',
        description: 'O Leo verifica se tem os links e os percursos que uma página ligada devia ter.',
      },
      {
        title: 'Os links existem mas não ajudam o leitor.',
        description: 'Ele revê o texto e a colocação das âncoras quanto à utilidade real, não apenas à presença.',
      },
      {
        title: 'Um cluster temático precisa de ligações mais fortes.',
        description: 'O Leo entrega à Zara uma revisão de relação para verificar face à cobertura do cluster.',
      },
      {
        title: 'Um percurso de conversão não é claro.',
        description: 'Ele assinala onde a página não tem um link de próximo passo claro para o leitor.',
      },
      {
        title: 'A página tem links que distraem.',
        description: 'O Leo põe em evidência os links que desviam a atenção do propósito da página.',
      },
      {
        title: 'Os conselhos sobre links precisam de contexto de origem.',
        description: 'Ele dá ao Felix um ponto de partida ao nível da página antes de uma revisão de percurso mais profunda.',
      },
    ],
    boundaryH2: 'O Leo revê os percursos. Os editores decidem que links mudam.',
    boundaryPara:
      'O Leo não adiciona links, não remove links, não reescreve âncoras nem publica alterações. Mostra o que precisa de revisão.',
    boundaryChecklist: [
      'O Leo revê os links visíveis na página, nunca os adiciona nem os remove.',
      'A sua revisão cobre o nível da página, não um estado confirmado de página órfã ou de rastreio à escala do site.',
      'As sugestões de âncoras e de percursos são para os editores aplicarem, não alterações automáticas.',
      'As páginas ligadas são registadas, não obtidas e revistas como se o Leo as tivesse lido.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever texto de âncora automaticamente' },
      { color: 'red', text: 'Adicionar ou remover links' },
      { color: 'red', text: 'Confirmar o estado de página órfã à escala do site sem dados do site' },
      { color: 'red', text: 'Ir buscar páginas ligadas como se tivessem sido revistas' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem o Leo trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrai os links e os sinais de página para o Leo rever.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como o Patrick inspeciona',
      },
      {
        id: 'topical_authority',
        description: 'Revê o apoio ao cluster temático.',
        outputLabel: 'Revisão de cobertura',
        ctaLabel: 'Como a Zara revê',
      },
      {
        id: 'internal_link_pathway',
        description: 'Revê os percursos de links internos com mais detalhe.',
        outputLabel: 'Revisão de percurso',
        ctaLabel: 'Como o Felix revê',
      },
    ],
    ctaH2: 'Ligue a página ao sistema de conteúdo mais amplo.',
    ctaPara:
      'O Leo ajuda os editores a ver se a página tem links úteis, âncoras claras e um percurso de leitor que vale a pena seguir.',
    guidanceFooterLabel: 'ESTADO DA RELAÇÃO',
    guidanceFooterValue: 'Precisa de revisão · lacunas de percurso encontradas',
  },

  review_queue: {
    seoTitle: 'Review Queue Worker | WordPresto',
    metaDescription:
      'O Riley converte as alterações propostas em itens de revisão estruturados, mostrando o que precisa de uma decisão humana, porque é que importa e que ação está disponível.',
    h1: 'Transforme alterações propostas em decisões que um editor consegue gerir.',
    heroPara1:
      'Uma revisão de conteúdo pode produzir dezenas de conclusões. Sem uma fila, essas conclusões tornam-se ruído: prioridade pouco clara, sem estado de decisão, sem responsável e sem caminho para a aprovação. O Riley converte as alterações propostas em itens de revisão estruturados. Cada item mostra o que precisa de uma decisão humana, porque é que importa e que ação está disponível.',
    heroPara2:
      'Para análise de conteúdo, revisão de alterações, fluxos de aprovação e qualquer página em que vários Workers tenham levantado problemas.',
    problemEyebrow: 'Onde os fluxos de revisão correm mal',
    problemH2: 'Conclusões não são o mesmo que decisões.',
    problemPara:
      'Uma auditoria de página pode produzir recomendações úteis, mas o editor continua a precisar de saber o que aprovar, rejeitar, adiar ou investigar. Sem essa camada, o fluxo de trabalho parece ativo mas não operacional. O Riley transforma conclusões numa fila que a equipa pode percorrer.',
    problemAnnotation: '↘ organize as decisões, não só as conclusões',
    beforeStamp: 'Pilha de conclusões',
    beforeHtml: `<p>Vários Workers levantaram problemas na página, mas não existe uma visão partilhada do que precisa de uma decisão, nem por que ordem.</p>`,
    beforeTags: ['Sem prioridade', 'Sem estado de decisão', 'Sem responsável', 'Ativa mas parada'],
    beforeNote: 'a revisão parece ativa mas não produz nada',
    afterStamp: 'Fila de revisão',
    afterHtml: `<p>O Riley organiza as conclusões em itens de decisão, cada um com justificação e as ações disponíveis para o editor.</p>`,
    afterTags: ['Itens priorizados', 'Decisões pendentes', 'Sem edições aplicadas', 'Pronto para ação do editor'],
    afterNote: 'a equipa consegue percorrê-la por ordem',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma camada de fila entre as conclusões dos Workers e a aprovação humana.',
    helpsPara:
      'O Riley não decide pelo editor. Organiza as conclusões em itens revisíveis, para que os editores possam tomar decisões sem perder o contexto.',
    checks: [
      'As alterações propostas pelos Workers de revisão',
      'O tipo de decisão necessário',
      'A prioridade e a área afetada',
      'Se é preciso mais evidência',
      'Se um item deve ser aprovado, rejeitado, adiado ou atribuído',
    ],
    improves: [
      'A clareza do fluxo de revisão',
      'O rendimento editorial',
      'O acompanhamento das decisões',
      'A prontidão para aprovação humana',
    ],
    prepares: [
      'Fila de revisão',
      'Itens de decisão pendentes',
      'Justificação dos itens',
      'Ações do editor disponíveis',
    ],
    surfaces: [
      'Itens que precisam de aprovação',
      'Itens que precisam de mais evidência',
      'Itens que devem ser adiados',
      'Itens com responsável ou prioridade pouco claros',
    ],
    ioH2: 'Com que material o Riley trabalha, e o que produz.',
    worksFrom: [
      'Planos de alteração segura',
      'Conclusões dos Workers',
      'Alterações propostas',
      'Sinais de evidência e de risco',
      'Contexto de revisão da página',
    ],
    produces: [
      'Fila de revisão',
      'Itens de decisão',
      'Etiquetas de prioridade',
      'Justificação da revisão',
      'Estados de ação pendente',
    ],
    scenarios: [
      {
        title: 'Uma página tem muitas recomendações.',
        description: 'O Riley organiza-as numa fila que o editor pode percorrer por ordem.',
      },
      {
        title: 'O editor precisa de opções de decisão.',
        description: 'Ele mostra que ação está disponível para cada item: aprovar, rejeitar, adiar ou atribuir.',
      },
      {
        title: 'Uma sessão de revisão está a ficar confusa.',
        description: 'O Riley traz de volta a estrutura, transformando conclusões soltas em itens acompanhados.',
      },
      {
        title: 'Vários Workers levantaram problemas relacionados.',
        description: 'Ele agrupa-os para que o editor veja o panorama completo, e não notas dispersas.',
      },
      {
        title: 'Uma página está a caminhar para a aprovação.',
        description: 'O Riley dá à Dana uma visão clara de que itens da fila ainda estão por resolver.',
      },
      {
        title: 'A equipa precisa de uma transferência limpa.',
        description: 'Ele mantém o estado da fila visível, para que nada se perca entre sessões.',
      },
    ],
    boundaryH2: 'O Riley organiza decisões. Não as toma.',
    boundaryPara:
      'O Riley não aprova alterações, não edita conteúdo, não aplica correções nem publica. Coordena a fila de revisão para que os humanos possam decidir.',
    boundaryChecklist: [
      'O Riley organiza as alterações propostas numa fila, nunca as aprova nem as rejeita.',
      'As etiquetas de prioridade são um ponto de partida para os editores, não uma classificação final.',
      'Os itens por resolver mantêm-se visíveis na fila, em vez de serem descartados em silêncio.',
      'As decisões finais e as alterações de conteúdo ficam com o editor e com o Worker relevante.',
    ],
    willNot: [
      { color: 'red', text: 'Aprovar ou rejeitar itens automaticamente' },
      { color: 'red', text: 'Aplicar alterações de conteúdo' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Esconder itens de revisão por resolver' },
      { color: 'red', text: 'Substituir a tomada de decisão humana' },
    ],
    relatedH2: 'Workers com quem o Riley trabalha.',
    relatedWorkerIds: [
      {
        id: 'safe_change_planner',
        description: 'Transforma conclusões em propostas de alteração que o Riley pode colocar na fila.',
        outputLabel: 'Plano de alterações',
        ctaLabel: 'Como o Sam planeia',
      },
      {
        id: 'review',
        description: 'Resume as conclusões e as ações de revisão para o editor.',
        outputLabel: 'Resumo da revisão',
        ctaLabel: 'Como a Helen revê',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Verifica se os itens da fila por resolver bloqueiam a aprovação.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como a Dana decide',
      },
    ],
    ctaH2: 'Torne o trabalho de revisão gerível.',
    ctaPara:
      'O Riley transforma as conclusões dos Workers em decisões estruturadas, para que os editores possam passar da análise à ação.',
    guidanceFooterLabel: 'ESTADO DA FILA',
    guidanceFooterValue: 'Pendente de revisão · decisões necessárias',
  },
};
