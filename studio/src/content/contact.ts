/** Page « Contact / Devis » */
import type { Locale } from '../i18n';

export type ContactContent = {
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string[]; lead: string };
  form: {
    name: string; email: string; subject: string; message: string; messagePlaceholder: string;
    subjects: { value: string; label: string }[];
    consent: string; privacy: string; submit: string; sending: string;
    success: { title: string; text: string }; error: string;
    required: string; invalidEmail: string; tooShort: string;
  };
  aside: { emailTitle: string; productsTitle: string; note: string };
};

export const contact: Record<Locale, ContactContent> = {
  fr: {
    seo: { title: 'Demander un devis — ARIZIKI Smartness', description: 'Parlez-nous de votre activité : nous vous proposons une direction artistique et un devis pour votre site premium.' },
    hero: {
      eyebrow: 'Devis',
      title: ['Parlons de', 'votre futur site.'],
      lead: 'Décrivez votre activité, vos objectifs et, si vous en avez, des sites qui vous inspirent. Nous revenons vers vous avec une proposition et un devis.',
    },
    form: {
      name: 'Nom', email: 'E-mail', subject: 'Formule envisagée', message: 'Votre projet',
      messagePlaceholder: 'Votre activité, vos objectifs, votre site actuel (s’il existe), votre échéance…',
      subjects: [
        { value: 'general', label: 'Je ne sais pas encore' },
        { value: 'essentiel', label: 'Essentiel' },
        { value: 'signature', label: 'Signature' },
        { value: 'prestige', label: 'Prestige' },
        { value: 'maintenance', label: 'Maintenance d’un site existant' },
        { value: 'partenariat', label: 'Partenariat / marque blanche' },
      ],
      consent: "J'accepte que mes données soient utilisées pour répondre à ma demande.",
      privacy: 'Politique de confidentialité',
      submit: 'Envoyer ma demande', sending: 'Envoi en cours…',
      success: { title: 'Demande envoyée.', text: 'Merci ! Nous revenons vers vous très vite.' },
      error: "L'envoi n'a pas abouti. Vous pouvez nous écrire directement à",
      required: 'Ce champ est obligatoire.', invalidEmail: 'Adresse e-mail invalide.', tooShort: 'Votre message est un peu court.',
    },
    aside: { emailTitle: 'Par e-mail', productsTitle: 'Nos formules', note: 'Vos données servent uniquement à vous répondre.' },
  },
};
