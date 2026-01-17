"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Spinner></Spinner>
    </div>
  );
}

// // src/app/page.js
// "use client"; // Obligatorio porque usamos hooks y navegador

// import { useEffect, useState } from "react";
// import { requestNotificationPermission, onMessageListener } from "@/lib/firebase";
// import { solicitarPermiso } from "./helpers/request-permission";

// export default function Home() {
//   const [token, setToken] = useState("");
//   const [permission, setPermission] = useState("default");

  

//   // Escuchar mensajes cuando la app está ABIERTA (Primer plano)
//   useEffect(() => {
//     onMessageListener((payload) => {
//       console.log("Mensaje recibido en primer plano:", payload);
//       alert(`Nueva notificación: ${payload.notification?.title || "Sin título"}`);
//     });
//   }, []);

//   return (
//     <div style={{ padding: 50 }}>
//       <h1>Prueba de Notificaciones PWA</h1>

//       <p>
//         Estado del permiso: <strong>{permission}</strong>
//       </p>

//       <button
//         onClick={() => solicitarPermiso()}
//         style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
//       >
//         Activar Notificaciones
//       </button>

//       {token && (
//         <div style={{ marginTop: 20 }}>
//           <h3>Tu Token (Cópialo para probar):</h3>
//           <textarea
//             readOnly
//             value={token}
//             style={{ width: "100%", height: "100px" }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
