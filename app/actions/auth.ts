"use server";
import { prisma } from "@/app/lib/prisma";
import { FormState, LoginFormSchema } from "@/app/lib/definitions";
import { createSession, deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    num_cuenta: formData.get("num_cuenta"),
    nip: formData.get("nip"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
  const data = await prisma.usuario.findFirst({
    where: {
      num_cuenta: validatedFields.data.num_cuenta,
      nip: validatedFields.data.nip,
    },
  });

  const user = data;

  if (!user) {
    return {
      message: "Número de cuenta o NIP incorrectos.",
    };
  }

  await createSession(user.id_usuario, user.num_cuenta, user.rol);

  // 🔥 Redirigir desde el server action
  if (user.rol === "COORDINADOR") redirect("/coordinador/actividades");
  if (user.rol === "ALUMNO") redirect("/alumno");
  return;
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
