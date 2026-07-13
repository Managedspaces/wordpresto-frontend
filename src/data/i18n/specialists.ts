import type { Locale } from '@/i18n/locales';
import type { TeamId } from '@/data/workerRegistry';

// Copy for /specialists/ (the hub) and the four team pages
// (/specialists/content-production/ etc.), across all 6 locales. Nav/footer
// strings come from src/data/i18n/common.ts; the "TEAM · N SPECIALIST(S)"
// eyebrow and chip label on the hub's team cards are shared with the
// homepage's specialist-bench section (src/data/i18n/home.ts) rather than
// duplicated here. Team names/summaries/CTAs come from
// src/data/workerRegistry.ts's getTeamMeta(id, locale).

export interface SpecialistsHubContent {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  note: string;
}

export interface SpecialistTeamContent {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  breadcrumbLabel: string;
  note: string;
}

export interface SpecialistsSharedContent {
  breadcrumbHub: string;
  teamDirectoryLabel: string;
  specialistRoleSingular: string;
  specialistRolePlural: string;
  viewProfile: string;
  profileComingSoon: string;
  planned: string;
}

export const specialistsHubContent: Record<Locale, SpecialistsHubContent> = {
  en: {
    seoTitle: 'The Word Presto specialist bench | WordPresto',
    metaDescription: 'Meet the four teams behind Emma: Content Production, SEO, Operations and Approval / Governance. Every specialist has a defined role, and every change still needs the Editor to approve it.',
    h1: 'The specialist bench behind Emma.',
    intro: 'Word Presto is not one generic AI writer. It is a bench of specialist Workers, organised into four teams, that Emma brings in at the right moment. Specialists review, draft and prepare. Only the Editor approves.',
    note: 'Emma coordinates all four teams from one editorial desk. Specialists review, draft, check and prepare, but nothing moves forward, and nothing publishes, without the Editor’s approval.',
  },
  pt: {
    seoTitle: 'A bancada de especialistas do Word Presto | WordPresto',
    metaDescription: 'Conhece as quatro equipas que trabalham com a Emma: Produção de Conteúdos, SEO, Operações e Aprovação / Governança. Cada especialista tem o seu papel definido, mas qualquer alteração precisa sempre da aprovação do Editor.',
    h1: 'A equipa de especialistas por detrás da Emma.',
    intro: 'O Word Presto não é um gerador de texto genérico. É uma bancada de Workers especializados, organizados em quatro equipas, que a Emma ativa no momento certo. Os especialistas revêm, escrevem e preparam. Só o Editor aprova.',
    note: 'A Emma coordena as quatro equipas a partir de uma única secretária editorial. Os especialistas revêm, escrevem, verificam e preparam, mas nada avança nem é publicado sem a aprovação do Editor.',
  },
  'pt-br': {
    seoTitle: 'A bancada de especialistas do Word Presto | WordPresto',
    metaDescription: 'Conheça as quatro equipes que trabalham com a Emma: Produção de Conteúdo, SEO, Operações e Aprovação / Governança. Cada especialista tem um papel bem definido, e qualquer alteração ainda precisa passar pelo Editor para ser aprovada.',
    h1: 'A equipe de especialistas que atua por trás da Emma.',
    intro: 'O Word Presto não é um escritor de IA genérico. É uma bancada de Workers especialistas, organizados em quatro equipes, que a Emma aciona no momento certo. Os especialistas revisam, escrevem e preparam. Só o Editor aprova.',
    note: 'A Emma coordena todas as quatro equipes a partir de uma única mesa editorial. Os especialistas revisam, escrevem, conferem e preparam, mas nada avança e nada é publicado sem a aprovação do Editor.',
  },
  es: {
    seoTitle: 'El banco de especialistas de Word Presto | WordPresto',
    metaDescription: 'Te presentamos a los cuatro equipos detrás de Emma: Producción de Contenidos, SEO, Operaciones y Aprobación/Gobernanza. Cada especialista tiene un rol definido, y cualquier cambio sigue necesitando la aprobación del Editor.',
    h1: 'El equipo de especialistas detrás de Emma.',
    intro: 'Word Presto no es un simple escritor de IA genérico. Es un banco de Workers especializados, organizados en cuatro equipos, a los que Emma convoca en el momento justo. Los especialistas revisan, redactan y preparan. Solo el Editor aprueba.',
    note: 'Emma coordina los cuatro equipos desde un solo escritorio editorial. Los especialistas revisan, redactan, verifican y preparan, pero nada avanza ni se publica sin la aprobación del Editor.',
  },
  de: {
    seoTitle: 'Die Word Presto Spezialisten-Werkbank | WordPresto',
    metaDescription: 'Lerne die vier Teams hinter Emma kennen: Content-Produktion, SEO, Operations und Freigabe/Governance. Jeder Spezialist hat eine klare Aufgabe, aber jede Änderung muss trotzdem vom Redakteur freigegeben werden.',
    h1: 'Die Spezialisten-Werkbank hinter Emma.',
    intro: 'Word Presto ist kein einzelner, generischer KI-Schreiber. Es ist eine Werkbank voller spezialisierter Worker, aufgeteilt in vier Teams, die Emma genau dann einsetzt, wenn sie gebraucht werden. Die Spezialisten prüfen, entwerfen und bereiten vor. Nur der Redakteur gibt frei.',
    note: 'Emma steuert alle vier Teams von einem Redaktionsplatz aus. Die Spezialisten prüfen, entwerfen, kontrollieren und bereiten vor – aber ohne die Freigabe des Redakteurs geht nichts weiter und nichts online.',
  },
  fr: {
    seoTitle: 'Le banc spécialisé Word Presto | WordPresto',
    metaDescription: 'Découvrez les quatre équipes qui travaillent sur Emma : Production de contenu, Référencement naturel (SEO), Opérations et Validation / Gouvernance. Chaque spécialiste a un rôle bien défini, et toute modification doit toujours être approuvée par le rédacteur en chef.',
    h1: 'L\'équipe de spécialistes qui soutient Emma.',
    intro: 'Word Presto n\'est pas un simple rédacteur IA générique. Il s\'agit d\'un groupe de Workers spécialisés, répartis en quatre équipes, qu\'Emma sollicite au moment opportun. Les spécialistes relisent, rédigent et préparent les textes. Seul le rédacteur en chef donne son accord final.',
    note: 'Emma coordonne les quatre équipes depuis une seule rédaction. Les spécialistes relisent, rédigent, vérifient et préparent les textes, mais rien n\'avance et rien n\'est publié sans l\'approbation du rédacteur en chef.',
  },
};

