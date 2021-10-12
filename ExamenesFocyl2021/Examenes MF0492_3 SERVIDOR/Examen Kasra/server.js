const express = require("express");
const path = require("path");

const app = express();
const pool = require(path.join(__dirname, "/app/models/db.js"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/app/views");

app.use(express.static(__dirname + "/app/public"));

// Express > 4.16
// parsear solicitudes de tipo de contenido: application/json
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Examen MF0491, almuno Kasra, Academia Focyl" });
});

// Rutas
require("./app/routes/article.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
