import { ReactNode } from "react";
import { RouteGuard } from "../components/route-guard";

interface OrientacionEducativaLayoutProps {
  children: ReactNode;
}

export default async function OrientacionEducativaLayout({
  children,
}: OrientacionEducativaLayoutProps) {
  await RouteGuard({ 
    allowedRoles: ["COORDINADOR_ORIENTACION","COORDINADOR"],
    redirectTo: "/coordinador"
  });
  
  return <>{children}</>;
}
