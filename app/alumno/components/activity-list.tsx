import { Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Activity } from "@/app/models";

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList = ({ activities }: ActivityListProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div
          key={activity.id_actividad}
          className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
        >
          <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="font-medium leading-tight">{activity.nombre}</h4>
              <Badge variant="secondary" className="shrink-0">
                +{activity.puntos} pts
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(activity.fecha || "").toLocaleDateString()}
              </span>
              <Badge variant="outline" className="text-xs">
                {activity.departamento}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;
