#!/usr/bin/env bash
# Construit chaque démo client qui a un fichier « publish-path » et la copie dans le dist du studio.
# Usage : bash demos/build-demos.sh <dossier dist du studio>
# Exemple : demos/aks-saarland/publish-path contient « aks.saarland » → arizikismartness.com/aks.saarland/
set -euo pipefail
OUT="$1"
HERE="$(cd "$(dirname "$0")" && pwd)"
for dir in "$HERE"/*/; do
  [ -f "$dir/publish-path" ] || continue
  path="$(tr -d '[:space:]' < "$dir/publish-path")"
  echo "→ Démo $(basename "$dir") → /$path/"
  (cd "$dir" && npm ci --silent && DEMO_BASE="/$path" npx astro build --silent)
  rm -rf "$OUT/$path"
  cp -a "$dir/dist" "$OUT/$path"
  rm -f "$OUT/$path/robots.txt"   # le noindex est dans chaque page ; le robots.txt du domaine reste celui du studio
done
