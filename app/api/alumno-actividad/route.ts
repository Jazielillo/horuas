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
  try {
    const data = await req.json();
    const nuevoRegistro = await prisma.alumnoActividad.create({
      data,
    });
    return NextResponse.json(nuevoRegistro, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
