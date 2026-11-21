#!/usr/bin/env bash
# Publie le site : construit dist/ puis l'ajoute à la branche « production ».
# Hostinger (déploiement Git automatique) met alors ariziki.com à jour tout seul.
set -euo pipefail
npm run build
REMOTE=$(git remote get-url origin)
TMP=$(mktemp -d)
git clone -q --depth 1 -b production "$REMOTE" "$TMP"
find "$TMP" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a dist/. "$TMP"/
cd "$TMP"
git add -A
if git diff --cached --quiet; then echo "Rien à publier : le site en ligne est déjà à jour."; exit 0; fi
git -c user.name="ARIZIKI" -c user.email="contacts@ariziki.com" commit -q -m "Publication $(date '+%Y-%m-%d %H:%M')"
git push -q origin production
echo "✓ Publié : ariziki.com sera à jour dans une minute."
