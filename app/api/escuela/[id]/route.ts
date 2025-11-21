import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const escuela = await prisma.escuela.findUnique({
    where: { id_escuela: params.id },
  });
  return NextResponse.json(escuela);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const escuela = await prisma.escuela.update({
    where: { id_escuela: params.id },
    data,
  });
  return NextResponse.json(escuela);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.escuela.delete({ where: { id_escuela: params.id } });
  return NextResponse.json({ message: "Escuela eliminada" });
}
