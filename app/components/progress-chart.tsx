import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target } from "lucide-react";
import Image from "next/image";

interface ProgressChartProps {
  sportsPercentage: number;
  culturePercentage: number;
}

const ProgressChart = ({
  puntos_deportes,
  puntos_cultura,
}: {
  puntos_deportes: number;
  puntos_cultura: number;
}) => {
  // Normaliza / limita los porcentajes a 0-100
  const clamp = (v: number) => Math.max(0, Math.min(100, v));
  const totalPercentageDeportes = clamp(puntos_deportes);
  const totalPercentageCultura = clamp(puntos_cultura);

  // Parámetros del círculo SVG (compartidos)
  const size = 200;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Offsets independientes para cada gráfico
  const offsetCultura =
    circumference - (totalPercentageCultura / 100) * circumference;
  const offsetDeportes =
    circumference - (totalPercentageDeportes / 100) * circumference;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progreso Global</CardTitle>
        <CardDescription>Porcentaje total de cumplimiento</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 py-8 gap-5 max-sm:flex max-sm:flex-col max-sm:items-center">
        <div className="flex flex-col items-center">
          <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
          >
            <svg width={size} height={size} className="transform -rotate-90">
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.2}
                strokeWidth={strokeWidth}
              />
              {/* Progress circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.9}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offsetCultura}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                src={"/balancin.gif"}
                height={50}
                width={50}
                alt={`A cute animal!`}
                unoptimized={true}
              />
              <span className="text-4xl font-bold">
                {totalPercentageCultura.toFixed(0)}%
              </span>
              <span className="text-sm text-muted-foreground">Completado</span>
            </div>
          </div>
          <div className="mt-8 w-full flex justify-center">
            <div className="text-center p-3 rounded-lg bg-chart-5/20 w-3/4">
              <p className="text-sm mb-1 ">Cultura</p>
              <p className="text-2xl font-bold ">{puntos_cultura} puntos</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
          >
            <svg
              width={size}
              height={size}
              className="transform -rotate-90 text-info"
            >
              {/* Background circle (usa el color info con baja opacidad para coincidir con bg-info/20) */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.2}
                strokeWidth={strokeWidth}
              />
              {/* Progress circle (usa el mismo color info) */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.9}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offsetDeportes}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                src={"/gif.gif"}
                height={50}
                width={50}
                alt={`A cute animal!`}
                unoptimized={true}
              />
              <span className="text-4xl font-bold">
                {totalPercentageDeportes.toFixed(0)}%
              </span>
              <span className="text-sm text-muted-foreground">Completado</span>
            </div>
          </div>
          <div className="mt-8 w-full flex justify-center">
            <div className="text-center p-3 rounded-lg bg-info/20 w-3/4">
              <p className="text-sm  mb-1">Deportes</p>
              <p className="text-2xl font-bold">{puntos_deportes} puntos</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
