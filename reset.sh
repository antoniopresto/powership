#!/bin/sh

git add .
COMMIT_SUCCESS=false
if git commit -m 'temp'; then
  COMMIT_SUCCESS=true
fi
git clean -fdx
if [ "$COMMIT_SUCCESS" = true ]; then
  git reset --soft HEAD~1
fi

pnpm install
