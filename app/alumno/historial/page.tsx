"use client";
import { useEffect, useState } from "react";
import { Calendar, Filter, Download, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ActivityList from "../components/activity-list";
import { useAlumnoStore } from "@/store/use-alumno-store";

const StudentHistory = () => {
  const { loadActivitiesOfAlumno, activityList } = useAlumnoStore();

  useEffect(() => {
    loadActivitiesOfAlumno();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");
  const [filterMonth, setFilterMonth] = useState("all");

  // Mock data
  const allActivities = [
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
    {
      id: 5,
      name: "Torneo de Baloncesto",
      department: "Deportes",
      date: "2024-12-15",
      points: 15,
      status: "completed" as const,
    },
    {
      id: 6,
      name: "Festival de Música",
      department: "Cultura",
      date: "2024-12-10",
      points: 10,
      status: "completed" as const,
    },
    {
      id: 7,
      name: "Competencia de Natación",
      department: "Deportes",
      date: "2024-11-28",
      points: 12,
      status: "completed" as const,
    },
    {
      id: 8,
      name: "Exposición de Arte",
      department: "Cultura",
      date: "2024-11-20",
      points: 8,
      status: "completed" as const,
    },
    {
      id: 9,
      name: "Carrera Atlética",
      department: "Deportes",
      date: "2024-11-15",
      points: 10,
      status: "completed" as const,
    },
    {
      id: 10,
      name: "Debate Académico",
      department: "Cultura",
      date: "2024-11-08",
      points: 12,
      status: "completed" as const,
    },
  ];

  // Filter activities
  const filteredActivities = allActivities.filter((activity) => {
    const matchesSearch = activity.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDepartment =
      filterDepartment === "all" || activity.department === filterDepartment;

    let matchesMonth = true;
    if (filterMonth !== "all") {
      const activityDate = new Date(activity.date);
      const activityMonth = activityDate.toLocaleString("es-MX", {
        month: "long",
      });
      matchesMonth = activityMonth.toLowerCase() === filterMonth.toLowerCase();
    }

    return matchesSearch && matchesDepartment && matchesMonth;
  });

  const handleExport = () => {
    // In production, this would export to CSV or PDF
    console.log("Exporting history...");
  };

  const totalPoints = filteredActivities.reduce(
    (sum, activity) => sum + activity.points,
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Historial</h1>
        <p className="text-muted-foreground">
          Todas tus actividades completadas
        </p>
      </div>

      {/* Activities List */}
      <Card>
        <CardHeader>
          <CardTitle>Actividades ({activityList.length})</CardTitle>
          <CardDescription>
            {filterDepartment !== "all" &&
              `Filtrado por ${filterDepartment} • `}
            {filterMonth !== "all" && `${filterMonth} • `}
            {searchQuery && `Búsqueda: "${searchQuery}"`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredActivities.length > 0 ? (
            <ActivityList activities={activityList} />
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No se encontraron actividades con los filtros seleccionados
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentHistory;
