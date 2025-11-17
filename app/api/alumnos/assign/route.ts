import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { alumnoId, grupoId, faseId } = await req.json();

  const alumno = await prisma.alumno.update({
    where: { id: alumnoId },
    data: {
      grupoId: grupoId || null,
      faseId: faseId || null,
    },
  });

  return NextResponse.json(alumno);
}
