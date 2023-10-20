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
const AvaliacaoServices_1 = __importDefault(require("../services/AvaliacaoServices"));
class AvaliacaoController {
    constructor() { }
    listarAvaliacao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield AvaliacaoServices_1.default.listarAvaliacao();
            if (result) {
                res.status(200).json({
                    status: 'Avaliacoes listadas com sucesso!',
                    avaliacao: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    atualizarAvaliacao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Avaliacao');
        });
    }
    criarAvaliacao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAvaliacao = req.body;
            const result = yield AvaliacaoServices_1.default.criarAvaliacao(newAvaliacao);
            if (result) {
                res.status(200).json({
                    status: 'Avaliacao criada com sucesso!',
                    avaliacao: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarAvaliacao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idAvaliacao = parseInt(req.params.idAvaliacao);
            try {
                yield AvaliacaoServices_1.default.deletarAvaliacao(idAvaliacao);
                res.status(200).json({
                    status: 'Avaliacao deletada com sucesso!',
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
exports.default = new AvaliacaoController();
