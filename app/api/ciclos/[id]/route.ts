import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const ciclo = await prisma.ciclo.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(ciclo);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const ciclo = await prisma.ciclo.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(ciclo);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.ciclo.delete({ where: { id: params.id } });
  return NextResponse.json({ message: "Ciclo eliminado" });
}
