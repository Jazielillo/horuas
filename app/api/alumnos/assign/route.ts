import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { assignPointsFormRefined, assignPointsFullSchema } from "@/schemas/assign-points-schema";
import { assignPointsAction as assignPointsInternal } from "@/app/actions/assign-points-action";

export async function POST(req: Request) {
  const body = await req.json();
  // 1) validate form
  const check = assignPointsFormRefined.safeParse(body);
  if (!check.success) {
    return NextResponse.json({ error: "Validación fallida", details: check.error.flatten().fieldErrors }, { status: 400 });
  }

  // Call internal server-side action (which will fetch current user, ciclo, etc.)
  const result = await assignPointsInternal(body);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ count: result.count });
}
