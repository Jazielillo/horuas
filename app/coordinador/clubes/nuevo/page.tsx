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
import ClubForm from "../components/club-form";

interface PointRule {
  id: string;
  type: string;
  value: number;
  description: string;
}

const CoordinatorClubForm = () => {
  const isEditing = false;

  // Form state
  const [name, setName] = useState(isEditing ? "Club de Fútbol" : "");
  const [description, setDescription] = useState(
    isEditing ? "Entrenamientos y torneos de fútbol soccer" : ""
  );
  const [isActive, setIsActive] = useState(isEditing ? true : true);
  const [cycle, setCycle] = useState("2024-2025");
  const [pointRules, setPointRules] = useState<PointRule[]>(
    isEditing
      ? [
          {
            id: "1",
            type: "Fijo",
            value: 10,
            description: "Puntos por participación mensual",
          },
          {
            id: "2",
            type: "Por Asistencia",
            value: 5,
            description: "Puntos por cada asistencia a entrenamiento",
          },
        ]
      : []
  );

  const handleAddRule = () => {
    const newRule: PointRule = {
      id: Date.now().toString(),
      type: "Fijo",
      value: 0,
      description: "",
    };
    setPointRules([...pointRules, newRule]);
  };

  const handleRemoveRule = (id: string) => {
    setPointRules(pointRules.filter((rule) => rule.id !== id));
  };

  const handleRuleChange = (
    id: string,
    field: keyof PointRule,
    value: string | number
  ) => {
    setPointRules(
      pointRules.map((rule) =>
        rule.id === id ? { ...rule, [field]: value } : rule
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast({
        title: "Error",
        description: "El nombre del club es obligatorio",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: isEditing ? "Club actualizado" : "Club creado",
      description: `El club "${name}" ha sido ${
        isEditing ? "actualizado" : "creado"
      } exitosamente`,
    });

    // navigate("/coordinator/clubs");
  };

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
            {isEditing ? "Editar Club" : "Crear Nuevo Club"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isEditing
              ? "Modifica la información del club"
              : "Completa los datos para crear un nuevo club"}
          </p>
        </div>
      </div>

      <ClubForm></ClubForm>
    </div>
  );
};

export default CoordinatorClubForm;
