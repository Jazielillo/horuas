// components/ActivityHeader.tsx

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar, 
  Award, 
  Trophy, 
  Volleyball, 
  Guitar,
  Users 
} from "lucide-react";
import { Activity } from "@/app/models";
import { formatFechaLarga } from "./all-activities";

interface ActivityHeaderProps {
  activity: Activity | null;
  onBack: () => void;
}

export const ActivityHeader = ({ activity, onBack }: ActivityHeaderProps) => {
  if (!activity) {
    return (
      <div className="flex flex-col gap-6 mb-8 bg-card p-4 rounded-lg shadow">
        <div className="flex items-start gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="mt-1 bg-secondary/50 hover:bg-secondary/80 shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1 space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">
              Cargando actividad...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  const isSports = activity.departamento === "Deportes";
  const isClub = activity.actividad_grupal;

  return (
    <div className="flex flex-col gap-6 mb-8 bg-card p-4 rounded-lg shadow">
      <div className="flex items-start gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="mt-1 bg-secondary/50 hover:bg-secondary/80 shrink-0"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>

        <div className="flex-1 space-y-1">
          {/* Breadcrumb / Título de la Acción */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            Asignar Puntos
            {isClub && (
              <span className="flex items-center gap-1 text-primary text-xs border border-primary/30 px-1.5 rounded-full">
                <Users className="w-3 h-3" /> Club
              </span>
            )}
          </p>

          {/* Título Principal */}
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            {isSports ? (
              <Volleyball className="w-8 h-8 text-info opacity-80 hidden sm:block" />
            ) : (
              <Guitar className="w-8 h-8 text-chart-5 opacity-80 hidden sm:block" />
            )}
            {activity.nombre}
          </h1>

          {/* Metadatos */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Fecha */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground border-r pr-3">
              <Calendar className="w-4 h-4" />
              {activity.fecha ? formatFechaLarga(activity.fecha) : "Fecha pendiente"}
            </div>
            
            {/* Puntos Base */}
            <Badge
              variant="secondary"
              className="bg-success/15 text-success hover:bg-success/25 gap-1.5 px-3 py-1 text-sm"
            >
              <Award className="w-4 h-4" />
              <span className="font-bold">{activity.puntos_participacion || 0}</span>
              Puntos base
            </Badge>

            {/* Premios disponibles */}
            {activity.premio && activity.premio.length > 0 && (
              <Badge
                variant="outline"
                className="border-yellow-500/50 text-yellow-600 gap-1.5 px-3 py-1"
              >
                <Trophy className="w-3 h-3" />
                {activity.premio.length} Premios disponibles
              </Badge>
            )}

            {/* Departamento */}
            <Badge variant="outline" className="text-muted-foreground">
              {activity.departamento}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};