import { prisma } from "@/app/lib/prisma";

export async function getStudentPoints(studentId: number) {
  const result = await prisma.alumnoActividad.aggregate({
    where: { id_alumno: studentId },
    _sum: { puntos_otorgados: true },
  });

  return result._sum.puntos_otorgados ?? 0;
}