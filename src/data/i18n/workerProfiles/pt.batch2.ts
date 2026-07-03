import type { WorkerProfileTranslatable } from './types';

export const ptBatch2: Record<string, WorkerProfileTranslatable> = {
  cms_handoff: {
    seoTitle: 'Worker de Integração com o CMS | WordPresto',
    metaDescription:
      'Ravi prepara o conteúdo aprovado com a estrutura, os metadados e as notas necessárias para uma integração limpa com o CMS, o website ou o cliente. Para equipas que precisam de um pacote de conteúdo pronto a publicar.',
    h1: 'Prepare o conteúdo aprovado para uma integração mais limpa.',
    heroPara1:
      'Conteúdo aprovado que chega a um CMS sem os metadados, as indicações de formatação e as notas certas cria trabalho precisamente onde devia ser simples. O Ravi pega no rascunho aprovado e produz um pacote de publicação completo: conteúdo, metadados, notas de formatação, campos do CMS. A integração fica limpa logo à primeira.',
    heroPara2:
      'Para equipas de conteúdo que fazem a integração com programadores, editores de CMS ou clientes que gerem a própria publicação.',
    problemEyebrow: 'Onde as integrações criam trabalho extra',
    problemH2: 'Integrações mal feitas custam mais tempo do que rascunhos mal feitos.',
    problemPara:
      'Um conteúdo que chega a um editor de CMS ou a um programador sem metadados corretos, notas de formatação ou orientação sobre os campos acaba publicado com erros, ou é devolvido a pedir informação. A etapa de integração é barata quando feita bem e cara quando feita mal.',
    problemAnnotation: '↘ integração certa à primeira',
    beforeStamp: 'Não preparado',
    beforeHtml: `<p><span class="ba-strike">Aqui está o conteúdo aprovado</span> num documento Word. A <span class="ba-strike">meta description deve estar algures aí</span>, penso eu. Digam se <span class="ba-strike">precisarem de mais alguma coisa</span>. As <span class="ba-strike">imagens estão na minha pasta de Transferências</span>.</p>`,
    beforeTags: ['Incompleto', 'Sem metadados', 'Editor de CMS a adivinhar'],
    beforeNote: 'isto vai levar mais duas rondas a resolver',
    afterStamp: 'Preparado',
    afterHtml: `<p>Conteúdo, meta title, meta description, texto alternativo, slug do URL, nomes dos ficheiros de imagem e notas para os campos do CMS, tudo <span class="ba-hl">reunido num único documento de integração</span> pronto para o editor de CMS publicar.</p>`,
    afterTags: ['Completo', 'Pronto para o CMS', 'Sem idas e vindas'],
    afterNote: 'isto pode ser publicado assim que chega',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um pacote de publicação que editores de CMS e programadores conseguem usar de imediato.',
    helpsPara:
      'O Ravi produz o pacote de integração completo que transforma conteúdo aprovado em conteúdo pronto a publicar. Campos de metadados, indicações de formatação, slug do URL, notas sobre imagens: tudo o que é preciso para uma primeira publicação limpa.',
    checks: [
      'Se todos os campos de metadados obrigatórios estão preenchidos',
      'Se a formatação está correta para o CMS de destino',
      'Se as imagens e outros ficheiros estão corretamente referenciados',
    ],
    improves: [
      'A integridade da integração, para que os editores de CMS publiquem sem ter de voltar a perguntar',
      'A qualidade dos metadados, para que os campos de SEO e acessibilidade estejam corretos',
      'A consistência da publicação ao longo de um programa de conteúdo',
    ],
    prepares: [
      'Um pacote de integração completo',
      'Notas preenchidas para os campos do CMS',
      'Indicações de formatação e de ficheiros',
    ],
    surfaces: [
      'Metadados em falta que precisam de input do redator ou do cliente',
      'Conteúdo que, apesar de aprovado, ainda não está pronto para o CMS',
      'Requisitos específicos do CMS que o conteúdo ainda não cumpre',
    ],
    ioH2: 'De onde parte o Ravi e o que produz.',
    worksFrom: [
      'Rascunho final aprovado',
      'Requisitos dos campos do CMS',
      'Briefing de metadados',
      'Linhas de orientação da marca',
      'Referências de imagens e ficheiros',
    ],
    produces: [
      'Pacote de integração completo',
      'Notas preenchidas para os campos do CMS',
      'Indicações de URL e slug',
      'Notas sobre imagens e ficheiros',
      'Documento de conteúdo pronto a publicar',
    ],
    scenarios: [
      {
        title: 'Um programa de conteúdo a fazer a integração com um editor WordPress.',
        description:
          'O Ravi produz um pacote de integração que corresponde a cada campo do modelo do editor.',
      },
      {
        title: 'A construção de um site em Astro onde o conteúdo precisa de ser estruturado para o frontmatter.',
        description:
          'Ele prepara o conteúdo no formato de que o programador precisa, incluindo todos os campos de frontmatter.',
      },
      {
        title: 'Um cliente que gere o próprio CMS mas acha as integrações confusas.',
        description:
          'Um documento de integração claro e completo reduz os erros de publicação e os pedidos de apoio do cliente.',
      },
      {
        title: 'Um lote de 30 páginas aprovadas, todas a precisarem de metadados.',
        description:
          'O Ravi percorre o lote de forma consistente, para que todas as páginas fiquem preparadas com o mesmo padrão.',
      },
      {
        title: 'Um projeto de migração com conteúdo antigo que precisa de ser reembalado.',
        description:
          'Ele atualiza os metadados e as notas de formatação para o novo CMS sem tocar no texto aprovado.',
      },
      {
        title: 'Um prazo de lançamento em que o editor de CMS tem apenas uma hora para publicar.',
        description:
          'Um pacote de integração completo significa que essa hora é passada a publicar, não a perseguir informação em falta.',
      },
    ],
    boundaryH2: 'O Ravi prepara. As equipas de publicação e os editores decidem o que vai ao ar.',
    boundaryPara:
      'Um pacote de integração é um documento pronto a publicar, não uma autorização para publicar. O que vai ao ar, quando e em que forma é uma decisão da equipa de publicação, do cliente ou da direção editorial.',
    boundaryChecklist: [
      'O Ravi prepara o conteúdo, nunca o publica.',
      'Os pacotes de integração são estruturados para a equipa recetora verificar.',
      'A informação incompleta é assinalada, nunca adivinhada.',
      'A integração apoia a publicação, não a autoriza.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar conteúdo diretamente' },
      { color: 'red', text: 'Aprovar conteúdo para publicação' },
      { color: 'amber', text: 'Adivinhar metadados em falta' },
    ],
    relatedH2: 'Workers com quem o Ravi trabalha.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Confirma o que está aprovado antes de começar a preparação da integração.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como a Audrey aprova',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Resolve as questões de conformidade e risco antes de o pacote de integração ser produzido.',
        outputLabel: 'Relatório de risco e conformidade',
        ctaLabel: 'Como a Vera assinala riscos',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Faz a última revisão de qualidade antes da integração.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como o Quinn revê',
      },
    ],
    ctaH2: 'Prepare o conteúdo aprovado para uma integração mais limpa.',
    ctaPara:
      'Junte o Ravi ao seu fluxo de trabalho e todo o conteúdo aprovado chega ao CMS com tudo o que é preciso para ser publicado sem sobressaltos.',
    guidanceFooterLabel: 'ESTADO DA INTEGRAÇÃO',
    guidanceFooterValue: 'Pronto para revisão do CMS',
  },

  editorial_risk_claims: {
    seoTitle: 'Worker de Risco Editorial e Afirmações | WordPresto',
    metaDescription:
      'A Vera assinala afirmações sem suporte, declarações arriscadas e questões de conformidade no conteúdo antes de ser aprovado ou publicado.',
    h1: 'Assinale afirmações arriscadas antes de avançarem.',
    heroPara1:
      'Conteúdo com afirmações sem suporte, linguagem legalmente arriscada ou questões de conformidade não falha no momento da publicação, falha no momento da reclamação, do desafio ou da auditoria. A Vera revê o conteúdo à procura de afirmações que não podem ser comprovadas, declarações que criam responsabilidade e linguagem que precisa de validação de conformidade.',
    heroPara2:
      'Para equipas de conteúdo em setores regulados, agências com obrigações de conformidade e qualquer equipa que publique afirmações que precisem de ser defensáveis.',
    problemEyebrow: 'Onde as afirmações se tornam problemas',
    problemH2: 'Conteúdo arriscado parece correto até ser posto em causa.',
    problemPara:
      'Uma afirmação que não pode ser sustentada, uma comparação que sugere algo falso ou linguagem que cria responsabilidade legal parecem exatamente iguais a um bom texto até alguém as questionar. Detetar isto antes da publicação não custa nada. Resolver depois, custa.',
    problemAnnotation: '↘ assinalar antes de publicar, não depois',
    beforeStamp: 'Não verificado',
    beforeHtml: `<p>A nossa plataforma é <span class="ba-strike">a solução mais segura</span> disponível. <span class="ba-strike">Garantimos</span> proteção total dos dados e os nossos clientes <span class="ba-strike">obtêm sempre</span> melhores resultados. Somos <span class="ba-strike">líderes do setor</span> nesta área.</p>`,
    beforeTags: ['Superlativos sem suporte', 'Garantias não qualificadas', 'Afirmações comparativas sem evidência'],
    beforeNote: 'todas as frases aqui são um risco',
    afterStamp: 'Revisto',
    afterHtml: `<p>Secção sobre segurança da plataforma: <span class="ba-hl">duas afirmações assinaladas para comprovação</span>, um superlativo precisa de ser qualificado ou removido, a linguagem de garantia precisa de revisão jurídica antes de este texto poder ser aprovado.</p>`,
    afterTags: ['Sinalizações específicas', 'Comprovação assinalada', 'Revisão jurídica indicada'],
    afterNote: 'os riscos ficam visíveis antes da aprovação',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma verificação de conformidade que encontra riscos de afirmações antes de chegarem à publicação.',
    helpsPara:
      'A Vera revê o conteúdo à procura das afirmações e da linguagem que criam risco, não para retirar força ao texto, mas para garantir que o que é publicado pode ser defendido.',
    checks: [
      'Afirmações sem suporte ou sem qualificação',
      'Linguagem comparativa que sugere uma falsa superioridade',
      'Linguagem sensível em termos de conformidade em áreas reguladas',
    ],
    improves: [
      'A linguagem das afirmações, tornando-a específica e defensável',
      'A visibilidade do risco, para que quem aprova tenha a informação de que precisa',
      'A documentação de conformidade para fins de auditoria',
    ],
    prepares: [
      'Um relatório de risco e conformidade',
      'Sinalizações específicas de afirmações com evidência ou opções de correção',
      'Notas de validação de conformidade para a aprovação',
    ],
    surfaces: [
      'Afirmações que precisam de evidência de terceiros',
      'Linguagem que exige revisão jurídica',
      'Terminologia de setores regulados que precisa de validação especializada',
    ],
    ioH2: 'De onde parte a Vera e o que produz.',
    worksFrom: [
      'Rascunho ou conteúdo aprovado',
      'Linhas de orientação de conformidade',
      'Contexto regulatório específico do setor',
      'Evidência ou fontes das afirmações',
      'Notas de conformidade anteriores',
    ],
    produces: [
      'Relatório de risco e conformidade',
      'Afirmações assinaladas com requisitos de evidência',
      'Documentação de validação de conformidade',
      'Opções de correção para linguagem assinalada',
      'Input para a aprovação da Audrey',
    ],
    scenarios: [
      {
        title: 'Uma empresa de serviços financeiros a publicar conteúdo sobre investimentos.',
        description:
          'A Vera aplica os padrões de conformidade do setor ao rascunho antes de chegar à equipa de conformidade.',
      },
      {
        title: 'Uma marca de saúde a fazer afirmações sobre resultados.',
        description:
          'Afirmações sobre resultados e eficácia são assinaladas para comprovação clínica antes da aprovação.',
      },
      {
        title: 'Uma agência a escrever conteúdo comparativo para um cliente.',
        description:
          'As afirmações comparativas são revistas quanto à comprovação antes de chegarem ao cliente.',
      },
      {
        title: 'O lançamento de um produto com afirmações de desempenho ambiciosas.',
        description:
          'A Vera assinala quais as afirmações que precisam de evidência e quais precisam de ser suavizadas antes do lançamento ir ao ar.',
      },
      {
        title: 'Uma atualização de conteúdo que recupera páginas antigas com afirmações desatualizadas.',
        description:
          'Ela identifica afirmações que já foram corretas mas já não são defensáveis.',
      },
      {
        title: 'Uma marca B2B a escrever sobre posicionamento de mercado.',
        description:
          'As afirmações de liderança e superioridade no mercado são revistas quanto à comprovação antes da publicação.',
      },
    ],
    boundaryH2: 'A Vera assinala. As equipas jurídica e de conformidade decidem.',
    boundaryPara:
      'Um relatório de risco é um input para a revisão editorial e de conformidade, não uma validação final. A Vera identifica riscos e assinala-os com clareza. Agir sobre eles, como e se o conteúdo pode avançar é uma decisão das equipas jurídica, de conformidade e editorial.',
    boundaryChecklist: [
      'A Vera assinala riscos, nunca aprova nem valida conteúdo.',
      'Os relatórios de risco são estruturados para revisão editorial e jurídica.',
      'As decisões de conformidade são assinaladas, não tomadas por ela.',
      'A sinalização de risco apoia a validação editorial, não substitui a revisão jurídica.',
    ],
    willNot: [
      { color: 'red', text: 'Dar validação jurídica' },
      { color: 'red', text: 'Aprovar conteúdo com sinalizações de conformidade por resolver' },
      { color: 'amber', text: 'Remover afirmações sem instrução explícita' },
    ],
    relatedH2: 'Workers com quem a Vera trabalha.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Revê a qualidade antes da verificação de conformidade.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como o Quinn revê',
      },
      {
        id: 'approval_report',
        description: 'Inclui as sinalizações de conformidade no relatório de aprovação.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como a Audrey aprova',
      },
      {
        id: 'cms_handoff',
        description: 'Recebe a confirmação de validação antes de produzir o pacote de integração.',
        outputLabel: 'Pacote de integração',
        ctaLabel: 'Como o Ravi faz a integração',
      },
    ],
    ctaH2: 'Assinale afirmações arriscadas antes de avançarem.',
    ctaPara:
      'Junte a Vera ao seu fluxo de trabalho e as questões de conformidade são identificadas antes da publicação, não depois.',
    guidanceFooterLabel: 'REVISÃO DE RISCO',
    guidanceFooterValue: 'Precisa de verificação de evidência',
  },

  content_refresh_brief: {
    seoTitle: 'Worker de Briefing de Atualização de Conteúdo | WordPresto',
    metaDescription:
      'A Iris produz um briefing estruturado para atualizar conteúdo existente: o que atualizar, o que cortar e o que acrescentar. Para equipas que atualizam páginas com uma direção clara em vez de andarem a adivinhar.',
    h1: 'Atualize conteúdo com um motivo mais claro.',
    heroPara1:
      'Atualizar conteúdo sem um briefing é a forma mais certa de acabar com páginas que já foram reescritas três vezes e continuam a não funcionar. A Iris produz um briefing de atualização estruturado que cobre o que atualizar, o que cortar, o que acrescentar e porquê, para que cada atualização comece com uma direção clara em vez de uma revisão à cega.',
    heroPara2:
      'Para programas de atualização de conteúdo, migrações de sites com conteúdo existente e equipas a atualizar páginas para refletir mudanças no produto, no público ou no mercado.',
    problemEyebrow: 'Onde os projetos de atualização correm mal',
    problemH2: 'Atualizar sem um briefing produz uma versão diferente do mesmo problema.',
    problemPara:
      'Uma atualização de conteúdo sem direção clara tende a fazer uma de duas coisas: atualizar o que é fácil de atualizar e deixar intactos os problemas estruturais, ou desencadear uma reescrita completa quando uma edição ligeira teria bastado. Um briefing de atualização define o âmbito antes de o trabalho começar.',
    problemAnnotation: '↘ definir o âmbito da atualização, depois fazê-la',
    beforeStamp: 'Sem briefing',
    beforeHtml: `<p>Podemos <span class="ba-strike">atualizar esta página</span>? Parece um pouco <span class="ba-strike">desatualizada</span>. Talvez <span class="ba-strike">atualizar algum do texto</span> e <span class="ba-strike">acrescentar coisas novas</span>. É só torná-la <span class="ba-strike">melhor</span> de um modo geral.</p>`,
    beforeTags: ['Sem âmbito', 'Sem direção', 'Sem critérios de sucesso'],
    beforeNote: 'isto vai gerar alterações ao acaso',
    afterStamp: 'Definido',
    afterHtml: `<p><span class="ba-hl">Atualizar: introdução e secção de prova</span>. Cortar: bloco de caso de estudo (desatualizado). Acrescentar: secção de funcionalidades do produto do lançamento do primeiro trimestre. Manter: estrutura e CTA. Justificação fornecida para cada decisão.</p>`,
    afterTags: ['Âmbito claro', 'Alterações específicas', 'Justificação incluída'],
    afterNote: 'os redatores sabem exatamente o que fazer',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um briefing de atualização que define o âmbito do trabalho antes de um redator tocar na página.',
    helpsPara:
      'A Iris transforma um pedido de atualização num briefing estruturado com instruções específicas de atualizar, cortar e acrescentar, para que redatores e editores saibam exatamente para que serve a atualização e o que precisa de alcançar.',
    checks: [
      'Se o propósito da página ainda é atual',
      'Se vale a pena manter as secções existentes',
      'Se o âmbito da atualização é proporcional ao problema',
    ],
    improves: [
      'A direção da atualização, tornando-a específica em vez de vaga',
      'A definição do âmbito, para que o briefing cubra a mudança, não apenas a atualização',
      'A eficiência dos redatores, ao eliminar a ambiguidade sobre o que fazer',
    ],
    prepares: [
      'Um briefing de atualização estruturado',
      'Um plano de secções para atualizar, cortar e acrescentar',
      'Notas de justificação para quem gere o briefing',
    ],
    surfaces: [
      'Páginas que precisam de uma mudança estrutural, não apenas de uma atualização',
      'Pedidos de atualização sem justificação clara',
      'Conteúdo que devia ser retirado em vez de atualizado',
    ],
    ioH2: 'De onde parte a Iris e o que produz.',
    worksFrom: [
      'Conteúdo existente da página',
      'Objetivos ou motivos de despoletar a atualização',
      'Análise de conteúdo',
      'Atualizações de marca e de produto',
      'Notas de mudança de público ou de mercado',
    ],
    produces: [
      'Briefing de atualização estruturado',
      'Plano de secções para atualizar, cortar e acrescentar',
      'Notas de justificação da atualização',
      'Briefing de integração para o redator',
      'Âmbito e critérios de sucesso',
    ],
    scenarios: [
      {
        title: 'Uma página de produto que precisa de atualização depois de um rebranding.',
        description:
          'A Iris mapeia o que precisa de mudar face à nova direção de marca e produz um briefing de atualização específico.',
      },
      {
        title: 'Um programa de conteúdo a atualizar 50 páginas no primeiro trimestre.',
        description:
          'Ela define o briefing de cada atualização de forma consistente, para que os redatores não tenham de reinventar o âmbito em cada página.',
      },
      {
        title: 'Um site que cresceu de forma orgânica e tem páginas inconsistentes.',
        description:
          'Os briefings de atualização criam um padrão consistente para cada tipo de página.',
      },
      {
        title: 'Um arquivo de blog com publicações desatualizadas mas que ainda geram tráfego.',
        description:
          'A Iris define o briefing de uma atualização específica que melhora a precisão sem remover o que os leitores achavam útil.',
      },
      {
        title: 'Uma nova funcionalidade de produto que precisa de ser acrescentada a páginas existentes.',
        description:
          'Ela define quais as páginas que precisam de atualização, o que acrescentar e onde encaixa.',
      },
      {
        title: 'Um cliente que continua a pedir pequenas alterações às mesmas páginas.',
        description:
          'Um briefing de atualização adequado resolve os problemas de fundo em vez de os ir corrigindo página a página.',
      },
    ],
    boundaryH2: 'A Iris define o briefing da atualização. Redatores e editores fazem as alterações.',
    boundaryPara:
      'Um briefing de atualização é um documento de âmbito, não um conjunto de alterações aprovadas. A Iris mapeia o que precisa de acontecer; se avançar, e como, é uma decisão editorial e do cliente.',
    boundaryChecklist: [
      'A Iris define o briefing da atualização, nunca faz as alterações.',
      'Os briefings de atualização são estruturados para revisão de redatores e editores.',
      'As páginas recomendadas para retirada são assinaladas, não removidas.',
      'O briefing de atualização apoia o âmbito editorial, não o define unilateralmente.',
    ],
    willNot: [
      { color: 'red', text: 'Editar ou reescrever páginas diretamente' },
      { color: 'red', text: 'Retirar ou remover conteúdo' },
      { color: 'amber', text: 'Alargar o âmbito da atualização sem aprovação editorial' },
    ],
    relatedH2: 'Workers com quem a Iris trabalha.',
    relatedWorkerIds: [
      {
        id: 'content_analyst',
        description: 'Fornece a análise que informa o briefing de atualização.',
        outputLabel: 'Análise de conteúdo',
        ctaLabel: 'Como o Omar analisa',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Verifica o rascunho de atualização em relação ao briefing de atualização.',
        outputLabel: 'Relatório de alinhamento',
        ctaLabel: 'Como a Ada verifica',
      },
      {
        id: 'draft_rewrite',
        description: 'Reescreve as secções assinaladas no briefing de atualização.',
        outputLabel: 'Rascunho moldado',
        ctaLabel: 'Como o Ellis reescreve',
      },
    ],
    ctaH2: 'Atualize conteúdo com um motivo mais claro.',
    ctaPara:
      'Junte a Iris ao seu fluxo de trabalho e cada atualização começa com um briefing que diz aos redatores exatamente o que mudar e porquê.',
    guidanceFooterLabel: 'ESTADO DA ATUALIZAÇÃO',
    guidanceFooterValue: 'Briefing definido · pronto para o redator',
  },

  content_distribution_brief: {
    seoTitle: 'Worker de Briefing de Distribuição de Conteúdo | WordPresto',
    metaDescription:
      'A Nina cria um briefing de distribuição que mapeia para onde deve seguir o conteúdo aprovado e como deve ser adaptado a cada canal.',
    h1: 'Planeie os próximos passos do conteúdo aprovado.',
    heroPara1:
      'Conteúdo aprovado que segue diretamente da aprovação para um único canal desperdiça a maior parte do seu valor. A Nina produz um briefing de distribuição que mapeia o conteúdo aprovado para os canais onde encaixa, com notas de adaptação para cada um, para que a mesma peça chegue mais longe sem perder qualidade.',
    heroPara2:
      'Para equipas de conteúdo, agências e responsáveis de marketing que precisam de um plano de distribuição estruturado em vez de uma reflexão tardia sobre redes sociais.',
    problemEyebrow: 'Onde a distribuição falha',
    problemH2: 'A maior parte do conteúdo é publicada uma vez e esquecida.',
    problemPara:
      'Conteúdo longo aprovado costuma chegar a um único canal, num único formato, uma única vez. As adaptações a canais que estenderiam o seu alcance (extrato para newsletter, publicação no LinkedIn, cartão para redes sociais, citação em destaque) nunca acontecem porque não há um plano para elas. Um briefing de distribuição muda isso.',
    problemAnnotation: '↘ planear a distribuição antes de publicar',
    beforeStamp: 'Sem plano',
    beforeHtml: `<p>Ótimo, o artigo está <span class="ba-strike">aprovado</span>! Vamos <span class="ba-strike">publicá-lo no LinkedIn</span> e <span class="ba-strike">enviá-lo na newsletter</span>. Alguém pode <span class="ba-strike">escrever umas publicações para as redes</span> se tiver tempo. <span class="ba-strike">Provavelmente está bem assim</span>.</p>`,
    beforeTags: ['Sem plano de canais', 'Sem orientação de adaptação', 'Distribuição ao acaso'],
    beforeNote: 'este conteúdo vai ser usado uma única vez',
    afterStamp: 'Definido',
    afterHtml: `<p>Website: publicar a peça completa. LinkedIn: <span class="ba-hl">resumo executivo com a principal conclusão</span>. Newsletter: extrato de 200 palavras, a começar pelo problema. Redes sociais: três citações com contexto. Notas de calendarização e adaptação para cada canal.</p>`,
    afterTags: ['Específico por canal', 'Pronto para adaptação', 'Distribuição estruturada'],
    afterNote: 'o mesmo conteúdo rende mais',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um briefing de distribuição que mapeia o conteúdo aprovado para os canais, com orientação de adaptação.',
    helpsPara:
      'A Nina transforma conteúdo aprovado num briefing de distribuição por canal: para onde vai, como se adapta a cada canal e o que a equipa de redação ou redes sociais precisa de produzir para cada um.',
    checks: [
      'Se o conteúdo é adequado aos canais previstos',
      'Se as necessidades de adaptação são apropriadas a cada canal',
      'Se o plano de distribuição é proporcional ao conteúdo',
    ],
    improves: [
      'O planeamento de distribuição, tornando-o específico por canal em vez de genérico',
      'A orientação de adaptação, para que cada versão sirva o seu canal',
      'O valor do conteúdo, ao estender o alcance sem o diluir',
    ],
    prepares: [
      'Um briefing de distribuição estruturado',
      'Notas de adaptação por canal',
      'Orientação de formato e extensão para cada canal',
    ],
    surfaces: [
      'Canais que não são adequados ao conteúdo',
      'Conteúdo que beneficiaria de reaproveitamento antes da distribuição',
      'Conflitos de calendarização ou de sequência na distribuição',
    ],
    ioH2: 'De onde parte a Nina e o que produz.',
    worksFrom: [
      'Conteúdo aprovado',
      'Lista de canais e definições de público',
      'Objetivos de distribuição',
      'Linhas de orientação de voz de marca',
      'Calendário de publicação ou notas de calendarização',
    ],
    produces: [
      'Briefing de distribuição',
      'Notas de adaptação por canal',
      'Orientação de formato e extensão',
      'Notas de calendarização de publicação',
      'Integração com a equipa de conteúdo ou redes sociais',
    ],
    scenarios: [
      {
        title: 'Um artigo longo que precisa de extratos para o LinkedIn e para o email.',
        description:
          'A Nina define o briefing dos extratos de forma específica, para que cada um funcione no seu canal e público.',
      },
      {
        title: 'O lançamento de um produto com conteúdo a sair em cinco canais.',
        description:
          'Ela mapeia o conteúdo do lançamento para cada canal, com notas de calendarização e adaptação num único briefing.',
      },
      {
        title: 'Uma agência a produzir conteúdo para um cliente com uma combinação complexa de canais.',
        description:
          'O briefing de distribuição torna-se a integração com as equipas de redes sociais e email, e não uma conversa à parte.',
      },
      {
        title: 'Um programa de conteúdo em que a distribuição é uma reflexão tardia.',
        description:
          'A Nina integra a distribuição no fluxo de trabalho no momento da aprovação, não como uma tarefa à parte.',
      },
      {
        title: 'Uma peça de investigação que pode dar origem a vários formatos de conteúdo.',
        description:
          'Ela mapeia quais os pontos que funcionam em cada canal e define o briefing das adaptações em conformidade.',
      },
      {
        title: 'Uma equipa em que o redator e o gestor de redes sociais trabalham em separado.',
        description:
          'Um briefing de distribuição liga as duas equipas sem o redator ter de fazer o briefing diretamente à equipa de redes sociais.',
      },
    ],
    boundaryH2: 'A Nina planeia a distribuição. As equipas de conteúdo e de redes sociais produzem as adaptações.',
    boundaryPara:
      'Um briefing de distribuição é um plano, não conteúdo produzido. A Nina mapeia para onde o conteúdo deve ir e como deve adaptar-se. As versões adaptadas, as decisões de publicação e as opções de canal cabem às equipas de conteúdo e de redes sociais.',
    boundaryChecklist: [
      'A Nina define o briefing da distribuição, nunca produz conteúdo adaptado.',
      'Os briefings de distribuição são estruturados para as equipas de canal atuarem.',
      'As questões de adequação a um canal são assinaladas, não presumidas.',
      'O briefing apoia as equipas de canal, não substitui o seu critério.',
    ],
    willNot: [
      { color: 'red', text: 'Produzir conteúdo adaptado para canais' },
      { color: 'red', text: 'Publicar ou calendarizar conteúdo' },
      { color: 'amber', text: 'Alargar o âmbito da distribuição sem aprovação' },
    ],
    relatedH2: 'Workers com quem a Nina trabalha.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Confirma que o conteúdo está aprovado antes de a distribuição ser planeada.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como a Audrey aprova',
      },
      {
        id: 'cms_handoff',
        description: 'Trata da integração com o canal principal em paralelo.',
        outputLabel: 'Pacote de integração',
        ctaLabel: 'Como o Ravi faz a integração',
      },
      {
        id: 'content_refresh_brief',
        description: 'Recebe o conteúdo distribuído de volta para o planeamento de atualizações.',
        outputLabel: 'Briefing de atualização',
        ctaLabel: 'Como a Iris atualiza',
      },
    ],
    ctaH2: 'Planeie os próximos passos do conteúdo aprovado.',
    ctaPara:
      'Junte a Nina ao seu fluxo de trabalho e cada peça aprovada sai já com um plano de distribuição por canal escrito.',
    guidanceFooterLabel: 'DISTRIBUIÇÃO',
    guidanceFooterValue: 'Briefing definido · pronto por canal',
  },

  seo_metadata: {
    seoTitle: 'Worker de Título e Metadados de SEO | WordPresto',
    metaDescription:
      'A Nadia revê o título de SEO, a meta description e o H1 face à intenção de pesquisa, e depois redige opções mais claras para o redator aprovar. Metadados que se leem bem para pessoas e para motores de pesquisa.',
    h1: 'Acerte no título, na descrição e no H1.',
    heroPara1:
      'O título, a meta description e o H1 são a primeira coisa que um leitor vê na pesquisa, e a coisa mais fácil de deixar para último. A Nadia lê-os face à página e à intenção por trás da pesquisa, assinala o que falta, está fraco, demasiado longo ou ao lado, e redige opções mais claras.',
    heroPara2:
      'Para redatores e editores que querem metadados que reflitam a página com honestidade, sem andar a adivinhar limites de carateres ou a perseguir palavras-chave.',
    problemEyebrow: 'Onde o clique se ganha ou se perde',
    problemH2: 'Um bom conteúdo com um título fraco continua a perder o clique.',
    problemPara:
      'Os metadados costumam ser escritos por último, à pressa, por quem estiver mais perto do botão de publicar. O resultado são títulos que repetem a marca, descrições que repetem o H1 e páginas que subestimam o que realmente oferecem. A Nadia trata a camada que aparece na SERP como parte da escrita.',
    problemAnnotation: '↘ o título não diz nada, a descrição repete-o',
    beforeStamp: 'Fraco',
    beforeHtml: `<p><strong>Título:</strong> <span class="ba-strike">Início | Blog | Nome da Nossa Empresa, Lda</span><br/><strong>Descrição:</strong> <span class="ba-strike">Bem-vindo ao nosso blog, onde escrevemos sobre várias coisas do nosso setor.</span></p>`,
    beforeTags: ['Não corresponde à intenção', 'Cheio de marca', 'Não diz nada'],
    beforeNote: 'porque é que alguém haveria de clicar nisto',
    afterStamp: 'Claro',
    afterHtml: `<p><strong>Título:</strong> <span class="ba-hl">Como escolher um fluxo de trabalho de conteúdo (um guia prático)</span><br/><strong>Descrição:</strong> <span class="ba-hl">Um percurso claro por como planear, redigir o briefing, rever, aprovar e entregar conteúdo, com as perguntas certas a fazer antes de avançar.</span></p>`,
    afterTags: ['Corresponde à intenção', 'Específico', 'Promessa honesta'],
    afterNote: 'agora merece o clique',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um editor de metadados que lê a intenção, não só as palavras-chave.',
    helpsPara:
      'A Nadia verifica o título, a descrição e o H1 como o faria um editor atento: face ao propósito da página e ao que o leitor procurava, e depois propõe redações que pode aceitar, editar ou rejeitar.',
    checks: [
      'Título, descrição e H1 face à intenção de pesquisa',
      'Extensão, duplicação e excesso de palavras-chave',
      'Promessas que a página não cumpre de facto',
    ],
    improves: [
      'Títulos vagos tornados específicos e legíveis',
      'Descrições que dizem o que a página oferece',
      'O título e o H1 a trabalharem juntos, não em sentidos opostos',
    ],
    prepares: [
      'Metadados redigidos com orientação de extensão',
      'Um antes e depois claro para revisão',
      'Notas sobre a intenção que cada opção visa',
    ],
    surfaces: [
      'Títulos em que a intenção é genuinamente pouco clara',
      'Afirmações nos metadados que precisam de evidência',
      'Termos sensíveis em termos de conformidade a verificar',
    ],
    ioH2: 'De onde parte a Nadia e o que produz.',
    worksFrom: [
      'Conteúdo da página e H1 atual',
      'Título e meta description existentes',
      'Intenção de pesquisa detetada',
      'Tópico ou termo de pesquisa alvo',
      'Regras de marca e conformidade',
    ],
    produces: [
      'Opções de título de SEO redigidas',
      'Meta description redigida',
      'Sugestões de H1',
      'Notas de extensão e intenção',
      'Pacote de metadados pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Um artigo forte com um título esquecível.',
        description:
          'A Nadia reescreve o título e a descrição para corresponder ao que os leitores realmente pesquisam, sem prometer de mais.',
      },
      {
        title: 'Títulos que começam todos pelo nome da marca.',
        description:
          'Ela move o valor para a frente, para que a página comece pelo que oferece, e não por quem a publicou.',
      },
      {
        title: 'Descrições que apenas repetem o título.',
        description:
          'A Nadia transforma um H1 repetido numa descrição que diz ao leitor o que vai ganhar com a página.',
      },
      {
        title: 'Uma página a visar a intenção errada.',
        description:
          'Quando os metadados prometem uma coisa e a página entrega outra, ela assinala a incompatibilidade para uma pessoa resolver.',
      },
      {
        title: 'A migração de uma biblioteca de artigos antigos.',
        description:
          'Ela revê títulos e descrições em massa e destaca os mais fracos primeiro, para que uma revisão de metadados comece pelo que mais importa.',
      },
      {
        title: 'Um tema regulado em que as palavras contam.',
        description:
          'A Nadia redige com cuidado e assinala afirmações que precisam de validação, em vez de escrever uma promessa que a página não pode cumprir.',
      },
    ],
    boundaryH2: 'A Nadia redige os metadados. As pessoas decidem o que vai ao ar.',
    boundaryPara:
      'Um título é uma promessa ao leitor. A Nadia propõe e verifica, mas está construída para parar no rascunho. Nada do que escreve é publicado ou enviado para o CMS sem uma pessoa aprovar primeiro.',
    boundaryChecklist: [
      'A Nadia redige os metadados, nunca os publica.',
      'Todas as opções são mostradas para um editor aprovar.',
      'Incompatibilidades e afirmações arriscadas são assinaladas, não escondidas.',
      'A Nadia apoia o redator, não substitui o seu critério.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar ou enviar para o CMS' },
      { color: 'red', text: 'Prometer posições ou tráfego' },
      { color: 'amber', text: 'Encher de palavras-chave para tentar enganar a pesquisa' },
    ],
    relatedH2: 'Workers com quem a Nadia trabalha.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Analisa como a página aparece nos resultados e onde há oportunidades de snippet.',
        outputLabel: 'Revisão de snippet',
        ctaLabel: 'Como o Morgan revê',
      },
      {
        id: 'schema',
        description: 'Revê os dados estruturados para a página poder qualificar-se para resultados mais ricos.',
        outputLabel: 'Revisão de schema',
        ctaLabel: 'Como a Sofia revê',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Verifica se o rascunho em si está claro e pronto antes de os metadados serem fechados.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como o Quinn revê',
      },
    ],
    ctaH2: 'Acerte no título, na descrição e no H1.',
    ctaPara:
      'Junte a Nadia ao seu fluxo de trabalho e cada página chega à revisão com metadados que a refletem com honestidade e se leem bem na pesquisa.',
    guidanceFooterLabel: 'METADADOS',
    guidanceFooterValue: 'Redigidos · prontos para revisão',
  },

  serp_snippet_opportunity: {
    seoTitle: 'Worker de Snippets de SERP | WordPresto',
    metaDescription:
      'O Morgan revê como uma página tende a aparecer nos resultados de pesquisa e assinala oportunidades de snippet e resultados enriquecidos que valem a pena moldar. Apenas revisão, nunca uma garantia.',
    h1: 'Molde a forma como a página aparece na pesquisa.',
    heroPara1:
      'Uma página não se limita a posicionar-se, ela aparece. O título, a descrição e a forma como o conteúdo está estruturado moldam tudo o que um leitor vê nos resultados. O Morgan revê esses elementos de snippet e assinala onde uma resposta clara, uma lista ou uma secção estruturada podem conquistar um resultado mais rico.',
    heroPara2:
      'Para editores que querem que as suas páginas se leiam bem nos resultados de pesquisa, e não apenas na própria página.',
    problemEyebrow: 'Onde a página encontra os resultados',
    problemH2: 'O resultado que um leitor vê nem sempre é a página que escreveu.',
    problemPara:
      'São os motores de pesquisa que constroem o snippet, não nós. Se a página esconde a resposta, não tem uma lista clara ou uma estrutura de pergunta, ou deixa a descrição ao acaso, o resultado lê-se tão plano como tudo à sua volta. O Morgan revê os elementos que moldam esse snippet, com honestidade, sem prometer que uma funcionalidade vai ser concedida.',
    problemAnnotation: '↘ a resposta está lá, só que escondida',
    beforeStamp: 'Escondida',
    beforeHtml: `<p><span class="ba-strike">Há muitos fatores a considerar e depende de uma série de coisas, que vamos explorar em detalhe ao longo deste artigo, nas secções abaixo.</span></p>`,
    beforeTags: ['Sem resposta clara', 'Sem estrutura', 'Snippet plano'],
    beforeNote: 'não há nada para a pesquisa aproveitar',
    afterStamp: 'Destacável',
    afterHtml: `<p><span class="ba-hl">Um fluxo de trabalho de conteúdo tem seis etapas: planear, definir o briefing, escrever, rever, melhorar e aprovar.</span> Cada uma é detalhada abaixo.</p>`,
    afterTags: ['Resposta direta', 'Pronta para lista', 'Pronta para snippet'],
    afterNote: 'agora há algo para destacar',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um revisor que lê a página da mesma forma que uma página de resultados o faz.',
    helpsPara:
      'O Morgan analisa o título, a descrição e a estrutura da página em conjunto e assinala oportunidades concretas e revisíveis, para que a página tenha a melhor hipótese honesta de um snippet claro e útil.',
    checks: [
      'A qualidade do título e da descrição para os resultados',
      'Se a página responde diretamente à sua pesquisa',
      'A estrutura que suporta listas, passos ou perguntas frequentes',
    ],
    improves: [
      'Respostas movidas para cima e tornadas explícitas',
      'Secções moldadas para um snippet mais limpo',
      'Conteúdo orientado a perguntas tornado mais fácil de percorrer',
    ],
    prepares: [
      'Uma lista de oportunidades de resultados enriquecidos',
      'Sugestões de melhoria de snippet',
      'Notas sobre que tipos de resultado se adequam à página',
    ],
    surfaces: [
      'Oportunidades que precisam de uma verificação de schema',
      'Afirmações que precisariam de evidência para serem destacadas',
      'Casos em que a intenção e o formato não coincidem',
    ],
    ioH2: 'De onde parte o Morgan e o que produz.',
    worksFrom: [
      'Título da página e meta description',
      'Títulos e estrutura de conteúdo',
      'Intenção de pesquisa detetada',
      'Padrões de perguntas e listas na página',
      'Revisão de schema, quando disponível',
    ],
    produces: [
      'Revisão de oportunidades de snippet',
      'Sugestões de resultados enriquecidos',
      'Notas de melhoria de estrutura',
      'Prioridade das vitórias rápidas',
      'Resumo pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Um guia prático que nunca lista os seus passos.',
        description:
          'O Morgan sugere uma estrutura numerada clara, para que os passos possam ser lidos de relance e tenham hipótese de ser destacados.',
      },
      {
        title: 'Uma página de perguntas frequentes com as respostas escondidas em prosa.',
        description:
          'Ele aponta onde respostas curtas e diretas ajudariam tanto os leitores como a página de resultados.',
      },
      {
        title: 'Um guia sólido com uma descrição plana.',
        description:
          'O Morgan assinala os elementos de snippet que estão a prejudicar a página e encaminha-os para a Nadia redigir de novo.',
      },
      {
        title: 'Uma página que poderia conquistar um resultado enriquecido.',
        description:
          'Ele regista quais os tipos de resultado estruturado que genuinamente se adequam e encaminha o trabalho de schema para a Sofia, sem prometer que a Google o vai conceder.',
      },
      {
        title: 'A comparar duas páginas a competir pela mesma pesquisa.',
        description:
          'O Morgan analisa a forma como cada uma tende a aparecer e assinala qual a estrutura que melhor serve o leitor.',
      },
      {
        title: 'A resposta a uma pergunta de um leitor enterrada três parágrafos abaixo.',
        description:
          'Ele recomenda começar pela resposta, para que a página seja útil de imediato, na própria página e na pesquisa.',
      },
    ],
    boundaryH2: 'O Morgan revê a oportunidade. Quem decide continua a ser a pesquisa.',
    boundaryPara:
      'Nenhuma ferramenta controla o que um motor de pesquisa mostra. O Morgan revê e recomenda, e tem o cuidado de nunca prometer um snippet, uma posição ou tráfego. Todas as sugestões ficam para uma pessoa ponderar e aprovar.',
    boundaryChecklist: [
      'O Morgan revê snippets, nunca garante um.',
      'As recomendações são mostradas para um editor aprovar.',
      'Oportunidades que precisam de schema ou evidência são assinaladas.',
      'O Morgan apoia o redator, não substitui o seu critério.',
    ],
    willNot: [
      { color: 'red', text: 'Garantir um featured snippet' },
      { color: 'red', text: 'Prometer posições ou tráfego' },
      { color: 'amber', text: 'Forçar uma estrutura que prejudique a leitura' },
    ],
    relatedH2: 'Workers com quem o Morgan trabalha.',
    relatedWorkerIds: [
      {
        id: 'seo_metadata',
        description: 'Redige o título e a descrição que moldam o snippet.',
        outputLabel: 'Metadados redigidos',
        ctaLabel: 'Como a Nadia redige',
      },
      {
        id: 'schema',
        description: 'Revê os dados estruturados de que os resultados enriquecidos dependem.',
        outputLabel: 'Revisão de schema',
        ctaLabel: 'Como a Sofia revê',
      },
      {
        id: 'content_analyst',
        description: 'Avalia o conteúdo subjacente de onde o snippet é retirado.',
        outputLabel: 'Análise de conteúdo',
        ctaLabel: 'Como o Omar revê',
      },
    ],
    ctaH2: 'Molde a forma como a página aparece na pesquisa.',
    ctaPara:
      'Junte o Morgan ao seu fluxo de trabalho e cada página chega à revisão com as suas oportunidades de snippet assinaladas, com honestidade e prontas a usar.',
    guidanceFooterLabel: 'SNIPPET',
    guidanceFooterValue: 'Revisto · oportunidades assinaladas',
  },

  schema: {
    seoTitle: 'Worker de Schema | WordPresto',
    metaDescription:
      'A Sofia revê os dados estruturados de uma página e recomenda os tipos de schema que correspondem ao que a página realmente é, para revisão humana. Sem campos inventados, sem marcação falsa.',
    h1: 'Descreva a página para as máquinas também a compreenderem.',
    heroPara1:
      'Os dados estruturados dizem aos motores de pesquisa o que uma página realmente é: um artigo, um produto, um guia, uma empresa. A Sofia revê o schema já presente, avalia o que a página realmente representa e recomenda os tipos que se adequam, para que a marcação descreva a página com honestidade.',
    heroPara2:
      'Para equipas que querem dados estruturados que reflitam o conteúdo, e não uma pilha de marcação copiada entre modelos.',
    problemEyebrow: 'Onde a marcação se afasta da página',
    problemH2: 'Os dados estruturados só ajudam quando dizem a verdade.',
    problemPara:
      'O schema é fácil de copiar e difícil de manter honesto. As páginas herdam marcação de um modelo, descrevem-se como algo que não são, ou não têm quaisquer dados estruturados. A Sofia revê o que existe face ao que a página realmente é e recomenda tipos que correspondam.',
    problemAnnotation: '↘ marcada como produto, lê-se como artigo',
    beforeStamp: 'Desalinhado',
    beforeHtml: `<p><span class="ba-strike">@type: Product</span> numa página que é claramente um guia passo a passo, com <span class="ba-strike">nenhuma marcação Article ou HowTo</span> em lado nenhum.</p>`,
    beforeTags: ['Tipo errado', 'Marcação herdada', 'Não descreve nada'],
    beforeNote: 'isto não é uma página de produto',
    afterStamp: 'Alinhado',
    afterHtml: `<p><span class="ba-hl">@type: HowTo</span> com contexto de artigo, recomendado porque a página é um guia passo a passo. <span class="ba-hl">Sugerido para revisão.</span></p>`,
    afterTags: ['Tipo adequado à página', 'Marcação honesta', 'Para aprovação'],
    afterNote: 'agora a marcação corresponde à realidade',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um revisor que faz corresponder o schema ao que a página realmente é.',
    helpsPara:
      'A Sofia reporta os dados estruturados que deteta, avalia o tipo aparente da página e recomenda o schema adequado. Nunca inventa campos nem marca uma página como algo que não é.',
    checks: [
      'Os dados estruturados já presentes na página',
      'Se os tipos detetados correspondem ao conteúdo',
      'Schema em falta que a página poderia usar com honestidade',
    ],
    improves: [
      'Recomendações de tipo que se adequam à página',
      'Marcação que reflete o conteúdo real',
      'Clareza sobre para que serve cada tipo',
    ],
    prepares: [
      'Uma revisão de schema com os tipos detetados',
      'Tipos recomendados para aprovação',
      'Notas sobre porque é que cada tipo se adequa',
    ],
    surfaces: [
      'Marcação que afirma mais do que a página oferece',
      'Campos que precisariam de dados reais para preencher',
      'Casos em que uma pessoa deve decidir o tipo',
    ],
    ioH2: 'De onde parte a Sofia e o que produz.',
    worksFrom: [
      'Dados estruturados existentes',
      'Conteúdo e títulos da página',
      'Tipo aparente da página',
      'Contexto da empresa ou organização',
      'Revisão técnica, quando disponível',
    ],
    produces: [
      'Relatório de schema detetado',
      'Tipos de schema recomendados',
      'Justificação para cada recomendação',
      'Notas sobre campos que precisam de dados reais',
      'Resumo de schema pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Um guia com marcação de produto herdada de um modelo.',
        description:
          'A Sofia assinala a incompatibilidade e recomenda os tipos de artigo ou guia prático que realmente descrevem a página.',
      },
      {
        title: 'Uma página sem quaisquer dados estruturados.',
        description:
          'Ela avalia o que a página é e recomenda um conjunto inicial sensato, para uma pessoa aprovar.',
      },
      {
        title: 'Uma página de empresa sem os detalhes da organização.',
        description:
          'A Sofia aponta o schema que descreveria a organização, sem inventar factos para o preencher.',
      },
      {
        title: 'Uma página de perguntas frequentes que poderia usar marcação FAQ.',
        description:
          'Ela regista a oportunidade e encaminha as implicações de snippet para o Morgan, deixando a decisão ao editor.',
      },
      {
        title: 'Schema copiado por toda uma secção do site.',
        description:
          'A Sofia revê onde a marcação herdada já não se adequa às páginas individuais em que assenta.',
      },
      {
        title: 'Uma página com muitas afirmações num setor regulado.',
        description:
          'Ela assinala marcação que afirmaria mais do que a página consegue sustentar e deixa-a para revisão humana.',
      },
    ],
    boundaryH2: 'A Sofia recomenda o schema. As pessoas aprovam a marcação.',
    boundaryPara:
      'Os dados estruturados são uma declaração sobre a página. A Sofia revê e recomenda, mas nunca escreve marcação falsa, inventa campos ou marca uma página como algo que não é. As recomendações passam por aprovação humana antes de ser aplicadas.',
    boundaryChecklist: [
      'A Sofia recomenda schema, nunca falsifica marcação.',
      'Os tipos detetados e as recomendações são mostrados para revisão.',
      'Os campos que precisam de dados reais são assinalados, não preenchidos.',
      'A Sofia apoia a equipa, não substitui o seu critério.',
    ],
    willNot: [
      { color: 'red', text: 'Escrever marcação falsa ou inventada' },
      { color: 'red', text: 'Marcar uma página como o que não é' },
      { color: 'amber', text: 'Preencher campos sem dados reais' },
    ],
    relatedH2: 'Workers com quem a Sofia trabalha.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Liga as oportunidades de schema à forma como a página aparece nos resultados.',
        outputLabel: 'Revisão de snippet',
        ctaLabel: 'Como o Morgan revê',
      },
      {
        id: 'technical_health',
        description: 'Verifica os sinais técnicos mais amplos de que a página depende.',
        outputLabel: 'Conclusões técnicas',
        ctaLabel: 'Como a Maya revê',
      },
      {
        id: 'seo_metadata',
        description: 'Redige o título e a descrição que acompanham a marcação.',
        outputLabel: 'Metadados redigidos',
        ctaLabel: 'Como a Nadia redige',
      },
    ],
    ctaH2: 'Descreva a página para as máquinas também a compreenderem.',
    ctaPara:
      'Junte a Sofia ao seu fluxo de trabalho e cada página chega à revisão com dados estruturados que correspondem ao que realmente é.',
    guidanceFooterLabel: 'SCHEMA',
    guidanceFooterValue: 'Revisto · tipos recomendados',
  },

  technical_health: {
    seoTitle: 'Worker de Saúde Técnica | WordPresto',
    metaDescription:
      'A Maya verifica os sinais técnicos por trás de uma página, metadados, títulos, indexabilidade e estrutura, e reporta o que precisa de uma análise mais atenta. Baseado em normas e apenas de revisão.',
    h1: 'Verifique os sinais técnicos por trás da página.',
    heroPara1:
      'Um bom texto ainda pode ser prejudicado por problemas técnicos silenciosos: um título em falta, uma ordem de títulos partida, uma página que não pode ser indexada. A Maya revê esses sinais face a normas estabelecidas e reporta as conclusões por categoria, para que nada de técnico fique ao acaso.',
    heroPara2:
      'Para editores e equipas de website que querem uma leitura clara, baseada em normas, de uma página antes de ir ao ar.',
    problemEyebrow: 'Onde um bom conteúdo tem um desempenho aquém do esperado, em silêncio',
    problemH2: 'Uma página forte pode ser prejudicada por sinais que ninguém verificou.',
    problemPara:
      'Os problemas técnicos raramente se anunciam. Uma página com um meta title em falta, títulos que saltam níveis, ou um noindex acidental pode ler-se na perfeição enquanto tem um desempenho fraco em silêncio. A Maya revê estes sinais face a normas e reporta o que precisa de atenção, em linguagem simples.',
    problemAnnotation: '↘ lê-se bem, está definida como noindex',
    beforeStamp: 'Não verificado',
    beforeHtml: `<p>Ordem dos títulos: <span class="ba-strike">H1 → H3 → H3</span>. Meta title: <span class="ba-strike">em falta</span>. Indexável: <span class="ba-strike">não (noindex definido)</span>.</p>`,
    beforeTags: ['Título saltado', 'Sem título', 'Não indexável'],
    beforeNote: 'isto nunca vai ser encontrado',
    afterStamp: 'Revisto',
    afterHtml: `<p>Ordem dos títulos: <span class="ba-hl">H1 → H2 → H3</span>. Meta title: <span class="ba-hl">presente e revisto</span>. Indexável: <span class="ba-hl">sim</span>. Assinalado para correção antes de publicar.</p>`,
    afterTags: ['Hierarquia limpa', 'Título presente', 'Indexável'],
    afterNote: 'agora o básico está garantido',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um revisor técnico que reporta conclusões, não ruído.',
    helpsPara:
      'A Maya faz verificações técnicas baseadas em normas e agrupa o que encontra em categorias claras com pontuações, para que uma pessoa veja o que importa e decida o que corrigir. Ela revê, não altera a página.',
    checks: [
      'Metadados, títulos e indexabilidade',
      'Estrutura da página e sinais técnicos',
      'Presença de schema e princípios básicos de acessibilidade',
    ],
    improves: [
      'Uma leitura clara da saúde técnica',
      'Conclusões agrupadas por categoria',
      'Uma ordem sensata para resolver as coisas',
    ],
    prepares: [
      'Conclusões técnicas baseadas em normas',
      'Pontuações por categoria para a página',
      'Notas sobre o que verificar antes de publicar',
    ],
    surfaces: [
      'Problemas que precisam de um programador para resolver',
      'Conclusões que precisam de uma decisão humana',
      'Sinais que uma única página não consegue confirmar sozinha',
    ],
    ioH2: 'De onde parte a Maya e o que produz.',
    worksFrom: [
      'Metadados e títulos da página',
      'Sinais de indexabilidade',
      'Estrutura da página e secções de conteúdo',
      'Presença de schema',
      'Sinais de acessibilidade e técnicos',
    ],
    produces: [
      'Conclusões de saúde técnica',
      'Pontuações por categoria',
      'Problemas priorizados para revisão',
      'Notas para programadores, quando necessário',
      'Resumo técnico pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Uma página acidentalmente definida como noindex.',
        description:
          'A Maya assinala-a antes de publicar, para que uma página destinada a ser encontrada não fique escondida da pesquisa em silêncio.',
      },
      {
        title: 'Títulos que saltam de H1 para H3.',
        description:
          'Ela reporta a hierarquia partida, para que a estrutura se leia de forma limpa para leitores, tecnologia de apoio e pesquisa.',
      },
      {
        title: 'Um novo modelo antes de ir ao ar.',
        description:
          'A Maya revê os sinais técnicos numa página de amostra, para que os problemas sejam detetados uma vez, e não em todas as páginas mais tarde.',
      },
      {
        title: 'Uma atualização de conteúdo que mexeu na marcação.',
        description:
          'Ela verifica se os títulos, cabeçalhos e a indexabilidade continuam corretos depois da edição.',
      },
      {
        title: 'Uma página que se lê bem mas posiciona-se mal.',
        description:
          'A Maya assinala os sinais técnicos que podem estar a travá-la, para uma pessoa investigar.',
      },
      {
        title: 'A entrega de uma lista de correções a um programador.',
        description:
          'Ela agrupa as conclusões por categoria e prioridade, para que o trabalho técnico fique claro e delimitado.',
      },
    ],
    boundaryH2: 'A Maya reporta as conclusões. As pessoas decidem as correções.',
    boundaryPara:
      'Uma revisão técnica é informação, não uma instrução. A Maya verifica e reporta, mas não edita a página, não altera definições nem publica nada ao vivo. As suas conclusões são para uma pessoa agir.',
    boundaryChecklist: [
      'A Maya revê a página, nunca a edita.',
      'As conclusões são reportadas para uma pessoa agir.',
      'Os problemas que precisam de um programador são claramente assinalados.',
      'A Maya apoia a equipa, não substitui o seu critério.',
    ],
    willNot: [
      { color: 'red', text: 'Editar a página ou alterar definições' },
      { color: 'red', text: 'Publicar ou colocar algo ao vivo' },
      { color: 'amber', text: 'Reclamar uma correção sem revisão humana' },
    ],
    relatedH2: 'Workers com quem a Maya trabalha.',
    relatedWorkerIds: [
      {
        id: 'schema',
        description: 'Revê os dados estruturados entre os sinais técnicos.',
        outputLabel: 'Revisão de schema',
        ctaLabel: 'Como a Sofia revê',
      },
      {
        id: 'seo_metadata',
        description: 'Redige os metadados que a Maya verifica quanto a presença e qualidade.',
        outputLabel: 'Metadados redigidos',
        ctaLabel: 'Como a Nadia redige',
      },
      {
        id: 'trust_author_credibility',
        description: 'Revê os sinais de confiança que acompanham a saúde técnica.',
        outputLabel: 'Revisão de confiança',
        ctaLabel: 'Como o Alex revê',
      },
    ],
    ctaH2: 'Verifique os sinais técnicos por trás da página.',
    ctaPara:
      'Junte a Maya ao seu fluxo de trabalho e cada página chega à revisão com os seus sinais técnicos verificados face a normas.',
    guidanceFooterLabel: 'TÉCNICO',
    guidanceFooterValue: 'Revisto · conclusões registadas',
  },

  trust_author_credibility: {
    seoTitle: 'Worker de Confiança e Credibilidade do Autor | WordPresto',
    metaDescription:
      'O Alex revê os sinais de confiança, autoria e credibilidade em torno de uma página, para que leitores e motores de pesquisa possam ver quem está por trás do conteúdo. Apenas revisão, nunca inventado.',
    h1: 'Mostre quem está por trás do conteúdo.',
    heroPara1:
      'Em temas que afetam dinheiro, saúde ou decisões importantes, leitores e motores de pesquisa querem saber quem escreveu isto e porque merece confiança. O Alex revê o contexto do autor, a identidade da organização, o suporte de evidência e os sinais de credibilidade em torno de uma página, e reporta onde a confiança é clara e onde está em falta.',
    heroPara2:
      'Para equipas que publicam conteúdo de aconselhamento ou de risco mais elevado e querem que a sua credibilidade seja visível, não presumida.',
    problemEyebrow: 'Onde a credibilidade fica por dizer',
    problemH2: 'Um bom conselho de ninguém em particular é difícil de confiar.',
    problemPara:
      'Muito conteúdo genuinamente especializado é publicado sem autor visível, sem contexto de organização e sem sinal de quem o reviu. A especialização é real, mas o leitor não a consegue ver, e a pesquisa também não. O Alex revê os sinais que tornam a credibilidade visível.',
    problemAnnotation: '↘ conselho de especialista, sem autor identificado',
    beforeStamp: 'Sem atribuição',
    beforeHtml: `<p>Orientação médica publicada <span class="ba-strike">sem assinatura de autor</span>, <span class="ba-strike">sem revisor</span> e <span class="ba-strike">sem contexto de organização</span>.</p>`,
    beforeTags: ['Sem autor', 'Sem revisão', 'Tema de risco elevado'],
    beforeNote: 'quem me está a dizer isto?',
    afterStamp: 'Atribuído',
    afterHtml: `<p>A mesma orientação com um <span class="ba-hl">autor identificado e as suas credenciais</span>, <span class="ba-hl">um revisor</span> e <span class="ba-hl">contexto de organização claro</span>. Assinalado para validação.</p>`,
    afterTags: ['Autor identificado', 'Revisto por', 'Responsabilidade clara'],
    afterNote: 'agora a confiança é visível',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um revisor que verifica se a confiança está realmente visível.',
    helpsPara:
      'O Alex revê a autoria, a titularidade da organização, o suporte de evidência e os sinais de credibilidade, devolve uma leitura de prontidão e assinala o que precisa de um olhar humano, especialmente em temas sensíveis. Ele reporta sinais, nunca inventa credenciais.',
    checks: [
      'Assinatura, biografia e credenciais do autor',
      'Titularidade e contexto da organização',
      'Suporte de evidência e sinais de revisão',
    ],
    improves: [
      'Uma leitura clara da prontidão de confiança',
      'Lacunas na autoria tornadas visíveis',
      'Onde a credibilidade poderia ser mostrada melhor',
    ],
    prepares: [
      'Uma revisão de confiança e credibilidade',
      'Uma leitura de prontidão para a página',
      'Notas sobre o risco de temas sensíveis',
    ],
    surfaces: [
      'Afirmações de risco elevado que precisam de mostrar especialização',
      'Contexto de autor ou revisor em falta',
      'Decisões de credibilidade para uma pessoa tomar',
    ],
    ioH2: 'De onde parte o Alex e o que produz.',
    worksFrom: [
      'Contexto e assinatura do autor',
      'Sinais de organização e titularidade',
      'Suporte de evidência na página',
      'Sensibilidade do tema (aconselhamento, saúde, dinheiro)',
      'Sinais de credibilidade no schema',
    ],
    produces: [
      'Revisão de confiança e credibilidade',
      'Uma leitura de prontidão de confiança',
      'Notas sobre lacunas de autoria',
      'Sinalizações de risco em temas sensíveis',
      'Resumo de confiança pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Conselhos de saúde ou finanças sem autor identificado.',
        description:
          'O Alex assinala a autoria em falta, para que uma pessoa real e qualificada possa ser creditada antes de a página ir ao ar.',
      },
      {
        title: 'Uma organização respeitada que nunca o diz.',
        description:
          'Ele aponta onde o contexto e a titularidade da organização poderiam tornar visível a credibilidade já existente.',
      },
      {
        title: 'Uma página que devia mostrar um revisor.',
        description:
          'O Alex regista onde um sinal de revisto por tranquilizaria os leitores num tema de risco mais elevado.',
      },
      {
        title: 'Afirmações que se apoiam em especialização não demonstrada.',
        description:
          'Ele assinala onde a página presume uma autoridade que não demonstrou, e encaminha o trabalho de evidência para o Theo.',
      },
      {
        title: 'A preparar conteúdo para um setor regulado.',
        description:
          'O Alex revê os sinais de confiança em conjunto com a Vera, para que credibilidade e conformidade sejam consideradas em conjunto.',
      },
      {
        title: 'Um artigo de convidado de um autor desconhecido.',
        description:
          'Ele assinala o contexto de autor em falta, para que uma pessoa possa decidir como atribuir e assumir a responsabilidade.',
      },
    ],
    boundaryH2: 'O Alex revê os sinais de confiança. As pessoas assumem a responsabilidade pela página.',
    boundaryPara:
      'A credibilidade não pode ser fabricada. O Alex revê e reporta, mas nunca inventa um autor, fabrica credenciais ou afirma uma revisão que não aconteceu. O que ele assinala é para uma pessoa agir com honestidade.',
    boundaryChecklist: [
      'O Alex revê os sinais de confiança, nunca os inventa.',
      'As lacunas de autoria são assinaladas para uma pessoa preencher.',
      'Os riscos de temas sensíveis são assinalados para revisão humana.',
      'O Alex apoia a equipa, não substitui o seu critério.',
    ],
    willNot: [
      { color: 'red', text: 'Inventar autores ou credenciais' },
      { color: 'red', text: 'Afirmar uma revisão que não aconteceu' },
      { color: 'amber', text: 'Presumir uma autoridade que a página não demonstrou' },
    ],
    relatedH2: 'Workers com quem o Alex trabalha.',
    relatedWorkerIds: [
      {
        id: 'evidence_gap',
        description: 'Transforma evidência fraca ou em falta numa checklist clara.',
        outputLabel: 'Checklist de evidência',
        ctaLabel: 'Como o Theo revê',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Assinala afirmações sem suporte e risco de conformidade antes da aprovação.',
        outputLabel: 'Relatório de risco e conformidade',
        ctaLabel: 'Como a Vera revê',
      },
      {
        id: 'schema',
        description: 'Revê os dados estruturados que transportam os sinais de credibilidade.',
        outputLabel: 'Revisão de schema',
        ctaLabel: 'Como a Sofia revê',
      },
    ],
    ctaH2: 'Mostre quem está por trás do conteúdo.',
    ctaPara:
      'Junte o Alex ao seu fluxo de trabalho e cada página chega à revisão com os seus sinais de confiança e autoria verificados e visíveis.',
    guidanceFooterLabel: 'CONFIANÇA',
    guidanceFooterValue: 'Revisto · sinais verificados',
  },

  evidence_gap: {
    seoTitle: 'Worker de Lacunas de Evidência | WordPresto',
    metaDescription:
      'O Theo transforma evidência fraca ou em falta numa checklist clara, para que as afirmações sejam sustentadas antes de uma página ser aprovada ou integrada. O que comprovar, onde procurar, o que reter.',
    h1: 'Sustente as afirmações antes de irem ao ar.',
    heroPara1:
      'O conteúdo está cheio de afirmações: números, comparações, declarações de facto. Umas são sólidas, outras são suposições, e algumas não deviam ser publicadas antes de serem verificadas. O Theo reúne os avisos de evidência levantados ao longo do fluxo de trabalho e transforma-os numa única checklist prática do que sustentar, onde procurar e o que reter.',
    heroPara2:
      'Para editores e revisores que querem afirmações sustentadas antes da aprovação, não depois de um leitor, ou um regulador, reparar.',
    problemEyebrow: 'Onde as afirmações ultrapassam a prova',
    problemH2: 'As afirmações mais arriscadas raramente são as que parecem arriscadas.',
    problemPara:
      'Uma frase segura lê-se como um facto, quer haja algo a sustentá-la ou não. Ao longo de um rascunho, números sem suporte e comparações que soam bem escapam porque ninguém está a acompanhar qual a afirmação que precisa de uma fonte. O Theo consolida essas lacunas numa única checklist, para que nada assente numa suposição que ninguém verificou.',
    problemAnnotation: '↘ um número preciso, sem fonte',
    beforeStamp: 'Sem suporte',
    beforeHtml: `<p>O nosso método está <span class="ba-strike">comprovadamente reduz o tempo de revisão em 40%</span> e é <span class="ba-strike">o mais preciso do mercado</span>.</p>`,
    beforeTags: ['Sem fonte', 'Afirmação superlativa', 'Precisa de evidência'],
    beforeNote: 'de onde vêm esses 40%?',
    afterStamp: 'Verificado',
    afterHtml: `<p>Assinalado: <span class="ba-hl">"40%" precisa de uma fonte ou de ser removido</span>. <span class="ba-hl">"O mais preciso" precisa de prova ou de ser reformulado.</span> Sugerida redação provisória segura.</p>`,
    afterTags: ['Fonte necessária', 'Reformular ou comprovar', 'Para revisão'],
    afterNote: 'agora nada é publicado com base numa suposição',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma checklist que transforma uma preocupação vaga em ações específicas.',
    helpsPara:
      'O Theo consolida os avisos de evidência numa checklist estruturada: o que precisa de suporte, uma fonte sugerida, o nível de risco, se deve bloquear a aprovação e uma redação provisória segura. O trabalho de sustentar uma afirmação continua a ser das pessoas.',
    checks: [
      'Afirmações sem fonte',
      'Números e comparações que precisam de prova',
      'Declarações que podem exagerar o caso',
    ],
    improves: [
      'Preocupações vagas transformadas em ações claras',
      'Uma visão única de todas as lacunas de evidência',
      'Prioridade e risco em cada item',
    ],
    prepares: [
      'Uma checklist de evidência para a página',
      'Fontes sugeridas para procurar',
      'Redação provisória segura, quando útil',
    ],
    surfaces: [
      'Afirmações que deveriam bloquear a aprovação',
      'Declarações de alto risco para uma pessoa ponderar',
      'Fontes que precisam de ser verificadas por uma pessoa',
    ],
    ioH2: 'De onde parte o Theo e o que produz.',
    worksFrom: [
      'Avisos de evidência do fluxo de trabalho',
      'Afirmações e números no rascunho',
      'Sensibilidade e risco do tema',
      'Fontes já presentes na página',
      'Notas de revisão e conformidade',
    ],
    produces: [
      'Uma checklist de evidência consolidada',
      'Itens que exigem evidência',
      'Fontes sugeridas e níveis de risco',
      'Sinalizações de bloqueio à aprovação',
      'Redação provisória segura',
    ],
    scenarios: [
      {
        title: 'Uma estatística precisa sem citação.',
        description:
          'O Theo assinala o número, marca-o como precisando de uma fonte e sugere uma redação segura até uma ser encontrada.',
      },
      {
        title: 'Um superlativo que a página não consegue provar.',
        description:
          'Ele assinala "o melhor" ou "o mais preciso" como afirmações que precisam de evidência ou de reescrita antes da aprovação.',
      },
      {
        title: 'Um rascunho cheio de afirmações seguras.',
        description:
          'O Theo reúne todas as afirmações sem suporte numa única checklist, para que um revisor não tenha de as caçar linha a linha.',
      },
      {
        title: 'Um tema regulado próximo da validação.',
        description:
          'Ele marca as afirmações que devem bloquear a aprovação até serem devidamente sustentadas, e passa o risco à Vera.',
      },
      {
        title: 'A preparar uma página para integração.',
        description:
          'O Theo confirma que a checklist de evidência está clara antes de a Audrey reunir o relatório de aprovação.',
      },
      {
        title: 'Uma afirmação que se apoia numa especialização não demonstrada.',
        description:
          'Ele coordena com o Alex, para que autoridade e evidência sejam ambas mostradas, e não presumidas.',
      },
    ],
    boundaryH2: 'O Theo encontra as lacunas. As pessoas fornecem a prova.',
    boundaryPara:
      'A evidência é uma responsabilidade humana. O Theo identifica o que precisa de suporte e quão arriscada é cada lacuna, mas não inventa fontes, não fabrica números nem aprova uma afirmação. Preencher e verificar a evidência continua a ser das pessoas.',
    boundaryChecklist: [
      'O Theo encontra lacunas, nunca inventa evidência.',
      'Todos os itens são mostrados para uma pessoa resolver.',
      'As afirmações que devem bloquear a aprovação são assinaladas.',
      'O Theo apoia o revisor, não substitui o seu critério.',
    ],
    willNot: [
      { color: 'red', text: 'Inventar fontes ou números' },
      { color: 'red', text: 'Aprovar uma afirmação sem suporte' },
      { color: 'amber', text: 'Deixar passar uma declaração de alto risco' },
    ],
    relatedH2: 'Workers com quem o Theo trabalha.',
    relatedWorkerIds: [
      {
        id: 'trust_author_credibility',
        description: 'Revê se a autoridade por trás das afirmações é visível.',
        outputLabel: 'Revisão de confiança',
        ctaLabel: 'Como o Alex revê',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Assinala afirmações sem suporte e risco de conformidade antes da aprovação.',
        outputLabel: 'Relatório de risco e conformidade',
        ctaLabel: 'Como a Vera revê',
      },
      {
        id: 'approval_report',
        description: 'Integra a checklist de evidência na decisão de aprovação.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como a Audrey aprova',
      },
    ],
    ctaH2: 'Sustente as afirmações antes de irem ao ar.',
    ctaPara:
      'Junte o Theo ao seu fluxo de trabalho e cada página chega à revisão com as suas lacunas de evidência reunidas numa checklist clara.',
    guidanceFooterLabel: 'EVIDÊNCIA',
    guidanceFooterValue: 'Verificado · lacunas listadas',
  },
};
