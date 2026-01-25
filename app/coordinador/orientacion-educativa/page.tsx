"use client";
import { useActivityOrientationLoader } from "@/hooks/use-activity-loader";
import { useStudentSelection } from "@/hooks/use-student-selection";
import { usePointsAssignmentStore } from "@/lib/store/use-points-assignment-store";
import { act, useEffect, useState } from "react";
import { ActivityHeader } from "./components/header";
import { StudentsActivitiesTable } from "../components/students-activities-table";
import { LoadingStudentState } from "../components/empty-state";
import AssignPointsForm from "./components/assign-points-form";
import { buildSelectedIdsMap } from "./utils/utils";
import { toast } from "sonner";
import { fetchActivitiesModule } from "@/lib/actions/activity-actions";

const OrientacionEducativa = () => {
  // Store de Zustand
  const {
    selectedGroup,
    students,
    selectedStudentId,
    loadingStudents,
    submitting,
    reset,
    submitPointsAssignmentModules,
  } = usePointsAssignmentStore();

  // Hook para cargar la actividad
  const { activities: activityList, loading: isLoadingActivity } =
    useActivityOrientationLoader();

  const { filteredStudents, searchTerm, setSearchTerm } =
    useStudentSelection(students);

  const [selectedIds, setSelectedIds] = useState<Map<number, Set<number>>>(
    new Map(),
  );
  const [oldSelectedIds, setOldSelectedIds] = useState<
    Map<number, Set<number>>
  >(new Map());

  useEffect(() => {
    const loadSelections = async () => {
      const res = await fetchActivitiesModule({
        studentIds: students.map((s) => s.id_usuario),
        activityIds: activityList.map((a) => a.id_actividad),
      });

      const map = buildSelectedIdsMap(res);
      setSelectedIds(map);
      setOldSelectedIds(map);
    };

    if (students.length && activityList.length) {
      loadSelections();
    } else {
      console.log("No hay estudiantes o actividades para cargar selecciones");
    }
  }, [students]);

  // Hook para manejar selección de estudiantes

  const shouldShowTable = selectedGroup || selectedStudentId;
  // Estado local para premios y confirmación

  // Resetear estado al montar el componente
  useEffect(() => {
    reset();
  }, [reset]);


  // Toggle selección individual (alumno + actividad específica)
  const handleToggleStudentActivity = (
    studentId: number,
    activityId: number,
  ) => {
    setSelectedIds((prev) => {
      const newMap = new Map(prev);

      // 🔴 ANTES (problema):
      // const studentActivities = newMap.get(studentId) || new Set<number>();

      // ✅ AHORA (solución):
      const existingActivities = newMap.get(studentId);
      const studentActivities = existingActivities
        ? new Set(existingActivities) // Crear COPIA del Set existente
        : new Set<number>(); // O crear uno nuevo si no existe

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

      // ✅ Crear copia del Set
      const existingActivities = newMap.get(studentId);
      const studentActivities = existingActivities
        ? new Set(existingActivities)
        : new Set<number>();

      if (studentActivities.size === activityList.length) {
        newMap.delete(studentId);
      } else {
        const allActivityIds = new Set(activityList.map((a) => a.id_actividad));
        newMap.set(studentId, allActivityIds);
      }

      return newMap;
    });
  };

  // Toggle una actividad para todos los alumnos
  const handleToggleActivityForAllStudents = (activityId: number) => {
    setSelectedIds((prev) => {
      const newMap = new Map(prev);

      const allStudentsHaveActivity = filteredStudents.every((student) => {
        const studentActivities = newMap.get(student.id_usuario);
        return studentActivities?.has(activityId) ?? false;
      });

      filteredStudents.forEach((student) => {
        // ✅ Crear copia del Set
        const existingActivities = newMap.get(student.id_usuario);
        const studentActivities = existingActivities
          ? new Set(existingActivities)
          : new Set<number>();

        if (allStudentsHaveActivity) {
          studentActivities.delete(activityId);
          if (studentActivities.size === 0) {
            newMap.delete(student.id_usuario);
          } else {
            newMap.set(student.id_usuario, studentActivities);
          }
        } else {
          studentActivities.add(activityId);
          newMap.set(student.id_usuario, studentActivities);
        }
      });

      return newMap;
    });
  };

  // Función para comparar si los Maps son iguales
  const areMapsEqual = (
    map1: Map<number, Set<number>>,
    map2: Map<number, Set<number>>,
  ): boolean => {
    if (map1.size !== map2.size) return false;

    for (const [studentId, activities1] of map1) {
      const activities2 = map2.get(studentId);
      if (!activities2) return false;
      if (activities1.size !== activities2.size) return false;

      for (const activityId of activities1) {
        if (!activities2.has(activityId)) return false;
      }
    }

    return true;
  };

  const hasChanges = !areMapsEqual(selectedIds, oldSelectedIds);

  return (
    <div className="space-y-6">
      {/* Header con información de la actividad */}
      <ActivityHeader name="Orientación Educativa" />

      {/* Formulario de selección (Año, Grupo, Alumno) */}
      <AssignPointsForm />

      {/* Tabla de estudiantes */}
      {shouldShowTable && !loadingStudents && (
        <StudentsActivitiesTable
          students={filteredStudents}
          activities={activityList}
          selectedIds={selectedIds}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onToggleStudentActivity={handleToggleStudentActivity}
          onToggleAllActivitiesForStudent={handleToggleAllActivitiesForStudent}
          onToggleActivityForAllStudents={handleToggleActivityForAllStudents}
          loading={loadingStudents}
          isSingleStudent={!!selectedStudentId}
          disabled={!hasChanges || submitting}
          submitting={submitting}
          onAssign={async () => {
            const result = await submitPointsAssignmentModules(
              selectedIds,
              activityList.map((a) => a.id_actividad),
              filteredStudents.map((s) => s.id_usuario),
            );
            if (result?.ok) {
              setOldSelectedIds(new Map(selectedIds));
              toast.success("Cambios guardados correctamente");
            } else {
              toast.error("Error al guardar los cambios");
            }
          }}
        />
      )}

      {loadingStudents && <LoadingStudentState />}
    </div>
  );
};

export default OrientacionEducativa;
