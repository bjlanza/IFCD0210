const Alumno = require("../models/alumno.model.js");

exports.create = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const alumno = new Alumno({
    cod: req.body.idalumno,
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    fechaNac: req.body.fechaNac,
    email: req.body.email,
    trabaja: req.body.trabaja,
  });

  Alumno.create(alumno, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error al crear Alumno.",
      });
    else res.send(data);
  });
};


exports.findAll = (req, res) => {
  Alumno.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error.",
      });
    else res.send(data);
  });
};


exports.findOne = (req, res) => {
  Alumno.findById(req.params.alumnoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Alumno with id ${req.params.alumnoId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Alumno with id " + req.params.alumnoId,
        });
      }
    } else res.send(data);
  });
};





