import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { getStudentPoints } from "../../utils/getPoints";
import { getGroup } from "../../utils/getGroup";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const groupId = searchParams.get("group");

  if (!groupId) {
    return NextResponse.json([], { status: 200 });
  }

  // Luego, buscamos alumnos del grupo que NO estén en esa lista
  const alumnos = await prisma.usuario.findMany({
    where: {
      id_grupo: parseInt(groupId, 10),
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

  const alumnosConGrupo = await Promise.all(
    alumnosConPuntos.map(async (alumno) => {
      const grupo = await getGroup(alumno.id_usuario);
      console.log("Grupo for alumno", alumno.id_usuario, "is", grupo);
      return { ...alumno, grupo };
    })
  );

  return NextResponse.json(alumnosConGrupo);
}
