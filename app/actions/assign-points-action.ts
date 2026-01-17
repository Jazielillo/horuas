"use server";

import {
  assignPointsFullSchema,
  AssignPointsForm,
} from "@/schemas/assign-points-schema";
import { prisma } from "@/lib/prisma";
import { ActivityPrize } from "../models/activity";
import { NotificationService } from "../helpers/notification-helper";

/**
 * Helper que obtiene info del usuario desde cookies/session.
 * Implementa según tu auth (JWT cookie o sesión).
 */
function getCurrentUserFromCookies() {
  // Ejemplo: token en cookie y parser; aquí retornamos un objeto simulado
  // Reemplaza por tu lógica real.
  //   const token = cookies().get("token")?.value;
  //   if (!token) return null;
  // decodificar token, obtener user id y rol...
  // Por simplicidad: assume coordinator id = 1
  return { id: 47, role: "COORDINADOR" };
}

export async function assignPointsAction(form: AssignPointsForm) {
  // 1) validar lo mínimo del form
  const parsed = assignPointsFullSchema.safeParse({
    ...form,
    // estos campos los añadimos localmente pero serán *revisados* más abajo
    coordinatorId: 1, // temporal, value replaced below
    cycleId: 1,
    points: 0,
  });

  // We don't strictly need parsed here; we will build fullData below.

  // 2) obtener usuario actual (coordinador) y ciclo actual (lógica real)
  const user = getCurrentUserFromCookies();
  if (!user) {
    return { ok: false, error: "No autorizado" };
  }
  const coordinatorId = user.id;

  // obtener ciclo activo (ejemplo)
  const cicloActivo = await prisma.ciclo.findFirst({ where: { activo: true } });
  if (!cicloActivo) return { ok: false, error: "No hay ciclo activo" };

  // 3) obtener actividad y sus puntos (validamos que exista)
  const activity = await prisma.actividad.findUnique({
    where: { id_actividad: parseInt(form.id_actividad) },
  });
  if (!activity) return { ok: false, error: "Actividad no encontrada" };

  const pointsValue = activity.puntos_participacion;

  // 4) construir lista de alumnos a asignar
  let alumnosIds: number[] = [];

  if (form.id_usuario) {
    alumnosIds = [parseInt(form.id_usuario)];
  } else {
    // group path: buscar alumnos por groupId
    if (!form.id_grupo) return { ok: false, error: "Grupo no seleccionado" };
    const students = await prisma.usuario.findMany({
      where: {
        rol: "ALUMNO",
        id_grupo: parseInt(form.id_grupo),
      },
      select: { id_usuario: true },
    });
    alumnosIds = students.map((s: { id_usuario: number }) => s.id_usuario);
  }

  if (alumnosIds.length === 0) {
    return { ok: false, error: "No hay alumnos para asignar" };
  }

  // 5) Crear registros en alumno_actividad en una transacción
  const ahora = new Date();
  const operations = alumnosIds.map((alumnoId) =>
    prisma.alumnoActividad.create({
      data: {
        id_alumno: alumnoId,
        id_actividad: activity.id_actividad,
        fecha_registro: ahora,
        id_coordinador: coordinatorId,
        id_ciclo: cicloActivo.id_ciclo,
      },
    }),
  );

  const created = await prisma.$transaction(operations);

  // 6) Registrar en registro_cambios (opcional)
  await prisma.registroCambios.create({
    data: {
      id_usuario: coordinatorId,
      modulo: "Asignación",
      accion: `Asignar puntos actividad ${activity.nombre}`,
      descripcion: `Se asignaron ${pointsValue} pts a ${alumnosIds.length} alumno(s) (actividad ${activity.id_actividad})`,
    },
  });

  const { sendPointsAssignedNotification } = NotificationService;

  let tokens = await prisma.fcmToken.findMany({
    where: {
      userId: { in: alumnosIds },
    },
    select: { token: true },
  });

  const tokensList = tokens.map((t) => t.token);

  await sendPointsAssignedNotification(tokensList, pointsValue);

  return { ok: true, count: created.length, created };
}

