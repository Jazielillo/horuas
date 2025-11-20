"use server";

import { getUserRole } from "@/lib/check-role";
import { prisma } from "@/lib/prisma";
import {
  activityFormSchema,
  activityFullSchema,
  ActivitySchema,
} from "@/schemas/activity-schema";

export async function createActivityAction(formData: ActivitySchema) {
  // 1. Validar lo que viene del formulario
  const parsedForm = activityFormSchema.safeParse(formData);

  if (!parsedForm.success) {
    return {
      ok: false,
      errors: parsedForm.error.flatten().fieldErrors,
    };
  }

  // 2. Completar datos que NO están en el formulario
  const fullData = {
    ...parsedForm.data,
    id_departamento: 1, // puedes obtenerlo por sesión
    id_coordinador: 47, // por rol / sesión
    id_ciclo: 1, // lógica interna
  };

  // 3. Validar nuevamente COMPLETO (opcional pero recomendado)
  const parsedFull = activityFullSchema.parse(fullData);

  // 4. Guardar en la BD
  const activity = await prisma.actividad.create({
    data: {
      nombre: parsedFull.name,
      descripcion: parsedFull.description,
      fecha: new Date(parsedFull.date),
      puntos: parsedFull.points,
      id_departamento: parsedFull.id_departamento,
      id_coordinador: parsedFull.id_coordinador,
      id_ciclo: parsedFull.id_ciclo,
    },
  });

  return { ok: true, activity };
}

export async function getAllActivitiesAction() {
  const activities = await prisma.actividad.findMany({
    orderBy: { fecha: "desc" },
    select: {
      id_actividad: true,
      nombre: true,
      descripcion: true,
      fecha: true,
      puntos: true,
    },
  });
  return activities;
}
