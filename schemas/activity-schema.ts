import { z } from "zod";

export const activityFormSchema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().max(500).optional().or(z.literal("")),
  date: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), "Fecha inválida"),
  points: z.number().min(1),
});

export type ActivitySchema = z.infer<typeof activityFormSchema>;

export const activityFullSchema = activityFormSchema.extend({
  id_departamento: z.number().int().min(1),
  id_coordinador: z.number().int().min(1),
  id_ciclo: z.number().int().min(1),
});
