
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer(function(req, res) {
  const modulePath = path.join(__dirname, req.url);

  if (fs.existsSync(modulePath)) {
    const fileContent = fs.readFileSync(modulePath, 'utf8');
    res.end(fileContent);
  } else {
    res.end('not found');
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http:${hostname}:${port}/`)
})
