"use server";

import { prisma } from "@/lib/prisma";
import {
  activityFullSchema,
  activitySchema,
  ActivitySchema,
} from "@/lib/schemas/activity-schema";
import { Activity } from "../models";
import z from "zod";

export async function createActivityAction(formData: ActivitySchema) {
  // 1. Validar lo que viene del formulario
  const parsedForm = activitySchema.safeParse(formData);

  if (!parsedForm.success) {
    return {
      ok: false,
      errors: z.treeifyError(parsedForm.error),
    };
  }

  // 2. Completar datos que NO están en el formulario
  const fullData = {
    ...parsedForm.data,
    id_departamento: formData.departamento === "Deportes" ? 1 : 2, // puedes obtenerlo por sesión
    id_coordinador: 137, // por rol / sesión
    id_ciclo: 1, // lógica interna
  };

  // 3. Validar nuevamente COMPLETO (opcional pero recomendado)
  console.log(formData.fecha_realizacion, "FECHA REALIZACION");
  const parsedFull = activityFullSchema.parse(fullData);

  // 4. Guardar en la BD
  const activity = await prisma.actividad.create({
    data: {
      nombre: parsedFull.nombre,
      descripcion: parsedFull.descripcion,
      fecha: new Date(parsedFull.fecha_realizacion),
      puntos_participacion: parsedFull.puntos_otorgados,
      id_departamento: parsedFull.id_departamento,
      id_coordinador: parsedFull.id_coordinador,
      id_ciclo: parsedFull.id_ciclo,
      actividad_grupal: parsedFull.actividad_grupal || false,
      enlace_participacion: parsedFull.enlace_participacion || "",
      foto_url: parsedFull.foto_url || "",
      hora_actividad: parsedFull.hora_actividad || "",
      ubicacion: parsedFull.ubicacion || "",
      descripcion_promocion_alumnos:
        parsedFull.descripcion_promocion_alumnos || "",
    },
  });

  if (formData.premio!.length > 0) {
    const premiosData = formData.premio!.map((premio) => ({
      actividadId: activity.id_actividad,
      lugar: premio.lugar,
      puntos: premio.puntos_otorgados,
    }));
    await prisma.actividadPremio.createMany({
      data: premiosData,
    });
  }

  const { sendNewActivityNotification } = NotificationService;
  await sendNewActivityNotification(
    "Nueva Actividad Disponible",
    `Se ha creado la actividad: ${activity.nombre}. ¡Consulta los detalles y participa!`,
    activity.id_actividad.toString(),
  );
  return { ok: true, activity };
}

export async function updateActivityAction(
  activity: ActivitySchema,
  id: number,
) {
  console.log("Updating activity in action...", activity);
  await prisma.actividad.update({
    where: { id_actividad: id },
    data: {
      id_departamento: activity.departamento === "Deportes" ? 1 : 2,
      nombre: activity.nombre,
      descripcion: activity.descripcion,
      fecha: new Date(activity.fecha_realizacion),
      puntos_participacion: activity.puntos_otorgados,
      actividad_grupal: activity.actividad_grupal || false,
      enlace_participacion: activity.enlace_participacion || "",
      foto_url: activity.foto_url || "",
      hora_actividad: activity.hora_actividad || "",
      ubicacion: activity.ubicacion || "",
      descripcion_promocion_alumnos:
        activity.descripcion_promocion_alumnos || "",
    },
  });
  console.log(
    "Activity updated, now handling prizes...",
    activity.premio?.length,
  );
  if (activity?.premio && activity.premio?.length > 0) {
    // Obtener premios existentes para esta actividad
    console.log("Activity has prizes to update:", activity.premio);
    const existingPrizes = await prisma.actividadPremio.findMany({
      where: { actividadId: id },
    });
    const existingIds = new Set(existingPrizes.map((p) => p.id));

    const incomingIds = new Set<number>();
    const ops: any[] = [];

    for (const premio of activity.premio) {
      // Si viene con id y pertenece a esta actividad, lo actualizamos
      if (premio.id && existingIds.has(premio.id)) {
        incomingIds.add(premio.id);
        ops.push(
          prisma.actividadPremio.update({
            where: { id: premio.id },
            data: {
              lugar: premio.lugar ?? undefined,
              puntos: premio.puntos_otorgados,
              actividadId: id,
            },
          }),
        );
      } else {
        // Si no tiene id (o no pertenece), lo creamos como nuevo
        ops.push(
          prisma.actividadPremio.create({
            data: {
              lugar: premio.lugar ?? undefined,
              puntos: premio.puntos_otorgados,
              actividadId: id,
            },
          }),
        );
      }
    }

    // Borrar los premios que existen en BD pero no vinieron en el payload
    const idsToDelete = existingPrizes
      .map((p) => p.id)
      .filter((existingId) => !incomingIds.has(existingId));

    if (idsToDelete.length > 0) {
      ops.push(
        prisma.actividadPremio.deleteMany({
          where: { id: { in: idsToDelete } },
        }),
      );
    }

    // Ejecutar todas las operaciones en una transacción
    await prisma.$transaction(ops);
  } else {
    // Si no viene ningún premio en el payload => eliminar todos los premios de la actividad
    await prisma.actividadPremio.deleteMany({
      where: { actividadId: id },
    });
  }

  return { ok: true };
}

