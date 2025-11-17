import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const fase = await prisma.fase.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(fase);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const fase = await prisma.fase.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(fase);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.fase.delete({ where: { id: params.id } });
  return NextResponse.json({ message: "Fase eliminada" });
}
