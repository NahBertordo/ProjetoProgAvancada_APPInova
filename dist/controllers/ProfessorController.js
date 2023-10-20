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
const ProfessorServices_1 = __importDefault(require("../services/ProfessorServices"));
class ProfessorController {
    constructor() { }
    listarProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ProfessorServices_1.default.listarProfessor();
            if (result) {
                res.status(200).json({
                    status: 'Professores listados com sucesso!',
                    professor: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    atualizarProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send('Atualizar Professor');
        });
    }
    criarProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProfessor = req.body;
            const result = yield ProfessorServices_1.default.criarProfessor(newProfessor);
            if (result) {
                res.status(200).json({
                    status: 'Professor criado com sucesso!',
                    professor: result,
                });
            }
            else {
                res.status(200).json({
                    status: 'erro',
                });
            }
        });
    }
    deletarProfessor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const matriculaProfessor = parseInt(req.params.matricula);
            try {
                yield ProfessorServices_1.default.deletarProfessor(matriculaProfessor);
                res.status(200).json({
                    status: 'Professor deletado com sucesso!',
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
exports.default = new ProfessorController();
