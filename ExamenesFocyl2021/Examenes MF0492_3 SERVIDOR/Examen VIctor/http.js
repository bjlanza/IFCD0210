const http = require('http');
const port = 8888;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Examen Victor Cuesta');
  res.end();
}).listen(port);

