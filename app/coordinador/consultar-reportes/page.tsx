"use client";
import { StudentsTableReadOnly } from "@/features/activities/components/student-table-readonly";
import { useStudentSearch } from "@/features/activities/hooks/useStudentSearch";

import AssignPointsForm from "../orientacion-educativa/components/assign-points-form";
import { usePointsAssignmentStore } from "@/lib/store/use-points-assignment-store";
import { useState, useEffect } from "react";
import { LoadingStudentState } from "../components/empty-state";
import { useAlumnoStore } from "@/lib/store/use-alumno-store";
const CoordinatorReports = () => {
  const { selectedGroup, students, selectedStudentId, loadingStudents, reset } =
    usePointsAssignmentStore();
  const { reset: resetAlumno } = useAlumnoStore();

  const [userRole, setUserRole] = useState<string | null>(null);

  // Reset al montar
  useEffect(() => {
    reset();
    resetAlumno();
  }, []);

  // Hook de búsqueda
  const { searchTerm, setSearchTerm, filteredStudents } =
    useStudentSearch(students);

  // Encontrar alumno seleccionado
  const selectedStudent = students.find(
    (s) => s.id_usuario === selectedStudentId,
  );

  // Determinar si mostrar tabla
  const shouldShowTable = selectedGroup || selectedStudent;

  // Generar título y descripción dinámicos
  const getTableTitle = () => {
    if (selectedStudent) return "Alumno Seleccionado";
    if (selectedGroup) return `Alumnos del Grupo ${selectedGroup.nombre}`;
    return "Alumnos";
  };

  const getTableDescription = () => {
    return "Información general de los alumnos";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Consultas y Reportes</h1>
          <p className="text-muted-foreground">
            Visualiza y descarga reportes de progreso de alumnos
          </p>
        </div>
      </div>

      {/* Formulario de selección */}
      <AssignPointsForm></AssignPointsForm>

      {/* Tabla de alumnos */}
      {shouldShowTable && !loadingStudents && (
        <StudentsTableReadOnly
          students={selectedStudent ? [selectedStudent] : students}
          filteredStudents={
            selectedStudent ? [selectedStudent] : filteredStudents
          }
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          loading={loadingStudents}
          title={getTableTitle()}
          description={getTableDescription()}
          userRole={userRole}
          showGroupColumn={!selectedGroup}
          isSingleStudent={!!selectedStudent}
        />
      )}

      {loadingStudents && <LoadingStudentState />}
    </div>
  );
};

export default CoordinatorReports;
