/*jshint esversion: 6 */
const Aspirante = require('../models/aspirante.js');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const aspirante = new Aspirante({
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
    Aspirante.create(aspirante, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "han ocurrido algunos errores creando el aspirante."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Aspirante.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving student"
            });
        else res.send(data);
    });
};
exports.findOne = (req, res) => {
    Aspirante.findById(req.params.aspiranteId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: `not found Product with id ${req.params.aspiranteId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el aspirante con id" + req.params.aspiranteId
                });
            }
        } else res.send(data);
    });
};

exports.delete = (req, res) => {
    Aspirante.remove(req.params.aspiranteId, (err, data) => {
        if (err) {
            if (err.kind == "no econtrado") {
                res.status(404).send({
                    message: `Not found PERSONA WITH COD_PERSONA ${REQ.PARAMS.aspiranteId}`
                });
            } else {
                res.status(509).send({
                    message: "No se pudo eliminar el aspirante codigo: " + req.params.aspiranteId
                });
            }
        } else res.send({ message: `Aspirante eliminado satisfactoriamente!` });
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

    Aspirante.updateById(
        req.params.aspiranteId,
        new Aspirante(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Student with codCOD_PERSONA ${req.params.aspiranteId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.aspiranteId
                    });
                }
            } else res.send(data);
        }
    );
};
