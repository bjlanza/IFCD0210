const express = require("express");

const app = express();

// Motor de plantilla
app.set("view engine", "ejs");
// Directorio de Plantillas / Vistas
app.set("views", __dirname + "app/views");
// Directorio de ficheros estáticos
app.use(express.static(__dirname + "app/public"));

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
  res.json({ message: "Examen MF0491, alumno: Patricio, Academia: Focyl" });
});


// Rutas Web
// Rutas
require("./app/router/alumno.routes.js")(app);


app.get('/alumno', function(req, res, next) {
    res.json({
      data: [
        {
          cita: 'El éxito es ir de fracaso en fracaso sin perder el entusiasmo',
          autor: 'Winston Churchill'
        }
      ],
      meta: {
        page: 1,
        curso: 'Curso Web Focyl'
      }
    });
  });

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Título del sitio web"
    })
})

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
