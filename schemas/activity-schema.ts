import { z } from "zod";

// export const activityFormSchema = z.object({
//   nombre: z.string({ error: "El nombre es obligatorio" }).min(3).max(100),
//   descripcion: z.string({ error: "La descripción es obligatoria" }).max(500).or(z.literal("")),
//   fecha_realizacion: z
//     .string({ error: "La fecha de realización es obligatoria" })
//     .refine((value) => !isNaN(Date.parse(value)), "Fecha inválida"),
//   puntos_otorgados: z.number({ error: "Los puntos otorgados son obligatorios" }).min(1),
// });

// export type ActivitySchema = z.infer<typeof activityFormSchema>;

export const activitySchema = z.object({
  nombre: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  descripcion: z
    .string()
    .min(10, { message: "La descripción debe ser más detallada" }),
  fecha_realizacion: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "Fecha inválida",
    }),
  puntos_otorgados: z
    .number({ error: "Los puntos otorgados son obligatorios" })
    .min(0, { message: "Los puntos deben ser al menos 0" }),
  departamento: z
    .string()
    .min(3, { message: "El departamento es obligatorio" }),
  enlace_participacion: z.string().optional(),
  foto_url: z.string().optional(),
  actividad_grupal: z.boolean().optional(),
  hora_actividad: z.string().optional(),
  ubicacion: z.string().optional(),
  descripcion_promocion_alumnos: z.string().optional(),
  // Aquí está la magia para tu array opcional de premios
  premio: z
    .array(
      z.object({
        id: z.number().optional(), // Para actualizaciones, puede venir con ID
        lugar: z.number(),
        puntos_otorgados: z.number().min(1, { message: "Mínimo 1 punto" }),
      })
    )
    .max(5, { message: "Máximo 5 lugares" }) // Limitamos el array a 5
    .superRefine((items, ctx) => {
      // Recorremos el array empezando desde el segundo elemento (índice 1)
      items.forEach((item, index) => {
        // Si es el primer elemento (Lugar 1), no tiene anterior con quien compararse
        if (index === 0) return;

        const currentPoints = item.puntos_otorgados;
        const prevItem = items[index - 1];
        const prevPoints = prevItem.puntos_otorgados;

        // LÓGICA: El actual debe ser MENOR al anterior
        if (currentPoints >= prevPoints) {
          ctx.addIssue({
            code: "custom",
            // Mensaje dinámico explicativo
            message: `Debe ser menor al lugar ${prevItem.lugar} (${prevPoints} pts)`,
            // ESTO ES CLAVE: Le dice a RHF exactamente qué input marcar en rojo
            path: [index, "puntos_otorgados"],
          });
        }
      });
    })
    .optional(),
});

// Inferimos el tipo de TypeScript desde el esquema Zod
export type ActivitySchema = z.infer<typeof activitySchema>;

export const activityFullSchema = activitySchema.extend({
  id_departamento: z.number().int().min(1),
  id_coordinador: z.number().int().min(1),
  id_ciclo: z.number().int().min(1),
});
