/**
 * Textes d'interface communs à toutes les pages (menu, pied de page,
 * SEO par défaut, accessibilité), dans chaque langue.
 * Les liens pointent vers des « routes » (voir routes.ts) : l'URL
 * correcte est calculée automatiquement dans chaque langue.
 */
import type { Locale } from './index';
import { route, type RouteKey } from './routes';

export type NavItem = { label: string; to: RouteKey; slug?: string; hash?: string; href?: string };

export type UI = {
  seo: { title: string; description: string };
  a11y: { skip: string; openMenu: string; closeMenu: string; language: string; home: string; mainNav: string; footerNav: string };
  nav: NavItem[];
  navCta: NavItem;
  footer: { pitch: [string, string]; columns: { title: string; links: NavItem[] }[]; rights: string; toTop: string };
};

/** Calcule l'URL d'un lien de menu dans une langue */
export const linkHref = (lang: Locale, item: NavItem) => item.href ?? `${route(lang, item.to, item.slug)}${item.hash ? `#${item.hash}` : ''}`;

export const ui: Record<Locale, UI> = {
  fr: {
    seo: {
      title: 'ARIZIKI — Éditeur de logiciels SaaS',
      description: "ARIZIKI conçoit, lance et fait grandir des logiciels SaaS exigeants — d'ARIZIKI EliteOffers à Cibleflow. Une marque, plusieurs logiciels, une seule exigence.",
    },
    a11y: { skip: 'Aller au contenu', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', language: 'Langue', home: 'accueil', mainNav: 'Navigation principale', footerNav: 'Pied de page' },
    nav: [
      { label: 'Écosystème', to: 'home', hash: 'ecosysteme' },
      { label: 'À propos', to: 'about' },
      { label: 'Contact', to: 'contact' },
    ],
    navCta: { label: 'Nous contacter', to: 'contact' },
    footer: {
      pitch: ['Une marque. Plusieurs logiciels.', 'Une seule exigence.'],
      columns: [
        { title: 'Produits', links: [
          { label: 'ARIZIKI EliteOffers', to: 'product', slug: 'eliteoffers' },
          { label: 'Cibleflow', to: 'product', slug: 'cibleflow' },
          { label: 'NOVARYS', to: 'product', slug: 'novarys' },
          { label: 'Prochains SaaS', to: 'home', hash: 'ecosysteme' },
        ] },
        { title: 'Société', links: [
          { label: 'À propos', to: 'about' },
          { label: 'Manifeste', to: 'home', hash: 'manifeste' },
          { label: 'Contact', to: 'contact' },
          { label: 'Création de sites premium', to: 'home', href: 'https://arizikismartness.com' },
        ] },
        { title: 'Légal', links: [
          { label: 'Mentions légales', to: 'legal' },
          { label: 'Confidentialité', to: 'privacy' },
        ] },
      ],
      rights: 'Tous droits réservés.',
      toTop: 'Haut de page',
    },
  },

  en: {
    seo: {
      title: 'ARIZIKI — SaaS software publisher',
      description: 'ARIZIKI designs, launches and grows demanding SaaS products — from ARIZIKI EliteOffers to Cibleflow. One brand, many products, one standard.',
    },
    a11y: { skip: 'Skip to content', openMenu: 'Open menu', closeMenu: 'Close menu', language: 'Language', home: 'home', mainNav: 'Main navigation', footerNav: 'Footer' },
    nav: [
      { label: 'Ecosystem', to: 'home', hash: 'ecosysteme' },
      { label: 'About', to: 'about' },
      { label: 'Contact', to: 'contact' },
    ],
    navCta: { label: 'Contact us', to: 'contact' },
    footer: {
      pitch: ['One brand. Many products.', 'One standard.'],
      columns: [
        { title: 'Products', links: [
          { label: 'ARIZIKI EliteOffers', to: 'product', slug: 'eliteoffers' },
          { label: 'Cibleflow', to: 'product', slug: 'cibleflow' },
          { label: 'NOVARYS', to: 'product', slug: 'novarys' },
          { label: 'Upcoming SaaS', to: 'home', hash: 'ecosysteme' },
        ] },
        { title: 'Company', links: [
          { label: 'About', to: 'about' },
          { label: 'Manifesto', to: 'home', hash: 'manifeste' },
          { label: 'Contact', to: 'contact' },
          { label: 'Premium web design studio', to: 'home', href: 'https://arizikismartness.com' },
        ] },
        { title: 'Legal', links: [
          { label: 'Legal notice', to: 'legal' },
          { label: 'Privacy', to: 'privacy' },
        ] },
      ],
      rights: 'All rights reserved.',
      toTop: 'Back to top',
    },
  },

  de: {
    seo: {
      title: 'ARIZIKI — SaaS-Softwarehaus',
      description: 'ARIZIKI entwickelt, lanciert und skaliert anspruchsvolle SaaS-Produkte — von ARIZIKI EliteOffers bis Cibleflow. Eine Marke, viele Produkte, ein Anspruch.',
    },
    a11y: { skip: 'Zum Inhalt springen', openMenu: 'Menü öffnen', closeMenu: 'Menü schließen', language: 'Sprache', home: 'Startseite', mainNav: 'Hauptnavigation', footerNav: 'Fußzeile' },
    nav: [
      { label: 'Ökosystem', to: 'home', hash: 'ecosysteme' },
      { label: 'Über uns', to: 'about' },
      { label: 'Kontakt', to: 'contact' },
    ],
    navCta: { label: 'Kontakt aufnehmen', to: 'contact' },
    footer: {
      pitch: ['Eine Marke. Viele Produkte.', 'Ein Anspruch.'],
      columns: [
        { title: 'Produkte', links: [
          { label: 'ARIZIKI EliteOffers', to: 'product', slug: 'eliteoffers' },
          { label: 'Cibleflow', to: 'product', slug: 'cibleflow' },
          { label: 'NOVARYS', to: 'product', slug: 'novarys' },
          { label: 'Weitere SaaS', to: 'home', hash: 'ecosysteme' },
        ] },
        { title: 'Unternehmen', links: [
          { label: 'Über uns', to: 'about' },
          { label: 'Manifest', to: 'home', hash: 'manifeste' },
          { label: 'Kontakt', to: 'contact' },
          { label: 'Premium-Webdesign-Studio', to: 'home', href: 'https://arizikismartness.com' },
        ] },
        { title: 'Rechtliches', links: [
          { label: 'Impressum', to: 'legal' },
          { label: 'Datenschutz', to: 'privacy' },
        ] },
      ],
      rights: 'Alle Rechte vorbehalten.',
      toTop: 'Nach oben',
    },
  },
};
