# Prompt maître — site premium (méthode du guide + améliorations)

Prompt reformulé utilisé pour ariziki.com. Réutilisable pour chaque client : remplacez les parties entre crochets.

---

Tu es directeur artistique et développeur front-end senior. Crée le site vitrine premium de **[NOM]** ([domaine]), [description courte de l'entreprise].

**Objectifs** : 1) rendre la marque crédible auprès de [cibles] ; 2) [objectif secondaire] ; 3) générer des contacts qualifiés.

**Méthode** :
- Direction artistique tirée du style guide ci-dessous (Refero), suivie fidèlement : couleurs, typographies, espacements, composition. S'en inspirer, ne pas copier le site d'origine.
- Animations **GSAP + ScrollTrigger**, fluides et haut de gamme : révélations de textes et d'images, parallaxe, transitions entre sections, éléments qui se transforment au scroll, micro-interactions, effets de profondeur.
- Hero plein écran avec une animation d'entrée marquante.
- Les animations servent le design : aucun effet gadget.
- Images Unsplash/Pexels uniquement si nécessaire, comme espaces réservés.
- Commence par la **page d'accueil**. Après validation : décline les autres pages, puis passe responsive mobile/tablette, puis mise en ligne (URL sans `.html`).

**Exigences ajoutées** :
- Stack : Astro + GSAP + Lenis, CSS natif à base de design tokens.
- Performance Lighthouse ≥ 95, accessibilité / bonnes pratiques / SEO = 100.
- Accessibilité : contrastes AA, navigation clavier, `prefers-reduced-motion` respecté, contenu lisible sans JS.
- SEO : balises, Open Graph, données structurées, sitemap, hreflang si multilingue.
- Langues : [FR / EN / DE…].
- Aucun faux témoignage, aucun faux chiffre.
- Architecture réutilisable : identité, textes et tokens centralisés dans des fichiers de configuration.

**Entreprise** : [nom, activité, produits/services, cible, ton, coordonnées, pages souhaitées]

**Style guide** : [coller ici le style guide Refero]
