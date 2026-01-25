"use client";
import Link from "next/link";
import { Calendar, FileText, Award, Heart, Briefcase } from "lucide-react";
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
import { LogOutButton } from "./log-out-button";
import { useState, useEffect } from "react";
import { useUserStore } from "@/lib/store/use-user-store";

type NavigationItem = {
  title: string;
  url: string;
  icon: React.ElementType;
  roles: string[];
};

const allNavigationItems: NavigationItem[] = [
  {
    title: "Actividades",
    url: "/coordinador/actividades",
    icon: Calendar,
    roles: [
      "COORDINADOR",
      "COORDINADOR_AUXILIAR",
      "COORDINADOR_DEPORTES",
      "COORDINADOR_CULTURA",
    ],
  },
  {
    title: "Consultas y Reportes",
    url: "/coordinador/consultar-reportes",
    icon: FileText,
    roles: [
      "COORDINADOR",
      "COORDINADOR_AUXILIAR",
      "COORDINADOR_DEPORTES",
      "COORDINADOR_CULTURA",
    ],
  },
  {
    title: "Orientación Educativa",
    url: "/coordinador/orientacion-educativa",
    icon: Heart,
    roles: ["COORDINADOR_ORIENTACION"],
  },
  {
    title: "Servicio Social",
    url: "/coordinador/servicio-social",
    icon: Briefcase,
    roles: ["COORDINADOR_SERVICIO_SOCIAL"],
  },
  // { title: "Gestión de Alumnos", url: "/coordinador/gestion-alumnos", icon: Users, roles: ["COORDINADOR"] },
];

export function CoordinatorSidebar({ role }: { role: string }) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);

  useEffect(() => {
    if (role) {
      const filteredItems = allNavigationItems.filter((item) =>
        item.roles.includes(role),
      );
      setNavigationItems(filteredItems);
    }
  }, [role]);

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="dark:bg-card">
        <div className="p-4 border-b border-sidebar-border h-16">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sidebar-primary  flex items-center justify-center">
                <Award className="w-5 h-5 text-sidebar-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-sidebar-foreground">
                  Coordinador
                </p>
                <p className="text-xs text-sidebar-foreground/70 truncate">
                  {role === "COORDINADOR_DEPORTES" && "Deportes"}
                  {role === "COORDINADOR_CULTURA" && "Cultura"}
                  {role === "COORDINADOR_ORIENTACION" && "Orientación"}
                  {role === "COORDINADOR_SERVICIO_SOCIAL" && "Servicio Social"}
                  {(role === "COORDINADOR" ||
                    role === "COORDINADOR_AUXILIAR") &&
                    "General"}
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
