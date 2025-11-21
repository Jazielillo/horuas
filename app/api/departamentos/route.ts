import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const departamentos = await prisma.departamento.findMany();
  return NextResponse.json(departamentos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const dep = await prisma.departamento.create({ data });
  return NextResponse.json(dep);
}
