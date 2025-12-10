"use client";

import {
  createActivityAction,
  updateActivityAction,
} from "@/app/actions/activity-actions";
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
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { activitySchema, type ActivitySchema } from "@/schemas/activity-schema";
import { useActivityStore } from "@/store/use-activity-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "@radix-ui/react-select";
import { Plus, Save, Trash2, Trophy, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  initialData,
  isEditing,
}: {
  initialData?: ActivitySchema;
  isEditing?: boolean;
}) => {
  const router = useRouter();
  const { departaments, loadDepartaments, activitySelected } =
    useActivityStore();
  useEffect(() => {
    if (departaments?.length === 0) {
      loadDepartaments();
    }
  }, [departaments]);
  const form = useForm<ActivitySchema>({
    resolver: zodResolver(activitySchema),
    defaultValues: initialData || {
      nombre: "",
      descripcion: "",
      fecha_realizacion: "",
      departamento: "",
      puntos_otorgados: 0,
      premio: [], // Inicializamos el array vacío
      actividad_grupal: false,
      enlace_participacion: "",
      foto_url: "",
      hora_actividad: "",
      ubicacion: "",
      descripcion_promocion_alumnos: "",
    },
  });

  // USAMOS useFieldArray EN LUGAR DE useState
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "premio",
  });

  useEffect(() => {
    console.log("Initial Data recibida en ActivityForm:", initialData);
    if (initialData) {
      // Aseguramos que premios sea un array para evitar errores de map
      const datosLimpios = {
        ...initialData,
        premio: initialData.premio || [],
      };
      form.reset(datosLimpios);
    }
  }, [initialData, form]);

  const onSubmit = async (data: ActivitySchema) => {
    console.log("Formulario enviado con datos:", data);
    if (isEditing) {
      // Lógica para actualizar la actividad
      await updateActivityAction(data, activitySelected?.id_actividad ?? 0);
    } else {
      // Lógica para crear una nueva actividad
      await createActivityAction(data);
    }
    router.push("/coordinador/actividades");
  };

  // Esta función captura los errores de validación si onSubmit no corre
  const onError = (errors: any) => {
    console.log("❌ ERRORES DE VALIDACIÓN:", errors);
  };

  useEffect(() => {
    if (initialData) {
      // Aseguramos que premios sea un array para evitar errores de map
      const datosLimpios = {
        ...initialData,
        premio: initialData.premio || [],
      };
      form.reset(datosLimpios);
    }
  }, [initialData, form]);

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
            <div className="grid grid-cols-2 gap-4">
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
                      className="max-h-[100px] resize-none wrap-break-word w-full"
                    />
                    {fieldState.error && (
                      <span className="text-sm text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                )}
              />
              <Controller
                name="descripcion_promocion_alumnos"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2 w-full ">
                    <Label htmlFor="descripcion_promocion_alumnos">
                      Promoción para la publicación del alumno
                    </Label>
                    <Textarea
                      {...field}
                      id="descripcion_promocion_alumnos"
                      placeholder="Detalles..."
                      className="max-h-[100px] resize-none wrap-break-word w-full"
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

            {/* --- CAMPOS FALTANTES QUE CAUSABAN EL ERROR --- */}
            <div className="grid grid-cols-3 gap-4">
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

              <Controller
                name="departamento"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2 w-full">
                    <Label>Departamento</Label>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona un departamento" />
                      </SelectTrigger>
                      <SelectContent>
                        {departaments?.map((dept) => (
                          <SelectItem
                            key={dept.id_departamento}
                            value={dept.nombre}
                          >
                            {dept.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <span className="text-sm text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Controller
                name="ubicacion"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label>Ubicación</Label>
                    {/* Input type date para que sea fácil validar */}
                    <Input
                      {...field}
                      type="text"
                      onChange={(event) => field.onChange(event.target.value)}
                    />
                    {fieldState.error && (
                      <span className="text-sm text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                )}
              />

              <Controller
                name="hora_actividad"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label>Hora de Actividad</Label>
                    <Input
                      {...field}
                      type="time"
                      onChange={(event) => field.onChange(event.target.value)}
                    />
                    {fieldState.error && (
                      <span className="text-sm text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                )}
              />

              <Controller
                name="actividad_grupal"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label>¿Es un club?</Label>
                    <div className="flex items-center h-10 px-3 border border-input rounded-md bg-background">
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <span className="ml-2 text-sm text-muted-foreground">
                        Sí, es un club
                      </span>
                    </div>
                    {fieldState.error && (
                      <span className="text-sm text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Controller
                name="enlace_participacion"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label>Enlace de Participación</Label>
                    {/* Input type date para que sea fácil validar */}
                    <Input
                      {...field}
                      type="text"
                      onChange={(event) => field.onChange(event.target.value)}
                    />
                    {fieldState.error && (
                      <span className="text-sm text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                )}
              />

              <Controller
                name="foto_url"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-2">
                    <Label>Enlace de Imagen</Label>
                    <Input
                      {...field}
                      type="text"
                      onChange={(event) => field.onChange(event.target.value)}
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
                  {/* ... dentro de tu map ... */}
                  {fields.map((field, index) => {
                    // Calculamos el lugar actual basado en el índice
                    const currentLugar = index + 1;
                    console.log(
                      "Renderizando premio:",
                      field,
                      "en índice:",
                      index
                    );
                    return (
                      <div
                        key={field.id}
                        className="flex gap-3 items-start py-2"
                      >
                        {/* LUGAR (Visual + Input Oculto) */}
                        <div className="w-20">
                          <Label className="text-xs mb-1 block">Lugar</Label>

                          {/* Input visual (solo lectura) */}
                          <Input
                            value={`#${currentLugar}`}
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

                          {/* CORRECCIÓN: Input oculto registrado.
           Usamos un useEffect interno o simplemente dejamos que RHF
           maneje el valor, PERO lo ideal es que al hacer SUBMIT,
           reescribas los lugares para asegurar consistencia (1, 2, 3...)
        */}
                          <input
                            type="hidden"
                            {...form.register(`premio.${index}.lugar`, {
                              value: currentLugar, // Forzamos el valor inicial
                              valueAsNumber: true,
                            })}
                          />
                        </div>

                        {/* PUNTOS */}
                        <div className="flex-1">
                          <Controller
                            name={`premio.${index}.puntos_otorgados`}
                            control={form.control}
                            render={({ field: subField, fieldState }) => (
                              <div className="flex flex-col">
                                <Label className="text-xs mb-1">
                                  Puntos Extra
                                </Label>
                                <Input
                                  {...subField}
                                  type="number"
                                  // Importante: convertir a número al cambiar
                                  onChange={(e) =>
                                    subField.onChange(
                                      e.target.valueAsNumber || 0
                                    )
                                  }
                                  min={0}
                                  placeholder="Puntos"
                                  className={
                                    fieldState.error ? "border-red-500" : ""
                                  }
                                />
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

                        {/* RECOMENDACIÓN: Botón para eliminar premio si te equivocaste */}
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="mt-6 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => remove(index)}
                        >
                          <Trash2 className="w-4 h-4" />{" "}
                          {/* Icono de lucide-react */}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" form="form-rhf-demo" className="cursor-pointer">
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Guardar Cambios
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Crear Actividad
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
