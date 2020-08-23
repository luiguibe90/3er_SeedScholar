/*jshint esversion: 6 */
const Teacher = require('../models/teacher.model.js');
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
exports.findPeriodo = (req, res) => {
    Teacher.periodo((err, data) => {
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
    const asistencia = new Asistencia({
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
        if (err)
            res.status(500).send({
                message:
                    err.message || "han ocurrido algunos errores ingresando la asistencia."
            });
        else res.send(data);
    });
};
