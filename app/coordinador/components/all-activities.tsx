"use client";

import { useState } from "react";
import { Activity } from "@/lib/models";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useActivityStore } from "@/lib/store/use-activity-store";
import {
  Calendar,
  Edit,
  Guitar,
  Trash2,
  Trophy,
  Users,
  Volleyball,
  Clock,
  Plus,
} from "lucide-react";
import Link from "next/link";

interface AllActivitiesProps {
  activities: Activity[];
  handleEditActivity?: (activity: Activity) => void;
  handleDeleteActivity?: (id: number) => void;
  viewOnly?: boolean;
  role: string;
}

export function AllActivities({
  activities,
  handleEditActivity,
  handleDeleteActivity,
  viewOnly = false,
  role,
}: AllActivitiesProps) {

  // Estado para controlar la actividad seleccionada en el Modal
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null,
  );
  
  return (
    <>
      <div className="space-y-3">
        {activities.map((activity) => {
          const date = new Date(activity.fecha);

          const isSports = activity.departamento === "Deportes";
          const isClub = activity.actividad_grupal; // Tu nueva propiedad

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

                    <Badge className="bg-success/20 text-success hover:bg-success/30">
                      <Plus className="w-3 h-3" />
                      {activity.puntos_participacion} pts
                    </Badge>

                    {activity.hora_actividad != undefined && (
                      <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(
                          `2000-01-01 ${activity.hora_actividad}`,
                        ).toLocaleTimeString("es-MX", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </Badge>
                    )}

                    {activity.premio && activity.premio.length > 0 && (
                      <Badge className="bg-yellow-400/20 text-yellow-600 hover:bg-yellow-400/30 gap-1">
                        <Trophy className="w-3 h-3" />
                        {activity.premio.length}
                      </Badge>
                    )}

                    {!activity.actividad_grupal && (
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatFechaLarga(activity.fecha)}
                      </span>
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
                    onClick={() => {}}
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
    </>
  );
}

export function formatFechaLarga(fechaStr: string): string {
  const date = new Date(fechaStr + "T00:00:00"); // evita desfases por timezone
  const opciones: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // "12 de diciembre de 2025"
  let formateada = date.toLocaleDateString("es-MX", opciones);

  // Reemplazar "de 2025" por "del 2025"
  formateada = formateada.replace(" de ", " de ").replace(" del ", " del ");

  return formateada;
}
