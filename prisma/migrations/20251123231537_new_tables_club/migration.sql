-- CreateTable
CREATE TABLE "club" (
    "id_club" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "club_pkey" PRIMARY KEY ("id_club")
);

-- CreateTable
CREATE TABLE "club_regla" (
    "id_regla" SERIAL NOT NULL,
    "id_club" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "puntos" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "club_regla_pkey" PRIMARY KEY ("id_regla")
);

-- CreateTable
CREATE TABLE "club_miembro" (
    "id_miembro" SERIAL NOT NULL,
    "id_club" INTEGER NOT NULL,
    "id_alumno" INTEGER NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" TEXT NOT NULL DEFAULT 'ACTIVO',

    CONSTRAINT "club_miembro_pkey" PRIMARY KEY ("id_miembro")
);

-- CreateTable
CREATE TABLE "club_puntos_registro" (
    "id_registro" SERIAL NOT NULL,
    "id_club" INTEGER NOT NULL,
    "id_regla" INTEGER NOT NULL,
    "id_alumno" INTEGER NOT NULL,
    "puntos_otorgados" INTEGER NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_coordinador" INTEGER NOT NULL,

    CONSTRAINT "club_puntos_registro_pkey" PRIMARY KEY ("id_registro")
);

-- CreateIndex
CREATE UNIQUE INDEX "club_miembro_id_club_id_alumno_key" ON "club_miembro"("id_club", "id_alumno");

-- AddForeignKey
ALTER TABLE "club_regla" ADD CONSTRAINT "club_regla_id_club_fkey" FOREIGN KEY ("id_club") REFERENCES "club"("id_club") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "club_miembro" ADD CONSTRAINT "club_miembro_id_club_fkey" FOREIGN KEY ("id_club") REFERENCES "club"("id_club") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "club_miembro" ADD CONSTRAINT "club_miembro_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "club_puntos_registro" ADD CONSTRAINT "club_puntos_registro_id_club_fkey" FOREIGN KEY ("id_club") REFERENCES "club"("id_club") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "club_puntos_registro" ADD CONSTRAINT "club_puntos_registro_id_regla_fkey" FOREIGN KEY ("id_regla") REFERENCES "club_regla"("id_regla") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "club_puntos_registro" ADD CONSTRAINT "club_puntos_registro_id_alumno_fkey" FOREIGN KEY ("id_alumno") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "club_puntos_registro" ADD CONSTRAINT "club_puntos_registro_id_coordinador_fkey" FOREIGN KEY ("id_coordinador") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
