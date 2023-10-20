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
class AlunoServices {
    constructor() { }
    listarAluno() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const aluno = yield prisma.aluno.findMany();
                return aluno;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarAluno(newAluno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const aluno = yield prisma.aluno.create({
                    data: newAluno,
                });
                return aluno;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarAluno(matricula, nomeAluno, emailAluno, senhaAluno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const aluno = yield prisma.aluno.update({
                    where: { matricula: matricula },
                    data: {
                        nomeAluno: nomeAluno,
                        emailAluno: emailAluno,
                        senhaAluno: senhaAluno,
                    },
                });
                return aluno;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarAluno(matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.aluno.delete({
                    where: { matricula: matricula },
                });
                return console.log('Aluno deletado');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new AlunoServices();
