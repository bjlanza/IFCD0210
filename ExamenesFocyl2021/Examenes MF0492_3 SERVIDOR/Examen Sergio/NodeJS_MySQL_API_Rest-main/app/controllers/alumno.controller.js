const Article = require("../models/alumno.model.js");

// Create and Save a new Alumno
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Article
  const article = new Article({
    id: req.body.cod,
    nombre: req.body.nombre,
    apellido: req.body.marca,
    fechaNac: req.body.fechaNac,
    email: req.body.email,
    trabaja: req.body.trabaja,
  });

  // Save Article in the database
  Article.create(article, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article.",
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Article.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Article.findById(req.params.idalumno, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Article with id ${req.params.idalumno}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Article with id " + req.params.idalumno,
        });
      }
    } else res.send(data);
  });
};

// Update a Article identified by the articleId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Article.updateById(
    req.params.idalumno,
    new Article(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Article with id ${req.params.articleId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Article with id " + req.params.idalumno,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Article with the specified ArticleId in the request
exports.delete = (req, res) => {
  Article.remove(req.params.idalumno, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found alumno with id ${req.params.idalumno}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete alumno with id " + req.params.idalumno,
        });
      }
    } else res.send({ message: `alumno was deleted successfully!` });
  });
};

// Delete all Article from the database.
exports.deleteAll = (req, res) => {
  Article.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all alumno.",
      });
    else res.send({ message: `All alumno were deleted successfully!` });
  });
};
