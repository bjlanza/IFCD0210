const sql = require("./db.js");

// constructor
const Alumno = function (alumno) {
  this.idalumno = alumno.idalumno;
  this.nombre = alumno.nombre;
  this.apellidos = alumno.apellidos;
  this.fechaNac = alumno.fechaNac;
  this.email = alumno.email;
  
};

Alumno.create = (newAlumno, result) => {
  sql.query("INSERT INTO alumno SET ?", newAlumno, (err, res) => {
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
  let selectQuery = `SELECT * FROM alumno WHERE idalumno = '${idalumno}'`;
  sql.query(selectQuery, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found alumno: ", res[0]);
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

    console.log("Alumno: ", res);
    result(null, res);
  });
};

Alumno.updateById = (id, alumno, result) => {
  sql.query(
    "UPDATE alumno SET nombre = ?, apellidos = ?, fechaNac = ? WHERE idalumno = ?",
    [alumno.nombre, alumno.apellido, alumno.fechaNac, id],
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
  sql.query("DELETE FROM alumno WHERE idalumno = ?", id, (err, res) => {
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

    console.log("deleted alumno with cod: ", id);
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

    console.log(`deleted ${res.affectedRows} alumnos`);
    result(null, res);
  });
};

module.exports = Alumno;
