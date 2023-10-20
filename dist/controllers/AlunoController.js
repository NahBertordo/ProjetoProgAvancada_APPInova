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
const AlunoServices_1 = __importDefault(require("../services/AlunoServices"));
class AlunoController {
    constructor() { }
    listarAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield AlunoServices_1.default.listarAluno();
            if (result) {
                res.status(200).json({
                    status: 'Alunos listados com sucesso!',
                    aluno: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    atualizarAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Aluno');
        });
    }
    criarAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAluno = req.body;
            const result = yield AlunoServices_1.default.criarAluno(newAluno);
            if (result) {
                res.status(200).json({
                    status: 'Aluno criado com sucesso!',
                    aluno: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const matricula = parseInt(req.params.matricula);
            try {
                yield AlunoServices_1.default.deletarAluno(matricula);
                res.status(200).json({
                    status: 'Aluno deletado com sucesso!',
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
exports.default = new AlunoController();
