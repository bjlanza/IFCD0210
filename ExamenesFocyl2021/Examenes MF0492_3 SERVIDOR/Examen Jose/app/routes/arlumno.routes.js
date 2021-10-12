module.exports = (app) => {
  const articles = require("../controllers/alumno.controller.js");

  // Crear un nuevo alumno
  app.post("/alumno", alumo.create);

  // Obtener todos los alumno
  app.get("/alumno", alumno.findAll);

  // Obtener un solo alumno con alumnoId
  app.get("/alumno/:alumnoId", alumno.findOne);

  // Actualizar un alumno con alumnoID
  app.put("/alumno/:alumnoId", alumno.update);

  // Borrar un alumno con alumnoID
  app.delete("/alumno/:alumnoId", alumno.delete);

  // Borrar Todos los alumno
  app.delete("/alumno", alumno.deleteAll);
};
