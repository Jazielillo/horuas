import {
  bulkAssignPointsAction,
  bulkAssignPointsModuleAction,
} from "@/app/actions/assign-points-action";
import { getCurrentUserId } from "@/app/actions/auth";
import { getStudentsWithoutActivity } from "@/app/actions/students-actions";
import { Activity, Alumno, Group } from "@/app/models";
import { ActivityPrize } from "@/app/models/activity";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// interface AssignmentState {
//   // UI selections
//   selectedYear: string;
//   selectedGroup: Group | null;
//   selectedStudent: Alumno | null;
//   selectedStudents: Alumno[] | null; // Para selección múltiple
//   studentHasActivity: boolean | null;

//   // Loading states
//   loading: boolean;
//   loadingStudents: boolean;
//   loadingActivities: boolean;

//   // Data
//   groups: Group[];
//   studentsOfGroup: Alumno[];
//   singleStudent: Alumno | null;
//   activitiesOfStudent?: Activity[];

//   // Actions (Setters simples)
//   setYear: (year: string) => void;
//   setGroup: (group: Group | null) => void;
//   setStudent: (student: Alumno | null) => void;
//   setStudents: (student: Alumno | null) => void; // Toggle selection
//   setGroups: (groups: Group[]) => void;
//   setStudentsOfGroup: (students: Alumno[]) => void;

//   // Async Actions (Logic)
//   // NOTA: Ahora piden activityId como parámetro
//   loadGroupsByYear: (year: string) => Promise<void>;

//   loadStudentsByGroup: (
//     group: string,
//     activityId?: number,
//     giveWithActivities?: boolean
//   ) => Promise<void>;
//   loadStudentsByGroupModule: (
//     group: string,
//   ) => Promise<void>;

//   loadStudentById: (id: string) => Promise<void>;

//   assignPointsToStudents: (
//     activityId: number, // <--- NUEVO PARÁMETRO
//     points: number,
//     date: Date,
//     id_coordinador: number,
//     id_ciclo: number,
//     awards: Record<number, ActivityPrize>
//   ) => Promise<void>;

//   checkStudentActivity: (
//     id_alumno: number,
//     id_actividad: number
//   ) => Promise<void>;

//   resetState: () => void; // Importante para limpiar al salir de la página
// }

// export const usePointsAssignmentStore = create<AssignmentState>()(
//   devtools((set, get) => ({
//     selectedYear: "",
//     selectedGroup: null,
//     selectedStudent: null,
//     selectedStudents: [], // Inicializar como array vacío es mejor que null
//     studentHasActivity: null,
//     loading: false,
//     loadingStudents: false,
//     loadingActivities: false,
//     groups: [],
//     studentsOfGroup: [],
//     singleStudent: null,

//     // --- Setters Simples ---
//     setStudentsOfGroup: (students) => {
//       set({ selectedStudents: students });
//     },
//     setYear: (year) =>
//       set({ selectedYear: year, selectedGroup: null, selectedStudent: null }),
//     setGroup: (group) => set({ selectedGroup: group, selectedStudent: null }),
//     setGroups: (groups) => set({ groups }),

//     // --- Lógica de Selección de Estudiante ---
//     setStudent: (student) => {
//       set({ selectedStudent: student, selectedStudents: [] });
//       set({ studentHasActivity: null });
//     },

//     setStudents: (student) => {
//       if (!student) return;
//       set((state) => {
//         const existing = state.selectedStudents ?? [];
//         const exists = existing.some(
//           (s) => s.id_usuario === student.id_usuario
//         );

//         if (exists) {
//           return {
//             selectedStudents: existing.filter(
//               (s) => s.id_usuario !== student.id_usuario
//             ),
//           };
//         }
//         return { selectedStudents: [...existing, student] };
//       });
//     },

//     // --- Async Actions ---

//     loadGroupsByYear: async (year) => {
//       const res = await fetch(`/api/grupos?nivel=${year}`);
//       const data = await res.json();
//       set({ groups: data });
//     },

