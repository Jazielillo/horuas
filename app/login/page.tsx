"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { cookies } from "next/headers";
// export default function LoginPage() {
//   const router = useRouter();

//   const [num_cuenta, setNum_cuenta] = useState("");
//   const [nip, setNip] = useState("");
//   const [error, setError] = useState("");

//   async function handleLogin(e: React.FormEvent) {
//     e.preventDefault();

//     const res = await fetch("/api/auth/login", {
//       method: "POST",
//       body: JSON.stringify({ num_cuenta, nip }),
//       headers: { "Content-Type": "application/json" },
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       setError(data.error);
//       return;
//     }

//     // Redireccionamos según rol
//     if (data.role === "COORDINADOR") router.push("/coordinador");
//     if (data.role === "ADMIN") router.push("/administrador");
//     if (data.role === "ALUMNO") router.push("/alumno");
//   }

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <form onSubmit={handleLogin} className="p-6 border rounded w-96">
//         <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>

//         <input
//           type="text"
//           placeholder="Número de cuenta"
//           className="w-full border p-2 rounded mb-3"
//           value={num_cuenta}
//           onChange={(e) => setNum_cuenta(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Contraseña"
//           className="w-full border p-2 rounded mb-3"
//           value={nip}
//           onChange={(e) => setNip(e.target.value)}
//         />

//         {error && <p className="text-red-500 mb-3">{error}</p>}

//         <button className="w-full bg-blue-600 text-white py-2 rounded">
//           Entrar
//         </button>
//       </form>
//     </div>
//   );
// }

export default function LoginPage() {
  const [accountNumber, setAccountNumber] = useState("");
  const [pin, setPin] = useState("");

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-bl from-primary via-primary/90 to-info ">
        <div className="w-full max-w-4xl">
          <Card className="shadow-2xl border rounded-3xl overflow-hidden p-0 ">
            <div className="grid md:grid-cols-2">
              {/* Columna Izquierda - Formulario */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">
                    Iniciar Sesión
                  </CardTitle>
                  <CardDescription className="text-center mb-3">
                    Ingresa tu número de cuenta y NIP para acceder
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Número de Cuenta</Label>
                      <Input
                        id="accountNumber"
                        placeholder="318123456"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pin">NIP</Label>
                      <Input
                        id="pin"
                        type="password"
                        placeholder="••••"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-11 text-base font-medium"
                    >
                      Acceder al Sistema
                    </Button>
                  </form>
                </CardContent>
              </div>

              {/* Columna Derecha - Imagen */}
              <div className="hidden md:block relative bg-primary">
                <Image src="/cu.svg" alt="Login visual" fill className="object-contain" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
