import { Aluno } from '@prisma/client'
import { Request, Response } from 'express'
import AlunoServices from '../services/AlunoServices'

class AlunoController {
  constructor() {}

  async listarAluno(req: Request, res: Response) {
    const result = await AlunoServices.listarAluno()
    if (result) {
      res.status(200).json({
        status: 'Alunos listados com sucesso!',
        aluno: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
  async atualizarAluno(req: Request, res: Response) {
    return res.send('Atualizar Aluno')
  }
  async criarAluno(req: Request, res: Response) {
    const newAluno: Aluno = req.body
    const result = await AlunoServices.criarAluno(newAluno)
    if (result) {
      res.status(200).json({
        status: 'Aluno criado com sucesso!',
        aluno: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }

  async deletarAluno(req: Request, res: Response) {
    const matricula:number = parseInt(req.params.matricula as string)
    try {
      await AlunoServices.deletarAluno(matricula)
      res.status(200).json({
        status: 'Aluno deletado com sucesso!',
      })
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
}

export default new AlunoController();