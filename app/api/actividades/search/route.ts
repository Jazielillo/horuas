import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(req: Request) {
  console.log("Search actividades API called");
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || "";
  const limit = parseInt(url.searchParams.get("limit") || "20");

  if (!q.trim()) return NextResponse.json([], { status: 200 });

  const actividades = await prisma.actividad.findMany({
    where: {
      nombre: { contains: q, mode: "insensitive" },
    },
    take: limit,
    select: {
      id_actividad: true,
      nombre: true,
      puntos: true,
    },
  });

  console.log(actividades);

  return NextResponse.json(actividades);
}
