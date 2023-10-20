import { Router } from "express";
import ProfessorController from '../controllers/ProfessorController'

const ProfessorRouter = Router();

ProfessorRouter.get('/professor', ProfessorController.listarProfessor)
ProfessorRouter.post('/professor', ProfessorController.criarProfessor)
ProfessorRouter.patch('/professor/:id', ProfessorController.atualizarProfessor)
ProfessorRouter.delete('/professor/:id', ProfessorController.deletarProfessor)

export default ProfessorRouter