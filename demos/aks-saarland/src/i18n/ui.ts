import type { Locale } from './index';

/** Libellés d'interface (menu, formulaire, horaires, pied de page) dans les 3 langues. */
export const ui = {
  de: {
    seo: {
      title: 'AKS Fehr & Martini GmbH – Agrar / Kfz-Service in Püttlingen',
      description:
        'Kfz-Meisterbetrieb in Püttlingen: Service, Reparatur und Verkauf für Pkw, Nutzfahrzeuge, Land-, Bau- und Forstmaschinen. Mit Mietpark und Ersatzteilservice.',
    },
    a11y: { skip: 'Zum Inhalt springen', menuOpen: 'Menü öffnen', menuClose: 'Menü schließen', lang: 'Sprache wählen', home: 'AKS Fehr & Martini GmbH – Startseite' },
    nav: [
      { id: 'werkstatt', label: 'Werkstatt' },
      { id: 'maschinen', label: 'Maschinen' },
      { id: 'mietpark', label: 'Mietpark' },
      { id: 'kontakt', label: 'Kontakt' },
    ],
    navCta: 'Termin anfragen',
    concept: 'Konzept-Entwurf',
    conceptLong: 'Konzept-Entwurf von ARIZIKI Smartness – nicht die offizielle Website von AKS.',
    tagline: 'Agrar / Kfz-Service',
    hours: {
      title: 'Öffnungszeiten',
      rows: [
        { label: 'Montag – Freitag', days: [1, 2, 3, 4, 5] },
        { label: 'Samstag', days: [6] },
        { label: 'Sonntag', days: [0] },
      ],
      closed: 'geschlossen',
      appointment: 'und nach Vereinbarung',
      suffix: ' Uhr',
      openNow: 'Jetzt geöffnet',
      closedNow: 'Jetzt geschlossen',
      until: 'bis {t} Uhr',
      opens: 'öffnet {d} um {t} Uhr',
      today: 'heute',
      tomorrow: 'morgen',
      weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    },
    contact: {
      address: 'Adresse',
      route: 'Route planen',
      office: 'Büro',
      parts: 'Teilebestellung per WhatsApp',
      email: 'E-Mail',
      reach: 'Kontakt',
    },
    footer: { nav: 'Navigation', rights: 'AKS Fehr & Martini GmbH', design: 'Konzept & Gestaltung' },
  },
  fr: {
    seo: {
      title: 'AKS Fehr & Martini GmbH – Service agricole & automobile à Püttlingen',
      description:
        'Atelier de maître artisan à Püttlingen (Sarre) : entretien, réparation et vente de voitures, utilitaires, machines agricoles, de chantier et forestières. Location et pièces détachées.',
    },
    a11y: { skip: 'Aller au contenu', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu', lang: 'Choisir la langue', home: 'AKS Fehr & Martini GmbH – accueil' },
    nav: [
      { id: 'werkstatt', label: 'Atelier' },
      { id: 'maschinen', label: 'Machines' },
      { id: 'mietpark', label: 'Location' },
      { id: 'kontakt', label: 'Contact' },
    ],
    navCta: 'Prendre rendez-vous',
    concept: 'Maquette conceptuelle',
    conceptLong: 'Maquette conceptuelle réalisée par ARIZIKI Smartness – ce n’est pas le site officiel d’AKS.',
    tagline: 'Service agricole & automobile',
    hours: {
      title: 'Horaires',
      rows: [
        { label: 'Lundi – vendredi', days: [1, 2, 3, 4, 5] },
        { label: 'Samedi', days: [6] },
        { label: 'Dimanche', days: [0] },
      ],
      closed: 'fermé',
      appointment: 'et sur rendez-vous',
      suffix: '',
      openNow: 'Ouvert',
      closedNow: 'Fermé',
      until: 'jusqu’à {t}',
      opens: 'ouvre {d} à {t}',
      today: 'aujourd’hui',
      tomorrow: 'demain',
      weekdays: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
    },
    contact: {
      address: 'Adresse',
      route: 'Itinéraire',
      office: 'Bureau',
      parts: 'Commande de pièces par WhatsApp',
      email: 'E-mail',
      reach: 'Contact',
    },
    footer: { nav: 'Navigation', rights: 'AKS Fehr & Martini GmbH', design: 'Concept & design' },
  },
  it: {
    seo: {
      title: 'AKS Fehr & Martini GmbH – Servizio agricolo e auto a Püttlingen',
      description:
        'Officina di maestri artigiani a Püttlingen (Saarland): manutenzione, riparazione e vendita di auto, veicoli commerciali, macchine agricole, edili e forestali. Noleggio e ricambi.',
    },
    a11y: { skip: 'Vai al contenuto', menuOpen: 'Apri il menu', menuClose: 'Chiudi il menu', lang: 'Scegli la lingua', home: 'AKS Fehr & Martini GmbH – home' },
    nav: [
      { id: 'werkstatt', label: 'Officina' },
      { id: 'maschinen', label: 'Macchine' },
      { id: 'mietpark', label: 'Noleggio' },
      { id: 'kontakt', label: 'Contatti' },
    ],
    navCta: 'Prenota',
    concept: 'Concept',
    conceptLong: 'Concept realizzato da ARIZIKI Smartness – non è il sito ufficiale di AKS.',
    tagline: 'Servizio agricolo & auto',
    hours: {
      title: 'Orari',
      rows: [
        { label: 'Lunedì – venerdì', days: [1, 2, 3, 4, 5] },
        { label: 'Sabato', days: [6] },
        { label: 'Domenica', days: [0] },
      ],
      closed: 'chiuso',
      appointment: 'e su appuntamento',
      suffix: '',
      openNow: 'Aperto ora',
      closedNow: 'Chiuso ora',
      until: 'fino alle {t}',
      opens: 'apre {d} alle {t}',
      today: 'oggi',
      tomorrow: 'domani',
      weekdays: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
    },
    contact: {
      address: 'Indirizzo',
      route: 'Indicazioni stradali',
      office: 'Ufficio',
      parts: 'Ordine ricambi via WhatsApp',
      email: 'E-mail',
      reach: 'Contatti',
    },
    footer: { nav: 'Navigazione', rights: 'AKS Fehr & Martini GmbH', design: 'Concept & design' },
  },
} satisfies Record<Locale, unknown>;

export type UI = (typeof ui)['de'];
