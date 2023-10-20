"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfessorController_1 = __importDefault(require("../controllers/ProfessorController"));
const ProfessorRouter = (0, express_1.Router)();
ProfessorRouter.get('/professor', ProfessorController_1.default.listarProfessor);
ProfessorRouter.post('/professor', ProfessorController_1.default.criarProfessor);
ProfessorRouter.patch('/professor/:id', ProfessorController_1.default.atualizarProfessor);
ProfessorRouter.delete('/professor/:id', ProfessorController_1.default.deletarProfessor);
exports.default = ProfessorRouter;
