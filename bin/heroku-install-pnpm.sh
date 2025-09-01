#!/bin/bash
set -e

echo "Installing pnpm..."
npm install -g pnpm@8.15.6

echo "pnpm version:"
pnpm --version

echo "Installing frontend dependencies..."
cd frontend
pnpm install

echo "Building frontend..."
pnpm run build 