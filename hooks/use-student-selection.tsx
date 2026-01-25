// hooks/useStudentSelection.ts

import { Alumno } from "@/lib/models";
import { usePointsAssignmentStore } from "@/lib/store/use-points-assignment-store";
import { useState, useMemo, useEffect } from "react";

export const useStudentSelection = (students: Alumno[]) => {
  const { selectedStudentIds, toggleStudent } =
    usePointsAssignmentStore();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = useMemo(() => {
    if (!searchTerm.trim()) return students;
    const term = searchTerm.toLowerCase();
    return students.filter(
      (s) =>
        s.nombre.toLowerCase().includes(term) || s.num_cuenta.includes(term)
    );
  }, [students, searchTerm]);

  const allSelected =
    filteredStudents.length > 0 &&
    filteredStudents.every((s) => selectedStudentIds.includes(s.id_usuario));

  const toggleAll = () => {
    if (allSelected) {
      // limpiar selección
      filteredStudents.forEach((s) => toggleStudent(s.id_usuario));
    } else {
      filteredStudents.forEach((s) => toggleStudent(s.id_usuario));
    }
  };

  const selectedStudents = useMemo(
    () => students.filter((s) => selectedStudentIds.includes(s.id_usuario)),
    [students, selectedStudentIds]
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredStudents,
    selectedStudents,
    allSelected,
    toggleStudent,
    toggleAll,
  };
};
