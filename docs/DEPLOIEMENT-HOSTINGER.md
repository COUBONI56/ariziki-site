# Mise en ligne sur ariziki.com (Hostinger)

État : le site **ariziki.com** est créé sur l'hébergement Business Hostinger (via le connecteur Hostinger de Claude).

## Publier une nouvelle version (automatique)
Le site est relié au dépôt GitHub `COUBONI56/ariziki-site` (déploiement Git automatique Hostinger) :
- branche **`main`** : le code source (c'est ici qu'on modifie le site) ;
- branche **`production`** : le site construit (contenu de `dist/`). **Chaque envoi sur cette branche met ariziki.com à jour.**

Pour publier une modification : `npm run publish` (construit le site puis envoie `dist/` sur `production`).
Ou demander simplement à Claude : « publie la modification sur ariziki.com ».

⚠️ Ne jamais déployer la branche `main` dans hPanel : elle contient le code source, pas le site.

## Méthode de secours (sans GitHub)
1. `npm run build`, compresser **le contenu** de `dist/` en zip.
2. hPanel → Sites → ariziki.com → Gestionnaire de fichiers → `public_html` → Téléverser.
3. Connecteur Hostinger : opération `hosting_websites_deploy-static-site-archive`.

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
