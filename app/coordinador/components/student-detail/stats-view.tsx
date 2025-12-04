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
  totalActivities: number;
  totalWithPrize: number;
}

export const StatsView = ({
  totalPoints,
  sportsPoints,
  culturePoints,
  totalActivities,
  totalWithPrize,
}: StatsViewProps) => {
  const calculatePercentage = (part: number, total: number) =>
    total > 0 ? (part / total) * 100 : 0;

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
              percentage={calculatePercentage(sportsPoints, totalPoints)}
              colorClass="text-info"
              bgClass="bg-info"
            />
            <ProgressBar
              label="Cultura"
              points={culturePoints}
              percentage={calculatePercentage(culturePoints, totalPoints)}
              colorClass="text-accent"
              bgClass="bg-accent"
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
    <div className={`h-2 rounded-full ${bgClass}/20`}>
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
