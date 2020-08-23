/*jshint esversion: 6 */
module.exports = app => {
    const Teacher = require("../controllers/teacher.controller.js");

    app.get("/asistencia/:cod_docente", Teacher.findOne);
    app.get("/periodo/", Teacher.findPeriodo);
    app.get("/listarAlumnos/:cod_nivel_educativo", Teacher.findAllStudent);
    app.post("/ingresarAsistencia", Teacher.ingresarAsistencia);
    // app.delete("/Products/:productId", product.delete);
    // app.put("/Products/:productId", product.update)
}