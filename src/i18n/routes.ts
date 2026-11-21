/**
 * Table des URL de chaque page, dans chaque langue.
 * Les URL sont traduites (meilleur SEO) : /a-propos/ · /en/about/ · /de/ueber-uns/
 */
import type { Locale } from './index';

export type RouteKey = 'home' | 'about' | 'contact' | 'legal' | 'privacy' | 'product';

const table: Record<Locale, Record<Exclude<RouteKey, 'product'>, string> & { productBase: string }> = {
  fr: { home: '/', about: '/a-propos/', contact: '/contact/', legal: '/mentions-legales/', privacy: '/confidentialite/', productBase: '/produits/' },
  en: { home: '/en/', about: '/en/about/', contact: '/en/contact/', legal: '/en/legal-notice/', privacy: '/en/privacy/', productBase: '/en/products/' },
  de: { home: '/de/', about: '/de/ueber-uns/', contact: '/de/kontakt/', legal: '/de/impressum/', privacy: '/de/datenschutz/', productBase: '/de/produkte/' },
};

/** URL d'une page : route('fr', 'about') → '/a-propos/' ; route('en', 'product', 'novarys') → '/en/products/novarys/' */
export function route(lang: Locale, key: RouteKey, slug?: string): string {
  if (key === 'product') return `${table[lang].productBase}${slug}/`;
  return table[lang][key];
}

/** Même page dans les 3 langues (pour le sélecteur de langue et les balises hreflang) */
export function alternatesFor(key: RouteKey, slug?: string): Record<Locale, string> {
  return { fr: route('fr', key, slug), en: route('en', key, slug), de: route('de', key, slug) };
}