export const specialistTeamContent: Record<Locale, Record<TeamId, SpecialistTeamContent>> = {
  en: {
    content: {
      seoTitle: 'Content Production Team | WordPresto specialists',
      metaDescription: 'The Content Production Team plans, drafts, rewrites and proofs the copy, turning briefs into structured, ready content for the Editor to review.',
      h1: 'Content Production Team',
      intro: 'Plans, drafts, rewrites and proofs the copy, turning briefs into structured, ready content.',
      breadcrumbLabel: 'CONTENT PRODUCTION',
      note: 'Emma brings the Content Production Team in at the right stage of the workflow. Every draft, rewrite and proof they produce is for review; only the Editor can approve it to move forward.',
    },
    seo: {
      seoTitle: 'SEO Team | WordPresto specialists',
      metaDescription: 'The SEO Team works search intent, structure, technical signals, evidence and internal relationships into the content, not bolted on at the end.',
      h1: 'SEO Team',
      intro: 'Works search intent, structure, technical signals, evidence and internal relationships into the content, not bolted on at the end.',
      breadcrumbLabel: 'SEO',
      note: 'Emma brings the SEO Team in while content is still being shaped, not after. Their reviews and metadata drafts are findings for the writer and Editor to weigh, never automatic edits.',
    },
    operations: {
      seoTitle: 'Operations / Management | WordPresto specialists',
      metaDescription: 'Operations / Management coordinates the review flow and keeps every piece of work ready for a human decision.',
      h1: 'Operations / Management',
      intro: 'Coordinates the review flow and keeps every piece of work ready for a human decision.',
      breadcrumbLabel: 'OPERATIONS / MANAGEMENT',
      note: 'Operations / Management keeps the review queue moving so nothing sits waiting for no reason. Emma coordinates through them; the Editor still makes every approve, reject or defer decision.',
    },
    governance: {
      seoTitle: 'Approval / Governance Team | WordPresto specialists',
      metaDescription: 'The Approval / Governance Team checks risk, evidence, approval state and whether proposed changes are ready for the Editor.',
      h1: 'Approval / Governance Team',
      intro: 'Checks risk, evidence, approval state and whether proposed changes are ready for the Editor.',
      breadcrumbLabel: 'APPROVAL / GOVERNANCE',
      note: 'The Approval / Governance Team checks risk, evidence and approval state before anything is marked ready. Their findings inform the Editor; only the Editor gives final approval.',
    },
  },
  pt: {
    content: {
      seoTitle: 'Equipa de Produção de Conteúdo | Especialistas Word Presto',
      metaDescription: 'A Equipa de Produção de Conteúdo planeia, redige, reescreve e revê o texto, transformando briefings em conteúdo estruturado e pronto para o Editor rever.',
      h1: 'Equipa de Produção de Conteúdo',
      intro: 'Planeia, redige, reescreve e revê o texto, transformando briefings em conteúdo estruturado e pronto.',
      breadcrumbLabel: 'PRODUÇÃO DE CONTEÚDO',
      note: 'A Emma chama a Equipa de Produção de Conteúdo na fase certa do fluxo de trabalho. Cada rascunho, reescrita e revisão que produzem está sujeito a revisão; só o Editor pode aprová-lo para avançar.',
    },
    seo: {
      seoTitle: 'Equipa de SEO | Especialistas Word Presto',
      metaDescription: 'A Equipa de SEO trabalha a intenção de pesquisa, a estrutura, os sinais técnicos, as evidências e as relações internas no conteúdo, não como algo acrescentado no final.',
      h1: 'Equipa de SEO',
      intro: 'Trabalha a intenção de pesquisa, a estrutura, os sinais técnicos, as evidências e as relações internas no conteúdo, não como algo acrescentado no final.',
      breadcrumbLabel: 'SEO',
      note: 'A Emma chama a Equipa de SEO enquanto o conteúdo ainda está a ser moldado, não depois. As suas revisões e rascunhos de metadados são constatações para o redator e o Editor ponderarem, nunca edições automáticas.',
    },
    operations: {
      seoTitle: 'Operações / Gestão | Especialistas Word Presto',
      metaDescription: 'Operações / Gestão coordena o fluxo de revisão e mantém cada peça de trabalho pronta para uma decisão humana.',
      h1: 'Operações / Gestão',
      intro: 'Coordena o fluxo de revisão e mantém cada peça de trabalho pronta para uma decisão humana.',
      breadcrumbLabel: 'OPERAÇÕES / GESTÃO',
      note: 'Operações / Gestão mantém a fila de revisão em movimento, para que nada fique parado sem motivo. A Emma coordena através desta equipa; o Editor continua a tomar todas as decisões de aprovar, rejeitar ou adiar.',
    },
    governance: {
      seoTitle: 'Equipa de Aprovação / Governação | Especialistas Word Presto',
      metaDescription: 'A Equipa de Aprovação / Governação verifica o risco, as evidências, o estado de aprovação e se as alterações propostas estão prontas para o Editor.',
      h1: 'Equipa de Aprovação / Governação',
      intro: 'Verifica o risco, as evidências, o estado de aprovação e se as alterações propostas estão prontas para o Editor.',
      breadcrumbLabel: 'APROVAÇÃO / GOVERNAÇÃO',
      note: 'A Equipa de Aprovação / Governação verifica o risco, as evidências e o estado de aprovação antes de algo ser marcado como pronto. As suas conclusões informam o Editor; só o Editor dá a aprovação final.',
    },
  },
  'pt-br': {
    content: {
      seoTitle: 'Time de Produção de Conteúdo | Especialistas Word Presto',
      metaDescription: 'O Time de Produção de Conteúdo planeja, redige, reescreve e revisa o texto, transformando briefings em conteúdo estruturado e pronto para o Editor revisar.',
      h1: 'Time de Produção de Conteúdo',
      intro: 'Planeja, redige, reescreve e revisa o texto, transformando briefings em conteúdo estruturado e pronto.',
      breadcrumbLabel: 'PRODUÇÃO DE CONTEÚDO',
      note: 'A Emma chama o Time de Produção de Conteúdo na etapa certa do fluxo de trabalho. Cada rascunho, reescrita e revisão que produzem está sujeito a revisão; só o Editor pode aprová-lo para avançar.',
    },
    seo: {
      seoTitle: 'Time de SEO | Especialistas Word Presto',
      metaDescription: 'O Time de SEO trabalha a intenção de busca, a estrutura, os sinais técnicos, as evidências e as relações internas no conteúdo, não como algo adicionado no final.',
      h1: 'Time de SEO',
      intro: 'Trabalha a intenção de busca, a estrutura, os sinais técnicos, as evidências e as relações internas no conteúdo, não como algo adicionado no final.',
      breadcrumbLabel: 'SEO',
      note: 'A Emma chama o Time de SEO enquanto o conteúdo ainda está sendo moldado, não depois. Suas revisões e rascunhos de metadados são constatações para o redator e o Editor avaliarem, nunca edições automáticas.',
    },
    operations: {
      seoTitle: 'Operações / Gestão | Especialistas Word Presto',
      metaDescription: 'Operações / Gestão coordena o fluxo de revisão e mantém cada trabalho pronto para uma decisão humana.',
      h1: 'Operações / Gestão',
      intro: 'Coordena o fluxo de revisão e mantém cada trabalho pronto para uma decisão humana.',
      breadcrumbLabel: 'OPERAÇÕES / GESTÃO',
      note: 'Operações / Gestão mantém a fila de revisão em movimento, para que nada fique parado sem motivo. A Emma coordena por meio desse time; o Editor continua tomando todas as decisões de aprovar, rejeitar ou adiar.',
    },
    governance: {
      seoTitle: 'Time de Aprovação / Governança | Especialistas Word Presto',
      metaDescription: 'O Time de Aprovação / Governança verifica o risco, as evidências, o status de aprovação e se as mudanças propostas estão prontas para o Editor.',
      h1: 'Time de Aprovação / Governança',
      intro: 'Verifica o risco, as evidências, o status de aprovação e se as mudanças propostas estão prontas para o Editor.',
      breadcrumbLabel: 'APROVAÇÃO / GOVERNANÇA',
      note: 'O Time de Aprovação / Governança verifica o risco, as evidências e o status de aprovação antes que algo seja marcado como pronto. Suas conclusões informam o Editor; só o Editor dá a aprovação final.',
    },
  },
  es: {
    content: {
      seoTitle: 'Equipo de Producción de Contenido | Especialistas Word Presto',
      metaDescription: 'El Equipo de Producción de Contenido planifica, redacta, reescribe y corrige el texto, convirtiendo briefs en contenido estructurado y listo para que el Editor lo revise.',
      h1: 'Equipo de Producción de Contenido',
      intro: 'Planifica, redacta, reescribe y corrige el texto, convirtiendo briefs en contenido estructurado y listo.',
      breadcrumbLabel: 'PRODUCCIÓN DE CONTENIDO',
      note: 'Emma convoca al Equipo de Producción de Contenido en la fase adecuada del flujo de trabajo. Cada borrador, reescritura y corrección que producen está sujeto a revisión; solo el Editor puede aprobarlo para avanzar.',
    },
    seo: {
      seoTitle: 'Equipo de SEO | Especialistas Word Presto',
      metaDescription: 'El Equipo de SEO integra la intención de búsqueda, la estructura, las señales técnicas, la evidencia y las relaciones internas en el contenido, no como algo añadido al final.',
      h1: 'Equipo de SEO',
      intro: 'Integra la intención de búsqueda, la estructura, las señales técnicas, la evidencia y las relaciones internas en el contenido, no como algo añadido al final.',
      breadcrumbLabel: 'SEO',
      note: 'Emma convoca al Equipo de SEO mientras el contenido todavía se está definiendo, no después. Sus revisiones y borradores de metadatos son hallazgos para que el redactor y el Editor los valoren, nunca ediciones automáticas.',
    },
    operations: {
      seoTitle: 'Operaciones / Gestión | Especialistas Word Presto',
      metaDescription: 'Operaciones / Gestión coordina el flujo de revisión y mantiene cada pieza de trabajo lista para una decisión humana.',
      h1: 'Operaciones / Gestión',
      intro: 'Coordina el flujo de revisión y mantiene cada pieza de trabajo lista para una decisión humana.',
      breadcrumbLabel: 'OPERACIONES / GESTIÓN',
      note: 'Operaciones / Gestión mantiene en movimiento la cola de revisión, para que nada quede esperando sin motivo. Emma coordina a través de este equipo; el Editor sigue tomando todas las decisiones de aprobar, rechazar o posponer.',
    },
    governance: {
      seoTitle: 'Equipo de Aprobación / Gobernanza | Especialistas Word Presto',
      metaDescription: 'El Equipo de Aprobación / Gobernanza comprueba el riesgo, la evidencia, el estado de aprobación y si los cambios propuestos están listos para el Editor.',
      h1: 'Equipo de Aprobación / Gobernanza',
      intro: 'Comprueba el riesgo, la evidencia, el estado de aprobación y si los cambios propuestos están listos para el Editor.',
      breadcrumbLabel: 'APROBACIÓN / GOBERNANZA',
      note: 'El Equipo de Aprobación / Gobernanza comprueba el riesgo, la evidencia y el estado de aprobación antes de marcar algo como listo. Sus hallazgos informan al Editor; solo el Editor da la aprobación final.',
    },
  },
  de: {
    content: {
      seoTitle: 'Content-Produktions-Team | Word Presto Spezialisten',
      metaDescription: 'Das Content-Produktions-Team plant, entwirft, überarbeitet und lektoriert den Text und verwandelt Briefings in strukturierten, fertigen Content für die Prüfung durch den Editor.',
      h1: 'Content-Produktions-Team',
      intro: 'Plant, entwirft, überarbeitet und lektoriert den Text und verwandelt Briefings in strukturierten, fertigen Content.',
      breadcrumbLabel: 'CONTENT-PRODUKTION',
      note: 'Emma zieht das Content-Produktions-Team zur richtigen Phase des Workflows hinzu. Jeder Entwurf, jede Überarbeitung und jedes Lektorat, das sie produzieren, ist zur Prüfung bestimmt; nur der Editor kann es zur Weiterleitung freigeben.',
    },
    seo: {
      seoTitle: 'SEO-Team | Word Presto Spezialisten',
      metaDescription: 'Das SEO-Team arbeitet Suchintention, Struktur, technische Signale, Belege und interne Beziehungen in den Content ein, nicht nachträglich angeflanscht.',
      h1: 'SEO-Team',
      intro: 'Arbeitet Suchintention, Struktur, technische Signale, Belege und interne Beziehungen in den Content ein, nicht nachträglich angeflanscht.',
      breadcrumbLabel: 'SEO',
      note: 'Emma zieht das SEO-Team hinzu, während der Content noch geformt wird, nicht danach. Ihre Prüfungen und Metadaten-Entwürfe sind Erkenntnisse, die der Autor und der Editor abwägen, niemals automatische Änderungen.',
    },
    operations: {
      seoTitle: 'Betrieb / Management | Word Presto Spezialisten',
      metaDescription: 'Betrieb / Management koordiniert den Prüfablauf und hält jede Arbeit bereit für eine menschliche Entscheidung.',
      h1: 'Betrieb / Management',
      intro: 'Koordiniert den Prüfablauf und hält jede Arbeit bereit für eine menschliche Entscheidung.',
      breadcrumbLabel: 'BETRIEB / MANAGEMENT',
      note: 'Betrieb / Management hält die Prüfwarteschlange in Bewegung, damit nichts ohne Grund liegen bleibt. Emma koordiniert über dieses Team; der Editor trifft weiterhin jede Entscheidung über Freigabe, Ablehnung oder Aufschub.',
    },
    governance: {
      seoTitle: 'Freigabe- / Governance-Team | Word Presto Spezialisten',
      metaDescription: 'Das Freigabe- / Governance-Team prüft Risiko, Belege, Freigabestatus und ob vorgeschlagene Änderungen bereit für den Editor sind.',
      h1: 'Freigabe- / Governance-Team',
      intro: 'Prüft Risiko, Belege, Freigabestatus und ob vorgeschlagene Änderungen bereit für den Editor sind.',
      breadcrumbLabel: 'FREIGABE / GOVERNANCE',
      note: 'Das Freigabe- / Governance-Team prüft Risiko, Belege und Freigabestatus, bevor etwas als bereit markiert wird. Ihre Erkenntnisse informieren den Editor; nur der Editor erteilt die endgültige Freigabe.',
    },
  },
  fr: {
    content: {
      seoTitle: 'Équipe de production de contenu | Spécialistes Word Presto',
      metaDescription: 'L’équipe de production de contenu planifie, rédige, réécrit et relit le texte, transformant les briefs en contenu structuré et prêt pour la relecture de l’éditeur.',
      h1: 'Équipe de production de contenu',
      intro: 'Planifie, rédige, réécrit et relit le texte, transformant les briefs en contenu structuré et prêt.',
      breadcrumbLabel: 'PRODUCTION DE CONTENU',
      note: 'Emma mobilise l’équipe de production de contenu à la bonne étape du flux de travail. Chaque brouillon, réécriture et relecture qu’elle produit est soumis à relecture ; seul l’éditeur peut l’approuver pour qu’il avance.',
    },
    seo: {
      seoTitle: 'Équipe SEO | Spécialistes Word Presto',
      metaDescription: 'L’équipe SEO intègre l’intention de recherche, la structure, les signaux techniques, les preuves et les relations internes dans le contenu, pas ajoutés à la fin.',
      h1: 'Équipe SEO',
      intro: 'Intègre l’intention de recherche, la structure, les signaux techniques, les preuves et les relations internes dans le contenu, pas ajoutés à la fin.',
      breadcrumbLabel: 'SEO',
      note: 'Emma mobilise l’équipe SEO pendant que le contenu est encore en cours de construction, pas après. Ses relectures et brouillons de métadonnées sont des constats que le rédacteur et l’éditeur évaluent, jamais des modifications automatiques.',
    },
    operations: {
      seoTitle: 'Opérations / Management | Spécialistes Word Presto',
      metaDescription: 'Opérations / Management coordonne le flux de relecture et maintient chaque tâche prête pour une décision humaine.',
      h1: 'Opérations / Management',
      intro: 'Coordonne le flux de relecture et maintient chaque tâche prête pour une décision humaine.',
      breadcrumbLabel: 'OPÉRATIONS / MANAGEMENT',
      note: 'Opérations / Management maintient la file de relecture en mouvement, pour que rien ne reste en attente sans raison. Emma coordonne à travers cette équipe ; l’éditeur continue de prendre chaque décision d’approbation, de rejet ou de report.',
    },
    governance: {
      seoTitle: 'Équipe Approbation / Gouvernance | Spécialistes Word Presto',
      metaDescription: 'L’équipe Approbation / Gouvernance vérifie le risque, les preuves, l’état d’approbation et si les modifications proposées sont prêtes pour l’éditeur.',
      h1: 'Équipe Approbation / Gouvernance',
      intro: 'Vérifie le risque, les preuves, l’état d’approbation et si les modifications proposées sont prêtes pour l’éditeur.',
      breadcrumbLabel: 'APPROBATION / GOUVERNANCE',
      note: 'L’équipe Approbation / Gouvernance vérifie le risque, les preuves et l’état d’approbation avant qu’un élément soit marqué comme prêt. Ses constats informent l’éditeur ; seul l’éditeur donne l’approbation finale.',
    },
  },
};

