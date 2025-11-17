import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const alumnos = await prisma.alumno.findMany({
    include: {
      grupo: true,
      fase: true,
    },
  });

  return NextResponse.json(alumnos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const alumno = await prisma.alumno.create({ data });
  return NextResponse.json(alumno);
}
