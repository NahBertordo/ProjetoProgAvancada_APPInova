import { PrismaClient, Avaliacao } from '@prisma/client'

const prisma = new PrismaClient()

class AvaliacaoServices {
  constructor() {}

  async listarAvaliacao() {
    try {
      const avaliacao = await prisma.avaliacao.findMany()
      return avaliacao
    } catch (error) {
      console.log(error)
    }
  }

  async criarAvaliacao(newAvaliacao: Avaliacao) {
    try {
      const avaliacao = await prisma.avaliacao.create({
        data: newAvaliacao,
      })
      return avaliacao
    } catch (error) {
      console.log(error)
    }
  }

  async atualizarAvaliacao(idAvaliacao:number, notaApresentacao:number, id_CriterioAvaliacao:number, matriculaProfessor:number, matriculaAluno:number) {
    try {
      const avaliacao = await prisma.avaliacao.update({
        where: { idAvaliacao: idAvaliacao },
        data: {
          idAvaliacao: idAvaliacao,
          notaApresentacao: notaApresentacao,
          id_criterioAvaliacao: id_CriterioAvaliacao,
          matricula_Professor: matriculaProfessor,
          matricula_Aluno: matriculaAluno
        },
      })
      return avaliacao
    } catch (error) {
      console.log(error)
    }
  }

  async deletarAvaliacao(idAvaliacao: number) {
    try {
      await prisma.avaliacao.delete({
        where: { idAvaliacao: idAvaliacao },
      })
      return console.log('Avaliacao deletada')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new AvaliacaoServices()