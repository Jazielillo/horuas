// store/activityStore.ts
import { getActivityByIdAction, getAllActivitiesAction } from '@/app/actions/activity-actions';
import { Activity } from '@/app/models';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ActivityStore {
  activityList: Activity[];
  nextActivities: Activity[];
  activitySelected: Activity | null;

  // Actions
  setActivityList: (activities: Activity[]) => void;
  setNextActivities: (activities: Activity[]) => void;
  setActivitySelected: (activity: Activity | null) => void;
  loadActivities: () => Promise<void>;
  loadNextActivities: () => Promise<void>;
  addActivity: (activity: Activity) => void;
  getActivityById: (id: string | number) => Activity | undefined; 
  loadActivityById: (id: string | number) => Promise<void>;
}

export const useActivityStore = create<ActivityStore>()(
  devtools((set, get) => ({
    activityList: [],
    nextActivities: [],
    activitySelected: null,

    setActivityList: (activities) => set({ activityList: activities }),
    setNextActivities: (activities) => set({ nextActivities: activities }),
    setActivitySelected: (activity) => set({ activitySelected: activity }),

    loadActivities: async () => {
      // ¡MIRA QUÉ LIMPIO QUEDÓ ESTO!
      // Como el action ya devuelve Promise<Activity[]>, TS está feliz.
      const response = await getAllActivitiesAction();
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
  }))
);