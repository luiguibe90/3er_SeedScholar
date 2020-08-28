/*jshint esversion: 6 */
module.exports=app=>{
  const aspirante = require("../controllers/Obtener.js");
    app.get("/aspirantes",aspirante.findAll);  
    app.get("/aspirantes/:aspiranteId", aspirante.findOne);
    app.post("/aspirantes", aspirante.create);
    app.delete("/aspirantes/:aspiranteId",aspirante.delete);
    app.put("/aspirantes/:aspiranteId",aspirante.update)
  }