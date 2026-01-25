"use client";
import { Spinner } from "@/components/ui/spinner";
import { useAlumnoStore } from "@/lib/store/use-alumno-store";
import { useEffect } from "react";
import { Calendar } from "lucide-react";
import { CategoryProgressCard } from "./components/category-card";
import { ActivityCard } from "./components/activity-card";
import { solicitarPermiso } from "../../lib/helpers/request-permission";
import { useFutureActivities } from "@/hooks/use-activity-loader";

export const Student = () => {
  const { selectedAlumnoCompleto, loading } = useAlumnoStore();
  const { activities, loading: loadingActivities } = useFutureActivities();

  useEffect(() => {
    solicitarPermiso();
  }, []);

  // Pantalla de carga inicial más elegante
  if (loading) {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center space-y-4">
        <Spinner className="w-10 h-10 text-primary animate-spin" />
        <p className="text-muted-foreground animate-pulse">
          Cargando tu perfil...
        </p>
      </div>
    );
  }

  const alumno = selectedAlumnoCompleto?.alumno;

  return (
    <div className="space-y-8 pb-10">
      {/* 1. Header Mejorado: Estilo Banner con Gradiente Sutil */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary/10 via-background to-background border p-6">
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Avatar Grande con iniciales */}
          <div className="h-20 w-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold shadow-lg">
            {alumno?.nombre?.charAt(0).toUpperCase()}
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">
              Hola, {alumno?.nombre?.split(" ")[0]}{" "}
              {alumno?.nombre?.split(" ")[1]} 👋
            </h1>
            <div className="flex flex-wrap gap-2 text-sm ">
              <span className="dark:bg-card px-2 py-1 rounded-md text-foreground font-medium">
                Grupo {alumno?.grupo}
              </span>
              <span className="flex items-center gap-1 dark:bg-card px-2 py-1 rounded-md text-foreground font-medium">
                Número de cuenta: {alumno?.num_cuenta || "----"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sección de Progreso (Grid) */}
      {/* Progress Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground/90">
          Progreso Global
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Skeletons simples si está cargando */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-64 bg-muted/20 animate-pulse rounded-xl border"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 snap-y snap-mandatory overflow-y-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:snap-none">
            <div className="snap-center snap-always">
              <CategoryProgressCard
                type="cultura"
                points={selectedAlumnoCompleto?.puntos.cultura ?? 0}
                // customGif="/images/cultura-icon.gif" <--- Opcional si no lo pones en el config
              />
            </div>
            <div className="snap-center snap-always">
              <CategoryProgressCard
                type="deportes"
                points={selectedAlumnoCompleto?.puntos.deportes ?? 0}
              />
            </div>
            <div className="snap-center snap-always">
              <CategoryProgressCard
                type="orientacion_educativa"
                points={
                  selectedAlumnoCompleto?.puntos.orientacion_educativa ?? 0
                }
              />
            </div>
            <div className="snap-center snap-always">
              <CategoryProgressCard
                type="servicio_social"
                points={selectedAlumnoCompleto?.puntos.servicio_social ?? 0}
              />
            </div>
          </div>
        )}
      </div>

      {/* 3. Eventos Próximos (Estilo Timeline o Lista limpia) */}
      <div className="w-full">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">
              Próximas Actividades
            </h2>
            {/* Aquí podrías poner un botón "Ver todo" */}
          </div>

          {loadingActivities ? (
            <div className="flex justify-center p-10">
              <Spinner />
            </div>
          ) : activities && activities.length > 0 ? (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity) => (
                // Tarjeta de actividad individual (Simplificada para el ejemplo)
                <ActivityCard
                  key={activity.id_actividad}
                  activity={activity}
                  href={`/alumno/detalle-actividad/${activity.id_actividad}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed rounded-xl bg-muted/30">
              <Calendar className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">
                No hay actividades próximas disponibles.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Student;
