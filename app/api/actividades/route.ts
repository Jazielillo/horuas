import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const actividades = await prisma.actividad.findMany({
    include: {
      departamento: true,
      ciclo: true,
      coordinador: true,
    },
  });
  return NextResponse.json(actividades);
}

export async function POST(req: Request) {
  const data = await req.json();
  const actividad = await prisma.actividad.create({ data });
  return NextResponse.json(actividad);
}
