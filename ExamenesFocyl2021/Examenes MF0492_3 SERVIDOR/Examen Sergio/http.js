const { prototype } = require("events");

const PORT = process.env.PORT || 8888;

let http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Examen Sergio");
    res.end();
  })
  .listen(8888);
