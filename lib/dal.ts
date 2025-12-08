import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { cache } from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export type VerifiedSession = {
  isAuth: true;
  userId: number;
  role: string;
} | null;

export const verifySession = cache(async (): Promise<VerifiedSession> => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.id_usuario) {
    redirect("/login");
    return null; // unreachable but satisfies the type checker
  }

  return {
    isAuth: true,
    userId: session.id_usuario as number,
    role: session.role as string,
  };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await prisma.usuario.findUnique({
      where: { id_usuario: session.userId },
    });

    const user = data;

    return user;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
