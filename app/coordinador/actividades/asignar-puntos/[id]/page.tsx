"use client";

import AssignPointsForm from "@/app/components/forms/assign-points-form";
import { ActivityHeader } from "@/app/coordinador/components/activity-header";
import { SummaryDetailsPoints } from "@/app/coordinador/components/assign-points/summary-details-points";
import {
  LoadingStudentState,
  NoSelectionState,
  StudentHasActivityState,
} from "@/app/coordinador/components/empty-state";
import { StudentsTable } from "@/app/coordinador/components/student-table";
import { ActivityPrize } from "@/app/models/activity";
import { useActivityLoader } from "@/hooks/use-activity-loader";
import { useStudentSelection } from "@/hooks/use-student-selection";
import { usePointsAssignmentStore } from "@/store/use-points-assignment-store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const CoordinatorAssign = () => {
  const { id } = useParams();

  // Store de Zustand
  const {
    students,
    selectedStudentId,
    selectedStudentIds,
    loadingStudents,
    submitting,
    setActivity,
    setSelectedStudents,
    submitPointsAssignment,
    reset,
  } = usePointsAssignmentStore();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  useEffect(() => {
    const activityId = Array.isArray(id)
      ? parseInt(id[0])
      : id
      ? parseInt(id as string)
      : null;
    setActivity(activityId);
  }, [id, setActivity]);

  const [studentHasActivity, setStudentHasActivity] = useState<boolean | null>(
    null
  );

  // Hook para cargar la actividad
  const { activitySelected, isLoading: isLoadingActivity } = useActivityLoader(
    Array.isArray(id) ? id[0] : id
  );

  // Hook para manejar selección de estudiantes
  const {
    filteredStudents,
    selectedStudents,
    searchTerm,
    setSearchTerm,
    toggleStudent,
    toggleAll,
    allSelected,
  } = useStudentSelection(students);

  // Estado local para premios y confirmación
  const [studentAwards, setStudentAwards] = useState<
    Record<number, ActivityPrize>
  >({});
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  // Handler para cambiar el premio de un estudiante
  const handleSetStudentAward = (
    studentId: number,
    prizeId: number,
    awardType: string,
    puntos_otorgados: number
  ) => {
    setStudentAwards((prev) => ({
      ...prev,
      [studentId]: {
        id: prizeId,
        lugar: awardType === "participation" ? null : parseInt(awardType),
        puntos_otorgados: puntos_otorgados,
      },
    }));
  };

  // Handler para asignar puntos
  const handleAssignPoints = async () => {
    try {
      setSelectedStudents(Array.from(selectedStudentIds));
      await submitPointsAssignment({
        date: new Date(),
        cycleId: 1,
        awards: studentAwards,
      });

      toast.success("Puntos asignados correctamente", {
        description: (
          <span className="text-primary">
            Se asignaron puntos a {selectedStudentIds.length} alumno(s)
          </span>
        ),
      });

      // Limpiar estados
      setStudentAwards({});
      setConfirmDialogOpen(false);
    } catch (error) {
      toast.error("Error al asignar puntos", {
        description: "Por favor intenta nuevamente",
      });
    }
  };

  // Handler para cancelar/volver
  const handleCancel = () => {
    window.history.back();
  };

  const selectedStudentsObjects = students.filter((s) =>
    selectedStudentIds.includes(s.id_usuario)
  );

  // // Determinar qué mostrar
  const shouldShowTable = students.length > 0 || selectedStudentId;

  return (
    <div className="space-y-6">
      {/* Header con información de la actividad */}
      <ActivityHeader activity={activitySelected} onBack={handleCancel} />

      {/* Formulario de selección (Año, Grupo, Alumno) */}
      <AssignPointsForm
        onValueChange={(hasActivity) => setStudentHasActivity(hasActivity)}
      />

      {/* Tabla de estudiantes */}
      {shouldShowTable && !studentHasActivity && (
        <StudentsTable
          students={filteredStudents}
          allStudents={students}
          selectedIds={new Set(selectedStudentIds)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onToggleStudent={toggleStudent}
          onToggleAll={toggleAll}
          allSelected={allSelected}
          activity={activitySelected!}
          studentAwards={studentAwards}
          onAwardChange={handleSetStudentAward}
          onAssign={() => setConfirmDialogOpen(true)}
          loading={loadingStudents}
          isSingleStudent={!!selectedStudentId}
        />
      )}

      {/* Estado: Alumno ya tiene actividad */}
      {studentHasActivity && <StudentHasActivityState />}

      {/* Estado: No hay selección */}
      {!shouldShowTable && !loadingStudents && <NoSelectionState />}

      {loadingStudents && <LoadingStudentState />}

      {/* Diálogo de confirmación */}
      <SummaryDetailsPoints
        open={confirmDialogOpen}
        onOpenChange={setConfirmDialogOpen}
        onConfirm={handleAssignPoints}
        selectedActivityData={activitySelected}
        selectedStudents={selectedStudents}
        students={selectedStudentsObjects}
        studentsAwards={studentAwards}
        loading={submitting}
      />
    </div>
  );
};

export default CoordinatorAssign;
