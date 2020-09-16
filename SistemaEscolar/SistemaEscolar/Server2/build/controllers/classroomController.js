"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classroomController = void 0;
const database_1 = __importDefault(require("../database"));
class ClassroomController {
    classroom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const classroom = yield database_1.default.query('select * from aula');
            console.log(classroom);
            res.json(classroom);
        });
    }
    classroomById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { idB } = req.params;
            const classroom = yield database_1.default.query('select * from aula WHERE COD_EDIFICIO=? AND COD_AULA=?', [id, idB]);
            console.log(classroom);
            res.json(classroom);
        });
    }
    classroomByBuilding(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const classroom = yield database_1.default.query('select * from aula WHERE COD_EDIFICIO=?', [id]);
            console.log(classroom);
            res.json(classroom);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO aula set ?', [req.body]);
            res.json({ message: 'classroom Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE aula set ? WHERE COD_AULA = ?', [req.body, id]);
            res.json({ message: "The game was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM aula WHERE COD_AULA = ?', [id]);
            res.json({ message: "The classroom was deleted" });
        });
    }
}
exports.classroomController = new ClassroomController();
