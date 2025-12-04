"use client";
import { Spinner } from "@/components/ui/spinner";
import ProgressChart from "../components/progress-chart";
import { useAlumnoStore } from "@/store/use-alumno-store";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, CalendarDays, Clock, MapPin } from "lucide-react";
import { useActivityStore } from "@/store/use-activity-store";
import { Badge } from "@/components/ui/badge";
import { AllActivities } from "../coordinador/components/all-activities";

export const Student = () => {
  // Mock data - in production, this would come from API
  const { selectedAlumnoCompleto, loading } = useAlumnoStore();
  const {
    nextActivities,
    loadFutureActivities,
    loading: loadingActivities,
  } = useActivityStore();

  useEffect(() => {
    loadFutureActivities();
  }, [loadFutureActivities]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Mi Progreso</h1>
        {loading ? (
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <Spinner></Spinner>
            </div>
            <p>Cargando información del alumno...</p>
          </div>
        ) : (
          <div>
            <p className="text-lg">
              Bienvenido, {selectedAlumnoCompleto?.alumno.nombre}! | Grupo:{" "}
              {selectedAlumnoCompleto?.alumno.grupo}
            </p>
          </div>
        )}
      </div>

      {/* Progress Section */}
      <div className="space-y-4">
        {loading ? (
          <div className="flex gap-2"></div>
        ) : (
          <ProgressChart
            puntos_cultura={selectedAlumnoCompleto?.puntos.cultura ?? 0}
            puntos_deportes={selectedAlumnoCompleto?.puntos.deportes ?? 0}
          />
        )}
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Eventos Próximos</CardTitle>
              <CardDescription>No te pierdas estas actividades</CardDescription>
            </div>
            <CalendarDays className="w-5 h-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {loadingActivities ? (
              <div className="flex justify-center items-center flex-col gap-4 mt-20">
                <Spinner className="size-20 text-primary" />
              </div>
            ) : nextActivities && nextActivities.length > 0 ? (
              <AllActivities activities={nextActivities} viewOnly={true} />
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

export default Student;
