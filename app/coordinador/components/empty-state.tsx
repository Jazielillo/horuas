// components/EmptyStates.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { UserPlus, AlertCircle } from "lucide-react";

export const NoSelectionState = () => {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <UserPlus className="w-12 h-12 text-muted-foreground mb-4" />
        <p className="text-lg font-medium text-center mb-2">
          Selecciona un grupo o alumno
        </p>
        <p className="text-sm text-muted-foreground text-center">
          Elige un grupo completo o busca un alumno individual para asignar puntos
        </p>
      </CardContent>
    </Card>
  );
};

export const StudentHasActivityState = () => {
  return (
    <Card className="border-dashed border-yellow-300 bg-yellow-50">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <AlertCircle className="w-12 h-12 text-yellow-600 mb-4" />
        <p className="text-lg font-medium text-center mb-2 text-yellow-900">
          El alumno ya tiene puntos asignados para esta actividad
        </p>
        <p className="text-sm text-yellow-700 text-center">
          Selecciona otro alumno o actividad para continuar
        </p>
      </CardContent>
    </Card>
  );
};

export const LoadingStudentState = () => {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <Spinner className="size-8"></Spinner>
        <p className="text-lg font-medium text-center mb-2">
          Cargando estudiantes...
        </p>
      </CardContent>
    </Card>
  );
}