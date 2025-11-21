import { cookies } from "next/headers";

export async function getUserRole() {
  const role = (await cookies()).get("role")?.value;
  return role;
}
