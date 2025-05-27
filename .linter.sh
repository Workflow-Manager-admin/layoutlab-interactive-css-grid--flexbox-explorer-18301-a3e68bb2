#!/bin/bash
cd /home/kavia/workspace/code-generation/layoutlab-interactive-css-grid--flexbox-explorer-18301-a3e68bb2/layoutlab_explorer
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

