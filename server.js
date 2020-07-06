let http = require('http');

let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req);
  res.write('Hello');
  res.end();
}

server.listen(5000) // port
