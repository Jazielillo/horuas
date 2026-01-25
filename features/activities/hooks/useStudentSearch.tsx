import { useState, useMemo } from 'react';

interface Student {
  id_usuario: number;
  nombre: string;
  num_cuenta: string;
  [key: string]: any;
}

export const useStudentSearch = (students: Student[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = useMemo(() => {
    if (!searchTerm.trim()) return students;

    const searchLower = searchTerm.toLowerCase();
    
    return students.filter((student) => {
      const nombreLower = student.nombre.toLowerCase();
      const cuentaStr = student.num_cuenta;

      return nombreLower.includes(searchLower) || cuentaStr.includes(searchLower);
    });
  }, [students, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredStudents,
  };
};