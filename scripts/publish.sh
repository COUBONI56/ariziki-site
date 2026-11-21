#!/usr/bin/env bash
# Publie le site : construit dist/ puis l'envoie sur la branche « production ».
# Hostinger (déploiement Git automatique) met alors ariziki.com à jour tout seul.
set -euo pipefail
npm run build
REMOTE=$(git remote get-url origin)
TMP=$(mktemp -d)
cp -a dist/. "$TMP"/
cd "$TMP"
git init -q -b production
git add -A
git -c user.name="ARIZIKI" -c user.email="contacts@ariziki.com" commit -q -m "Publication $(date '+%Y-%m-%d %H:%M')"
git push -f -q "$REMOTE" production
echo "✓ Publié : ariziki.com sera à jour dans une minute."
