#!/usr/bin/bash
set -euo pipefail
npx tsc --esModuleInterop zenodo.ts && node zenodo.js $1 $2
