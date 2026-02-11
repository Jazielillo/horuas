import { ReactNode } from "react";
import { RouteGuard } from "../components/route-guard";

interface ClubesLayoutProps {
  children: ReactNode;
}

export default async function ClubesLayout({
  children,
}: ClubesLayoutProps) {
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
