#!/bin/bash
cd themes/timeline && npm run build && cd ../..
hugo --baseURL=https://jamesreuss.co.uk/ \
     --destination="public"
