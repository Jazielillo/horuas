// src/lib/notification-service.ts

import { adminMessaging } from "@/lib/firebase-admin";

export const NotificationService = {
  // Para cuando se crea una actividad (Tópico)
  async sendNewActivityNotification(title: string, body: string) {
    const message = {
      notification: { title, body },
      topic: "actividades",
      // Data es opcional, sirve para enviar IDs y redirigir en la app
      data: { url: "/actividades" },
    };
    return adminMessaging.send(message);
  },

  // Para cuando se asignan puntos (Individual)
  async sendPointsAssignedNotification(tokens: string[], points: number) {
    console.log("Enviando notificación a tokens:", tokens);
    if (tokens.length === 0) return;

    const message = {
      notification: {
        title: "¡Puntos asignados! 🏆",
        body: `Se te han asignado ${points} puntos extracurriculares.`,
      },
      tokens: tokens, // Array de tokens del alumno
    };
    return adminMessaging.sendEachForMulticast(message);
  },
};
