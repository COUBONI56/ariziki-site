/**
 * ─────────────────────────────────────────────────────────────
 *  IDENTITÉ DE LA MARQUE — fichier n°1 à modifier pour un client
 * ─────────────────────────────────────────────────────────────
 *  Données communes à toutes les langues. Les textes traduits
 *  sont dans src/i18n/ui.ts et src/content/.
 */

export const site = {
  name: 'ARIZIKI',
  legalName: 'ARIZIKI',
  url: 'https://ariziki.com',
  ogImage: '/og.jpg',

  contact: {
    // ✏️  Adresse affichée sur tout le site (les messages sont transférés
    //     automatiquement vers la boîte Yahoo personnelle par Hostinger).
    email: 'contacts@ariziki.com',
    // ✏️  Destinataire du formulaire : la boîte Hostinger du domaine (livraison fiable).
    //     Un transfert Hostinger renvoie ensuite chaque message vers votre Yahoo.
    //     (Yahoo refuse les e-mails envoyés directement par un serveur web.)
    formRecipient: 'contacts@ariziki.com',
    // ✏️  Expéditeur des e-mails du formulaire : une vraie boîte Hostinger du domaine.
    formSender: 'contacts@ariziki.com',
    // ✏️  Copie supplémentaire (facultatif). '' = aucune.
    formCopy: '',
  },

  /**
   * Informations légales (mentions légales / Impressum).
   * Statut actuel : micro-entreprise (entrepreneur individuel).
   * ⚠️  Les valeurs entre [crochets] sont à compléter : elles s'affichent
   *     surlignées sur les pages légales tant qu'elles ne sont pas remplies.
   *     Le jour où vous passez en SARL/SAS, mettez à jour ce bloc.
   */
  legal: {
    status: { fr: 'Micro-entreprise (entrepreneur individuel — EI)', en: 'Sole proprietorship (French “micro-entreprise”, EI)', de: 'Einzelunternehmen (französisches „Micro-entreprise“, EI)' },
    owner: '[Prénom NOM]',
    address: '[Adresse de domiciliation]',
    siret: '[N° SIRET]',
    phone: '[Téléphone]',
    vat: { fr: 'TVA non applicable, art. 293 B du CGI', en: 'VAT not applicable (art. 293 B of the French General Tax Code)', de: 'Keine Umsatzsteuer ausgewiesen gemäß Art. 293 B CGI (Frankreich)' },
    // Vérifiez l'entité Hostinger indiquée sur votre facture (Chypre ou Luxembourg selon le pays).
    host: { name: 'Hostinger International Ltd', address: '61 Lordou Vironos str., 6023 Larnaca, Chypre / Cyprus / Zypern', url: 'https://www.hostinger.com' },
  },

  socials: [
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/company/…' },
  ] as { label: string; href: string }[],
} as const;

export type Site = typeof site;
