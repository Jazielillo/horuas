"use server";
import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CoordinatorSidebar } from "./components/coordinator_sidebar";
import { getUserRole } from "@/lib/actions/auth";
import { CoordinatorProvider } from "./provider/coordinator-provider";

interface CoordinatorLayoutProps {
  children: ReactNode;
}

const CoordinatorLayout = async ({ children }: CoordinatorLayoutProps) => {
  const role = (await getUserRole()) ?? "";
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <CoordinatorSidebar role={role ?? ""} />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-card flex items-center px-6 gap-4">
            <SidebarTrigger />
            <div className="flex-1" />
          </header>
          <main className="flex-1 p-6 overflow-auto bg-muted/30">
            <CoordinatorProvider role={role}>{children}</CoordinatorProvider>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CoordinatorLayout;
