import type { WorkerProfileTranslatable } from './types';

export const ptBrBatch3: Record<string, WorkerProfileTranslatable> = {
  clarity_proofing: {
    seoTitle: 'Clarity & Proofing Worker | WordPresto',
    metaDescription:
      'Esme revisa gramática, clareza, tom e linguagem sensível a risco, produzindo sugestões só para revisão, para que os editores possam melhorar o texto sem entregar o controle à automação.',
    h1: 'Deixe a escrita mais limpa antes de ela chegar à revisão.',
    heroPara1:
      'Uma boa edição não é só corrigir erros de digitação. É saber onde uma frase perde o rumo, onde uma expressão soa quase certa, onde o tom escorregou e onde o leitor precisa se esforçar demais. Esme revisa a escrita em si: gramática, ortografia, pontuação, clareza, concisão, legibilidade, tom, consistência, repetição, escolha de palavras e linguagem sensível a risco. Ela produz sugestões só para revisão, para que os editores possam melhorar o texto sem entregar o controle da página à automação.',
    heroPara2:
      'Para fluxos de redação, revisões de conteúdo, atualizações de página, edições de cliente e checagens editoriais finais antes da aprovação.',
    problemEyebrow: 'Onde os fluxos de edição dão errado',
    problemH2: 'Uma página pode estar correta nos fatos e ainda ser difícil de ler.',
    problemPara:
      'A maioria dos conteúdos não falha porque cada frase está quebrada. Falha porque pequenos problemas se acumulam: uma expressão vaga aqui, uma frase longa ali, palavras repetidas, transições fracas, ruído de pontuação, deriva de tom e complexidade desnecessária. Esme detecta os problemas em nível de linguagem antes que virem atrito na revisão.',
    problemAnnotation: '↘ revise a escrita, depois aprove',
    beforeStamp: 'Rascunho bruto',
    beforeHtml: `<p>A página foi projetada para ajudar os usuários a entender a oferta de serviço e traz vários exemplos diferentes que podem ser úteis para pessoas que estão possivelmente considerando fazer uma reserva.</p>`,
    beforeTags: ['Frase longa', 'Redação vaga', 'Ritmo monótono', 'Linguagem de conversão fraca'],
    beforeNote: 'isso faz a página parecer inacabada',
    afterStamp: 'Depois de Esme',
    afterHtml: `<p>A página explica o serviço com clareza, traz exemplos práticos e ajuda clientes em potencial a decidir se devem fazer a reserva.</p>`,
    afterTags: ['Frase mais clara', 'Menos repetição', 'Foco mais forte no leitor', 'Ritmo mais limpo'],
    afterNote: 'os editores podem revisar a sugestão, sem reescrever do zero',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma passada de revisão que melhora a escrita sem tirar o controle do editor.',
    helpsPara:
      'Esme revisa a linguagem em nível de frase, parágrafo e página. Ela destaca problemas que tornam o texto mais difícil de ler, menos consistente, menos polido ou mais arriscado do que precisa ser. Ela não reescreve a página no lugar do editor. Ela dá sugestões específicas e revisáveis, para que uma pessoa possa aceitar, rejeitar ou adaptar a mudança.',
    checks: [
      'Gramática, ortografia e pontuação',
      'Clareza, concisão e extensão das frases',
      'Repetição, redação fraca e escolha de palavras',
      'Tom, adequação à voz e consistência',
      'Linguagem sensível a risco e exagero',
    ],
    improves: [
      'Legibilidade antes de a página chegar à revisão final',
      'Precisão em nível de frase sem mudar o sentido aprovado',
      'Consistência entre seções, rascunhos e atualizações de página',
    ],
    prepares: [
      'Uma revisão estruturada de clareza e revisão de texto',
      'Sugestões em nível de frase para revisão humana',
      'Uma lista de problemas de redação que precisam de julgamento editorial',
    ],
    surfaces: [
      'Expressões tecnicamente corretas, mas estranhas',
      'Frases que precisam ser simplificadas',
      'Deriva de tom em relação à voz escolhida ou ao propósito da página',
      'Afirmações arriscadas, exageros ou redação pouco clara',
    ],
    ioH2: 'Do que Esme parte, e o que ela produz.',
    worksFrom: [
      'Texto da página ou do rascunho',
      'Conteúdo do Writing Canvas',
      'Resultado da reescrita de seções',
      'Sinais de voz e estilo',
      'Sinais da revisão de qualidade do rascunho',
    ],
    produces: [
      'Revisão de clareza',
      'Sugestões de gramática e pontuação',
      'Sinalizações de concisão e legibilidade',
      'Notas de tom e consistência',
      'Alertas de linguagem sensível a risco',
    ],
    scenarios: [
      {
        title: 'Uma página está quase pronta, mas ainda parece bruta.',
        description:
          'Esme encontra o atrito em nível de linguagem: frases estranhas, expressões repetidas, redação pouco clara e problemas de pontuação.',
      },
      {
        title: 'Um rascunho foi editado por várias pessoas.',
        description:
          'Ela verifica a consistência, para que a página não pareça costurada a partir de vozes diferentes.',
      },
      {
        title: 'Um cliente fez mudanças manuais no texto.',
        description:
          'Esme revisa a nova redação sem desfazer a intenção do cliente nem reescrever a página silenciosamente.',
      },
      {
        title: 'Uma página precisa de uma revisão no estilo Grammarly dentro do fluxo de trabalho do Word Presto.',
        description:
          'Ela dá sugestões práticas em nível de frase, mantendo o editor no controle.',
      },
      {
        title: 'Um tema regulado ou sensível precisa de uma redação cuidadosa.',
        description:
          'Esme sinaliza exageros, redação arriscada e linguagem que pode precisar de uma checagem humana de compliance.',
      },
      {
        title: 'Um rascunho final está caminhando para a aprovação.',
        description:
          'Ela pega pequenos problemas antes de o Portão de Aprovação Editorial revisar a página.',
      },
    ],
    boundaryH2: 'Esme revisa o texto. Os editores decidem o que muda.',
    boundaryPara:
      'Uma revisão de clareza não é uma reescrita automática. Esme produz sugestões, sinalizações e notas de revisão. O editor decide o que aceitar, o que rejeitar e o que precisa de uma edição humana diferente.',
    boundaryChecklist: [
      'Esme sugere, nunca aplica.',
      'As sugestões são pensadas para revisão dentro do fluxo de trabalho editorial.',
      'As notas de tom e clareza apoiam o julgamento humano, não o substituem.',
      'A linguagem sensível a risco é sinalizada para revisão, não tratada como aprovação jurídica ou de compliance.',
    ],
    willNot: [
      { color: 'red', text: 'Editar ou reescrever conteúdo ao vivo diretamente' },
      { color: 'red', text: 'Aplicar sugestões sem aprovação humana' },
      { color: 'red', text: 'Publicar, atualizar o WordPress ou escrever em qualquer CMS' },
      { color: 'red', text: 'Chamar um provedor externo para essa revisão local' },
      { color: 'red', text: 'Inventar fatos, evidências ou regras de marca' },
    ],
    relatedH2: 'Workers com quem Esme trabalha.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: 'Verifica se o texto combina com a voz configurada antes de a revisão apertar a linguagem.',
        outputLabel: 'Revisão de voz',
        ctaLabel: 'Como Helena verifica',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Verifica se o rascunho cobre as mudanças aprovadas e se há riscos de qualidade.',
        outputLabel: 'Revisão de qualidade do rascunho',
        ctaLabel: 'Como Quinn revisa',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Revisa se o conteúdo está pronto para a aprovação editorial humana.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como Dana decide',
      },
    ],
    ctaH2: 'Deixe a escrita mais limpa antes de ela chegar à revisão.',
    ctaPara:
      'Adicione Esme ao seu fluxo de trabalho e toda página passa por uma revisão cuidadosa antes de chegar à aprovação final.',
    guidanceFooterLabel: 'STATUS DA REVISÃO',
    guidanceFooterValue: 'Sugestões prontas · aguardando o editor',
  },

  cannibalisation_overlap: {
    seoTitle: 'Cannibalisation & Overlap Worker | WordPresto',
    metaDescription:
      'Cleo revisa uma página em busca de conflito de intenção, risco de sobreposição e papel de conteúdo pouco claro, ajudando os editores a decidir se devem aprimorar, apoiar, consolidar ou checar manualmente a página em relação a outras.',
    h1: 'Encontre páginas que estão tentando fazer trabalho demais.',
    heroPara1:
      'A canibalização de conteúdo não é só um problema de ranqueamento em nível de site. Ela pode começar dentro de uma única página: intenção mista, papel editorial pouco claro, metadados que prometem a coisa errada, seções rasas que deveriam estar em outro lugar, ou texto de página que compete com outro ativo provável. Cleo revisa uma página em busca de conflito de intenção, risco de sobreposição e papel de conteúdo pouco claro. Ela ajuda os editores a decidir se a página deve ser aprimorada, apoiada, consolidada ou checada manualmente em relação a outras páginas.',
    heroPara2:
      'Para revisões de SEO, auditorias de conteúdo, planejamento temático e fluxos de melhoria de página.',
    problemEyebrow: 'Onde a canibalização começa',
    problemH2: 'As páginas competem quando seu papel não está claro.',
    problemPara:
      'Uma página pode tentar ser um guia, uma página de serviço, uma página de comparação e uma página de vendas ao mesmo tempo. Ou pode conter uma seção rasa que deveria ser um artigo de apoio separado. Ou seu título e meta description podem prometer uma intenção que o corpo não cumpre. Cleo revisa esses sinais de sobreposição antes que o site fique mais difícil de administrar.',
    problemAnnotation: '↘ esclareça o papel da página',
    beforeStamp: 'Risco de sobreposição',
    beforeHtml: `<p>A página apresenta o serviço, compara alternativas, responde a perguntas frequentes amplas e mira um título no estilo de guia.</p>`,
    beforeTags: ['Intenção mista', 'Papel pouco claro', 'Seções de apoio rasas', 'Descompasso com a promessa da SERP'],
    beforeNote: 'a página pode competir com conteúdo futuro',
    afterStamp: 'Papel esclarecido',
    afterHtml: `<p>A página é posicionada como uma página de decisão de serviço, com o conteúdo de guia movido para ativos de apoio.</p>`,
    afterTags: ['Papel de página claro', 'Intenção mais limpa', 'Melhor planejamento de cluster', 'Checagens manuais listadas'],
    afterNote: 'o editor sabe para que serve essa página',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma revisão de canibalização que é honesta sobre seus limites.',
    helpsPara:
      'Cleo revisa os sinais em nível de página já disponíveis no fluxo de trabalho. Ela pode sinalizar indicadores de risco e checagens manuais, mas não afirma detectar canibalização completa entre páginas do site, a menos que existam dados de rastreamento e ranqueamento do site.',
    checks: [
      'Conflito de intenção dentro da página',
      'Descompasso na promessa dos metadados',
      'Papel editorial pouco claro',
      'Seções rasas que talvez pertençam a outro lugar',
      'Risco de sobreposição em nível de página',
      'Checagens manuais necessárias entre páginas',
    ],
    improves: [
      'Clareza do propósito da página',
      'Planejamento de cluster temático',
      'Decisões de consolidação de conteúdo',
      'Confiança antes de reescrever ou expandir uma página',
    ],
    prepares: [
      'Revisão de risco de canibalização',
      'Papel de página recomendado',
      'Checagens manuais de sobreposição',
      'Próxima ação sugerida',
    ],
    surfaces: [
      'Páginas tentando atender intenções concorrentes',
      'Seções que talvez mereçam sua própria página',
      'Metadados que podem competir com outro ativo',
      'Riscos que exigem confirmação por rastreamento, palavra-chave ou SERP',
    ],
    ioH2: 'Do que Cleo parte, e o que ela produz.',
    worksFrom: [
      'Avaliação de intenção',
      'Sinais de inventário de conteúdo',
      'Revisão de metadados',
      'Sinais de links e relacionamento',
      'Estrutura da página e profundidade de conteúdo',
    ],
    produces: [
      'Revisão de risco de sobreposição',
      'Papel de página recomendado',
      'Notas de conflito de intenção',
      'Checagens manuais entre páginas',
      'Sugestões de consolidação',
    ],
    scenarios: [
      {
        title: 'Uma página parece sem foco.',
        description:
          'Cleo verifica se a página está misturando intenções ou tentando atender a propósitos demais.',
      },
      {
        title: 'Você suspeita de canibalização de palavras-chave.',
        description:
          'Ela revisa o risco em nível de página e lista o que precisa de confirmação entre páginas.',
      },
      {
        title: 'Os metadados e o conteúdo não combinam.',
        description:
          'Cleo sinaliza quando o título ou a meta description prometem uma página diferente da que o corpo entrega.',
      },
      {
        title: 'Um cluster de conteúdo está ficando bagunçado.',
        description:
          'Ela ajuda a identificar se uma página deve ser aprimorada, dividida, apoiada ou consolidada.',
      },
      {
        title: 'Uma seção parece rasa demais.',
        description:
          'Cleo sinaliza conteúdo que talvez funcione melhor como uma página de apoio ou destino de link interno.',
      },
      {
        title: 'Uma reescrita pode piorar a sobreposição.',
        description:
          'Ela ajuda os editores a proteger o papel da página antes de as mudanças de texto começarem.',
      },
    ],
    boundaryH2: 'Cleo sinaliza o risco. Os editores decidem a estratégia de conteúdo.',
    boundaryPara:
      'Cleo não mescla páginas, redireciona URLs, exclui conteúdo nem declara canibalização confirmada em todo o site com base apenas em evidência de página. Ela dá ao editor uma revisão de risco estruturada e checagens manuais.',
    boundaryChecklist: [
      'Cleo sinaliza risco de sobreposição, nunca mescla ou exclui páginas.',
      'Afirmações de canibalização entre páginas só são feitas com dados de rastreamento ou ranqueamento de apoio.',
      'Os papéis de página recomendados são propostas para revisão editorial, não mudanças automáticas.',
      'As checagens manuais são listadas com clareza, para que os editores saibam o que ainda precisa de confirmação.',
    ],
    willNot: [
      { color: 'red', text: 'Mesclar, podar ou redirecionar páginas' },
      { color: 'red', text: 'Confirmar canibalização entre páginas sem dados de apoio' },
      { color: 'red', text: 'Reescrever títulos ou conteúdo automaticamente' },
      { color: 'red', text: 'Excluir seções ou páginas' },
      { color: 'red', text: 'Publicar ou aplicar mudanças a um CMS' },
    ],
    relatedH2: 'Workers com quem Cleo trabalha.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Identifica a intenção do leitor que Cleo verifica em busca de conflito.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como Yuna identifica',
      },
      {
        id: 'topical_authority',
        description: 'Revisa a profundidade e o apoio do cluster temático.',
        outputLabel: 'Revisão de cobertura',
        ctaLabel: 'Como Zara revisa',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Ajuda a transformar achados de sobreposição em recomendações de manutenção.',
        outputLabel: 'Revisão de manutenção',
        ctaLabel: 'Como Hugo ajuda',
      },
    ],
    ctaH2: 'Esclareça o papel antes de a página competir consigo mesma.',
    ctaPara:
      'Cleo ajuda os editores a enxergar risco de sobreposição, intenção mista e questões de consolidação antes de o conteúdo avançar.',
    guidanceFooterLabel: 'STATUS DE SOBREPOSIÇÃO',
    guidanceFooterValue: 'Precisa de revisão · papel pouco claro',
  },

  content_decay: {
    seoTitle: 'Content Decay & Refresh Priority Worker | WordPresto',
    metaDescription:
      'Faye revisa sinais de atualidade e risco de decadência de conteúdo, ajudando os editores a decidir se uma página ainda está atual, precisa de monitoramento, deve ser atualizada ou exige revisão urgente.',
    h1: 'Saiba quando uma página está começando a perder o gás.',
    heroPara1:
      'Algumas páginas falham devagar. O texto ainda existe, a URL ainda carrega, mas a evidência está velha, o título promete algo atual, os exemplos parecem datados, ou o tema já avançou. Faye revisa sinais de atualidade e risco de decadência de conteúdo. Ela ajuda os editores a decidir se uma página ainda está atual, precisa de monitoramento, deve ser atualizada ou exige revisão urgente.',
    heroPara2:
      'Para auditorias de conteúdo, planejamento de atualização, manutenção de SEO e páginas em que idade, precisão ou atualidade importam.',
    problemEyebrow: 'Onde a decadência de conteúdo começa',
    problemH2: 'Uma página pode parecer pronta enquanto sua utilidade está desaparecendo.',
    problemPara:
      'A decadência de conteúdo costuma ser sutil. Uma data no título, um exemplo antigo, uma afirmação sem comprovação, uma comparação ultrapassada, ou um tipo de página que precisa de atualizações regulares podem reduzir aos poucos a confiança e o desempenho. Faye procura os sinais que dizem aos editores que uma página precisa de atenção antes que ela se torne um problema maior de ranqueamento ou credibilidade.',
    problemAnnotation: '↘ encontre a decadência antes de a página escorregar',
    beforeStamp: 'Conteúdo desatualizado',
    beforeHtml: `<p>O título promete um guia atual, mas os exemplos, as evidências e as recomendações não foram revisados recentemente.</p>`,
    beforeTags: ['Promessa temporal', 'Exemplos antigos', 'Atualidade fraca das evidências', 'Sem ritmo de manutenção'],
    beforeNote: 'a página pode não merecer mais confiança',
    afterStamp: 'Atualização planejada',
    afterHtml: `<p>A página é marcada para revisão, os exemplos desatualizados são sinalizados, e um ritmo de manutenção prático é recomendado.</p>`,
    afterTags: ['Status claro', 'Prioridade útil', 'Revisão humana', 'Sem atualização falsa'],
    afterNote: 'o editor sabe o que precisa de atenção',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de atualidade sem fingir que atualiza a página.',
    helpsPara:
      'Faye revisa os sinais de página já disponíveis e identifica conteúdo que talvez precise ser atualizado. Ela não edita, agenda, publica nem inventa fatos atualizados. Ela dá ao editor um sinal de manutenção claro.',
    checks: [
      'Linguagem temporal em títulos, metadados e texto',
      'Atualidade das evidências',
      'Sensibilidade do tipo de conteúdo à idade',
      'Descompasso com a promessa da SERP',
      'Indicadores de ritmo de manutenção',
      'Riscos de confiança por informação desatualizada',
    ],
    improves: [
      'Planejamento de manutenção de conteúdo',
      'Priorização de atualização',
      'Visibilidade editorial de páginas envelhecendo',
      'Confiança antes de atualizar uma página ou deixá-la como está',
    ],
    prepares: [
      'Revisão de prioridade de atualização',
      'Ritmo de manutenção recomendado',
      'Checklist de sinais de desatualização',
      'Sugestões de revisão humana',
    ],
    surfaces: [
      'Afirmações ou exemplos datados',
      'Promessas de "ano atual" que precisam de confirmação',
      'Páginas que deveriam ser monitoradas',
      'Conteúdo que talvez precise de revisão urgente',
    ],
    ioH2: 'Do que Faye parte, e o que ela produz.',
    worksFrom: [
      'Título da página e metadados',
      'Texto da página',
      'Sinais da revisão de evidências',
      'Sinais de inventário de conteúdo',
      'Sinais de intenção e formato',
    ],
    produces: [
      'Revisão de atualidade',
      'Status de risco de decadência',
      'Prioridade de atualização',
      'Ritmo de manutenção',
      'Checagens manuais',
    ],
    scenarios: [
      {
        title: 'Uma página contém datas, tendências ou conselhos atuais.',
        description:
          'Faye verifica se a página ainda parece atual o suficiente para merecer confiança.',
      },
      {
        title: 'Uma página caiu de desempenho.',
        description:
          'Ela ajuda a identificar se a atualidade pode ser parte do problema.',
      },
      {
        title: 'Uma auditoria de conteúdo precisa de prioridades de atualização.',
        description:
          'Faye ajuda a separar páginas que estão bem das páginas que precisam de atenção.',
      },
      {
        title: 'Um título promete algo atualizado.',
        description:
          'Ela verifica se o corpo realmente sustenta essa promessa.',
      },
      {
        title: 'Uma página inclui evidências, exemplos ou estatísticas.',
        description:
          'Faye sinaliza itens que talvez precisem de verificação ou substituição.',
      },
      {
        title: 'Um fluxo de manutenção precisa de estrutura.',
        description:
          'Ela recomenda se a página deve ser monitorada, atualizada ou revisada com urgência.',
      },
    ],
    boundaryH2: 'Faye sinaliza o risco de atualidade. Os editores decidem a atualização.',
    boundaryPara:
      'Faye não atualiza fatos, reescreve seções, agenda atualizações nem publica mudanças. Ela revisa os sinais disponíveis e diz ao editor o que precisa de atenção.',
    boundaryChecklist: [
      'Faye sinaliza o risco de atualidade, nunca reescreve ou atualiza o conteúdo ela mesma.',
      'Os sinais de atualidade são revisados a partir do que já existe, não de fatos ou datas inventados.',
      'A prioridade de atualização é uma recomendação para o planejamento editorial, não um cronograma automático.',
      'O risco de decadência inferido é sinalizado para revisão, não tratado como perda de ranqueamento confirmada.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever conteúdo desatualizado automaticamente' },
      { color: 'red', text: 'Inventar exemplos, datas ou evidências novas' },
      { color: 'red', text: 'Agendar atualizações' },
      { color: 'red', text: 'Publicar ou aplicar mudanças a um CMS' },
      { color: 'red', text: 'Tratar o risco de atualidade inferido como perda de ranqueamento confirmada' },
    ],
    relatedH2: 'Workers com quem Faye trabalha.',
    relatedWorkerIds: [
      {
        id: 'content_inventory',
        description: 'Classifica a página como um ativo de conteúdo e identifica sinais úteis de inventário.',
        outputLabel: 'Revisão de inventário',
        ctaLabel: 'Como Nora classifica',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Revisa se conteúdo fraco ou envelhecido deve ser atualizado, consolidado ou podado.',
        outputLabel: 'Revisão de manutenção',
        ctaLabel: 'Como Hugo revisa',
      },
      {
        id: 'content_refresh_brief',
        description: 'Transforma os achados de atualização em um briefing estruturado de atualização de conteúdo.',
        outputLabel: 'Briefing de atualização',
        ctaLabel: 'Como Iris planeja',
      },
    ],
    ctaH2: 'Mantenha páginas envelhecendo visíveis antes de virarem problemas.',
    ctaPara:
      'Faye ajuda os editores a identificar decadência de conteúdo, prioridade de revisão e ritmo de manutenção antes de a página perder confiança.',
    guidanceFooterLabel: 'STATUS DE ATUALIDADE',
    guidanceFooterValue: 'Atualização recomendada · revisão necessária',
  },

  topical_authority: {
    seoTitle: 'Topical Authority & Coverage Gap Worker | WordPresto',
    metaDescription:
      'Zara revisa sinais de cobertura temática e lacunas de conteúdo, ajudando os editores a ver se uma página parece forte, precisa de apoio, está incompleta ou exige um plano de conteúdo mais amplo.',
    h1: 'Veja se a página tem apoio temático suficiente.',
    heroPara1:
      'Uma página pode cobrir seu assunto com clareza e ainda assim estar em um cluster de conteúdo fraco. Ela pode não ter páginas de apoio, deixar de cobrir subtemas relacionados, estar longe demais do seu hub, ou carregar um papel temático que o site não construiu adequadamente ao redor. Zara revisa sinais de cobertura temática e lacunas de conteúdo. Ela ajuda os editores a ver se uma página parece forte, precisa de apoio, está incompleta ou exige um plano de conteúdo mais amplo.',
    heroPara2:
      'Para auditorias de SEO, planejamento de cluster temático, briefings de conteúdo e páginas que precisam de sinais de autoridade mais fortes.',
    problemEyebrow: 'Onde a autoridade temática enfraquece',
    problemH2: 'Uma página boa nem sempre garante um tema forte.',
    problemPara:
      'O desempenho de busca costuma depender do sistema de conteúdo ao redor. Uma página pode precisar de textos explicativos de apoio, páginas de comparação, páginas de serviço, recursos baseados em evidência, links internos ou um posicionamento mais claro no cluster temático. Zara revisa se a página parece bem apoiada ou se está carregando responsabilidade temática demais sozinha.',
    problemAnnotation: '↘ construa o tema ao redor da página',
    beforeStamp: 'Apoio fraco',
    beforeHtml: `<p>A página cobre o assunto principal, mas não há recursos de apoio óbvios, caminhos internos ou cobertura de subtemas relacionados.</p>`,
    beforeTags: ['Cluster raso', 'Apoio ausente', 'Contexto interno fraco', 'Checagens manuais necessárias'],
    beforeNote: 'a página está trabalhando sozinha',
    afterStamp: 'Cobertura aprimorada',
    afterHtml: `<p>O papel da página é esclarecido e as necessidades de conteúdo de apoio são listadas para planejamento.</p>`,
    afterTags: ['Papel de página claro', 'Lista de lacunas', 'Melhor plano de cluster', 'Decisão humana'],
    afterNote: 'o editor sabe o que construir a seguir',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de cobertura temática antes de expandir o conteúdo.',
    helpsPara:
      'Zara revisa a profundidade do tema, o apoio do cluster e os sinais de cobertura ausente a partir da evidência de página disponível. Ela não cria novas páginas nem afirma ter um mapa temático completo de todo o site sem dados de rastreamento e de projeto.',
    checks: [
      'Papel temático e propósito da página',
      'Lacunas de subtemas de apoio',
      'Apoio de links internos e de cluster',
      'Cobertura de intenção',
      'Sinais de risco de órfã',
      'Checagens manuais de cluster temático necessárias',
    ],
    improves: [
      'Qualidade do planejamento de conteúdo',
      'Estrutura do cluster temático',
      'Decisões de apoio interno',
      'Confiança antes de construir briefings ou novas páginas',
    ],
    prepares: [
      'Revisão de lacunas de cobertura',
      'Papel de página recomendado',
      'Ideias de conteúdo de apoio',
      'Checagens manuais de cluster',
    ],
    surfaces: [
      'Páginas de apoio ausentes',
      'Cobertura temática rasa',
      'Apoio fraco de links internos',
      'Conflitos ou lacunas de cluster que precisam de confirmação',
    ],
    ioH2: 'Do que Zara parte, e o que ela produz.',
    worksFrom: [
      'Avaliação de intenção',
      'Sinais de relacionamento de conteúdo',
      'Revisão de inventário de conteúdo',
      'Estrutura e profundidade da página',
      'Sinais de lacuna de evidência',
    ],
    produces: [
      'Revisão de cobertura',
      'Lista de lacunas temáticas',
      'Papel de página recomendado',
      'Sugestões de conteúdo de apoio',
      'Checagens manuais de cluster',
    ],
    scenarios: [
      {
        title: 'Uma página precisa de mais autoridade temática.',
        description:
          'Zara verifica se o apoio de conteúdo ao redor parece forte o suficiente.',
      },
      {
        title: 'Você está planejando um cluster de conteúdo.',
        description:
          'Ela identifica lacunas de conteúdo de apoio a partir do papel temático da página.',
      },
      {
        title: 'Uma página parece ampla demais.',
        description:
          'Zara sinaliza se os subtemas talvez precisem de ativos de apoio separados.',
      },
      {
        title: 'A linkagem interna parece fraca.',
        description:
          'Ela verifica se a página tem apoio suficiente de relacionamento temático.',
      },
      {
        title: 'Um briefing precisa de um contexto temático melhor.',
        description:
          'Zara ajuda a definir o que mais o artigo ou a página deveria cobrir ou a que deveria se conectar.',
      },
      {
        title: 'O desempenho de busca depende de autoridade.',
        description:
          'Ela dá aos editores uma visão mais clara da profundidade temática e das lacunas de cobertura.',
      },
    ],
    boundaryH2: 'Zara revisa a cobertura. Os editores decidem o plano de conteúdo.',
    boundaryPara:
      'Zara não cria páginas, não constrói clusters automaticamente, não publica conteúdo novo nem afirma autoridade completa em todo o site a partir da revisão de uma única página. Ela sinaliza sinais de cobertura e lacunas de planejamento.',
    boundaryChecklist: [
      'Zara sinaliza lacunas de cobertura, nunca cria ou publica páginas ela mesma.',
      'As ideias de conteúdo de apoio são sugestões para planejamento, não briefings automáticos.',
      'Afirmações de cluster em todo o site só são feitas com dados de projeto ou rastreamento de apoio.',
      'As checagens manuais são listadas com clareza, para que os editores saibam o que ainda precisa de confirmação.',
    ],
    willNot: [
      { color: 'red', text: 'Criar ou publicar páginas de apoio' },
      { color: 'red', text: 'Inventar um mapa temático completo' },
      { color: 'red', text: 'Confirmar cobertura de cluster em todo o site sem dados de projeto' },
      { color: 'red', text: 'Reescrever a página automaticamente' },
      { color: 'red', text: 'Aplicar mudanças a um CMS' },
    ],
    relatedH2: 'Workers com quem Zara trabalha.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Esclarece a intenção do leitor que Zara verifica em relação à cobertura temática.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como Yuna esclarece',
      },
      {
        id: 'internal_linking',
        description: 'Revisa links e caminhos do leitor que apoiam a conexão temática.',
        outputLabel: 'Avaliação de links',
        ctaLabel: 'Como Leo revisa',
      },
      {
        id: 'semantic_search_analyzer',
        description: 'Usa recuperação baseada em vetores para encontrar lacunas de cobertura semântica mais profundas.',
        outputLabel: 'Revisão de cobertura semântica',
        ctaLabel: 'Como Sema encontra lacunas',
      },
    ],
    ctaH2: 'Construa conteúdo mais forte ao redor da página.',
    ctaPara:
      'Zara ajuda os editores a ver onde uma página precisa de apoio temático, ativos relacionados ou um planejamento de cluster melhor.',
    guidanceFooterLabel: 'STATUS DE COBERTURA',
    guidanceFooterValue: 'Precisa de apoio · lacunas encontradas',
  },

  conversion_alignment: {
    seoTitle: 'Conversion & CTA Alignment Worker | WordPresto',
    metaDescription:
      'Diane revisa o alinhamento de conversão: clareza da CTA, sinais de confiança, lacunas de prova, correspondência com a promessa dos metadados e se o próximo passo faz sentido para a intenção da página.',
    h1: 'Verifique se a página dá ao leitor um próximo passo claro.',
    heroPara1:
      "Um conteúdo pode satisfazer a intenção de busca e ainda assim falhar comercialmente. A página pode explicar bem o tema, mas esconder a chamada para ação, deixar de ter sinais de confiança, pedir a ação errada, ou criar um caminho de conversão que não combina com o estágio do leitor. Diane revisa o alinhamento de conversão: clareza da CTA, sinais de confiança, lacunas de prova, correspondência com a promessa dos metadados e se o próximo passo faz sentido para a intenção da página.",
    heroPara2:
      'Para páginas de serviço, landing pages, conteúdo comercial, páginas de geração de leads e revisões finais de página antes do handoff.',
    problemEyebrow: 'Onde o alinhamento de conversão quebra',
    problemH2: 'Uma página pode ser útil e ainda assim deixar o leitor sem rumo.',
    problemPara:
      'O problema geralmente não é a falta de um botão. É a ação errada, a prova fraca, os sinais de confiança vagos, o momento pouco claro ou um próximo passo que não combina com o motivo pelo qual o leitor chegou ali. Diane revisa se a página leva a algum lugar sensato.',
    problemAnnotation: '↘ alinhe intenção com ação',
    beforeStamp: 'Caminho fraco',
    beforeHtml: `<p>A página explica o serviço, mas a CTA é genérica, a prova é fraca e o próximo passo aparece tarde demais.</p>`,
    beforeTags: ['CTA fraca', 'Prova ausente', 'Baixa confiança', 'Momento ruim'],
    beforeNote: 'o leitor não tem um motivo claro para agir',
    afterStamp: 'Caminho esclarecido',
    afterHtml: `<p>A página traz prova relevante, um próximo passo mais claro e uma CTA que combina com o estágio de decisão do leitor.</p>`,
    afterTags: ['Mais confiança', 'Ação clara', 'Ajuste à intenção', 'Revisão humana'],
    afterNote: 'o editor pode melhorar o caminho',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de conversão sem fingir que roda experimentos.',
    helpsPara:
      'Diane revisa sinais de conversão já visíveis na evidência da página. Ela não roda testes A/B, não acessa analytics nem reescreve texto de vendas automaticamente. Ela dá aos editores uma revisão prática de se a página apoia a ação.',
    checks: [
      'Presença e clareza da CTA',
      'Alinhamento entre intenção e ação',
      'Sinais de confiança e prova',
      'Correspondência com a promessa dos metadados',
      'Caminho de decisão do leitor',
      'Distrações de conversão ou próximos passos fracos',
    ],
    improves: [
      'Clareza de páginas comerciais',
      'Posicionamento e relevância da CTA',
      'Construção de confiança antes da ação',
      'Visibilidade editorial de caminhos de conversão fracos',
    ],
    prepares: [
      'Revisão de alinhamento de conversão',
      'Sugestões de melhoria de CTA',
      'Lista de lacunas de sinais de confiança',
      'Próxima ação recomendada',
    ],
    surfaces: [
      'CTAs ausentes ou fracas',
      'Lacunas de prova',
      'Descompasso entre a CTA e a intenção da página',
      'Links ou seções que distraem da conversão',
    ],
    ioH2: 'Do que Diane parte, e o que ela produz.',
    worksFrom: [
      'Avaliação de intenção',
      'Estrutura da página',
      'Revisão de metadados',
      'Sinais de evidência e confiança',
      'Sinais de caminho de links',
    ],
    produces: [
      'Revisão de alinhamento de conversão',
      'Notas de clareza da CTA',
      'Lista de lacunas de confiança',
      'Próximo passo recomendado',
      'Achados sobre o caminho de decisão',
    ],
    scenarios: [
      {
        title: 'Uma página de serviço não está gerando ação.',
        description:
          'Diane verifica se a página tem uma rota clara e crível até o contato ou a reserva.',
      },
      {
        title: 'Uma página tem tráfego, mas leads fracos.',
        description:
          'Ela revisa se o próximo passo combina com o provável estágio do leitor.',
      },
      {
        title: 'Uma CTA parece genérica.',
        description:
          'Diane verifica se a ação é específica o suficiente para o propósito da página.',
      },
      {
        title: 'Os sinais de confiança são rasos.',
        description:
          'Ela sinaliza prova ausente, reasseguramento ou contexto de credibilidade.',
      },
      {
        title: 'Uma página mistura informação e vendas.',
        description:
          'Diane ajuda a esclarecer se o caminho de conversão apoia ou interrompe o leitor.',
      },
      {
        title: 'Uma página está indo para a revisão final.',
        description:
          'Ela verifica se o editor deveria melhorar o caminho antes da aprovação.',
      },
    ],
    boundaryH2: 'Diane revisa o caminho. Os editores decidem a mudança.',
    boundaryPara:
      'Diane não roda experimentos, não acessa analytics, não reescreve CTAs automaticamente nem garante melhoria de conversão. Ela revisa o alinhamento e dá aos editores humanos achados práticos.',
    boundaryChecklist: [
      'Diane sinaliza risco de conversão, nunca reescreve CTAs ou textos ela mesma.',
      'Os achados vêm de evidência em nível de página, não de acesso a analytics ou experimentos ao vivo.',
      'Os próximos passos recomendados são sugestões para revisão editorial, não mudanças automáticas.',
      'Nenhuma garantia de melhoria de conversão é feita.',
    ],
    willNot: [
      { color: 'red', text: 'Rodar testes A/B' },
      { color: 'red', text: 'Acessar analytics ou alegar aumento de conversão' },
      { color: 'red', text: 'Reescrever chamadas para ação automaticamente' },
      { color: 'red', text: 'Adicionar formulários, botões ou rastreamento' },
      { color: 'red', text: 'Publicar ou aplicar mudanças a um CMS' },
    ],
    relatedH2: 'Workers com quem Diane trabalha.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Esclarece a intenção do leitor que Diane alinha com a ação da página.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como Yuna esclarece',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Verifica se o formato da página sustenta a forma esperada na busca.',
        outputLabel: 'Revisão de formato',
        ctaLabel: 'Como Ivan verifica',
      },
      {
        id: 'internal_linking',
        description: 'Revisa links e caminhos em torno do próximo passo.',
        outputLabel: 'Avaliação de links',
        ctaLabel: 'Como Leo revisa',
      },
    ],
    ctaH2: 'Transforme páginas úteis em jornadas mais claras.',
    ctaPara:
      'Diane ajuda os editores a ver se a página dá aos leitores confiança, clareza e direção suficientes para dar o próximo passo.',
    guidanceFooterLabel: 'STATUS DE CONVERSÃO',
    guidanceFooterValue: 'Precisa de revisão · caminho fraco',
  },

  content_format_serp_fit: {
    seoTitle: 'Content Format & SERP Fit Worker | WordPresto',
    metaDescription:
      'Ivan revisa se o formato de conteúdo atual combina com a intenção provável e a forma esperada da página, sinalizando conflitos de formato e metadados que prometem uma experiência diferente.',
    h1: 'Verifique se a página está na forma certa para o trabalho.',
    heroPara1:
      'Uma página pode mirar no tema certo e ainda assim usar o formato errado. Quem busca talvez precise de um guia, uma comparação, uma checklist, uma página de serviço, um texto explicativo, um FAQ, uma página estilo produto ou uma página de decisão, enquanto o conteúdo entrega outra coisa. Ivan revisa se o formato de conteúdo atual combina com a intenção provável e a forma esperada da página. Ele sinaliza conflitos de formato, elementos estruturais ausentes e pontos em que os metadados prometem uma experiência diferente da própria página.',
    heroPara2:
      'Para revisões de SEO, briefings de conteúdo, reescritas de página e decisões de formato antes da redação.',
    problemEyebrow: 'Onde o formato de conteúdo dá errado',
    problemH2: 'A página responde ao tema na forma errada.',
    problemPara:
      'Um "guia" que se comporta como uma página de vendas. Uma página de serviço que se lê como um post de blog. Uma página de comparação sem estrutura de comparação. Uma página de FAQ sem perguntas de verdade. Esses descompassos de formato tornam a página mais difícil de entender para leitores e buscadores. Ivan verifica se o formato da página cumpre a promessa.',
    problemAnnotation: '↘ combine a forma com a intenção',
    beforeStamp: 'Ajuste ruim',
    beforeHtml: `<p>O título promete um guia prático, mas a página é, na maior parte, uma visão geral da empresa, sem passos, exemplos ou apoio à decisão.</p>`,
    beforeTags: ['Descompasso de formato', 'Seções ausentes', 'Ajuste fraco à SERP', 'Descompasso com a expectativa do leitor'],
    beforeNote: 'a página parece o resultado errado',
    afterStamp: 'Formato esclarecido',
    afterHtml: `<p>A página é marcada como uma página de decisão de serviço, com o conteúdo de guia movido para um briefing de apoio.</p>`,
    afterTags: ['Formato claro', 'Expectativas melhores', 'Estrutura útil', 'Pronta para revisão'],
    afterNote: 'o editor sabe que forma construir',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de formato antes de escrever mais texto.',
    helpsPara:
      'Ivan revisa a forma atual da página e a compara com o formato provavelmente esperado. Ele não busca SERPs ao vivo nem reescreve a página. Ele dá aos editores uma avaliação de formato estruturada.',
    checks: [
      'Formato atual da página',
      'Formato esperado com base na intenção',
      'Seções ausentes específicas do formato',
      'Alinhamento com a promessa dos metadados',
      'Descompasso entre estrutura e tipo de conteúdo',
      'Lacunas na expectativa do leitor',
    ],
    improves: [
      'Planejamento de página antes da reescrita',
      'Qualidade do briefing',
      'Alinhamento com a intenção de busca',
      'Decisões estruturais antes de o texto ser escrito',
    ],
    prepares: [
      'Revisão de ajuste de formato',
      'Formato de página recomendado',
      'Lista de seções ausentes',
      'Orientação de reescrita para editores',
    ],
    surfaces: [
      'Páginas com formato errado',
      'Tipos de página mistos',
      'Elementos de comparação, guia, FAQ ou serviço ausentes',
      'Metadados que prometem uma experiência de conteúdo diferente',
    ],
    ioH2: 'Do que Ivan parte, e o que ele produz.',
    worksFrom: [
      'Avaliação de intenção',
      'Estrutura da página',
      'Revisão de metadados',
      'Sinais de inventário de conteúdo',
      'Sinais de schema e snippet de SERP',
    ],
    produces: [
      'Revisão de ajuste de formato',
      'Formato recomendado',
      'Notas de estrutura ausente',
      'Preocupações de ajuste à SERP',
      'Sugestões de reescrita para humanos',
    ],
    scenarios: [
      {
        title: 'Uma página mira no tema certo, mas parece errada.',
        description:
          'Ivan verifica se o problema é de formato, não só de texto.',
      },
      {
        title: 'Um briefing precisa de um tipo de página mais claro.',
        description:
          'Ele ajuda a decidir se a página deve ser um guia, uma página de serviço, uma comparação, um texto explicativo ou um FAQ.',
      },
      {
        title: 'Um título promete um formato que a página não entrega.',
        description:
          'Ivan sinaliza o descompasso antes de as mudanças de metadados ou texto avançarem.',
      },
      {
        title: 'Uma reescrita está prestes a começar.',
        description:
          'Ele dá ao editor uma estrutura melhor antes da redação.',
      },
      {
        title: 'A intenção de busca e as necessidades de conversão entram em conflito.',
        description:
          'Ivan ajuda a esclarecer a forma que pode atender às duas.',
      },
      {
        title: 'Uma página tem seções esperadas ausentes.',
        description:
          'Ele lista lacunas específicas do formato para revisão humana.',
      },
    ],
    boundaryH2: 'Ivan recomenda a forma. Os editores decidem a estrutura.',
    boundaryPara:
      'Ivan não busca SERPs ao vivo, não reescreve a página, não cria schema nem publica mudanças. Ele revisa o formato da página e dá aos editores uma recomendação estruturada.',
    boundaryChecklist: [
      'Ivan recomenda o formato, nunca reescreve a página ele mesmo.',
      'As avaliações de formato vêm da evidência da página, não de buscas de SERP ao vivo.',
      'A estrutura recomendada é uma sugestão para revisão editorial, não uma mudança automática.',
      'Nenhuma melhoria de ranqueamento é garantida.',
    ],
    willNot: [
      { color: 'red', text: 'Buscar ou fabricar layouts de SERP' },
      { color: 'red', text: 'Reescrever a página automaticamente' },
      { color: 'red', text: 'Criar ou aplicar schema' },
      { color: 'red', text: 'Garantir melhoria de ranqueamento' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem Ivan trabalha.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Esclarece a intenção do leitor que Ivan usa para avaliar o ajuste de formato.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como Yuna esclarece',
      },
      {
        id: 'topical_authority',
        description: 'Verifica se o formato tem apoio temático suficiente.',
        outputLabel: 'Revisão de cobertura',
        ctaLabel: 'Como Zara revisa',
      },
      {
        id: 'conversion_alignment',
        description: 'Verifica se o formato escolhido apoia o próximo passo.',
        outputLabel: 'Revisão de conversão',
        ctaLabel: 'Como Diane verifica',
      },
    ],
    ctaH2: 'Coloque a página na forma certa antes de melhorá-la.',
    ctaPara:
      'Ivan ajuda os editores a escolher o formato que combina com a intenção de busca, a expectativa do leitor e o propósito da página.',
    guidanceFooterLabel: 'STATUS DE FORMATO',
    guidanceFooterValue: 'Ajuste ruim · revisão necessária',
  },

  internal_link_pathway: {
    seoTitle: 'Internal Link Pathway Worker | WordPresto',
    metaDescription:
      'Felix revisa a saúde dos caminhos de links internos: risco de página órfã, qualidade do texto âncora, relações de hub e spoke, links de próximo passo ausentes, links concorrentes e coerência do caminho.',
    h1: 'Revise os caminhos que leitores e rastreadores conseguem realmente seguir.',
    heroPara1:
      'Links internos não são só sinais de SEO. São rotas pelo site. Bons links ajudam o leitor a passar da pergunta para a prova, do guia para o serviço, da página de apoio para a página comercial e do tema amplo para a ação específica. Felix revisa a saúde dos caminhos de links internos: risco de página órfã, qualidade do texto âncora, relações de hub e spoke, links de próximo passo ausentes, links concorrentes e coerência do caminho.',
    heroPara2:
      'Para auditorias de links internos, revisões de página, melhorias de cluster temático e checagens de caminho de conversão.',
    problemEyebrow: 'Onde a linkagem interna dá errado',
    problemH2: 'Os links existem, mas nem sempre criam um caminho útil.',
    problemPara:
      'Uma página pode ter links internos vagos, desconectados, escondidos, que distraem ou que apontam para o próximo passo errado. Ela pode deixar de se conectar ao seu hub, às páginas de apoio ou ao caminho de conversão. Felix revisa se os links formam um caminho coerente, não só se os links estão presentes.',
    problemAnnotation: '↘ transforme links em jornadas',
    beforeStamp: 'Caminho fraco',
    beforeHtml: `<p>A página faz link para três posts sem relação e usa âncoras vagas que não explicam por que o leitor deveria clicar.</p>`,
    beforeTags: ['Links soltos', 'Âncoras fracas', 'Sem relação com o hub', 'Próximo passo ruim'],
    beforeNote: 'o site parece desconectado',
    afterStamp: 'Caminho esclarecido',
    afterHtml: `<p>Os links apoiam o papel da página, usam âncoras descritivas e levam a páginas de apoio ou conversão úteis.</p>`,
    afterTags: ['Âncoras claras', 'Melhor caminho de cluster', 'Próximo passo útil', 'Seguro para revisão'],
    afterNote: 'o leitor tem uma rota adiante',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de caminho de links internos antes de editar os links.',
    helpsPara:
      'Felix revisa sinais de página já visíveis e o contexto dos links. Ele não edita âncoras, não busca as páginas linkadas, não rastreia o site inteiro nem publica mudanças. Ele dá aos editores uma revisão de caminho estruturada.',
    checks: [
      'Presença e posicionamento de links internos',
      'Clareza do texto âncora',
      'Links de próximo passo ausentes',
      'Sinais de hub, spoke e página de apoio',
      'Links concorrentes ou que distraem',
      'Coerência do caminho',
    ],
    improves: [
      'Movimento do leitor pelo site',
      'Qualidade dos links internos',
      'Apoio de cluster temático',
      'Clareza do caminho de conversão',
    ],
    prepares: [
      'Revisão de caminho interno',
      'Sugestões de ação de link',
      'Notas de qualidade de âncora',
      'Checagens manuais do grafo do site',
    ],
    surfaces: [
      'Âncoras fracas',
      'Links de apoio ausentes',
      'Caminhos de link confusos',
      'Links internos que podem competir com o propósito da página',
    ],
    ioH2: 'Do que Felix parte, e o que ele produz.',
    worksFrom: [
      'Links internos',
      'Texto âncora',
      'Revisão de relacionamento de conteúdo',
      'Sinais de intenção e formato',
      'Sinais de alinhamento de conversão',
    ],
    produces: [
      'Revisão de caminho',
      'Notas de qualidade de âncora',
      'Sugestões de link ausente',
      'Riscos de caminho concorrente',
      'Ações de link recomendadas',
    ],
    scenarios: [
      {
        title: 'Uma página tem links, mas nenhuma jornada clara.',
        description:
          'Felix verifica se os links formam um caminho útil.',
      },
      {
        title: 'Um cluster temático precisa de mais apoio.',
        description:
          'Ele revisa se a página se conecta a hubs, spokes ou páginas de apoio.',
      },
      {
        title: 'O texto âncora parece vago.',
        description:
          'Felix sinaliza links que não explicam seu destino.',
      },
      {
        title: 'Uma página tem movimento de conversão fraco.',
        description:
          'Ele verifica se os links internos apoiam ou distraem do próximo passo pretendido.',
      },
      {
        title: 'Uma página pode estar isolada.',
        description:
          'Felix lista sinais de risco de página órfã e checagens manuais.',
      },
      {
        title: 'Os editores estão planejando melhorias de link.',
        description:
          'Ele dá ações de link revisáveis antes de alguém editar a página.',
      },
    ],
    boundaryH2: 'Felix revisa os caminhos. Os editores decidem as mudanças de link.',
    boundaryPara:
      'Felix não adiciona, remove ou reescreve links automaticamente. Ele não rastreia o site inteiro nem confirma o status completo de página órfã, a menos que existam dados de descoberta. Ele produz achados de caminho só para revisão.',
    boundaryChecklist: [
      'Felix sinaliza problemas de caminho, nunca edita os links ele mesmo.',
      'Os achados vêm de sinais de página já visíveis, não de um rastreamento completo do site.',
      'O status de página órfã só é confirmado quando existem dados de descoberta.',
      'As ações de link recomendadas são sugestões para revisão editorial, não mudanças automáticas.',
    ],
    willNot: [
      { color: 'red', text: 'Editar links ou âncoras automaticamente' },
      { color: 'red', text: 'Buscar todas as páginas linkadas' },
      { color: 'red', text: 'Confirmar status de página órfã em todo o site sem dados de rastreamento' },
      { color: 'red', text: 'Criar redirecionamentos ou mudanças de navegação' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem Felix trabalha.',
    relatedWorkerIds: [
      {
        id: 'internal_linking',
        description: 'Revisa a camada mais ampla de relacionamento entre páginas.',
        outputLabel: 'Avaliação de links',
        ctaLabel: 'Como Leo revisa',
      },
      {
        id: 'topical_authority',
        description: 'Verifica se os caminhos de links apoiam o cluster temático.',
        outputLabel: 'Revisão de cobertura',
        ctaLabel: 'Como Zara revisa',
      },
      {
        id: 'conversion_alignment',
        description: 'Verifica se o caminho apoia a ação pretendida.',
        outputLabel: 'Revisão de conversão',
        ctaLabel: 'Como Diane verifica',
      },
    ],
    ctaH2: 'Faça os links internos funcionarem como um sistema.',
    ctaPara:
      'Felix ajuda os editores a transformar links soltos em caminhos claros para o leitor, apoio temático e ações de link revisáveis.',
    guidanceFooterLabel: 'STATUS DO CAMINHO',
    guidanceFooterValue: 'Precisa de revisão · caminhos fracos',
  },

  content_pruning_consolidation: {
    seoTitle: 'Content Pruning & Consolidation Worker | WordPresto',
    metaDescription:
      'Hugo revisa sinais de manutenção de conteúdo: risco de sobreposição, conteúdo raso, decadência, papel pouco claro, caminhos fracos e sugestões de consolidação, ajudando os editores a decidir a próxima ação de manutenção mais segura.',
    h1: 'Decida se um conteúdo fraco deve ser melhorado, mesclado ou deixado como está.',
    heroPara1:
      'Nem toda página com desempenho abaixo do esperado precisa de uma reescrita. Algumas páginas precisam de atualização. Algumas precisam de consolidação. Algumas deveriam ser mantidas porque servem a um propósito estreito, mas válido. Algumas precisam de uma discussão cuidadosa de poda antes de o site ficar inchado e confuso. Hugo revisa sinais de manutenção de conteúdo: risco de sobreposição, conteúdo raso, decadência, papel pouco claro, caminhos fracos e sugestões de consolidação. Ele ajuda os editores a decidir a próxima ação de manutenção mais segura.',
    heroPara2:
      'Para auditorias de conteúdo, revisões de poda, planejamento de consolidação e manutenção de site de longo prazo.',
    problemEyebrow: 'Onde a manutenção de conteúdo dá errado',
    problemH2: 'Os times ou mantêm tudo ou cortam rápido demais.',
    problemPara:
      'A poda de conteúdo é arriscada quando se baseia em sinais rasos. Uma página pode parecer fraca, mas ainda assim apoiar uma jornada de nicho, um caminho interno, uma necessidade de compliance ou um tema de cauda longa. Outra página pode parecer inofensiva enquanto causa sobreposição, decadência ou confusão de cluster. Hugo ajuda a tornar as decisões de manutenção mais cuidadosas.',
    problemAnnotation: '↘ melhore, consolide ou revise antes de cortar',
    beforeStamp: 'Poda arriscada',
    beforeHtml: `<p>A página é rasa e antiga, então o time a exclui sem checar links, sobreposição, papel da página ou valor de apoio.</p>`,
    beforeTags: ['Só sinal de rasez', 'Sem checagem de caminho', 'Sem revisão de papel', 'Exclusão arriscada'],
    beforeNote: 'a manutenção vira chute',
    afterStamp: 'Revisão cuidadosa',
    afterHtml: `<p>A página é marcada como candidata a consolidação, com checagens manuais antes de qualquer ação.</p>`,
    afterTags: ['Segura para revisão', 'Atenta ao papel', 'Checagens listadas', 'Sem exclusão automática'],
    afterNote: 'o editor decide com contexto',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de manutenção sem ação destrutiva.',
    helpsPara:
      'Hugo combina sinais já disponíveis e os transforma em uma recomendação de manutenção revisável. Ele não exclui páginas, não mescla conteúdo, não cria redirecionamentos nem publica mudanças.',
    checks: [
      'Sinais de conteúdo raso ou fraco',
      'Decadência de conteúdo e risco de atualidade',
      'Canibalização e risco de sobreposição',
      'Clareza do papel da página',
      'Valor do link interno/caminho',
      'Checagens manuais antes da poda ou consolidação',
    ],
    improves: [
      'Planejamento de manutenção de conteúdo',
      'Decisões de poda mais seguras',
      'Qualidade da revisão de consolidação',
      'Visibilidade de páginas que precisam de ação ou proteção',
    ],
    prepares: [
      'Recomendação de manutenção',
      'Revisão de candidata a consolidação',
      'Notas de cautela para poda',
      'Checklist de verificação manual',
    ],
    surfaces: [
      'Páginas que talvez precisem de atualização em vez de poda',
      'Páginas que talvez pertençam dentro de outro ativo',
      'Riscos antes de excluir ou consolidar',
      'Dados ausentes necessários antes de uma decisão final',
    ],
    ioH2: 'Do que Hugo parte, e o que ele produz.',
    worksFrom: [
      'Sinais de inventário de conteúdo',
      'Revisão de canibalização',
      'Revisão de atualidade',
      'Sinais de caminho interno',
      'Sinais de cobertura temática',
    ],
    produces: [
      'Revisão de manutenção',
      'Ação recomendada',
      'Sugestões de consolidação',
      'Cautelas de poda',
      'Checagens manuais',
    ],
    scenarios: [
      {
        title: 'Uma página parece fraca, mas ainda pode importar.',
        description:
          'Hugo verifica se a página tem valor antes de alguém considerar a poda.',
      },
      {
        title: 'Há suspeita de sobreposição de conteúdo.',
        description:
          'Ele ajuda a decidir se deve consolidar, aprimorar ou revisar manualmente.',
      },
      {
        title: 'Uma página é antiga e rasa.',
        description:
          'Hugo separa oportunidades de atualização de candidatas a consolidação.',
      },
      {
        title: 'Um site tem páginas semelhantes demais.',
        description:
          'Ele dá aos editores um caminho de manutenção mais seguro do que a exclusão às cegas.',
      },
      {
        title: 'Links internos dependem da página.',
        description:
          'Hugo sinaliza o risco de caminho antes da remoção ou consolidação.',
      },
      {
        title: 'Um plano de manutenção precisa de ações revisáveis.',
        description:
          'Ele transforma sinais bagunçados em uma recomendação estruturada.',
      },
    ],
    boundaryH2: 'Hugo recomenda a manutenção. Os editores decidem a ação.',
    boundaryPara:
      'Hugo não exclui, mescla, redireciona, reescreve nem publica. Ele só recomenda uma direção de manutenção e lista as checagens manuais necessárias antes da ação.',
    boundaryChecklist: [
      'Hugo recomenda uma direção, nunca exclui ou mescla páginas ele mesmo.',
      'Os achados combinam sinais de revisão já existentes, não uma nova análise destrutiva.',
      'As checagens manuais são sempre listadas antes de qualquer poda ou consolidação.',
      'Sinais fracos sozinhos nunca são tratados como suficientes para uma ação destrutiva.',
    ],
    willNot: [
      { color: 'red', text: 'Excluir ou podar páginas' },
      { color: 'red', text: 'Mesclar conteúdo automaticamente' },
      { color: 'red', text: 'Criar redirecionamentos' },
      { color: 'red', text: 'Reescrever ou republicar conteúdo' },
      { color: 'red', text: 'Tratar sinais fracos como suficientes para uma ação destrutiva' },
    ],
    relatedH2: 'Workers com quem Hugo trabalha.',
    relatedWorkerIds: [
      {
        id: 'cannibalisation_overlap',
        description: 'Sinaliza riscos de sobreposição e de papel de página pouco claro.',
        outputLabel: 'Revisão de sobreposição',
        ctaLabel: 'Como Cleo revisa',
      },
      {
        id: 'content_decay',
        description: 'Revisa se a página precisa de atualização ou revisão urgente.',
        outputLabel: 'Revisão de atualidade',
        ctaLabel: 'Como Faye revisa',
      },
      {
        id: 'content_inventory',
        description: 'Classifica a página como um ativo de conteúdo antes das decisões de manutenção.',
        outputLabel: 'Revisão de inventário',
        ctaLabel: 'Como Nora classifica',
      },
    ],
    ctaH2: 'Torne a manutenção de conteúdo mais segura.',
    ctaPara:
      'Hugo ajuda os editores a decidir se uma página deve ser atualizada, consolidada, protegida ou revisada antes de qualquer ação destrutiva ser considerada.',
    guidanceFooterLabel: 'STATUS DE MANUTENÇÃO',
    guidanceFooterValue: 'Precisa de revisão · candidata a consolidação',
  },

  content_inventory: {
    seoTitle: 'Content Inventory Worker | WordPresto',
    metaDescription:
      'Nora revisa a página como um ativo de conteúdo, identificando tipo de página, sinais estruturais, lacunas de conteúdo e metadados de inventário que podem ajudar os editores a planejar melhor o trabalho.',
    h1: 'Entenda com que tipo de ativo de conteúdo você está lidando.',
    heroPara1:
      'Antes de uma página poder ser melhorada, ela precisa ser classificada. É uma página de serviço, um guia, um artigo, uma landing page, uma página de comparação, uma página de suporte ou outra coisa? Que sinais estão presentes? O que está faltando? O que ajudaria o planejamento futuro? Nora revisa a página como um ativo de conteúdo. Ela identifica tipo de página, sinais estruturais, lacunas de conteúdo e metadados de inventário que podem ajudar os editores a planejar melhor o trabalho.',
    heroPara2:
      'Para auditorias de conteúdo, revisões de página, planejamento de conteúdo e avaliação editorial em estágio inicial.',
    problemEyebrow: 'Onde o planejamento de conteúdo dá errado',
    problemH2: 'Os times começam a melhorar páginas antes de saber o que a página deveria ser.',
    problemPara:
      'Uma página só pode ser julgada adequadamente depois que seu papel fica claro. Uma página de serviço rasa, um artigo fraco e uma página de comparação incompleta precisam de ações diferentes. Sem contexto de inventário, toda recomendação corre o risco de ficar genérica. Nora dá ao fluxo de trabalho uma classificação de conteúdo mais clara antes de a revisão mais profunda começar.',
    problemAnnotation: '↘ classifique o ativo antes de melhorá-lo',
    beforeStamp: 'Ativo pouco claro',
    beforeHtml: `<p>A página tem texto de serviço, FAQs e seções no estilo de guia, mas nenhum tipo de conteúdo claro.</p>`,
    beforeTags: ['Papel pouco claro', 'Estrutura mista', 'Metadados ausentes', 'Difícil de planejar'],
    beforeNote: 'o time não sabe qual é o trabalho da página',
    afterStamp: 'Inventário revisado',
    afterHtml: `<p>A página é classificada como uma página de decisão de serviço, com prova, profundidade de FAQ e apoio de páginas relacionadas ausentes.</p>`,
    afterTags: ['Tipo mais claro', 'Lacunas de planejamento', 'Melhor roteamento de fluxo', 'Pronta para revisão'],
    afterNote: 'o editor sabe que tipo de ativo é esse',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Inventário em nível de página sem fingir que rastreia o site inteiro.',
    helpsPara:
      'Nora revisa a página inspecionada como um único ativo de conteúdo. Ela não constrói um inventário completo do site, não rastreia páginas linkadas nem classifica o domínio inteiro. Ela dá aos editores uma revisão de inventário útil em nível de página.',
    checks: [
      'Tipo de página aparente',
      'Sinais de conteúdo e estrutura',
      'Elementos de ativo ausentes',
      'Clareza do papel da página',
      'Necessidades de metadados de planejamento',
      'Checagens manuais para trabalho de inventário futuro',
    ],
    improves: [
      'Clareza da auditoria de conteúdo',
      'Roteamento de revisão de página',
      'Planejamento de briefing e manutenção',
      'Entendimento de que tipo de página está sendo revisada',
    ],
    prepares: [
      'Revisão de inventário de conteúdo',
      'Classificação de ativo aparente',
      'Lista de sinais ausentes',
      'Notas de planejamento para trabalho futuro',
    ],
    surfaces: [
      'Páginas com propósito pouco claro',
      'Elementos de conteúdo ausentes',
      'Sinais mistos de tipo de página',
      'Metadados que ajudariam o planejamento de conteúdo futuro',
    ],
    ioH2: 'Do que Nora parte, e o que ela produz.',
    worksFrom: [
      'Texto da página',
      'Estrutura da página',
      'Metadados',
      'Sinais de fonte',
      'Achados de outros Workers, quando disponíveis',
    ],
    produces: [
      'Revisão de inventário',
      'Classificação de tipo de página',
      'Sinais de ativo ausente',
      'Notas de metadados de planejamento',
      'Checagens manuais',
    ],
    scenarios: [
      {
        title: 'Uma revisão de página precisa de uma classificação inicial.',
        description:
          'Nora identifica que tipo de ativo de conteúdo o fluxo de trabalho está lidando.',
      },
      {
        title: 'Uma auditoria de conteúdo está bagunçada.',
        description:
          'Ela dá a cada página revisada um contexto de inventário mais claro.',
      },
      {
        title: 'Uma página tem sinais mistos.',
        description:
          'Nora sinaliza quando a página se comporta como mais de um tipo de conteúdo.',
      },
      {
        title: 'Uma decisão de manutenção está chegando.',
        description:
          'Ela ajuda a esclarecer se o ativo deve ser atualizado, consolidado ou expandido.',
      },
      {
        title: 'Um briefing precisa de contexto de tipo de página.',
        description:
          'Nora dá ao criador do briefing um ponto de partida mais claro.',
      },
      {
        title: 'O time precisa de metadados de planejamento.',
        description:
          'Ela lista o que tornaria o ativo mais fácil de gerenciar depois.',
      },
    ],
    boundaryH2: 'Nora classifica a página. Os editores decidem no que ela se torna.',
    boundaryPara:
      'Nora não cria um inventário completo do site, não rastreia o domínio, não edita conteúdo nem publica mudanças. Ela revisa a página atual e prepara contexto de planejamento.',
    boundaryChecklist: [
      'Nora classifica a página, nunca a edita ou reestrutura ela mesma.',
      'As revisões cobrem a página atual, não um rastreamento ou inventário de todo o site.',
      'As notas de planejamento são sugestões para roteamento editorial, não ações automáticas.',
      'As listas de sinais ausentes são sinalizadas para revisão, não tratadas como lacunas confirmadas.',
    ],
    willNot: [
      { color: 'red', text: 'Rastrear o site inteiro' },
      { color: 'red', text: 'Confirmar cobertura completa de inventário' },
      { color: 'red', text: 'Reescrever ou reestruturar a página automaticamente' },
      { color: 'red', text: 'Criar ou excluir registros de conteúdo' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem Nora trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrai os sinais de fonte que Nora usa para a classificação.',
        outputLabel: 'Sinais de página',
        ctaLabel: 'Como Patrick extrai',
      },
      {
        id: 'intent_analyst',
        description: 'Revisa se o tipo de página aparente combina com a intenção do leitor.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como Yuna revisa',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Usa o contexto de inventário antes de recomendar uma ação de manutenção.',
        outputLabel: 'Revisão de manutenção',
        ctaLabel: 'Como Hugo usa',
      },
    ],
    ctaH2: 'Classifique a página antes de decidir o que fazer com ela.',
    ctaPara:
      'Nora ajuda os editores a entender o ativo de conteúdo, seus sinais ausentes e seu papel de planejamento antes de um trabalho mais profundo começar.',
    guidanceFooterLabel: 'STATUS DE INVENTÁRIO',
    guidanceFooterValue: 'Ativo revisado · lacunas encontradas',
  },

  semantic_search_analyzer: {
    seoTitle: 'Semantic Coverage Analyser | WordPresto',
    metaDescription:
      "Sema revisa a cobertura semântica comparando o conteúdo com a camada de conhecimento e o contexto de projeto do Word Presto, trazendo à tona subtemas ausentes e entidades pouco cobertas.",
    h1: 'Encontre os conceitos que faltam na página.',
    heroPara1:
      "Um bom conteúdo não apenas menciona a palavra-chave alvo. Ele cobre as entidades, subtemas, relações e ideias de apoio que tornam a página genuinamente útil. Sema revisa a cobertura semântica comparando o conteúdo com a camada de conhecimento e o contexto de projeto do Word Presto. Ela traz à tona subtemas ausentes, entidades pouco cobertas e lacunas de cobertura que deveriam ser revisadas antes de a página ser aprovada.",
    heroPara2:
      'Para revisões avançadas de SEO, briefings de conteúdo, trabalho de autoridade temática e páginas que precisam de uma cobertura semântica mais profunda.',
    problemEyebrow: 'Onde o SEO semântico dá errado',
    problemH2: 'As páginas mencionam o tema, mas perdem o significado ao redor.',
    problemPara:
      'Uma página pode incluir a palavra-chave certa e ainda assim não cobrir o assunto adequadamente. Ela pode pular entidades-chave, evitar comparações importantes, deixar de lado conceitos de apoio ou deixar perguntas sem resposta. Sema olha além da presença da palavra-chave. Ela revisa se a página tem profundidade semântica suficiente para merecer confiança.',
    problemAnnotation: '↘ cubra o tema, não só o termo',
    beforeStamp: 'Cobertura rasa',
    beforeHtml: `<p>A página menciona o serviço, mas deixa de lado condições-chave, fatores de decisão, evidências de apoio e entidades relacionadas.</p>`,
    beforeTags: ['Palavra-chave presente', 'Entidades ausentes', 'Subtemas rasos', 'Profundidade fraca'],
    beforeNote: 'a página soa relevante, mas parece incompleta',
    afterStamp: 'Cobertura revisada',
    afterHtml: `<p>Sema lista entidades ausentes, subtemas rasos e lacunas embasadas em evidência para o editor revisar.</p>`,
    afterTags: ['Lacunas de entidade', 'Profundidade temática', 'Achados ligados a fontes', 'Seguro para revisão'],
    afterNote: 'o editor sabe o que está faltando',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de cobertura semântica com limites de evidência.',
    helpsPara:
      'Sema compara o conteúdo com o conhecimento disponível e o contexto de projeto, e então produz lacunas de cobertura revisáveis. Ela não enche o texto de palavras-chave, não fabrica entidades nem reescreve a página automaticamente.',
    checks: [
      'Subtemas ausentes',
      'Entidades pouco cobertas',
      'Profundidade semântica',
      'Saúde da distribuição de termos',
      'Lacunas de cobertura em relação ao conhecimento recuperado',
      'Suporte de evidência para as adições sugeridas',
    ],
    improves: [
      'Profundidade temática',
      'Qualidade do briefing',
      'Planos de conteúdo para construir autoridade',
      'Confiança antes da aprovação do conteúdo',
    ],
    prepares: [
      'Revisão de cobertura semântica',
      'Lista de lacunas de entidade e subtema',
      'Achados ligados a evidência',
      'Sugestões de revisão para editores',
    ],
    surfaces: [
      'Conceitos importantes ausentes do rascunho',
      'Termos usados em excesso ou pouco desenvolvidos',
      'Lacunas de cobertura que precisam de apoio de fonte',
      'Áreas em que a página é semanticamente rasa',
    ],
    ioH2: 'Do que Sema parte, e o que ela produz.',
    worksFrom: [
      'Conteúdo do rascunho ou da página',
      'Contexto do projeto',
      'Vizinhos de conhecimento',
      'Sinais de evidência',
      'Candidatos a tema e entidade',
    ],
    produces: [
      'Revisão de cobertura semântica',
      'Lista de lacunas de entidade',
      'Achados de subtema',
      'Sinal de distribuição de termos',
      'Recomendações ligadas a evidência',
    ],
    scenarios: [
      {
        title: 'Uma página precisa de mais autoridade temática.',
        description:
          'Sema identifica o que falta no conteúdo além das palavras-chave óbvias.',
      },
      {
        title: 'Um rascunho parece raso.',
        description:
          'Ela encontra entidades, subtemas e conceitos de apoio ausentes.',
      },
      {
        title: 'Um briefing precisa de um contexto mais rico.',
        description:
          'Sema dá aos editores lacunas de cobertura para considerar antes da redação.',
      },
      {
        title: 'Uma página compete em um tema complexo.',
        description:
          'Ela ajuda a trazer à tona os conceitos que páginas mais fortes costumam cobrir.',
      },
      {
        title: 'Uma atualização de conteúdo precisa de expansão guiada por evidência.',
        description:
          'Sema lista lacunas que deveriam ser revisadas com contexto de apoio.',
      },
      {
        title: 'Você quer SEO semântico sem encher o texto de palavras-chave.',
        description:
          'Ela foca em significado, cobertura e lacunas ligadas a fontes.',
      },
    ],
    boundaryH2: 'Sema identifica as lacunas. Os editores decidem o que pertence à página.',
    boundaryPara:
      'Sema não adiciona temas automaticamente, não enche o texto de palavras-chave, não reescreve o texto nem publica. Seus achados são só para revisão e devem ser julgados por um editor.',
    boundaryChecklist: [
      'Sema sinaliza lacunas, nunca adiciona temas ou reescreve o texto ela mesma.',
      'Os achados de cobertura são comparados com o conhecimento recuperado, não inventados do zero.',
      'As adições sugeridas são sugestões para revisão editorial, não inserções automáticas.',
      'Os vizinhos recuperados são tratados como sinais para revisão, não como verdade inquestionável.',
    ],
    willNot: [
      { color: 'red', text: 'Encher o conteúdo de palavras-chave' },
      { color: 'red', text: 'Inventar entidades sem comprovação' },
      { color: 'red', text: 'Reescrever ou expandir a página automaticamente' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Tratar os vizinhos recuperados como verdade inquestionável' },
    ],
    relatedH2: 'Workers com quem Sema trabalha.',
    relatedWorkerIds: [
      {
        id: 'topical_authority',
        description: 'Revisa o apoio temático em nível de página e as lacunas de cluster.',
        outputLabel: 'Revisão de cobertura',
        ctaLabel: 'Como Zara revisa',
      },
      {
        id: 'evidence',
        description: 'Revisa se as adições sugeridas têm comprovação.',
        outputLabel: 'Pacote de evidências',
        ctaLabel: 'Como Kenji revisa',
      },
      {
        id: 'competitor_intel',
        description: 'Compara a cobertura com evidência real de SERP de concorrentes, quando disponível.',
        outputLabel: 'Revisão de cobertura de concorrentes',
        ctaLabel: 'Como Cassius compara',
      },
    ],
    ctaH2: 'Encontre o significado que a página ainda não cobriu.',
    ctaPara:
      'Sema ajuda os editores a fortalecer a profundidade temática com lacunas semânticas revisáveis, não com excesso de palavras-chave.',
    guidanceFooterLabel: 'STATUS SEMÂNTICO',
    guidanceFooterValue: 'Lacunas de cobertura encontradas · revisão necessária',
  },

  competitor_intel: {
    seoTitle: 'Competitor Intelligence Worker | WordPresto',
    metaDescription:
      'Cassius revisa a cobertura de concorrentes a partir de dados de SERP de concorrentes armazenados, trazendo à tona os subtemas, entidades e ângulos que os concorrentes parecem cobrir e que seu conteúdo talvez esteja deixando de lado.',
    h1: 'Veja o que os concorrentes bem ranqueados cobrem e você não.',
    heroPara1:
      'A análise de concorrentes só é útil quando é embasada em evidência real de busca. Cassius revisa a cobertura de concorrentes a partir de dados de SERP de concorrentes armazenados e a compara com a página ou o rascunho em revisão. Ele traz à tona os subtemas, entidades e ângulos que os concorrentes parecem cobrir e que seu conteúdo talvez esteja deixando de lado.',
    heroPara2:
      'Para revisões competitivas de SEO, análise de lacunas de conteúdo, planejamento guiado por palavras-chave e páginas sendo melhoradas para uma oportunidade de busca conhecida.',
    problemEyebrow: 'Onde a análise de concorrentes dá errado',
    problemH2: 'Os times copiam concorrentes em vez de entender a lacuna.',
    problemPara:
      'A revisão competitiva não deveria significar copiar ideias e imitar outra página. Ela deveria ajudar os editores a entender o que o cenário de ranqueamento parece cobrir, o que o rascunho atual deixa de lado e quais lacunas são genuinamente relevantes. Cassius transforma evidência de concorrentes em inteligência de conteúdo revisável.',
    problemAnnotation: '↘ compare a cobertura sem copiar',
    beforeStamp: 'Checagem rasa de concorrentes',
    beforeHtml: `<p>Os concorrentes mencionam vários fatores de decisão, mas o rascunho cobre só a definição básica.</p>`,
    beforeTags: ['Ângulos ausentes', 'Comparação rasa', 'Evidência de SERP necessária', 'Sem estratégia de texto'],
    beforeNote: 'a página não tem contexto competitivo',
    afterStamp: 'Cobertura comparada',
    afterHtml: `<p>Cassius lista os subtemas e entidades cobertos pelos concorrentes que o editor deveria revisar.</p>`,
    afterTags: ['Base real de SERP', 'Lista de lacunas', 'Julgamento humano', 'Sem imitação'],
    afterNote: 'o editor pode decidir o que pertence',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Revisão de cobertura de concorrentes a partir de evidência real de SERP.',
    helpsPara:
      'Cassius usa dados de SERP de concorrentes existentes quando disponíveis. Se não houver dados de SERP armazenados, ele mostra um estado bloqueado honesto, em vez de inventar achados sobre os concorrentes.',
    checks: [
      'Subtemas cobertos pelos concorrentes',
      'Entidades e ângulos ausentes',
      'Rascunho versus cobertura de concorrentes na SERP',
      'Temas repetidos entre concorrentes',
      'Limitações de evidência',
      'Estados de dados ausentes quando falta evidência de SERP',
    ],
    improves: [
      'Planejamento de conteúdo competitivo',
      'Qualidade de briefing guiado por lacunas',
      'Revisão de oportunidade de busca',
      'Consciência do que as páginas bem ranqueadas parecem abordar',
    ],
    prepares: [
      'Revisão de cobertura de concorrentes',
      'Lista de lacunas embasada em SERP',
      'Sugestões de ângulo de conteúdo',
      'Notas de limitação de evidência',
    ],
    surfaces: [
      'Temas relevantes cobertos por concorrentes',
      'Fatores de decisão ausentes',
      'Temas de SERP que vale a pena considerar',
      'Áreas em que a evidência de concorrentes é rasa demais ou indisponível',
    ],
    ioH2: 'Do que Cassius parte, e o que ele produz.',
    worksFrom: [
      'Conteúdo do rascunho ou da página',
      'Dados de SERP de concorrentes armazenados',
      'Contexto de palavra-chave ou oportunidade de busca',
      'Sinais de cobertura semântica',
      'Sinais da revisão de evidências',
    ],
    produces: [
      'Revisão de cobertura de concorrentes',
      'Lista de lacunas embasada em SERP',
      'Notas de entidade ausente',
      'Sugestões de ângulo competitivo',
      'Estado de dados ausentes quando necessário',
    ],
    scenarios: [
      {
        title: 'Uma página mira uma palavra-chave competitiva.',
        description:
          'Cassius verifica o que os concorrentes bem ranqueados parecem cobrir e que a página talvez esteja deixando de lado.',
      },
      {
        title: 'Um briefing de conteúdo precisa de contexto de concorrentes.',
        description:
          'Ele fornece sugestões guiadas por lacunas sem transformar o briefing em imitação.',
      },
      {
        title: 'Um rascunho parece mais fraco do que a SERP.',
        description:
          'Cassius identifica ângulos e entidades ausentes para revisão humana.',
      },
      {
        title: 'Uma ação de pesquisa de palavras-chave produziu dados de SERP.',
        description:
          'Ele usa esses dados armazenados para embasar os achados de cobertura de concorrentes.',
      },
      {
        title: 'Uma página está sendo atualizada para desempenho de SEO.',
        description:
          'Cassius ajuda os editores a ver se a cobertura dos concorrentes avançou.',
      },
      {
        title: 'O time precisa de evidência competitiva honesta.',
        description:
          'Ele mostra estados de dados ausentes quando a evidência de SERP dos concorrentes não está disponível.',
      },
    ],
    boundaryH2: 'Cassius compara a cobertura. Os editores decidem o que usar.',
    boundaryPara:
      'Cassius não copia conteúdo de concorrentes, não busca páginas ocultas de concorrentes, não inventa dados de SERP nem garante melhorias de ranqueamento. Ele transforma a evidência de concorrentes disponível em lacunas revisáveis.',
    boundaryChecklist: [
      'Cassius compara a cobertura, nunca copia conteúdo de concorrentes.',
      'Os achados são embasados em dados de SERP armazenados, não em afirmações inventadas sobre concorrentes.',
      'Um estado de dados ausentes é mostrado com honestidade quando falta evidência de SERP.',
      'Nenhuma melhoria de ranqueamento é garantida.',
    ],
    willNot: [
      { color: 'red', text: 'Copiar conteúdo de concorrentes' },
      { color: 'red', text: 'Inventar achados sobre concorrentes sem dados de SERP' },
      { color: 'red', text: 'Buscar páginas de concorrentes ao vivo, a menos que um fluxo de trabalho futuro dê suporte explícito a isso' },
      { color: 'red', text: 'Reescrever a página automaticamente' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem Cassius trabalha.',
    relatedWorkerIds: [
      {
        id: 'semantic_search_analyzer',
        description: 'Encontra lacunas semânticas a partir da camada de conhecimento e do contexto de projeto.',
        outputLabel: 'Revisão de cobertura semântica',
        ctaLabel: 'Como Sema encontra lacunas',
      },
      {
        id: 'intent_analyst',
        description: 'Esclarece a intenção por trás da oportunidade de busca competitiva.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como Yuna esclarece',
      },
      {
        id: 'evidence',
        description: 'Revisa se os achados guiados por concorrentes têm comprovação adequada.',
        outputLabel: 'Pacote de evidências',
        ctaLabel: 'Como Kenji revisa',
      },
    ],
    ctaH2: 'Entenda a lacuna antes de competir.',
    ctaPara:
      'Cassius ajuda os editores a comparar a cobertura com evidência real de SERP de concorrentes, sem copiar, chutar ou fabricar dados.',
    guidanceFooterLabel: 'STATUS DE CONCORRENTES',
    guidanceFooterValue: 'Lacunas encontradas · evidência necessária',
  },
};
