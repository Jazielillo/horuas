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
                  <LoginForm />
                </CardContent>
              </div>

              {/* Columna Derecha - Imagen */}
              <div className="hidden md:block relative bg-primary">
                <Image
                  src="/cu.svg"
                  alt="Login visual"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
