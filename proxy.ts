import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";

const protectedRoutes = [
  "/alumno",
  "/coordinador/actividades",
  "/coordinador/asignar-puntos",
  "/coordinador/consultar-reportes",
  "/coordinador",
  "/alumno/historial",
];

const protectedCoordinadorRoutes = [
  "/coordinador",
  "/coordinador/actividades",
  "/coordinador/asignar-puntos",
  "/coordinador/consultar-reportes",
  "/coordinador/orientacion-educativa",
  "/coordinador/servicio-social"
];
const protectedAlumnoRoutes = ["/alumno", "/alumno/historial"];
const publicRoutes = ["/login", "/signup", "/"];

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  

  const role = session?.role; // Asegúrate que tu sesión tenga "role"

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 1. Si no hay sesión y la ruta es protegida → login
  if (isProtectedRoute && session?.id_usuario === undefined) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 2. Si hay sesión y ruta es pública → mandar a su ruta según rol
  if (isPublicRoute && session?.id_usuario) {
    if (role === "COORDINADOR") {
      return NextResponse.redirect(new URL("/coordinador/actividades", req.nextUrl));
    }
    if (role === "ALUMNO") {
      return NextResponse.redirect(new URL("/alumno", req.nextUrl));
    }
  }

  // 3. Evitar que un alumno entre a /coordinador y viceversa
  if (session?.id_usuario) {
    if (role === "ALUMNO" && protectedCoordinadorRoutes.includes(path)) {
      return NextResponse.redirect(new URL("/alumno", req.nextUrl));
    }
    if (role === "COORDINADOR" && protectedAlumnoRoutes.includes(path)) {
      return NextResponse.redirect(new URL("/coordinador/actividades", req.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
