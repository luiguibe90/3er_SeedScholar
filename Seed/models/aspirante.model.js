/*jshint esversion: 6 */
const sql = require('../util/database.js');


const Aspirante = function (aspirante) {
  this.CEDULA = aspirante.CEDULA;
  this.APELLIDO = aspirante.APELLIDO;
  this.NOMBRE = aspirante.NOMBRE;
  this.DIRECCION = aspirante.DIRECCION;
  this.TELEFONO = aspirante.TELEFONO;
  this.FECHA_NACIMIENTO = aspirante.FECHA_NACIMIENTO;
  this.GENERO = aspirante.GENERO;
  this.CORREO = aspirante.CORREO;
  this.CORREO_PERSONAL = aspirante.CORREO_PERSONAL;

}

Aspirante.create = (newAspirante, result) => {
  sql.query("INSERT INTO PERSONA SET ?", newAspirante, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }
    console.log("Aspirante Creado: ", { COD_PERSONA: res.insertCOD_PERSONA, ...newAspirante });
    result(null, { COD_PERSONA: res.insertCOD_PERSONA, ...newAspirante });
  });
};

Aspirante.getAll = result => {
  sql.query("SELECT *FROM PERSONA", (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }
    console.log("Aspirante:", res);
    result(null, res);
  });
};

Aspirante.findById = (aspiranteId, result) => {
  sql.query(`SELECT * FROM PERSONA WHERE COD_PERSONA = ${aspiranteId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Aspirante encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

Aspirante.remove = (id, result) => {
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

Aspirante.updateById = (id, aspirante, result) => {
  sql.query(
    "UPDATE aspirante SET CEDULA = ?, APELLIDO = ?, NOMBRE = ?, DIRECCION = ?, TELEFONO = ?, FECHA_NACIMIENTO = ?, GENERO = ?, CORREO = ?, CORREO_PERSONAL = ?, WHERE COD_PERSONA = ?",
    [aspirante.CEDULA, aspirante.APELLIDO, aspirante.NOMBRE, aspirante.DIRECCION, aspirante.TELEFONO, aspirante.FECHA_NACIMIENTO, aspirante.GENERO, aspirante.CORREO, aspirante.CORREO_PERSONAL, id],
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

      console.log("updated Aspirante: ", { id: id, ...aspirante });
      result(null, { id: id, ...aspirante });
    }
  );
};
module.exports = Aspirante;