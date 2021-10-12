module.exports = (app) => {
  const articles = require("../controllers/article.controller.js");

  // Crear un nuevo artículo
  app.post("/articulo", articles.create);

  // Obtener todos los artículos
  app.get("/articulo", articles.findAll);

  // Obtener un solo artículo con articleId
  app.get("/articulo/:articleId", articles.findOne);

  // Actualizar un articulo con articleID
  app.put("/articulo/:articleId", articles.update);

  // Borrar un articulo con articleID
  app.delete("/articulo/:articleId", articles.delete);

  // Borrar Todos los articulos
  app.delete("/articulo", articles.deleteAll);
};
