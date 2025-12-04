import { Alumno } from "./alumno";

export type AlumnoCompleto = {
  alumno: Alumno;
  puntos: {
    total: number;
    deportes: number;
    cultura: number;
  };
  actividades: Array<{
    id_actividad: number;
    ciclo: string;
    nombre: string;
    fecha: Date;
    departamento: string;
    participacion: boolean;
    premio: {
      id: number;
      lugar: number | null;
      puntos_otorgados: number;
    } | null;
    puntos_participacion: number;
  }>;
};
