import type { WorkerProfileTranslatable } from './types';

export const ptBrBatch4: Record<string, WorkerProfileTranslatable> = {
  safe_change_planner: {
    seoTitle: 'Safe Change Planner | WordPresto',
    metaDescription:
      'Sam transforma achados dos Workers em mudanças propostas estruturadas, indicando a área afetada, o risco e o benefício esperado, sem editar a página nem aplicar nada.',
    h1: 'Transforme achados em mudanças que podem ser revisadas com segurança.',
    heroPara1:
      'Um achado ainda não é uma mudança. "A página precisa de uma estrutura mais clara" é útil, mas o editor ainda precisa saber o que pode mudar, onde, por quê, que risco está envolvido e se a mudança deve avançar. Sam transforma achados dos Workers em mudanças propostas estruturadas. Ele prepara a camada de revisão sem editar a página nem aplicar nada.',
    heroPara2:
      'Para análise de conteúdo, preparação da aprovação, filas de revisão e planejamento de edições seguras.',
    problemEyebrow: 'Onde o planejamento de mudanças dá errado',
    problemH2: 'Os times pulam do achado para a edição rápido demais.',
    problemPara:
      'Um Worker pode identificar um problema real, mas o próximo passo não deve ser a edição automática. A mudança proposta precisa de contexto: que área é afetada, por que a mudança importa, quão arriscada é e que benefício se espera. Sam cria essa camada de decisão.',
    problemAnnotation: '↘ planeje a mudança antes de editar',
    beforeStamp: 'Achado bruto',
    beforeHtml: `<p>A página precisa de uma introdução mais forte e de um próximo passo mais claro.</p>`,
    beforeTags: ['Sem área afetada', 'Sem etiqueta de risco', 'Sem prioridade', 'Sem status de aprovação'],
    beforeNote: 'o editor ainda precisa interpretar o achado',
    afterStamp: 'Mudança planejada',
    afterHtml: `<p>Revise a introdução para esclarecer a promessa da página e acrescente um próximo passo relevante depois da primeira seção.</p>`,
    afterTags: ['Área afetada', 'Benefício esperado', 'Risco anotado', 'Aprovação necessária'],
    afterNote: 'a mudança está pronta para revisão',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um plano estruturado antes de qualquer mudança de conteúdo.',
    helpsPara:
      'Sam relaciona achados a mudanças propostas. Ele não reescreve, não aplica nem publica. Ele prepara um plano revisável por humanos que pode seguir para a fila de Riley ou para um fluxo de aprovação posterior.',
    checks: [
      'Achados e recomendações dos Workers',
      'Área de conteúdo afetada',
      'Tipo de mudança',
      'Prioridade e benefício esperado',
      'Nível de risco',
      'Requisitos de evidência ou aprovação',
    ],
    improves: [
      'Segurança dos fluxos de trabalho de conteúdo',
      'Qualidade das decisões de revisão',
      'Clareza antes de as edições começarem',
      'Separação entre recomendação e ação',
    ],
    prepares: [
      'Plano de mudanças propostas',
      'Etiquetas de área afetada',
      'Notas de risco e benefício',
      'Itens de revisão prontos para aprovação',
    ],
    surfaces: [
      'Mudanças que precisam de aprovação',
      'Edições de alto risco',
      'Itens que precisam de mais evidência',
      'Recomendações que ainda não estão prontas para edição segura',
    ],
    ioH2: 'Do que Sam parte, e o que ele produz.',
    worksFrom: [
      'Achados dos Workers',
      'Revisão de evidência',
      'Resultados da análise de conteúdo',
      'Sinais de risco e afirmações',
      'Contexto da página',
    ],
    produces: [
      'Plano de mudanças',
      'Mudanças propostas',
      'Notas de área afetada',
      'Etiquetas de risco',
      'Benefício esperado',
    ],
    scenarios: [
      {
        title: 'Uma revisão produziu vários achados.',
        description: 'Sam transforma esses achados em mudanças propostas que o editor pode avaliar.',
      },
      {
        title: 'O time precisa evitar edições automáticas.',
        description: 'Ele cria uma camada de planejamento antes de qualquer conteúdo ser tocado.',
      },
      {
        title: 'Uma recomendação pode ser arriscada.',
        description: 'Sam sinaliza o risco e as necessidades de evidência antes de ela avançar.',
      },
      {
        title: 'Uma página está entrando na fila de revisão.',
        description: 'Ele prepara os itens estruturados que Riley pode organizar.',
      },
      {
        title: 'O editor precisa de prioridades mais claras.',
        description: 'Sam indica o que importa mais e por quê.',
      },
      {
        title: 'Uma mudança ainda não deve estar pronta para edição segura.',
        description: 'Ele mantém as mudanças propostas em estado só de revisão até serem aprovadas.',
      },
    ],
    boundaryH2: 'Sam planeja mudanças. Editores as aprovam ou rejeitam.',
    boundaryPara:
      'Sam não edita a página, não redige edições seguras, não aplica mudanças nem publica. Ele prepara mudanças propostas para decisão humana.',
    boundaryChecklist: [
      'Sam planeja mudanças, mas nunca as edita nem as aplica.',
      'As mudanças propostas ficam apenas em revisão até um editor aprová-las.',
      'As necessidades de risco e evidência são sinalizadas, nunca ignoradas ou presumidas seguras.',
      'Um achado nunca é tratado como já aprovado.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever conteúdo automaticamente' },
      { color: 'red', text: 'Aplicar as mudanças propostas' },
      { color: 'red', text: 'Tratar um achado como aprovado' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Pular verificações de evidência ou risco' },
    ],
    relatedH2: 'Workers com quem Sam trabalha.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: 'Transforma as mudanças propostas por Sam em uma fila de decisão.',
        outputLabel: 'Fila de revisão',
        ctaLabel: 'Como Riley organiza',
      },
      {
        id: 'review',
        description: 'Resume as ações de revisão para editores humanos.',
        outputLabel: 'Resumo da revisão',
        ctaLabel: 'Como Helen resume',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Verifica se as mudanças propostas bloqueiam a aprovação.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como Dana decide',
      },
    ],
    ctaH2: 'Planeje a mudança antes da edição.',
    ctaPara:
      'Sam transforma achados em mudanças propostas estruturadas, para que editores humanos possam aprovar, rejeitar ou adiar com contexto.',
    guidanceFooterLabel: 'STATUS DA MUDANÇA',
    guidanceFooterValue: 'Proposta · aguardando revisão',
  },

  review: {
    seoTitle: 'Review Worker | WordPresto',
    metaDescription:
      'Helen reúne achados e recomendações em um resumo de revisão estruturado para ação humana, tornando a revisão compreensível sem remover as nuances.',
    h1: 'Transforme achados complexos em uma revisão editorial clara.',
    heroPara1:
      'A revisão de uma página pode envolver problemas técnicos, lacunas de conteúdo, preocupações com evidências, notas de legibilidade, problemas de intenção e bloqueios de aprovação. Os editores precisam de um resumo claro, não de mais uma pilha de achados desconectados entre si. Helen reúne achados e recomendações em um resumo de revisão estruturado para ação humana. Ela torna a revisão compreensível sem remover as nuances.',
    heroPara2:
      'Para auditorias de página, análise de conteúdo, preparação da aprovação e handoff entre os achados dos Workers e as decisões do editor.',
    problemEyebrow: 'Onde os resumos de revisão falham',
    problemH2: 'Uma auditoria útil ainda assim falha se o editor não conseguir agir a partir dela.',
    problemPara:
      'Achados demais criam fadiga. Detalhe de menos esconde o risco. Um bom resumo de revisão precisa preservar os sinais importantes e, ao mesmo tempo, deixar clara a próxima ação. Helen dá aos editores a versão que eles realmente conseguem usar.',
    problemAnnotation: '↘ resuma sem achatar a evidência',
    beforeStamp: 'Revisão pouco clara',
    beforeHtml: `<p>Achados técnicos, de conteúdo e de evidência aparecem separadamente, sem uma ordem de ação clara.</p>`,
    beforeTags: ['Achados dispersos', 'Sem resumo', 'Prioridade pouco clara', 'Difícil de aprovar'],
    beforeNote: 'o editor precisa montar a história',
    afterStamp: 'Resumo editorial',
    afterHtml: `<p>Helen agrupa os achados, destaca os bloqueios e lista as ações de revisão em ordem.</p>`,
    afterTags: ['Resumo claro', 'Priorizado', 'Revisável', 'Conduzido por humanos'],
    afterNote: 'o editor sabe o que precisa de atenção',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma camada de revisão para a tomada de decisão humana.',
    helpsPara:
      'Helen lê os achados disponíveis e os transforma em um resumo calmo e estruturado. Ela não aprova, não edita, não aplica nem publica. Ela ajuda o editor a entender o que importa.',
    checks: [
      'Achados e recomendações dos Workers',
      'Itens de revisão manual',
      'Prioridade e gravidade',
      'Limitações de evidência',
      'Bloqueios de aprovação',
      'Ordem das ações',
    ],
    improves: [
      'Clareza editorial',
      'Velocidade da revisão humana',
      'Preparação da aprovação',
      'Compreensão entre times',
    ],
    prepares: [
      'Resumo de revisão',
      'Lista de ações priorizada',
      'Notas de revisão manual',
      'Resumo de bloqueios',
    ],
    surfaces: [
      'Problemas críticos em primeiro lugar',
      'Itens que precisam de julgamento manual',
      'Achados conflitantes ou incertos',
      'Recomendações que ainda não devem avançar',
    ],
    ioH2: 'Do que Helen parte, e o que ela produz.',
    worksFrom: [
      'Resultados dos Workers',
      'Itens da fila de revisão',
      'Mudanças propostas',
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
        title: 'A revisão de uma página tem achados demais.',
        description: 'Helen os transforma em um resumo claro.',
      },
      {
        title: 'Um editor precisa da próxima ação.',
        description: 'Ela destaca o que revisar primeiro.',
      },
      {
        title: 'É preciso fazer um handoff.',
        description: 'Helen torna os achados legíveis para alguém que não fez a análise.',
      },
      {
        title: 'A aprovação está se aproximando.',
        description: 'Ela traz à tona os bloqueios e os itens de revisão não resolvidos.',
      },
      {
        title: 'Os achados estão misturados entre times.',
        description: 'Helen agrupa problemas técnicos, de conteúdo, de evidência e de governança em uma única revisão.',
      },
      {
        title: 'O time precisa de uma visão editorial calma.',
        description: 'Ela reduz o ruído sem esconder preocupações importantes.',
      },
    ],
    boundaryH2: 'Helen resume. Editores decidem.',
    boundaryPara:
      'Helen não aprova conteúdo, não edita texto, não aplica mudanças nem publica. Ela prepara um resumo de revisão para que humanos possam tomar decisões melhores.',
    boundaryChecklist: [
      'Helen resume achados, mas nunca aprova nem edita o conteúdo.',
      'Os bloqueios são sempre trazidos à tona, nunca escondidos para fazer uma página parecer pronta.',
      'Os resumos preservam nuances importantes, em vez de achatá-las.',
      'A revisão jurídica, de compliance ou de acessibilidade especializada nunca é substituída.',
    ],
    willNot: [
      { color: 'red', text: 'Aprovar conteúdo automaticamente' },
      { color: 'red', text: 'Reescrever ou aplicar correções' },
      { color: 'red', text: 'Esconder bloqueios para fazer uma página parecer pronta' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Substituir a revisão jurídica, de compliance ou de acessibilidade especializada' },
    ],
    relatedH2: 'Workers com quem Helen trabalha.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: 'Organiza as mudanças propostas em itens de decisão.',
        outputLabel: 'Fila de revisão',
        ctaLabel: 'Como Riley organiza',
      },
      {
        id: 'safe_change_planner',
        description: 'Transforma achados em mudanças propostas.',
        outputLabel: 'Plano de mudanças',
        ctaLabel: 'Como Sam planeja',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Usa o status da revisão para avaliar a prontidão para aprovação.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como Dana avalia',
      },
    ],
    ctaH2: 'Dê aos editores a revisão sobre a qual eles podem agir.',
    ctaPara:
      'Helen transforma os achados dos Workers em um resumo editorial claro, para que revisores humanos possam decidir o que acontece a seguir.',
    guidanceFooterLabel: 'STATUS DA REVISÃO',
    guidanceFooterValue: 'Resumo pronto · ação do editor necessária',
  },

  editorial_approval_gate: {
    seoTitle: 'Editorial Approval Gate Worker | WordPresto',
    metaDescription:
      'Dana lê os resultados já produzidos pelos Workers e gera um portão de aprovação conservador, dizendo ao revisor humano se o conteúdo parece pronto para revisão, precisa de correção ou está bloqueado.',
    h1: 'Verifique se o trabalho está pronto para aprovação humana.',
    heroPara1:
      'Aprovação não deveria ser uma sensação. Antes de o conteúdo avançar, o editor precisa saber se as verificações principais estão limpas, se ainda restam bloqueios e se algo ainda precisa de correção, evidência ou revisão especializada. Dana lê os resultados já produzidos pelos Workers e gera um portão de aprovação conservador. Ela não aprova automaticamente. Ela diz ao revisor humano se o conteúdo parece pronto para revisão, precisa de correção ou está bloqueado.',
    heroPara2:
      'Para verificações editoriais finais, fluxos de aprovação, preparação do handoff para o CMS e governança de conteúdo.',
    problemEyebrow: 'Onde os fluxos de aprovação dão errado',
    problemH2: 'O conteúdo avança porque todo mundo presume que outra pessoa já verificou.',
    problemPara:
      'Uma página pode ter um bom texto e ainda assim conter lacunas de evidência não resolvidas, problemas de acessibilidade, problemas de metadados, preocupações de confiança, bloqueios no handoff para o CMS ou risco editorial. Se esses problemas estiverem espalhados pelos resultados dos Workers, é fácil deixá-los passar. Dana reúne o status final da revisão em um único portão.',
    problemAnnotation: '↘ verifique a prontidão antes da aprovação',
    beforeStamp: 'Aprovação frouxa',
    beforeHtml: `<p>O rascunho parece pronto, mas as verificações de evidência, metadados e acessibilidade ainda contêm itens não resolvidos.</p>`,
    beforeTags: ['Bloqueios não resolvidos', 'Sem portão final', 'Riscos espalhados', 'Aprovação pouco clara'],
    beforeNote: 'o editor precisa caçar os problemas',
    afterStamp: 'Portão revisado',
    afterHtml: `<p>Dana resume a prontidão, os bloqueios e as próximas ações antes de o editor humano aprovar.</p>`,
    afterTags: ['Portão conservador', 'Status claro', 'Bloqueios priorizados', 'Decisão humana'],
    afterNote: 'a aprovação fica mais segura',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um portão final conservador antes de o conteúdo avançar.',
    helpsPara:
      'Dana revisa os resultados já processados pelos Workers e determina se o conteúdo parece pronto para a revisão editorial humana. Ela não certifica compliance, não publica conteúdo nem aprova automaticamente.',
    checks: [
      'Status do relatório de aprovação',
      'Problemas de risco editorial e afirmações',
      'Lacunas de evidência',
      'Status de acessibilidade',
      'Prontidão dos metadados de SEO e do snippet de SERP',
      'Sinais de schema e de confiança',
      'Bloqueios do handoff para o CMS',
      'Qualidade do rascunho e status da revisão',
    ],
    improves: [
      'Confiança na aprovação',
      'Governança editorial',
      'Visibilidade dos bloqueios',
      'Prontidão antes do handoff ou do fluxo de publicação',
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
      'Evidência de revisão ausente',
      'Motivos pelos quais o conteúdo ainda não deve avançar',
    ],
    ioH2: 'Do que Dana parte, e o que ela produz.',
    worksFrom: [
      'Resumo de revisão',
      'Fila de revisão',
      'Revisão de lacunas de evidência',
      'Achados de risco editorial',
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
        description: 'Dana verifica se achados dos Workers ainda não resolvidos continuam bloqueando o avanço.',
      },
      {
        title: 'Vários Workers de revisão já rodaram.',
        description: 'Ela combina o status em um único portão de prontidão claro.',
      },
      {
        title: 'Um rascunho está caminhando para o handoff ao CMS.',
        description: 'Dana sinaliza bloqueios antes de o handoff criar risco operacional.',
      },
      {
        title: 'O editor precisa de um ponto de decisão conservador.',
        description: 'Ela só dá "aprovado para revisão" quando as verificações estão limpas o suficiente.',
      },
      {
        title: 'Governança importa.',
        description: 'Dana mantém visíveis os problemas de risco, evidência e acessibilidade antes da validação final.',
      },
      {
        title: 'Uma página ainda não deve avançar.',
        description: 'Ela explica por quê e lista as ações de prioridade mais alta.',
      },
    ],
    boundaryH2: 'Dana controla a prontidão no portão. Humanos aprovam.',
    boundaryPara:
      'Dana não aprova conteúdo automaticamente, não certifica compliance, não publica nem escreve em um CMS. O trabalho dela é tornar visível o status da aprovação para que um revisor humano possa decidir.',
    boundaryChecklist: [
      'Dana controla a prontidão no portão, mas nunca aprova o conteúdo.',
      'Compliance (jurídico, médico, financeiro, de acessibilidade) nunca é certificado por Dana.',
      'Os bloqueios são sempre trazidos à tona, nunca escondidos para fazer o conteúdo parecer pronto.',
      'A decisão do portão é conservadora: itens pouco claros ou não resolvidos são tratados, por padrão, como precisando de correção.',
    ],
    willNot: [
      { color: 'red', text: 'Aprovar conteúdo automaticamente' },
      { color: 'red', text: 'Certificar compliance jurídico, médico, financeiro ou de acessibilidade' },
      { color: 'red', text: 'Publicar ou fazer o handoff do conteúdo sozinha' },
      { color: 'red', text: 'Esconder bloqueios para fazer o conteúdo parecer pronto' },
      { color: 'red', text: 'Reescrever ou aplicar correções' },
    ],
    relatedH2: 'Workers com quem Dana trabalha.',
    relatedWorkerIds: [
      {
        id: 'review',
        description: 'Resume achados e ações de revisão antes do portão final.',
        outputLabel: 'Resumo da revisão',
        ctaLabel: 'Como Helen resume',
      },
      {
        id: 'safe_change_planner',
        description: 'Transforma achados em mudanças propostas que Dana pode avaliar quanto a bloqueios.',
        outputLabel: 'Plano de mudanças',
        ctaLabel: 'Como Sam planeja',
      },
      {
        id: 'review_queue',
        description: 'Organiza os itens não resolvidos que Dana pode tratar como bloqueios de aprovação.',
        outputLabel: 'Fila de revisão',
        ctaLabel: 'Como Riley organiza',
      },
    ],
    ctaH2: 'Torne a prontidão explícita antes da aprovação.',
    ctaPara:
      'Dana ajuda os editores a ver se o conteúdo está pronto para aprovação humana, precisa de correção ou deve ser bloqueado antes do handoff.',
    guidanceFooterLabel: 'STATUS DO PORTÃO',
    guidanceFooterValue: 'Precisa de correção · decisão do editor necessária',
  },

  site_discovery: {
    seoTitle: 'Site Discovery Worker | WordPresto',
    metaDescription:
      'Claire ajuda a identificar as páginas de um projeto de site, para que os editores vejam o que precisa de revisão, onde estão as oportunidades de conteúdo e como o site começa a se encaixar.',
    h1: 'Encontre as páginas antes de o trabalho começar.',
    heroPara1:
      'Um bom fluxo de trabalho de conteúdo começa sabendo o que já existe. Claire ajuda a identificar as páginas de um projeto de site, para que os editores vejam o que precisa de revisão, onde estão as oportunidades de conteúdo e como o site começa a se encaixar. Ela dá ao time uma visão organizada das páginas do site, sinais iniciais de conteúdo e notas de descoberta, para que o restante dos Workers do Word Presto possa partir de uma imagem de projeto mais clara.',
    heroPara2:
      'Para projetos de site, auditorias de conteúdo, planejamento de revisão de páginas, revisões de links internos e inteligência de projeto em estágio inicial.',
    problemEyebrow: 'Onde os projetos de site ficam bagunçados',
    problemH2: 'Você não consegue melhorar o conteúdo se não sabe com que páginas está lidando.',
    problemPara:
      'A maior parte do trabalho de conteúdo começa tarde demais no processo. Os times pulam para uma página, uma palavra-chave ou um rascunho antes de entender o site mais amplo. Páginas importantes passam despercebidas. Páginas fracas ficam escondidas. Oportunidades de link são ignoradas. O projeto começa com fragmentos em vez de um mapa. Claire dá ao fluxo de trabalho um ponto de partida mais claro.',
    problemAnnotation: '↘ descubra as páginas, depois decida o que precisa de trabalho',
    beforeStamp: 'Ponto de partida bagunçado',
    beforeHtml: `<p>O time tem uma homepage, algumas páginas de serviço e alguns posts de blog, mas nenhuma visão clara do que deve ser revisado primeiro.</p>`,
    beforeTags: ['Páginas espalhadas', 'Prioridade de revisão pouco clara', 'Visão fraca do site', 'Difícil de planejar'],
    beforeNote: 'o projeto começa a partir de fragmentos',
    afterStamp: 'Revisão de descoberta',
    afterHtml: `<p>Claire organiza as páginas conhecidas, destaca as verificações de acompanhamento e prepara o site para uma revisão mais profunda.</p>`,
    afterTags: ['Lista de páginas mais clara', 'Melhor fluxo de revisão', 'Sinais de conteúdo visíveis', 'Pronto para os Workers'],
    afterNote: 'o time sabe por onde começar',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma camada de descoberta para projetos de site.',
    helpsPara:
      'Claire ajuda o time a entender as páginas que compõem um projeto de site. Ela prepara a visão inicial para o inventário de conteúdo, a inspeção de páginas, a revisão de links e uma inteligência de projeto mais profunda.',
    checks: [
      'Páginas que devem fazer parte do projeto',
      'Seções do site e grupos de páginas',
      'Sinais iniciais de conteúdo e estrutura',
      'Páginas que podem precisar de revisão',
      'Oportunidades de relacionamento interno',
      'Verificações de acompanhamento para os editores',
    ],
    improves: [
      'Configuração do projeto',
      'Planejamento de auditorias de conteúdo',
      'Priorização da revisão de páginas',
      'Visibilidade de links internos e da estrutura do site',
    ],
    prepares: [
      'Revisão de descoberta do site',
      'Lista de páginas para inspeção',
      'Notas iniciais de estrutura do site',
      'Sugestões de revisão de acompanhamento',
    ],
    surfaces: [
      'Páginas que valem a pena inspecionar',
      'Seções que podem estar rasas ou pouco claras',
      'Áreas em que a estrutura do site precisa de atenção',
      'Páginas que podem precisar de links internos mais fortes',
    ],
    ioH2: 'Do que Claire parte, e o que ela produz.',
    worksFrom: [
      'Projeto de site',
      'Páginas conhecidas do site',
      'Seções do site',
      'Relacionamentos entre páginas',
      'Contexto de configuração do projeto',
    ],
    produces: [
      'Revisão de descoberta do site',
      'Páginas para revisão',
      'Notas de seções do site',
      'Sugestões de relacionamento interno',
      'Verificações de acompanhamento',
    ],
    scenarios: [
      {
        title: 'Um novo projeto de site está começando.',
        description: 'Claire ajuda a definir quais páginas devem fazer parte da primeira revisão.',
      },
      {
        title: 'Uma auditoria de site precisa de estrutura.',
        description: 'Ela dá aos editores uma visão mais clara das páginas e seções com que estão trabalhando.',
      },
      {
        title: 'Um inventário de conteúdo precisa de um ponto de partida.',
        description: 'Claire prepara o contexto de descoberta de páginas antes de Nora classificar os ativos.',
      },
      {
        title: 'O trabalho de links internos precisa de uma visão do site.',
        description: 'Ela traz à tona os relacionamentos entre páginas e as áreas que podem precisar de revisão de links.',
      },
      {
        title: 'O time não sabe por onde começar.',
        description: 'Claire ajuda a transformar um site em um projeto revisável.',
      },
      {
        title: 'Um projeto precisa de inteligência mais profunda.',
        description: 'Ela dá aos outros Workers um mapa de partida mais limpo antes de a análise continuar.',
      },
    ],
    boundaryH2: 'Claire descobre páginas. Editores decidem o que importa.',
    boundaryPara:
      'Claire ajuda a organizar o site para revisão. Ela não decide estratégia, não exclui páginas, não reescreve texto nem publica. Os editores escolhem quais páginas inspecionar, priorizar e melhorar.',
    boundaryChecklist: [
      'Claire organiza as páginas para revisão, mas nunca as edita nem as exclui.',
      'As páginas descobertas são uma lista de partida para os editores, não uma ordem de prioridade automática.',
      'As notas de estrutura do site apoiam o planejamento, mas não substituem o julgamento humano sobre estratégia.',
      'As verificações de acompanhamento são listadas com clareza, para que os editores saibam o que ainda precisa de confirmação.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever ou editar conteúdo' },
      { color: 'red', text: 'Excluir, mesclar ou redirecionar páginas' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Tratar toda página descoberta como automaticamente importante' },
      { color: 'red', text: 'Substituir a revisão humana das prioridades do site' },
    ],
    relatedH2: 'Workers com quem Claire trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Inspeciona páginas individuais depois de selecionadas para revisão.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como Patrick inspeciona',
      },
      {
        id: 'content_inventory',
        description: 'Classifica as páginas como ativos de conteúdo e registra sinais de planejamento.',
        outputLabel: 'Revisão de inventário',
        ctaLabel: 'Como Nora classifica',
      },
      {
        id: 'internal_linking',
        description: 'Revisa como as páginas selecionadas se conectam a conteúdo relacionado.',
        outputLabel: 'Avaliação de links',
        ctaLabel: 'Como Leo revisa',
      },
    ],
    ctaH2: 'Dê a cada projeto de site um ponto de partida mais claro.',
    ctaPara:
      'Claire ajuda o Word Presto a passar de páginas espalhadas para um fluxo de revisão organizado, para que os editores saibam o que existe e por onde o trabalho deve começar.',
    guidanceFooterLabel: 'STATUS DA DESCOBERTA',
    guidanceFooterValue: 'Páginas prontas para revisão',
  },

  page_inspector: {
    seoTitle: 'Page Inspector Worker | WordPresto',
    metaDescription:
      'Patrick inspeciona a página e extrai os sinais de origem dos quais o restante do fluxo de trabalho depende: título, meta description, títulos, links, imagens, schema, contagem de palavras e estrutura visível da página.',
    h1: 'Comece pelo que a página realmente diz.',
    heroPara1:
      'Antes de o Word Presto recomendar mudanças, a página precisa ser lida com cuidado. Patrick inspeciona a página e extrai os sinais de origem dos quais o restante do fluxo de trabalho depende: título, meta description, títulos, links, imagens, schema, contagem de palavras e estrutura visível da página. Ele dá ao time uma imagem precisa e atual da página como ela realmente existe, não como alguém presume que seja.',
    heroPara2:
      'Para revisão de páginas, auditorias de conteúdo, verificações técnicas, briefing e qualquer etapa do fluxo de trabalho que precise partir de fatos confirmados da página, e não de suposições.',
    problemEyebrow: 'Onde a revisão de páginas dá errado',
    problemH2: 'Você não pode revisar uma página que não inspecionou de fato.',
    problemPara:
      'Os times costumam trabalhar de memória, a partir de uma captura de tela antiga ou do que uma página deveria conter, em vez do que ela realmente contém. Títulos são reescritos sem checar o que está no ar. Títulos de seção são presumidos em vez de confirmados. A falta de schema passa despercebida. A revisão começa a partir de suposições, em vez de partir da própria página. Patrick inspeciona primeiro, para que o restante do fluxo de trabalho comece a partir do que realmente está lá.',
    problemAnnotation: '↘ inspecione primeiro, recomende depois',
    beforeStamp: 'Suposição',
    beforeHtml: `<p>O time presume que a página ainda tem o título antigo, um H1 claro e links internos funcionando, sem checar a página no ar.</p>`,
    beforeTags: ['Título presumido', 'Títulos não confirmados', 'Schema desconhecido', 'Sem verificação de origem'],
    beforeNote: 'a revisão começa a partir de uma suposição',
    afterStamp: 'Página inspecionada',
    afterHtml: `<p>Patrick confirma o título, a meta description, os títulos, os links, as imagens, o schema e a contagem de palavras que estão no ar.</p>`,
    afterTags: ['Sinais de origem confirmados', 'Estrutura mapeada', 'Schema verificado', 'Pronta para revisão'],
    afterNote: 'a revisão começa a partir de fatos',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma camada de origem para a revisão em nível de página.',
    helpsPara:
      'Patrick lê a página no ar e extrai seus sinais de origem, dando aos outros Workers e editores um ponto de partida confirmado, em vez de presumido.',
    checks: [
      'Título da página e meta description',
      'Estrutura e hierarquia dos títulos de seção',
      'Estrutura e seções visíveis da página',
      'Links internos e de saída',
      'Presença de imagens e texto alternativo',
      'Presença de marcação de schema',
      'Contagem de palavras',
    ],
    improves: [
      'Precisão da revisão de páginas',
      'Pontos de partida de briefing e auditoria',
      'Confiança nas verificações técnicas',
      'Qualidade do handoff para outros Workers',
    ],
    prepares: [
      'Resumo de sinais de página',
      'Fatos de origem confirmados',
      'Notas de estrutura para revisão',
      'Sinalizações de elementos ausentes',
    ],
    surfaces: [
      'Títulos ou descriptions que podem precisar de atenção',
      'Problemas na estrutura de títulos de seção',
      'Schema ausente ou raso',
      'Páginas com contagem de palavras incomumente baixa',
    ],
    ioH2: 'Do que Patrick parte, e o que ele produz.',
    worksFrom: [
      'URL da página no ar',
      'Projeto de site',
      'Resultados da descoberta do site',
      'Metadados existentes da página',
    ],
    produces: [
      'Resumo de sinais de página',
      'Título e meta description confirmados',
      'Notas de títulos de seção e estrutura',
      'Inventário de links e imagens',
      'Verificação da presença de schema',
    ],
    scenarios: [
      {
        title: 'Uma página é selecionada para revisão.',
        description: 'Patrick confirma exatamente o que a página no ar contém antes de a revisão começar.',
      },
      {
        title: 'Um título ou meta description precisa de checagem.',
        description: 'Ele reporta os valores atuais no ar, em vez do que o time presume que sejam.',
      },
      {
        title: 'É preciso fazer uma checagem técnica.',
        description: 'Patrick traz à tona sinais de schema, títulos de seção e estrutura para Maya avaliar mais a fundo.',
      },
      {
        title: 'Um briefing de conteúdo precisa de fatos de origem.',
        description: 'Ele dá ao autor do briefing uma imagem confirmada da página como ela está hoje.',
      },
      {
        title: 'Uma auditoria cobre muitas páginas.',
        description: 'Patrick inspeciona cada página para que a auditoria seja construída sobre informação atual, e não presumida.',
      },
      {
        title: 'A seguir vem a revisão de intenção de busca ou de evidência.',
        description: 'Ele entrega a Yuna e Kenji uma página de origem confirmada para trabalhar.',
      },
    ],
    boundaryH2: 'Patrick reporta o que a página diz. Editores decidem o que fazer com isso.',
    boundaryPara:
      'Patrick inspeciona e reporta sinais de origem. Ele não reescreve a página, não julga qualidade, não atribui prioridade nem publica. Editores e outros Workers usam os achados dele para decidir o que acontece a seguir.',
    boundaryChecklist: [
      'Patrick reporta a página como ela existe, mas nunca a edita nem a reescreve.',
      'Os achados dele são fatos de origem, não julgamentos de qualidade nem decisões de prioridade.',
      'Os elementos ausentes são sinalizados com clareza, nunca presumidos como corretos em silêncio.',
      'O julgamento técnico ou editorial mais profundo fica com o Worker ou o editor relevante.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever ou editar o conteúdo da página' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Julgar a qualidade do conteúdo ou atribuir prioridade' },
      { color: 'red', text: 'Presumir fatos da página sem checar a página no ar' },
      { color: 'red', text: 'Substituir a revisão humana do que os achados significam' },
    ],
    relatedH2: 'Workers com quem Patrick trabalha.',
    relatedWorkerIds: [
      {
        id: 'technical_health',
        description: 'Pega os sinais de página confirmados e revisa o panorama técnico mais amplo.',
        outputLabel: 'Achados técnicos',
        ctaLabel: 'Como Maya revisa',
      },
      {
        id: 'intent_analyst',
        description: 'Usa a página inspecionada para avaliar o quanto ela corresponde à intenção de busca.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como Yuna avalia',
      },
      {
        id: 'evidence',
        description: 'Verifica as afirmações da página inspecionada em relação à evidência disponível.',
        outputLabel: 'Pacote de evidências',
        ctaLabel: 'Como Kenji revisa',
      },
    ],
    ctaH2: 'Comece toda revisão de página a partir de fatos confirmados.',
    ctaPara:
      'Patrick dá ao Word Presto uma leitura precisa da própria página, para que o restante do fluxo de trabalho se construa sobre o que realmente está lá.',
    guidanceFooterLabel: 'STATUS DA INSPEÇÃO',
    guidanceFooterValue: 'Sinais de página prontos para revisão',
  },

  accessibility: {
    seoTitle: 'Accessibility Worker | WordPresto',
    metaDescription:
      'Mara revisa os sinais de acessibilidade disponíveis na evidência da página, sinalizando estrutura de títulos fraca, alternativas de imagem ausentes, texto de link pouco claro, riscos de legibilidade e verificações que precisam de confirmação humana.',
    h1: 'Traga os problemas de acessibilidade para o fluxo de revisão.',
    heroPara1:
      'Acessibilidade determina se as pessoas conseguem ler, navegar, entender e usar uma página. Ela deveria ser visível antes de o conteúdo chegar à aprovação. Mara revisa os sinais de acessibilidade disponíveis na evidência da página. Ela sinaliza problemas como estrutura de títulos fraca, alternativas de imagem ausentes, texto de link pouco claro, riscos de legibilidade e verificações manuais que precisam de confirmação humana.',
    heroPara2:
      'Para revisões de página, auditorias técnicas, verificações de qualidade de conteúdo e revisão final antes da aprovação.',
    problemEyebrow: 'Onde a revisão de acessibilidade dá errado',
    problemH2: 'Os times costumam verificar a acessibilidade tarde demais.',
    problemPara:
      'Se a lógica dos títulos é confusa, o texto dos links é vago ou as imagens não têm alternativas úteis, o problema deveria ser visível durante a revisão, não depois do lançamento. Mara traz esses sinais para o fluxo de trabalho editorial logo no início.',
    problemAnnotation: '↘ traga isso à tona durante a revisão, não depois do lançamento',
    beforeStamp: 'Verificado tarde demais',
    beforeHtml: `<p>Uma página é lançada com uma ordem de títulos confusa, texto de links vago e alternativas de imagem ausentes, e nada disso é percebido até depois do lançamento.</p>`,
    beforeTags: ['Ordem de títulos pouco clara', 'Texto de links vago', 'Texto alternativo ausente', 'Descoberto depois do lançamento'],
    beforeNote: 'o problema só aparece quando já está no ar',
    afterStamp: 'Revisão de acessibilidade',
    afterHtml: `<p>Mara sinaliza os problemas de títulos, texto de links, imagens e legibilidade antes de a página chegar à aprovação.</p>`,
    afterTags: ['Problemas sinalizados cedo', 'Verificações manuais listadas', 'Orientação de correção pronta', 'Revisado antes da aprovação'],
    afterNote: 'o problema fica visível antes do lançamento',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de acessibilidade sem certificação falsa.',
    helpsPara:
      'Mara transforma os sinais de página disponíveis em achados de acessibilidade revisáveis. Ela não afirma compliance nem substitui os testes manuais.',
    checks: [
      'Estrutura de títulos',
      'Presença de texto alternativo nas imagens',
      'Clareza do texto dos links',
      'Sinais de legibilidade',
      'Verificações manuais de acessibilidade necessárias',
      'Riscos de acessibilidade visíveis na evidência da página',
    ],
    improves: [
      'Visibilidade antecipada dos problemas de acessibilidade',
      'Qualidade do handoff editorial',
      'Revisão comum de acessibilidade em nível de página',
      'Prontidão antes da aprovação',
    ],
    prepares: [
      'Achados de acessibilidade',
      'Checklist de verificação manual',
      'Notas de gravidade dos problemas',
      'Orientação de correção para revisão humana',
    ],
    surfaces: [
      'Alternativas de imagem ausentes ou fracas',
      'Texto de links vago',
      'Preocupações com a estrutura de títulos',
      'Verificações que precisam de auditoria humana ou especializada',
    ],
    ioH2: 'Do que Mara parte, e o que ela produz.',
    worksFrom: [
      'Estrutura da página',
      'Sinais de imagens',
      'Texto de links e âncoras',
      'Sinais de legibilidade',
      'Achados da revisão técnica',
    ],
    produces: [
      'Revisão de acessibilidade',
      'Problemas detectados',
      'Verificações manuais',
      'Orientação de correção',
      'Status da revisão',
    ],
    scenarios: [
      {
        title: 'Uma página está sendo revisada antes da aprovação.',
        description: 'Mara acrescenta uma passagem de acessibilidade à revisão antes de a página avançar.',
      },
      {
        title: 'A revisão técnica encontrou problemas estruturais.',
        description: 'Ela verifica se esses problemas também afetam a lógica de títulos ou a navegação.',
      },
      {
        title: 'Uma página contém muitas imagens.',
        description: 'Mara sinaliza imagens sem alternativas úteis para os editores resolverem.',
      },
      {
        title: 'Os links são vagos ou repetitivos.',
        description: 'Ela traz à tona o texto de links que precisa ser mais claro para os leitores e para as tecnologias assistivas.',
      },
      {
        title: 'A estrutura de títulos parece bagunçada.',
        description: 'Mara revisa a ordem dos títulos e sinaliza onde pode confundir leitores ou leitores de tela.',
      },
      {
        title: 'O time precisa de notas honestas de acessibilidade.',
        description: 'Ela reporta o que a evidência sustenta e lista o que ainda precisa de uma verificação manual.',
      },
    ],
    boundaryH2: 'Mara sinaliza problemas de acessibilidade. Ela não certifica compliance.',
    boundaryPara:
      'Mara oferece uma passagem de acessibilidade apenas de revisão, com base na evidência de página disponível. Ela não substitui os testes manuais, os testes com leitores de tela, a revisão jurídica nem uma auditoria formal WCAG.',
    boundaryChecklist: [
      'Mara sinaliza os problemas visíveis na evidência da página, mas nunca edita títulos, links ou texto alternativo.',
      'Os achados dela são um ponto de partida para revisão, não uma certificação de compliance.',
      'As verificações que ela não consegue confirmar a partir da evidência disponível são listadas como verificações manuais, nunca ignoradas em silêncio.',
      'As auditorias formais de acessibilidade e as decisões de compliance jurídico ficam com um revisor humano qualificado.',
    ],
    willNot: [
      { color: 'red', text: 'Certificar compliance de acessibilidade' },
      { color: 'red', text: 'Fazer testes manuais completos de tecnologia assistiva' },
      { color: 'red', text: 'Editar títulos, links ou texto alternativo automaticamente' },
      { color: 'red', text: 'Publicar correções de acessibilidade' },
      { color: 'red', text: 'Inventar problemas não sustentados pela evidência da página' },
    ],
    relatedH2: 'Workers com quem Mara trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrai a estrutura da página, os links e os sinais de imagem que Mara revisa.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como Patrick inspeciona',
      },
      {
        id: 'technical_health',
        description: 'Verifica o SEO técnico e os sinais relacionados à saúde da página.',
        outputLabel: 'Achados técnicos',
        ctaLabel: 'Como Maya revisa',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Usa o status de acessibilidade como parte da revisão de prontidão.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como Dana decide',
      },
    ],
    ctaH2: 'Torne a acessibilidade visível antes da aprovação.',
    ctaPara:
      'Mara ajuda os editores a ver os problemas de acessibilidade cedo, com clareza e honestidade, antes de o conteúdo avançar.',
    guidanceFooterLabel: 'STATUS DA ACESSIBILIDADE',
    guidanceFooterValue: 'Precisa de revisão · verificações prontas',
  },

  intent_analyst: {
    seoTitle: 'Intent Analyst Worker | WordPresto',
    metaDescription:
      'Yuna revisa se o conteúdo, a estrutura, os metadados e o próximo passo de uma página estão alinhados com a provável intenção de busca ou do leitor.',
    h1: 'Verifique se a página corresponde ao que o leitor veio procurar.',
    heroPara1:
      'Uma página pode estar bem escrita e ainda assim não atender à intenção. Ela pode responder à pergunta errada, prometer mais do que entrega, ou misturar várias necessidades do leitor em uma única página confusa. Yuna revisa se o conteúdo, a estrutura, os metadados e o próximo passo estão alinhados com a provável intenção de busca ou do leitor.',
    heroPara2:
      'Para revisões de página, briefings de conteúdo, auditorias de SEO, reescritas de página e planejamento editorial guiado pela busca.',
    problemEyebrow: 'Onde a estratégia de conteúdo dá errado',
    problemH2: 'A página responde a alguma coisa, mas nem sempre à coisa que importa.',
    problemPara:
      'A intenção de busca é o motivo por trás da visita. Um leitor pode querer uma definição, uma comparação, provas, um guia, pistas de preço, segurança ou uma forma clara de agir. Yuna verifica se a página está atendendo a esse motivo.',
    problemAnnotation: '↘ verifique o motivo antes da reescrita',
    beforeStamp: 'Intenção pouco clara',
    beforeHtml: `<p>A página tem uma boa leitura, mas mistura várias necessidades do leitor em uma única seção, então não fica claro a qual pergunta ela realmente responde.</p>`,
    beforeTags: ['Necessidades do leitor misturadas', 'Metadados prometem demais', 'Sem próximo passo claro', 'Intenção não confirmada'],
    beforeNote: 'a página é otimizada antes de a intenção estar clara',
    afterStamp: 'Avaliação de intenção',
    afterHtml: `<p>Yuna confirma a intenção provável, sinaliza as lacunas entre a promessa e a entrega, e recomenda um ângulo de página mais claro.</p>`,
    afterTags: ['Intenção confirmada', 'Lacunas do leitor listadas', 'Ângulo recomendado', 'Pronta para reescrita'],
    afterNote: 'a reescrita mira o motivo certo',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de intenção antes da otimização.',
    helpsPara:
      'Yuna compara o que a página parece prometer com o que ela realmente entrega. Ela ajuda o editor a ver se a função da página está clara o suficiente antes de reescrever, expandir ou aprová-la.',
    checks: [
      'Provável intenção do leitor ou de busca',
      'Promessa dos metadados em relação ao que a página entrega',
      'Perguntas do leitor não respondidas',
      'Adequação do formato da página',
      'Ordem das seções',
      'Alinhamento do próximo passo',
    ],
    improves: [
      'Adequação à intenção de busca',
      'Qualidade do briefing',
      'Clareza do propósito da página',
      'Direção da reescrita',
    ],
    prepares: [
      'Avaliação de intenção',
      'Lacunas nas necessidades do leitor',
      'Ângulo de página recomendado',
      'Próximas ações alinhadas com a busca',
    ],
    surfaces: [
      'Descompasso de intenção',
      'Objetivos de página misturados ou concorrentes',
      'Informação de decisão ausente',
      'Seções que distraem do propósito da página',
    ],
    ioH2: 'Do que Yuna parte, e o que ela produz.',
    worksFrom: [
      'Título da página e metadados',
      'Texto da página',
      'Estrutura da página',
      'Sinais de origem',
      'Contexto de tópico ou palavra-chave, quando disponível',
    ],
    produces: [
      'Avaliação de intenção',
      'Lacunas nas necessidades do leitor',
      'Notas sobre a promessa de busca',
      'Função de página recomendada',
      'Próximas ações alinhadas com a intenção',
    ],
    scenarios: [
      {
        title: 'Uma página tem bom ranqueamento, mas não converte.',
        description: 'Yuna verifica se a página está de fato atendendo à intenção para a qual ranqueia.',
      },
      {
        title: 'Um rascunho parece sem foco.',
        description: 'Ela identifica em torno de qual necessidade do leitor o rascunho deve ser construído.',
      },
      {
        title: 'Os metadados prometem algo que a página não entrega.',
        description: 'Yuna sinaliza a lacuna entre a promessa de busca e o conteúdo real.',
      },
      {
        title: 'Um briefing de conteúdo precisa de uma necessidade do leitor clara.',
        description: 'Ela dá ao autor do briefing uma intenção confirmada para planejar em torno dela.',
      },
      {
        title: 'É preciso tomar uma decisão de formato de página.',
        description: 'Yuna entrega a Ivan uma avaliação de intenção para verificar o formato.',
      },
      {
        title: 'As recomendações de SEO estão puxando em direções diferentes.',
        description: 'Ela ancora a revisão no que o leitor realmente veio procurar.',
      },
    ],
    boundaryH2: 'Yuna esclarece a intenção. Editores decidem a estratégia.',
    boundaryPara:
      'Yuna não reescreve a página, não escolhe a estratégia de negócio nem garante melhoria de ranqueamento. Ela dá aos editores uma avaliação de intenção revisável.',
    boundaryChecklist: [
      'Yuna avalia a intenção a partir da página e do contexto dela, mas nunca reescreve o conteúdo.',
      'A avaliação dela é um ponto de partida para o planejamento, não uma decisão de estratégia.',
      'Os ângulos de página recomendados são sugestões para os editores, não mudanças automáticas.',
      'Resultados de ranqueamento nunca são prometidos nem sugeridos pelos achados dela.',
    ],
    willNot: [
      { color: 'red', text: 'Buscar ou fabricar dados de SERP ao vivo' },
      { color: 'red', text: 'Reescrever conteúdo automaticamente' },
      { color: 'red', text: 'Garantir melhoria de ranqueamento' },
      { color: 'red', text: 'Escolher estratégia sem revisão humana' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem Yuna trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrai os sinais de origem que Yuna revisa.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como Patrick inspeciona',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Verifica se o formato da página corresponde à forma esperada na busca.',
        outputLabel: 'Revisão de formato',
        ctaLabel: 'Como Ivan verifica',
      },
      {
        id: 'conversion_alignment',
        description: 'Verifica se o próximo passo combina com a intenção do leitor.',
        outputLabel: 'Revisão de conversão',
        ctaLabel: 'Como Diane verifica',
      },
    ],
    ctaH2: 'Combine a página com o motivo do leitor.',
    ctaPara:
      'Yuna ajuda a garantir que o trabalho de otimização mire a intenção certa antes de o time reescrever ou aprovar qualquer coisa.',
    guidanceFooterLabel: 'STATUS DA INTENÇÃO',
    guidanceFooterValue: 'Precisa de revisão · lacunas encontradas',
  },

  evidence: {
    seoTitle: 'Evidence Worker | WordPresto',
    metaDescription:
      'Kenji revisa a evidência por trás dos achados e recomendações, verificando a força do suporte, afirmações sem sustentação, proveniência e limitações antes da aprovação.',
    h1: 'Saiba quais recomendações estão realmente sustentadas.',
    heroPara1:
      'Fluxos de trabalho de conteúdo produzem muitos conselhos. Alguns são bem fundamentados. Outros são fracos. Alguns dependem de dados ausentes, recuperação parcial ou suposições que precisam de verificação manual. Kenji revisa a evidência por trás dos achados. Ele verifica a força do suporte, as recomendações sem sustentação, a proveniência e as limitações.',
    heroPara2:
      'Para auditorias de conteúdo, fluxos de aprovação, revisão de lacunas de evidência, verificações de risco e qualquer recomendação que precise ser defensável.',
    problemEyebrow: 'Onde as recomendações dão errado',
    problemH2: 'Um conselho só é útil se você sabe o que o sustenta.',
    problemPara:
      'Uma recomendação pode soar confiante enquanto se apoia em evidência frágil. Ela pode ir além do que sinais de página limitados sustentam, depender de recuperação ausente, ou sugerir uma certeza que o fluxo de trabalho não tem. Kenji protege os editores da falsa confiança.',
    problemAnnotation: '↘ separe o que é provado do que é presumido',
    beforeStamp: 'Confiança falsa',
    beforeHtml: `<p>Uma recomendação parece um fato consolidado, mas na verdade se apoia em um único sinal parcial, sem nenhuma recuperação que a sustente.</p>`,
    beforeTags: ['Suporte pouco claro', 'Proveniência ausente', 'Confiança exagerada', 'Não verificado'],
    beforeNote: 'o conselho parece certo, mas não é',
    afterStamp: 'Pacote de evidências',
    afterHtml: `<p>Kenji separa os achados sustentados dos fracos e lista exatamente o que ainda precisa de verificação manual.</p>`,
    afterTags: ['Força do suporte mostrada', 'Achados fracos sinalizados', 'Proveniência anotada', 'Pronto para aprovação'],
    afterNote: 'a confiança corresponde à evidência',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de evidência antes da aprovação.',
    helpsPara:
      'Kenji revisa se os achados são sustentados por material de origem disponível, sinais de página, padrões ou contexto recuperado. Ele não inventa provas ausentes.',
    checks: [
      'Força do suporte por trás dos achados',
      'Recomendações sem sustentação',
      'Limitações de evidência',
      'Proveniência de recuperação, quando existe',
      'Afirmações que precisam de verificação manual',
      'Áreas em que faltam dados',
    ],
    improves: [
      'Confiabilidade dos resultados de revisão',
      'Confiança editorial',
      'Separação entre evidência, inferência e especulação',
    ],
    prepares: [
      'Revisão de confiabilidade da evidência',
      'Lista de achados sem sustentação',
      'Notas de proveniência',
      'Sugestões de verificação manual',
    ],
    surfaces: [
      'Afirmações que precisam de suporte mais forte',
      'Recomendações baseadas em evidência parcial',
      'Material de origem ausente',
      'Limitações que deveriam ser visíveis antes da aprovação',
    ],
    ioH2: 'Do que Kenji parte, e o que ele produz.',
    worksFrom: [
      'Sinais de página',
      'Achados dos Workers',
      'Proveniência de recuperação disponível',
      'Atribuição a padrões',
      'Sinais de lacunas de evidência e de risco',
    ],
    produces: [
      'Pacote de evidências',
      'Revisão da força do suporte',
      'Lista de achados sem sustentação',
      'Resumo de limitações',
      'Notas de verificação manual',
    ],
    scenarios: [
      {
        title: 'Uma recomendação precisa ser defensável.',
        description: 'Kenji verifica o que realmente a sustenta antes de ela chegar à aprovação.',
      },
      {
        title: 'Uma página faz afirmações.',
        description: 'Ele revisa se essas afirmações têm suporte adequado por trás.',
      },
      {
        title: 'Um fluxo de trabalho usa contexto recuperado.',
        description: 'Kenji verifica a proveniência desse contexto antes de ele ser usado como base.',
      },
      {
        title: 'Uma aprovação de conteúdo está se aproximando.',
        description: 'Ele dá a Dana um pacote de evidências para considerar como parte da revisão de prontidão.',
      },
      {
        title: 'Workers discordam ou produzem achados incertos.',
        description: 'Kenji revisa o suporte por trás de cada achado para ajudar os editores a julgar em qual confiar.',
      },
      {
        title: 'O tema é sensível ou de alto risco.',
        description: 'Ele trabalha junto com Vera para sinalizar onde a evidência e o risco de compliance se sobrepõem.',
      },
    ],
    boundaryH2: 'Kenji revisa a evidência. Editores decidem o que fazer.',
    boundaryPara:
      'Kenji não certifica verdade, compliance ou impacto no ranqueamento. Se a evidência está ausente, ele diz que está ausente.',
    boundaryChecklist: [
      'Kenji revisa o suporte por trás dos achados, mas nunca edita nem aprova o conteúdo.',
      'A evidência ausente ou fraca é reportada com clareza, nunca promovida a certeza em silêncio.',
      'A revisão dele é um insumo para a decisão de aprovação, não a decisão em si.',
      'Afirmações que vão além do que a evidência disponível sustenta são sinalizadas para verificação manual.',
    ],
    willNot: [
      { color: 'red', text: 'Inventar citações, fatos ou provas' },
      { color: 'red', text: 'Tratar evidência fraca como certeza' },
      { color: 'red', text: 'Buscar fontes sem relação e tratá-las como evidência confirmada' },
      { color: 'red', text: 'Aprovar afirmações automaticamente' },
      { color: 'red', text: 'Publicar ou editar conteúdo' },
    ],
    relatedH2: 'Workers com quem Kenji trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Fornece os fatos de origem para a revisão de evidência.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como Patrick inspeciona',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Usa a evidência e o contexto das afirmações para sinalizar risco.',
        outputLabel: 'Relatório de risco e compliance',
        ctaLabel: 'Como Vera sinaliza riscos',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Usa o status da evidência como parte da revisão final de prontidão.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como Dana decide',
      },
    ],
    ctaH2: 'Torne as recomendações defensáveis.',
    ctaPara:
      'Kenji ajuda os editores a ver quais achados são bem fundamentados, quais são fracos e quais precisam de mais evidência antes da aprovação.',
    guidanceFooterLabel: 'STATUS DA EVIDÊNCIA',
    guidanceFooterValue: 'Limitações sinalizadas · revisão necessária',
  },

  internal_linking: {
    seoTitle: 'Content Relationship Worker | WordPresto',
    metaDescription:
      'Leo revisa como uma página se conecta a outros conteúdos: links internos, links externos, qualidade das âncoras, percursos do leitor e se a página parece isolada ou mal conectada.',
    h1: 'Verifique se a página se conecta ao restante do site.',
    heroPara1:
      'Uma página raramente funciona sozinha. Ela precisa de páginas relacionadas, recursos de apoio, próximos passos claros e links internos úteis. Leo revisa como a página se conecta a outros conteúdos. Ele verifica os links internos, os links externos, a qualidade das âncoras, os percursos do leitor e se a página parece isolada ou mal conectada.',
    heroPara2:
      'Para revisões de página, verificações de links internos, fluxos de trabalho de melhoria de conteúdo e planejamento editorial.',
    problemEyebrow: 'Onde os relacionamentos de conteúdo dão errado',
    problemH2: 'Uma página útil ainda pode ficar fora da jornada.',
    problemPara:
      'Uma página pode não ter um próximo passo claro, texto de âncora vago, links de apoio fracos, distrações demais ou nenhuma relação óbvia com o cluster temático ao redor. Leo verifica se a página se comporta como parte de um site conectado.',
    problemAnnotation: '↘ verifique as conexões, não só o texto',
    beforeStamp: 'Página isolada',
    beforeHtml: `<p>A página tem uma boa leitura por si só, mas não tem um próximo passo claro, tem texto de âncora vago e nenhum link óbvio para o cluster temático ao redor.</p>`,
    beforeTags: ['Sem próximo passo', 'Âncoras vagas', 'Conexão de cluster fraca', 'Parece isolada'],
    beforeNote: 'a página fica fora da jornada',
    afterStamp: 'Revisão de relacionamento',
    afterHtml: `<p>Leo revisa os links e os percursos da página e sinaliza onde as conexões precisam de atenção editorial.</p>`,
    afterTags: ['Percursos revisados', 'Âncoras fracas sinalizadas', 'Verificações manuais listadas', 'Pronta para revisão'],
    afterNote: 'as conexões da página ficam visíveis',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma passagem de relacionamento em nível de página.',
    helpsPara:
      'Leo revisa os links e os percursos visíveis na página. Ele não rastreia o site inteiro nem confirma toda página órfã. Ele dá aos editores uma revisão de relacionamento em nível de página, bem fundamentada.',
    checks: [
      'Presença de links internos',
      'Uso de links externos',
      'Clareza do texto de âncora',
      'Percursos de próximo passo do leitor',
      'Risco de página órfã em nível de página',
      'Sinais de conteúdo de apoio',
    ],
    improves: [
      'Movimentação do leitor entre páginas',
      'Utilidade dos links internos',
      'Coerência do cluster temático',
      'Visibilidade de percursos fracos',
    ],
    prepares: [
      'Avaliação de links',
      'Revisão de percursos',
      'Notas de qualidade das âncoras',
      'Verificações manuais do grafo do site',
    ],
    surfaces: [
      'Links de próximo passo ausentes',
      'Âncoras genéricas ou fracas',
      'Links que distraem',
      'Páginas que podem precisar de apoio de cluster mais forte',
    ],
    ioH2: 'Do que Leo parte, e o que ele produz.',
    worksFrom: [
      'Links da página',
      'Texto de âncora',
      'Estrutura da página',
      'Sinais de intenção',
      'Sinais de inventário de conteúdo',
    ],
    produces: [
      'Revisão de relacionamento',
      'Avaliação de links internos',
      'Notas de qualidade das âncoras',
      'Lacunas nos percursos do leitor',
      'Verificações manuais do grafo do site',
    ],
    scenarios: [
      {
        title: 'Uma página parece isolada.',
        description: 'Leo verifica se ela tem os links e os percursos que uma página conectada deveria ter.',
      },
      {
        title: 'Os links existem, mas não ajudam o leitor.',
        description: 'Ele revisa o texto e o posicionamento das âncoras quanto à utilidade real, não só à presença.',
      },
      {
        title: 'Um cluster temático precisa de conexões mais fortes.',
        description: 'Leo entrega a Zara uma revisão de relacionamento para verificar em relação à cobertura do cluster.',
      },
      {
        title: 'Um caminho de conversão não está claro.',
        description: 'Ele sinaliza onde a página não tem um link de próximo passo claro para o leitor.',
      },
      {
        title: 'A página tem links que distraem.',
        description: 'Leo traz à tona os links que tiram a atenção do propósito da página.',
      },
      {
        title: 'Os conselhos sobre links precisam de contexto de origem.',
        description: 'Ele dá a Felix um ponto de partida em nível de página antes de uma revisão de percurso mais profunda.',
      },
    ],
    boundaryH2: 'Leo revisa os percursos. Editores decidem quais links mudam.',
    boundaryPara:
      'Leo não adiciona links, não remove links, não reescreve âncoras nem publica mudanças. Ele mostra o que precisa de revisão.',
    boundaryChecklist: [
      'Leo revisa os links visíveis na página, mas nunca os adiciona nem os remove.',
      'A revisão dele cobre o nível da página, não um status confirmado de página órfã ou de rastreamento em todo o site.',
      'As sugestões de âncoras e percursos são para os editores aplicarem, não mudanças automáticas.',
      'As páginas linkadas são registradas, não buscadas e revisadas como se Leo as tivesse lido.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever texto de âncora automaticamente' },
      { color: 'red', text: 'Adicionar ou remover links' },
      { color: 'red', text: 'Confirmar status de página órfã em todo o site sem dados do site' },
      { color: 'red', text: 'Buscar páginas linkadas como se tivessem sido revisadas' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem Leo trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrai os links e os sinais de página para Leo revisar.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como Patrick inspeciona',
      },
      {
        id: 'topical_authority',
        description: 'Revisa o apoio ao cluster temático.',
        outputLabel: 'Revisão de cobertura',
        ctaLabel: 'Como Zara revisa',
      },
      {
        id: 'internal_link_pathway',
        description: 'Revisa os percursos de links internos com mais detalhe.',
        outputLabel: 'Revisão de percurso',
        ctaLabel: 'Como Felix revisa',
      },
    ],
    ctaH2: 'Conecte a página ao sistema de conteúdo mais amplo.',
    ctaPara:
      'Leo ajuda os editores a ver se a página tem links úteis, âncoras claras e um percurso de leitor que vale a pena seguir.',
    guidanceFooterLabel: 'STATUS DO RELACIONAMENTO',
    guidanceFooterValue: 'Precisa de revisão · lacunas de percurso encontradas',
  },

  review_queue: {
    seoTitle: 'Review Queue Worker | WordPresto',
    metaDescription:
      'Riley converte mudanças propostas em itens de revisão estruturados, mostrando o que precisa de uma decisão humana, por que isso importa e que ação está disponível.',
    h1: 'Transforme mudanças propostas em decisões que um editor consegue gerenciar.',
    heroPara1:
      'Uma revisão de conteúdo pode produzir dezenas de achados. Sem uma fila, esses achados viram ruído: prioridade pouco clara, sem status de decisão, sem responsável e sem caminho para a aprovação. Riley converte mudanças propostas em itens de revisão estruturados. Cada item mostra o que precisa de uma decisão humana, por que isso importa e que ação está disponível.',
    heroPara2:
      'Para análise de conteúdo, revisão de mudanças, fluxos de aprovação e qualquer página em que vários Workers tenham levantado problemas.',
    problemEyebrow: 'Onde os fluxos de revisão dão errado',
    problemH2: 'Achados não são a mesma coisa que decisões.',
    problemPara:
      'Uma auditoria de página pode produzir recomendações úteis, mas o editor ainda precisa saber o que aprovar, rejeitar, adiar ou investigar. Sem essa camada, o fluxo de trabalho parece movimentado, mas não operacional. Riley transforma achados em uma fila que o time pode percorrer.',
    problemAnnotation: '↘ organize as decisões, não só os achados',
    beforeStamp: 'Pilha de achados',
    beforeHtml: `<p>Vários Workers levantaram problemas na página, mas não existe uma visão compartilhada do que precisa de uma decisão, nem em que ordem.</p>`,
    beforeTags: ['Sem prioridade', 'Sem status de decisão', 'Sem responsável', 'Movimentada, mas travada'],
    beforeNote: 'a revisão parece ativa, mas não produz nada',
    afterStamp: 'Fila de revisão',
    afterHtml: `<p>Riley organiza os achados em itens de decisão, cada um com justificativa e as ações disponíveis para o editor.</p>`,
    afterTags: ['Itens priorizados', 'Decisões pendentes', 'Nenhuma edição aplicada', 'Pronto para ação do editor'],
    afterNote: 'o time consegue percorrê-la em ordem',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma camada de fila entre os achados dos Workers e a aprovação humana.',
    helpsPara:
      'Riley não decide pelo editor. Ele organiza os achados em itens revisáveis, para que os editores possam tomar decisões sem perder o contexto.',
    checks: [
      'Mudanças propostas pelos Workers de revisão',
      'Tipo de decisão necessário',
      'Prioridade e área afetada',
      'Se é preciso mais evidência',
      'Se um item deve ser aprovado, rejeitado, adiado ou atribuído',
    ],
    improves: [
      'Clareza do fluxo de revisão',
      'Rendimento editorial',
      'Acompanhamento de decisões',
      'Prontidão para aprovação humana',
    ],
    prepares: [
      'Fila de revisão',
      'Itens de decisão pendentes',
      'Justificativa dos itens',
      'Ações do editor disponíveis',
    ],
    surfaces: [
      'Itens que precisam de aprovação',
      'Itens que precisam de mais evidência',
      'Itens que devem ser adiados',
      'Itens com responsável ou prioridade pouco claros',
    ],
    ioH2: 'Do que Riley parte, e o que ele produz.',
    worksFrom: [
      'Planos de mudanças seguras',
      'Achados dos Workers',
      'Mudanças propostas',
      'Sinais de evidência e risco',
      'Contexto de revisão da página',
    ],
    produces: [
      'Fila de revisão',
      'Itens de decisão',
      'Etiquetas de prioridade',
      'Justificativa da revisão',
      'Estados de ação pendente',
    ],
    scenarios: [
      {
        title: 'Uma página tem muitas recomendações.',
        description: 'Riley as organiza em uma fila que o editor pode percorrer em ordem.',
      },
      {
        title: 'O editor precisa de opções de decisão.',
        description: 'Ele mostra que ação está disponível para cada item: aprovar, rejeitar, adiar ou atribuir.',
      },
      {
        title: 'Uma sessão de revisão está ficando bagunçada.',
        description: 'Riley traz a estrutura de volta, transformando achados soltos em itens acompanhados.',
      },
      {
        title: 'Vários Workers levantaram problemas relacionados.',
        description: 'Ele os agrupa para que o editor veja o panorama completo, e não notas dispersas.',
      },
      {
        title: 'Uma página está caminhando para a aprovação.',
        description: 'Riley dá a Dana uma visão clara de quais itens da fila ainda estão não resolvidos.',
      },
      {
        title: 'O time precisa de um handoff limpo.',
        description: 'Ele mantém o status da fila visível, para que nada se perca entre sessões.',
      },
    ],
    boundaryH2: 'Riley organiza decisões. Ele não as toma.',
    boundaryPara:
      'Riley não aprova mudanças, não edita conteúdo, não aplica correções nem publica. Ele coordena a fila de revisão para que humanos possam decidir.',
    boundaryChecklist: [
      'Riley organiza as mudanças propostas em uma fila, mas nunca as aprova nem as rejeita.',
      'As etiquetas de prioridade são um ponto de partida para os editores, não uma classificação final.',
      'Os itens não resolvidos permanecem visíveis na fila, em vez de serem descartados em silêncio.',
      'As decisões finais e as mudanças de conteúdo ficam com o editor e com o Worker relevante.',
    ],
    willNot: [
      { color: 'red', text: 'Aprovar ou rejeitar itens automaticamente' },
      { color: 'red', text: 'Aplicar mudanças de conteúdo' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Esconder itens de revisão não resolvidos' },
      { color: 'red', text: 'Substituir a tomada de decisão humana' },
    ],
    relatedH2: 'Workers com quem Riley trabalha.',
    relatedWorkerIds: [
      {
        id: 'safe_change_planner',
        description: 'Transforma achados em mudanças propostas que Riley pode colocar na fila.',
        outputLabel: 'Plano de mudanças',
        ctaLabel: 'Como Sam planeja',
      },
      {
        id: 'review',
        description: 'Resume achados e ações de revisão para o editor.',
        outputLabel: 'Resumo da revisão',
        ctaLabel: 'Como Helen revisa',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Verifica se os itens não resolvidos da fila bloqueiam a aprovação.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como Dana decide',
      },
    ],
    ctaH2: 'Torne o trabalho de revisão gerenciável.',
    ctaPara:
      'Riley transforma os achados dos Workers em decisões estruturadas, para que os editores possam passar da análise para a ação.',
    guidanceFooterLabel: 'STATUS DA FILA',
    guidanceFooterValue: 'Pendente de revisão · decisões necessárias',
  },
};
