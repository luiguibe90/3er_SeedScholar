"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classroomController_1 = require("../controllers/classroomController");
class ShoolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', classroomController_1.classroomController.classroom);
        this.router.get('/:id', classroomController_1.classroomController.classroomByBuilding);
        this.router.get('/:id/:idB', classroomController_1.classroomController.classroomById);
        this.router.post('/', classroomController_1.classroomController.create);
        this.router.put('/:id', classroomController_1.classroomController.update);
        this.router.delete('/:id', classroomController_1.classroomController.delete);
    }
}
const schoolRoutes = new ShoolRoutes();
exports.default = schoolRoutes.router;
