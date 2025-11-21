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
    const {
      id_actividad,
      estudiantes,
      points,
      date,
      id_coordinador,
      id_ciclo,
    } = data;

    if (
      !id_actividad ||
      !Array.isArray(estudiantes) ||
      estudiantes.length === 0
    ) {
      return NextResponse.json(
        { error: "id_actividad y estudiantes son requeridos" },
        { status: 400 }
      );
    }

    // Buscar cuales ya están registrados para esa actividad
    const existentes = await prisma.alumnoActividad.findMany({
      where: {
        id_actividad,
        id_alumno: { in: estudiantes },
      },
      select: { id_alumno: true },
    });
    const existentesSet = new Set(existentes.map((e: { id_alumno: number }) => e.id_alumno));

    // Preparar los registros a crear (salteando los existentes)
    const toCreate = estudiantes
      .filter((id: number) => !existentesSet.has(id))
      .map((id_alumno: number) => ({
        id_alumno,
        id_actividad,
        ...(points !== undefined && { puntos_otorgados: points }),
        ...(date && { fecha_registro: new Date(date) }),
        ...(id_coordinador !== undefined && { id_coordinador }),
        ...(id_ciclo !== undefined && { id_ciclo }),
      }));

    if (toCreate.length === 0) {
      return NextResponse.json(
        {
          error: "Todos los estudiantes ya están registrados en esa actividad",
        },
        { status: 409 }
      );
    }

    // Crear los nuevos registros en bloque
    await prisma.alumnoActividad.createMany({ data: toCreate });

    // Recuperar los registros creados para devolver información completa
    const createdAlumnos = toCreate.map((t) => t.id_alumno);
    const registros = await prisma.alumnoActividad.findMany({
      where: {
        id_actividad,
        id_alumno: { in: createdAlumnos },
      },
      include: {
        alumno: true,
        actividad: true,
        coordinador: true,
      },
    });

    return NextResponse.json(
      {
        created: registros,
        skipped: existentes.map((e: { id_alumno: number }) => e.id_alumno),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
