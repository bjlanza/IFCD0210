const Alumn = require("../models/alumno.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Alumn
  const alumno = new Alumn({
    cod: req.body.cod,
    nombre: req.body.nombre,
    marca: req.body.marca,
    pvp: req.body.pvp,
  });

  // Save Alumn in the database
  Alumn.create(alumno, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Alumn.",
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Alumn.getAll((err, data) => {
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
  Alumn.findById(req.params.alumnoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Alumn with id ${req.params.alumnoId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Alumn with id " + req.params.alumnoId,
        });
      }
    } else res.send(data);
  });
};

// Update a Alumn identified by the alumnoId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Alumn.updateById(req.params.alumnoId, new Alumn(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Alumn with id ${req.params.alumnoId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Alumn with id " + req.params.alumnoId,
        });
      }
    } else res.send(data);
  });
};

// Delete a Alumn with the specified AlumnId in the request
exports.delete = (req, res) => {
  Alumn.remove(req.params.alumnoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Alumn with id ${req.params.alumnoId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Alumn with id " + req.params.alumnoId,
        });
      }
    } else res.send({ message: `Alumn was deleted successfully!` });
  });
};

// Delete all Alumn from the database.
exports.deleteAll = (req, res) => {
  Alumn.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all alumno.",
      });
    else res.send({ message: `All Alumn were deleted successfully!` });
  });
};
