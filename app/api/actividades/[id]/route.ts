import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const actividad = await prisma.actividad.findUnique({
    where: { id_actividad: params.id },
    include: {
      departamento: true,
      ciclo: true,
      coordinador: true,
    },
  });

  return NextResponse.json(actividad);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const actividad = await prisma.actividad.update({
    where: { id_actividad: params.id },
    data,
  });
  return NextResponse.json(actividad);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.actividad.delete({ where: { id_actividad: params.id } });
  return NextResponse.json({ message: "Actividad eliminada" });
}
