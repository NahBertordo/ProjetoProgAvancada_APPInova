import { PrismaClient, Grupo } from '@prisma/client'

const prisma = new PrismaClient()

class GrupoServices {
  constructor() {}

  async listarGrupo() {
    try {
      const grupo = await prisma.grupo.findMany()
      return grupo
    } catch (error) {
      console.log(error)
    }
  }

  async criarGrupo(newGrupo: Grupo) {
    try {
      const grupo = await prisma.grupo.create({
        data: newGrupo,
      })
      return grupo
    } catch (error) {
      console.log(error)
    }
  }

  async atualizarGrupo(idGrupo:number, nomeGrupo:string, integrante:string, matriculaLider:number,id_estandeApresentacao:number,nota_apresentacao:number) {
    try {
      const grupo = await prisma.grupo.update({
        where: { idGrupo: idGrupo },
        data: {
          idGrupo: idGrupo,
          nomeGrupo: nomeGrupo,
          integrante: integrante,
          matriculaLider: matriculaLider,
          id_estandeApresentacao: id_estandeApresentacao,
          nota_apresentacao: nota_apresentacao
        },
      })
      return grupo
    } catch (error) {
      console.log(error)
    }
  }

  async deletarGrupo(idGrupo: number) {
    try {
      await prisma.grupo.delete({
        where: { idGrupo: idGrupo },
      })
      return console.log('Grupo deletado')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new GrupoServices()