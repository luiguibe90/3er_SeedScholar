/*jshint esversion: 6 */
const sql = require('../util/database.js');

const Teacher = function (Teacher) {
    this.COD_PERIODO_LECTIVO= Teacher.COD_PERIODO_LECTIVO;
    this.COD_ALUMNO= Teacher.COD_ALUMNO;
    this.COD_NIVEL_EDUCATIVO= Teacher.COD_NIVEL_EDUCATIVO;
    this.FECHA= Teacher.FECHA;
    this.ESTADO= Teacher.ESTADO;
}
const Teacher1 = function (Teacher1) {
    this.COD_PERIODO_LECTIVO= Teacher1.COD_PERIODO_LECTIVO;
    this.COD_ALUMNO= Teacher1.COD_ALUMNO;
    this.COD_NIVEL_EDUCATIVO= Teacher1.COD_NIVEL_EDUCATIVO;
    this.COD_ASIGNATURA= Teacher1.$COD_ASIGNATURA;
    this.COD_PARALELO= Teacher1.$COD_PARALELO;
    this.COD_DOCENTE= Teacher1.$COD_DOCENTE;
    this.NOTA1= Teacher1.$NOTA1;
    this.NOTA2= Teacher1.$NOTA2;
    this.NOTA3= Teacher1.$NOTA3;
    this.NOTA4= Teacher1.$NOTA4;
}

Teacher.docenteAsistencia = (cod_docente, result) => {
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
Teacher.Periodo = result => {
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
Teacher.findPeriodo = result => {
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
Teacher.listarEstudiantes = (cod_nivel_educativo, result) => {
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
Teacher.ingresarAsistencia = (newAsistencia, result) => {
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
Teacher.listarAsignaturasEstudiante = (cod_alumno, cod_periodo_lectivo, result) => {
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
Teacher.docenteCalificacion = (cod_docente, result) => {
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
Teacher.listarEstudiantes = (cod_nivel_educativo, cod_periodo_lectivo, result) => {
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
Teacher1.ingresarCalf = (newCalf, result) => {
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

// function ingresarNotas($cod_periodo_lectivo,$cod_alumno,$cod_nivel_educativo,$cod_asignatura,$cod_paralelo,$cod_docente,$nota1,$nota2,$nota3)
//     {
//         $stmt = $this->conex->prepare("INSERT INTO alumno_asignatura_periodo (COD_PERIODO_LECTIVO,COD_ALUMNO,COD_NIVEL_EDUCATIVO, 
//         COD_ASIGNATURA,COD_PARALELO,COD_DOCENTE,NOTA1,NOTA2,NOTA3)
//         VALUES (?,?,?,?,?,?,?,?,?)");
//         $stmt->bind_param('sisssiddd',$cod_periodo_lectivo,$cod_alumno,$cod_nivel_educativo,$cod_asignatura,$cod_paralelo,$cod_docente,$nota1,$nota2,$nota3);
//         $stmt->execute();
//         $stmt->close();
//     }


module.exports = Teacher;
module.exports = Teacher1;