/**
 * Pages légales — FR / EN / DE
 * Les jetons {owner}, {address}, {siret}, {phone}, {email}, {status}, {vat},
 * {hostName}, {hostAddress}, {hostUrl} sont remplacés par les valeurs de
 * src/config/site.ts (bloc « legal »). Une valeur entre [crochets] s'affiche
 * surlignée tant qu'elle n'est pas complétée.
 *
 * ⚠️  Modèle rédigé avec soin mais qui ne remplace pas l'avis d'un juriste.
 */
import type { Locale } from '../i18n';

export type LegalDoc = { seo: { title: string; description: string }; eyebrow: string; title: string; updated: string; sections: { h: string; p: string[] }[] };

const UPDATED = { fr: 'Dernière mise à jour : 21 novembre 2026', en: 'Last updated: 21 November 2026', de: 'Stand: 21. November 2026' };

export const legalNotice: Record<Locale, LegalDoc> = {
  fr: {
    seo: { title: 'Mentions légales — ARIZIKI', description: 'Mentions légales du site ariziki.com.' },
    eyebrow: 'Informations légales', title: 'Mentions légales', updated: UPDATED.fr,
    sections: [
      { h: 'Éditeur du site', p: [
        'Le site ariziki.com est édité par {owner}, sous le nom commercial ARIZIKI.',
        'Statut : {status}.',
        'Adresse : {address}',
        'SIRET : {siret}',
        'Téléphone : {phone} · E-mail : {email}',
        '{vat}.',
      ] },
      { h: 'Directeur de la publication', p: ['{owner}.'] },
      { h: 'Hébergement', p: ['{hostName} — {hostAddress} — {hostUrl}'] },
      { h: 'Propriété intellectuelle', p: [
        "L'ensemble des contenus de ce site (textes, visuels, logos et marques ARIZIKI, ARIZIKI EliteOffers, Cibleflow et NOVARYS) est protégé par le droit de la propriété intellectuelle. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite.",
      ] },
      { h: 'Responsabilité', p: [
        "Les informations publiées sur ce site sont fournies à titre indicatif et peuvent évoluer à tout moment. Les liens vers des sites tiers sont proposés pour faciliter la navigation ; leur contenu n'engage pas l'éditeur.",
      ] },
      { h: 'Données personnelles', p: ['Le traitement de vos données est décrit dans notre politique de confidentialité.'] },
      { h: 'Droit applicable', p: ['Le présent site est soumis au droit français.'] },
    ],
  },
  en: {
    seo: { title: 'Legal notice — ARIZIKI', description: 'Legal notice of the ariziki.com website.' },
    eyebrow: 'Legal information', title: 'Legal notice', updated: UPDATED.en,
    sections: [
      { h: 'Publisher', p: [
        'The ariziki.com website is published by {owner}, trading as ARIZIKI.',
        'Legal status: {status}.',
        'Address: {address}',
        'SIRET (French company number): {siret}',
        'Phone: {phone} · Email: {email}',
        '{vat}.',
      ] },
      { h: 'Publication director', p: ['{owner}.'] },
      { h: 'Hosting', p: ['{hostName} — {hostAddress} — {hostUrl}'] },
      { h: 'Intellectual property', p: [
        'All content on this website (texts, visuals, logos and the ARIZIKI, ARIZIKI EliteOffers, Cibleflow and NOVARYS brands) is protected by intellectual property law. Any full or partial reproduction or reuse without prior written permission is prohibited.',
      ] },
      { h: 'Liability', p: [
        'The information published on this website is provided for guidance and may change at any time. Links to third-party websites are offered for convenience; the publisher is not responsible for their content.',
      ] },
      { h: 'Personal data', p: ['How we process your data is described in our privacy policy.'] },
      { h: 'Governing law', p: ['This website is governed by French law.'] },
    ],
  },
  de: {
    seo: { title: 'Impressum — ARIZIKI', description: 'Impressum der Website ariziki.com.' },
    eyebrow: 'Rechtliche Angaben', title: 'Impressum', updated: UPDATED.de,
    sections: [
      { h: 'Anbieter', p: [
        '{owner}, handelnd unter dem Namen ARIZIKI.',
        'Rechtsform: {status}.',
        'Anschrift: {address}',
        'SIRET (französische Unternehmensnummer): {siret}',
        'Telefon: {phone} · E-Mail: {email}',
        '{vat}.',
      ] },
      { h: 'Verantwortlich für den Inhalt', p: ['{owner}, Anschrift wie oben.'] },
      { h: 'Hosting', p: ['{hostName} — {hostAddress} — {hostUrl}'] },
      { h: 'Urheberrecht', p: [
        'Alle Inhalte dieser Website (Texte, Grafiken, Logos sowie die Marken ARIZIKI, ARIZIKI EliteOffers, Cibleflow und NOVARYS) sind urheberrechtlich geschützt. Jede vollständige oder teilweise Vervielfältigung oder Weiterverwendung ohne vorherige schriftliche Zustimmung ist untersagt.',
      ] },
      { h: 'Haftung für Inhalte und Links', p: [
        'Die Inhalte dieser Website dienen der allgemeinen Information und können sich jederzeit ändern. Für die Inhalte verlinkter externer Websites sind ausschließlich deren Betreiber verantwortlich.',
      ] },
      { h: 'Datenschutz', p: ['Wie wir Ihre Daten verarbeiten, erfahren Sie in unserer Datenschutzerklärung.'] },
      { h: 'Anwendbares Recht', p: ['Für diese Website gilt französisches Recht.'] },
    ],
  },
};

