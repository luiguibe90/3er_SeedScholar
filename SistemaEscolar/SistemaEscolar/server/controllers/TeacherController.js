const Teacher = require('../models/teacher.js');


exports.findAll = (req, res) => {
    Teacher.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Teachers"
            });
        else res.send(data);
    });
};
