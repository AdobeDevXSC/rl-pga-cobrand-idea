/*
 * Local harness for the Ralph Lauren × PGA TOUR homepage examples.
 * Serves the repo root so the prototypes are decorated by the real core
 * blocks, scripts and styles, and answers the header/footer fragment
 * requests with the example nav and footer in ./fragments.
 *
 *   node stardust/prototypes/serve.mjs   ->  http://localhost:3100/stardust/prototypes/
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const root = normalize(join(here, '..', '..'));
const port = Number(process.env.PORT) || 3100;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
};

const aliases = {
  '/nav.plain.html': 'stardust/prototypes/fragments/nav.plain.html',
  '/footer.plain.html': 'stardust/prototypes/fragments/footer.plain.html',
};

createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (path.endsWith('/')) path += 'index.html';
  const file = normalize(join(root, aliases[path] || path));
  if (!file.startsWith(root) || file.includes(`${root}/content/`)) {
    res.writeHead(404).end();
    return;
  }
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Examples: http://localhost:${port}/stardust/prototypes/`);
});
