var http = require("http");

const port = 8888;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Examen Marcos Morán Cañón");
  })
  .listen(port);
