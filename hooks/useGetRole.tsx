import { getUserRole } from "@/lib/check-role";
import { useEffect, useState } from "react";

export const useGetRole = () => {
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    getUserRole().then(setRole);
  }, []);

  return role;
};
