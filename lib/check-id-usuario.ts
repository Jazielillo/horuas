import { cookies } from "next/headers";
import { getSession } from "./session";

export const checkIdUsuario = async () => {
  const id_usuario = await getSession().then((session) => session?.id_usuario);
  return id_usuario ? Number(id_usuario) : null;
};
