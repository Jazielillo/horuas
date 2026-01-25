// utils/pointsCalculator.ts

import { Alumno } from "@/lib/models";
import { ActivityPrize } from "@/lib/models/activity";

export const calculateNewTotal = (
  currentPoints: number,
  basePoints: number,
  awardPoints?: number
): number => {
  return currentPoints + basePoints + (awardPoints || 0);
};

export const getCurrentPoints = (
  student: Alumno,
  department: string
): number => {
  switch (department) {
    case 'Deportes':
      return student.puntos?.deportes ?? 0;
    case 'Cultura':
      return student.puntos?.cultura ?? 0;
    default:
      return student.puntos?.total ?? 0;
  }
};

export const getAwardBonus = (
  studentAwards: Record<number, ActivityPrize>,
  studentId: number,
  prizes?: ActivityPrize[]
): number => {
  const selectedAwardId = studentAwards[studentId]?.id?.toString();
  const award = prizes?.find(a => a?.id?.toString() === selectedAwardId);
  return award?.puntos_otorgados || 0;
};