/*jshint esversion: 6 */
module.exports = app => {
    const infraestructura = require("../controllers/infraestructura.controller.js");
   //const Teacher1 = require("../controllers/teacher.controller.js");
    app.get("/asistencia/:cod_docente", infraestructura.findOne);
    app.get("/periodo/", infraestructura.Periodo);
    app.get("/buscarsede/:COD_SEDE", infraestructura.findOneSede);
    app.get("/listarAlumnos/:cod_nivel_educativo", infraestructura.findAllStudent);
    app.post("/addsede", infraestructura.addsede);
    app.get("/listarAsignaturas/:cod_alumno/:cod_periodo_lectivo", infraestructura.listarAsignaturasEstudiante);
    app.get("/calificacion/:cod_docente", infraestructura.docenteCalificacion);
    app.get("/listarEstudiantes/:cod_nivel_educativo/:cod_periodo_lectivo", infraestructura.listarEstudiantes);
    app.post("/ingresarCalf", infraestructura.ingresarCalf);
    app.put("/updateSede/:sedeId",infraestructura.updateSede);
    app.post("/addEdificio/:COD_SEDE", infraestructura.addedificio);
    // app.delete("/Products/:productId", product.delete);
    // app.put("/Products/:productId", product.update)
}