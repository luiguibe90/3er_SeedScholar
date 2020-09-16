const Aspiring = require('../models/aspiring.js');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const aspiring = new Aspiring({
        CEDULA: req.body.CEDULA,
        APELLIDO: req.body.APELLIDO,
        NOMBRE: req.body.NOMBRE,
        DIRECCION: req.body.DIRECCION,
        TELEFONO: req.body.TELEFONO,
        FECHA_NACIMIENTO: req.body.FECHA_NACIMIENTO,
        GENERO: req.body.GENERO,
        CORREO_PERSONAL: req.body.CORREO_PERSONAL
    });
    Aspiring.create(aspiring, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "han ocurrido algunos errores creando el aspirante."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Aspiring.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving aspirings"
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Aspiring.findById(req.params.aspiringId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: `not found Aspiring with id ${req.params.aspiringId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el aspirante con id" + req.params.aspiringId
                });
            }
        } else res.send(data);
    });
};

exports.delete = (req, res) => {
    Aspiring.remove(req.params.aspiringId, (err, data) => {
        if (err) {
            if (err.kind == "no econtrado") {
                res.status(404).send({
                    message: `Not found aspiring WITH COD_ASPIRANTE ${REQ.PARAMS.aspiringId}`
                });
            } else {
                res.status(509).send({
                    message: "No se pudo eliminar el aspirante codigo: " + req.params.aspiringId
                });
            }
        } else res.send({ message: `ASPIRANTE elimnado satisfactoriamente!` });
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

    Aspiring.updateById(
        req.params.aspiringId,
        new Aspiring(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Producto with codproducto ${req.params.aspiringId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.aspiringId
                    });
                }
            } else res.send(data);
        }
    );
};