//     loadStudentsByGroup: async (group, activityId, giveWithActivities) => {
//       set({ loading: true });
//       // Si mandamos activityId, el backend puede decirnos quién ya la tiene
//       if (giveWithActivities) {
//         console.log("ENTRO AQUI 1")
//         const data = await getStudents({
//           groupId: group,
//         });
//         set({ studentsOfGroup: data, loading: false });
//       } else {
//         console.log("ENTRO AQUI 2")
//         const data = await getStudentsWithoutActivity({
//           groupId: group,
//           actividadId: activityId,
//         });
//         set({ studentsOfGroup: data, loading: false });
//       }
//     },

//     loadStudentsByGroupModule: async (group) => {
//       set({ loading: true });

//     },

//     loadStudentById: async (id) => {
//       set({ loading: true });
//       const res = await fetch(`/api/students/${id}`);
//       const data = await res.json();
//       set({ singleStudent: data, loading: false });
//     },

//     checkStudentActivity: async (id_alumno, id_actividad) => {
//       try {
//         const res = await fetch(
//           `/api/alumno-actividad/check?alumno=${id_alumno}&actividad=${id_actividad}`
//         );
//         const data = await res.json();
//         set({ studentHasActivity: !!data }); // Convierte a booleano real
//       } catch (e) {
//         console.error(e);
//         set({ studentHasActivity: null });
//       }
//     },

//     assignPointsToStudents: async (
//       activityId,
//       points,
//       date,
//       id_ciclo,
//       awards
//     ) => {
//       set({ loadingStudents: true });
//       const { selectedStudents } = get();

//       if (!selectedStudents || selectedStudents.length === 0) {
//         console.error("Estudiantes no seleccionados");
//         set({ loadingStudents: false });
//         return;
//       }
//       const payload = {
//         id_actividad: activityId, // Usamos el parámetro
//         estudiantes: selectedStudents.map((s) => s.id_usuario),
//         points,
//         date,
//         id_coordinador: (await getCurrentUserId()) ?? 0,
//         id_ciclo,
//         awards,
//       };

//       console.log("Payload para asignar puntos:", payload);

//       try {
//         const res = await bulkAssignPointsAction(payload);

//         if (res.ok) {
//           // Limpiamos los seleccionados de la lista visual
//           const removedIds = selectedStudents.map((s) => s.id_usuario);
//           set((state) => ({
//             studentsOfGroup: state.studentsOfGroup.filter(
//               (s) => !removedIds.includes(s.id_usuario)
//             ),
//             selectedStudents: [],
//           }));
//         }
//       } catch (error) {
//         console.error("Error asignando puntos", error);
//       } finally {
//         set({ loadingStudents: false });
//       }
//     },

//     // Útil para resetear todo cuando desmontas el componente
//     resetState: () =>
//       set({
//         selectedYear: "",
//         selectedGroup: null,
//         selectedStudent: null,
//         selectedStudents: [],
//         studentsOfGroup: [],
//       }),
//   }))
// );

interface AssignmentState {
  // ======================
  // CONTEXTO DEL FLUJO
  // ======================
  activityId: number | null;
  selectedIds: Map<number, Set<number>>;

  // ======================
  // SELECCIÓN (UI STATE)
  // ======================
  selectedYear: string;
  selectedGroup: Group | null;
  selectedStudentId: number | null;
  selectedStudentIds: number[]; // SOLO IDS

  // ======================
  // DATA
  // ======================
  groups: Group[];
  students: Alumno[];

  // ======================
  // UI / STATUS
  // ======================
  loadingGroups: boolean;
  loadingStudents: boolean;
  submitting: boolean;

  // ======================
  // ACTIONS
  // ======================
  setActivity(id: number | null): void;
  setSelectedIds(ids: Map<number, Set<number>>): void;
  setLoadingStudents(loading: boolean): void;
  setYear(year: string): void;
  setGroup(group: Group | null): void;
  setSingleStudent(id: number | null): void;
  setSelectedStudents(ids: number[]): void;
  toggleStudent(id: number): void;
  setStudents(students: Alumno[]): void;

