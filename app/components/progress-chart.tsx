import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";
import { Palette, Target, Trophy } from "lucide-react";
import Image from "next/image";
// Componente reutilizable para evitar duplicar código SVG y lógica
const ProgressRing = ({
  percentage,
  points,
  label,
  gifSrc,
  colorClass, // Clase para el color del texto y borde (ej: text-blue-500)
  bgClass, // Clase para el fondo de la caja de puntos (ej: bg-blue-500/10)
}: {
  percentage: number;
  points: number;
  label: string;
  gifSrc: string;
  colorClass: string;
  bgClass: string;
}) => {
  const size = 200;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Gráfico Circular */}
      <div
        className="relative flex items-center justify-center mb-6"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className={`transform -rotate-90 ${colorClass}`}
        >
          {/* Círculo de fondo */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.1}
            strokeWidth={strokeWidth}
          />
          {/* Círculo de progreso animado */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeOpacity={1}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Contenido Central con GIF */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src={gifSrc}
            height={50}
            width={50}
            alt={label}
            unoptimized={true}
            className="mb-1"
          />
          <span className="text-4xl font-bold tracking-tighter">
            {percentage.toFixed(0)}%
          </span>
          <span className="text-xs text-muted-foreground font-medium uppercase">
            Completado
          </span>
        </div>
      </div>

      {/* Tarjeta de Puntos (Width Full) */}
      <div className="w-full px-2">
        {" "}
        {/* Padding horizontal para seguridad en móviles muy pequeños */}
        <div
          className={`w-full text-center p-4 rounded-xl border ${bgClass} transition-colors`}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
            {label}
          </p>
          <p className={`text-3xl font-bold ${colorClass}`}>
            {points}{" "}
            <span className="text-sm text-muted-foreground font-normal">
              pts
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const ProgressChart = ({
  puntos_deportes,
  puntos_cultura,
  puntos_orientacion_educativa,
  puntos_servicio_social,
}: {
  puntos_deportes: number;
  puntos_cultura: number;
  puntos_orientacion_educativa: number;
  puntos_servicio_social: number;
}) => {
  // Normaliza porcentajes
  const clamp = (v: number) => Math.max(0, Math.min(100, v));

  return (
    <Card className="h-full shadow-sm">
      <CardHeader>
        <CardTitle>Progreso Global</CardTitle>
        <CardDescription>Porcentaje total de cumplimiento</CardDescription>
      </CardHeader>

      {/* Grid responsivo: 1 columna en móvil, 2 en pantallas md en adelante */}
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6 items-start">
        {/* Cultura */}
        <ProgressRing
          percentage={clamp(puntos_cultura)}
          points={puntos_cultura}
          label="Cultura"
          gifSrc="/balancin.gif"
          colorClass="text-purple-500" // Puedes cambiar esto a text-chart-5 si prefieres
          bgClass="bg-purple-500/10 border-purple-200 dark:border-purple-900" // Fondo suave
        />

        {/* Deportes */}
        <ProgressRing
          percentage={clamp(puntos_deportes)}
          points={puntos_deportes}
          label="Deportes"
          gifSrc="/gif.gif"
          colorClass="text-sky-500" // Puedes cambiar esto a text-info
          bgClass="bg-sky-500/10 border-sky-200 dark:border-sky-900" // Fondo suave
        />

        <ProgressRing
          percentage={clamp(puntos_orientacion_educativa)}
          points={puntos_orientacion_educativa}
          label="Orientación Educativa"
          gifSrc="/brujula.gif"
          colorClass="text-green-500" // Puedes cambiar esto a text-success
          bgClass="bg-green-500/10 border-green-200 dark:border-green-900" // Fondo suave
        />

        <ProgressRing
          percentage={clamp(puntos_servicio_social)}
          points={puntos_servicio_social}
          label="Servicio Social"
          gifSrc="/ayuda.gif"
          colorClass="text-yellow-500" // Puedes cambiar esto a text-warning
          bgClass="bg-yellow-500/10 border-yellow-200 dark:border-yellow-900" // Fondo suave
        />
      </CardContent>
    </Card>
  );
};
