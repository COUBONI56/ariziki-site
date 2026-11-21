# Direction artistique — ARIZIKI

**Référence** : style guide Refero « Eight Sleep » — *midnight observatory with single neon pulse*
(styles.refero.design/style/e4e8fe86-47ed-4ddd-a6c6-2c28eae9aabe). Même famille que les sites d'Apple, Sonos et Oura.

**Adaptation ARIZIKI** : l'accent unique (bleu dans la référence) devient l'**or de la marque**, en écho au logo
d'ARIZIKI EliteOffers et au sens du nom (ARIZIKI = « richesse »).

## Couleurs (`src/styles/tokens.css`)
| Rôle | Valeur |
|---|---|
| Fond sombre / hero | `#000000`, `#090b12` |
| Surface claire | `#f9f8f7` (crème), `#ffffff` |
| Texte secondaire sur sombre / sur clair | `#8e8d92` / `#696765` |
| Bordures sombre / clair | `#2e2e2e` / `#ececec` |
| **Accent or** | `#d4af37` (reflet `#f1d98a`) — moins de 5 % de la surface, jamais en texte sur fond clair |

## Typographie
- **Hanken Grotesk** (substitut de Neue Montreal) pour tout le texte. Titres en 300, corps en 400, libellés en 700 majuscules espacées.
- **Cinzel** uniquement pour le mot-symbole ARIZIKI (logo, intro, pied de page).
- Échelle : 11 / 12 / 14 / 16 / 18 / 28 / 44 / 56 / 64 / 115 px (fluides avec `clamp()`).

## Formes
Boutons en pilule · cartes 12 px · conteneurs 20 px · images 8 px · ombres très légères · filets de 1 px.

## Signature visuelle
L'« horizon » : une sphère sombre bordée d'un liseré doré qui se lève devant un halo (hero + CTA final).
Il dit « lever de soleil, richesse qui se crée » sans aucune image à charger.

## Mouvement
Intro (1re visite) → lever de l'horizon → titres qui sortent de leurs masques → hero épinglé que le manifeste recouvre →
mots du manifeste qui s'allument → cartes produits empilées → fil de progression de la méthode → CTA qui s'agrandit
jusqu'au plein écran → mot-symbole du pied de page qui se lève. Boutons magnétiques à la souris.
