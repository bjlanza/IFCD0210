//Comandos NPM
// npm init - Crea el fichero package.json
// npm install mysql   - Instalamos la librería

// "Importamos" la librería
let mysql = require("mysql");

// Creamos el objeto conexión
let con = mysql.createConnection({
  host: "localhost",
  user: "marcos",
  password: "exam3n",
  database: "cursoweb",
});

let sql = "SELECT * FROM usuario";

//Iniciamos la conexión
con.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

//Cerramos la conexión
con.end(function (err) {
  if (err) {
    return console.log("error:" + err.message);
  }
  console.log("Close the database connection.");
});
