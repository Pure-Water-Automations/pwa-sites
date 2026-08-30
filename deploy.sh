#!/bin/bash
# Deploy pwa-sites to the Hostinger VPS (public production).
# Rsync working tree -> /opt/pwa-sites/current, install service on first run, restart.
set -euo pipefail

BOX="root@2.24.121.26"
DEST="/opt/pwa-sites/current"
cd "$(dirname "$0")"

echo "==> rsync to $BOX:$DEST"
ssh "$BOX" "mkdir -p $DEST /opt/pwa-sites/data"
rsync -az --delete \
  --exclude '.git' --exclude 'data' --exclude 'design-src' --exclude '.DS_Store' \
  ./ "$BOX:$DEST/"

echo "==> service"
ssh "$BOX" "cp $DEST/deploy/pwa-sites.service /etc/systemd/system/pwa-sites.service \
  && systemctl daemon-reload && systemctl enable --now pwa-sites && systemctl restart pwa-sites \
  && sleep 1 && systemctl is-active pwa-sites \
  && curl -s -o /dev/null -w 'healthz: %{http_code}\n' http://127.0.0.1:8811/healthz"

echo "==> done"
