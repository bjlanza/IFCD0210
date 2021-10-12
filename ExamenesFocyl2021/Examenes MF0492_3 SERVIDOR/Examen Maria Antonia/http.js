const http = require("http");
const PORT = 8888;
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Examen Mª Antonia!");
    res.end();
  })
  .listen(PORT);
