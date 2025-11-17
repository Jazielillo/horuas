import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const registros = await prisma.alumnoActividad.findMany({
    include: {
      alumno: true,
      actividad: true,
      coordinador: true,
    },
  });

  return NextResponse.json(registros);
}

export async function POST(req: Request) {
  const data = await req.json();

  const registro = await prisma.alumnoActividad.create({
    data,
  });

  return NextResponse.json(registro);
}
