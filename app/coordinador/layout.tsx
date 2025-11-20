"use client";
import { ReactNode } from "react";
import {
  LayoutDashboard,
  Calendar,
  UserPlus,
  FileText,
  Users,
  LogOut,
  Award,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

interface CoordinatorLayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { title: "Dashboard", url: "/coordinator", icon: LayoutDashboard },
  { title: "Actividades", url: "/coordinador/actividades", icon: Calendar },
  { title: "Asignar Puntos", url: "/coordinador/asignar-puntos", icon: UserPlus },
  {
    title: "Consultas y Reportes",
    url: "/coordinador/consultar-reportes",
    icon: FileText,
  },
  // { title: "Gestión de Alumnos", url: "/coordinador/gestion-alumnos", icon: Users },
];

function CoordinatorSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const handleLogout = () => {
    // Implement logout logic here, e.g., clearing cookies or tokens
  };

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent>
        <div className="p-4 border-b border-sidebar-border h-16">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
                <Award className="w-5 h-5 text-sidebar-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-sidebar-foreground">
                  Coordinador
                </p>
                <p className="text-xs text-sidebar-foreground/70 truncate">
                  Deportes
                </p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
                <Award className="w-5 h-5 text-sidebar-primary-foreground" />
              </div>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Gestión</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="hover:bg-sidebar-accent"
                      // activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="w-4 h-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-sidebar-border">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <LogOut className="w-4 h-4" />
            {!isCollapsed && <span>Cerrar Sesión</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

const CoordinatorLayout = ({ children }: CoordinatorLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <CoordinatorSidebar />
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

export default CoordinatorLayout;
