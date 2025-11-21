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
];
const protectedAlumnoRoutes = ["/alumno", "/alumno/historial"];
const publicRoutes = ["/login", "/signup", "/"];

export default async function proxy(req: NextRequest) {
  console.log("Middleware ejecutado para la ruta:", req.nextUrl.pathname);
  const path = req.nextUrl.pathname;

  const cookie = (await cookies()).get("session")?.value;
  console.log("Cookie obtenida:", cookie);
  const session = await decrypt(cookie);
  console.log("Sesión decodificada:", session);

  const role = session?.role; // Asegúrate que tu sesión tenga "role"

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  console.log(isProtectedRoute && session?.id_usuario === undefined);
  // 1. Si no hay sesión y la ruta es protegida → login
  if (isProtectedRoute && session?.id_usuario === undefined) {
    console.log("Redirigiendo a login por ruta protegida sin sesión");
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 2. Si hay sesión y ruta es pública → mandar a su ruta según rol
  if (isPublicRoute && session?.id_usuario) {
    console.log(
      "Redirigiendo a ruta según rol por sesión activa en ruta pública"
    );
    if (role === "COORDINADOR") {
      return NextResponse.redirect(new URL("/coordinador/actividades", req.nextUrl));
    }
    console.log(role);
    if (role === "ALUMNO") {
      return NextResponse.redirect(new URL("/alumno", req.nextUrl));
    }
  }

  // 3. Evitar que un alumno entre a /coordinador y viceversa
  if (session?.id_usuario) {
    console.log(role);
    console.log("Verificando acceso según rol y ruta");
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
