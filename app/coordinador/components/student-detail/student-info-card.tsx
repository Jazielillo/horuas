import { Trophy, Award, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { getSession } from "@/lib/session";

interface StudentInfoCardProps {
  alumno: any; // Puedes tipar esto con tu interfaz Alumno
  puntos: { deportes: number; cultura: number; total: number };
  userRole: string;
}

export const StudentInfoCard = ({ alumno, puntos, userRole }: StudentInfoCardProps) => {
  if (!alumno) return null;


  

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl mb-2">{alumno.nombre}</CardTitle>
            <CardDescription className="space-y-1">
              <div className="flex items-center gap-4">
                <span className="font-medium">
                  No. Cuenta: {alumno.num_cuenta}
                </span>
                <Badge variant="outline">{alumno.grupo}</Badge>
              </div>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {userRole === "COORDINADOR_CULTURA" && (
            <StatItem
              icon={<Award className="w-8 h-8 text-accent" />}
              label="Cultura"
              value={puntos.cultura}
              colorClass="text-accent"
              bgClass="bg-accent/10"
            />
          )}
          {userRole === "COORDINADOR_DEPORTES" && (
            <StatItem
              icon={<Trophy className="w-8 h-8 text-info" />}
              label="Deportes"
              value={puntos.deportes}
              colorClass="text-info"
              bgClass="bg-info/10"
            />
          )}

          {/* <StatItem
            icon={<TrendingUp className="w-8 h-8 text-primary" />}
            label="Total"
            value={puntos.total}
            colorClass="text-primary"
            bgClass="bg-primary/10"
          /> */}
        </div>
      </CardContent>
    </Card>
  );
};

// Sub-componente pequeño para evitar repetición
const StatItem = ({ icon, label, value, colorClass, bgClass }: any) => (
  <div className={`flex items-center gap-3 p-4 rounded-lg ${bgClass}`}>
    {icon}
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className={`text-2xl font-bold ${colorClass}`}>{value}</p>
    </div>
  </div>
);
