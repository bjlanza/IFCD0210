module.exports = (app) => {
  const articles = require("../controllers/alumnosController.js");

  // Crear un nuevo artículo
  app.post("/almuno", articles.create);

  // Obtener todos los artículos
  app.get("/almuno", articles.findAll);

  // Obtener un solo artículo con articleId
  app.get("/almuno/:articleId", articles.findOne);

  // Actualizar un articulo con articleID
  app.put("/almuno/:articleId", articles.update);

  // Borrar un articulo con articleID
  app.delete("/almuno/:articleId", articles.delete);

  // Borrar Todos los articulos
  app.delete("/almuno", articles.deleteAll);

  app.get("/almuno", (req, res) => {
    res.render("almunos", {
      titulo: "almunos",
      nombre: "Kasra",
      apellidos: "Mahdavi Hazaveh",
    });
  });
};
