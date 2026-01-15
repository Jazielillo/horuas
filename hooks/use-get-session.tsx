import { getSession } from "@/lib/session";

export const useGetRole = async () => {
  const role = await getSession().then((sess) => sess?.role);
  return role;
};
