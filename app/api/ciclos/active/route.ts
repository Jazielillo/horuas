import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const ciclo = await prisma.ciclo.findFirst({
    where: { activo: true },
  });
  return NextResponse.json(ciclo);
}
