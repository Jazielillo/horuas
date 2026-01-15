import { Calendar, Pencil, Trash2, Trophy } from "lucide-react";
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
      case 1: return "1er lugar";
      case 2: return "2do lugar";
      case 3: return "3er lugar";
      case 4: return "4to lugar";
      case 5: return "5to lugar";
      default: return "Participación";
    }
  };

  if (activities.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground border rounded-lg bg-muted/10">
        No se encontraron actividades.
      </div>
    );
  }

  return (
    <>
      {/* --- VISTA MÓVIL (Tarjetas) --- */}
      <div className="space-y-4 md:hidden">
        {activities.map((activity) => (
          <div
            key={activity.id_actividad}
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-3 dark:border-gray-800"
          >
            {/* Encabezado de la tarjeta */}
            <div className="flex justify-between items-start gap-2">
              <div>
                <h3 className="font-semibold text-lg leading-tight mb-1">
                  {activity.nombre}
                </h3>
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
              </div>
              {/* Puntos totales destacados */}
              <div className="text-right">
                <span className="block text-xl font-bold text-primary">
                  {activity.puntos_participacion + (activity.premio[0]?.puntos_otorgados ?? 0)}
                </span>
                <span className="text-xs text-muted-foreground">Pts Totales</span>
              </div>
            </div>

            <hr className="border-muted dark:border-gray-700" />

            {/* Detalles */}
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(activity.fecha.toString())}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground justify-end">
                <Badge variant="secondary" className="text-xs">{activity.ciclo}</Badge>
              </div>
              
              <div className="col-span-2 flex items-center justify-between mt-2 bg-muted/20 p-2 rounded">
                 <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                    <span className="font-medium">{getPremioLabel(activity.premio[0]?.lugar ?? 0)}</span>
                 </div>
                 <div className="text-right">
                    {activity.premio ? (
                      <span className="font-bold text-success text-xs">
                        +{activity.premio[0]?.puntos_otorgados ?? 0} pts extra
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-xs">0 pts extra</span>
                    )}
                 </div>
              </div>
            </div>

            {/* Acciones (Solo si seeOnly es true, respetando tu lógica original) */}
            {seeOnly && (
              <div className="flex items-center justify-end gap-2 pt-2 border-t mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => onEdit(activity)}
                >
                  <Pencil className="w-4 h-4 mr-2" />
                  Editar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-destructive/50 text-destructive hover:bg-destructive/10"
                  onClick={() => onDelete(activity.id_actividad!)}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Borrar
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* --- VISTA ESCRITORIO (Tabla original) --- */}
      <div className="hidden md:block rounded-lg border">
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
    </>
  );
};