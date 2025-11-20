"use client";
import { useEffect, useState } from "react";
import { Download, Filter, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { usePointsAssignmentStore } from "@/store/use-points-assignment-store";
import { useForm } from "react-hook-form";
import {
  AssignPointsForm,
  assignPointsFormRefined,
} from "@/schemas/assign-points-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alumno } from "@/app/models/alumno";
import { SmartComboBox } from "@/components/ui/searchable-combobox";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CoordinatorReports = () => {
  const {
    selectedYear,
    selectedGroup,
    selectedStudent,
    selectedActivity,
    groups,
    studentsOfGroup,
    activitiesOfStudent,
    setYear,
    setGroup,
    setStudent,
    setActivity,
    setGroups,
    setActivitiesOfStudent,

    loadActivitiesOfStudent,
    loadGroupsByYear,
    loadStudentsByGroups,
  } = usePointsAssignmentStore();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("all");
  const [filterDepartment, setFilterDepartment] = useState("all");
  const fetchLastStudents = async () => {
    const res = await fetch("/api/alumnos/ten");
    return await res.json();
  };
  const form = useForm<AssignPointsForm>({
    resolver: zodResolver(assignPointsFormRefined),
    defaultValues: {
      activityId: "",
      studentId: null,
      year: null,
      groupId: null,
    } as any,
  });

  useEffect(() => {
    if (selectedGroup) {
      loadStudentsByGroups(selectedGroup.id_grupo.toString());
    }
  }, [selectedGroup]);

  // Mock data
  const students = [
    {
      id: 1,
      name: "Ana Martínez López",
      accountNumber: "318123456",
      group: "3A",
      sports: 72,
      culture: 58,
      total: 130,
      status: "on-track",
    },
    {
      id: 2,
      name: "Carlos López García",
      accountNumber: "318123457",
      group: "3A",
      sports: 65,
      culture: 48,
      total: 113,
      status: "on-track",
    },
    {
      id: 3,
      name: "Diana Torres Ruiz",
      accountNumber: "318123458",
      group: "3B",
      sports: 58,
      culture: 62,
      total: 120,
      status: "on-track",
    },
    {
      id: 4,
      name: "Eduardo Ruiz Silva",
      accountNumber: "318123459",
      group: "3B",
      sports: 45,
      culture: 35,
      total: 80,
      status: "behind",
    },
    {
      id: 5,
      name: "Fernanda Silva Cruz",
      accountNumber: "318123460",
      group: "3C",
      sports: 88,
      culture: 75,
      total: 163,
      status: "ahead",
    },
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.accountNumber.includes(searchTerm);
    const matchesGroup = filterGroup === "all" || student.group === filterGroup;
    return matchesSearch && matchesGroup;
  });
  async function onSubmit(values: any) {}
  const handleDownloadExcel = () => {
    toast({
      title: "Descargando reporte",
      description: "El archivo Excel se está generando...",
    });
  };
  const searchStudents = async (q: string) => {
    const res = await fetch(`/api/alumnos/search?q=${encodeURIComponent(q)}`);
    return await res.json();
  };
  const handleDownloadPDF = () => {
    toast({
      title: "Descargando reporte",
      description: "El archivo PDF se está generando...",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ahead":
        return (
          <Badge className="bg-success/20 text-success hover:bg-success/30">
            Adelantado
          </Badge>
        );
      case "on-track":
        return (
          <Badge className="bg-info/20 text-info hover:bg-info/30">
            En tiempo
          </Badge>
        );
      case "behind":
        return (
          <Badge className="bg-warning/20 text-warning hover:bg-warning/30">
            Atrasado
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Consultas y Reportes</h1>
          <p className="text-muted-foreground">
            Visualiza y descarga reportes de progreso de alumnos
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleDownloadExcel}>
            <Download className="w-4 h-4 mr-2" />
            Excel
          </Button>
          <Button variant="outline" onClick={handleDownloadPDF}>
            <Download className="w-4 h-4 mr-2" />
            PDF
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtros de Búsqueda
          </CardTitle>
          <CardDescription>
            Filtra los resultados por diferentes criterios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Activities select (simple select) */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Año */}
              <div>
                <label
                  htmlFor="year"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Año
                </label>
                <Select
                  value={selectedYear}
                  onValueChange={(year) => {
                    setYear(year);
                    loadGroupsByYear(year);
                  }}
                  disabled={!!selectedStudent}
                >
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Seleccionar año" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className="cursor-pointer" value="1">
                      1er año
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="2">
                      2do año
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="3">
                      3er año
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="id_grupo"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Grupo
                </label>
                <Select
                  value={selectedGroup?.id_grupo.toString() || ""}
                  onValueChange={(group) => {
                    setGroup(
                      groups.find((g) => g.id_grupo.toString() === group)!
                    );
                  }}
                  disabled={!selectedYear}
                >
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Seleccionar grupo" />
                  </SelectTrigger>
                  <SelectContent className="cursor-pointer">
                    {groups.map((g) => (
                      <SelectItem
                        key={g.id_grupo}
                        value={g.id_grupo.toString()}
                      >
                        {g.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="id_actividad"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  O buscar alumno individual
                </label>
                <SmartComboBox<Alumno>
                  placeholder="Buscar alumno"
                  searchPlaceholder="Buscar alumno..."
                  fetchInitial={fetchLastStudents}
                  searchFn={searchStudents}
                  labelField="nombre"
                  valueField="id_usuario"
                  value={selectedStudent}
                  onSelect={setStudent}
                  disabled={!!selectedGroup || !!selectedYear}
                />
                {form.formState.errors.id_actividad && (
                  <p className="mt-2 text-sm text-red-600">
                    {String(form.formState.errors.id_actividad?.message)}
                  </p>
                )}
              </div>
            </div>
          </form>
          {(selectedStudent || (selectedYear && selectedGroup)) && (
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg mt-5">
              <div className="text-sm">
                {selectedStudent ? (
                  <>
                    <span className="font-medium">Alumno seleccionado:</span>{" "}
                    {selectedStudent.nombre}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-2 h-6 cursor-pointer"
                      onClick={() => {
                        setStudent(null);
                      }}
                    >
                      Limpiar
                    </Button>
                  </>
                ) : (
                  <>
                    <span className="font-medium">Grupo seleccionado:</span>{" "}
                    {selectedGroup?.nombre}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-2 h-6 cursor-pointer"
                      onClick={() => {
                        setYear("");
                        setGroup(null);
                        setStudent(null);
                        setGroups([]);
                      }}
                    >
                      Limpiar
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Table */}
      {/* <Card>
        <CardHeader>
          <CardTitle>Resultados de la Búsqueda</CardTitle>
          <CardDescription>
            {filteredStudents.length} alumno(s) encontrado(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Alumno</TableHead>
                  <TableHead>No. Cuenta</TableHead>
                  <TableHead>Grupo</TableHead>
                  <TableHead className="text-center">Puntos totales</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">
                      {student.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {student.accountNumber}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{student.group}</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-lg font-bold text-primary">
                        {student.total}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        className="bg-primary cursor-pointer text-primary-foreground hover:bg-primary/90"
                      >
                        Ver información
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card> */}
      {(selectedGroup || selectedStudent) && (
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
                    Información general de los alumnos
                  </CardDescription>
                </div>
              </div>

              {/* Search Bar - solo mostrar si no es alumno individual */}
              {!selectedStudent && (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por nombre o número de cuenta..."
                    // value={studentSearch}
                    // onChange={(e) => setStudentSearch(e.target.value)}
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
                    <TableHead>Nombre</TableHead>
                    <TableHead>No. Cuenta</TableHead>
                    <TableHead>Grupo</TableHead>
                    <TableHead className="text-center">
                      Puntos Actuales
                    </TableHead>
                    <TableHead className="text-center">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedStudent ? (
                    <TableRow key={selectedStudent.id_usuario}>
                      <TableCell className="font-medium">
                        {selectedStudent.nombre}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {selectedStudent.num_cuenta}
                      </TableCell>
                      <TableCell>{selectedStudent.grupo ?? "N/A"}</TableCell>
                      <TableCell className="text-center">
                        {selectedStudent.puntos ?? 0}
                      </TableCell>
                      <TableCell className="font-semibold text-center">
                        <Button className="bg-primary text-center cursor-pointer">
                          Historial
                        </Button>
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
                      return (
                        <TableRow key={student.id_usuario}>
                          <TableCell className="font-medium">
                            {student.nombre}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {student.num_cuenta}
                          </TableCell>
                          <TableCell>{student.grupo ?? "N/A"}</TableCell>
                          <TableCell className="text-center">
                            {student.puntos ?? 0}
                          </TableCell>
                          <TableCell className="font-semibold text-center">
                            {/* <Button className="bg-primary text-center cursor-pointer">
                              Historial
                            </Button> */}
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="cursor-pointer"
                                  onClick={() =>
                                    loadActivitiesOfStudent(student.id_usuario)
                                  }
                                >
                                  Historial
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle className="text-center">
                                    Actividades realizadas
                                  </DialogTitle>
                                </DialogHeader>
                                {
                                  <div className="space-y-4 max-h-[400px] overflow-y-auto">
                                    {activitiesOfStudent &&
                                    activitiesOfStudent.length > 0 ? (
                                      activitiesOfStudent.map((activity) => (
                                        <div
                                          key={activity.id_actividad}
                                          className="p-4 border rounded-lg bg-muted/5 shadow-sm space-y-2 cursor-pointer hover:bg-muted/10 transition-colors"
                                        >
                                          <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1 min-w-0">
                                              <h3 className="font-semibold text-lg truncate">
                                                {activity.nombre}
                                              </h3>
                                              <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
                                                {activity.descripcion}
                                              </p>
                                            </div>

                                            <div className="flex flex-col items-end gap-2">
                                              <div className="text-xs text-muted-foreground">
                                                Fecha
                                              </div>
                                              <div className="font-medium">
                                                {new Date(
                                                  activity.fecha || ""
                                                ).toLocaleDateString()}
                                              </div>
                                              <Badge className="bg-primary/10 text-primary">
                                                {activity.puntos} pts
                                              </Badge>
                                            </div>
                                          </div>
                                        </div>
                                        
                                      ))
                                    ) : (
                                      <p className="text-center text-muted-foreground">
                                        No se encontraron actividades para este
                                        alumno.
                                      </p>
                                    )}
                                  </div>
                                }
                              </DialogContent>
                            </Dialog>
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
    </div>
  );
};

export default CoordinatorReports;
