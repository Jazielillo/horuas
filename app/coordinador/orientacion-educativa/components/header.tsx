import {
  Heart,
  Briefcase,
} from "lucide-react";

export const ActivityHeader = ({name} : {name: string}) => {
  return (
    <div className="flex flex-col gap-6 mb-8 bg-card p-4 rounded-lg shadow">
      <div className="flex items-start gap-4">
        <div className="flex-1 space-y-1">
          {/* Breadcrumb / Título de la Acción */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            Asignar Puntos
          </p>

          {/* Título Principal */}
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            {name === 'Servicio Social' ? <Briefcase className="w-6 h-6 text-primary" /> : <Heart className="w-6 h-6 text-primary" />}
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
};