export const specialistsSharedContent: Record<Locale, SpecialistsSharedContent> = {
  en: {
    breadcrumbHub: 'SPECIALISTS',
    teamDirectoryLabel: 'TEAM DIRECTORY',
    specialistRoleSingular: 'SPECIALIST ROLE',
    specialistRolePlural: 'SPECIALIST ROLES',
    viewProfile: 'View profile',
    profileComingSoon: 'Profile page coming soon',
    planned: 'Planned',
  },
  pt: {
    breadcrumbHub: 'ESPECIALISTAS',
    teamDirectoryLabel: 'DIRETÓRIO DA EQUIPA',
    specialistRoleSingular: 'FUNÇÃO DE ESPECIALISTA',
    specialistRolePlural: 'FUNÇÕES DE ESPECIALISTA',
    viewProfile: 'Ver perfil',
    profileComingSoon: 'Página de perfil brevemente',
    planned: 'Planeado',
  },
  'pt-br': {
    breadcrumbHub: 'ESPECIALISTAS',
    teamDirectoryLabel: 'DIRETÓRIO DO TIME',
    specialistRoleSingular: 'FUNÇÃO DE ESPECIALISTA',
    specialistRolePlural: 'FUNÇÕES DE ESPECIALISTA',
    viewProfile: 'Ver perfil',
    profileComingSoon: 'Página de perfil em breve',
    planned: 'Planejado',
  },
  es: {
    breadcrumbHub: 'ESPECIALISTAS',
    teamDirectoryLabel: 'DIRECTORIO DEL EQUIPO',
    specialistRoleSingular: 'ROL DE ESPECIALISTA',
    specialistRolePlural: 'ROLES DE ESPECIALISTA',
    viewProfile: 'Ver perfil',
    profileComingSoon: 'Página de perfil próximamente',
    planned: 'Planificado',
  },
  de: {
    breadcrumbHub: 'SPEZIALISTEN',
    teamDirectoryLabel: 'TEAM-VERZEICHNIS',
    specialistRoleSingular: 'SPEZIALISTENROLLE',
    specialistRolePlural: 'SPEZIALISTENROLLEN',
    viewProfile: 'Profil ansehen',
    profileComingSoon: 'Profilseite folgt in Kürze',
    planned: 'Geplant',
  },
  fr: {
    breadcrumbHub: 'SPÉCIALISTES',
    teamDirectoryLabel: 'ANNUAIRE DE L’ÉQUIPE',
    specialistRoleSingular: 'RÔLE DE SPÉCIALISTE',
    specialistRolePlural: 'RÔLES DE SPÉCIALISTE',
    viewProfile: 'Voir le profil',
    profileComingSoon: 'Page de profil bientôt disponible',
    planned: 'Prévu',
  },
};
