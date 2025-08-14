#!/usr/bin/env sh

# abort on errors
set -e

# Check if GitHub token is set
if [ -z "$GITHUB_TOKEN" ]; then
    echo "Error: GITHUB_TOKEN environment variable is not set"
    echo "Please set your GitHub Personal Access Token or use GitHub Actions token"
    exit 1
fi

# commit
DATE=$(date "+%Y%m%d-%H")
echo "Starting deployment at $DATE"

# Configure git for the deployment
git config --local user.name "phishx-docs"
git config --local user.email "phishx-docs@users.noreply.github.com"

# Switch to gh-pages branch
echo "Switching to gh-pages branch..."
git checkout gh-pages

# Copy built files
echo "Copying built files..."
if [ -d "../phishx-docs.github.io-temp/dist" ]; then
    cp -R ../phishx-docs.github.io-temp/dist/* ./
else
    echo "Error: Build directory not found at ../phishx-docs.github.io-temp/dist"
    exit 1
fi

# Add and commit changes
echo "Committing changes..."
git add .
if git diff --staged --quiet; then
    echo "No changes to deploy"
else
    git commit -m "deploy_$DATE"

    # Push to gh-pages using token authentication
    echo "Pushing to gh-pages..."
    git push https://phishx-docs:$GITHUB_TOKEN@github.com/phishx-docs/phishx-docs.github.io.git gh-pages
fi

# go back to master and push any local changes
echo "Switching back to master..."
git checkout master

# Only push master if there are changes
if ! git diff --quiet HEAD @{upstream} 2>/dev/null; then
    echo "Pushing master branch..."
    git push https://phishx-docs:$GITHUB_TOKEN@github.com/phishx-docs/phishx-docs.github.io.git master
else
    echo "No changes to push on master branch"
fi

echo "Deployment completed successfully!"
