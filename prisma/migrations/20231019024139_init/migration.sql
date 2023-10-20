-- CreateTable
CREATE TABLE "Estande" (
    "idEstande" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeEstande" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Grupo" (
    "idGrupo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeGrupo" TEXT NOT NULL,
    "integrante" TEXT NOT NULL,
    "matriculaLider" INTEGER NOT NULL,
    "id_estandeApresentacao" INTEGER NOT NULL,
    "nota_apresentacao" REAL NOT NULL,
    CONSTRAINT "Grupo_matriculaLider_fkey" FOREIGN KEY ("matriculaLider") REFERENCES "Aluno" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grupo_id_estandeApresentacao_fkey" FOREIGN KEY ("id_estandeApresentacao") REFERENCES "Estande" ("idEstande") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grupo_nota_apresentacao_fkey" FOREIGN KEY ("nota_apresentacao") REFERENCES "Avaliacao" ("notaApresentacao") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Aluno" (
    "matricula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeAluno" TEXT NOT NULL,
    "emailAluno" TEXT NOT NULL,
    "senhaAluno" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Professor" (
    "matriculaProfessor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeProfessor" TEXT NOT NULL,
    "emailProfessor" TEXT NOT NULL,
    "senhaProfessor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "idAvaliacao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "notaApresentacao" REAL NOT NULL,
    "id_criterioAvaliacao" INTEGER NOT NULL,
    "matricula_Professor" INTEGER NOT NULL,
    "matricula_Aluno" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_id_criterioAvaliacao_fkey" FOREIGN KEY ("id_criterioAvaliacao") REFERENCES "Criterio" ("idCriterio") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_matricula_Professor_fkey" FOREIGN KEY ("matricula_Professor") REFERENCES "Professor" ("matriculaProfessor") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_matricula_Aluno_fkey" FOREIGN KEY ("matricula_Aluno") REFERENCES "Aluno" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Criterio" (
    "idCriterio" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "inovacao" REAL NOT NULL,
    "maturidade" REAL NOT NULL,
    "atratividade" REAL NOT NULL,
    "apresentacao" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_notaApresentacao_key" ON "Avaliacao"("notaApresentacao");
