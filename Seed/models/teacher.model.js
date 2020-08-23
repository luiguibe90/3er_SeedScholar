/*jshint esversion: 6 */
const sql = require('../util/database.js');

const Teacher = function (Teacher) {
    this.cod_periodo_lectivo = Teacher.cod_periodo_lectivo;
    this.cod_alumno = Teacher.cod_alumno;
    this.cod_nivel_educativo = Teacher.cod_nivel_educativo;
    this.fecha = Teacher.fecha;
    this.estado = Teacher.estado;
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
Teacher.periodo = result => {
    sql.query("SELECT CONCAT(FECHA_INICIO,'AL', FECHA_FIN) AS PERIODO, COD_PERIODO_LECTIVO AS COD_PERIODO_LECTIVO FROM PERIODO_LECTIVO WHERE ESTADO = 'ACT'", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }
        console.log("periodo:", res);
        result(null, res);
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
         }// else {
        //     console.log("Asistencia Ingresada: ", { codProducto: res.insertcodProducto, ...newAsistencia });
        //     result(null, { codProducto: res.insertcodProducto, ...newAsistencia });
        // }
    });
};


// Product.create = (newProduct, result) => {
//     sql.query("INSERT INTO PRODUCTO SET ?", newProduct, (err, res) => {
//         if (err) {
//             console.log("error:", err);
//             result(err, null);
//             return;
//         }
//         console.log("Producto Creado: ", { codProducto: res.insertcodProducto, ...newProduct });
//         result(null, { codProducto: res.insertcodProducto, ...newProduct });
//     });
// };


// function ingresarAsistencia($cod_periodo_lectivo, $cod_alumno, $cod_nivel_educativo, $fecha, $estado) {
//     $stmt = $this -> conex -> prepare("INSERT INTO asistencia_periodo (COD_PERIODO_LECTIVO,COD_ALUMNO,COD_NIVEL_EDUCATIVO, 
//     FECHA, ESTADO)
//     VALUES(?,?,?,?,?)");
//     $stmt -> bind_param('sisss', $cod_periodo_lectivo, $cod_alumno, $cod_nivel_educativo, $fecha, $estado);
//     $stmt -> execute();
//     $stmt -> close();
// }

module.exports = Teacher;