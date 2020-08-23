/*jshint esversion: 6 */
const sql = require('../../util/database.js');


const Persona = function (Persona) {
    this.nombre = product.nombre;
    this.cantidad = product.cantidad;
    this.precioUnitario = product.precioUnitario;
    this.fechaIngreso = product.fechaIngreso;

}

Persona.countTypePeople = (codTypePeople, result) => {
    sql.query(`SELECT * FROM schoolardb.tipo_persona_persona WHERE COD_TIPO_PERSONA = ${codTypePeople}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            if (res.length) {
                // nAlumns = sql_sel->num_rows;
                // console.log("Producto encontrado: ", res[0]);
                // result(null, res[0]);
                return;
            } else {
                result({ kind: "not_found" }, null);
            }
        }
    });
};