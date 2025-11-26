-- CreateEnum
CREATE TYPE "ActividadTipo" AS ENUM ('NORMAL', 'CLUB');

-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMINISTRADOR', 'COORDINADOR', 'ALUMNO');

-- CreateEnum
CREATE TYPE "Turno" AS ENUM ('MATUTINO', 'VESPERTINO');

-- CreateEnum
CREATE TYPE "TipoCiclo" AS ENUM ('SEMESTRAL', 'CUATRIMESTRAL', 'ANUAL');

-- CreateEnum
CREATE TYPE "Fase" AS ENUM ('FISICO_MATEMATICO', 'QUIMICO_BIOLOGO', 'SOCIALES');

-- CreateTable
CREATE TABLE "escuela" (
    "id_escuela" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "clave" TEXT,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "escuela_pkey" PRIMARY KEY ("id_escuela")
);

-- CreateTable
CREATE TABLE "plan_de_estudio" (
    "id_plan" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3),
    "id_escuela" INTEGER NOT NULL,

    CONSTRAINT "plan_de_estudio_pkey" PRIMARY KEY ("id_plan")
);

-- CreateTable
CREATE TABLE "ciclo" (
    "id_ciclo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "tipo" "TipoCiclo" NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT false,
    "id_plan" INTEGER NOT NULL,

    CONSTRAINT "ciclo_pkey" PRIMARY KEY ("id_ciclo")
);

-- CreateTable
CREATE TABLE "generacion" (
    "id_generacion" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ano_inicio" INTEGER NOT NULL,
    "ano_fin" INTEGER NOT NULL,
    "id_plan" INTEGER NOT NULL,
    "id_escuela" INTEGER NOT NULL,

    CONSTRAINT "generacion_pkey" PRIMARY KEY ("id_generacion")
);

