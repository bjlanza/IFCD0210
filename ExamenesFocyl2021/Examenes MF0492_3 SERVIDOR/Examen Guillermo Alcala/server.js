const express = require("express");

const app = express();

// Express > 4.16
// parsear solicitudes de tipo de contenido: application/json
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);



app.use(express.static(__dirname + "/public"));

//motor de plantillas

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//directorio publico antes de que se hagan nuestras solicitudes
app.use(express.static( __dirname + "/public"));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Examen MF0491 alumno: Guillermo Alcala, Academia: Focyl" });
});

// Rutas

//require("./app/routes/alumno.routes.js")(app);

// set port, listen for requests





//manejo error 404

app.use((req, res, next) => {
  res.status(404).render("404", {
      titulo: "404",
      descripcion: "Página de Error"
  })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
