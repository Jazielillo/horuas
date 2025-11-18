import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { alumnoId, grupoId } = await req.json();

  const alumno = await prisma.usuario.update({
    where: { id_usuario: alumnoId },
    data: {
      id_grupo: grupoId || null,
      // id_generacion: faseId || null,
    },
  });

  return NextResponse.json(alumno);
}
