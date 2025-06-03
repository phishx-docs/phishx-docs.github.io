#!/usr/bin/env sh

# abort on errors
set -e

# commit
DATE=$(date "+%Y%m%d-%H")
git checkout gh-pages
cp -R ../phishx-docs.github.io-temp/dist/* ./
git add .
git commit -m deploy_$DATE
git push https://phishx-docs:$GHDOCSTOKEN@github.com/phishx-docs/phishx-docs.github.io.git gh-pages
git push https://phishx-docs:$GHDOCSTOKEN@github.com/phishx-docs/phishx-docs.github.io.git

# go back
git checkout master
git push
