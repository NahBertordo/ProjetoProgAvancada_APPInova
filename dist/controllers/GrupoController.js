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
const GrupoServices_1 = __importDefault(require("../services/GrupoServices"));
class GrupoController {
    constructor() { }
    listarGrupo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield GrupoServices_1.default.listarGrupo();
            if (result) {
                res.status(200).json({
                    status: 'Grupos listados com sucesso!',
                    grupo: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    atualizarGrupo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Grupo');
        });
    }
    criarGrupo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newGrupo = req.body;
            const result = yield GrupoServices_1.default.criarGrupo(newGrupo);
            if (result) {
                res.status(200).json({
                    status: 'Grupo criado com sucesso!',
                    grupo: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarGrupo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idGrupo = parseInt(req.params.idGrupo);
            try {
                yield GrupoServices_1.default.deletarGrupo(idGrupo);
                res.status(200).json({
                    status: 'Grupo deletado com sucesso!',
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
exports.default = new GrupoController();
