/**
 * ─────────────────────────────────────────────────────────────
 *  ÉCOSYSTÈME — la liste des SaaS de la marque (FR / EN / DE)
 * ─────────────────────────────────────────────────────────────
 *  Ajouter un produit = ajouter un objet ici. L'accueil (hero,
 *  écosystème) et les données structurées se mettent à jour seuls.
 *
 *  status : 'live' (en ligne) | 'building' (en construction) | 'soon' (à venir)
 *  visual : 'offers' | 'pipeline' | 'dashboard' | 'orbit'  → illustrations en CSS,
 *           aucune image à charger (remplaçables par de vraies captures).
 */
import type { Locale } from '../i18n';

type ProductText = { title?: string; status: string; tagline: string; description: string; tags: string[] };

export type Product = {
  slug: string;
  index: string;
  name: string;
  status: 'live' | 'building' | 'soon';
  url?: string;
  visual: 'offers' | 'pipeline' | 'dashboard' | 'orbit';
  text: Record<Locale, ProductText>;
};

export const products: Product[] = [
  {
    slug: 'eliteoffers',
    index: '01',
    name: 'ARIZIKI EliteOffers',
    status: 'live',
    url: 'https://ariziki-eliteoffers.com',
    visual: 'offers',
    text: {
      fr: {
        status: 'En ligne',
        tagline: 'La plateforme des affiliés high-ticket.',
        description: "Générez des funnels complets par IA en un clic et accédez à 39 réseaux d'affiliation pour booster vos commissions.",
        tags: ['Funnels IA', "39 réseaux d'affiliation", 'Offres high-ticket'],
      },
      en: {
        status: 'Live',
        tagline: 'The platform for high-ticket affiliates.',
        description: 'Generate complete AI funnels in one click and access 39 affiliate networks to boost your commissions.',
        tags: ['AI funnels', '39 affiliate networks', 'High-ticket offers'],
      },
      de: {
        status: 'Online',
        tagline: 'Die Plattform für High-Ticket-Affiliates.',
        description: 'Erstellen Sie komplette KI-Funnels mit einem Klick und nutzen Sie 39 Affiliate-Netzwerke, um Ihre Provisionen zu steigern.',
        tags: ['KI-Funnels', '39 Affiliate-Netzwerke', 'High-Ticket-Angebote'],
      },
    },
  },
  {
    slug: 'cibleflow',
    index: '02',
    name: 'Cibleflow',
    status: 'live',
    url: 'https://cibleflow.com',
    visual: 'pipeline',
    text: {
      fr: {
        status: 'En ligne',
        tagline: 'La bonne cible, le bon contact.',
        description: "La plateforme de prospection qui identifie les bons décideurs, évalue leurs besoins et prépare le bon message d'approche, grâce à l'IA.",
        tags: ['Prospection IA', 'Score des pistes', 'LinkedIn · WhatsApp · e-mail'],
      },
      en: {
        status: 'Live',
        tagline: 'The right target, the right contact.',
        description: 'The prospecting platform that finds the right decision-makers, assesses their needs and drafts the right outreach message, powered by AI.',
        tags: ['AI prospecting', 'Lead scoring', 'LinkedIn · WhatsApp · email'],
      },
      de: {
        status: 'Online',
        tagline: 'Die richtige Zielgruppe, der richtige Kontakt.',
        description: 'Die Prospecting-Plattform, die mit KI die richtigen Entscheider findet, ihren Bedarf bewertet und die passende Ansprache vorbereitet.',
        tags: ['KI-Prospecting', 'Lead-Scoring', 'LinkedIn · WhatsApp · E-Mail'],
      },
    },
  },
  {
    slug: 'novarys',
    index: '03',
    name: 'NOVARYS',
    status: 'building',
    visual: 'dashboard',
    text: {
      fr: {
        status: 'En construction',
        tagline: 'Le prochain SaaS ARIZIKI prend forme.',
        description: 'NOVARYS est en cours de développement dans nos ateliers. Laissez-nous votre adresse pour être parmi les premiers informés de son lancement.',
        tags: ['En développement', 'Accès anticipé'],
      },
      en: {
        status: 'In development',
        tagline: 'The next ARIZIKI SaaS is taking shape.',
        description: 'NOVARYS is currently being built in our workshop. Get in touch to be among the first to hear about its launch.',
        tags: ['In development', 'Early access'],
      },
      de: {
        status: 'In Entwicklung',
        tagline: 'Das nächste ARIZIKI-SaaS nimmt Gestalt an.',
        description: 'NOVARYS entsteht gerade in unserer Werkstatt. Schreiben Sie uns, um als Erste vom Start zu erfahren.',
        tags: ['In Entwicklung', 'Früher Zugang'],
      },
    },
  },
  {
    slug: 'next',
    index: '04',
    name: 'ARIZIKI', // nom affiché : voir « title » dans chaque langue
    status: 'soon',
    visual: 'orbit',
    text: {
      fr: {
        title: 'Prochains SaaS',
        status: 'À venir',
        tagline: "D'autres logiciels sont en préparation.",
        description: "L'écosystème ARIZIKI s'agrandit. De nouveaux SaaS sont à l'étude, toujours avec la même exigence de simplicité et de résultat.",
        tags: ['Prochains lancements'],
      },
      en: {
        title: 'Upcoming SaaS',
        status: 'Coming soon',
        tagline: 'More products are on the way.',
        description: 'The ARIZIKI ecosystem keeps growing. New SaaS products are in the works, built to the same standard of simplicity and results.',
        tags: ['Upcoming launches'],
      },
      de: {
        title: 'Weitere SaaS',
        status: 'Demnächst',
        tagline: 'Weitere Produkte sind in Vorbereitung.',
        description: 'Das ARIZIKI-Ökosystem wächst. Neue SaaS-Produkte sind in Arbeit — mit demselben Anspruch an Einfachheit und Ergebnis.',
        tags: ['Kommende Launches'],
      },
    },
  },
];

/** Nom affiché d'un produit dans une langue donnée */
export const productName = (p: Product, lang: Locale) => p.text[lang].title ?? p.name;
