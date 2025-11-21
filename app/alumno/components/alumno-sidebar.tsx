"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
  useSidebar,
} from "@/components/ui/sidebar";
import { verifySession } from "@/lib/dal";
import { redirect } from "next/navigation";
import { useAlumnoStore } from "@/store/use-alumno-store";
import { useEffect } from "react";
import { LogOutButton } from "@/app/coordinador/components/log-out-button";
const navigationItems = [
  { title: "Mi progreso", url: "/alumno", icon: LayoutDashboard },
  { title: "Historial", url: "/alumno/historial", icon: Calendar },
  // { title: "Gestión de Alumnos", url: "/coordinador/gestion-alumnos", icon: Users },
];

export function AlumnoSidebar({ id_usuario }: { id_usuario?: number }) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const { loadAlumno } = useAlumnoStore();

  useEffect(() => {
    // Fetch or update alumno data if needed
    loadAlumno(id_usuario || 0);
  }, []);

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
                  Alumno
                </p>
                {/* <p className="text-xs text-sidebar-foreground/70 truncate">
                  Deportes
                </p> */}
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
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="hover:bg-sidebar-accent"
                      // activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="w-4 h-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-sidebar-border">
          {!isCollapsed ? <LogOutButton /> : <></>}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
