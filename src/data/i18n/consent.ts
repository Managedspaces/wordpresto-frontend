import type { Locale } from '@/i18n/locales';

// Copy for the cookie/consent notice banner shown to visitors in regions where
// a cookie notice is expected (EEA + UK). It is site-wide chrome, rendered from
// BaseLayout via src/components/ConsentBanner.astro, so its strings live here
// alongside the other shared i18n dictionaries rather than in a page file.
//
// The banner links out to the Privacy Policy, Cookie Policy and Terms &
// Conditions. Those legal pages are English-only for now (see src/data/legal.ts),
// so the links always point at the unprefixed English routes; only the banner
// prose is translated.

export interface ConsentStrings {
  /** Short explanation of why cookies are used. */
  message: string;
  /** Primary acknowledgement button. */
  accept: string;
  privacy: string;
  cookies: string;
  terms: string;
  /** Accessible label for the banner region. */
  ariaLabel: string;
}

export const consentStrings: Record<Locale, ConsentStrings> = {
  en: {
    message: 'This site uses cookies for analytics, to understand how it is used and to help us improve it.',
    accept: 'Accept',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    terms: 'Terms & Conditions',
    ariaLabel: 'Cookie notice',
  },
  pt: {
    message: 'Este site utiliza cookies para análise, para compreender como é utilizado e para nos ajudar a melhorá-lo.',
    accept: 'Aceitar',
    privacy: 'Política de Privacidade',
    cookies: 'Política de Cookies',
    terms: 'Termos e Condições',
    ariaLabel: 'Aviso de cookies',
  },
  'pt-br': {
    message: 'Este site usa cookies para análise, para entender como ele é usado e para nos ajudar a melhorá-lo.',
    accept: 'Aceitar',
    privacy: 'Política de Privacidade',
    cookies: 'Política de Cookies',
    terms: 'Termos e Condições',
    ariaLabel: 'Aviso de cookies',
  },
  es: {
    message: 'Este sitio utiliza cookies para análisis, para entender cómo se usa y para ayudarnos a mejorarlo.',
    accept: 'Aceptar',
    privacy: 'Política de Privacidad',
    cookies: 'Política de Cookies',
    terms: 'Términos y Condiciones',
    ariaLabel: 'Aviso de cookies',
  },
  de: {
    message: 'Diese Website verwendet Cookies für die Analyse, um zu verstehen, wie sie genutzt wird, und um sie zu verbessern.',
    accept: 'Akzeptieren',
    privacy: 'Datenschutzerklärung',
    cookies: 'Cookie-Richtlinie',
    terms: 'Allgemeine Geschäftsbedingungen',
    ariaLabel: 'Cookie-Hinweis',
  },
  fr: {
    message: "Ce site utilise des cookies à des fins d'analyse, pour comprendre comment il est utilisé et nous aider à l'améliorer.",
    accept: 'Accepter',
    privacy: 'Politique de confidentialité',
    cookies: 'Politique relative aux cookies',
    terms: 'Conditions générales',
    ariaLabel: 'Avis relatif aux cookies',
  },
};
