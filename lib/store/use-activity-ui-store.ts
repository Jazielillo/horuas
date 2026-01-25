import { create } from "zustand";

interface ActivityUIState {
  onlyClubs: boolean;
}

interface ActivityUIActions {
  setOnlyClubs: (value: boolean) => void;
  reset: () => void;
}

export const useActivityUIStore = create<ActivityUIState & ActivityUIActions>(
  (set) => ({
    onlyClubs: false,

    setOnlyClubs: (value) => set({ onlyClubs: value }),

    reset: () => set({ onlyClubs: false }),
  }),
);
