#!/bin/bash
# For help see: http://gohugo.io/tutorials/github-pages-blog/
set -e
echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Check that the public submodule is up to date, etc.
git submodule update --init public
cd public
git checkout -B master
cd ..

# Build the project.
hugo

# Publish.
cd public
git add -A
git commit -m "rebuilding site `date`"
git push origin master
cd ..
