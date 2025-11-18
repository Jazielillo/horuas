import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const alumnos = await prisma.usuario.findMany({
    include: {
      grupo: true,
      generacion: true,
    },
  });

  return NextResponse.json(alumnos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const alumno = await prisma.usuario.create({ data });
  return NextResponse.json(alumno);
}
