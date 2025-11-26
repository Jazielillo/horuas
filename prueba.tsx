// import React, { useState } from 'react';
// import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { PlusCircle, Trash2, Save, Trophy, AlertCircle, CheckCircle2 } from 'lucide-react';

// /**
//  * ------------------------------------------------------------------
//  * 1. EL ESQUEMA (schema.ts)
//  * ------------------------------------------------------------------
//  * En un proyecto real, esto iría en un archivo compartido, ej: lib/schema.ts
//  * para poder importarlo tanto en tu Server Action como en tu Componente.
//  */

// const activitySchema = z.object({
//   nombre: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
//   descripcion: z.string().min(10, { message: "La descripción debe ser más detallada" }),
//   fecha_realizacion: z.string().refine((date) => new Date(date).toString() !== 'Invalid Date', {
//     message: "Fecha inválida",
//   }),
//   puntos_base: z.coerce.number().min(1, { message: "Los puntos base deben ser mayor a 0" }),
//   // Aquí está la magia para tu array opcional de premios
//   premios: z.array(
//     z.object({
//       lugar: z.coerce.number().min(1, { message: "El lugar debe ser 1, 2, 3..." }),
//       puntos_otorgados: z.coerce.number().min(1, { message: "Puntos inválidos" }),
//     })
//   ).optional(), // El array en sí es opcional, aunque si añades un item, sus campos son required
// });

// // Inferimos el tipo de TypeScript desde el esquema Zod
// type ActivityFormValues = z.infer<typeof activitySchema>;

// /**
//  * ------------------------------------------------------------------
//  * 2. LA SERVER ACTION (actions.ts)
//  * ------------------------------------------------------------------
//  * En Next.js real, esto va en un archivo separado con 'use server' al inicio.
//  * Aquí lo simulamos con una función asíncrona.
//  */
// async function createActivityAction(data: ActivityFormValues) {
//   // Simulación de delay de red
//   await new Promise((resolve) => setTimeout(resolve, 1500));

//   // VALIDACIÓN EN SERVIDOR (Crucial por seguridad)
//   const result = activitySchema.safeParse(data);

//   if (!result.success) {
//     return { success: false, error: "Datos inválidos en el servidor" };
//   }

//   // Aquí iría tu lógica de base de datos (Prisma, Drizzle, etc.)
//   console.log("Guardando en BD:", result.data);

//   return { success: true, message: "Actividad creada correctamente" };
// }

// /**
//  * ------------------------------------------------------------------
//  * 3. EL COMPONENTE CLIENTE (components/ActivityForm.tsx)
//  * ------------------------------------------------------------------
//  * Debe llevar 'use client' al inicio en Next.js
//  */
// export default function ActivityForm() {
//   const [serverStatus, setServerStatus] = useState<{ success: boolean; message: string } | null>(null);

