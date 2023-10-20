import { Professor } from '@prisma/client'
import { Request, Response } from 'express'
import ProfessorServices from '../services/ProfessorServices'

class ProfessorController {
  constructor() {}

  async listarProfessor(req: Request, res: Response) {
    const result = await ProfessorServices.listarProfessor()
    if (result) {
      res.status(200).json({
        status: 'Professores listados com sucesso!',
        professor: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
  async atualizarProfessor(req: Request, res: Response) {
    return res.send('Atualizar Professor')
  }
  async criarProfessor(req: Request, res: Response) {
    const newProfessor: Professor = req.body
    const result = await ProfessorServices.criarProfessor(newProfessor)
    if (result) {
      res.status(200).json({
        status: 'Professor criado com sucesso!',
        professor: result,
      })
    } else {
      res.status(200).json({
        status: 'erro',
      })
    }
  }

  async deletarProfessor(req: Request, res: Response) {
    const matriculaProfessor:number = parseInt(req.params.matricula as string)
    try {
      await ProfessorServices.deletarProfessor(matriculaProfessor)
      res.status(200).json({
        status: 'Professor deletado com sucesso!',
      })
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      })
    }
  }
}

export default new ProfessorController();