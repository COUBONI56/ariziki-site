# Revendre ce modèle — procédure de déclinaison client

Ce site est construit comme un **modèle** : aucun texte ni aucune couleur n'est écrit en dur dans les composants.
Décliner le site pour un client consiste donc à remplacer 5 fichiers, pas à refaire le site.

## Déclinaison en 6 étapes (1 à 2 jours au lieu de plusieurs semaines)
1. **Dupliquer** le dossier (ou le dépôt Git) sous le nom du client.
2. **Direction artistique** : choisir un style guide sur Refero avec le client, puis demander à Claude Code :
   « Remplace les tokens de `src/styles/tokens.css` par ceux de ce style guide : [coller] ». Changer la police dans `Base.astro`.
3. **Identité** : `src/config/site.ts` (nom, domaine, e-mail) et le composant `Logo.astro` (ou un `logo.svg`).
4. **Textes** : `src/i18n/ui.ts` et `src/content/home.ts` (une section par langue, à supprimer ou ajouter).
5. **Offre du client** : `src/content/products.ts` devient ses services, ses produits ou ses réalisations.
6. **Contrôles et mise en ligne** : responsive, Lighthouse, déploiement Hostinger (voir `DEPLOIEMENT-HOSTINGER.md`).

Le prompt réutilisable est dans `PROMPT-MAITRE.md`.

## Ce qui justifie un prix « premium » (arguments de vente vérifiables)
- Direction artistique tirée d'un système de design de marque reconnue, pas d'un template.
- Animations sur mesure (GSAP), défilement fluide, entrée de site marquante.
- Scores Lighthouse mesurés : 98-99 en performance, 100 en accessibilité, bonnes pratiques et SEO.
- Multilingue natif (hreflang, sitemap par langue), données structurées, image de partage.
- Code propre et documenté, que le client possède. Aucun abonnement de constructeur de site.

## Proposition d'offres (indicative, à ajuster à votre marché)
| Offre | Contenu | Repère de prix |
|---|---|---|
| Essentiel | 1 page premium, 1 langue, mise en ligne | 1 500 – 3 000 € |
| Signature | 4 à 6 pages, 2 langues, animations sur mesure, SEO | 4 000 – 8 000 € |
| Prestige | Site multilingue complet, pages produits, direction artistique dédiée, accompagnement | 10 000 € et + |
| Maintenance | Hébergement, mises à jour, petites évolutions | 50 – 200 € / mois |

Prochaine étape suggérée : une page « Studio » sur ariziki.com (ou un site dédié) qui présente cette offre,
avec ariziki.com comme première réalisation.
