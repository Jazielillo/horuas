"use client";
import { login } from "@/app/actions/auth";
import { useActionState, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const LoginForm = () => {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form className="space-y-4" action={action}>
      <div className="space-y-2">
        <Label htmlFor="num_cuenta">Número de Cuenta</Label>
        <Input
          id="num_cuenta"
          name="num_cuenta"
          placeholder="318123456"
          required
          className="h-11"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="nip">NIP</Label>
        <Input
          id="nip
          "
          name="nip"
          type="password"
          placeholder="••••"
          required
          className="h-11"
        />
      </div>
      <Button
        type="submit"
        className="w-full h-11 text-base font-medium cursor-pointer"
      >
        Acceder al Sistema
      </Button>
    </form>
  );
};
