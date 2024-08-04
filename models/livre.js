const sql = require("../middleware/dbconnection");

const livre = function (livre) {
  this.titre = livre.titre;
  this.auteur = livre.auteur;
  this.langue = livre.langue;
};


livre.getAll = (result) => {
  sql.query("select * from livre", (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(err, null);
      return;
    }

    // console.log("livres : ", res);
    result(null, res);
  });
};

livre.add = (newlivre ,result) => {
  sql.query("INSERT INTO livre SET ?", newlivre, (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(err, null);
      return;
    }

    // console.log("created tutorial: ", { id: res.insertId, ...newlivre });
    result(null, { id: res.insertId, ...newlivre });
  });
};


livre.update = (id, livre, result) => {
  sql.query(
    "UPDATE livre SET titre = ?, auteur = ?, langue = ? WHERE id = ?",
    [livre.titre, livre.auteur, livre.langue, id],
    (err, res) => {
      if (err) {
        // console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      // console.log("updated livre: ", { id: id, ...livre });
      result(null, { id: id, ...livre });
    }
  );
};


livre.delete = (id, result) => {
  sql.query("DELETE FROM livre WHERE id = ?", id, (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    // console.log("deleted livre with id: ", id);
    result(null, res);
  });
};


livre.findById = (id, result) => {
  sql.query(`SELECT * FROM livre WHERE id = ${id}`, (err, res) => {
    if (err) {
      // console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      // console.log("found livre: ", res);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

module.exports = livre;