import { requestNotificationPermission } from "@/lib/firebase";
import { registerDeviceToken } from "../actions/notifications";
import { getSession } from "@/lib/session";

export const solicitarPermiso = async () => {
  try {
    const currentToken = await requestNotificationPermission();
    const session = await getSession(); // Asume que tienes una función para obtener la sesión
    if (currentToken) {
      // LLAMADA AL SERVER ACTION
      const result = await registerDeviceToken(
        currentToken,
        session?.id_usuario ?? 0,
      );

      if (result.success) {
        console.log("¡Todo listo! Dispositivo vinculado y suscrito.");
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
