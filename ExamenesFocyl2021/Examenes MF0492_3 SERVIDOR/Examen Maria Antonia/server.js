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

//ruta
app.get("/", (req, res) => {
  res.json({ message: "Examen MF0491, alumno: M Antonia, Academia: Focyl" });
});

// Rutas
require("./app/routes/alumno.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
