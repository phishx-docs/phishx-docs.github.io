#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# copy
rm -rf ../phishx-docs.github.io-temp/
mkdir -p ../phishx-docs.github.io-temp/
cp -R src/.vuepress/dist/ ../phishx-docs.github.io-temp/