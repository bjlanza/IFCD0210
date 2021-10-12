const Alumno = require("../models/alumnomodel.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Alumno
  const alumno = new Alumno({
    cod: req.body.cod,
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    fechaNac: req.body.fechaNac,
    email: req.body.email,
    trabaja: req.body.trabaja,
  });

  // Save Alumno in the database
  Alumno.create(alumno, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear Alumno.",
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Alumno.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Alumnos.",
      });
    else res.send(data);
  });
};

// Find a single Alumno with a alumnoId
exports.findOne = (req, res) => {
  Alumno.findById(req.params.alumnoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Article with id ${req.params.articleId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Alumno with id " + req.params.alumnoId,
        });
      }
    } else res.send(data);
  });
};

// Update a Alumno identified by the alumnoId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Alumno.updateById(req.params.alumnoId, new Alumno(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Article with id ${req.params.alumnoId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Alumno with id " + req.params.articleId,
        });
      }
    } else res.send(data);
  });
};

// Delete a Alumno with the specified AlumnoId in the request
exports.delete = (req, res) => {
  Alumno.remove(req.params.alumnoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Alumno with id ${req.params.articleId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "No se ha podido borrar el Alimno con id " + req.params.alumnoId,
        });
      }
    } else res.send({ message: `El Alumno se ha borrado!` });
  });
};

// Delete all Alumnos from the database.
exports.deleteAll = (req, res) => {
  Alumno.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al borrar todos los Alumnos.",
      });
    else res.send({ message: `Todos los Alumnos han sido borrados!` });
  });
};
