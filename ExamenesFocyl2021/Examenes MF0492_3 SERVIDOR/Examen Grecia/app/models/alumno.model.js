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
    sql.query("INSERT INTO articulo SET ?", newAlumno, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created alumno: ", { id: res.insertId, ...newAlumno });
      result(null, { id: res.insertId, ...newAlumno });
    });
  };

  Alumno.findById = (idalumno, result) => {
    let selectQuery = `SELECT * FROM alumno WHERE idalumno = '${idalumno}'`;
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
      result({ kind: "not_found" }, null);
    });
  };

module.exports = Alumno;