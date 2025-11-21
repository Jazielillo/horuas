import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getStudentPoints } from "../utils/getPoints";
import { getGroup } from "../utils/getGroup";

export async function GET(_: any, { params }: any) {
  const id_usuario = Number(params.id);
  console.log("ID Usuario:", id_usuario);

  const alumno = await prisma.usuario.findUnique({
    where: {
      id_usuario: id_usuario,
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

export async function POST(req: Request) {
  const data = await req.json();
  const alumno = await prisma.usuario.create({ data });
  return NextResponse.json(alumno);
}
