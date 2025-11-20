'use client';

import { Button } from "@/components/ui/button";
import { Calendar, Edit, Trash2 } from "lucide-react";

interface AllActivitiesProps {
  activities: any[];
  handleEditActivity: (activity: any) => void;
  handleDeleteActivity: (id: number) => void;
}

export function AllActivities({ 
  activities, 
  handleEditActivity, 
  handleDeleteActivity 
}: AllActivitiesProps) {
  return (
    <>
      {activities.map((activity) => (
        <div
          key={activity.id_actividad}
          className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
        >
          <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h4 className="font-semibold mb-1">{activity.nombre}</h4>
                <p className="text-sm text-muted-foreground">
                  {activity.descripcion}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleEditActivity(activity)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDeleteActivity(activity.id_actividad)}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}