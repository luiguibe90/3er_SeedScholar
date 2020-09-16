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
exports.campusController = void 0;
const database_1 = __importDefault(require("../database"));
class CampusController {
    campus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const campus = yield database_1.default.query('select * from sede');
            console.log(campus);
            res.json(campus);
        });
    }
    campusById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const campus = yield database_1.default.query('select * from sede WHERE COD_SEDE=?', [id]);
            console.log(campus);
            res.json(campus);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO sede set ?', [req.body]);
            res.json({ message: 'Campus Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE sede set ? WHERE COD_SEDE = ?', [req.body, id]);
            res.json({ message: "The game was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM sede WHERE COD_SEDE = ?', [id]);
            res.json({ message: "The campus was deleted" });
        });
    }
}
exports.campusController = new CampusController();
