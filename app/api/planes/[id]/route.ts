import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: any) {
  const plan = await prisma.planDeEstudio.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(plan);
}

export async function PATCH(req: Request, { params }: any) {
  const data = await req.json();
  const plan = await prisma.planDeEstudio.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(plan);
}

export async function DELETE(_: any, { params }: any) {
  await prisma.planDeEstudio.delete({ where: { id: params.id } });
  return NextResponse.json({ message: "Plan eliminado" });
}
