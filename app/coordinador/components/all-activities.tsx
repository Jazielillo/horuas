"use client";

import { useState } from "react";
import { Activity } from "@/app/models";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useActivityStore } from "@/store/use-activity-store";
import {
  Calendar,
  Edit,
  Guitar,
  Trash2,
  Trophy,
  Users,
  Volleyball,
  Sparkles,
  MapPin,
  ChevronsUp,
  Clock,
  Award,
} from "lucide-react";
import Link from "next/link";
import { DialogDescription } from "@radix-ui/react-dialog";

interface AllActivitiesProps {
  activities: Activity[];
  handleEditActivity?: (activity: Activity) => void;
  handleDeleteActivity?: (id: number) => void;
  viewOnly?: boolean;
}

// Función auxiliar para formatear lugares con iconos más visuales
const getPlaceConfig = (lugar: number) => {
  switch (lugar) {
    case 1:
      return {
        label: "1er Lugar",
        icon: "🥇",
        color: "text-yellow-500 bg-yellow-50 border-yellow-200",
      };
    case 2:
      return {
        label: "2do Lugar",
        icon: "🥈",
        color: "text-slate-500 bg-slate-50 border-slate-200",
      };
    case 3:
      return {
        label: "3er Lugar",
        icon: "🥉",
        color: "text-orange-500 bg-orange-50 border-orange-200",
      };
    default:
      return {
        label: `${lugar}° Lugar`,
        icon: "🏅",
        color: "text-blue-500 bg-blue-50 border-blue-200",
      };
  }
};