import { revalidatePath } from "next/cache";
import { checkIdUsuario } from "@/lib/check-id-usuario";
import { NotificationService } from "../helpers/notification-helper";
import { getSession } from "../session";

// --- 1. FUNCIÓN MAPPER (EL SECRETO) ---
// Esta función convierte CUALQUIER resultado de Prisma al tipo Activity limpio
function mapPrismaActivityToFrontend(item: any): Activity {
  return {
    id_actividad: item.id_actividad,
    nombre: item.nombre,
    puntos_participacion: item.puntos_participacion,
    fecha: item.fecha.toISOString().split("T")[0],
    // Manejo de nulos: Si es null, lo pasamos a undefined
    descripcion: item.descripcion || undefined,
    // Aplanamiento: Sacamos el nombre del objeto departamento
    departamento: item.departamento?.nombre || "Sin departamento",
    // Mapeo de array anidado
    hora_actividad: item.hora_actividad || undefined,
    ubicacion: item.ubicacion || undefined,
    descripcion_promocion_alumnos:
      item.descripcion_promocion_alumnos || undefined,
    premio:
      item.premios?.map((p: any) => ({
        id: p.id,
        lugar: p.lugar,
        puntos_otorgados: p.puntos, // Renombramos 'puntos' a 'puntos_otorgados'
      })) || [],
    enlace_participacion: item.enlace_participacion || undefined,
    foto_url: item.foto_url || undefined,
    actividad_grupal: item.actividad_grupal || false,
  };
}

function normalizeToLocalDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// --- 2. TUS ACTIONS OPTIMIZADOS ---

export async function getAllActivitiesAction({
  ciclo_id,
  departamento_id,
  onlyClubs,
}: {
  onlyClubs?: boolean;
  ciclo_id?: number;
  departamento_id?: number;
}): Promise<Activity[]> {
  let role = await getSession().then((session) => session?.role);
  const where: any = {
    id_departamento: {
      not: 4, // Excluir departamento 4
    },
  };
  if (ciclo_id != null) where.id_ciclo = ciclo_id;
  if (departamento_id != null) where.id_departamento = departamento_id;
  if (onlyClubs) where.actividad_grupal = true;

  if (role === "COORDINADOR_DEPORTES") {
    where.id_departamento = 1;
  } else if (role === "COORDINADOR_CULTURA") {
    where.id_departamento = 2;
  }

  const activities = await prisma.actividad.findMany({
    where,
    orderBy: { fecha: "desc" },
    include: {
      departamento: { select: { nombre: true } },
      premios: true,
    },
  });

  // Convertimos los datos "sucios" de DB a datos "limpios" de Frontend
  return activities.map(mapPrismaActivityToFrontend);
}

export async function getOrientacionActivitiesAction(): Promise<Activity[]> {
  const activities = await prisma.actividad.findMany({
    where: {
      departamento: {
        nombre: "Orientación Educativa",
      },
    },
    orderBy: { id_actividad: "asc" },
    include: {
      departamento: { select: { nombre: true } },
      premios: true,
    },
  });
  // Convertimos los datos "sucios" de DB a datos "limpios" de Frontend
  return activities.map(mapPrismaActivityToFrontend);
}

