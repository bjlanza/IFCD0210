const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: localhost,
  user: ExamenJose,
  password: exam3n,
  database: cursoweb,
});

module.exports = connection;
