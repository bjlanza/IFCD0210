var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Examen Emilio");
    res.end();
  })
  .listen(8888);
