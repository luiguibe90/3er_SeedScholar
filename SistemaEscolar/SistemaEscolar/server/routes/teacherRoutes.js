module.exports = app => {
    const teacher = require("../controllers/teacherController");
    app.get("/teacher", teacher.findAll);
}