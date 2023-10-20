import { Estande } from '@prisma/client'
import { Request, Response } from 'express'
import EstandeServices from '../services/EstandeServices'

class EstandeController {
  constructor() {}

  async listarEstande(req: Request, res: Response) {
    const result = await EstandeServices.listarEstande()
    if (result) {
      res.status(200).json({
        status: 'Estandes listados com sucesso!',
        estande: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
  async atualizarEstande(req: Request, res: Response) {
    return res.send('Atualizar Estande')
  }
  async criarEstande(req: Request, res: Response) {
    const newEstande: Estande = req.body
    const result = await EstandeServices.criarEstande(newEstande)
    if (result) {
      res.status(200).json({
        status: 'Estande criado com sucesso!',
        estande: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }

  async deletarEstande(req: Request, res: Response) {
    const idEstande:number = parseInt(req.params.idEstande as string)
    try {
      await EstandeServices.deletarEstande(idEstande)
      res.status(200).json({
        status: 'Estande deletado com sucesso!',
      })
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
}

export default new EstandeController();