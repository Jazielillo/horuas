// hooks/useActivityLoader.ts

import { useActivityStore } from "@/store/use-activity-store";
import { useEffect } from "react";
export const useActivityLoader = (activityId: string | undefined) => {
  const {
    getActivityById,
    loadActivityById,
    activitySelected,
    setActivitySelected,
  } = useActivityStore();

  useEffect(() => {
    if (!activityId) return;

    const id = Number(activityId);

    // 1. Intentar obtener de cache (Zustand)
    const cachedActivity = getActivityById(id);

    if (cachedActivity) {
      // Si está en cache, usarla directamente
      setActivitySelected(cachedActivity);
    } else {
      // Si no está en cache, cargarla desde la API
      loadActivityById(id);
    }
  }, [activityId, getActivityById, loadActivityById, setActivitySelected]);

  return {
    activitySelected,
    isLoading: !activitySelected && !!activityId,
  };
};

export const useActivityOrientationLoader = () => {
  const { getOrientacionActivities, activityList } = useActivityStore();

  useEffect(() => {
    // Cargar actividades de orientación educativa al montar el hook
    getOrientacionActivities();
  }, [getOrientacionActivities]);

  return {
    activityList,
    isLoading: !activityList.length,
  };
};

export const useActivityServicioSocialLoader = () => {
  const { getServicioSocialActivities, activityList } = useActivityStore();

  useEffect(() => {
    // Cargar actividades de servicio social al montar el hook
    getServicioSocialActivities();
  }, [getServicioSocialActivities]);

  return {
    activityList,
    isLoading: !activityList.length,
  };
};
