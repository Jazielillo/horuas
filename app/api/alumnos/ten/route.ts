import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getStudentPoints } from "../../utils/getPoints";
import { getGroup } from "../../utils/getGroup";
export async function GET(_: any, { params }: any) {
  const alumnos = await prisma.usuario.findMany({
    take: 10,
    where: {
      activo: true,
      rol: "ALUMNO",
    },
    orderBy: {
      nombre: "asc",
    },
  });

  const alumnosConPuntos = await Promise.all(
    alumnos.map(async (alumno: { id_usuario: number }) => {
      const puntos = await getStudentPoints(alumno.id_usuario);
      return { ...alumno, puntos };
    })
  );

  const alumnosConGrupo = await Promise.all(
    alumnosConPuntos.map(async (alumno: { id_usuario: number }) => {
      const grupo = await getGroup(alumno.id_usuario);
      return { ...alumno, grupo };
    })
  );

  return NextResponse.json(alumnosConGrupo);
}
