module.exports = (app) => {
  const alumns = require("../controllers/alumno.controller.js");

  // Crear un nuevo artículo
  app.post("/alumno", alumns.create);

  // Obtener todos los artículods
  app.get("/alumno", alumns.findAll);

  // Obtener un solo artículo con alumnid
  app.get("/alumno/:alumnid", alumns.findOne);

  // Actualizar un alumno con alumnID
  app.put("/alumno/:alumnid", alumns.update);

  // Borrar un alumno con alumnID
  app.delete("/alumno/:alumnid", alumns.delete);

  // Borrar Todos los alumnos
  app.delete("/alumno", alumns.deleteAll);
};
