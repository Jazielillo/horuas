import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCiclosAction } from "../actions/ciclos-actions";
import { getDepartamentosAction } from "../actions/departamentos-action";
import { Ciclo } from "../models/ciclo";
import { Departamento } from "../models/departamento";

interface CatalogState {
  ciclos: Ciclo[];
  departamentos: Departamento[];
  cicloSelectedId: number | null;
  departamentoSelectedId: number | null;
}

interface CatalogActions {
  fetchCiclos: () => Promise<void>;
  fetchDepartamentos: () => Promise<void>;
  selectCiclo: (id: number | null) => void;
  selectDepartamento: (id: number | null) => void;
  reset: () => void;
}

export const useCatalogStore = create<CatalogState & CatalogActions>()(
  devtools((set) => ({
    ciclos: [],
    departamentos: [],
    cicloSelectedId: null,
    departamentoSelectedId: null,

    fetchCiclos: async () => {
      const ciclos = await getCiclosAction();
      set({ ciclos });
    },

    fetchDepartamentos: async () => {
      const departamentos = await getDepartamentosAction();
      set({ departamentos });
    },

    selectCiclo: (id) => set({ cicloSelectedId: id }),

    selectDepartamento: (id) => set({ departamentoSelectedId: id }),

    reset: () =>
      set({
        ciclos: [],
        departamentos: [],
        cicloSelectedId: null,
        departamentoSelectedId: null,
      }),
  })),
);
