const http = require("http");

const server = http.createServer((req, res) => {

  res.end("Te envío un saludo desde el servidor con node.js");

});

const puerto = 8888;

server.listen(puerto, () => {
  console.log("Examen de Guillermo...");
});