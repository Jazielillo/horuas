export const buildSelectedIdsMap = (
  data: { id_alumno: number; id_actividad: number }[]
) => {
  const map = new Map<number, Set<number>>();

  data.forEach(({ id_alumno, id_actividad }) => {
    if (!map.has(id_alumno)) {
      map.set(id_alumno, new Set());
    }
    map.get(id_alumno)!.add(id_actividad);
  });

  return map;
};
