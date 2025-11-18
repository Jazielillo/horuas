import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const dep = await prisma.departamento.findUnique({
    where: { id_departamento: params.id },
  });
  return NextResponse.json(dep);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const dep = await prisma.departamento.update({
    where: { id_departamento: params.id },
    data,
  });
  return NextResponse.json(dep);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.departamento.delete({ where: { id_departamento: params.id } });
  return NextResponse.json({ message: "Departamento eliminado" });
}
