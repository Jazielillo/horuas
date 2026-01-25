// hooks/useActivityLoader.ts

import {
  getFutureActivitiesAction,
  getOrientacionActivitiesAction,
  getServicioSocialActivitiesAction,
} from "@/lib/actions/activity-actions";
import { Activity } from "@/lib/models/activity";
import { useActivityStore } from "@/lib/store/use-activity-store";
import { useEffect, useState } from "react";
export const useActivityLoader = (activityId: string | undefined) => {
  const { fetchActivityById, loading, activities } = useActivityStore();
  const activitySelected = activities.find((act) => act.id_actividad === Number(activityId)) ?? null;

  useEffect(() => {
    if (!activityId) return;

    const id = Number(activityId);

    fetchActivityById(id);
  }, [activityId, fetchActivityById]);

  return {
    activitySelected,
    isLoading: loading,
  };
};

export const useActivityOrientationLoader = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const load = async () => {
    try {
      setLoading(true);
      const data = await getOrientacionActivitiesAction();
      setActivities(data);
    } catch (err) {
      setError("Error al cargar actividades futuras");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);
  return {
    activities,
    loading,
    error,
    reload: load,
  };
};

export const useActivityServicioSocialLoader = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      const data = await getServicioSocialActivitiesAction();
      setActivities(data);
    } catch (err) {
      setError("Error al cargar actividades futuras");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    activities,
    loading,
    error,
    reload: load,
  };
};

export function useFutureActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      const data = await getFutureActivitiesAction();
      setActivities(data);
    } catch (err) {
      setError("Error al cargar actividades futuras");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    activities,
    loading,
    error,
    reload: load,
  };
}
