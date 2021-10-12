module.exports = (app) => {
  const alumno = require("../controllers/alumno.controller.js");

  // Crear un nuevo alumno
  app.post("/alumno", alumnos.create);

  // Obtener todos los alumnos
  app.get("/alumno", alumnos.findAll);

  // Obtener un solo alumno con alumnoId
  app.get("/alumno/:alumnoId", alumnos.findOne);

  // Actualizar un alumno con alumnoID
  app.put("/alumno/:alumnoId", alumnos.update);

  // Borrar un alumno con alumnoID
  app.delete("/alumno/:alumnoId", alumnos.delete);

  // Borrar Todos los alumnos
  app.delete("/alumno", alumnos.deleteAll);
};
