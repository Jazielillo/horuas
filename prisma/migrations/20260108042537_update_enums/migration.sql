-- AlterEnum
ALTER TYPE "ActividadTipo" ADD VALUE 'ESPECIAL';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Rol" ADD VALUE 'COORDINADOR_ORIENTACION';
ALTER TYPE "Rol" ADD VALUE 'COORDINADOR_SERVICIO_SOCIAL';
ALTER TYPE "Rol" ADD VALUE 'COORDINADOR_DEPORTES';
ALTER TYPE "Rol" ADD VALUE 'COORDINADOR_CULTURA';
