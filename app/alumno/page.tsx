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
import { CategoryProgressCard } from "./components/category-card";
import { ActivityCard } from "./components/activity-card";
import { solicitarPermiso } from "../helpers/request-permission";
import { onMessageListener } from "@/lib/firebase";

// export const Student = () => {
//   // Mock data - in production, this would come from API
//   const { selectedAlumnoCompleto, loading } = useAlumnoStore();
//   const {
//       setActivitySelected,
//     } = useActivityStore();
//   const {
//     nextActivities,
//     loadFutureActivities,
//     loading: loadingActivities,
//   } = useActivityStore();

//   useEffect(() => {
//     setActivitySelected(null);
//     loadFutureActivities();
//   }, [loadFutureActivities]);

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="space-y-3">
//         <h1 className="text-3xl font-bold">Mi Progreso</h1>

//         {loading ? (
//           <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-xl border">
//             <Spinner className="text-primary" />
//             <p className="text-muted-foreground">
//               Cargando información del alumno...
//             </p>
//           </div>
//         ) : (
//           <div className="p-4 rounded-xl border bg-card shadow-sm flex items-center gap-4">
//             {/* Avatar del alumno (iniciales) */}
//             <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
//               {selectedAlumnoCompleto?.alumno.nombre?.charAt(0).toUpperCase()}
//             </div>

//             <div className="space-y-1">
//               <p className="text-xl font-semibold">
//                 {selectedAlumnoCompleto?.alumno.nombre}
//               </p>
//               <p className="text-muted-foreground">
//                 Grupo:{" "}
//                 <span className="font-medium text-foreground">
//                   {selectedAlumnoCompleto?.alumno.grupo}
//                 </span>
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Progress Section */}
//       <div className="space-y-4">
//         {loading ? (
//           <div className="flex gap-2"></div>
//         ) : (
//           <ProgressChart
//             puntos_cultura={selectedAlumnoCompleto?.puntos.cultura ?? 0}
//             puntos_deportes={selectedAlumnoCompleto?.puntos.deportes ?? 0}
//             puntos_orientacion_educativa={selectedAlumnoCompleto?.puntos.orientacion_educativa ?? 0}
//             puntos_servicio_social={selectedAlumnoCompleto?.puntos.servicio_social ?? 0}
//           />
//         )}
//       </div>

//       {/* Upcoming Events */}
//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <div>
//               <CardTitle>Eventos Próximos</CardTitle>
//               <CardDescription>No te pierdas estas actividades</CardDescription>
//             </div>
//             <CalendarDays className="w-5 h-5 text-muted-foreground" />
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-3">
//             {loadingActivities ? (
//               <div className="flex justify-center items-center flex-col gap-4 mt-20">
//                 <Spinner className="size-20 text-primary" />
//               </div>
//             ) : nextActivities && nextActivities.length > 0 ? (
//               <AllActivities activities={nextActivities} viewOnly={true} />
//             ) : (
//               <p className="text-center text-muted-foreground my-10">
//                 No se encontraron actividades.
//               </p>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Student;

export const Student = () => {
  const { selectedAlumnoCompleto, loading } = useAlumnoStore();
  const {
    setActivitySelected,
    nextActivities,
    loadFutureActivities,
    loading: loadingActivities,
  } = useActivityStore();

  useEffect(() => {
    setActivitySelected(null);
    loadFutureActivities();
  }, [loadFutureActivities]);

  useEffect(() => {
    solicitarPermiso();
    onMessageListener((payload) => {
      console.log("Mensaje recibido en primer plano:", payload);
      alert(
        `Nueva notificación: ${payload.notification?.title || "Sin título"}`,
      );
    });
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
  const puntos = selectedAlumnoCompleto?.puntos;

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
              Hola, {alumno?.nombre?.split(" ")[0]} 👋
            </h1>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="bg-secondary px-2 py-1 rounded-md text-foreground font-medium">
                Grupo {alumno?.grupo}
              </span>
              <span className="flex items-center gap-1">
                Matrícula: {alumno?.id_usuario || "----"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sección de Progreso (Grid) */}
      {/* Progress Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground/90">
          Tu Tablero de Metas
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
          ) : nextActivities && nextActivities.length > 0 ? (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {nextActivities.map((activity) => (
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
      {/* 4. Columna lateral (Opcional): Resumen o Avisos */}
      {/* <div className="md:col-span-7 lg:col-span-2 space-y-4">
          <Card className="bg-primary text-primary-foreground border-none">
            <CardHeader>
              <CardTitle className="text-lg">¿Sabías que?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm opacity-90">
              Necesitas completar los 4 módulos al 100% antes de tu 6to semestre
              para liberar tu certificado sin retrasos.
            </CardContent>
          </Card>
        </div> */}
    </div>
  );
};

export default Student;
