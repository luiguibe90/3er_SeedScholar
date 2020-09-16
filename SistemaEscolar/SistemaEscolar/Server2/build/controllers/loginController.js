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
exports.loginController = void 0;
const md5_typescript_1 = require("md5-typescript");
const database_1 = __importDefault(require("../database"));
class LoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.params;
            const { pass } = req.params;
            const encriptedpass = md5_typescript_1.Md5.init(pass);
            const auth = yield database_1.default.query(`SELECT * FROM usuario u 
        INNER JOIN rol_usuario ru on u.COD_USUARIO=ru.COD_USUARIO
        INNER JOIN rol r on r.COD_ROL=ru.COD_ROL
        where u.ESTADO='ACT' AND ru.ESTADO='ACT' AND u.NOMBRE_USUARIO = ? AND u.CLAVE = ?`, [user, encriptedpass]);
            res.json(auth);
        });
    }
    updateLastLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.params;
            const date = new Date();
            yield database_1.default.query('UPDATE usuario SET ULT_FECHA_INGRESO= ?  WHERE NOMBRE_USUARIO = ?', [date, user]);
            res.json({ message: 'actualizacion de fecha de usuario' });
        });
    }
}
exports.loginController = new LoginController();
