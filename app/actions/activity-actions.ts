"use server";

import { prisma } from "@/lib/prisma";
import {
  activityFullSchema,
  activitySchema,
  ActivitySchema,
} from "@/schemas/activity-schema";
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
    id_departamento: 1, // puedes obtenerlo por sesión
    id_coordinador: 137, // por rol / sesión
    id_ciclo: 1, // lógica interna
  };

  // 3. Validar nuevamente COMPLETO (opcional pero recomendado)
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
    },
  });

  if (formData.premios!.length > 0) {
    const premiosData = formData.premios!.map((premio) => ({
      actividadId: activity.id_actividad,
      lugar: premio.lugar,
      puntos: premio.puntos_otorgados,
    }));
    await prisma.actividadPremio.createMany({
      data: premiosData,
    });
  }

  return { ok: true, activity };
}

export async function updateActivityAction(
  activity: ActivitySchema,
  id: number
) {
  console.log("Updating activity in action...", activity);
  const updatedActivity = await prisma.actividad.update({
    where: { id_actividad: id },
    data: {
      nombre: activity.nombre,
      descripcion: activity.descripcion,
      fecha: new Date(activity.fecha_realizacion),
      puntos_participacion: activity.puntos_otorgados,
    },
  });
  return { ok: true, updatedActivity };
}

import { revalidatePath } from "next/cache";

// --- 1. FUNCIÓN MAPPER (EL SECRETO) ---
// Esta función convierte CUALQUIER resultado de Prisma al tipo Activity limpio
function mapPrismaActivityToFrontend(item: any): Activity {
  return {
    id_actividad: item.id_actividad,
    nombre: item.nombre,
    puntos_participacion: item.puntos_participacion,
    fecha: item.fecha,
    // Manejo de nulos: Si es null, lo pasamos a undefined
    descripcion: item.descripcion || undefined,
    // Aplanamiento: Sacamos el nombre del objeto departamento
    departamento: item.departamento?.nombre || "Sin departamento",
    // Mapeo de array anidado
    premios:
      item.premios?.map((p: any) => ({
        lugar: p.lugar,
        puntos_otorgados: p.puntos, // Renombramos 'puntos' a 'puntos_otorgados'
      })) || [],
  };
}

// --- 2. TUS ACTIONS OPTIMIZADOS ---

export async function getAllActivitiesAction(): Promise<Activity[]> {
  const activities = await prisma.actividad.findMany({
    orderBy: { fecha: "desc" },
    // Usamos include para traer todo de una vez (MUCHO más rápido)
    include: {
      departamento: {
        select: { nombre: true },
      },
      premios: true, // Trae todos los premios asociados automáticamente
    },
  });

  // Convertimos los datos "sucios" de DB a datos "limpios" de Frontend
  return activities.map(mapPrismaActivityToFrontend);
}

export async function getActivityByIdAction(
  id: number
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
