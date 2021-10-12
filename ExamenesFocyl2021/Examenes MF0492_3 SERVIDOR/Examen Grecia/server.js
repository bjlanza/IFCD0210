const express = require("express");

const app = express();

app.use(express.json());

// Motor de plantilla
app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Examen: MF0491, alumna: Grecia, Academia: Focyl"});
});

// Rutas
require("./app/routes/alumno.routes.js");

app.use((req, res, next) => {
  res.status(404).render("404", {
      titulo: "404",
      descripcion: "Título del sitio web"})
})

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`El servidor funciona ${PORT}.`);
});