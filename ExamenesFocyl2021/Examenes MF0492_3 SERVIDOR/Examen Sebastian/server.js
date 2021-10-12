//modulos
const express = require("express");
const app = express();
const mysql = require('mysql')

// Motor de plantilla
app.set("view engine", "ejs");

//directorio de plantilla y public

app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));



// Express > 4.16
// parsear solicitudes de tipo de contenido: application/json
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.use(
  express.urlencoded({
    extended: true,
  })
);

// routa JSON
app.get("/", (req, res) => {
  res.json({ mensajes:'Examen MF0491', alumno:'Sebastian Garcia', Academia:'Focyl' });
});

app.get("/alumno", (req, res) => {
  res.json({ nombre: "Sebastian", apellido:'Garcia'  });
  image: '{{app}}/public/elontest.jpg/image/test.jpeg'
});

// Rutas
require("./app/routes/alumno.routes.js")(app);


//ERROR 404
app.use((req, res, next) => {
  res.status(404).render("404", {
      titulo: "404",
      descripcion: "Título del sitio web"
  })
})

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