//   // Configuración de React Hook Form
//   const {
//     register,
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<ActivityFormValues>({
//     resolver: zodResolver(activitySchema),
//     defaultValues: {
//       nombre: "",
//       descripcion: "",
//       puntos_base: 0,
//       premios: [], // Inicializamos el array vacío
//     },
//   });

//   // Hook para manejar arrays dinámicos (Tus premios)
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "premios",
//   });

//   // Manejador del envío
//   const onSubmit: SubmitHandler<ActivityFormValues> = async (data) => {
//     setServerStatus(null);
//     try {
//       // Llamamos a la Server Action
//       const response = await createActivityAction(data);
      
//       if (response.success) {
//         setServerStatus({ success: true, message: response.message || "Éxito" });
//         reset(); // Limpiar formulario si todo salió bien
//       } else {
//         setServerStatus({ success: false, message: response.error || "Error desconocido" });
//       }
//     } catch (error) {
//       setServerStatus({ success: false, message: "Ocurrió un error inesperado." });
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl border border-gray-100 my-8">
//       <div className="mb-6 border-b pb-4">
//         <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//           <Trophy className="text-yellow-500" />
//           Nueva Actividad
//         </h1>
//         <p className="text-gray-500 text-sm mt-1">Registra una actividad y sus premios opcionales.</p>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
//         {/* --- DATOS BÁSICOS --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
//           {/* Nombre */}
//           <div className="col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la actividad</label>
//             <input
//               {...register("nombre")}
//               className={w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${errors.nombre ? 'border-red-500 bg-red-50' : 'border-gray-300'}}
//               placeholder="Ej. Hackathon 2024"
//             />
//             {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
//           </div>

//           {/* Descripción */}
//           <div className="col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
//             <textarea
//               {...register("descripcion")}
//               rows={3}
//               className={w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${errors.descripcion ? 'border-red-500 bg-red-50' : 'border-gray-300'}}
//               placeholder="Detalles de la actividad..."
//             />
//             {errors.descripcion && <p className="text-red-500 text-xs mt-1">{errors.descripcion.message}</p>}
//           </div>

//           {/* Fecha */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Realización</label>
//             <input
//               type="date"
//               {...register("fecha_realizacion")}
//               className={w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.fecha_realizacion ? 'border-red-500' : 'border-gray-300'}}
//             />
//             {errors.fecha_realizacion && <p className="text-red-500 text-xs mt-1">{errors.fecha_realizacion.message}</p>}
//           </div>

//           {/* Puntos Base (Participación) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Puntos por participar</label>
//             <input
//               type="number"
//               {...register("puntos_base")}
//               className={w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.puntos_base ? 'border-red-500' : 'border-gray-300'}}
//             />
//             {errors.puntos_base && <p className="text-red-500 text-xs mt-1">{errors.puntos_base.message}</p>}
//           </div>
//         </div>

//         {/* --- SECCIÓN DINÁMICA: PREMIOS --- */}
//         <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-semibold text-gray-700">Premios (Opcional)</h3>
//             <button
//               type="button"
//               onClick={() => append({ lugar: fields.length + 1, puntos_otorgados: 0 })}
//               className="text-sm flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
//             >
//               <PlusCircle size={18} />
//               Agregar lugar
//             </button>
//           </div>

//           {/* {fields.length === 0 && ( */}
//             <p className="text-sm text-gray-400 italic text-center py-2">No hay premios configurados para esta actividad.</p>
//           )}

//           <div className="space-y-3">
//             {fields.map((field, index) => (
//               <div key={field.id} className="flex gap-3 items-start animate-in fade-in slide-in-from-top-2 duration-300">
                
//                 {/* Input Lugar */}
//                 <div className="w-1/3">
//                   <div className="relative">
//                     <span className="absolute left-3 top-2 text-gray-400 text-xs font-bold">Lugar</span>
//                     <input
//                       type="number"
//                       {...register(premios.${index}.lugar as const)}
//                       className="w-full pl-3 pt-5 pb-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
//                     />
//                   </div>
//                   {errors.premios?.[index]?.lugar && (
//                     <p className="text-red-500 text-xs mt-1">{errors.premios[index]?.lugar?.message}</p>
//                   )}
//                 </div>

//                 {/* Input Puntos */}
//                 <div className="w-1/3">
//                   <div className="relative">
//                      <span className="absolute left-3 top-2 text-gray-400 text-xs font-bold">Puntos</span>
//                     <input
//                       type="number"
//                       {...register(premios.${index}.puntos_otorgados as const)}
//                       className="w-full pl-3 pt-5 pb-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
//                     />
//                   </div>
//                   {errors.premios?.[index]?.puntos_otorgados && (
//                     <p className="text-red-500 text-xs mt-1">{errors.premios[index]?.puntos_otorgados?.message}</p>
//                   )}
//                 </div>

//                 {/* Botón Eliminar */}
//                 <button
//                   type="button"
//                   onClick={() => remove(index)}
//                   className="mt-2 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
//                   title="Eliminar premio"
//                 >
//                   <Trash2 size={18} />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* --- MENSAJES DE ESTADO --- */}
//         {serverStatus && (
//           <div className={p-4 rounded-lg flex items-center gap-3 ${serverStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}}>
//             {serverStatus.success ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
//             <p className="text-sm font-medium">{serverStatus.message}</p>
//           </div>
//         )}

//         {/* --- BOTÓN SUBMIT --- */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-6 rounded-lg shadow transition-all flex justify-center items-center gap-2"
//         >
//           {isSubmitting ? (
//             <>
//               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//               Guardando...
//             </>
//           ) : (
//             <>
//               <Save size={20} />
//               Guardar Actividad
//             </>
//           )}
//         </button>

//       </form>
//     </div>
//   );
// }