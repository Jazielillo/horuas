import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const grupos = await prisma.grupo.findMany({
    include: {
      generacion: true,
      ciclo: true,
    },
  });

  return NextResponse.json(grupos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const grupo = await prisma.grupo.create({ data });
  return NextResponse.json(grupo);
}
