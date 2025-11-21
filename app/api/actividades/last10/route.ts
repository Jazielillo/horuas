import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const actividades = await prisma.actividad.findMany({
    take: 10,
    orderBy: {
      fecha: "desc",
    },
  });
  return NextResponse.json(actividades);
}
