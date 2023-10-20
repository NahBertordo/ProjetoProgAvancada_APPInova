import { Router } from "express";
import GrupoController from '../controllers/GrupoController'

const GrupoRouter = Router();

GrupoRouter.get('/grupo', GrupoController.listarGrupo)
GrupoRouter.post('/grupo', GrupoController.criarGrupo)
GrupoRouter.patch('/grupo/:id', GrupoController.atualizarGrupo)
GrupoRouter.delete('/grupo/:id', GrupoController.deletarGrupo)

export default GrupoRouter