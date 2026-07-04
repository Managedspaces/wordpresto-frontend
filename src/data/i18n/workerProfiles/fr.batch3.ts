import type { WorkerProfileTranslatable } from './types';

export const frBatch3: Record<string, WorkerProfileTranslatable> = {
  clarity_proofing: {
    seoTitle: 'Clarity & Proofing Worker | WordPresto',
    metaDescription:
      'Esme relit la grammaire, la clarté, le ton et les formulations à risque, et produit des suggestions destinées uniquement à la relecture, pour que les éditeurs puissent améliorer le texte sans céder le contrôle à l’automatisation.',
    h1: 'Rendre l’écriture plus nette avant qu’elle n’arrive en relecture.',
    heroPara1:
      'Bien éditer, ce n’est pas seulement corriger des coquilles. C’est savoir repérer où une phrase part dans le mauvais sens, où une formulation sonne presque juste, où le ton a dérapé, et où le lecteur doit trop s’accrocher. Esme relit l’écriture elle-même : grammaire, orthographe, ponctuation, clarté, concision, lisibilité, ton, cohérence, répétitions, choix des mots et formulations à risque. Elle produit des suggestions destinées uniquement à la relecture, pour que les éditeurs puissent améliorer le texte sans céder à l’automatisation le contrôle de la page.',
    heroPara2:
      'Pour les flux de rédaction, les relectures de contenu, les mises à jour de page, les modifications client et les derniers contrôles éditoriaux avant approbation.',
    problemEyebrow: 'Là où les flux d’édition tournent mal',
    problemH2: 'Une page peut être factuellement juste et rester difficile à lire.',
    problemPara:
      'La plupart des contenus n’échouent pas parce que chaque phrase est cassée. Ils échouent parce que de petits problèmes s’accumulent : une formulation vague ici, une phrase trop longue là, des mots répétés, des transitions faibles, du bruit de ponctuation, une dérive de ton et une complexité inutile. Esme repère les problèmes de langue avant qu’ils ne deviennent des frictions en relecture.',
    problemAnnotation: '↘ relire l’écriture, puis l’approuver',
    beforeStamp: 'Brouillon brut',
    beforeHtml: `<p>La page a été conçue pour aider les utilisateurs à comprendre l’offre de service et elle donne un certain nombre d’exemples différents qui peuvent être utiles aux personnes envisageant potentiellement de faire une réservation.</p>`,
    beforeTags: ['Phrase trop longue', 'Formulation vague', 'Rythme plat', 'Langage de conversion faible'],
    beforeNote: 'cela donne à la page un air inachevé',
    afterStamp: 'Après Esme',
    afterHtml: `<p>La page explique le service clairement, donne des exemples concrets, et aide les clients potentiels à décider s’ils doivent réserver.</p>`,
    afterTags: ['Phrase plus claire', 'Moins de répétitions', 'Meilleure attention portée au lecteur', 'Rythme plus net'],
    afterNote: 'les éditeurs peuvent relire la suggestion, pas repartir de zéro',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une passe de relecture qui améliore l’écriture sans retirer le contrôle à l’éditeur.',
    helpsPara:
      'Esme relit la langue au niveau de la phrase, du paragraphe et de la page. Elle met en évidence ce qui rend le texte plus difficile à lire, moins cohérent, moins soigné ou plus risqué que nécessaire. Elle ne réécrit jamais la page à la place de l’éditeur. Elle donne des suggestions précises et vérifiables, pour qu’une personne puisse accepter, rejeter ou adapter le changement.',
    checks: [
      'La grammaire, l’orthographe et la ponctuation',
      'La clarté, la concision et la longueur des phrases',
      'Les répétitions, les formulations faibles et le choix des mots',
      'Le ton, l’adéquation de voix et la cohérence',
      'Les formulations à risque et les exagérations',
    ],
    improves: [
      'La lisibilité avant qu’une page n’atteigne la relecture finale',
      'La précision au niveau de la phrase sans changer le sens approuvé',
      'La cohérence entre les sections, les brouillons et les mises à jour de page',
    ],
    prepares: [
      'Une relecture structurée de clarté et de correction',
      'Des suggestions au niveau de la phrase pour relecture humaine',
      'Une liste de problèmes de formulation nécessitant un jugement éditorial',
    ],
    surfaces: [
      'Les formulations correctes sur le plan technique mais maladroites',
      'Les phrases qui ont besoin d’être simplifiées',
      'La dérive de ton par rapport à la voix choisie ou à l’objectif de la page',
      'Les affirmations risquées, les exagérations ou les formulations peu claires',
    ],
    ioH2: 'Ce à partir de quoi Esme travaille, et ce qu’elle produit.',
    worksFrom: [
      'Texte de la page ou du brouillon',
      'Contenu du Canvas de rédaction',
      'Résultat de la réécriture de section',
      'Signaux de voix et de style',
      'Signaux de relecture qualité du brouillon',
    ],
    produces: [
      'Relecture de clarté',
      'Suggestions de grammaire et de ponctuation',
      'Signalements de concision et de lisibilité',
      'Notes de ton et de cohérence',
      'Alertes de formulation à risque',
    ],
    scenarios: [
      {
        title: 'Une page est presque prête mais paraît encore brute.',
        description:
          'Esme trouve les frictions au niveau de la langue : phrases maladroites, formulations répétées, expressions peu claires et problèmes de ponctuation.',
      },
      {
        title: 'Un brouillon a été édité par plusieurs personnes.',
        description:
          'Elle vérifie la cohérence pour que la page ne donne pas l’impression d’être cousue à partir de voix différentes.',
      },
      {
        title: 'Un client a apporté des modifications manuelles au texte.',
        description:
          'Esme relit la nouvelle formulation sans annuler l’intention du client ni réécrire la page en silence.',
      },
      {
        title: 'Une page a besoin d’une passe de relecture façon Grammarly au sein du flux Word Presto.',
        description:
          'Elle donne des suggestions concrètes au niveau de la phrase tout en laissant l’éditeur aux commandes.',
      },
      {
        title: 'Un sujet réglementé ou sensible a besoin d’une formulation soignée.',
        description:
          'Esme signale les exagérations, les formulations risquées et le langage qui pourrait nécessiter un contrôle de conformité humain.',
      },
      {
        title: 'Un brouillon final se dirige vers l’approbation.',
        description:
          'Elle repère les petits problèmes avant que le contrôle d’approbation éditoriale ne relise la page.',
      },
    ],
    boundaryH2: 'Esme relit l’écriture. Les éditeurs décident des changements.',
    boundaryPara:
      'Une relecture de clarté n’est pas une réécriture automatique. Esme produit des suggestions, des signalements et des notes de relecture. L’éditeur décide ce qu’il accepte, ce qu’il rejette et ce qui a besoin d’une autre intervention humaine.',
    boundaryChecklist: [
      'Esme suggère, elle n’applique jamais.',
      'Les suggestions sont conçues pour être relues dans le flux éditorial.',
      'Les notes de ton et de clarté soutiennent le jugement humain, elles ne le remplacent pas.',
      'Les formulations à risque sont signalées pour relecture, jamais traitées comme une approbation juridique ou de conformité.',
    ],
    willNot: [
      { color: 'red', text: 'Éditer ou réécrire directement du contenu en ligne' },
      { color: 'red', text: 'Appliquer des suggestions sans approbation humaine' },
      { color: 'red', text: 'Publier, mettre à jour WordPress, ou écrire dans un CMS quel qu’il soit' },
      { color: 'red', text: 'Faire appel à un prestataire externe pour cette passe de relecture locale' },
      { color: 'red', text: 'Inventer des faits, des preuves ou des règles de marque' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Esme travaille.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: 'Vérifie si le texte correspond à la voix configurée avant que la relecture ne resserre la langue.',
        outputLabel: 'Relecture de voix',
        ctaLabel: 'Comment Helena vérifie',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Vérifie si le brouillon couvre les changements approuvés et présente des risques de qualité.',
        outputLabel: 'Relecture qualité du brouillon',
        ctaLabel: 'Comment Quinn relit',
      },
      {
        id: 'editorial_approval_gate',
        description: 'Vérifie si le contenu est prêt pour l’approbation éditoriale humaine.',
        outputLabel: 'Contrôle d’approbation',
        ctaLabel: 'Comment Dana décide',
      },
    ],
    ctaH2: 'Rendre l’écriture plus nette avant qu’elle n’arrive en relecture.',
    ctaPara:
      'Ajoutez Esme à votre flux de travail et chaque page reçoit une relecture soignée avant d’atteindre l’approbation finale.',
    guidanceFooterLabel: 'STATUT DE RELECTURE',
    guidanceFooterValue: 'Suggestions prêtes · en attente de l’éditeur',
  },
  cannibalisation_overlap: {
    seoTitle: 'Cannibalisation & Overlap Worker | WordPresto',
    metaDescription:
      'Cleo relit une page à la recherche de conflits d’intention, de risques de chevauchement et de rôle de contenu flou, pour aider les éditeurs à décider s’il faut préciser, soutenir, consolider ou vérifier manuellement une page par rapport aux autres.',
    h1: 'Repérer les pages qui essaient de remplir trop de rôles à la fois.',
    heroPara1:
      'La cannibalisation de contenu n’est pas seulement un problème de classement à l’échelle du site. Elle peut commencer à l’intérieur d’une seule page : intention mélangée, rôle éditorial flou, métadonnées qui promettent la mauvaise chose, sections minces qui devraient être ailleurs, ou texte de page qui entre en concurrence avec un autre contenu probable. Cleo relit une page à la recherche de conflits d’intention, de risques de chevauchement et de rôle de contenu flou. Elle aide les éditeurs à décider si la page doit être précisée, soutenue, consolidée ou vérifiée manuellement par rapport à d’autres pages.',
    heroPara2:
      'Pour les relectures SEO, les audits de contenu, la planification thématique et les flux d’amélioration de page.',
    problemEyebrow: 'Là où la cannibalisation commence',
    problemH2: 'Les pages entrent en concurrence quand leur rôle n’est pas clair.',
    problemPara:
      'Une page peut essayer d’être à la fois un guide, une page de service, une page de comparaison et une page de vente. Elle peut aussi contenir une section mince qui devrait être un article de support distinct. Ou son titre et sa meta description peuvent promettre une intention que le corps du texte ne satisfait pas. Cleo relit ces signaux de chevauchement avant que le site ne devienne plus difficile à gérer.',
    problemAnnotation: '↘ clarifier le rôle de la page',
    beforeStamp: 'Risque de chevauchement',
    beforeHtml: `<p>La page présente le service, compare des alternatives, répond à des FAQ générales et vise un titre de style guide.</p>`,
    beforeTags: ['Intention mélangée', 'Rôle flou', 'Sections de support minces', 'Décalage avec la promesse SERP'],
    beforeNote: 'la page pourrait entrer en concurrence avec du contenu futur',
    afterStamp: 'Rôle clarifié',
    afterHtml: `<p>La page est positionnée comme une page de décision de service, le contenu de type guide étant déplacé vers des contenus de support.</p>`,
    afterTags: ['Rôle de page clair', 'Intention plus nette', 'Meilleure planification de cluster', 'Vérifications manuelles listées'],
    afterNote: 'l’éditeur sait à quoi sert cette page',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture de cannibalisation honnête sur ses limites.',
    helpsPara:
      'Cleo relit les signaux déjà disponibles au niveau de la page dans le flux de travail. Elle peut signaler des indicateurs de risque et des vérifications manuelles, mais elle ne revendique jamais une détection complète de cannibalisation à l’échelle du site sans données de crawl et de classement.',
    checks: [
      'Le conflit d’intention à l’intérieur de la page',
      'Le décalage entre la promesse des métadonnées et le contenu',
      'Le rôle éditorial flou',
      'Les sections minces qui pourraient appartenir ailleurs',
      'Le risque de chevauchement au niveau de la page',
      'Les vérifications manuelles inter-pages nécessaires',
    ],
    improves: [
      'La clarté de l’objectif de la page',
      'La planification des clusters thématiques',
      'Les décisions de consolidation de contenu',
      'La confiance avant de réécrire ou d’étendre une page',
    ],
    prepares: [
      'Une relecture du risque de cannibalisation',
      'Un rôle de page recommandé',
      'Des vérifications manuelles de chevauchement',
      'Une action suivante suggérée',
    ],
    surfaces: [
      'Les pages qui essaient de servir des intentions concurrentes',
      'Les sections qui mériteraient leur propre page',
      'Les métadonnées susceptibles d’entrer en concurrence avec un autre contenu',
      'Les risques nécessitant une confirmation par crawl, mot-clé ou SERP',
    ],
    ioH2: 'Ce à partir de quoi Cleo travaille, et ce qu’elle produit.',
    worksFrom: [
      'L’évaluation d’intention',
      'Les signaux d’inventaire de contenu',
      'La relecture des métadonnées',
      'Les signaux de liens et de relations',
      'La structure de la page et la profondeur du contenu',
    ],
    produces: [
      'Relecture du risque de chevauchement',
      'Rôle de page recommandé',
      'Notes de conflit d’intention',
      'Vérifications manuelles inter-pages',
      'Pistes de consolidation',
    ],
    scenarios: [
      {
        title: 'Une page semble manquer de focus.',
        description: 'Cleo vérifie si la page mélange des intentions ou essaie de servir trop d’objectifs.',
      },
      {
        title: 'Vous soupçonnez une cannibalisation de mots-clés.',
        description: 'Elle relit le risque au niveau de la page et liste ce qui nécessite une confirmation inter-pages.',
      },
      {
        title: 'Les métadonnées et le contenu ne correspondent pas.',
        description: 'Cleo signale quand le titre ou la meta description promet une page différente de ce que livre le corps du texte.',
      },
      {
        title: 'Un cluster de contenu devient confus.',
        description: 'Elle aide à identifier si une page doit être précisée, scindée, soutenue ou consolidée.',
      },
      {
        title: 'Une section paraît trop mince.',
        description: 'Cleo signale le contenu qui gagnerait à devenir une page de support ou une cible de lien interne.',
      },
      {
        title: 'Une réécriture pourrait aggraver le chevauchement.',
        description: 'Elle aide les éditeurs à protéger le rôle de la page avant que les changements de texte ne commencent.',
      },
    ],
    boundaryH2: 'Cleo signale le risque. Les éditeurs décident de la stratégie de contenu.',
    boundaryPara:
      'Cleo ne fusionne jamais de pages, ne redirige jamais d’URL, ne supprime jamais de contenu et ne déclare jamais une cannibalisation confirmée à l’échelle du site à partir de la seule preuve d’une page. Elle donne à l’éditeur une relecture de risque structurée et des vérifications manuelles.',
    boundaryChecklist: [
      'Cleo signale le risque de chevauchement, elle ne fusionne ni ne supprime jamais de pages.',
      'Les affirmations de cannibalisation inter-pages ne sont faites qu’avec des données de crawl ou de classement à l’appui.',
      'Les rôles de page recommandés sont des propositions pour relecture éditoriale, pas des changements automatiques.',
      'Les vérifications manuelles sont clairement listées pour que les éditeurs sachent ce qui reste à confirmer.',
    ],
    willNot: [
      { color: 'red', text: 'Fusionner, élaguer ou rediriger des pages' },
      { color: 'red', text: 'Confirmer une cannibalisation inter-pages sans données à l’appui' },
      { color: 'red', text: 'Réécrire des titres ou du contenu automatiquement' },
      { color: 'red', text: 'Supprimer des sections ou des pages' },
      { color: 'red', text: 'Publier ou appliquer des changements à un CMS' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Cleo travaille.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Identifie l’intention du lecteur que Cleo vérifie à la recherche de conflits.',
        outputLabel: 'Évaluation d’intention',
        ctaLabel: 'Comment Yuna identifie',
      },
      {
        id: 'topical_authority',
        description: 'Relit la profondeur et le soutien du cluster thématique.',
        outputLabel: 'Relecture de couverture',
        ctaLabel: 'Comment Zara relit',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Aide à transformer les constats de chevauchement en recommandations de maintenance.',
        outputLabel: 'Relecture de maintenance',
        ctaLabel: 'Comment Hugo aide',
      },
    ],
    ctaH2: 'Clarifier le rôle avant que la page n’entre en concurrence avec elle-même.',
    ctaPara:
      'Cleo aide les éditeurs à voir le risque de chevauchement, l’intention mélangée et les questions de consolidation avant que le contenu n’avance.',
    guidanceFooterLabel: 'STATUT DE CHEVAUCHEMENT',
    guidanceFooterValue: 'À relire · rôle flou',
  },
  content_decay: {
    seoTitle: 'Content Decay & Refresh Priority Worker | WordPresto',
    metaDescription:
      'Faye relit les signaux de fraîcheur et le risque de dégradation du contenu, pour aider les éditeurs à décider si une page est encore d’actualité, doit être surveillée, rafraîchie, ou nécessite une relecture urgente.',
    h1: 'Savoir quand une page commence à perdre de son tranchant.',
    heroPara1:
      'Certaines pages échouent lentement. Le texte existe toujours, l’URL se charge toujours, mais les preuves sont anciennes, le titre promet quelque chose d’actuel, les exemples paraissent datés, ou le sujet a évolué depuis. Faye relit les signaux de fraîcheur et le risque de dégradation du contenu. Elle aide les éditeurs à décider si une page est encore d’actualité, doit être surveillée, rafraîchie, ou nécessite une relecture urgente.',
    heroPara2:
      'Pour les audits de contenu, la planification de rafraîchissement, la maintenance SEO et les pages où l’âge, l’exactitude ou l’actualité comptent.',
    problemEyebrow: 'Là où la dégradation du contenu commence',
    problemH2: 'Une page peut sembler achevée alors que son utilité s’estompe.',
    problemPara:
      'La dégradation du contenu est souvent subtile. Une date dans le titre, un exemple ancien, une affirmation non étayée, une comparaison dépassée, ou un type de page qui a besoin de mises à jour régulières peuvent réduire lentement la confiance et la performance. Faye recherche les signaux qui indiquent aux éditeurs qu’une page a besoin d’attention avant de devenir un problème plus important de classement ou de crédibilité.',
    problemAnnotation: '↘ trouver la dégradation avant que la page ne glisse',
    beforeStamp: 'Contenu dépassé',
    beforeHtml: `<p>Le titre promet un guide actuel, mais les exemples, les preuves et les recommandations n’ont pas été relus récemment.</p>`,
    beforeTags: ['Promesse temporelle', 'Exemples anciens', 'Fraîcheur des preuves faible', 'Aucun rythme de maintenance'],
    beforeNote: 'la page ne mérite peut-être plus la confiance',
    afterStamp: 'Rafraîchissement planifié',
    afterHtml: `<p>La page est marquée pour relecture, les exemples dépassés sont signalés, et un rythme de maintenance pratique est recommandé.</p>`,
    afterTags: ['Statut clair', 'Priorité utile', 'Relecture humaine', 'Aucune fausse mise à jour'],
    afterNote: 'l’éditeur sait ce qui a besoin d’attention',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture de fraîcheur sans prétendre mettre à jour la page.',
    helpsPara:
      'Faye relit les signaux de page déjà en mémoire et identifie le contenu qui pourrait avoir besoin d’être rafraîchi. Elle n’édite jamais, ne planifie jamais, ne publie jamais et n’invente jamais de faits mis à jour. Elle donne à l’éditeur un signal de maintenance clair.',
    checks: [
      'Le langage temporel dans les titres, les métadonnées et le texte',
      'La fraîcheur des preuves',
      'La sensibilité du type de contenu à l’âge',
      'Le décalage avec la promesse SERP',
      'Les indicateurs de rythme de maintenance',
      'Les risques de confiance liés à des informations dépassées',
    ],
    improves: [
      'La planification de la maintenance de contenu',
      'La priorisation des rafraîchissements',
      'La visibilité éditoriale des pages vieillissantes',
      'La confiance avant de mettre à jour une page ou de la laisser telle quelle',
    ],
    prepares: [
      'Une relecture de priorité de rafraîchissement',
      'Un rythme de maintenance recommandé',
      'Une checklist des signaux de contenu dépassé',
      'Des pistes de relecture humaine',
    ],
    surfaces: [
      'Les affirmations ou exemples datés',
      'Les promesses « année en cours » qui ont besoin de confirmation',
      'Les pages qui devraient être surveillées',
      'Le contenu qui pourrait avoir besoin d’une relecture urgente',
    ],
    ioH2: 'Ce à partir de quoi Faye travaille, et ce qu’elle produit.',
    worksFrom: [
      'Le titre de la page et les métadonnées',
      'Le texte de la page',
      'Les signaux de relecture des preuves',
      'Les signaux d’inventaire de contenu',
      'Les signaux d’intention et de format',
    ],
    produces: [
      'Relecture de fraîcheur',
      'Statut de risque de dégradation',
      'Priorité de rafraîchissement',
      'Rythme de maintenance',
      'Vérifications manuelles',
    ],
    scenarios: [
      {
        title: 'Une page contient des dates, des tendances ou des conseils d’actualité.',
        description: 'Faye vérifie si la page paraît encore assez actuelle pour qu’on lui fasse confiance.',
      },
      {
        title: 'Une page a régressé en performance.',
        description: 'Elle aide à identifier si la fraîcheur fait partie du problème.',
      },
      {
        title: 'Un audit de contenu a besoin de priorités de rafraîchissement.',
        description: 'Faye aide à séparer les pages qui vont bien de celles qui ont besoin d’attention.',
      },
      {
        title: 'Un titre promet quelque chose d’à jour.',
        description: 'Elle vérifie si le corps du texte tient vraiment cette promesse.',
      },
      {
        title: 'Une page inclut des preuves, des exemples ou des statistiques.',
        description: 'Faye signale les éléments qui pourraient avoir besoin d’être vérifiés ou remplacés.',
      },
      {
        title: 'Un flux de maintenance a besoin de structure.',
        description: 'Elle recommande de surveiller, rafraîchir ou relire la page en urgence.',
      },
    ],
    boundaryH2: 'Faye signale le risque de fraîcheur. Les éditeurs décident de la mise à jour.',
    boundaryPara:
      'Faye ne met jamais à jour de faits, ne réécrit jamais de sections, ne planifie jamais de rafraîchissements et ne publie jamais de changements. Elle relit les signaux disponibles et indique à l’éditeur ce qui a besoin d’attention.',
    boundaryChecklist: [
      'Faye signale le risque de fraîcheur, elle ne réécrit ni ne met jamais à jour le contenu elle-même.',
      'Les signaux de fraîcheur sont relus à partir de ce qui existe déjà, jamais de faits ou de dates inventés.',
      'La priorité de rafraîchissement est une recommandation pour la planification éditoriale, pas un calendrier automatique.',
      'Le risque de dégradation déduit est signalé pour relecture, jamais traité comme une perte de classement confirmée.',
    ],
    willNot: [
      { color: 'red', text: 'Réécrire automatiquement du contenu dépassé' },
      { color: 'red', text: 'Inventer des exemples, des dates ou des preuves récentes' },
      { color: 'red', text: 'Planifier des mises à jour' },
      { color: 'red', text: 'Publier ou appliquer des changements à un CMS' },
      { color: 'red', text: 'Traiter un risque de fraîcheur déduit comme une perte de classement confirmée' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Faye travaille.',
    relatedWorkerIds: [
      {
        id: 'content_inventory',
        description: 'Classe la page comme contenu et identifie des signaux d’inventaire utiles.',
        outputLabel: 'Relecture d’inventaire',
        ctaLabel: 'Comment Nora classe',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Vérifie si le contenu faible ou vieillissant doit être rafraîchi, consolidé ou élagué.',
        outputLabel: 'Relecture de maintenance',
        ctaLabel: 'Comment Hugo relit',
      },
      {
        id: 'content_refresh_brief',
        description: 'Transforme les constats de rafraîchissement en un brief de rafraîchissement structuré.',
        outputLabel: 'Brief de rafraîchissement',
        ctaLabel: 'Comment Iris planifie',
      },
    ],
    ctaH2: 'Garder les pages vieillissantes visibles avant qu’elles ne deviennent des problèmes.',
    ctaPara:
      'Faye aide les éditeurs à repérer la dégradation du contenu, la priorité de relecture et le rythme de maintenance avant que la page ne perde la confiance.',
    guidanceFooterLabel: 'STATUT DE FRAÎCHEUR',
    guidanceFooterValue: 'Rafraîchissement recommandé · relecture nécessaire',
  },
  topical_authority: {
    seoTitle: 'Topical Authority & Coverage Gap Worker | WordPresto',
    metaDescription:
      'Zara relit les signaux de couverture thématique et les lacunes de contenu, pour aider les éditeurs à voir si une page paraît solide, a besoin de soutien, est incomplète, ou nécessite un plan de contenu plus large.',
    h1: 'Voir si la page dispose d’un soutien thématique suffisant.',
    heroPara1:
      'Une page peut couvrir clairement son sujet tout en se trouvant dans un cluster de contenu faible. Il peut lui manquer des pages de support, des sous-thèmes connexes, elle peut être trop éloignée de son hub, ou porter un rôle thématique que le site n’a pas vraiment construit autour d’elle. Zara relit les signaux de couverture thématique et les lacunes de contenu. Elle aide les éditeurs à voir si une page paraît solide, a besoin de soutien, est incomplète, ou nécessite un plan de contenu plus large.',
    heroPara2:
      'Pour les audits SEO, la planification de clusters thématiques, les briefs de contenu et les pages qui ont besoin de signaux d’autorité plus forts.',
    problemEyebrow: 'Là où l’autorité thématique s’affaiblit',
    problemH2: 'Une bonne page ne suffit pas toujours à faire un sujet solide.',
    problemPara:
      'La performance en recherche dépend souvent du système de contenu qui entoure la page. Une page peut avoir besoin d’explicatifs de soutien, de pages de comparaison, de pages de service, de ressources appuyées sur des preuves, de liens internes ou d’un positionnement plus clair dans le cluster thématique. Zara vérifie si la page semble bien soutenue ou si elle porte trop de responsabilité thématique à elle seule.',
    problemAnnotation: '↘ construire le sujet autour de la page',
    beforeStamp: 'Soutien faible',
    beforeHtml: `<p>La page couvre le sujet principal, mais aucune ressource de soutien évidente, aucun chemin interne ni couverture de sous-thème connexe n’est visible.</p>`,
    beforeTags: ['Cluster mince', 'Soutien manquant', 'Contexte interne faible', 'Vérifications manuelles nécessaires'],
    beforeNote: 'la page travaille seule',
    afterStamp: 'Couverture améliorée',
    afterHtml: `<p>Le rôle de la page est clarifié et les besoins en contenu de soutien sont listés pour la planification.</p>`,
    afterTags: ['Rôle de page clair', 'Liste de lacunes', 'Meilleur plan de cluster', 'Décision humaine'],
    afterNote: 'l’éditeur sait quoi construire ensuite',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture de couverture thématique avant d’étendre le contenu.',
    helpsPara:
      'Zara relit la profondeur thématique, le soutien du cluster et les signaux de couverture manquants à partir des preuves disponibles sur la page. Elle ne crée jamais de nouvelles pages et ne revendique jamais une carte thématique complète à l’échelle du site sans données de crawl et de projet.',
    checks: [
      'Le rôle thématique et l’objectif de la page',
      'Les lacunes de sous-thèmes de soutien',
      'Le soutien des liens internes et du cluster',
      'La couverture d’intention',
      'Les signaux de risque de page orpheline',
      'Les vérifications manuelles de cluster thématique nécessaires',
    ],
    improves: [
      'La qualité de la planification de contenu',
      'La structure du cluster thématique',
      'Les décisions de soutien interne',
      'La confiance avant de construire des briefs ou de nouvelles pages',
    ],
    prepares: [
      'Une relecture des lacunes de couverture',
      'Un rôle de page recommandé',
      'Des idées de contenu de soutien',
      'Des vérifications manuelles de cluster',
    ],
    surfaces: [
      'Les pages de soutien manquantes',
      'La couverture thématique mince',
      'Le soutien de liens internes faible',
      'Les conflits ou lacunes de cluster nécessitant une confirmation',
    ],
    ioH2: 'Ce à partir de quoi Zara travaille, et ce qu’elle produit.',
    worksFrom: [
      'L’évaluation d’intention',
      'Les signaux de relation de contenu',
      'La relecture d’inventaire de contenu',
      'La structure et la profondeur de la page',
      'Les signaux de lacunes de preuves',
    ],
    produces: [
      'Relecture de couverture',
      'Liste de lacunes thématiques',
      'Rôle de page recommandé',
      'Pistes de contenu de soutien',
      'Vérifications manuelles de cluster',
    ],
    scenarios: [
      {
        title: 'Une page a besoin d’une autorité thématique plus forte.',
        description: 'Zara vérifie si le contenu de soutien environnant paraît assez solide.',
      },
      {
        title: 'Vous planifiez un cluster de contenu.',
        description: 'Elle identifie les lacunes de contenu de soutien à partir du rôle thématique de la page.',
      },
      {
        title: 'Une page semble trop large.',
        description: 'Zara signale si des sous-thèmes ont besoin de contenus de soutien distincts.',
      },
      {
        title: 'Le maillage interne paraît faible.',
        description: 'Elle vérifie si la page dispose d’un soutien de relation thématique suffisant.',
      },
      {
        title: 'Un brief a besoin d’un meilleur contexte thématique.',
        description: 'Zara aide à définir ce que l’article ou la page devrait couvrir ou relier en plus.',
      },
      {
        title: 'La performance en recherche dépend de l’autorité.',
        description: 'Elle donne aux éditeurs une vision plus claire de la profondeur thématique et des lacunes de couverture.',
      },
    ],
    boundaryH2: 'Zara relit la couverture. Les éditeurs décident du plan de contenu.',
    boundaryPara:
      'Zara ne crée jamais de pages, ne construit jamais de clusters automatiquement, ne publie jamais de nouveau contenu et ne revendique jamais une autorité complète à l’échelle du site à partir d’une seule relecture de page. Elle signale les signaux de couverture et les lacunes de planification.',
    boundaryChecklist: [
      'Zara signale les lacunes de couverture, elle ne crée ni ne publie jamais de pages elle-même.',
      'Les idées de contenu de soutien sont des pistes de planification, pas des briefs automatiques.',
      'Les affirmations sur les clusters à l’échelle du site ne sont faites qu’avec des données de projet ou de crawl à l’appui.',
      'Les vérifications manuelles sont clairement listées pour que les éditeurs sachent ce qui reste à confirmer.',
    ],
    willNot: [
      { color: 'red', text: 'Créer ou publier des pages de soutien' },
      { color: 'red', text: 'Inventer une carte thématique complète' },
      { color: 'red', text: 'Confirmer une couverture de cluster à l’échelle du site sans données de projet' },
      { color: 'red', text: 'Réécrire la page automatiquement' },
      { color: 'red', text: 'Appliquer des changements à un CMS' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Zara travaille.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Clarifie l’intention du lecteur que Zara vérifie par rapport à la couverture thématique.',
        outputLabel: 'Évaluation d’intention',
        ctaLabel: 'Comment Yuna clarifie',
      },
      {
        id: 'internal_linking',
        description: 'Relit les liens et les parcours de lecture qui soutiennent la connexion thématique.',
        outputLabel: 'Évaluation des liens',
        ctaLabel: 'Comment Leo relit',
      },
      {
        id: 'semantic_search_analyzer',
        description: 'Utilise une recherche vectorielle pour trouver des lacunes de couverture sémantique plus profondes.',
        outputLabel: 'Relecture de couverture sémantique',
        ctaLabel: 'Comment Sema trouve les lacunes',
      },
    ],
    ctaH2: 'Construire un contenu plus solide autour de la page.',
    ctaPara:
      'Zara aide les éditeurs à voir où une page a besoin de soutien thématique, de contenus connexes ou d’une meilleure planification de cluster.',
    guidanceFooterLabel: 'STATUT DE COUVERTURE',
    guidanceFooterValue: 'Soutien nécessaire · lacunes trouvées',
  },
  conversion_alignment: {
    seoTitle: 'Conversion & CTA Alignment Worker | WordPresto',
    metaDescription:
      'Diane relit l’alignement de conversion : la clarté du CTA, les signaux de confiance, les lacunes de preuve, la correspondance avec la promesse des métadonnées, et si l’étape suivante a du sens pour l’intention de la page.',
    h1: 'Vérifier si la page donne au lecteur une étape suivante claire.',
    heroPara1:
      'Un contenu peut satisfaire l’intention de recherche et quand même échouer commercialement. La page peut bien expliquer le sujet mais enterrer l’appel à l’action, manquer de signaux de confiance, demander la mauvaise action, ou créer un parcours de conversion qui ne correspond pas à l’étape où se trouve le lecteur. Diane relit l’alignement de conversion : la clarté du CTA, les signaux de confiance, les lacunes de preuve, la correspondance avec la promesse des métadonnées, et si l’étape suivante a du sens pour l’intention de la page.',
    heroPara2:
      'Pour les pages de service, les pages de destination, le contenu commercial, les pages de génération de leads et les dernières relectures de page avant transfert.',
    problemEyebrow: 'Là où l’alignement de conversion se rompt',
    problemH2: 'Une page peut être utile et pourtant laisser le lecteur sans issue.',
    problemPara:
      'Le problème n’est souvent pas l’absence de bouton. C’est la mauvaise action, une preuve faible, des signaux de confiance vagues, un timing flou ou une étape suivante qui ne correspond pas à la raison pour laquelle le lecteur est arrivé. Diane vérifie si la page mène quelque part de sensé.',
    problemAnnotation: '↘ aligner l’intention avec l’action',
    beforeStamp: 'Parcours faible',
    beforeHtml: `<p>La page explique le service, mais le CTA est générique, la preuve est mince et l’étape suivante apparaît trop tard.</p>`,
    beforeTags: ['CTA faible', 'Preuve manquante', 'Confiance faible', 'Mauvais timing'],
    beforeNote: 'le lecteur n’a aucune raison claire d’agir',
    afterStamp: 'Parcours clarifié',
    afterHtml: `<p>La page donne une preuve pertinente, une étape suivante plus claire et un CTA qui correspond à l’étape de décision du lecteur.</p>`,
    afterTags: ['Confiance renforcée', 'Action claire', 'Adéquation à l’intention', 'Relecture humaine'],
    afterNote: 'l’éditeur peut améliorer le parcours',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture de conversion sans prétendre mener des expériences.',
    helpsPara:
      'Diane relit les signaux de conversion déjà visibles dans les preuves de la page. Elle ne mène jamais de tests A/B, n’accède jamais aux analyses et ne réécrit jamais le texte commercial automatiquement. Elle donne aux éditeurs une relecture concrète de si la page soutient l’action.',
    checks: [
      'La présence et la clarté du CTA',
      'L’alignement entre intention et action',
      'Les signaux de confiance et de preuve',
      'La correspondance avec la promesse des métadonnées',
      'Le parcours de décision du lecteur',
      'Les distractions de conversion ou les étapes suivantes faibles',
    ],
    improves: [
      'La clarté des pages commerciales',
      'Le placement et la pertinence du CTA',
      'La construction de la confiance avant l’action',
      'La visibilité éditoriale des parcours de conversion faibles',
    ],
    prepares: [
      'Une relecture d’alignement de conversion',
      'Des pistes d’amélioration du CTA',
      'Une liste de lacunes de signaux de confiance',
      'Une action suivante recommandée',
    ],
    surfaces: [
      'Les CTA manquants ou faibles',
      'Les lacunes de preuve',
      'Le décalage entre le CTA et l’intention de la page',
      'Les liens ou sections qui distraient de la conversion',
    ],
    ioH2: 'Ce à partir de quoi Diane travaille, et ce qu’elle produit.',
    worksFrom: [
      'L’évaluation d’intention',
      'La structure de la page',
      'La relecture des métadonnées',
      'Les signaux de preuve et de confiance',
      'Les signaux de parcours de liens',
    ],
    produces: [
      'Relecture d’alignement de conversion',
      'Notes de clarté du CTA',
      'Liste de lacunes de confiance',
      'Étape suivante recommandée',
      'Constats sur le parcours de décision',
    ],
    scenarios: [
      {
        title: 'Une page de service ne génère pas d’action.',
        description: 'Diane vérifie si la page offre un chemin clair et crédible vers la demande ou la réservation.',
      },
      {
        title: 'Une page a du trafic mais peu de leads.',
        description: 'Elle vérifie si l’étape suivante correspond à l’étape probable où se trouve le lecteur.',
      },
      {
        title: 'Un CTA paraît générique.',
        description: 'Diane vérifie si l’action est assez précise pour l’objectif de la page.',
      },
      {
        title: 'Les signaux de confiance sont minces.',
        description: 'Elle signale l’absence de preuve, de réassurance ou de contexte de crédibilité.',
      },
      {
        title: 'Une page mélange information et vente.',
        description: 'Diane aide à clarifier si le parcours de conversion soutient ou interrompt le lecteur.',
      },
      {
        title: 'Une page arrive en relecture finale.',
        description: 'Elle vérifie si l’éditeur devrait améliorer le parcours avant approbation.',
      },
    ],
    boundaryH2: 'Diane relit le parcours. Les éditeurs décident du changement.',
    boundaryPara:
      'Diane ne mène jamais d’expériences, n’accède jamais aux analyses, ne réécrit jamais les CTA automatiquement et ne garantit jamais d’amélioration de conversion. Elle relit l’alignement et donne aux éditeurs humains des constats concrets.',
    boundaryChecklist: [
      'Diane signale le risque de conversion, elle ne réécrit jamais les CTA ni le texte elle-même.',
      'Les constats viennent des preuves au niveau de la page, jamais d’un accès aux analyses ou d’expériences en direct.',
      'Les étapes suivantes recommandées sont des pistes pour relecture éditoriale, pas des changements automatiques.',
      'Aucune amélioration de conversion garantie n’est jamais affirmée.',
    ],
    willNot: [
      { color: 'red', text: 'Mener des tests A/B' },
      { color: 'red', text: 'Accéder aux analyses ou revendiquer une hausse de conversion' },
      { color: 'red', text: 'Réécrire des appels à l’action automatiquement' },
      { color: 'red', text: 'Ajouter des formulaires, des boutons ou du tracking' },
      { color: 'red', text: 'Publier ou appliquer des changements à un CMS' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Diane travaille.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Clarifie l’intention du lecteur que Diane aligne avec l’action de la page.',
        outputLabel: 'Évaluation d’intention',
        ctaLabel: 'Comment Yuna clarifie',
      },
      {
        id: 'content_format_serp_fit',
        description: 'Vérifie si le format de la page soutient la forme de recherche attendue.',
        outputLabel: 'Relecture de format',
        ctaLabel: 'Comment Ivan vérifie',
      },
      {
        id: 'internal_linking',
        description: 'Relit les liens et les parcours autour de l’étape suivante.',
        outputLabel: 'Évaluation des liens',
        ctaLabel: 'Comment Leo relit',
      },
    ],
    ctaH2: 'Transformer des pages utiles en parcours plus clairs.',
    ctaPara:
      'Diane aide les éditeurs à voir si la page donne aux lecteurs assez de confiance, de clarté et de direction pour franchir l’étape suivante.',
    guidanceFooterLabel: 'STATUT DE CONVERSION',
    guidanceFooterValue: 'À relire · parcours faible',
  },
  content_format_serp_fit: {
    seoTitle: 'Content Format & SERP Fit Worker | WordPresto',
    metaDescription:
      'Ivan vérifie si le format de contenu actuel correspond à l’intention probable et à la forme de page attendue, en signalant les conflits de format et les métadonnées qui promettent une expérience différente.',
    h1: 'Vérifier si la page a la bonne forme pour son rôle.',
    heroPara1:
      'Une page peut cibler le bon sujet tout en utilisant le mauvais format. Le chercheur peut avoir besoin d’un guide, d’une comparaison, d’une checklist, d’une page de service, d’un explicatif, d’une FAQ, d’une page de type produit ou d’une page de décision, alors que le contenu lui donne autre chose. Ivan vérifie si le format de contenu actuel correspond à l’intention probable et à la forme de page attendue. Il signale les conflits de format, les éléments structurels manquants et les endroits où les métadonnées promettent une expérience différente de celle de la page elle-même.',
    heroPara2:
      'Pour les relectures SEO, les briefs de contenu, les réécritures de page et les décisions de format avant la rédaction.',
    problemEyebrow: 'Là où le format de contenu tourne mal',
    problemH2: 'La page répond au sujet dans la mauvaise forme.',
    problemPara:
      'Un « guide » qui se comporte comme une page de vente. Une page de service qui se lit comme un article de blog. Une page de comparaison sans structure de comparaison. Une page FAQ sans vraies questions. Ces décalages de format rendent la page plus difficile à comprendre pour les lecteurs et les moteurs de recherche. Ivan vérifie si le format de la page correspond à la promesse.',
    problemAnnotation: '↘ faire correspondre la forme à l’intention',
    beforeStamp: 'Mauvaise adéquation',
    beforeHtml: `<p>Le titre promet un guide pratique, mais la page est surtout une présentation de l’entreprise, sans étapes, exemples ni aide à la décision.</p>`,
    beforeTags: ['Décalage de format', 'Sections manquantes', 'Adéquation SERP faible', 'Mauvaise correspondance aux attentes du lecteur'],
    beforeNote: 'la page donne l’impression d’être le mauvais résultat',
    afterStamp: 'Format clarifié',
    afterHtml: `<p>La page est marquée comme une page de décision de service, le contenu de type guide étant déplacé vers un brief de soutien.</p>`,
    afterTags: ['Format clair', 'Meilleures attentes', 'Structure utile', 'Prête pour relecture'],
    afterNote: 'l’éditeur sait quelle forme construire',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture de format avant d’écrire davantage de texte.',
    helpsPara:
      'Ivan relit la forme actuelle de la page et la compare au format probablement attendu. Il ne récupère jamais de SERP en direct et ne réécrit jamais la page. Il donne aux éditeurs une évaluation de format structurée.',
    checks: [
      'Le format actuel de la page',
      'Le format attendu selon l’intention',
      'Les sections manquantes propres au format',
      'L’alignement de la promesse des métadonnées',
      'Le décalage de structure et de type de contenu',
      'Les écarts avec les attentes du lecteur',
    ],
    improves: [
      'La planification de la page avant réécriture',
      'La qualité du brief',
      'L’alignement à l’intention de recherche',
      'Les décisions structurelles avant la rédaction du texte',
    ],
    prepares: [
      'Une relecture d’adéquation de format',
      'Un format de page recommandé',
      'Une liste de sections manquantes',
      'Une guidance de réécriture pour les éditeurs',
    ],
    surfaces: [
      'Les pages au mauvais format',
      'Les types de page mélangés',
      'Les éléments de comparaison, de guide, de FAQ ou de service manquants',
      'Les métadonnées qui promettent une expérience de contenu différente',
    ],
    ioH2: 'Ce à partir de quoi Ivan travaille, et ce qu’il produit.',
    worksFrom: [
      'L’évaluation d’intention',
      'La structure de la page',
      'La relecture des métadonnées',
      'Les signaux d’inventaire de contenu',
      'Les signaux de schema et d’extraits SERP',
    ],
    produces: [
      'Relecture d’adéquation de format',
      'Format recommandé',
      'Notes de structure manquante',
      'Préoccupations d’adéquation SERP',
      'Pistes de réécriture humaine',
    ],
    scenarios: [
      {
        title: 'Une page cible le bon sujet mais paraît étrange.',
        description: 'Ivan vérifie si le problème vient du format, pas seulement du texte.',
      },
      {
        title: 'Un brief a besoin d’un type de page plus clair.',
        description: 'Il aide à décider si la page doit être un guide, une page de service, une comparaison, un explicatif ou une FAQ.',
      },
      {
        title: 'Un titre promet un format que la page ne livre pas.',
        description: 'Ivan signale le décalage avant que les changements de métadonnées ou de texte n’aillent plus loin.',
      },
      {
        title: 'Une réécriture est sur le point de commencer.',
        description: 'Il donne à l’éditeur une meilleure structure avant la rédaction.',
      },
      {
        title: 'L’intention de recherche et les besoins de conversion entrent en conflit.',
        description: 'Ivan aide à clarifier la forme qui peut servir les deux.',
      },
      {
        title: 'Une page a des sections attendues manquantes.',
        description: 'Il liste les lacunes propres au format pour relecture humaine.',
      },
    ],
    boundaryH2: 'Ivan recommande la forme. Les éditeurs décident de la structure.',
    boundaryPara:
      'Ivan ne récupère jamais de SERP en direct, ne réécrit jamais la page, ne crée jamais de schema et ne publie jamais de changements. Il relit le format de la page et donne aux éditeurs une recommandation structurée.',
    boundaryChecklist: [
      'Ivan recommande un format, il ne réécrit jamais la page lui-même.',
      'Les évaluations de format viennent des preuves de la page, jamais de récupérations de SERP en direct.',
      'La structure recommandée est une piste pour relecture éditoriale, pas un changement automatique.',
      'Aucune amélioration de classement n’est jamais garantie.',
    ],
    willNot: [
      { color: 'red', text: 'Récupérer ou fabriquer des mises en page SERP' },
      { color: 'red', text: 'Réécrire la page automatiquement' },
      { color: 'red', text: 'Créer ou appliquer du schema' },
      { color: 'red', text: 'Garantir une amélioration de classement' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Ivan travaille.',
    relatedWorkerIds: [
      {
        id: 'intent_analyst',
        description: 'Clarifie l’intention du lecteur qu’Ivan utilise pour évaluer l’adéquation de format.',
        outputLabel: 'Évaluation d’intention',
        ctaLabel: 'Comment Yuna clarifie',
      },
      {
        id: 'topical_authority',
        description: 'Vérifie si le format dispose d’un soutien thématique suffisant.',
        outputLabel: 'Relecture de couverture',
        ctaLabel: 'Comment Zara relit',
      },
      {
        id: 'conversion_alignment',
        description: 'Vérifie si le format choisi soutient l’étape suivante.',
        outputLabel: 'Relecture de conversion',
        ctaLabel: 'Comment Diane vérifie',
      },
    ],
    ctaH2: 'Mettre la page dans la bonne forme avant de l’améliorer.',
    ctaPara:
      'Ivan aide les éditeurs à choisir le format qui correspond à l’intention de recherche, aux attentes du lecteur et à l’objectif de la page.',
    guidanceFooterLabel: 'STATUT DE FORMAT',
    guidanceFooterValue: 'Mauvaise adéquation · relecture nécessaire',
  },
  internal_link_pathway: {
    seoTitle: 'Internal Link Pathway Worker | WordPresto',
    metaDescription:
      'Felix relit la santé des parcours de liens internes : le risque de page orpheline, la qualité du texte d’ancre, les relations hub-and-spoke, les liens d’étape suivante manquants, les liens concurrents et la cohérence du parcours.',
    h1: 'Relire les chemins que les lecteurs et les robots peuvent vraiment suivre.',
    heroPara1:
      'Les liens internes ne sont pas seulement des signaux SEO. Ce sont des itinéraires à travers le site. De bons liens aident les lecteurs à passer de la question à la preuve, du guide au service, de la page de soutien à la page commerciale, et du sujet large à l’action précise. Felix relit la santé des parcours de liens internes : le risque de page orpheline, la qualité du texte d’ancre, les relations hub-and-spoke, les liens d’étape suivante manquants, les liens concurrents et la cohérence du parcours.',
    heroPara2:
      'Pour les audits de liens internes, les relectures de page, les améliorations de cluster thématique et les vérifications de parcours de conversion.',
    problemEyebrow: 'Là où le maillage interne tourne mal',
    problemH2: 'Les liens existent, mais ne créent pas toujours un parcours utile.',
    problemPara:
      'Une page peut avoir des liens internes vagues, déconnectés, enterrés, distrayants ou pointant vers la mauvaise étape suivante. Elle peut ne pas se connecter à son hub, à ses pages de soutien ou à son parcours de conversion. Felix vérifie si les liens forment un parcours cohérent, pas seulement s’ils sont présents.',
    problemAnnotation: '↘ transformer les liens en parcours',
    beforeStamp: 'Parcours faible',
    beforeHtml: `<p>La page renvoie vers trois articles sans rapport et utilise des ancres vagues qui n’expliquent pas pourquoi le lecteur devrait cliquer.</p>`,
    beforeTags: ['Liens flottants', 'Ancres faibles', 'Aucune relation de hub', 'Étape suivante médiocre'],
    beforeNote: 'le site paraît déconnecté',
    afterStamp: 'Parcours clarifié',
    afterHtml: `<p>Les liens soutiennent le rôle de la page, utilisent des ancres descriptives et mènent vers des pages de soutien ou de conversion utiles.</p>`,
    afterTags: ['Ancres claires', 'Meilleur parcours de cluster', 'Étape suivante utile', 'Sûr pour relecture'],
    afterNote: 'le lecteur a un chemin à suivre',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture de parcours de liens internes avant toute modification.',
    helpsPara:
      'Felix relit les signaux de page déjà visibles et le contexte des liens. Il n’édite jamais les ancres, ne récupère jamais les pages liées, ne parcourt jamais tout le site et ne publie jamais de changements. Il donne aux éditeurs une relecture de parcours structurée.',
    checks: [
      'La présence et le placement des liens internes',
      'La clarté du texte d’ancre',
      'Les liens d’étape suivante manquants',
      'Les signaux de hub, de spoke et de page de soutien',
      'Les liens concurrents ou distrayants',
      'La cohérence du parcours',
    ],
    improves: [
      'Le mouvement du lecteur à travers le site',
      'La qualité des liens internes',
      'Le soutien au cluster thématique',
      'La clarté du parcours de conversion',
    ],
    prepares: [
      'Une relecture de parcours interne',
      'Des pistes d’action sur les liens',
      'Des notes de qualité d’ancre',
      'Des vérifications manuelles du graphe du site',
    ],
    surfaces: [
      'Les ancres faibles',
      'Les liens de soutien manquants',
      'Les parcours de liens confus',
      'Les liens internes susceptibles d’entrer en concurrence avec l’objectif de la page',
    ],
    ioH2: 'Ce à partir de quoi Felix travaille, et ce qu’il produit.',
    worksFrom: [
      'Les liens internes',
      'Le texte d’ancre',
      'La relecture des relations de contenu',
      'Les signaux d’intention et de format',
      'Les signaux d’alignement de conversion',
    ],
    produces: [
      'Relecture de parcours',
      'Notes de qualité d’ancre',
      'Pistes de liens manquants',
      'Risques de parcours concurrents',
      'Actions de liens recommandées',
    ],
    scenarios: [
      {
        title: 'Une page a des liens mais aucun parcours clair.',
        description: 'Felix vérifie si les liens forment un parcours utile.',
      },
      {
        title: 'Un cluster thématique a besoin d’un meilleur soutien.',
        description: 'Il vérifie si la page se connecte à des hubs, des spokes ou des pages de soutien.',
      },
      {
        title: 'Le texte d’ancre paraît vague.',
        description: 'Felix signale les liens qui n’expliquent pas leur destination.',
      },
      {
        title: 'Une page a un mouvement de conversion faible.',
        description: 'Il vérifie si les liens internes soutiennent ou détournent de l’étape suivante prévue.',
      },
      {
        title: 'Une page pourrait être isolée.',
        description: 'Felix liste les signaux de risque de page orpheline et les vérifications manuelles.',
      },
      {
        title: 'Les éditeurs planifient des améliorations de liens.',
        description: 'Il donne des actions de liens vérifiables avant que quiconque n’édite la page.',
      },
    ],
    boundaryH2: 'Felix relit les parcours. Les éditeurs décident des changements de liens.',
    boundaryPara:
      'Felix n’ajoute, ne supprime ni ne réécrit jamais de liens automatiquement. Il ne parcourt jamais tout le site et ne confirme jamais le statut complet de page orpheline sans données de découverte. Il produit des constats de parcours destinés uniquement à la relecture.',
    boundaryChecklist: [
      'Felix signale les problèmes de parcours, il n’édite jamais les liens lui-même.',
      'Les constats viennent des signaux de page déjà visibles, pas d’un crawl complet du site.',
      'Le statut de page orpheline n’est confirmé que lorsque des données de découverte existent.',
      'Les actions de liens recommandées sont des pistes pour relecture éditoriale, pas des changements automatiques.',
    ],
    willNot: [
      { color: 'red', text: 'Éditer des liens ou des ancres automatiquement' },
      { color: 'red', text: 'Récupérer chaque page liée' },
      { color: 'red', text: 'Confirmer un statut de page orpheline à l’échelle du site sans données de crawl' },
      { color: 'red', text: 'Créer des redirections ou des changements de navigation' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Felix travaille.',
    relatedWorkerIds: [
      {
        id: 'internal_linking',
        description: 'Relit la couche de relations de page plus large.',
        outputLabel: 'Évaluation des liens',
        ctaLabel: 'Comment Leo relit',
      },
      {
        id: 'topical_authority',
        description: 'Vérifie si les parcours de liens soutiennent le cluster thématique.',
        outputLabel: 'Relecture de couverture',
        ctaLabel: 'Comment Zara relit',
      },
      {
        id: 'conversion_alignment',
        description: 'Vérifie si le parcours soutient l’action prévue.',
        outputLabel: 'Relecture de conversion',
        ctaLabel: 'Comment Diane vérifie',
      },
    ],
    ctaH2: 'Faire fonctionner les liens internes comme un système.',
    ctaPara:
      'Felix aide les éditeurs à transformer des liens flottants en parcours de lecture clairs, en soutien thématique et en actions de liens vérifiables.',
    guidanceFooterLabel: 'STATUT DE PARCOURS',
    guidanceFooterValue: 'À relire · parcours faibles',
  },
  content_pruning_consolidation: {
    seoTitle: 'Content Pruning & Consolidation Worker | WordPresto',
    metaDescription:
      'Hugo relit les signaux de maintenance de contenu : le risque de chevauchement, le contenu mince, la dégradation, le rôle flou, les parcours faibles et les pistes de consolidation, pour aider les éditeurs à décider de l’action de maintenance la plus sûre.',
    h1: 'Décider si un contenu faible doit être amélioré, fusionné ou laissé tel quel.',
    heroPara1:
      'Toutes les pages sous-performantes n’ont pas besoin d’être réécrites. Certaines ont besoin d’être rafraîchies. D’autres ont besoin d’être consolidées. D’autres encore devraient être conservées parce qu’elles servent un objectif étroit mais valide. D’autres enfin nécessitent une discussion prudente d’élagage avant que le site ne devienne encombré et confus. Hugo relit les signaux de maintenance de contenu : le risque de chevauchement, le contenu mince, la dégradation, le rôle flou, les parcours faibles et les pistes de consolidation. Il aide les éditeurs à décider de l’action de maintenance la plus sûre.',
    heroPara2:
      'Pour les audits de contenu, les relectures d’élagage, la planification de consolidation et la maintenance du site sur le long terme.',
    problemEyebrow: 'Là où la maintenance de contenu tourne mal',
    problemH2: 'Les équipes gardent tout, ou coupent trop vite.',
    problemPara:
      'L’élagage de contenu est risqué quand il repose sur des signaux superficiels. Une page peut paraître faible tout en soutenant un parcours de niche, un chemin interne, un besoin de conformité ou un sujet de longue traîne. Une autre page peut paraître inoffensive tout en causant du chevauchement, de la dégradation ou de la confusion de cluster. Hugo aide à prendre des décisions de maintenance plus prudentes.',
    problemAnnotation: '↘ améliorer, consolider ou relire avant de couper',
    beforeStamp: 'Élagage risqué',
    beforeHtml: `<p>La page est mince et ancienne, alors l’équipe la supprime sans vérifier les liens, le chevauchement, le rôle de la page ou sa valeur de soutien.</p>`,
    beforeTags: ['Seul signal de contenu mince', 'Aucune vérification de parcours', 'Aucune relecture de rôle', 'Suppression risquée'],
    beforeNote: 'la maintenance devient une supposition',
    afterStamp: 'Relecture prudente',
    afterHtml: `<p>La page est marquée comme candidate à la consolidation, avec des vérifications manuelles avant toute action.</p>`,
    afterTags: ['Sûr pour relecture', 'Tenant compte du rôle', 'Vérifications listées', 'Aucune suppression automatique'],
    afterNote: 'l’éditeur décide avec du contexte',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture de maintenance sans action destructrice.',
    helpsPara:
      'Hugo combine les signaux déjà disponibles et les transforme en une recommandation de maintenance vérifiable. Il ne supprime jamais de pages, ne fusionne jamais de contenu, ne crée jamais de redirections et ne publie jamais de changements.',
    checks: [
      'Les signaux de contenu mince ou faible',
      'Le risque de dégradation et de fraîcheur du contenu',
      'Le risque de cannibalisation et de chevauchement',
      'La clarté du rôle de la page',
      'La valeur du lien interne ou du parcours',
      'Les vérifications manuelles avant élagage ou consolidation',
    ],
    improves: [
      'La planification de la maintenance de contenu',
      'Des décisions d’élagage plus sûres',
      'La qualité de la relecture de consolidation',
      'La visibilité des pages qui ont besoin d’action ou de protection',
    ],
    prepares: [
      'Une recommandation de maintenance',
      'Une relecture des candidats à la consolidation',
      'Des notes de prudence pour l’élagage',
      'Une checklist de vérification manuelle',
    ],
    surfaces: [
      'Les pages qui pourraient avoir besoin d’un rafraîchissement plutôt que d’un élagage',
      'Les pages qui pourraient appartenir à un autre contenu',
      'Les risques avant de supprimer ou de consolider',
      'Les données manquantes nécessaires avant une décision finale',
    ],
    ioH2: 'Ce à partir de quoi Hugo travaille, et ce qu’il produit.',
    worksFrom: [
      'Les signaux d’inventaire de contenu',
      'La relecture de cannibalisation',
      'La relecture de fraîcheur',
      'Les signaux de parcours interne',
      'Les signaux de couverture thématique',
    ],
    produces: [
      'Relecture de maintenance',
      'Action recommandée',
      'Pistes de consolidation',
      'Mises en garde d’élagage',
      'Vérifications manuelles',
    ],
    scenarios: [
      {
        title: 'Une page paraît faible mais pourrait encore compter.',
        description: 'Hugo vérifie si la page a de la valeur avant que quiconque n’envisage l’élagage.',
      },
      {
        title: 'Un chevauchement de contenu est suspecté.',
        description: 'Il aide à décider s’il faut consolider, préciser ou relire manuellement.',
      },
      {
        title: 'Une page est ancienne et mince.',
        description: 'Hugo sépare les opportunités de rafraîchissement des candidats à la consolidation.',
      },
      {
        title: 'Un site a trop de pages similaires.',
        description: 'Il donne aux éditeurs un chemin de maintenance plus sûr que la suppression aveugle.',
      },
      {
        title: 'Des liens internes dépendent de la page.',
        description: 'Hugo signale le risque de parcours avant suppression ou consolidation.',
      },
      {
        title: 'Un plan de maintenance a besoin d’actions vérifiables.',
        description: 'Il transforme des signaux désordonnés en une recommandation structurée.',
      },
    ],
    boundaryH2: 'Hugo recommande la maintenance. Les éditeurs décident de l’action.',
    boundaryPara:
      'Hugo ne supprime, ne fusionne, ne redirige, ne réécrit ni ne publie jamais. Il ne fait que recommander une direction de maintenance et lister les vérifications manuelles nécessaires avant toute action.',
    boundaryChecklist: [
      'Hugo recommande une direction, il ne supprime ni ne fusionne jamais de pages lui-même.',
      'Les constats combinent des signaux de relecture existants, pas une nouvelle analyse destructrice.',
      'Les vérifications manuelles sont toujours listées avant tout élagage ou toute consolidation.',
      'Des signaux faibles seuls ne sont jamais traités comme suffisants pour une action destructrice.',
    ],
    willNot: [
      { color: 'red', text: 'Supprimer ou élaguer des pages' },
      { color: 'red', text: 'Fusionner du contenu automatiquement' },
      { color: 'red', text: 'Créer des redirections' },
      { color: 'red', text: 'Réécrire ou republier du contenu' },
      { color: 'red', text: 'Traiter des signaux faibles comme suffisants pour une action destructrice' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Hugo travaille.',
    relatedWorkerIds: [
      {
        id: 'cannibalisation_overlap',
        description: 'Signale les risques de chevauchement et de rôle de page flou.',
        outputLabel: 'Relecture de chevauchement',
        ctaLabel: 'Comment Cleo relit',
      },
      {
        id: 'content_decay',
        description: 'Vérifie si la page a besoin d’être rafraîchie ou relue en urgence.',
        outputLabel: 'Relecture de fraîcheur',
        ctaLabel: 'Comment Faye relit',
      },
      {
        id: 'content_inventory',
        description: 'Classe la page comme contenu avant les décisions de maintenance.',
        outputLabel: 'Relecture d’inventaire',
        ctaLabel: 'Comment Nora classe',
      },
    ],
    ctaH2: 'Rendre la maintenance de contenu plus sûre.',
    ctaPara:
      'Hugo aide les éditeurs à décider si une page doit être rafraîchie, consolidée, protégée ou relue avant d’envisager toute action destructrice.',
    guidanceFooterLabel: 'STATUT DE MAINTENANCE',
    guidanceFooterValue: 'À relire · candidate à la consolidation',
  },
  content_inventory: {
    seoTitle: 'Content Inventory Worker | WordPresto',
    metaDescription:
      'Nora relit la page comme un contenu à part entière, en identifiant le type de page, les signaux structurels, les lacunes de contenu et les métadonnées d’inventaire qui peuvent aider les éditeurs à mieux planifier leur travail.',
    h1: 'Comprendre à quel type de contenu vous avez affaire.',
    heroPara1:
      'Avant qu’une page puisse être améliorée, elle doit être classée. Est-ce une page de service, un guide, un article, une page de destination, une page de comparaison, une page de support, ou autre chose ? Quels signaux sont présents ? Que manque-t-il ? Qu’est-ce qui aiderait la planification future ? Nora relit la page comme un contenu à part entière. Elle identifie le type de page, les signaux structurels, les lacunes de contenu et les métadonnées d’inventaire qui peuvent aider les éditeurs à mieux planifier leur travail.',
    heroPara2:
      'Pour les audits de contenu, les relectures de page, la planification de contenu et l’évaluation éditoriale en phase préliminaire.',
    problemEyebrow: 'Là où la planification de contenu tourne mal',
    problemH2: 'Les équipes commencent à améliorer les pages avant de savoir ce que la page est censée être.',
    problemPara:
      'Une page ne peut être jugée correctement qu’une fois son rôle clair. Une page de service mince, un article faible et une page de comparaison incomplète ont besoin d’actions différentes. Sans contexte d’inventaire, chaque recommandation risque de devenir générique. Nora donne au flux de travail une classification de contenu plus claire avant que la relecture approfondie ne commence.',
    problemAnnotation: '↘ classer le contenu avant de l’améliorer',
    beforeStamp: 'Contenu flou',
    beforeHtml: `<p>La page a du texte de service, des FAQ et des sections de style guide, mais aucun type de contenu clair.</p>`,
    beforeTags: ['Rôle flou', 'Structure mélangée', 'Métadonnées manquantes', 'Difficile à planifier'],
    beforeNote: 'l’équipe ne sait pas quel rôle a la page',
    afterStamp: 'Inventaire relu',
    afterHtml: `<p>La page est classée comme une page de décision de service à laquelle il manque de la preuve, de la profondeur de FAQ et du soutien de pages connexes.</p>`,
    afterTags: ['Type plus clair', 'Lacunes de planification', 'Meilleur acheminement du flux', 'Prête pour relecture'],
    afterNote: 'l’éditeur sait à quel type de contenu il a affaire',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un inventaire au niveau de la page sans prétendre parcourir tout le site.',
    helpsPara:
      'Nora relit la page inspectée comme un contenu unique. Elle ne construit jamais un inventaire complet du site, ne parcourt jamais les pages liées et ne classe jamais l’ensemble du domaine. Elle donne aux éditeurs une relecture d’inventaire utile au niveau de la page.',
    checks: [
      'Le type de page apparent',
      'Les signaux de contenu et de structure',
      'Les éléments de contenu manquants',
      'La clarté du rôle de la page',
      'Les besoins en métadonnées de planification',
      'Les vérifications manuelles pour un futur travail d’inventaire',
    ],
    improves: [
      'La clarté des audits de contenu',
      'L’acheminement des relectures de page',
      'La planification des briefs et de la maintenance',
      'La compréhension du type de page relue',
    ],
    prepares: [
      'Une relecture d’inventaire de contenu',
      'Une classification de contenu apparente',
      'Une liste de signaux manquants',
      'Des notes de planification pour un travail futur',
    ],
    surfaces: [
      'Les pages à l’objectif flou',
      'Les éléments de contenu manquants',
      'Les signaux de type de page mélangés',
      'Les métadonnées qui aideraient la planification de contenu future',
    ],
    ioH2: 'Ce à partir de quoi Nora travaille, et ce qu’elle produit.',
    worksFrom: [
      'Le texte de la page',
      'La structure de la page',
      'Les métadonnées',
      'Les signaux de source',
      'Les constats existants d’autres Workers, quand ils sont disponibles',
    ],
    produces: [
      'Relecture d’inventaire',
      'Classification du type de page',
      'Signaux de contenu manquant',
      'Notes de métadonnées de planification',
      'Vérifications manuelles',
    ],
    scenarios: [
      {
        title: 'Une relecture de page a besoin d’une classification de départ.',
        description: 'Nora identifie à quel type de contenu le flux de travail a affaire.',
      },
      {
        title: 'Un audit de contenu est désordonné.',
        description: 'Elle donne à chaque page relue un contexte d’inventaire plus clair.',
      },
      {
        title: 'Une page a des signaux mélangés.',
        description: 'Nora signale quand la page se comporte comme plus d’un type de contenu.',
      },
      {
        title: 'Une décision de maintenance approche.',
        description: 'Elle aide à clarifier si le contenu doit être rafraîchi, consolidé ou étendu.',
      },
      {
        title: 'Un brief a besoin de contexte sur le type de page.',
        description: 'Nora donne au créateur de brief un point de départ plus clair.',
      },
      {
        title: 'L’équipe a besoin de métadonnées de planification.',
        description: 'Elle liste ce qui rendrait le contenu plus facile à gérer plus tard.',
      },
    ],
    boundaryH2: 'Nora classe la page. Les éditeurs décident de ce qu’elle devient.',
    boundaryPara:
      'Nora ne crée jamais d’inventaire complet du site, ne parcourt jamais le domaine, n’édite jamais de contenu et ne publie jamais de changements. Elle relit la page actuelle et prépare le contexte de planification.',
    boundaryChecklist: [
      'Nora classe la page, elle ne l’édite ni ne la restructure jamais elle-même.',
      'Les relectures couvrent la page actuelle, pas un crawl ou un inventaire complet du site.',
      'Les notes de planification sont des pistes pour l’acheminement éditorial, pas des actions automatiques.',
      'Les listes de signaux manquants sont signalées pour relecture, jamais traitées comme des lacunes confirmées.',
    ],
    willNot: [
      { color: 'red', text: 'Parcourir tout le site' },
      { color: 'red', text: 'Confirmer une couverture d’inventaire complète' },
      { color: 'red', text: 'Réécrire ou restructurer la page automatiquement' },
      { color: 'red', text: 'Créer ou supprimer des fiches de contenu' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Nora travaille.',
    relatedWorkerIds: [
      {
        id: 'page_inspector',
        description: 'Extrait les signaux source que Nora utilise pour la classification.',
        outputLabel: 'Signaux de page',
        ctaLabel: 'Comment Patrick extrait',
      },
      {
        id: 'intent_analyst',
        description: 'Vérifie si le type de page apparent correspond à l’intention du lecteur.',
        outputLabel: 'Évaluation d’intention',
        ctaLabel: 'Comment Yuna relit',
      },
      {
        id: 'content_pruning_consolidation',
        description: 'Utilise le contexte d’inventaire avant de recommander une action de maintenance.',
        outputLabel: 'Relecture de maintenance',
        ctaLabel: 'Comment Hugo l’utilise',
      },
    ],
    ctaH2: 'Classer la page avant de décider quoi en faire.',
    ctaPara:
      'Nora aide les éditeurs à comprendre le contenu, ses signaux manquants et son rôle de planification avant que le travail approfondi ne commence.',
    guidanceFooterLabel: 'STATUT D’INVENTAIRE',
    guidanceFooterValue: 'Contenu relu · lacunes trouvées',
  },
  semantic_search_analyzer: {
    seoTitle: 'Semantic Coverage Analyser | WordPresto',
    metaDescription:
      'Sema relit la couverture sémantique en comparant le contenu à la couche de connaissance de Word Presto et au contexte du projet, en faisant remonter les sous-thèmes manquants et les entités peu couvertes.',
    h1: 'Trouver les concepts qui manquent à la page.',
    heroPara1:
      'Un bon contenu ne se contente pas de mentionner le mot-clé cible. Il couvre les entités, les sous-thèmes, les relations et les idées de soutien qui rendent la page vraiment utile. Sema relit la couverture sémantique en comparant le contenu à la couche de connaissance de Word Presto et au contexte du projet. Elle fait remonter les sous-thèmes manquants, les entités peu couvertes et les lacunes de couverture qui devraient être relues avant l’approbation de la page.',
    heroPara2:
      'Pour les relectures SEO avancées, les briefs de contenu, le travail d’autorité thématique et les pages qui ont besoin d’une couverture sémantique plus profonde.',
    problemEyebrow: 'Là où le SEO sémantique tourne mal',
    problemH2: 'Les pages mentionnent le sujet mais manquent le sens qui l’entoure.',
    problemPara:
      'Une page peut inclure le bon mot-clé tout en échouant à couvrir correctement le sujet. Elle peut sauter des entités clés, éviter des comparaisons importantes, manquer des concepts de soutien ou laisser des questions sans réponse. Sema regarde au-delà de la simple présence du mot-clé. Elle vérifie si la page a assez de profondeur sémantique pour mériter la confiance.',
    problemAnnotation: '↘ couvrir le sujet, pas seulement le terme',
    beforeStamp: 'Couverture mince',
    beforeHtml: `<p>La page mentionne le service mais oublie des conditions clés, des facteurs de décision, des preuves de soutien et des entités connexes.</p>`,
    beforeTags: ['Mot-clé présent', 'Entités manquantes', 'Sous-thèmes minces', 'Profondeur faible'],
    beforeNote: 'la page semble pertinente mais paraît incomplète',
    afterStamp: 'Couverture relue',
    afterHtml: `<p>Sema liste les entités manquantes, les sous-thèmes minces et les lacunes étayées par des preuves, pour relecture par l’éditeur.</p>`,
    afterTags: ['Lacunes d’entités', 'Profondeur thématique', 'Constats liés à des sources', 'Sûr pour relecture'],
    afterNote: 'l’éditeur sait ce qui manque',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture de couverture sémantique avec des limites fondées sur la preuve.',
    helpsPara:
      'Sema compare le contenu aux connaissances disponibles et au contexte du projet, puis produit des lacunes de couverture vérifiables. Elle ne bourre jamais de mots-clés, ne fabrique jamais d’entités et ne réécrit jamais la page automatiquement.',
    checks: [
      'Les sous-thèmes manquants',
      'Les entités peu couvertes',
      'La profondeur sémantique',
      'La santé de la distribution des termes',
      'Les lacunes de couverture par rapport aux connaissances récupérées',
      'Le soutien par des preuves des ajouts suggérés',
    ],
    improves: [
      'La profondeur thématique',
      'La qualité du brief',
      'Les plans de contenu de construction d’autorité',
      'La confiance avant l’approbation du contenu',
    ],
    prepares: [
      'Une relecture de couverture sémantique',
      'Une liste de lacunes d’entités et de sous-thèmes',
      'Des constats liés à des preuves',
      'Des pistes de relecture pour les éditeurs',
    ],
    surfaces: [
      'Les concepts importants manquants dans le brouillon',
      'Les termes surexploités ou sous-développés',
      'Les lacunes de couverture qui ont besoin de sources à l’appui',
      'Les zones où la page est sémantiquement mince',
    ],
    ioH2: 'Ce à partir de quoi Sema travaille, et ce qu’elle produit.',
    worksFrom: [
      'Le contenu du brouillon ou de la page',
      'Le contexte du projet',
      'Les voisins de connaissance',
      'Les signaux de preuve',
      'Les candidats de sujets et d’entités',
    ],
    produces: [
      'Relecture de couverture sémantique',
      'Liste de lacunes d’entités',
      'Constats de sous-thèmes',
      'Signal de distribution des termes',
      'Recommandations liées à des preuves',
    ],
    scenarios: [
      {
        title: 'Une page a besoin d’une autorité thématique plus profonde.',
        description: 'Sema identifie ce qui manque au contenu au-delà des mots-clés évidents.',
      },
      {
        title: 'Un brouillon paraît superficiel.',
        description: 'Elle trouve les entités, sous-thèmes et concepts de soutien manquants.',
      },
      {
        title: 'Un brief a besoin d’un contexte plus riche.',
        description: 'Sema donne aux éditeurs des lacunes de couverture à considérer avant la rédaction.',
      },
      {
        title: 'Une page est en concurrence sur un sujet complexe.',
        description: 'Elle aide à faire remonter les concepts que les pages plus solides couvrent habituellement.',
      },
      {
        title: 'Une mise à jour de contenu a besoin d’une extension fondée sur des preuves.',
        description: 'Sema liste les lacunes qui devraient être relues avec un contexte à l’appui.',
      },
      {
        title: 'Vous voulez du SEO sémantique sans bourrage de mots-clés.',
        description: 'Elle se concentre sur le sens, la couverture et les lacunes liées à des sources.',
      },
    ],
    boundaryH2: 'Sema identifie les lacunes. Les éditeurs décident de ce qui appartient à la page.',
    boundaryPara:
      'Sema n’ajoute jamais de sujets automatiquement, ne bourre jamais de mots-clés, ne réécrit jamais le texte et ne publie jamais. Ses constats sont destinés uniquement à la relecture et doivent être jugés par un éditeur.',
    boundaryChecklist: [
      'Sema signale les lacunes, elle n’ajoute ni ne réécrit jamais le texte elle-même.',
      'Les constats de couverture sont comparés à des connaissances récupérées, jamais inventés de toutes pièces.',
      'Les ajouts suggérés sont des pistes pour relecture éditoriale, pas des insertions automatiques.',
      'Les voisins récupérés sont traités comme des signaux à relire, jamais comme une vérité incontestable.',
    ],
    willNot: [
      { color: 'red', text: 'Bourrer le contenu de mots-clés' },
      { color: 'red', text: 'Inventer des entités non étayées' },
      { color: 'red', text: 'Réécrire ou étendre la page automatiquement' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
      { color: 'red', text: 'Traiter les voisins récupérés comme une vérité incontestable' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Sema travaille.',
    relatedWorkerIds: [
      {
        id: 'topical_authority',
        description: 'Relit le soutien thématique au niveau de la page et les lacunes de cluster.',
        outputLabel: 'Relecture de couverture',
        ctaLabel: 'Comment Zara relit',
      },
      {
        id: 'evidence',
        description: 'Vérifie si les ajouts suggérés sont étayés.',
        outputLabel: 'Dossier de preuves',
        ctaLabel: 'Comment Kenji relit',
      },
      {
        id: 'competitor_intel',
        description: 'Compare la couverture à de vraies preuves SERP concurrentes quand elles sont disponibles.',
        outputLabel: 'Relecture de couverture concurrentielle',
        ctaLabel: 'Comment Cassius compare',
      },
    ],
    ctaH2: 'Trouver le sens que la page n’a pas encore couvert.',
    ctaPara:
      'Sema aide les éditeurs à renforcer la profondeur thématique avec des lacunes sémantiques vérifiables, pas du bourrage de mots-clés.',
    guidanceFooterLabel: 'STATUT SÉMANTIQUE',
    guidanceFooterValue: 'Lacunes de couverture trouvées · relecture nécessaire',
  },
  competitor_intel: {
    seoTitle: 'Competitor Intelligence Worker | WordPresto',
    metaDescription:
      'Cassius relit la couverture concurrentielle à partir des données SERP concurrentes stockées, en faisant remonter les sous-thèmes, les entités et les angles que les concurrents semblent couvrir et que votre contenu pourrait manquer.',
    h1: 'Voir ce que les concurrents classés couvrent et que vous ne couvrez pas.',
    heroPara1:
      'L’analyse concurrentielle n’est utile que lorsqu’elle s’appuie sur de vraies preuves de recherche. Cassius relit la couverture concurrentielle à partir des données SERP concurrentes stockées et la compare à la page ou au brouillon en cours de relecture. Il fait remonter les sous-thèmes, les entités et les angles que les concurrents semblent couvrir et que votre contenu pourrait manquer.',
    heroPara2:
      'Pour les relectures SEO concurrentielles, l’analyse des lacunes de contenu, la planification guidée par les mots-clés et les pages améliorées pour une opportunité de recherche connue.',
    problemEyebrow: 'Là où l’analyse concurrentielle tourne mal',
    problemH2: 'Les équipes copient les concurrents au lieu de comprendre l’écart.',
    problemPara:
      'La relecture concurrentielle ne devrait pas consister à récupérer des idées et à imiter une autre page. Elle devrait aider les éditeurs à comprendre ce que le paysage de classement semble couvrir, ce que le brouillon actuel manque, et quelles lacunes sont vraiment pertinentes. Cassius transforme les preuves concurrentielles en intelligence de contenu vérifiable.',
    problemAnnotation: '↘ comparer la couverture sans copier',
    beforeStamp: 'Vérification concurrentielle superficielle',
    beforeHtml: `<p>Les concurrents mentionnent plusieurs facteurs de décision, mais le brouillon ne couvre que la définition de base.</p>`,
    beforeTags: ['Angles manquants', 'Comparaison mince', 'Preuve SERP nécessaire', 'Aucune stratégie de contenu'],
    beforeNote: 'la page manque de contexte concurrentiel',
    afterStamp: 'Couverture comparée',
    afterHtml: `<p>Cassius liste les sous-thèmes et entités couverts par les concurrents que l’éditeur devrait relire.</p>`,
    afterTags: ['Base SERP réelle', 'Liste de lacunes', 'Jugement humain', 'Aucune imitation'],
    afterNote: 'l’éditeur peut décider de ce qui a sa place',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une relecture de couverture concurrentielle à partir de vraies preuves SERP.',
    helpsPara:
      'Cassius utilise les données SERP concurrentes existantes quand elles sont disponibles. En l’absence de données SERP stockées, il affiche honnêtement un état verrouillé plutôt que d’inventer des constats concurrentiels.',
    checks: [
      'Les sous-thèmes couverts par les concurrents',
      'Les entités et angles manquants',
      'La couverture du brouillon par rapport aux concurrents SERP',
      'Les thèmes concurrents répétés',
      'Les limites des preuves',
      'Les états sans données quand la preuve SERP manque',
    ],
    improves: [
      'La planification de contenu concurrentiel',
      'La qualité des briefs guidés par les lacunes',
      'La relecture des opportunités de recherche',
      'La conscience de ce que les pages classées semblent traiter',
    ],
    prepares: [
      'Une relecture de couverture concurrentielle',
      'Une liste de lacunes fondée sur la SERP',
      'Des pistes d’angles de contenu',
      'Des notes sur les limites des preuves',
    ],
    surfaces: [
      'Les sujets pertinents couverts par les concurrents',
      'Les facteurs de décision manquants',
      'Les thèmes SERP à considérer',
      'Les zones où la preuve concurrentielle est trop mince ou indisponible',
    ],
    ioH2: 'Ce à partir de quoi Cassius travaille, et ce qu’il produit.',
    worksFrom: [
      'Le contenu du brouillon ou de la page',
      'Les données SERP concurrentes stockées',
      'Le contexte de mot-clé ou d’opportunité de recherche',
      'Les signaux de couverture sémantique',
      'Les signaux de relecture des preuves',
    ],
    produces: [
      'Relecture de couverture concurrentielle',
      'Liste de lacunes fondée sur la SERP',
      'Notes d’entités manquantes',
      'Pistes d’angles concurrentiels',
      'État sans données quand nécessaire',
    ],
    scenarios: [
      {
        title: 'Une page cible un mot-clé concurrentiel.',
        description: 'Cassius vérifie ce que les concurrents classés semblent couvrir et que la page pourrait manquer.',
      },
      {
        title: 'Un brief de contenu a besoin de contexte concurrentiel.',
        description: 'Il fournit des pistes guidées par les lacunes sans transformer le brief en imitation.',
      },
      {
        title: 'Un brouillon paraît plus faible que la SERP.',
        description: 'Cassius identifie les angles et entités manquants pour relecture humaine.',
      },
      {
        title: 'Une action de recherche de mots-clés a produit des données SERP.',
        description: 'Il utilise ces données stockées pour fonder les constats de couverture concurrentielle.',
      },
      {
        title: 'Une page est rafraîchie pour la performance SEO.',
        description: 'Cassius aide les éditeurs à voir si la couverture concurrentielle a progressé.',
      },
      {
        title: 'L’équipe a besoin de preuves concurrentielles honnêtes.',
        description: 'Il affiche des états sans données quand la preuve SERP concurrentielle n’est pas disponible.',
      },
    ],
    boundaryH2: 'Cassius compare la couverture. Les éditeurs décident quoi utiliser.',
    boundaryPara:
      'Cassius ne copie jamais de contenu concurrent, ne récupère jamais de pages concurrentes cachées, n’invente jamais de données SERP et ne garantit jamais d’amélioration de classement. Il transforme les preuves concurrentielles disponibles en lacunes vérifiables.',
    boundaryChecklist: [
      'Cassius compare la couverture, il ne copie jamais de contenu concurrent.',
      'Les constats s’appuient sur des données SERP stockées, jamais sur des affirmations concurrentielles inventées.',
      'Un état sans données est affiché honnêtement quand la preuve SERP manque.',
      'Aucune amélioration de classement n’est jamais garantie.',
    ],
    willNot: [
      { color: 'red', text: 'Copier du contenu concurrent' },
      { color: 'red', text: 'Inventer des constats concurrentiels sans données SERP' },
      { color: 'red', text: 'Récupérer des pages concurrentes en direct, sauf si un futur flux le prend explicitement en charge' },
      { color: 'red', text: 'Réécrire la page automatiquement' },
      { color: 'red', text: 'Publier ou écrire dans un CMS quel qu’il soit' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Cassius travaille.',
    relatedWorkerIds: [
      {
        id: 'semantic_search_analyzer',
        description: 'Trouve les lacunes sémantiques à partir de la couche de connaissance et du contexte du projet.',
        outputLabel: 'Relecture de couverture sémantique',
        ctaLabel: 'Comment Sema trouve les lacunes',
      },
      {
        id: 'intent_analyst',
        description: 'Clarifie l’intention derrière l’opportunité de recherche concurrentielle.',
        outputLabel: 'Évaluation d’intention',
        ctaLabel: 'Comment Yuna clarifie',
      },
      {
        id: 'evidence',
        description: 'Vérifie si les constats issus des concurrents sont correctement étayés.',
        outputLabel: 'Dossier de preuves',
        ctaLabel: 'Comment Kenji relit',
      },
    ],
    ctaH2: 'Comprendre l’écart avant d’entrer en concurrence.',
    ctaPara:
      'Cassius aide les éditeurs à comparer la couverture à de vraies preuves SERP concurrentes sans copier, deviner ou fabriquer de données.',
    guidanceFooterLabel: 'STATUT CONCURRENTIEL',
    guidanceFooterValue: 'Lacunes trouvées · preuve nécessaire',
  },
};
