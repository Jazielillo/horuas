// models/activity.ts

// Este es el tipo para un premio individual dentro de la actividad
export type ActivityPrize = {
  id: number;
  lugar: number | null; // Prisma dice que puede ser null
  puntos_otorgados: number; // En DB se llama 'puntos', aquí lo mapeamos
} | null;

// Este es tu DTO (Data Transfer Object) principal
export type Activity = {
  id_actividad: number;
  nombre: string;
  puntos_participacion: number;
  ciclo?: string;
  // Aquí está el truco: En DB es un objeto, aquí lo queremos plano (string)
  departamento: string;
  descripcion?: string; // Usamos '?' para que sea undefined en lugar de null
  fecha: Date;
  enlace_participacion?: string;
  foto_url?: string;
  actividad_grupal?: boolean;
  premio: ActivityPrize[] ;
};
