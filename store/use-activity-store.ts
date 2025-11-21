import { getAllActivitiesAction } from "@/app/actions/activity-actions";
import { Activity } from "@/app/models";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface ActivityStore {
  activityList: Activity[];
  nextActivities: Activity[];
  activitySelected: Activity | null;

  // Actions
  setActivityList: (activities: Activity[]) => void;
  setNextActivities: (activities: Activity[]) => void;
  setActivitySelected: (activity: Activity | null) => void;
  updateActivity: (activity: Activity) => void;
  loadActivities: () => Promise<void>;
  loadNextActivities: () => Promise<void>;
  addActivity: (activity: Activity) => void;
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
      const response = await getAllActivitiesAction();
      // Normalize possible null descripcion to undefined to match Activity type
      const normalized = (response as any[]).map((a) => ({
        ...a,
        descripcion: a.descripcion ?? undefined,
      })) as Activity[];
      set({ activityList: normalized });
    },
    addActivity: (activity) =>
      set((state) => ({
        activityList: [...state.activityList, activity],
      })),
    updateActivity: (activity) =>
      set((state) => ({
        activityList: state.activityList.map((a) =>
          a.id_actividad === activity.id_actividad ? activity : a
        ),
        activitySelected: null,
      })),
    loadNextActivities: async () => {
      const response = await fetch(`/api/activities/next`);
      const data = await response.json();
      set({ nextActivities: data });
    },
  }))
);
