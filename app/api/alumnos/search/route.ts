import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getGroup } from "../../utils/getGroup";
import { getStudentPoints } from "../../utils/getPoints";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || "";
  const limit = parseInt(url.searchParams.get("limit") || "20");

  if (!q.trim()) return NextResponse.json([], { status: 200 });

  const alumnos = await prisma.usuario.findMany({
    where: {
      rol: "ALUMNO",
      OR: [
        { nombre: { contains: q, mode: "insensitive" } },
        { num_cuenta: { contains: q, mode: "insensitive" } },
      ],
    },
    take: limit,
    select: {
      id_usuario: true,
      nombre: true,
      num_cuenta: true,
      id_grupo: true,
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
