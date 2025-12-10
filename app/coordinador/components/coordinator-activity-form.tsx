"use client";
import { ArrowLeft, Save, X, Plus, Trash2 } from "lucide-react";
import { ActivityForm } from "@/app/components/forms/activity-form";

import { useRouter } from "next/navigation"; // Ojo: en App router es next/navigation
import { Button } from "@/components/ui/button";
// ... tus otros imports

interface CoordinatorActivityFormProps {
  initialData?: any; // Aquí vendrá la actividad si estamos editando
}

const CoordinatorActivityForm = ({
  initialData,
}: CoordinatorActivityFormProps) => {
  const router = useRouter();

  // Si hay initialData, estamos editando. Si es undefined, estamos creando.
  const isEditing = !!initialData;

  const handleCancel = () => {
    router.back();
  };

  // Preparar los valores por defecto
  const defaultValues = {
    nombre: initialData?.nombre || "",
    descripcion: initialData?.descripcion || "",
    departamento: initialData?.departamento || "",
    // Formatear fecha solo si existe
    fecha_realizacion: initialData?.fecha
      ? new Date(initialData.fecha).toISOString().split("T")[0]
      : "",
    puntos_otorgados: initialData?.puntos_participacion || 0,
    premio: (initialData?.premio || []).map((p: any) => ({
      id: p.id,
      lugar: p.lugar ?? 0,
      puntos_otorgados: p.puntos_otorgados,
    })),
    enlace_participacion: initialData?.enlace_participacion || "",
    foto_url: initialData?.foto_url || "",
    actividad_grupal: initialData?.actividad_grupal || false,
    hora_actividad: initialData?.hora_actividad || "",
    ubicacion: initialData?.ubicacion || "",
    descripcion_promocion_alumnos:
      initialData?.descripcion_promocion_alumnos || "",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={handleCancel}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {isEditing
              ? `Editar: ${initialData.nombre}`
              : "Crear Nueva Actividad"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isEditing
              ? "Modifica la información de la actividad"
              : "Completa los datos para crear una nueva actividad"}
          </p>
        </div>
      </div>

      {/* Aquí pasas los valores procesados */}
      <ActivityForm initialData={defaultValues} isEditing={isEditing} />
    </div>
  );
};

export default CoordinatorActivityForm;
