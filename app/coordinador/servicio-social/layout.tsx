import { ReactNode } from "react";
import { RouteGuard } from "../components/route-guard";

interface ServicioSocialLayoutProps {
  children: ReactNode;
}

export default async function ServicioSocialLayout({
  children,
}: ServicioSocialLayoutProps) {
  await RouteGuard({ 
    allowedRoles: ["COORDINADOR_SERVICIO_SOCIAL"],
    redirectTo: "/coordinador"
  });
  
  return <>{children}</>;
}
