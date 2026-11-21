/**
 * Pages produits — FR / EN / DE
 * Une entrée par produit qui a sa page (statut 'live' ou 'building').
 * ⚠️  EliteOffers : chiffres et accroches repris de ariziki-eliteoffers.com.
 *     Les 3 étapes « Comment ça marche » sont une synthèse à valider.
 */
import type { Locale } from '../i18n';

type Stat = { value: number | string; suffix?: string; label: string };
type Item = { title: string; text: string };

export type ProductPage = {
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string[]; lead: string; primary: string; secondary: string };
  stats?: { items: Stat[]; disclaimer: string };
  steps?: { eyebrow: string; title: string[]; items: Item[] };
  features?: { eyebrow: string; title: string[]; items: Item[] };
  roadmap?: { eyebrow: string; title: string[]; items: { title: string; state: 'done' | 'current' | 'next'; label: string }[] };
  pricing?: {
    eyebrow: string; title: string[]; lead: string; period: string; badge: string; includedTitle: string; included: string[]; note: string;
    plans: { name: string; price: string; audience: string; cta: string; featured?: boolean }[];
  };
  cta: { eyebrow: string; title: string[]; lead: string; button: string };
};

export const productPages: Record<string, Record<Locale, ProductPage>> = {
  /* ───────────────────────── ARIZIKI EliteOffers ───────────────────────── */
  eliteoffers: {
    fr: {
      seo: {
        title: 'ARIZIKI EliteOffers — La plateforme des affiliés high-ticket',
        description: "Générez des funnels IA en un clic et accédez à 39 réseaux d'affiliation pour booster vos commissions. Un logiciel ARIZIKI.",
      },
      hero: {
        eyebrow: 'ARIZIKI EliteOffers · En ligne',
        title: ['Générez des funnels IA.', 'Boostez vos commissions.'],
        lead: "La plateforme des affiliés high-ticket : accédez à 39 réseaux d'affiliation et créez des funnels complets en un clic.",
        primary: 'Démarrer sur EliteOffers',
        secondary: 'Poser une question',
      },
      stats: {
        items: [
          { value: 39, label: "réseaux d'affiliation" },
          { value: 24, label: 'offres réelles' },
          { value: '1 clic', label: 'génération IA' },
          { value: 75, suffix: ' %', label: 'de commission max.' },
        ],
        disclaimer: "Les résultats dépendent de votre travail, de votre audience et des conditions des réseaux d'affiliation.",
      },
      steps: {
        eyebrow: 'Comment ça marche',
        title: ['Trois étapes,', 'un funnel complet.'],
        items: [
          { title: 'Choisissez une offre', text: "Parcourez des offres high-ticket issues de 39 réseaux d'affiliation." },
          { title: 'Générez votre funnel', text: "L'IA crée en un clic un funnel complet, prêt à être diffusé." },
          { title: 'Développez vos commissions', text: 'Diffusez, suivez vos résultats et concentrez-vous sur les offres qui performent.' },
        ],
      },
      features: {
        eyebrow: 'Points forts',
        title: ['Pensé pour les affiliés', 'exigeants.'],
        items: [
          { title: 'Funnels générés par IA', text: "Un funnel complet créé automatiquement à partir de l'offre choisie." },
          { title: "39 réseaux d'affiliation", text: 'Un accès centralisé, au lieu de jongler entre plusieurs plateformes.' },
          { title: 'Offres high-ticket', text: 'Des offres à forte valeur, pour des commissions à la hauteur de vos efforts.' },
          { title: 'En 3 langues', text: 'Une interface disponible en français, en anglais et en allemand.' },
        ],
      },
      cta: {
        eyebrow: 'ARIZIKI EliteOffers',
        title: ['Prêt à lancer', 'votre premier funnel ?'],
        lead: 'Créez votre compte en quelques minutes et générez votre premier funnel dès aujourd’hui.',
        button: 'Ouvrir EliteOffers',
      },
    },
    en: {
      seo: {
        title: 'ARIZIKI EliteOffers — The platform for high-ticket affiliates',
        description: 'Generate AI funnels in one click and access 39 affiliate networks to boost your commissions. An ARIZIKI product.',
      },
      hero: {
        eyebrow: 'ARIZIKI EliteOffers · Live',
        title: ['Generate AI funnels.', 'Boost your commissions.'],
        lead: 'The platform for high-ticket affiliates: access 39 affiliate networks and build complete funnels in one click.',
        primary: 'Get started on EliteOffers',
        secondary: 'Ask a question',
      },
      stats: {
        items: [
          { value: 39, label: 'affiliate networks' },
          { value: 24, label: 'real offers' },
          { value: '1 click', label: 'AI generation' },
          { value: 75, suffix: '%', label: 'max. commission' },
        ],
        disclaimer: 'Results depend on your work, your audience and the terms of each affiliate network.',
      },
      steps: {
        eyebrow: 'How it works',
        title: ['Three steps,', 'one complete funnel.'],
        items: [
          { title: 'Pick an offer', text: 'Browse high-ticket offers from 39 affiliate networks.' },
          { title: 'Generate your funnel', text: 'The AI builds a complete funnel in one click, ready to publish.' },
          { title: 'Grow your commissions', text: 'Publish, track your results and focus on the offers that perform.' },
        ],
      },
      features: {
        eyebrow: 'Highlights',
        title: ['Built for demanding', 'affiliates.'],
        items: [
          { title: 'AI-generated funnels', text: 'A complete funnel created automatically from the offer you choose.' },
          { title: '39 affiliate networks', text: 'One central access point instead of juggling several platforms.' },
          { title: 'High-ticket offers', text: 'High-value offers, for commissions that match your effort.' },
          { title: 'In 3 languages', text: 'An interface available in French, English and German.' },
        ],
      },
      cta: {
        eyebrow: 'ARIZIKI EliteOffers',
        title: ['Ready to launch', 'your first funnel?'],
        lead: 'Create your account in minutes and generate your first funnel today.',
        button: 'Open EliteOffers',
      },
    },
    de: {
      seo: {
        title: 'ARIZIKI EliteOffers — Die Plattform für High-Ticket-Affiliates',
        description: 'Erstellen Sie KI-Funnels mit einem Klick und nutzen Sie 39 Affiliate-Netzwerke, um Ihre Provisionen zu steigern. Ein ARIZIKI-Produkt.',
      },
      hero: {
        eyebrow: 'ARIZIKI EliteOffers · Online',
        title: ['KI-Funnels erstellen.', 'Provisionen steigern.'],
        lead: 'Die Plattform für High-Ticket-Affiliates: Zugriff auf 39 Affiliate-Netzwerke und komplette Funnels mit einem Klick.',
        primary: 'Mit EliteOffers starten',
        secondary: 'Eine Frage stellen',
      },
      stats: {
        items: [
          { value: 39, label: 'Affiliate-Netzwerke' },
          { value: 24, label: 'echte Angebote' },
          { value: '1 Klick', label: 'KI-Generierung' },
          { value: 75, suffix: ' %', label: 'max. Provision' },
        ],
        disclaimer: 'Die Ergebnisse hängen von Ihrer Arbeit, Ihrer Zielgruppe und den Bedingungen der Affiliate-Netzwerke ab.',
      },
      steps: {
        eyebrow: 'So funktioniert es',
        title: ['Drei Schritte,', 'ein kompletter Funnel.'],
        items: [
          { title: 'Angebot wählen', text: 'Entdecken Sie High-Ticket-Angebote aus 39 Affiliate-Netzwerken.' },
          { title: 'Funnel generieren', text: 'Die KI erstellt mit einem Klick einen kompletten Funnel, bereit zur Veröffentlichung.' },
          { title: 'Provisionen ausbauen', text: 'Veröffentlichen, Ergebnisse verfolgen und auf die Angebote setzen, die funktionieren.' },
        ],
      },
      features: {
        eyebrow: 'Highlights',
        title: ['Gemacht für anspruchsvolle', 'Affiliates.'],
        items: [
          { title: 'KI-generierte Funnels', text: 'Ein kompletter Funnel, automatisch aus dem gewählten Angebot erstellt.' },
          { title: '39 Affiliate-Netzwerke', text: 'Ein zentraler Zugang statt vieler verschiedener Plattformen.' },
          { title: 'High-Ticket-Angebote', text: 'Hochwertige Angebote für Provisionen, die Ihrem Einsatz entsprechen.' },
          { title: 'In 3 Sprachen', text: 'Eine Oberfläche auf Französisch, Englisch und Deutsch.' },
        ],
      },
      cta: {
        eyebrow: 'ARIZIKI EliteOffers',
        title: ['Bereit für', 'Ihren ersten Funnel?'],
        lead: 'Erstellen Sie Ihr Konto in wenigen Minuten und generieren Sie noch heute Ihren ersten Funnel.',
        button: 'EliteOffers öffnen',
      },
    },
  },

  /* ───────────────────────────── Cibleflow ───────────────────────────── */
  cibleflow: {
    fr: {
      seo: {
        title: 'Cibleflow — La bonne cible, le bon contact',
        description: "Cibleflow identifie les bons décideurs, évalue leurs besoins et prépare le bon message d'approche grâce à l'IA. Un logiciel de l'écosystème ARIZIKI.",
      },
      hero: {
        eyebrow: 'Cibleflow · En ligne',
        title: ['Arrêtez de chercher.', 'Recevez vos prospects', 'qualifiés.'],
        lead: "Les bons décideurs. Les vrais besoins. Le bon angle d'approche. Cibleflow transforme votre client idéal en pistes commerciales, pour les PME, TPE, call centers, freelances, formateurs et coachs.",
        primary: 'Découvrir Cibleflow',
        secondary: 'Poser une question',
      },
      stats: {
        items: [
          { value: 4, label: 'étapes, de la cible au message' },
          { value: 3, label: 'canaux : LinkedIn, WhatsApp, e-mail' },
          { value: 4, label: 'langues : FR · EN · DE · IT' },
          { value: 19, suffix: ' €', label: 'par mois pour démarrer, sans engagement' },
        ],
        disclaimer: 'Tarifs et fonctionnalités indiqués sur cibleflow.com au 21 novembre 2026.',
      },
      steps: {
        eyebrow: 'Comment ça marche',
        title: ['De votre client idéal', 'à la bonne approche.'],
        items: [
          { title: 'Décrivez votre cible', text: 'Votre offre, votre marché et votre client idéal.' },
          { title: 'Identifiez les décideurs', text: "L'IA indique les postes à contacter et les entreprises à explorer." },
          { title: 'Évaluez le besoin', text: "Un score et des signaux d'achat pour prioriser vos pistes." },
          { title: 'Trouvez le bon angle', text: 'Un message adapté au décideur, au marché et au canal choisi.' },
        ],
      },
      features: {
        eyebrow: 'Points forts',
        title: ['Moins de recherche,', 'plus de rendez-vous.'],
        items: [
          { title: 'Recherche LinkedIn prête', text: 'Une requête LinkedIn prête à copier pour trouver vos décideurs.' },
          { title: 'Messages personnalisés', text: 'Sur LinkedIn, WhatsApp ou par e-mail, rédigés dans la langue du prospect.' },
          { title: 'Pipeline intégré', text: 'Suivez vos contacts et vos prochaines actions, de la première piste au client signé.' },
          { title: 'Afrique, Europe et monde', text: 'Une prospection pensée pour tous les marchés, avec une IA intégrée et une connexion sécurisée.' },
        ],
      },
      pricing: {
        eyebrow: 'Tarifs',
        title: ['Un flux adapté', 'à votre ambition.'],
        lead: 'Trois offres mensuelles, tous les outils essentiels. Sans engagement.',
        period: '/ mois', badge: 'Le plus choisi', includedTitle: 'Inclus dans chaque offre',
        included: ['Identification de décideurs par IA', 'Pipeline personnel et prochaines actions', 'Messages LinkedIn, WhatsApp et e-mail'],
        note: 'Prix mensuels affichés sur cibleflow.com au 21 novembre 2026. Détail des offres sur cibleflow.com.',
        plans: [
          { name: 'Flux Solo', price: '19 €', audience: 'Pour les indépendants, freelances et coachs.', cta: 'Choisir Flux Solo' },
          { name: 'Flux Équipe', price: '49 €', audience: 'Pour les call centers et les PME / TPE.', cta: 'Choisir Flux Équipe', featured: true },
          { name: 'Flux Pro', price: '99 €', audience: 'Pour les structures organisées.', cta: 'Choisir Flux Pro' },
        ],
      },
      cta: {
        eyebrow: 'Cibleflow',
        title: ['Trouvez vos prochains', 'clients dès aujourd’hui.'],
        lead: 'Trois offres mensuelles, sans engagement. Commencez par décrire votre cible.',
        button: 'Ouvrir Cibleflow',
      },
    },
    en: {
      seo: {
        title: 'Cibleflow — The right target, the right contact',
        description: 'Cibleflow finds the right decision-makers, assesses their needs and drafts the right outreach message with AI. Part of the ARIZIKI ecosystem.',
      },
      hero: {
        eyebrow: 'Cibleflow · Live',
        title: ['Stop searching.', 'Get qualified', 'leads.'],
        lead: 'The right decision-makers. The real needs. The right approach. Cibleflow turns your ideal customer into sales leads — for SMEs, call centers, freelancers, trainers and coaches.',
        primary: 'Discover Cibleflow',
        secondary: 'Ask a question',
      },
      stats: {
        items: [
          { value: 4, label: 'steps, from target to message' },
          { value: 3, label: 'channels: LinkedIn, WhatsApp, email' },
          { value: 4, label: 'languages: FR · EN · DE · IT' },
          { value: 19, suffix: ' €', label: 'per month to start, no commitment' },
        ],
        disclaimer: 'Prices and features as shown on cibleflow.com on 21 November 2026.',
      },
      steps: {
        eyebrow: 'How it works',
        title: ['From your ideal customer', 'to the right approach.'],
        items: [
          { title: 'Describe your target', text: 'Your offer, your market and your ideal customer.' },
          { title: 'Find the decision-makers', text: 'The AI points to the roles to contact and the companies to explore.' },
          { title: 'Assess the need', text: 'A score and buying signals to prioritise your leads.' },
          { title: 'Find the right angle', text: 'A message tailored to the decision-maker, the market and the channel.' },
        ],
      },
      features: {
        eyebrow: 'Highlights',
        title: ['Less searching,', 'more meetings.'],
        items: [
          { title: 'Ready-made LinkedIn search', text: 'A LinkedIn query ready to copy to find your decision-makers.' },
          { title: 'Personalised messages', text: 'On LinkedIn, WhatsApp or by email, written in the prospect’s language.' },
          { title: 'Built-in pipeline', text: 'Track contacts and next steps, from first lead to signed client.' },
          { title: 'Africa, Europe and beyond', text: 'Prospecting built for every market, with built-in AI and a secure connection.' },
        ],
      },
      pricing: {
        eyebrow: 'Pricing',
        title: ['A flow for', 'every ambition.'],
        lead: 'Three monthly plans, all the essential tools. No commitment.',
        period: '/ month', badge: 'Most popular', includedTitle: 'Included in every plan',
        included: ['AI-powered decision-maker identification', 'Personal pipeline and next actions', 'LinkedIn, WhatsApp and email messages'],
        note: 'Monthly prices as shown on cibleflow.com on 21 November 2026. Full plan details on cibleflow.com.',
        plans: [
          { name: 'Flux Solo', price: '€19', audience: 'For independents, freelancers and coaches.', cta: 'Choose Flux Solo' },
          { name: 'Flux Équipe', price: '€49', audience: 'For call centers and SMEs.', cta: 'Choose Flux Équipe', featured: true },
          { name: 'Flux Pro', price: '€99', audience: 'For established organisations.', cta: 'Choose Flux Pro' },
        ],
      },
      cta: {
        eyebrow: 'Cibleflow',
        title: ['Find your next', 'clients today.'],
        lead: 'Three monthly plans, no commitment. Start by describing your target.',
        button: 'Open Cibleflow',
      },
    },
    de: {
      seo: {
        title: 'Cibleflow — Die richtige Zielgruppe, der richtige Kontakt',
        description: 'Cibleflow findet mit KI die richtigen Entscheider, bewertet ihren Bedarf und bereitet die passende Ansprache vor. Teil des ARIZIKI-Ökosystems.',
      },
      hero: {
        eyebrow: 'Cibleflow · Online',
        title: ['Schluss mit Suchen.', 'Qualifizierte Leads', 'erhalten.'],
        lead: 'Die richtigen Entscheider. Der echte Bedarf. Die passende Ansprache. Cibleflow macht aus Ihrem Wunschkunden konkrete Vertriebschancen — für KMU, Callcenter, Freelancer, Trainer und Coaches.',
        primary: 'Cibleflow entdecken',
        secondary: 'Eine Frage stellen',
      },
      stats: {
        items: [
          { value: 4, label: 'Schritte, von der Zielgruppe zur Nachricht' },
          { value: 3, label: 'Kanäle: LinkedIn, WhatsApp, E-Mail' },
          { value: 4, label: 'Sprachen: FR · EN · DE · IT' },
          { value: 19, suffix: ' €', label: 'pro Monat zum Start, ohne Vertragsbindung' },
        ],
        disclaimer: 'Preise und Funktionen laut cibleflow.com, Stand 21. November 2026.',
      },
      steps: {
        eyebrow: 'So funktioniert es',
        title: ['Vom Wunschkunden', 'zur richtigen Ansprache.'],
        items: [
          { title: 'Zielgruppe beschreiben', text: 'Ihr Angebot, Ihr Markt und Ihr Wunschkunde.' },
          { title: 'Entscheider finden', text: 'Die KI nennt die passenden Positionen und Unternehmen.' },
          { title: 'Bedarf bewerten', text: 'Ein Score und Kaufsignale, um Ihre Leads zu priorisieren.' },
          { title: 'Den richtigen Ansatz finden', text: 'Eine Nachricht, passend zu Entscheider, Markt und Kanal.' },
        ],
      },
      features: {
        eyebrow: 'Highlights',
        title: ['Weniger suchen,', 'mehr Termine.'],
        items: [
          { title: 'Fertige LinkedIn-Suche', text: 'Eine kopierfertige LinkedIn-Suche, um Ihre Entscheider zu finden.' },
          { title: 'Persönliche Nachrichten', text: 'Über LinkedIn, WhatsApp oder E-Mail, in der Sprache des Interessenten.' },
          { title: 'Integrierte Pipeline', text: 'Kontakte und nächste Schritte im Blick, vom ersten Lead bis zum Abschluss.' },
          { title: 'Afrika, Europa und weltweit', text: 'Prospecting für jeden Markt, mit integrierter KI und sicherer Verbindung.' },
        ],
      },
      pricing: {
        eyebrow: 'Preise',
        title: ['Ein Flow für', 'jede Ambition.'],
        lead: 'Drei Monatstarife, alle wichtigen Werkzeuge. Ohne Vertragsbindung.',
        period: '/ Monat', badge: 'Am beliebtesten', includedTitle: 'In jedem Tarif enthalten',
        included: ['KI-gestützte Identifizierung von Entscheidern', 'Persönliche Pipeline und nächste Schritte', 'Nachrichten über LinkedIn, WhatsApp und E-Mail'],
        note: 'Monatspreise laut cibleflow.com, Stand 21. November 2026. Alle Details auf cibleflow.com.',
        plans: [
          { name: 'Flux Solo', price: '19 €', audience: 'Für Selbstständige, Freelancer und Coaches.', cta: 'Flux Solo wählen' },
          { name: 'Flux Équipe', price: '49 €', audience: 'Für Callcenter und KMU.', cta: 'Flux Équipe wählen', featured: true },
          { name: 'Flux Pro', price: '99 €', audience: 'Für etablierte Unternehmen.', cta: 'Flux Pro wählen' },
        ],
      },
      cta: {
        eyebrow: 'Cibleflow',
        title: ['Finden Sie Ihre nächsten', 'Kunden noch heute.'],
        lead: 'Drei Monatstarife, ohne Vertragsbindung. Beschreiben Sie zuerst Ihre Zielgruppe.',
        button: 'Cibleflow öffnen',
      },
    },
  },

  /* ───────────────────────────── NOVARYS ───────────────────────────── */
  novarys: {
    fr: {
      seo: {
        title: 'NOVARYS — Le prochain SaaS ARIZIKI, en construction',
        description: "NOVARYS est le prochain logiciel de l'écosystème ARIZIKI. Inscrivez-vous pour être informé de son lancement.",
      },
      hero: {
        eyebrow: 'NOVARYS · En construction',
        title: ['NOVARYS', 'prend forme.'],
        lead: "Le prochain SaaS de l'écosystème ARIZIKI est en cours de développement. Laissez-nous un message pour être parmi les premiers informés de son lancement.",
        primary: 'Être informé du lancement',
        secondary: "Découvrir l'écosystème",
      },
      roadmap: {
        eyebrow: 'Avancement',
        title: ['Où en est', 'NOVARYS ?'],
        items: [
          { title: 'Conception', state: 'done', label: 'Terminée' },
          { title: 'Développement', state: 'current', label: 'En cours' },
          { title: 'Accès anticipé', state: 'next', label: 'À venir' },
          { title: 'Lancement', state: 'next', label: 'À venir' },
        ],
      },
      cta: {
        eyebrow: 'Accès anticipé',
        title: ['Soyez parmi', 'les premiers.'],
        lead: 'Écrivez-nous : nous vous préviendrons dès que NOVARYS ouvrira ses portes.',
        button: 'Être informé du lancement',
      },
    },
    en: {
      seo: {
        title: 'NOVARYS — The next ARIZIKI SaaS, in development',
        description: 'NOVARYS is the next product in the ARIZIKI ecosystem. Get in touch to hear about its launch.',
      },
      hero: {
        eyebrow: 'NOVARYS · In development',
        title: ['NOVARYS', 'is taking shape.'],
        lead: 'The next SaaS in the ARIZIKI ecosystem is currently being built. Send us a message to be among the first to hear about its launch.',
        primary: 'Get notified at launch',
        secondary: 'Explore the ecosystem',
      },
      roadmap: {
        eyebrow: 'Progress',
        title: ['Where is', 'NOVARYS at?'],
        items: [
          { title: 'Design', state: 'done', label: 'Done' },
          { title: 'Development', state: 'current', label: 'In progress' },
          { title: 'Early access', state: 'next', label: 'Upcoming' },
          { title: 'Launch', state: 'next', label: 'Upcoming' },
        ],
      },
      cta: {
        eyebrow: 'Early access',
        title: ['Be among', 'the first.'],
        lead: 'Write to us and we will let you know as soon as NOVARYS opens its doors.',
        button: 'Get notified at launch',
      },
    },
    de: {
      seo: {
        title: 'NOVARYS — Das nächste ARIZIKI-SaaS, in Entwicklung',
        description: 'NOVARYS ist das nächste Produkt im ARIZIKI-Ökosystem. Schreiben Sie uns, um vom Start zu erfahren.',
      },
      hero: {
        eyebrow: 'NOVARYS · In Entwicklung',
        title: ['NOVARYS', 'nimmt Gestalt an.'],
        lead: 'Das nächste SaaS im ARIZIKI-Ökosystem entsteht gerade. Schreiben Sie uns, um als Erste vom Start zu erfahren.',
        primary: 'Zum Start benachrichtigt werden',
        secondary: 'Ökosystem entdecken',
      },
      roadmap: {
        eyebrow: 'Fortschritt',
        title: ['Wo steht', 'NOVARYS?'],
        items: [
          { title: 'Konzeption', state: 'done', label: 'Abgeschlossen' },
          { title: 'Entwicklung', state: 'current', label: 'Läuft' },
          { title: 'Früher Zugang', state: 'next', label: 'Demnächst' },
          { title: 'Start', state: 'next', label: 'Demnächst' },
        ],
      },
      cta: {
        eyebrow: 'Früher Zugang',
        title: ['Seien Sie', 'unter den Ersten.'],
        lead: 'Schreiben Sie uns — wir melden uns, sobald NOVARYS startet.',
        button: 'Zum Start benachrichtigt werden',
      },
    },
  },
};
