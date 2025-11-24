"use client";

import { useForm, useFieldArray, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Plus, Save, Trash2, X, ArrowDownToDotIcon } from "lucide-react";

// Importa tus componentes de UI (ajusta las rutas según tu proyecto)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// --- 1. Definimos el Esquema de Validación (Zod) ---
const ruleSchema = z.object({
  type: z.string().min(1, "Selecciona un tipo"),
  value: z.coerce.number().min(0, "El valor debe ser positivo"), // coerce convierte string a number
  description: z.string().optional(),
});

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  description: z.string().optional(),
  cycle: z.string("Selecciona un ciclo escolar"),
  isActive: z.boolean().default(true),
  pointRules: z.array(ruleSchema),
});

type FormValues = z.infer<typeof formSchema>;

// --- 2. Definimos las Props del Componente ---
interface ClubFormProps {
  initialData?: FormValues & { id?: string }; // Datos opcionales para editar
}

export default function ClubForm({ initialData }: ClubFormProps) {
  const router = useRouter();

  // --- 3. Inicializamos el Formulario ---
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema) as unknown as Resolver<FormValues>,
    defaultValues: initialData || {
      name: "",
      description: "",
      cycle: "", // O un valor por defecto como "2024-2025"
      isActive: true,
      pointRules: [],
    },
  });

  // Hook para manejar el array dinámico de reglas
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "pointRules",
  });

  // --- 4. Manejo del Submit ---
  const onSubmit = async (data: FormValues) => {
    try {
      if (initialData) {
        // Lógica de EDITAR (ej: await axios.patch(...))
        console.log("Editando:", data);
      } else {
        // Lógica de CREAR (ej: await axios.post(...))
        console.log("Creando:", data);
      }

      router.push("/coordinador/clubs"); // Redirigir al terminar
      router.refresh();
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={() => {}} className="space-y-6">
        {/* --- Sección 1: Información Básica --- */}
        <Card>
          <CardHeader>
            <CardTitle>Información Básica</CardTitle>
            <CardDescription>Datos generales del club</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
            //   control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label>Nombre del Club *</Label>
                  <FormControl>
                    <Input placeholder="Ej: Club de Fútbol" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
            //   control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <Label>Descripción</Label>
                  <FormControl>
                    <Textarea
                      placeholder="Describe las actividades..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                // control={form.control}
                name="cycle"
                render={({ field }) => (
                  <FormItem>
                    <Label>Ciclo Escolar</Label>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar ciclo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="2024-2025">2024-2025</SelectItem>
                        <SelectItem value="2023-2024">2023-2024</SelectItem>
                        <SelectItem value="2022-2023">2022-2023</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                // control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between space-y-0 pt-8 border p-3 rounded-md">
                    <Label>
                      Estado del Club ({field.value ? "Activo" : "Inactivo"})
                    </Label>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* --- Sección 2: Reglas de Puntos (Array Dinámico) --- */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Reglas de Puntos</CardTitle>
                <CardDescription>Define cómo se asignan puntos</CardDescription>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  append({ type: "Por Asistencia", value: 10, description: "" })
                }
              >
                <Plus className="w-4 h-4 mr-2" />
                Agregar Regla
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {fields.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground bg-muted/20 rounded-lg border-dashed border-2">
                <p>No hay reglas configuradas</p>
                <p className="text-sm mt-1">
                  Haz clic en "Agregar Regla" para comenzar
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {fields.map((field, index) => (
                  <div key={field.id}>
                    {index > 0 && <Separator className="my-4" />}
                    <div className="space-y-4 p-4 border rounded-lg bg-muted/30 relative">
                      {/* Cabecera de la regla */}
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-base font-semibold">
                          Regla {index + 1}
                        </Label>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => remove(index)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Tipo de Regla */}
                        <FormField
                        //   control={form.control}
                          name={`pointRules.${index}.type`}
                          render={({ field }) => (
                            <FormItem>
                              <Label>Tipo de Regla</Label>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Fijo">Fijo</SelectItem>
                                  <SelectItem value="Por Ciclo">
                                    Por Ciclo
                                  </SelectItem>
                                  <SelectItem value="Por Asistencia">
                                    Por Asistencia
                                  </SelectItem>
                                  <SelectItem value="Por Evento">
                                    Por Evento
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Valor */}
                        <FormField
                        //   control={form.control}
                          name={`pointRules.${index}.value`}
                          render={({ field }) => (
                            <FormItem>
                              <Label>Valor de Puntos</Label>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Descripción de la regla */}
                      <FormField
                        // control={form.control}
                        name={`pointRules.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <Label>Descripción</Label>
                            <FormControl>
                              <Input
                                placeholder="Ej: Puntos por asistencia..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* --- Botones de Acción --- */}
        <div className="flex justify-end gap-4 pb-10">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            <X className="w-4 h-4 mr-2" />
            Cancelar
          </Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            <Save className="w-4 h-4 mr-2" />
            {initialData ? "Guardar Cambios" : "Crear Club"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
