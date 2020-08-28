/*jshint esversion: 6 */
module.exports=app=>{
  const estudiante = require("../controllers/Obtener.js");
    app.get("/estudiantes",estudiante.findAll);  
    app.get("/estudiantes/:estudianteId", estudiante.findOne);
    app.post("/estudiantes", estudiante.create);
    app.delete("/estudiantes/:estudianteId",estudiante.delete);
    app.put("/estudiantes/:estudianteId",estudiante.update)
  }