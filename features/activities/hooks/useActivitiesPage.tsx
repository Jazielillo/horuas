import { useActivityStore } from "@/lib/store/use-activity-store";
import { useActivityUIStore } from "@/lib/store/use-activity-ui-store";
import { useCatalogStore } from "@/lib/store/use-catalog-store";
import { usePointsAssignmentStore } from "@/lib/store/use-points-assignment-store";
import { Ciclo } from "@/prisma/generated/client/browser";
import { useEffect, useState } from "react";

export function useActivitiesPage() {
  const { activities, fetchActivities } = useActivityStore();
  const { ciclos, fetchCiclos, departamentos, fetchDepartamentos } =
    useCatalogStore();
  const { onlyClubs, setOnlyClubs } = useActivityUIStore();
  const { reset } = usePointsAssignmentStore();

  const [loading, setLoading] = useState(false);
  const [cicloSelected, setCicloSelected] = useState<Ciclo | null>(null);

  useEffect(() => {
    reset();
    setLoading(true);

    if (!ciclos?.length) fetchCiclos();
    if (!departamentos?.length) fetchDepartamentos();

    fetchActivities({ cicloId: cicloSelected?.id_ciclo, onlyClubs }).finally(
      () => setLoading(false),
    );
  }, [cicloSelected, onlyClubs]);

  return {
    activities,
    loading,
    ciclos,
    onlyClubs,
    cicloSelected,
    setCicloSelected,
    setOnlyClubs
  };
}
