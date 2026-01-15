// components/StudentRow.tsx

import { Checkbox } from '@/components/ui/checkbox';
import { TableCell, TableRow } from '@/components/ui/table';
import { Activity, Alumno } from '@/app/models';
import { ActivityPrize } from '@/app/models/activity';
import { AwardSelector } from './award-selector';
import { calculateNewTotal, getAwardBonus, getCurrentPoints } from '@/utils/points-calculator';

interface StudentRowProps {
  student: Alumno;
  isSelected: boolean;
  onToggle: () => void;
  activity: Activity;
  studentAward?: ActivityPrize;
  onAwardChange: (studentId: number, prizeId: number, awardType: string, points: number) => void;
}

export const StudentRow = ({
  student,
  isSelected,
  onToggle,
  activity,
  studentAward,
  onAwardChange
}: StudentRowProps) => {
  const currentPoints = getCurrentPoints(student, activity.departamento);
  const awardBonus = getAwardBonus(studentAward ? { [student.id_usuario]: studentAward } : {}, student.id_usuario, activity.premio);
  const newTotal = calculateNewTotal(currentPoints, activity.puntos_participacion, isSelected ? awardBonus : 0);

  // Estilos condicionales basados en el premio
  const rowClass = isSelected 
    ? getRowStyleByAward(studentAward?.lugar ?? 0)
    : '';

  return (
    <TableRow className={rowClass}>
      <TableCell>
        <Checkbox
          checked={isSelected}
          onCheckedChange={onToggle}
        />
      </TableCell>
      
      <TableCell className="font-medium">
        {student.nombre}
      </TableCell>
      
      <TableCell>{student.num_cuenta}</TableCell>
      
      {activity.premio && (
        <TableCell>
          {isSelected ? (
            <AwardSelector
              activity={activity}
              studentId={student.id_usuario}
              currentAward={studentAward}
              onAwardChange={onAwardChange}
            />
          ) : (
            <span className="text-muted-foreground text-sm">-</span>
          )}
        </TableCell>
      )}
      
      <TableCell className="text-right">
        {currentPoints}
      </TableCell>
      
      <TableCell className="text-right font-semibold">
        <span className="text-success">
          {newTotal}
          {isSelected && awardBonus > 0 && ` (+${awardBonus} pts)`}
        </span>
      </TableCell>
    </TableRow>
  );
};

// Helper para estilos
const getRowStyleByAward = (lugar?: number) => {
  const baseStyle = 'bg-accent/50';
  
  switch (lugar) {
    case 1: return `${baseStyle} bg-yellow-200 hover:bg-yellow-300`;
    case 2: return `${baseStyle} bg-gray-200 hover:bg-gray-300`;
    case 3: return `${baseStyle} bg-amber-700 text-white hover:bg-amber-800`;
    default: return baseStyle;
  }
};