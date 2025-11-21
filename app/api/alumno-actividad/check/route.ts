import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id_alumno = searchParams.get("alumno");
  const id_actividad = searchParams.get("actividad");
  if (!id_alumno || !id_actividad) {
    return NextResponse.json(
      { error: "id_alumno y id_actividad son requeridos" },
      { status: 400 }
    );
  }
  const registro = await prisma.alumnoActividad.findFirst({
    where: {
      id_alumno: parseInt(id_alumno),
      id_actividad: parseInt(id_actividad),
    },
  });
  console.log("Registro encontrado:", registro);
  return NextResponse.json(registro);
}
