import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const gen = await prisma.generacion.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(gen);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const gen = await prisma.generacion.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(gen);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.generacion.delete({ where: { id: params.id } });
  return NextResponse.json({ message: "Generación eliminada" });
}
