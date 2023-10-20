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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProfessorServices {
    constructor() { }
    listarProfessor() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const professor = yield prisma.professor.findMany();
                return professor;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarProfessor(newProfessor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const professor = yield prisma.professor.create({
                    data: newProfessor,
                });
                return professor;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarProfessor(matriculaProfessor, nomeProfessor, emailProfessor, senhaProfessor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const professor = yield prisma.professor.update({
                    where: { matriculaProfessor: matriculaProfessor },
                    data: {
                        nomeProfessor: nomeProfessor,
                        emailProfessor: emailProfessor,
                        senhaProfessor: senhaProfessor,
                    },
                });
                return professor;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarProfessor(matriculaProfessor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.professor.delete({
                    where: { matriculaProfessor: matriculaProfessor },
                });
                return console.log('Professor deletado');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new ProfessorServices();
