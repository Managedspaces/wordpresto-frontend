import type { WorkerProfileTranslatable } from './types';

export const ptBatch3: Record<string, WorkerProfileTranslatable> = {
  clarity_proofing: {
    seoTitle: 'Clarity & Proofing Worker | WordPresto',
    metaDescription:
      'A Esme revê gramática, clareza, tom e linguagem sensível a risco, produzindo sugestões apenas de revisão para que os editores possam melhorar o texto sem entregar o controlo à automação.',
    h1: 'Torne a escrita mais limpa antes de chegar à revisão.',
    heroPara1:
      'Uma boa revisão não é só corrigir gralhas. É saber onde uma frase se desvia, onde uma expressão soa quase certa, onde o tom escorregou, e onde o leitor tem de fazer um esforço a mais. A Esme revê a própria escrita: gramática, ortografia, pontuação, clareza, concisão, legibilidade, tom, consistência, repetição, escolha de palavras e linguagem sensível a risco. Produz sugestões apenas de revisão para que os editores possam melhorar o texto sem entregar o controlo da página à automação.',
    heroPara2:
      'Para fluxos de trabalho de redação, revisões de conteúdo, atualizações de páginas, edições de clientes e verificações editoriais finais antes da aprovação.',
    problemEyebrow: 'Onde os fluxos de edição correm mal',
    problemH2: 'Uma página pode estar factualmente certa e continuar difícil de ler.',
    problemPara:
      'A maioria do conteúdo não falha porque todas as frases estão erradas. Falha porque pequenos problemas se acumulam: uma expressão vaga aqui, uma frase longa ali, repetição de palavras, transições fracas, ruído de pontuação, desvio de tom e complexidade desnecessária. A Esme apanha os problemas ao nível da linguagem antes de se tornarem atrito na revisão.',
    problemAnnotation: '↘ reveja a escrita, depois aprove-a',
    beforeStamp: 'Rascunho em bruto',
    beforeHtml: `<p>A página foi concebida para ajudar os utilizadores a compreender a oferta de serviços e apresenta vários exemplos diferentes que podem ser úteis para pessoas que estejam potencialmente a considerar fazer uma reserva.</p>`,
    beforeTags: ['Frase longa', 'Linguagem vaga', 'Ritmo monótono', 'Linguagem de conversão fraca'],
    beforeNote: 'isto faz a página parecer por acabar',
    afterStamp: 'Depois da Esme',
    afterHtml: `<p>A página explica o serviço com clareza, dá exemplos práticos e ajuda potenciais clientes a decidir se querem reservar.</p>`,
    afterTags: ['Frase mais clara', 'Menos repetição', 'Foco mais forte no leitor', 'Ritmo mais limpo'],
    afterNote: 'os editores podem rever a sugestão, sem ter de reescrever do zero',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma passagem de revisão que melhora a escrita sem retirar o controlo ao editor.',
    helpsPara:
      'A Esme revê a linguagem ao nível da frase, do parágrafo e da página. Destaca problemas que tornam o texto mais difícil de ler, menos consistente, menos polido ou mais arriscado do que precisa de ser. Não reescreve a página pelo editor. Dá sugestões específicas e revisíveis, para que uma pessoa possa aceitar, rejeitar ou adaptar a alteração.',
    checks: [
      'Gramática, ortografia e pontuação',
      'Clareza, concisão e extensão das frases',
      'Repetição, linguagem fraca e escolha de palavras',
      'Tom, adequação de voz e consistência',
      'Linguagem sensível a risco e exageros',
    ],
    improves: [
      'A legibilidade antes de a página chegar à revisão final',
      'A precisão ao nível da frase sem alterar o significado aprovado',
      'A consistência entre secções, rascunhos e atualizações de página',
    ],
    prepares: [
      'Uma revisão estruturada de clareza e revisão de texto',
      'Sugestões ao nível da frase para revisão humana',
      'Uma lista de problemas de linguagem que precisam de critério editorial',
    ],
    surfaces: [
      'Expressões tecnicamente corretas mas estranhas',
      'Frases que precisam de ser simplificadas',
      'Desvio de tom face à voz selecionada ou ao propósito da página',
      'Afirmações arriscadas, exageros ou linguagem pouco clara',
    ],
    ioH2: 'Com que material a Esme trabalha, e o que produz.',
    worksFrom: [
      'Texto da página ou do rascunho',
      'Conteúdo do Canvas de escrita',
      'Resultado da reescrita de secções',
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
        title: 'Uma página está quase pronta mas ainda parece rude.',
        description:
          'A Esme encontra o atrito ao nível da linguagem: frases estranhas, expressões repetidas, linguagem pouco clara e problemas de pontuação.',
      },
      {
        title: 'Um rascunho foi editado por várias pessoas.',
        description:
          'Ela verifica a consistência, para que a página não pareça costurada a partir de vozes diferentes.',
      },
      {
        title: 'Um cliente fez alterações manuais ao texto.',
        description:
          'A Esme revê a nova linguagem sem desfazer a intenção do cliente ou reescrever a página em silêncio.',
      },
      {
        title: 'Uma página precisa de uma passagem de revisão ao estilo Grammarly dentro do fluxo de trabalho do Word Presto.',
        description:
          'Ela dá sugestões práticas ao nível da frase, mantendo o editor no controlo.',
      },
      {
        title: 'Um tema regulado ou sensível precisa de uma linguagem cuidadosa.',
        description:
          'A Esme assinala exageros, linguagem arriscada e formulações que possam precisar de uma verificação humana de conformidade.',
      },
      {
        title: 'Um rascunho final está a caminho da aprovação.',
        description:
          'Ela apanha pequenos problemas antes de a página passar pelo Portão de Aprovação Editorial.',
      },
    ],
    boundaryH2: 'A Esme revê a escrita. Os editores decidem o que muda.',
    boundaryPara:
      'Uma revisão de clareza não é uma reescrita automática. A Esme produz sugestões, sinalizações e notas de revisão. O editor decide o que aceitar, o que rejeitar e o que precisa de uma edição humana diferente.',
    boundaryChecklist: [
      'A Esme sugere, nunca aplica.',
      'As sugestões são concebidas para revisão dentro do fluxo de trabalho editorial.',
      'As notas de tom e clareza apoiam o critério humano, não o substituem.',
      'A linguagem sensível a risco é assinalada para revisão, não tratada como aprovação jurídica ou de conformidade.',
    ],
    willNot: [
      { color: 'red', text: 'Editar ou reescrever conteúdo ao vivo diretamente' },
      { color: 'red', text: 'Aplicar sugestões sem aprovação humana' },
      { color: 'red', text: 'Publicar, atualizar o WordPress ou escrever em qualquer CMS' },
      { color: 'red', text: 'Chamar um fornecedor externo para esta passagem de revisão local' },
      { color: 'red', text: 'Inventar factos, evidência ou regras de marca' },
    ],
    relatedH2: 'Workers com quem a Esme trabalha.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: 'Verifica se o texto encaixa na voz configurada antes de a revisão apertar a linguagem.',
        outputLabel: 'Revisão de voz',
        ctaLabel: 'Como a Helena verifica',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Verifica se o rascunho cobre as alterações aprovadas e se tem riscos de qualidade.',
        outputLabel: 'Revisão de qualidade do rascunho',
        ctaLabel: 'Como o Quinn revê',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Revê se o conteúdo está pronto para aprovação editorial humana.',
        outputLabel: 'Portão de aprovação',
        ctaLabel: 'Como a Dana decide',
      },
    ],
    ctaH2: 'Torne a escrita mais limpa antes de chegar à revisão.',
    ctaPara:
      'Junte a Esme ao seu fluxo de trabalho e cada página recebe uma passagem cuidadosa de revisão antes de chegar à aprovação final.',
    guidanceFooterLabel: 'ESTADO DA REVISÃO',
    guidanceFooterValue: 'Sugestões prontas · a aguardar o editor',
  },

  cannibalisation_overlap: {
    seoTitle: 'Cannibalisation & Overlap Worker | WordPresto',
    metaDescription:
      'A Cleo revê uma página quanto a conflitos de intenção, risco de sobreposição e função de conteúdo pouco clara, ajudando os editores a decidir se devem afinar, reforçar, consolidar ou verificar manualmente uma página face a outras.',
    h1: 'Encontre páginas que tentam fazer demasiadas coisas ao mesmo tempo.',
    heroPara1:
      'A canibalização de conteúdo não é apenas um problema de posicionamento à escala do site. Pode começar dentro de uma única página: intenção mista, função editorial pouco clara, metadados que prometem a coisa errada, secções pobres que pertencem a outro sítio, ou texto de página que compete com outro conteúdo provável. A Cleo revê uma página quanto a conflitos de intenção, risco de sobreposição e função de conteúdo pouco clara. Ajuda os editores a decidir se a página deve ser afinada, reforçada, consolidada ou verificada manualmente face a outras páginas.',
    heroPara2:
      'Para revisões de SEO, auditorias de conteúdo, planeamento temático e fluxos de trabalho de melhoria de páginas.',
    problemEyebrow: 'Onde a canibalização começa',
    problemH2: 'As páginas competem entre si quando a sua função não é clara.',
    problemPara:
      'Uma página pode tentar ser um guia, uma página de serviço, uma página de comparação e uma página de vendas ao mesmo tempo. Ou pode conter uma secção pobre que devia ser um artigo de apoio à parte. Ou o seu título e meta description podem prometer uma intenção que o corpo do texto não cumpre. A Cleo revê estes sinais de sobreposição antes de o site se tornar mais difícil de gerir.',
    problemAnnotation: '↘ esclareça a função da página',
    beforeStamp: 'Risco de sobreposição',
    beforeHtml: `<p>A página apresenta o serviço, compara alternativas, responde a perguntas frequentes genéricas e visa um título ao estilo de guia.</p>`,
    beforeTags: ['Intenção mista', 'Função pouco clara', 'Secções de apoio pobres', 'Promessa da SERP desalinhada'],
    beforeNote: 'a página pode competir com conteúdo futuro',
    afterStamp: 'Função esclarecida',
    afterHtml: `<p>A página é posicionada como uma página de decisão de serviço, com o conteúdo de guia movido para conteúdos de apoio.</p>`,
    afterTags: ['Função de página clara', 'Intenção mais limpa', 'Melhor planeamento de cluster', 'Verificações manuais listadas'],
    afterNote: 'o editor sabe para que serve esta página',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma revisão de canibalização que é honesta quanto aos seus limites.',
    helpsPara:
      'A Cleo revê os sinais ao nível da página já disponíveis no fluxo de trabalho. Pode assinalar indicadores de risco e verificações manuais, mas não afirma deteção completa de canibalização entre páginas do site a menos que existam dados de rastreio e de posicionamento do site.',
    checks: [
      'Conflito de intenção dentro da página',
      'Desalinhamento entre a promessa dos metadados e o conteúdo',
      'Função editorial pouco clara',
      'Secções pobres que podem pertencer a outro sítio',
      'Risco de sobreposição ao nível da página',
      'Verificações manuais entre páginas necessárias',
    ],
    improves: [
      'A clareza do propósito da página',
      'O planeamento de clusters temáticos',
      'As decisões de consolidação de conteúdo',
      'A confiança antes de reescrever ou expandir uma página',
    ],
    prepares: [
      'Revisão de risco de canibalização',
      'Função de página recomendada',
      'Verificações manuais de sobreposição',
      'Próxima ação sugerida',
    ],
    surfaces: [
      'Páginas a tentar servir intenções concorrentes',
      'Secções que podem merecer a sua própria página',
      'Metadados que podem competir com outro conteúdo',
      'Riscos que exigem confirmação por rastreio, palavra-chave ou SERP',
    ],
    ioH2: 'Com que material a Cleo trabalha, e o que produz.',
    worksFrom: [
      'Avaliação de intenção',
      'Sinais de inventário de conteúdo',
      'Revisão de metadados',
      'Sinais de links e de relação',
      'Estrutura da página e profundidade do conteúdo',
    ],
    produces: [
      'Revisão de risco de sobreposição',
      'Função de página recomendada',
      'Notas de conflito de intenção',
      'Verificações manuais entre páginas',
      'Sugestões de consolidação',
    ],
    scenarios: [
      {
        title: 'Uma página parece desfocada.',
        description:
          'A Cleo verifica se a página está a misturar intenções ou a tentar servir demasiados propósitos.',
      },
      {
        title: 'Suspeita de canibalização de palavras-chave.',
        description:
          'Ela revê o risco ao nível da página e lista o que precisa de confirmação entre páginas.',
      },
      {
        title: 'Os metadados e o conteúdo não coincidem.',
        description:
          'A Cleo assinala quando o título ou a meta description prometem uma página diferente daquela que o corpo do texto entrega.',
      },
      {
        title: 'Um cluster de conteúdo está a ficar confuso.',
        description:
          'Ela ajuda a identificar se uma página deve ser afinada, dividida, reforçada ou consolidada.',
      },
      {
        title: 'Uma secção parece demasiado pobre.',
        description:
          'A Cleo assinala conteúdo que pode funcionar melhor como página de apoio ou destino de link interno.',
      },
      {
        title: 'Uma reescrita pode agravar a sobreposição.',
        description:
          'Ela ajuda os editores a proteger a função da página antes de começarem as alterações ao texto.',
      },
    ],
    boundaryH2: 'A Cleo assinala o risco. Os editores decidem a estratégia de conteúdo.',
    boundaryPara:
      'A Cleo não junta páginas, não redireciona URLs, não elimina conteúdo nem declara canibalização confirmada à escala do site com base apenas em evidência de uma página. Dá ao editor uma revisão de risco estruturada e verificações manuais.',
    boundaryChecklist: [
      'A Cleo assinala o risco de sobreposição, nunca junta nem elimina páginas.',
      'As afirmações de canibalização entre páginas só são feitas com dados de rastreio ou de posicionamento que as sustentem.',
      'As funções de página recomendadas são propostas para revisão editorial, não alterações automáticas.',
      'As verificações manuais são listadas com clareza, para que os editores saibam o que ainda precisa de confirmação.',
    ],
    willNot: [
      { color: 'red', text: 'Juntar, podar ou redirecionar páginas' },
      { color: 'red', text: 'Confirmar canibalização entre páginas sem dados de suporte' },
      { color: 'red', text: 'Reescrever títulos ou conteúdo automaticamente' },
      { color: 'red', text: 'Eliminar secções ou páginas' },
      { color: 'red', text: 'Publicar ou aplicar alterações a um CMS' },
    ],
    relatedH2: 'Workers com quem a Cleo trabalha.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Identifica a intenção do leitor que a Cleo verifica quanto a conflitos.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como a Yuna identifica',
      },
      {
        id: 'topical_authority',
        description: 'Revê a profundidade e o apoio do cluster temático.',
        outputLabel: 'Revisão de cobertura',
        ctaLabel: 'Como a Zara revê',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Ajuda a transformar as conclusões de sobreposição em recomendações de manutenção.',
        outputLabel: 'Revisão de manutenção',
        ctaLabel: 'Como o Hugo ajuda',
      },
    ],
    ctaH2: 'Esclareça a função antes de a página competir consigo mesma.',
    ctaPara:
      'A Cleo ajuda os editores a ver o risco de sobreposição, a intenção mista e as questões de consolidação antes de o conteúdo avançar.',
    guidanceFooterLabel: 'ESTADO DA SOBREPOSIÇÃO',
    guidanceFooterValue: 'Precisa de revisão · função pouco clara',
  },

  content_decay: {
    seoTitle: 'Content Decay & Refresh Priority Worker | WordPresto',
    metaDescription:
      'A Faye revê sinais de atualidade e risco de desatualização de conteúdo, ajudando os editores a decidir se uma página ainda está atual, precisa de monitorização, deve ser atualizada ou exige revisão urgente.',
    h1: 'Saiba quando uma página começa a perder a sua vantagem.',
    heroPara1:
      'Algumas páginas falham devagar. O texto continua lá, o URL continua a carregar, mas a evidência está antiga, o título promete algo atual, os exemplos parecem datados, ou o tema já avançou. A Faye revê sinais de atualidade e risco de desatualização de conteúdo. Ajuda os editores a decidir se uma página ainda está atual, precisa de monitorização, deve ser atualizada ou exige revisão urgente.',
    heroPara2:
      'Para auditorias de conteúdo, planeamento de atualizações, manutenção de SEO e páginas em que a idade, o rigor ou a atualidade importam.',
    problemEyebrow: 'Onde a desatualização do conteúdo começa',
    problemH2: 'Uma página pode parecer acabada enquanto a sua utilidade se desvanece.',
    problemPara:
      'A desatualização de conteúdo é muitas vezes subtil. Uma data no título, um exemplo antigo, uma afirmação sem suporte, uma comparação ultrapassada, ou um tipo de página que precisa de atualizações regulares podem reduzir lentamente a confiança e o desempenho. A Faye procura os sinais que dizem aos editores que uma página precisa de atenção antes de se tornar um problema maior de posicionamento ou de credibilidade.',
    problemAnnotation: '↘ encontre a desatualização antes de a página cair',
    beforeStamp: 'Conteúdo desatualizado',
    beforeHtml: `<p>O título promete um guia atual, mas os exemplos, a evidência e as recomendações não foram revistos recentemente.</p>`,
    beforeTags: ['Promessa temporal', 'Exemplos antigos', 'Atualidade fraca da evidência', 'Sem cadência de manutenção'],
    beforeNote: 'a página pode já não merecer confiança',
    afterStamp: 'Atualização planeada',
    afterHtml: `<p>A página é marcada para revisão, os exemplos desatualizados são assinalados, e é recomendada uma cadência de manutenção prática.</p>`,
    afterTags: ['Estado claro', 'Prioridade útil', 'Revisão humana', 'Sem atualização falsa'],
    afterNote: 'o editor sabe o que precisa de atenção',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma revisão de atualidade sem fingir que atualiza a página.',
    helpsPara:
      'A Faye revê os sinais de página já disponíveis e identifica conteúdo que pode precisar de atualização. Não edita, não agenda, não publica nem inventa factos atualizados. Dá ao editor um sinal de manutenção claro.',
    checks: [
      'Linguagem temporal em títulos, metadados e texto',
      'Atualidade da evidência',
      'Sensibilidade do tipo de conteúdo à idade',
      'Desalinhamento entre a promessa e a SERP',
      'Indicadores de cadência de manutenção',
      'Riscos de confiança por informação desatualizada',
    ],
    improves: [
      'O planeamento da manutenção de conteúdo',
      'A priorização das atualizações',
      'A visibilidade editorial de páginas envelhecidas',
      'A confiança antes de atualizar uma página ou deixá-la como está',
    ],
    prepares: [
      'Revisão de prioridade de atualização',
      'Cadência de manutenção recomendada',
      'Checklist de sinais de desatualização',
      'Sugestões para revisão humana',
    ],
    surfaces: [
      'Afirmações ou exemplos datados',
      'Promessas do ano corrente que precisam de confirmação',
      'Páginas que devem ser monitorizadas',
      'Conteúdo que pode precisar de revisão urgente',
    ],
    ioH2: 'Com que material a Faye trabalha, e o que produz.',
    worksFrom: [
      'Título e metadados da página',
      'Texto da página',
      'Sinais da revisão de evidência',
      'Sinais de inventário de conteúdo',
      'Sinais de intenção e formato',
    ],
    produces: [
      'Revisão de atualidade',
      'Estado de risco de desatualização',
      'Prioridade de atualização',
      'Cadência de manutenção',
      'Verificações manuais',
    ],
    scenarios: [
      {
        title: 'Uma página contém datas, tendências ou conselhos atuais.',
        description: 'A Faye verifica se a página ainda parece suficientemente atual para merecer confiança.',
      },
      {
        title: 'Uma página perdeu desempenho.',
        description: 'Ela ajuda a identificar se a atualidade pode fazer parte do problema.',
      },
      {
        title: 'Uma auditoria de conteúdo precisa de prioridades de atualização.',
        description: 'A Faye ajuda a separar as páginas que estão bem das que precisam de atenção.',
      },
      {
        title: 'Um título promete algo atualizado.',
        description: 'Ela verifica se o corpo do texto sustenta mesmo essa promessa.',
      },
      {
        title: 'Uma página inclui evidência, exemplos ou estatísticas.',
        description: 'A Faye assinala itens que podem precisar de verificação ou substituição.',
      },
      {
        title: 'Um fluxo de trabalho de manutenção precisa de estrutura.',
        description: 'Ela recomenda se a página deve ser monitorizada, atualizada ou revista com urgência.',
      },
    ],
    boundaryH2: 'A Faye assinala o risco de desatualização. Os editores decidem a atualização.',
    boundaryPara:
      'A Faye não atualiza factos, não reescreve secções, não agenda atualizações nem publica alterações. Revê os sinais disponíveis e diz ao editor o que precisa de atenção.',
    boundaryChecklist: [
      'A Faye assinala o risco de desatualização, nunca reescreve nem atualiza o conteúdo ela própria.',
      'Os sinais de atualidade são revistos a partir do que já existe, sem factos ou datas inventados.',
      'A prioridade de atualização é uma recomendação para o planeamento editorial, não um agendamento automático.',
      'O risco de desatualização inferido é assinalado para revisão, não tratado como perda de posicionamento confirmada.',
    ],
    willNot: [
      { color: 'red', text: 'Reescrever conteúdo desatualizado automaticamente' },
      { color: 'red', text: 'Inventar exemplos, datas ou evidência novos' },
      { color: 'red', text: 'Agendar atualizações' },
      { color: 'red', text: 'Publicar ou aplicar alterações a um CMS' },
      { color: 'red', text: 'Tratar o risco de desatualização inferido como perda de posicionamento confirmada' },
    ],
    relatedH2: 'Workers com quem a Faye trabalha.',
    relatedWorkerIds: [
      {
        id: 'content_inventory',
        description: 'Classifica a página como um ativo de conteúdo e identifica sinais de inventário úteis.',
        outputLabel: 'Revisão de inventário',
        ctaLabel: 'Como a Nora classifica',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Revê se o conteúdo fraco ou envelhecido deve ser atualizado, consolidado ou podado.',
        outputLabel: 'Revisão de manutenção',
        ctaLabel: 'Como o Hugo revê',
      },
      {
        id: 'content_refresh_brief',
        description: 'Transforma as conclusões de atualização num briefing de atualização de conteúdo estruturado.',
        outputLabel: 'Briefing de atualização',
        ctaLabel: 'Como a Iris planeia',
      },
    ],
    ctaH2: 'Mantenha as páginas envelhecidas visíveis antes de se tornarem problemas.',
    ctaPara:
      'A Faye ajuda os editores a detetar a desatualização de conteúdo, a prioridade de revisão e a cadência de manutenção antes de a página perder confiança.',
    guidanceFooterLabel: 'ESTADO DE ATUALIDADE',
    guidanceFooterValue: 'Atualização recomendada · revisão necessária',
  },

  topical_authority: {
    seoTitle: 'Topical Authority & Coverage Gap Worker | WordPresto',
    metaDescription:
      'A Zara revê sinais de cobertura temática e lacunas de conteúdo, ajudando os editores a ver se uma página parece forte, precisa de apoio, está incompleta ou exige um plano de conteúdo mais amplo.',
    h1: 'Veja se a página tem apoio temático suficiente.',
    heroPara1:
      'Uma página pode cobrir o seu tema com clareza e continuar a estar num cluster de conteúdo fraco. Pode faltar-lhe páginas de apoio, subtemas relacionados, pode estar demasiado longe do seu hub, ou pode carregar uma função temática à volta da qual o site não construiu devidamente. A Zara revê sinais de cobertura temática e lacunas de conteúdo. Ajuda os editores a ver se uma página parece forte, precisa de apoio, está incompleta ou exige um plano de conteúdo mais amplo.',
    heroPara2:
      'Para auditorias de SEO, planeamento de clusters temáticos, briefings de conteúdo e páginas que precisam de sinais de autoridade mais fortes.',
    problemEyebrow: 'Onde a autoridade temática enfraquece',
    problemH2: 'Uma boa página nem sempre faz um tema forte.',
    problemPara:
      'O desempenho na pesquisa depende muitas vezes do sistema de conteúdo em redor. Uma página pode precisar de explicações de apoio, páginas de comparação, páginas de serviço, recursos baseados em evidência, links internos ou uma colocação mais clara no cluster temático. A Zara revê se a página parece bem apoiada ou se está a carregar sozinha demasiada responsabilidade temática.',
    problemAnnotation: '↘ construa o tema à volta da página',
    beforeStamp: 'Apoio fraco',
    beforeHtml: `<p>A página cobre o tema principal, mas não há recursos de apoio óbvios, percursos internos ou cobertura de subtemas relacionados.</p>`,
    beforeTags: ['Cluster pobre', 'Apoio em falta', 'Contexto interno fraco', 'Verificações manuais necessárias'],
    beforeNote: 'a página está a trabalhar sozinha',
    afterStamp: 'Cobertura melhorada',
    afterHtml: `<p>A função da página é esclarecida e as necessidades de conteúdo de apoio são listadas para planeamento.</p>`,
    afterTags: ['Função de página clara', 'Lista de lacunas', 'Melhor plano de cluster', 'Decisão humana'],
    afterNote: 'o editor sabe o que construir a seguir',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma revisão de cobertura temática antes de expandir o conteúdo.',
    helpsPara:
      'A Zara revê a profundidade do tema, o apoio do cluster e os sinais de cobertura em falta a partir da evidência de página disponível. Não cria novas páginas nem afirma um mapa temático completo à escala do site sem dados de rastreio e de projeto.',
    checks: [
      'Função temática e propósito da página',
      'Lacunas de subtemas de apoio',
      'Apoio de links internos e de cluster',
      'Cobertura de intenção',
      'Sinais de risco de página órfã',
      'Verificações manuais de cluster temático necessárias',
    ],
    improves: [
      'A qualidade do planeamento de conteúdo',
      'A estrutura do cluster temático',
      'As decisões de apoio interno',
      'A confiança antes de construir briefings ou novas páginas',
    ],
    prepares: [
      'Revisão de lacunas de cobertura',
      'Função de página recomendada',
      'Ideias de conteúdo de apoio',
      'Verificações manuais de cluster',
    ],
    surfaces: [
      'Páginas de apoio em falta',
      'Cobertura temática pobre',
      'Apoio fraco de links internos',
      'Conflitos ou lacunas de cluster que precisam de confirmação',
    ],
    ioH2: 'Com que material a Zara trabalha, e o que produz.',
    worksFrom: [
      'Avaliação de intenção',
      'Sinais de relação de conteúdo',
      'Revisão de inventário de conteúdo',
      'Estrutura e profundidade da página',
      'Sinais de lacunas de evidência',
    ],
    produces: [
      'Revisão de cobertura',
      'Lista de lacunas temáticas',
      'Função de página recomendada',
      'Sugestões de conteúdo de apoio',
      'Verificações manuais de cluster',
    ],
    scenarios: [
      {
        title: 'Uma página precisa de autoridade temática mais forte.',
        description: 'A Zara verifica se o apoio de conteúdo em redor parece suficientemente forte.',
      },
      {
        title: 'Está a planear um cluster de conteúdo.',
        description: 'Ela identifica lacunas de conteúdo de apoio a partir da função temática da página.',
      },
      {
        title: 'Uma página parece demasiado abrangente.',
        description: 'A Zara assinala se os subtemas podem precisar de conteúdos de apoio separados.',
      },
      {
        title: 'A ligação interna parece fraca.',
        description: 'Ela verifica se a página tem apoio de relação temática suficiente.',
      },
      {
        title: 'Um briefing precisa de melhor contexto temático.',
        description: 'A Zara ajuda a definir o que mais o artigo ou a página deve cobrir ou a que se deve ligar.',
      },
      {
        title: 'O desempenho na pesquisa depende da autoridade.',
        description: 'Ela dá aos editores uma visão mais clara da profundidade temática e das lacunas de cobertura.',
      },
    ],
    boundaryH2: 'A Zara revê a cobertura. Os editores decidem o plano de conteúdo.',
    boundaryPara:
      'A Zara não cria páginas, não constrói clusters automaticamente, não publica conteúdo novo nem afirma autoridade completa à escala do site com base na revisão de uma única página. Assinala sinais de cobertura e lacunas de planeamento.',
    boundaryChecklist: [
      'A Zara assinala lacunas de cobertura, nunca cria nem publica páginas ela própria.',
      'As ideias de conteúdo de apoio são sugestões para planeamento, não briefings automáticos.',
      'As afirmações de cluster à escala do site só são feitas com dados de projeto ou de rastreio que as sustentem.',
      'As verificações manuais são listadas com clareza, para que os editores saibam o que ainda precisa de confirmação.',
    ],
    willNot: [
      { color: 'red', text: 'Criar ou publicar páginas de apoio' },
      { color: 'red', text: 'Inventar um mapa temático completo' },
      { color: 'red', text: 'Confirmar cobertura de cluster à escala do site sem dados de projeto' },
      { color: 'red', text: 'Reescrever a página automaticamente' },
      { color: 'red', text: 'Aplicar alterações a um CMS' },
    ],
    relatedH2: 'Workers com quem a Zara trabalha.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Esclarece a intenção do leitor que a Zara confere face à cobertura temática.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como a Yuna esclarece',
      },
      {
        id: 'internal_linking',
        description: 'Revê os links e os percursos do leitor que apoiam a ligação temática.',
        outputLabel: 'Avaliação de links',
        ctaLabel: 'Como o Leo revê',
      },
      {
        id: 'semantic_search_analyzer',
        description: 'Usa recuperação baseada em vetores para encontrar lacunas de cobertura semântica mais profundas.',
        outputLabel: 'Revisão de cobertura semântica',
        ctaLabel: 'Como a Sema encontra lacunas',
      },
    ],
    ctaH2: 'Construa conteúdo mais forte à volta da página.',
    ctaPara:
      'A Zara ajuda os editores a ver onde uma página precisa de apoio temático, conteúdos relacionados ou melhor planeamento de cluster.',
    guidanceFooterLabel: 'ESTADO DA COBERTURA',
    guidanceFooterValue: 'Precisa de apoio · lacunas encontradas',
  },

  conversion_alignment: {
    seoTitle: 'Conversion & CTA Alignment Worker | WordPresto',
    metaDescription:
      'A Diane revê o alinhamento de conversão: clareza da CTA, sinais de confiança, lacunas de prova, correspondência da promessa dos metadados e se o próximo passo faz sentido para a intenção da página.',
    h1: 'Verifique se a página dá ao leitor um próximo passo claro.',
    heroPara1:
      'O conteúdo pode satisfazer a intenção de pesquisa e continuar a falhar comercialmente. A página pode explicar bem o tema mas enterrar a chamada para ação, faltar-lhe sinais de confiança, pedir a ação errada, ou criar um percurso de conversão que não corresponde à fase em que o leitor está. A Diane revê o alinhamento de conversão: clareza da CTA, sinais de confiança, lacunas de prova, correspondência da promessa dos metadados e se o próximo passo faz sentido para a intenção da página.',
    heroPara2:
      'Para páginas de serviço, páginas de destino, conteúdo comercial, páginas de geração de contactos e revisões finais de página antes da transferência.',
    problemEyebrow: 'Onde o alinhamento de conversão falha',
    problemH2: 'Uma página pode ser útil e continuar a deixar o leitor perdido.',
    problemPara:
      'O problema muitas vezes não é a falta de um botão. É a ação errada, a prova fraca, sinais de confiança vagos, um momento pouco claro ou um próximo passo que não corresponde à razão pela qual o leitor chegou. A Diane revê se a página leva a algum sítio que faça sentido.',
    problemAnnotation: '↘ alinhe a intenção com a ação',
    beforeStamp: 'Percurso fraco',
    beforeHtml: `<p>A página explica o serviço, mas a CTA é genérica, a prova é pobre e o próximo passo aparece tarde demais.</p>`,
    beforeTags: ['CTA fraca', 'Prova em falta', 'Confiança baixa', 'Momento errado'],
    beforeNote: 'o leitor não tem uma razão clara para agir',
    afterStamp: 'Percurso esclarecido',
    afterHtml: `<p>A página dá prova relevante, um próximo passo mais claro e uma CTA que corresponde à fase de decisão do leitor.</p>`,
    afterTags: ['Confiança melhor', 'Ação clara', 'Adequação à intenção', 'Revisão humana'],
    afterNote: 'o editor pode melhorar o percurso',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma revisão de conversão sem fingir que corre experiências.',
    helpsPara:
      'A Diane revê os sinais de conversão já visíveis na evidência da página. Não corre testes A/B, não acede a análises nem reescreve texto de vendas automaticamente. Dá aos editores uma revisão prática de se a página apoia a ação.',
    checks: [
      'Presença e clareza da CTA',
      'Alinhamento entre a intenção e a ação',
      'Sinais de confiança e de prova',
      'Correspondência da promessa dos metadados',
      'Percurso de decisão do leitor',
      'Distrações de conversão ou próximos passos fracos',
    ],
    improves: [
      'A clareza da página comercial',
      'A colocação e relevância da CTA',
      'A construção de confiança antes da ação',
      'A visibilidade editorial de percursos de conversão fracos',
    ],
    prepares: [
      'Revisão de alinhamento de conversão',
      'Sugestões de melhoria da CTA',
      'Lista de lacunas de sinais de confiança',
      'Próxima ação recomendada',
    ],
    surfaces: [
      'CTAs em falta ou fracas',
      'Lacunas de prova',
      'Desalinhamento entre a CTA e a intenção da página',
      'Links ou secções que distraem da conversão',
    ],
    ioH2: 'Com que material a Diane trabalha, e o que produz.',
    worksFrom: [
      'Avaliação de intenção',
      'Estrutura da página',
      'Revisão de metadados',
      'Sinais de evidência e de confiança',
      'Sinais de percurso de links',
    ],
    produces: [
      'Revisão de alinhamento de conversão',
      'Notas de clareza da CTA',
      'Lista de lacunas de confiança',
      'Próximo passo recomendado',
      'Conclusões sobre o percurso de decisão',
    ],
    scenarios: [
      {
        title: 'Uma página de serviço não está a gerar ação.',
        description: 'A Diane verifica se a página tem um percurso claro e credível até ao contacto ou à reserva.',
      },
      {
        title: 'Uma página tem tráfego mas contactos fracos.',
        description: 'Ela revê se o próximo passo corresponde à fase em que o leitor provavelmente está.',
      },
      {
        title: 'Uma CTA parece genérica.',
        description: 'A Diane verifica se a ação é suficientemente específica para o propósito da página.',
      },
      {
        title: 'Os sinais de confiança são pobres.',
        description: 'Ela assinala prova, tranquilização ou contexto de credibilidade em falta.',
      },
      {
        title: 'Uma página mistura informação e vendas.',
        description: 'A Diane ajuda a esclarecer se o percurso de conversão apoia ou interrompe o leitor.',
      },
      {
        title: 'Uma página vai entrar na revisão final.',
        description: 'Ela verifica se o editor deve melhorar o percurso antes da aprovação.',
      },
    ],
    boundaryH2: 'A Diane revê o percurso. Os editores decidem a alteração.',
    boundaryPara:
      'A Diane não corre experiências, não acede a análises, não reescreve CTAs automaticamente nem garante melhoria de conversão. Revê o alinhamento e dá a editores humanos conclusões práticas.',
    boundaryChecklist: [
      'A Diane assinala o risco de conversão, nunca reescreve CTAs ou texto ela própria.',
      'As conclusões vêm de evidência ao nível da página, não de acesso a análises ou experiências ao vivo.',
      'Os próximos passos recomendados são sugestões para revisão editorial, não alterações automáticas.',
      'Não é feita qualquer afirmação de melhoria de conversão garantida.',
    ],
    willNot: [
      { color: 'red', text: 'Correr testes A/B' },
      { color: 'red', text: 'Aceder a análises ou afirmar aumento de conversão' },
      { color: 'red', text: 'Reescrever chamadas para ação automaticamente' },
      { color: 'red', text: 'Adicionar formulários, botões ou rastreamento' },
      { color: 'red', text: 'Publicar ou aplicar alterações a um CMS' },
    ],
    relatedH2: 'Workers com quem a Diane trabalha.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Esclarece a intenção do leitor que a Diane alinha com a ação da página.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como a Yuna esclarece',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Verifica se o formato da página apoia a forma esperada na pesquisa.',
        outputLabel: 'Revisão de formato',
        ctaLabel: 'Como o Ivan verifica',
      },
      {
        id: 'internal_linking',
        description: 'Revê os links e os percursos à volta do próximo passo.',
        outputLabel: 'Avaliação de links',
        ctaLabel: 'Como o Leo revê',
      },
    ],
    ctaH2: 'Transforme páginas úteis em percursos mais claros.',
    ctaPara:
      'A Diane ajuda os editores a ver se a página dá aos leitores confiança, clareza e direção suficientes para dar o próximo passo.',
    guidanceFooterLabel: 'ESTADO DA CONVERSÃO',
    guidanceFooterValue: 'Precisa de revisão · percurso fraco',
  },

  content_format_serp_fit: {
    seoTitle: 'Content Format & SERP Fit Worker | WordPresto',
    metaDescription:
      'O Ivan revê se o formato atual do conteúdo corresponde à intenção provável e à forma de página esperada, assinalando conflitos de formato e metadados que prometem uma experiência diferente.',
    h1: 'Verifique se a página tem a forma certa para o trabalho.',
    heroPara1:
      'Uma página pode visar o tema certo e continuar a usar o formato errado. Quem pesquisa pode precisar de um guia, uma comparação, uma checklist, uma página de serviço, uma explicação, um FAQ, uma página ao estilo de produto ou uma página de decisão, enquanto o conteúdo lhe dá outra coisa. O Ivan revê se o formato atual do conteúdo corresponde à intenção provável e à forma de página esperada. Assinala conflitos de formato, elementos estruturais em falta e situações em que os metadados prometem uma experiência diferente da própria página.',
    heroPara2:
      'Para revisões de SEO, briefings de conteúdo, reescritas de página e decisões de formato antes da redação.',
    problemEyebrow: 'Onde o formato de conteúdo corre mal',
    problemH2: 'A página responde ao tema na forma errada.',
    problemPara:
      'Um "guia" que se comporta como uma página de vendas. Uma página de serviço que se lê como uma publicação de blogue. Uma página de comparação sem estrutura de comparação. Uma página de FAQ sem perguntas verdadeiras. Estes desalinhamentos de formato tornam a página mais difícil de compreender para leitores e motores de pesquisa. O Ivan verifica se o formato da página cumpre a promessa.',
    problemAnnotation: '↘ faça a forma corresponder à intenção',
    beforeStamp: 'Adequação fraca',
    beforeHtml: `<p>O título promete um guia prático, mas a página é sobretudo uma visão geral da empresa, sem passos, exemplos ou apoio à decisão.</p>`,
    beforeTags: ['Desalinhamento de formato', 'Secções em falta', 'Adequação fraca à SERP', 'Fraca correspondência à expectativa do leitor'],
    beforeNote: 'a página parece o resultado errado',
    afterStamp: 'Formato esclarecido',
    afterHtml: `<p>A página é marcada como uma página de decisão de serviço, com o conteúdo de guia movido para um briefing de apoio.</p>`,
    afterTags: ['Formato claro', 'Melhores expectativas', 'Estrutura útil', 'Pronto para revisão'],
    afterNote: 'o editor sabe que forma construir',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma revisão de formato antes de escrever mais texto.',
    helpsPara:
      'O Ivan revê a forma atual da página e compara-a com o formato provavelmente esperado. Não vai buscar SERPs ao vivo nem reescreve a página. Dá aos editores uma avaliação de formato estruturada.',
    checks: [
      'Formato atual da página',
      'Formato esperado com base na intenção',
      'Secções em falta específicas do formato',
      'Alinhamento da promessa dos metadados',
      'Desalinhamento de estrutura e tipo de conteúdo',
      'Lacunas na expectativa do leitor',
    ],
    improves: [
      'O planeamento da página antes da reescrita',
      'A qualidade do briefing',
      'O alinhamento com a intenção de pesquisa',
      'As decisões estruturais antes de o texto ser escrito',
    ],
    prepares: [
      'Revisão de adequação de formato',
      'Formato de página recomendado',
      'Lista de secções em falta',
      'Orientação de reescrita para os editores',
    ],
    surfaces: [
      'Páginas com formato errado',
      'Tipos de página misturados',
      'Elementos de comparação, guia, FAQ ou serviço em falta',
      'Metadados que prometem uma experiência de conteúdo diferente',
    ],
    ioH2: 'Com que material o Ivan trabalha, e o que produz.',
    worksFrom: [
      'Avaliação de intenção',
      'Estrutura da página',
      'Revisão de metadados',
      'Sinais de inventário de conteúdo',
      'Sinais de schema e de snippet da SERP',
    ],
    produces: [
      'Revisão de adequação de formato',
      'Formato recomendado',
      'Notas de estrutura em falta',
      'Preocupações de adequação à SERP',
      'Sugestões de reescrita para revisão humana',
    ],
    scenarios: [
      {
        title: 'Uma página visa o tema certo mas não parece bem.',
        description: 'O Ivan verifica se o problema é de formato, e não só de texto.',
      },
      {
        title: 'Um briefing precisa de um tipo de página mais claro.',
        description: 'Ele ajuda a decidir se a página deve ser um guia, uma página de serviço, uma comparação, uma explicação ou um FAQ.',
      },
      {
        title: 'Um título promete um formato que a página não entrega.',
        description: 'O Ivan assinala o desalinhamento antes de as alterações aos metadados ou ao texto avançarem mais.',
      },
      {
        title: 'Uma reescrita está prestes a começar.',
        description: 'Ele dá ao editor uma estrutura melhor antes da redação.',
      },
      {
        title: 'A intenção de pesquisa e as necessidades de conversão entram em conflito.',
        description: 'O Ivan ajuda a esclarecer a forma que pode servir ambas.',
      },
      {
        title: 'Uma página tem secções esperadas em falta.',
        description: 'Ele lista as lacunas específicas do formato para revisão humana.',
      },
    ],
    boundaryH2: 'O Ivan recomenda a forma. Os editores decidem a estrutura.',
    boundaryPara:
      'O Ivan não vai buscar SERPs ao vivo, não reescreve a página, não cria schema nem publica alterações. Revê o formato da página e dá aos editores uma recomendação estruturada.',
    boundaryChecklist: [
      'O Ivan recomenda o formato, nunca reescreve a página ele próprio.',
      'As avaliações de formato vêm da evidência da página, não de consultas a SERPs ao vivo.',
      'A estrutura recomendada é uma sugestão para revisão editorial, não uma alteração automática.',
      'Não é garantida qualquer melhoria de posicionamento.',
    ],
    willNot: [
      { color: 'red', text: 'Ir buscar ou fabricar esquemas de SERP' },
      { color: 'red', text: 'Reescrever a página automaticamente' },
      { color: 'red', text: 'Criar ou aplicar schema' },
      { color: 'red', text: 'Garantir melhoria de posicionamento' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem o Ivan trabalha.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Esclarece a intenção do leitor que o Ivan usa para avaliar a adequação de formato.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como a Yuna esclarece',
      },
      {
        id: 'topical_authority',
        description: 'Verifica se o formato tem apoio temático suficiente.',
        outputLabel: 'Revisão de cobertura',
        ctaLabel: 'Como a Zara revê',
      },
      {
        id: 'conversion_alignment',
        description: 'Verifica se o formato escolhido apoia o próximo passo.',
        outputLabel: 'Revisão de conversão',
        ctaLabel: 'Como a Diane verifica',
      },
    ],
    ctaH2: 'Coloque a página na forma certa antes de a melhorar.',
    ctaPara:
      'O Ivan ajuda os editores a escolher o formato que corresponde à intenção de pesquisa, à expectativa do leitor e ao propósito da página.',
    guidanceFooterLabel: 'ESTADO DO FORMATO',
    guidanceFooterValue: 'Adequação fraca · revisão necessária',
  },

  internal_link_pathway: {
    seoTitle: 'Internal Link Pathway Worker | WordPresto',
    metaDescription:
      'O Felix revê a saúde dos percursos de links internos: risco de página órfã, qualidade do texto de âncora, relações hub-and-spoke, links de próximo passo em falta, links concorrentes e coerência do percurso.',
    h1: 'Reveja os percursos que leitores e motores de pesquisa conseguem realmente seguir.',
    heroPara1:
      'Os links internos não são apenas sinais de SEO. São rotas através do site. Bons links ajudam os leitores a passar da pergunta à prova, do guia ao serviço, da página de apoio à página comercial e do tema amplo à ação específica. O Felix revê a saúde dos percursos de links internos: risco de página órfã, qualidade do texto de âncora, relações hub-and-spoke, links de próximo passo em falta, links concorrentes e coerência do percurso.',
    heroPara2:
      'Para auditorias de links internos, revisões de página, melhorias de cluster temático e verificações de percurso de conversão.',
    problemEyebrow: 'Onde a ligação interna corre mal',
    problemH2: 'Os links existem, mas nem sempre criam um percurso útil.',
    problemPara:
      'Uma página pode ter links internos vagos, desligados, enterrados, que distraem ou que apontam para o próximo passo errado. Pode não conseguir ligar-se ao seu hub, às páginas de apoio ou ao percurso de conversão. O Felix revê se os links formam um percurso coerente, não apenas se os links estão presentes.',
    problemAnnotation: '↘ transforme links em percursos',
    beforeStamp: 'Percurso fraco',
    beforeHtml: `<p>A página liga a três publicações sem relação e usa âncoras vagas que não explicam porque é que o leitor deve clicar.</p>`,
    beforeTags: ['Links soltos', 'Âncoras fracas', 'Sem relação de hub', 'Próximo passo fraco'],
    beforeNote: 'o site parece desligado',
    afterStamp: 'Percurso esclarecido',
    afterHtml: `<p>Os links apoiam a função da página, usam âncoras descritivas e levam a páginas de apoio ou de conversão úteis.</p>`,
    afterTags: ['Âncoras claras', 'Melhor percurso de cluster', 'Próximo passo útil', 'Seguro para revisão'],
    afterNote: 'o leitor tem uma rota a seguir',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma revisão de percursos de links internos antes de editar links.',
    helpsPara:
      'O Felix revê os sinais de página já visíveis e o contexto dos links. Não edita âncoras, não vai buscar páginas ligadas, não rastreia o site inteiro nem publica alterações. Dá aos editores uma revisão de percurso estruturada.',
    checks: [
      'Presença e colocação de links internos',
      'Clareza do texto de âncora',
      'Links de próximo passo em falta',
      'Sinais de hub, satélite e página de apoio',
      'Links concorrentes ou que distraem',
      'Coerência do percurso',
    ],
    improves: [
      'A circulação do leitor pelo site',
      'A qualidade dos links internos',
      'O apoio ao cluster temático',
      'A clareza do percurso de conversão',
    ],
    prepares: [
      'Revisão de percurso interno',
      'Sugestões de ação sobre links',
      'Notas de qualidade de âncoras',
      'Verificações manuais do grafo do site',
    ],
    surfaces: [
      'Âncoras fracas',
      'Links de apoio em falta',
      'Percursos de links confusos',
      'Links internos que podem competir com o propósito da página',
    ],
    ioH2: 'Com que material o Felix trabalha, e o que produz.',
    worksFrom: [
      'Links internos',
      'Texto de âncora',
      'Revisão de relação de conteúdo',
      'Sinais de intenção e formato',
      'Sinais de alinhamento de conversão',
    ],
    produces: [
      'Revisão de percurso',
      'Notas de qualidade de âncoras',
      'Sugestões de links em falta',
      'Riscos de percursos concorrentes',
      'Ações de link recomendadas',
    ],
    scenarios: [
      {
        title: 'Uma página tem links mas nenhum percurso claro.',
        description: 'O Felix verifica se os links formam um percurso útil.',
      },
      {
        title: 'Um cluster temático precisa de melhor apoio.',
        description: 'Ele revê se a página se liga a hubs, satélites ou páginas de apoio.',
      },
      {
        title: 'O texto de âncora parece vago.',
        description: 'O Felix assinala links que não explicam o seu destino.',
      },
      {
        title: 'Uma página tem uma dinâmica de conversão fraca.',
        description: 'Ele verifica se os links internos apoiam ou distraem do próximo passo pretendido.',
      },
      {
        title: 'Uma página pode estar isolada.',
        description: 'O Felix lista sinais de risco de página órfã e verificações manuais.',
      },
      {
        title: 'Os editores estão a planear melhorias aos links.',
        description: 'Ele dá ações de link revisíveis antes de alguém editar a página.',
      },
    ],
    boundaryH2: 'O Felix revê os percursos. Os editores decidem as alterações aos links.',
    boundaryPara:
      'O Felix não adiciona, remove nem reescreve links automaticamente. Não rastreia o site completo nem confirma o estado de página órfã por completo, a menos que existam dados de descoberta. Produz conclusões de percurso apenas para revisão.',
    boundaryChecklist: [
      'O Felix assinala problemas de percurso, nunca edita links ele próprio.',
      'As conclusões vêm de sinais de página já visíveis, não de um rastreio completo do site.',
      'O estado de página órfã só é confirmado quando existem dados de descoberta.',
      'As ações de link recomendadas são sugestões para revisão editorial, não alterações automáticas.',
    ],
    willNot: [
      { color: 'red', text: 'Editar links ou âncoras automaticamente' },
      { color: 'red', text: 'Ir buscar todas as páginas ligadas' },
      { color: 'red', text: 'Confirmar o estado de página órfã à escala do site sem dados de rastreio' },
      { color: 'red', text: 'Criar redirecionamentos ou alterações de navegação' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem o Felix trabalha.',
    relatedWorkerIds: [
      {
        id: 'internal_linking',
        description: 'Revê a camada mais ampla de relação entre páginas.',
        outputLabel: 'Avaliação de links',
        ctaLabel: 'Como o Leo revê',
      },
      {
        id: 'topical_authority',
        description: 'Verifica se os percursos de links apoiam o cluster temático.',
        outputLabel: 'Revisão de cobertura',
        ctaLabel: 'Como a Zara revê',
      },
      {
        id: 'conversion_alignment',
        description: 'Verifica se o percurso apoia a ação pretendida.',
        outputLabel: 'Revisão de conversão',
        ctaLabel: 'Como a Diane verifica',
      },
    ],
    ctaH2: 'Faça os links internos funcionar como um sistema.',
    ctaPara:
      'O Felix ajuda os editores a transformar links soltos em percursos claros para o leitor, apoio temático e ações de link revisíveis.',
    guidanceFooterLabel: 'ESTADO DO PERCURSO',
    guidanceFooterValue: 'Precisa de revisão · percursos fracos',
  },

  content_pruning_consolidation: {
    seoTitle: 'Content Pruning & Consolidation Worker | WordPresto',
    metaDescription:
      'O Hugo revê sinais de manutenção de conteúdo: risco de sobreposição, conteúdo pobre, desatualização, função pouco clara, percursos fracos e sugestões de consolidação, ajudando os editores a decidir a próxima ação de manutenção mais segura.',
    h1: 'Decida se um conteúdo fraco deve ser melhorado, unido ou deixado como está.',
    heroPara1:
      'Nem toda a página com fraco desempenho precisa de uma reescrita. Algumas páginas precisam de ser atualizadas. Outras precisam de ser consolidadas. Outras devem ser mantidas porque servem um propósito estreito mas válido. Outras precisam de uma discussão cuidadosa sobre poda antes de o site ficar inchado e confuso. O Hugo revê sinais de manutenção de conteúdo: risco de sobreposição, conteúdo pobre, desatualização, função pouco clara, percursos fracos e sugestões de consolidação. Ajuda os editores a decidir a próxima ação de manutenção mais segura.',
    heroPara2:
      'Para auditorias de conteúdo, revisões de poda, planeamento de consolidação e manutenção do site a longo prazo.',
    problemEyebrow: 'Onde a manutenção de conteúdo corre mal',
    problemH2: 'As equipas ou mantêm tudo ou cortam depressa demais.',
    problemPara:
      'A poda de conteúdo é arriscada quando se baseia em sinais superficiais. Uma página pode parecer fraca e continuar a apoiar um percurso de nicho, um percurso interno, uma necessidade de conformidade ou um tema de cauda longa. Outra página pode parecer inofensiva enquanto causa sobreposição, desatualização ou confusão de cluster. O Hugo ajuda a tornar as decisões de manutenção mais cuidadosas.',
    problemAnnotation: '↘ melhore, consolide ou reveja antes de cortar',
    beforeStamp: 'Poda insegura',
    beforeHtml: `<p>A página é pobre e antiga, por isso a equipa elimina-a sem verificar links, sobreposição, função da página ou valor de apoio.</p>`,
    beforeTags: ['Apenas sinal pobre', 'Sem verificação de percurso', 'Sem revisão de função', 'Eliminação arriscada'],
    beforeNote: 'a manutenção torna-se um palpite',
    afterStamp: 'Revisão cuidadosa',
    afterHtml: `<p>A página é marcada como candidata a consolidação, com verificações manuais antes de qualquer ação.</p>`,
    afterTags: ['Seguro para revisão', 'Atento à função', 'Verificações listadas', 'Sem eliminação automática'],
    afterNote: 'o editor decide com contexto',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma revisão de manutenção sem ações destrutivas.',
    helpsPara:
      'O Hugo combina sinais já disponíveis e transforma-os numa recomendação de manutenção revisível. Não elimina páginas, não junta conteúdo, não cria redirecionamentos nem publica alterações.',
    checks: [
      'Sinais de conteúdo pobre ou fraco',
      'Risco de desatualização e atualidade do conteúdo',
      'Risco de canibalização e de sobreposição',
      'Clareza da função da página',
      'Valor dos links internos e do percurso',
      'Verificações manuais antes de podar ou consolidar',
    ],
    improves: [
      'O planeamento da manutenção de conteúdo',
      'Decisões de poda mais seguras',
      'A qualidade da revisão de consolidação',
      'A visibilidade das páginas que precisam de ação ou de proteção',
    ],
    prepares: [
      'Recomendação de manutenção',
      'Revisão de candidatos a consolidação',
      'Notas de cautela sobre poda',
      'Checklist de verificação manual',
    ],
    surfaces: [
      'Páginas que podem precisar de atualização em vez de poda',
      'Páginas que podem pertencer a outro conteúdo',
      'Riscos antes de eliminar ou consolidar',
      'Dados em falta necessários antes de uma decisão final',
    ],
    ioH2: 'Com que material o Hugo trabalha, e o que produz.',
    worksFrom: [
      'Sinais de inventário de conteúdo',
      'Revisão de canibalização',
      'Revisão de atualidade',
      'Sinais de percurso interno',
      'Sinais de cobertura temática',
    ],
    produces: [
      'Revisão de manutenção',
      'Ação recomendada',
      'Sugestões de consolidação',
      'Cautelas de poda',
      'Verificações manuais',
    ],
    scenarios: [
      {
        title: 'Uma página parece fraca mas ainda pode ser importante.',
        description: 'O Hugo verifica se a página tem valor antes de alguém considerar a poda.',
      },
      {
        title: 'Suspeita-se de sobreposição de conteúdo.',
        description: 'Ele ajuda a decidir se deve consolidar, afinar ou rever manualmente.',
      },
      {
        title: 'Uma página é antiga e pobre.',
        description: 'O Hugo separa as oportunidades de atualização dos candidatos a consolidação.',
      },
      {
        title: 'Um site tem páginas demasiado semelhantes.',
        description: 'Ele dá aos editores um caminho de manutenção mais seguro do que a eliminação às cegas.',
      },
      {
        title: 'Os links internos dependem da página.',
        description: 'O Hugo assinala o risco de percurso antes da remoção ou consolidação.',
      },
      {
        title: 'Um plano de manutenção precisa de ações revisíveis.',
        description: 'Ele transforma sinais confusos numa recomendação estruturada.',
      },
    ],
    boundaryH2: 'O Hugo recomenda a manutenção. Os editores decidem a ação.',
    boundaryPara:
      'O Hugo não elimina, não junta, não redireciona, não reescreve nem publica. Apenas recomenda uma direção de manutenção e lista as verificações manuais necessárias antes de qualquer ação.',
    boundaryChecklist: [
      'O Hugo recomenda uma direção, nunca elimina nem junta páginas ele próprio.',
      'As conclusões combinam sinais de revisão já existentes, não uma nova análise destrutiva.',
      'As verificações manuais são sempre listadas antes de qualquer poda ou consolidação.',
      'Sinais fracos sozinhos nunca são tratados como suficientes para uma ação destrutiva.',
    ],
    willNot: [
      { color: 'red', text: 'Eliminar ou podar páginas' },
      { color: 'red', text: 'Juntar conteúdo automaticamente' },
      { color: 'red', text: 'Criar redirecionamentos' },
      { color: 'red', text: 'Reescrever ou republicar conteúdo' },
      { color: 'red', text: 'Tratar sinais fracos como suficientes para uma ação destrutiva' },
    ],
    relatedH2: 'Workers com quem o Hugo trabalha.',
    relatedWorkerIds: [
      {
        id: 'cannibalisation_overlap',
        description: 'Assinala riscos de sobreposição e de função de página pouco clara.',
        outputLabel: 'Revisão de sobreposição',
        ctaLabel: 'Como a Cleo revê',
      },
      {
        id: 'content_decay',
        description: 'Revê se a página precisa de ser atualizada ou de revisão urgente.',
        outputLabel: 'Revisão de atualidade',
        ctaLabel: 'Como a Faye revê',
      },
      {
        id: 'content_inventory',
        description: 'Classifica a página como um ativo de conteúdo antes das decisões de manutenção.',
        outputLabel: 'Revisão de inventário',
        ctaLabel: 'Como a Nora classifica',
      },
    ],
    ctaH2: 'Torne a manutenção de conteúdo mais segura.',
    ctaPara:
      'O Hugo ajuda os editores a decidir se uma página deve ser atualizada, consolidada, protegida ou revista antes de qualquer ação destrutiva ser considerada.',
    guidanceFooterLabel: 'ESTADO DA MANUTENÇÃO',
    guidanceFooterValue: 'Precisa de revisão · candidata a consolidação',
  },

  content_inventory: {
    seoTitle: 'Content Inventory Worker | WordPresto',
    metaDescription:
      'A Nora revê a página como um ativo de conteúdo, identificando o tipo de página, sinais estruturais, lacunas de conteúdo e metadados de inventário que podem ajudar os editores a planear melhor o trabalho.',
    h1: 'Perceba com que tipo de ativo de conteúdo está a lidar.',
    heroPara1:
      'Antes de uma página poder ser melhorada, precisa de ser classificada. É uma página de serviço, um guia, um artigo, uma página de destino, uma página de comparação, uma página de apoio ou outra coisa? Que sinais estão presentes? O que está em falta? O que ajudaria o planeamento futuro? A Nora revê a página como um ativo de conteúdo. Identifica o tipo de página, sinais estruturais, lacunas de conteúdo e metadados de inventário que podem ajudar os editores a planear melhor o trabalho.',
    heroPara2:
      'Para auditorias de conteúdo, revisões de página, planeamento de conteúdo e avaliação editorial numa fase inicial.',
    problemEyebrow: 'Onde o planeamento de conteúdo corre mal',
    problemH2: 'As equipas começam a melhorar páginas antes de saberem o que a página deve ser.',
    problemPara:
      'Uma página só pode ser avaliada devidamente depois de a sua função estar clara. Uma página de serviço pobre, um artigo fraco e uma página de comparação incompleta precisam de ações diferentes. Sem contexto de inventário, cada recomendação arrisca-se a tornar-se genérica. A Nora dá ao fluxo de trabalho uma classificação de conteúdo mais clara antes de a revisão mais profunda começar.',
    problemAnnotation: '↘ classifique o ativo antes de o melhorar',
    beforeStamp: 'Ativo pouco claro',
    beforeHtml: `<p>A página tem texto de serviço, FAQs e secções ao estilo de guia, mas nenhum tipo de conteúdo claro.</p>`,
    beforeTags: ['Função pouco clara', 'Estrutura mista', 'Metadados em falta', 'Difícil de planear'],
    beforeNote: 'a equipa não sabe que função a página tem',
    afterStamp: 'Inventário revisto',
    afterHtml: `<p>A página é classificada como uma página de decisão de serviço, com prova, profundidade de FAQ e apoio de páginas relacionadas em falta.</p>`,
    afterTags: ['Tipo mais claro', 'Lacunas de planeamento', 'Melhor encaminhamento do fluxo de trabalho', 'Pronto para revisão'],
    afterNote: 'o editor sabe que tipo de ativo é este',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Um inventário ao nível da página sem fingir rastrear o site inteiro.',
    helpsPara:
      'A Nora revê a página inspecionada como um único ativo de conteúdo. Não constrói um inventário completo do site, não rastreia páginas ligadas nem classifica o domínio inteiro. Dá aos editores uma revisão de inventário útil ao nível da página.',
    checks: [
      'Tipo de página aparente',
      'Sinais de conteúdo e estruturais',
      'Elementos do ativo em falta',
      'Clareza da função da página',
      'Necessidades de metadados de planeamento',
      'Verificações manuais para trabalho de inventário futuro',
    ],
    improves: [
      'A clareza das auditorias de conteúdo',
      'O encaminhamento da revisão de páginas',
      'O planeamento de briefings e de manutenção',
      'A compreensão do tipo de página que está a ser revista',
    ],
    prepares: [
      'Revisão de inventário de conteúdo',
      'Classificação aparente do ativo',
      'Lista de sinais em falta',
      'Notas de planeamento para trabalho futuro',
    ],
    surfaces: [
      'Páginas com propósito pouco claro',
      'Elementos de conteúdo em falta',
      'Sinais de tipo de página misturados',
      'Metadados que ajudariam o planeamento de conteúdo futuro',
    ],
    ioH2: 'Com que material a Nora trabalha, e o que produz.',
    worksFrom: [
      'Texto da página',
      'Estrutura da página',
      'Metadados',
      'Sinais de fonte',
      'Conclusões de outros Workers, quando disponíveis',
    ],
    produces: [
      'Revisão de inventário',
      'Classificação do tipo de página',
      'Sinais de ativo em falta',
      'Notas de metadados de planeamento',
      'Verificações manuais',
    ],
    scenarios: [
      {
        title: 'Uma revisão de página precisa de uma classificação inicial.',
        description: 'A Nora identifica que tipo de ativo de conteúdo o fluxo de trabalho está a tratar.',
      },
      {
        title: 'Uma auditoria de conteúdo está confusa.',
        description: 'Ela dá a cada página revista um contexto de inventário mais claro.',
      },
      {
        title: 'Uma página tem sinais mistos.',
        description: 'A Nora assinala quando a página se comporta como mais do que um tipo de conteúdo.',
      },
      {
        title: 'Uma decisão de manutenção está a aproximar-se.',
        description: 'Ela ajuda a esclarecer se o ativo deve ser atualizado, consolidado ou expandido.',
      },
      {
        title: 'Um briefing precisa de contexto sobre o tipo de página.',
        description: 'A Nora dá ao construtor de briefings um ponto de partida mais claro.',
      },
      {
        title: 'A equipa precisa de metadados de planeamento.',
        description: 'Ela lista o que tornaria o ativo mais fácil de gerir mais tarde.',
      },
    ],
    boundaryH2: 'A Nora classifica a página. Os editores decidem o que ela se torna.',
    boundaryPara:
      'A Nora não cria um inventário completo do site, não rastreia o domínio, não edita conteúdo nem publica alterações. Revê a página atual e prepara contexto de planeamento.',
    boundaryChecklist: [
      'A Nora classifica a página, nunca a edita nem a reestrutura ela própria.',
      'As revisões cobrem a página atual, não um rastreio ou inventário completo do site.',
      'As notas de planeamento são sugestões para encaminhamento editorial, não ações automáticas.',
      'As listas de sinais em falta são assinaladas para revisão, não tratadas como lacunas confirmadas.',
    ],
    willNot: [
      { color: 'red', text: 'Rastrear o site inteiro' },
      { color: 'red', text: 'Confirmar cobertura de inventário completa' },
      { color: 'red', text: 'Reescrever ou reestruturar a página automaticamente' },
      { color: 'red', text: 'Criar ou eliminar registos de conteúdo' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem a Nora trabalha.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrai os sinais de fonte que a Nora usa para a classificação.',
        outputLabel: 'Sinais da página',
        ctaLabel: 'Como o Patrick extrai',
      },
      {
        id: 'intent_analyst',
        description: 'Revê se o tipo de página aparente corresponde à intenção do leitor.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como a Yuna revê',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Usa o contexto de inventário antes de recomendar uma ação de manutenção.',
        outputLabel: 'Revisão de manutenção',
        ctaLabel: 'Como o Hugo o usa',
      },
    ],
    ctaH2: 'Classifique a página antes de decidir o que fazer com ela.',
    ctaPara:
      'A Nora ajuda os editores a compreender o ativo de conteúdo, os seus sinais em falta e o seu papel de planeamento antes de começar um trabalho mais profundo.',
    guidanceFooterLabel: 'ESTADO DO INVENTÁRIO',
    guidanceFooterValue: 'Ativo revisto · lacunas encontradas',
  },

  semantic_search_analyzer: {
    seoTitle: 'Semantic Coverage Analyser | WordPresto',
    metaDescription:
      'A Sema revê a cobertura semântica, comparando o conteúdo com a camada de conhecimento e o contexto de projeto do Word Presto, revelando subtemas em falta e entidades pouco cobertas.',
    h1: 'Encontre os conceitos que faltam à página.',
    heroPara1:
      'Um bom conteúdo não se limita a mencionar a palavra-chave alvo. Cobre as entidades, subtemas, relações e ideias de apoio que tornam a página genuinamente útil. A Sema revê a cobertura semântica, comparando o conteúdo com a camada de conhecimento e o contexto de projeto do Word Presto. Revela subtemas em falta, entidades pouco cobertas e lacunas de cobertura que devem ser revistas antes de a página ser aprovada.',
    heroPara2:
      'Para revisões avançadas de SEO, briefings de conteúdo, trabalho de autoridade temática e páginas que precisam de uma cobertura semântica mais profunda.',
    problemEyebrow: 'Onde o SEO semântico corre mal',
    problemH2: 'As páginas mencionam o tema mas perdem o significado em redor.',
    problemPara:
      'Uma página pode incluir a palavra-chave certa e continuar a não cobrir o assunto devidamente. Pode saltar entidades-chave, evitar comparações importantes, deixar de fora conceitos de apoio ou deixar perguntas por responder. A Sema olha para além da presença da palavra-chave. Revê se a página tem profundidade semântica suficiente para merecer confiança.',
    problemAnnotation: '↘ cubra o tema, não apenas o termo',
    beforeStamp: 'Cobertura pobre',
    beforeHtml: `<p>A página menciona o serviço mas deixa de fora condições-chave, fatores de decisão, evidência de apoio e entidades relacionadas.</p>`,
    beforeTags: ['Palavra-chave presente', 'Entidades em falta', 'Subtemas pobres', 'Profundidade fraca'],
    beforeNote: 'a página soa relevante mas parece incompleta',
    afterStamp: 'Cobertura revista',
    afterHtml: `<p>A Sema lista as entidades em falta, os subtemas pobres e as lacunas com suporte de evidência para o editor rever.</p>`,
    afterTags: ['Lacunas de entidades', 'Profundidade temática', 'Conclusões ligadas a fontes', 'Seguro para revisão'],
    afterNote: 'o editor sabe o que está em falta',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma revisão de cobertura semântica com limites de evidência.',
    helpsPara:
      'A Sema compara o conteúdo com o conhecimento disponível e o contexto de projeto, produzindo depois lacunas de cobertura revisíveis. Não sobrecarrega de palavras-chave, não fabrica entidades nem reescreve a página automaticamente.',
    checks: [
      'Subtemas em falta',
      'Entidades pouco cobertas',
      'Profundidade semântica',
      'Saúde da distribuição de termos',
      'Lacunas de cobertura face ao conhecimento recuperado',
      'Suporte de evidência para as adições sugeridas',
    ],
    improves: [
      'A profundidade temática',
      'A qualidade do briefing',
      'Os planos de conteúdo de construção de autoridade',
      'A confiança antes da aprovação do conteúdo',
    ],
    prepares: [
      'Revisão de cobertura semântica',
      'Lista de lacunas de entidades e subtemas',
      'Conclusões ligadas a evidência',
      'Sugestões de revisão para os editores',
    ],
    surfaces: [
      'Conceitos importantes em falta no rascunho',
      'Termos sobreutilizados ou pouco desenvolvidos',
      'Lacunas de cobertura que precisam de suporte de fontes',
      'Áreas em que a página é semanticamente pobre',
    ],
    ioH2: 'Com que material a Sema trabalha, e o que produz.',
    worksFrom: [
      'Conteúdo do rascunho ou da página',
      'Contexto de projeto',
      'Vizinhos de conhecimento',
      'Sinais de evidência',
      'Candidatos a temas e entidades',
    ],
    produces: [
      'Revisão de cobertura semântica',
      'Lista de lacunas de entidades',
      'Conclusões sobre subtemas',
      'Sinal de distribuição de termos',
      'Recomendações ligadas a evidência',
    ],
    scenarios: [
      {
        title: 'Uma página precisa de autoridade temática mais profunda.',
        description: 'A Sema identifica o que falta ao conteúdo para além das palavras-chave óbvias.',
      },
      {
        title: 'Um rascunho parece superficial.',
        description: 'Ela encontra entidades, subtemas e conceitos de apoio em falta.',
      },
      {
        title: 'Um briefing precisa de um contexto mais rico.',
        description: 'A Sema dá aos editores lacunas de cobertura a considerar antes da redação.',
      },
      {
        title: 'Uma página compete num tema complexo.',
        description: 'Ela ajuda a revelar os conceitos que as páginas mais fortes costumam cobrir.',
      },
      {
        title: 'Uma atualização de conteúdo precisa de uma expansão orientada por evidência.',
        description: 'A Sema lista lacunas que devem ser revistas com contexto de apoio.',
      },
      {
        title: 'Quer SEO semântico sem sobrecarregar de palavras-chave.',
        description: 'Ela concentra-se no significado, na cobertura e nas lacunas ligadas a fontes.',
      },
    ],
    boundaryH2: 'A Sema identifica as lacunas. Os editores decidem o que pertence à página.',
    boundaryPara:
      'A Sema não acrescenta temas automaticamente, não sobrecarrega de palavras-chave, não reescreve texto nem publica. As suas conclusões são apenas para revisão e devem ser avaliadas por um editor.',
    boundaryChecklist: [
      'A Sema assinala as lacunas, nunca acrescenta temas nem reescreve texto ela própria.',
      'As conclusões de cobertura são comparadas com conhecimento recuperado, não inventadas do zero.',
      'As adições sugeridas são sugestões para revisão editorial, não inserções automáticas.',
      'Os vizinhos recuperados são tratados como sinais para revisão, não como verdade inquestionável.',
    ],
    willNot: [
      { color: 'red', text: 'Sobrecarregar o conteúdo de palavras-chave' },
      { color: 'red', text: 'Inventar entidades sem suporte' },
      { color: 'red', text: 'Reescrever ou expandir a página automaticamente' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
      { color: 'red', text: 'Tratar os vizinhos recuperados como verdade inquestionável' },
    ],
    relatedH2: 'Workers com quem a Sema trabalha.',
    relatedWorkerIds: [
      {
        id: 'topical_authority',
        description: 'Revê o apoio temático ao nível da página e as lacunas de cluster.',
        outputLabel: 'Revisão de cobertura',
        ctaLabel: 'Como a Zara revê',
      },
      {
        id: 'evidence',
        description: 'Revê se as adições sugeridas têm suporte.',
        outputLabel: 'Pacote de evidência',
        ctaLabel: 'Como o Kenji revê',
      },
      {
        id: 'competitor_intel',
        description: 'Compara a cobertura com evidência real de SERP de concorrentes, quando disponível.',
        outputLabel: 'Revisão de cobertura da concorrência',
        ctaLabel: 'Como o Cassius compara',
      },
    ],
    ctaH2: 'Encontre o significado que a página ainda não cobriu.',
    ctaPara:
      'A Sema ajuda os editores a reforçar a profundidade temática com lacunas semânticas revisíveis, e não com sobrecarga de palavras-chave.',
    guidanceFooterLabel: 'ESTADO SEMÂNTICO',
    guidanceFooterValue: 'Lacunas de cobertura encontradas · revisão necessária',
  },

  competitor_intel: {
    seoTitle: 'Competitor Intelligence Worker | WordPresto',
    metaDescription:
      'O Cassius revê a cobertura da concorrência a partir de dados de concorrentes na SERP já armazenados, revelando os subtemas, entidades e ângulos que os concorrentes parecem cobrir e que o seu conteúdo pode não ter.',
    h1: 'Veja o que os concorrentes bem posicionados cobrem e você não.',
    heroPara1:
      'A análise da concorrência só é útil quando está assente em evidência de pesquisa real. O Cassius revê a cobertura da concorrência a partir de dados de concorrentes na SERP já armazenados e compara-a com a página ou o rascunho em revisão. Revela os subtemas, entidades e ângulos que os concorrentes parecem cobrir e que o seu conteúdo pode não ter.',
    heroPara2:
      'Para revisões competitivas de SEO, análise de lacunas de conteúdo, planeamento orientado por palavras-chave e páginas a ser melhoradas para uma oportunidade de pesquisa conhecida.',
    problemEyebrow: 'Onde a análise da concorrência corre mal',
    problemH2: 'As equipas copiam os concorrentes em vez de compreenderem a lacuna.',
    problemPara:
      'A revisão competitiva não deve significar recolher ideias e imitar outra página. Deve ajudar os editores a compreender o que o panorama de posicionamento parece cobrir, o que o rascunho atual não tem e quais as lacunas genuinamente relevantes. O Cassius transforma a evidência da concorrência em inteligência de conteúdo revisível.',
    problemAnnotation: '↘ compare a cobertura sem copiar',
    beforeStamp: 'Verificação superficial da concorrência',
    beforeHtml: `<p>Os concorrentes mencionam vários fatores de decisão, mas o rascunho só cobre a definição básica.</p>`,
    beforeTags: ['Ângulos em falta', 'Comparação pobre', 'Evidência de SERP necessária', 'Sem estratégia de texto'],
    beforeNote: 'à página falta contexto competitivo',
    afterStamp: 'Cobertura comparada',
    afterHtml: `<p>O Cassius lista os subtemas e entidades cobertos pela concorrência que o editor deve rever.</p>`,
    afterTags: ['Base real de SERP', 'Lista de lacunas', 'Critério humano', 'Sem imitação'],
    afterNote: 'o editor pode decidir o que pertence',
    helpsEyebrow: 'Como este Worker ajuda',
    helpsH2: 'Uma revisão de cobertura da concorrência a partir de evidência real de SERP.',
    helpsPara:
      'O Cassius usa os dados de SERP da concorrência já existentes, quando disponíveis. Se não houver dados de SERP armazenados, mostra um estado bloqueado e honesto em vez de inventar conclusões sobre a concorrência.',
    checks: [
      'Subtemas cobertos pela concorrência',
      'Entidades e ângulos em falta',
      'Cobertura do rascunho face à concorrência na SERP',
      'Temas repetidos da concorrência',
      'Limitações da evidência',
      'Estados sem dados quando a evidência de SERP está em falta',
    ],
    improves: [
      'O planeamento de conteúdo competitivo',
      'A qualidade do briefing orientado por lacunas',
      'A revisão de oportunidades de pesquisa',
      'A consciência do que as páginas bem posicionadas parecem abordar',
    ],
    prepares: [
      'Revisão de cobertura da concorrência',
      'Lista de lacunas baseada na SERP',
      'Sugestões de ângulos de conteúdo',
      'Notas sobre limitações de evidência',
    ],
    surfaces: [
      'Temas relevantes cobertos pela concorrência',
      'Fatores de decisão em falta',
      'Temas de SERP que vale a pena considerar',
      'Áreas em que a evidência da concorrência é demasiado pobre ou está indisponível',
    ],
    ioH2: 'Com que material o Cassius trabalha, e o que produz.',
    worksFrom: [
      'Conteúdo do rascunho ou da página',
      'Dados de concorrência na SERP já armazenados',
      'Contexto de palavra-chave ou de oportunidade de pesquisa',
      'Sinais de cobertura semântica',
      'Sinais da revisão de evidência',
    ],
    produces: [
      'Revisão de cobertura da concorrência',
      'Lista de lacunas baseada na SERP',
      'Notas de entidades em falta',
      'Sugestões de ângulos competitivos',
      'Estado sem dados quando necessário',
    ],
    scenarios: [
      {
        title: 'Uma página está a visar uma palavra-chave competitiva.',
        description: 'O Cassius verifica o que os concorrentes bem posicionados parecem cobrir e que a página pode não ter.',
      },
      {
        title: 'Um briefing de conteúdo precisa de contexto sobre a concorrência.',
        description: 'Ele fornece sugestões orientadas por lacunas sem transformar o briefing em imitação.',
      },
      {
        title: 'Um rascunho parece mais fraco do que a SERP.',
        description: 'O Cassius identifica ângulos e entidades em falta para revisão humana.',
      },
      {
        title: 'Uma ação de investigação de palavras-chave produziu dados de SERP.',
        description: 'Ele usa esses dados armazenados para fundamentar as conclusões sobre a cobertura da concorrência.',
      },
      {
        title: 'Uma página está a ser atualizada para melhorar o desempenho de SEO.',
        description: 'O Cassius ajuda os editores a ver se a cobertura da concorrência avançou.',
      },
      {
        title: 'A equipa precisa de evidência competitiva honesta.',
        description: 'Ele mostra estados sem dados quando a evidência de SERP da concorrência não está disponível.',
      },
    ],
    boundaryH2: 'O Cassius compara a cobertura. Os editores decidem o que usar.',
    boundaryPara:
      'O Cassius não copia conteúdo da concorrência, não vai buscar páginas ocultas da concorrência, não inventa dados de SERP nem garante melhorias de posicionamento. Transforma a evidência disponível sobre a concorrência em lacunas revisíveis.',
    boundaryChecklist: [
      'O Cassius compara a cobertura, nunca copia o conteúdo da concorrência.',
      'As conclusões estão fundamentadas em dados de SERP armazenados, não em afirmações inventadas sobre a concorrência.',
      'Um estado sem dados é mostrado com honestidade quando a evidência de SERP está em falta.',
      'Não é garantida qualquer melhoria de posicionamento.',
    ],
    willNot: [
      { color: 'red', text: 'Copiar conteúdo da concorrência' },
      { color: 'red', text: 'Inventar conclusões sobre a concorrência sem dados de SERP' },
      { color: 'red', text: 'Ir buscar páginas da concorrência ao vivo, a menos que um fluxo de trabalho futuro o suporte explicitamente' },
      { color: 'red', text: 'Reescrever a página automaticamente' },
      { color: 'red', text: 'Publicar ou escrever em qualquer CMS' },
    ],
    relatedH2: 'Workers com quem o Cassius trabalha.',
    relatedWorkerIds: [
      {
        id: 'semantic_search_analyzer',
        description: 'Encontra lacunas semânticas a partir da camada de conhecimento e do contexto de projeto.',
        outputLabel: 'Revisão de cobertura semântica',
        ctaLabel: 'Como a Sema encontra lacunas',
      },
      {
        id: 'intent_analyst',
        description: 'Esclarece a intenção por trás da oportunidade de pesquisa competitiva.',
        outputLabel: 'Avaliação de intenção',
        ctaLabel: 'Como a Yuna esclarece',
      },
      {
        id: 'evidence',
        description: 'Revê se as conclusões baseadas na concorrência têm o devido suporte.',
        outputLabel: 'Pacote de evidência',
        ctaLabel: 'Como o Kenji revê',
      },
    ],
    ctaH2: 'Perceba a lacuna antes de competir.',
    ctaPara:
      'O Cassius ajuda os editores a comparar a cobertura com evidência real de concorrentes na SERP sem copiar, adivinhar ou fabricar dados.',
    guidanceFooterLabel: 'ESTADO DA CONCORRÊNCIA',
    guidanceFooterValue: 'Lacunas encontradas · evidência necessária',
  },
};
