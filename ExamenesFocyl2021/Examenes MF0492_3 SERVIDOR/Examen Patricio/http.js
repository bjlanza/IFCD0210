// Creación Servidor Web NodeJS con módulo http
var http = require('http');
const PORT = 8888;//constante que guarda el puerto donde se abre el servidor

//create a server object:
http.createServer(function (req, res) {
  console.log(`Server is running on port ${PORT}`);//mensaje por consola
  res.write('Examen Patricio'); //write a response to the client
  res.end(); //end the response
}).listen(PORT); //the server object listens on port 8888