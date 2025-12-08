"use client";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import {
  Check,
  UserPlus,
  Search,
  ChevronsUpDown,
  ArrowLeft,
  Trophy,
  Award,
  Users,
  Volleyball,
  Guitar,
  Calendar,
} from "lucide-react";
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
import { set } from "zod";
import { Spinner } from "@/components/ui/spinner";
import { useParams } from "next/navigation";
import { useActivityStore } from "@/store/use-activity-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ActivityPrize } from "@/app/models/activity";
import { SummaryDetailsPoints } from "@/app/coordinador/components/assign-points/summary-details-points";
import { Badge } from "@/components/ui/badge";

const CoordinatorAssign = () => {
  const {
    selectedGroup,
    studentsOfGroup,
    selectedStudent,
    studentHasActivity,
    selectedStudents,
    loading,
    loadingStudents,

    setYear,
    setGroup,
    setStudent,
    setStudents,
    assignPointsToStudents,
    setStudentsOfGroup,
    resetState,
  } = usePointsAssignmentStore();

  useEffect(() => {
    resetState();
  }, []);

  const [assignToAll, setAssignToAll] = useState(false);
  const [studentSearch, setStudentSearch] = useState("");
  const [check, setCheck] = useState(false);

  const [studentAwards, setStudentAwards] = useState<
    Record<number, ActivityPrize>
  >({});
  const handleSetStudentAward = (
    studentId: number,
    prizeId: number,
    awardType: string,
    puntos_otorgados: number
  ) => {
    setStudentAwards((prev) => ({
      ...prev,
      [studentId]: {
        id: prizeId,
        lugar: awardType === "participation" ? null : parseInt(awardType),
        puntos_otorgados: puntos_otorgados,
      },
    }));
  };

  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  useEffect(() => {
    setYear("");
    setGroup(null);
    setStudent(null);
    setStudents(null);
  }, []);

  const { id } = useParams(); // Obtenemos el ID del URL
  const {
    getActivityById,
    loadActivityById,
    activitySelected,
    setActivitySelected,
  } = useActivityStore();
  const isSports = activitySelected?.departamento === "Deportes";
  const isClub = activitySelected?.actividad_grupal;
  useEffect(() => {
    if (!id) return;

    // 1. Intentamos obtenerla de la memoria (Zustand)
    const cachedActivity = getActivityById(Number(id));
    console.log("Cached activity:", cachedActivity);

    if (cachedActivity) {
      setActivitySelected(cachedActivity);
      console.log("Activity selected:", activitySelected);
    } else {
      loadActivityById(Number(id));
      console.log("Activity selected:", activitySelected);
    }
  }, [id, getActivityById, loadActivityById, setActivitySelected]);

  const handleToggleAll = () => {
    setAssignToAll(!assignToAll);

    if (assignToAll) {
      setStudentsOfGroup([]);
    } else {
      setStudentsOfGroup(studentsOfGroup);
    }
  };

  const handleAssignPoints = async () => {
    setConfirmDialogOpen(false);
    if (selectedStudent === null) {
      let aux = selectedStudents?.length;
      await assignPointsToStudents(
        activitySelected?.id_actividad!,
        activitySelected!.puntos_participacion,
        new Date(),
        137,
        1,
        studentAwards
      );
      toast.success("Puntos asignados correctamente", {
        description: (
          <span className="text-primary">
            {"Se asignaron puntos a " +
              ((aux ?? 0) + (check ? 1 : 0)) +
              " alumno(s)"}
          </span>
        ),
      });
      setStudentAwards({});
    } else {
      await assignPointsToStudents(
        activitySelected?.id_actividad!,
        activitySelected!.puntos_participacion,
        new Date(),
        137,
        1,
        studentAwards
      );
      toast.success("Puntos asignados correctamente", {
        description: (
          <span className="text-primary">
            {"Se asignaron puntos a 1 alumno"}
          </span>
        ),
      });
      setStudent(null);
      setCheck(false);
      setStudentAwards({});
    }
  };

  const handleCancel = () => {
    // navigate("/coordinator/clubs");
    window.history.back();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-6 mb-8 bg-card p-4 rounded-lg shadow">
        {/* Header Superior con Navegación y Título Principal */}
        <div className="flex items-start gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCancel}
            className="mt-1 bg-secondary/50 hover:bg-secondary/80 shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex-1 space-y-1">
            {/* Título de la Acción (Pequeño, como 'breadcrumb') */}
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              Asignar Puntos
              {/* Si es Club, lo recordamos aquí discretamente */}
              {isClub && (
                <span className="flex items-center gap-1 text-primary text-xs border border-primary/30 px-1.5 rounded-full">
                  <Users className="w-3 h-3" /> Club
                </span>
              )}
            </p>

            {/* Título de la Actividad (El Héroe) */}
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              {/* Icono decorativo según departamento */}
              {isSports ? (
                <Volleyball className="w-8 h-8 text-info opacity-80 hidden sm:block" />
              ) : (
                <Guitar className="w-8 h-8 text-chart-5 opacity-80 hidden sm:block" />
              )}
              {activitySelected?.nombre || "Cargando actividad..."}
            </h1>

            {/* Barra de metadatos relevantes para la asignación */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* 1. FECHA: Para confirmar que no es el evento del año pasado */}
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground border-r pr-3">
                <Calendar className="w-4 h-4" />
                {activitySelected?.fecha
                  ? new Date(activitySelected.fecha).toLocaleDateString(
                      "es-MX",
                      { dateStyle: "long" }
                    )
                  : "Fecha pendiente"}
              </div>

              {/* 2. PUNTOS BASE: La info más importante en esta pantalla */}
              <Badge
                variant="secondary"
                className="bg-success/15 text-success hover:bg-success/25 gap-1.5 px-3 py-1 text-sm"
              >
                <Award className="w-4 h-4" />
                <span className="font-bold">
                  {activitySelected?.puntos_participacion || 0}
                </span>
                Puntos base
              </Badge>

              {/* 3. PREMIOS: Si hay premios, avisa visualmente */}
              {activitySelected?.premio &&
                activitySelected.premio.length > 0 && (
                  <Badge
                    variant="outline"
                    className="border-yellow-500/50 text-yellow-600 gap-1.5 px-3 py-1"
                  >
                    <Trophy className="w-3 h-3" />
                    {activitySelected.premio.length} Premios disponibles
                  </Badge>
                )}

              {/* 4. DEPARTAMENTO */}
              <Badge variant="outline" className="text-muted-foreground">
                {activitySelected?.departamento}
              </Badge>
            </div>
          </div>
        </div>

        {/* Opcional: Una línea separadora si sientes que se mezcla con el contenido */}
        {/* <Separator /> */}
      </div>

      {/* Selection Form */}
      <AssignPointsForm />

      {/* Students Table */}
      {(selectedGroup || selectedStudent) && !studentHasActivity && (
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {selectedStudent
                      ? "Alumno Seleccionado"
                      : `Alumnos del Grupo ${selectedGroup?.nombre}`}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {selectedStudent
                      ? "Confirma la asignación de "
                      : "Selecciona los alumnos para asignar "}
                    <span className="font-semibold text-primary">
                      {activitySelected?.puntos_participacion} puntos
                    </span>
                  </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                  {!selectedStudent && (
                    <Button
                      variant="outline"
                      // size="sm"
                      onClick={handleToggleAll}
                      className={`${
                        assignToAll ? "bg-accent text-white cursor-pointer" : ""
                      }`}
                    >
                      {assignToAll
                        ? "Deseleccionar Todos"
                        : "Seleccionar Todos"}
                    </Button>
                  )}
                  <Button
                    size="lg"
                    onClick={() => setConfirmDialogOpen(true)}
                    disabled={
                      (loadingStudents || selectedStudents?.length === 0) &&
                      !check
                    }
                  >
                    {loadingStudents ? (
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
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>No. Cuenta</TableHead>
                    {activitySelected?.premio && (
                      <TableHead>Tipo Participación</TableHead>
                    )}
                    <TableHead className="text-right">
                      Puntos Actuales
                    </TableHead>
                    <TableHead className="text-right">Nuevo Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* --- 1. ESTADO DE CARGA --- */}
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        <div className="flex flex-col items-center justify-center gap-2 mx-auto">
                          {/* Asumiendo que tu componente Spinner acepta className */}
                          <Spinner className="h-8 w-8 animate-spin text-primary" />
                          <span className="text-sm text-muted-foreground">
                            Cargando alumnos...
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : selectedStudent ? (
                    // --- 2. MODO ESTUDIANTE ÚNICO ---
                    <TableRow
                      key={selectedStudent.id_usuario}
                      className={
                        check
                          ? [
                              "bg-accent/50",
                              studentAwards[selectedStudent.id_usuario]
                                ?.lugar === 1
                                ? "bg-yellow-200 hover:bg-yellow-300"
                                : studentAwards[selectedStudent.id_usuario]
                                    ?.lugar === 2
                                ? "bg-gray-200 hover:bg-gray-300"
                                : studentAwards[selectedStudent.id_usuario]
                                    ?.lugar === 3
                                ? "bg-amber-700 text-white hover:bg-amber-800"
                                : "",
                            ]
                              .filter(Boolean)
                              .join(" ")
                          : ""
                      }
                    >
                      <TableCell>
                        <Checkbox
                          className="cursor-pointer"
                          checked={check}
                          onCheckedChange={() => {
                            setCheck(!check);
                            setStudents(selectedStudent);
                          }}
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {selectedStudent.nombre}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {selectedStudent.num_cuenta}
                      </TableCell>
                      {activitySelected?.premio && (
                        <TableCell>
                          {check ? (
                            <Select
                              value={
                                studentAwards[
                                  selectedStudent.id_usuario
                                ]?.lugar?.toString() || "participation"
                              }
                              onValueChange={(value) =>
                                handleSetStudentAward(
                                  selectedStudent.id_usuario,
                                  activitySelected.premio?.find(
                                    (a) => a?.lugar?.toString() === value
                                  )?.id || 0,
                                  value,
                                  activitySelected.premio?.find(
                                    (a) => a?.lugar?.toString() === value
                                  )?.puntos_otorgados || 0
                                )
                              }
                            >
                              <SelectTrigger className="w-[180px] bg-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-white">
                                <SelectItem value="participation">
                                  Participación (
                                  {activitySelected.puntos_participacion} pts)
                                </SelectItem>
                                {activitySelected.premio?.map((award) => (
                                  <SelectItem
                                    key={award?.lugar}
                                    value={award?.lugar?.toString() ?? ""}
                                  >
                                    {award?.lugar}° Lugar (
                                    {award?.puntos_otorgados} pts)
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            "-"
                          )}
                        </TableCell>
                      )}
                      <TableCell className="text-right">
                        {activitySelected?.departamento === "Deportes"
                          ? selectedStudent.puntos?.deportes ?? 0
                          : activitySelected?.departamento === "Cultura"
                          ? selectedStudent.puntos?.cultura ?? 0
                          : selectedStudent.puntos?.total ?? 0}
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        <span className="text-success ml-2">
                          {(activitySelected?.puntos_participacion ?? 0) +
                            (activitySelected?.departamento === "Deportes"
                              ? selectedStudent.puntos?.deportes ?? 0
                              : activitySelected?.departamento === "Cultura"
                              ? selectedStudent.puntos?.cultura ?? 0
                              : selectedStudent.puntos?.total ?? 0)}
                          {check &&
                            (() => {
                              const selectedAwardId =
                                studentAwards[
                                  selectedStudent.id_usuario
                                ]?.id?.toString();
                              const award = activitySelected?.premio?.find(
                                (a) => a?.id?.toString() === selectedAwardId
                              );

                              return award
                                ? ` (+${award.puntos_otorgados} pts)`
                                : "";
                            })()}
                        </span>
                      </TableCell>
                    </TableRow>
                  ) : studentsOfGroup?.length === 0 ? (
                    // --- 3. MODO LISTA VACÍA ---
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center py-8 text-muted-foreground"
                      >
                        No se encontraron alumnos
                      </TableCell>
                    </TableRow>
                  ) : (
                    // --- 4. MODO LISTA COMPLETA ---
                    studentsOfGroup?.map((student) => {
                      const isSelected = selectedStudents?.some(
                        (s) => s.id_usuario === student.id_usuario
                      );

                      return (
                        <TableRow
                          key={student.id_usuario}
                          className={
                            isSelected
                              ? [
                                  "bg-accent/50",
                                  studentAwards[student.id_usuario]?.lugar === 1
                                    ? "bg-yellow-200 hover:bg-yellow-300"
                                    : studentAwards[student.id_usuario]
                                        ?.lugar === 2
                                    ? "bg-gray-200 hover:bg-gray-300"
                                    : studentAwards[student.id_usuario]
                                        ?.lugar === 3
                                    ? "bg-amber-700 text-white hover:bg-amber-800"
                                    : "",
                                ]
                                  .filter(Boolean)
                                  .join(" ")
                              : ""
                          }
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
                          <TableCell className="">
                            {student.num_cuenta}
                          </TableCell>
                          {activitySelected?.premio && (
                            <TableCell>
                              {isSelected ? (
                                <Select
                                  value={
                                    studentAwards[
                                      student.id_usuario
                                    ]?.lugar?.toString() || "participation"
                                  }
                                  onValueChange={(value) =>
                                    handleSetStudentAward(
                                      student.id_usuario,
                                      activitySelected.premio?.find(
                                        (a) => a?.lugar?.toString() === value
                                      )?.id || 0,
                                      value,
                                      activitySelected.premio?.find(
                                        (a) => a?.lugar?.toString() === value
                                      )?.puntos_otorgados || 0
                                    )
                                  }
                                >
                                  <SelectTrigger className="w-[180px] bg-white">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white">
                                    <SelectItem value="participation">
                                      Participación (
                                      {activitySelected.puntos_participacion}{" "}
                                      pts)
                                    </SelectItem>
                                    {activitySelected.premio?.map((award) => (
                                      <SelectItem
                                        key={award?.lugar}
                                        value={award?.lugar?.toString() ?? ""}
                                      >
                                        {award?.lugar}° Lugar (
                                        {award?.puntos_otorgados} pts)
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              ) : (
                                <span className="text-muted-foreground text-sm">
                                  -
                                </span>
                              )}
                            </TableCell>
                          )}
                          <TableCell className="text-right">
                            {activitySelected?.departamento === "Deportes"
                              ? student.puntos?.deportes ?? 0
                              : activitySelected?.departamento === "Cultura"
                              ? student.puntos?.cultura ?? 0
                              : student.puntos?.total ?? 0}
                          </TableCell>
                          <TableCell className="text-right font-semibold">
                            <span className="text-success ml-2">
                              {(activitySelected?.puntos_participacion ?? 0) +
                                (activitySelected?.departamento === "Deportes"
                                  ? student.puntos?.deportes ?? 0
                                  : activitySelected?.departamento === "Cultura"
                                  ? student.puntos?.cultura ?? 0
                                  : student.puntos?.total ?? 0)}
                              {isSelected &&
                                (() => {
                                  const selectedAwardId =
                                    studentAwards[
                                      student.id_usuario
                                    ]?.id?.toString();
                                  const award = activitySelected?.premio?.find(
                                    (a) => a?.id?.toString() === selectedAwardId
                                  );

                                  return award
                                    ? ` (+${award?.puntos_otorgados} pts)`
                                    : "";
                                })()}
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

      {activitySelected && !selectedGroup && !selectedStudent && (
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

      <SummaryDetailsPoints
        open={confirmDialogOpen}
        onOpenChange={setConfirmDialogOpen}
        onConfirm={handleAssignPoints}
        selectedActivityData={activitySelected}
        selectedStudents={selectedStudents}
        students={studentsOfGroup}
        studentsAwards={studentAwards}
      />
    </div>
  );
};
export default CoordinatorAssign;
