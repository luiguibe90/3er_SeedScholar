"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const campusController_1 = require("../controllers/campusController");
class ShoolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', campusController_1.campusController.campus);
        this.router.get('/:id', campusController_1.campusController.campusById);
        this.router.post('/', campusController_1.campusController.create);
        this.router.put('/:id', campusController_1.campusController.update);
        this.router.delete('/:id', campusController_1.campusController.delete);
    }
}
const schoolRoutes = new ShoolRoutes();
exports.default = schoolRoutes.router;
