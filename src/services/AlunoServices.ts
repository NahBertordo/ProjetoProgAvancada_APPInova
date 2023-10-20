import { PrismaClient, Aluno } from '@prisma/client'

const prisma = new PrismaClient()

class AlunoServices {
  constructor() {}

  async listarAluno() {
    try {
      const aluno = await prisma.aluno.findMany()
      return aluno
    } catch (error) {
      console.log(error)
    }
  }

  async criarAluno(newAluno: Aluno) {
    try {
      const aluno = await prisma.aluno.create({
        data: newAluno,
      })
      return aluno
    } catch (error) {
      console.log(error)
    }
  }

  async atualizarAluno(matricula: number, nomeAluno:string, emailAluno: string, senhaAluno: string) {
    try {
      const aluno = await prisma.aluno.update({
        where: { matricula: matricula },
        data: {
            nomeAluno: nomeAluno,
            emailAluno: emailAluno,
            senhaAluno: senhaAluno,
        },
      })
      return aluno
    } catch (error) {
      console.log(error)
    }
  }

  async deletarAluno(matricula: number) {
    try {
      await prisma.aluno.delete({
        where: { matricula: matricula },
      })
      return console.log('Aluno deletado')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new AlunoServices()