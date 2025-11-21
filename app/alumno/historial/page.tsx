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
import ActivityList from "../components/activity-list";
import { useAlumnoStore } from "@/store/use-alumno-store";
import { Spinner } from "@/components/ui/spinner";

const StudentHistory = () => {
  const { loadActivitiesOfAlumno, activityList, selectedAlumno, loading } = useAlumnoStore();

  useEffect(() => {
    loadActivitiesOfAlumno();
  }, [selectedAlumno]);

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
      {loading ? (
        <div className="flex gap-2">
          <div className="flex justify-center items-center">
            <Spinner></Spinner>
          </div>
          <p>Cargando actividades...</p>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Actividades ({activityList.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <ActivityList activities={activityList} />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StudentHistory;