-- CreateTable
CREATE TABLE "departamento" (
    "id_departamento" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "id_escuela" INTEGER NOT NULL,

    CONSTRAINT "departamento_pkey" PRIMARY KEY ("id_departamento")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "num_cuenta" TEXT NOT NULL,
    "nip" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT,
    "rol" "Rol" NOT NULL,
    "id_escuela" INTEGER NOT NULL,
    "id_grupo" INTEGER,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "generacionId_generacion" INTEGER,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "grupo" (
    "id_grupo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL,
    "turno" "Turno" NOT NULL,
    "id_generacion" INTEGER NOT NULL,
    "id_ciclo" INTEGER NOT NULL,
    "id_plan" INTEGER NOT NULL,
    "id_escuela" INTEGER NOT NULL,
    "fase" "Fase",
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "grupo_pkey" PRIMARY KEY ("id_grupo")
);

-- CreateTable
CREATE TABLE "plan_departamento" (
    "id_plan_departamento" SERIAL NOT NULL,
    "id_plan" INTEGER NOT NULL,
    "id_departamento" INTEGER NOT NULL,
    "puntos_requeridos" INTEGER NOT NULL,

    CONSTRAINT "plan_departamento_pkey" PRIMARY KEY ("id_plan_departamento")
);

-- CreateTable
CREATE TABLE "registro_cambios" (
    "id_registro" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "modulo" TEXT NOT NULL,
    "accion" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registro_cambios_pkey" PRIMARY KEY ("id_registro")
);

-- CreateTable
CREATE TABLE "actividad" (
    "id_actividad" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha" TIMESTAMP(3) NOT NULL,
    "puntos_participacion" INTEGER NOT NULL,
    "id_departamento" INTEGER NOT NULL,
    "id_coordinador" INTEGER NOT NULL,
    "id_ciclo" INTEGER NOT NULL,
    "tipo" "ActividadTipo" NOT NULL DEFAULT 'NORMAL',

    CONSTRAINT "actividad_pkey" PRIMARY KEY ("id_actividad")
);

-- CreateTable
CREATE TABLE "alumno_actividad" (
    "id_alumno_actividad" SERIAL NOT NULL,
    "id_alumno" INTEGER NOT NULL,
    "id_actividad" INTEGER NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL,
    "id_coordinador" INTEGER NOT NULL,
    "id_ciclo" INTEGER NOT NULL,

    CONSTRAINT "alumno_actividad_pkey" PRIMARY KEY ("id_alumno_actividad")
);

-- CreateTable
CREATE TABLE "ActividadPremio" (
    "id" SERIAL NOT NULL,
    "actividadId" INTEGER NOT NULL,
    "lugar" INTEGER,
    "puntos" INTEGER NOT NULL,

    CONSTRAINT "ActividadPremio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GanadorActividad" (
    "id" SERIAL NOT NULL,
    "actividadPremioId" INTEGER NOT NULL,
    "alumnoId" INTEGER NOT NULL,
    "actividadId_actividad" INTEGER,

    CONSTRAINT "GanadorActividad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_num_cuenta_key" ON "usuario"("num_cuenta");

-- CreateIndex
CREATE INDEX "ActividadPremio_actividadId_idx" ON "ActividadPremio"("actividadId");

-- CreateIndex
CREATE UNIQUE INDEX "ActividadPremio_actividadId_lugar_key" ON "ActividadPremio"("actividadId", "lugar");

-- CreateIndex
CREATE INDEX "GanadorActividad_actividadPremioId_idx" ON "GanadorActividad"("actividadPremioId");

-- CreateIndex
CREATE INDEX "GanadorActividad_alumnoId_idx" ON "GanadorActividad"("alumnoId");

-- CreateIndex
CREATE UNIQUE INDEX "GanadorActividad_actividadPremioId_alumnoId_key" ON "GanadorActividad"("actividadPremioId", "alumnoId");

-- AddForeignKey
ALTER TABLE "plan_de_estudio" ADD CONSTRAINT "plan_de_estudio_id_escuela_fkey" FOREIGN KEY ("id_escuela") REFERENCES "escuela"("id_escuela") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ciclo" ADD CONSTRAINT "ciclo_id_plan_fkey" FOREIGN KEY ("id_plan") REFERENCES "plan_de_estudio"("id_plan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generacion" ADD CONSTRAINT "generacion_id_plan_fkey" FOREIGN KEY ("id_plan") REFERENCES "plan_de_estudio"("id_plan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generacion" ADD CONSTRAINT "generacion_id_escuela_fkey" FOREIGN KEY ("id_escuela") REFERENCES "escuela"("id_escuela") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departamento" ADD CONSTRAINT "departamento_id_escuela_fkey" FOREIGN KEY ("id_escuela") REFERENCES "escuela"("id_escuela") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_escuela_fkey" FOREIGN KEY ("id_escuela") REFERENCES "escuela"("id_escuela") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "grupo"("id_grupo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_generacionId_generacion_fkey" FOREIGN KEY ("generacionId_generacion") REFERENCES "generacion"("id_generacion") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grupo" ADD CONSTRAINT "grupo_id_generacion_fkey" FOREIGN KEY ("id_generacion") REFERENCES "generacion"("id_generacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grupo" ADD CONSTRAINT "grupo_id_ciclo_fkey" FOREIGN KEY ("id_ciclo") REFERENCES "ciclo"("id_ciclo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grupo" ADD CONSTRAINT "grupo_id_plan_fkey" FOREIGN KEY ("id_plan") REFERENCES "plan_de_estudio"("id_plan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grupo" ADD CONSTRAINT "grupo_id_escuela_fkey" FOREIGN KEY ("id_escuela") REFERENCES "escuela"("id_escuela") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plan_departamento" ADD CONSTRAINT "plan_departamento_id_plan_fkey" FOREIGN KEY ("id_plan") REFERENCES "plan_de_estudio"("id_plan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plan_departamento" ADD CONSTRAINT "plan_departamento_id_departamento_fkey" FOREIGN KEY ("id_departamento") REFERENCES "departamento"("id_departamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_cambios" ADD CONSTRAINT "registro_cambios_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actividad" ADD CONSTRAINT "actividad_id_departamento_fkey" FOREIGN KEY ("id_departamento") REFERENCES "departamento"("id_departamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actividad" ADD CONSTRAINT "actividad_id_coordinador_fkey" FOREIGN KEY ("id_coordinador") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actividad" ADD CONSTRAINT "actividad_id_ciclo_fkey" FOREIGN KEY ("id_ciclo") REFERENCES "ciclo"("id_ciclo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_actividad" ADD CONSTRAINT "alumno_actividad_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_actividad" ADD CONSTRAINT "alumno_actividad_id_actividad_fkey" FOREIGN KEY ("id_actividad") REFERENCES "actividad"("id_actividad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_actividad" ADD CONSTRAINT "alumno_actividad_id_coordinador_fkey" FOREIGN KEY ("id_coordinador") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alumno_actividad" ADD CONSTRAINT "alumno_actividad_id_ciclo_fkey" FOREIGN KEY ("id_ciclo") REFERENCES "ciclo"("id_ciclo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActividadPremio" ADD CONSTRAINT "ActividadPremio_actividadId_fkey" FOREIGN KEY ("actividadId") REFERENCES "actividad"("id_actividad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GanadorActividad" ADD CONSTRAINT "GanadorActividad_actividadPremioId_fkey" FOREIGN KEY ("actividadPremioId") REFERENCES "ActividadPremio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GanadorActividad" ADD CONSTRAINT "GanadorActividad_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GanadorActividad" ADD CONSTRAINT "GanadorActividad_actividadId_actividad_fkey" FOREIGN KEY ("actividadId_actividad") REFERENCES "actividad"("id_actividad") ON DELETE SET NULL ON UPDATE CASCADE;
