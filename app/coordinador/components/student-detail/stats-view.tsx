import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StatsViewProps {
  totalPoints: number;
  sportsPoints: number;
  culturePoints: number;
  orientationPoints: number;
  serviceSocialPoints: number;
  totalActivities: number;
  totalWithPrize: number;
}

export const StatsView = ({
  totalPoints,
  sportsPoints,
  orientationPoints,
  serviceSocialPoints,
  culturePoints,
  totalActivities,
  totalWithPrize,
}: StatsViewProps) => {
  const calculatePercentage = (part: number, total: number) => {
    if (total <= 0) return 0;
    const percentage = (part / total) * 100;
    return Math.min(percentage, 100); // Limitar al 100% máximo
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Distribución por Departamento</CardTitle>
          <CardDescription>Puntos obtenidos (filtrados)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ProgressBar
              label="Deportes"
              points={sportsPoints}
              percentage={calculatePercentage(sportsPoints, 100)}
              colorClass="text-blue-600"
              bgClass="bg-blue-600"
            />
            <ProgressBar
              label="Cultura"
              points={culturePoints}
              percentage={calculatePercentage(culturePoints, 100)}
              colorClass="text-purple-600"
              bgClass="bg-purple-600"
            />
            <ProgressBar
              label="Orientación Educativa"
              points={orientationPoints}
              percentage={calculatePercentage(orientationPoints, 100)}
              colorClass="text-amber-600"
              bgClass="bg-amber-600"
            />
            <ProgressBar
              label="Servicio Social"
              points={serviceSocialPoints}
              percentage={calculatePercentage(serviceSocialPoints, 100)}
              colorClass="text-emerald-600"
              bgClass="bg-emerald-600"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resumen General</CardTitle>
          <CardDescription>Datos con filtros aplicados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <SummaryRow label="Total de actividades" value={totalActivities} />
            <SummaryRow label="Actividades con premio" value={totalWithPrize} />
            <SummaryRow label="Puntos totales" value={totalPoints} isPrimary />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ProgressBar = ({
  label,
  points,
  percentage,
  colorClass,
  bgClass,
}: any) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium">{label}</span>
      <span className={`text-sm font-bold ${colorClass}`}>{points} pts</span>
    </div>
    <div className={`h-2 rounded-full ${bgClass}/30`}>
      <div
        className={`h-2 rounded-full ${bgClass}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const SummaryRow = ({ label, value, isPrimary }: any) => (
  <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
    <span className="text-sm">{label}</span>
    <span className={`font-bold ${isPrimary ? "text-primary" : ""}`}>
      {value}
    </span>
  </div>
);
