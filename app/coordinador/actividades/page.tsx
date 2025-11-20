"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import ActivityForm from "@/app/components/forms/activity-form";
import { AllActivities } from "../components/all-activities";
import { getAllActivitiesAction } from "@/app/actions/activity-actions";

interface Activity {
  id_actividad: number;
  nombre: string;
  descripcion: string | null;
  fecha: Date;
  puntos: number;
}

const CoordinatorActivities = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<any>(null);

  // Mock data

  const handleCreateActivity = () => {
    toast({
      title: "Actividad creada",
      description: "La actividad se ha registrado exitosamente.",
    });
    setIsDialogOpen(false);
  };

  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await getAllActivitiesAction();
        setActivities(data);
      } catch (error) {
        console.error("Error loading activities:", error);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  const handleEditActivity = (activity: any) => {
    setEditingActivity(activity);
    setIsDialogOpen(true);
  };

  const handleDeleteActivity = (id: number) => {
    toast({
      title: "Actividad eliminada",
      description: "La actividad se ha eliminado correctamente.",
      variant: "destructive",
    });
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestión de Actividades</h1>
          <p className="text-muted-foreground">
            Crear y administrar actividades extracurriculares
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg" onClick={() => setEditingActivity(null)}>
              <Plus className="w-4 h-4 mr-2" />
              Nueva Actividad
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingActivity ? "Editar Actividad" : "Crear Nueva Actividad"}
              </DialogTitle>
              <DialogDescription>
                Complete los datos de la actividad extracurricular
              </DialogDescription>
            </DialogHeader>
            <ActivityForm onSuccess={handleCreateActivity}/>
          </DialogContent>
        </Dialog>
      </div>

      {/* Activities List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Actividades</CardTitle>
          {/* <CardDescription>
            {activities.length} actividades registradas
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <AllActivities
              activities={activities}
              handleEditActivity={handleEditActivity}
              handleDeleteActivity={handleDeleteActivity}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoordinatorActivities;
