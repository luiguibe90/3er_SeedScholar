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
exports.schoolController = void 0;
const database_1 = __importDefault(require("../database"));
class SchoolController {
    curso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { ids } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW aap.COD_ALUMNO, aa.MATERIA, p.APELLIDO, p.NOMBRE FROM alumno_asignatura_periodo aap, persona p, asignatura aa WHERE aap.COD_DOCENTE = ? AND aap.COD_ASIGNATURA = ? AND aa.COD_ASIGNATURA = aap.COD_ASIGNATURA AND aap.COD_ALUMNO = p.COD_PERSONA ORDER BY APELLIDO ASC', [id, ids]);
            console.log(curs);
            res.json(curs);
        });
    }
    primero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idp } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW a.MATERIA, aap.NOTA1, aap.NOTA2, aap.NOTA3, aap.NOTA4, aap.NOTA5 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND a.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [idp]);
            console.log(curs);
            res.json(curs);
        });
    }
    segundo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idqs } = req.params;
            const cursq = yield database_1.default.query('SELECT DISTINCTROW a.MATERIA, aap.NOTA6, aap.NOTA7, aap.NOTA8, aap.NOTA9, aap.NOTA10 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND a.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [idqs]);
            console.log(cursq);
            res.json(cursq);
        });
    }
    smp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { npa } = req.params;
            const { cae } = req.params;
            const cursq = yield database_1.default.query('SELECT DISTINCTROW aap.NOTA1, aap.NOTA2, aap.NOTA3, aap.NOTA4, aap.NOTA5 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND a.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_ASIGNATURA = ? AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [npa, cae]);
            console.log(cursq);
            res.json(cursq);
        });
    }
    sms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { npas } = req.params;
            const { caes } = req.params;
            const cursq = yield database_1.default.query('SELECT DISTINCTROW aap.NOTA6, aap.NOTA7, aap.NOTA8, aap.NOTA9, aap.NOTA10 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND a.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_ASIGNATURA = ? AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [npas, caes]);
            console.log(cursq);
            res.json(cursq);
        });
    }
    updateDeberes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { sdi } = req.params;
            yield database_1.default.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdi]);
            res.json({ message: 'Ingreso de notas' });
        });
    }
    updateTalleres(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { sdiT } = req.params;
            yield database_1.default.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiT]);
            res.json({ message: 'Ingreso de notas' });
        });
    }
    updateLaboratorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { sdiL } = req.params;
            yield database_1.default.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiL]);
            res.json({ message: 'Ingreso de notas' });
        });
    }
    updatePruebas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { sdiP } = req.params;
            yield database_1.default.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiP]);
            res.json({ message: 'Ingreso de notas' });
        });
    }
    updateExamenes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { sdiE } = req.params;
            yield database_1.default.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiE]);
            res.json({ message: 'Ingreso de notas' });
        });
    }
    VerDeberes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ca } = req.params;
            const { cal } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCT a.MATERIA, ta.DETALLE_TAREA FROM tarea_asignatura ta, alumno_asignatura_periodo aap, asignatura a WHERE ta.COD_ASIGNATURA = ? AND aap.COD_ASIGNATURA = ta.COD_ASIGNATURA AND aap.COD_ALUMNO = ? AND ta.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND a.COD_ASIGNATURA = ta.COD_ASIGNATURA ORDER BY a.MATERIA DESC', [ca, cal]);
            console.log(curs);
            res.json(curs);
        });
    }
    Materias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mat } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW a.COD_ASIGNATURA, a.MATERIA FROM persona p, asignatura a, alumno_asignatura_periodo aap WHERE p.COD_PERSONA = ? AND aap.COD_ALUMNO = p.COD_PERSONA AND aap.COD_NIVEL_EDUCATIVO = a.COD_NIVEL_EDUCATIVO', [mat]);
            console.log(curs);
            res.json(curs);
        });
    }
    MateriasProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mp } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW a.COD_ASIGNATURA, a.MATERIA FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_DOCENTE = ? AND a.COD_ASIGNATURA = aap.COD_ASIGNATURA', [mp]);
            console.log(curs);
            res.json(curs);
        });
    }
    AsignacionDeberes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { asdb } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW ap.COD_ASIGNATURA, ap.COD_PERIODO_LECTIVO, ap.COD_NIVEL_EDUCATIVO, a.MATERIA FROM asignatura_periodo ap, asignatura a, alumno_asignatura_periodo aap WHERE aap.COD_DOCENTE = ? AND ap.COD_DOCENTE = aap.COD_DOCENTE AND ap.COD_ASIGNATURA = a.COD_ASIGNATURA AND a.COD_ASIGNATURA = aap.COD_ASIGNATURA', [asdb]);
            console.log(curs);
            res.json(curs);
        });
    }
    SubirDeberes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { eds } = req.params;
            const { dse } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW a.COD_ASIGNATURA, a.COD_NIVEL_EDUCATIVO, ap.COD_PERIODO_LECTIVO, ap.COD_DOCENTE FROM asignatura a, asignatura_periodo ap WHERE ap.COD_DOCENTE = ? AND a.COD_NIVEL_EDUCATIVO = ap.COD_NIVEL_EDUCATIVO AND ap.COD_ASIGNATURA = ? AND ap.COD_ASIGNATURA = a.COD_ASIGNATURA', [eds, dse]);
            console.log(curs);
            res.json(curs);
        });
    }
    ObtenerNivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ob } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW ne.COD_NIVEL_EDUCATIVO, ne.NOMBRE FROM asignatura_periodo ap, nivel_educativo ne WHERE ap.COD_DOCENTE = ? AND ne.COD_NIVEL_EDUCATIVO = ap.COD_NIVEL_EDUCATIVO', [ob]);
            console.log(curs);
            res.json(curs);
        });
    }
    DatosCreacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //datos codigo docente
            const { dcd } = req.params;
            //datos codigo asignatura
            const { dca } = req.params;
            //datos codigo nivel educativo
            const { dcne } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW ap.COD_PARALELO, p.NOMBRE, ap.COD_PERIODO_LECTIVO, ap.COD_NIVEL_EDUCATIVO  FROM asignatura a, asignatura_periodo ap, paralelo p WHERE ap.COD_DOCENTE = ? AND ap.COD_ASIGNATURA = ? AND a.COD_ASIGNATURA = ap.COD_ASIGNATURA AND ap.COD_NIVEL_EDUCATIVO = ? AND p.COD_NIVEL_EDUCATIVO = ap.COD_NIVEL_EDUCATIVO', [dcd, dca, dcne]);
            console.log(curs);
            res.json(curs);
        });
    }
    EntregarTarea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tarea_asignatura set ?', [req.body]);
            res.json({ text: 'Asignacion Materia' });
        });
    }
    ObtencionDeberes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //datos codigo docente
            const { odd } = req.params;
            //datos codigo asignatura
            const { odca } = req.params;
            //datos codigo nivel educativo
            const { odcne } = req.params;
            //datos paralelo
            const { odcp } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW ta.COD_TAREA ,ta.DETALLE_TAREA FROM tarea_asignatura ta WHERE ta.COD_DOCENTE = ? AND ta.COD_ASIGNATURA = ? AND ta.COD_NIVEL_EDUCATIVO = ? AND ta.COD_PARALELO = ?', [odd, odca, odcne, odcp]);
            console.log(curs);
            res.json(curs);
        });
    }
    UpdateEntrega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { COD_TAREA } = req.params;
            const oldHomework = req.body;
            yield database_1.default.query('UPDATE tarea_asignatura set ? WHERE COD_TAREA = ?', [req.body, COD_TAREA]);
        });
    }
    //obtener nivel
    NivelEducativo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const curs = yield database_1.default.query('SELECT ne.COD_NIVEL_EDUCATIVO, ne.NOMBRE FROM nivel_educativo ne');
            console.log(curs);
            res.json(curs);
        });
    }
    //obtener paralelo
    ObtenerParalelo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { obe } = req.params;
            const curs = yield database_1.default.query('SELECT p.COD_PARALELO, p.NOMBRE FROM paralelo p, nivel_educativo ne WHERE ne.COD_NIVEL_EDUCATIVO = ? AND p.COD_NIVEL_EDUCATIVO = ne.COD_NIVEL_EDUCATIVO', [obe]);
            console.log(curs);
            res.json(curs);
        });
    }
    //listado estudiantes paralelo
    ListaParalelo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { lpn } = req.params;
            const { lpp } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW aap.COD_ALUMNO, pe.APELLIDO, pe.NOMBRE, aap.COD_PERIODO_LECTIVO, ne.COD_NIVEL_EDUCATIVO FROM alumno_asignatura_periodo aap, persona pe, nivel_educativo ne WHERE aap.COD_NIVEL_EDUCATIVO = ? AND ne.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_PARALELO = ? AND aap.COD_ALUMNO = pe.COD_PERSONA', [lpn, lpp]);
            console.log(curs);
            res.json(curs);
        });
    }
    //insertar la asistencia del alumno
    InsertarAsistenci(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO asistencia_periodo set ?', [req.body]);
            res.json({ text: 'Asistencia tomada' });
        });
    }
}
exports.schoolController = new SchoolController();
