"use client";
import { useContext, useState } from "react";
import { ArrowDownToDotIcon, Plus, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { AllActivities } from "../components/all-activities";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Departamento } from "@/prisma/generated/client/browser";
import { useActivitiesPage } from "@/features/activities/hooks/useActivitiesPage";
import CoordinatorContext from "../context/coordinator-context";

const CoordinatorActivities = () => {
  const { role } = useContext(CoordinatorContext);
  const [departamentSelected, setDepartamentSelected] =
    useState<Departamento | null>(null);

  const { toast } = useToast();

  const {
    activities,
    loading: loadingActivities,
    cicloSelected,
    ciclos,
    onlyClubs,
    setCicloSelected,
    setOnlyClubs,
  } = useActivitiesPage();

  const handleEditActivity = (activity: any) => {
    // setActivitySelected(activity);
  };

  const [activitieSearch, setActivitieSearch] = useState("");

  // 2. Variable que contiene SIEMPRE la lista filtrada
  const filteredActivites = activities.filter((activity) => {
    // Convertimos a minúsculas para que la búsqueda no sea sensible a mayúsculas
    const searchLower = activitieSearch.toLowerCase();
    const activitieName = activity.nombre.toLowerCase();

    // Retornamos true si el nombre O el número de cuenta coinciden
    return activitieName.includes(searchLower);
  });

  const handleDeleteActivity = (id: number) => {
    toast({
      title: "Actividad eliminada",
      description: "La actividad se ha eliminado correctamente.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestión de Actividades</h1>
          <p className="text-muted-foreground">
            Crear y administrar actividades extracurriculares
          </p>
        </div>
        {role === "COORDINADOR" && (
          <div className="flex gap-2">
            <Button
              asChild
              size="lg"
              className="bg-blue-900 hover:bg-primary text-white"
              onClick={() => {}}
            >
              <Link href="/coordinador/actividades/nuevo">
                <Plus className="w-4 h-4 mr-2" />
                Crear actividad
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Activities List */}

      <Card>
        <CardHeader>
          <CardTitle>Lista de Actividades</CardTitle>
          <CardDescription>
            Administra las actividades extracurriculares creadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Contenedor general */}
          <div className="grid grid-cols-1 gap-4 mb-3">
            {/* Buscador full width */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre"
                value={activitieSearch}
                onChange={(e) => setActivitieSearch(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Filtros */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                value={cicloSelected?.id_ciclo.toString() || ""}
                onValueChange={(cicloId) => {
                  const selected = ciclos?.find(
                    (ciclo) => ciclo.id_ciclo.toString() === cicloId,
                  );
                  if (selected) setCicloSelected(selected as any);
                }}
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Seleccionar ciclo" />
                </SelectTrigger>
                <SelectContent>
                  {ciclos?.map((ciclo) => (
                    <SelectItem
                      key={ciclo.id_ciclo}
                      value={ciclo.id_ciclo.toString()}
                    >
                      {ciclo.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Checkbox club */}
              <div className="flex items-center border border-input rounded-md px-3 py-2 bg-background space-x-2">
                <input
                  type="checkbox"
                  onChange={() => {
                    setOnlyClubs(!onlyClubs);
                  }}
                  className="w-4 h-4 cursor-pointer"
                />
                <Label className="text-sm text-muted-foreground">
                  ¿Es un club?
                </Label>
              </div>
            </div>
          </div>

          {(cicloSelected || departamentSelected) && (
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg mb-2">
              {cicloSelected && (
                <div className="text-sm flex items-center">
                  <span className="font-medium mr-1">Ciclo seleccionado:</span>
                  <span className="mr-2">{cicloSelected.nombre}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6"
                    onClick={() => setCicloSelected(null)}
                  >
                    Limpiar
                  </Button>
                </div>
              )}

              {departamentSelected && (
                <div className="text-sm flex items-center">
                  <span className="font-medium mr-1">
                    Departamento seleccionado:
                  </span>
                  <span className="mr-2">{departamentSelected.nombre}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6"
                    onClick={() => setDepartamentSelected(null)}
                  >
                    Limpiar
                  </Button>
                </div>
              )}
            </div>
          )}
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <ArrowDownToDotIcon className="h-4 w-4" />
              <span>Haz clic en una actividad para asignar puntos.</span>
            </div>
          </div>
          <div className="space-y-3">
            {loadingActivities ? (
              <div className="flex justify-center items-center flex-col gap-4 mt-20">
                <Spinner className="size-20 text-primary" />
              </div>
            ) : filteredActivites.length > 0 ? (
              <AllActivities
                activities={filteredActivites}
                handleEditActivity={handleEditActivity}
                handleDeleteActivity={handleDeleteActivity}
                viewOnly={role !== "COORDINADOR"}
                role={role}
              />
            ) : (
              <p className="text-center text-muted-foreground my-10">
                No se encontraron actividades.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoordinatorActivities;
