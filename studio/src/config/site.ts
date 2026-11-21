/**
 * ─────────────────────────────────────────────────────────────
 *  IDENTITÉ DE LA MARQUE — fichier n°1 à modifier pour un client
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'ARIZIKI Smartness',
  /** Mot-symbole du logo (grand) et sous-titre (petit), comme le logo EliteOffers */
  wordmark: 'ARIZIKI',
  subBrand: 'Smartness',
  legalName: 'ARIZIKI Smartness',
  url: 'https://arizikismartness.com',
  ogImage: '/og.jpg',

  contact: {
    email: 'contacts@ariziki.com',
    formRecipient: 'contacts@ariziki.com',
    formSender: 'contacts@ariziki.com',
    formCopy: '',
  },

  /** Informations légales : mêmes que ariziki.com (même micro-entreprise). */
  legal: {
    status: { fr: 'Micro-entreprise (entrepreneur individuel — EI)' },
    owner: '[Prénom NOM]',
    address: '[Adresse de domiciliation]',
    siret: '[N° SIRET]',
    phone: '[Téléphone]',
    vat: { fr: 'TVA non applicable, art. 293 B du CGI' },
    host: { name: 'Hostinger International Ltd', address: '61 Lordou Vironos str., 6023 Larnaca, Chypre', url: 'https://www.hostinger.com' },
  },

  socials: [] as { label: string; href: string }[],
} as const;

export type Site = typeof site;
