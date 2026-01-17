// src/lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  isSupported,
  Messaging,
} from "firebase/messaging";

// 1. Pega aquí tu configuración del Paso 1
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Inicializamos la app (evita reinicializar)
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Función helper para obtener messaging de forma segura
export const getMessagingInstance = async (): Promise<Messaging | null> => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(app);
    }
    return null;
  } catch (err) {
    console.error("Firebase messaging not supported:", err);
    return null;
  }
};

// Modifica tu función requestNotificationPermission en lib/firebase.ts
export const requestNotificationPermission = async () => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return null;
  }

  try {
    // 1. Registrar el Service Worker explícitamente
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js",
    );
    console.log("Service Worker registrado con éxito:", registration);

    const messaging = await getMessagingInstance();
    if (!messaging) return null;

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // 2. Pasar el 'serviceWorkerRegistration' al obtener el token
      const token = await getToken(messaging, {
        vapidKey: process.env.VAPID_KEY,
        serviceWorkerRegistration: registration, // ESTO ES CLAVE
      });
      return token;
    }
  } catch (error) {
    console.error("Error al registrar SW o pedir token:", error);
    return null;
  }
};

// Función para escuchar mensajes en primer plano
export const onMessageListener = async (callback: (payload: any) => void) => {
  const messaging = await getMessagingInstance();
  if (!messaging) {
    return () => {};
  }

  return onMessage(messaging, (payload) => {
    console.log("Message received:", payload);
    callback(payload);
  });
};

export { app };
