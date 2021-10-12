const sql = require("./db.js");

// constructor
const Alumno = function (alumno) {
  this.idalumno = alumno.idalumno;
  this.nombre = alumno.nombre;
  this.apellidos = alumno.apellidos;
  this.fechaNac = alumno.fechaNac;
  this.email = alumno.email;
  this.trabaja = alumno.trabaja;
};

Alumno.create = (newAlumno, result) => {
  sql.query("INSERT INTO alumno SET ?", newAlumno, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Alumno: ", { id: res.insertId, ...newAlumno });
    result(null, { id: res.insertId, ...newAlumno });
  });
};

// Encontrar con metodo GET TODOS LOS REGISTROS 
Alumno.findById = (AlumnoId, result) => {
  let selectQuery = `SELECT * FROM alumno WHERE cod = '${AlumnoId}'`;
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
  sql.query("SELECT * FROM alumno", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("alumno: ", res);
    result(null, res);
  });
};

Alumno.updateById = (id, Alumno, result) => {
  sql.query(
    "UPDATE alumno SET nombre = ?, apellidos = ?, fechaNac = ? WHERE cod = ?",
    [Alumno.nombre, Alumno.apellidos, Alumno.fechaNac, id],
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

      console.log("updated Alumno: ", { id: id, ...Alumno });
      result(null, { id: id, ...Alumno });
    }
  );
};

Alumno.remove = (id, result) => {
  sql.query("DELETE FROM alumno WHERE cod = ?", id, (err, res) => {
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

    console.log("deleted Alumno with cod: ", id);
    result(null, res);
  });
};

Alumno.removeAll = (result) => {
  sql.query("DELETE FROM alumno", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Alumnos`);
    result(null, res);
  });
};

module.exports = Alumno;
