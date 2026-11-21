/**
 * ─────────────────────────────────────────────────────────────
 *  TEXTES DE LA PAGE D'ACCUEIL — FR / EN / DE
 * ─────────────────────────────────────────────────────────────
 *  Modifier un texte ici ne casse jamais la mise en page ni les
 *  animations. Les grands titres sont des tableaux : un élément
 *  = une ligne.
 */
import type { Locale } from '../i18n';

type Link = { label: string; href: string };

export type HomeContent = {
  hero: { eyebrow: string; title: string[]; lead: string; primary: Link; secondary: Link; scrollLabel: string; soonChip: string };
  manifesto: { eyebrow: string; text: string; aside: { title: string; text: string }[] };
  ecosystem: { eyebrow: string; title: string[]; lead: string; visit: string; notify: string; more: string };
  method: { eyebrow: string; title: string[]; lead: string; steps: { n: string; title: string; text: string }[] };
  principles: { eyebrow: string; title: string[]; items: { icon: string; title: string; text: string }[] };
  cta: { eyebrow: string; title: string[]; lead: string; button: string };
};

export const home: Record<Locale, HomeContent> = {
  /* ─────────────────────────── FRANÇAIS ─────────────────────────── */
  fr: {
    hero: {
      eyebrow: 'Éditeur de logiciels SaaS',
      title: ['Une marque.', 'Plusieurs logiciels.', 'Une seule exigence.'],
      lead: "ARIZIKI conçoit, lance et fait grandir des logiciels SaaS — d'ARIZIKI EliteOffers à Cibleflow — avec la même obsession : des outils simples, puissants et beaux à utiliser.",
      primary: { label: "Découvrir l'écosystème", href: '#ecosysteme' },
      secondary: { label: "Parler à l'équipe", href: 'contact' },
      scrollLabel: 'Défiler',
      soonChip: '+ à venir',
    },
    manifesto: {
      eyebrow: 'Manifeste',
      text: "ARIZIKI signifie « richesse ». Pas seulement celle qui se compte : celle qui se crée. Du temps rendu aux équipes, des revenus mieux maîtrisés, des idées qui deviennent des produits. C'est cette richesse que nos logiciels veulent produire, chaque jour.",
      aside: [
        { title: 'Ce que nous faisons', text: "Nous concevons, développons et opérons nos propres logiciels SaaS, de l'idée jusqu'au produit en production." },
        { title: 'Pourquoi une marque', text: "Chaque produit a sa mission. Tous partagent le même socle : design soigné, technologie solide, équipe à l'écoute." },
      ],
    },
    ecosystem: {
      eyebrow: "L'écosystème",
      title: ['Des produits distincts.', 'Un même ADN.'],
      lead: 'Chaque logiciel ARIZIKI répond à un besoin précis. Tous sont construits selon les mêmes standards.',
      visit: 'Visiter',
      notify: 'Être informé du lancement',
      more: 'En savoir plus',
    },
    method: {
      eyebrow: 'Méthode',
      title: ["De l'idée", 'au produit qui dure.'],
      lead: 'Quatre étapes, appliquées à chacun de nos logiciels. Sans raccourci.',
      steps: [
        { n: '01', title: 'Écouter', text: "Chaque produit part d'un problème réel, observé sur le terrain — jamais d'une simple tendance." },
        { n: '02', title: 'Concevoir', text: 'Expérience, architecture et sécurité sont pensées ensemble, dès le premier jour.' },
        { n: '03', title: 'Lancer', text: 'Une première version rapide, testée avec de vrais utilisateurs, puis améliorée sans relâche.' },
        { n: '04', title: 'Faire grandir', text: 'Mises à jour continues, support humain et une infrastructure qui suit votre croissance.' },
      ],
    },
    principles: {
      eyebrow: 'Principes',
      title: ['Ce que partagent', 'tous nos produits.'],
      items: [
        { icon: 'simple', title: 'Simplicité', text: "Une interface claire, qu'on maîtrise en quelques minutes, sans formation." },
        { icon: 'speed', title: 'Performance', text: 'Des outils rapides sur tous les écrans, du bureau au smartphone.' },
        { icon: 'shield', title: 'Confiance', text: 'Vos données sont protégées et traitées avec le plus grand soin.' },
        { icon: 'people', title: 'Proximité', text: 'Une équipe qui répond, écoute et fait évoluer les produits avec vous.' },
      ],
    },
    cta: {
      eyebrow: 'Contact',
      title: ['Construisons la suite,', 'ensemble.'],
      lead: 'Un projet, un partenariat, une question sur nos produits ? Écrivez-nous, nous répondons à chaque message.',
      button: 'Écrire à ARIZIKI',
    },
  },

  /* ─────────────────────────── ENGLISH ─────────────────────────── */
  en: {
    hero: {
      eyebrow: 'SaaS software publisher',
      title: ['One brand.', 'Many products.', 'One standard.'],
      lead: 'ARIZIKI designs, launches and grows SaaS products — from ARIZIKI EliteOffers to Cibleflow — with one obsession: tools that are simple, powerful and a pleasure to use.',
      primary: { label: 'Explore the ecosystem', href: '#ecosysteme' },
      secondary: { label: 'Talk to the team', href: 'contact' },
      scrollLabel: 'Scroll',
      soonChip: '+ more to come',
    },
    manifesto: {
      eyebrow: 'Manifesto',
      text: 'ARIZIKI means “wealth”. Not only the kind you count — the kind you create. Time given back to teams, revenue under control, ideas that become products. That is the wealth our software sets out to create, every single day.',
      aside: [
        { title: 'What we do', text: 'We design, build and run our own SaaS products, from the first idea to software in production.' },
        { title: 'Why one brand', text: 'Each product has its own mission. All share the same foundation: careful design, solid technology and a team that listens.' },
      ],
    },
    ecosystem: {
      eyebrow: 'The ecosystem',
      title: ['Distinct products.', 'Shared DNA.'],
      lead: 'Every ARIZIKI product solves a specific need. All are built to the same standards.',
      visit: 'Visit',
      notify: 'Get notified at launch',
      more: 'Learn more',
    },
    method: {
      eyebrow: 'Method',
      title: ['From idea', 'to product that lasts.'],
      lead: 'Four steps, applied to every product we build. No shortcuts.',
      steps: [
        { n: '01', title: 'Listen', text: 'Every product starts from a real problem observed in the field — never from a passing trend.' },
        { n: '02', title: 'Design', text: 'Experience, architecture and security are designed together, from day one.' },
        { n: '03', title: 'Launch', text: 'A fast first version, tested with real users, then improved relentlessly.' },
        { n: '04', title: 'Grow', text: 'Continuous updates, human support and infrastructure that scales with you.' },
      ],
    },
    principles: {
      eyebrow: 'Principles',
      title: ['What all our', 'products share.'],
      items: [
        { icon: 'simple', title: 'Simplicity', text: 'A clear interface you can master in minutes, no training required.' },
        { icon: 'speed', title: 'Performance', text: 'Fast tools on every screen, from desktop to smartphone.' },
        { icon: 'shield', title: 'Trust', text: 'Your data is protected and handled with the utmost care.' },
        { icon: 'people', title: 'Closeness', text: 'A team that answers, listens and evolves the products with you.' },
      ],
    },
    cta: {
      eyebrow: 'Contact',
      title: ['Let’s build what’s next,', 'together.'],
      lead: 'A project, a partnership, a question about our products? Write to us — we answer every message.',
      button: 'Write to ARIZIKI',
    },
  },

  /* ─────────────────────────── DEUTSCH ─────────────────────────── */
  de: {
    hero: {
      eyebrow: 'SaaS-Softwarehaus',
      title: ['Eine Marke.', 'Viele Produkte.', 'Ein Anspruch.'],
      lead: 'ARIZIKI entwickelt, lanciert und skaliert SaaS-Produkte — von ARIZIKI EliteOffers bis Cibleflow — mit einer Obsession: Werkzeuge, die einfach, leistungsstark und angenehm zu nutzen sind.',
      primary: { label: 'Ökosystem entdecken', href: '#ecosysteme' },
      secondary: { label: 'Mit dem Team sprechen', href: 'contact' },
      scrollLabel: 'Scrollen',
      soonChip: '+ weitere folgen',
    },
    manifesto: {
      eyebrow: 'Manifest',
      text: 'ARIZIKI bedeutet „Reichtum“. Nicht nur der, den man zählt — sondern der, den man erschafft. Zeit, die Teams zurückgewinnen, Einnahmen, die man im Griff hat, Ideen, die zu Produkten werden. Diesen Reichtum soll unsere Software jeden Tag schaffen.',
      aside: [
        { title: 'Was wir tun', text: 'Wir konzipieren, entwickeln und betreiben eigene SaaS-Produkte — von der ersten Idee bis zum Produktivbetrieb.' },
        { title: 'Warum eine Marke', text: 'Jedes Produkt hat seine eigene Mission. Alle teilen dasselbe Fundament: sorgfältiges Design, solide Technologie und ein Team, das zuhört.' },
      ],
    },
    ecosystem: {
      eyebrow: 'Das Ökosystem',
      title: ['Eigenständige Produkte.', 'Dieselbe DNA.'],
      lead: 'Jedes ARIZIKI-Produkt löst ein konkretes Problem. Alle entstehen nach denselben Standards.',
      visit: 'Besuchen',
      notify: 'Zum Start benachrichtigt werden',
      more: 'Mehr erfahren',
    },
    method: {
      eyebrow: 'Methode',
      title: ['Von der Idee', 'zum Produkt, das bleibt.'],
      lead: 'Vier Schritte, angewandt auf jedes unserer Produkte. Ohne Abkürzungen.',
      steps: [
        { n: '01', title: 'Zuhören', text: 'Jedes Produkt beginnt mit einem echten Problem aus der Praxis — nie mit einem kurzlebigen Trend.' },
        { n: '02', title: 'Gestalten', text: 'Nutzererlebnis, Architektur und Sicherheit werden vom ersten Tag an gemeinsam gedacht.' },
        { n: '03', title: 'Starten', text: 'Eine schnelle erste Version, mit echten Nutzern getestet und dann konsequent verbessert.' },
        { n: '04', title: 'Wachsen', text: 'Laufende Updates, persönlicher Support und eine Infrastruktur, die mit Ihnen wächst.' },
      ],
    },
    principles: {
      eyebrow: 'Prinzipien',
      title: ['Was all unsere', 'Produkte verbindet.'],
      items: [
        { icon: 'simple', title: 'Einfachheit', text: 'Eine klare Oberfläche, die man in wenigen Minuten beherrscht — ganz ohne Schulung.' },
        { icon: 'speed', title: 'Performance', text: 'Schnelle Werkzeuge auf jedem Bildschirm, vom Desktop bis zum Smartphone.' },
        { icon: 'shield', title: 'Vertrauen', text: 'Ihre Daten sind geschützt und werden mit größter Sorgfalt behandelt.' },
        { icon: 'people', title: 'Nähe', text: 'Ein Team, das antwortet, zuhört und die Produkte mit Ihnen weiterentwickelt.' },
      ],
    },
    cta: {
      eyebrow: 'Kontakt',
      title: ['Gestalten wir', 'die Zukunft gemeinsam.'],
      lead: 'Ein Projekt, eine Partnerschaft, eine Frage zu unseren Produkten? Schreiben Sie uns — wir beantworten jede Nachricht.',
      button: 'ARIZIKI schreiben',
    },
  },
};
