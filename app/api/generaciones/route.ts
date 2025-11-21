import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const generaciones = await prisma.generacion.findMany();
  return NextResponse.json(generaciones);
}

export async function POST(req: Request) {
  const data = await req.json();
  const nueva = await prisma.generacion.create({ data });
  return NextResponse.json(nueva);
}
