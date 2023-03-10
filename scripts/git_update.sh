#!/bin/bash

echo "Enter a commit message"
read COMMIT_MESSAGE
if [ -z "$COMMIT_MESSAGE" ]; then
  echo "Error, you must to enter a commit message"
else
  git add .
  git commit -m "$COMMIT_MESSAGE"
  git pull origin dev
  git pull origin dev
  git push origin dev
  git switch main

  git merge --no-ff -m "Update main and development branch" dev
  git pull origin main
  git push origin main
  git switch dev
  git status

  current_time=$(date +%T)
  MERGE_MESSAGE="Main and dev branch has been updated at: $current_time"
	echo ">> $MERGE_MESSAGE"
fi