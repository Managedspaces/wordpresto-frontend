import type { WorkerProfileTranslatable } from './types';

export const frBatch4: Record<string, WorkerProfileTranslatable> = {
  safe_change_planner: {
    seoTitle: 'Safe Change Planner | WordPresto',
    metaDescription:
      'Sam transforme les constats des Workers en changements proposés structurés, en indiquant la zone concernée, le risque et le bénéfice attendu, sans jamais éditer la page ni rien appliquer.',
    h1: 'Transformer les constats en changements qui peuvent être relus en toute sécurité.',
    heroPara1:
      'Un constat n’est pas encore un changement. « La page a besoin d’une structure plus claire » est utile, mais un éditeur doit encore savoir ce qui pourrait changer, où, pourquoi, quel est le risque et si le changement doit avancer. Sam transforme les constats des Workers en changements proposés structurés. Il prépare la couche de relecture sans jamais éditer la page ni rien appliquer.',
    heroPara2:
      'Pour l’analyse de contenu, la préparation à l’approbation, les files de relecture et la planification d’éditions sûres.',
    problemEyebrow: 'Là où la planification du changement tourne mal',
    problemH2: 'Les équipes passent trop vite du constat à l’édition.',
    problemPara:
      'Un Worker peut identifier un vrai problème, mais l’étape suivante ne doit pas être une édition automatique. Le changement proposé a besoin de contexte : quelle zone est concernée, pourquoi le changement compte, quel est son niveau de risque, et quel bénéfice en attendre. Sam crée cette couche de décision.',
    problemAnnotation: '↘ planifier le changement avant d’éditer',
    beforeStamp: 'Constat brut',
    beforeHtml: `<p>La page a besoin d’une introduction plus forte et d’une étape suivante plus claire.</p>`,
    beforeTags: ['Aucune zone concernée', 'Aucune étiquette de risque', 'Aucune priorité', 'Aucun statut d’approbation'],
    beforeNote: 'l’éditeur doit encore interpréter le constat',
    afterStamp: 'Changement planifié',
    afterHtml: `<p>Revoir l’introduction pour clarifier la promesse de la page et ajouter une étape suivante pertinente après la première section.</p>`,
    afterTags: ['Zone concernée', 'Bénéfice attendu', 'Risque noté', 'Approbation requise'],
    afterNote: 'le changement est prêt pour la relecture',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un plan structuré avant tout changement de contenu.',
    helpsPara:
      'Sam relie les constats à des changements proposés. Il ne réécrit rien, n’applique rien et ne publie rien. Il prépare un plan relisible par un humain, qui peut ensuite entrer dans la file de Riley ou dans un flux d’approbation ultérieur.',
    checks: [
      'Les constats et recommandations des Workers',
      'La zone de contenu concernée',
      'Le type de changement',
      'La priorité et le bénéfice attendu',
      'Le niveau de risque',
      'Les exigences de preuve ou d’approbation',
    ],
    improves: [
      'La sécurité des flux de contenu',
      'La qualité des décisions de relecture',
      'La clarté avant que les éditions ne commencent',
      'La séparation entre recommandation et action',
    ],
    prepares: [
      'Un plan de changements proposés',
      'Des étiquettes de zone concernée',
      'Des notes de risque et de bénéfice',
      'Des éléments de relecture prêts pour l’approbation',
    ],
    surfaces: [
      'Les changements qui ont besoin d’une approbation',
      'Les éditions à haut risque',
      'Les éléments qui ont besoin de plus de preuves',
      'Les recommandations qui ne sont pas encore prêtes pour une édition sûre',
    ],
    ioH2: 'Ce à partir de quoi Sam travaille, et ce qu’il produit.',
    worksFrom: [
      'Les constats des Workers',
      'La relecture des preuves',
      'Les résultats de l’analyse de contenu',
      'Les signaux de risque et d’affirmations',
      'Le contexte de la page',
    ],
    produces: [
      'Plan de changement',
      'Changements proposés',
      'Notes de zone concernée',
      'Étiquettes de risque',
      'Bénéfice attendu',
    ],
    scenarios: [
      {
        title: 'Une relecture a produit plusieurs constats.',
        description:
          'Sam les transforme en changements proposés que l’éditeur peut évaluer.',
      },
      {
        title: 'L’équipe doit éviter les éditions automatiques.',
        description:
          'Il crée une couche de planification avant que le contenu ne soit touché.',
      },
      {
        title: 'Une recommandation peut être risquée.',
        description:
          'Sam signale le risque et les besoins de preuve avant qu’elle n’avance.',
      },
      {
        title: 'Une page entre dans la file de relecture.',
        description:
          'Il prépare les éléments structurés que Riley peut organiser.',
      },
      {
        title: 'L’éditeur a besoin de priorités plus claires.',
        description:
          'Sam indique ce qui compte le plus, et pourquoi.',
      },
      {
        title: 'Un changement ne doit pas encore être prêt pour une édition sûre.',
        description:
          'Il garde les changements proposés en statut relecture uniquement jusqu’à leur approbation.',
      },
    ],
    boundaryH2: 'Sam planifie les changements. Les éditeurs les approuvent ou les rejettent.',
    boundaryPara:
      'Sam n’édite jamais la page, ne rédige jamais d’éditions sûres, n’applique jamais de changements et ne publie jamais. Il prépare des changements proposés pour une décision humaine.',
    boundaryChecklist: [
      'Sam planifie les changements, il ne les édite ni ne les applique jamais lui-même.',
      'Les changements proposés restent en statut relecture uniquement jusqu’à ce qu’un éditeur les approuve.',
      'Les besoins de risque et de preuve sont signalés, jamais ignorés ni présumés sûrs.',
      'Un constat n’est jamais traité comme déjà approuvé.',
    ],
    willNot: [
      { color: 'red', text: 'Réécrire du contenu automatiquement' },
      { color: 'red', text: 'Appliquer des changements proposés' },
      { color: 'red', text: 'Traiter un constat comme approuvé' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
      { color: 'red', text: 'Contourner les vérifications de preuve ou de risque' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Sam travaille.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: 'Transforme les changements proposés de Sam en une file de décision.',
        outputLabel: 'File de relecture',
        ctaLabel: 'Comment Riley organise',
      },
      {
        id: 'review',
        description: 'Résume les actions de relecture pour les éditeurs humains.',
        outputLabel: 'Résumé de relecture',
        ctaLabel: 'Comment Helen résume',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Vérifie si les changements proposés bloquent l’approbation.',
        outputLabel: 'Contrôle d’approbation',
        ctaLabel: 'Comment Dana décide',
      },
    ],
    ctaH2: 'Planifier le changement avant l’édition.',
    ctaPara:
      'Sam transforme les constats en changements proposés structurés, pour que les éditeurs humains puissent approuver, rejeter ou différer en toute connaissance de cause.',
    guidanceFooterLabel: 'STATUT DU CHANGEMENT',
    guidanceFooterValue: 'Proposé · en attente de relecture',
  },
  review: {
    seoTitle: 'Review Worker | WordPresto',
    metaDescription:
      'Helen rassemble les constats et recommandations en une synthèse de relecture structurée pour l’action humaine, rendant la relecture compréhensible sans en supprimer les nuances.',
    h1: 'Transformer des constats complexes en une relecture éditoriale claire.',
    heroPara1:
      'La relecture d’une page peut impliquer des problèmes techniques, des lacunes de contenu, des préoccupations sur les preuves, des notes de lisibilité, des problèmes d’intention et des blocages d’approbation. Les éditeurs ont besoin d’une synthèse claire, pas d’un nouvel empilement de constats déconnectés. Helen rassemble les constats et recommandations en une synthèse de relecture structurée pour l’action humaine. Elle rend la relecture compréhensible sans en supprimer les nuances.',
    heroPara2:
      'Pour les audits de page, l’analyse de contenu, la préparation à l’approbation, et le transfert entre les constats des Workers et les décisions de l’éditeur.',
    problemEyebrow: 'Là où les synthèses de relecture échouent',
    problemH2: 'Un audit utile échoue quand même si l’éditeur ne peut pas agir dessus.',
    problemPara:
      'Trop de constats créent de la fatigue. Trop peu de détail cache le risque. Une bonne synthèse de relecture doit préserver les signaux importants tout en rendant l’action suivante claire. Helen donne aux éditeurs la version qu’ils peuvent vraiment utiliser.',
    problemAnnotation: '↘ résumer sans aplatir les preuves',
    beforeStamp: 'Relecture confuse',
    beforeHtml: `<p>Les constats techniques, de contenu et de preuve apparaissent séparément, sans ordre d’action clair.</p>`,
    beforeTags: ['Constats dispersés', 'Aucune synthèse', 'Priorité floue', 'Difficile à approuver'],
    beforeNote: 'l’éditeur doit reconstituer l’histoire lui-même',
    afterStamp: 'Synthèse éditoriale',
    afterHtml: `<p>Helen regroupe les constats, met en évidence les blocages et liste les actions de relecture dans l’ordre.</p>`,
    afterTags: ['Synthèse claire', 'Priorisée', 'Relisible', 'Pilotée par un humain'],
    afterNote: 'l’éditeur sait ce qui a besoin d’attention',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une couche de relecture pour la prise de décision humaine.',
    helpsPara:
      'Helen lit les constats disponibles et les transforme en une synthèse calme et structurée. Elle n’approuve rien, n’édite rien, n’applique rien et ne publie rien. Elle aide l’éditeur à comprendre ce qui compte.',
    checks: [
      'Les constats et recommandations des Workers',
      'Les éléments de relecture manuelle',
      'La priorité et la gravité',
      'Les limites des preuves',
      'Les blocages d’approbation',
      'L’ordre des actions',
    ],
    improves: [
      'La clarté éditoriale',
      'La vitesse de relecture humaine',
      'La préparation à l’approbation',
      'La compréhension entre les équipes',
    ],
    prepares: [
      'Une synthèse de relecture',
      'Une liste d’actions priorisée',
      'Des notes de relecture manuelle',
      'Une synthèse des blocages',
    ],
    surfaces: [
      'Les problèmes critiques en premier',
      'Les éléments qui ont besoin d’un jugement manuel',
      'Les constats contradictoires ou incertains',
      'Les recommandations qui ne doivent pas encore avancer',
    ],
    ioH2: 'Ce à partir de quoi Helen travaille, et ce qu’elle produit.',
    worksFrom: [
      'Les résultats des Workers',
      'Les éléments de la file de relecture',
      'Les changements proposés',
      'Les limites des preuves',
      'Les signaux d’approbation',
    ],
    produces: [
      'Synthèse de relecture éditoriale',
      'Liste d’actions prioritaires',
      'Notes de relecture manuelle',
      'Synthèse des blocages',
      'Contexte d’aide à la décision',
    ],
    scenarios: [
      {
        title: 'La relecture d’une page comporte trop de constats.',
        description:
          'Helen les transforme en une synthèse claire.',
      },
      {
        title: 'Un éditeur a besoin de l’action suivante.',
        description:
          'Elle met en évidence ce qu’il faut relire en premier.',
      },
      {
        title: 'Un transfert est nécessaire.',
        description:
          'Helen rend les constats lisibles pour quelqu’un qui n’a pas fait l’analyse lui-même.',
      },
      {
        title: 'L’approbation approche.',
        description:
          'Elle fait remonter les blocages et les éléments de relecture non résolus.',
      },
      {
        title: 'Les constats sont mélangés entre les équipes.',
        description:
          'Helen regroupe les problèmes techniques, de contenu, de preuve et de gouvernance en une seule relecture.',
      },
      {
        title: 'L’équipe a besoin d’une vue éditoriale posée.',
        description:
          'Elle réduit le bruit sans cacher les préoccupations importantes.',
      },
    ],
    boundaryH2: 'Helen résume. Les éditeurs décident.',
    boundaryPara:
      'Helen n’approuve jamais le contenu, n’édite jamais le texte, n’applique jamais de changements et ne publie jamais. Elle prépare une synthèse de relecture pour que les humains puissent prendre de meilleures décisions.',
    boundaryChecklist: [
      'Helen résume les constats, elle n’approuve ni n’édite jamais le contenu elle-même.',
      'Les blocages sont toujours mis en évidence, jamais cachés pour faire paraître une page prête.',
      'Les synthèses préservent les nuances importantes plutôt que de les aplatir.',
      'La relecture spécialisée juridique, de conformité ou d’accessibilité n’est jamais remplacée.',
    ],
    willNot: [
      { color: 'red', text: 'Approuver du contenu automatiquement' },
      { color: 'red', text: 'Réécrire ou appliquer des corrections' },
      { color: 'red', text: 'Cacher des blocages pour faire paraître une page prête' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
      { color: 'red', text: 'Remplacer une relecture spécialisée juridique, de conformité ou d’accessibilité' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Helen travaille.',
    relatedWorkerIds: [
      {
        id: 'review_queue',
        description: 'Organise les changements proposés en éléments de décision.',
        outputLabel: 'File de relecture',
        ctaLabel: 'Comment Riley organise',
      },
      {
        id: 'safe_change_planner',
        description: 'Transforme les constats en changements proposés.',
        outputLabel: 'Plan de changement',
        ctaLabel: 'Comment Sam planifie',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Utilise l’état de la relecture pour évaluer la préparation à l’approbation.',
        outputLabel: 'Contrôle d’approbation',
        ctaLabel: 'Comment Dana évalue',
      },
    ],
    ctaH2: 'Donner aux éditeurs une relecture sur laquelle agir.',
    ctaPara:
      'Helen transforme les constats des Workers en une synthèse éditoriale claire, pour que les relecteurs humains puissent décider de la suite.',
    guidanceFooterLabel: 'STATUT DE RELECTURE',
    guidanceFooterValue: 'Synthèse prête · action de l’éditeur nécessaire',
  },
  editorial_approval_gate: {
    seoTitle: 'Editorial Approval Gate Worker | WordPresto',
    metaDescription:
      'Dana lit les résultats existants des Workers et produit un contrôle d’approbation prudent, indiquant au relecteur humain si le contenu semble prêt pour la relecture, a besoin d’une révision, ou est bloqué.',
    h1: 'Vérifier si le travail est prêt pour l’approbation humaine.',
    heroPara1:
      'L’approbation ne doit pas être une impression. Avant que le contenu n’avance, l’éditeur doit savoir si les vérifications clés sont propres, s’il reste des blocages, et si quelque chose a encore besoin d’une révision, de preuves ou d’une relecture spécialisée. Dana lit les résultats existants des Workers et produit un contrôle d’approbation prudent. Elle n’approuve jamais automatiquement. Elle indique au relecteur humain si le contenu semble prêt pour la relecture, a besoin d’une révision, ou est bloqué.',
    heroPara2:
      'Pour les dernières vérifications éditoriales, les flux d’approbation, la préparation au transfert CMS et la gouvernance de contenu.',
    problemEyebrow: 'Là où les flux d’approbation tournent mal',
    problemH2: 'Le contenu avance parce que tout le monde suppose que quelqu’un d’autre l’a vérifié.',
    problemPara:
      'Une page peut avoir un bon texte tout en contenant encore des lacunes de preuves non résolues, des problèmes d’accessibilité, des problèmes de métadonnées, des préoccupations de confiance, des blocages de transfert CMS ou un risque éditorial. Si ces problèmes sont dispersés dans les résultats des différents Workers, ils sont faciles à manquer. Dana rassemble l’état final de la relecture en un seul contrôle.',
    problemAnnotation: '↘ vérifier la préparation avant l’approbation',
    beforeStamp: 'Approbation relâchée',
    beforeHtml: `<p>Le brouillon paraît prêt, mais les vérifications de preuves, de métadonnées et d’accessibilité contiennent encore des éléments non résolus.</p>`,
    beforeTags: ['Blocages non résolus', 'Aucun contrôle final', 'Risques dispersés', 'Approbation floue'],
    beforeNote: 'l’éditeur doit chasser les problèmes lui-même',
    afterStamp: 'Contrôle effectué',
    afterHtml: `<p>Dana résume la préparation, les blocages et les actions suivantes avant que l’éditeur humain n’approuve.</p>`,
    afterTags: ['Contrôle prudent', 'Statut clair', 'Blocages priorisés', 'Décision humaine'],
    afterNote: 'l’approbation devient plus sûre',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un contrôle final prudent avant que le contenu n’avance.',
    helpsPara:
      'Dana relit les résultats déjà produits par les Workers et détermine si le contenu semble prêt pour la relecture éditoriale humaine. Elle ne certifie jamais la conformité, ne publie jamais de contenu et n’approuve jamais automatiquement.',
    checks: [
      'L’état du rapport d’approbation',
      'Les problèmes de risque éditorial et d’affirmations',
      'Les lacunes de preuves',
      'Le statut d’accessibilité',
      'La préparation des métadonnées SEO et des extraits de recherche',
      'Le schema et les signaux de confiance',
      'Les blocages de transfert CMS',
      'La qualité du brouillon et le statut de relecture',
    ],
    improves: [
      'La confiance dans l’approbation',
      'La gouvernance éditoriale',
      'La visibilité des blocages',
      'La préparation avant le transfert ou le flux de publication',
    ],
    prepares: [
      'Une décision de contrôle d’approbation',
      'Un score de préparation',
      'Une liste de blocages',
      'Des recommandations priorisées',
    ],
    surfaces: [
      'Les blocages durs',
      'Les éléments à réviser',
      'Les preuves de relecture manquantes',
      'Les raisons pour lesquelles le contenu ne doit pas encore avancer',
    ],
    ioH2: 'Ce à partir de quoi Dana travaille, et ce qu’elle produit.',
    worksFrom: [
      'La synthèse de relecture',
      'La file de relecture',
      'La relecture des lacunes de preuves',
      'Les constats de risque éditorial',
      'Les résultats d’accessibilité, de métadonnées, de schema et de confiance',
    ],
    produces: [
      'Relecture du contrôle d’approbation',
      'Décision du contrôle',
      'Score de préparation',
      'Liste de blocages',
      'Recommandations priorisées',
    ],
    scenarios: [
      {
        title: 'Une page est proche de l’approbation finale.',
        description:
          'Dana vérifie si des constats non résolus des Workers bloquent encore l’avancement.',
      },
      {
        title: 'Plusieurs Workers de relecture ont tourné.',
        description:
          'Elle combine leur état en un seul contrôle de préparation clair.',
      },
      {
        title: 'Un brouillon avance vers le transfert CMS.',
        description:
          'Dana signale les blocages avant que le transfert ne crée un risque opérationnel.',
      },
      {
        title: 'L’éditeur a besoin d’un point de décision prudent.',
        description:
          'Elle ne donne le statut approuvé pour relecture que lorsque les vérifications sont suffisamment propres.',
      },
      {
        title: 'La gouvernance compte.',
        description:
          'Dana garde les problèmes de risque, de preuve et d’accessibilité visibles avant la validation finale.',
      },
      {
        title: 'Une page ne doit pas encore avancer.',
        description:
          'Elle explique pourquoi et liste les actions les plus prioritaires.',
      },
    ],
    boundaryH2: 'Dana contrôle la préparation. Les humains approuvent.',
    boundaryPara:
      'Dana n’approuve jamais le contenu automatiquement, ne certifie jamais la conformité, ne publie jamais et n’écrit jamais dans un CMS. Son rôle est de rendre l’état d’approbation visible pour qu’un relecteur humain puisse décider.',
    boundaryChecklist: [
      'Dana contrôle la préparation, elle n’approuve jamais le contenu elle-même.',
      'La conformité (juridique, médicale, financière, accessibilité) n’est jamais certifiée par Dana.',
      'Les blocages sont toujours mis en évidence, jamais cachés pour faire paraître le contenu prêt.',
      'La décision du contrôle est prudente : les éléments flous ou non résolus sont par défaut classés comme nécessitant une révision.',
    ],
    willNot: [
      { color: 'red', text: 'Approuver du contenu automatiquement' },
      { color: 'red', text: 'Certifier une conformité juridique, médicale, financière ou d’accessibilité' },
      { color: 'red', text: 'Publier ou transférer du contenu elle-même' },
      { color: 'red', text: 'Cacher des blocages pour faire paraître le contenu prêt' },
      { color: 'red', text: 'Réécrire ou appliquer des corrections' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Dana travaille.',
    relatedWorkerIds: [
      {
        id: 'review',
        description: 'Résume les constats et les actions de relecture avant le contrôle final.',
        outputLabel: 'Résumé de relecture',
        ctaLabel: 'Comment Helen résume',
      },
      {
        id: 'safe_change_planner',
        description: 'Transforme les constats en changements proposés que Dana peut évaluer pour repérer les blocages.',
        outputLabel: 'Plan de changement',
        ctaLabel: 'Comment Sam planifie',
      },
      {
        id: 'review_queue',
        description: 'Organise les éléments non résolus que Dana peut traiter comme des blocages d’approbation.',
        outputLabel: 'File de relecture',
        ctaLabel: 'Comment Riley organise',
      },
    ],
    ctaH2: 'Rendre la préparation explicite avant l’approbation.',
    ctaPara:
      'Dana aide les éditeurs à voir si le contenu est prêt pour l’approbation humaine, a besoin d’une révision, ou doit être bloqué avant le transfert.',
    guidanceFooterLabel: 'STATUT DU CONTRÔLE',
    guidanceFooterValue: 'Révision nécessaire · décision de l’éditeur requise',
  },
  site_discovery: {
    seoTitle: 'Site Discovery Worker | WordPresto',
    metaDescription:
      'Claire aide à identifier les pages d’un projet de site pour que les éditeurs voient ce qui a besoin d’être relu, où se trouvent les opportunités de contenu, et comment le site commence à s’articuler.',
    h1: 'Trouver les pages avant que le travail ne commence.',
    heroPara1:
      'Un bon flux de contenu commence par savoir ce qui existe déjà. Claire aide à identifier les pages d’un projet de site pour que les éditeurs voient ce qui a besoin d’être relu, où se trouvent les opportunités de contenu, et comment le site commence à s’articuler. Elle donne à l’équipe une vue organisée des pages du site, des premiers signaux de contenu et des notes de découverte, pour que le reste des Workers de Word Presto puisse partir d’une image de projet plus claire.',
    heroPara2:
      'Pour les projets de site, les audits de contenu, la planification de la relecture de page, les relectures de liens internes, et l’intelligence de projet en phase précoce.',
    problemEyebrow: 'Là où les projets de site s’embrouillent',
    problemH2: 'Vous ne pouvez pas améliorer le contenu si vous ne savez pas avec quelles pages vous travaillez.',
    problemPara:
      'La plupart des travaux de contenu commencent trop tard dans le processus. Les équipes se lancent sur une page, un mot-clé ou un brouillon avant de comprendre le site dans son ensemble. Des pages importantes sont oubliées. Des pages faibles restent cachées. Des opportunités de liens sont négligées. Le projet démarre avec des fragments plutôt qu’avec une carte. Claire donne au flux de travail un point de départ plus clair.',
    problemAnnotation: '↘ découvrir les pages, puis décider ce qui a besoin de travail',
    beforeStamp: 'Point de départ confus',
    beforeHtml: `<p>L’équipe a une page d’accueil, quelques pages de service et des articles de blog, mais aucune vue claire de ce qui doit être relu en premier.</p>`,
    beforeTags: ['Pages dispersées', 'Priorité de relecture floue', 'Vision du site faible', 'Difficile à planifier'],
    beforeNote: 'le projet démarre à partir de fragments',
    afterStamp: 'Relecture de découverte',
    afterHtml: `<p>Claire organise les pages connues, met en évidence les vérifications de suivi et prépare le site pour une relecture plus approfondie.</p>`,
    afterTags: ['Liste de pages plus claire', 'Meilleur flux de relecture', 'Signaux de contenu visibles', 'Prêt pour les Workers'],
    afterNote: 'l’équipe sait par où commencer',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une couche de découverte pour les projets de site.',
    helpsPara:
      'Claire aide l’équipe à comprendre les pages qui composent un projet de site. Elle prépare la vue de départ pour l’inventaire de contenu, l’inspection de page, la relecture des liens et l’intelligence de projet plus approfondie.',
    checks: [
      'Les pages qui devraient faire partie du projet',
      'Les sections du site et les groupes de pages',
      'Les premiers signaux de contenu et de structure',
      'Les pages qui pourraient avoir besoin d’une relecture',
      'Les opportunités de relation interne',
      'Les vérifications de suivi pour les éditeurs',
    ],
    improves: [
      'La mise en place du projet',
      'La planification des audits de contenu',
      'La priorisation de la relecture de page',
      'La visibilité du maillage interne et de la structure du site',
    ],
    prepares: [
      'Une relecture de découverte du site',
      'Une liste de pages pour inspection',
      'Des premières notes de structure du site',
      'Des rappels de relecture de suivi',
    ],
    surfaces: [
      'Les pages qui méritent d’être inspectées',
      'Les sections qui pourraient être minces ou floues',
      'Les zones où la structure du site a besoin d’attention',
      'Les pages qui pourraient avoir besoin de liens internes plus solides',
    ],
    ioH2: 'Ce à partir de quoi Claire travaille, et ce qu’elle produit.',
    worksFrom: [
      'Le projet de site',
      'Les pages connues du site',
      'Les sections du site',
      'Les relations entre pages',
      'Le contexte de mise en place du projet',
    ],
    produces: [
      'Relecture de découverte du site',
      'Pages pour relecture',
      'Notes de sections du site',
      'Rappels de relation interne',
      'Vérifications de suivi',
    ],
    scenarios: [
      {
        title: 'Un nouveau projet de site démarre.',
        description:
          'Claire aide à établir quelles pages doivent faire partie de la première relecture.',
      },
      {
        title: 'Un audit de site a besoin de structure.',
        description:
          'Elle donne aux éditeurs une vue plus claire des pages et sections avec lesquelles ils travaillent.',
      },
      {
        title: 'Un inventaire de contenu a besoin d’un point de départ.',
        description:
          'Claire prépare le contexte de découverte des pages avant que Nora ne classe les actifs.',
      },
      {
        title: 'Le travail de maillage interne a besoin d’une vue du site.',
        description:
          'Elle fait remonter les relations entre pages et les zones qui pourraient avoir besoin d’une relecture des liens.',
      },
      {
        title: 'L’équipe ne sait pas par où commencer.',
        description:
          'Claire aide à transformer un site en un projet relisible.',
      },
      {
        title: 'Un projet a besoin d’une intelligence plus approfondie.',
        description:
          'Elle donne aux autres Workers une carte de départ plus nette avant que l’analyse ne se poursuive.',
      },
    ],
    boundaryH2: 'Claire découvre les pages. Les éditeurs décident de ce qui compte.',
    boundaryPara:
      'Claire aide à organiser le site pour la relecture. Elle ne décide jamais de la stratégie, ne supprime jamais de pages, ne réécrit jamais le texte et ne publie jamais. Les éditeurs choisissent quelles pages inspecter, prioriser et améliorer.',
    boundaryChecklist: [
      'Claire organise les pages pour la relecture, elle ne les édite ni ne les supprime jamais elle-même.',
      'Les pages découvertes forment une liste de départ pour les éditeurs, pas un ordre de priorité automatique.',
      'Les notes de structure du site soutiennent la planification, elles ne remplacent pas le jugement humain sur la stratégie.',
      'Les vérifications de suivi sont listées clairement pour que les éditeurs sachent ce qui reste à confirmer.',
    ],
    willNot: [
      { color: 'red', text: 'Réécrire ou éditer du contenu' },
      { color: 'red', text: 'Supprimer, fusionner ou rediriger des pages' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
      { color: 'red', text: 'Traiter chaque page découverte comme automatiquement importante' },
      { color: 'red', text: 'Remplacer la relecture humaine des priorités du site' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Claire travaille.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Inspecte chaque page une fois qu’elle est sélectionnée pour relecture.',
        outputLabel: 'Signaux de page',
        ctaLabel: 'Comment Patrick inspecte',
      },
      {
        id: 'content_inventory',
        description: 'Classe les pages comme actifs de contenu et enregistre des signaux de planification.',
        outputLabel: 'Relecture d’inventaire',
        ctaLabel: 'Comment Nora classe',
      },
      {
        id: 'internal_linking',
        description: 'Relit comment les pages sélectionnées se connectent au contenu associé.',
        outputLabel: 'Évaluation des liens',
        ctaLabel: 'Comment Leo relit',
      },
    ],
    ctaH2: 'Donner à chaque projet de site un point de départ plus clair.',
    ctaPara:
      'Claire aide Word Presto à passer de pages dispersées à un flux de relecture organisé, pour que les éditeurs sachent ce qui existe et par où le travail doit commencer.',
    guidanceFooterLabel: 'STATUT DE DÉCOUVERTE',
    guidanceFooterValue: 'Pages prêtes pour la relecture',
  },
  page_inspector: {
    seoTitle: 'Page Inspector Worker | WordPresto',
    metaDescription:
      'Patrick inspecte la page et en extrait les signaux source dont dépend le reste du flux de travail : titre, meta description, titres de section, liens, images, schema, nombre de mots et structure visible de la page.',
    h1: 'Commencer par ce que la page dit réellement.',
    heroPara1:
      'Avant que Word Presto ne recommande des changements, la page doit être lue correctement. Patrick inspecte la page et en extrait les signaux source dont dépend le reste du flux de travail : titre, meta description, titres de section, liens, images, schema, nombre de mots et structure visible de la page. Il donne à l’équipe une image exacte et actuelle de la page telle qu’elle existe réellement, pas telle que quiconque suppose qu’elle est.',
    heroPara2:
      'Pour la relecture de page, les audits de contenu, les vérifications techniques, le brief, et toute étape du flux de travail qui doit partir de faits confirmés sur la page plutôt que de suppositions.',
    problemEyebrow: 'Là où la relecture de page tourne mal',
    problemH2: 'Vous ne pouvez pas relire une page que vous n’avez pas réellement inspectée.',
    problemPara:
      'Les équipes travaillent souvent de mémoire, à partir d’une ancienne capture d’écran, ou de ce qu’une page est censée contenir plutôt que ce qu’elle contient réellement. Les titres sont réécrits sans vérifier celui qui est en ligne. Les titres de section sont supposés plutôt que confirmés. Un schema manquant passe inaperçu. La relecture part de suppositions plutôt que de la page elle-même. Patrick inspecte d’abord, pour que le reste du flux de travail parte de ce qui est vraiment là.',
    problemAnnotation: '↘ inspecter d’abord, recommander ensuite',
    beforeStamp: 'Suppositions',
    beforeHtml: `<p>L’équipe suppose que la page a toujours l’ancien titre, un H1 clair et des liens internes fonctionnels, sans vérifier la page en ligne.</p>`,
    beforeTags: ['Titre supposé', 'Titres de section non confirmés', 'Schema inconnu', 'Aucune vérification de la source'],
    beforeNote: 'la relecture part d’une supposition',
    afterStamp: 'Page inspectée',
    afterHtml: `<p>Patrick confirme le titre en ligne, la meta description, les titres de section, les liens, les images, le schema et le nombre de mots.</p>`,
    afterTags: ['Signaux source confirmés', 'Structure cartographiée', 'Schema vérifié', 'Prête pour la relecture'],
    afterNote: 'la relecture part des faits',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une couche de source pour la relecture au niveau de la page.',
    helpsPara:
      'Patrick lit la page en ligne et en extrait les signaux source, donnant aux autres Workers et aux éditeurs un point de départ confirmé plutôt que supposé.',
    checks: [
      'Le titre de la page et la meta description',
      'La structure et la hiérarchie des titres de section',
      'La structure et les sections visibles de la page',
      'Les liens internes et sortants',
      'La présence d’images et de texte alternatif',
      'La présence de balisage schema',
      'Le nombre de mots',
    ],
    improves: [
      'L’exactitude de la relecture de page',
      'Les points de départ du brief et de l’audit',
      'La confiance dans les vérifications techniques',
      'La qualité du transfert vers les autres Workers',
    ],
    prepares: [
      'Une synthèse des signaux de page',
      'Des faits source confirmés',
      'Des notes de structure pour la relecture',
      'Des signalements des éléments manquants',
    ],
    surfaces: [
      'Les titres ou descriptions qui pourraient avoir besoin d’attention',
      'Les problèmes de structure des titres de section',
      'Le schema manquant ou trop mince',
      'Les pages avec un nombre de mots anormalement bas',
    ],
    ioH2: 'Ce à partir de quoi Patrick travaille, et ce qu’il produit.',
    worksFrom: [
      'L’URL de la page en ligne',
      'Le projet de site',
      'Les résultats de la découverte du site',
      'Les métadonnées existantes de la page',
    ],
    produces: [
      'Synthèse des signaux de page',
      'Titre et meta description confirmés',
      'Notes de titres de section et de structure',
      'Inventaire des liens et des images',
      'Vérification de la présence de schema',
    ],
    scenarios: [
      {
        title: 'Une page est sélectionnée pour relecture.',
        description: 'Patrick confirme exactement ce que contient la page en ligne avant que la relecture ne commence.',
      },
      {
        title: 'Un titre ou une meta description doit être vérifié.',
        description: 'Il rapporte les valeurs actuelles en ligne plutôt que ce que l’équipe suppose qu’elles sont.',
      },
      {
        title: 'Une vérification technique est nécessaire.',
        description: 'Patrick fait remonter les signaux de schema, de titres de section et de structure pour que Maya les évalue plus en détail.',
      },
      {
        title: 'Un brief de contenu a besoin de faits source.',
        description: 'Il donne au rédacteur du brief une image confirmée de la page telle qu’elle est aujourd’hui.',
      },
      {
        title: 'Un audit couvre de nombreuses pages.',
        description: 'Patrick inspecte chaque page pour que l’audit soit construit sur des informations actuelles, pas supposées.',
      },
      {
        title: 'La relecture d’intention de recherche ou de preuve vient ensuite.',
        description: 'Il transmet à Yuna et Kenji une page source confirmée à partir de laquelle travailler.',
      },
    ],
    boundaryH2: 'Patrick rapporte ce que dit la page. Les éditeurs décident quoi en faire.',
    boundaryPara:
      'Patrick inspecte et rapporte les signaux source. Il ne réécrit jamais la page, ne juge jamais la qualité, n’attribue jamais de priorité et ne publie jamais. Les éditeurs et les autres Workers utilisent ses constats pour décider de la suite.',
    boundaryChecklist: [
      'Patrick rapporte la page telle qu’elle existe, il ne l’édite ni ne la réécrit jamais lui-même.',
      'Ses constats sont des faits source, pas des jugements de qualité ni des décisions de priorité.',
      'Les éléments manquants sont signalés clairement, jamais présumés corrects en silence.',
      'Le jugement technique ou éditorial plus approfondi reste entre les mains du Worker ou de l’éditeur concerné.',
    ],
    willNot: [
      { color: 'red', text: 'Réécrire ou éditer le contenu de la page' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
      { color: 'red', text: 'Juger la qualité du contenu ou attribuer une priorité' },
      { color: 'red', text: 'Supposer des faits sur la page sans vérifier la page en ligne' },
      { color: 'red', text: 'Remplacer la relecture humaine du sens des constats' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Patrick travaille.',
    relatedWorkerIds: [
      {
        id: 'technical_health',
        description: 'Reprend les signaux de page confirmés et relit l’image technique plus large.',
        outputLabel: 'Constats techniques',
        ctaLabel: 'Comment Maya relit',
      },
      {
        id: 'intent_analyst',
        description: 'Utilise la page inspectée pour évaluer si elle correspond bien à l’intention de recherche.',
        outputLabel: 'Évaluation d’intention',
        ctaLabel: 'Comment Yuna évalue',
      },
      {
        id: 'evidence',
        description: 'Vérifie les affirmations de la page inspectée par rapport aux preuves disponibles.',
        outputLabel: 'Dossier de preuves',
        ctaLabel: 'Comment Kenji relit',
      },
    ],
    ctaH2: 'Démarrer chaque relecture de page à partir de faits confirmés.',
    ctaPara:
      'Patrick donne à Word Presto une lecture exacte de la page elle-même, pour que le reste du flux de travail se construise sur ce qui est vraiment là.',
    guidanceFooterLabel: 'STATUT D’INSPECTION',
    guidanceFooterValue: 'Signaux de page prêts pour la relecture',
  },
  accessibility: {
    seoTitle: 'Accessibility Worker | WordPresto',
    metaDescription:
      'Mara relit les signaux d’accessibilité disponibles dans les preuves de la page, en signalant une structure de titres faible, des alternatives d’image manquantes, un texte de lien peu clair, des risques de lisibilité et les vérifications qui ont besoin d’une confirmation humaine.',
    h1: 'Faire entrer les problèmes d’accessibilité dans le flux de relecture.',
    heroPara1:
      'L’accessibilité détermine si les gens peuvent lire, naviguer, comprendre et utiliser une page. Elle doit être visible avant que le contenu n’atteigne l’approbation. Mara relit les signaux d’accessibilité disponibles dans les preuves de la page. Elle signale des problèmes comme une structure de titres faible, des alternatives d’image manquantes, un texte de lien peu clair, des risques de lisibilité et les vérifications manuelles qui ont besoin d’une confirmation humaine.',
    heroPara2:
      'Pour les relectures de page, les audits techniques, les vérifications de qualité de contenu, et la relecture finale avant approbation.',
    problemEyebrow: 'Là où la relecture d’accessibilité tourne mal',
    problemH2: 'Les équipes vérifient souvent l’accessibilité trop tard.',
    problemPara:
      'Si la logique des titres est confuse, si le texte des liens est vague ou si les images manquent d’alternatives utiles, le problème doit être visible pendant la relecture, pas après la mise en ligne. Mara fait entrer ces signaux tôt dans le flux de travail éditorial.',
    problemAnnotation: '↘ le faire remonter pendant la relecture, pas après la mise en ligne',
    beforeStamp: 'Vérifié trop tard',
    beforeHtml: `<p>Une page est mise en ligne avec un ordre de titres confus, un texte de lien vague et des alternatives d’image manquantes, sans que rien de tout cela ne soit remarqué avant la mise en ligne.</p>`,
    beforeTags: ['Ordre des titres flou', 'Texte de lien vague', 'Texte alternatif manquant', 'Découvert après la mise en ligne'],
    beforeNote: 'le problème remonte alors que c’est déjà en ligne',
    afterStamp: 'Relecture d’accessibilité',
    afterHtml: `<p>Mara signale les problèmes de titres, de texte de lien, d’images et de lisibilité avant que la page n’atteigne l’approbation.</p>`,
    afterTags: ['Problèmes signalés tôt', 'Vérifications manuelles listées', 'Guidance de correction prête', 'Relue avant approbation'],
    afterNote: 'le problème est visible avant la mise en ligne',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture d’accessibilité sans fausse certification.',
    helpsPara:
      'Mara transforme les signaux de page disponibles en constats d’accessibilité relisibles. Elle ne revendique jamais la conformité et ne remplace jamais les tests manuels.',
    checks: [
      'La structure des titres',
      'La présence de texte alternatif sur les images',
      'La clarté du texte des liens',
      'Les signaux de lisibilité',
      'Les vérifications d’accessibilité manuelles nécessaires',
      'Les risques d’accessibilité visibles dans les preuves de la page',
    ],
    improves: [
      'La visibilité précoce des problèmes d’accessibilité',
      'La qualité du transfert éditorial',
      'La relecture d’accessibilité courante au niveau de la page',
      'La préparation avant l’approbation',
    ],
    prepares: [
      'Des constats d’accessibilité',
      'Une checklist de vérification manuelle',
      'Des notes de gravité des problèmes',
      'Une guidance de correction pour la relecture humaine',
    ],
    surfaces: [
      'Les alternatives d’image manquantes ou faibles',
      'Le texte de lien vague',
      'Les préoccupations de structure des titres',
      'Les vérifications qui ont besoin d’un audit humain ou spécialisé',
    ],
    ioH2: 'Ce à partir de quoi Mara travaille, et ce qu’elle produit.',
    worksFrom: [
      'La structure de la page',
      'Les signaux d’image',
      'Le texte des liens et des ancres',
      'Les signaux de lisibilité',
      'Les constats de la relecture technique',
    ],
    produces: [
      'Relecture d’accessibilité',
      'Problèmes détectés',
      'Vérifications manuelles',
      'Guidance de correction',
      'Statut de relecture',
    ],
    scenarios: [
      {
        title: 'Une page est relue avant approbation.',
        description: 'Mara ajoute une passe d’accessibilité à la relecture avant que la page n’avance.',
      },
      {
        title: 'La relecture technique a trouvé des problèmes structurels.',
        description: 'Elle vérifie si ces problèmes affectent aussi la logique des titres ou la navigation.',
      },
      {
        title: 'Une page contient de nombreuses images.',
        description: 'Mara signale les images sans alternative utile pour que les éditeurs les traitent.',
      },
      {
        title: 'Les liens sont vagues ou répétitifs.',
        description: 'Elle fait remonter le texte de lien qui doit être plus clair pour les lecteurs et les technologies d’assistance.',
      },
      {
        title: 'La structure des titres paraît désordonnée.',
        description: 'Mara relit l’ordre des titres et signale où il pourrait perturber les lecteurs ou les lecteurs d’écran.',
      },
      {
        title: 'L’équipe a besoin de notes d’accessibilité honnêtes.',
        description: 'Elle rapporte ce que les preuves soutiennent, et liste ce qui a encore besoin d’une vérification manuelle.',
      },
    ],
    boundaryH2: 'Mara signale les problèmes d’accessibilité. Elle ne certifie pas la conformité.',
    boundaryPara:
      'Mara fournit une passe d’accessibilité relecture uniquement, fondée sur les preuves disponibles de la page. Elle ne remplace jamais les tests manuels, les tests avec lecteur d’écran, la relecture juridique ou un audit WCAG formel.',
    boundaryChecklist: [
      'Mara signale les problèmes visibles dans les preuves de la page, elle n’édite jamais les titres, les liens ou le texte alternatif elle-même.',
      'Ses constats sont un point de départ pour la relecture, pas une certification de conformité.',
      'Les vérifications qu’elle ne peut pas confirmer à partir des preuves disponibles sont listées comme vérifications manuelles, jamais ignorées en silence.',
      'Les audits d’accessibilité formels et les décisions de conformité juridique restent entre les mains d’un relecteur humain qualifié.',
    ],
    willNot: [
      { color: 'red', text: 'Certifier la conformité d’accessibilité' },
      { color: 'red', text: 'Réaliser des tests manuels complets de technologie d’assistance' },
      { color: 'red', text: 'Éditer automatiquement les titres, les liens ou le texte alternatif' },
      { color: 'red', text: 'Publier des corrections d’accessibilité' },
      { color: 'red', text: 'Inventer des problèmes non étayés par les preuves de la page' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Mara travaille.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrait la structure de la page, les liens et les signaux d’image que Mara relit.',
        outputLabel: 'Signaux de page',
        ctaLabel: 'Comment Patrick inspecte',
      },
      {
        id: 'technical_health',
        description: 'Vérifie le SEO technique et les signaux de santé de page associés.',
        outputLabel: 'Constats techniques',
        ctaLabel: 'Comment Maya relit',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Utilise le statut d’accessibilité dans le cadre de la relecture de préparation.',
        outputLabel: 'Contrôle d’approbation',
        ctaLabel: 'Comment Dana décide',
      },
    ],
    ctaH2: 'Rendre l’accessibilité visible avant l’approbation.',
    ctaPara:
      'Mara aide les éditeurs à voir les problèmes d’accessibilité tôt, clairement et honnêtement avant que le contenu n’avance.',
    guidanceFooterLabel: 'STATUT D’ACCESSIBILITÉ',
    guidanceFooterValue: 'À relire · vérifications prêtes',
  },
  intent_analyst: {
    seoTitle: 'Intent Analyst Worker | WordPresto',
    metaDescription:
      'Yuna vérifie si le contenu, la structure, les métadonnées et l’étape suivante d’une page correspondent à l’intention probable de recherche ou de lecture.',
    h1: 'Vérifier si la page correspond à ce que le lecteur est venu chercher.',
    heroPara1:
      'Une page peut être bien écrite et pourtant manquer l’intention. Elle peut répondre à la mauvaise question, promettre plus qu’elle ne livre, ou mélanger plusieurs besoins de lecteur en une seule page confuse. Yuna vérifie si le contenu, la structure, les métadonnées et l’étape suivante correspondent à l’intention probable de recherche ou de lecture.',
    heroPara2:
      'Pour les relectures de page, les briefs de contenu, les audits SEO, les réécritures de page et la planification éditoriale guidée par la recherche.',
    problemEyebrow: 'Là où la stratégie de contenu tourne mal',
    problemH2: 'La page répond à quelque chose, mais pas toujours à ce qui compte.',
    problemPara:
      'L’intention de recherche est la raison derrière la visite. Un lecteur peut vouloir une définition, une comparaison, une preuve, un guide, des indices de tarif, une réassurance, ou un moyen clair d’agir. Yuna vérifie si la page sert vraiment cette raison.',
    problemAnnotation: '↘ vérifier la raison avant la réécriture',
    beforeStamp: 'Intention floue',
    beforeHtml: `<p>La page se lit bien mais mélange plusieurs besoins de lecteur en une seule section, si bien qu’on ne sait pas clairement à quelle question elle répond réellement.</p>`,
    beforeTags: ['Besoins de lecteur mélangés', 'Métadonnées qui surpromettent', 'Aucune étape suivante claire', 'Intention non confirmée'],
    beforeNote: 'la page est optimisée avant que l’intention ne soit claire',
    afterStamp: 'Évaluation d’intention',
    afterHtml: `<p>Yuna confirme l’intention probable, signale les écarts entre la promesse et ce qui est livré, et recommande un angle de page plus clair.</p>`,
    afterTags: ['Intention confirmée', 'Écarts de lecteur listés', 'Angle recommandé', 'Prête pour la réécriture'],
    afterNote: 'la réécriture vise la bonne raison',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture d’intention avant l’optimisation.',
    helpsPara:
      'Yuna compare ce que la page semble promettre avec ce qu’elle livre réellement. Elle aide l’éditeur à voir si le rôle de la page est assez clair avant de la réécrire, de l’étendre ou de l’approuver.',
    checks: [
      'L’intention probable du lecteur ou de la recherche',
      'La promesse des métadonnées par rapport à ce que livre la page',
      'Les questions du lecteur restées sans réponse',
      'L’adéquation du format de page',
      'L’ordre des sections',
      'L’alignement de l’étape suivante',
    ],
    improves: [
      'L’adéquation à l’intention de recherche',
      'La qualité du brief',
      'La clarté de l’objectif de la page',
      'La direction de la réécriture',
    ],
    prepares: [
      'Une évaluation d’intention',
      'Des écarts de besoins de lecteur',
      'Un angle de page recommandé',
      'Des actions suivantes alignées sur la recherche',
    ],
    surfaces: [
      'Le décalage d’intention',
      'Les objectifs de page mélangés ou concurrents',
      'Les informations de décision manquantes',
      'Les sections qui distraient de l’objectif de la page',
    ],
    ioH2: 'Ce à partir de quoi Yuna travaille, et ce qu’elle produit.',
    worksFrom: [
      'Le titre de la page et les métadonnées',
      'Le texte de la page',
      'La structure de la page',
      'Les signaux source',
      'Le contexte de sujet ou de mot-clé, quand il est disponible',
    ],
    produces: [
      'Évaluation d’intention',
      'Écarts de besoins de lecteur',
      'Notes sur la promesse de recherche',
      'Rôle de page recommandé',
      'Actions suivantes alignées sur l’intention',
    ],
    scenarios: [
      {
        title: 'Une page est bien classée mais ne convertit pas.',
        description: 'Yuna vérifie si la page sert vraiment l’intention pour laquelle elle est classée.',
      },
      {
        title: 'Un brouillon paraît dispersé.',
        description: 'Elle identifie autour de quel besoin de lecteur le brouillon doit être construit.',
      },
      {
        title: 'Les métadonnées promettent quelque chose que la page ne livre pas.',
        description: 'Yuna signale l’écart entre la promesse de recherche et le contenu réel.',
      },
      {
        title: 'Un brief de contenu a besoin d’un besoin de lecteur clair.',
        description: 'Elle donne au rédacteur du brief une intention confirmée autour de laquelle planifier.',
      },
      {
        title: 'Une décision de format de page est nécessaire.',
        description: 'Yuna transmet à Ivan une évaluation d’intention par rapport à laquelle vérifier le format.',
      },
      {
        title: 'Les recommandations SEO tirent dans des directions différentes.',
        description: 'Elle ancre la relecture dans ce que le lecteur est réellement venu chercher.',
      },
    ],
    boundaryH2: 'Yuna clarifie l’intention. Les éditeurs décident de la stratégie.',
    boundaryPara:
      'Yuna ne réécrit jamais la page, ne choisit jamais la stratégie d’entreprise et ne garantit jamais une amélioration de classement. Elle donne aux éditeurs une évaluation d’intention relisible.',
    boundaryChecklist: [
      'Yuna évalue l’intention à partir de la page et de son contexte, elle ne réécrit jamais le contenu elle-même.',
      'Son évaluation est un point de départ pour la planification, pas une décision de stratégie.',
      'Les angles de page recommandés sont des suggestions pour les éditeurs, pas des changements automatiques.',
      'Aucun résultat de classement n’est jamais promis ni sous-entendu par ses constats.',
    ],
    willNot: [
      { color: 'red', text: 'Récupérer ou fabriquer des données de SERP en direct' },
      { color: 'red', text: 'Réécrire du contenu automatiquement' },
      { color: 'red', text: 'Garantir une amélioration de classement' },
      { color: 'red', text: 'Choisir une stratégie sans relecture humaine' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Yuna travaille.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrait les signaux source que Yuna relit.',
        outputLabel: 'Signaux de page',
        ctaLabel: 'Comment Patrick inspecte',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Vérifie si le format de la page correspond à la forme de recherche attendue.',
        outputLabel: 'Relecture de format',
        ctaLabel: 'Comment Ivan vérifie',
      },
      {
        id: 'conversion_alignment',
        description: 'Vérifie si l’étape suivante correspond à l’intention du lecteur.',
        outputLabel: 'Relecture de conversion',
        ctaLabel: 'Comment Diane vérifie',
      },
    ],
    ctaH2: 'Faire correspondre la page à la raison du lecteur.',
    ctaPara:
      'Yuna aide à s’assurer que le travail d’optimisation vise la bonne intention avant que l’équipe ne réécrive ou n’approuve quoi que ce soit.',
    guidanceFooterLabel: 'STATUT D’INTENTION',
    guidanceFooterValue: 'À relire · écarts trouvés',
  },
  evidence: {
    seoTitle: 'Evidence Worker | WordPresto',
    metaDescription:
      'Kenji relit les preuves derrière les constats et les recommandations, en vérifiant la solidité du soutien, les affirmations non étayées, la provenance et les limites avant l’approbation.',
    h1: 'Savoir quelles recommandations sont réellement étayées.',
    heroPara1:
      'Les flux de contenu produisent beaucoup de conseils. Certains sont solides. D’autres sont faibles. D’autres encore dépendent de données manquantes, d’une récupération partielle, ou de suppositions qui ont besoin d’une vérification manuelle. Kenji relit les preuves derrière les constats. Il vérifie la solidité du soutien, les recommandations non étayées, la provenance et les limites.',
    heroPara2:
      'Pour les audits de contenu, les flux d’approbation, la relecture des lacunes de preuves, les vérifications de risque, et toute recommandation qui doit être défendable.',
    problemEyebrow: 'Là où les recommandations tournent mal',
    problemH2: 'Un conseil n’est utile que si l’on sait ce qui le soutient.',
    problemPara:
      'Une recommandation peut sembler sûre d’elle tout en reposant sur des preuves minces. Elle peut aller trop loin à partir de signaux de page limités, s’appuyer sur une récupération manquante, ou sous-entendre une certitude que le flux de travail n’a pas. Kenji protège les éditeurs d’une fausse confiance.',
    problemAnnotation: '↘ séparer ce qui est prouvé de ce qui est supposé',
    beforeStamp: 'Fausse confiance',
    beforeHtml: `<p>Une recommandation se lit comme un fait établi, mais elle repose en réalité sur un seul signal partiel, sans récupération pour l’étayer.</p>`,
    beforeTags: ['Soutien flou', 'Provenance manquante', 'Confiance exagérée', 'Non vérifiée'],
    beforeNote: 'le conseil paraît certain mais ne l’est pas',
    afterStamp: 'Dossier de preuves',
    afterHtml: `<p>Kenji sépare les constats étayés des constats faibles et liste exactement ce qui a encore besoin d’une vérification manuelle.</p>`,
    afterTags: ['Solidité du soutien indiquée', 'Constats faibles signalés', 'Provenance notée', 'Prêt pour l’approbation'],
    afterNote: 'la confiance correspond aux preuves',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture des preuves avant l’approbation.',
    helpsPara:
      'Kenji vérifie si les constats sont étayés par les sources disponibles, les signaux de page, les normes ou le contexte récupéré. Il n’invente jamais de preuve manquante.',
    checks: [
      'La solidité du soutien derrière les constats',
      'Les recommandations non étayées',
      'Les limites des preuves',
      'La provenance de la récupération, quand elle existe',
      'Les affirmations qui ont besoin d’une vérification manuelle',
      'Les zones où des données manquent',
    ],
    improves: [
      'La fiabilité des résultats de relecture',
      'La confiance éditoriale',
      'La séparation entre preuve, inférence et spéculation',
    ],
    prepares: [
      'Une relecture de la fiabilité des preuves',
      'Une liste des constats non étayés',
      'Des notes de provenance',
      'Des rappels de vérification manuelle',
    ],
    surfaces: [
      'Les affirmations qui ont besoin d’un soutien plus solide',
      'Les recommandations fondées sur des preuves partielles',
      'Les sources manquantes',
      'Les limites qui doivent être visibles avant l’approbation',
    ],
    ioH2: 'Ce à partir de quoi Kenji travaille, et ce qu’il produit.',
    worksFrom: [
      'Les signaux de page',
      'Les constats des Workers',
      'La provenance de récupération disponible',
      'L’attribution aux normes',
      'Les signaux de lacunes de preuves et de risque',
    ],
    produces: [
      'Dossier de preuves',
      'Relecture de la solidité du soutien',
      'Liste des constats non étayés',
      'Synthèse des limites',
      'Notes de vérification manuelle',
    ],
    scenarios: [
      {
        title: 'Une recommandation doit être défendable.',
        description: 'Kenji vérifie ce qui la soutient réellement avant qu’elle n’atteigne l’approbation.',
      },
      {
        title: 'Une page fait des affirmations.',
        description: 'Il vérifie si ces affirmations sont suffisamment étayées.',
      },
      {
        title: 'Un flux de travail utilise un contexte récupéré.',
        description: 'Kenji vérifie la provenance de ce contexte avant qu’on ne s’y fie.',
      },
      {
        title: 'Une approbation de contenu approche.',
        description: 'Il donne à Dana un dossier de preuves à peser dans le cadre de la relecture de préparation.',
      },
      {
        title: 'Les Workers sont en désaccord ou produisent des constats incertains.',
        description: 'Kenji relit le soutien derrière chaque constat pour aider les éditeurs à juger auquel faire confiance.',
      },
      {
        title: 'Le sujet est sensible ou à haut risque.',
        description: 'Il travaille aux côtés de Vera pour signaler où la preuve et le risque de conformité se chevauchent.',
      },
    ],
    boundaryH2: 'Kenji relit les preuves. Les éditeurs décident quoi en faire.',
    boundaryPara:
      'Kenji ne certifie jamais la vérité, la conformité ou l’impact sur le classement. Si des preuves manquent, il le dit clairement.',
    boundaryChecklist: [
      'Kenji relit le soutien derrière les constats, il n’édite ni n’approuve jamais le contenu lui-même.',
      'Les preuves manquantes ou faibles sont signalées clairement, jamais discrètement transformées en certitude.',
      'Sa relecture est une donnée d’entrée pour la décision d’approbation, pas la décision elle-même.',
      'Les affirmations qui dépassent ce que les preuves disponibles soutiennent sont signalées pour une vérification manuelle.',
    ],
    willNot: [
      { color: 'red', text: 'Inventer des citations, des faits ou des preuves' },
      { color: 'red', text: 'Traiter une preuve faible comme une certitude' },
      { color: 'red', text: 'Récupérer des sources sans rapport comme des preuves confirmées' },
      { color: 'red', text: 'Approuver des affirmations automatiquement' },
      { color: 'red', text: 'Publier ou éditer du contenu' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Kenji travaille.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Fournit les faits source pour la relecture des preuves.',
        outputLabel: 'Signaux de page',
        ctaLabel: 'Comment Patrick inspecte',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Utilise le contexte des preuves et des affirmations pour signaler le risque.',
        outputLabel: 'Rapport de risque et conformité',
        ctaLabel: 'Comment Vera signale les risques',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Utilise l’état des preuves dans le cadre de la relecture finale de préparation.',
        outputLabel: 'Contrôle d’approbation',
        ctaLabel: 'Comment Dana décide',
      },
    ],
    ctaH2: 'Rendre les recommandations défendables.',
    ctaPara:
      'Kenji aide les éditeurs à voir quels constats sont solides, lesquels sont faibles, et lesquels ont besoin de plus de preuves avant l’approbation.',
    guidanceFooterLabel: 'STATUT DES PREUVES',
    guidanceFooterValue: 'Limites signalées · relecture nécessaire',
  },
  internal_linking: {
    seoTitle: 'Content Relationship Worker | WordPresto',
    metaDescription:
      'Leo relit comment une page se connecte au reste du contenu : liens internes, liens externes, qualité des ancres, parcours de lecteur, et si la page paraît isolée ou mal connectée.',
    h1: 'Vérifier si la page se connecte au reste du site.',
    heroPara1:
      'Une page fonctionne rarement seule. Elle a besoin de pages associées, de ressources de soutien, d’étapes suivantes claires et de liens internes utiles. Leo relit comment la page se connecte au reste du contenu. Il vérifie les liens internes, les liens externes, la qualité des ancres, les parcours de lecteur, et si la page paraît isolée ou mal connectée.',
    heroPara2:
      'Pour les relectures de page, les vérifications de maillage interne, les flux d’amélioration de contenu et la planification éditoriale.',
    problemEyebrow: 'Là où les relations de contenu tournent mal',
    problemH2: 'Une page utile peut quand même rester en dehors du parcours.',
    problemPara:
      'Une page peut n’avoir aucune étape suivante claire, un texte d’ancre vague, des liens de soutien faibles, trop de distractions, ou aucune relation évidente avec le cluster thématique environnant. Leo vérifie si la page se comporte comme faisant partie d’un site connecté.',
    problemAnnotation: '↘ vérifier les connexions, pas seulement le texte',
    beforeStamp: 'Page isolée',
    beforeHtml: `<p>La page se lit bien seule, mais n’a aucune étape suivante claire, un texte d’ancre vague et aucun lien évident vers le cluster thématique environnant.</p>`,
    beforeTags: ['Aucune étape suivante', 'Ancres vagues', 'Lien de cluster faible', 'Paraît isolée'],
    beforeNote: 'la page reste en dehors du parcours',
    afterStamp: 'Relecture de relation',
    afterHtml: `<p>Leo relit les liens et les parcours de la page et signale où les connexions ont besoin d’attention éditoriale.</p>`,
    afterTags: ['Parcours relus', 'Ancres faibles signalées', 'Vérifications manuelles listées', 'Prête pour la relecture'],
    afterNote: 'les connexions de la page sont visibles',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une passe de relation au niveau de la page.',
    helpsPara:
      'Leo relit les liens et les parcours visibles sur la page. Il ne parcourt jamais le site entier et ne confirme pas chaque page orpheline. Il donne aux éditeurs une relecture de relation solide au niveau de la page.',
    checks: [
      'La présence de liens internes',
      'L’usage des liens externes',
      'La clarté du texte d’ancre',
      'Les parcours d’étape suivante pour le lecteur',
      'Le risque de page orpheline au niveau de la page',
      'Les signaux de contenu de soutien',
    ],
    improves: [
      'Le mouvement du lecteur entre les pages',
      'L’utilité des liens internes',
      'La cohérence du cluster thématique',
      'La visibilité des parcours faibles',
    ],
    prepares: [
      'Une évaluation des liens',
      'Une relecture de parcours',
      'Des notes de qualité d’ancre',
      'Des vérifications manuelles du graphe du site',
    ],
    surfaces: [
      'Les liens d’étape suivante manquants',
      'Les ancres génériques ou faibles',
      'Les liens distrayants',
      'Les pages qui pourraient avoir besoin d’un soutien de cluster plus fort',
    ],
    ioH2: 'Ce à partir de quoi Leo travaille, et ce qu’il produit.',
    worksFrom: [
      'Les liens de la page',
      'Le texte d’ancre',
      'La structure de la page',
      'Les signaux d’intention',
      'Les signaux d’inventaire de contenu',
    ],
    produces: [
      'Relecture de relation',
      'Évaluation des liens internes',
      'Notes de qualité d’ancre',
      'Lacunes de parcours de lecteur',
      'Vérifications manuelles du graphe du site',
    ],
    scenarios: [
      {
        title: 'Une page paraît isolée.',
        description: 'Leo vérifie si elle a les liens et les parcours qu’une page connectée devrait avoir.',
      },
      {
        title: 'Des liens existent mais n’aident pas le lecteur.',
        description: 'Il relit le texte d’ancre et son emplacement pour une utilité réelle, pas seulement leur présence.',
      },
      {
        title: 'Un cluster thématique a besoin de connexions plus fortes.',
        description: 'Leo transmet à Zara une relecture de relation à vérifier par rapport à la couverture du cluster.',
      },
      {
        title: 'Un parcours de conversion n’est pas clair.',
        description: 'Il signale où la page manque d’un lien d’étape suivante clair pour le lecteur.',
      },
      {
        title: 'La page a des liens distrayants.',
        description: 'Leo fait remonter les liens qui détournent l’attention de l’objectif de la page.',
      },
      {
        title: 'Un conseil sur les liens a besoin de contexte source.',
        description: 'Il donne à Felix un point de départ au niveau de la page avant une relecture de parcours plus approfondie.',
      },
    ],
    boundaryH2: 'Leo relit les parcours. Les éditeurs décident quels liens changer.',
    boundaryPara:
      'Leo n’ajoute jamais de liens, n’en supprime jamais, ne réécrit jamais les ancres et ne publie jamais de changements. Il montre ce qui a besoin d’être relu.',
    boundaryChecklist: [
      'Leo relit les liens visibles sur la page, il n’en ajoute ni n’en supprime jamais lui-même.',
      'Sa relecture couvre le niveau de la page, pas un statut confirmé d’orphelin ou de crawl à l’échelle du site.',
      'Les suggestions d’ancre et de parcours sont à appliquer par les éditeurs, pas des changements automatiques.',
      'Les pages liées sont notées, jamais récupérées ni relues comme si Leo les avait lues.',
    ],
    willNot: [
      { color: 'red', text: 'Réécrire le texte d’ancre automatiquement' },
      { color: 'red', text: 'Ajouter ou supprimer des liens' },
      { color: 'red', text: 'Confirmer un statut d’orphelin à l’échelle du site sans données de site' },
      { color: 'red', text: 'Récupérer des pages liées comme si elles avaient été relues' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Leo travaille.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrait les liens et les signaux de page que Leo relit.',
        outputLabel: 'Signaux de page',
        ctaLabel: 'Comment Patrick inspecte',
      },
      {
        id: 'topical_authority',
        description: 'Relit le soutien du cluster thématique.',
        outputLabel: 'Relecture de couverture',
        ctaLabel: 'Comment Zara relit',
      },
      {
        id: 'internal_link_pathway',
        description: 'Relit les parcours de liens internes plus en détail.',
        outputLabel: 'Relecture de parcours',
        ctaLabel: 'Comment Felix relit',
      },
    ],
    ctaH2: 'Connecter la page au système de contenu plus large.',
    ctaPara:
      'Leo aide les éditeurs à voir si la page a des liens utiles, des ancres claires et un parcours de lecteur qui vaut la peine d’être suivi.',
    guidanceFooterLabel: 'STATUT DE RELATION',
    guidanceFooterValue: 'À relire · lacunes de parcours trouvées',
  },
  review_queue: {
    seoTitle: 'Review Queue Worker | WordPresto',
    metaDescription:
      'Riley transforme les changements proposés en éléments de relecture structurés, montrant ce qui a besoin d’une décision humaine, pourquoi cela compte, et quelle action est disponible.',
    h1: 'Transformer les changements proposés en décisions qu’un éditeur peut gérer.',
    heroPara1:
      'Une relecture de contenu peut produire des dizaines de constats. Sans file de relecture, ces constats deviennent du bruit : priorité floue, aucun statut de décision, aucun responsable désigné, et aucun chemin vers l’approbation. Riley transforme les changements proposés en éléments de relecture structurés. Chaque élément montre ce qui a besoin d’une décision humaine, pourquoi cela compte, et quelle action est disponible.',
    heroPara2:
      'Pour l’analyse de contenu, la relecture des changements, les flux d’approbation, et toute page où plusieurs Workers ont soulevé des problèmes.',
    problemEyebrow: 'Là où les flux de relecture tournent mal',
    problemH2: 'Les constats ne sont pas la même chose que les décisions.',
    problemPara:
      'Un audit de page peut produire des recommandations utiles, mais l’éditeur doit encore savoir quoi approuver, rejeter, différer ou examiner. Sans cette couche, le flux de travail paraît actif mais pas opérationnel. Riley transforme les constats en une file que l’équipe peut traiter.',
    problemAnnotation: '↘ organiser les décisions, pas seulement les constats',
    beforeStamp: 'Amas de constats',
    beforeHtml: `<p>Plusieurs Workers ont soulevé des problèmes sur la page, mais il n’y a aucune vue partagée de ce qui a besoin d’une décision, ni dans quel ordre.</p>`,
    beforeTags: ['Aucune priorité', 'Aucun statut de décision', 'Aucun responsable', 'Actif mais bloqué'],
    beforeNote: 'la relecture paraît active mais ne produit rien',
    afterStamp: 'File de relecture',
    afterHtml: `<p>Riley organise les constats en éléments de décision, chacun avec sa justification et les actions disponibles pour l’éditeur.</p>`,
    afterTags: ['Éléments priorisés', 'Décisions en attente', 'Aucune édition appliquée', 'Prêt pour l’action de l’éditeur'],
    afterNote: 'l’équipe peut le traiter dans l’ordre',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une couche de file entre les constats des Workers et l’approbation humaine.',
    helpsPara:
      'Riley ne décide jamais à la place de l’éditeur. Il organise les constats en éléments relisibles pour que les éditeurs puissent prendre des décisions sans perdre le contexte.',
    checks: [
      'Les changements proposés par les Workers de relecture',
      'Le type de décision nécessaire',
      'La priorité et la zone concernée',
      'Si plus de preuves sont nécessaires',
      'Si un élément doit être approuvé, rejeté, différé ou assigné',
    ],
    improves: [
      'La clarté du flux de relecture',
      'Le débit éditorial',
      'Le suivi des décisions',
      'La préparation à l’approbation humaine',
    ],
    prepares: [
      'Une file de relecture',
      'Des éléments de décision en attente',
      'Une justification par élément',
      'Des actions disponibles pour l’éditeur',
    ],
    surfaces: [
      'Les éléments qui ont besoin d’une approbation',
      'Les éléments qui ont besoin de plus de preuves',
      'Les éléments qui doivent être différés',
      'Les éléments dont le responsable ou la priorité ne sont pas clairs',
    ],
    ioH2: 'Ce à partir de quoi Riley travaille, et ce qu’il produit.',
    worksFrom: [
      'Les plans de changement sûrs',
      'Les constats des Workers',
      'Les changements proposés',
      'Les signaux de preuve et de risque',
      'Le contexte de relecture de la page',
    ],
    produces: [
      'File de relecture',
      'Éléments de décision',
      'Étiquettes de priorité',
      'Justification de relecture',
      'Statuts d’action en attente',
    ],
    scenarios: [
      {
        title: 'Une page a de nombreuses recommandations.',
        description: 'Riley les organise en une file que l’éditeur peut traiter dans l’ordre.',
      },
      {
        title: 'L’éditeur a besoin d’options de décision.',
        description: 'Il montre quelle action est disponible pour chaque élément : approuver, rejeter, différer ou assigner.',
      },
      {
        title: 'Une session de relecture devient confuse.',
        description: 'Riley ramène de la structure en transformant des constats épars en éléments suivis.',
      },
      {
        title: 'Plusieurs Workers ont soulevé des problèmes liés.',
        description: 'Il les regroupe pour que l’éditeur voie l’image complète, pas des notes éparpillées.',
      },
      {
        title: 'Une page avance vers l’approbation.',
        description: 'Riley donne à Dana une vue claire des éléments de la file encore non résolus.',
      },
      {
        title: 'L’équipe a besoin d’un transfert propre.',
        description: 'Il garde l’état de la file visible pour que rien ne se perde entre les sessions.',
      },
    ],
    boundaryH2: 'Riley organise les décisions. Il ne les prend pas.',
    boundaryPara:
      'Riley n’approuve jamais de changements, n’édite jamais de contenu, n’applique jamais de corrections et ne publie jamais. Il coordonne la file de relecture pour que les humains puissent décider.',
    boundaryChecklist: [
      'Riley organise les changements proposés en une file, il ne les approuve ni ne les rejette jamais lui-même.',
      'Les étiquettes de priorité sont un point de départ pour les éditeurs, pas un classement final.',
      'Les éléments non résolus restent visibles dans la file plutôt que d’être abandonnés en silence.',
      'Les décisions finales et les changements de contenu restent entre les mains de l’éditeur et du Worker concerné.',
    ],
    willNot: [
      { color: 'red', text: 'Approuver ou rejeter des éléments automatiquement' },
      { color: 'red', text: 'Appliquer des changements de contenu' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
      { color: 'red', text: 'Cacher des éléments de relecture non résolus' },
      { color: 'red', text: 'Remplacer la prise de décision humaine' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Riley travaille.',
    relatedWorkerIds: [
      {
        id: 'safe_change_planner',
        description: 'Transforme les constats en changements proposés que Riley peut mettre en file.',
        outputLabel: 'Plan de changement',
        ctaLabel: 'Comment Sam planifie',
      },
      {
        id: 'review',
        description: 'Résume les constats et les actions de relecture pour l’éditeur.',
        outputLabel: 'Résumé de relecture',
        ctaLabel: 'Comment Helen relit',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Vérifie si les éléments non résolus de la file bloquent l’approbation.',
        outputLabel: 'Contrôle d’approbation',
        ctaLabel: 'Comment Dana décide',
      },
    ],
    ctaH2: 'Rendre le travail de relecture gérable.',
    ctaPara:
      'Riley transforme les constats des Workers en décisions structurées, pour que les éditeurs puissent passer de l’analyse à l’action.',
    guidanceFooterLabel: 'STATUT DE LA FILE',
    guidanceFooterValue: 'En attente de relecture · décisions requises',
  },
};
