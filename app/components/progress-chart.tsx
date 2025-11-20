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

const ProgressChart = ({ puntos_hoy }: { puntos_hoy: number }) => {
  const totalPercentage = (puntos_hoy / 100) * 100;

  // Calculate SVG circle parameters
  const size = 200;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (totalPercentage / 100) * circumference;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progreso Global</CardTitle>
        <CardDescription>Porcentaje total de cumplimiento</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-8">
        <div className="relative">
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth={strokeWidth}
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              src={"/gif.gif"}
              // layout={"responsive"}
              height={50}
              width={50}
              alt={`A cute animal!`}
              unoptimized={true}
            />
            <span className="text-4xl font-bold">
              {totalPercentage.toFixed(0)}%
            </span>
            <span className="text-sm text-muted-foreground">Completado</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8 w-full">
          <div className="text-center p-3 rounded-lg bg-primary/10">
            <p className="text-sm text-muted-foreground mb-1">Deportes</p>
            <p className="text-2xl font-bold text-info">{puntos_hoy} puntos</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
