#!/usr/bin/env sh

# abort on errors
set -e

# Check if GitHub token is set
if [ -z "$GITHUB_TOKEN" ]; then
    echo "Error: GITHUB_TOKEN environment variable is not set"
    echo "Please set your GitHub Personal Access Token"
    exit 1
fi

# Configure git for the deployment
git config --local user.name "phishx-docs"
git config --local user.email "phishx-docs@users.noreply.github.com"

# pre commit
DATE=$(date "+%Y%m%d-%H")
echo "Pre-deploy commit at $DATE"

git add .
if git diff --staged --quiet; then
    echo "No changes to commit"
else
    git commit -m "pre-deploy_$DATE"
    echo "Pushing to master..."
    git push https://phishx-docs:$GITHUB_TOKEN@github.com/phishx-docs/phishx-docs.github.io.git master
    echo "Push completed successfully!"
fi
