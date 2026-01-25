"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions/auth";
import { LogOut } from "lucide-react";

export function LogOutButton() {
  return (
    <form action={logout} className="w-full">
      <Button
        variant="ghost"
        type="submit"
        className="w-full justify-start text-sidebar-foreground bg-sidebar-primary hover:bg-sidebar-primary/60 cursor-pointer"
      >
        <LogOut className="w-4 h-4" />
        <span>Cerrar Sesión</span>
      </Button>
    </form>
  );
}
