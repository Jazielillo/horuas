import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getStudentPoints } from "../../utils/getPoints";
import { getGroup } from "../../utils/getGroup";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id_alumno = parseInt(searchParams.get("id_alumno") || "0");
  console.log("Received request for alumno ID:", id_alumno);

  const alumno = await prisma.usuario.findUnique({
    where: {
      id_usuario: id_alumno,
    },
  });

  if (!alumno) {
    return NextResponse.json(
      { error: "Alumno no encontrado" },
      { status: 404 }
    );
  }

  if (alumno.rol !== "ALUMNO") {
    return NextResponse.json({
      alumno,
    });
  }

  const puntos = await getStudentPoints(alumno.id_usuario);
  const grupo = await getGroup(alumno.id_usuario);

  return NextResponse.json({
    ...alumno,
    puntos,
    grupo,
  });
}
