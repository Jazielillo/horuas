-- AlterEnum
ALTER TYPE "ActividadTipo" ADD VALUE 'MIGRACION';

-- AlterTable
ALTER TABLE "alumno_actividad" ADD COLUMN     "puntos_otorgados" INTEGER;
