const Classroom = require('../models/classroom.js');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const classroom = new Classroom({
        COD_EDIFICIO: req.body.COD_EDIFICIO,
        NOMBRE: req.body.NOMBRE,
        CAPACIDAD: req.body.CAPACIDAD,
        TIPO: req.body.TIPO,
        PISO: req.body.PISO
    });
    Classroom.create(classroom, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "han ocurrido algunos errores creando el aspirante."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Classroom.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving aspirings"
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Aspiring.findById(req.params.classroomId, (err, data) => {
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
    Classroom.remove(req.params.classroomId, (err, data) => {
        if (err) {
            if (err.kind == "no econtrado") {
                res.status(404).send({
                    message: `Not found aspiring WITH COD_ASPIRANTE ${REQ.PARAMS.classroomId}`
                });
            } else {
                res.status(509).send({
                    message: "No se pudo eliminar el aspirante codigo: " + req.params.classroomId
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

    Classroom.updateById(
        req.params.aspiringId,
        new Classroom(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Producto with codproducto ${req.params.classroomId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.classroomId
                    });
                }
            } else res.send(data);
        }
    );
};