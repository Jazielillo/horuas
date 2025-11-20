// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  try {
    const { num_cuenta, nip } = await req.json();
    

    const user = await prisma.usuario.findUnique({
      where: { num_cuenta },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 401 }
      );
    }

    
    if (nip !== user.nip) {
      return NextResponse.json({ error: "NIP incorrecto" }, { status: 401 });
    }

    const token = jwt.sign(
      {
        id: user.id_usuario,
        role: user.rol,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json({
      token,
      role: user.rol,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
