import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Trophy,
  BookOpen,
  Compass,
  HeartHandshake,
  AlertTriangle,
  Sparkles,
  Zap,
  TrendingUp,
  Target,
  Flame,
  PartyPopper,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Configuración centralizada de estilos y textos
const categoriesConfig = {
  cultura: {
    label: "Cultura",
    icon: BookOpen,
    color: "text-purple-600 dark:text-purple-400",
    strokeColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    ringBg: "text-purple-100 dark:text-purple-900/50",
    gradient:
      "from-purple-50 to-white dark:from-purple-950/20 dark:to-transparent",
    gif: "/balancin.gif",
  },
  deportes: {
    label: "Deportes",
    icon: Trophy,
    color: "text-orange-500 dark:text-orange-400",
    strokeColor: "text-orange-500 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    ringBg: "text-orange-100 dark:text-orange-900/50",
    gradient:
      "from-orange-50 to-white dark:from-orange-950/20 dark:to-transparent",
    gif: "/deportes.gif",
  },
  orientacion_educativa: {
    label: "Orientación",
    icon: Compass,
    color: "text-blue-500 dark:text-blue-400",
    strokeColor: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    ringBg: "text-blue-100 dark:text-blue-900/50",
    gradient: "from-blue-50 to-white dark:from-blue-950/20 dark:to-transparent",
    gif: "/brujula.gif",
  },
  servicio_social: {
    label: "Servicio Social",
    icon: HeartHandshake,
    color: "text-emerald-500 dark:text-emerald-400",
    strokeColor: "text-emerald-500 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    ringBg: "text-emerald-100 dark:text-emerald-900/50",
    gradient:
      "from-emerald-50 to-white dark:from-emerald-950/20 dark:to-transparent",
    gif: "/ayuda.gif",
  },
};

interface CategoryProgressCardProps {
  type: "cultura" | "deportes" | "orientacion_educativa" | "servicio_social";
  points: number;
  // Opcional: si quieres pasar el GIF desde fuera, sino usa el default del config
  customGif?: string;
}

// export const CategoryProgressCard = ({ type, points, customGif }: CategoryProgressCardProps) => {
//   const config = categoriesConfig[type];
//   const Icon = config.icon;

//   // Lógica Matemática del Círculo
//   const percentage = Math.min(points, 100);
//   const isCompleted = points >= 100;

//   // Dimensiones del SVG
//   const size = 160; // Un poco más pequeño para que quepa bien en el Grid
//   const strokeWidth = 12;
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (percentage / 100) * circumference;

//   return (
//     <Card className={cn(
//         "relative overflow-hidden border-t-4 transition-all duration-300 hover:shadow-lg group",
//         isCompleted ? "border-t-green-500 dark:border-t-green-400" : "border-t-transparent"
//       )}>

//       {/* Fondo con degradado sutil */}
//       <div className={cn("absolute inset-0 opacity-30 dark:opacity-20 bg-linear-to-b pointer-events-none", config.gradient)} />

//       <CardHeader className="relative pb-2 flex flex-row items-center justify-between z-10">
//         <CardTitle className="text-base font-bold tracking-tight text-foreground/80 dark:text-foreground/90 flex items-center gap-2">
//            {config.label}
//         </CardTitle>
//         <div className={cn("p-2 rounded-full transition-transform group-hover:scale-110", config.bgColor)}>
//           <Icon className={cn("w-4 h-4", config.color)} />
//         </div>
//       </CardHeader>

//       <CardContent className="relative z-10 flex flex-col items-center pt-2">

