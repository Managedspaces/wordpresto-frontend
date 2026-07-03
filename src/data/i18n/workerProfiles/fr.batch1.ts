import type { WorkerProfileTranslatable } from './types';

export const frBatch1: Record<string, WorkerProfileTranslatable> = {
  voice_style: {
    seoTitle: 'Worker Voix & style | WordPresto',
    metaDescription:
      'Helena vérifie chaque brouillon par rapport à vos règles de voix et à vos exemples validés, pour le ramener à votre style maison avant la relecture. Pour les équipes qui doivent garder une voix cohérente.',
    h1: 'Garder la voix dans le travail.',
    heroPara1:
      'Quand plusieurs rédacteurs et outils d’IA touchent le même site, la voix de marque dérive page après page. Helena lit vos règles de voix et vos exemples validés, puis vérifie et façonne chaque brouillon, pour qu’il sonne encore comme vous au moment d’arriver en relecture.',
    heroPara2:
      'Pour les équipes qui ont besoin d’une voix cohérente sur les briefs, les brouillons, les relectures et le contenu assisté par IA.',
    problemEyebrow: 'Où la voix commence à dériver',
    problemH2: 'La voix de marque est la première chose qui se casse dans un flux de travail assisté par IA.',
    problemPara:
      'Générer du texte n’a jamais été la partie difficile. La difficulté, c’est que chaque rédacteur, et chaque outil d’IA, a sa propre voix par défaut. Sur un vrai site, cette dérive fait toute la différence entre une marque et un empilement de pages.',
    problemAnnotation: '↘ même paragraphe, deux voix',
    beforeStamp: 'Hors voix',
    beforeHtml: `<p>Dans le <span class="ba-strike">paysage numérique en perpétuelle évolution</span> d&rsquo;aujourd&rsquo;hui, <span class="ba-strike">tirer parti</span> de <span class="ba-strike">solutions d&rsquo;IA de pointe</span> peut <span class="ba-strike">révolutionner</span> votre stratégie de contenu et débloquer des résultats <span class="ba-strike">qui changent la donne</span>.</p>`,
    beforeTags: ['5 expressions clichées', 'Pas de style maison', 'Se lit comme du générique'],
    beforeNote: 'rien de tout cela ne nous ressemble',
    afterStamp: 'En voix',
    afterHtml: `<p>La plupart des équipes de contenu n&rsquo;ont pas besoin de produire plus. Elles ont besoin d&rsquo;un moyen de garder <span class="ba-hl">une seule voix sur chaque page</span>, même quand plusieurs personnes, et l&rsquo;IA, s&rsquo;occupent de la rédaction.</p>`,
    afterTags: ['Simple et sûre d’elle', 'Concrète', 'Fidèle à la marque'],
    afterNote: 'maintenant, ça sonne comme la marque',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un éditeur de voix qui relit chaque brouillon au regard de votre style maison.',
    helpsPara:
      'Helena fait le travail qu’un bon éditeur de voix ferait : de façon constante, sur chaque page, avant que quiconque n’ait à lire le brouillon à froid.',
    checks: [
      'Le ton par rapport aux règles de voix de marque',
      'Les formulations interdites ou clichées',
      'La cohérence entre les sections',
    ],
    improves: [
      'Les phrases hors voix, réécrites dans le style',
      'Les formulations vagues rendues concrètes',
      'Le rythme et la lisibilité',
    ],
    prepares: [
      'Un brouillon façonné, prêt pour la réécriture',
      'Des notes de guidance sur la voix et le style',
      'Un transfert propre vers la relecture',
    ],
    surfaces: [
      'Les choix de voix dont elle n’est pas sûre',
      'Le sens qui a pu se déplacer',
      'Les affirmations qui ont besoin d’un regard humain',
    ],
    ioH2: 'Ce à partir de quoi Helena travaille, et ce qu’elle produit.',
    worksFrom: [
      'Règles de voix de marque',
      'Exemples validés',
      'Brief de contenu',
      'Brouillon existant',
      'Notes de relecture',
    ],
    produces: [
      'Guidance de voix & style',
      'Brouillon façonné',
      'Section réécrite',
      'Notes de relecture',
      'Pack de transfert',
    ],
    scenarios: [
      {
        title: 'Trois rédacteurs, une marque, trois voix.',
        description:
          'Helena relit chaque brouillon au regard des mêmes règles de voix, pour que la signature change mais pas la voix.',
      },
      {
        title: 'Des brouillons IA corrects, mais qui sonnent comme tout le monde.',
        description:
          'Elle retire le registre IA générique et ramène l’écriture vers votre style maison avant la relecture.',
      },
      {
        title: 'Un nouveau freelance qui n’a pas encore trouvé la voix.',
        description:
          'Helena transforme un « presque, mais pas tout à fait nous » en guidance concrète, phrase par phrase, exploitable.',
      },
      {
        title: 'Migrer d’anciennes pages au ton disparate.',
        description:
          'Elle signale d’abord les pires écarts, pour qu’une passe de reprise de voix commence là où c’est vraiment utile.',
      },
      {
        title: 'Une campagne qui doit se lire comme un seul ensemble, pas comme dix.',
        description:
          'Sur les pages de destination, les e-mails et les publications, Helena tient une seule voix pour que la campagne se lise comme un tout.',
      },
      {
        title: 'Vous réécrivez vos règles de voix et avez besoin d’un test.',
        description:
          'Faites passer quelques pages réelles par Helena pour voir où les nouvelles règles portent vraiment, et où elles ne portent pas.',
      },
    ],
    boundaryH2: 'Helena façonne la voix. Ce sont les humains qui décident.',
    boundaryPara:
      'La voix relève du jugement, pas d’une règle. Helena suggère, vérifie et prépare. Elle est délibérément conçue pour s’arrêter là où commence le jugement éditorial, et rien de ce qu’elle touche n’est publié sans l’approbation d’un humain.',
    boundaryChecklist: [
      'Helena suggère des réécritures en voix, elle ne publie jamais.',
      'Les choix de voix sont structurés pour qu’un éditeur les relise.',
      'Les lignes incertaines ou risquées sont signalées, pas cachées.',
      'Helena soutient le jugement éditorial, elle ne le remplace jamais.',
    ],
    willNot: [
      { color: 'red', text: 'Publier ou transférer vers le CMS' },
      { color: 'red', text: 'Passer outre un éditeur' },
      { color: 'amber', text: 'Aplatir un choix délibéré' },
    ],
    relatedH2: 'Les Workers à qui Helena transmet le travail.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Réécrit le brouillon complet à partir de la guidance de voix d’Helena.',
        outputLabel: 'Brouillon réécrit',
        ctaLabel: 'Comment Ellis réécrit',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Vérifie que le brouillon façonné est clair et prêt.',
        outputLabel: 'Synthèse de relecture',
        ctaLabel: 'Comment Quinn relit',
      },
      {
        id: 'approval_report',
        description: 'Assemble la relecture en une décision d’approbation claire.',
        outputLabel: 'Rapport d’approbation',
        ctaLabel: 'Comment Audrey approuve',
      },
    ],
    ctaH2: 'Garder la voix dans le travail.',
    ctaPara:
      'Ajoutez Helena à votre flux de contenu pour tenir une seule voix sur chaque page, avec une approbation humaine avant toute publication.',
    guidanceFooterLabel: 'ADÉQUATION DE VOIX',
    guidanceFooterValue: 'Solide · prêt pour relecture',
  },
  content_analyst: {
    seoTitle: 'Worker Analyste de contenu | WordPresto',
    metaDescription:
      'Omar analyse le contenu existant, son contexte et son objectif avant que toute édition ou réécriture ne commence. Pour les équipes qui ont besoin d’une base claire avant de toucher à une page.',
    h1: 'Comprendre la page avant de la réécrire.',
    heroPara1:
      'La plupart des réécritures partent du mauvais endroit. Elles changent ce qui est facile à changer plutôt que ce qui doit vraiment changer. Omar lit d’abord la page existante : ce qu’elle cherche à faire, si ça fonctionne, et ce qui mérite d’être gardé. Cela donne au travail qui suit une base claire.',
    heroPara2:
      'Pour les revues de contenu, les migrations de site, et toute réécriture qui doit partir de preuves plutôt que d’instinct.',
    problemEyebrow: 'Où les réécritures tournent mal',
    problemH2: 'Réécrire sans lire, c’est la meilleure façon de perdre ce qui fonctionnait déjà.',
    problemPara:
      'Une page en ligne depuis deux ans contient quelque chose : une structure à laquelle les lecteurs ont répondu, un ton qui convenait, des sections bien positionnées. Réécrire à partir de zéro sans d’abord relire ce qui existe, c’est démarrer chaque projet plus loin en arrière que nécessaire.',
    problemAnnotation: '↘ l’analyse d’abord, le brief ensuite',
    beforeStamp: 'Aucune analyse',
    beforeHtml: `<p>Il faut <span class="ba-strike">complètement réécrire</span> la page d&rsquo;accueil. <span class="ba-strike">Rendez-la juste plus moderne</span> et <span class="ba-strike">ajoutez plus de mots-clés</span>. La version actuelle est <span class="ba-strike">trop longue et ennuyeuse</span>.</p>`,
    beforeTags: ['Pas de base', 'Direction floue', 'Rien pour construire dessus'],
    beforeNote: 'réécrire à partir d’une supposition',
    afterStamp: 'Analyse faite',
    afterHtml: `<p>La page d&rsquo;accueil actuelle a des <span class="ba-hl">deuxième et troisième sections solides</span> qui performent bien. Le paragraphe d&rsquo;intro doit être remplacé. La structure est saine. Pas besoin d&rsquo;une réécriture complète.</p>`,
    afterTags: ['Base claire', 'Périmètre précis', 'Travail défini'],
    afterNote: 'maintenant on sait quoi changer',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un lecteur de contenu qui cartographie ce qui existe avant que rien ne change.',
    helpsPara:
      'Omar fait le travail d’analyse qui devrait avoir lieu avant chaque brief, mais qui arrive rarement : lire la page existante pour ce qu’elle est et ce qu’elle cherche à faire.',
    checks: [
      'Si la page remplit l’objectif qu’elle affiche',
      'Quelles structures et sections fonctionnent déjà',
      'Les écarts entre l’intention et le contenu actuel',
    ],
    improves: [
      'Le périmètre de réécriture, pour couvrir moins mais changer plus',
      'La qualité du brief, en donnant aux rédacteurs une vraie base',
      'La priorisation, pour que les changements les plus importants passent en premier',
    ],
    prepares: [
      'Une synthèse d’analyse de contenu',
      'Une vision claire de ce qu’il faut garder, changer ou couper',
      'Un point de départ pour le brief ou la passe de structure',
    ],
    surfaces: [
      'Les pages où une édition légère suffit',
      'Les problèmes structurels qui affecteront toute réécriture',
      'Les décalages entre l’objectif de la page et son contenu',
    ],
    ioH2: 'Ce à partir de quoi Omar travaille, et ce qu’il produit.',
    worksFrom: [
      'Contenu de page existant',
      'Objectif de page ou brief déclaré',
      'Charte de marque',
      'Définition de l’audience',
      'Notes de relecture antérieures',
    ],
    produces: [
      'Synthèse d’analyse de contenu',
      'Ce qu’il faut garder, changer ou couper',
      'Notes d’entrée pour le brief',
      'Rapport d’écarts',
      'Observations structurelles',
    ],
    scenarios: [
      {
        title: 'Une migration de site avec 200 pages à examiner.',
        description:
          'Omar lit chaque page selon un standard cohérent, en signalant ce qui vaut la peine d’être conservé et ce qui devrait être retiré.',
      },
      {
        title: 'Un brief de refonte sans périmètre clair.',
        description:
          'Il cartographie le contenu existant pour que le brief ait un point de départ précis plutôt qu’une direction générale.',
      },
      {
        title: 'Un site hérité que vous n’avez pas construit.',
        description:
          'Omar donne une image rapide de ce qui existe, ce qui fonctionne, et ce qui est du bruit.',
      },
      {
        title: 'Une page très performante que vous craignez de toucher.',
        description:
          'Il identifie les parties qui comptent pour que vous puissiez améliorer autour plutôt que de les remplacer.',
      },
      {
        title: 'Un client qui insiste pour une réécriture complète.',
        description:
          'L’analyse révèle souvent qu’une touche plus légère suffit, ce qui préserve le budget et ce qui fonctionne déjà.',
      },
      {
        title: 'Préparer l’arrivée d’un rédacteur nouveau sur le client.',
        description:
          'Une analyse de contenu donne à n’importe quel rédacteur un vrai brief plutôt qu’une page blanche.',
      },
    ],
    boundaryH2: 'Omar analyse. Les éditeurs et les clients décident.',
    boundaryPara:
      'L’analyse de contenu est une donnée d’entrée, pas une instruction. Omar cartographie ce qui existe et signale ce qui compte. Ce qui change, ce qui reste et ce qui est coupé relève du jugement de l’éditeur ou du client.',
    boundaryChecklist: [
      'Omar relit et analyse, il ne modifie jamais le contenu directement.',
      'Son analyse est structurée pour qu’un éditeur humain agisse dessus.',
      'Les décisions floues ou contestées sont signalées, pas tranchées.',
      'L’analyse soutient le jugement éditorial, elle ne le remplace pas.',
    ],
    willNot: [
      { color: 'red', text: 'Éditer ou réécrire des pages' },
      { color: 'red', text: 'Trancher le périmètre final' },
      { color: 'amber', text: 'Passer outre les priorités du client' },
    ],
    relatedH2: 'Les Workers à qui Omar transmet le travail.',
    relatedWorkerIds: [
      {
        id: 'structure',
        description: 'Utilise l’analyse pour façonner la hiérarchie des sections et le fil du contenu.',
        outputLabel: 'Structure de contenu',
        ctaLabel: 'Comment Marcus structure',
      },
      {
        id: 'content_brief_builder',
        description: 'Construit le brief à partir des constats de l’analyse.',
        outputLabel: 'Brief de contenu',
        ctaLabel: 'Comment Luca fait le brief',
      },
      {
        id: 'draft_rewrite',
        description: 'Réécrit avec une image claire de la page existante.',
        outputLabel: 'Brouillon façonné',
        ctaLabel: 'Comment Ellis réécrit',
      },
    ],
    ctaH2: 'Comprendre la page avant de la réécrire.',
    ctaPara:
      'Ajoutez Omar à votre flux de travail, et chaque réécriture part d’une image claire de ce qui existe déjà.',
    guidanceFooterLabel: 'STATUT D’ANALYSE',
    guidanceFooterValue: 'Terminée · prête pour le brief',
  },
  structure: {
    seoTitle: 'Worker Structure éditoriale | WordPresto',
    metaDescription:
      'Marcus façonne les titres, les sections et le fil de la page pour donner au contenu une structure éditoriale claire, avant ou pendant la rédaction. Pour les pages qui ont besoin d’une vraie forme avant que l’écriture ne commence.',
    h1: 'Donner à chaque brouillon une forme plus claire.',
    heroPara1:
      'Un contenu sans structure est difficile à relire, facile à mal lire, et frustrant à éditer. Marcus cartographie la hiérarchie des titres, l’ordre des sections et le fil du contenu, pour que chaque brouillon démarre ou se poursuive avec une forme qui a du sens éditorialement et pour le lecteur.',
    heroPara2:
      'Pour les pages qui ont besoin d’une passe structurelle avant la rédaction, d’un remodelage en cours de brouillon, ou d’une réorganisation après rédaction.',
    problemEyebrow: 'Où la structure s’effondre',
    problemH2: 'Un contenu mal structuré ne se répare pas avec une meilleure écriture.',
    problemPara:
      'Vous pouvez améliorer chaque phrase d’une page, elle échouera quand même si les sections sont dans le mauvais ordre, si les titres ne racontent pas une histoire, ou si le point le plus important est enterré au milieu. La structure n’est pas de la mise en forme, c’est de la logique éditoriale.',
    problemAnnotation: '↘ la forme d’abord, l’écriture ensuite',
    beforeStamp: 'Sans structure',
    beforeHtml: `<p>La page couvre <span class="ba-strike">le tarif, puis l&rsquo;intro, puis les fonctionnalités, puis pourquoi nous</span>. Chaque section a été <span class="ba-strike">rédigée séparément</span> et il n&rsquo;y a <span class="ba-strike">aucun fil de lecture clair</span> à travers la page.</p>`,
    beforeTags: ['Sections dans le désordre', 'Aucun fil clair', 'Difficile à suivre'],
    beforeNote: 'les lecteurs n’iront pas jusqu’au bout',
    afterStamp: 'Structurée',
    afterHtml: `<p>L&rsquo;ouverture établit l&rsquo;objectif. La section fonctionnalités suit les questions du lecteur dans l&rsquo;ordre. Les preuves avant le tarif. <span class="ba-hl">Fil de lecture clair, du problème à la décision</span>.</p>`,
    afterTags: ['Fil logique', 'Ordre éditorial', 'Prête pour la rédaction'],
    afterNote: 'les rédacteurs peuvent travailler à partir de ça',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une architecture éditoriale qui donne à chaque page un fil de lecture.',
    helpsPara:
      'Marcus fait le travail structurel qui empêche le contenu de devenir un empilement de sections. Chaque page passée par une passe de structure ressort avec une forme claire et défendable.',
    checks: [
      'La hiérarchie des titres et la logique des sections',
      'L’ordre des sections par rapport au parcours du lecteur',
      'Les éléments structurels manquants ou dupliqués',
    ],
    improves: [
      'L’enchaînement des sections pour suivre la logique éditoriale',
      'La clarté des titres pour que chacun fasse un vrai travail éditorial',
      'Le fil de la page, de l’ouverture à la clôture',
    ],
    prepares: [
      'Un plan structuré pour le rédacteur',
      'Une structure de titres pour le CMS',
      'Des notes de section pour le brief',
    ],
    surfaces: [
      'Les décisions structurelles qui ont besoin d’un avis éditorial',
      'Les sections dont l’objectif n’est pas clair',
      'Les blocs de contenu qui appartiennent à une autre page',
    ],
    ioH2: 'Ce à partir de quoi Marcus travaille, et ce qu’il produit.',
    worksFrom: [
      'Brief de contenu ou objectif de page déclaré',
      'Brouillon existant ou notes brutes',
      'Analyse de contenu',
      'Charte de marque',
      'Notes sur le parcours du lecteur',
    ],
    produces: [
      'Plan de contenu structuré',
      'Hiérarchie de titres ordonnée',
      'Plan de sections',
      'Notes de fil pour le rédacteur',
      'Recommandations structurelles',
    ],
    scenarios: [
      {
        title: 'Une page longue écrite en une seule session, sans forme.',
        description:
          'Marcus réorganise les sections dans un ordre de lecture clair, sans que le rédacteur ait à repartir de zéro.',
      },
      {
        title: 'Un brief qui a besoin d’un squelette structurel avant la rédaction.',
        description:
          'Il cartographie la hiérarchie des titres pour que les rédacteurs sachent exactement ce qui va où.',
      },
      {
        title: 'Une page de destination avec trop de sections qui se concurrencent.',
        description:
          'Marcus identifie quelles sections méritent leur place, et dans quel ordre.',
      },
      {
        title: 'Une page migrée qui était structurée pour un autre objectif.',
        description:
          'Il remodèle la structure pour l’objectif actuel sans toucher au contenu lui-même.',
      },
      {
        title: 'Une page produit où la section la plus importante arrive en dernier.',
        description:
          'Placer les preuves avant le tarif suffit souvent à faire mieux performer une page.',
      },
      {
        title: 'Une équipe de contenu où chaque rédacteur structure différemment.',
        description:
          'Une passe de structure crée un standard de forme partagé avant que l’écriture ne commence.',
      },
    ],
    boundaryH2: 'Marcus structure. Les éditeurs et les clients approuvent la forme.',
    boundaryPara:
      'La structure est une recommandation, pas une directive. Marcus cartographie le meilleur fil de lecture en fonction de l’objectif du contenu. L’utiliser, l’ajuster ou la contester relève d’une décision éditoriale et cliente.',
    boundaryChecklist: [
      'Marcus structure et organise, il ne réécrit jamais le contenu.',
      'Les choix structurels sont documentés pour que les éditeurs les relisent.',
      'Les sections à l’objectif flou sont signalées, pas supprimées.',
      'La structure soutient le brief, elle ne le remplace pas.',
    ],
    willNot: [
      { color: 'red', text: 'Réécrire ou éditer le texte' },
      { color: 'red', text: 'Supprimer des sections sans instruction' },
      { color: 'amber', text: 'Imposer une structure contraire au brief' },
    ],
    relatedH2: 'Les Workers à qui Marcus transmet le travail.',
    relatedWorkerIds: [
      {
        id: 'content_brief_builder',
        description: 'Construit le brief autour de la structure approuvée.',
        outputLabel: 'Brief de contenu',
        ctaLabel: 'Comment Luca fait le brief',
      },
      {
        id: 'draft_rewrite',
        description: 'Rédige à l’intérieur du cadre structurel posé par Marcus.',
        outputLabel: 'Brouillon façonné',
        ctaLabel: 'Comment Ellis rédige',
      },
      {
        id: 'voice_style',
        description: 'Applique la guidance de voix au brouillon déjà structuré.',
        outputLabel: 'Guidance de voix & style',
        ctaLabel: 'Comment Helena fait la voix',
      },
    ],
    ctaH2: 'Donner à chaque brouillon une forme plus claire.',
    ctaPara:
      'Ajoutez Marcus à votre flux de travail, et chaque page démarre avec une structure éditoriale que rédacteurs et éditeurs peuvent vraiment exploiter.',
    guidanceFooterLabel: 'STATUT DE STRUCTURE',
    guidanceFooterValue: 'Plan établi · prête pour la rédaction',
  },
  content_brief_builder: {
    seoTitle: 'Worker Création de brief | WordPresto',
    metaDescription:
      'Luca transforme un sujet et un objectif en un brief de contenu structuré : objectif, audience, angle et sections, avant que la rédaction ne commence.',
    h1: 'Démarrer avec un brief que les rédacteurs peuvent vraiment utiliser.',
    heroPara1:
      'La plupart des briefs de contenu sont soit trop minces pour aider, soit trop directifs pour laisser de la place à l’écriture. Luca construit des briefs structurés qui donnent aux rédacteurs le contexte et la direction dont ils ont besoin sans écrire à leur place : objectif, audience, angle, direction de ton et un plan de sections clair.',
    heroPara2:
      'Pour les nouveaux projets de contenu, les briefs d’agence, les flux assistés par IA où le résultat a besoin d’un point de départ clair.',
    problemEyebrow: 'Où les briefs laissent tomber les rédacteurs',
    problemH2: 'Un brief faible produit un brouillon qu’il faudra de toute façon réécrire.',
    problemPara:
      'Un brief qui dit « écrivez sur notre service pour nos clients » n’est pas un brief. C’est une invitation à deviner. Chaque heure qu’un rédacteur passe à travailler à partir d’un brief vague est une heure passée à produire un contenu qui devra être révisé structurellement avant de pouvoir servir.',
    problemAnnotation: '↘ le brief détermine la qualité du brouillon',
    beforeStamp: 'Brief faible',
    beforeHtml: `<p>Écrivez un <span class="ba-strike">article de blog sur notre outil de gestion de projet</span>. Rendez-le <span class="ba-strike">engageant et bon pour le SEO</span>. Environ <span class="ba-strike">800 mots</span>. Ajoutez un <span class="ba-strike">appel à l&rsquo;action à la fin</span>.</p>`,
    beforeTags: ['Aucune audience', 'Aucun angle', 'Aucune indication de structure'],
    beforeNote: 'chaque rédacteur produira quelque chose de différent',
    afterStamp: 'Brief clair',
    afterHtml: `<p><span class="ba-hl">Objectif : aider les chefs de projet d&rsquo;agence</span> à comprendre pourquoi des transferts structurés réduisent les cycles de révision. Audience : décideurs. Angle : le coût des transferts mal préparés. Sections : problème, approche, preuve, prochaine étape.</p>`,
    afterTags: ['Audience précise', 'Angle clair', 'Sections structurées'],
    afterNote: 'les rédacteurs peuvent démarrer à partir de ça',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un brief qui donne une direction aux rédacteurs sans leur retirer leur jugement.',
    helpsPara:
      'Luca construit la structure de brief qui évite les cycles de réécriture. Un brief bien cadré, avec un vrai angle, une audience claire et des indications de section, produit de meilleurs brouillons, parce que les rédacteurs savent ce qu’ils construisent.',
    checks: [
      'Si l’objectif est clair et précis',
      'Si l’audience est assez définie pour écrire dessus',
      'Si l’angle est distinct et défendable',
    ],
    improves: [
      'Le périmètre du brief pour qu’il soit exploitable, pas seulement indicatif',
      'La structure des sections pour que le plan soit utilisable',
      'La direction de ton et de voix pour que le rédacteur ait un registre de départ',
    ],
    prepares: [
      'Un brief de contenu structuré',
      'Un plan de sections détaillé',
      'Une direction et des contraintes d’écriture',
    ],
    surfaces: [
      'Les sujets qui ont besoin de plus de recherche d’abord',
      'Les briefs qui ont besoin d’un retour client avant la rédaction',
      'Les conflits de périmètre qui provoqueront des révisions plus tard',
    ],
    ioH2: 'Ce à partir de quoi Luca travaille, et ce qu’il produit.',
    worksFrom: [
      'Sujet ou thème de contenu',
      'Objectif déclaré',
      'Définition de l’audience',
      'Charte de voix de marque',
      'Analyse de contenu ou notes de recherche',
    ],
    produces: [
      'Brief de contenu structuré',
      'Plan de sections',
      'Notes d’audience et de ton',
      'Contraintes d’écriture',
      'Transfert vers le rédacteur ou le Worker de rédaction',
    ],
    scenarios: [
      {
        title: 'Démarrer un programme de contenu avec des briefs cohérents.',
        description:
          'Luca construit chaque brief selon le même standard, pour que les brouillons démarrent de la même qualité de direction.',
      },
      {
        title: 'Briefer des outils de rédaction assistée par IA.',
        description:
          'Un brief structuré fait toute la différence entre un brouillon IA exploitable et un brouillon qui aura besoin d’une réécriture complète.',
      },
      {
        title: 'Un brief d’agence pour un client tout juste intégré.',
        description:
          'Luca transforme les notes d’intégration en un brief qu’un rédacteur peut exploiter sans deviner les préférences du client.',
      },
      {
        title: 'Construire un calendrier de contenu avec une vraie direction dedans.',
        description:
          'Chaque élément du calendrier reçoit un résumé de brief qui clarifie à quoi et à qui il s’adresse.',
      },
      {
        title: 'Un lancement produit avec plusieurs contenus.',
        description:
          'Une seule structure de brief appliquée de façon cohérente aligne tous les éléments sans réunions de cadrage constantes.',
      },
      {
        title: 'Un rédacteur nouveau sur la marque.',
        description:
          'Un brief clair remplace des semaines de transmission de connaissances implicites par un document auquel il peut se référer.',
      },
    ],
    boundaryH2: 'Luca fait le brief. Les rédacteurs et les éditeurs prennent les décisions créatives.',
    boundaryPara:
      'Un brief est un point de départ, pas un script. Luca structure le brief pour que la direction soit claire, mais l’écriture, les choix de voix et les jugements créatifs reviennent au rédacteur et à l’éditeur.',
    boundaryChecklist: [
      'Luca construit des briefs, il n’écrit jamais le contenu lui-même.',
      'Les choix de brief sont documentés pour la relecture de l’éditeur ou du client.',
      'Les manques de direction sont signalés avant que la rédaction ne commence.',
      'Le brief soutient le rédacteur, il ne le remplace pas.',
    ],
    willNot: [
      { color: 'red', text: 'Rédiger ou écrire le contenu' },
      { color: 'red', text: 'Prendre des décisions de positionnement de marque' },
      { color: 'amber', text: 'Passer outre un périmètre convenu' },
    ],
    relatedH2: 'Les Workers à qui Luca transmet le travail.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Prend le brief et construit le brouillon façonné.',
        outputLabel: 'Brouillon façonné',
        ctaLabel: 'Comment Ellis rédige',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Vérifie que le brouillon correspond vraiment au brief.',
        outputLabel: 'Rapport d’alignement',
        ctaLabel: 'Comment Ada vérifie',
      },
      {
        id: 'voice_style',
        description: 'Applique les règles de voix par rapport à la direction du brief.',
        outputLabel: 'Guidance de voix & style',
        ctaLabel: 'Comment Helena fait la voix',
      },
    ],
    ctaH2: 'Démarrer avec un brief que les rédacteurs peuvent vraiment utiliser.',
    ctaPara:
      'Ajoutez Luca à votre flux de travail, et chaque contenu démarre avec un brief clair qui réduit les cycles de révision.',
    guidanceFooterLabel: 'STATUT DU BRIEF',
    guidanceFooterValue: 'Prêt pour la rédaction',
  },
  draft_rewrite: {
    seoTitle: 'Worker Réécriture de brouillon | WordPresto',
    metaDescription:
      'Ellis construit et réécrit des brouillons qui suivent le brief : structurés, sur l’objectif, et prêts pour la relecture. Pour le contenu qui a besoin d’un brouillon façonné avant que l’édition ou la relecture ne commence.',
    h1: 'Réécrire des brouillons sans perdre le fil.',
    heroPara1:
      'Un brouillon qui s’éloigne du brief, enterre le point principal ou fait deux fois la longueur nécessaire n’est pas prêt pour la relecture. Ellis réécrit des brouillons qui suivent la structure du brief, mettent en avant ce qui compte et se lisent assez bien pour qu’un éditeur puisse en tirer des décisions.',
    heroPara2:
      'Pour les premiers jets, les brouillons générés par IA qui ont besoin d’être façonnés, et les réécritures quand le brief a changé.',
    problemEyebrow: 'Où les brouillons échouent',
    problemH2: 'Un brouillon qui part dans tous les sens ne se corrige pas par petites touches. Il faut le réécrire.',
    problemPara:
      'La plupart des premiers jets, qu’ils viennent de rédacteurs ou d’IA, couvrent le bon terrain sans le couvrir dans le bon ordre. Le point principal est enterré. Les sections dérivent. L’introduction passe trois paragraphes à se mettre en jambes. Rendre un brouillon prêt pour la relecture demande plus que corriger des phrases.',
    problemAnnotation: '↘ façonner le brouillon, puis le relire',
    beforeStamp: 'Non façonné',
    beforeHtml: `<p>Nous sommes un <span class="ba-strike">fournisseur leader de solutions innovantes</span>. Fondée en 2018, <span class="ba-strike">notre équipe de professionnels dévoués</span> travaille dur chaque jour pour <span class="ba-strike">apporter de la valeur à nos précieux clients</span>. Nous croyons en <span class="ba-strike">l&rsquo;excellence</span>.</p>`,
    beforeTags: ['Aucun point clair', 'Ouverture générique', 'Ne suit pas le brief'],
    beforeNote: 'ce brouillon ne peut pas être édité',
    afterStamp: 'Sur le brief',
    afterHtml: `<p>Les bons transferts de contenu prennent <span class="ba-hl">deux cycles de révision au lieu de cinq</span>. La différence, c&rsquo;est d&rsquo;avoir un brief que tout le monde sur le projet a vraiment lu avant que l&rsquo;écriture ne commence.</p>`,
    afterTags: ['Mené par le point clé', 'Fidèle au brief', 'Prêt pour relecture'],
    afterNote: 'maintenant un éditeur peut travailler à partir de ça',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un rédacteur qui suit le brief et produit quelque chose qu’un éditeur peut exploiter.',
    helpsPara:
      'Ellis fait le travail de rédaction et de réécriture qui amène le contenu à une qualité relisable. L’objectif n’est pas une pièce finie ; c’est un brouillon qui a une forme claire, suit le brief et donne à un éditeur quelque chose de vrai avec quoi travailler.',
    checks: [
      'Si le brouillon suit la structure du brief',
      'Si l’ouverture établit le point principal',
      'Si les sections sont dans un ordre logique',
    ],
    improves: [
      'L’ouverture pour que le point principal soit en tête',
      'La structure des sections pour suivre la logique du brief',
      'La longueur et le rythme pour ne pas déborder',
    ],
    prepares: [
      'Un brouillon façonné, prêt pour la relecture éditoriale',
      'Une réécriture que l’équipe du brief peut valider',
      'Un contenu prêt pour une passe de voix ou de qualité',
    ],
    surfaces: [
      'Les manques de brief apparus pendant la rédaction',
      'Les sections qui ont besoin d’un avis client ou expert',
      'Les passages où l’intention n’est pas claire',
    ],
    ioH2: 'Ce à partir de quoi Ellis travaille, et ce qu’il produit.',
    worksFrom: [
      'Brief de contenu',
      'Brouillon existant ou notes brutes',
      'Charte de voix de marque',
      'Plan de structure',
      'Notes de recherche',
    ],
    produces: [
      'Brouillon façonné',
      'Sections de contenu réécrites',
      'Notes de rédaction pour l’éditeur',
      'Notes d’écart au brief',
      'Brouillon prêt pour relecture',
    ],
    scenarios: [
      {
        title: 'Un brouillon IA précis mais complètement sans forme.',
        description:
          'Ellis lui donne une structure et une entrée en matière, transformant un résultat brut en brouillon relisable.',
      },
      {
        title: 'Un premier jet d’un nouveau rédacteur qui a besoin de travail structurel.',
        description:
          'Il remodèle sans tout réécrire, en préservant ce qui fonctionne.',
      },
      {
        title: 'Un brief qui a changé en cours de projet.',
        description:
          'Ellis réécrit les sections concernées selon la nouvelle direction.',
      },
      {
        title: 'Une page révisée par trop de personnes et qui a perdu sa cohérence.',
        description:
          'Une seule passe de réécriture propre par rapport au brief d’origine restaure la cohérence.',
      },
      {
        title: 'Un contenu nécessaire rapidement, sans temps pour plusieurs cycles.',
        description:
          'Un premier brouillon propre évite les cycles de révision que génèrent des premiers jets vagues.',
      },
      {
        title: 'Un client qui veut voir un brouillon avant d’approuver la production complète.',
        description:
          'Ellis produit un brouillon resserré qui donne aux clients quelque chose de réel sur quoi réagir.',
      },
    ],
    boundaryH2: 'Ellis rédige. Les éditeurs et les clients prennent les décisions finales.',
    boundaryPara:
      'Un brouillon façonné est une donnée d’entrée pour l’éditorial, pas le produit fini. Ellis réécrit pour amener le contenu à une qualité relisable. Les décisions créatives, la validation et les changements finaux relèvent de l’éditorial et du client.',
    boundaryChecklist: [
      'Ellis rédige et réécrit, il ne publie jamais.',
      'Les brouillons sont structurés pour qu’un éditeur les relise et les approuve.',
      'Les écarts au brief sont notés, jamais corrigés en silence.',
      'La rédaction soutient le brief, elle ne le remplace pas.',
    ],
    willNot: [
      { color: 'red', text: 'Publier ou finaliser le contenu' },
      { color: 'red', text: 'Passer outre le périmètre du brief' },
      { color: 'amber', text: 'Prendre des décisions de ton sans brief' },
    ],
    relatedH2: 'Les Workers à qui Ellis transmet le travail.',
    relatedWorkerIds: [
      {
        id: 'voice_style',
        description: 'Applique les règles de voix au brouillon façonné par Ellis.',
        outputLabel: 'Guidance de voix & style',
        ctaLabel: 'Comment Helena fait la voix',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Relit le brouillon pour la clarté et la préparation.',
        outputLabel: 'Notes de relecture',
        ctaLabel: 'Comment Quinn relit',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Vérifie que le brouillon remplit le brief.',
        outputLabel: 'Rapport d’alignement',
        ctaLabel: 'Comment Ada vérifie',
      },
    ],
    ctaH2: 'Réécrire des brouillons sans perdre le fil.',
    ctaPara:
      'Ajoutez Ellis à votre flux de travail, et chaque brouillon arrive en relecture déjà façonné, structuré et fidèle au brief.',
    guidanceFooterLabel: 'STATUT DU BROUILLON',
    guidanceFooterValue: 'Façonné · prêt pour relecture',
  },
  draft_quality_reviewer: {
    seoTitle: 'Worker Relecture qualité du brouillon | WordPresto',
    metaDescription:
      'Quinn vérifie si un brouillon est clair, structuré et prêt à avancer avant d’atteindre un client ou un CMS. Pour les équipes qui ont besoin d’une relecture structurée avant validation.',
    h1: 'Relire le brouillon avant qu’il n’avance.',
    heroPara1:
      'Un brouillon qui part vers un client ou une réunion de relecture avec des problèmes structurels, des sections floues ou un écart au brief fait perdre le temps de tout le monde. Quinn vérifie chaque brouillon avant qu’il n’avance : est-il clair, est-il structuré, suit-il le brief, et est-il prêt pour l’étape suivante.',
    heroPara2:
      'Pour les points de contrôle qualité avant la livraison client, avant le transfert au CMS, et avant toute approbation de contenu.',
    problemEyebrow: 'Où les brouillons avancent trop tôt',
    problemH2: 'Un brouillon qui arrive en relecture trop tôt coûte plus cher que d’attendre.',
    problemPara:
      'Envoyer un brouillon à un client ou à un éditeur senior avant qu’il ne soit prêt n’est pas de l’efficacité ; c’est un investissement à rebours. Le coût d’une révision structurelle après un retour client est plus élevé qu’une passe de relecture avant que le brouillon ne quitte l’équipe.',
    problemAnnotation: '↘ relire avant que ça n’avance',
    beforeStamp: 'Non relu',
    beforeHtml: `<p>Voici le <span class="ba-strike">brouillon terminé</span> pour votre relecture. Nous en <span class="ba-strike">sommes contents</span>. Dites-nous <span class="ba-strike">si vous voulez des changements</span>. Nous pensons qu&rsquo;il couvre <span class="ba-strike">tout</span> ce que vous avez demandé.</p>`,
    beforeTags: ['Non vérifié', 'Brief non confirmé', 'Problèmes non repérés'],
    beforeNote: 'c’est le client qui trouvera les problèmes',
    afterStamp: 'Relu',
    afterHtml: `<p>La section deux enterre le bénéfice principal. L&rsquo;ouverture se lit bien. <span class="ba-hl">Trois problèmes précis signalés</span> avant que le brouillon n&rsquo;atteigne le client, chacun avec une correction claire.</p>`,
    afterTags: ['Problèmes signalés', 'Brief vérifié', 'Prêt à présenter'],
    afterNote: 'les problèmes trouvés avant le transfert',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un contrôle qualité qui repère les problèmes avant qu’ils ne deviennent des commentaires client.',
    helpsPara:
      'Quinn fait la passe de relecture structurée qui devrait avoir lieu entre la rédaction et la livraison. Pas une correction ligne par ligne ; un contrôle de préparation qui identifie si le brouillon est clair, structuré et prêt à avancer.',
    checks: [
      'Si le brouillon couvre le brief',
      'Si les sections sont claires et dans l’ordre',
      'Si l’ouverture établit l’objectif',
    ],
    improves: [
      'Les retours de relecture pour qu’ils soient précis et exploitables',
      'L’évaluation de qualité du brouillon pour donner aux éditeurs une vision claire',
      'Les notes de transfert pour que l’étape suivante soit claire',
    ],
    prepares: [
      'Des notes de relecture structurées pour l’éditeur',
      'Une décision de préparation claire pour l’équipe',
      'Des problèmes précis et des corrections suggérées',
    ],
    surfaces: [
      'Les problèmes structurels qui nécessitent une réécriture',
      'Les manques ou écarts au brief que le rédacteur a manqués',
      'Les sections qui ont besoin d’un avis client ou expert',
    ],
    ioH2: 'Ce à partir de quoi Quinn travaille, et ce qu’il produit.',
    worksFrom: [
      'Contenu du brouillon',
      'Brief de contenu d’origine',
      'Charte de voix de marque',
      'Critères de relecture',
      'Notes de relecture antérieures',
    ],
    produces: [
      'Notes de relecture structurées',
      'Évaluation de préparation',
      'Signalements précis de problèmes',
      'Recommandations de correction',
      'Notes de transfert pour l’étape suivante',
    ],
    scenarios: [
      {
        title: 'Un brouillon prêt pour la livraison client vendredi.',
        description:
          'Quinn le vérifie jeudi pour que les problèmes puissent être corrigés avant que le client ne les voie.',
      },
      {
        title: 'Une pièce longue à laquelle trois rédacteurs ont contribué.',
        description:
          'Il identifie où la voix change, où les sections se contredisent, et où la structure s’effondre.',
      },
      {
        title: 'Un brouillon IA qui a passé un contrôle basique.',
        description:
          'Quinn applique des standards éditoriaux, pas seulement grammaticaux : clarté, structure et alignement au brief.',
      },
      {
        title: 'Un programme de contenu où la qualité est inégale.',
        description:
          'Une passe de relecture cohérente à la même étape crée une référence de qualité que l’équipe peut mesurer.',
      },
      {
        title: 'Un brief qui a changé en cours de brouillon.',
        description:
          'Quinn vérifie le brouillon par rapport au brief final, pas à l’original, et signale ce qui doit être mis à jour.',
      },
      {
        title: 'Un client qui laisse des commentaires de révision détaillés sur chaque brouillon.',
        description:
          'Moins de problèmes atteignant le client, ce sont moins de cycles de révision et une validation plus rapide.',
      },
    ],
    boundaryH2: 'Quinn relit. Les éditeurs et les clients décident quoi changer.',
    boundaryPara:
      'Une relecture est une donnée d’entrée structurée pour l’éditorial, pas un jeu d’instructions. Quinn identifie les problèmes et les signale clairement. Ce qui est changé, et comment, relève d’une décision éditoriale et cliente.',
    boundaryChecklist: [
      'Quinn relit et signale, il n’édite jamais directement.',
      'Les notes de relecture sont structurées pour qu’un éditeur agisse dessus.',
      'Les appréciations incertaines ou subjectives sont signalées comme des questions, pas des décisions.',
      'La relecture soutient le jugement éditorial, elle ne le supplante pas.',
    ],
    willNot: [
      { color: 'red', text: 'Éditer ou réécrire le contenu' },
      { color: 'red', text: 'Prendre les décisions finales sur le contenu' },
      { color: 'amber', text: 'Approuver un contenu pour publication' },
    ],
    relatedH2: 'Les Workers à qui Quinn transmet le travail.',
    relatedWorkerIds: [
      {
        id: 'section_rewrite',
        description: 'Réécrit les sections précises que Quinn signale comme faibles.',
        outputLabel: 'Sections réécrites',
        ctaLabel: 'Comment Rosa réécrit',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Vérifie en détail l’alignement entre brief et brouillon.',
        outputLabel: 'Rapport d’alignement',
        ctaLabel: 'Comment Ada aligne',
      },
      {
        id: 'approval_report',
        description: 'Assemble la relecture en une décision de validation.',
        outputLabel: 'Rapport d’approbation',
        ctaLabel: 'Comment Audrey approuve',
      },
    ],
    ctaH2: 'Relire le brouillon avant qu’il n’avance.',
    ctaPara:
      'Ajoutez Quinn à votre flux de travail, et chaque brouillon arrive chez le client ou dans le CMS déjà vérifié, avec les problèmes signalés avant de devenir des cycles de révision.',
    guidanceFooterLabel: 'STATUT DE RELECTURE',
    guidanceFooterValue: 'Vérifié · problèmes signalés',
  },
  section_rewrite: {
    seoTitle: 'Worker Réécriture de section | WordPresto',
    metaDescription:
      'Rosa réécrit les sections précises qui sont floues, minces ou hors brief, sans toucher au reste de la pièce. Pour des améliorations ciblées au niveau des sections, après relecture.',
    h1: 'Corriger la section faible sans réécrire toute la page.',
    heroPara1:
      'Quand les notes de relecture signalent une section précise comme mince, hors brief ou floue, la réponse n’est pas une réécriture complète de la page. Rosa réécrit la section précise qui a besoin d’être corrigée, en travaillant par rapport au brief et dans la voix du contenu environnant, sans perturber ce qui fonctionne.',
    heroPara2:
      'Pour les améliorations ciblées de sections après relecture de brouillon, les corrections en cours de production, et les demandes de révision précises des clients ou des éditeurs.',
    problemEyebrow: 'Où les sections font défaut aux pages',
    problemH2: 'Une seule section faible peut compromettre une page qui fonctionne par ailleurs.',
    problemPara:
      'Ce n’est presque jamais toute la page qui a besoin d’être réécrite. C’est généralement la troisième section qui enterre le point clé, ou la section de preuve qui n’a pas assez de matière, ou la conclusion qui ne conclut pas. Réécrire toute la page pour corriger une section gâche le travail déjà bon.',
    problemAnnotation: '↘ corriger la section, pas la page',
    beforeStamp: 'À reprendre',
    beforeHtml: `<p>Notre <span class="ba-strike">équipe a une grande expérience</span> dans ce domaine et nous <span class="ba-strike">sommes fiers</span> de fournir un <span class="ba-strike">travail de grande qualité</span>. Nous avons <span class="ba-strike">de nombreux clients satisfaits</span> qui seraient heureux de <span class="ba-strike">nous recommander</span>.</p>`,
    beforeTags: ['Affirmations vagues', 'Aucun élément précis', 'Ton hors brief'],
    beforeNote: 'cette section ne sert à rien',
    afterStamp: 'Réécrite',
    afterHtml: `<p>Nous avons réduit les cycles de révision de 40 % sur douze clients d&rsquo;agence l&rsquo;an dernier, grâce à des <span class="ba-hl">flux structurés du brief au brouillon</span> que la plupart des équipes peuvent mettre en place en moins de deux semaines.</p>`,
    afterTags: ['Précise', 'Sur le brief', 'Mérite sa place'],
    afterNote: 'maintenant cette section fonctionne',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un éditeur de sections qui corrige ce qui doit l’être sans toucher au reste.',
    helpsPara:
      'Rosa réécrit au niveau de la section : le paragraphe précis, le bloc de preuve faible, l’introduction qui ne fonctionne pas. Pas de réécriture de la page entière, pas de perturbation des sections qui fonctionnent.',
    checks: [
      'Si la section remplit l’objectif qu’elle affiche',
      'Si elle correspond au brief et au ton environnant',
      'Si elle mérite sa place dans la structure de la page',
    ],
    improves: [
      'La clarté et la précision de la section',
      'L’alignement de ton de la section avec le reste de la pièce',
      'La longueur et l’économie de la section',
    ],
    prepares: [
      'Une section réécrite, prête à intégrer',
      'Des notes de section pour l’éditeur',
      'Une confirmation d’alignement au brief',
    ],
    surfaces: [
      'Les sections où une réécriture ne suffit pas et où un changement structurel est nécessaire',
      'Les informations manquantes que le rédacteur doit fournir',
      'Les conflits de brief à l’origine du problème de section',
    ],
    ioH2: 'Ce à partir de quoi Rosa travaille, et ce qu’elle produit.',
    worksFrom: [
      'La section précise à réécrire',
      'Brief de contenu d’origine',
      'Notes de relecture',
      'Charte de voix de marque',
      'Contexte de la page environnante',
    ],
    produces: [
      'Section réécrite',
      'Notes d’édition de section',
      'Vérification d’alignement au brief',
      'Notes de transfert pour l’éditeur',
    ],
    scenarios: [
      {
        title: 'Une relecture a signalé la section de preuve comme trop mince.',
        description:
          'Rosa réécrit cette section avec des éléments plus précis, sans rien changer autour.',
      },
      {
        title: 'Un client a demandé qu’une section soit revue après validation.',
        description:
          'Elle réécrit la section précise en fonction du retour client sans rouvrir le reste de la pièce.',
      },
      {
        title: 'L’introduction ne correspond pas à la page décrite par le brief.',
        description:
          'Une réécriture ciblée de l’intro réaligne l’ouverture de la page sans révision complète.',
      },
      {
        title: 'Un brouillon IA où certaines sections sont bonnes et une clairement pas.',
        description:
          'Rosa corrige la section faible et laisse les autres en place.',
      },
      {
        title: 'Un article long où le tiers central perd son élan.',
        description:
          'Une réécriture au niveau section du milieu faible remet la pièce sur les rails.',
      },
      {
        title: 'Un rédacteur qui a produit un brouillon solide mais a buté sur le call-to-action.',
        description:
          'Une réécriture de section est plus rapide et meilleure que de renvoyer toute la pièce.',
      },
    ],
    boundaryH2: 'Rosa réécrit des sections. Les éditeurs approuvent les changements.',
    boundaryPara:
      'Une section réécrite est une option de remplacement, pas une édition finale. Rosa produit la version révisée ; qu’elle soit intégrée, ajustée ou renvoyée relève d’une décision éditoriale.',
    boundaryChecklist: [
      'Rosa réécrit des sections, elle ne les publie jamais.',
      'Les sections réécrites sont présentées pour relecture éditoriale.',
      'Le périmètre se limite à la section signalée, sauf instruction contraire.',
      'Les réécritures de section soutiennent le brief, pas la préférence du Worker.',
    ],
    willNot: [
      { color: 'red', text: 'Réécrire au-delà de la section convenue' },
      { color: 'red', text: 'Publier des changements directement' },
      { color: 'amber', text: 'Modifier le périmètre du brief' },
    ],
    relatedH2: 'Les Workers avec qui Rosa travaille.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Relit le brouillon complet et signale les sections à retravailler.',
        outputLabel: 'Notes de relecture',
        ctaLabel: 'Comment Quinn relit',
      },
      {
        id: 'readability',
        description: 'Améliore le fil et la clarté après les réécritures de section.',
        outputLabel: 'Brouillon amélioré',
        ctaLabel: 'Comment Priya améliore',
      },
      {
        id: 'brief_draft_alignment',
        description: 'Vérifie que la section réécrite s’aligne sur le brief.',
        outputLabel: 'Rapport d’alignement',
        ctaLabel: 'Comment Ada vérifie',
      },
    ],
    ctaH2: 'Corriger la section faible sans réécrire toute la page.',
    ctaPara:
      'Ajoutez Rosa à votre flux de travail, et les corrections ciblées de section se font vite, avec précision et sans perturber ce qui fonctionne déjà.',
    guidanceFooterLabel: 'STATUT DE SECTION',
    guidanceFooterValue: 'Réécrite · prête pour l’éditeur',
  },
  approval_report: {
    seoTitle: 'Worker Rapport d’approbation | WordPresto',
    metaDescription:
      'Audrey résume ce qui est prêt, ce qui a besoin d’attention et ce qui ne doit pas avancer, pour que les humains puissent prendre une décision de validation en confiance.',
    h1: 'Rendre l’approbation plus fiable.',
    heroPara1:
      'Les décisions d’approbation prises sans une image claire de ce qui est prêt tournent souvent mal de deux façons : on approuve ce qui n’aurait pas dû l’être, ou on bloque ce qui était prêt à avancer. Audrey assemble un rapport d’approbation structuré pour que la personne qui prend la décision de validation ait vraiment l’information dont elle a besoin.',
    heroPara2:
      'Pour les directeurs éditoriaux, les chefs de projet, les gestionnaires de compte et toute personne qui doit prendre une décision d’approbation en confiance sans lire chaque brouillon ligne par ligne.',
    problemEyebrow: 'Où l’approbation s’effondre',
    problemH2: 'L’approbation n’est fiable que lorsque celui qui approuve a la bonne information.',
    problemPara:
      'La plupart des problèmes d’approbation sont des problèmes d’information. La personne qui valide n’a pas de vue claire sur ce qui a été relu et ce qui ne l’a pas été, ou elle lit chaque brouillon elle-même faute de synthèse. Dans les deux cas, cela prend plus de temps que nécessaire et les décisions sont moins sûres qu’elles ne devraient l’être.',
    problemAnnotation: '↘ approuver sans deviner',
    beforeStamp: 'Aucun rapport',
    beforeHtml: `<p><span class="ba-strike">Voici les 14 brouillons</span> pour approbation. Certains ont été relus, <span class="ba-strike">pas sûr lesquels</span>. Il y a des <span class="ba-strike">notes dans le dossier partagé</span> quelque part. Dites-nous <span class="ba-strike">si vous êtes d&rsquo;accord pour approuver</span>.</p>`,
    beforeTags: ['Aucune synthèse', 'Aucun statut clair', 'Celui qui approuve doit deviner'],
    beforeNote: 'personne ne peut approuver ça en confiance',
    afterStamp: 'Rapport prêt',
    afterHtml: `<p><span class="ba-hl">9 pièces prêtes pour validation. 3 ont besoin d&rsquo;une révision mineure avant approbation. 2 signalées pour relecture éditoriale</span>, avec les problèmes précis notés et les prochaines étapes recommandées pour chacune.</p>`,
    afterTags: ['Statut clair', 'Signalements précis', 'Celui qui approuve a tout ce qu’il faut'],
    afterNote: 'l’approbation peut avoir lieu maintenant',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Un rapport qui donne aux personnes qui approuvent une vue claire, pas un tas de brouillons.',
    helpsPara:
      'Audrey assemble tout ce dont la personne qui approuve a besoin dans un rapport structuré : ce qui est prêt, ce qui ne l’est pas, quels sont les problèmes précis, et ce qui doit se passer ensuite. Les décisions de validation deviennent plus rapides et plus sûres.',
    checks: [
      'Si chaque pièce a passé les étapes de relecture requises',
      'Si les problèmes en suspens sont clairement documentés',
      'Si un risque est signalé avant l’approbation',
    ],
    improves: [
      'La vitesse du processus d’approbation en supprimant l’ambiguïté',
      'La confiance dans l’approbation en faisant remonter la bonne information',
      'La documentation de validation pour l’audit et la référence',
    ],
    prepares: [
      'Un rapport d’approbation structuré',
      'Un statut prêt / non prêt clair pour chaque pièce',
      'Des prochaines étapes précises pour tout ce qui n’est pas encore approuvé',
    ],
    surfaces: [
      'Le contenu qui a besoin de plus de relecture avant validation',
      'Les problèmes de conformité ou de risque à résoudre en priorité',
      'Les pièces bloquées par une information manquante',
    ],
    ioH2: 'Ce à partir de quoi Audrey travaille, et ce qu’elle produit.',
    worksFrom: [
      'Notes de relecture qualité du brouillon',
      'Signalements de risque et de conformité',
      'Rapports d’alignement au brief',
      'Critères d’approbation actuels',
      'Statut du contenu sur le projet',
    ],
    produces: [
      'Rapport d’approbation structuré',
      'Classification prêt / à surveiller / non prêt',
      'Notes de problèmes précis avec prochaines étapes',
      'Documentation de validation',
      'Notes de transfert pour le CMS ou la publication',
    ],
    scenarios: [
      {
        title: 'Un lot de 20 contenus qui a besoin de la validation d’un directeur pour vendredi.',
        description:
          'Audrey produit un rapport que le directeur peut relire en 20 minutes plutôt qu’en 2 heures.',
      },
      {
        title: 'Un client qui relit une migration de site avant le lancement.',
        description:
          'Le rapport d’approbation donne aux clients une vue claire de ce qui a été relu, ce qui est prêt, et ce qui reste en suspens.',
      },
      {
        title: 'Un programme de contenu sensible en conformité.',
        description:
          'Audrey suit quelles pièces ont passé la relecture de conformité et signale celles qui ne l’ont pas fait.',
      },
      {
        title: 'Une agence où les décisions d’approbation sont incohérentes.',
        description:
          'Un rapport structuré crée un standard d’approbation qui s’applique à chaque projet.',
      },
      {
        title: 'Un projet bloqué à l’approbation sans que personne ne sache pourquoi.',
        description:
          'Le rapport identifie exactement ce qui bloque chaque pièce et ce qu’il faut faire pour la faire avancer.',
      },
      {
        title: 'Plusieurs parties prenantes avec des critères d’approbation différents.',
        description:
          'Un seul rapport cartographie tous les critères et montre le statut de chaque pièce par rapport à chaque exigence.',
      },
    ],
    boundaryH2: 'Audrey fait le rapport. Les humains approuvent.',
    boundaryPara:
      'L’approbation est une décision humaine. Audrey fournit l’information structurée qui rend cette décision fiable. Le mot final, et la responsabilité qui va avec, reviennent toujours à une personne.',
    boundaryChecklist: [
      'Audrey fait des rapports de statut, elle n’approuve jamais le contenu elle-même.',
      'Les rapports d’approbation sont structurés pour la personne désignée qui approuve.',
      'Les signalements de risque et de conformité sont inclus, jamais filtrés.',
      'Le rapport soutient le jugement d’approbation, il ne le remplace pas.',
    ],
    willNot: [
      { color: 'red', text: 'Approuver ou valider le contenu' },
      { color: 'red', text: 'Contourner des signalements de conformité' },
      { color: 'amber', text: 'Marquer un contenu comme prêt sans preuve' },
    ],
    relatedH2: 'Les Workers avec qui Audrey travaille.',
    relatedWorkerIds: [
      {
        id: 'draft_quality_reviewer',
        description: 'Fournit la relecture qualité qui alimente le rapport d’approbation.',
        outputLabel: 'Notes de relecture',
        ctaLabel: 'Comment Quinn relit',
      },
      {
        id: 'editorial_risk_claims',
        description: 'Signale les problèmes de conformité et de risque avant l’approbation.',
        outputLabel: 'Rapport de risque & conformité',
        ctaLabel: 'Comment Vera signale les risques',
      },
      {
        id: 'cms_handoff',
        description: 'Prend le contenu approuvé et le prépare pour le transfert au CMS.',
        outputLabel: 'Pack de transfert',
        ctaLabel: 'Comment Ravi fait le transfert',
      },
    ],
    ctaH2: 'Rendre l’approbation plus fiable.',
    ctaPara:
      'Ajoutez Audrey à votre flux de travail, et chaque décision d’approbation se prend avec une vue claire et complète de ce qui est prêt et de ce qui ne l’est pas.',
    guidanceFooterLabel: 'STATUT D’APPROBATION',
    guidanceFooterValue: 'Prêt pour validation humaine',
  },
  readability: {
    seoTitle: 'Worker Lisibilité | WordPresto',
    metaDescription:
      'Priya resserre les phrases, simplifie la structure et améliore le fil pour que le contenu se lise clairement pour son audience visée. Pour les brouillons corrects mais plus difficiles à lire que nécessaire.',
    h1: 'Rendre un bon contenu plus facile à lire.',
    heroPara1:
      'Un contenu peut être factuellement exact, bien structuré et sur le brief, et rester plus difficile à lire que nécessaire. Priya resserre les phrases, découpe les paragraphes denses, retire les précautions oratoires inutiles et améliore le fil, sans changer le sens ni perdre la voix.',
    heroPara2:
      'Pour les brouillons prêts sur le fond mais qui ont besoin d’une passe de lisibilité avant la relecture ou la livraison.',
    problemEyebrow: 'Où la lisibilité échoue',
    problemH2: 'Un contenu dense et correct perd quand même des lecteurs.',
    problemPara:
      'La plupart des problèmes de lisibilité ne viennent pas des mots ; ils viennent de la longueur des phrases, de la densité des paragraphes et du rapport entre précautions et affirmations. Un lecteur qui abandonne au troisième paragraphe n’a pas lu le contenu, aussi exact ait-il été.',
    problemAnnotation: '↘ lisible veut dire vraiment lu',
    beforeStamp: 'Difficile à lire',
    beforeHtml: `<p>Dans le contexte <span class="ba-strike">du paysage numérique actuel où</span> de nombreuses organisations <span class="ba-strike">cherchent de plus en plus à tirer parti</span> des outils disponibles, il est important de <span class="ba-strike">garder à l&rsquo;esprit que</span> l&rsquo;approche retenue aura <span class="ba-strike">inévitablement un impact</span> sur les résultats.</p>`,
    beforeTags: ['Trop long', 'Trop de précautions', 'Se lit comme évasif'],
    beforeNote: 'personne ne lira ça jusqu’au bout',
    afterStamp: 'Lisible',
    afterHtml: `<p>Les outils que vous utilisez influencent vos résultats. <span class="ba-hl">Choisir la bonne approche est la décision qui compte le plus</span>, et c&rsquo;est généralement celle à laquelle les équipes consacrent le moins de temps.</p>`,
    afterTags: ['Court et direct', 'Clair', 'Se lit naturellement'],
    afterNote: 'cette version est lue',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une passe de lisibilité qui fait vraiment lire le contenu.',
    helpsPara:
      'Priya fait le travail au niveau de la phrase et du paragraphe qui transforme un contenu techniquement correct en quelque chose qu’un lecteur termine. Pas une réécriture ; une passe de resserrement qui retire tout ce qui rend la lecture plus difficile.',
    checks: [
      'La longueur des phrases par rapport à l’audience visée',
      'La densité des paragraphes et la facilité de balayage',
      'Les précautions et atténuations inutiles',
    ],
    improves: [
      'La structure des phrases pour qu’elles se lisent naturellement',
      'La longueur des paragraphes et l’espace de respiration',
      'Les phrases d’ouverture pour que chaque paragraphe démarre par le point clé',
    ],
    prepares: [
      'Un brouillon amélioré avec une passe de lisibilité appliquée',
      'Des notes de lisibilité pour l’éditeur',
      'Un contenu prêt pour la relecture finale',
    ],
    surfaces: [
      'Les sections où le sens a été sacrifié pour la densité',
      'Les passages qui ont besoin d’informations supplémentaires pour avoir du sens',
      'Les décalages de niveau entre le contenu et le lecteur',
    ],
    ioH2: 'Ce à partir de quoi Priya travaille, et ce qu’elle produit.',
    worksFrom: [
      'Brouillon existant',
      'Définition de l’audience',
      'Charte de voix de marque',
      'Cible de lisibilité ou note du brief',
      'Notes de relecture',
    ],
    produces: [
      'Brouillon amélioré',
      'Notes de la passe de lisibilité',
      'Améliorations précises de phrases et de paragraphes',
      'Notes de transfert pour l’éditeur',
    ],
    scenarios: [
      {
        title: 'Une page produit technique écrite par un ingénieur.',
        description:
          'Priya traduit sans niveler par le bas : clair pour l’audience visée, toujours exact.',
      },
      {
        title: 'Un article long dense d’un bout à l’autre.',
        description:
          'Une passe de lisibilité crée de l’espace de respiration et rend la pièce lisible d’une traite.',
      },
      {
        title: 'Un contenu produit par IA correct grammaticalement mais difficile à balayer.',
        description:
          'Elle améliore le fil et le rythme des phrases sans changer la structure.',
      },
      {
        title: 'Un document de conformité que le service juridique doit lire.',
        description:
          'Les améliorations de lisibilité le rendent plus rapide à lire et plus facile à exploiter.',
      },
      {
        title: 'Un client qui dit sans cesse que le contenu « paraît lourd ».',
        description:
          'Une passe de lisibilité résout généralement ça sans changement structurel.',
      },
      {
        title: 'Une page de destination avec un fort taux de rebond.',
        description:
          'La lisibilité fait souvent toute la différence entre une page qu’on lit et une page qu’on quitte.',
      },
    ],
    boundaryH2: 'Priya améliore la lisibilité. Les rédacteurs et les éditeurs gardent la voix.',
    boundaryPara:
      'Une passe de lisibilité améliore le fil sans changer le sens ni écraser les choix de voix. Si une phrase est délibérément complexe pour des raisons stylistiques, Priya le signale plutôt que de l’aplatir.',
    boundaryChecklist: [
      'Priya améliore la lisibilité, elle ne change jamais le sens.',
      'Les choix stylistiques qui ressemblent à des erreurs sont signalés, pas changés.',
      'Les changements de lisibilité sont documentés pour relecture éditoriale.',
      'La lisibilité soutient la voix, elle ne la supplante pas.',
    ],
    willNot: [
      { color: 'red', text: 'Changer le sens ou l’intention' },
      { color: 'red', text: 'Passer outre des choix de style délibérés' },
      { color: 'amber', text: 'Simplifier un contenu spécialisé sans indication' },
    ],
    relatedH2: 'Les Workers avec qui Priya travaille.',
    relatedWorkerIds: [
      {
        id: 'draft_rewrite',
        description: 'Produit le brouillon façonné que suit la passe de lisibilité.',
        outputLabel: 'Brouillon façonné',
        ctaLabel: 'Comment Ellis rédige',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Relit le brouillon amélioré pour la clarté et la préparation.',
        outputLabel: 'Notes de relecture',
        ctaLabel: 'Comment Quinn relit',
      },
      {
        id: 'section_rewrite',
        description: 'Réécrit les sections qui ont besoin de plus qu’une passe de lisibilité.',
        outputLabel: 'Sections réécrites',
        ctaLabel: 'Comment Rosa réécrit',
      },
    ],
    ctaH2: 'Rendre un bon contenu plus facile à lire.',
    ctaPara:
      'Ajoutez Priya à votre flux de travail, et chaque brouillon reçoit une passe de lisibilité avant d’atteindre la relecture ou la livraison.',
    guidanceFooterLabel: 'LISIBILITÉ',
    guidanceFooterValue: 'Améliorée · prête pour relecture',
  },
  brief_draft_alignment: {
    seoTitle: 'Worker Alignement brief-brouillon | WordPresto',
    metaDescription:
      'Ada vérifie que le brouillon remplit vraiment le brief, en faisant remonter les manques, les écarts et les sections désalignées avant qu’ils n’aillent plus loin.',
    h1: 'Vérifier si le brouillon suit vraiment le brief.',
    heroPara1:
      'Un brouillon qui a l’air bon mais ne suit pas le brief est un problème qui remontera en relecture ou, pire, à la livraison client. Ada compare le brouillon final au brief d’origine, section par section, et signale tout manque, écart de périmètre ou désalignement avant que le brouillon n’avance.',
    heroPara2:
      'Pour les étapes de relecture de brouillon, les programmes de contenu très cadrés par brief, et tout projet où l’adhésion au brief doit être vérifiée avant la livraison.',
    problemEyebrow: 'Où les brouillons s’éloignent des briefs',
    problemH2: 'Un brouillon qui suit le brief est l’exception, pas la règle.',
    problemPara:
      'Les briefs dérivent pendant la production. Les rédacteurs interprètent différemment. Les outils IA comblent les manques avec leurs propres valeurs par défaut. Au moment où un brouillon arrive en relecture, il couvre souvent un terrain différent de celui du brief. La seule façon de le repérer, c’est de vérifier.',
    problemAnnotation: '↘ vérifier le brief, pas seulement le brouillon',
    beforeStamp: 'Non vérifié',
    beforeHtml: `<p>Le brouillon <span class="ba-strike">a l&rsquo;air bon</span> pour nous. Il couvre les <span class="ba-strike">points principaux</span> et fait la <span class="ba-strike">bonne longueur</span>. Nous pensons qu&rsquo;il <span class="ba-strike">respecte le brief</span> même si nous ne l&rsquo;avons pas <span class="ba-strike">vérifié section par section</span>.</p>`,
    beforeTags: ['Non validé', 'Écart au brief possible', 'Manques non repérés'],
    beforeNote: 'ça échouera à la relecture client',
    afterStamp: 'Vérifié',
    afterHtml: `<p>La section deux s&rsquo;écarte de l&rsquo;audience visée. La section de preuve manque. L&rsquo;ouverture s&rsquo;aligne bien. <span class="ba-hl">Trois écarts précis identifiés</span> par rapport au brief, chacun avec une correction claire.</p>`,
    afterTags: ['Brief vérifié', 'Écarts signalés', 'Corrections précises'],
    afterNote: 'maintenant l’équipe sait quoi corriger',
    helpsEyebrow: 'Comment ce Worker aide',
    helpsH2: 'Une vérification de brief qui repère les écarts avant qu’ils ne deviennent un problème client.',
    helpsPara:
      'Ada fait la comparaison structurée entre brief et brouillon que la plupart des équipes sautent parce qu’elles vont trop vite. Un manque ou un écart repéré avant la livraison ne coûte rien. Repéré à la relecture client, il coûte des cycles de révision.',
    checks: [
      'Si chaque section du brief est présente et traitée',
      'Si l’audience et l’objectif sont maintenus tout au long',
      'Si l’angle et l’intention du brief survivent dans le brouillon',
    ],
    improves: [
      'Le rapport d’alignement au brief pour que les manques soient précis',
      'Les indications de révision pour que les corrections soient ciblées',
      'Les notes de transfert de brouillon pour que le rédacteur sache exactement quoi traiter',
    ],
    prepares: [
      'Un rapport d’alignement structuré',
      'Une comparaison section par section avec le brief',
      'Des notes de correction précises pour le rédacteur',
    ],
    surfaces: [
      'Les écarts de périmètre apparus pendant la production',
      'Les sections du brief interprétées différemment',
      'Le contenu manquant requis par le brief',
    ],
    ioH2: 'Ce à partir de quoi Ada travaille, et ce qu’elle produit.',
    worksFrom: [
      'Brief de contenu final',
      'Brouillon actuel',
      'Tout amendement de brief en cours de projet',
      'Notes de relecture',
      'Définitions d’audience et d’objectif',
    ],
    produces: [
      'Rapport d’alignement brief-brouillon',
      'Comparaison section par section',
      'Signalements de manques et d’écarts',
      'Notes de correction pour le rédacteur',
      'Transfert vers la relecture ou la révision',
    ],
    scenarios: [
      {
        title: 'Un brouillon réécrit en cours de projet qui a peut-être perdu son alignement au brief.',
        description:
          'Ada vérifie le brouillon actuel par rapport au brief final, indépendamment de l’historique des révisions.',
      },
      {
        title: 'Un programme de contenu où plusieurs rédacteurs ont travaillé sur le même brief.',
        description:
          'Elle vérifie chaque brouillon selon le même standard et identifie où les interprétations ont divergé.',
      },
      {
        title: 'Un brouillon généré par IA qui a utilisé le brief comme point de départ.',
        description:
          'Les outils IA comblent les manques avec des valeurs par défaut ; Ada identifie lesquelles ont remplacé des exigences du brief.',
      },
      {
        title: 'Un client qui vérifie les briefs avec soin avant d’approuver les brouillons.',
        description:
          'Un rapport d’alignement avant la livraison client permet à la relecture client de se concentrer sur les décisions créatives, pas sur la conformité au brief.',
      },
      {
        title: 'Un brief long avec de nombreuses exigences précises.',
        description:
          'Ada suit chaque exigence et confirme lesquelles sont remplies, partiellement remplies, ou manquantes.',
      },
      {
        title: 'Un cycle de révision qui a changé le périmètre du brief.',
        description:
          'Elle revérifie l’alignement après les changements de brief pour confirmer que le brouillon a été mis à jour en conséquence.',
      },
    ],
    boundaryH2: 'Ada vérifie l’alignement. Les rédacteurs et les éditeurs font les changements.',
    boundaryPara:
      'Un rapport d’alignement est une donnée d’entrée structurée pour la révision, pas une liste de changements obligatoires. Ada identifie ce qui ne correspond pas au brief ; le traiter, et comment, relève d’une décision du rédacteur et de l’éditeur.',
    boundaryChecklist: [
      'Ada vérifie l’alignement, elle ne réécrit jamais le contenu.',
      'Les constats d’alignement sont structurés pour la relecture éditoriale.',
      'Les sections de brief ambiguës sont signalées comme des questions, pas tranchées.',
      'L’alignement soutient le brief, il ne le change pas.',
    ],
    willNot: [
      { color: 'red', text: 'Réécrire ou éditer le contenu' },
      { color: 'red', text: 'Passer outre des amendements au brief convenus avec le client' },
      { color: 'amber', text: 'Marquer des manques comme mineurs sans avis éditorial' },
    ],
    relatedH2: 'Les Workers avec qui Ada travaille.',
    relatedWorkerIds: [
      {
        id: 'content_brief_builder',
        description: 'Construit le brief sur lequel Ada s’appuie pour vérifier.',
        outputLabel: 'Brief de contenu',
        ctaLabel: 'Comment Luca fait le brief',
      },
      {
        id: 'draft_quality_reviewer',
        description: 'Relit la qualité en parallèle de la vérification d’alignement.',
        outputLabel: 'Notes de relecture',
        ctaLabel: 'Comment Quinn relit',
      },
      {
        id: 'draft_rewrite',
        description: 'Réécrit le brouillon une fois les écarts d’alignement identifiés.',
        outputLabel: 'Brouillon façonné',
        ctaLabel: 'Comment Ellis réécrit',
      },
    ],
    ctaH2: 'Vérifier si le brouillon suit vraiment le brief.',
    ctaPara:
      'Ajoutez Ada à votre flux de travail, et chaque brouillon arrive en relecture avec une vérification d’alignement au brief déjà faite.',
    guidanceFooterLabel: 'STATUT D’ALIGNEMENT',
    guidanceFooterValue: 'Vérifié · écarts signalés',
  },
};
