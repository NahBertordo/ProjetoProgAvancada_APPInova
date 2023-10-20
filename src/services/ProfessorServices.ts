import { PrismaClient, Professor } from '@prisma/client'

const prisma = new PrismaClient()

class ProfessorServices {
  constructor() {}

  async listarProfessor() {
    try {
      const professor = await prisma.professor.findMany()
      return professor
    } catch (error) {
      console.log(error)
    }
  }

  async criarProfessor(newProfessor: Professor) {
    try {
      const professor = await prisma.professor.create({
        data: newProfessor,
      })
      return professor
    } catch (error) {
      console.log(error)
    }
  }

  async atualizarProfessor(matriculaProfessor: number, nomeProfessor:string, emailProfessor: string, senhaProfessor: string) {
    try {
      const professor = await prisma.professor.update({
        where: { matriculaProfessor: matriculaProfessor },
        data: {
            nomeProfessor: nomeProfessor,
            emailProfessor: emailProfessor,
            senhaProfessor: senhaProfessor,
        },
      })
      return professor
    } catch (error) {
      console.log(error)
    }
  }

  async deletarProfessor(matriculaProfessor: number) {
    try {
      await prisma.professor.delete({
        where: { matriculaProfessor: matriculaProfessor },
      })
      return console.log('Professor deletado')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new ProfessorServices()