import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getAll(): string;
    getNotes(): string;
    getById(params: any): string;
    createStudentByName(body: any): any;
    updateStudent(id: string): string;
    deleteStudent(id: string): string;
    convertNumber(id: number): number;
    updateName(params: any): string;
    deleteStudentByName(params: any): string;
}
