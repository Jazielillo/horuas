"use server";
import { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AlumnoSidebar } from "./components/alumno-sidebar";
import { cookies } from "next/headers";
import { decrypt } from "../../lib/session";

interface AlumnoLayoutProps {
  children: ReactNode;
}

const AlumnoLayout = async ({ children }: AlumnoLayoutProps) => {
  // const session = await verifySession();
  // const userRole = session?.role; // Assuming 'role' is part of the session object

  // useEffect(() => {
  //   if (userRole !== "ALUMNO") {
  //     redirect("/login");
  //   }
  // }, [userRole]);
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  const id_usuario = Number((session as any)?.id_usuario) || 0;
  console.log(id_usuario)

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AlumnoSidebar id_usuario={id_usuario} />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-card flex items-center px-6 gap-4">
            <SidebarTrigger />
            <div className="flex-1" />
          </header>
          <main className="flex-1 p-6 overflow-auto bg-muted/30">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AlumnoLayout;
