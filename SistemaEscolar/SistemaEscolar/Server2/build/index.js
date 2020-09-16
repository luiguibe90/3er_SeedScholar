"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const schoolRoutes_1 = __importDefault(require("./routes/schoolRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const campusRoutes_1 = __importDefault(require("./routes/campusRoutes"));
const buildingRoutes_1 = __importDefault(require("./routes/buildingRoutes"));
const classroomRoutes_1 = __importDefault(require("./routes/classroomRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/system/school', schoolRoutes_1.default);
        this.app.use('/system/login', loginRoutes_1.default);
        this.app.use('/system/campus', campusRoutes_1.default);
        this.app.use('/system/building', buildingRoutes_1.default);
        this.app.use('/system/classroom', classroomRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port`, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
