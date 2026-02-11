import { ReactNode } from "react";
import { RouteGuard } from "../components/route-guard";

interface ActividadesLayoutProps {
  children: ReactNode;
}

export default async function ActividadesLayout({
  children,
}: ActividadesLayoutProps) {
  await RouteGuard({ 
    allowedRoles: [
      "COORDINADOR",
      "COORDINADOR_AUXILIAR",
      "COORDINADOR_DEPORTES",
      "COORDINADOR_CULTURA",
    ],
    redirectTo: "/coordinador"
  });
  
  return <>{children}</>;
}
