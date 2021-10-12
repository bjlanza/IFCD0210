module.exports = (app) => {
  const alumno = require("../controllers/alumno.controller.js");

  // Crear un nuevo artículo
  app.post("/alumno", alumno.create);

  // Obtener todos los artículos
  app.get("/alumno", alumno.findAll);

  // Obtener un solo artículo con articleId
  app.get("/alumno/:articleId", alumno.findOne);

  // Actualizar un articulo con articleID
  app.put("/alumno/:articleId", alumno.update);

  // Borrar un articulo con articleID
  app.delete("/alumno/:articleId", alumno.delete);

  // Borrar Todos los articulos
  app.delete("/alumno", alumno.deleteAll);
};
