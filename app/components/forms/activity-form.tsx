"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { activityFormSchema, ActivitySchema } from "@/schemas/activity-schema";
import {
  createActivityAction,
  updateActivityAction,
} from "@/app/actions/activity-actions";

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
import { useActivityStore } from "@/store/use-activity-store";
import { Activity } from "@/app/models";
import { useEffect } from "react";

export default function ActivityForm({
  defaultValues,
  onSuccess,
}: {
  defaultValues?: Partial<ActivitySchema>;
  onSuccess?: (activity: any) => void;
}) {
  const { addActivity, activitySelected, updateActivity } = useActivityStore();
  const form = useForm<ActivitySchema>({
    resolver: zodResolver(activityFormSchema),
    defaultValues: defaultValues || {
      name: "",
      description: "",
      date: "",
      points: 1,
    },
  });

  useEffect(() => {
    if (activitySelected) {
      form.reset({
        name: activitySelected.nombre,
        description: activitySelected.descripcion,
        date: activitySelected.fecha
          ? new Date(activitySelected.fecha).toISOString().split("T")[0]
          : "",
        points: activitySelected.puntos,
      });
    }
  }, [activitySelected]);

  async function onSubmit(values: ActivitySchema) {
    if (activitySelected) {
      console.log("Updating activity...", values);
      //EDIT
      const updated = await updateActivityAction(
        values,
        activitySelected.id_actividad
      );
      //borrar la activitySelected, y actualizar mi estado
      updateActivity({
        ...updated.updatedActivity,
        descripcion: updated.updatedActivity.descripcion ?? undefined,
      });
      onSuccess?.(updated.updatedActivity);
    } else {
      console.log("Creating activity...", values);
      const res = await createActivityAction(values);

      if (!res.ok) {
        console.log("Errores =>", res.errors);
        return;
      }
      if (res.activity) {
        addActivity({
          ...res.activity,
          descripcion: res.activity.descripcion ?? undefined,
        });
      }
      onSuccess?.(res.activity);
    }
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
        <Textarea
          {...form.register("description")}
          rows={3}
          className="max-h-[100px] resize-none wrap-break-word max-w-[447px]"
        />
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
