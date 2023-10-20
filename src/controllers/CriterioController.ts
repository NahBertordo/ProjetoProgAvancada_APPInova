import { Criterio } from '@prisma/client'
import { Request, Response } from 'express'
import CriterioServices from '../services/CriterioServices'

class CriterioController {
  constructor() {}

  async listarCriterio(req: Request, res: Response) {
    const result = await CriterioServices.listarCriterio()
    if (result) {
      res.status(200).json({
        status: 'Notas dos criterios listadas com sucesso!',
        criterio: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
  async atualizarCriterio(req: Request, res: Response) {
    return res.send('Atualizar Criterio')
  }
  async criarCriterio(req: Request, res: Response) {
    const newCriterio: Criterio = req.body
    const result = await CriterioServices.criarCriterio(newCriterio)
    if (result) {
      res.status(200).json({
        status: 'Criterio foi criado com sucesso!',
        criterio: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }

  async deletarCriterio(req: Request, res: Response) {
    const idCriterio:number = parseInt(req.params.idCriterio as string)
    try {
      await CriterioServices.deletarCriterio(idCriterio)
      res.status(200).json({
        status: 'Criterio foi deletado com sucesso!',
      })
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
}

export default new CriterioController();