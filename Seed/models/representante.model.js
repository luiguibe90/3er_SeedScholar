/*jshint esversion: 6 */
const sql = require('../util/database.js');


const Representante = function (representante) {
  this.CEDULA = representante.CEDULA;
  this.APELLIDO = representante.APELLIDO;
  this.NOMBRE = representante.NOMBRE;
  this.DIRECCION = representante.DIRECCION;
  this.TELEFONO = representante.TELEFONO;
  this.FECHA_NACIMIENTO = representante.FECHA_NACIMIENTO;
  this.GENERO = representante.GENERO;
  this.CORREO = representante.CORREO;
  this.CORREO_PERSONAL = representante.CORREO_PERSONAL;

}

Representante.create = (newRepresentante, result) => {
  sql.query("INSERT INTO PERSONA SET ?", newRepresentante, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }
    console.log("Representante Creado: ", { COD_PERSONA: res.insertCOD_PERSONA, ...newRepresentante });
    result(null, { COD_PERSONA: res.insertCOD_PERSONA, ...newRepresentante });
  });
};

Representante.getAll = result => {
  sql.query("SELECT *FROM PERSONA", (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }
    console.log("Representante:", res);
    result(null, res);
  });
};

Representante.findById = (representanteId, result) => {
  sql.query(`SELECT * FROM PERSONA WHERE COD_PERSONA = ${representanteId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Representante encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

Representante.remove = (id, result) => {
  sql.query("DELETE FROM PERSONA WHERE COD_PERSONA = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

Representante.updateById = (id, representante, result) => {
  sql.query(
    "UPDATE representante SET CEDULA = ?, APELLIDO = ?, NOMBRE = ?, DIRECCION = ?, TELEFONO = ?, FECHA_NACIMIENTO = ?, GENERO = ?, CORREO = ?, CORREO_PERSONAL = ?, WHERE COD_PERSONA = ?",
    [representante.CEDULA, representante.APELLIDO, representante.NOMBRE, representante.DIRECCION, representante.TELEFONO, representante.FECHA_NACIMIENTO, representante.GENERO, representante.CORREO, representante.CORREO_PERSONAL, id],
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

      console.log("updated Representante: ", { id: id, ...representante });
      result(null, { id: id, ...representante });
    }
  );
};
module.exports = Representante;