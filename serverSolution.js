const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

let isShuttingDown = false;

const shutdown = () => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});