import type { Locale } from '@/i18n/locales';

// Shared nav/footer/CTA strings reused across every page. Page-specific copy
// (hero text, section bodies, etc.) lives in its own locale-keyed data file
// (see src/data/i18n/home.ts and friends), not here.

export interface CommonStrings {
  signIn: string;
  joinWaitlist: string;
  product: string;
  workflow: string;
  useCases: string;
  workers: string;
  specialists: string;
  languages: string;
  pricing: string;
  theDesk: string;
  canvas: string;
  home: string;
  siteMap: string;
  contact: string;
  howItWorks: string;
  astroCms: string;
  cmsConnected: string;
  standaloneEngine: string;
  footerTagline: string;
  reviewLed: string;
}

export const commonStrings: Record<Locale, CommonStrings> = {
  en: {
    signIn: 'Sign in',
    joinWaitlist: 'Join the waitlist',
    product: 'Product',
    workflow: 'Workflow',
    useCases: 'Use cases',
    workers: 'Workers',
    specialists: 'Specialists',
    languages: 'Languages',
    pricing: 'Pricing',
    theDesk: 'The desk',
    canvas: 'Canvas',
    home: 'Home',
    siteMap: 'Sitemap',
    contact: 'Contact',
    howItWorks: 'How it works',
    astroCms: 'Astro + CMS builds',
    cmsConnected: 'CMS-connected',
    standaloneEngine: 'Standalone engine',
    footerTagline: 'The content engine behind better publishing workflows.',
    reviewLed: 'Review-led publishing · Human approval',
  },
  pt: {
    signIn: 'Iniciar sessão',
    joinWaitlist: 'Entrar na lista de espera',
    product: 'Produto',
    workflow: 'Fluxo de trabalho',
    useCases: 'Casos de uso',
    workers: 'Workers',
    specialists: 'Especialistas',
    languages: 'Idiomas',
    pricing: 'Preços',
    theDesk: 'A redação',
    canvas: 'Canvas',
    home: 'Início',
    siteMap: 'Mapa do site',
    contact: 'Contacto',
    howItWorks: 'Como funciona',
    astroCms: 'Projetos Astro + CMS',
    cmsConnected: 'Ligado ao CMS',
    standaloneEngine: 'Motor autónomo',
    footerTagline: 'O motor de conteúdo por detrás de melhores fluxos de publicação.',
    reviewLed: 'Publicação com revisão · Aprovação humana',
  },
  'pt-br': {
    signIn: 'Entrar',
    joinWaitlist: 'Entrar na lista de espera',
    product: 'Produto',
    workflow: 'Fluxo de trabalho',
    useCases: 'Casos de uso',
    workers: 'Workers',
    specialists: 'Especialistas',
    languages: 'Idiomas',
    pricing: 'Preços',
    theDesk: 'A redação',
    canvas: 'Canvas',
    home: 'Início',
    siteMap: 'Mapa do site',
    contact: 'Contato',
    howItWorks: 'Como funciona',
    astroCms: 'Projetos Astro + CMS',
    cmsConnected: 'Conectado ao CMS',
    standaloneEngine: 'Motor autônomo',
    footerTagline: 'O motor de conteúdo por trás de fluxos de publicação melhores.',
    reviewLed: 'Publicação com revisão · Aprovação humana',
  },
  es: {
    signIn: 'Iniciar sesión',
    joinWaitlist: 'Unirse a la lista de espera',
    product: 'Producto',
    workflow: 'Flujo de trabajo',
    useCases: 'Casos de uso',
    workers: 'Workers',
    specialists: 'Especialistas',
    languages: 'Idiomas',
    pricing: 'Precios',
    theDesk: 'La redacción',
    canvas: 'Canvas',
    home: 'Inicio',
    siteMap: 'Mapa del sitio',
    contact: 'Contacto',
    howItWorks: 'Cómo funciona',
    astroCms: 'Proyectos Astro + CMS',
    cmsConnected: 'Conectado a un CMS',
    standaloneEngine: 'Motor independiente',
    footerTagline: 'El motor de contenido detrás de mejores flujos de publicación.',
    reviewLed: 'Publicación con revisión · Aprobación humana',
  },
  de: {
    signIn: 'Anmelden',
    joinWaitlist: 'Warteliste beitreten',
    product: 'Produkt',
    workflow: 'Workflow',
    useCases: 'Anwendungsfälle',
    workers: 'Workers',
    specialists: 'Spezialisten',
    languages: 'Sprachen',
    pricing: 'Preise',
    theDesk: 'Die Redaktion',
    canvas: 'Canvas',
    home: 'Start',
    siteMap: 'Sitemap',
    contact: 'Kontakt',
    howItWorks: 'So funktioniert es',
    astroCms: 'Astro + CMS-Projekte',
    cmsConnected: 'CMS-angebunden',
    standaloneEngine: 'Eigenständige Engine',
    footerTagline: 'Die Content-Engine hinter besseren Publishing-Workflows.',
    reviewLed: 'Review-geführtes Publizieren · Menschliche Freigabe',
  },
  fr: {
    signIn: 'Se connecter',
    joinWaitlist: 'Rejoindre la liste d’attente',
    product: 'Produit',
    workflow: 'Workflow',
    useCases: 'Cas d’usage',
    workers: 'Workers',
    specialists: 'Spécialistes',
    languages: 'Langues',
    pricing: 'Tarifs',
    theDesk: 'La rédaction',
    canvas: 'Canvas',
    home: 'Accueil',
    siteMap: 'Plan du site',
    contact: 'Contact',
    howItWorks: 'Comment ça marche',
    astroCms: 'Projets Astro + CMS',
    cmsConnected: 'Connecté à un CMS',
    standaloneEngine: 'Moteur autonome',
    footerTagline: 'Le moteur de contenu derrière de meilleurs workflows de publication.',
    reviewLed: 'Publication avec révision · Approbation humaine',
  },
};
