module.exports=app=>{
const product = require("../controllers/Obtener.js");
  app.get("/products",product.findAll);  
  app.get("/Products/:productId", product.findOne);
  app.post("/Products", product.create);
  app.delete("/Products/:productId",product.delete);
  app.put("/Products/:productId",product.update)
}