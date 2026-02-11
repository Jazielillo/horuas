import { ReactNode } from "react";
import { RouteGuard } from "../components/route-guard";

interface ConsultarReportesLayoutProps {
  children: ReactNode;
}

export default async function ConsultarReportesLayout({
  children,
}: ConsultarReportesLayoutProps) {
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
