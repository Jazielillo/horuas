import { prisma } from "@/lib/prisma";
import { id } from "zod/v4/locales";

// export async function getStudentPoints(studentId: number, id_departament?:number) {
//   const result = await prisma.alumnoActividad.findMany({
//     where: { id_alumno: studentId, actividad: { departamento: { id_departamento: id_departament } } },
//     include: {
//       actividad: {
//         select: {
//           puntos_participacion: true,
//           ganadores: {
//             where: {
//               alumnoId: studentId,
//             },
//             select: {
//               premio: {
//                 select: {
//                   puntos: true,
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   });

//   const totalPoints = result.reduce((acc, curr) => {
//     return (
//       acc +
//       ((curr.actividad?.puntos_participacion ?? 0) +
//         curr.actividad.ganadores.reduce(
//           (sum, ganador) => sum + (ganador.premio.puntos ?? 0),
//           0
//         ))
//     );
//   }, 0);

//   return totalPoints;
// }

export async function getStudentPoints(studentId: number) {
  // Obtener todos los registros del alumno
  const result = await prisma.alumnoActividad.findMany({
    where: {
      id_alumno: studentId,
    },
    include: {
      actividad: {
        select: {
          tipo: true,
          puntos_participacion: true,
          id_departamento: true, // <-- Necesario para clasificar
          ganadores: {
            where: {
              alumnoId: studentId,
            },
            select: {
              premio: {
                select: { puntos: true },
              },
            },
          },
        },
      },
    },
  });

  let total = 0;
  let deportes = 0; // id_departamento = 1
  let cultura = 0; // id_departamento = 2

  for (const curr of result) {
    const actividad = curr.actividad;
    if (!actividad) continue;

    let puntos = 0;

    // ✔️ Caso actividad MIGRACION
    if (actividad.tipo === "MIGRACION") {
      puntos = curr.puntos_otorgados ?? 0;
    } else {
      // ❌ Caso actividad normal
      const puntosParticipacion = actividad.puntos_participacion ?? 0;

      const puntosGanados = actividad.ganadores.reduce(
        (sum, ganador) => sum + (ganador.premio?.puntos ?? 0),
        0
      );

      puntos = puntosParticipacion + puntosGanados;
    }

    // Sumar al total general
    total += puntos;

    // Clasificación por departamento
    if (actividad.id_departamento === 1) {
      deportes += puntos;
    } else if (actividad.id_departamento === 2) {
      cultura += puntos;
    }
  }

  return {
    total,
    deportes,
    cultura,
  };
}
