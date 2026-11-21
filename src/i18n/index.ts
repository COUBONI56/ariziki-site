/**
 * ─────────────────────────────────────────────────────────────
 *  LANGUES — FR (par défaut, à la racine), EN (/en/), DE (/de/)
 * ─────────────────────────────────────────────────────────────
 *  Ajouter une langue : l'ajouter ici, dans astro.config.mjs,
 *  puis compléter les dictionnaires (ui.ts, home.ts, products.ts)
 *  et créer src/pages/<code>/index.astro.
 */

export const locales = ['fr', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const localeMeta: Record<Locale, { label: string; name: string; og: string; hreflang: string }> = {
  fr: { label: 'FR', name: 'Français', og: 'fr_FR', hreflang: 'fr' },
  en: { label: 'EN', name: 'English', og: 'en_US', hreflang: 'en' },
  de: { label: 'DE', name: 'Deutsch', og: 'de_DE', hreflang: 'de' },
};

/** URL d'accueil d'une langue : '/', '/en/', '/de/' */
export const homePath = (lang: Locale) => (lang === defaultLocale ? '/' : `/${lang}/`);

export const asLocale = (value: string | undefined): Locale =>
  (locales as readonly string[]).includes(value ?? '') ? (value as Locale) : defaultLocale;
