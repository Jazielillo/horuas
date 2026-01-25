import { z } from "zod";

/**
 * Lo que viene desde el formulario (lo que el usuario selecciona)
 */
export const assignPointsFormSchema = z.object({
  id_actividad: z.string().min(1, "Selecciona una actividad"),
  // opcion A: alumno individual
  id_usuario: z.string().nullable().optional(),
  // opcion B: grupo (nivel + groupId)
  year: z.enum(["1", "2", "3"]).nullable().optional(),
  id_grupo: z.string().nullable().optional(),
});

/**
 * Validación extra: debe venir activityId y (studentId XOR (year+groupId)).
 */
export const assignPointsFormRefined = assignPointsFormSchema.refine(
  (data) => {
    // require one of:
    const hasStudent = !!data.id_usuario;
    const hasGroup = !!data.year && !!data.id_grupo;
    return hasStudent || hasGroup;
  },
  {
    message: "Debes seleccionar un alumno o elegir año + grupo.",
    path: ["id_usuario"],
  }
);

/**
 * Schema completo/servidor: incluye datos que genera el servidor
 * (coordinadorId, cicloId, puntosFromActivity) y se usa antes de persistir.
 */
export const assignPointsFullSchema = assignPointsFormRefined.safeExtend({
  coordinatorId: z.number().int().min(1),
  cycleId: z.number().int().min(1),
  points: z.number().int().min(0),
});

export type AssignPointsForm = z.infer<typeof assignPointsFormRefined>;
export type AssignPointsFull = z.infer<typeof assignPointsFullSchema>;
