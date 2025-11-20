"use client";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Check, UserPlus, Search, ChevronsUpDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AssignPointsForm from "@/app/components/forms/assign-points-form";
import { usePointsAssignmentStore } from "@/store/use-points-assignment-store";

const CoordinatorAssign = () => {
  const {
    selectedGroup,
    selectedActivity,
    studentsOfGroup,
    selectedStudent,
    studentHasActivity,
    selectedStudents,

    setStudents,
    assignPointsToStudents,
  } = usePointsAssignmentStore();

  const [assignToAll, setAssignToAll] = useState(false);
  const [studentSearch, setStudentSearch] = useState("");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    // Reset selections when group or student changes
    console.log(selectedGroup)
  }, [selectedGroup]);

  const handleToggleAll = () => {
    // if (assignToAll) {
    //   setSelectedStudents([]);
    //   setAssignToAll(false);
    // } else {
    //   setSelectedStudents(students.map((s) => s.id));
    //   setAssignToAll(true);
    // }
  };

  const handleAssignPoints = async () => {
    let aux = selectedStudents?.length;
    await assignPointsToStudents(selectedActivity!.puntos, new Date(), 47, 1);
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    });
    //   if (!selectedGroup || !selectedActivity) {
    //     toast({
    //       title: "Error",
    //       description: "Selecciona un grupo y una actividad",
    //       variant: "destructive",
    //     });
    //     return;
    //   }
    //   if (selectedStudents.length === 0) {
    //     toast({
    //       title: "Error",
    //       description: "Selecciona al menos un alumno",
    //       variant: "destructive",
    //     });
    //     return;
    //   }
    //   toast({
    //     title: "Puntos asignados exitosamente",
    //     description: `Se asignaron puntos a ${selectedStudents.length} alumno(s)`,
    //   });
    //   // Reset
    //   setSelectedStudents([]);
    //   setAssignToAll(false);
    // };
    // Determinar qué estudiantes mostrar
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Asignar Puntos</h1>
        <p className="text-muted-foreground">
          Asignar puntos de actividades a alumnos
        </p>
      </div>

      {/* Selection Form */}
      <AssignPointsForm />

      {/* Students Table */}
      {(selectedGroup || selectedStudent) &&
        selectedActivity &&
        !studentHasActivity && (
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>
                      {selectedStudent
                        ? "Alumno Seleccionado"
                        : `Alumnos del Grupo ${selectedGroup?.nombre}`}
                    </CardTitle>
                    <CardDescription>
                      {selectedStudent
                        ? "Confirma la asignación de "
                        : "Selecciona los alumnos para asignar "}
                      <span className="font-semibold text-primary">
                        {selectedActivity.puntos} puntos
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    {!selectedStudent && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleToggleAll}
                      >
                        {assignToAll
                          ? "Deseleccionar Todos"
                          : "Seleccionar Todos"}
                      </Button>
                    )}
                    <Button
                      size="lg"
                      onClick={handleAssignPoints}
                      disabled={selectedStudents?.length === 0 && !check}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Asignar Puntos ({" "}
                      {(selectedStudents?.length ?? 0) + (check ? 1 : 0)} )
                    </Button>
                  </div>
                </div>

                {/* Search Bar - solo mostrar si no es alumno individual */}
                {!selectedStudent && (
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar por nombre o número de cuenta..."
                      value={studentSearch}
                      onChange={(e) => setStudentSearch(e.target.value)}
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
                      <TableHead className="w-12">
                        <Checkbox
                          checked={assignToAll}
                          onCheckedChange={handleToggleAll}
                        />
                      </TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>No. Cuenta</TableHead>
                      <TableHead className="text-right">
                        Puntos Actuales
                      </TableHead>
                      <TableHead className="text-right">Nuevo Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedStudent ? (
                      <TableRow
                        key={selectedStudent.id_usuario}
                        className={check ? "bg-accent/50" : ""}
                      >
                        <TableCell>
                          <Checkbox
                            className="cursor-pointer"
                            checked={check}
                            onCheckedChange={() => setCheck(!check)}
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {selectedStudent.nombre}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {selectedStudent.num_cuenta}
                        </TableCell>
                        <TableCell className="text-right">
                          {selectedStudent.puntos ?? 0}
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          <span className="text-success ml-2">
                            {selectedActivity.puntos + selectedStudent.puntos!}
                          </span>
                        </TableCell>
                      </TableRow>
                    ) : studentsOfGroup?.length === 0 ? (
                      // --- Modo lista vacía ---
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="text-center py-8 text-muted-foreground"
                        >
                          No se encontraron alumnos
                        </TableCell>
                      </TableRow>
                    ) : (
                      // --- Modo lista completa ---
                      studentsOfGroup?.map((student) => {
                        const isSelected = selectedStudents?.some(
                          (s) => s.id_usuario === student.id_usuario
                        );

                        return (
                          <TableRow
                            key={student.id_usuario}
                            className={isSelected ? "bg-accent/50" : ""}
                          >
                            <TableCell>
                              <Checkbox
                                className="cursor-pointer"
                                checked={isSelected}
                                onCheckedChange={() => setStudents(student)}
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              {student.nombre}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {student.num_cuenta}
                            </TableCell>
                            <TableCell className="text-right">
                              {student.puntos ?? 0}
                            </TableCell>
                            <TableCell className="text-right font-semibold">
                              <span className="text-success ml-2">
                                {selectedActivity.puntos +
                                  (student.puntos ?? 0)}
                              </span>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

      {studentHasActivity && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <UserPlus className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium text-center mb-2">
              El alumno ya tiene puntos asignados para esta actividad
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Selecciona otro alumno o actividad para continuar
            </p>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {!selectedActivity && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <UserPlus className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium text-center mb-2">
              Selecciona una actividad
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Primero selecciona un grupo o busca un alumno específico, luego
              elige la actividad
            </p>
          </CardContent>
        </Card>
      )}

      {selectedActivity && !selectedGroup && !selectedStudent && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <UserPlus className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium text-center mb-2">
              Selecciona un grupo o alumno
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Elige un grupo completo o busca un alumno individual para asignar
              puntos
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
export default CoordinatorAssign;
