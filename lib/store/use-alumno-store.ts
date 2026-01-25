
import { Activity, Alumno } from "@/lib/models";
import { ActivityPrize } from "@/lib/models/activity";
import { AlumnoCompleto } from "@/lib/models/alumno-completo";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getAlumnoInfo } from "../actions/students-actions";
interface AlumnoState {
  selectedAlumno: Alumno | null;
  activityList: Activity[];
  nextActivities: Activity[];
  loading: boolean;
  selectedAlumnoCompleto: AlumnoCompleto | null;

  // Actions
  setLoading: (loading: boolean) => void;
  loadAlumno(id_usuario: number): Promise<void>;
  setSelectedAlumno: (alumno: Alumno | null) => void;
  loadActivitiesOfAlumno: () => Promise<void>;
  loadNextActivitiesOfAlumno: () => Promise<void>;
  setSelectedAlumnoCompleto: (alumno: AlumnoCompleto | null) => void;
  loadAlumnoCompleto: (id_usuario: number) => Promise<void>;
  changeActivityInAlumnoCompleto: (editActivity: Activity) => void;
  deleteActivityInAlumnoCompleto: (id_actividad: number) => void;
  changePrizeInActivity: (
    premio?: ActivityPrize,
    id_actividad?: number
  ) => void;
  reset: () => void;
}

export const useAlumnoStore = create<AlumnoState>()(
  devtools((set, get) => ({
    selectedAlumno: null,
    activityList: [],
    nextActivities: [],
    selectedAlumnoCompleto: null,
    loading: true,
    setSelectedAlumno: (alumno) => set({ selectedAlumno: alumno }),
    loadActivitiesOfAlumno: async () => {
      set({ loading: true });
      if (get().selectedAlumnoCompleto) {
        const response = await fetch(
          `/api/alumnos/actividades?alumno=${
            get().selectedAlumnoCompleto?.alumno.id_usuario
          }`
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
    setSelectedAlumnoCompleto: (alumno) =>
      set({ selectedAlumnoCompleto: alumno }),
    loadAlumnoCompleto: async (id_usuario: number) => {
      set({ loading: true });
      const response = await getAlumnoInfo(id_usuario);
      set({ selectedAlumnoCompleto: response, loading: false });
    },
    changeActivityInAlumnoCompleto: (editActivity) => {
      console.log("Updating activity in alumno completo:", editActivity);
      const currentAlumnoCompleto = get().selectedAlumnoCompleto;
      if (!currentAlumnoCompleto) return;
      const updatedActivities = currentAlumnoCompleto.actividades.map(
        (activity) =>
          activity.id_actividad === editActivity.id_actividad
            ? {
                ...activity,
                ...editActivity,
                fecha: typeof editActivity.fecha === 'string' ? new Date(editActivity.fecha) : editActivity.fecha,
                premio: Array.isArray(editActivity.premio)
                  ? editActivity.premio.length
                    ? editActivity.premio[0]
                    : null
                  : editActivity.premio ?? null,
              }
            : activity
      );
      set({
        selectedAlumnoCompleto: {
          ...currentAlumnoCompleto,
          actividades: updatedActivities,
        },
      });
    },
    deleteActivityInAlumnoCompleto: (id_actividad) => {
      const currentAlumnoCompleto = get().selectedAlumnoCompleto;
      if (!currentAlumnoCompleto) return;

      // 1. Eliminar la actividad
      const updatedActivities = currentAlumnoCompleto.actividades.filter(
        (activity) => activity.id_actividad !== id_actividad
      );

      // 2. Recalcular puntos después de eliminar una actividad
      let deportes = 0;
      let cultura = 0;

      updatedActivities.forEach((act) => {
        const puntosParticipacion = act.puntos_participacion;
        const puntosPremio = act.premio?.puntos_otorgados ?? 0;

        const totalActividad = puntosParticipacion + puntosPremio;

        if (act.departamento === "Deportes") {
          deportes += totalActividad;
        } else if (act.departamento === "Cultura") {
          cultura += totalActividad;
        }
      });

      const total = deportes + cultura;

      // 3. Actualizar estado final
      set({
        selectedAlumnoCompleto: {
          ...currentAlumnoCompleto,
          actividades: updatedActivities,
          puntos: {
            total,
            deportes,
            cultura,
          },
        },
      });
    },

    changePrizeInActivity: (premio, id_actividad) => {
      const currentAlumnoCompleto = get().selectedAlumnoCompleto;
      if (!currentAlumnoCompleto || id_actividad === undefined) return;

      // 1. Actualizar actividades (como ya lo hacías)
      const updatedActivities = currentAlumnoCompleto.actividades.map(
        (activity) =>
          activity.id_actividad === id_actividad
            ? {
                ...activity,
                premio: premio ?? null,
              }
            : activity
      );

      // 2. Recalcular puntos después del cambio
      let deportes = 0;
      let cultura = 0;

      updatedActivities.forEach((act) => {
        // puntos por participación
        const puntosParticipacion = act.puntos_participacion;

        // puntos por premio (si existe)
        const puntosPremio = act.premio?.puntos_otorgados ?? 0;

        const totalActividad = puntosParticipacion + puntosPremio;

        if (act.departamento === "Deportes") {
          deportes += totalActividad;
        } else if (act.departamento === "Cultura") {
          cultura += totalActividad;
        }
      });

      const total = deportes + cultura;

      // 3. Actualizar store completo
      set({
        selectedAlumnoCompleto: {
          ...currentAlumnoCompleto,
          actividades: updatedActivities,
          puntos: {
            total,
            deportes,
            cultura,
          },
        },
      });
    },

    reset: () =>
      set({
        selectedAlumno: null,
        activityList: [],
        nextActivities: [],
        selectedAlumnoCompleto: null,
        loading: false,
      }),
    setLoading: (loading: boolean) => set({ loading }),
  }))
);
