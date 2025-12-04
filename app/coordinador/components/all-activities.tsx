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
        {activities.map((activity) => (
          // 1. El KEY va en el elemento más externo
          <div
            key={activity.id_actividad}
            className={`${
              activity.departamento === "Deportes"
                ? "border-info hover:bg-info/10"
                : "border-chart-5 hover:bg-chart-5/10"
            } flex items-start gap-4 p-4 rounded-lg border bg-card transition-colors relative group`}
          >
            {/* 2. Enlace condicional */}
            <Link
              href={
                viewOnly
                  ? "#"
                  : `/coordinador/actividades/asignar-puntos/${activity.id_actividad}`
              }
              onClick={(e) => {
                // SI ESTAMOS EN MODO SOLO LECTURA, ABRIMOS EL MODAL Y NO NAVEGAMOS
                if (viewOnly) {
                  e.preventDefault();
                  setSelectedActivity(activity);
                }
              }}
              className={`flex items-start gap-4 flex-1 min-w-0 ${
                viewOnly ? "cursor-pointer" : "cursor-pointer"
              }`}
            >
              {/* ÍCONO Y FONDO TEMÁTICO */}
              <div
                className={`${
                  activity.departamento === "Deportes"
                    ? "bg-info/20 text-info"
                    : "bg-chart-5/20 text-chart-5"
                } shrink-0 w-12 h-12 rounded-lg flex items-center justify-center`}
              >
                {activity.departamento === "Deportes" ? (
                  <Volleyball className="w-6 h-6" />
                ) : (
                  <Guitar className="w-6 h-6" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="mb-2">
                  <h4 className="font-semibold mb-1">{activity.nombre}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {activity.descripcion}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  {/* BADGE DEL DEPARTAMENTO */}
                  <Badge
                    className={`${
                      activity.departamento === "Deportes"
                        ? "bg-info/20 text-info hover:bg-info/30"
                        : "bg-chart-5/20 text-chart-5 hover:bg-chart-5/30"
                    }`}
                  >
                    {activity.departamento}
                  </Badge>

                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(activity?.fecha || new Date()).toLocaleDateString(
                      "es-MX",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </span>

                  <Badge className="bg-success/20 text-success hover:bg-success/30">
                    {activity.puntos_participacion} puntos
                  </Badge>

                  {activity.premio && activity.premio.length > 0 && (
                    <Badge className="bg-yellow-400/20 text-yellow-600 hover:bg-yellow-400/30 gap-1">
                      <Trophy className="w-3 h-3" />
                      {activity.premio.length} Premios
                    </Badge>
                  )}
                </div>
              </div>
            </Link>

            {/* 3. Botones de acción FUERA del Link (Solo si NO es viewOnly) */}
            {!viewOnly && (
              <div className="flex gap-2 shrink-0 z-10">
                <Button
                  size="sm"
                  variant="ghost"
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
                  size="sm"
                  variant="ghost"
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
        ))}
      </div>

      {/* === MODAL DE DETALLES REDISEÑADO === */}
      <Dialog
        open={!!selectedActivity}
        onOpenChange={(open) => !open && setSelectedActivity(null)}
      >
        <DialogContent>
          
          <DialogHeader className="text-center">
            <DialogTitle className="text-center">{selectedActivity?.nombre}</DialogTitle>
          </DialogHeader>
          
          {selectedActivity && (
            <div className="space-y-6">
              {/* Basic Info */}
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

              {/* Date, Time, Location */}
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
                {/* <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Hora</p>
                      <p className="font-medium">{selectedActivity.hora}</p>
                    </div>
                  </div> */}
                {/* <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ubicación</p>
                    <p className="font-medium">{selectedEvent.location}</p>
                  </div>
                </div> */}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-semibold">Descripción</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedActivity.descripcion}
                </p>
              </div>

              {/* Awards Section */}
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
      </Dialog>
    </>
  );
}
