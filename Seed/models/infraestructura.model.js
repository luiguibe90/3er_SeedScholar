/*jshint esversion: 6 */
const sql = require('../util/database.js');

const infraestructura = function () {
    // this.NOMBRE = infraestructura.NOMBRE;
    // this.DIRECCION = infraestructura.DIRECCION;
    // this.TELEFONO = infraestructura.TELEFONO;
    // this.CODIGO_POSTAL = infraestructura.CODIGO_POSTAL;

    // this.COD_SEDE = infraestructura.COD_SEDE;
    // this.NOMBRE = infraestructura.NOMBRE;
    // this.CANTIDAD_PISOS = infraestructura.CANTIDAD_PISOS;
}

//sede
infraestructura.addsede = (newSede, result) => {
    sql.query("INSERT INTO sede SET ?", newSede, (err, res) => {
        if (err) {
            console.log("error Al Insertar:", err);
            result(err, null);
            return;
        } else {
            console.log("Sede Ingresada: ", { NOMBRE: res.NOMBRE, ...newSede });
            result(null, { NOMBRE: res.NOMBRE, ...newSede });
        }
    });
};
infraestructura.buscarSede = (COD_SEDE, result) => {
    sql.query(`SELECT * FROM sede WHERE COD_SEDE = ${COD_SEDE}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            if (res.length) {
                console.log("Datos Sede:", res[0]);
                result(null, res[0]);
                return;
            } else {
                result({ kind: "Sede no encontrada" }, null);
            }
        }
    });
};
infraestructura.updateSedeById = (id, infraestructura, result) => {
    sql.query(
        "UPDATE sede SET NOMBRE = ?, DIRECCION = ?, TELEFONO = ?, CODIGO_POSTAL = ? WHERE COD_SEDE =?",
        [infraestructura.NOMBRE, infraestructura.DIRECCION, infraestructura.TELEFONO, infraestructura.CODIGO_POSTAL, id],
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

            console.log("Sede Modificada: ", { id: id, ...infraestructura });
            result(null, { id: id, ...infraestructura });
        }
    );
};


//edificios
infraestructura.addedificio = (newEdificio, result) => {
    sql.query("INSERT INTO edificio SET ?", newEdificio, (err, res) => {
        if (err) {
            console.log("error Al Insertar:", err);
            result(err, null);
            return;
        } else {
            console.log("Edificio Ingresado: ", { NOMBRE: res.NOMBRE, ...newEdificio });
            result(null, { NOMBRE: res.NOMBRE, ...newEdificio });
        }
    });
};
infraestructura.docenteAsistencia = (cod_docente, result) => {
    sql.query(`SELECT asignatura.NOMBRE, asignatura.COD_NIVEL_EDUCATIVO, asignatura.COD_ASIGNATURA,
    asignatura_periodo.COD_DOCENTE,asignatura_periodo.COD_PARALELO 
    FROM asignatura INNER JOIN asignatura_periodo ON asignatura.COD_ASIGNATURA = asignatura_periodo.COD_ASIGNATURA 
    WHERE asignatura_periodo.COD_DOCENTE = ${cod_docente}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            if (res.length) {
                console.log("Datos Ok: ", res[0]);
                result(null, res[0]);
                return;
            } else {
                result({ kind: "not_found" }, null);
            }
        }
    });
};
infraestructura.Periodo = result => {
    sql.query("SELECT CONCAT(FECHA_INICIO,'AL', FECHA_FIN) AS PERIODO, COD_PERIODO_LECTIVO AS COD_PERIODO_LECTIVO FROM PERIODO_LECTIVO WHERE ESTADO = 'ACT'", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            console.log("periodo:", res);
            result(null, res);
        }
    });
};
infraestructura.findPeriodo = result => {
    sql.query("SELECT * FROM periodo_lectivo WHERE ESTADO = 'ACT'", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        } else {
            console.log("periodo:", res);
            result(null, res);
        }
    });
};
infraestructura.listarEstudiantes = (cod_nivel_educativo, result) => {
    sql.query(`SELECT persona.COD_PERSONA, persona.APELLIDO, persona.NOMBRE FROM persona 
    INNER JOIN matricula_periodo ON persona.COD_PERSONA = matricula_periodo.COD_ALUMNO WHERE matricula_periodo.COD_NIVEL_EDUCATIVO = ${cod_nivel_educativo}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            if (res.length) {
                console.log("Listado: ", res[0]);
                result(null, res[0]);
                return;
            } else {
                result({ kind: "not_found" }, null);
            }
        }
    });
};
infraestructura.ingresarAsistencia = (newAsistencia, result) => {
    sql.query("INSERT INTO asistencia_periodo SET ?", newAsistencia, (err, res) => {
        if (err) {
            console.log("error Al Insertar:", err);
            result(err, null);
            return;
        } else {
            console.log("Asistencia Ingresada: ", { COD_PERIODO_LECTIVO: res.insertCOD_PERIODO_LECTIVO, ...newAsistencia });
            result(null, { COD_PERIODO_LECTIVO: res.insertCOD_PERIODO_LECTIVO, ...newAsistencia });
        }
    });
};






infraestructura.listarAsignaturasEstudiante = (cod_alumno, cod_periodo_lectivo, result) => {
    sql.query(`SELECT asignatura_periodo.COD_ASIGNATURA,asignatura.NOMBRE FROM asignatura_periodo 
    INNER JOIN matricula_periodo ON matricula_periodo.COD_NIVEL_EDUCATIVO = asignatura_periodo.COD_NIVEL_EDUCATIVO 
    INNER JOIN asignatura ON asignatura.COD_ASIGNATURA = asignatura_periodo.COD_ASIGNATURA
     WHERE matricula_periodo.COD_ALUMNO= ${cod_alumno} AND matricula_periodo.COD_PERIODO_LECTIVO = ${cod_periodo_lectivo}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            if (res.length) {
                console.log("Listado: ", res[0]);
                result(null, res[0]);
                return;
            } else {
                result({ kind: "not_found" }, null);
            }
        }
    });
};
//para ingreso calificaciones
infraestructura.docenteCalificacion = (cod_docente, result) => {
    sql.query(`SELECT asignatura.NOMBRE, asignatura.COD_NIVEL_EDUCATIVO, 
    asignatura.COD_ASIGNATURA,asignatura_periodo.COD_DOCENTE,asignatura_periodo.COD_PARALELO, paralelo.NOMBRE as NOMPARALELO 
    FROM asignatura 
    INNER JOIN asignatura_periodo ON asignatura.COD_ASIGNATURA = asignatura_periodo.COD_ASIGNATURA
    INNER JOIN paralelo ON paralelo.COD_PARALELO = asignatura_periodo.COD_PARALELO
    WHERE asignatura_periodo.COD_DOCENTE = ${cod_docente}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            if (res.length) {
                console.log("Datos Ok: ", res[0]);
                result(null, res[0]);
                return;
            } else {
                result({ kind: "not_found" }, null);
            }
        }
    });
};
infraestructura.listarEstudiantes = (cod_nivel_educativo, cod_periodo_lectivo, result) => {
    sql.query(`SELECT persona.COD_PERSONA, persona.APELLIDO, persona.NOMBRE FROM persona 
    INNER JOIN matricula_periodo
    ON persona.COD_PERSONA = matricula_periodo.COD_ALUMNO
     WHERE matricula_periodo.COD_NIVEL_EDUCATIVO= ${cod_nivel_educativo} AND COD_PERIODO_LECTIVO= ${cod_periodo_lectivo} ORDER BY persona.APELLIDO`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            if (res.length) {
                console.log("Listado: ", res[0]);
                result(null, res[0]);
                return;
            } else {
                result({ kind: "not_found" }, null);
            }
        }
    });
};
infraestructura.ingresarCalf = (newCalf, result) => {
    sql.query("INSERT INTO alumno_asignatura_periodo SET ?", newCalf, (err, res) => {
        if (err) {
            console.log("error Al Insertar calficacion:", err);
            result(err, null);
            return;
        } else {
            console.log("Notas Ingresadas: ", { COD_PERIODO_LECTIVO: res.insertCOD_PERIODO_LECTIVO, ...newCalf });
            result({ COD_PERIODO_LECTIVO: res.insertCOD_PERIODO_LECTIVO, ...newCalf });
        }
    });
};
infraestructura.ingresarCalf2 = (newCalf2, result) => {
    sql.query("UPDATE alumno_asignatura_periodo SET  NOTA4=?,NOTA5=?,NOTA6=? WHERE COD_ALUMNO=? AND COD_ASIGNATURA=?", newCalf2, (err, res) => {
        if (err) {
            console.log("error Al modificar calficacion:", err);
            result(err, null);
            return;
        } else {
            console.log("Notas Modificadas: ", { COD_PERIODO_LECTIVO: res.insertCOD_PERIODO_LECTIVO, ...newCalf2 });
            result({ COD_PERIODO_LECTIVO: res.insertCOD_PERIODO_LECTIVO, ...newCalf2 });
        }
    });
};

module.exports = infraestructura;