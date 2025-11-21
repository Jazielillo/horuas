import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const alumno = await prisma.usuario.createMany({ data });
  return NextResponse.json(alumno);
}
