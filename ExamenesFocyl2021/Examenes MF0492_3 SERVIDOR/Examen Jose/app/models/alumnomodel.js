const sql = require("./db.js");

// constructor
const alumno = function (alumno) {
  this.cod = alumno.id;
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

    console.log("create alumno: ", { id: res.insertId, ...newAlumno });
    result(null, { id: res.insertId, ...newAlumno });
  });
};
