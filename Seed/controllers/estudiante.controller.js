/*jshint esversion: 6 */
const Estudiante = require('../models/estudiante.js');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const estudiante = new Estudiante({
        CEDULA: req.body.CEDULA,
        APELLIDO: req.body.APELLIDO,
        NOMBRE: req.body.CEDEULA,
        DIRECCION: req.body.DIRECCION,
        TELEFONO: req.body.TELEFONO,
        FECHA_NACIMIENTO: req.body.FECHA_NACIMIENTO,
        GENERO: req.body.GENERO,
        CORREO: req.body.CORREO,
        CORREO_PERSONAL: req.body.CORREO_PERSONAL

    });
    Estudiante.create(estudiante, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "han ocurrido algunos errores creando el estudiante."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Estudiante.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving student"
            });
        else res.send(data);
    });
};
exports.findOne = (req, res) => {
    Estudiante.findById(req.params.estudianteId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: `not found Product with id ${req.params.estudianteId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el estudiante con id" + req.params.estudianteId
                });
            }
        } else res.send(data);
    });
};

exports.delete = (req, res) => {
    Estudiante.remove(req.params.estudianteId, (err, data) => {
        if (err) {
            if (err.kind == "no econtrado") {
                res.status(404).send({
                    message: `Not found PERSONA WITH COD_PERSONA ${REQ.PARAMS.estudianteId}`
                });
            } else {
                res.status(509).send({
                    message: "No se pudo eliminar el estudiante codigo: " + req.params.estudianteId
                });
            }
        } else res.send({ message: `Estudiante eliminado satisfactoriamente!` });
    });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    Estudiante.updateById(
        req.params.estudianteId,
        new Estudiante(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Student with codCOD_PERSONA ${req.params.estudianteId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.estudianteId
                    });
                }
            } else res.send(data);
        }
    );
};
