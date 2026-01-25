// components/AwardSelector.tsx

import { Activity } from "@/lib/models";
import { ActivityPrize } from "@/lib/models/activity";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AwardSelectorProps {
  activity: Activity;
  studentId: number;
  currentAward?: ActivityPrize;
  onAwardChange: (studentId: number, prizeId: number, awardType: string, points: number) => void;
}

export const AwardSelector = ({
  activity,
  studentId,
  currentAward,
  onAwardChange,
}: AwardSelectorProps) => {
  // Determina el valor actual del selector
  const currentValue = currentAward?.lugar?.toString() || "participation";

  const handleChange = (value: string) => {
    if (value === "participation") {
      // Si selecciona "participación", envía los puntos base
      onAwardChange(
        studentId,
        0, // No hay premio
        "participation",
        activity.puntos_participacion || 0
      );
    } else {
      // Si selecciona un premio específico
      const award = activity.premio?.find(
        (a) => a?.lugar?.toString() === value
      );

      if (award) {
        onAwardChange(
          studentId,
          award.id || 0,
          value,
          award.puntos_otorgados || 0
        );
      }
    }
  };

  return (
    <Select value={currentValue} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {/* Opción de solo participación */}
        <SelectItem value="participation">
          Participación ({activity.puntos_participacion} pts)
        </SelectItem>

        {/* Opciones de premios */}
        {activity.premio?.map((award) => (
          <SelectItem
            key={award?.lugar}
            value={award?.lugar?.toString() ?? ""}
          >
            {award?.lugar}° Lugar ({award?.puntos_otorgados} pts)
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};