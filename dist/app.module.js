"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const filtro_controller_1 = require("./filtro/filtro.controller");
const filtro_service_1 = require("./filtro/filtro.service");
const mongoose_1 = require("@nestjs/mongoose");
const student_module_1 = require("./student/student.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://silenceisbeautyofsoul:gGB1wjhkSEntVfM1@nestjs.rcciffb.mongodb.net/'),
            student_module_1.StudentModule,
        ],
        controllers: [app_controller_1.AppController, filtro_controller_1.FiltroController],
        providers: [app_service_1.AppService, filtro_service_1.FiltroService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map