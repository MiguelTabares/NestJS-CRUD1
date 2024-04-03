"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const student_entity_1 = require("./student.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let StudentService = class StudentService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    findAllStudent() {
        return this.studentModel.find().exec();
    }
    async createStudent(body) {
        const studentData = {
            name: body.name,
            password: body.password,
        };
        const student = new this.studentModel(studentData);
        return await student.save();
    }
    updateStudentName(id, name) {
        return this.studentModel.findByIdAndUpdate({ _id: id }, { $set: { name: "Juan" } });
    }
    deleteStudentId(id) {
        return this.studentModel.findByIdAndDelete({ _id: id });
    }
};
exports.StudentService = StudentService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentService.prototype, "createStudent", null);
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(student_entity_1.Student.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], StudentService);
//# sourceMappingURL=student.service.js.map