/*jshint esversion: 6 */
const Teacher = require('../models/teacher.model.js');
//const Teacher1 = require('../models/teacher.model.js');
exports.findOne = (req, res) => {
    Teacher.docenteAsistencia(req.params.cod_docente, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: `not found Product with id ${req.params.cod_docente}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el producto con id" + req.params.cod_docente
                });
            }
        } else {
            res.send(data);
        }
    });
};
exports.Periodo = (req, res) => {
    Teacher.Periodo((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products"
            });
        } else {
            res.send(data);
        }
    });
};
exports.findPeriodo = (req, res) => {
    Teacher.findPeriodo((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products"
            });
        } else {
            res.send(data);
        }
    });
};
exports.findAllStudent = (req, res) => {
    Teacher.listarEstudiantes(req.params.cod_nivel_educativo, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: `No hay Estudiantes en el Nivel ${req.params.cod_nivel_educativo}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al listar Estudiantes por Nivel" + req.params.cod_nivel_educativo
                });
            }
        } else {
            res.send(data);
        }

    });
};
exports.ingresarAsistencia = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const asistencia = new Teacher({
        COD_PERIODO_LECTIVO: req.body.COD_PERIODO_LECTIVO,
        COD_ALUMNO: req.body.COD_ALUMNO,
        COD_NIVEL_EDUCATIVO: req.body.COD_NIVEL_EDUCATIVO,
        FECHA: req.body.FECHA,
        ESTADO: req.body.ESTADO
        // nombre: req.body.nombre,
        // cantidad: req.body.cantidad,
        // precioUnitario: req.body.precioUnitario,
        // fechaIngreso: req.body.fechaIngreso
    });
    Teacher.ingresarAsistencia(asistencia, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "han ocurrido algunos errores ingresando la asistencia."
            });
        } else {
            res.send(data);
        }
    });
};
exports.listarAsignaturasEstudiante = (req, res) => {
    Teacher.listarAsignaturasEstudiante(req.params.cod_alumno, req.params.cod_periodo_lectivo, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: `No hay materias asignadas al código alumno ${req.params.cod_alumno}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al listar las materias del Estudiante" + req.params.cod_alumno
                });
            }
        } else {
            res.send(data);
        }

    });
};
exports.docenteCalificacion = (req, res) => {
    Teacher.docenteCalificacion(req.params.cod_docente, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: `not found Product with id ${req.params.cod_docente}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el producto con id" + req.params.cod_docente
                });
            }
        } else {
            res.send(data);
        }

    });
};
exports.listarEstudiantes = (req, res) => {
    Teacher.listarEstudiantes(req.params.cod_nivel_educativo, req.params.cod_periodo_lectivo, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: `No hay Estudiantes en el Nivel ${req.params.cod_nivel_educativo} ${req.params.cod_periodo_lectivo}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al listar Estudiantes por Nivel" + req.params.cod_nivel_educativo + req.params.cod_periodo_lectivo
                });
            }
        } else {
            res.send(data);
        }

    });
};
exports.ingresarCalf = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const calificacion = new Teacher({
        COD_PERIODO_LECTIVO: req.body.COD_PERIODO_LECTIVO,
        COD_ALUMNO: req.body.COD_ALUMNO,
        COD_NIVEL_EDUCATIVO: req.body.COD_NIVEL_EDUCATIVO,
        COD_ASIGNATURA: req.body.COD_ASIGNATURA,
        COD_PARALELO: req.body.COD_PARALELO,
        COD_DOCENTE: req.body.COD_DOCENTE,
        NOTA1: req.body.NOTA1,
        NOTA2: req.body.NOTA2,
        NOTA3: req.body.NOTA3,
        NOTA4: req.body.NOTA4,
    });
    Teacher.ingresarCalf(calificacion, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "han ocurrido algunos errores ingresando las notas."
            });
        } else {
            res.send(data);
        }
    });
};