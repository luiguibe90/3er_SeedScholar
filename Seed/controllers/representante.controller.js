/*jshint esversion: 6 */
const Representante = require('../models/representante.js');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const representante = new Representante({
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
    Representante.create(representante, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "han ocurrido algunos errores creando el representante."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Representante.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving student"
            });
        else res.send(data);
    });
};
exports.findOne = (req, res) => {
    Representante.findById(req.params.representanteId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: `not found Product with id ${req.params.representanteId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el representante con id" + req.params.representanteId
                });
            }
        } else res.send(data);
    });
};

exports.delete = (req, res) => {
    Representante.remove(req.params.representanteId, (err, data) => {
        if (err) {
            if (err.kind == "no econtrado") {
                res.status(404).send({
                    message: `Not found PERSONA WITH COD_PERSONA ${REQ.PARAMS.representanteId}`
                });
            } else {
                res.status(509).send({
                    message: "No se pudo eliminar el representante codigo: " + req.params.representanteId
                });
            }
        } else res.send({ message: `Representante eliminado satisfactoriamente!` });
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

    Representante.updateById(
        req.params.representanteId,
        new Representante(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Student with codCOD_PERSONA ${req.params.representanteId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.representanteId
                    });
                }
            } else res.send(data);
        }
    );
};
