import type { WorkerProfileTranslatable } from './types';

export const ptBrBatch2: Record<string, WorkerProfileTranslatable> = {
  cms_handoff: {
    seoTitle: 'Worker de Handoff para CMS | WordPresto',
    metaDescription:
      'Ravi empacota o conteúdo aprovado com a estrutura, os metadados e as notas necessárias para um handoff limpo a um CMS, site ou cliente. Para times que precisam de um pacote de conteúdo pronto para publicação.',
    h1: 'Prepare o conteúdo aprovado para um handoff mais limpo.',
    heroPara1:
      'Conteúdo aprovado que chega ao CMS sem os metadados certos, sem orientação de formatação e sem notas cria trabalho justamente no ponto em que deveria ser simples. Ravi pega o rascunho aprovado e produz um pacote de publicação completo: conteúdo, metadados, notas de formatação, campos do CMS. O handoff sai limpo desde a primeira vez.',
    heroPara2:
      'Para times de conteúdo que fazem handoff para desenvolvedores, editores de CMS ou clientes que administram sua própria publicação.',
    problemEyebrow: 'Onde o handoff cria trabalho extra',
    problemH2: 'Um handoff malfeito custa mais tempo do que um rascunho malfeito.',
    problemPara:
      'Um conteúdo que chega a um editor de CMS ou desenvolvedor sem metadados adequados, notas de formatação ou orientação de campos acaba publicado com erros, ou volta para pedir informações. A etapa de handoff é barata quando feita certo e cara quando feita errado.',
    problemAnnotation: '↘ handoff certo da primeira vez',
    beforeStamp: 'Não empacotado',
    beforeHtml: `<p><span class="ba-strike">Aqui está o conteúdo aprovado</span> num documento do Word. A <span class="ba-strike">meta description deve estar em algum lugar aí</span>, acho eu. Avisa se <span class="ba-strike">precisar de mais alguma coisa</span>. As <span class="ba-strike">imagens estão na minha pasta de Downloads</span>.</p>`,
    beforeTags: ['Incompleto', 'Sem metadados', 'Editor do CMS no escuro'],
    beforeNote: 'isso vai levar mais duas rodadas para resolver',
    afterStamp: 'Empacotado',
    afterHtml: `<p>Conteúdo, meta title, meta description, texto alternativo, slug da URL, nomes dos arquivos de imagem e notas dos campos do CMS, tudo <span class="ba-hl">empacotado em um único documento de handoff</span>, pronto para o editor do CMS publicar.</p>`,
    afterTags: ['Completo', 'Pronto para o CMS', 'Sem idas e vindas'],
    afterNote: 'isso pode ser publicado assim que chega',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um pacote de publicação que editores de CMS e desenvolvedores conseguem usar na hora.',
    helpsPara:
      'Ravi produz o pacote de handoff completo que transforma conteúdo aprovado em conteúdo publicável. Campos de meta, orientação de formatação, slug da URL, notas de imagem: tudo o que é necessário para uma primeira publicação limpa.',
    checks: [
      'Se todos os campos de metadados obrigatórios estão preenchidos',
      'Se a formatação está correta para o CMS de destino',
      'Se as imagens e os recursos estão referenciados corretamente',
    ],
    improves: [
      'A integridade do handoff, para que editores de CMS publiquem sem precisar perguntar nada',
      'A qualidade dos metadados, para que os campos de SEO e acessibilidade fiquem corretos',
      'A consistência da publicação em todo o programa de conteúdo',
    ],
    prepares: [
      'Um pacote de handoff completo',
      'Notas de campos do CMS já preenchidas',
      'Orientação de formatação e de recursos',
    ],
    surfaces: [
      'Metadados ausentes que precisam da contribuição do redator ou do cliente',
      'Conteúdo que ainda não está pronto para o CMS, mesmo já aprovado',
      'Requisitos específicos do CMS que o conteúdo ainda não atende',
    ],
    ioH2: 'Do que Ravi parte, e o que ele produz.',
    worksFrom: [
      'Rascunho final aprovado',
      'Requisitos de campos do CMS',
      'Briefing de metadados',
      'Diretrizes de marca',
      'Referências de recursos e imagens',
    ],
    produces: [
      'Pacote de handoff completo',
      'Notas de campos do CMS preenchidas',
      'Orientação de URL e slug',
      'Notas de imagens e recursos',
      'Documento de conteúdo pronto para publicar',
    ],
    scenarios: [
      {
        title: 'Um programa de conteúdo fazendo handoff para um editor de WordPress.',
        description: 'Ravi produz um pacote de handoff que mapeia cada campo do template do editor.',
      },
      {
        title: 'Um site em Astro em que o conteúdo precisa ser estruturado para o frontmatter.',
        description:
          'Ele empacota o conteúdo no formato que o desenvolvedor precisa, incluindo todos os campos do frontmatter.',
      },
      {
        title: 'Um cliente que administra o próprio CMS mas acha o handoff confuso.',
        description:
          'Um documento de handoff claro e completo reduz os erros de publicação do cliente e os pedidos de suporte.',
      },
      {
        title: 'Um lote de 30 páginas aprovadas, todas precisando de metadados.',
        description: 'Ravi percorre o lote de forma consistente, para que cada página seja empacotada no mesmo padrão.',
      },
      {
        title: 'Um projeto de migração com conteúdo legado precisando ser reempacotado.',
        description: 'Ele atualiza os metadados e as notas de formatação para o novo CMS sem tocar no texto aprovado.',
      },
      {
        title: 'Um prazo de lançamento em que o editor do CMS tem uma hora para publicar.',
        description:
          'Um pacote de handoff completo significa que essa hora pode ser usada para publicar, não para correr atrás de informação que falta.',
      },
    ],
    boundaryH2: 'Ravi empacota. Times de publicação e editores decidem o que vai ao ar.',
    boundaryPara:
      'Um pacote de handoff é um documento pronto para publicação, não uma autorização para publicar. O que vai ao ar, quando e em que formato é uma decisão do time de publicação, do cliente ou do diretor editorial.',
    boundaryChecklist: [
      'Ravi empacota o conteúdo, nunca o publica.',
      'Os pacotes de handoff são estruturados para o time receptor conferir.',
      'Informação incompleta é sinalizada, nunca inventada.',
      'O handoff apoia a publicação, não a autoriza.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar conteúdo diretamente' },
      { color: 'red', text: 'Aprovar conteúdo para publicação' },
      { color: 'amber', text: 'Adivinhar metadados que faltam' },
    ],
    relatedH2: 'Workers com quem Ravi trabalha.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Confirma o que está aprovado antes de o empacotamento do handoff começar.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como Audrey aprova',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Faz a checagem de compliance e risco antes de o pacote de handoff ser produzido.',
        outputLabel: 'Relatório de risco e compliance',
        ctaLabel: 'Como Vera sinaliza riscos',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Faz a revisão final de qualidade antes do handoff.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como Quinn revisa',
      },
    ],
    ctaH2: 'Prepare o conteúdo aprovado para um handoff mais limpo.',
    ctaPara:
      'Adicione Ravi ao seu fluxo de trabalho e cada conteúdo aprovado chega ao CMS com tudo o que é necessário para publicá-lo sem complicação.',
    guidanceFooterLabel: 'STATUS DO HANDOFF',
    guidanceFooterValue: 'Pronto para revisão no CMS',
  },

  editorial_risk_claims: {
    seoTitle: 'Worker de Risco Editorial e Afirmações | WordPresto',
    metaDescription:
      'Vera sinaliza afirmações sem comprovação, declarações arriscadas e questões de compliance no conteúdo antes que ele seja aprovado ou publicado.',
    h1: 'Sinalize afirmações arriscadas antes que elas avancem.',
    heroPara1:
      'Conteúdo com afirmações sem comprovação, linguagem juridicamente arriscada ou problemas de compliance não falha no momento da publicação; ele falha no momento da reclamação, do questionamento ou da auditoria. Vera revisa o conteúdo em busca de afirmações que não podem ser comprovadas, declarações que geram responsabilidade legal e linguagem que precisa de aval do compliance.',
    heroPara2:
      'Para times de conteúdo em setores regulados, agências com obrigações de compliance e qualquer time que publica afirmações que precisam se sustentar.',
    problemEyebrow: 'Onde as afirmações viram problema',
    problemH2: 'Conteúdo arriscado parece ótimo até ser questionado.',
    problemPara:
      'Uma afirmação que não pode ser sustentada, uma comparação que sugere algo falso ou uma linguagem que cria responsabilidade legal parece idêntica a um bom texto até alguém questionar. Detectar isso antes da publicação não custa nada. Resolver depois, custa.',
    problemAnnotation: '↘ sinalize antes de publicar, não depois',
    beforeStamp: 'Não verificado',
    beforeHtml: `<p>Nossa plataforma é <span class="ba-strike">a solução mais segura</span> disponível. Nós <span class="ba-strike">garantimos</span> proteção completa de dados e nossos clientes <span class="ba-strike">sempre alcançam</span> resultados melhores. Somos <span class="ba-strike">líderes do setor</span> nesse mercado.</p>`,
    beforeTags: ['Superlativos sem comprovação', 'Garantias sem ressalva', 'Comparações sem evidência'],
    beforeNote: 'cada frase aqui é um risco',
    afterStamp: 'Revisado',
    afterHtml: `<p>Seção de segurança da plataforma: <span class="ba-hl">duas afirmações sinalizadas para comprovação</span>, um superlativo precisa ser qualificado ou removido, a linguagem de garantia precisa de revisão jurídica antes de este conteúdo poder ser aprovado.</p>`,
    afterTags: ['Sinalizações específicas', 'Comprovação indicada', 'Revisão jurídica indicada'],
    afterNote: 'os riscos ficam visíveis antes da aprovação',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma checagem de compliance que encontra riscos de afirmações antes que cheguem à publicação.',
    helpsPara:
      'Vera revisa o conteúdo em busca de afirmações e linguagem que criam risco, não para enfraquecer o texto, mas para garantir que o que for publicado possa ser sustentado.',
    checks: [
      'Afirmações sem comprovação ou sem ressalva',
      'Linguagem comparativa que sugere superioridade falsa',
      'Linguagem sensível a compliance em áreas reguladas',
    ],
    improves: [
      'A linguagem das afirmações, tornando-a específica e sustentável',
      'A visibilidade do risco, para que quem aprova tenha a informação necessária',
      'A documentação de compliance para fins de auditoria',
    ],
    prepares: [
      'Um relatório de risco e compliance',
      'Sinalizações específicas de afirmações com opções de evidência ou correção',
      'Notas de aval de compliance para a aprovação',
    ],
    surfaces: [
      'Afirmações que precisam de evidência de terceiros',
      'Linguagem que exige revisão jurídica',
      'Terminologia de setor regulado que precisa de aval especializado',
    ],
    ioH2: 'Do que Vera parte, e o que ela produz.',
    worksFrom: [
      'Conteúdo em rascunho ou aprovado',
      'Diretrizes de compliance',
      'Contexto regulatório específico do setor',
      'Evidências ou fontes das afirmações',
      'Notas de compliance anteriores',
    ],
    produces: [
      'Relatório de risco e compliance',
      'Afirmações sinalizadas com os requisitos de evidência',
      'Documentação de aval de compliance',
      'Opções de correção para a linguagem sinalizada',
      'Insumo de aprovação para Audrey',
    ],
    scenarios: [
      {
        title: 'Uma empresa de serviços financeiros publicando conteúdo sobre investimentos.',
        description: 'Vera aplica os padrões de compliance do setor ao rascunho antes de ele chegar ao time de compliance.',
      },
      {
        title: 'Uma marca de saúde fazendo afirmações sobre resultados.',
        description: 'Afirmações sobre resultados e eficácia são sinalizadas para exigir evidência clínica antes da aprovação.',
      },
      {
        title: 'Uma agência escrevendo conteúdo comparativo para um cliente.',
        description: 'Afirmações comparativas são revisadas quanto à comprovação antes de chegarem ao cliente.',
      },
      {
        title: 'Um lançamento de produto com afirmações ousadas de desempenho.',
        description:
          'Vera sinaliza quais afirmações precisam de evidência e quais precisam ser suavizadas antes de o texto do lançamento ir ao ar.',
      },
      {
        title: 'Uma atualização de conteúdo retomando páginas antigas com afirmações desatualizadas.',
        description: 'Ela identifica afirmações que já foram precisas, mas não se sustentam mais.',
      },
      {
        title: 'Uma marca B2B escrevendo sobre posição de mercado.',
        description:
          'Afirmações de liderança de mercado e superioridade são revisadas quanto à comprovação antes da publicação.',
      },
    ],
    boundaryH2: 'Vera sinaliza. Os times jurídico e de compliance decidem.',
    boundaryPara:
      'Um relatório de risco é um insumo para a revisão editorial e de compliance, não uma aprovação. Vera identifica riscos e os sinaliza com clareza. Se agir sobre eles, como agir e se o conteúdo pode avançar são decisões dos times jurídico, de compliance e editorial.',
    boundaryChecklist: [
      'Vera sinaliza riscos, nunca aprova ou libera conteúdo.',
      'Os relatórios de risco são estruturados para a revisão editorial e jurídica.',
      'As decisões de compliance são sinalizadas, não tomadas por ela.',
      'O relatório de risco apoia a aprovação editorial, não substitui a revisão jurídica.',
    ],
    willNot: [
      { color: 'red', text: 'Dar aval jurídico' },
      { color: 'red', text: 'Aprovar conteúdo com sinalizações de compliance não resolvidas' },
      { color: 'amber', text: 'Remover afirmações sem instrução explícita' },
    ],
    relatedH2: 'Workers com quem Vera trabalha.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Revisa a qualidade antes da checagem de compliance.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como Quinn revisa',
      },
      {
        id: 'approval_report',
        description: 'Inclui as sinalizações de compliance no relatório de aprovação.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como Audrey aprova',
      },
      {
        id: 'cms_handoff',
        description: 'Recebe a confirmação de aval antes de produzir o pacote de handoff.',
        outputLabel: 'Pacote de handoff',
        ctaLabel: 'Como Ravi faz o handoff',
      },
    ],
    ctaH2: 'Sinalize afirmações arriscadas antes que elas avancem.',
    ctaPara: 'Adicione Vera ao seu fluxo de trabalho e os problemas de compliance são identificados antes da publicação, não depois.',
    guidanceFooterLabel: 'REVISÃO DE RISCO',
    guidanceFooterValue: 'Precisa de checagem de evidência',
  },

  content_refresh_brief: {
    seoTitle: 'Worker de Briefing de Atualização de Conteúdo | WordPresto',
    metaDescription:
      'Iris produz um briefing estruturado para atualizar conteúdo existente: o que atualizar, o que cortar e o que acrescentar. Para times que atualizam páginas com direção clara em vez de achismo.',
    h1: 'Atualize o conteúdo com um motivo mais claro.',
    heroPara1:
      'Atualizar conteúdo sem um briefing é assim que você acaba com páginas reescritas três vezes que ainda não funcionam. Iris produz um briefing de atualização estruturado, cobrindo o que atualizar, o que cortar, o que acrescentar e por quê, para que cada atualização comece com uma direção clara, e não com uma revisão às cegas.',
    heroPara2:
      'Para programas de atualização de conteúdo, migrações de site com conteúdo existente e times que atualizam páginas para refletir mudanças no produto, no público ou no mercado.',
    problemEyebrow: 'Onde os projetos de atualização dão errado',
    problemH2: 'Atualizar sem um briefing só produz uma versão diferente do mesmo problema.',
    problemPara:
      'Uma atualização de conteúdo sem direção clara tende a fazer uma de duas coisas: atualizar o que é fácil de atualizar e deixar os problemas estruturais intactos, ou disparar uma reescrita completa quando uma edição leve seria suficiente. Um briefing de atualização define o escopo antes de o trabalho começar.',
    problemAnnotation: '↘ faça o briefing da atualização, depois execute',
    beforeStamp: 'Sem briefing',
    beforeHtml: `<p>Dá para <span class="ba-strike">atualizar essa página</span>? Ela está meio <span class="ba-strike">desatualizada</span>. Talvez <span class="ba-strike">atualizar parte do texto</span> e <span class="ba-strike">acrescentar umas coisas novas</span>. Só deixa <span class="ba-strike">melhor</span> no geral.</p>`,
    beforeTags: ['Sem escopo', 'Sem direção', 'Sem critério de sucesso'],
    beforeNote: 'isso vai gerar mudanças aleatórias',
    afterStamp: 'Briefado',
    afterHtml: `<p><span class="ba-hl">Atualizar: introdução e seção de provas</span>. Cortar: bloco de case (desatualizado). Acrescentar: seção sobre o recurso de produto do update do primeiro trimestre. Manter: estrutura e CTA. Justificativa incluída para cada decisão.</p>`,
    afterTags: ['Escopo claro', 'Mudanças específicas', 'Justificativa incluída'],
    afterNote: 'os redatores sabem exatamente o que fazer',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um briefing de atualização que define o escopo do trabalho antes de o redator tocar na página.',
    helpsPara:
      'Iris transforma um pedido de atualização em um briefing estruturado, com instruções específicas de atualizar, cortar e acrescentar, para que redatores e editores saibam exatamente para que serve a atualização e o que ela precisa alcançar.',
    checks: [
      'Se o propósito da página ainda está atual',
      'Se as seções existentes valem a pena manter',
      'Se o escopo da atualização é proporcional ao problema',
    ],
    improves: [
      'A direção da atualização, tornando-a específica em vez de vaga',
      'A definição do escopo, para que o briefing cubra mudança, não só atualização',
      'A eficiência do redator, ao remover a ambiguidade sobre o que fazer',
    ],
    prepares: [
      'Um briefing de atualização estruturado',
      'Um plano de seções para atualizar / cortar / acrescentar',
      'Notas de justificativa para o responsável pelo briefing',
    ],
    surfaces: [
      'Páginas que precisam de mudança estrutural, não só de uma atualização',
      'Pedidos de atualização sem justificativa clara',
      'Conteúdo que deveria ser aposentado em vez de atualizado',
    ],
    ioH2: 'Do que Iris parte, e o que ela produz.',
    worksFrom: [
      'Conteúdo existente da página',
      'Objetivos da atualização ou notas do gatilho',
      'Análise de conteúdo',
      'Atualizações de marca e produto',
      'Notas de mudança de público ou mercado',
    ],
    produces: [
      'Briefing de atualização estruturado',
      'Plano de seções para atualizar / cortar / acrescentar',
      'Notas de justificativa da atualização',
      'Briefing de handoff para o redator',
      'Escopo e critérios de sucesso',
    ],
    scenarios: [
      {
        title: 'Uma página de produto que precisa ser atualizada depois de um rebranding.',
        description: 'Iris mapeia o que precisa mudar em relação à nova direção de marca e produz um briefing de atualização específico.',
      },
      {
        title: 'Um programa de conteúdo atualizando 50 páginas no primeiro trimestre.',
        description: 'Ela faz o briefing de cada atualização de forma consistente, para que os redatores não precisem reinventar o escopo a cada página.',
      },
      {
        title: 'Um site que cresceu organicamente e tem páginas inconsistentes.',
        description: 'Os briefings de atualização criam um padrão consistente para cada tipo de página.',
      },
      {
        title: 'Um arquivo de blog com posts desatualizados que ainda geram tráfego.',
        description: 'Iris faz o briefing de uma atualização direcionada que melhora a precisão sem remover o que os leitores achavam útil.',
      },
      {
        title: 'Um novo recurso de produto que precisa ser adicionado a páginas existentes.',
        description: 'Ela define quais páginas precisam de atualização, o que acrescentar e onde isso se encaixa.',
      },
      {
        title: 'Um cliente que fica pedindo pequenas mudanças nas mesmas páginas.',
        description: 'Um briefing de atualização adequado resolve os problemas de fundo em vez de remendá-los página por página.',
      },
    ],
    boundaryH2: 'Iris faz o briefing da atualização. Redatores e editores fazem as mudanças.',
    boundaryPara:
      'Um briefing de atualização é um documento de escopo, não um conjunto de mudanças aprovadas. Iris mapeia o que precisa acontecer; se avançar, e como, é uma decisão editorial e do cliente.',
    boundaryChecklist: [
      'Iris faz o briefing da atualização, nunca faz as mudanças.',
      'Os briefings de atualização são estruturados para a revisão de redatores e editores.',
      'Páginas recomendadas para aposentadoria são sinalizadas, não removidas.',
      'O briefing de atualização apoia o escopo editorial, não o define unilateralmente.',
    ],
    willNot: [
      { color: 'red', text: 'Editar ou reescrever páginas diretamente' },
      { color: 'red', text: 'Aposentar ou remover conteúdo' },
      { color: 'amber', text: 'Ampliar o escopo da atualização sem aprovação editorial' },
    ],
    relatedH2: 'Workers com quem Iris trabalha.',
    relatedWorkerIds: [
      {
        id: 'content_analyst',
        description: 'Fornece a análise que embasa o briefing de atualização.',
        outputLabel: 'Análise de conteúdo',
        ctaLabel: 'Como Omar analisa',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Confere o rascunho da atualização em relação ao briefing.',
        outputLabel: 'Relatório de alinhamento',
        ctaLabel: 'Como Ada confere',
      },
      {
        id: 'draft_rewrite',
        description: 'Reescreve as seções sinalizadas no briefing de atualização.',
        outputLabel: 'Rascunho lapidado',
        ctaLabel: 'Como Ellis reescreve',
      },
    ],
    ctaH2: 'Atualize o conteúdo com um motivo mais claro.',
    ctaPara: 'Adicione Iris ao seu fluxo de trabalho e cada atualização começa com um briefing que diz exatamente aos redatores o que mudar e por quê.',
    guidanceFooterLabel: 'STATUS DA ATUALIZAÇÃO',
    guidanceFooterValue: 'Briefado · pronto para o redator',
  },

  content_distribution_brief: {
    seoTitle: 'Worker de Briefing de Distribuição de Conteúdo | WordPresto',
    metaDescription:
      'Nina cria um briefing de distribuição que mapeia para onde o conteúdo aprovado deve ir e como deve ser adaptado para cada canal.',
    h1: 'Planeje para onde o conteúdo aprovado deve ir a seguir.',
    heroPara1:
      'Conteúdo aprovado que vai direto da aprovação para um único canal desperdiça a maior parte do seu valor. Nina produz um briefing de distribuição que mapeia o conteúdo aprovado para os canais onde ele se encaixa, com notas de adaptação para cada um, para que a mesma peça alcance mais gente sem perder qualidade.',
    heroPara2:
      'Para times de conteúdo, agências e líderes de marketing que precisam de um plano de distribuição estruturado, e não de uma lembrança de última hora sobre redes sociais.',
    problemEyebrow: 'Onde a distribuição desanda',
    problemH2: 'A maior parte do conteúdo é publicada uma vez e esquecida.',
    problemPara:
      'Conteúdo longo aprovado geralmente chega a um canal, em um formato, em um único momento. As adaptações que estenderiam o alcance (trecho para newsletter, post no LinkedIn, card para redes sociais, citação-chave) nunca acontecem porque não há um plano para elas. Um briefing de distribuição muda isso.',
    problemAnnotation: '↘ planeje a distribuição antes de publicar',
    beforeStamp: 'Sem plano',
    beforeHtml: `<p>Ótimo, o artigo está <span class="ba-strike">aprovado</span>! Vamos <span class="ba-strike">postar no LinkedIn</span> e <span class="ba-strike">mandar para a newsletter</span>. Alguém pode <span class="ba-strike">escrever uns posts para redes sociais</span> se tiver tempo. <span class="ba-strike">Deve estar bom do jeito que está</span>.</p>`,
    beforeTags: ['Sem plano de canais', 'Sem orientação de adaptação', 'Distribuição deixada ao acaso'],
    beforeNote: 'esse conteúdo vai ser usado uma única vez',
    afterStamp: 'Briefado',
    afterHtml: `<p>Site: publicar a peça completa. LinkedIn: <span class="ba-hl">resumo executivo com o principal achado</span>. Newsletter: trecho de 200 palavras, começando pelo problema. Redes sociais: três citações com contexto. Notas de tempo e adaptação para cada canal.</p>`,
    afterTags: ['Específico por canal', 'Pronto para adaptar', 'Distribuição estruturada'],
    afterNote: 'o mesmo conteúdo rende mais',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um briefing de distribuição que mapeia o conteúdo aprovado para os canais, com orientação de adaptação.',
    helpsPara:
      'Nina transforma o conteúdo aprovado em um briefing de distribuição por canal: para onde ele vai, como se adapta a cada canal e o que o redator ou o time de redes sociais precisa produzir para cada um.',
    checks: [
      'Se o conteúdo é adequado aos canais planejados',
      'Se as necessidades de adaptação fazem sentido para cada canal',
      'Se o plano de distribuição é proporcional ao conteúdo',
    ],
    improves: [
      'O planejamento de distribuição, tornando-o específico por canal, não genérico',
      'A orientação de adaptação, para que cada versão sirva o seu canal',
      'O valor do conteúdo, ao estender o alcance sem diluir a qualidade',
    ],
    prepares: [
      'Um briefing de distribuição estruturado',
      'Notas de adaptação por canal',
      'Orientação de formato e extensão para cada canal',
    ],
    surfaces: [
      'Canais que não combinam bem com o conteúdo',
      'Conteúdo que se beneficiaria de um reaproveitamento antes da distribuição',
      'Conflitos de tempo ou problemas de sequenciamento na distribuição',
    ],
    ioH2: 'Do que Nina parte, e o que ela produz.',
    worksFrom: [
      'Conteúdo aprovado',
      'Lista de canais e definições de público',
      'Objetivos de distribuição',
      'Diretrizes de voz de marca',
      'Calendário de publicação ou notas de tempo',
    ],
    produces: [
      'Briefing de distribuição',
      'Notas de adaptação por canal',
      'Orientação de formato e extensão',
      'Notas de tempo de publicação',
      'Handoff para o time de conteúdo ou redes sociais',
    ],
    scenarios: [
      {
        title: 'Um artigo longo que precisa ser transformado em trechos para LinkedIn e e-mail.',
        description: 'Nina faz o briefing dos trechos de forma específica, para que cada um funcione para o seu canal e público.',
      },
      {
        title: 'Um lançamento de produto com conteúdo indo para cinco canais.',
        description: 'Ela mapeia o conteúdo do lançamento para cada canal, com notas de tempo e adaptação em um único briefing.',
      },
      {
        title: 'Uma agência produzindo conteúdo para um cliente com um mix de canais complexo.',
        description: 'O briefing de distribuição vira o handoff para os times de redes sociais e e-mail, em vez de uma conversa à parte.',
      },
      {
        title: 'Um programa de conteúdo em que a distribuição é uma lembrança tardia.',
        description: 'Nina incorpora a distribuição ao fluxo de trabalho no momento da aprovação, não como uma tarefa separada.',
      },
      {
        title: 'Uma pesquisa que pode sustentar vários formatos de conteúdo.',
        description: 'Ela mapeia quais insights funcionam para quais canais e faz o briefing das adaptações de acordo.',
      },
      {
        title: 'Um time em que o redator e o gestor de redes sociais trabalham separadamente.',
        description: 'Um briefing de distribuição conecta os dois times sem que o redator precise fazer o briefing diretamente para as redes sociais.',
      },
    ],
    boundaryH2: 'Nina planeja a distribuição. Os times de conteúdo e redes sociais produzem as adaptações.',
    boundaryPara:
      'Um briefing de distribuição é um plano, não conteúdo produzido. Nina mapeia para onde o conteúdo deve ir e como deve se adaptar. As versões adaptadas, as decisões de publicação e os julgamentos sobre cada canal cabem aos times de conteúdo e redes sociais.',
    boundaryChecklist: [
      'Nina faz o briefing da distribuição, nunca produz o conteúdo adaptado.',
      'Os briefings de distribuição são estruturados para os times de canal executarem.',
      'Dúvidas sobre adequação de canal são sinalizadas, nunca assumidas.',
      'O briefing apoia os times de canal, não substitui o julgamento deles.',
    ],
    willNot: [
      { color: 'red', text: 'Produzir conteúdo adaptado para os canais' },
      { color: 'red', text: 'Publicar ou agendar conteúdo' },
      { color: 'amber', text: 'Ampliar o escopo da distribuição sem aprovação' },
    ],
    relatedH2: 'Workers com quem Nina trabalha.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Confirma que o conteúdo está aprovado antes de a distribuição ser planejada.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como Audrey aprova',
      },
      {
        id: 'cms_handoff',
        description: 'Cuida do handoff do canal principal em paralelo.',
        outputLabel: 'Pacote de handoff',
        ctaLabel: 'Como Ravi faz o handoff',
      },
      {
        id: 'content_refresh_brief',
        description: 'Realimenta o conteúdo distribuído de volta ao planejamento de atualização.',
        outputLabel: 'Briefing de atualização',
        ctaLabel: 'Como Iris atualiza',
      },
    ],
    ctaH2: 'Planeje para onde o conteúdo aprovado deve ir a seguir.',
    ctaPara: 'Adicione Nina ao seu fluxo de trabalho e cada peça aprovada sai com um plano de distribuição por canal já escrito.',
    guidanceFooterLabel: 'DISTRIBUIÇÃO',
    guidanceFooterValue: 'Briefado · pronto para os canais',
  },

  seo_metadata: {
    seoTitle: 'Worker de Título e Metadados de SEO | WordPresto',
    metaDescription:
      'Nadia revisa o título de SEO, a meta description e o H1 em relação à intenção de busca, e depois redige opções mais claras para o redator aprovar. Metadados que soam bem para as pessoas e para a busca.',
    h1: 'Acerte o título, a description e o H1.',
    heroPara1:
      'O título, a meta description e o H1 são a primeira coisa que um leitor vê na busca, e a coisa mais fácil de deixar para depois. Nadia lê esses elementos em relação à página e à intenção por trás da busca, sinaliza o que está faltando, fraco, longo demais ou fora do alvo, e redige opções mais claras.',
    heroPara2:
      'Para redatores e editores que querem metadados que reflitam a página com honestidade, sem ficar chutando limites de caracteres ou correndo atrás de palavras-chave.',
    problemEyebrow: 'Onde o clique se ganha ou se perde',
    problemH2: 'Bom conteúdo com um título fraco ainda assim perde o clique.',
    problemPara:
      'Os metadados costumam ser escritos por último, com pressa, por quem estiver mais perto do botão de publicar. O resultado são títulos que repetem a marca, descriptions que só repetem o H1 e páginas que vendem menos do que realmente oferecem. Nadia trata essa camada voltada para os resultados de busca como parte da escrita.',
    problemAnnotation: '↘ título não diz nada, description repete',
    beforeStamp: 'Fraco',
    beforeHtml: `<p><strong>Title:</strong> <span class="ba-strike">Início | Blog | Nome da Nossa Empresa Ltda</span><br/><strong>Description:</strong> <span class="ba-strike">Bem-vindo ao nosso blog, onde escrevemos sobre várias coisas do nosso setor.</span></p>`,
    beforeTags: ['Sem relação com a intenção', 'Excesso de marca', 'Não diz nada'],
    beforeNote: 'por que alguém clicaria nisso',
    afterStamp: 'Claro',
    afterHtml: `<p><strong>Title:</strong> <span class="ba-hl">Como escolher um fluxo de trabalho de conteúdo (um guia prático)</span><br/><strong>Description:</strong> <span class="ba-hl">Um passo a passo direto de como planejar, fazer o briefing, revisar e aprovar conteúdo, com as perguntas a fazer antes de se comprometer.</span></p>`,
    afterTags: ['Corresponde à intenção', 'Específico', 'Promessa honesta'],
    afterNote: 'agora ele merece o clique',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um editor de metadados que lê a intenção, não só palavras-chave.',
    helpsPara:
      'Nadia verifica o título, a description e o H1 como um editor cuidadoso faria: em relação ao propósito da página e ao que o leitor estava buscando, e depois propõe rascunhos que você pode aceitar, editar ou rejeitar.',
    checks: [
      'Título, description e H1 em relação à intenção de busca',
      'Extensão, duplicação e excesso de palavras-chave',
      'Promessas que a página não cumpre de fato',
    ],
    improves: [
      'Títulos vagos, tornando-os específicos e legíveis',
      'Descriptions que dizem o que a página oferece',
      'H1 e título trabalhando juntos, não um contra o outro',
    ],
    prepares: [
      'Rascunho de metadados com orientação de extensão',
      'Um antes e depois claro para revisão',
      'Notas sobre a intenção que cada opção mira',
    ],
    surfaces: [
      'Títulos em que a intenção é genuinamente pouco clara',
      'Afirmações nos metadados que precisam de evidência',
      'Termos sensíveis a compliance que precisam de checagem',
    ],
    ioH2: 'Do que Nadia parte, e o que ela produz.',
    worksFrom: [
      'Conteúdo da página e H1 atual',
      'Título e meta description existentes',
      'Intenção de busca detectada',
      'Tópico ou consulta de destino',
      'Regras de marca e compliance',
    ],
    produces: [
      'Opções de título de SEO em rascunho',
      'Rascunho de meta description',
      'Sugestões de H1',
      'Notas de extensão e intenção',
      'Pacote de metadados pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Um artigo forte com um título esquecível.',
        description: 'Nadia reescreve o título e a description para corresponder ao que os leitores realmente estão buscando, sem prometer demais.',
      },
      {
        title: 'Títulos que começam sempre com o nome da marca.',
        description: 'Ela move o valor para o início, para que a página lidere com o que oferece, não com quem a publicou.',
      },
      {
        title: 'Descriptions que só repetem o título da página.',
        description: 'Nadia transforma um H1 repetido em uma description que diz ao leitor o que ele vai encontrar na página.',
      },
      {
        title: 'Uma página mirando a intenção errada.',
        description: 'Quando os metadados prometem uma coisa e a página entrega outra, ela sinaliza a incoerência para uma pessoa resolver.',
      },
      {
        title: 'Migrando uma biblioteca de posts antigos.',
        description: 'Ela revisa títulos e descriptions em escala e traz os mais fracos primeiro, para que a revisão de metadados comece onde mais importa.',
      },
      {
        title: 'Um tema regulado em que a escolha das palavras importa.',
        description: 'Nadia redige com cuidado e sinaliza afirmações que precisam de aval, em vez de escrever uma promessa que a página não sustenta.',
      },
    ],
    boundaryH2: 'Nadia redige os metadados. As pessoas decidem o que vai ao ar.',
    boundaryPara:
      'Um título é uma promessa para o leitor. Nadia propõe e verifica, mas foi construída para parar no rascunho. Nada do que ela escreve é publicado ou enviado para um CMS sem uma pessoa aprovar antes.',
    boundaryChecklist: [
      'Nadia redige os metadados, nunca os publica.',
      'Cada opção é apresentada para um editor aprovar.',
      'Incoerências e afirmações arriscadas são sinalizadas, nunca escondidas.',
      'Nadia apoia o redator, não substitui o julgamento dele.',
    ],
    willNot: [
      { color: 'red', text: 'Publicar ou enviar para o CMS' },
      { color: 'red', text: 'Prometer rankings ou tráfego' },
      { color: 'amber', text: 'Encher o texto de palavras-chave para burlar a busca' },
    ],
    relatedH2: 'Workers com quem Nadia trabalha.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Analisa como a página aparece nos resultados e onde é possível ganhar snippets.',
        outputLabel: 'Revisão de snippet',
        ctaLabel: 'Como Morgan revisa',
      },
      {
        id: 'schema',
        description: 'Revisa os dados estruturados para que a página possa se qualificar a resultados mais ricos.',
        outputLabel: 'Revisão de schema',
        ctaLabel: 'Como Sofia revisa',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Verifica se o próprio rascunho está claro e pronto antes de os metadados serem finalizados.',
        outputLabel: 'Notas de revisão',
        ctaLabel: 'Como Quinn revisa',
      },
    ],
    ctaH2: 'Acerte o título, a description e o H1.',
    ctaPara: 'Adicione Nadia ao seu fluxo de trabalho e cada página chega à revisão com metadados que a refletem com honestidade e soam bem na busca.',
    guidanceFooterLabel: 'METADADOS',
    guidanceFooterValue: 'Redigido · pronto para revisão',
  },

  serp_snippet_opportunity: {
    seoTitle: 'Worker de Snippets de SERP | WordPresto',
    metaDescription:
      'Morgan analisa como uma página tende a aparecer nos resultados de busca e aponta oportunidades de snippet e resultados ricos que vale a pena buscar. Só revisão, nunca uma garantia.',
    h1: 'Molde como a página aparece na busca.',
    heroPara1:
      'Uma página não só ranqueia, ela aparece. O título, a description e a forma como o conteúdo está estruturado moldam o que o leitor vê nos resultados. Morgan revisa esses elementos de snippet e aponta onde uma resposta clara, uma lista ou uma seção estruturada poderiam render um resultado mais rico.',
    heroPara2: 'Para editores que querem que suas páginas soem bem nos resultados de busca, não só na própria página.',
    problemEyebrow: 'Onde a página encontra os resultados',
    problemH2: 'O resultado que o leitor vê nem sempre é a página que você escreveu.',
    problemPara:
      'Quem monta o snippet é o buscador, não você. Se a página enterra a resposta, não tem uma lista ou estrutura de perguntas clara, ou deixa a description ao acaso, o resultado fica tão sem graça quanto tudo ao redor. Morgan revisa os elementos que moldam esse snippet, com honestidade, sem prometer que um destaque será concedido.',
    problemAnnotation: '↘ a resposta está lá, só enterrada',
    beforeStamp: 'Enterrada',
    beforeHtml: `<p><span class="ba-strike">Há muitos fatores a considerar e depende de uma série de coisas, que vamos explorar em detalhe ao longo deste artigo, nas seções abaixo.</span></p>`,
    beforeTags: ['Sem resposta clara', 'Sem estrutura', 'Snippet sem graça'],
    beforeNote: 'não há nada para a busca puxar',
    afterStamp: 'Extraível',
    afterHtml: `<p><span class="ba-hl">Um fluxo de trabalho de conteúdo tem seis etapas: planejar, fazer o briefing, escrever, revisar, melhorar e aprovar.</span> Cada uma delas é detalhada abaixo.</p>`,
    afterTags: ['Resposta direta', 'Pronta para virar lista', 'Pronta para snippet'],
    afterNote: 'agora há algo para destacar',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um revisor que lê a página do jeito que uma página de resultados lê.',
    helpsPara:
      'Morgan olha para o título, a description e a estrutura da página em conjunto, e traz à tona oportunidades concretas e revisáveis, para que a página tenha a melhor chance honesta de conseguir um snippet claro e útil.',
    checks: [
      'A qualidade do título e da description para os resultados',
      'Se a página responde diretamente à busca',
      'A estrutura que sustenta listas, passos ou FAQs',
    ],
    improves: [
      'Respostas movidas para cima e deixadas explícitas',
      'Seções moldadas para um snippet mais limpo',
      'Conteúdo orientado por perguntas, tornado fácil de escanear',
    ],
    prepares: [
      'Uma lista de oportunidades de resultados ricos',
      'Sugestões de melhoria de snippet',
      'Notas sobre quais tipos de resultado combinam com a página',
    ],
    surfaces: [
      'Oportunidades que precisam de checagem de schema',
      'Afirmações que precisariam de evidência para serem destacadas',
      'Casos em que a intenção e o formato não combinam',
    ],
    ioH2: 'Do que Morgan parte, e o que ele produz.',
    worksFrom: [
      'Título da página e meta description',
      'Títulos e estrutura do conteúdo',
      'Intenção de busca detectada',
      'Padrões de perguntas e listas na página',
      'Revisão de schema, quando disponível',
    ],
    produces: [
      'Revisão de oportunidades de snippet',
      'Sugestões de resultados ricos',
      'Notas de melhoria de estrutura',
      'Priorização de ganhos rápidos',
      'Resumo pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Um tutorial que nunca lista os passos.',
        description: 'Morgan sugere uma estrutura numerada e clara, para que os passos possam ser lidos rapidamente e tenham chance de ser destacados.',
      },
      {
        title: 'Uma página de FAQ com as respostas escondidas em blocos de texto.',
        description: 'Ele aponta onde respostas curtas e diretas ajudariam tanto os leitores quanto a página de resultados.',
      },
      {
        title: 'Um guia forte com uma description sem graça.',
        description: 'Morgan sinaliza os elementos de snippet que estão prejudicando a página e os repassa para Nadia reescrever.',
      },
      {
        title: 'Uma página que poderia conquistar um resultado rico.',
        description: 'Ele registra quais tipos de resultado estruturado realmente combinam e encaminha o trabalho de schema para Sofia, sem prometer que o Google vai conceder.',
      },
      {
        title: 'Comparando duas páginas concorrendo pela mesma busca.',
        description: 'Morgan analisa como cada uma tende a aparecer e mostra qual estrutura serve melhor ao leitor.',
      },
      {
        title: 'Uma pergunta do leitor enterrada três parágrafos abaixo.',
        description: 'Ele recomenda liderar com a resposta, para que a página seja útil de imediato, tanto nela quanto na busca.',
      },
    ],
    boundaryH2: 'Morgan revisa a oportunidade. Quem decide ainda é a busca.',
    boundaryPara:
      'Nenhuma ferramenta controla o que um buscador mostra. Morgan revisa e recomenda, e tem o cuidado de nunca prometer um snippet, um ranking ou tráfego. Cada sugestão é para uma pessoa avaliar e aprovar.',
    boundaryChecklist: [
      'Morgan revisa snippets, nunca garante um.',
      'As recomendações são apresentadas para um editor aprovar.',
      'Oportunidades que precisam de schema ou evidência são sinalizadas.',
      'Morgan apoia o redator, não substitui o julgamento dele.',
    ],
    willNot: [
      { color: 'red', text: 'Garantir um featured snippet' },
      { color: 'red', text: 'Prometer rankings ou tráfego' },
      { color: 'amber', text: 'Forçar uma estrutura que prejudique a leitura' },
    ],
    relatedH2: 'Workers com quem Morgan trabalha.',
    relatedWorkerIds: [
      {
        id: 'seo_metadata',
        description: 'Redige o título e a description que moldam o snippet.',
        outputLabel: 'Rascunhos de metadados',
        ctaLabel: 'Como Nadia redige',
      },
      {
        id: 'schema',
        description: 'Revisa os dados estruturados dos quais os resultados ricos dependem.',
        outputLabel: 'Revisão de schema',
        ctaLabel: 'Como Sofia revisa',
      },
      {
        id: 'content_analyst',
        description: 'Avalia o conteúdo de base do qual o snippet é extraído.',
        outputLabel: 'Análise de conteúdo',
        ctaLabel: 'Como Omar revisa',
      },
    ],
    ctaH2: 'Molde como a página aparece na busca.',
    ctaPara: 'Adicione Morgan ao seu fluxo de trabalho e cada página chega à revisão com suas oportunidades de snippet identificadas, com honestidade e prontas para agir.',
    guidanceFooterLabel: 'SNIPPET',
    guidanceFooterValue: 'Revisado · oportunidades anotadas',
  },

  schema: {
    seoTitle: 'Worker de Schema | WordPresto',
    metaDescription:
      'Sofia revisa os dados estruturados de uma página e recomenda os tipos de schema que correspondem ao que a página realmente é, para revisão humana. Sem campos inventados, sem marcação falsa.',
    h1: 'Descreva a página para que as máquinas também a entendam.',
    heroPara1:
      'Os dados estruturados dizem aos buscadores o que uma página realmente é: um artigo, um produto, um guia, uma empresa. Sofia revisa o schema já presente, avalia o que a página realmente representa e recomenda os tipos que se encaixam, para que a marcação descreva a página com honestidade.',
    heroPara2: 'Para times que querem dados estruturados que reflitam o conteúdo, e não uma pilha de marcação copiada entre templates.',
    problemEyebrow: 'Onde a marcação se afasta da página',
    problemH2: 'Dados estruturados só ajudam quando dizem a verdade.',
    problemPara:
      'Schema é fácil de copiar e difícil de manter honesto. Páginas herdam marcação de um template, se descrevem como algo que não são, ou não têm dados estruturados nenhum. Sofia compara o que está lá com o que a página realmente é, e recomenda os tipos que combinam.',
    problemAnnotation: '↘ marcada como produto, lê-se como artigo',
    beforeStamp: 'Incompatível',
    beforeHtml: `<p><span class="ba-strike">@type: Product</span> em uma página que claramente é um guia passo a passo, sem <span class="ba-strike">nenhuma marcação Article ou HowTo</span> em lugar nenhum.</p>`,
    beforeTags: ['Tipo errado', 'Marcação herdada', 'Não descreve nada'],
    beforeNote: 'isso não é uma página de produto',
    afterStamp: 'Compatível',
    afterHtml: `<p><span class="ba-hl">@type: HowTo</span> com contexto de artigo, recomendado porque a página é um guia passo a passo. <span class="ba-hl">Sugerido para revisão.</span></p>`,
    afterTags: ['Tipo condiz com a página', 'Marcação honesta', 'Para aprovação'],
    afterNote: 'agora a marcação corresponde à realidade',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um revisor que faz o schema corresponder ao que a página realmente é.',
    helpsPara:
      'Sofia relata os dados estruturados que detecta, avalia o tipo aparente da página e recomenda o schema adequado. Ela nunca inventa campos nem marca uma página como algo que ela não é.',
    checks: [
      'Dados estruturados já presentes na página',
      'Se os tipos detectados correspondem ao conteúdo',
      'Schema ausente que a página poderia usar com honestidade',
    ],
    improves: [
      'Recomendações de tipo que se encaixam na página',
      'Marcação que reflete o conteúdo real',
      'Clareza sobre para que serve cada tipo',
    ],
    prepares: [
      'Uma revisão de schema com os tipos detectados',
      'Tipos recomendados para aprovação',
      'Notas sobre por que cada tipo se encaixa',
    ],
    surfaces: [
      'Marcação que afirma mais do que a página oferece',
      'Campos que precisariam de dados reais para serem preenchidos',
      'Casos em que uma pessoa deveria decidir o tipo',
    ],
    ioH2: 'Do que Sofia parte, e o que ela produz.',
    worksFrom: [
      'Dados estruturados existentes',
      'Conteúdo e títulos da página',
      'Tipo aparente da página',
      'Contexto do negócio ou da organização',
      'Revisão técnica, quando disponível',
    ],
    produces: [
      'Relatório de schema detectado',
      'Tipos de schema recomendados',
      'Justificativa para cada recomendação',
      'Notas sobre campos que precisam de dados reais',
      'Resumo de schema pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Um guia carregando marcação de produto vinda de um template.',
        description: 'Sofia sinaliza a incompatibilidade e recomenda os tipos article ou how-to que realmente descrevem a página.',
      },
      {
        title: 'Uma página sem nenhum dado estruturado.',
        description: 'Ela avalia o que a página é e recomenda um conjunto inicial sensato, para uma pessoa aprovar.',
      },
      {
        title: 'Uma página de empresa sem detalhes da organização.',
        description: 'Sofia aponta o schema que descreveria a organização, sem inventar fatos para preenchê-lo.',
      },
      {
        title: 'Um FAQ que poderia sustentar marcação FAQ.',
        description: 'Ela registra a oportunidade e encaminha as implicações de snippet para Morgan, deixando a decisão para o editor.',
      },
      {
        title: 'Schema copiado em uma seção inteira.',
        description: 'Sofia revisa onde a marcação herdada já não se encaixa nas páginas individuais em que está.',
      },
      {
        title: 'Uma página cheia de afirmações em uma área regulada.',
        description: 'Ela sinaliza a marcação que afirmaria mais do que a página consegue sustentar, e deixa para a revisão humana.',
      },
    ],
    boundaryH2: 'Sofia recomenda o schema. As pessoas aprovam a marcação.',
    boundaryPara:
      'Dados estruturados são uma declaração sobre a página. Sofia revisa e recomenda, mas nunca escreve marcação falsa, inventa campos ou marca uma página como algo que ela não é. As recomendações passam por aprovação humana antes de qualquer coisa ser aplicada.',
    boundaryChecklist: [
      'Sofia recomenda schema, nunca falsifica marcação.',
      'Os tipos detectados e as recomendações são apresentados para revisão.',
      'Campos que precisam de dados reais são sinalizados, nunca preenchidos.',
      'Sofia apoia o time, não substitui o julgamento dele.',
    ],
    willNot: [
      { color: 'red', text: 'Escrever marcação falsa ou inventada' },
      { color: 'red', text: 'Marcar uma página como algo que ela não é' },
      { color: 'amber', text: 'Preencher campos sem dados reais' },
    ],
    relatedH2: 'Workers com quem Sofia trabalha.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Conecta as oportunidades de schema a como a página aparece nos resultados.',
        outputLabel: 'Revisão de snippet',
        ctaLabel: 'Como Morgan revisa',
      },
      {
        id: 'technical_health',
        description: 'Verifica os sinais técnicos mais amplos dos quais a página depende.',
        outputLabel: 'Achados técnicos',
        ctaLabel: 'Como Maya revisa',
      },
      {
        id: 'seo_metadata',
        description: 'Redige o título e a description que acompanham a marcação.',
        outputLabel: 'Rascunhos de metadados',
        ctaLabel: 'Como Nadia redige',
      },
    ],
    ctaH2: 'Descreva a página para que as máquinas também a entendam.',
    ctaPara: 'Adicione Sofia ao seu fluxo de trabalho e cada página chega à revisão com dados estruturados que correspondem ao que ela realmente é.',
    guidanceFooterLabel: 'SCHEMA',
    guidanceFooterValue: 'Revisado · tipos recomendados',
  },

  technical_health: {
    seoTitle: 'Worker de Saúde Técnica | WordPresto',
    metaDescription:
      'Maya verifica os sinais técnicos por trás de uma página, metadados, títulos, indexabilidade e estrutura, e relata o que precisa de um olhar mais atento. Baseada em padrões e só revisão.',
    h1: 'Verifique os sinais técnicos por trás da página.',
    heroPara1:
      'Uma boa redação ainda pode ser travada por problemas técnicos silenciosos: um título ausente, uma ordem de títulos quebrada, uma página que não pode ser indexada. Maya revisa esses sinais em relação a padrões estabelecidos e relata os achados por categoria, para que nada técnico fique ao acaso.',
    heroPara2: 'Para editores e times de site que querem uma leitura clara e baseada em padrões sobre uma página antes de ela ir ao ar.',
    problemEyebrow: 'Onde bom conteúdo silenciosamente tem desempenho abaixo do esperado',
    problemH2: 'Uma página forte pode ser prejudicada por sinais que ninguém verificou.',
    problemPara:
      'Problemas técnicos raramente se anunciam. Uma página sem meta title, com títulos que pulam níveis, ou com um noindex acidental pode ler perfeitamente bem enquanto tem desempenho abaixo do esperado, em silêncio. Maya revisa esses sinais em relação a padrões e relata o que precisa de atenção, em linguagem simples.',
    problemAnnotation: '↘ lê bem, mas está com noindex',
    beforeStamp: 'Não verificado',
    beforeHtml: `<p>Ordem dos títulos: <span class="ba-strike">H1 → H3 → H3</span>. Meta title: <span class="ba-strike">ausente</span>. Indexável: <span class="ba-strike">não (noindex configurado)</span>.</p>`,
    beforeTags: ['Título pulado', 'Sem título', 'Não indexável'],
    beforeNote: 'isso nunca vai ser encontrado',
    afterStamp: 'Revisado',
    afterHtml: `<p>Ordem dos títulos: <span class="ba-hl">H1 → H2 → H3</span>. Meta title: <span class="ba-hl">presente e revisado</span>. Indexável: <span class="ba-hl">sim</span>. Sinalizado para correção antes da publicação.</p>`,
    afterTags: ['Hierarquia limpa', 'Título presente', 'Indexável'],
    afterNote: 'agora o básico se sustenta',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um revisor técnico que relata achados, não ruído.',
    helpsPara:
      'Maya executa checagens técnicas baseadas em padrões e agrupa o que encontra em categorias claras com pontuações, para que uma pessoa veja o que importa e decida o que corrigir. Ela revisa, não muda a página.',
    checks: [
      'Metadados, títulos e indexabilidade',
      'Estrutura da página e sinais técnicos',
      'Presença de schema e fundamentos de acessibilidade',
    ],
    improves: [
      'Uma visão clara da saúde técnica',
      'Achados agrupados por categoria',
      'Uma ordem sensata para corrigir as coisas',
    ],
    prepares: [
      'Achados técnicos baseados em padrões',
      'Pontuações por categoria para a página',
      'Notas sobre o que verificar antes de publicar',
    ],
    surfaces: [
      'Problemas que precisam de um desenvolvedor para resolver',
      'Achados que precisam de uma decisão humana',
      'Sinais que uma única página não consegue confirmar sozinha',
    ],
    ioH2: 'Do que Maya parte, e o que ela produz.',
    worksFrom: [
      'Metadados e títulos da página',
      'Sinais de indexabilidade',
      'Estrutura da página e seções de conteúdo',
      'Presença de schema',
      'Sinais de acessibilidade e técnicos',
    ],
    produces: [
      'Achados de saúde técnica',
      'Pontuações por categoria',
      'Problemas priorizados para revisão',
      'Notas para desenvolvedores, quando necessário',
      'Resumo técnico pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Uma página acidentalmente configurada como noindex.',
        description: 'Maya sinaliza isso antes da publicação, para que uma página feita para ser encontrada não fique escondida da busca em silêncio.',
      },
      {
        title: 'Títulos que pulam de H1 para H3.',
        description: 'Ela relata a hierarquia quebrada, para que a estrutura fique clara para leitores, tecnologia assistiva e busca.',
      },
      {
        title: 'Um novo template antes de ir para produção.',
        description: 'Maya revisa os sinais técnicos em uma página de amostra, para que os problemas sejam pegos uma vez, não em cada página depois.',
      },
      {
        title: 'Uma atualização de conteúdo que mexeu na marcação.',
        description: 'Ela verifica se os títulos, os headings e a indexabilidade continuam corretos depois da edição.',
      },
      {
        title: 'Uma página que lê bem mas ranqueia mal.',
        description: 'Maya traz à tona os sinais técnicos que podem estar segurando o desempenho, para uma pessoa investigar.',
      },
      {
        title: 'Entregando uma lista de correções para um desenvolvedor.',
        description: 'Ela agrupa os achados por categoria e prioridade, para que o trabalho técnico fique claro e delimitado.',
      },
    ],
    boundaryH2: 'Maya relata os achados. As pessoas decidem as correções.',
    boundaryPara:
      'Uma revisão técnica é informação, não uma instrução. Maya verifica e relata, mas não edita a página, não muda configurações nem publica nada. Os achados dela são para uma pessoa agir sobre eles.',
    boundaryChecklist: [
      'Maya revisa a página, nunca a edita.',
      'Os achados são relatados para uma pessoa agir.',
      'Problemas que precisam de um desenvolvedor são sinalizados com clareza.',
      'Maya apoia o time, não substitui o julgamento dele.',
    ],
    willNot: [
      { color: 'red', text: 'Editar a página ou mudar configurações' },
      { color: 'red', text: 'Publicar ou colocar qualquer coisa no ar' },
      { color: 'amber', text: 'Alegar uma correção sem revisão humana' },
    ],
    relatedH2: 'Workers com quem Maya trabalha.',
    relatedWorkerIds: [
      {
        id: 'schema',
        description: 'Revisa os dados estruturados entre os sinais técnicos.',
        outputLabel: 'Revisão de schema',
        ctaLabel: 'Como Sofia revisa',
      },
      {
        id: 'seo_metadata',
        description: 'Redige os metadados que Maya verifica quanto à presença e qualidade.',
        outputLabel: 'Rascunhos de metadados',
        ctaLabel: 'Como Nadia redige',
      },
      {
        id: 'trust_author_credibility',
        description: 'Revisa os sinais de confiança que caminham junto com a saúde técnica.',
        outputLabel: 'Revisão de confiança',
        ctaLabel: 'Como Alex revisa',
      },
    ],
    ctaH2: 'Verifique os sinais técnicos por trás da página.',
    ctaPara: 'Adicione Maya ao seu fluxo de trabalho e cada página chega à revisão com seus sinais técnicos verificados em relação a padrões.',
    guidanceFooterLabel: 'TÉCNICO',
    guidanceFooterValue: 'Revisado · achados registrados',
  },

  trust_author_credibility: {
    seoTitle: 'Worker de Confiança e Credibilidade do Autor | WordPresto',
    metaDescription:
      'Alex revisa os sinais de confiança, autoria e credibilidade em torno de uma página, para que leitores e buscadores vejam quem está por trás do conteúdo. Só revisão, nunca inventado.',
    h1: 'Mostre quem está por trás do conteúdo.',
    heroPara1:
      'Em temas que afetam dinheiro, saúde ou decisões importantes, tanto leitores quanto buscadores querem saber quem escreveu isso e por que podem confiar. Alex revisa o contexto do autor, a identidade da organização, o suporte de evidências e os sinais de credibilidade em torno de uma página, e relata onde a confiança está clara e onde ela falta.',
    heroPara2: 'Para times que publicam conteúdo de orientação ou de maior risco e querem que sua credibilidade seja visível, não presumida.',
    problemEyebrow: 'Onde a credibilidade fica implícita',
    problemH2: 'Um bom conselho vindo de ninguém em especial é difícil de confiar.',
    problemPara:
      'Muito conteúdo genuinamente especializado é publicado sem autor visível, sem contexto de organização e sem sinal de quem revisou. A expertise é real, mas o leitor não consegue vê-la, e a busca também não. Alex revisa os sinais que tornam a credibilidade visível.',
    problemAnnotation: '↘ conselho especializado, sem autor identificado',
    beforeStamp: 'Sem autoria',
    beforeHtml: `<p>Orientação médica publicada <span class="ba-strike">sem assinatura de autor</span>, <span class="ba-strike">sem revisor</span> e <span class="ba-strike">sem contexto de organização</span>.</p>`,
    beforeTags: ['Sem autor', 'Sem revisão', 'Tema de alto risco'],
    beforeNote: 'quem está me dizendo isso?',
    afterStamp: 'Com autoria',
    afterHtml: `<p>A mesma orientação com um <span class="ba-hl">autor identificado e suas credenciais</span>, <span class="ba-hl">um revisor</span> e <span class="ba-hl">contexto de organização claro</span>. Sinalizada para aprovação.</p>`,
    afterTags: ['Autor identificado', 'Revisado por', 'Responsabilidade clara'],
    afterNote: 'agora a confiança é visível',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um revisor que verifica se a confiança está realmente visível.',
    helpsPara:
      'Alex revisa a autoria, a responsabilidade da organização, o suporte de evidências e os sinais de credibilidade, devolve uma leitura de prontidão e traz à tona o que precisa de um olhar humano, especialmente em temas sensíveis. Ele relata sinais, nunca inventa credenciais.',
    checks: [
      'Assinatura, biografia e credenciais do autor',
      'Responsabilidade e contexto da organização',
      'Suporte de evidências e sinais de revisão',
    ],
    improves: [
      'Uma visão clara da prontidão de confiança',
      'Lacunas de autoria tornadas visíveis',
      'Onde a credibilidade poderia ser mostrada melhor',
    ],
    prepares: [
      'Uma revisão de confiança e credibilidade',
      'Uma leitura de prontidão para a página',
      'Notas sobre risco em temas sensíveis',
    ],
    surfaces: [
      'Afirmações de alto risco que precisam mostrar expertise',
      'Contexto de autor ou revisor ausente',
      'Decisões de credibilidade para uma pessoa tomar',
    ],
    ioH2: 'Do que Alex parte, e o que ele produz.',
    worksFrom: [
      'Contexto e assinatura do autor',
      'Sinais de organização e responsabilidade',
      'Suporte de evidências na página',
      'Sensibilidade do tema (orientação, saúde, dinheiro)',
      'Sinais de credibilidade no schema',
    ],
    produces: [
      'Revisão de confiança e credibilidade',
      'Uma leitura de prontidão de confiança',
      'Notas de lacunas de autoria',
      'Sinalizações de risco em temas sensíveis',
      'Resumo de confiança pronto para revisão',
    ],
    scenarios: [
      {
        title: 'Orientação de saúde ou finanças sem autor identificado.',
        description: 'Alex sinaliza a autoria ausente para que uma pessoa real e qualificada possa ser creditada antes de a página ir ao ar.',
      },
      {
        title: 'Uma organização respeitada que nunca diz isso.',
        description: 'Ele aponta onde o contexto e a responsabilidade da organização poderiam tornar visível a credibilidade que já existe.',
      },
      {
        title: 'Uma página que deveria mostrar um revisor.',
        description: 'Alex registra onde um sinal de "revisado por" tranquilizaria os leitores em um tema de maior risco.',
      },
      {
        title: 'Afirmações que se apoiam em uma expertise não demonstrada.',
        description: 'Ele traz à tona onde a página assume uma autoridade que não demonstrou, e encaminha o trabalho de evidência para Theo.',
      },
      {
        title: 'Preparando conteúdo para um setor regulado.',
        description: 'Alex revisa os sinais de confiança junto com Vera, para que credibilidade e compliance sejam considerados juntos.',
      },
      {
        title: 'Um post convidado de um colaborador desconhecido.',
        description: 'Ele sinaliza o contexto de autor ausente, para que uma pessoa decida como atribuí-lo e assumi-lo.',
      },
    ],
    boundaryH2: 'Alex revisa os sinais de confiança. As pessoas assumem a responsabilidade pela página.',
    boundaryPara:
      'Credibilidade não pode ser fabricada. Alex revisa e relata, mas nunca inventa um autor, fabrica credenciais ou alega uma revisão que não aconteceu. O que ele traz à tona é para uma pessoa agir com honestidade.',
    boundaryChecklist: [
      'Alex revisa os sinais de confiança, nunca os inventa.',
      'Lacunas de autoria são trazidas à tona para uma pessoa preencher.',
      'Riscos em temas sensíveis são sinalizados para revisão humana.',
      'Alex apoia o time, não substitui o julgamento dele.',
    ],
    willNot: [
      { color: 'red', text: 'Inventar autores ou credenciais' },
      { color: 'red', text: 'Alegar uma revisão que não aconteceu' },
      { color: 'amber', text: 'Presumir autoridade que a página não demonstrou' },
    ],
    relatedH2: 'Workers com quem Alex trabalha.',
    relatedWorkerIds: [
      {
        id: 'evidence_gap',
        description: 'Transforma evidências fracas ou ausentes em uma checklist clara.',
        outputLabel: 'Checklist de evidências',
        ctaLabel: 'Como Theo revisa',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Sinaliza afirmações sem comprovação e risco de compliance antes da aprovação.',
        outputLabel: 'Relatório de risco e compliance',
        ctaLabel: 'Como Vera revisa',
      },
      {
        id: 'schema',
        description: 'Revisa os dados estruturados que carregam sinais de credibilidade.',
        outputLabel: 'Revisão de schema',
        ctaLabel: 'Como Sofia revisa',
      },
    ],
    ctaH2: 'Mostre quem está por trás do conteúdo.',
    ctaPara: 'Adicione Alex ao seu fluxo de trabalho e cada página chega à revisão com seus sinais de confiança e autoria verificados e visíveis.',
    guidanceFooterLabel: 'CONFIANÇA',
    guidanceFooterValue: 'Revisado · sinais verificados',
  },

  evidence_gap: {
    seoTitle: 'Worker de Lacunas de Evidência | WordPresto',
    metaDescription:
      'Theo transforma evidências fracas ou ausentes em uma checklist clara, para que as afirmações sejam sustentadas antes de a página ser aprovada ou passar pelo handoff. O que comprovar, onde buscar a fonte, o que segurar.',
    h1: 'Comprove as afirmações antes de irem ao ar.',
    heroPara1:
      'Todo conteúdo está cheio de afirmações: números, comparações, declarações de fato. Algumas são sólidas, outras são chutes, e algumas não deveriam ser publicadas até serem checadas. Theo reúne os alertas de evidência levantados ao longo do fluxo de trabalho e os transforma em uma única checklist prática do que comprovar, onde encontrar a fonte e o que segurar.',
    heroPara2: 'Para editores e revisores que querem afirmações comprovadas antes da aprovação, não depois de um leitor, ou um regulador, notar.',
    problemEyebrow: 'Onde as afirmações correm na frente da prova',
    problemH2: 'As afirmações arriscadas raramente são as que parecem arriscadas.',
    problemPara:
      'Uma frase confiante soa como fato, tenha ou não algo por trás dela. Ao longo de um rascunho, números sem comprovação e comparações que soam bem escapam porque ninguém está acompanhando qual afirmação precisa de fonte. Theo consolida essas lacunas em uma única checklist, para que nada dependa de uma suposição que ninguém checou.',
    problemAnnotation: '↘ um número preciso, sem fonte',
    beforeStamp: 'Sem comprovação',
    beforeHtml: `<p>Nosso método é <span class="ba-strike">comprovadamente capaz de reduzir o tempo de revisão em 40%</span> e é <span class="ba-strike">o mais preciso do mercado</span>.</p>`,
    beforeTags: ['Sem fonte', 'Afirmação superlativa', 'Precisa de evidência'],
    beforeNote: 'de onde vem esse 40%?',
    afterStamp: 'Checado',
    afterHtml: `<p>Sinalizado: <span class="ba-hl">"40%" precisa de fonte ou deve ser removido</span>. <span class="ba-hl">"Mais preciso" precisa de prova ou de ser reformulado.</span> Sugerida uma redação provisória segura.</p>`,
    afterTags: ['Fonte necessária', 'Reformular ou comprovar', 'Para revisão'],
    afterNote: 'agora nada vai ao ar por um chute',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma checklist que transforma preocupação vaga em ações específicas.',
    helpsPara:
      'Theo consolida os alertas de evidência em uma checklist estruturada: o que precisa de comprovação, uma fonte sugerida, o nível de risco, se deve bloquear a aprovação e uma redação provisória segura. O trabalho de comprovar uma afirmação continua com as pessoas.',
    checks: [
      'Afirmações sem fonte',
      'Números e comparações que precisam de prova',
      'Declarações que podem estar exagerando',
    ],
    improves: [
      'Preocupações vagas transformadas em ações claras',
      'Uma visão única de cada lacuna de evidência',
      'Prioridade e risco em cada item',
    ],
    prepares: [
      'Uma checklist de evidências para a página',
      'Fontes sugeridas para buscar',
      'Redação provisória segura quando útil',
    ],
    surfaces: [
      'Afirmações que deveriam bloquear a aprovação',
      'Declarações de alto risco para uma pessoa avaliar',
      'Fontes que precisam de uma pessoa para verificar',
    ],
    ioH2: 'Do que Theo parte, e o que ele produz.',
    worksFrom: [
      'Alertas de evidência do fluxo de trabalho',
      'Afirmações e números do rascunho',
      'Sensibilidade e risco do tema',
      'Fontes já existentes na página',
      'Notas de revisão e compliance',
    ],
    produces: [
      'Uma checklist de evidências consolidada',
      'Itens que exigem evidência',
      'Fontes sugeridas e níveis de risco',
      'Sinalizações de bloqueio de aprovação',
      'Redação provisória segura',
    ],
    scenarios: [
      {
        title: 'Uma estatística precisa sem citação.',
        description: 'Theo sinaliza o número, marca como precisando de fonte e sugere uma redação segura até que uma seja encontrada.',
      },
      {
        title: 'Um superlativo que a página não consegue provar.',
        description: 'Ele sinaliza "o melhor" ou "o mais preciso" como afirmações que precisam de evidência ou de reescrita antes da aprovação.',
      },
      {
        title: 'Um rascunho cheio de afirmações confiantes.',
        description: 'Theo reúne todas as afirmações sem comprovação em uma única checklist, para que o revisor não precise caçá-las linha por linha.',
      },
      {
        title: 'Um tema regulado perto da aprovação final.',
        description: 'Ele marca as afirmações que deveriam bloquear a aprovação até serem devidamente comprovadas, e repassa o risco para Vera.',
      },
      {
        title: 'Preparando uma página para o handoff.',
        description: 'Theo confirma que a checklist de evidências está limpa antes de Audrey montar o relatório de aprovação.',
      },
      {
        title: 'Uma afirmação que se apoia em uma expertise não demonstrada.',
        description: 'Ele se coordena com Alex para que autoridade e evidência sejam ambas mostradas, não presumidas.',
      },
    ],
    boundaryH2: 'Theo encontra as lacunas. As pessoas fornecem a prova.',
    boundaryPara:
      'Evidência é uma responsabilidade humana. Theo identifica o que precisa de comprovação e o quão arriscada é cada lacuna, mas não inventa fontes, fabrica números ou aprova uma afirmação. Preencher e verificar a evidência continua com as pessoas.',
    boundaryChecklist: [
      'Theo encontra lacunas, nunca inventa evidências.',
      'Cada item é apresentado para uma pessoa resolver.',
      'Afirmações que deveriam bloquear a aprovação são sinalizadas.',
      'Theo apoia o revisor, não substitui o julgamento dele.',
    ],
    willNot: [
      { color: 'red', text: 'Inventar fontes ou números' },
      { color: 'red', text: 'Aprovar uma afirmação sem comprovação' },
      { color: 'amber', text: 'Deixar passar uma declaração de alto risco' },
    ],
    relatedH2: 'Workers com quem Theo trabalha.',
    relatedWorkerIds: [
      {
        id: 'trust_author_credibility',
        description: 'Revisa se a autoridade por trás das afirmações está visível.',
        outputLabel: 'Revisão de confiança',
        ctaLabel: 'Como Alex revisa',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Sinaliza afirmações sem comprovação e risco de compliance antes da aprovação.',
        outputLabel: 'Relatório de risco e compliance',
        ctaLabel: 'Como Vera revisa',
      },
      {
        id: 'approval_report',
        description: 'Incorpora a checklist de evidências à decisão de aprovação.',
        outputLabel: 'Relatório de aprovação',
        ctaLabel: 'Como Audrey aprova',
      },
    ],
    ctaH2: 'Comprove as afirmações antes de irem ao ar.',
    ctaPara: 'Adicione Theo ao seu fluxo de trabalho e cada página chega à revisão com suas lacunas de evidência reunidas em uma checklist clara.',
    guidanceFooterLabel: 'EVIDÊNCIA',
    guidanceFooterValue: 'Checado · lacunas listadas',
  },
};
