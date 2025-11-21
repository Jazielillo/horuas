import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const escuelas = await prisma.escuela.findMany();
  return NextResponse.json(escuelas);
}

export async function POST(req: Request) {
  const data = await req.json();
  const escuela = await prisma.escuela.create({ data });
  return NextResponse.json(escuela);
}
