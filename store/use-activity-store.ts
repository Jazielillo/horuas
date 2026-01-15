// store/activityStore.ts
import {
  deleteActivityStudentAction,
  getActivitiesPrizesAction,
  getActivityByIdAction,
  getAllActivitiesAction,
  getFutureActivitiesAction,
  getOrientacionActivitiesAction,
  getServicioSocialActivitiesAction,
  updatePrizeAction,
} from "@/app/actions/activity-actions";
import { getCiclosAction } from "@/app/actions/ciclos-actions";
import { getDepartamentosAction } from "@/app/actions/departamentos-action";
import { Activity } from "@/app/models";
import { ActivityPrize } from "@/app/models/activity";
import { Ciclo } from "@/app/models/ciclo";
import { Departamento } from "@/app/models/departamento";
import { getSession } from "@/lib/session";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ActivityStore {
  activityList: Activity[];
  nextActivities: Activity[];
  activitySelected: Activity | null;
  cicloSelected: Ciclo | null;
  ciclos: Ciclo[];
  departamentSelected: Departamento | null;
  departaments: Departamento[];
  activitiesPrizes: ActivityPrize[];
  newActivity: Activity | null;
  loading: boolean;
  onlyClubs: boolean;

  // Actions
  setOnlyClubs: (onlyClubs: boolean) => void;
  setActivityList: (activities: Activity[]) => void;
  setNextActivities: (activities: Activity[]) => void;
  setActivitySelected: (activity: Activity | null) => void;
  loadActivities: () => Promise<void>;
  loadActivitiesByStudent: (studentId: string | number) => Promise<void>;
  addActivity: (activity: Activity) => void;
  getActivityById: (id: string | number) => Activity | undefined;
  loadActivityById: (id: string | number) => Promise<void>;
  setCicloSelected: (ciclo: Ciclo | null) => void;
  loadCiclos: () => Promise<void>;
  setCiclos: (ciclos: Ciclo[]) => void;
  setDepartamentSelected: (departament: Departamento | null) => void;
  setDepartaments: (departaments: Departamento[]) => void;
  loadDepartaments: () => Promise<void>;
  loadPrizesActivities: (activity_id: number) => Promise<void>;
  updatePrizeActivity: (
    prizeId: number,
    alumnoId: number,
    actividad: number
  ) => Promise<{ premio?: ActivityPrize }>;
  deleteActivityStudent: (
    id_actividad: number,
    id_alumno: number,
    descripcion: string
  ) => Promise<void>;
  loadFutureActivities: () => Promise<void>;
  cleanStore: () => void;
  getOrientacionActivities: () => Activity[];
  getServicioSocialActivities: () => Activity[];
}

export const useActivityStore = create<ActivityStore>()(
  devtools((set, get) => ({
    activityList: [],
    nextActivities: [],
    activitySelected: null,

    setActivityList: (activities) => set({ activityList: activities }),
    setNextActivities: (activities) => set({ nextActivities: activities }),
    setActivitySelected: (activity) => set({ activitySelected: activity }),
    onlyClubs: false,
    setOnlyClubs: (onlyClubs) => set({ onlyClubs }),

    loadActivities: async () => {
      let departamento_id = await getSession().then((session) => {
        if (session?.role === "COORDINADOR_DEPORTES") {
          return 1;
        }
        if (session?.role === "COORDINADOR_CULTURA") {
          return 2;
        }
        return undefined;
      });
      const response = await getAllActivitiesAction({
        ciclo_id: get().cicloSelected?.id_ciclo,
        departamento_id: departamento_id,
        onlyClubs: get().onlyClubs,
      });
      set({ activityList: response });
    },

    getOrientacionActivities: async () => {
      const response = await getOrientacionActivitiesAction();
      set({ activityList: response });
    },

    getServicioSocialActivities: async () => {
      const response = await getServicioSocialActivitiesAction();
      set({ activityList: response });
    },

    addActivity: (activity) =>
      set((state) => ({
        activityList: [...state.activityList, activity],
      })),

    // ... updateActivity ...

    loadNextActivities: async () => {
      // Asegúrate de que tu API route también devuelva el formato correcto
      const response = await fetch(`/api/activities/next`);
      const data: Activity[] = await response.json(); // Forzamos el tipo si viene de fetch
      set({ nextActivities: data });
    },

    getActivityById: (id) => {
      const { activityList } = get();
      return activityList.find((a) => a.id_actividad === Number(id));
    },

    loadActivityById: async (id) => {
      try {
        const activity = await getActivityByIdAction(Number(id));
        if (!activity) return;

        // Ya no necesitamos normalizar nada aquí
        set((state) => {
          const exists = state.activityList.find(
            (a) => a.id_actividad === activity.id_actividad
          );
          if (exists) return state;
          return { activityList: [...state.activityList, activity] };
        });

        set({ activitySelected: activity });
      } catch (error) {
        console.error("Error cargando actividad:", error);
      }
    },
    setCicloSelected: (ciclo) => set({ cicloSelected: ciclo }),
    loadCiclos: async () => {
      // Implementar la carga de ciclos aquí
      const ciclos = await getCiclosAction();
      set({
        ciclos: ciclos,
      });
    },
    setDepartaments: (departaments) => set({ departaments }),
    setDepartamentSelected: (departament) =>
      set({ departamentSelected: departament }),
    loadDepartaments: async () => {
      // Aquí deberías implementar la lógica para cargar los departamentos
      const departamentos = await getDepartamentosAction();
      set({ departaments: departamentos });
    },
    loadActivitiesByStudent: async (studentId) => {
      const response = await fetch(`/api/activities/student/${studentId}`);
      const data: Activity[] = await response.json();
      set({ activityList: data });
    },
    loadPrizesActivities: async (activity_id) => {
      const response = await getActivitiesPrizesAction(activity_id);
      set({ activitiesPrizes: response });
    },
    updatePrizeActivity: async (prizeId, alumnoId, actividadId) => {
      const aux = await updatePrizeAction(
        prizeId,
        alumnoId,
        Number(actividadId)
      );
      if (aux) {
        return { premio: aux?.premio[0] };
      }
    },
    deleteActivityStudent: async (id_actividad, id_alumno, descripcion) => {
      await deleteActivityStudentAction(id_actividad, id_alumno, descripcion);
    },
    loadFutureActivities: async () => {
      set({ loading: true });
      const response = await getFutureActivitiesAction();
      set({ nextActivities: response, loading: false });
    },
    cleanStore: () =>
      set({
        activityList: [],
        nextActivities: [],
        activitySelected: null,
        cicloSelected: null,
        ciclos: [],
        departamentSelected: null,
        departaments: [],
        activitiesPrizes: [],
        newActivity: null,
        loading: false,
      }),
  }))
);