//         {/* === ZONA DEL ANILLO Y GIF === */}
//         <div className="relative flex items-center justify-center mb-4">
//             {/* SVG Ring */}
//             <svg width={size} height={size} className="transform -rotate-90">
//                 {/* Círculo base (fondo del anillo) */}
//                 <circle
//                     cx={size / 2} cy={size / 2} r={radius}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={strokeWidth}
//                     className={config.ringBg}
//                 />
//                 {/* Círculo de progreso */}
//                 <circle
//                     cx={size / 2} cy={size / 2} r={radius}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={strokeWidth}
//                     strokeDasharray={circumference}
//                     strokeDashoffset={offset}
//                     strokeLinecap="round"
//                     className={cn("transition-all duration-1000 ease-out", config.strokeColor)}
//                 />
//             </svg>

//             {/* Contenido Central (GIF + Porcentaje) */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
//                 {/* Fondo blanco circular para el GIF */}
//                 <div className="absolute w-24 h-24 rounded-full bg-white shadow-sm"></div>

//                 {/* Aquí usamos el GIF.
//                     NOTA: Asegúrate de tener una imagen fallback o usar un icono si el gif falla
//                 */}
//                 <div className="w-12 h-12 mb-1 relative opacity-90 z-10">
//                      <Image
//                         src={customGif || config.gif} // Usa prop o config
//                         alt={config.label}
//                         fill
//                         className="object-contain"
//                         unoptimized // Necesario para GIFs en algunos casos de Next.js
//                      />
//                 </div>
//                 <span className="text-2xl font-black tracking-tighter text-black z-10">
//                     {percentage.toFixed(0)}%
//                 </span>
//             </div>
//         </div>

//         {/* === ZONA DE PUNTOS Y ESTADO === */}
//         <div className="w-full text-center space-y-1">
//             <div className={cn("inline-block px-4 py-1.5 rounded-xl border font-bold text-2xl bg-white/80 dark:bg-card/80 shadow-sm backdrop-blur-sm", config.color)}>
//                 {points} <span className="text-sm font-medium text-muted-foreground">pts</span>
//             </div>

//             <div className="h-6 flex items-center justify-center mt-2">
//                 {isCompleted ? (
//                     <span className="flex items-center text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950/40 px-3 py-1 rounded-full animate-in fade-in zoom-in duration-500">
//                         <CheckCircle2 className="w-3 h-3 mr-1.5" />
//                         ¡Meta Alcanzada!
//                     </span>
//                 ) : (
//                     <span className="text-xs text-muted-foreground font-medium">
//                         Faltan {100 - points} para completar
//                     </span>
//                 )}
//             </div>
//         </div>

//       </CardContent>
//     </Card>
//   );
// };

const getMotivationalMessage = (points: number, percentage: number) => {
  const remaining = 100 - points;

  // 100% - Meta alcanzada
  if (percentage >= 100) {
    return {
      icon: PartyPopper,
      text: "¡Meta Alcanzada!",
      subtext: "¡Eres increíble!",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-950/40",
      animation: "animate-in fade-in zoom-in duration-500",
    };
  }

  // 90-99% - Casi lo logras
  if (percentage >= 90) {
    return {
      icon: Flame,
      text: `¡Solo faltan ${remaining} pts!`,
      subtext: "¡Ya casi llegas! 🔥",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-950/40",
      animation: "animate-pulse",
    };
  }

  // 75-89% - Excelente progreso
  if (percentage >= 75) {
    return {
      icon: TrendingUp,
      text: `¡Vas muy bien!`,
      subtext: `Faltan ${remaining} pts`,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-950/40",
      animation: "animate-in slide-in-from-bottom duration-300",
    };
  }

  // 50-74% - Buen avance
  if (percentage >= 50) {
    return {
      icon: Target,
      text: "¡A medio camino!",
      subtext: `Continúa así, ${remaining} pts más`,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-950/40",
      animation: "animate-in fade-in duration-300",
    };
  }

  // 25-49% - Sigue adelante
  if (percentage >= 25) {
    return {
      icon: Zap,
      text: "¡Sigue así!",
      subtext: `${remaining} pts para la meta`,
      color: "text-yellow-600 dark:text-yellow-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-950/40",
      animation: "animate-in fade-in duration-300",
    };
  }

  // 10-24% - Motivación inicial
  if (percentage >= 10) {
    return {
      icon: Sparkles,
      text: "¡Buen comienzo!",
      subtext: `${remaining} pts restantes`,
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-100 dark:bg-cyan-950/40",
      animation: "animate-in fade-in duration-300",
    };
  }

  // 0-9% - Alerta urgente
  return {
    icon: AlertTriangle,
    text: "¡Atención!",
    subtext: `Necesitas ${remaining} pts`,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-950/40",
    animation: "animate-bounce",
  };
};

