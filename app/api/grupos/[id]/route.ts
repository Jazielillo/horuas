import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const grupo = await prisma.grupo.findUnique({
    where: { id_grupo: params.id },
    include: { generacion: true, ciclo: true },
  });
  return NextResponse.json(grupo);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const grupo = await prisma.grupo.update({
    where: { id_grupo: params.id },
    data,
  });
  return NextResponse.json(grupo);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.grupo.delete({ where: { id_grupo: params.id } });
  return NextResponse.json({ message: "Grupo eliminado" });
}
