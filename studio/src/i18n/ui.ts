/** Textes d'interface communs (menu, pied de page, SEO, accessibilité). */
import type { Locale } from './index';
import { route, type RouteKey } from './routes';

export type NavItem = { label: string; to: RouteKey; hash?: string; href?: string };

export type UI = {
  seo: { title: string; description: string };
  a11y: { skip: string; openMenu: string; closeMenu: string; language: string; home: string; mainNav: string; footerNav: string };
  nav: NavItem[];
  navCta: NavItem;
  footer: { pitch: [string, string]; columns: { title: string; links: NavItem[] }[]; rights: string; toTop: string };
};

export const linkHref = (lang: Locale, item: NavItem) => item.href ?? `${route(lang, item.to)}${item.hash ? `#${item.hash}` : ''}`;

export const ui: Record<Locale, UI> = {
  fr: {
    seo: {
      title: 'ARIZIKI Smartness — Studio de sites web premium',
      description: "Sites web premium pour startups, professions libérales et marques exigeantes : direction artistique sur mesure, animations, performances maximales. Europe et Afrique francophone.",
    },
    a11y: { skip: 'Aller au contenu', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', language: 'Langue', home: 'accueil', mainNav: 'Navigation principale', footerNav: 'Pied de page' },
    nav: [
      { label: 'Offres', to: 'home', hash: 'offres' },
      { label: 'Méthode', to: 'home', hash: 'methode' },
      { label: 'Réalisation', to: 'home', hash: 'ecosysteme' },
    ],
    navCta: { label: 'Demander un devis', to: 'contact' },
    footer: {
      pitch: ['Des sites web premium,', 'au niveau des grandes marques.'],
      columns: [
        { title: 'Studio', links: [
          { label: 'Offres', to: 'home', hash: 'offres' },
          { label: 'Méthode', to: 'home', hash: 'methode' },
          { label: 'Questions fréquentes', to: 'home', hash: 'faq' },
        ] },
        { title: 'ARIZIKI', links: [
          { label: 'ariziki.com', to: 'home', href: 'https://ariziki.com' },
          { label: 'Demander un devis', to: 'contact' },
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
};
