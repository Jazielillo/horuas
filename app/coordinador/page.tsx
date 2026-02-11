import { redirect } from "next/navigation";
import { getUserRole } from "@/lib/actions/auth";

export default async function CoordinadorPage() {
  const role = await getUserRole();

  // Redirigir según el rol del coordinador
  switch (role) {
    case "COORDINADOR_ORIENTACION":
      redirect("/coordinador/orientacion-educativa");
    case "COORDINADOR_SERVICIO_SOCIAL":
      redirect("/coordinador/servicio-social");
    case "COORDINADOR":
    case "COORDINADOR_AUXILIAR":
    case "COORDINADOR_DEPORTES":
    case "COORDINADOR_CULTURA":
      redirect("/coordinador/actividades");
    default:
      redirect("/login");
  }
}
