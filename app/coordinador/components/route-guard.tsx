import { redirect } from "next/navigation";
import { getUserRole } from "@/lib/actions/auth";

interface RouteGuardProps {
  allowedRoles: string[];
  redirectTo?: string;
}

export async function RouteGuard({ allowedRoles, redirectTo = "/coordinador" }: RouteGuardProps) {
  const role = await getUserRole();
  
  if (!role || !allowedRoles.includes(role)) {
    redirect(redirectTo);
  }
  
  return null;
}
