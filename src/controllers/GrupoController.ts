import { Grupo } from '@prisma/client'
import { Request, Response } from 'express'
import GrupoServices from '../services/GrupoServices'

class GrupoController {
  constructor() {}

  async listarGrupo(req: Request, res: Response) {
    const result = await GrupoServices.listarGrupo()
    if (result) {
      res.status(200).json({
        status: 'Grupos listados com sucesso!',
        grupo: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
  async atualizarGrupo(req: Request, res: Response) {
    return res.send('Atualizar Grupo')
  }
  async criarGrupo(req: Request, res: Response) {
    const newGrupo: Grupo = req.body
    const result = await GrupoServices.criarGrupo(newGrupo)
    if (result) {
      res.status(200).json({
        status: 'Grupo foi criado com sucesso!',
        grupo: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }

  async deletarGrupo(req: Request, res: Response) {
    const idGrupo:number = parseInt(req.params.idGrupo as string)
    try {
      await GrupoServices.deletarGrupo(idGrupo)
      res.status(200).json({
        status: 'Grupo foi deletado com sucesso!',
      })
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
}

export default new GrupoController();