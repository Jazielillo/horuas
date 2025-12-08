export type User = {
  id: number;
  name: string;
  role: 'COORDINADOR' | 'ADMINISTRADOR' | 'COORDINADOR_AUXILIAR' | 'ALUMNO'
};