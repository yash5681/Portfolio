/**
 * ====================================================================
 * LIVE PORTFOLIO LOCALTUNNEL RUNNER
 * Candidate: Prajapati Yash Arunbhai - Full Stack Developer
 * Serves portfolio locally and broadcasts via public localtunnel URL
 * ====================================================================
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 4173;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

// 1. Static Portfolio HTTP Server
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  let cleanUrl = req.url.split('?')[0].split('#')[0];
  if (cleanUrl === '/' || cleanUrl === '') {
    cleanUrl = '/index.html';
  }

  const safePath = path.normalize(cleanUrl).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(ROOT, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 - Not Found</h1><p><a href="/">Return to Yash Prajapati Portfolio</a></p>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

// Fetch Host Public IP (Used as Localtunnel bypass password)
function fetchPublicIP() {
  return new Promise((resolve) => {
    https.get('https://api.ipify.org', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data.trim()));
    }).on('error', () => {
      resolve('Run curl https://loca.lt/mytunnelpassword');
    });
  });
}

server.listen(PORT, '0.0.0.0', async () => {
  console.log(`\n============================================================`);
  console.log(`⚡ [LOCAL SERVER] Serving portfolio at: http://localhost:${PORT}`);
  console.log(`============================================================`);

  const publicIP = await fetchPublicIP();

  // Try custom subdomain or random subdomain
  const subdomain = 'yash-prajapati-portfolio';
  const ltProcess = spawn('npx.cmd', ['-y', 'localtunnel', '--port', String(PORT), '--subdomain', subdomain], { shell: true });

  let tunnelUrl = '';

  ltProcess.stdout.on('data', (data) => {
    const text = data.toString();
    const match = text.match(/https:\/\/[a-zA-Z0-9-]+\.loca\.lt/);
    if (match) {
      tunnelUrl = match[0];
      console.log(`\n============================================================`);
      console.log(`🚀 [LOCALTUNNEL LIVE] Your Portfolio is LIVE on the web!`);
      console.log(`🌐 Public URL: ${tunnelUrl}`);
      console.log(`🔑 Tunnel Password (Endpoint IP): ${publicIP}`);
      console.log(`============================================================`);
      console.log(`ℹ️  Note: When opening the localtunnel link for the first time,`);
      console.log(`   Localtunnel may ask for the "Tunnel Password". Simply enter:`);
      console.log(`   --> ${publicIP} <-- and click "Click to Submit".`);
      console.log(`============================================================\n`);
    } else {
      console.log(text.trim());
    }
  });

  ltProcess.stderr.on('data', (data) => {
    const text = data.toString();
    if (!text.includes('npm notice')) {
      console.error(`[LT Log]:`, text.trim());
    }
  });

  ltProcess.on('close', (code) => {
    console.log(`[LT Closed] Tunnel exited with code ${code}.`);
  });
});
