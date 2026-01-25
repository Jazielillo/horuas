export type Alumno = {
  id_usuario: number;
  nombre: string;
  num_cuenta: string;
  puntos?: {
    total: number;
    deportes: number;
    cultura: number;
  };
  grupo?: string;
};
