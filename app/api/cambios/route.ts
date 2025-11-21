import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const cambios = await prisma.registroCambios.findMany({
    orderBy: { fecha: "desc" },
    include: {
      usuario: true,
    },
  });

  return NextResponse.json(cambios);
}

export async function POST(req: Request) {
  const data = await req.json();

  const registro = await prisma.registroCambios.create({
    data,
  });

  return NextResponse.json(registro);
}
