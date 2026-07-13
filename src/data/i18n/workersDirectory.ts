import type { Locale } from '@/i18n/locales';

// Copy for /workers/ and /workers/seo/ — the two Worker directory pages.
// Worker card content itself (name, role, department, stage, summary,
// output — from src/data/workers.ts) stays English for now, same scoping
// decision as the /specialists/* pages: worker profile pages aren't
// translated yet, so their marketing card copy stays English until they
// are. Only the page chrome (hero, directory header, crosslink, footer)
// translates here.

export interface WorkersHubContent {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  eyebrow: string;
  directoryLabel: string;
  rolesCountSuffix: string;
  crosslinkLabel: string;
  crosslinkTitle: string;
  crosslinkCta: string;
}

export interface SeoWorkersContent {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  eyebrow: string;
  breadcrumbCurrent: string;
  directoryLabel: string;
  rolesCountSuffix: string;
  crosslinkLabel: string;
  crosslinkTitle: string;
  crosslinkCta: string;
  footerWorkersHeading: string;
  footerContentWorkers: string;
  footerSeoWorkers: string;
}

export interface WorkersSharedContent {
  breadcrumbWorkers: string;
  stagePrefix: string;
  outputLabel: string;
  viewProfile: string;
  profileComingSoon: string;
  planned: string;
}

export const workersHubContent: Record<Locale, WorkersHubContent> = {
  en: {
    seoTitle: 'Content workflow Workers | WordPresto',
    metaDescription: 'Meet the specialist Workers in the WordPresto content workflow, from content analysis and brief building to voice review, approval reporting and CMS handoff.',
    h1: 'Specialist Workers for every stage of the content workflow.',
    intro: 'WordPresto brings in the right specialists for the stage you are at, so each piece of content gets the support it actually needs.',
    eyebrow: 'The team',
    directoryLabel: 'WORKER DIRECTORY',
    rolesCountSuffix: ' SPECIALIST ROLES · ONE CONTENT WORKFLOW',
    crosslinkLabel: 'Also in the workflow',
    crosslinkTitle: 'SEO Workers, in their own directory',
    crosslinkCta: 'See the SEO Workers',
  },
  pt: {
    seoTitle: 'Workers do fluxo de conteúdo | WordPresto',
    metaDescription: 'Conhece os Workers especialistas no fluxo de conteúdo do WordPresto — desde a análise de conteúdo e criação de briefs até à revisão de tom, relatórios de aprovação e entrega no CMS.',
    h1: 'Workers especializados para cada etapa do fluxo de conteúdo.',
    intro: 'O WordPresto traz os especialistas certos para a fase em que estás, para que cada conteúdo receba o apoio de que realmente precisa.',
    eyebrow: 'A equipa',
    directoryLabel: 'DIRETÓRIO DE WORKERS',
    rolesCountSuffix: 'FUNÇÕES ESPECIALIZADAS · UM ÚNICO FLUXO DE CONTEÚDO',
    crosslinkLabel: 'Também no fluxo',
    crosslinkTitle: 'SEO Workers, no diretório deles',
    crosslinkCta: 'Vê os SEO Workers',
  },
  'pt-br': {
    seoTitle: 'Workers de fluxo de conteúdo | WordPresto',
    metaDescription: 'Conheça os Workers especialistas do fluxo de conteúdo do WordPresto: desde análise de conteúdo e criação de briefing até revisão de tom, relatório de aprovação e entrega no CMS.',
    h1: 'Workers especialistas para cada etapa do fluxo de conteúdo.',
    intro: 'O WordPresto traz os especialistas certos para a fase em que você está, garantindo que cada conteúdo receba o suporte que realmente precisa.',
    eyebrow: 'O time',
    directoryLabel: 'DIRETÓRIO DE WORKERS',
    rolesCountSuffix: 'FUNÇÕES ESPECIALIZADAS · UM ÚNICO FLUXO DE CONTEÚDO',
    crosslinkLabel: 'Também no fluxo',
    crosslinkTitle: 'Workers de SEO, no diretório deles',
    crosslinkCta: 'Veja os Workers de SEO',
  },
  es: {
    seoTitle: 'Workers especializados en contenido | WordPresto',
    metaDescription: 'Conoce a los Workers especialistas del flujo de contenido de WordPresto: desde analizar contenido y armar briefs, hasta revisar guiones, gestionar aprobaciones y entregar al CMS.',
    h1: 'Workers especializados para cada etapa del flujo de contenido.',
    intro: 'WordPresto elige a los especialistas justos para la etapa en la que estás, así cada contenido recibe el apoyo que realmente necesita.',
    eyebrow: 'El equipo',
    directoryLabel: 'DIRECTORIO DE WORKERS',
    rolesCountSuffix: 'ROLES ESPECIALIZADOS · UN SOLO FLUJO DE CONTENIDO',
    crosslinkLabel: 'También en el flujo de trabajo',
    crosslinkTitle: 'SEO Workers, en su propio directorio',
    crosslinkCta: 'Ver los SEO Workers',
  },
  de: {
    seoTitle: 'Content-Workflow-Workers | WordPresto',
    metaDescription: 'Lern die spezialisierten Workers im WordPresto Content-Workflow kennen – von der Inhaltsanalyse und Briefing-Erstellung über die Sprachprüfung und Freigabeberichte bis zur Übergabe ans CMS.',
    h1: 'Spezialisierte Workers für jede Phase deines Content-Workflows.',
    intro: 'WordPresto holt genau die richtigen Spezialisten für den Schritt, in dem du gerade steckst – so bekommt jeder Content genau die Unterstützung, die er wirklich braucht.',
    eyebrow: 'Das Team',
    directoryLabel: 'WORKER-VERZEICHNIS',
    rolesCountSuffix: 'SPEZIALISIERTE ROLLEN · EIN CONTENT-WORKFLOW',
    crosslinkLabel: 'Auch im Workflow',
    crosslinkTitle: 'SEO-Workers – in ihrem eigenen Verzeichnis',
    crosslinkCta: 'Zu den SEO-Workers',
  },
  fr: {
    seoTitle: 'Flux de travail des Workers de contenu | WordPresto',
    metaDescription: 'Découvrez les Workers spécialisés du flux de travail de contenu WordPresto, de l\'analyse du contenu et de la création du brief à la révision du ton, en passant par les rapports d\'approbation et la remise au CMS.',
    h1: 'Workers spécialisés pour chaque étape du flux de travail de contenu.',
    intro: 'WordPresto fait appel aux spécialistes appropriés pour l\'étape où vous vous trouvez, afin que chaque contenu bénéficie du soutien dont il a réellement besoin.',
    eyebrow: 'L\'équipe',
    directoryLabel: 'RÉPERTOIRE DES WORKERS',
    rolesCountSuffix: 'RÔLES SPÉCIALISÉS · UN SEUL FLUX DE TRAVAIL DE CONTENU',
    crosslinkLabel: 'Également dans le flux de travail',
    crosslinkTitle: 'Workers SEO, dans leur propre répertoire',
    crosslinkCta: 'Consultez les Workers SEO',
  },
};

