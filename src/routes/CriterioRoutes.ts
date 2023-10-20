import { Router } from "express";
import CriterioController from '../controllers/CriterioController'

const CriterioRouter = Router();

CriterioRouter.get('/criterio', CriterioController.listarCriterio)
CriterioRouter.post('/criterio', CriterioController.criarCriterio)
CriterioRouter.patch('/criterio/:id', CriterioController.atualizarCriterio)
CriterioRouter.delete('/criterio/:id', CriterioController.deletarCriterio)

export default CriterioRouter