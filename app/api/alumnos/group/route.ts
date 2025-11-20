import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getStudentPoints } from "../../utils/getPoints";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const groupId = searchParams.get("group");
  const actividadId = searchParams.get("actividad");

  if (!groupId) {
    return NextResponse.json([], { status: 200 });
  }

  // Primero, obtenemos los IDs de alumnos que YA tienen esta actividad
  const alumnosConActividad = await prisma.alumnoActividad.findMany({
    where: {
      id_actividad: actividadId ? parseInt(actividadId, 10) : undefined,
    },
    select: {
      id_alumno: true,
    },
  });

  const idsAlumnosExcluir = alumnosConActividad.map((a) => a.id_alumno);

  // Luego, buscamos alumnos del grupo que NO estén en esa lista
  const alumnos = await prisma.usuario.findMany({
    where: {
      id_grupo: parseInt(groupId, 10),
      id_usuario: {
        notIn: idsAlumnosExcluir,
      },
    },
    select: {
      id_usuario: true,
      nombre: true,
      num_cuenta: true,
    },
  });

  const alumnosConPuntos = await Promise.all(
    alumnos.map(async (alumno) => {
      const puntos = await getStudentPoints(alumno.id_usuario);
      return { ...alumno, puntos };
    })
  );

  return NextResponse.json(alumnosConPuntos);
}


