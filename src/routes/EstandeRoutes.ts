import { Router } from "express";
import EstandeController from '../controllers/EstandeController'

const EstandeRouter = Router();

EstandeRouter.get('/estande', EstandeController.listarEstande)
EstandeRouter.post('/estande', EstandeController.criarEstande)
EstandeRouter.patch('/estande/:id', EstandeController.atualizarEstande)
EstandeRouter.delete('/estande/:id', EstandeController.deletarEstande)

export default EstandeRouter