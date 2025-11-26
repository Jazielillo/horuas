"use client";

import { createActivityAction } from "@/app/actions/activity-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { activitySchema, type ActivitySchema } from "@/schemas/activity-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trophy, X } from "lucide-react";
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { activityFormSchema, ActivitySchema } from "@/schemas/activity-schema";
// import {
//   createActivityAction,
//   updateActivityAction,
// } from "@/app/actions/activity-actions";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";
// import { Switch } from "@/components/ui/switch";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { useActivityStore } from "@/store/use-activity-store";
// import { Activity } from "@/app/models";
// import { useEffect } from "react";

// export default function ActivityForm({
//   defaultValues,
//   onSuccess,
// }: {
//   defaultValues?: Partial<ActivitySchema>;
//   onSuccess?: (activity: any) => void;
// }) {
//   const { addActivity, activitySelected, updateActivity } = useActivityStore();
//   const form = useForm<ActivitySchema>({
//     resolver: zodResolver(activityFormSchema),
//     defaultValues: defaultValues || {
//       name: "",
//       description: "",
//       date: "",
//       points: 0,
//     },
//   });

//   useEffect(() => {
//     if (activitySelected) {
//       form.reset({
//         name: activitySelected.nombre,
//         description: activitySelected.descripcion,
//         date: activitySelected.fecha
//           ? new Date(activitySelected.fecha).toISOString().split("T")[0]
//           : "",
//         points: activitySelected.puntos,
//       });
//     }
//   }, [activitySelected]);

//   async function onSubmit(values: ActivitySchema) {
//     if (activitySelected) {
//       console.log("Updating activity...", values);
//       //EDIT
//       const updated = await updateActivityAction(
//         values,
//         activitySelected.id_actividad
//       );
//       //borrar la activitySelected, y actualizar mi estado
//       updateActivity({
//         ...updated.updatedActivity,
//         descripcion: updated.updatedActivity.descripcion ?? undefined,
//       });
//       onSuccess?.(updated.updatedActivity);
//     } else {
//       console.log("Creating activity...", values);
//       const res = await createActivityAction(values);

//       if (!res.ok) {
//         console.log("Errores =>", res.errors);
//         return;
//       }
//       if (res.activity) {
//         addActivity({
//           ...res.activity,
//           descripcion: res.activity.descripcion ?? undefined,
//         });
//       }
//       onSuccess?.(res.activity);
//     }
//   }

//   return (
//     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
//       {/* Nombre */}
//       <div className="flex gap-2 flex-col">
//         <Label>Nombre de la Actividad *</Label>
//         <Input {...form.register("name")} placeholder="Ej: Torneo de Fútbol" />
//         {form.formState.errors.name && (
//           <p className="text-red-600 text-sm">
//             {form.formState.errors.name.message}
//           </p>
//         )}
//       </div>

//       {/* Descripción */}
//       <div className="flex gap-2 flex-col ">
//         <Label>Descripción</Label>
//         <Textarea
//           {...form.register("description")}
//           rows={3}
//           className="max-h-[100px] resize-none wrap-break-word max-w-[447px]"
//         />
//       </div>

//       {/* Fecha */}
//       <div className="flex gap-2 flex-col">
//         <Label>Fecha de realización *</Label>
//         <Input type="date" {...form.register("date")} />
//       </div>

//       {/*Puntos */}
//       <div className="flex gap-2 flex-col">
//         <Label>Puntos *</Label>
//         <Input
//           type="number"
//           min={1}
//           {...form.register("points", { valueAsNumber: true })}
//         />
//       </div>

