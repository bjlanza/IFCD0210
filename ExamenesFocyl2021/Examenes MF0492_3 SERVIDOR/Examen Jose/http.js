var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Examen Jose"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8888); //the server object listens on port 8888
