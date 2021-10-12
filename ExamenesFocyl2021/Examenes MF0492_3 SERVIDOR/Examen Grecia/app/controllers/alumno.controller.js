const Alumno = require("../models/alumno.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "¡El contenido no puede estar vacío!",
    });
  }

  const alumno = new Alumno({
    idalumno: req.body.idalumno,
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    fechaNac: req.body.fechaNac,
  });

  Alumno.create(alumno, (err, data) => {
    if (err)
    res.status(500).send({
      message:
        err.message || "Ocurrió un error mientras se creaba la tabla Alumno.",
    });
  else res.send(data);
});
};

Alumno.updateById = (id, alumno, result) => {
  sql.query(
    "UPDATE alumno SET nombre = ?, apellidos = ?, email = ? WHERE idalumno = ?",
    [alumno.nombre, alumno.apellidos, alumno.email, idalumno],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated alumno: ", { id: id, ...alumno});
      result(null, { id: id, ...alumno});
    }
  );
};

exports.findAll = (req, res) => {
  Alumno.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Se produjo un error al recuperar apellidos.",
      });
    else res.send(data);
  });
};

exports.delete = (req, res) => {
Alumno.remove(req.params.idalumno, (err, data) => {
  if (err) {
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `No se encontró al Alumno con ID ${req.params.idalumno}.`,
      });
    } else {
      res.status(500).send({
        message: "No se pudo borrar al Alumno con ID" + req.params.idalumno,
      });
    }
  } else res.send({ message: `¡El Alumno se eliminó correctamente!` });
});
};
