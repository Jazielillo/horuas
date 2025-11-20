import { Activity, Alumno, Group } from "@/app/models";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AssignmentState {
  // UI selections
  selectedYear: string;
  selectedGroup: Group | null;
  selectedStudent: Alumno | null;
  selectedActivity: Activity | null;
  selectedStudents: Alumno[] | null;
  studentHasActivity: boolean | null;

  // Data
  groups: Group[];
  studentsOfGroup: Alumno[];
  singleStudent: Alumno | null;
  activitiesOfStudent?: Activity[];

  // Actions
  setYear: (year: string) => void;
  setGroup: (group: Group | null) => void;
  setStudent: (student: Alumno | null) => void;
  setActivity: (activity: Activity | null) => void;
  setStudents: (students: Alumno | null) => void;
  setGroups: (groups: Group[]) => void;
  setActivitiesOfStudent: (activities: Activity[]) => void;

  loadActivitiesOfStudent: (id_alumno: number) => Promise<void>;
  loadGroupsByYear: (year: string) => Promise<void>;
  loadStudentsByGroup: (group: string) => Promise<void>;
  loadStudentsByGroups: (group: string) => Promise<void>;
  loadStudentById: (id: string) => Promise<void>;
  assignPointsToStudents: (
    points: number,
    date: Date,
    id_coordinador: number,
    id_ciclo: number
  ) => Promise<void>;
  checkStudentActivity: (
    id_alumno: number,
    id_actividad: number
  ) => Promise<void>;
}

export const usePointsAssignmentStore = create<AssignmentState>()(
  devtools((set, get) => ({
    selectedYear: "",
    selectedGroup: null,
    selectedStudent: null,
    selectedActivity: null,
    selectedStudents: [],
    studentHasActivity: null, // ⬅️ agregado

    groups: [],
    studentsOfGroup: [],
    singleStudent: null,

    setYear: (year) =>
      set({
        selectedYear: year,
        selectedGroup: null,
        selectedStudent: null,
      }),

    setGroup: (group) =>
      set({
        selectedGroup: group,
        selectedStudent: null,
      }),

    setActivitiesOfStudent: (activities) =>
      set({ activitiesOfStudent: activities }),

    loadActivitiesOfStudent: async (id_alumno) => {
      const res = await fetch(`/api/alumnos/actividades?alumno=${id_alumno}`);
      const data = await res.json();
      set({ activitiesOfStudent: data });
    },

    setStudent: (student) => {
      set({ selectedStudent: student, selectedStudents: [] });
      if (student && get().selectedActivity) {
        get().checkStudentActivity(
          student.id_usuario,
          get().selectedActivity!.id_actividad
        );
      } else {
        set({ studentHasActivity: null });
      }
    },

    // Adds the received student to the selectedStudents array.
    // Toggling: si el estudiante no existe lo añade; si existe lo quita. Si se pasa null no hace nada.
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

    setGroups: (groups) => set({ groups }),

    setActivity: (activity) => {
      set({ selectedActivity: activity });
      if (get().selectedStudent) {
        get().checkStudentActivity(
          get().selectedStudent!.id_usuario,
          activity ? activity.id_actividad : -1
        );
      }
    },

    loadGroupsByYear: async (year) => {
      console.log("Loading groups for year:", year);
      const res = await fetch(`/api/grupos?nivel=${year}`);
      const data = await res.json();
      console.log("Fetched groups:", data);
      set({ groups: data });
    },

    loadStudentsByGroup: async (group) => {
      const res = await fetch(
        `/api/alumnos/group?group=${group}&actividad=${
          get().selectedActivity?.id_actividad
        }`
      );
      const data = await res.json();
      set({ studentsOfGroup: data });
    },

    loadStudentsByGroups: async (group) => {
      const res = await fetch(`/api/alumnos/groups?group=${group}`);
      const data = await res.json();
      set({ studentsOfGroup: data });
    },

    loadStudentById: async (id) => {
      const res = await fetch(`/api/students/${id}`);
      const data = await res.json();
      set({ singleStudent: data });
    },

    assignPointsToStudents: async (
      points: number,
      date: Date,
      id_coordinador: number,
      id_ciclo: number
    ) => {
      const { selectedActivity, selectedStudents } = get();
      if (
        !selectedActivity ||
        !selectedStudents ||
        selectedStudents.length === 0
      ) {
        console.error("Actividad o estudiantes no seleccionados");
        return;
      }
      const payload = {
        id_actividad: selectedActivity.id_actividad,
        estudiantes: selectedStudents.map((s) => s.id_usuario),
        points,
        date,
        id_coordinador: 47,
        id_ciclo: 1,
      };

      const res = await fetch("/api/alumno-actividad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // Remove the assigned students from studentsOfGroup and clear selection
        const removedIds = selectedStudents.map((s) => s.id_usuario);
        set((state) => ({
          studentsOfGroup: state.studentsOfGroup.filter(
            (s) => !removedIds.includes(s.id_usuario)
          ),
          selectedStudents: [],
        }));
      }
    },

    // API checks
    checkStudentActivity: async (id_alumno, id_actividad) => {
      try {
        const res = await fetch(
          `/api/alumno-actividad/check?alumno=${id_alumno}&actividad=${id_actividad}`
        );
        const data = await res.json();

        if (data) {
          set({ studentHasActivity: true }); // true / false
        } else {
          set({ studentHasActivity: false });
        }
      } catch (e) {
        console.error(e);
        set({ studentHasActivity: null });
      }
    },
  }))
);
