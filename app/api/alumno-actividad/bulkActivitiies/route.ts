import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      id_actividad,
      id_coordinador,
      id_ciclo,
      fecha_registro,
      alumnos
    } = await req.json();

    if (!Array.isArray(alumnos)) {
      return NextResponse.json(
        { error: "El campo 'alumnos' debe ser un arreglo" },
        { status: 400 }
      );
    }

    const resultados: any[] = [];

    for (const alumno of alumnos) {
      const { nombre, puntos } = alumno;

      // Buscar alumno por nombre exacto
      const user = await prisma.usuario.findFirst({
        where: { nombre: nombre }
      });

      if (!user) {
        resultados.push({
          nombre,
          error: "Usuario no encontrado"
        });
        continue; // no creamos registro
      }

      // Crear registro en alumnoActividad
      const registro = await prisma.alumnoActividad.create({
        data: {
          id_alumno: user.id_usuario,
          id_actividad,
          id_coordinador,
          id_ciclo,
          fecha_registro,
          puntos_otorgados: puntos
        }
      });

      resultados.push({
        nombre,
        id_alumno: user.id_usuario,
        registro
      });
    }

    return NextResponse.json(resultados, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error del servidor" },
      { status: 500 }
    );
  }
}
