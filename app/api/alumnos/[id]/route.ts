import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const alumno = await prisma.usuario.findUnique({
    where: { id_usuario: params.id },
    include: {
      grupo: true,
      generacion: true,
    },
  });
  return NextResponse.json(alumno);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const alumno = await prisma.usuario.update({
    where: { id_usuario: params.id },
    data,
  });
  return NextResponse.json(alumno);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.usuario.delete({ where: { id_usuario: params.id } });
  return NextResponse.json({ message: "Alumno eliminado" });
}
