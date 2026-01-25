// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js",
);

// Aquí repites tu config (SÍ, es redundante, pero el Service Worker
// vive aislado del resto de tu app y necesita saber quién es).
const firebaseConfig = {
  apiKey: "AIzaSyBPw5OKeXgskxW7j83KoWRjt2vYdQ55r-M",
  authDomain: "puntos-uas.firebaseapp.com",
  projectId: "puntos-uas",
  storageBucket: "puntos-uas.firebasestorage.app",
  messagingSenderId: "536411777813",
  appId: "1:536411777813:web:c15bf526d58a3a7de4971c",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Este evento es opcional, sirve para manejar qué pasa cuando
// recibes la notificación en segundo plano.
messaging.onBackgroundMessage((payload) => {
  messaging.onBackgroundMessage((payload) => {
    const { title, body, url } = payload.data;

    self.registration.showNotification(title ?? "Notificación", {
      body: body ?? "",
      icon: "/icons/icon-192x192.png",
      badge: "/icons/icon-72x72.png",
      data: { url: url ?? "/" },
    });
  });
});

// EVENTO EXTRA: Qué pasa cuando el usuario hace CLICK en la notificación
self.addEventListener("notificationclick", (event) => {
  event.notification.close(); // Cierra la notificación
  const urlToOpen = new URL(event.notification.data.url, self.location.origin)
    .href;

  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((windowClients) => {
        // Si la app está abierta en cualquier URL, enfocarla y navegar
        for (let client of windowClients) {
          if ("focus" in client) {
            client.focus();
            return client.navigate(urlToOpen);
          }
        }
        // Si no está abierta, abrir una nueva pestaña
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      }),
  );
});
