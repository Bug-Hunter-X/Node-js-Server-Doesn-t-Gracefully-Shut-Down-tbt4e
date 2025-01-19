const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server running at http://localhost:8080/');
//The issue is that the server never closes even after Ctrl+C.  This is a problem if you want to stop the server cleanly.