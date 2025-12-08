-- AlterEnum
ALTER TYPE "Rol" ADD VALUE 'COORDINADOR_AUXILIAR';

-- AlterTable
ALTER TABLE "actividad" ADD COLUMN     "actividad_grupal" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "enlace_participacion" TEXT,
ADD COLUMN     "foto_url" TEXT;
