/*jshint esversion: 6 */
module.exports=app=>{
  const representante = require("../controllers/Obtener.js");
    app.get("/representantes",representante.findAll);  
    app.get("/representantes/:representanteId", representante.findOne);
    app.post("/representantes", representante.create);
    app.delete("/representantes/:representanteId",representante.delete);
    app.put("/representantes/:representanteId",representante.update)
  }