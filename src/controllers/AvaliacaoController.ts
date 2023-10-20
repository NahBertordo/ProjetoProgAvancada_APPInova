import { Avaliacao } from '@prisma/client'
import { Request, Response } from 'express'
import AvaliacaoServices from '../services/AvaliacaoServices'

class AvaliacaoController {
  constructor() {}

  async listarAvaliacao(req: Request, res: Response) {
    const result = await AvaliacaoServices.listarAvaliacao()
    if (result) {
      res.status(200).json({
        status: 'Avaliacoes listadas com sucesso!',
        avaliacao: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
  async atualizarAvaliacao(req: Request, res: Response) {
    return res.send('Atualizar Avaliacao')
  }
  async criarAvaliacao(req: Request, res: Response) {
    const newAvaliacao: Avaliacao = req.body
    const result = await AvaliacaoServices.criarAvaliacao(newAvaliacao)
    if (result) {
      res.status(200).json({
        status: 'Avaliacao criada com sucesso!',
        avaliacao: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }

  async deletarAvaliacao(req: Request, res: Response) {
    const idAvaliacao:number = parseInt(req.params.idAvaliacao as string)
    try {
      await AvaliacaoServices.deletarAvaliacao(idAvaliacao)
      res.status(200).json({
        status: 'Avaliacao deletada com sucesso!',
      })
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
}

export default new AvaliacaoController();