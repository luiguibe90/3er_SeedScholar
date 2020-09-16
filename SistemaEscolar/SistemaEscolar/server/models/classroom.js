const sql = require('../util/database');



const Classroom = function(classroom) {
    this.NOMBRE = classroom.NOMBRE;
    this.CAPACIDAD = classroom.CAPACIDAD;
    this.TIPO = classroom.TIPO;
    this.PISO = classroom.PISO;
    this.PISO = classroom.COD_EDIFICIO;
    

}
Classroom.getAll = result => {
    sql.query("select * from aula", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }
        console.log("Aula:", res);
        result(null, res);
    });
};
Classroom.getById = (classroomCod,result) => {
    sql.query(`select * from aula WHERE COD_AULA=${classroomCod}`, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }
        console.log("Aula:", res);
        result(null, res);
    });
};
Classroom.insert = (newClasroom, result) => {
    sql.query("INSERT INTO aula SET ?", newClasroom, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        console.log("Aula Creada: ", { COD_AULA: res.insertCOD_CLASROOM, ...newClasroom });
        result(null, { COD_AULA: res.insertCOD_CLASROOM, ...newClasroom });
    });
};
Classroom.remove = (id, result) => {
    sql.query("DELETE FROM aula WHERE COD_AULA = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted Classroom with id: ", id);
        result(null, res);
    });
};
Classroom.updateById = (id, classroom, result) => {
    sql.query(
        "UPDATE aula SET COD_EDIFICIO = ?, NOMBRE = ?, CAPACIDAD = ?, TIPO = ?, PISO = ?", [classroom.COD_EDIFICIO, classroom.NOMBRE, classroom.CAPACIDAD, classroom.TIPO, classroom.PISO, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated Classroom: ", { id: id, ...aspiring });
            result(null, { id: id, ...aspiring });
        }
    );
};

module.exports = Classroom;