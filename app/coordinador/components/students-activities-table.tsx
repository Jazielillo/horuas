// components/StudentsActivitiesTable.tsx

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Search } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { Activity, Alumno } from "@/app/models";
import { useEffect } from "react";

interface StudentsActivitiesTableProps {
  students: Alumno[];
  activities: Activity[];
  selectedIds: Map<number, Set<number>>; // Map<studentId, Set<activityId>>
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onToggleStudentActivity: (studentId: number, activityId: number) => void;
  onToggleAllActivitiesForStudent: (studentId: number) => void;
  onToggleActivityForAllStudents: (activityId: number) => void;
  loading?: boolean;
  isSingleStudent?: boolean;
  disabled?: boolean;
  onAssign?: (selectedIds: Map<number, Set<number>>) => void;
  submitting?: boolean;
}

export const StudentsActivitiesTable = ({
  students,
  activities,
  selectedIds,
  searchTerm,
  onSearchChange,
  onToggleStudentActivity,
  onToggleAllActivitiesForStudent,
  onToggleActivityForAllStudents,
  loading = false,
  isSingleStudent = false,
  disabled = false,
  onAssign,
  submitting = false,
}: StudentsActivitiesTableProps) => {
  // Limitar a máximo 15 actividades
  const displayActivities = activities.slice(0, 15);


  // Verificar si todas las actividades están seleccionadas para un alumno
  const areAllActivitiesSelectedForStudent = (studentId: number): boolean => {
    const studentSelections = selectedIds.get(studentId);
    if (!studentSelections) return false;
    return studentSelections.size === displayActivities.length && displayActivities.length > 0;
  };

  // Verificar si una actividad está seleccionada para todos los alumnos
  const isActivitySelectedForAllStudents = (activityId: number): boolean => {
    if (students.length === 0) return false;
    return students.every((student) => {
      const studentSelections = selectedIds.get(student.id_usuario);
      return studentSelections?.has(activityId) ?? false;
    });
  };


  // Verificar si una actividad específica está seleccionada para un alumno
  const isActivitySelectedForStudent = (
    studentId: number,
    activityId: number
  ): boolean => {
    return selectedIds.get(studentId)?.has(activityId) ?? false;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4">
          {/* Header con título y contador */}
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">
                {isSingleStudent
                  ? "Alumno Seleccionado"
                  : `Alumnos y Actividades `}
              </CardTitle>
              <CardDescription className="text-base">
                {isSingleStudent
                  ? "Selecciona las actividades para este alumno"
                  : "Selecciona las actividades para cada alumno"}
              </CardDescription>
            </div>

            <div className="flex items-center gap-2">
               <Button
                size="lg"
                onClick={() => onAssign && onAssign(selectedIds)}
                disabled={disabled}
              >
                {submitting ? (
                  <>
                    <Spinner className="h-5 w-5 animate-spin text-white" />
                    Guardando cambios...
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Guardar cambios
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Barra de búsqueda (solo para modo grupo) */}
          {!isSingleStudent && students.length > 0 && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre o número de cuenta..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {/* Mensaje informativo si hay más de 15 actividades */}
        {activities.length > 15 && (
          <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              ⚠️ <strong>Nota:</strong> Hay {activities.length} actividades, pero solo se muestran las primeras 15 para mejor visualización.
            </p>
          </div>
        )}
        
        <div className="rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12 text-center px-2">
                    #
                  </TableHead>
                  <TableHead className="min-w-[180px] px-2">
                    Nombre
                  </TableHead>
                  <TableHead className="w-[110px] px-2">
                    Cuenta
                  </TableHead>
                  <TableHead className="w-14 text-center px-1">
                    <span className="text-xs">Todas</span>
                  </TableHead>

                  {/* Columnas para cada actividad */}
                  {displayActivities.map((activity) => (
                    <TableHead
                      key={activity.id_actividad}
                      className="w-[75px] text-center px-1"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-semibold text-[11px] leading-tight line-clamp-2 text-center" title={activity.nombre}>
                          {activity.nombre}
                        </span>
                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                          {activity.puntos_participacion}p
                        </span>
                        {/* Checkbox para seleccionar/deseleccionar todos los alumnos para esta actividad */}
                        {!isSingleStudent && students.length > 0 && (
                          <div
                            className="flex items-center justify-center p-1 cursor-pointer hover:bg-accent rounded transition-colors"
                            onClick={() =>
                              onToggleActivityForAllStudents(activity.id_actividad)
                            }
                          >
                            <Checkbox
                              checked={isActivitySelectedForAllStudents(
                                activity.id_actividad
                              )}
                              onCheckedChange={() =>
                                onToggleActivityForAllStudents(activity.id_actividad)
                              }
                              className="h-3.5 w-3.5 pointer-events-none"
                            />
                          </div>
                        )}
                      </div>
                    </TableHead>
                  ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {/* Estado de carga */}
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={4 + displayActivities.length}
                    className="h-24 text-center"
                  >
                    <div className="flex flex-col items-center justify-center gap-2 mx-auto">
                      <Spinner className="h-8 w-8 animate-spin text-primary" />
                      <span className="text-sm text-muted-foreground">
                        Cargando datos...
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : students.length === 0 ? (
                /* Estado vacío */
                <TableRow>
                  <TableCell
                    colSpan={4 + displayActivities.length}
                    className="text-center py-8 text-muted-foreground"
                  >
                    {searchTerm
                      ? "No se encontraron alumnos con ese criterio de búsqueda"
                      : "No se encontraron alumnos"}
                  </TableCell>
                </TableRow>
              ) : displayActivities.length === 0 ? (
                /* No hay actividades */
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No hay actividades disponibles
                  </TableCell>
                </TableRow>
              ) : (
                /* Lista de estudiantes con actividades */
                students.map((student, index) => (
                  <TableRow key={student.id_usuario}>
                    {/* Número de fila */}
                    <TableCell className="text-center font-medium text-muted-foreground text-xs px-2">
                      {index + 1}
                    </TableCell>

                    {/* Nombre del alumno */}
                    <TableCell className="font-medium text-sm px-2">
                      <div className="line-clamp-1" title={student.nombre}>
                        {student.nombre}
                      </div>
                    </TableCell>

                    {/* Número de cuenta */}
                    <TableCell className="text-xs px-2">
                      {student.num_cuenta}
                    </TableCell>

                    {/* Checkbox para seleccionar todas las actividades del alumno */}
                    <TableCell 
                      className="text-center cursor-pointer hover:bg-accent transition-colors px-1"
                      onClick={() => onToggleAllActivitiesForStudent(student.id_usuario)}
                    >
                      <div className="flex items-center justify-center">
                        <Checkbox
                          checked={areAllActivitiesSelectedForStudent(
                            student.id_usuario
                          )}
                          onCheckedChange={() =>
                            onToggleAllActivitiesForStudent(student.id_usuario)
                          }
                          className="h-3.5 w-3.5 pointer-events-none"
                        />
                      </div>
                    </TableCell>

                    {/* Checkboxes para cada actividad */}
                    {displayActivities.map((activity) => (
                      <TableCell
                        key={activity.id_actividad}
                        className="text-center cursor-pointer hover:bg-accent transition-colors px-1"
                        onClick={() =>
                          onToggleStudentActivity(
                            student.id_usuario,
                            activity.id_actividad
                          )
                        }
                      >
                        <div className="flex items-center justify-center">
                          <Checkbox
                            checked={isActivitySelectedForStudent(
                              student.id_usuario,
                              activity.id_actividad
                            )}
                            onCheckedChange={() =>
                              onToggleStudentActivity(
                                student.id_usuario,
                                activity.id_actividad
                              )
                            }
                            className="h-3.5 w-3.5 pointer-events-none"
                          />
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        </div>
      </CardContent>
    </Card>
  );
};