export const privacyPolicy: Record<Locale, LegalDoc> = {
  fr: {
    seo: { title: 'Politique de confidentialité — ARIZIKI', description: 'Comment ARIZIKI traite vos données personnelles sur ariziki.com.' },
    eyebrow: 'Vos données', title: 'Politique de confidentialité', updated: UPDATED.fr,
    sections: [
      { h: 'Responsable du traitement', p: ['{owner} (ARIZIKI) — {address} — {email}.'] },
      { h: 'Données collectées', p: [
        "Nous collectons uniquement les données que vous nous transmettez via le formulaire de contact ou par e-mail : nom, adresse e-mail, sujet et contenu de votre message.",
        "Comme tout site, notre hébergeur enregistre des journaux techniques (adresse IP, date, page consultée) nécessaires à la sécurité et au bon fonctionnement du service.",
      ] },
      { h: 'Finalités et bases légales', p: [
        "Répondre à votre demande : votre consentement et, le cas échéant, l'exécution de mesures précontractuelles (art. 6.1.a et 6.1.b du RGPD).",
        'Assurer la sécurité du site : notre intérêt légitime (art. 6.1.f du RGPD).',
      ] },
      { h: 'Durée de conservation', p: ['Vos messages sont conservés le temps nécessaire au traitement de votre demande, puis au maximum 3 ans après notre dernier échange.'] },
      { h: 'Destinataires', p: [
        "Vos données sont destinées uniquement à ARIZIKI. Elles transitent par notre hébergeur ({hostName}) et par notre fournisseur de messagerie électronique. Elles ne sont ni vendues, ni louées, ni cédées.",
      ] },
      { h: 'Cookies et mesure d’audience', p: [
        "Ce site ne dépose aucun cookie et n'utilise aucun outil publicitaire ni de mesure d'audience.",
        "Une seule préférence technique (le fait d'avoir déjà vu l'animation d'introduction) est enregistrée dans le stockage de session de votre navigateur ; elle disparaît à sa fermeture.",
        "Les polices de caractères sont hébergées sur nos propres serveurs : votre visite ne transmet aucune donnée à des services tiers.",
      ] },
      { h: 'Vos droits', p: [
        "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, ainsi que du droit de retirer votre consentement à tout moment. Écrivez-nous à {email}.",
        "Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).",
      ] },
    ],
  },
  en: {
    seo: { title: 'Privacy policy — ARIZIKI', description: 'How ARIZIKI processes your personal data on ariziki.com.' },
    eyebrow: 'Your data', title: 'Privacy policy', updated: UPDATED.en,
    sections: [
      { h: 'Data controller', p: ['{owner} (ARIZIKI) — {address} — {email}.'] },
      { h: 'Data we collect', p: [
        'We only collect the data you send us through the contact form or by email: your name, email address, subject and message.',
        'Like any website, our host keeps technical logs (IP address, date, page visited) needed for security and for the service to run properly.',
      ] },
      { h: 'Purposes and legal bases', p: [
        'Answering your request: your consent and, where relevant, steps taken before entering into a contract (Art. 6(1)(a) and 6(1)(b) GDPR).',
        'Keeping the website secure: our legitimate interest (Art. 6(1)(f) GDPR).',
      ] },
      { h: 'Retention', p: ['Your messages are kept for as long as needed to handle your request, and for no more than 3 years after our last exchange.'] },
      { h: 'Recipients', p: [
        'Your data is intended for ARIZIKI only. It passes through our host ({hostName}) and our email provider. It is never sold, rented or transferred.',
      ] },
      { h: 'Cookies and analytics', p: [
        'This website sets no cookies and uses no advertising or analytics tools.',
        'A single technical preference (whether you have already seen the intro animation) is stored in your browser’s session storage and is deleted when you close it.',
        'Fonts are hosted on our own servers: your visit sends no data to third-party services.',
      ] },
      { h: 'Your rights', p: [
        'You have the right to access, rectify, erase, restrict, object to and port your data, and to withdraw your consent at any time. Write to us at {email}.',
        'You may also lodge a complaint with a data protection authority, such as the French CNIL (www.cnil.fr).',
      ] },
    ],
  },
  de: {
    seo: { title: 'Datenschutzerklärung — ARIZIKI', description: 'Wie ARIZIKI Ihre personenbezogenen Daten auf ariziki.com verarbeitet.' },
    eyebrow: 'Ihre Daten', title: 'Datenschutzerklärung', updated: UPDATED.de,
    sections: [
      { h: 'Verantwortlicher', p: ['{owner} (ARIZIKI) — {address} — {email}.'] },
      { h: 'Erhobene Daten', p: [
        'Wir erheben nur die Daten, die Sie uns über das Kontaktformular oder per E-Mail übermitteln: Name, E-Mail-Adresse, Betreff und Inhalt Ihrer Nachricht.',
        'Wie bei jeder Website speichert unser Hoster technische Protokolle (IP-Adresse, Datum, aufgerufene Seite), die für Sicherheit und Betrieb erforderlich sind.',
      ] },
      { h: 'Zwecke und Rechtsgrundlagen', p: [
        'Beantwortung Ihrer Anfrage: Ihre Einwilligung und gegebenenfalls vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. a und b DSGVO).',
        'Sicherheit der Website: unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).',
      ] },
      { h: 'Speicherdauer', p: ['Ihre Nachrichten werden so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage nötig ist, höchstens jedoch 3 Jahre nach unserem letzten Austausch.'] },
      { h: 'Empfänger', p: [
        'Ihre Daten sind ausschließlich für ARIZIKI bestimmt. Sie werden über unseren Hoster ({hostName}) und unseren E-Mail-Anbieter übermittelt. Sie werden weder verkauft noch vermietet oder weitergegeben.',
      ] },
      { h: 'Cookies und Reichweitenmessung', p: [
        'Diese Website setzt keine Cookies und verwendet keine Werbe- oder Analysewerkzeuge.',
        'Eine einzige technische Einstellung (ob Sie die Einführungsanimation bereits gesehen haben) wird im Sitzungsspeicher Ihres Browsers abgelegt und beim Schließen gelöscht.',
        'Die Schriftarten liegen auf unseren eigenen Servern: Beim Besuch werden keine Daten an Dritte übertragen.',
      ] },
      { h: 'Ihre Rechte', p: [
        'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit sowie das Recht, Ihre Einwilligung jederzeit zu widerrufen. Schreiben Sie uns an {email}.',
        'Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel bei der französischen CNIL (www.cnil.fr).',
      ] },
    ],
  },
};
