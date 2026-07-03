// Small, simplified national flags shared by the language-editor tiles and
// the locale switcher. Proportions/emblems are trimmed for legibility at
// badge size (rendered ~20x14px). Keyed by the same country codes used in
// src/i18n/locales.ts and src/data/workerRegistry.ts.

export const FLAG_SVG: Record<string, string> = {
  IE: '<svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="14" fill="#fff"/><rect width="6.67" height="14" fill="#169B62"/><rect x="13.33" width="6.67" height="14" fill="#FF883E"/></svg>',
  PT: '<svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="14" fill="#D40000"/><rect width="8" height="14" fill="#046A38"/><circle cx="8" cy="7" r="2.5" fill="#FFCC00" stroke="#fff" stroke-width="0.4"/></svg>',
  BR: '<svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="14" fill="#009739"/><polygon points="10,2 18,7 10,12 2,7" fill="#FEDD00"/><circle cx="10" cy="7" r="3" fill="#012169"/></svg>',
  ES: '<svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="14" fill="#AA151B"/><rect y="3.5" width="20" height="7" fill="#F1BF00"/></svg>',
  DE: '<svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="4.67" fill="#0A0A0A"/><rect y="4.67" width="20" height="4.67" fill="#DD0000"/><rect y="9.33" width="20" height="4.67" fill="#FFCE00"/></svg>',
  FR: '<svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="14" fill="#fff"/><rect width="6.67" height="14" fill="#0055A4"/><rect x="13.33" width="6.67" height="14" fill="#EF4135"/></svg>',
};
