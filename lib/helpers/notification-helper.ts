// src/lib/notification-service.ts

import { adminMessaging } from "@/lib/firebase-admin";

export const NotificationService = {
  // Para cuando se crea una actividad (Tópico)
  async sendNewActivityNotification(title: string, body: string, activityId: string) {
    const message = {
      notification: { title, body },
      topic: "actividades",
      // Data es opcional, sirve para enviar IDs y redirigir en la app
      data: { 
        url: `/alumno/detalle-actividad/${activityId}`,
        type: "new_activity",
        activityId: activityId
      },
      webpush: {
        fcmOptions: {
          link: `/alumno/detalle-actividad/${activityId}`
        }
      }
    };
    return adminMessaging.send(message);
  },

  // Para cuando se asignan puntos (Individual)
  async sendPointsAssignedNotification(tokens: string[], points: number, departament: string) {
    if (tokens.length === 0) return;

    const message = {
      notification: {
        title: "¡Puntos asignados! 🏆",
        body: `Se te han asignado ${points} puntos de ${departament}.`,
      },
      tokens: tokens, // Array de tokens del alumno
      data: {
        url: "/alumno/historial",
        type: "points_assigned",
        points: points.toString()
      },
      webpush: {
        fcmOptions: {
          link: "/alumno/historial"
        }
      }
    };
    return adminMessaging.sendEachForMulticast(message);
  },
};
