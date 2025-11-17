import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const alumno = await prisma.alumno.findUnique({
    where: { id: params.id },
    include: {
      grupo: true,
      fase: true,
    },
  });
  return NextResponse.json(alumno);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const alumno = await prisma.alumno.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(alumno);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.alumno.delete({ where: { id: params.id } });
  return NextResponse.json({ message: "Alumno eliminado" });
}
