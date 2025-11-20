"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { activityFormSchema, ActivitySchema } from "@/schemas/activity-schema";
import { createActivityAction } from "@/app/actions/activity-actions";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ActivityForm({
  defaultValues,
  onSuccess,
}: {
  defaultValues?: Partial<ActivitySchema>;
  onSuccess?: (activity: any) => void;
}) {
  const form = useForm<ActivitySchema>({
    resolver: zodResolver(activityFormSchema),
    defaultValues: defaultValues || {
      name: "",
      description: "",
      date: "",
      points: 1,
    },
  });

  async function onSubmit(values: ActivitySchema) {
    console.log("Submitting form with values:", values);
    const res = await createActivityAction(values);

    if (!res.ok) {
      console.log("Errores =>", res.errors);
      return;
    }

    onSuccess?.(res.activity);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
      {/* Nombre */}
      <div className="flex gap-2 flex-col">
        <Label>Nombre de la Actividad *</Label>
        <Input {...form.register("name")} placeholder="Ej: Torneo de Fútbol" />
        {form.formState.errors.name && (
          <p className="text-red-600 text-sm">
            {form.formState.errors.name.message}
          </p>
        )}
      </div>

      {/* Descripción */}
      <div className="flex gap-2 flex-col ">
        <Label>Descripción</Label>
        <Textarea {...form.register("description")} rows={3} className="max-h-[100px] resize-none wrap-break-word max-w-[447px]" />
      </div>

      {/* Fecha */}
      <div className="flex gap-2 flex-col">
        <Label>Fecha *</Label>
        <Input type="date" {...form.register("date")} />
      </div>

      {/*Puntos */}
      <div className="flex gap-2 flex-col">
        <Label>Puntos *</Label>
        <Input
          type="number"
          min={1}
          {...form.register("points", { valueAsNumber: true })}
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button type="submit">Guardar</Button>
      </div>
    </form>
  );
}
