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
const CriterioServices_1 = __importDefault(require("../services/CriterioServices"));
class CriterioController {
    constructor() { }
    listarCriterio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield CriterioServices_1.default.listarCriterio();
            if (result) {
                res.status(200).json({
                    status: 'Notas dos criterios listadas com sucesso!',
                    criterio: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    atualizarCriterio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Criterio');
        });
    }
    criarCriterio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCriterio = req.body;
            const result = yield CriterioServices_1.default.criarCriterio(newCriterio);
            if (result) {
                res.status(200).json({
                    status: 'Criterio criado com sucesso!',
                    criterio: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarCriterio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCriterio = parseInt(req.params.idCriterio);
            try {
                yield CriterioServices_1.default.deletarCriterio(idCriterio);
                res.status(200).json({
                    status: 'Criterio deletado com sucesso!',
                });
            }
            catch (error) {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
}
exports.default = new CriterioController();