//       <div className="flex justify-end gap-3 pt-4">
//         <Button type="submit">Guardar</Button>
//       </div>
//     </form>
//   );
// }
interface Award {
  id: string;
  place: number;
  points: number;
}
export const ActivityForm = ({
  defaultValues,
  onSuccess,
}: {
  defaultValues?: Partial<ActivitySchema>;
  onSuccess?: (activity: any) => void;
}) => {
  const form = useForm<ActivitySchema>({
    resolver: zodResolver(activitySchema),
    defaultValues: defaultValues || {
      nombre: "",
      descripcion: "",
      fecha_realizacion: "",
      puntos_otorgados: 0,
      premios: [], // Inicializamos el array vacío
    },
  });

  // USAMOS useFieldArray EN LUGAR DE useState
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "premios",
  });

  const onSubmit = async (data: ActivitySchema) => {
    await createActivityAction(data);
  };

  // Esta función captura los errores de validación si onSubmit no corre
  const onError = (errors: any) => {
    console.log("❌ ERRORES DE VALIDACIÓN:", errors);
  };

  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle>Información Básica</CardTitle>
        <CardDescription>Datos generales del club</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Pasamos onError como segundo argumento para ver por qué falla */}
        <form
          id="form-rhf-demo"
          onSubmit={form.handleSubmit(onSubmit, onError)}
        >
          <div className="space-y-4">
            {/* CAMPO NOMBRE */}
            <Controller
              name="nombre"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre de la Actividad *</Label>
                  <Input {...field} id="nombre" placeholder="Ej: Torneo" />
                  {fieldState.error && (
                    <span className="text-sm text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />

            {/* CAMPO DESCRIPCION */}
            <Controller
              name="descripcion"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="space-y-2 w-full ">
                  <Label htmlFor="descripcion">Descripción</Label>
                  <Textarea
                    {...field}
                    id="descripcion"
                    placeholder="Detalles..."
                    className="max-h-[100px] resize-none wrap-break-word min-w-[700px] max-w-[1000px] max-sm:min-w-full"
                  />
                  {fieldState.error && (
                    <span className="text-sm text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />

            {/* --- CAMPOS FALTANTES QUE CAUSABAN EL ERROR --- */}
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="fecha_realizacion"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label>Fecha Realización</Label>
                    {/* Input type date para que sea fácil validar */}
                    <Input {...field} type="date" />
                    {fieldState.error && (
                      <span className="text-sm text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                )}
              />

              <Controller
                name="puntos_otorgados"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label>Puntos por Participación</Label>
                    <Input
                      {...field}
                      type="number"
                      min="0"
                      onChange={(event) => field.onChange(+event.target.value)}
                    />
                    {fieldState.error && (
                      <span className="text-sm text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>
            {/* --------------------------------------------- */}

            {/* SECCIÓN PREMIOS CON USEFIELDARRAY */}
            <div className="space-y-4 p-4 border rounded-lg bg-muted/10">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Premios por Lugar</Label>
                  <p className="text-sm text-muted-foreground">
                    Define premiaciones específicas
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Agregamos un nuevo item al array de RHF
                    // El "lugar" se calcula basado en la longitud actual + 1
                    append({ lugar: fields.length + 1, puntos_otorgados: 0 });
                  }}
                  disabled={fields.length >= 5}
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Agregar Premio
                </Button>
              </div>

              {fields.length === 0 ? (
                <p className="text-sm text-muted text-center py-4">
                  Sin premios configurados.
                </p>
              ) : (
                <div className="space-y-2">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex gap-3 items-start py-2">
                      {/* LUGAR (readonly + hidden input) */}
                      <div className="w-20">
                        <Label className="text-xs mb-1 block">Lugar</Label>

                        <Input
                          value={`#${index + 1}`}
                          disabled
                          className={
                            "w-full text-center select-none cursor-default " +
                            (index === 0
                              ? "font-bold bg-yellow-400 text-black shadow-md"
                              : index === 1
                              ? "font-semibold bg-gray-300 text-black shadow-sm"
                              : index === 2
                              ? "font-semibold bg-amber-700 text-white shadow-sm"
                              : "")
                          }
                        />

                        {/* Input oculto */}
                        <input
                          type="hidden"
                          {...form.register(`premios.${index}.lugar`)}
                          value={index + 1}
                        />
                      </div>

                      {/* PUNTOS */}
                      <div className="flex-1">
                        <Controller
                          name={`premios.${index}.puntos_otorgados`}
                          control={form.control}
                          render={({ field: subField, fieldState }) => (
                            <div className="flex flex-col">
                              <Label className="text-xs mb-1">
                                Puntos Extra
                              </Label>

                              <Input
                                {...subField}
                                type="number"
                                onChange={(e) =>
                                  subField.onChange(+e.target.value)
                                }
                                min={0}
                                placeholder="Puntos"
                                className={
                                  fieldState.error ? "border-red-500" : ""
                                }
                              />

                              {/* MENSAJE DE ERROR — NO AFECTA EL LAYOUT */}
                              <div className="h-4 mt-1">
                                {fieldState.error && (
                                  <span className="text-xs text-red-500">
                                    {fieldState.error.message}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        />
                      </div>

                      {/* BOTÓN ELIMINAR */}
                      <div className="flex items-center pt-6">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => remove(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" form="form-rhf-demo" className="cursor-pointer">
          <Plus className="mr-2 h-4 w-4" />
          Crear Actividad
        </Button>
      </CardFooter>
    </Card>
  );
};
