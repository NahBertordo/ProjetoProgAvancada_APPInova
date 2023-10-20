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
class CriterioServices {
    constructor() { }
    listarCriterio() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const criterio = yield prisma.criterio.findMany();
                return criterio;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarCriterio(newCriterio) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const criterio = yield prisma.criterio.create({
                    data: newCriterio,
                });
                return criterio;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    atualizarCriterio(idCriterio, inovacao, maturidade, atrativiade, apresentacao) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const criterio = yield prisma.criterio.update({
                    where: { idCriterio: idCriterio },
                    data: {
                        idCriterio: idCriterio,
                        inovacao: inovacao,
                        maturidade: maturidade,
                        atratividade: atrativiade,
                        apresentacao: apresentacao
                    },
                });
                return criterio;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletarCriterio(idCriterio) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.criterio.delete({
                    where: { idCriterio: idCriterio },
                });
                return console.log('Criterio deletado');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new CriterioServices();
