import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id_alumno = parseInt(searchParams.get("alumno") || "0");

  const actividades = await prisma.alumnoActividad.findMany({
    where: {
      id_alumno: id_alumno,
    },
    select: {
      puntos_otorgados: true,
      fecha_registro: true,
      id_actividad: true,
      actividad: {
        select: {
          nombre: true,
          descripcion: true,
        },
      },
    },
    orderBy: {
      fecha_registro: "desc",
    },
  });

  return NextResponse.json(
    actividades.map((item) => ({
      nombre: item.actividad.nombre,
      descripcion: item.actividad.descripcion,
      fecha: item.fecha_registro,
      puntos: item.puntos_otorgados,
      id_actividad: item.id_actividad,
      departamento: "Deportes",
    }))
  );
  // Transformamos el resultado para dejarlo como tú lo quieres
  return;
}
