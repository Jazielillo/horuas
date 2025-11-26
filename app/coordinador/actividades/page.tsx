"use client";
import { useEffect, useState } from "react";
import { ArrowDownToDotIcon, Plus, TicketPlus } from "lucide-react";
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
import { AllActivities } from "../components/all-activities";
import { getAllActivitiesAction } from "@/app/actions/activity-actions";
import { useActivityStore } from "@/store/use-activity-store";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

interface Activity {
  id_actividad: number;
  nombre: string;
  descripcion: string | null;
  fecha: Date;
  puntos: number;
}

const CoordinatorActivities = () => {
  const { activityList, setActivitySelected, loadActivities } =
    useActivityStore();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TRUCO DE SENIOR:
    // Solo cargamos si la lista está vacía.
    // Así, si vas al detalle y vuelves, no se vuelve a disparar la petición.
    if (activityList.length === 0) {
      loadActivities().then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [loadActivities, activityList.length]);

  const handleEditActivity = (activity: any) => {
    setActivitySelected(activity);
  };

  const handleDeleteActivity = (id: number) => {
    toast({
      title: "Actividad eliminada",
      description: "La actividad se ha eliminado correctamente.",
      variant: "destructive",
    });
  };

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
        <div className="flex gap-2">
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Link href="/coordinador/actividades/asignar-puntos">
              <TicketPlus className="w-4 h-4 mr-2" />
              Asignar puntos
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-blue-900 hover:bg-primary text-white"
          >
            <Link href="/coordinador/actividades/nuevo">
              <Plus className="w-4 h-4 mr-2" />
              Crear actividad
            </Link>
          </Button>
          {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                onClick={() => setEditingActivity(null)}
                className="cursor-pointer"
              >
                <Plus className="w-4 h-4 mr-2 cursor-pointer" />
                Nueva Actividad
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingActivity
                    ? "Editar Actividad"
                    : "Crear Nueva Actividad"}
                </DialogTitle>
                <DialogDescription>
                  Complete los datos de la actividad extracurricular
                </DialogDescription>
              </DialogHeader>
              <ActivityForm onSuccess={handleCreateActivity} />
            </DialogContent>
          </Dialog> */}
        </div>
      </div>

      {/* Activities List */}
      {loading ? (
        <div className="flex justify-center items-center flex-col gap-4 mt-60">
          <Spinner className="size-20 text-primary" />
        </div>
      ) : (
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
                activities={activityList}
                handleEditActivity={handleEditActivity}
                handleDeleteActivity={handleDeleteActivity}
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CoordinatorActivities;
