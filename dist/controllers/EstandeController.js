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
const EstandeServices_1 = __importDefault(require("../services/EstandeServices"));
class EstandeController {
    constructor() { }
    listarEstande(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield EstandeServices_1.default.listarEstande();
            if (result) {
                res.status(200).json({
                    status: 'Estandes listados com sucesso!',
                    estande: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    atualizarEstande(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Estande');
        });
    }
    criarEstande(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEstande = req.body;
            const result = yield EstandeServices_1.default.criarEstande(newEstande);
            if (result) {
                res.status(200).json({
                    status: 'Estande criado com sucesso!',
                    estande: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarEstande(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idEstande = parseInt(req.params.idEstande);
            try {
                yield EstandeServices_1.default.deletarEstande(idEstande);
                res.status(200).json({
                    status: 'Estande deletado com sucesso!',
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
exports.default = new EstandeController();
