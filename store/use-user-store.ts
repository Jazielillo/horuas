import { User } from "@/app/models/user";
import { getUserRole } from "@/lib/check-role";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserStore {
  user: User | null;
  getRole: () => string | null;
}

export const useUserStore = create<UserStore>()(
  devtools((set) => ({
    user: null,
    setUser: (user: User | null) => set({ user }),
    getRole: () => {
      return getUserRole();
    },
  }))
);
