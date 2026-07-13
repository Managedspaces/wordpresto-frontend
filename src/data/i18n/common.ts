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
    joinWaitlist: 'Junta-te agora',
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
    home: 'Início',
    siteMap: 'Mapa do site',
    contact: 'Contacto',
    howItWorks: 'Como funciona',
    astroCms: 'Astro + CMS builds',
    cmsConnected: 'Ligado ao CMS',
    standaloneEngine: 'Motor autónomo',
    footerTagline: 'O motor de conteúdos que melhora os teus fluxos de publicação.',
    reviewLed: 'Publicação com revisão · Aprovação humana',
  },
  'pt-br': {
    signIn: 'Fazer login',
    joinWaitlist: 'Criar conta',
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
    astroCms: 'Astro + CMS',
    cmsConnected: 'Conectado ao CMS',
    standaloneEngine: 'Motor autônomo',
    footerTagline: 'O motor de conteúdo que turbina fluxos de publicação melhores.',
    reviewLed: 'Publicação com revisão · Aprovação humana',
  },
  es: {
    signIn: 'Iniciar sesión',
    joinWaitlist: 'Crear cuenta',
    product: 'Producto',
    workflow: 'Flujo de trabajo',
    useCases: 'Casos de uso',
    workers: 'Workers',
    specialists: 'Especialistas',
    languages: 'Idiomas',
    pricing: 'Precios',
    docs: 'Documentación',
    theDesk: 'El escritorio',
    canvas: 'Canvas',
    home: 'Inicio',
    siteMap: 'Mapa del sitio',
    contact: 'Contacto',
    howItWorks: 'Cómo funciona',
    astroCms: 'Astro + CMS',
    cmsConnected: 'Conectado a un CMS',
    standaloneEngine: 'Motor independiente',
    footerTagline: 'El motor de contenido que mejora tus flujos de trabajo editoriales.',
    reviewLed: 'Publicación con revisión · Aprobación humana',
  },
  de: {
    signIn: 'Anmelden',
    joinWaitlist: 'Jetzt registrieren',
    product: 'Produkt',
    workflow: 'Workflow',
    useCases: 'Einsatzmöglichkeiten',
    workers: 'Workers',
    specialists: 'Expert:innen',
    languages: 'Sprachen',
    pricing: 'Preise',
    docs: 'Dokumentation',
    theDesk: 'Der Schreibtisch',
    canvas: 'Canvas',
    home: 'Startseite',
    siteMap: 'Sitemap',
    contact: 'Kontakt',
    howItWorks: 'So funktioniert\'s',
    astroCms: 'Astro + CMS-Builds',
    cmsConnected: 'CMS-verbunden',
    standaloneEngine: 'Eigenständige Engine',
    footerTagline: 'Die Content-Engine für bessere Publishing-Workflows.',
    reviewLed: 'Review-basiertes Publizieren · Manuelle Freigabe',
  },
  fr: {
    signIn: 'Se connecter',
    joinWaitlist: 'Inscrivez-vous',
    product: 'Produit',
    workflow: 'Flux de travail',
    useCases: 'Cas d\'utilisation',
    workers: 'Workers',
    specialists: 'Spécialistes',
    languages: 'Langues',
    pricing: 'Tarifs',
    docs: 'Documentation',
    theDesk: 'Le bureau',
    canvas: 'Canvas',
    home: 'Accueil',
    siteMap: 'Plan du site',
    contact: 'Contact',
    howItWorks: 'Comment ça marche',
    astroCms: 'Astro + Versions du CMS',
    cmsConnected: 'Connecté au CMS',
    standaloneEngine: 'Moteur autonome',
    footerTagline: 'Le moteur de contenu qui optimise les processus de publication.',
    reviewLed: 'Publication après révision · Validation humaine',
  },
};
