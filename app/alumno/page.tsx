"use client";
import {
  Trophy,
  Target,
  Calendar,
  TrendingUp,
  CalendarDays,
  MapPin,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import ProgressChart from "../components/progress-chart";
import progressBg from "@/assets/progress-animated.jpg";
import { useAlumnoStore } from "@/store/use-alumno-store";

export const Student = () => {
  // Mock data - in production, this would come from API
  const { selectedAlumno } = useAlumnoStore();
  const studentData = {
    name: "María González López",
    accountNumber: "318123456",
    group: "3A",
    generation: "2024-2027",
    sports: {
      current: 65,
      required: 100,
      percentage: 65,
    },
    culture: {
      current: 42,
      required: 80,
      percentage: 52.5,
    },
    total: {
      current: 107,
      required: 180,
      percentage: 59.4,
    },
  };

  const recentActivities = [
    {
      id: 1,
      name: "Torneo de Fútbol",
      department: "Deportes",
      date: "2025-01-10",
      points: 15,
      status: "completed" as const,
    },
    {
      id: 2,
      name: "Obra de Teatro",
      department: "Cultura",
      date: "2025-01-08",
      points: 12,
      status: "completed" as const,
    },
    {
      id: 3,
      name: "Maratón Escolar",
      department: "Deportes",
      date: "2025-01-05",
      points: 10,
      status: "completed" as const,
    },
    {
      id: 4,
      name: "Concurso de Oratoria",
      department: "Cultura",
      date: "2024-12-20",
      points: 8,
      status: "completed" as const,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "Torneo de Baloncesto",
      department: "Deportes",
      date: "2025-01-25",
      time: "15:00",
      location: "Gimnasio Principal",
      points: 20,
    },
    {
      id: 2,
      name: "Festival de Música",
      department: "Cultura",
      date: "2025-01-28",
      time: "18:00",
      location: "Auditorio",
      points: 15,
    },
    {
      id: 3,
      name: "Competencia de Natación",
      department: "Deportes",
      date: "2025-02-02",
      time: "10:00",
      location: "Alberca Olímpica",
      points: 18,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Mi Progreso</h1>
        <p className="text-muted-foreground">
          {selectedAlumno?.nombre} • Grupo: {selectedAlumno?.grupo}
        </p>
      </div>

      {/* Progress Section */}
      <div className="space-y-4">
        <ProgressChart puntos_hoy={selectedAlumno?.puntos ?? 0} />
      </div>

      {/* Upcoming Events */}
      {/* <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Eventos Próximos</CardTitle>
              <CardDescription>No te pierdas estas actividades</CardDescription>
            </div>
            <CalendarDays className="w-5 h-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-medium leading-tight">{event.name}</h4>
                    <Badge variant="secondary" className="shrink-0">
                      +{event.points} pts
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(event.date).toLocaleDateString("es-MX", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs mt-2">
                    {event.department}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}

      
    </div>
  );
};

export default Student;
