import { Router } from "express";
import AvaliacaoController from '../controllers/AvaliacaoController'

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/avaliacao', AvaliacaoController.listarAvaliacao)
AvaliacaoRouter.post('/avaliacao', AvaliacaoController.criarAvaliacao)
AvaliacaoRouter.patch('/avaliacao/:id', AvaliacaoController.atualizarAvaliacao)
AvaliacaoRouter.delete('/avaliacao/:id', AvaliacaoController.deletarAvaliacao)

export default AvaliacaoRouter