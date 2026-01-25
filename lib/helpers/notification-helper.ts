// src/lib/notification-service.ts

import { adminMessaging } from "@/lib/firebase-admin";

export const NotificationService = {
  // Para cuando se crea una actividad (Tópico)
  async sendNewActivityNotification(
    title: string,
    body: string,
    activityId: string,
  ) {
    const message = {
      topic: "actividades",
      data: {
        title: title,
        body: body,
        url: `/alumno/detalle-actividad/${activityId}`,
        type: "new_activity",
        activityId: activityId,
      },
      webpush: {
        fcmOptions: {
          link: `/alumno/detalle-actividad/${activityId}`,
        },
      },
    };

    await adminMessaging.send(message);
  },

  // Para cuando se asignan puntos (Individual)
  async sendPointsAssignedNotification(
    tokens: string[],
    points: number,
    departament: string,
  ) {
    if (tokens.length === 0) return;

    const message = {
      tokens,
      data: {
        title: "¡Puntos asignados! 🏆",
        body: `Se te han asignado ${points} puntos de ${departament}.`,
        url: "/alumno/historial",
        type: "points_assigned",
        points: points.toString(),
      },
      webpush: {
        fcmOptions: {
          link: "/alumno/historial",
        },
      },
    };

    await adminMessaging.sendEachForMulticast(message);
  },
};
