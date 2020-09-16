const sql = require('../util/database');

const Teacher = function(teacher) {
    this.CEDULA = teacher.CEDULA;
    this.APELLIDO = teacher.APELLIDO;
    

}

Teacher.getAll = result => {
    sql.query("SELECT aap.COD_PERIODO_LECTIVO, ap.COD_AULA, p.APELLIDO, p.NOMBRE FROM alumno_asignatura_periodo aap, asignatura_periodo ap, persona p WHERE ap.COD_DOCENTE = aap.COD_DOCENTE AND p.COD_PERSONA = aap.COD_ALUMNO", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }
        console.log("aspirantes:", res);
        result(null, res);
    });
};


module.exports = Teacher;