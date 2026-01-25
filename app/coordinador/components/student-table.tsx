// components/StudentsTable.tsx

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
import { Check, Search } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { Activity, Alumno } from "@/lib/models";
import { ActivityPrize } from "@/lib/models/activity";
import { StudentRow } from "./student-row";

interface StudentsTableProps {
  students: Alumno[];
  allStudents: Alumno[];
  selectedIds: Set<number>;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onToggleStudent: (id: number) => void;
  onToggleAll: () => void;
  allSelected: boolean;
  activity: Activity;
  studentAwards: Record<number, ActivityPrize>;
  onAwardChange: (
    studentId: number,
    prizeId: number,
    awardType: string,
    points: number
  ) => void;
  onAssign: () => void;
  loading?: boolean;
  isSingleStudent?: boolean;
}

export const StudentsTable = ({
  students,
  allStudents,
  selectedIds,
  searchTerm,
  onSearchChange,
  onToggleStudent,
  onToggleAll,
  allSelected,
  activity,
  studentAwards,
  onAwardChange,
  onAssign,
  loading = false,
  isSingleStudent = false,
}: StudentsTableProps) => {
  const selectedCount = selectedIds.size;
  const hasAwards = activity?.premio && activity.premio.length > 0;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4">
          {/* Header con título y botones */}
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">
                {isSingleStudent
                  ? "Alumno Seleccionado"
                  : `Alumnos - ${selectedCount} seleccionado${
                      selectedCount !== 1 ? "s" : ""
                    }`}
              </CardTitle>
              <CardDescription className="text-lg">
                {isSingleStudent
                  ? "Confirma la asignación de "
                  : "Selecciona los alumnos para asignar "}
                <span className="font-semibold text-primary">
                  {activity?.puntos_participacion} puntos
                </span>
              </CardDescription>
            </div>

            <div className="flex items-center gap-3">
              {/* Botón Seleccionar/Deseleccionar Todos (solo para modo grupo) */}
              {!isSingleStudent && allStudents.length > 0 && (
                <Button
                  variant="outline"
                  onClick={onToggleAll}
                  className={allSelected ? "bg-accent text-white" : ""}
                >
                  {allSelected ? "Deseleccionar Todos" : "Seleccionar Todos"}
                </Button>
              )}

              {/* Botón Asignar Puntos */}
              <Button
                size="lg"
                onClick={onAssign}
                disabled={loading || selectedCount === 0}
              >
                {loading && selectedCount > 0 ? (
                  <Spinner className="h-5 w-5 animate-spin text-white" />
                ) : (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Asignar Puntos
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Barra de búsqueda (solo para modo grupo) */}
          {!isSingleStudent && allStudents.length > 0 && (
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
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>No. Cuenta</TableHead>
                {hasAwards && <TableHead>Tipo Participación</TableHead>}
                <TableHead className="text-right">Puntos Actuales</TableHead>
                <TableHead className="text-right">Nuevo Total</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {/* Estado de carga */}
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={hasAwards ? 6 : 5}
                    className="h-24 text-center"
                  >
                    <div className="flex flex-col items-center justify-center gap-2 mx-auto">
                      <Spinner className="h-8 w-8 animate-spin text-primary" />
                      <span className="text-sm text-muted-foreground">
                        Cargando alumnos...
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : students.length === 0 ? (
                /* Estado vacío */
                <TableRow>
                  <TableCell
                    colSpan={hasAwards ? 6 : 5}
                    className="text-center py-8 text-muted-foreground"
                  >
                    {searchTerm
                      ? "No se encontraron alumnos con ese criterio de búsqueda"
                      : "No se encontraron alumnos"}
                  </TableCell>
                </TableRow>
              ) : (
                /* Lista de estudiantes */
                students.map((student) => (
                  <StudentRow
                    key={student.id_usuario}
                    student={student}
                    isSelected={selectedIds.has(student.id_usuario)}
                    onToggle={() => onToggleStudent(student.id_usuario)}
                    activity={activity}
                    studentAward={studentAwards[student.id_usuario]}
                    onAwardChange={onAwardChange}
                  />
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};