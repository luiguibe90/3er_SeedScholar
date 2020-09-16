module.exports = app => {
    const aspiring = require("../controllers/aspiringController");
    app.get("/aspiring", aspiring.findAll);
    app.get("/aspiring/:aspiringId", aspiring.findOne);
    app.post("/aspiring", aspiring.create);
    app.delete("/aspiring/:aspiringId", aspiring.delete);
    app.put("/aspiring/:aspiringId", aspiring.update)
}