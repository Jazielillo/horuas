"use client";
import { useState } from "react";
import { ArrowLeft, Save, X, Plus, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { ActivityForm } from "@/app/components/forms/activity-form";
// import ClubForm from "../components/club-form";

interface PointRule {
  id: string;
  type: string;
  value: number;
  description: string;
}

const CoordinatorActivityForm = () => {
  const isEditing = false;

  const handleCancel = () => {
    // navigate("/coordinator/clubs");
    window.history.back();
  };

  return (
    <div className="  space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={handleCancel}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {isEditing ? "Editar Actividad" : "Crear Nueva Actividad"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isEditing
              ? "Modifica la información de la actividad"
              : "Completa los datos para crear una nueva actividad"}
          </p>
        </div>
      </div>

      <ActivityForm></ActivityForm>
    </div>
  );
};

export default CoordinatorActivityForm;
