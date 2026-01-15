import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { Activity } from "@/app/models/activity";

type ActivityCardProps = {
  activity: Activity;
  href: string;
};

export function ActivityCard({ activity, href }: ActivityCardProps) {
  const router = useRouter();

  // Corrige el problema de timezone añadiendo T00:00:00 para evitar desfase de un día
  const date = new Date(activity.fecha + "T00:00:00");
  const day = date.getDate();
  const month = date.toLocaleString("es-MX", { month: "short" }).toUpperCase();

  return (
    <Card
      onClick={() => router.push(href)}
      className="group cursor-pointer hover:border-primary/50 transition-colors"
    >
      <CardContent className="p-4 flex gap-4">
        {/* Fecha */}
        <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-secondary border">
          <span className="text-xs font-semibold text-muted-foreground">
            {month}
          </span>
          <span className="text-xl font-bold text-primary">{day}</span>
        </div>

        {/* Contenido */}
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
            {activity.nombre}
          </h3>

          <p className="text-xs text-muted-foreground">
            {activity.departamento}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            {activity.hora_actividad && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {activity.hora_actividad}
              </div>
            )}

            {activity.ubicacion && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {activity.ubicacion}
              </div>
            )}

            {activity.actividad_grupal && (
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                Grupal
              </div>
            )}
          </div>

          {/* Badges */}
          <div className="pt-2 flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-green-50 dark:bg-green-950"
            >
              +{activity.puntos_participacion} pts
            </Badge>

            <Badge
              variant="outline"
              className={
                activity.departamento === "Deportes"
                  ? "bg-orange-50 dark:bg-orange-950"
                  : activity.departamento === "Cultura"
                  ? "bg-purple-50 dark:bg-purple-950"
                  : activity.departamento === "Orientación"
                  ? "bg-blue-50 dark:bg-blue-950"
                  : "bg-emerald-50 dark:bg-emerald-950"
              }
            >
              {activity.departamento}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
