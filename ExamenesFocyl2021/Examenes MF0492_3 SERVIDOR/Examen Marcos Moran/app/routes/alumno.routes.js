module.exports = (app) => {
  const alumno = require("../controllers/alumno.controller.js");

  // Crear un nuevo alumnos
  app.post("/alumno", alumno.create);

  // Obtener todos los alumnos
  app.get("/alumno", alumno.findAll);

  // Obtener un solo alumno con alumnoId
  app.get("/alumno/:alumnoId", alumno.findOne);

  // Actualizar un alumno con alumnoId
  app.put("/alumno/:alumnoId", alumno.update);

  // Borrar un alumno con alumnoId
  app.delete("/alumno/:alumnoId", alumno.delete);

  // Borrar Todos los alumnos
  app.delete("/alumno", alumno.deleteAll);
};
