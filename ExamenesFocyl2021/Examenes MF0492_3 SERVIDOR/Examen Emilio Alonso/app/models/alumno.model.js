const sql = require("./db.js");

// constructor
const Alumno = function (alumno) {
  this.idalumno = alumno.idalumno;
  this.nombre = alumno.nombre;
  this.apellidos = alumno.apellidos;
  this.fechanac = alumno.fechanac;
  this.email = alumno.email;
  this.trabaja = alumno.spec;
};

Alumno.create = (newAlumno, result) => {
  sql.query("INSERT INTO alumn SET ?", newAlumno, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created alumno: ", { id: res.insertId, ...newAlumno });
    result(null, { id: res.insertId, ...newAlumno });
  });
};

Alumno.findById = (alumnoId, result) => {
  let selectQuery = `SELECT * FROM alumn WHERE idalumno = '${alumnoId}'`;
  sql.query(selectQuery, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Alumno.getAll = (result) => {
  sql.query("SELECT * FROM alumn", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Alumno: ", res);
    result(null, res);
  });
};

Alumno.updateById = (id, alumno, result) => {
  sql.query(
    "UPDATE alumn SET nombre = ?, apellidos = ?, fechanac = ? WHERE idalumno = ?",
    [alumno.nombre, alumno.apellidos, alumno.fechanac, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated alumno: ", { id: id, ...alumno });
      result(null, { id: id, ...alumno });
    }
  );
};

Alumno.remove = (id, result) => {
  sql.query("DELETE FROM alumn WHERE idalumno = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Alumno with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted alumno with idalumno: ", id);
    result(null, res);
  });
};

Alumno.removeAll = (result) => {
  sql.query("DELETE FROM alumn", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} alumnos`);
    result(null, res);
  });
};

module.exports = Alumno;
