/**
 * LANGUES — ce site démarre en français uniquement.
 * Pour ajouter EN/DE : reprendre la configuration d'ariziki.com.
 */
export const locales = ['fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const localeMeta: Record<Locale, { label: string; name: string; og: string; hreflang: string }> = {
  fr: { label: 'FR', name: 'Français', og: 'fr_FR', hreflang: 'fr' },
};

export const homePath = (_lang: Locale) => '/';
export const asLocale = (_value: string | undefined): Locale => 'fr';
