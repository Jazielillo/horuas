// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function POST() {
//   // 1) Obtener todas las generaciones
//   const generaciones = await prisma.generacion.findMany();

//   // 2) Promover niveles
//   for (const g of generaciones) {
//     // Si es 3º año → graduados
//     if (g.nivel === 3) {
//       await prisma.generacion.update({
//         where: { id: g.id },
//         data: { nivel: 4 }, // 4 = graduados (opcional)
//       });
//       continue;
//     }

//     // Para 1º → 2º y 2º → 3º
//     await prisma.generacion.update({
//       where: { id: g.id },
//       data: { nivel: g.nivel + 1 },
//     });
//   }

//   // 3) Crear nueva generación de primer año
//   const nuevaGeneracion = await prisma.generacion.create({
//     data: {
//       nombre: `Generación ${new Date().getFullYear()}`,
//       nivel: 1,
//     },
//   });

//   return NextResponse.json({
//     message: "Promoción ejecutada correctamente.",
//     nuevaGeneracion,
//   });
// }
