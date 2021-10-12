const Alumno = require("../models/alumno.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Article
  const alumno = new Alumno({
    idalumno: req.body.idalumno,
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    fechaNac: req.body.fechaNac,
    email: req.body.email,
    trabaja: req.body.trabaja,
  });

  // Save Article in the database
  Alumno.create(alumno, (err, data) => {
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
  Alumno.getAll((err, data) => {
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
  Alumno.findById(req.params.idalumno, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Alumno with id ${req.params.idalumno}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Alumno with id " + req.params.idalumno,
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

  Alumno.updateById(
    req.params.idalumno,
    new Alumno(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Alumno with id ${req.params.idalumno}.`,
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
  Alumno.remove(req.params.idalumno, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Alumno with id ${req.params.idalumno}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Alumno with id " + req.params.idalumno,
        });
      }
    } else res.send({ message: `Alumno was deleted successfully!` });
  });
};

// Delete all Article from the database.
exports.deleteAll = (req, res) => {
  Alumno.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all alumno.",
      });
    else res.send({ message: `All Alumno were deleted successfully!` });
  });
};
