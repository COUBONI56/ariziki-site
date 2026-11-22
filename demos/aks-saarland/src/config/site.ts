/**
 * Données réelles de l'entreprise — une seule source de vérité.
 * Sources (relevées le 22/11/2026) : aks-saarland.de (Start, Produkte, Mietpark,
 * Partner, Impressum). Rien n'est inventé : pas d'avis, pas de chiffres marketing.
 */
export const site = {
  /** Nom confirmé par le propriétaire le 22/11/2026 (bannière du site actuel) */
  name: 'AKS Fehr & Martini GmbH',
  legalName: 'AKS Fehr & Martini GmbH',
  tagline: 'Agrar / Kfz-Service',
  url: 'https://arizikismartness.com',
  address: {
    street: 'Matthias-Nickels-Straße 2',
    zip: '66346',
    city: 'Püttlingen',
    region: 'Saarland',
    country: 'DE',
  },
  routeUrl: 'https://www.google.com/maps/dir/?api=1&destination=Matthias-Nickels-Stra%C3%9Fe%202%2C%2066346%20P%C3%BCttlingen',
  phone: { display: '06806 9501136', intl: '+49 6806 9501136', href: 'tel:+4968069501136' },
  whatsapp: { display: '0171 8434613', intl: '+49 171 8434613', href: 'https://wa.me/491718434613' },
  email: 'info@aks.saarland',
  managers: ['Alexander Fehr', 'Marius Martini'],
  register: 'Amtsgericht Saarbrücken · HRB 108168',
  /** 0 = dimanche … 6 = samedi ; heures locales Europe/Berlin */
  hours: [
    { days: [1, 2, 3, 4, 5], open: '08:00', close: '18:00' },
    { days: [6], open: '09:00', close: '13:00' },
  ],
  timeZone: 'Europe/Berlin',
  /** Stock d'occasion en ligne (liens repris de la page d'accueil actuelle) */
  listings: [
    { name: 'Kleinanzeigen', url: 'https://www.kleinanzeigen.de/s-bestandsliste.html?userId=133192968' },
    { name: 'Traktorpool', url: 'https://www.traktorpool.de/gebraucht/?vendor-id=281513' },
  ],
  studio: { name: 'ARIZIKI Smartness', url: 'https://arizikismartness.com' },
} as const;

/** Partenaires et marques (page « Partner » du site actuel, noms uniquement). */
export const partners = [
  'Case IH', 'Steyr', 'JCB', 'Pöttinger', 'Strautmann', 'Lemken', 'Brantner', 'Krone', 'Hardi',
  'Monosem', 'Bogballe', 'Tanco', 'APV', 'Quicke', 'Stoll', 'Holmer', 'Eschlböck', 'Annaburger',
  'Thiesgen', 'Düvelsdorf', 'Storti', 'Bohnenkamp', 'Liqui Moly', 'Patura', 'Zanon', 'Dieci',
  'Rabaud', 'Avant', 'Joskin', 'Alpego', 'Orsi', 'Mailleux', 'Kramp', 'Granit Parts',
] as const;

/** Mietpark : fiches techniques reprises telles quelles du site actuel. */
export const rentals = [
  {
    id: 'agri-plus',
    brand: 'DIECI',
    model: 'Agri Plus 40.7 evo',
    kind: 'telehandler',
    specs: [
      { key: 'payload', value: 4, unit: 't' },
      { key: 'lift', value: 7, unit: 'm' },
      { key: 'power', value: 81, unit: 'kW' },
    ],
    features: ['hydrostatic', 'allWheelSteer', 'fpt', 'zeroShock'],
  },
  {
    id: 'agri-mini',
    brand: 'DIECI',
    model: 'Agri Mini 26.6',
    kind: 'telehandlerCompact',
    specs: [
      { key: 'payload', value: 2.6, unit: 't' },
      { key: 'lift', value: 5.68, unit: 'm' },
      { key: 'power', value: 55, unit: 'kW' },
    ],
    features: ['hydrostatic', 'allWheelSteer', 'kubota', 'speed30'],
  },
  {
    id: 'matador',
    brand: 'GÜTTLER',
    model: 'Matador 6 m',
    kind: 'roller',
    specs: [
      { key: 'width', value: 6, unit: 'm' },
      { key: 'diameter', value: '45/50', unit: 'cm' },
    ],
    features: ['prism', 'threePoint', 'foldHydraulic', 'wetSoil'],
  },
  {
    id: 'greenmaster',
    brand: 'GÜTTLER',
    model: 'Greenmaster 6 m',
    kind: 'harrow',
    specs: [
      { key: 'width', value: 6, unit: 'm' },
      { key: 'tines', value: 12, unit: 'mm' },
      { key: 'hopper', value: '410/660', unit: 'l' },
    ],
    features: ['nonstop', 'aggressiveness', 'ripperboard', 'eps5'],
  },
] as const;

export type Rental = (typeof rentals)[number];
