// PWA audience sites — zero-dependency static host + lead-capture API.
// Node >= 22.5 (node:sqlite). Routes by Host header:
//   ministry.purewaterautomations.com   -> sites/ministry
//   nonprofits.purewaterautomations.com -> sites/nonprofit
// Local dev: http://localhost:PORT/ministry/... and /nonprofit/... also work.

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

const PORT = process.env.PORT || 8811;
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, 'data');

fs.mkdirSync(DATA_DIR, { recursive: true });
const db = new DatabaseSync(path.join(DATA_DIR, 'leads.db'));
db.exec(`CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  audience TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  phone TEXT,
  interest TEXT,
  message TEXT,
  page TEXT,
  user_agent TEXT
)`);

const HOSTS = {
  'ministry.purewaterautomations.com': 'ministry',
  'nonprofits.purewaterautomations.com': 'nonprofit',
};

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff2': 'font/woff2',
};

function send(res, code, body, headers = {}) {
  res.writeHead(code, headers);
  res.end(body);
}

function serveFile(res, filePath) {
  fs.stat(filePath, (err, st) => {
    if (err || !st.isFile()) return send(res, 404, 'Not found', { 'Content-Type': 'text/plain' });
    const ext = path.extname(filePath).toLowerCase();
    const cache = ext === '.html' ? 'no-cache' : 'public, max-age=86400';
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': cache,
      'X-Content-Type-Options': 'nosniff',
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

// Best-effort email notification through Email Core (optional; env-gated).
// Requires all four env vars; leads are always durable in SQLite regardless.
function notifyLead(lead) {
  const apiUrl = process.env.EMAIL_CORE_URL;
  const apiKey = process.env.EMAIL_CORE_KEY;
  const workspaceId = process.env.EMAIL_CORE_WORKSPACE;
  const senderId = process.env.EMAIL_CORE_SENDER_ID;
  const to = process.env.LEAD_NOTIFY_TO;
  if (!apiUrl || !apiKey || !workspaceId || !senderId || !to) return;
  const body = JSON.stringify({
    workspace_id: workspaceId,
    sender_identity_id: senderId,
    to: { email: to },
    subject: `New ${lead.audience} lead: ${lead.name}`,
    text: `Name: ${lead.name}\nEmail: ${lead.email}\nOrg: ${lead.organization || '-'}\nPhone: ${lead.phone || '-'}\nInterest: ${lead.interest || '-'}\nPage: ${lead.page || '-'}\n\n${lead.message || ''}`,
    idempotency_key: `pwa-sites-lead-${lead.id}`,
  });
  const u = new URL('/send/transactional', apiUrl);
  const req = (u.protocol === 'https:' ? require('node:https') : http).request(u, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
  }, (r) => r.resume());
  req.on('error', (e) => console.error('notifyLead failed:', e.message));
  req.end(body);
}

// ponytail: in-memory rate limit resets on restart; fine for a lead form.
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 3600_000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 10;
}

function handleLead(req, res, audience) {
  let raw = '';
  req.on('data', (c) => { raw += c; if (raw.length > 20_000) req.destroy(); });
  req.on('end', () => {
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress;
    if (rateLimited(ip)) return send(res, 429, JSON.stringify({ ok: false, error: 'Too many requests' }), { 'Content-Type': 'application/json' });
    let b;
    try { b = JSON.parse(raw); } catch { return send(res, 400, JSON.stringify({ ok: false, error: 'Invalid JSON' }), { 'Content-Type': 'application/json' }); }
    if (b.website) return send(res, 200, JSON.stringify({ ok: true }), { 'Content-Type': 'application/json' }); // honeypot
    const name = String(b.name || '').trim().slice(0, 200);
    const email = String(b.email || '').trim().slice(0, 200);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return send(res, 400, JSON.stringify({ ok: false, error: 'Name and a valid email are required' }), { 'Content-Type': 'application/json' });
    }
    const stmt = db.prepare(`INSERT INTO leads (audience, name, email, organization, phone, interest, message, page, user_agent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
    const info = stmt.run(
      audience, name, email,
      String(b.organization || '').slice(0, 300),
      String(b.phone || '').slice(0, 50),
      String(b.interest || '').slice(0, 200),
      String(b.message || '').slice(0, 5000),
      String(b.page || '').slice(0, 300),
      String(req.headers['user-agent'] || '').slice(0, 300),
    );
    notifyLead({ id: info.lastInsertRowid, audience, name, email, organization: b.organization, phone: b.phone, interest: b.interest, message: b.message, page: b.page });
    send(res, 200, JSON.stringify({ ok: true }), { 'Content-Type': 'application/json' });
  });
}

const server = http.createServer((req, res) => {
  const host = (req.headers.host || '').split(':')[0].toLowerCase();
  let site = HOSTS[host] || null;
  let urlPath;
  try { urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch { return send(res, 400, 'Bad request'); }

  // Local-dev prefix routing when host is not a known vhost.
  if (!site) {
    const m = urlPath.match(/^\/(ministry|nonprofit)(\/.*)?$/);
    if (m) { site = m[1]; urlPath = m[2] || '/'; }
  }

  if (req.method === 'POST' && urlPath === '/api/lead') {
    return handleLead(req, res, site || 'unknown');
  }
  if (urlPath === '/healthz') return send(res, 200, 'ok', { 'Content-Type': 'text/plain' });
  if (!site) return send(res, 404, 'Not found', { 'Content-Type': 'text/plain' });
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'Method not allowed');

  // Shared static assets under /shared/
  if (urlPath.startsWith('/shared/')) {
    const p = path.normalize(path.join(ROOT, urlPath));
    if (!p.startsWith(path.join(ROOT, 'shared'))) return send(res, 403, 'Forbidden');
    return serveFile(res, p);
  }

  const siteRoot = path.join(ROOT, 'sites', site);
  let p = path.normalize(path.join(siteRoot, urlPath));
  if (!p.startsWith(siteRoot)) return send(res, 403, 'Forbidden');
  if (urlPath === '/' || urlPath === '') p = path.join(siteRoot, 'index.html');
  else if (!path.extname(p)) p = `${p}.html`; // clean URLs: /services -> services.html
  serveFile(res, p);
});

server.listen(PORT, () => console.log(`pwa-sites listening on :${PORT}`));
