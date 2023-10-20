import { Router } from "express";
import AlunoController from '../controllers/AlunoController'

const AlunoRouter = Router();

AlunoRouter.get('/aluno', AlunoController.listarAluno)
AlunoRouter.post('/aluno', AlunoController.criarAluno)
AlunoRouter.patch('/aluno/:id', AlunoController.atualizarAluno)
AlunoRouter.delete('/aluno/:id', AlunoController.deletarAluno)

export default AlunoRouter