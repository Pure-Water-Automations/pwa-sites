# Codex Second-Opinion Audit (gpt-5.6-sol, 2026-08-30) — integrated

P1s (all fixed in server.js):
1. JSON body `null` crashed process via b.website read — now type-gated + try/catch boundary.
2. %00 / CRLF decoded paths crashed fs.stat / Location header — control chars rejected (400).
3. Rate limiter unbounded memory — bounded fixed-window buckets + sweep + cap.
4. /go/* unlimited synchronous SQLite writes — per-IP click cap, insert wrapped, redirect never blocked.

P2s taken: Content-Type 415 gate; path.relative containment; byte-accurate 413 + server timeouts;
Email Core URL validated at startup + request timeout; stream pipeline error handling; loopback bind +
systemd UMask/ProtectSystem; query-preserving canonical redirects; ministry weekly-hours math qualified
("4-week service month"); HEAD without body read; founder-name consistency.
Not taken: dedicated service user (box convention runs siblings as root); versioned-dir atomic deploys
(rsync + restart acceptable at this scale).
