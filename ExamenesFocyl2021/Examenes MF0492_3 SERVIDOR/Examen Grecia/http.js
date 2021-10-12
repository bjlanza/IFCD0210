var http = require('http');

const PORT = process.env.PORT || 8888;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Examen Grecia');
  res.end();

}).listen(PORT, () => {
    console.log(`El servidor funciona ${PORT}.`);
  });