export const seoWorkersContent: Record<Locale, SeoWorkersContent> = {
  en: {
    seoTitle: 'SEO Workers for search, structure and authority | WordPresto',
    metaDescription: 'Meet the SEO Workers in the WordPresto workflow, covering SEO title and metadata, search snippets, schema, technical health, trust and author credibility, and evidence gaps. Review-led and human-approved.',
    h1: 'SEO Workers for search, structure and authority.',
    intro: 'The SEO Workers help writers and editorial teams make content easier to understand, structure, retrieve and approve. They review metadata, search snippets, schema, technical health, trust and evidence, and surface what matters while the writer is still shaping the work. Every output is for human review.',
    eyebrow: 'Search & SEO',
    breadcrumbCurrent: 'SEO',
    directoryLabel: 'SEO WORKER DIRECTORY',
    rolesCountSuffix: ' SPECIALIST ROLES · SEARCH, EVIDENCE & AUTHORITY',
    crosslinkLabel: 'Also in the workflow',
    crosslinkTitle: 'Content Workers, in their own directory',
    crosslinkCta: 'See the Content Workers',
    footerWorkersHeading: 'Workers',
    footerContentWorkers: 'Content Workers',
    footerSeoWorkers: 'SEO Workers',
  },
  pt: {
    seoTitle: 'Workers de SEO para pesquisa, estrutura e autoridade | WordPresto',
    metaDescription: 'Conheça os Workers de SEO no fluxo de trabalho da WordPresto, incluindo título e metadados de SEO, snippets de pesquisa, schema, saúde técnica, confiança e credibilidade do autor, e lacunas de evidência. Com revisão humana.',
    h1: 'Workers de SEO para pesquisa, estrutura e autoridade.',
    intro: 'Os Workers de SEO ajudam redatores e equipas editoriais a tornar o conteúdo mais fácil de compreender, estruturar, encontrar e aprovar. Revêem metadados, snippets de pesquisa, schema, saúde técnica, confiança e evidências, e destacam o que importa enquanto o redator ainda está a moldar o trabalho. Todos os resultados passam por revisão humana.',
    eyebrow: 'Pesquisa e SEO',
    breadcrumbCurrent: 'SEO',
    directoryLabel: 'DIRETÓRIO DE WORKERS DE SEO',
    rolesCountSuffix: ' FUNÇÕES DE ESPECIALISTA · PESQUISA, EVIDÊNCIA E AUTORIDADE',
    crosslinkLabel: 'Também no fluxo de trabalho',
    crosslinkTitle: 'Workers de Conteúdo, no seu próprio diretório',
    crosslinkCta: 'Ver os Workers de Conteúdo',
    footerWorkersHeading: 'Workers',
    footerContentWorkers: 'Workers de Conteúdo',
    footerSeoWorkers: 'Workers de SEO',
  },
  'pt-br': {
    seoTitle: 'Workers de SEO para busca, estrutura e autoridade | WordPresto',
    metaDescription: 'Conheça os Workers de SEO no fluxo de trabalho da WordPresto, incluindo título e metadados de SEO, snippets de busca, schema, saúde técnica, confiança e credibilidade do autor, e lacunas de evidência. Com revisão humana.',
    h1: 'Workers de SEO para busca, estrutura e autoridade.',
    intro: 'Os Workers de SEO ajudam redatores e equipes editoriais a tornar o conteúdo mais fácil de entender, estruturar, encontrar e aprovar. Eles revisam metadados, snippets de busca, schema, saúde técnica, confiança e evidências, e destacam o que importa enquanto o redator ainda está moldando o trabalho. Todos os resultados passam por revisão humana.',
    eyebrow: 'Busca e SEO',
    breadcrumbCurrent: 'SEO',
    directoryLabel: 'DIRETÓRIO DE WORKERS DE SEO',
    rolesCountSuffix: ' FUNÇÕES DE ESPECIALISTA · BUSCA, EVIDÊNCIA E AUTORIDADE',
    crosslinkLabel: 'Também no fluxo de trabalho',
    crosslinkTitle: 'Workers de Conteúdo, em seu próprio diretório',
    crosslinkCta: 'Ver os Workers de Conteúdo',
    footerWorkersHeading: 'Workers',
    footerContentWorkers: 'Workers de Conteúdo',
    footerSeoWorkers: 'Workers de SEO',
  },
  es: {
    seoTitle: 'Workers de SEO para búsqueda, estructura y autoridad | WordPresto',
    metaDescription: 'Conoce a los Workers de SEO en el flujo de trabajo de WordPresto, que cubren título y metadatos de SEO, snippets de búsqueda, schema, salud técnica, confianza y credibilidad del autor, y vacíos de evidencia. Con revisión humana.',
    h1: 'Workers de SEO para búsqueda, estructura y autoridad.',
    intro: 'Los Workers de SEO ayudan a redactores y equipos editoriales a hacer que el contenido sea más fácil de entender, estructurar, encontrar y aprobar. Revisan metadatos, snippets de búsqueda, schema, salud técnica, confianza y evidencia, y destacan lo que importa mientras el redactor todavía está dando forma al trabajo. Todos los resultados están sujetos a revisión humana.',
    eyebrow: 'Búsqueda y SEO',
    breadcrumbCurrent: 'SEO',
    directoryLabel: 'DIRECTORIO DE WORKERS DE SEO',
    rolesCountSuffix: ' ROLES DE ESPECIALISTA · BÚSQUEDA, EVIDENCIA Y AUTORIDAD',
    crosslinkLabel: 'También en el flujo de trabajo',
    crosslinkTitle: 'Workers de Contenido, en su propio directorio',
    crosslinkCta: 'Ver los Workers de Contenido',
    footerWorkersHeading: 'Workers',
    footerContentWorkers: 'Workers de Contenido',
    footerSeoWorkers: 'Workers de SEO',
  },
  de: {
    seoTitle: 'SEO-Workers für Suche, Struktur und Autorität | WordPresto',
    metaDescription: 'Lernen Sie die SEO-Workers im Word-Presto-Workflow kennen: SEO-Titel und Metadaten, Suchausschnitte, Schema, technische Gesundheit, Vertrauen und Autoren-Glaubwürdigkeit sowie Beleglücken. Menschlich geprüft.',
    h1: 'SEO-Workers für Suche, Struktur und Autorität.',
    intro: 'Die SEO-Workers helfen Autoren und Redaktionsteams, Content leichter verständlich, strukturiert, auffindbar und freigabefähig zu machen. Sie prüfen Metadaten, Suchausschnitte, Schema, technische Gesundheit, Vertrauen und Belege und zeigen auf, was wichtig ist, während der Autor die Arbeit noch formt. Jedes Ergebnis ist zur menschlichen Prüfung bestimmt.',
    eyebrow: 'Suche & SEO',
    breadcrumbCurrent: 'SEO',
    directoryLabel: 'SEO-WORKER-VERZEICHNIS',
    rolesCountSuffix: ' SPEZIALISTENROLLEN · SUCHE, BELEGE & AUTORITÄT',
    crosslinkLabel: 'Ebenfalls im Workflow',
    crosslinkTitle: 'Content-Workers, in ihrem eigenen Verzeichnis',
    crosslinkCta: 'Die Content-Workers ansehen',
    footerWorkersHeading: 'Workers',
    footerContentWorkers: 'Content-Workers',
    footerSeoWorkers: 'SEO-Workers',
  },
  fr: {
    seoTitle: 'Workers SEO pour la recherche, la structure et l’autorité | WordPresto',
    metaDescription: 'Découvrez les Workers SEO du flux de travail Word Presto : titre et métadonnées SEO, extraits de recherche, schema, santé technique, confiance et crédibilité de l’auteur, et lacunes de preuves. Avec relecture humaine.',
    h1: 'Workers SEO pour la recherche, la structure et l’autorité.',
    intro: 'Les Workers SEO aident les rédacteurs et les équipes éditoriales à rendre le contenu plus facile à comprendre, structurer, retrouver et approuver. Ils relisent les métadonnées, les extraits de recherche, le schema, la santé technique, la confiance et les preuves, et font remonter ce qui compte pendant que le rédacteur façonne encore le travail. Chaque résultat est destiné à une relecture humaine.',
    eyebrow: 'Recherche & SEO',
    breadcrumbCurrent: 'SEO',
    directoryLabel: 'ANNUAIRE DES WORKERS SEO',
    rolesCountSuffix: ' RÔLES DE SPÉCIALISTE · RECHERCHE, PREUVES & AUTORITÉ',
    crosslinkLabel: 'Également dans le flux de travail',
    crosslinkTitle: 'Les Workers de contenu, dans leur propre annuaire',
    crosslinkCta: 'Voir les Workers de contenu',
    footerWorkersHeading: 'Workers',
    footerContentWorkers: 'Workers de contenu',
    footerSeoWorkers: 'Workers SEO',
  },
};

