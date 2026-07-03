import type { WorkerProfileTranslatable } from './types';

export const frBatch2: Record<string, WorkerProfileTranslatable> = {
  cms_handoff: {
    seoTitle: 'Worker Transfert CMS | WordPresto',
    metaDescription:
      'Ravi prépare le contenu approuvé avec la structure, les métadonnées et les notes nécessaires à un transfert propre vers un CMS, un site ou un client. Pour les équipes qui ont besoin d’un pack de contenu prêt à publier.',
    h1: 'Préparez le contenu approuvé pour un transfert plus propre.',
    heroPara1:
      'Un contenu approuvé qui arrive dans un CMS sans les bonnes métadonnées, sans consignes de mise en forme ni notes crée du travail là où tout devrait être simple. Ravi prend le brouillon approuvé et produit un pack de publication complet : contenu, métadonnées, notes de mise en forme, champs CMS. Le transfert est propre dès la première fois.',
    heroPara2:
      'Pour les équipes de contenu qui transfèrent leur travail à des développeurs, des éditeurs CMS ou des clients qui gèrent eux-mêmes leur publication.',
    problemEyebrow: 'Là où les transferts créent du travail en plus',
    problemH2: 'Un mauvais transfert coûte plus de temps qu’un mauvais brouillon.',
    problemPara:
      'Un contenu qui arrive chez un éditeur CMS ou un développeur sans métadonnées correctes, sans notes de mise en forme ni consignes de champs finit publié avec des erreurs, ou renvoyé pour compléments d’information. L’étape du transfert coûte peu à bien faire, et beaucoup à rater.',
    problemAnnotation: '↘ un transfert réussi du premier coup',
    beforeStamp: 'Non préparé',
    beforeHtml: `<p><span class="ba-strike">Voici le contenu approuvé</span> dans un fichier Word. La <span class="ba-strike">meta description est quelque part dedans</span>, je crois. Dites-nous si <span class="ba-strike">vous avez besoin d’autre chose</span>. Les <span class="ba-strike">images sont dans mon dossier Téléchargements</span>.</p>`,
    beforeTags: ['Incomplet', 'Pas de métadonnées', 'L’éditeur CMS doit deviner'],
    beforeNote: 'il faudra encore deux allers-retours pour régler ça',
    afterStamp: 'Préparé',
    afterHtml: `<p>Contenu, meta title, meta description, texte alternatif, slug d’URL, noms de fichiers image et notes de champs CMS, tout est <span class="ba-hl">rassemblé dans un seul document de transfert</span> prêt à être publié par l’éditeur CMS.</p>`,
    afterTags: ['Complet', 'Prêt pour le CMS', 'Aucun aller-retour nécessaire'],
    afterNote: 'ceci peut être publié dès réception',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un pack de publication que les éditeurs CMS et les développeurs peuvent utiliser immédiatement.',
    helpsPara:
      'Ravi produit le pack de transfert complet qui transforme un contenu approuvé en contenu publiable. Champs meta, consignes de mise en forme, slug d’URL, notes d’images : tout ce qu’il faut pour une première publication propre.',
    checks: [
      'Si tous les champs de métadonnées requis sont renseignés',
      'Si la mise en forme convient au CMS cible',
      'Si les images et les ressources sont correctement référencées',
    ],
    improves: [
      'L’exhaustivité du transfert pour que les éditeurs CMS publient sans relance',
      'La qualité des métadonnées pour que les champs SEO et accessibilité soient corrects',
      'La cohérence de publication à l’échelle d’un programme de contenu',
    ],
    prepares: [
      'Un pack de transfert complet',
      'Des notes de champs CMS renseignées',
      'Des consignes de mise en forme et de ressources',
    ],
    surfaces: [
      'Les métadonnées manquantes qui nécessitent l’avis du rédacteur ou du client',
      'Le contenu qui n’est pas prêt pour le CMS malgré son approbation',
      'Les exigences propres au CMS que le contenu ne remplit pas encore',
    ],
    ioH2: 'Ce à partir de quoi Ravi travaille, et ce qu’il produit.',
    worksFrom: [
      'Le brouillon final approuvé',
      'Les exigences des champs CMS',
      'Le brief de métadonnées',
      'Les consignes de marque',
      'Les références de ressources et d’images',
    ],
    produces: [
      'Un pack de transfert complet',
      'Des notes de champs CMS renseignées',
      'Des consignes d’URL et de slug',
      'Des notes d’images et de ressources',
      'Un document de contenu prêt à publier',
    ],
    scenarios: [
      {
        title: 'Un programme de contenu qui transfère son travail à un éditeur WordPress.',
        description: 'Ravi produit un pack de transfert qui couvre chaque champ du modèle de l’éditeur.',
      },
      {
        title: 'Un site Astro où le contenu doit être structuré pour le frontmatter.',
        description: 'Il prépare le contenu dans le format attendu par le développeur, avec tous les champs de frontmatter.',
      },
      {
        title: 'Un client qui gère son propre CMS mais se perd dans les transferts.',
        description: 'Un document de transfert clair et complet réduit les erreurs de publication du client et ses demandes d’assistance.',
      },
      {
        title: 'Un lot de 30 pages approuvées ayant toutes besoin de métadonnées.',
        description: 'Ravi traite le lot de façon homogène, pour que chaque page soit préparée selon le même standard.',
      },
      {
        title: 'Un projet de migration avec du contenu existant à repréparer.',
        description: 'Il met à jour les métadonnées et les notes de mise en forme pour le nouveau CMS sans toucher au texte approuvé.',
      },
      {
        title: 'Une échéance de lancement où l’éditeur CMS n’a qu’une heure pour publier.',
        description: 'Un pack de transfert complet lui permet de consacrer cette heure à publier, pas à courir après des informations manquantes.',
      },
    ],
    boundaryH2: 'Ravi prépare. Les équipes de publication et les éditeurs décident de ce qui est mis en ligne.',
    boundaryPara:
      'Un pack de transfert est un document prêt à publier, pas une autorisation de publier. Ce qui est mis en ligne, quand et sous quelle forme reste une décision de l’équipe de publication, du client ou du directeur éditorial.',
    boundaryChecklist: [
      'Ravi prépare le contenu, il ne le publie jamais.',
      'Les packs de transfert sont structurés pour que l’équipe destinataire les vérifie.',
      'Les informations incomplètes sont signalées, jamais devinées.',
      'Le transfert facilite la publication, il ne l’autorise pas.',
    ],
    willNot: [
      { color: 'red', text: 'Publier du contenu directement' },
      { color: 'red', text: 'Approuver un contenu pour publication' },
      { color: 'amber', text: 'Deviner des métadonnées manquantes' },
    ],
    relatedH2: 'Les Workers avec qui Ravi travaille.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Confirme ce qui est approuvé avant que la préparation du transfert ne commence.',
        outputLabel: 'Rapport d’approbation',
        ctaLabel: 'Comment Audrey approuve',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Valide la conformité et le risque avant la production du pack de transfert.',
        outputLabel: 'Rapport de risque et conformité',
        ctaLabel: 'Comment Vera signale les risques',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Fournit la relecture qualité finale avant le transfert.',
        outputLabel: 'Notes de relecture',
        ctaLabel: 'Comment Quinn relit',
      },
    ],
    ctaH2: 'Préparez le contenu approuvé pour un transfert plus propre.',
    ctaPara:
      'Ajoutez Ravi à votre flux de travail et chaque contenu approuvé arrive dans le CMS avec tout ce qu’il faut pour le publier proprement.',
    guidanceFooterLabel: 'STATUT DU TRANSFERT',
    guidanceFooterValue: 'Prêt pour la relecture CMS',
  },

  editorial_risk_claims: {
    seoTitle: 'Worker Risque éditorial et conformité | WordPresto',
    metaDescription:
      'Vera signale les affirmations non étayées, les formulations à risque et les problèmes de conformité dans le contenu avant son approbation ou sa publication.',
    h1: 'Signalez les affirmations à risque avant qu’elles n’avancent.',
    heroPara1:
      'Un contenu qui contient des affirmations non étayées, un langage juridiquement risqué ou des problèmes de conformité n’échoue pas au moment de la publication, il échoue au moment d’une plainte, d’une contestation ou d’un audit. Vera relit le contenu à la recherche d’affirmations impossibles à étayer, de formulations qui engagent la responsabilité, et de langage nécessitant un feu vert conformité.',
    heroPara2:
      'Pour les équipes de contenu dans des secteurs réglementés, les agences ayant des obligations de conformité, et toute équipe qui publie des affirmations devant rester défendables.',
    problemEyebrow: 'Là où les affirmations deviennent des problèmes',
    problemH2: 'Un contenu à risque semble impeccable jusqu’à ce qu’on le conteste.',
    problemPara:
      'Une affirmation impossible à étayer, une comparaison qui sous-entend quelque chose de faux, ou une formulation qui engage la responsabilité ressemble en tout point à un bon texte, jusqu’à ce que quelqu’un la remette en question. Les repérer avant publication ne coûte rien. Les corriger après, si.',
    problemAnnotation: '↘ signaler avant publication, pas après',
    beforeStamp: 'Non vérifié',
    beforeHtml: `<p>Notre plateforme est la solution <span class="ba-strike">la plus sécurisée</span> du marché. Nous <span class="ba-strike">garantissons</span> une protection totale des données et nos clients <span class="ba-strike">obtiennent toujours</span> de meilleurs résultats. Nous sommes <span class="ba-strike">le leader du secteur</span> sur ce marché.</p>`,
    beforeTags: ['Superlatifs non étayés', 'Garanties sans nuance', 'Affirmations comparatives sans preuve'],
    beforeNote: 'chaque phrase ici est un risque',
    afterStamp: 'Relu',
    afterHtml: `<p>Section sécurité de la plateforme : <span class="ba-hl">deux affirmations signalées pour être étayées</span>, un superlatif à nuancer ou à retirer, le langage de garantie nécessite une relecture juridique avant l’approbation de ce texte.</p>`,
    afterTags: ['Signalements précis', 'Besoin de preuves noté', 'Relecture juridique indiquée'],
    afterNote: 'les risques sont visibles avant approbation',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un contrôle de conformité qui repère les risques d’affirmation avant la publication.',
    helpsPara:
      'Vera relit le contenu à la recherche des affirmations et formulations à risque, non pas pour affaiblir un texte percutant, mais pour s’assurer que ce qui est publié peut être défendu.',
    checks: [
      'Les affirmations non étayées ou sans nuance',
      'Le langage comparatif qui sous-entend une fausse supériorité',
      'Le langage sensible sur le plan de la conformité dans les secteurs réglementés',
    ],
    improves: [
      'Le langage des affirmations, pour qu’il soit précis et défendable',
      'La visibilité des risques, pour que les personnes qui approuvent disposent des informations nécessaires',
      'La documentation de conformité, en vue d’un audit',
    ],
    prepares: [
      'Un rapport de risque et conformité',
      'Des signalements précis d’affirmations, avec options de preuve ou de correction',
      'Des notes de feu vert conformité en vue de l’approbation',
    ],
    surfaces: [
      'Les affirmations nécessitant une preuve tierce',
      'Le langage nécessitant une relecture juridique',
      'La terminologie de secteurs réglementés nécessitant un feu vert spécialisé',
    ],
    ioH2: 'Ce à partir de quoi Vera travaille, et ce qu’elle produit.',
    worksFrom: [
      'Le brouillon ou le contenu approuvé',
      'Les consignes de conformité',
      'Le contexte réglementaire propre au secteur',
      'Les preuves ou sources des affirmations',
      'Les notes de conformité précédentes',
    ],
    produces: [
      'Un rapport de risque et conformité',
      'Des affirmations signalées avec les preuves requises',
      'Une documentation de feu vert conformité',
      'Des options de correction pour le langage signalé',
      'Une contribution à l’approbation pour Audrey',
    ],
    scenarios: [
      {
        title: 'Une société de services financiers qui publie du contenu lié à l’investissement.',
        description: 'Vera applique les normes de conformité du secteur au brouillon avant qu’il n’atteigne l’équipe conformité.',
      },
      {
        title: 'Une marque de santé qui fait des affirmations sur des résultats.',
        description: 'Les affirmations sur les résultats et l’efficacité sont signalées pour preuve clinique avant approbation.',
      },
      {
        title: 'Une agence qui rédige un contenu comparatif pour un client.',
        description: 'Les affirmations comparatives sont vérifiées avant que le client ne les découvre.',
      },
      {
        title: 'Un lancement de produit avec des affirmations de performance audacieuses.',
        description: 'Vera signale les affirmations qui ont besoin de preuves et celles qui doivent être nuancées avant la mise en ligne du texte de lancement.',
      },
      {
        title: 'Un rafraîchissement de contenu qui reprend d’anciennes pages aux affirmations dépassées.',
        description: 'Elle repère les affirmations autrefois exactes mais qui ne sont plus défendables.',
      },
      {
        title: 'Une marque B2B qui écrit sur sa position de marché.',
        description: 'Les affirmations de leadership et de supériorité sur le marché sont vérifiées avant publication.',
      },
    ],
    boundaryH2: 'Vera signale. Les équipes juridique et conformité tranchent.',
    boundaryPara:
      'Un rapport de risque est une contribution à la relecture éditoriale et conformité, pas un feu vert. Vera identifie les risques et les signale clairement. La décision d’agir, comment, et si le contenu peut avancer revient aux équipes juridique, conformité et éditoriale.',
    boundaryChecklist: [
      'Vera signale les risques, elle n’approuve ni ne valide jamais de contenu.',
      'Les rapports de risque sont structurés pour la relecture éditoriale et juridique.',
      'Les décisions de conformité sont signalées, pas prises.',
      'Le rapport de risque facilite le feu vert éditorial, il ne remplace pas la relecture juridique.',
    ],
    willNot: [
      { color: 'red', text: 'Donner un feu vert juridique' },
      { color: 'red', text: 'Approuver un contenu avec des signalements de conformité non résolus' },
      { color: 'amber', text: 'Supprimer des affirmations sans instruction explicite' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Vera travaille.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Relit la qualité avant le contrôle de conformité.',
        outputLabel: 'Notes de relecture',
        ctaLabel: 'Comment Quinn relit',
      },
      {
        id: 'approval_report',
        description: 'Intègre les signalements de conformité dans le rapport d’approbation.',
        outputLabel: 'Rapport d’approbation',
        ctaLabel: 'Comment Audrey approuve',
      },
      {
        id: 'cms_handoff',
        description: 'Reçoit la confirmation du feu vert avant de produire le pack de transfert.',
        outputLabel: 'Pack de transfert',
        ctaLabel: 'Comment Ravi transfère',
      },
    ],
    ctaH2: 'Signalez les affirmations à risque avant qu’elles n’avancent.',
    ctaPara: 'Ajoutez Vera à votre flux de travail et les problèmes de conformité sont identifiés avant publication, pas après.',
    guidanceFooterLabel: 'RELECTURE DE RISQUE',
    guidanceFooterValue: 'Contrôle de preuve nécessaire',
  },

  content_refresh_brief: {
    seoTitle: 'Worker Brief de rafraîchissement | WordPresto',
    metaDescription:
      'Iris produit un brief structuré pour rafraîchir un contenu existant : quoi mettre à jour, quoi couper et quoi ajouter. Pour les équipes qui rafraîchissent leurs pages avec une direction claire plutôt qu’au hasard.',
    h1: 'Rafraîchissez le contenu pour une raison plus claire.',
    heroPara1:
      'Rafraîchir du contenu sans brief, c’est le meilleur moyen de se retrouver avec des pages réécrites trois fois et qui ne fonctionnent toujours pas. Iris produit un brief de rafraîchissement structuré qui couvre ce qu’il faut mettre à jour, couper, ajouter, et pourquoi, pour que chaque rafraîchissement démarre avec une direction claire plutôt qu’une relecture à l’aveugle.',
    heroPara2:
      'Pour les programmes de rafraîchissement de contenu, les migrations de site avec du contenu existant, et les équipes qui mettent à jour leurs pages pour refléter des changements de produit, d’audience ou de marché.',
    problemEyebrow: 'Là où les projets de rafraîchissement dérapent',
    problemH2: 'Rafraîchir sans brief produit une autre version du même problème.',
    problemPara:
      'Un rafraîchissement de contenu sans direction claire fait en général l’une de ces deux choses : mettre à jour ce qui est facile à mettre à jour en laissant les problèmes structurels intacts, ou déclencher une réécriture complète alors qu’une retouche légère aurait suffi. Un brief de rafraîchissement définit le périmètre avant que le travail ne commence.',
    problemAnnotation: '↘ cadrer le rafraîchissement avant de le faire',
    beforeStamp: 'Pas de brief',
    beforeHtml: `<p>On peut <span class="ba-strike">rafraîchir cette page</span> ? Elle fait un peu <span class="ba-strike">datée</span>. Peut-être <span class="ba-strike">mettre à jour une partie du texte</span> et <span class="ba-strike">ajouter des trucs nouveaux</span>. Juste la rendre <span class="ba-strike">meilleure</span>, en gros.</p>`,
    beforeTags: ['Pas de périmètre', 'Pas de direction', 'Pas de critères de réussite'],
    beforeNote: 'cela va produire des changements au hasard',
    afterStamp: 'Briefé',
    afterHtml: `<p><span class="ba-hl">À mettre à jour : introduction et section de preuves</span>. À couper : bloc étude de cas (dépassé). À ajouter : section fonctionnalité produit de la mise à jour du T1. À conserver : structure et CTA. Justification fournie pour chaque décision.</p>`,
    afterTags: ['Périmètre clair', 'Changements précis', 'Justification incluse'],
    afterNote: 'les rédacteurs savent exactement quoi faire',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un brief de rafraîchissement qui cadre le travail avant qu’un rédacteur ne touche à la page.',
    helpsPara:
      'Iris transforme une demande de rafraîchissement en un brief structuré avec des instructions précises de mise à jour, de coupe et d’ajout, pour que les rédacteurs et les éditeurs sachent exactement à quoi sert le rafraîchissement et ce qu’il doit accomplir.',
    checks: [
      'Si l’objectif de la page est toujours d’actualité',
      'Si les sections existantes méritent d’être conservées',
      'Si le périmètre du rafraîchissement est proportionné au problème',
    ],
    improves: [
      'La direction du rafraîchissement, pour qu’elle soit précise et non vague',
      'La définition du périmètre, pour que le brief couvre le changement, pas seulement la mise à jour',
      'L’efficacité du rédacteur, en supprimant toute ambiguïté sur ce qu’il faut faire',
    ],
    prepares: [
      'Un brief de rafraîchissement structuré',
      'Un plan de sections à mettre à jour / couper / ajouter',
      'Des notes de justification pour le responsable du brief',
    ],
    surfaces: [
      'Les pages qui nécessitent un changement structurel, pas seulement un rafraîchissement',
      'Les demandes de rafraîchissement sans justification claire',
      'Le contenu qui devrait être retiré plutôt que mis à jour',
    ],
    ioH2: 'Ce à partir de quoi Iris travaille, et ce qu’elle produit.',
    worksFrom: [
      'Le contenu existant de la page',
      'Les objectifs ou les éléments déclencheurs du rafraîchissement',
      'L’analyse de contenu',
      'Les mises à jour de marque et de produit',
      'Les notes de changement d’audience ou de marché',
    ],
    produces: [
      'Un brief de rafraîchissement structuré',
      'Un plan de sections à mettre à jour / couper / ajouter',
      'Des notes de justification du rafraîchissement',
      'Un brief de transfert pour le rédacteur',
      'Le périmètre et les critères de réussite',
    ],
    scenarios: [
      {
        title: 'Une page produit à mettre à jour après un rebranding.',
        description: 'Iris identifie ce qui doit changer au regard de la nouvelle direction de marque et produit un brief de mise à jour précis.',
      },
      {
        title: 'Un programme de contenu qui rafraîchit 50 pages au T1.',
        description: 'Elle cadre chaque rafraîchissement de façon homogène, pour que les rédacteurs n’aient pas à réinventer le périmètre à chaque page.',
      },
      {
        title: 'Un site qui a grandi de façon organique et dont les pages sont hétérogènes.',
        description: 'Les briefs de rafraîchissement créent un standard cohérent pour chaque type de page.',
      },
      {
        title: 'Une archive de blog avec des articles dépassés mais qui génèrent encore du trafic.',
        description: 'Iris cadre une mise à jour ciblée qui améliore l’exactitude sans retirer ce que les lecteurs trouvaient utile.',
      },
      {
        title: 'Une nouvelle fonctionnalité produit à ajouter sur des pages existantes.',
        description: 'Elle détermine quelles pages doivent être mises à jour, quoi ajouter, et où cela s’intègre.',
      },
      {
        title: 'Un client qui demande sans cesse de petits changements sur les mêmes pages.',
        description: 'Un vrai brief de rafraîchissement résout les problèmes de fond plutôt que de les rafistoler page par page.',
      },
    ],
    boundaryH2: 'Iris cadre le rafraîchissement. Les rédacteurs et les éditeurs font les changements.',
    boundaryPara:
      'Un brief de rafraîchissement est un document de cadrage, pas un ensemble de changements approuvés. Iris détermine ce qui doit se passer ; la décision d’avancer, et comment, revient à l’éditorial et au client.',
    boundaryChecklist: [
      'Iris cadre le rafraîchissement, elle ne fait jamais les changements elle-même.',
      'Les briefs de rafraîchissement sont structurés pour la relecture du rédacteur et de l’éditeur.',
      'Les pages recommandées pour un retrait sont signalées, jamais supprimées.',
      'Le brief de rafraîchissement facilite le cadrage éditorial, il ne le fixe pas seul.',
    ],
    willNot: [
      { color: 'red', text: 'Modifier ou réécrire des pages directement' },
      { color: 'red', text: 'Retirer ou supprimer du contenu' },
      { color: 'amber', text: 'Étendre le périmètre du rafraîchissement sans approbation éditoriale' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Iris travaille.',
    relatedWorkerIds: [
      {
        id: 'content_analyst',
        description: 'Fournit l’analyse qui nourrit le brief de rafraîchissement.',
        outputLabel: 'Analyse de contenu',
        ctaLabel: 'Comment Omar analyse',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Vérifie le brouillon de rafraîchissement au regard du brief.',
        outputLabel: 'Rapport d’alignement',
        ctaLabel: 'Comment Ada vérifie',
      },
      {
        id: 'draft_rewrite',
        description: 'Réécrit les sections signalées dans le brief de rafraîchissement.',
        outputLabel: 'Brouillon façonné',
        ctaLabel: 'Comment Ellis réécrit',
      },
    ],
    ctaH2: 'Rafraîchissez le contenu pour une raison plus claire.',
    ctaPara: 'Ajoutez Iris à votre flux de travail et chaque rafraîchissement démarre avec un brief qui indique aux rédacteurs exactement quoi changer et pourquoi.',
    guidanceFooterLabel: 'STATUT DU RAFRAÎCHISSEMENT',
    guidanceFooterValue: 'Briefé · prêt pour le rédacteur',
  },

  content_distribution_brief: {
    seoTitle: 'Worker Brief de diffusion | WordPresto',
    metaDescription:
      'Nina crée un brief de diffusion qui indique où le contenu approuvé doit aller et comment il doit être adapté pour chaque canal.',
    h1: 'Planifiez où le contenu approuvé doit aller ensuite.',
    heroPara1:
      'Un contenu approuvé qui passe directement du feu vert à un seul canal gâche l’essentiel de sa valeur. Nina produit un brief de diffusion qui associe le contenu approuvé aux canaux où il a sa place, avec des notes d’adaptation pour chacun, pour que le même contenu porte plus loin sans se diluer.',
    heroPara2:
      'Pour les équipes de contenu, les agences et les responsables marketing qui ont besoin d’un plan de diffusion structuré plutôt que d’une réflexion sociale de dernière minute.',
    problemEyebrow: 'Là où la diffusion s’effondre',
    problemH2: 'La plupart des contenus sont publiés une fois puis oubliés.',
    problemPara:
      'Un contenu long approuvé n’atteint souvent qu’un seul canal, dans un seul format, à un seul moment. Les adaptations qui prolongeraient sa portée (extrait de newsletter, post LinkedIn, carte sociale, citation clé) ne voient jamais le jour faute de plan. Un brief de diffusion change cela.',
    problemAnnotation: '↘ planifier la diffusion avant la mise en ligne',
    beforeStamp: 'Pas de plan',
    beforeHtml: `<p>Super, l’article est <span class="ba-strike">approuvé</span> ! On va le <span class="ba-strike">poster sur LinkedIn</span> et l’<span class="ba-strike">envoyer dans la newsletter</span>. Quelqu’un peut <span class="ba-strike">écrire quelques posts sociaux</span> s’il a le temps. <span class="ba-strike">Ça ira sûrement tel quel</span>.</p>`,
    beforeTags: ['Pas de plan par canal', 'Pas de consigne d’adaptation', 'Diffusion livrée au hasard'],
    beforeNote: 'ce contenu ne servira qu’une fois',
    afterStamp: 'Briefé',
    afterHtml: `<p>Site web : publier l’article complet. LinkedIn : <span class="ba-hl">résumé exécutif avec le constat clé</span>. Newsletter : extrait de 200 mots, en partant du problème. Réseaux sociaux : trois citations avec contexte. Notes de timing et d’adaptation pour chaque canal.</p>`,
    afterTags: ['Spécifique au canal', 'Prêt à adapter', 'Diffusion structurée'],
    afterNote: 'le même contenu travaille davantage',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un brief de diffusion qui associe le contenu approuvé aux canaux, avec des consignes d’adaptation.',
    helpsPara:
      'Nina transforme un contenu approuvé en brief de diffusion par canal : où il va, comment il s’adapte à chaque canal, et ce que le rédacteur ou l’équipe sociale doit produire pour chacun.',
    checks: [
      'Si le contenu convient aux canaux prévus',
      'Si les besoins d’adaptation sont adaptés à chaque canal',
      'Si le plan de diffusion est proportionné au contenu',
    ],
    improves: [
      'La planification de la diffusion, pour qu’elle soit spécifique à chaque canal, pas générique',
      'Les consignes d’adaptation, pour que chaque version serve son canal',
      'La valeur du contenu, en prolongeant sa portée sans diluer sa qualité',
    ],
    prepares: [
      'Un brief de diffusion structuré',
      'Des notes d’adaptation par canal',
      'Des consignes de format et de longueur pour chaque canal',
    ],
    surfaces: [
      'Les canaux qui ne conviennent pas au contenu',
      'Le contenu qui gagnerait à être retravaillé avant diffusion',
      'Les conflits de timing ou les problèmes d’enchaînement dans la diffusion',
    ],
    ioH2: 'Ce à partir de quoi Nina travaille, et ce qu’elle produit.',
    worksFrom: [
      'Le contenu approuvé',
      'La liste des canaux et les définitions d’audience',
      'Les objectifs de diffusion',
      'Les consignes de ton de marque',
      'Le calendrier de publication ou les notes de timing',
    ],
    produces: [
      'Un brief de diffusion',
      'Des notes d’adaptation par canal',
      'Des consignes de format et de longueur',
      'Des notes de timing de publication',
      'Un transfert vers l’équipe contenu ou sociale',
    ],
    scenarios: [
      {
        title: 'Un article long à décliner en extraits pour LinkedIn et l’email.',
        description: 'Nina cadre les extraits avec précision pour que chacun fonctionne pour son canal et son audience.',
      },
      {
        title: 'Un lancement de produit avec du contenu diffusé sur cinq canaux.',
        description: 'Elle associe le contenu de lancement à chaque canal, avec des notes de timing et d’adaptation dans un seul brief.',
      },
      {
        title: 'Une agence qui produit du contenu pour un client avec un mix de canaux complexe.',
        description: 'Le brief de diffusion devient le transfert vers les équipes sociale et email, pas une conversation séparée.',
      },
      {
        title: 'Un programme de contenu où la diffusion arrive après coup.',
        description: 'Nina intègre la diffusion au flux de travail dès l’approbation, pas comme une tâche séparée.',
      },
      {
        title: 'Une étude qui peut alimenter plusieurs formats de contenu.',
        description: 'Elle détermine quels constats fonctionnent pour quels canaux et cadre les adaptations en conséquence.',
      },
      {
        title: 'Une équipe où le rédacteur et le responsable social travaillent séparément.',
        description: 'Un brief de diffusion fait le lien entre les deux équipes sans que le rédacteur ait à briefer directement l’équipe sociale.',
      },
    ],
    boundaryH2: 'Nina planifie la diffusion. Les équipes contenu et sociale produisent les adaptations.',
    boundaryPara:
      'Un brief de diffusion est un plan, pas un contenu produit. Nina détermine où le contenu doit aller et comment il doit s’adapter. Les versions adaptées, les décisions de publication et les arbitrages de canal reviennent aux équipes contenu et sociale.',
    boundaryChecklist: [
      'Nina cadre la diffusion, elle ne produit jamais de contenu adapté.',
      'Les briefs de diffusion sont structurés pour être exécutés par les équipes de canal.',
      'Les questions d’adéquation au canal sont signalées, jamais présumées.',
      'Le brief facilite le travail des équipes de canal, il ne remplace pas leur jugement.',
    ],
    willNot: [
      { color: 'red', text: 'Produire du contenu adapté pour les canaux' },
      { color: 'red', text: 'Publier ou planifier du contenu' },
      { color: 'amber', text: 'Étendre le périmètre de diffusion sans approbation' },
    ],
    relatedH2: 'Les Workers aux côtés desquels Nina travaille.',
    relatedWorkerIds: [
      {
        id: 'approval_report',
        description: 'Confirme que le contenu est approuvé avant la planification de la diffusion.',
        outputLabel: 'Rapport d’approbation',
        ctaLabel: 'Comment Audrey approuve',
      },
      {
        id: 'cms_handoff',
        description: 'Gère le transfert du canal principal en parallèle.',
        outputLabel: 'Pack de transfert',
        ctaLabel: 'Comment Ravi transfère',
      },
      {
        id: 'content_refresh_brief',
        description: 'Réinjecte le contenu diffusé dans la planification du rafraîchissement.',
        outputLabel: 'Brief de rafraîchissement',
        ctaLabel: 'Comment Iris rafraîchit',
      },
    ],
    ctaH2: 'Planifiez où le contenu approuvé doit aller ensuite.',
    ctaPara: 'Ajoutez Nina à votre flux de travail et chaque contenu approuvé part avec un plan de diffusion par canal déjà écrit.',
    guidanceFooterLabel: 'DIFFUSION',
    guidanceFooterValue: 'Briefé · prêt pour les canaux',
  },

  seo_metadata: {
    seoTitle: 'Worker Titre et métadonnées SEO | WordPresto',
    metaDescription:
      'Nadia relit le titre SEO, la meta description et le H1 au regard de l’intention de recherche, puis rédige des options plus claires que le rédacteur peut approuver. Des métadonnées qui se lisent bien pour les personnes et pour la recherche.',
    h1: 'Réussissez le titre, la description et le H1.',
    heroPara1:
      'Le titre, la meta description et le H1 sont la première chose qu’un lecteur voit dans les résultats de recherche, et ce qu’il est le plus facile de laisser de côté. Nadia les relit au regard de la page et de l’intention derrière la requête, signale ce qui manque, ce qui est faible, trop long ou à côté du sujet, et rédige des options plus claires.',
    heroPara2:
      'Pour les rédacteurs et les éditeurs qui veulent des métadonnées qui reflètent honnêtement la page, sans deviner les limites de caractères ni courir après les mots-clés.',
    problemEyebrow: 'Là où le clic se gagne ou se perd',
    problemH2: 'Un bon contenu avec un titre faible perd quand même le clic.',
    problemPara:
      'Les métadonnées sont en général écrites en dernier, dans la précipitation, par la personne la plus proche du bouton de publication. Résultat : des titres qui répètent la marque, des descriptions qui reformulent le H1, et des pages qui vendent mal ce qu’elles offrent vraiment. Nadia traite la couche visible dans les résultats de recherche comme faisant partie de l’écriture.',
    problemAnnotation: '↘ un titre qui ne dit rien, une description qui le répète',
    beforeStamp: 'Faible',
    beforeHtml: `<p><strong>Titre :</strong> <span class="ba-strike">Accueil | Blog | Notre Société SARL</span><br/><strong>Description :</strong> <span class="ba-strike">Bienvenue sur notre blog où nous écrivons sur plein de sujets de notre secteur.</span></p>`,
    beforeTags: ['Aucune correspondance d’intention', 'Saturé de marque', 'Ne dit rien'],
    beforeNote: 'pourquoi cliquer là-dessus',
    afterStamp: 'Clair',
    afterHtml: `<p><strong>Titre :</strong> <span class="ba-hl">Comment choisir un flux de contenu (guide pratique)</span><br/><strong>Description :</strong> <span class="ba-hl">Un parcours simple pour planifier, briefer, réviser et approuver du contenu, avec les questions à se poser avant de se lancer.</span></p>`,
    afterTags: ['Correspond à l’intention', 'Précis', 'Promesse honnête'],
    afterNote: 'maintenant, il mérite le clic',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un éditeur de métadonnées qui lit l’intention, pas seulement les mots-clés.',
    helpsPara:
      'Nadia vérifie le titre, la description et le H1 comme le ferait un éditeur attentif : au regard de l’objectif de la page et de ce que le lecteur recherchait, puis propose des brouillons que vous pouvez accepter, modifier ou rejeter.',
    checks: [
      'Le titre, la description et le H1 au regard de l’intention de recherche',
      'La longueur, les doublons et le bourrage de mots-clés',
      'Les promesses que la page ne tient pas réellement',
    ],
    improves: [
      'Des titres vagues rendus précis et lisibles',
      'Des descriptions qui disent ce que la page offre',
      'Un H1 et un titre qui travaillent ensemble, pas l’un contre l’autre',
    ],
    prepares: [
      'Des métadonnées en brouillon avec des consignes de longueur',
      'Un avant-après clair pour la relecture',
      'Des notes sur l’intention ciblée par chaque option',
    ],
    surfaces: [
      'Les titres dont l’intention est réellement incertaine',
      'Les affirmations dans les métadonnées qui ont besoin de preuves',
      'Les formulations sensibles sur le plan de la conformité à vérifier',
    ],
    ioH2: 'Ce à partir de quoi Nadia travaille, et ce qu’elle produit.',
    worksFrom: [
      'Le contenu de la page et le H1 actuel',
      'Le titre et la meta description existants',
      'L’intention de recherche détectée',
      'Le sujet ou la requête cible',
      'Les règles de marque et de conformité',
    ],
    produces: [
      'Des options de titre SEO en brouillon',
      'Une meta description en brouillon',
      'Des suggestions de H1',
      'Des notes de longueur et d’intention',
      'Un pack de métadonnées prêt pour la relecture',
    ],
    scenarios: [
      {
        title: 'Un article solide avec un titre oubliable.',
        description: 'Nadia réécrit le titre et la description pour correspondre à ce que les lecteurs recherchent réellement, sans surpromettre.',
      },
      {
        title: 'Des titres qui commencent tous par le nom de la marque.',
        description: 'Elle déplace la valeur en tête pour que la page mette en avant ce qu’elle offre, pas qui l’a publiée.',
      },
      {
        title: 'Des descriptions qui se contentent de répéter le titre.',
        description: 'Nadia transforme un H1 reformulé en une description qui indique au lecteur ce qu’il va retirer de la page.',
      },
      {
        title: 'Une page qui cible la mauvaise intention.',
        description: 'Quand les métadonnées promettent une chose et que la page en livre une autre, elle signale l’écart pour qu’une personne le résolve.',
      },
      {
        title: 'La migration d’une bibliothèque d’anciens articles.',
        description: 'Elle relit les titres et descriptions à grande échelle et fait remonter les plus faibles en premier, pour qu’une passe de métadonnées commence là où ça compte.',
      },
      {
        title: 'Un sujet réglementé où chaque mot compte.',
        description: 'Nadia rédige avec soin et fait remonter les affirmations qui ont besoin d’un feu vert, plutôt que d’écrire une promesse que la page ne peut pas tenir.',
      },
    ],
    boundaryH2: 'Nadia rédige les métadonnées. Les personnes décident ce qui part en publication.',
    boundaryPara:
      'Un titre est une promesse faite à un lecteur. Nadia propose et vérifie, mais elle s’arrête toujours au brouillon. Rien de ce qu’elle écrit n’est publié ni envoyé vers un CMS sans qu’une personne ne l’ait d’abord approuvé.',
    boundaryChecklist: [
      'Nadia rédige les métadonnées, elle ne les publie jamais.',
      'Chaque option est présentée pour qu’un éditeur l’approuve.',
      'Les écarts et les affirmations risquées sont mis en évidence, jamais dissimulés.',
      'Nadia soutient le rédacteur, elle ne remplace pas son jugement.',
    ],
    willNot: [
      { color: 'red', text: 'Publier ou envoyer vers un CMS' },
      { color: 'red', text: 'Promettre un classement ou du trafic' },
      { color: 'amber', text: 'Bourrer de mots-clés pour tromper la recherche' },
    ],
    relatedH2: 'Les Workers avec qui Nadia travaille.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Examine la façon dont la page apparaît dans les résultats et où des extraits peuvent être gagnés.',
        outputLabel: 'Relecture d’extraits',
        ctaLabel: 'Comment Morgan relit',
      },
      {
        id: 'schema',
        description: 'Relit les données structurées pour que la page puisse prétendre à des résultats enrichis.',
        outputLabel: 'Relecture du schema',
        ctaLabel: 'Comment Sofia relit',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Vérifie que le brouillon lui-même est clair et prêt avant la finalisation des métadonnées.',
        outputLabel: 'Notes de relecture',
        ctaLabel: 'Comment Quinn relit',
      },
    ],
    ctaH2: 'Réussissez le titre, la description et le H1.',
    ctaPara: 'Ajoutez Nadia à votre flux de travail et chaque page arrive en relecture avec des métadonnées qui la reflètent honnêtement et se lisent bien dans les résultats de recherche.',
    guidanceFooterLabel: 'MÉTADONNÉES',
    guidanceFooterValue: 'Rédigées · prêtes pour la relecture',
  },

  serp_snippet_opportunity: {
    seoTitle: 'Worker Extraits de recherche | WordPresto',
    metaDescription:
      'Morgan examine la façon dont une page est susceptible d’apparaître dans les résultats de recherche et signale les opportunités d’extraits et de résultats enrichis qui méritent d’être travaillées. Relecture uniquement, jamais une garantie.',
    h1: 'Façonnez la façon dont la page apparaît dans les résultats de recherche.',
    heroPara1:
      'Une page ne se contente pas d’être classée, elle apparaît. Le titre, la description et la façon dont le contenu est structuré façonnent tous ce qu’un lecteur voit dans les résultats. Morgan relit ces éléments d’extrait et signale où une réponse claire, une liste ou une section structurée pourrait obtenir un résultat plus riche.',
    heroPara2:
      'Pour les éditeurs qui veulent que leurs pages se lisent bien dans les résultats de recherche, pas seulement sur la page elle-même.',
    problemEyebrow: 'Là où la page rencontre les résultats',
    problemH2: 'Le résultat qu’un lecteur voit n’est pas toujours la page que vous avez écrite.',
    problemPara:
      'Ce sont les moteurs de recherche qui construisent l’extrait, pas vous. Si la page enterre sa réponse, n’a ni liste claire ni structure de question, ou laisse la description au hasard, le résultat se lit aussi platement que tout ce qui l’entoure. Morgan relit les éléments qui façonnent cet extrait, honnêtement, sans jamais promettre qu’une fonctionnalité sera accordée.',
    problemAnnotation: '↘ la réponse est là, juste enterrée',
    beforeStamp: 'Enterrée',
    beforeHtml: `<p><span class="ba-strike">Il y a de nombreux facteurs à prendre en compte et cela dépend de toute une série d’éléments, que nous explorerons en détail tout au long de cet article, dans les sections ci-dessous.</span></p>`,
    beforeTags: ['Pas de réponse claire', 'Pas de structure', 'Extrait plat'],
    beforeNote: 'rien à extraire pour la recherche',
    afterStamp: 'Extractible',
    afterHtml: `<p><span class="ba-hl">Un flux de contenu comprend six étapes : planifier, briefer, écrire, réviser, améliorer et approuver.</span> Chacune est détaillée ci-dessous.</p>`,
    afterTags: ['Réponse directe', 'Structurable en liste', 'Prêt pour l’extrait'],
    afterNote: 'maintenant, il y a quelque chose à mettre en avant',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un relecteur qui lit la page comme le ferait une page de résultats.',
    helpsPara:
      'Morgan examine ensemble le titre, la description et la structure de la page, et fait remonter des opportunités concrètes et vérifiables, pour que la page ait la meilleure chance honnête d’obtenir un extrait clair et utile.',
    checks: [
      'La qualité du titre et de la description pour les résultats',
      'Si la page répond directement à sa requête',
      'La structure qui prend en charge les listes, les étapes ou les FAQ',
    ],
    improves: [
      'Des réponses remontées et rendues explicites',
      'Des sections façonnées pour un extrait plus net',
      'Un contenu organisé autour des questions rendu plus facile à parcourir',
    ],
    prepares: [
      'Une liste d’opportunités de résultats enrichis',
      'Des suggestions d’amélioration d’extrait',
      'Des notes sur les types de résultats adaptés à la page',
    ],
    surfaces: [
      'Les opportunités qui nécessitent une vérification du schema',
      'Les affirmations qui auraient besoin de preuves pour être mises en avant',
      'Les cas où l’intention et le format ne correspondent pas',
    ],
    ioH2: 'Ce à partir de quoi Morgan travaille, et ce qu’il produit.',
    worksFrom: [
      'Le titre de la page et la meta description',
      'Les titres et la structure du contenu',
      'L’intention de recherche détectée',
      'Les schémas de questions et de listes présents sur la page',
      'La relecture du schema, si disponible',
    ],
    produces: [
      'Une relecture des opportunités d’extrait',
      'Des suggestions de résultats enrichis',
      'Des notes d’amélioration de structure',
      'Une priorisation des victoires rapides',
      'Un résumé prêt pour la relecture',
    ],
    scenarios: [
      {
        title: 'Un tutoriel qui ne liste jamais ses étapes.',
        description: 'Morgan suggère une structure numérotée claire pour que les étapes se lisent d’un coup d’œil et aient une chance d’être mises en avant.',
      },
      {
        title: 'Une page FAQ dont les réponses sont noyées dans du texte.',
        description: 'Il signale où des réponses courtes et directes aideraient à la fois les lecteurs et la page de résultats.',
      },
      {
        title: 'Un guide solide avec une description plate.',
        description: 'Morgan signale les éléments d’extrait qui desservent la page et les transmet à Nadia pour réécriture.',
      },
      {
        title: 'Une page qui pourrait obtenir un résultat enrichi.',
        description: 'Il note quels types de résultats structurés conviennent réellement et transmet le travail de schema à Sofia, sans jamais promettre que Google l’accordera.',
      },
      {
        title: 'La comparaison de deux pages en concurrence sur la même requête.',
        description: 'Morgan examine la façon dont chacune est susceptible d’apparaître et fait remonter la structure qui sert le mieux le lecteur.',
      },
      {
        title: 'Une question de lecteur enterrée trois paragraphes plus bas.',
        description: 'Il recommande de commencer par la réponse, pour que la page soit utile immédiatement, sur la page comme dans la recherche.',
      },
    ],
    boundaryH2: 'Morgan relit l’opportunité. La recherche garde la décision.',
    boundaryPara:
      'Aucun outil ne contrôle ce qu’un moteur de recherche affiche. Morgan relit et recommande, et se garde bien de jamais promettre un extrait, un classement ou du trafic. Chaque suggestion revient à une personne de peser et d’approuver.',
    boundaryChecklist: [
      'Morgan relit les extraits, il n’en garantit jamais un.',
      'Les recommandations sont présentées pour qu’un éditeur les approuve.',
      'Les opportunités nécessitant un schema ou des preuves sont signalées.',
      'Morgan soutient le rédacteur, il ne remplace pas son jugement.',
    ],
    willNot: [
      { color: 'red', text: 'Garantir un extrait optimisé' },
      { color: 'red', text: 'Promettre un classement ou du trafic' },
      { color: 'amber', text: 'Imposer une structure qui nuit à la lecture' },
    ],
    relatedH2: 'Les Workers avec qui Morgan travaille.',
    relatedWorkerIds: [
      {
        id: 'seo_metadata',
        description: 'Rédige le titre et la description qui façonnent l’extrait.',
        outputLabel: 'Brouillons de métadonnées',
        ctaLabel: 'Comment Nadia rédige',
      },
      {
        id: 'schema',
        description: 'Relit les données structurées dont dépendent les résultats enrichis.',
        outputLabel: 'Relecture du schema',
        ctaLabel: 'Comment Sofia relit',
      },
      {
        id: 'content_analyst',
        description: 'Évalue le contenu sous-jacent dont l’extrait est tiré.',
        outputLabel: 'Analyse de contenu',
        ctaLabel: 'Comment Omar relit',
      },
    ],
    ctaH2: 'Façonnez la façon dont la page apparaît dans les résultats de recherche.',
    ctaPara: 'Ajoutez Morgan à votre flux de travail et chaque page arrive en relecture avec ses opportunités d’extrait mises en évidence, honnêtement et prêtes à traiter.',
    guidanceFooterLabel: 'EXTRAIT',
    guidanceFooterValue: 'Relu · opportunités notées',
  },

  schema: {
    seoTitle: 'Worker Schema | WordPresto',
    metaDescription:
      'Sofia relit les données structurées d’une page et recommande les types de schema qui correspondent à ce qu’elle est réellement, pour relecture humaine. Aucun champ inventé, aucun balisage mensonger.',
    h1: 'Décrivez la page pour que les machines la comprennent aussi.',
    heroPara1:
      'Les données structurées indiquent aux moteurs de recherche ce qu’une page est réellement : un article, un produit, un guide, une entreprise. Sofia relit le schema déjà présent, évalue ce que la page représente vraiment, et recommande les types adaptés, pour que le balisage décrive la page honnêtement.',
    heroPara2:
      'Pour les équipes qui veulent des données structurées qui reflètent le contenu, pas un empilement de balisage copié d’un modèle à l’autre.',
    problemEyebrow: 'Là où le balisage s’éloigne de la page',
    problemH2: 'Les données structurées n’aident que si elles disent la vérité.',
    problemPara:
      'Le schema est facile à copier et difficile à garder honnête. Des pages héritent du balisage d’un modèle, se décrivent comme quelque chose qu’elles ne sont pas, ou n’ont aucune donnée structurée du tout. Sofia compare ce qui est présent à ce que la page est réellement, et recommande les types qui correspondent.',
    problemAnnotation: '↘ balisée comme un produit, se lit comme un article',
    beforeStamp: 'Décalé',
    beforeHtml: `<p><span class="ba-strike">@type : Product</span> sur une page qui est manifestement un guide pratique, sans <span class="ba-strike">aucun balisage Article ou HowTo</span> nulle part.</p>`,
    beforeTags: ['Mauvais type', 'Balisage hérité', 'Ne décrit rien'],
    beforeNote: 'ce n’est pas une page produit',
    afterStamp: 'Aligné',
    afterHtml: `<p><span class="ba-hl">@type : HowTo</span> avec contexte article, recommandé car la page est un guide étape par étape. <span class="ba-hl">Suggéré pour relecture.</span></p>`,
    afterTags: ['Type adapté à la page', 'Balisage honnête', 'En attente d’approbation'],
    afterNote: 'maintenant le balisage correspond à la réalité',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un relecteur qui fait correspondre le schema à ce qu’est réellement la page.',
    helpsPara:
      'Sofia rapporte les données structurées qu’elle détecte, évalue le type de page apparent, et recommande le schema adapté. Elle n’invente jamais de champ ni ne balise une page comme quelque chose qu’elle n’est pas.',
    checks: [
      'Les données structurées déjà présentes sur la page',
      'Si les types détectés correspondent au contenu',
      'Le schema manquant que la page pourrait honnêtement utiliser',
    ],
    improves: [
      'Des recommandations de type adaptées à la page',
      'Un balisage qui reflète le contenu réel',
      'De la clarté sur l’usage de chaque type',
    ],
    prepares: [
      'Une relecture de schema avec les types détectés',
      'Des types recommandés en vue d’approbation',
      'Des notes expliquant pourquoi chaque type convient',
    ],
    surfaces: [
      'Le balisage qui affirme plus que la page',
      'Les champs qui nécessiteraient de vraies données pour être remplis',
      'Les cas où une personne devrait décider du type',
    ],
    ioH2: 'Ce à partir de quoi Sofia travaille, et ce qu’elle produit.',
    worksFrom: [
      'Les données structurées existantes',
      'Le contenu et les titres de la page',
      'Le type de page apparent',
      'Le contexte de l’entreprise ou de l’organisation',
      'La relecture technique, si disponible',
    ],
    produces: [
      'Un rapport de schema détecté',
      'Des types de schema recommandés',
      'Le raisonnement derrière chaque recommandation',
      'Des notes sur les champs qui ont besoin de vraies données',
      'Un résumé de schema prêt pour la relecture',
    ],
    scenarios: [
      {
        title: 'Un guide qui porte un balisage produit hérité d’un modèle.',
        description: 'Sofia signale le décalage et recommande les types article ou how-to qui décrivent réellement la page.',
      },
      {
        title: 'Une page sans aucune donnée structurée.',
        description: 'Elle évalue ce qu’est la page et recommande un ensemble de départ raisonnable, pour qu’une personne l’approuve.',
      },
      {
        title: 'Une page d’entreprise sans détails d’organisation.',
        description: 'Sofia signale le schema qui décrirait l’organisation, sans inventer de faits pour le remplir.',
      },
      {
        title: 'Une FAQ qui pourrait prendre en charge un balisage FAQ.',
        description: 'Elle note l’opportunité et transmet les implications sur les extraits à Morgan, en laissant la décision à l’éditeur.',
      },
      {
        title: 'Un schema copié sur toute une section.',
        description: 'Sofia repère où le balisage hérité ne convient plus aux pages individuelles sur lesquelles il se trouve.',
      },
      {
        title: 'Une page riche en affirmations dans un secteur réglementé.',
        description: 'Elle fait remonter le balisage qui affirmerait plus que la page ne peut soutenir, et le laisse à la relecture humaine.',
      },
    ],
    boundaryH2: 'Sofia recommande le schema. Les personnes approuvent le balisage.',
    boundaryPara:
      'Les données structurées sont une affirmation sur la page. Sofia relit et recommande, mais n’écrit jamais de balisage mensonger, n’invente jamais de champ et ne balise jamais une page comme quelque chose qu’elle n’est pas. Les recommandations passent par une approbation humaine avant toute application.',
    boundaryChecklist: [
      'Sofia recommande le schema, elle ne falsifie jamais le balisage.',
      'Les types détectés et les recommandations sont présentés pour relecture.',
      'Les champs qui ont besoin de vraies données sont signalés, jamais remplis.',
      'Sofia soutient l’équipe, elle ne remplace pas son jugement.',
    ],
    willNot: [
      { color: 'red', text: 'Écrire un balisage mensonger ou inventé' },
      { color: 'red', text: 'Baliser une page comme ce qu’elle n’est pas' },
      { color: 'amber', text: 'Remplir des champs sans vraies données' },
    ],
    relatedH2: 'Les Workers avec qui Sofia travaille.',
    relatedWorkerIds: [
      {
        id: 'serp_snippet_opportunity',
        description: 'Relie les opportunités de schema à la façon dont la page apparaît dans les résultats.',
        outputLabel: 'Relecture d’extraits',
        ctaLabel: 'Comment Morgan relit',
      },
      {
        id: 'technical_health',
        description: 'Vérifie les signaux techniques plus larges dont dépend la page.',
        outputLabel: 'Constats techniques',
        ctaLabel: 'Comment Maya relit',
      },
      {
        id: 'seo_metadata',
        description: 'Rédige le titre et la description qui accompagnent le balisage.',
        outputLabel: 'Brouillons de métadonnées',
        ctaLabel: 'Comment Nadia rédige',
      },
    ],
    ctaH2: 'Décrivez la page pour que les machines la comprennent aussi.',
    ctaPara: 'Ajoutez Sofia à votre flux de travail et chaque page arrive en relecture avec des données structurées qui correspondent à ce qu’elle est réellement.',
    guidanceFooterLabel: 'SCHEMA',
    guidanceFooterValue: 'Relu · types recommandés',
  },

  technical_health: {
    seoTitle: 'Worker Santé technique | WordPresto',
    metaDescription:
      'Maya vérifie les signaux techniques derrière une page, métadonnées, titres, indexabilité et structure, et rapporte ce qui mérite un examen plus attentif. Appuyée sur des standards, relecture uniquement.',
    h1: 'Vérifiez les signaux techniques derrière la page.',
    heroPara1:
      'Une excellente écriture peut quand même être freinée par des problèmes techniques discrets : un titre manquant, un ordre de titres cassé, une page qui ne peut pas être indexée. Maya relit ces signaux au regard de standards établis et rapporte ses constats par catégorie, pour que rien de technique ne soit laissé au hasard.',
    heroPara2:
      'Pour les éditeurs et les équipes de site qui veulent une lecture claire et appuyée sur des standards avant la mise en ligne d’une page.',
    problemEyebrow: 'Là où un bon contenu sous-performe en silence',
    problemH2: 'Une page solide peut être desservie par des signaux que personne n’a vérifiés.',
    problemPara:
      'Les problèmes techniques s’annoncent rarement. Une page avec un meta title manquant, des titres qui sautent des niveaux, ou un noindex accidentel peut se lire parfaitement tout en sous-performant en silence. Maya relit ces signaux au regard des standards et rapporte ce qui mérite attention, en langage clair.',
    problemAnnotation: '↘ se lit bien, réglée en noindex',
    beforeStamp: 'Non vérifiée',
    beforeHtml: `<p>Ordre des titres : <span class="ba-strike">H1 → H3 → H3</span>. Meta title : <span class="ba-strike">manquant</span>. Indexable : <span class="ba-strike">non (noindex activé)</span>.</p>`,
    beforeTags: ['Niveau de titre sauté', 'Pas de titre', 'Non indexable'],
    beforeNote: 'ça ne sera jamais trouvé',
    afterStamp: 'Relue',
    afterHtml: `<p>Ordre des titres : <span class="ba-hl">H1 → H2 → H3</span>. Meta title : <span class="ba-hl">présent et relu</span>. Indexable : <span class="ba-hl">oui</span>. Signalé pour correction avant publication.</p>`,
    afterTags: ['Hiérarchie propre', 'Titre présent', 'Indexable'],
    afterNote: 'maintenant, les fondamentaux tiennent',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un relecteur technique qui rapporte des constats, pas du bruit.',
    helpsPara:
      'Maya effectue des contrôles techniques appuyés sur des standards et regroupe ses constats en catégories claires avec des scores, pour qu’une personne puisse voir ce qui compte et décider quoi corriger. Elle relit, elle ne modifie pas la page.',
    checks: [
      'Les métadonnées, les titres et l’indexabilité',
      'La structure de la page et les signaux techniques',
      'La présence de schema et les bases d’accessibilité',
    ],
    improves: [
      'Une vision claire de la santé technique',
      'Des constats regroupés par catégorie',
      'Un ordre de correction raisonnable',
    ],
    prepares: [
      'Des constats techniques appuyés sur des standards',
      'Des scores par catégorie pour la page',
      'Des notes sur ce qu’il faut vérifier avant publication',
    ],
    surfaces: [
      'Les problèmes qui nécessitent l’intervention d’un développeur',
      'Les constats qui nécessitent une décision humaine',
      'Les signaux qu’une seule page ne peut pas confirmer seule',
    ],
    ioH2: 'Ce à partir de quoi Maya travaille, et ce qu’elle produit.',
    worksFrom: [
      'Les métadonnées et les titres de la page',
      'Les signaux d’indexabilité',
      'La structure de la page et les sections de contenu',
      'La présence de schema',
      'Les signaux d’accessibilité et techniques',
    ],
    produces: [
      'Des constats de santé technique',
      'Des scores par catégorie',
      'Des problèmes priorisés à relire',
      'Des notes pour les développeurs si nécessaire',
      'Un résumé technique prêt pour la relecture',
    ],
    scenarios: [
      {
        title: 'Une page réglée par erreur en noindex.',
        description: 'Maya le signale avant publication, pour qu’une page censée être trouvée ne soit pas cachée en silence de la recherche.',
      },
      {
        title: 'Des titres qui sautent du H1 au H3.',
        description: 'Elle rapporte la hiérarchie cassée pour que la structure se lise proprement pour les lecteurs, les technologies d’assistance et la recherche.',
      },
      {
        title: 'Un nouveau modèle avant sa mise en production.',
        description: 'Maya relit les signaux techniques sur une page échantillon pour que les problèmes soient repérés une fois, pas sur chaque page plus tard.',
      },
      {
        title: 'Un rafraîchissement de contenu qui a touché au balisage.',
        description: 'Elle vérifie que les titres, les en-têtes et l’indexabilité tiennent toujours après la modification.',
      },
      {
        title: 'Une page qui se lit bien mais se classe mal.',
        description: 'Maya fait remonter les signaux techniques susceptibles de la freiner, pour qu’une personne enquête.',
      },
      {
        title: 'La transmission d’une liste de corrections à un développeur.',
        description: 'Elle regroupe les constats par catégorie et priorité pour que le travail technique soit clair et cadré.',
      },
    ],
    boundaryH2: 'Maya rapporte les constats. Les personnes décident des corrections.',
    boundaryPara:
      'Une relecture technique est une information, pas une instruction. Maya vérifie et rapporte, mais elle ne modifie jamais la page, ne change jamais de réglages et ne met jamais rien en ligne. Ses constats reviennent à une personne d’agir dessus.',
    boundaryChecklist: [
      'Maya relit la page, elle ne la modifie jamais.',
      'Les constats sont rapportés pour qu’une personne agisse dessus.',
      'Les problèmes nécessitant un développeur sont clairement signalés.',
      'Maya soutient l’équipe, elle ne remplace pas son jugement.',
    ],
    willNot: [
      { color: 'red', text: 'Modifier la page ou changer des réglages' },
      { color: 'red', text: 'Publier ou mettre quoi que ce soit en ligne' },
      { color: 'amber', text: 'Revendiquer une correction sans relecture humaine' },
    ],
    relatedH2: 'Les Workers avec qui Maya travaille.',
    relatedWorkerIds: [
      {
        id: 'schema',
        description: 'Relit les données structurées parmi les signaux techniques.',
        outputLabel: 'Relecture du schema',
        ctaLabel: 'Comment Sofia relit',
      },
      {
        id: 'seo_metadata',
        description: 'Rédige les métadonnées dont Maya vérifie la présence et la qualité.',
        outputLabel: 'Brouillons de métadonnées',
        ctaLabel: 'Comment Nadia rédige',
      },
      {
        id: 'trust_author_credibility',
        description: 'Relit les signaux de confiance qui accompagnent la santé technique.',
        outputLabel: 'Relecture de confiance',
        ctaLabel: 'Comment Alex relit',
      },
    ],
    ctaH2: 'Vérifiez les signaux techniques derrière la page.',
    ctaPara: 'Ajoutez Maya à votre flux de travail et chaque page arrive en relecture avec ses signaux techniques vérifiés au regard des standards.',
    guidanceFooterLabel: 'TECHNIQUE',
    guidanceFooterValue: 'Relue · constats consignés',
  },

  trust_author_credibility: {
    seoTitle: 'Worker Confiance et crédibilité de l’auteur | WordPresto',
    metaDescription:
      'Alex relit les signaux de confiance, de paternité et de crédibilité autour d’une page pour que les lecteurs et les moteurs de recherche voient qui se porte garant du contenu. Relecture uniquement, jamais inventé.',
    h1: 'Montrez qui se porte garant du contenu.',
    heroPara1:
      'Sur les sujets qui touchent à l’argent, à la santé ou à des décisions importantes, lecteurs et moteurs de recherche veulent tous deux savoir qui a écrit ceci, et pourquoi lui faire confiance. Alex relit le contexte de l’auteur, l’identité de l’organisation, le soutien apporté par les preuves et les signaux de crédibilité autour d’une page, et rapporte où la confiance est claire et où elle fait défaut.',
    heroPara2:
      'Pour les équipes qui publient du contenu de conseil ou à forts enjeux et qui veulent que leur crédibilité soit visible, pas présumée.',
    problemEyebrow: 'Là où la crédibilité reste tue',
    problemH2: 'Un bon conseil venu de nulle part en particulier est difficile à croire.',
    problemPara:
      'Beaucoup de contenus réellement écrits par des experts sont publiés sans auteur visible, sans contexte d’organisation et sans indication de qui les a relus. L’expertise est réelle, mais le lecteur ne peut pas la voir, et la recherche non plus. Alex relit les signaux qui rendent la crédibilité visible.',
    problemAnnotation: '↘ un conseil d’expert, sans auteur nommé',
    beforeStamp: 'Non attribué',
    beforeHtml: `<p>Un conseil médical publié <span class="ba-strike">sans mention d’auteur</span>, <span class="ba-strike">sans relecteur</span> et <span class="ba-strike">sans contexte d’organisation</span>.</p>`,
    beforeTags: ['Pas d’auteur', 'Pas de relecture', 'Sujet à forts enjeux'],
    beforeNote: 'qui me dit ça ?',
    afterStamp: 'Attribué',
    afterHtml: `<p>Le même conseil avec un <span class="ba-hl">auteur nommé et ses qualifications</span>, <span class="ba-hl">un relecteur</span> et un <span class="ba-hl">contexte d’organisation clair</span>. Signalé pour validation.</p>`,
    afterTags: ['Auteur nommé', 'Relu par', 'Responsabilité claire'],
    afterNote: 'maintenant, la confiance est visible',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un relecteur qui vérifie si la confiance est réellement visible.',
    helpsPara:
      'Alex relit la paternité, la responsabilité de l’organisation, le soutien des preuves et les signaux de crédibilité, restitue une lecture de préparation et fait remonter ce qui nécessite un œil humain, en particulier sur les sujets sensibles. Il rapporte des signaux, il n’invente jamais de qualifications.',
    checks: [
      'La mention d’auteur, la biographie et les qualifications',
      'La responsabilité et le contexte de l’organisation',
      'Le soutien des preuves et les signaux de relecture',
    ],
    improves: [
      'Une vision claire de la préparation en matière de confiance',
      'Les lacunes de paternité rendues visibles',
      'Les endroits où la crédibilité pourrait être mieux montrée',
    ],
    prepares: [
      'Une relecture de confiance et de crédibilité',
      'Une lecture de préparation pour la page',
      'Des notes sur le risque lié aux sujets sensibles',
    ],
    surfaces: [
      'Les affirmations à forts enjeux qui nécessitent de montrer l’expertise',
      'Le contexte d’auteur ou de relecteur manquant',
      'Les décisions de crédibilité à prendre par une personne',
    ],
    ioH2: 'Ce à partir de quoi Alex travaille, et ce qu’il produit.',
    worksFrom: [
      'Le contexte et la mention d’auteur',
      'Les signaux d’organisation et de responsabilité',
      'Le soutien des preuves sur la page',
      'La sensibilité du sujet (conseil, santé, argent)',
      'Les signaux de crédibilité du schema',
    ],
    produces: [
      'Une relecture de confiance et de crédibilité',
      'Une lecture de préparation en matière de confiance',
      'Des notes sur les lacunes de paternité',
      'Des signalements de risque sur les sujets sensibles',
      'Un résumé de confiance prêt pour la relecture',
    ],
    scenarios: [
      {
        title: 'Un conseil santé ou finance sans auteur nommé.',
        description: 'Alex signale l’absence de paternité pour qu’une personne réelle et qualifiée puisse être créditée avant la mise en ligne de la page.',
      },
      {
        title: 'Une organisation respectée qui ne le dit jamais.',
        description: 'Il signale où le contexte et la responsabilité de l’organisation pourraient rendre visible une crédibilité déjà existante.',
      },
      {
        title: 'Une page qui devrait afficher un relecteur.',
        description: 'Alex note où une mention « relu par » rassurerait les lecteurs sur un sujet à forts enjeux.',
      },
      {
        title: 'Des affirmations qui s’appuient sur une expertise non démontrée.',
        description: 'Il fait remonter les endroits où la page présume d’une autorité qu’elle n’a pas démontrée, et transmet le travail de preuves à Theo.',
      },
      {
        title: 'La préparation de contenu pour un secteur réglementé.',
        description: 'Alex relit les signaux de confiance aux côtés de Vera pour que crédibilité et conformité soient examinées ensemble.',
      },
      {
        title: 'Un article invité d’un contributeur inconnu.',
        description: 'Il signale l’absence de contexte d’auteur pour qu’une personne décide comment l’attribuer et s’en porter garante.',
      },
    ],
    boundaryH2: 'Alex relit les signaux de confiance. Les personnes se portent garantes de la page.',
    boundaryPara:
      'La crédibilité ne se fabrique pas. Alex relit et rapporte, mais il n’invente jamais d’auteur, ne fabrique jamais de qualifications et ne revendique jamais une relecture qui n’a pas eu lieu. Ce qu’il fait remonter revient à une personne d’en faire honnêtement quelque chose.',
    boundaryChecklist: [
      'Alex relit les signaux de confiance, il ne les invente jamais.',
      'Les lacunes de paternité sont mises en évidence pour qu’une personne les comble.',
      'Les risques liés aux sujets sensibles sont signalés pour une relecture humaine.',
      'Alex soutient l’équipe, il ne remplace pas son jugement.',
    ],
    willNot: [
      { color: 'red', text: 'Inventer des auteurs ou des qualifications' },
      { color: 'red', text: 'Revendiquer une relecture qui n’a pas eu lieu' },
      { color: 'amber', text: 'Présumer une autorité que la page n’a pas démontrée' },
    ],
    relatedH2: 'Les Workers avec qui Alex travaille.',
    relatedWorkerIds: [
      {
        id: 'evidence_gap',
        description: 'Transforme des preuves faibles ou manquantes en une checklist claire.',
        outputLabel: 'Checklist de preuves',
        ctaLabel: 'Comment Theo relit',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Signale les affirmations non étayées et le risque de conformité avant approbation.',
        outputLabel: 'Rapport de risque et conformité',
        ctaLabel: 'Comment Vera relit',
      },
      {
        id: 'schema',
        description: 'Relit les données structurées qui portent les signaux de crédibilité.',
        outputLabel: 'Relecture du schema',
        ctaLabel: 'Comment Sofia relit',
      },
    ],
    ctaH2: 'Montrez qui se porte garant du contenu.',
    ctaPara: 'Ajoutez Alex à votre flux de travail et chaque page arrive en relecture avec ses signaux de confiance et de paternité vérifiés et visibles.',
    guidanceFooterLabel: 'CONFIANCE',
    guidanceFooterValue: 'Relue · signaux vérifiés',
  },

  evidence_gap: {
    seoTitle: 'Worker Lacunes de preuves | WordPresto',
    metaDescription:
      'Theo transforme des preuves faibles ou manquantes en une checklist claire, pour que les affirmations soient étayées avant qu’une page ne soit approuvée ou transférée. Quoi étayer, où trouver la source, quoi retenir.',
    h1: 'Étayez les affirmations avant leur mise en ligne.',
    heroPara1:
      'Le contenu est plein d’affirmations : des chiffres, des comparaisons, des énoncés de fait. Certaines sont solides, d’autres sont des suppositions, et d’autres encore ne devraient pas être publiées avant vérification. Theo rassemble les alertes de preuve soulevées tout au long du flux de travail et les transforme en une checklist unique et pratique : quoi étayer, où le trouver, et quoi retenir.',
    heroPara2:
      'Pour les éditeurs et les relecteurs qui veulent des affirmations étayées avant approbation, pas après qu’un lecteur, ou un régulateur, l’a remarqué.',
    problemEyebrow: 'Là où les affirmations devancent la preuve',
    problemH2: 'Les affirmations à risque sont rarement celles qui en ont l’air.',
    problemPara:
      'Une phrase assurée se lit comme un fait, qu’elle soit étayée ou non. Dans un brouillon, des chiffres non étayés et des comparaisons qui sonnent bien passent entre les mailles parce que personne ne suit quelle affirmation a besoin d’une source. Theo regroupe ces lacunes dans une seule checklist, pour que rien ne repose sur une supposition que personne n’a vérifiée.',
    problemAnnotation: '↘ un chiffre précis, aucune source',
    beforeStamp: 'Non étayé',
    beforeHtml: `<p>Notre méthode <span class="ba-strike">réduit prouvablement le temps de relecture de 40 %</span> et est <span class="ba-strike">la plus précise du marché</span>.</p>`,
    beforeTags: ['Pas de source', 'Affirmation superlative', 'Preuve nécessaire'],
    beforeNote: 'd’où viennent ces 40 % ?',
    afterStamp: 'Vérifié',
    afterHtml: `<p>Signalé : <span class="ba-hl">« 40 % » a besoin d’une source ou doit être retiré</span>. <span class="ba-hl">« La plus précise » a besoin d’une preuve ou d’une reformulation.</span> Une formulation provisoire sûre est suggérée.</p>`,
    afterTags: ['Source requise', 'Reformuler ou prouver', 'En relecture'],
    afterNote: 'maintenant, rien ne part sur une supposition',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une checklist qui transforme une inquiétude vague en actions précises.',
    helpsPara:
      'Theo regroupe les alertes de preuve dans une checklist structurée : ce qui a besoin d’être étayé, une source suggérée, le niveau de risque, si cela doit bloquer l’approbation, et une formulation provisoire sûre. Le travail d’étayer une affirmation reste entre les mains des personnes.',
    checks: [
      'Les affirmations sans source',
      'Les chiffres et comparaisons qui ont besoin d’une preuve',
      'Les énoncés qui pourraient exagérer',
    ],
    improves: [
      'Des inquiétudes vagues transformées en actions claires',
      'Une vue unique de chaque lacune de preuve',
      'La priorité et le risque de chaque élément',
    ],
    prepares: [
      'Une checklist de preuves pour la page',
      'Des sources suggérées à rechercher',
      'Une formulation provisoire sûre quand c’est utile',
    ],
    surfaces: [
      'Les affirmations qui devraient bloquer l’approbation',
      'Les énoncés à haut risque à peser par une personne',
      'Les sources qui nécessitent une vérification humaine',
    ],
    ioH2: 'Ce à partir de quoi Theo travaille, et ce qu’il produit.',
    worksFrom: [
      'Les alertes de preuve issues du flux de travail',
      'Les affirmations et les chiffres du brouillon',
      'La sensibilité et le risque du sujet',
      'Les sources déjà présentes sur la page',
      'Les notes de relecture et de conformité',
    ],
    produces: [
      'Une checklist de preuves consolidée',
      'Les éléments nécessitant une preuve',
      'Les sources suggérées et les niveaux de risque',
      'Les signalements bloquants pour l’approbation',
      'Une formulation provisoire sûre',
    ],
    scenarios: [
      {
        title: 'Une statistique précise sans citation.',
        description: 'Theo signale le chiffre, le marque comme ayant besoin d’une source, et suggère une formulation sûre en attendant d’en trouver une.',
      },
      {
        title: 'Un superlatif que la page ne peut pas prouver.',
        description: 'Il fait remonter « le meilleur » ou « le plus précis » comme des affirmations qui ont besoin de preuves ou d’une réécriture avant approbation.',
      },
      {
        title: 'Un brouillon plein d’affirmations assurées.',
        description: 'Theo rassemble chaque affirmation non étayée dans une seule checklist, pour que le relecteur n’ait pas à les traquer ligne par ligne.',
      },
      {
        title: 'Un sujet réglementé proche de la validation.',
        description: 'Il marque les affirmations qui devraient bloquer l’approbation tant qu’elles ne sont pas correctement étayées, et transmet le risque à Vera.',
      },
      {
        title: 'La préparation d’une page pour le transfert.',
        description: 'Theo confirme que la checklist de preuves est nette avant qu’Audrey n’assemble le rapport d’approbation.',
      },
      {
        title: 'Une affirmation qui s’appuie sur une expertise invisible.',
        description: 'Il se coordonne avec Alex pour que l’autorité et la preuve soient toutes deux montrées, pas présumées.',
      },
    ],
    boundaryH2: 'Theo trouve les lacunes. Les personnes fournissent la preuve.',
    boundaryPara:
      'La preuve est une responsabilité humaine. Theo identifie ce qui a besoin d’être étayé et le niveau de risque de chaque lacune, mais il n’invente jamais de source, ne fabrique jamais de chiffre et n’approuve jamais une affirmation. Combler et vérifier la preuve reste entre les mains des personnes.',
    boundaryChecklist: [
      'Theo trouve les lacunes, il n’invente jamais de preuve.',
      'Chaque élément est présenté pour qu’une personne le résolve.',
      'Les affirmations qui devraient bloquer l’approbation sont signalées.',
      'Theo soutient le relecteur, il ne remplace pas son jugement.',
    ],
    willNot: [
      { color: 'red', text: 'Inventer des sources ou des chiffres' },
      { color: 'red', text: 'Approuver une affirmation non étayée' },
      { color: 'amber', text: 'Laisser passer un énoncé à haut risque' },
    ],
    relatedH2: 'Les Workers avec qui Theo travaille.',
    relatedWorkerIds: [
      {
        id: 'trust_author_credibility',
        description: 'Vérifie si l’autorité derrière les affirmations est visible.',
        outputLabel: 'Relecture de confiance',
        ctaLabel: 'Comment Alex relit',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Signale les affirmations non étayées et le risque de conformité avant approbation.',
        outputLabel: 'Rapport de risque et conformité',
        ctaLabel: 'Comment Vera relit',
      },
      {
        id: 'approval_report',
        description: 'Intègre la checklist de preuves dans la décision d’approbation.',
        outputLabel: 'Rapport d’approbation',
        ctaLabel: 'Comment Audrey approuve',
      },
    ],
    ctaH2: 'Étayez les affirmations avant leur mise en ligne.',
    ctaPara: 'Ajoutez Theo à votre flux de travail et chaque page arrive en relecture avec ses lacunes de preuve rassemblées dans une checklist claire.',
    guidanceFooterLabel: 'PREUVES',
    guidanceFooterValue: 'Vérifiée · lacunes listées',
  },
};
