/**
 * RÉALISATIONS — réutilise la structure « produits » du modèle.
 * Ajouter une réalisation = ajouter un objet ici.
 */
import type { Locale } from '../i18n';

type ProductText = { title?: string; status: string; tagline: string; description: string; tags: string[] };

export type Product = {
  slug: string;
  index: string;
  name: string;
  status: 'live' | 'building' | 'soon';
  url?: string;
  visual: 'offers' | 'pipeline' | 'dashboard' | 'orbit' | 'site';
  text: Record<Locale, ProductText>;
};

export const products: Product[] = [
  {
    slug: 'ariziki',
    index: '01',
    name: 'ariziki.com',
    status: 'live',
    url: 'https://ariziki.com',
    visual: 'site',
    text: {
      fr: {
        status: 'En ligne',
        tagline: 'Le site de la marque-mère ARIZIKI.',
        description: 'Site trilingue (FR · EN · DE) de 25 pages : direction artistique sur mesure, animations GSAP, formulaire de contact et publication automatique.',
        tags: ['Astro', 'GSAP', 'Lighthouse 96–100', '3 langues'],
      },
    },
  },
  {
    slug: 'next',
    index: '02',
    name: 'Votre site',
    status: 'soon',
    visual: 'orbit',
    text: {
      fr: {
        title: 'Votre site',
        status: 'Bientôt',
        tagline: 'Votre projet peut être le prochain.',
        description: 'Parlez-nous de votre activité : nous vous proposons une direction artistique et un devis précis.',
        tags: ['Essentiel', 'Signature', 'Prestige'],
      },
    },
  },
];

export const productName = (p: Product, lang: Locale) => p.text[lang].title ?? p.name;
