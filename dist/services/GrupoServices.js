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
class GrupoServices {
    constructor() { }
    listarGrupo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const grupo = yield prisma.grupo.findMany();
                return grupo;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarGrupo(newGrupo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const grupo = yield prisma.grupo.create({
                    data: newGrupo,
                });
                return grupo;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarGrupo(idGrupo, nomeGrupo, integrante, matriculaLider, id_estandeApresentacao, nota_apresentacao) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const grupo = yield prisma.grupo.update({
                    where: { idGrupo: idGrupo },
                    data: {
                        idGrupo: idGrupo,
                        nomeGrupo: nomeGrupo,
                        integrante: integrante,
                        matriculaLider: matriculaLider,
                        id_estandeApresentacao: id_estandeApresentacao,
                        nota_apresentacao: nota_apresentacao
                    },
                });
                return grupo;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarGrupo(idGrupo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.grupo.delete({
                    where: { idGrupo: idGrupo },
                });
                return console.log('Grupo deletado');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new GrupoServices();
