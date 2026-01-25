
import { Alumno, Group } from "@/lib/models";
import { ActivityPrize } from "@/lib/models/activity";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getStudentsWithoutActivity } from "../actions/students-actions";
import { getCurrentUserId } from "../actions/auth";
import { bulkAssignPointsAction, bulkAssignPointsModuleAction } from "../actions/assign-points-action";


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
