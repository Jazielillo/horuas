import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const departamentos = await prisma.planDepartamento.findMany();
  return NextResponse.json(departamentos);
}

export async function POST(req: Request) {
  const data = await req.json();
  const dep = await prisma.planDepartamento.create({ data });
  return NextResponse.json(dep);
}