export async function getServicioSocialActivitiesAction(): Promise<Activity[]> {
  const activities = await prisma.actividad.findMany({
    where: {
      departamento: {
        nombre: "Servicio Social",
      },
    },
    orderBy: { id_actividad: "asc" },
    include: {
      departamento: { select: { nombre: true } },
      premios: true,
    },
  });

  console.log(activities);
  // Convertimos los datos "sucios" de DB a datos "limpios" de Frontend
  return activities.map(mapPrismaActivityToFrontend);
}

export async function getActivityByIdAction(
  id: number,
): Promise<Activity | null> {
  const activity = await prisma.actividad.findUnique({
    where: { id_actividad: id },
    include: {
      departamento: {
        select: { nombre: true },
      },
      premios: true,
    },
  });

  if (!activity) return null;

  return mapPrismaActivityToFrontend(activity);
}

// ... tus create/update actions aquí ...

export async function getActivitiesPrizesAction(activity_id: number) {
  const premios = await prisma.actividadPremio.findMany({
    where: { actividadId: activity_id },
  });
  return premios.map((p) => ({
    id: p.id,
    lugar: p.lugar,
    puntos_otorgados: p.puntos,
  }));
}

export async function updatePrizeAction(
  prizeId: number,
  alumnoId: number,
  actividadId: number,
) {
  if (prizeId === 0) {
    await prisma.ganadorActividad.deleteMany({
      where: {
        alumnoId: alumnoId,
        actividadId_actividad: actividadId,
      },
    });
    const actividad = await prisma.actividad.findUnique({
      where: { id_actividad: actividadId },
      include: {
        departamento: { select: { nombre: true } },
      },
    });
    return mapPrismaActivityToFrontend(actividad);
  }
  const existingWinner = await prisma.ganadorActividad.findFirst({
    where: {
      alumnoId: alumnoId,
      actividadId_actividad: actividadId,
    },
  });

  if (existingWinner) {
    // 2. Si existe, actualizamos el registro para apuntar al nuevo premio (prizeId)
    await prisma.ganadorActividad.update({
      where: { id: existingWinner.id },
      data: {
        actividadPremioId: prizeId,
      },
    });
  } else {
    // 3. Si no existe, creamos un nuevo registro
    await prisma.ganadorActividad.create({
      data: {
        alumnoId: alumnoId,
        actividadPremioId: prizeId,
        actividadId_actividad: actividadId,
      },
    });
  }
  const actividad = await prisma.actividad.findUnique({
    where: { id_actividad: actividadId },
    include: {
      departamento: { select: { nombre: true } },
      premios: true,
    },
  });

  if (!actividad) return null;

  return mapPrismaActivityToFrontend(actividad);
}

export async function deleteActivityStudentAction(
  id_actividad: number,
  id_alumno: number,
  descripcion: string = "",
) {
  // Eliminar premios asociados primero para mantener la integridad referencial

  const actividad = await prisma.actividad.findUnique({
    where: { id_actividad },
  });

  const id_usuario = (await checkIdUsuario()) ?? 0;
  const alumno = await prisma.usuario.findUnique({
    where: { id_usuario: id_usuario },
  });

  await prisma.ganadorActividad.deleteMany({
    where: {
      actividadId_actividad: id_actividad,
      alumnoId: id_alumno,
    },
  });
  await prisma.alumnoActividad.deleteMany({
    where: {
      id_actividad,
      id_alumno,
    },
  });

  await prisma.registroCambios.create({
    data: {
      id_usuario: id_usuario,
      accion: `Eliminó la actividad ${actividad?.nombre} para el alumno ${alumno?.num_cuenta} | ${alumno?.nombre}`,
      descripcion,
      fecha: new Date(),
      modulo: "Gestión de Actividades",
    },
  });

  return { ok: true };
}

export async function getFutureActivitiesAction(): Promise<Activity[]> {
  const today = new Date();
  const activities = await prisma.actividad.findMany({
    where: {
      fecha: {
        gte: today,
      },
    },
    orderBy: { fecha: "desc" },
    include: {
      departamento: { select: { nombre: true } },
      premios: true,
    },
  });
  return activities.map(mapPrismaActivityToFrontend);
}

export async function fetchActivitiesModule({
  studentIds,
  activityIds,
}: {
  studentIds: number[];
  activityIds: number[];
}) {
  const alumnoActividades = await prisma.alumnoActividad.findMany({
    where: {
      id_alumno: { in: studentIds },
      id_actividad: { in: activityIds },
    },
    select: {
      id_alumno: true,
      id_actividad: true,
    },
  });

  return alumnoActividades;
}
