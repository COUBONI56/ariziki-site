/** Page « À propos » — FR / EN / DE */
import type { Locale } from '../i18n';

export type AboutContent = {
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string[]; lead: string };
  name: { eyebrow: string; meaning: string; text: string };
  model: { eyebrow: string; title: string[]; items: { n: string; title: string; text: string }[] };
  ecosystem: { eyebrow: string; title: string[]; cta: string };
};

export const about: Record<Locale, AboutContent> = {
  fr: {
    seo: {
      title: 'À propos — ARIZIKI',
      description: "ARIZIKI signifie « richesse ». Découvrez la marque-mère d'ARIZIKI EliteOffers, de Cibleflow et de NOVARYS, et sa façon de concevoir des logiciels SaaS.",
    },
    hero: {
      eyebrow: 'À propos',
      title: ['Créer de la richesse,', 'un logiciel à la fois.'],
      lead: "ARIZIKI est une marque d'éditeur de logiciels SaaS. Nous concevons des outils qui rendent du temps, de la clarté et des revenus à ceux qui les utilisent.",
    },
    name: {
      eyebrow: 'Le nom',
      meaning: 'signifie « richesse ».',
      text: "Nous avons choisi ce nom comme une boussole. La richesse, pour nous, ne se résume pas à un chiffre : c'est du temps rendu aux équipes, des décisions plus sûres, des idées qui deviennent des produits utiles. Chaque logiciel ARIZIKI doit en créer un peu plus pour ceux qui l'utilisent.",
    },
    model: {
      eyebrow: 'Notre modèle',
      title: ['Une marque-mère,', 'des produits ciblés.'],
      items: [
        { n: '01', title: 'Un produit, une mission', text: 'Chaque SaaS ARIZIKI se concentre sur un besoin précis et le traite à fond, plutôt que de tout faire à moitié.' },
        { n: '02', title: 'Des fondations partagées', text: 'Design, infrastructure et sécurité sont mutualisés : chaque nouveau produit démarre plus vite et plus solide.' },
        { n: '03', title: 'Une amélioration continue', text: 'Nos logiciels évoluent avec leurs utilisateurs, au rythme de leurs retours et de leurs résultats.' },
      ],
    },
    ecosystem: { eyebrow: "L'écosystème aujourd'hui", title: ['Ce que nous construisons.'], cta: 'Voir la page' },
  },

  en: {
    seo: {
      title: 'About — ARIZIKI',
      description: 'ARIZIKI means “wealth”. Meet the parent brand of ARIZIKI EliteOffers, Cibleflow and NOVARYS, and the way it builds SaaS products.',
    },
    hero: {
      eyebrow: 'About',
      title: ['Creating wealth,', 'one product at a time.'],
      lead: 'ARIZIKI is a SaaS publishing brand. We build tools that give time, clarity and revenue back to the people who use them.',
    },
    name: {
      eyebrow: 'The name',
      meaning: 'means “wealth”.',
      text: 'We chose this name as a compass. To us, wealth is more than a number: it is time given back to teams, more confident decisions, ideas that become useful products. Every ARIZIKI product should create a little more of it for its users.',
    },
    model: {
      eyebrow: 'Our model',
      title: ['A parent brand,', 'focused products.'],
      items: [
        { n: '01', title: 'One product, one mission', text: 'Each ARIZIKI SaaS focuses on one specific need and solves it thoroughly, rather than doing everything halfway.' },
        { n: '02', title: 'Shared foundations', text: 'Design, infrastructure and security are shared, so every new product starts faster and stronger.' },
        { n: '03', title: 'Continuous improvement', text: 'Our products evolve with their users, guided by their feedback and their results.' },
      ],
    },
    ecosystem: { eyebrow: 'The ecosystem today', title: ['What we are building.'], cta: 'View page' },
  },

  de: {
    seo: {
      title: 'Über uns — ARIZIKI',
      description: 'ARIZIKI bedeutet „Reichtum“. Lernen Sie die Dachmarke von ARIZIKI EliteOffers, Cibleflow und NOVARYS kennen — und wie sie SaaS-Produkte entwickelt.',
    },
    hero: {
      eyebrow: 'Über uns',
      title: ['Reichtum schaffen,', 'Produkt für Produkt.'],
      lead: 'ARIZIKI ist eine Marke für SaaS-Software. Wir entwickeln Werkzeuge, die ihren Nutzern Zeit, Klarheit und Einnahmen zurückgeben.',
    },
    name: {
      eyebrow: 'Der Name',
      meaning: 'bedeutet „Reichtum“.',
      text: 'Wir haben diesen Namen als Kompass gewählt. Reichtum ist für uns mehr als eine Zahl: Zeit, die Teams zurückgewinnen, sicherere Entscheidungen, Ideen, die zu nützlichen Produkten werden. Jedes ARIZIKI-Produkt soll für seine Nutzer ein wenig mehr davon schaffen.',
    },
    model: {
      eyebrow: 'Unser Modell',
      title: ['Eine Dachmarke,', 'fokussierte Produkte.'],
      items: [
        { n: '01', title: 'Ein Produkt, eine Mission', text: 'Jedes ARIZIKI-SaaS konzentriert sich auf ein konkretes Bedürfnis und löst es gründlich — statt alles nur halb zu machen.' },
        { n: '02', title: 'Gemeinsame Grundlagen', text: 'Design, Infrastruktur und Sicherheit werden geteilt: So startet jedes neue Produkt schneller und solider.' },
        { n: '03', title: 'Kontinuierliche Verbesserung', text: 'Unsere Produkte entwickeln sich mit ihren Nutzern weiter — geleitet von deren Feedback und Ergebnissen.' },
      ],
    },
    ecosystem: { eyebrow: 'Das Ökosystem heute', title: ['Woran wir arbeiten.'], cta: 'Zur Seite' },
  },
};
