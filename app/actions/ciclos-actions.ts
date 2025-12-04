"use server";
import { prisma } from "@/lib/prisma";
import { Ciclo } from "../models/ciclo";

export const getCiclosAction = async () => {
  const ciclos = await prisma.ciclo.findMany({
    orderBy: { fecha_inicio: "desc" },
  });

  return ciclos.map(mapCicloToModel);
};

const mapCicloToModel = (cicloData: any): Ciclo => {
  return {
    id_ciclo: cicloData.id_ciclo,
    nombre: cicloData.nombre,
    fecha_inicio: cicloData.fecha_inicio,
    fecha_fin: cicloData.fecha_fin,
  };
};
