#!/bin/bash  
node-sass \  
  --include-path ./src/scss \  
  --include-path node_modules/foundation/scss/ \  
  ./src/scss/main.scss .src/styles/main.css