  loadGroupsByYear(year: string): Promise<void>;
  loadStudentsByGroup(groupId: string): Promise<void>;
  loadSingleStudent(student: Alumno): void;

  submitPointsAssignment(payload: {
    date: Date;
    cycleId: number;
    awards: Record<number, ActivityPrize>;
  }): Promise<void>;

  submitPointsAssignmentModules(
    selectedIds: Map<number, Set<number>>,
    activitiesId: number[],
    studentsIds: number[]
  ): Promise<{ ok: boolean }>;

  reset(): void;
}

export const usePointsAssignmentStore = create<AssignmentState>()(
  devtools((set, get) => ({
    // ======================
    // INITIAL STATE
    // ======================
    activityId: null,

    selectedYear: "",
    selectedGroup: null,
    selectedStudentId: null,
    selectedStudentIds: [],

    groups: [],
    students: [],

    loadingGroups: false,
    loadingStudents: false,
    submitting: false,

    // ======================
    // SETTERS
    // ======================
    setActivity: (id) => set({ activityId: id }),

    setYear: (year) =>
      set({
        selectedYear: year,
        selectedGroup: null,
        selectedStudentId: null,
        selectedStudentIds: [],
        students: [],
      }),

    setGroup: (group) =>
      set({
        selectedGroup: group,
        selectedStudentId: null,
        selectedStudentIds: [],
      }),

    setSingleStudent: (id) =>
      set({
        selectedStudentId: id,
        selectedStudentIds: id ? [id] : [],
      }),

    setSelectedStudents: (ids) => set({ selectedStudentIds: ids }),

    setStudents: (students) => set({ students }),

    setLoadingStudents: (loading) => set({ loadingStudents: loading }),

    toggleStudent: (id) =>
      set((state) => ({
        selectedStudentIds: state.selectedStudentIds.includes(id)
          ? state.selectedStudentIds.filter((s) => s !== id)
          : [...state.selectedStudentIds, id],
      })),

    // ======================
    // ASYNC
    // ======================
    loadGroupsByYear: async (year) => {
      const res = await fetch(`/api/grupos?nivel=${year}`);
      const data = await res.json();
      set({ groups: data });
    },

    loadStudentsByGroup: async (groupId) => {
      const { activityId } = get();
      if (!activityId) return;
      set({ loadingStudents: true });
      const data = await getStudentsWithoutActivity({
        groupId,
        actividadId: activityId,
      });
      set({ students: data, loadingStudents: false });
    },

    loadSingleStudent: (student) => {
      set({ loadingStudents: true });
      set({
        students: [student],
        selectedStudentId: student.id_usuario,
        loadingStudents: false,
      });
    },

    submitPointsAssignment: async ({ date, cycleId, awards }) => {
      const { activityId, selectedStudentIds } = get();
      if (!activityId || selectedStudentIds.length === 0) return;

      set({ submitting: true });

      const payload = {
        id_actividad: activityId,
        estudiantes: selectedStudentIds,
        date,
        id_coordinador: (await getCurrentUserId()) ?? 0,
        id_ciclo: cycleId,
        awards,
      };

      await bulkAssignPointsAction(payload);

      set({
        students: get().students.filter(
          (s) => !selectedStudentIds.includes(s.id_usuario)
        ),
        selectedStudentId: null,
        selectedStudentIds: [],
        submitting: false,
      });
    },

    submitPointsAssignmentModules: async (
      selectedIds: Map<number, Set<number>>,
      activitiesId: number[],
      studentsIds: number[]
    ) => {
      set({ submitting: true });

      const result = await bulkAssignPointsModuleAction(
        Object.fromEntries(
          Array.from(selectedIds.entries()).map(([alumnoId, set]) => [
            alumnoId,
            Array.from(set),
          ])
        ),
        activitiesId,
        studentsIds
      );
      set({ submitting: false });
      return result;
    },

    reset: () =>
      set({
        selectedYear: "",
        selectedGroup: null,
        selectedStudentId: null,
        selectedStudentIds: [],
        students: [],
      }),
  }))
);
