import { bulkAssignPointsAction } from "@/app/actions/assign-points-action";
import {
  getStudents,
  getStudentsWithoutActivity,
} from "@/app/actions/students-actions";
import { Activity, Alumno, Group } from "@/app/models";
import { ActivityPrize } from "@/app/models/activity";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AssignmentState {
  // UI selections
  selectedYear: string;
  selectedGroup: Group | null;
  selectedStudent: Alumno | null;
  selectedStudents: Alumno[] | null; // Para selección múltiple
  studentHasActivity: boolean | null;

  // Loading states
  loading: boolean;
  loadingStudents: boolean;
  loadingActivities: boolean;

  // Data
  groups: Group[];
  studentsOfGroup: Alumno[];
  singleStudent: Alumno | null;
  activitiesOfStudent?: Activity[];

  // Actions (Setters simples)
  setYear: (year: string) => void;
  setGroup: (group: Group | null) => void;
  setStudent: (student: Alumno | null) => void;
  setStudents: (student: Alumno | null) => void; // Toggle selection
  setGroups: (groups: Group[]) => void;
  setStudentsOfGroup: (students: Alumno[]) => void;

  // Async Actions (Logic)
  // NOTA: Ahora piden activityId como parámetro
  loadGroupsByYear: (year: string) => Promise<void>;

  loadStudentsByGroup: (
    group: string,
    activityId?: number,
    giveWithActivities?: boolean
  ) => Promise<void>;

  loadStudentById: (id: string) => Promise<void>;

  assignPointsToStudents: (
    activityId: number, // <--- NUEVO PARÁMETRO
    points: number,
    date: Date,
    id_coordinador: number,
    id_ciclo: number,
    awards: Record<number, ActivityPrize>
  ) => Promise<void>;

  checkStudentActivity: (
    id_alumno: number,
    id_actividad: number
  ) => Promise<void>;

  resetState: () => void; // Importante para limpiar al salir de la página
}

export const usePointsAssignmentStore = create<AssignmentState>()(
  devtools((set, get) => ({
    selectedYear: "",
    selectedGroup: null,
    selectedStudent: null,
    selectedStudents: [], // Inicializar como array vacío es mejor que null
    studentHasActivity: null,
    loading: false,
    loadingStudents: false,
    loadingActivities: false,
    groups: [],
    studentsOfGroup: [],
    singleStudent: null,

    // --- Setters Simples ---
    setStudentsOfGroup: (students) => set({ selectedStudents: students }),
    setYear: (year) =>
      set({ selectedYear: year, selectedGroup: null, selectedStudent: null }),
    setGroup: (group) => set({ selectedGroup: group, selectedStudent: null }),
    setGroups: (groups) => set({ groups }),

    // --- Lógica de Selección de Estudiante ---
    setStudent: (student) => {
      set({ selectedStudent: student, selectedStudents: [] });
      // NOTA: Quitamos el checkStudentActivity automático aquí porque
      // no sabemos el ID de la actividad dentro del store.
      // Lo haremos en el useEffect del componente.
      set({ studentHasActivity: null });
    },

    setStudents: (student) => {
      if (!student) return;
      set((state) => {
        const existing = state.selectedStudents ?? [];
        const exists = existing.some(
          (s) => s.id_usuario === student.id_usuario
        );

        if (exists) {
          return {
            selectedStudents: existing.filter(
              (s) => s.id_usuario !== student.id_usuario
            ),
          };
        }
        return { selectedStudents: [...existing, student] };
      });
    },

    // --- Async Actions ---

    loadGroupsByYear: async (year) => {
      console.log("Loading groups for year:", year);
      const res = await fetch(`/api/grupos?nivel=${year}`);
      const data = await res.json();
      set({ groups: data });
    },

    loadStudentsByGroup: async (group, activityId, giveWithActivities) => {
      set({ loading: true });
      // Si mandamos activityId, el backend puede decirnos quién ya la tiene
      if (giveWithActivities) {
        const data = await getStudents({
          groupId: group,
        });
        set({ studentsOfGroup: data, loading: false });
      } else {
        const data = await getStudentsWithoutActivity({
          groupId: group,
          actividadId: activityId,
        });
        set({ studentsOfGroup: data, loading: false });
      }
    },

    loadStudentById: async (id) => {
      set({ loading: true });
      const res = await fetch(`/api/students/${id}`);
      const data = await res.json();
      set({ singleStudent: data, loading: false });
    },

    checkStudentActivity: async (id_alumno, id_actividad) => {
      try {
        const res = await fetch(
          `/api/alumno-actividad/check?alumno=${id_alumno}&actividad=${id_actividad}`
        );
        const data = await res.json();
        set({ studentHasActivity: !!data }); // Convierte a booleano real
      } catch (e) {
        console.error(e);
        set({ studentHasActivity: null });
      }
    },

    assignPointsToStudents: async (
      activityId,
      points,
      date,
      id_coordinador,
      id_ciclo,
      awards
    ) => {
      set({ loadingStudents: true });
      const { selectedStudents } = get();

      if (!selectedStudents || selectedStudents.length === 0) {
        console.error("Estudiantes no seleccionados");
        set({ loadingStudents: false });
        return;
      }

      console.log("Asignando puntos a estudiantes:", selectedStudents);
      console.log("Con premios:", awards);
      const payload = {
        id_actividad: activityId, // Usamos el parámetro
        estudiantes: selectedStudents.map((s) => s.id_usuario),
        points,
        date,
        id_coordinador,
        id_ciclo,
        awards,
      };

      console.log("Payload para asignar puntos:", payload);

      try {
        const res = await bulkAssignPointsAction(payload);

        if (res.ok) {
          // Limpiamos los seleccionados de la lista visual
          const removedIds = selectedStudents.map((s) => s.id_usuario);
          set((state) => ({
            studentsOfGroup: state.studentsOfGroup.filter(
              (s) => !removedIds.includes(s.id_usuario)
            ),
            selectedStudents: [],
          }));
        }
      } catch (error) {
        console.error("Error asignando puntos", error);
      } finally {
        set({ loadingStudents: false });
      }
    },

    // Útil para resetear todo cuando desmontas el componente
    resetState: () =>
      set({
        selectedYear: "",
        selectedGroup: null,
        selectedStudent: null,
        selectedStudents: [],
        studentsOfGroup: [],
      }),
  }))
);
