# ariziki.com

Site vitrine premium d'**ARIZIKI**, la marque-mère d'ARIZIKI EliteOffers, de NOVARYS et des prochains SaaS.
FR · EN · DE — Astro 7 · GSAP · Lenis.

```bash
npm install
npm run dev      # http://localhost:4321  (FR) · /en/ · /de/
npm run build    # génère dist/
npm run publish  # met ariziki.com à jour (via la branche production)
```

- Instructions pour Claude Code / Antigravity : `CLAUDE.md`
- Direction artistique : `docs/STYLE-GUIDE.md`
- Prompt réutilisable : `docs/PROMPT-MAITRE.md`
- Mise en ligne Hostinger : `docs/DEPLOIEMENT-HOSTINGER.md`
- Revendre le modèle : `docs/MODELE-REVENTE.md`

**À compléter** dans `src/config/site.ts` (bloc `legal`) : nom et prénom, adresse de domiciliation, SIRET, téléphone.
Ces champs s'affichent surlignés sur les pages légales tant qu'ils sont vides.
