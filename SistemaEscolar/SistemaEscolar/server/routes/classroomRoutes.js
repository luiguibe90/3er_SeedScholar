module.exports = app => {
    const aspiring = require("../controllers/classroomController");
    app.get("/classroom",classroom.findAll);
    app.get("/classroom/:classroomId", classroom.findOne);
    app.post("/classroom", classroom.create);
    app.delete("/classroom/:classroomId", classroom.delete);
    app.put("/classroom/:classroomId", classroom.update)
}