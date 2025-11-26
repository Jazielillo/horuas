"use client";

import { Activity } from "@/app/models";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Edit,
  Guitar,
  Trash2,
  Trophy,
  Users,
  Volleyball,
} from "lucide-react";
import Link from "next/link";

interface AllActivitiesProps {
  activities: Activity[];
  handleEditActivity: (activity: Activity) => void;
  handleDeleteActivity: (id: number) => void;
}

export function AllActivities({
  activities,
  handleEditActivity,
  handleDeleteActivity,
}: AllActivitiesProps) {
  return (
    <>
      {activities.map((activity) => (
        // 1. El KEY va en el elemento más externo
        <div
          key={activity.id_actividad}
          className={`${
            activity.departamento === "Deportes"
              ? "border-info hover:bg-info/10" // Reducimos la opacidad del hover para sutileza
              : "border-chart-5 hover:bg-chart-5/10" // Aplicamos el color temático
          } flex items-start gap-4 p-4 rounded-lg border bg-card transition-colors my-3 relative group`}
        >
          {/* 2. Enlace que envuelve solo el área de contenido principal */}
          <Link
            href={`actividades/asignar-puntos/${activity.id_actividad}`}
            className="flex items-start gap-4 flex-1 min-w-0 cursor-pointer"
          >
            {/* === CAMBIO 1: ÍCONO Y FONDO TEMÁTICO === */}
            <div
              className={`${
                activity.departamento === "Deportes"
                  ? "bg-info/20 text-info"
                  : "bg-chart-5/20 text-chart-5"
              } shrink-0 w-12 h-12 rounded-lg flex items-center justify-center`}
            >
              {activity.departamento === "Deportes" ? (
                <Volleyball className="w-6 h-6" /> // El color del texto se aplica al ícono
              ) : (
                <Guitar className="w-6 h-6" /> // El color del texto se aplica al ícono
              )}
            </div>
            {/* ======================================== */}

            <div className="flex-1 min-w-0">
              <div className="mb-2">
                <h4 className="font-semibold mb-1">{activity.nombre}</h4>
                <p className="text-sm text-muted-foreground">
                  {activity.descripcion}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                {/* === CAMBIO 2: BADGE DEL DEPARTAMENTO CON COLOR TEMÁTICO === */}
                <Badge
                  className={`${
                    activity.departamento === "Deportes"
                      ? "bg-info/20 text-info hover:bg-info/30"
                      : "bg-chart-5/20 text-chart-5 hover:bg-chart-5/30"
                  }`}
                >
                  {activity.departamento}
                </Badge>
                {/* ========================================================== */}

                <span className="text-sm text-muted-foreground">
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
                {activity.premios && activity.premios.length > 0 && (
                  <Badge className="bg-yellow-400/20 text-yellow-600 hover:bg-yellow-400/30">
                    <Trophy className="w-4 h-4 inline-block" />
                  </Badge>
                )}
              </div>
            </div>
          </Link>

          {/* 3. Botones de acción FUERA del Link */}
          <div className="flex gap-2 shrink-0 z-10">
            <Button
              size="sm"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                handleEditActivity(activity);
              }}
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteActivity(activity.id_actividad);
              }}
            >
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
