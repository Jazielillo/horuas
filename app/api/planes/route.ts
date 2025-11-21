import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const planes = await prisma.planDeEstudio.findMany();
  return NextResponse.json(planes);
}

export async function POST(req: Request) {
  const data = await req.json();
  const plan = await prisma.planDeEstudio.create({ data });
  return NextResponse.json(plan);
}
