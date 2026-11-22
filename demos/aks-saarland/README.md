# AKS Fehr & Martini GmbH — Konzept-Entwurf (démo ARIZIKI Smartness)

Maquette de démonstration du site d’**AKS Fehr & Martini GmbH** (Püttlingen), réalisée avec le
modèle ARIZIKI Smartness. **Ce n'est pas le site officiel d'AKS** : bandeau « Konzept-Entwurf »
permanent, balise `noindex`, `robots.txt` bloquant, formulaire qui n'envoie aucune donnée.

## Langues
Allemand à la racine (`/`), français (`/fr/`), italien (`/it/`).

## Contenu
Uniquement des informations publiques d'AKS (aks-saarland.de, relevé du 22/11/2026) : prestations,
marques, Mietpark avec fiches techniques, adresse, horaires. Aucun avis client ni chiffre inventé.
Visuels : dessins techniques en SVG (pas de photos) — à compléter avec les vraies photos de l'atelier.

## Commandes
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dossier dist/
DEMO_BASE=/demo/aks-saarland npm run build   # pour héberger sous arizikismartness.com/demo/aks-saarland/
```

## Où modifier quoi
| Besoin | Fichier |
|---|---|
| Coordonnées, horaires, Mietpark, partenaires | `src/config/site.ts` |
| Textes de l'accueil (DE / FR / IT) | `src/content/home.ts` |
| Menu, horaires, pied de page (DE / FR / IT) | `src/i18n/ui.ts` |
| Couleurs, typographie | `src/styles/tokens.css` (voir `docs/STYLE-GUIDE.md`) |
| Animations | `src/scripts/motion.ts` |
| Assistant de demande (4 étapes) | `src/components/Request.astro` |

## Ce que la démo montre au client
1. Hero immersif : tracteur en dessin technique qui entre dans le champ, gyrophare, annotations reliées aux vraies prestations.
2. Statut d'ouverture en direct (heure de Berlin), horaires du jour mis en évidence.
3. Familles de machines en défilement horizontal, Mietpark avec la flèche du télescopique qui se lève au scroll.
4. **Assistant de demande** : pré-qualifie (atelier / achat / location / pièces, véhicule, urgence) et marque chaque
   demande avec sa **source « Website »** — base du suivi des contacts apportés (proposition du 08/02/2026).
5. Lighthouse (22/11/2026) : performance 96 mobile / 99 bureau, accessibilité 100, bonnes pratiques 100.
   SEO 66 uniquement à cause du `noindex` volontaire de la maquette (tous les autres critères passent).

## Pour la version réelle
Retirer le `noindex`, le bandeau et le `robots.txt` ; brancher le formulaire (PHP Hostinger, comme ariziki.com) ;
logo officiel ; photos de l'atelier et des machines ; mentions légales / Datenschutz ; pages Werkstatt, Maschinen, Mietpark.

## Mise en ligne
En ligne sur **https://arizikismartness.com/aks.saarland/** (DE), `/aks.saarland/fr/`, `/aks.saarland/it/`.
Le fichier `publish-path` indique ce chemin ; `studio/scripts/publish.sh` (via `demos/build-demos.sh`)
reconstruit et ajoute la démo à chaque publication du studio, elle n'est donc jamais effacée.
