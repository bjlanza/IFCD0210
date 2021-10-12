const sql = require("./db.js");

// constructor
const Article = function (article) {
  this.cod = article.cod;
  this.nombre = article.nombre;
  this.marca = article.marca;
  this.pvp = article.pvp;
  this.urlimagen = article.urlimagen;
  this.especificaciones = article.spec;
};

Article.create = (newArticle, result) => {
  sql.query("INSERT INTO articulo SET ?", newArticle, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created article: ", { id: res.insertId, ...newArticle });
    result(null, { id: res.insertId, ...newArticle });
  });
};

Article.findById = (articleId, result) => {
  let selectQuery = `SELECT * FROM articulo WHERE cod = '${articleId}'`;
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

Article.getAll = (result) => {
  sql.query("SELECT * FROM articulo", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Articulo: ", res);
    result(null, res);
  });
};

Article.updateById = (id, article, result) => {
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

      console.log("updated article: ", { id: id, ...article });
      result(null, { id: id, ...article });
    }
  );
};

Article.remove = (id, result) => {
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

Article.removeAll = (result) => {
  sql.query("DELETE FROM articulo", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} articles`);
    result(null, res);
  });
};

module.exports = Article;
