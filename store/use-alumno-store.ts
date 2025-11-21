import { Activity, Alumno } from "@/app/models";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface AlumnoState {
  selectedAlumno: Alumno | null;
  activityList: Activity[];
  nextActivities: Activity[];
  loading: boolean;

  // Actions
  setLoading: (loading: boolean) => void;
  loadAlumno(id_usuario: number): Promise<void>;
  setSelectedAlumno: (alumno: Alumno | null) => void;
  loadActivitiesOfAlumno: () => Promise<void>;
  loadNextActivitiesOfAlumno: () => Promise<void>;
}

export const useAlumnoStore = create<AlumnoState>()(
  devtools((set, get) => ({
    selectedAlumno: null,
    activityList: [],
    nextActivities: [],
    loading: true,
    setSelectedAlumno: (alumno) => set({ selectedAlumno: alumno }),
    loadActivitiesOfAlumno: async () => {
      set({ loading: true });
      if (get().selectedAlumno) {
        const response = await fetch(
          `/api/alumnos/actividades?alumno=${get().selectedAlumno?.id_usuario}`
        );
        const data = await response.json();
        set({ activityList: data, loading: false });
        return;
      }
    },
    loadAlumno: async (id_usuario: number) => {
      // Fetch alumno data from API or database
      set({ loading: true });
      const response = await fetch(
        `/api/alumnos/informacion?id_alumno=${id_usuario}`
      );
      const data = await response.json();
      console.log("Fetched alumno data:", data);
      set({
        selectedAlumno: {
          id_usuario: data.id_usuario,
          nombre: data.nombre,
          num_cuenta: data.num_cuenta,
          grupo: data.grupo,
          puntos: data.puntos,
        },
        loading: false,
      });
    },
    loadNextActivitiesOfAlumno: async () => {
      // Fetch next activities from API or database
      const response = await fetch(`/api/alumno/next-activities`);
      const data = await response.json();
      set({ nextActivities: data });
    },
  }))
);
