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
  docs: string;
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
    joinWaitlist: 'Join now',
    product: 'Product',
    workflow: 'Workflow',
    useCases: 'Use cases',
    workers: 'Workers',
    specialists: 'Specialists',
    languages: 'Languages',
    pricing: 'Pricing',
    docs: 'Docs',
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
    joinWaitlist: 'Inscreva-se já',
    product: 'Produto',
    workflow: 'Fluxo de trabalho',
    useCases: 'Casos de uso',
    workers: 'Workers',
    specialists: 'Especialistas',
    languages: 'Idiomas',
    pricing: 'Preços',
    docs: 'Documentação',
    theDesk: 'A secretária',
    canvas: 'Canvas',
    home: 'Página inicial',
    siteMap: 'Mapa do site',
    contact: 'Contacto',
    howItWorks: 'Como funciona',
    astroCms: 'Astro + Compilações CMS',
    cmsConnected: 'Ligado ao CMS',
    standaloneEngine: 'Motor autónomo',
    footerTagline: 'O motor de conteúdos que otimiza os fluxos de trabalho de publicação.',
    reviewLed: 'Publicação com revisão · Aprovação humana',
  },
  'pt-br': {
    signIn: 'Fazer login',
    joinWaitlist: 'Inscreva-se agora',
    product: 'Produto',
    workflow: 'Fluxo de trabalho',
    useCases: 'Casos de uso',
    workers: 'Workers',
    specialists: 'Especialistas',
    languages: 'Idiomas',
    pricing: 'Preços',
    docs: 'Documentação',
    theDesk: 'A mesa',
    canvas: 'Canvas',
    home: 'Início',
    siteMap: 'Mapa do site',
    contact: 'Contato',
    howItWorks: 'Como funciona',
    astroCms: 'Astro + Compilações do CMS',
    cmsConnected: 'Conectado ao CMS',
    standaloneEngine: 'Mecanismo independente',
    footerTagline: 'O mecanismo de conteúdo que impulsiona fluxos de trabalho de publicação mais eficientes.',
    reviewLed: 'Publicação baseada em revisão · Aprovação humana',
  },
  es: {
    signIn: 'Iniciar sesión',
    joinWaitlist: 'Únete ahora',
    product: 'Producto',
    workflow: 'Flujo de trabajo',
    useCases: 'Casos de uso',
    workers: 'Workers',
    specialists: 'Especialistas',
    languages: 'Idiomas',
    pricing: 'Precios',
    docs: 'Documentación',
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
    joinWaitlist: 'Jetzt registrieren',
    product: 'Produkt',
    workflow: 'Workflow',
    useCases: 'Anwendungsfälle',
    workers: 'Workers',
    specialists: 'Fachleute',
    languages: 'Sprachen',
    pricing: 'Preise',
    docs: 'Dokumentation',
    theDesk: 'Der Schreibtisch',
    canvas: 'Canvas',
    home: 'Startseite',
    siteMap: 'Sitemap',
    contact: 'Kontakt',
    howItWorks: 'So funktioniert es',
    astroCms: 'Astro + CMS-Builds',
    cmsConnected: 'CMS-verbunden',
    standaloneEngine: 'Eigenständige Engine',
    footerTagline: 'Die Content-Engine für optimierte Publikations-Workflows.',
    reviewLed: 'Review-basierte Veröffentlichung · Manuelle Freigabe',
  },
  fr: {
    signIn: 'Se connecter',
    joinWaitlist: 'Rejoindre maintenant',
    product: 'Produit',
    workflow: 'Workflow',
    useCases: 'Cas d’usage',
    workers: 'Workers',
    specialists: 'Spécialistes',
    languages: 'Langues',
    pricing: 'Tarifs',
    docs: 'Documentation',
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
