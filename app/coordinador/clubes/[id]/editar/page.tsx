'use client';
import { useState } from "react";
import { ArrowLeft, Save, X, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

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
  const [description, setDescription] = useState(isEditing ? "Entrenamientos y torneos de fútbol soccer" : "");
  const [isActive, setIsActive] = useState(isEditing ? true : true);
  const [cycle, setCycle] = useState("2024-2025");
  const [pointRules, setPointRules] = useState<PointRule[]>(
    isEditing ? [
      { id: "1", type: "Fijo", value: 10, description: "Puntos por participación mensual" },
      { id: "2", type: "Por Asistencia", value: 5, description: "Puntos por cada asistencia a entrenamiento" }
    ] : []
  );

  const handleAddRule = () => {
    const newRule: PointRule = {
      id: Date.now().toString(),
      type: "Fijo",
      value: 0,
      description: ""
    };
    setPointRules([...pointRules, newRule]);
  };

  const handleRemoveRule = (id: string) => {
    setPointRules(pointRules.filter(rule => rule.id !== id));
  };

  const handleRuleChange = (id: string, field: keyof PointRule, value: string | number) => {
    setPointRules(pointRules.map(rule => 
      rule.id === id ? { ...rule, [field]: value } : rule
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Error",
        description: "El nombre del club es obligatorio",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: isEditing ? "Club actualizado" : "Club creado",
      description: `El club "${name}" ha sido ${isEditing ? "actualizado" : "creado"} exitosamente`,
    });

    // navigate("/coordinator/clubs");
  };

  const handleCancel = () => {
    // navigate("/coordinator/clubs"); 
    window.history.back();
  };

  return (
      <div className="max-w-4xl mx-auto space-y-6">
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
              {isEditing ? "Modifica la información del club" : "Completa los datos para crear un nuevo club"}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Información Básica</CardTitle>
              <CardDescription>
                Datos generales del club
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre del Club *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Club de Fútbol"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe las actividades y objetivos del club..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cycle">Ciclo Escolar</Label>
                  <Select value={cycle} onValueChange={setCycle}>
                    <SelectTrigger id="cycle">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-2025">2024-2025</SelectItem>
                      <SelectItem value="2023-2024">2023-2024</SelectItem>
                      <SelectItem value="2022-2023">2022-2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between space-y-2 pt-8">
                  <Label htmlFor="status" className="flex-1">Estado del Club</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {isActive ? "Activo" : "Inactivo"}
                    </span>
                    <Switch
                      id="status"
                      checked={isActive}
                      onCheckedChange={setIsActive}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Point Rules */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Reglas de Puntos</CardTitle>
                  <CardDescription>
                    Define cómo se asignan puntos en este club
                  </CardDescription>
                </div>
                <Button type="button" variant="outline" size="sm" onClick={handleAddRule}>
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar Regla
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {pointRules.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No hay reglas de puntos configuradas</p>
                  <p className="text-sm mt-1">Haz clic en "Agregar Regla" para crear una</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {pointRules.map((rule, index) => (
                    <div key={rule.id}>
                      {index > 0 && <Separator className="my-4" />}
                      <div className="space-y-4 p-4 border rounded-lg bg-muted/30">
                        <div className="flex items-center justify-between">
                          <Label className="text-base">Regla {index + 1}</Label>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveRule(rule.id)}
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Tipo de Regla</Label>
                            <Select
                              value={rule.type}
                              onValueChange={(value) => handleRuleChange(rule.id, "type", value)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Fijo">Fijo</SelectItem>
                                <SelectItem value="Por Ciclo">Por Ciclo</SelectItem>
                                <SelectItem value="Por Asistencia">Por Asistencia</SelectItem>
                                <SelectItem value="Por Evento">Por Evento</SelectItem>
                                <SelectItem value="Ninguno">Ninguno</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label>Valor de Puntos</Label>
                            <Input
                              type="number"
                              value={rule.value}
                              onChange={(e) => handleRuleChange(rule.id, "value", parseInt(e.target.value) || 0)}
                              min="0"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Descripción</Label>
                          <Input
                            value={rule.description}
                            onChange={(e) => handleRuleChange(rule.id, "description", e.target.value)}
                            placeholder="Ej: Puntos por participación mensual"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end gap-4 pb-6">
            <Button type="button" variant="outline" onClick={handleCancel}>
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" />
              {isEditing ? "Guardar Cambios" : "Crear Club"}
            </Button>
          </div>
        </form>
      </div>
  );
};

export default CoordinatorClubForm;
