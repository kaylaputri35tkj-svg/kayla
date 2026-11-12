const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  let filePath = path.join(__dirname, cleanUrl === '/' ? 'index.html' : cleanUrl);
  let ext = path.extname(filePath).toLowerCase();
  let contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Web Portfolio aktif di http://localhost:${PORT}`);
});
