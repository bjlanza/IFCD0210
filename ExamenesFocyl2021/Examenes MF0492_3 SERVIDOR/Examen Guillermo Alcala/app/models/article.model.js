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

    console.log("nuevo alumno : ", { id: res.insertId, ...newAlumno });
    result(null, { id: res.insertId, ...newAlumno });
  });
};

Alumno.findById = (idalumno, result) => {
  let selectQuery = `SELECT * FROM articulo WHERE cod = '${idalumno}'`;
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

    console.log("Alumno: ", res);
    result(null, res);
  });
};

Alumno.updateById = (id, alumno, result) => {
  sql.query(
    "UPDATE articulo SET nombre = ?, marca = ?, pvp = ? WHERE cod = ?",
    [article.nombre, article.marca, article.pvp, id],
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

      console.log("updated article: ", { id: id, ...articulo });
      result(null, { id: id, ...articulo });
    }
  );
};

Articulo.remove = (id, result) => {
  sql.query("DELETE FROM articulo WHERE cod = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Article with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted article with cod: ", id);
    result(null, res);
  });
};

Alumno.removeAll = (result) => {
  sql.query("DELETE FROM articulo", (err, res) => {
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
