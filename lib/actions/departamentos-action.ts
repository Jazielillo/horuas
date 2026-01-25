'use server';
import { prisma } from "@/lib/prisma";

export const getDepartamentosAction = async () => {
  const departamentos = await prisma.departamento.findMany({
    orderBy: { nombre: "asc" },
    include: {
      planDeptos: {
        select: { puntos_requeridos: true },
      },
    },
  });
  return departamentos.map(mapDepartamentoToModel);
};

const mapDepartamentoToModel = (departamentoData: any) => {
  return {
    id_departamento: departamentoData.id_departamento,
    nombre: departamentoData.nombre,
    puntos_asignados: departamentoData.planDeptos.puntos_requeridos,
  };
};
