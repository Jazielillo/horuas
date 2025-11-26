// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { getStudentPoints } from "../../utils/getPoints";
import { getGroup } from "../../utils/getGroup";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  console.log("Login API called");
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

    if (user.rol === "ALUMNO") {
      const alumno = await prisma.usuario.findUnique({
        where: {
          id_usuario: user.id_usuario,
        },
      });

      if (!alumno) {
        return NextResponse.json(
          { error: "Alumno no encontrado" },
          { status: 404 }
        );
      }

      const puntos = await getStudentPoints(alumno.id_usuario);
      const grupo = await getGroup(alumno.id_usuario);

      return NextResponse.json({
        meta: {
          ...alumno,
          puntos,
          grupo,
        },
        token,
        role: user.rol,
      });
    }

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
