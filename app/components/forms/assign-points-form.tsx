"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  assignPointsFormRefined,
  type AssignPointsForm,
} from "@/schemas/assign-points-schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SmartComboBox } from "@/components/ui/searchable-combobox";
import { usePointsAssignmentStore } from "@/store/use-points-assignment-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Activity, Alumno } from "@/app/models";
import { Button } from "@/components/ui/button";
import { setgroups } from "process";
import { useActivityStore } from "@/store/use-activity-store";
import { useParams } from "next/navigation";

export default function AssignPointsForm() {
  const {
    selectedYear,
    selectedGroup,
    selectedStudent,
    groups,

    setYear,
    setGroup,
    setStudent,
    setGroups,

    loadGroupsByYear,
    loadStudentsByGroup,
    checkStudentActivity,
  } = usePointsAssignmentStore();

  const { activitySelected } = useActivityStore();

  const { id } = useParams(); // Obtenemos el ID del URL

  const handleSelectStudent = (student: Alumno | null) => {
    if (student) {
      setStudent(student);
      checkStudentActivity(student.id_usuario, Number(id));
    }
  };

  useEffect(() => {
    if (selectedGroup && activitySelected) {
      // Clear student selection if group is selected
      console.log("Group and activity selected, clearing student");
      loadStudentsByGroup(
        selectedGroup.id_grupo.toString(),
        activitySelected.id_actividad,
        false
      );
    }
  }, [selectedGroup, activitySelected]);

  const fetchLastActivities = async () => {
    const res = await fetch("/api/actividades/last10");
    return await res.json();
  };

  const fetchLastStudents = async () => {
    console.log("Activity selected in fetchLastStudents:", activitySelected);
    let id = activitySelected?.departamento === "Deportes" ? 1 : 2;
    const res = await fetch(`/api/alumnos/ten/${id}`);
    return await res.json();
  };

  const searchActivities = async (q: string) => {
    const res = await fetch(
      `/api/actividades/search?q=${encodeURIComponent(q)}`
    );
    return await res.json();
  };

  const searchStudents = async (q: string) => {
    const res = await fetch(`/api/alumnos/search?q=${encodeURIComponent(q)}`);
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

  async function onSubmit(values: any) {}

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
    </>
  );
}
