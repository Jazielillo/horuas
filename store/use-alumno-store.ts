import { Activity, Alumno } from "@/app/models";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface AlumnoState {
  selectedAlumno: Alumno | null;
  activityList: Activity[];
  nextActivities: Activity[];

  // Actions
  setSelectedAlumno: (alumno: Alumno | null) => void;
  loadActivitiesOfAlumno: () => Promise<void>;
  loadNextActivitiesOfAlumno: () => Promise<void>;
}

export const useAlumnoStore = create<AlumnoState>()(
  devtools((set, get) => ({
    selectedAlumno: null,
    activityList: [],
    nextActivities: [],
    setSelectedAlumno: (alumno) => set({ selectedAlumno: alumno }),
    loadActivitiesOfAlumno: async () => {
      // Fetch activities from API or database
      console.log("Loading activities for alumno:", get().selectedAlumno);
      const response = await fetch(
        `/api/alumnos/actividades?alumno=${get().selectedAlumno?.id_usuario}`
      );
      const data = await response.json();
      set({ activityList: data });
    },
    loadNextActivitiesOfAlumno: async () => {
      // Fetch next activities from API or database
      const response = await fetch(`/api/alumno/next-activities`);
      const data = await response.json();
      set({ nextActivities: data });
    },
  }))
);
