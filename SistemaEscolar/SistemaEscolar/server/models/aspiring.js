const sql = require('../util/database');



const Aspiring = function(aspiring) {
    this.CEDULA = aspiring.CEDULA;
    this.APELLIDO = aspiring.APELLIDO;
    this.NOMBRE = aspiring.NOMBRE;
    this.DIRECCION = aspiring.DIRECCION;
    this.TELEFONO = aspiring.TELEFONO;
    this.FECHA_NACIMIENTO = aspiring.FECHA_NACIMIENTO;
    this.GENERO = aspiring.GENERO;
    this.CORREO_PERSONAL = aspiring.CORREO_PERSONAL;

}
Aspiring.create = (newAspiring, result) => {
    sql.query("INSERT INTO aspirante SET ?", newAspiring, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        console.log("Aspirante Creado: ", { COD_ASPIRANTE: res.insertCOD_ASPIRANTE, ...newAspiring });
        result(null, { COD_ASPIRANTE: res.insertCOD_ASPIRANTE, ...newAspiring });
    });
};

Aspiring.getAll = result => {
    sql.query("SELECT a.COD_ASPIRANTE, a.CEDULA, a.APELLIDO, (a.NOMBRE) as NOMBRE_ASP, a.DIRECCION, a.TELEFONO, a.FECHA_NACIMIENTO, a.GENERO, a.CORREO_PERSONAL, cpa.CALIFICACION, cpa.ESTADO, (ne.NOMBRE) as NIVEL_EDUCATIVO  from aspirante a INNER JOIN calificacion_prueba_aspirante cpa on a.COD_ASPIRANTE=cpa.COD_ASPIRANTE INNER JOIN nivel_educativo ne on ne.COD_NIVEL_EDUCATIVO=cpa.COD_NIVEL_EDUCATIVO", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }
        console.log("aspirantes:", res);
        result(null, res);
    });
};

Aspiring.findById = (aspiringId, result) => {
    sql.query(`SELECT a.COD_ASPIRANTE, a.CEDULA, a.APELLIDO, (a.NOMBRE) as NOMBRE_ASP, a.DIRECCION, a.TELEFONO, a.FECHA_NACIMIENTO, a.GENERO, a.CORREO_PERSONAL, cpa.CALIFICACION, cpa.ESTADO, (ne.NOMBRE) as NIVEL, (ne.NIVEL) as SECCION  from aspirante a INNER JOIN calificacion_prueba_aspirante cpa on a.COD_ASPIRANTE=cpa.COD_ASPIRANTE INNER JOIN nivel_educativo ne on ne.COD_NIVEL_EDUCATIVO=cpa.COD_NIVEL_EDUCATIVO WHERE a.COD_ASPIRANTE = ${aspiringId}`, (err, res) => {
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

Aspiring.remove = (id, result) => {
    sql.query("DELETE FROM aspirante WHERE COD_ASPIRANTE = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted aspiring with id: ", id);
        result(null, res);
    });
};

Aspiring.updateById = (id, aspiring, result) => {
    sql.query(
        "UPDATE aspirante SET CEDULA = ?, APELLIDO = ?, NOMBRE = ?, DIRECCION = ?, TELEFONO = ?, FECHA_NACIMIENTO = ?, GENERO = ?, CORREO_PERSONAL = ? WHERE COD_ASPIRANTE = ?", [aspiring.CEDULA, aspiring.APELLIDO, aspiring.NOMBRE, aspiring.DIRECCION, aspiring.TELEFONO, aspiring.FECHA_NACIMIENTO, aspiring.GENERO, aspiring.CORREO_PERSONAL, id],
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

            console.log("updated Aspiring: ", { id: id, ...aspiring });
            result(null, { id: id, ...aspiring });
        }
    );
};

module.exports = Aspiring;