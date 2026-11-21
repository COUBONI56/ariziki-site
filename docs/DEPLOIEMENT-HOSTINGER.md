# Mise en ligne sur ariziki.com (Hostinger)

État : le site **ariziki.com** est créé sur l'hébergement Business Hostinger (via le connecteur Hostinger de Claude).

## Publier une nouvelle version (méthode actuelle)
1. `npm run build`, puis compresser **le contenu** du dossier `dist/` (pas le dossier lui-même) en `ariziki-site-hostinger.zip`.
2. hPanel → Sites → ariziki.com → **Gestionnaire de fichiers** → `public_html` → **Téléverser** le zip.
3. Demander à Claude (connecteur Hostinger) : « Déploie l'archive `ariziki-site-hostinger.zip` sur ariziki.com »
   → opération `hosting_websites_deploy-static-site-archive` (remplace le contenu du site).

## Option recommandée ensuite : déploiement automatique depuis GitHub
1. Créer un dépôt GitHub (ex. `ariziki-site`) et connecter GitHub dans hPanel (section Git).
2. Claude pousse le code ; le connecteur publie la branche de production (`hosting_deploy`, type `static`).
3. Chaque modification poussée est ensuite publiée automatiquement.

## Ce que fait le `.htaccess` fourni
- HTTPS obligatoire, redirection `www` → domaine nu, anciennes URL `.html` → URL propres.
- Cache d'un an pour les fichiers versionnés (`/_astro/`), en-têtes de sécurité, compression.
- Dans `/api/`, seul `contact.php` est accessible.

## Formulaire de contact
- `/api/contact.php` est généré au build depuis `src/config/site.ts` (destinataire = `contact.email`).
- Envoi via la fonction `mail()` de PHP d’Hostinger. Expéditeur et copie de sécurité : `contacts@ariziki.com` (boîte Hostinger).
- Chaque message arrive aussi dans la boîte contacts@ariziki.com (webmail Hostinger) : aucun message perdu.

## Après la mise en ligne
- Google Search Console : ajouter ariziki.com et soumettre `https://ariziki.com/sitemap-index.xml`.
- Envoyer un message de test depuis /contact/.
- Tester : https://pagespeed.web.dev
