import { Calendar, Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity } from "@/app/models/activity";

interface ActivitiesTableProps {
  activities: Activity[];
  onEdit: (activity: Activity) => void;
  onDelete: (id: number) => void;
  seeOnly?: boolean;
}

export const ActivitiesTable = ({
  activities,
  onEdit,
  onDelete,
  seeOnly = false,
}: ActivitiesTableProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getPremioLabel = (lugar?: number) => {
    switch (lugar) {
      case 1:
        return "1er lugar";
      case 2:
        return "2do lugar";
      case 3:
        return "3er lugar";
      case 4:
        return "4to lugar";
      case 5:
        return "5to lugar";
      default:
        return "Participación";
    }
  };

  if (activities.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No se encontraron actividades.
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Actividad</TableHead>
            <TableHead>Departamento</TableHead>
            <TableHead>Ciclo</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Premio</TableHead>
            <TableHead className="text-right">Pts Base</TableHead>
            <TableHead className="text-right">Total</TableHead>
            {seeOnly && <TableHead className="text-right">Acciones</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity.id_actividad}>
              <TableCell className="font-medium">{activity.nombre}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    activity.departamento === "Deportes"
                      ? "border-info text-info"
                      : "border-accent text-accent"
                  }
                >
                  {activity.departamento}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{activity.ciclo}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(activity.fecha.toString())}
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {getPremioLabel(activity.premio[0]?.lugar ?? 0)}
              </TableCell>
              <TableCell>
                {activity.premio ? (
                  <span className="font-bold text-success">
                    +{activity.premio[0]?.puntos_otorgados ?? 0} pts
                  </span>
                ) : (
                  <span className="text-muted-foreground text-sm">0 pts</span>
                )}
              </TableCell>
              <TableCell className="text-right text-primary font-bold">
                +{activity.puntos_participacion} pts
              </TableCell>
              <TableCell className="text-right text-primary font-bold">
                {activity.puntos_participacion +
                  (activity.premio[0]?.puntos_otorgados ?? 0)}{" "}
                pts
              </TableCell>
              {seeOnly && (
                <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(activity)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(activity.id_actividad!)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
