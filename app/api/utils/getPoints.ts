import { prisma } from "@/lib/prisma";
import { id } from "zod/v4/locales";

export async function getStudentPoints(studentId: number, id_departament?:number) {
  console.log('holaaaaaaaaaaaaaaaaaaa',id_departament);
  const result = await prisma.alumnoActividad.findMany({
    where: { id_alumno: studentId, actividad: { departamento: { id_departamento: id_departament } } },
    include: {
      actividad: {
        select: {
          puntos_participacion: true,
          ganadores: {
            where: {
              alumnoId: studentId,
            },
            select: {
              premio: {
                select: {
                  puntos: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const totalPoints = result.reduce((acc, curr) => {
    return (
      acc +
      ((curr.actividad?.puntos_participacion ?? 0) +
        curr.actividad.ganadores.reduce(
          (sum, ganador) => sum + (ganador.premio.puntos ?? 0),
          0
        ))
    );
  }, 0);

  console.log(`Total points for student ${studentId}: ${totalPoints}`);

  return totalPoints;
}