export async function bulkAssignPointsModuleAction(
  selectedIds: Record<number, number[]>,
  activitiesIds: number[],
  studentsIds: number[],
) {
  const id_coordinador = 137; // Obtener del contexto real
  const id_ciclo = 1; // Obtener ciclo activo real
  const fecha_registro = new Date();

  try {
    await prisma.$transaction(
      async (tx) => {
        // 1️⃣ Traer TODOS los registros existentes de una sola vez (batch query)
        const existentes = await tx.alumnoActividad.findMany({
          where: {
            id_alumno: { in: studentsIds },
            id_ciclo,
            id_actividad: { in: activitiesIds },
          },
          select: {
            id_alumno: true,
            id_actividad: true,
          },
        });

        // 2️⃣ Organizar existentes por alumno en memoria
        const existentesPorAlumno = new Map<number, Set<number>>();
        for (const registro of existentes) {
          if (!existentesPorAlumno.has(registro.id_alumno)) {
            existentesPorAlumno.set(registro.id_alumno, new Set());
          }
          existentesPorAlumno
            .get(registro.id_alumno)!
            .add(registro.id_actividad);
        }

        // 3️⃣ Calcular todos los inserts y deletes en memoria
        const todosLosInserts: Array<{
          id_alumno: number;
          id_actividad: number;
          id_ciclo: number;
          id_coordinador: number;
          fecha_registro: Date;
        }> = [];

        const todosLosDeletes: Array<{
          id_alumno: number;
          id_actividad: number;
        }> = [];

        for (const id_alumno of studentsIds) {
          const selectedSet = new Set<number>(selectedIds[id_alumno] ?? []);
          const existentesSet =
            existentesPorAlumno.get(id_alumno) || new Set<number>();

          // Calcular qué insertar (están seleccionados pero no existen)
          for (const id_actividad of selectedSet) {
            if (!existentesSet.has(id_actividad)) {
              todosLosInserts.push({
                id_alumno,
                id_actividad,
                id_ciclo,
                id_coordinador,
                fecha_registro,
              });
            }
          }

          // Calcular qué borrar (existen pero no están seleccionados)
          for (const id_actividad of existentesSet) {
            if (!selectedSet.has(id_actividad)) {
              todosLosDeletes.push({ id_alumno, id_actividad });
            }
          }
        }

        // 4️⃣ Ejecutar inserts en batch (una sola operación)
        if (todosLosInserts.length > 0) {
          await tx.alumnoActividad.createMany({
            data: todosLosInserts,
            skipDuplicates: true,
          });
        }

        // 5️⃣ Ejecutar deletes en batch (una sola operación)
        if (todosLosDeletes.length > 0) {
          // Para el deleteMany necesitamos construir las condiciones OR
          await tx.alumnoActividad.deleteMany({
            where: {
              OR: todosLosDeletes.map(({ id_alumno, id_actividad }) => ({
                id_alumno,
                id_actividad,
                id_ciclo,
              })),
            },
          });
        }
      },
      {
        maxWait: 10000,
        timeout: 20000,
      },
    );

    return { ok: true };
  } catch (error) {
    console.error("Error guardando alumno-actividades:", error);
    throw new Error("No se pudieron guardar las actividades");
  }
}

export async function bulkAssignPointsAction(data: {
  id_actividad: number;
  estudiantes: number[];
  date: string | Date;
  id_coordinador: number;
  id_ciclo: number;
  awards: Record<number, ActivityPrize>;
}) {
  try {
    const { id_actividad, estudiantes, date, id_coordinador, id_ciclo } = data;

    if (
      !id_actividad ||
      !Array.isArray(estudiantes) ||
      estudiantes.length === 0
    ) {
      console.log("Invalid input data:", data);
      return { ok: false, error: "id_actividad y estudiantes son requeridos" };
    }

    // Buscar cuales ya están registrados para esa actividad
    const existentes = await prisma.alumnoActividad.findMany({
      where: {
        id_actividad,
        id_alumno: { in: estudiantes },
      },
      select: { id_alumno: true },
    });
    const existentesSet = new Set(existentes.map((e) => e.id_alumno));

    // Preparar los registros a crear (salteando los existentes)
    const toCreate = estudiantes
      .filter((id) => !existentesSet.has(id))
      .map((id_alumno) => ({
        id_alumno,
        id_actividad,
        fecha_registro: new Date(date),
        id_coordinador,
        id_ciclo,
      }));

    if (toCreate.length === 0) {
      return {
        ok: false,
        error: "Todos los estudiantes ya están registrados en esa actividad",
        skipped: existentes.map((e) => e.id_alumno),
      };
    }

    // Crear los nuevos registros en bloque
    await prisma.alumnoActividad.createMany({ data: toCreate });

    // Recuperar los registros creados para devolver información completa
    const createdAlumnos = toCreate.map((t) => t.id_alumno);
    const registros = await prisma.alumnoActividad.findMany({
      where: {
        id_actividad,
        id_alumno: { in: createdAlumnos },
      },
      include: {
        alumno: true,
        actividad: true,
        coordinador: true,
      },
    });

    if (data.awards && Object.keys(data.awards).length > 0) {
      const winnersData = Object.entries(data.awards)
        // Filtrar premios vacíos donde id === 0 (no hubo premio)
        .filter(([, prize]) => prize && Number(prize.id) > 0)
        .map(([studentId, prize]) => ({
          actividadPremioId: Number(prize?.id),
          alumnoId: Number(studentId),
          actividadId_actividad: id_actividad,
        }));

      if (winnersData.length > 0) {
        // Insertar ganadores ignorando duplicados (gracias a @@unique([actividadPremioId, alumnoId]))
        await prisma.ganadorActividad.createMany({
          data: winnersData,
          skipDuplicates: true,
        });
      }
    }

    const { sendPointsAssignedNotification } = NotificationService;

    let tokens = await prisma.fcmToken.findMany({
      where: {
        userId: { in: estudiantes },
      },
      select: { token: true },
    });

    const tokensList = tokens.map((t) => t.token);

    await sendPointsAssignedNotification(
      tokensList,
      registros[0].actividad.puntos_participacion,
    );

    return {
      ok: true,
      created: registros,
      skipped: existentes.map((e) => e.id_alumno),
    };
  } catch (error) {
    console.error(error);
    return { ok: false, error: "Error del servidor" };
  }
}
