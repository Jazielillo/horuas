"use server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { LoginForm } from "./components/login-form";

export default async function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-bl from-primary via-primary/90 to-info px-4 py-8">
        <div className="w-full max-w-md md:max-w-4xl">
          <Card className="shadow-2xl border rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Columna Izquierda - Formulario */}
              {/* Imagen visible en móvil */}
              <div className="md:hidden flex justify-center bg-primary m-8 p-2 rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Login visual"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-6 sm:p-10 flex flex-col justify-center">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-3xl text-center font-semibold">
                    Iniciar Sesión
                  </CardTitle>
                  <CardDescription className="text-center mb-3 text-base">
                    Ingresa tu número de cuenta y NIP para acceder
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <LoginForm />
                </CardContent>
              </div>

              {/* Columna Derecha - Imagen */}
              <div className="hidden md:block relative ">
                <Image
                  src="/logo.png"
                  alt="Login visual"
                  fill
                  className="object-contain p-10"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