export function AllActivities({
  activities,
  handleEditActivity,
  handleDeleteActivity,
  viewOnly = false,
}: AllActivitiesProps) {
  const { setActivitySelected } = useActivityStore();

  // Estado para controlar la actividad seleccionada en el Modal
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );

  return (
    <>
      <div className="space-y-3">
        {activities.map((activity) => {
          const isSports = activity.departamento === "Deportes";
          const isClub = activity.actividad_grupal; // Tu nueva propiedad

          // Definimos los colores base dinámicamente
          const colorClass = isSports ? "info" : "chart-5";
          const hoverBg = isSports ? "hover:bg-info/10" : "hover:bg-chart-5/10";
          const borderColor = isSports ? "border-info" : "border-chart-5";

          // Estilo especial para el contenedor si es Club
          const cardStyle = isClub
            ? `${borderColor} border-dashed border-2 bg-secondary/5` // Club: Borde punteado y un poco más grueso
            : `${borderColor} border bg-card`; // Actividad normal: Borde sólido estándar
          return (
            <div
              key={activity.id_actividad}
              className={`${cardStyle} ${hoverBg} flex items-start gap-4 p-4 rounded-lg transition-colors relative group`}
            >
              {/* 2. Enlace condicional */}
              <Link
                href={
                  viewOnly
                    ? `/alumno/detalle-actividad/${activity.id_actividad}`
                    : `/coordinador/actividades/asignar-puntos/${activity.id_actividad}`
                }
                className={`flex items-start gap-4 flex-1 min-w-0 ${
                  viewOnly ? "cursor-pointer" : "cursor-pointer"
                }`}
              >
                {/* ÍCONO Y FONDO TEMÁTICO */}
                <div
                  className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center relative
          ${isSports ? "bg-info/20 text-info" : "bg-chart-5/20 text-chart-5"}
        `}
                >
                  {/* Si es Club, mostramos el ícono de usuarios pequeño encima o cambiamos el icono principal */}
                  {isSports ? (
                    <Volleyball className="w-6 h-6" />
                  ) : (
                    <Guitar className="w-6 h-6" />
                  )}

                  {/* INDICADOR VISUAL DE CLUB EN EL ICONO (Opcional, un puntito o badge mini) */}
                  {isClub && (
                    <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full p-0.5 border-2 border-background">
                      <Users className="w-3 h-3" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      {/* BADGE DE CLUB (NUEVO) */}
                      {isClub && (
                        <Badge
                          variant="outline"
                          className="border-primary text-primary gap-1 px-2 h-5"
                        >
                          <Users className="w-3 h-3" />
                          Club
                        </Badge>
                      )}
                      <h4 className="font-semibold line-clamp-1">
                        {activity.nombre}
                      </h4>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {activity.descripcion}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 items-center">
                    {/* BADGE DEL DEPARTAMENTO */}
                    <Badge
                      className={`${
                        isSports
                          ? "bg-info/20 text-info hover:bg-info/30"
                          : "bg-chart-5/20 text-chart-5 hover:bg-chart-5/30"
                      }`}
                    >
                      {activity.departamento}
                    </Badge>

                    {!activity.actividad_grupal && (
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(
                          activity?.fecha || new Date()
                        ).toLocaleDateString("es-MX", {
                          day: "numeric",
                          month: "short", // Cambié a short para ahorrar espacio si hay muchos badges
                        })}
                      </span>
                    )}

                    <Badge className="bg-success/20 text-success hover:bg-success/30">
                      {activity.puntos_participacion} pts
                    </Badge>

                    {activity.premio && activity.premio.length > 0 && (
                      <Badge className="bg-yellow-400/20 text-yellow-600 hover:bg-yellow-400/30 gap-1">
                        <Trophy className="w-3 h-3" />
                        {activity.premio.length}
                      </Badge>
                    )}
                  </div>
                </div>
              </Link>

              {/* 3. Botones de acción FUERA del Link */}
              {!viewOnly && (
                <div className="flex gap-1 shrink-0 z-10 flex-col sm:flex-row">
                  {/* Tip: Si el espacio es poco, flex-col ayuda */}
                  <Button
                    size="icon" // Cambié a size icon para que sea más compacto
                    variant="ghost"
                    className="h-8 w-8"
                    asChild
                    onClick={() => setActivitySelected(activity)}
                  >
                    <Link
                      href={`/coordinador/actividades/editar/${activity.id_actividad}`}
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteActivity?.(activity.id_actividad);
                    }}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* === MODAL DE DETALLES REDISEÑADO === */}
      {/* <Dialog
        open={!!selectedActivity}
        onOpenChange={(open) => !open && setSelectedActivity(null)}
      >
        <DialogContent>
          <DialogHeader className="text-center">
            <DialogTitle className="text-center">
              {selectedActivity?.nombre}
            </DialogTitle>
          </DialogHeader>

          {selectedActivity && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Departamento
                  </p>
                  <Badge variant="outline">
                    {selectedActivity.departamento}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Puntos por participación
                  </p>
                  <Badge variant="secondary" className="text-base">
                    +{selectedActivity.puntos_participacion} pts
                  </Badge>
                </div>
              </div>

              <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Fecha
                    </p>
                    <p className="font-medium">
                      {new Date(selectedActivity.fecha).toLocaleDateString(
                        "es-MX",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Descripción</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedActivity.descripcion}
                </p>
              </div>

              {selectedActivity?.premio &&
                selectedActivity?.premio.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Premios por Lugar</h4>
                    </div>
                    <div className="grid gap-3">
                      {selectedActivity.premio.map((award) => (
                        <div
                          key={award?.lugar ?? 0}
                          className="flex items-center justify-between p-3 rounded-lg border bg-card"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Award className="w-5 h-5 text-primary" />
                            </div>
                            <span className="font-medium">
                              {award?.lugar === 1 && "Primer Lugar"}
                              {award?.lugar === 2 && "Segundo Lugar"}
                              {award?.lugar === 3 && "Tercer Lugar"}
                              {award?.lugar === 4 && `Cuarto Lugar`}
                              {award?.lugar === 5 && `Quinto Lugar`}
                            </span>
                          </div>
                          <Badge variant="secondary" className="text-base">
                            +{award?.puntos_otorgados ?? 0} pts
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                      * Los puntos por lugar se otorgan además de los puntos por
                      participación
                    </p>
                  </div>
                )}
            </div>
          )}
        </DialogContent>
      </Dialog> */}
    </>
  );
}
