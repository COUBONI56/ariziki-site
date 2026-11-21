#!/usr/bin/env bash
# Publie arizikismartness.com : construit dist/ puis l'ajoute à la branche « studio-production ».
set -euo pipefail
npm run build
REMOTE=$(git remote get-url origin)
TMP=$(mktemp -d)
if git ls-remote --exit-code --heads "$REMOTE" studio-production >/dev/null 2>&1; then
  git clone -q --depth 1 -b studio-production "$REMOTE" "$TMP"
  find "$TMP" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
else
  git init -q -b studio-production "$TMP"; git -C "$TMP" remote add origin "$REMOTE"
fi
cp -a dist/. "$TMP"/
cd "$TMP"
git add -A
if git diff --cached --quiet; then echo "Rien à publier : arizikismartness.com est déjà à jour."; exit 0; fi
git -c user.name="ARIZIKI" -c user.email="contacts@ariziki.com" commit -q -m "Publication studio $(date '+%Y-%m-%d %H:%M')"
git push -q origin studio-production
echo "✓ Publié : arizikismartness.com sera à jour dans une à deux minutes (sinon : hPanel → Git → Déployer, branche studio-production)."
