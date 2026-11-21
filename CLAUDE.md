# ariziki.com — instructions pour l'agent (Claude Code / Antigravity)

Site vitrine premium d'ARIZIKI, marque-mère de plusieurs SaaS (ARIZIKI EliteOffers, NOVARYS…).
ARIZIKI signifie « richesse » : l'or est la couleur d'accent de la marque.

## Stack
- **Astro 7** (sites statiques, URL propres `/en/` sans `.html`), TypeScript, CSS natif (pas de Tailwind).
- **GSAP + ScrollTrigger** pour les animations, **Lenis** pour le défilement fluide (`src/scripts/motion.ts`).
- Polices auto-hébergées : Hanken Grotesk (texte), Cinzel (mot-symbole du logo uniquement).
- Langues : FR (racine), EN (`/en/`), DE (`/de/`), URL traduites (`/a-propos/`, `/en/about/`, `/de/ueber-uns/`).
- Pages : accueil, à propos, produits (EliteOffers, NOVARYS), contact (formulaire PHP), mentions légales, confidentialité, 404.
- Hébergement : Hostinger (plan Business). Déploiement : voir `docs/DEPLOIEMENT-HOSTINGER.md`.

## Commandes
- `npm install` puis `npm run dev` → http://localhost:4321
- `npm run build` → dossier `dist/` à publier (Hostinger : contenu de `dist/` dans `public_html/`).

## Où modifier quoi
| Besoin | Fichier |
|---|---|
| Nom, domaine, e-mail, infos légales, réseaux sociaux | `src/config/site.ts` |
| URL de chaque page dans chaque langue | `src/i18n/routes.ts` |
| Menu, pied de page, SEO, libellés (3 langues) | `src/i18n/ui.ts` |
| Textes de l'accueil (3 langues) | `src/content/home.ts` |
| Textes À propos / Contact / pages produits / légal | `src/content/about.ts`, `contact.ts`, `productPages.ts`, `legal.ts` |
| Liste des SaaS (statut, URL, textes) | `src/content/products.ts` |
| Envoi du formulaire (PHP Hostinger) | `src/pages/api/contact.php.ts` |
| Couleurs, typo, espacements (direction artistique) | `src/styles/tokens.css` |
| Animations | `src/scripts/motion.ts` |

## Règles de design (style guide : docs/STYLE-GUIDE.md)
- Une seule couleur d'accent (or `--color-accent`), sur moins de 5 % de la surface ; jamais en texte sur fond clair.
- Grands titres en graisse 300, interlignage serré ; corps de texte en 400 maximum.
- Alternance de bandes sombres (`theme-dark`) et claires (`theme-cream` / `theme-paper`).
- Boutons en pilule, cartes 12 px, conteneurs 20 px.
- Les animations servent le design : pas d'effet gadget. Tout doit rester lisible sans JavaScript
  et avec « réduire les animations » activé.
- Aucun faux témoignage, aucun faux chiffre.

## Qualité attendue avant chaque mise en ligne
- `npm run build` sans erreur.
- Vérifier mobile (390 px), tablette (768 px) et bureau (1440 px).
- Lighthouse ≥ 95 en performance, 100 en accessibilité, bonnes pratiques et SEO.
