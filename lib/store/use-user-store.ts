import { User } from "@/lib/models/user";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>()(
  devtools((set) => ({
    user: null,
    setUser: (user: User | null) => set({ user }),
  })),
);