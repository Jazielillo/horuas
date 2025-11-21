import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const registro = await prisma.alumnoActividad.findUnique({
    where: { id_alumno_actividad: params.id },
    include: {
      alumno: true,
      actividad: true,
      coordinador: true,
    },
  });
  return NextResponse.json(registro);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const registro = await prisma.alumnoActividad.update({
    where: { id_alumno_actividad: params.id },
    data,
  });
  return NextResponse.json(registro);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.alumnoActividad.delete({ where: { id_alumno_actividad: params.id } });
  return NextResponse.json({ message: "Registro eliminado" });
}
