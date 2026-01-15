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
import { Spinner } from "@/components/ui/spinner";
import { useActivityStore } from "@/store/use-activity-store";
import Link from "next/link";
import { useAlumnoStore } from "@/store/use-alumno-store";
import { LoadingStudentState } from "../components/empty-state";
import { getStudents } from "@/app/actions/students-actions";
import { useGetRole } from "@/hooks/use-get-session";
import { getSession } from "@/lib/session";

const CoordinatorReports = () => {
  const {
    selectedYear,
    selectedGroup,
    groups,
    students,
    selectedStudentId,
    loadingStudents,
    setStudents,
    setYear,
    setGroup,
    setLoadingStudents,
    loadGroupsByYear,
    loadSingleStudent,
    reset,
  } = usePointsAssignmentStore();

  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    async function loadUserRole() {
      const session = await getSession();
      const role = session?.role || null;
      console.log(role);
      setUserRole(role);
    }
    loadUserRole();
    reset();
    console.log(loadingStudents);
  }, []);

  const { toast } = useToast();
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
    const loadStudentsByGroup = async () => {
      if (selectedGroup) {
        setLoadingStudents(true);
        setStudents(await getStudents({ groupId: selectedGroup.id_grupo }));
        setLoadingStudents(false);
      }
    };
    loadStudentsByGroup();
  }, [selectedGroup]);

  async function onSubmit(values: any) {}

  const [studentSearch, setStudentSearch] = useState("");

  const selectedStudent = students.find(
    (s) => s.id_usuario === selectedStudentId
  );

  const handleSelectStudent = async (student: Alumno | null) => {
    if (student) {
      loadSingleStudent(student);
    }
  };

  // 2. Variable que contiene SIEMPRE la lista filtrada
  const filteredStudents = students.filter((student) => {
    // Convertimos a minúsculas para que la búsqueda no sea sensible a mayúsculas
    const searchLower = studentSearch.toLowerCase();
    const nombreLower = student.nombre.toLowerCase();
    const cuentaStr = student.num_cuenta; // Ya es string según tu tipo

    // Retornamos true si el nombre O el número de cuenta coinciden
    return nombreLower.includes(searchLower) || cuentaStr.includes(searchLower);
  });

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
                  onSelect={handleSelectStudent}
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
          {loadingStudents && (selectedGroup || selectedStudent) && (
            <div className="mt-5">
              <LoadingStudentState />
            </div>
          )}
          {(selectedStudent ||
            (selectedYear && selectedGroup && !loadingStudents)) && (
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
                        reset();
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
                        reset();
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
      {(selectedGroup || selectedStudent) && !loadingStudents && (
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
                    // Conectamos el valor al estado
                    value={studentSearch}
                    // Actualizamos el estado al escribir
                    onChange={(e) => setStudentSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border">
              {loadingStudents ? (
                <div className="p-8 flex justify-center">
                  <Spinner />
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>No. Cuenta</TableHead>
                      {selectedGroup != null ? null : (
                        <TableHead>Grupo</TableHead>
                      )}

                      {userRole == "COORDINADOR_CULTURA" ? (
                        <TableHead>Puntos Cultura</TableHead>
                      ) : userRole == "COORDINADOR_DEPORTES" ? (
                        <TableHead>Puntos Deportes</TableHead>
                      ) : (
                        <>
                          <TableHead>Puntos Deportes</TableHead>
                          <TableHead>Puntos Cultura</TableHead>
                        </>
                      )}
                      <TableHead className="text-center">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedStudent ? (
                      // CASO 1: Hay un estudiante seleccionado manualmente
                      <TableRow key={selectedStudent.id_usuario}>
                        <TableCell className="font-medium">
                          {selectedStudent.nombre}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {selectedStudent.num_cuenta}
                        </TableCell>
                        <TableCell>{selectedStudent?.grupo ?? "N/A"}</TableCell>
                        {userRole == "COORDINADOR_CULTURA" ? (
                          <TableCell className="text-center">
                            {selectedStudent.puntos?.cultura}
                          </TableCell>
                        ) : userRole == "COORDINADOR_DEPORTES" ? (
                          <TableCell className="text-center">
                            {selectedStudent.puntos?.deportes}
                          </TableCell>
                        ) : (
                          <>
                            <TableCell>
                              {selectedStudent.puntos?.deportes}
                            </TableCell>
                            <TableCell>
                              {selectedStudent.puntos?.cultura}
                            </TableCell>
                          </>
                        )}
                        <TableCell className="font-semibold text-center">
                          <Button
                            className="bg-primary text-center cursor-pointer"
                            asChild
                          >
                            <Link
                              href={`/coordinador/consultar-reportes/detalle/${selectedStudent.id_usuario}`}
                            >
                              Historial
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ) : students.length === 0 ? (
                      // CASO 2: El grupo no tiene alumnos cargados (Base de datos vacía)
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="text-center py-8 text-muted-foreground"
                        >
                          No se encontraron alumnos en este grupo.
                        </TableCell>
                      </TableRow>
                    ) : filteredStudents.length === 0 ? (
                      // CASO 3: Hay alumnos, pero la BÚSQUEDA no dio resultados
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="h-24 text-center text-muted-foreground"
                        >
                          No se encontraron alumnos con ese nombre o cuenta.
                        </TableCell>
                      </TableRow>
                    ) : (
                      // CASO 4: Renderizado normal de la lista filtrada
                      filteredStudents.map((student) => (
                        <TableRow key={student.id_usuario}>
                          <TableCell className="font-medium">
                            {student.nombre}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {student.num_cuenta}
                          </TableCell>
                          {userRole == "COORDINADOR_CULTURA" ? (
                            <TableCell className="text-center">
                              {student.puntos?.cultura}
                            </TableCell>
                          ) : userRole == "COORDINADOR_DEPORTES" ? (
                            <TableCell className="text-center">
                              {student.puntos?.deportes}
                            </TableCell>
                          ) : (
                            <>
                              <TableCell>{student.puntos?.deportes}</TableCell>
                              <TableCell>{student.puntos?.cultura}</TableCell>
                            </>
                          )}
                          <TableCell className="font-semibold text-center">
                            <Button
                              className="bg-primary text-center cursor-pointer"
                              asChild
                            >
                              <Link
                                href={`/coordinador/consultar-reportes/detalle/${student.id_usuario}`}
                              >
                                Historial
                              </Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CoordinatorReports;
