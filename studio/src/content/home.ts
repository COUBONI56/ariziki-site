/**
 * ─────────────────────────────────────────────────────────────
 *  TEXTES DE LA PAGE D'ACCUEIL — ARIZIKI Smartness
 * ─────────────────────────────────────────────────────────────
 *  ⚠️  Prix, contenus d'offres et formulations commerciales :
 *      PROVISOIRES, à valider avant la mise en ligne.
 */
import type { Locale } from '../i18n';

type Link = { label: string; href: string };
type Plan = { name: string; price: string; from?: string; audience: string; delay: string; features: string[]; cta: string; featured?: boolean };

export type HomeContent = {
  hero: { eyebrow: string; title: string[]; lead: string; primary: Link; secondary: Link; scrollLabel: string; soonChip: string; chips?: string[] };
  manifesto: { eyebrow: string; text: string; aside: { title: string; text: string }[] };
  principles: { eyebrow: string; title: string[]; items: { icon: string; title: string; text: string }[] };
  ecosystem: { eyebrow: string; title: string[]; lead: string; visit: string; notify: string; more: string };
  audience: { eyebrow: string; title: string[]; items: { title: string; text: string }[] };
  offers: { eyebrow: string; title: string[]; lead: string; badge: string; plans: Plan[]; maintenance: { title: string; price: string; text: string }; note: string };
  method: { eyebrow: string; title: string[]; lead: string; steps: { n: string; title: string; text: string }[] };
  faq: { eyebrow: string; title: string[]; items: { q: string; a: string }[] };
  cta: { eyebrow: string; title: string[]; lead: string; button: string };
};

