
import CoordinatorActivityForm from "@/app/coordinador/components/coordinator-activity-form";
import { getActivityByIdAction } from "@/lib/actions/activity-actions";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id_actividad: string };
}

export default async function EditActivityPage({ params }: PageProps) {
  // 1. Obtenemos el ID de la URL
  const { id_actividad } = params;

  // 2. Buscamos la data en el servidor
  const activity = await getActivityByIdAction(Number(id_actividad));
  console.log("Fetched activity for editing:", activity);
  // 3. Si no existe, mandamos a página 404
  if (!activity) {
    notFound();
  }

  // 4. Renderizamos el formulario pasándole la data inicial
  return <CoordinatorActivityForm initialData={activity} />;
}
