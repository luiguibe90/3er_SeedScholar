/*jshint esversion: 6 */
const sql = require('../util/database.js');


const Estudiante = function (estudiante) {
  this.CEDULA = estudiante.CEDULA;
  this.APELLIDO = estudiante.APELLIDO;
  this.NOMBRE = estudiante.NOMBRE;
  this.DIRECCION = estudiante.DIRECCION;
  this.TELEFONO = estudiante.TELEFONO;
  this.FECHA_NACIMIENTO = estudiante.FECHA_NACIMIENTO;
  this.GENERO = estudiante.GENERO;
  this.CORREO = estudiante.CORREO;
  this.CORREO_PERSONAL = estudiante.CORREO_PERSONAL;

}

Estudiante.create = (newEstudiante, result) => {
  sql.query("INSERT INTO PERSONA SET ?", newEstudiante, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }
    console.log("Estudiante Creado: ", { COD_PERSONA: res.insertCOD_PERSONA, ...newEstudiante });
    result(null, { COD_PERSONA: res.insertCOD_PERSONA, ...newEstudiante });
  });
};

Estudiante.getAll = result => {
  sql.query("SELECT *FROM PERSONA", (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }
    console.log("estudiante:", res);
    result(null, res);
  });
};

Estudiante.findById = (estudianteId, result) => {
  sql.query(`SELECT * FROM PERSONA WHERE COD_PERSONA = ${estudianteId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Estudiante encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

Estudiante.remove = (id, result) => {
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

Estudiante.updateById = (id, estudiante, result) => {
  sql.query(
    "UPDATE estudiante SET CEDULA = ?, APELLIDO = ?, NOMBRE = ?, DIRECCION = ?, TELEFONO = ?, FECHA_NACIMIENTO = ?, GENERO = ?, CORREO = ?, CORREO_PERSONAL = ?, WHERE COD_PERSONA = ?",
    [estudiante.CEDULA, estudiante.APELLIDO, estudiante.NOMBRE, estudiante.DIRECCION, estudiante.TELEFONO, estudiante.FECHA_NACIMIENTO, estudiante.GENERO, estudiante.CORREO, estudiante.CORREO_PERSONAL, id],
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

      console.log("updated Estudiante: ", { id: id, ...estudiante });
      result(null, { id: id, ...estudiante });
    }
  );
};
module.exports = Estudiante;