// Componente actualizado
export const CategoryProgressCard = ({
  type,
  points,
  customGif,
}: CategoryProgressCardProps) => {
  const config = categoriesConfig[type];
  const Icon = config.icon;

  const percentage = Math.min(points, 100);
  const isCompleted = points >= 100;

  // Obtener mensaje motivador
  const motivationalMsg = getMotivationalMessage(points, percentage);
  const MotivationIcon = motivationalMsg.icon;

  // Dimensiones del SVG
  const size = 160;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-t-4 transition-all duration-300 hover:shadow-lg group",
        isCompleted
          ? "border-t-green-500 dark:border-t-green-400"
          : "border-t-transparent"
      )}
    >
      {/* Fondo con degradado sutil */}
      <div
        className={cn(
          "absolute inset-0 opacity-30 dark:opacity-20 bg-linear-to-b pointer-events-none",
          config.gradient
        )}
      />

      <CardHeader className="relative pb-2 flex flex-row items-center justify-between z-10">
        <CardTitle className="text-base font-bold tracking-tight text-foreground/80 dark:text-foreground/90 flex items-center gap-2">
          {config.label}
        </CardTitle>
        <div
          className={cn(
            "p-2 rounded-full transition-transform group-hover:scale-110",
            config.bgColor
          )}
        >
          <Icon className={cn("w-4 h-4", config.color)} />
        </div>
      </CardHeader>

      <CardContent className="relative z-10 flex flex-col items-center pt-2">
        {/* === ZONA DEL ANILLO Y GIF === */}
        <div className="relative flex items-center justify-center mb-4">
          {/* SVG Ring */}
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Círculo base (fondo del anillo) */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              className={config.ringBg}
            />
            {/* Círculo de progreso */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className={cn(
                "transition-all duration-1000 ease-out",
                config.strokeColor
              )}
            />
          </svg>

          {/* Contenido Central (GIF + Porcentaje) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            {/* Fondo blanco circular para el GIF */}
            <div className="absolute w-24 h-24 rounded-full bg-white shadow-sm"></div>

            <div className="w-12 h-12 mb-1 relative opacity-90 z-10">
              <Image
                src={customGif || config.gif}
                alt={config.label}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-black z-10">
              {percentage.toFixed(0)}%
            </span>
          </div>
        </div>

        {/* === ZONA DE PUNTOS Y MENSAJES MOTIVADORES === */}
        <div className="w-full text-center space-y-2">
          {/* Badge de Puntos */}
          <div
            className={cn(
              "inline-block px-4 py-1.5 rounded-xl border font-bold text-2xl bg-white/80 dark:bg-card/80 shadow-sm backdrop-blur-sm transition-all hover:scale-105",
              config.color
            )}
          >
            {points}{" "}
            <span className="text-sm font-medium text-muted-foreground">
              pts
            </span>
          </div>

          {/* Mensaje Motivador Dinámico */}
          <div className="min-h-[52px] flex flex-col items-center justify-center gap-1">
            <span
              className={cn(
                "flex items-center text-xs font-bold px-3 py-1.5 rounded-full shadow-sm",
                motivationalMsg.color,
                motivationalMsg.bgColor,
                motivationalMsg.animation
              )}
            >
              <MotivationIcon className="w-3.5 h-3.5 mr-1.5" />
              {motivationalMsg.text}
            </span>

            <span className="text-[10px] text-muted-foreground font-medium">
              {motivationalMsg.subtext}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
