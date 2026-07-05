#!/usr/bin/env bash
set -euo pipefail

if [ $EUID != 0 ]; then
  echo "Запустите скрипт от root"
  exit 1
fi

docker compose down
cd ./backend && docker build -t backend . 
cd .. && docker compose up -d