export const home: Record<Locale, HomeContent> = {
  fr: {
    hero: {
      eyebrow: 'Studio de sites web premium',
      title: ['Votre site,', 'au niveau des', 'grandes marques.'],
      lead: "ARIZIKI Smartness conçoit des sites web premium : une direction artistique inspirée des meilleures marques, des animations sur mesure et des performances maximales — pour inspirer confiance dès le premier regard.",
      primary: { label: 'Voir les offres', href: '#offres' },
      secondary: { label: 'Demander un devis', href: 'contact' },
      scrollLabel: 'Défiler',
      soonChip: '',
      chips: ['Direction artistique', 'Animations sur mesure', 'Mobile · tablette · ordinateur'],
    },

    manifesto: {
      eyebrow: 'Pourquoi un site premium',
      text: "En trois secondes, un visiteur décide si votre entreprise est sérieuse. Un site générique vous fait perdre des clients sans que vous le sachiez. Nous construisons des sites qui inspirent confiance dès le premier regard : une vraie direction artistique, des animations maîtrisées et une vitesse irréprochable.",
      aside: [
        { title: 'Notre méthode', text: "Chaque site part du système de design d'une marque de référence, adapté à votre identité. Le résultat est unique, jamais un modèle générique." },
        { title: 'Notre preuve', text: 'ariziki.com a été conçu avec cette méthode : 25 pages, 3 langues et des scores Lighthouse de 96 à 100.' },
      ],
    },

    principles: {
      eyebrow: 'Ce qui fait la différence',
      title: ['Quatre exigences', 'dans chaque site.'],
      items: [
        { icon: 'palette', title: 'Direction artistique', text: 'Typographies, couleurs et compositions inspirées des marques qui investissent le plus dans leur image.' },
        { icon: 'motion', title: 'Animations maîtrisées', text: 'Des mouvements fluides qui guident le regard. Jamais d’effet gadget.' },
        { icon: 'gauge', title: 'Vitesse et référencement', text: 'Des pages ultra-rapides et bien construites pour Google, mesurées avec Lighthouse.' },
        { icon: 'devices', title: 'Sur tous les écrans', text: 'Une expérience impeccable sur mobile, tablette et ordinateur.' },
      ],
    },

    ecosystem: {
      eyebrow: 'Réalisation',
      title: ['Notre première vitrine :', 'notre propre marque.'],
      lead: "Avant de le proposer à nos clients, nous avons appliqué notre méthode à ARIZIKI. Jugez sur pièce.",
      visit: 'Visiter',
      notify: 'Demander un devis',
      more: '',
    },

    audience: {
      eyebrow: 'Pour qui',
      title: ['Pour ceux dont l’image', 'fait vendre.'],
      items: [
        { title: 'Startups et éditeurs SaaS', text: 'Un site produit à la hauteur de votre technologie, pour convaincre clients et investisseurs.' },
        { title: 'Professions libérales', text: 'Avocats, experts-comptables, cliniques, architectes : un site qui reflète le niveau de vos services.' },
        { title: 'Coachs, formateurs, consultants', text: 'Une image personnelle premium pour vendre des accompagnements à forte valeur.' },
        { title: 'Entreprises d’Afrique francophone', text: 'Une image internationale pour grandir, avec des tarifs adaptés à votre marché.' },
      ],
    },

    offers: {
      eyebrow: 'Offres',
      title: ['Trois formules,', 'une même exigence.'],
      lead: 'Des prix clairs, un devis précis après un premier échange. Le code et le nom de domaine vous appartiennent.',
      badge: 'Recommandé',
      plans: [
        {
          name: 'Essentiel', from: 'dès', price: '1 490 €',
          audience: 'Pour lancer une présence premium rapidement.',
          delay: 'Environ 7 jours ouvrés',
          features: ['1 page premium (one-page)', 'Direction artistique sur mesure', 'Animations à l’entrée et au défilement', 'Mobile, tablette et ordinateur', 'Formulaire de contact', 'Mise en ligne sur votre domaine'],
          cta: 'Choisir Essentiel',
        },
        {
          name: 'Signature', from: 'dès', price: '3 900 €', featured: true,
          audience: 'Pour les entreprises qui veulent convertir.',
          delay: '2 à 3 semaines',
          features: ['Jusqu’à 6 pages', '2 langues', 'Animations sur mesure (GSAP)', 'Pages services ou produits', 'Référencement technique et données structurées', 'Formulaire relié à votre messagerie'],
          cta: 'Choisir Signature',
        },
        {
          name: 'Prestige', from: 'dès', price: '8 900 €',
          audience: 'Pour les marques qui visent l’excellence.',
          delay: '4 à 6 semaines',
          features: ['Site complet multilingue', 'Direction artistique dédiée', 'Transitions de pages immersives', 'Toutes les pages nécessaires', 'Publication automatique (GitHub)', 'Accompagnement 30 jours après la mise en ligne'],
          cta: 'Choisir Prestige',
        },
      ],
      maintenance: { title: 'Maintenance', price: '49 € / mois', text: 'Hébergement géré, sauvegardes, mises à jour et petites modifications.' },
      note: 'Délais indicatifs, comptés à partir de la validation du brief et de la réception de vos contenus (textes, logo, images) ; le calendrier exact figure dans le devis. Micro-entreprise : TVA non applicable, art. 293 B du CGI. Tarifs adaptés pour l’Afrique francophone : sur devis.',
    },

    method: {
      eyebrow: 'Méthode',
      title: ['Un site premium', 'en quatre étapes.'],
      lead: 'Vous validez chaque étape. Aucune surprise.',
      steps: [
        { n: '01', title: 'Brief et style', text: 'Nous définissons vos objectifs et choisissons ensemble un style de référence parmi des centaines de marques premium.' },
        { n: '02', title: 'Page d’accueil', text: 'Vous recevez la page d’accueil en aperçu. Vous validez ou demandez des ajustements.' },
        { n: '03', title: 'Toutes les pages', text: 'Nous déclinons les autres pages et soignons chaque écran : mobile, tablette, ordinateur.' },
        { n: '04', title: 'Mise en ligne', text: 'Votre site est publié sur votre nom de domaine, sécurisé (HTTPS) et prêt pour Google.' },
      ],
    },

    faq: {
      eyebrow: 'Questions fréquentes',
      title: ['Vous vous demandez', 'peut-être…'],
      items: [
        { q: 'Combien de temps faut-il pour créer mon site ?', a: 'Comptez environ 7 jours ouvrés pour Essentiel, 2 à 3 semaines pour Signature et 4 à 6 semaines pour Prestige, à partir de la validation du brief et de la réception de vos contenus. Le calendrier exact dépend de vos choix et figure dans le devis. La page d’accueil vous est toujours présentée en premier.' },
        { q: 'Pourrai-je modifier mon site ensuite ?', a: 'Oui. Vous pouvez nous demander des modifications à tout moment, avec la formule de maintenance ou à la demande. Le code vous appartient.' },
        { q: 'Qui s’occupe de l’hébergement et du nom de domaine ?', a: 'Nous pouvons tout gérer pour vous, ou publier le site sur votre propre hébergement. Le nom de domaine reste toujours à votre nom.' },
        { q: 'Mon site sera-t-il bien référencé sur Google ?', a: 'Chaque site est construit pour le référencement : pages rapides, balises optimisées, plan du site et données structurées. Le positionnement dépend ensuite de votre contenu et de votre concurrence.' },
        { q: 'Proposez-vous des sites multilingues ?', a: 'Oui, à partir de la formule Signature : par exemple français, anglais et allemand, comme ariziki.com.' },
        { q: 'Vos tarifs sont-ils les mêmes partout ?', a: 'Les prix affichés concernent l’Europe. Pour l’Afrique francophone, nous proposons des tarifs adaptés, sur devis.' },
      ],
    },

    cta: {
      eyebrow: 'Devis',
      title: ['Parlons de', 'votre futur site.'],
      lead: 'Décrivez votre activité en quelques lignes : nous revenons vers vous avec une proposition et un devis.',
      button: 'Demander un devis',
    },
  },
};