export const workersSharedContent: Record<Locale, WorkersSharedContent> = {
  en: {
    breadcrumbWorkers: 'WORKERS',
    stagePrefix: 'Stage · ',
    outputLabel: 'OUTPUT',
    viewProfile: 'View profile',
    profileComingSoon: 'Profile page coming soon',
    planned: 'Planned',
  },
  pt: {
    breadcrumbWorkers: 'WORKERS',
    stagePrefix: 'Etapa · ',
    outputLabel: 'RESULTADO',
    viewProfile: 'Ver perfil',
    profileComingSoon: 'Página de perfil brevemente',
    planned: 'Planeado',
  },
  'pt-br': {
    breadcrumbWorkers: 'WORKERS',
    stagePrefix: 'Etapa · ',
    outputLabel: 'RESULTADO',
    viewProfile: 'Ver perfil',
    profileComingSoon: 'Página de perfil em breve',
    planned: 'Planejado',
  },
  es: {
    breadcrumbWorkers: 'WORKERS',
    stagePrefix: 'Etapa · ',
    outputLabel: 'RESULTADO',
    viewProfile: 'Ver perfil',
    profileComingSoon: 'Página de perfil próximamente',
    planned: 'Planificado',
  },
  de: {
    breadcrumbWorkers: 'WORKERS',
    stagePrefix: 'Phase · ',
    outputLabel: 'ERGEBNIS',
    viewProfile: 'Profil ansehen',
    profileComingSoon: 'Profilseite folgt in Kürze',
    planned: 'Geplant',
  },
  fr: {
    breadcrumbWorkers: 'WORKERS',
    stagePrefix: 'Étape · ',
    outputLabel: 'RÉSULTAT',
    viewProfile: 'Voir le profil',
    profileComingSoon: 'Page de profil bientôt disponible',
    planned: 'Prévu',
  },
};
