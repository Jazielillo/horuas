import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const ciclos = await prisma.ciclo.findMany();
  return NextResponse.json(ciclos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const ciclo = await prisma.ciclo.create({ data });
  return NextResponse.json(ciclo);
}
