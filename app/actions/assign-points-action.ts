"use server";

import { assignPointsFullSchema, AssignPointsForm } from "@/schemas/assign-points-schema";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

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

  const pointsValue = activity.puntos;

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
    alumnosIds = students.map((s) => s.id_usuario);
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
        puntos_otorgados: pointsValue,
        fecha_registro: ahora,
        id_coordinador: coordinatorId,
        id_ciclo: cicloActivo.id_ciclo,
      },
    })
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

  return { ok: true, count: created.length, created };
}
