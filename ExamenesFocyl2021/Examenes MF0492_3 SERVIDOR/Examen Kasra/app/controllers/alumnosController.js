const Article = require("../models/almunosmodel.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Article
  const article = new Article({
    cod: req.body.cod,
    nombre: req.body.nombre,
    marca: req.body.marca,
    pvp: req.body.pvp,
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
  Article.findById(req.params.articleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Article with id ${req.params.articleId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Article with id " + req.params.articleId,
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
    req.params.articleId,
    new Article(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Article with id ${req.params.articleId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Article with id " + req.params.articleId,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Article with the specified ArticleId in the request
exports.delete = (req, res) => {
  Article.remove(req.params.articleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Article with id ${req.params.articleId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Article with id " + req.params.articleId,
        });
      }
    } else res.send({ message: `Article was deleted successfully!` });
  });
};

// Delete all Article from the database.
exports.deleteAll = (req, res) => {
  Article.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all article.",
      });
    else res.send({ message: `All Article were deleted successfully!` });
  });
};
