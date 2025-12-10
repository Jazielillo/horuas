"use client";
import { Spinner } from "@/components/ui/spinner";
import { ProgressChart } from "../components/progress-chart";
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
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Mi Progreso</h1>

        {loading ? (
          <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-xl border">
            <Spinner className="text-primary" />
            <p className="text-muted-foreground">
              Cargando información del alumno...
            </p>
          </div>
        ) : (
          <div className="p-4 rounded-xl border bg-card shadow-sm flex items-center gap-4">
            {/* Avatar del alumno (iniciales) */}
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              {selectedAlumnoCompleto?.alumno.nombre?.charAt(0).toUpperCase()}
            </div>

            <div className="space-y-1">
              <p className="text-xl font-semibold">
                {selectedAlumnoCompleto?.alumno.nombre}
              </p>
              <p className="text-muted-foreground">
                Grupo:{" "}
                <span className="font-medium text-foreground">
                  {selectedAlumnoCompleto?.alumno.grupo}
                </span>
              </p>
            </div>
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
