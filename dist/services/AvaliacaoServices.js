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
class AvaliacaoServices {
    constructor() { }
    listarAvaliacao() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const avaliacao = yield prisma.avaliacao.findMany();
                return avaliacao;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarAvaliacao(newAvaliacao) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const avaliacao = yield prisma.avaliacao.create({
                    data: newAvaliacao,
                });
                return avaliacao;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarAvaliacao(idAvaliacao, notaApresentacao, id_CriterioAvaliacao, matriculaProfessor, matriculaAluno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const avaliacao = yield prisma.avaliacao.update({
                    where: { idAvaliacao: idAvaliacao },
                    data: {
                        idAvaliacao: idAvaliacao,
                        notaApresentacao: notaApresentacao,
                        id_criterioAvaliacao: id_CriterioAvaliacao,
                        matricula_Professor: matriculaProfessor,
                        matricula_Aluno: matriculaAluno
                    },
                });
                return avaliacao;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarAvaliacao(idAvaliacao) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.avaliacao.delete({
                    where: { idAvaliacao: idAvaliacao },
                });
                return console.log('Avaliacao deletada');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new AvaliacaoServices();
