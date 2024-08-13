const http = require('http');
const fs = require('fs');

// Load the JSON configuration file
const config = JSON.parse(fs.readFileSync('servers.json', 'utf8'));

// Function to start a server
function startServer({ name, port, host, message }) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message);
  });

  server.listen(port, host, () => {
    console.log(`${name} is running at http://${host}:${port}`);
  });
}

// Start each server based on the configuration
config.servers.forEach(startServer);
