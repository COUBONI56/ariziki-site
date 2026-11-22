export const locales = ['de', 'fr', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';

export const localeMeta: Record<Locale, { hreflang: string; og: string; label: string; short: string; intl: string }> = {
  de: { hreflang: 'de', og: 'de_DE', label: 'Deutsch', short: 'DE', intl: 'de-DE' },
  fr: { hreflang: 'fr', og: 'fr_FR', label: 'Français', short: 'FR', intl: 'fr-FR' },
  it: { hreflang: 'it', og: 'it_IT', label: 'Italiano', short: 'IT', intl: 'it-IT' },
};

const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

/** Chemin de l'accueil dans une langue (allemand à la racine). */
export function homePath(lang: Locale): string {
  return `${base}${lang === defaultLocale ? '/' : `/${lang}/`}`;
}

/** Préfixe un chemin absolu avec la base de déploiement. */
export function withBase(path: string): string {
  return `${base}${path}`;
}
