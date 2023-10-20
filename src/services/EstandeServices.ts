import { PrismaClient, Estande } from '@prisma/client'

const prisma = new PrismaClient()

class EstandeServices {
  constructor() {}

  async listarEstande() {
    try {
      const estande = await prisma.estande.findMany()
      return estande
    } catch (error) {
      console.log(error)
    }
  }

  async criarEstande(newEstande: Estande) {
    try {
      const estande = await prisma.estande.create({
        data: newEstande,
      })
      return estande
    } catch (error) {
      console.log(error)
    }
  }

  async atualizarEstande(idEstande:number, nomeEstande:string) {
    try {
      const estande = await prisma.estande.update({
        where: { idEstande: idEstande },
        data: {
          idEstande: idEstande,
          nomeEstande:nomeEstande
        },
      })
      return estande
    } catch (error) {
      console.log(error)
    }
  }

  async deletarEstande(idEstande: number) {
    try {
      await prisma.estande.delete({
        where: { idEstande: idEstande },
      })
      return console.log('Estande Deletado')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new EstandeServices()