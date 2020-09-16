"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buildingController_1 = require("../controllers/buildingController");
class ShoolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', buildingController_1.buildingController.building);
        this.router.get('/:id', buildingController_1.buildingController.buildingById);
        this.router.post('/', buildingController_1.buildingController.create);
        this.router.put('/:id', buildingController_1.buildingController.update);
        this.router.delete('/:id', buildingController_1.buildingController.delete);
    }
}
const schoolRoutes = new ShoolRoutes();
exports.default = schoolRoutes.router;
