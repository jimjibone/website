#!/bin/bash
hugo server --baseURL=https://jamesreuss.co.uk/dev/ \
            --appendPort=false \
            --port=8080 \
            --disableLiveReload=true \
            --destination="dev" \
            --buildDrafts=true \
            --renderToDisk
