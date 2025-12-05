"use server";
import { prisma } from "@/lib/prisma";
import { getStudentPoints } from "../api/utils/getPoints";
import { map } from "zod";
import { AlumnoCompleto } from "../models/alumno-completo";

type GetStudentsParams = {
  groupId?: string | number | null;
  actividadId?: string | number | null;
};

export async function getStudentsWithoutActivity({
  groupId,
  actividadId,
}: GetStudentsParams) {
  // Si no hay grupo, devolvemos arreglo vacío
  if (!groupId) return [];

  const groupNum =
    typeof groupId === "string" ? parseInt(groupId, 10) : Number(groupId);
  const actividadNum =
    actividadId == null
      ? undefined
      : typeof actividadId === "string"
      ? parseInt(actividadId, 10)
      : Number(actividadId);

  console.log("Actividad ID", actividadNum);

  // IDs de alumnos que ya tienen la actividad (si se especificó)
  const alumnosConActividad = await prisma.alumnoActividad.findMany({
    where: {
      id_actividad: actividadNum,
    },
    select: { id_alumno: true },
  });
  console.log("Alumnos con actividad:", alumnosConActividad);
  const idsAlumnosExcluir = alumnosConActividad.map((a) => a.id_alumno);
  console.log("IDs a excluir:", idsAlumnosExcluir);
  // Alumnos del grupo que NO están en la lista
  const alumnos = await prisma.usuario.findMany({
    where: {
      id_grupo: groupNum,
      id_usuario: idsAlumnosExcluir.length
        ? { notIn: idsAlumnosExcluir }
        : undefined,
    },
    select: {
      id_usuario: true,
      nombre: true,
      num_cuenta: true,
    },
  });

  const id_departament = await prisma.actividad.findUnique({
    where: {
      id_actividad: actividadNum,
    },
    select: {
      id_departamento: true,
    },
  });

  // Añadimos los puntos de cada alumno
  const alumnosConPuntos = await Promise.all(
    alumnos.map(async (alumno) => {
      const puntos = await getStudentPoints(alumno.id_usuario);
      return { ...alumno, puntos };
    })
  );

  return alumnosConPuntos;
}

export async function getStudents({ groupId }: GetStudentsParams) {
  // Si no hay grupo, devolvemos arreglo vacío
  if (!groupId) return [];
  const groupNum =
    typeof groupId === "string" ? parseInt(groupId, 10) : Number(groupId);
  // Alumnos del grupo
  const alumnos = await prisma.usuario.findMany({
    where: {
      id_grupo: groupNum,
    },
    select: {
      id_usuario: true,
      nombre: true,
      num_cuenta: true,
    },
  });
  // Añadimos los puntos de cada alumno
  const alumnosConPuntos = await Promise.all(
    alumnos.map(async (alumno) => {
      const puntos = await getStudentPoints(alumno.id_usuario);
      return { ...alumno, puntos };
    })
  );
  return alumnosConPuntos;
}

export async function getAlumnoInfo(
  id_alumno: number
): Promise<AlumnoCompleto | null> {
  // 1. Obtener la información general del alumno
  const alumno = await prisma.usuario.findUnique({
    where: { id_usuario: id_alumno },
    select: {
      id_usuario: true,
      nombre: true,
      num_cuenta: true,
      grupo: {
        select: { nombre: true },
      },
      registros_act: {
        select: {
          puntos_otorgados: true,
          fecha_registro: true,
          actividad: {
            select: {
              id_actividad: true,
              nombre: true,
              puntos_participacion: true,
              ciclo: {
                select: { nombre: true },
              },
              fecha: true,
              tipo: true,
              departamento: {
                select: {
                  id_departamento: true, // <-- importante
                  nombre: true,
                },
              },
              premios: {
                select: {
                  id: true,
                  lugar: true,
                  puntos: true,
                  ganadores: {
                    select: { alumnoId: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  if (!alumno) return null;

  // -------------------------
  // 2. Procesar puntos por áreas (deportes y cultura)
  // -------------------------
  let puntosDeportes = 0;
  let puntosCultura = 0;

  const actividadesProcesadas = alumno.registros_act.map((registro) => {
  const actividad = registro.actividad;

  // Detectar si este alumno ganó premio (para actividades normales)
  const premioGanado = actividad.premios
    .map((p) => ({
      id: p.id,
      lugar: p.lugar,
      puntos_otorgados: p.puntos,
      gano: p.ganadores.some(
        (g) => Number(g.alumnoId) === Number(alumno.id_usuario)
      ),
    }))
    .find((p) => p.gano);

  // Departamento
  const idDept = actividad.departamento.id_departamento;

  let puntosActividad = 0;

  // ---------------------------------------------------
  // ✔️ NUEVA LÓGICA: Si es MIGRACION usar puntos_otorgados
  // ---------------------------------------------------
  if (actividad.tipo === "MIGRACION") {
    puntosActividad = registro.puntos_otorgados ?? 0;
  } else {
    // ---------------------------------------------------
    // ❌ LÓGICA NORMAL (sin cambios)
    // ---------------------------------------------------
    const puntosParticipacion = actividad.puntos_participacion ?? 0;

    if (premioGanado?.puntos_otorgados) {
      puntosActividad =
        puntosParticipacion + premioGanado.puntos_otorgados;
    } else {
      puntosActividad = puntosParticipacion;
    }
  }

  // Asignar puntos según departamento
  if (idDept === 1) puntosDeportes += puntosActividad;
  else if (idDept === 2) puntosCultura += puntosActividad;

  // Retorno individual de actividad (también corregido para migración)
  return {
    id_actividad: actividad.id_actividad,
    ciclo: actividad.ciclo.nombre,
    nombre: actividad.nombre,
    fecha: actividad.fecha,
    departamento: actividad.departamento.nombre,

    participacion: actividad.tipo !== "MIGRACION" && !premioGanado,

    premio:
      actividad.tipo !== "MIGRACION" && premioGanado
        ? {
            id: premioGanado.id,
            lugar: premioGanado.lugar,
            puntos_otorgados: premioGanado.puntos_otorgados,
          }
        : null,

    puntos_participacion:
      actividad.tipo === "MIGRACION"
        ? (registro.puntos_otorgados ?? 0)
        : actividad.puntos_participacion,
  };
});


  console.log("Puntos Deportes:", puntosDeportes);
  console.log("Puntos Cultura:", puntosCultura);
  // -------------------------
  // 3. Resumen final
  // -------------------------
  return {
    alumno: {
      id_usuario: alumno.id_usuario,
      nombre: alumno.nombre,
      num_cuenta: alumno.num_cuenta,
      grupo: alumno.grupo?.nombre ?? "Sin grupo",
    },
    puntos: {
      deportes: puntosDeportes,
      cultura: puntosCultura,
      total: puntosDeportes + puntosCultura,
    },
    actividades: actividadesProcesadas,
  };
}
