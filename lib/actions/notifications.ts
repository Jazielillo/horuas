// src/app/actions/notifications.ts
"use server";

import { adminMessaging } from "@/lib/firebase-admin";
import { prisma } from "@/lib/prisma";

export async function registerDeviceToken(token: string, userId: number) {
  try {
    // 1. Guardar o actualizar el token en la DB
    // Usamos upsert para que si el token ya existe, solo actualice la fecha
    console.log("Registrando token para el usuario:", token, userId);
    await prisma.fcmToken.upsert({
      where: { token: token },
      update: {
        userId: userId,
        lastUsed: new Date(),
      },
      create: {
        token: token,
        userId: userId,
      },
    });

    // 2. Suscribir el token al tópico de "actividades"
    // Esto hace que Firebase le mande mensaje automáticamente
    // cuando alguien publique en ese canal.
    await adminMessaging.subscribeToTopic(token, "actividades");

    return { success: true, message: "Token registrado y suscrito con éxito" };
  } catch (error) {
    console.error("Error en registerDeviceToken:", error);
    return { success: false, error: "No se pudo registrar el dispositivo" };
  }
}
