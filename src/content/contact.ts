/** Page « Contact » — FR / EN / DE */
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
    seo: { title: 'Contact — ARIZIKI', description: "Une question sur ARIZIKI EliteOffers, Cibleflow, NOVARYS ou un partenariat ? Écrivez à l'équipe ARIZIKI." },
    hero: {
      eyebrow: 'Contact',
      title: ['Parlons', 'de votre projet.'],
      lead: "Une question sur nos logiciels, une demande de partenariat ou d'accès anticipé ? Écrivez-nous : nous répondons à chaque message.",
    },
    form: {
      name: 'Nom', email: 'E-mail', subject: 'Sujet', message: 'Message',
      messagePlaceholder: 'Dites-nous en quelques lignes ce dont vous avez besoin.',
      subjects: [
        { value: 'general', label: 'Question générale' },
        { value: 'eliteoffers', label: 'ARIZIKI EliteOffers' },
        { value: 'cibleflow', label: 'Cibleflow' },
        { value: 'novarys', label: 'NOVARYS — accès anticipé' },
        { value: 'next', label: 'Prochains SaaS' },
        { value: 'partnership', label: 'Partenariat' },
        { value: 'press', label: 'Presse' },
        { value: 'other', label: 'Autre' },
      ],
      consent: "J'accepte que mes données soient utilisées pour répondre à ma demande.",
      privacy: 'Politique de confidentialité',
      submit: 'Envoyer le message', sending: 'Envoi en cours…',
      success: { title: 'Message envoyé.', text: 'Merci ! Nous revenons vers vous très vite.' },
      error: "L'envoi n'a pas abouti. Vous pouvez nous écrire directement à",
      required: 'Ce champ est obligatoire.', invalidEmail: 'Adresse e-mail invalide.', tooShort: 'Votre message est un peu court.',
    },
    aside: { emailTitle: 'Par e-mail', productsTitle: 'Nos produits', note: 'Vos données servent uniquement à vous répondre.' },
  },

  en: {
    seo: { title: 'Contact — ARIZIKI', description: 'A question about ARIZIKI EliteOffers, Cibleflow, NOVARYS or a partnership? Write to the ARIZIKI team.' },
    hero: {
      eyebrow: 'Contact',
      title: ['Let’s talk', 'about your project.'],
      lead: 'A question about our products, a partnership or early access request? Write to us — we answer every message.',
    },
    form: {
      name: 'Name', email: 'Email', subject: 'Subject', message: 'Message',
      messagePlaceholder: 'Tell us in a few lines what you need.',
      subjects: [
        { value: 'general', label: 'General question' },
        { value: 'eliteoffers', label: 'ARIZIKI EliteOffers' },
        { value: 'cibleflow', label: 'Cibleflow' },
        { value: 'novarys', label: 'NOVARYS — early access' },
        { value: 'next', label: 'Upcoming SaaS' },
        { value: 'partnership', label: 'Partnership' },
        { value: 'press', label: 'Press' },
        { value: 'other', label: 'Other' },
      ],
      consent: 'I agree that my data may be used to answer my request.',
      privacy: 'Privacy policy',
      submit: 'Send message', sending: 'Sending…',
      success: { title: 'Message sent.', text: 'Thank you! We will get back to you shortly.' },
      error: 'Your message could not be sent. You can write to us directly at',
      required: 'This field is required.', invalidEmail: 'Invalid email address.', tooShort: 'Your message is a little short.',
    },
    aside: { emailTitle: 'By email', productsTitle: 'Our products', note: 'Your data is only used to answer you.' },
  },

  de: {
    seo: { title: 'Kontakt — ARIZIKI', description: 'Eine Frage zu ARIZIKI EliteOffers, Cibleflow, NOVARYS oder einer Partnerschaft? Schreiben Sie dem ARIZIKI-Team.' },
    hero: {
      eyebrow: 'Kontakt',
      title: ['Sprechen wir', 'über Ihr Projekt.'],
      lead: 'Eine Frage zu unseren Produkten, eine Partnerschaft oder ein Wunsch nach frühem Zugang? Schreiben Sie uns — wir beantworten jede Nachricht.',
    },
    form: {
      name: 'Name', email: 'E-Mail', subject: 'Betreff', message: 'Nachricht',
      messagePlaceholder: 'Beschreiben Sie in wenigen Zeilen, was Sie brauchen.',
      subjects: [
        { value: 'general', label: 'Allgemeine Frage' },
        { value: 'eliteoffers', label: 'ARIZIKI EliteOffers' },
        { value: 'cibleflow', label: 'Cibleflow' },
        { value: 'novarys', label: 'NOVARYS — früher Zugang' },
        { value: 'next', label: 'Weitere SaaS' },
        { value: 'partnership', label: 'Partnerschaft' },
        { value: 'press', label: 'Presse' },
        { value: 'other', label: 'Sonstiges' },
      ],
      consent: 'Ich bin einverstanden, dass meine Daten zur Beantwortung meiner Anfrage verwendet werden.',
      privacy: 'Datenschutzerklärung',
      submit: 'Nachricht senden', sending: 'Wird gesendet…',
      success: { title: 'Nachricht gesendet.', text: 'Vielen Dank! Wir melden uns in Kürze.' },
      error: 'Die Nachricht konnte nicht gesendet werden. Schreiben Sie uns direkt an',
      required: 'Dieses Feld ist erforderlich.', invalidEmail: 'Ungültige E-Mail-Adresse.', tooShort: 'Ihre Nachricht ist etwas kurz.',
    },
    aside: { emailTitle: 'Per E-Mail', productsTitle: 'Unsere Produkte', note: 'Ihre Daten werden nur zur Beantwortung verwendet.' },
  },
};
