import { PrismaClient, Criterio } from '@prisma/client'

const prisma = new PrismaClient()

class CriterioServices {
  constructor() {}

  async listarCriterio() {
    try {
      const criterio = await prisma.criterio.findMany()
      return criterio
    } catch (error) {
      console.log(error)
    }
  }

  async criarCriterio(newCriterio: Criterio) {
    try {
      const criterio = await prisma.criterio.create({
        data: newCriterio,
      })
      return criterio
    } catch (error) {
      console.log(error)
    }
  }

  async atualizarCriterio(idCriterio:number, inovacao:number, maturidade:number, atrativiade:number, apresentacao:number) {
    try {
      const criterio = await prisma.criterio.update({
        where: { idCriterio: idCriterio },
        data: {
            idCriterio: idCriterio,
            inovacao: inovacao,
            maturidade: maturidade,
            atratividade: atrativiade,
            apresentacao: apresentacao
        },
      })
      return criterio
    } catch (error) {
      console.log(error)
    }
  }

  async deletarCriterio(idCriterio: number) {
    try {
      await prisma.criterio.delete({
        where: { idCriterio: idCriterio },
      })
      return console.log('Criterio deletado')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new CriterioServices()