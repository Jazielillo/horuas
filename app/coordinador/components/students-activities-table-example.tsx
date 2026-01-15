// Ejemplo de uso del componente StudentsActivitiesTable
"use client";

import { useState } from "react";
import { StudentsActivitiesTable } from "./students-activities-table";
import { Activity, Alumno } from "@/app/models";

export function StudentsActivitiesTableExample() {
  // Estados
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState<Map<number, Set<number>>>(
    new Map()
  );

  // Datos de ejemplo - reemplaza con tus datos reales
  const students: Alumno[] = []; // Tus alumnos
  const activities: Activity[] = []; // Tus actividades

  // Filtrar estudiantes por búsqueda
  const filteredStudents = students.filter(
    (student) =>
      student.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.num_cuenta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle selección individual (alumno + actividad específica)
  const handleToggleStudentActivity = (
    studentId: number,
    activityId: number
  ) => {
    setSelectedIds((prev) => {
      const newMap = new Map(prev);
      const studentActivities = newMap.get(studentId) || new Set<number>();

      if (studentActivities.has(activityId)) {
        studentActivities.delete(activityId);
      } else {
        studentActivities.add(activityId);
      }

      if (studentActivities.size === 0) {
        newMap.delete(studentId);
      } else {
        newMap.set(studentId, studentActivities);
      }

      return newMap;
    });
  };

  // Toggle todas las actividades para un alumno
  const handleToggleAllActivitiesForStudent = (studentId: number) => {
    setSelectedIds((prev) => {
      const newMap = new Map(prev);
      const studentActivities = newMap.get(studentId) || new Set<number>();

      // Si ya tiene todas las actividades seleccionadas, las deseleccionamos
      if (studentActivities.size === activities.length) {
        newMap.delete(studentId);
      } else {
        // Si no, seleccionamos todas
        const allActivityIds = new Set(
          activities.map((a) => a.id_actividad)
        );
        newMap.set(studentId, allActivityIds);
      }

      return newMap;
    });
  };

  // Toggle una actividad para todos los alumnos
  const handleToggleActivityForAllStudents = (activityId: number) => {
    setSelectedIds((prev) => {
      const newMap = new Map(prev);

      // Verificar si todos los alumnos ya tienen esta actividad seleccionada
      const allStudentsHaveActivity = students.every((student) => {
        const studentActivities = newMap.get(student.id_usuario);
        return studentActivities?.has(activityId) ?? false;
      });

      students.forEach((student) => {
        const studentActivities =
          newMap.get(student.id_usuario) || new Set<number>();

        if (allStudentsHaveActivity) {
          // Si todos la tienen, la quitamos
          studentActivities.delete(activityId);
          if (studentActivities.size === 0) {
            newMap.delete(student.id_usuario);
          } else {
            newMap.set(student.id_usuario, studentActivities);
          }
        } else {
          // Si no todos la tienen, la agregamos
          studentActivities.add(activityId);
          newMap.set(student.id_usuario, studentActivities);
        }
      });

      return newMap;
    });
  };

  return (
    <div>
      <StudentsActivitiesTable
        students={filteredStudents}
        activities={activities}
        selectedIds={selectedIds}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onToggleStudentActivity={handleToggleStudentActivity}
        onToggleAllActivitiesForStudent={handleToggleAllActivitiesForStudent}
        onToggleActivityForAllStudents={handleToggleActivityForAllStudents}
        loading={false}
        isSingleStudent={false}
      />

      {/* Para debugging - ver selecciones */}
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">Selecciones actuales:</h3>
        <pre className="text-xs">
          {JSON.stringify(
            Array.from(selectedIds.entries()).map(([studentId, activityIds]) => ({
              studentId,
              activityIds: Array.from(activityIds),
            })),
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
}
