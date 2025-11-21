import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const nivel = url.searchParams.get("nivel"); // "1"|"2"|"3"

  const where: any = {
    activo: true,
  };
  if (nivel) where.nivel = parseInt(nivel);

  const grupos = await prisma.grupo.findMany({
    where,
    select: {
      id_grupo: true,
      nombre: true,
      nivel: true,
    },
    orderBy: { nombre: "asc" },
  });

  return NextResponse.json(grupos);
}
export async function POST(req: Request) {
  const data = await req.json();
  const grupo = await prisma.grupo.create({ data });
  return NextResponse.json(grupo);
}
