// After `astro build`: when the site is served from a sub-path (SITE_BASE, e.g. /ishan-portfolio),
// prefix root-absolute links to public files and pages so they resolve under that path.
// No-op when SITE_BASE is unset or '/'.
import fs from 'node:fs';
import path from 'node:path';

const base = (process.env.SITE_BASE || '/').replace(/\/$/, '');
if (!base) process.exit(0);

const DIST = path.resolve('dist');
// A root-absolute path: "/" followed by a path character, preceded by a quote, paren, comma or space,
// and not already prefixed, not protocol-relative.
const esc = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const re = new RegExp(`(["'(,\\s])\\/(?!\\/)(?!${esc.slice(1)}\\/)(?=[A-Za-z0-9_#?.-])`, 'g');

const lead = new RegExp(`^\\/(?!\\/)(?!${esc.slice(1)}\\/)`);
const cssUrl = new RegExp(`url\\((['"]?)\\/(?!\\/)(?!${esc.slice(1)}\\/)`, 'g');
let files = 0;
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
  const p = path.join(d, e.name);
  if (e.isDirectory()) return walk(p);
  if (!/\.(html|css)$/.test(e.name)) return;
  const t = fs.readFileSync(p, 'utf8');
  // Only rewrite inside attribute values and url(); leave visible text alone.
  const n = t.replace(/(\b(?:href|src|srcset|poster|content|action)=")([^"]*)"/g, (m, a, v) => a + v.replace(re, `$1${base}/`).replace(lead, `${base}/`) + '"')
             .replace(cssUrl, `url($1${base}/`);
  if (n !== t) { fs.writeFileSync(p, n); files++; }
});
walk(DIST);
console.log(`rebase: prefixed links with ${base} in ${files} files`);
