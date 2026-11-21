/** Table des URL de chaque page. */
import type { Locale } from './index';

export type RouteKey = 'home' | 'contact' | 'legal' | 'privacy';

const table: Record<Locale, Record<RouteKey, string>> = {
  fr: { home: '/', contact: '/contact/', legal: '/mentions-legales/', privacy: '/confidentialite/' },
};

export function route(lang: Locale, key: RouteKey): string {
  return table[lang][key];
}

export function alternatesFor(key: RouteKey): Record<Locale, string> {
  return { fr: route('fr', key) };
}
