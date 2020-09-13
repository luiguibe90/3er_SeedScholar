/*jshint esversion: 6 */
const infraestructura = require('../models/infraestructura.model.js');

exports.addsede = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const sede = new infraestructura({
        NOMBRE: req.body.NOMBRE,
        DIRECCION: req.body.DIRECCION,
        TELEFONO: req.body.TELEFONO,
        CODIGO_POSTAL: req.body.CODIGO_POSTAL,
    });
    infraestructura.addsede(sede, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "han ocurrido algunos errores creando el aspirante."
            });
        else res.send(data);
    });
};
exports.findOneSede = (req, res) => {
    infraestructura.buscarSede(req.params.COD_SEDE, (err, data) => {
        if (err) {
            if (err.kind == "no encontrado") {
                res.status(404).send({
                    message: `sede no encontrada con codigo ${req.params.COD_SEDE}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar sede con codigo " + req.params.COD_SEDE
                });
            }
        } else res.send(data);
    });
};


exports.updateSede = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    infraestructura.updateSedeById(
        req.params.sedeId,
        new infraestructura(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Student with codCOD_PERSONA ${req.params.sedeId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.sedeId
                    });
                }
            } else res.send(data);
        }
    );
};
 
//edificios
exports.addedificio = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const edificio = new infraestructura({
        COD_EDIFICIO: req.body.COD_EDIFICIO,
        NOMBRE: req.body.NOMBRE,
        CANTIDAD_PISOS: req.body.CANTIDAD_PISOS,
    });
    infraestructura.addedificio(edificio, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "han ocurrido algunos errores creando el aspirante."
            });
        else res.send(data);
    });
};




exports.findOne = (req, res) => {
    infraestructura.docenteAsistencia(req.params.cod_docente, (err, data) => {
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
    infraestructura.Periodo((err, data) => {
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
    infraestructura.findPeriodo((err, data) => {
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
    infraestructura.listarEstudiantes(req.params.cod_nivel_educativo, (err, data) => {
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
    infraestructura.ingresarAsistencia(asistencia, (err, data) => {
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
    infraestructura.listarAsignaturasEstudiante(req.params.cod_alumno, req.params.cod_periodo_lectivo, (err, data) => {
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