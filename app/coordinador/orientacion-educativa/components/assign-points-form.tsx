import { getStudents } from "@/app/actions/students-actions";
import { Alumno } from "@/app/models";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SmartComboBox } from "@/components/ui/searchable-combobox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  type AssignPointsForm,
  assignPointsFormRefined,
} from "@/schemas/assign-points-schema";
import { usePointsAssignmentStore } from "@/store/use-points-assignment-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function AssignPointsForm({
  onValueChange,
}: {
  onValueChange?: (value: boolean) => void;
}) {
  const {
    selectedYear,
    selectedGroup,
    groups,
    students,
    selectedStudentId,
    loadSingleStudent,
    setYear,
    setLoadingStudents,
    setGroup,
    setStudents,
    loadGroupsByYear,
    reset,
  } = usePointsAssignmentStore();

  useEffect(() => {
    const load = async () => {
      setLoadingStudents(true);
      if (selectedGroup) {
        let students = await getStudents({
          groupId: selectedGroup?.id_grupo ?? 0,
        });
        setStudents(students);
      }
      setLoadingStudents(false);
    };
    load();
  }, [selectedGroup]);

  const fetchLastStudents = async () => {
    const res = await fetch(`/api/alumnos/ten/orientacion`);
    return await res.json();
  };

  const searchStudents = async (q: string) => {
    const res = await fetch(`/api/alumnos/search?q=${encodeURIComponent(q)}`);
    return await res.json();
  };

  const selectedStudent = students.find(
    (s) => s.id_usuario === selectedStudentId
  );
  const form = useForm<AssignPointsForm>({
    resolver: zodResolver(assignPointsFormRefined),
    defaultValues: {
      activityId: "0",
      studentId: null,
      year: null,
      groupId: null,
    } as any,
  });

  const handleSelectStudent = async (student: Alumno | null) => {
    if (student) {
      loadSingleStudent(student);
    }
  };

  const onSubmit = (data: AssignPointsForm) => {};

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Seleccion y grupos de actividades</CardTitle>
          <CardDescription>
            Elige el grupo o alumno y la actividad para asignar puntos.
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
                  disabled={!!selectedStudentId}
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
                        reset();
                        onValueChange?.(false);
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
    </>
  );
}
