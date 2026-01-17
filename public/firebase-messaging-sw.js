// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Aquí repites tu config (SÍ, es redundante, pero el Service Worker
// vive aislado del resto de tu app y necesita saber quién es).
const firebaseConfig = {
  apiKey: "AIzaSyBPw5OKeXgskxW7j83KoWRjt2vYdQ55r-M",
  authDomain: "puntos-uas.firebaseapp.com",
  projectId: "puntos-uas",
  storageBucket: "puntos-uas.firebasestorage.app",
  messagingSenderId: "536411777813",
  appId: "1:536411777813:web:c15bf526d58a3a7de4971c"
};


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Este evento es opcional, sirve para manejar qué pasa cuando
// recibes la notificación en segundo plano.
messaging.onBackgroundMessage((payload) => {
  console.log('Mensaje en segundo plano:', payload);

  const notificationTitle = payload.notification.title || "Nueva Notificación";
  const notificationOptions = {
    body: payload.notification.body || "Tienes un mensaje nuevo.",
    icon: '/logo.png', // USA EL MISMO DE TU MANIFEST
    badge: '/logo.png', // Este es el iconito pequeño que sale en la barra de estado
    data: {
      url: payload.data?.url || '/' // Puedes enviar una URL para que al dar click abra esa página
    }
  };

  // Esto es lo que "despierta" la notificación en el sistema operativo
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// EVENTO EXTRA: Qué pasa cuando el usuario hace CLICK en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // Cierra la notificación
  const urlToOpen = event.notification.data.url;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Si la app está abierta, enfocarla
      for (let client of windowClients) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // Si no está abierta, abrir una nueva pestaña
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});