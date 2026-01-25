"use client";
import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAlumnoStore } from "@/lib/store/use-alumno-store";
import { useActivityStore } from "@/lib/store/use-activity-store";
import { Activity } from "@/lib/models/activity";
import {
  ActivitiesTable,
  DeleteActivityDialog,
  EditActivityDialog,
  StatsView,
  StudentInfoCard,
} from "@/app/coordinador/components/student-detail";
import { getSession } from "@/lib/session";
import CoordinatorContext from "@/app/coordinador/context/coordinator-context";
import { useActivitiesPage } from "@/features/activities/hooks/useActivitiesPage";
import { Spinner } from "@/components/ui/spinner";
import {
  deleteActivityStudentAction,
  getActivitiesPrizesAction,
  updatePrizeAction,
} from "@/lib/actions/activity-actions";

const CoordinatorStudentDetail = ({
  seeDataInfo = true,
}: {
  seeDataInfo: boolean;
}) => {
  const { id } = useParams();

  // --- Stores ---
  const {
    loadAlumnoCompleto,
    selectedAlumnoCompleto,
    changeActivityInAlumnoCompleto,
    deleteActivityInAlumnoCompleto,
    changePrizeInActivity,
  } = useAlumnoStore();

  const { role } = useContext(CoordinatorContext);

  const { ciclos } = useActivitiesPage();

  // --- Local State ---
  const [deleteReason, setDeleteReason] = useState<string>("");
  const [filterCycle, setFilterCycle] = useState("all");
  const [filterDepartment, setFilterDepartment] = useState("all");
  const [lugarPremio, setLugarPremio] = useState<string>("participation");
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [activitiesPrizes, setActivitiesPrizes] = useState<any[]>([]);
  // Dialog States
  const [editActivityId, setEditActivityId] = useState<number>(0);
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  const [removeDialogOpen, setRemoveDialogOpen] = useState<boolean>(false);

  // --- Effects ---
  useEffect(() => {
    if (seeDataInfo) {
      const init = async () => {
        await loadAlumnoCompleto(Number(id));
      };
      init();
    }
  }, [id, loadAlumnoCompleto]);

  useEffect(() => {
    const loadPrizesActivities = async () => {
      setActivitiesPrizes(await getActivitiesPrizesAction(editActivityId));
    };
    if (editActivityId) loadPrizesActivities();
  }, [editActivityId]);

  // useEffect(() => {
  //   if (newActivity) changeActivityInAlumnoCompleto(newActivity);
  // }, [newActivity]);

  // --- Logic & Handlers ---
  const filteredActivities = selectedAlumnoCompleto?.actividades.filter(
    (activity) => {
      const matchesCycle =
        filterCycle === "all" || activity.ciclo === filterCycle;
      let matchesDepartment = true;
      if (role === "COORDINADOR_DEPORTES") {
        matchesDepartment = activity.departamento === "Deportes";
      } else if (role === "COORDINADOR_CULTURA") {
        matchesDepartment = activity.departamento === "Cultura";
      } else {
        matchesDepartment =
          filterDepartment === "all" ||
          activity.departamento === filterDepartment;
      }
      return matchesCycle && matchesDepartment;
    },
  );

  // Calculations
  const getPrizePoints = (act: any) => {
    if (!act.premio) return 0;
    if (Array.isArray(act.premio)) return act.premio[0]?.puntos_otorgados ?? 0;
    return act.premio?.puntos_otorgados ?? 0;
  };

  const totalPointsFiltered =
    filteredActivities?.reduce(
      (sum, act) => sum + (act.puntos_participacion ?? 0) + getPrizePoints(act),
      0,
    ) || 0;

  const orientationPointsFiltered =
    filteredActivities
      ?.filter((act) => act.departamento === "Orientación Educativa")
      .reduce(
        (sum, act) =>
          sum + (act.puntos_participacion ?? 0) + getPrizePoints(act),
        0,
      ) || 0;

  const serviceSocialPointsFiltered =
    filteredActivities
      ?.filter((act) => act.departamento === "Servicio Social")
      .reduce(
        (sum, act) =>
          sum + (act.puntos_participacion ?? 0) + getPrizePoints(act),
        0,
      ) || 0;

  const sportsPointsFiltered =
    filteredActivities
      ?.filter((act) => act.departamento === "Deportes")
      .reduce(
        (sum, act) =>
          sum + (act.puntos_participacion ?? 0) + getPrizePoints(act),
        0,
      ) || 0;

  const culturePointsFiltered =
    filteredActivities
      ?.filter((act) => act.departamento === "Cultura")
      .reduce(
        (sum, act) =>
          sum + (act.puntos_participacion ?? 0) + getPrizePoints(act),
        0,
      ) || 0;
  // Handlers
  const openEditDialog = (activity: Activity) => {
    setEditActivityId(activity.id_actividad as number);
    setLugarPremio(
      activity.premio != null
        ? (activity.premio[0]?.lugar?.toString() ?? "participation")
        : "participation",
    );
    setEditDialogOpen(true);
  };

  const handleSaveEdit = async () => {
    console.log(activitiesPrizes, lugarPremio);
    const idPrize = activitiesPrizes.find(
      (prize) =>
        prize?.lugar?.toString() === lugarPremio &&
        lugarPremio !== "participation",
    )?.id;
    console.log("ID PREMIO SELECCIONADO:", idPrize);
    const premio = await updatePrizeAction(
      idPrize || 0,
      selectedAlumnoCompleto!.alumno.id_usuario,
      editActivityId,
    );
    if (!premio) return;
    changePrizeInActivity(
      premio.premio.find((el) => el?.id === idPrize),
      editActivityId,
    );
    setEditDialogOpen(false);
  };

  const handleDeleteConfirm = async () => {
    setDeleteLoading(true);
    const result = await deleteActivityStudentAction(
      editActivityId,
      selectedAlumnoCompleto!.alumno.id_usuario,
      deleteReason,
    );
    if (result?.ok) {
      deleteActivityInAlumnoCompleto(editActivityId);
      setEditActivityId(0);
      setRemoveDialogOpen(false);
      setDeleteLoading(false);
    }
  };

  if (!selectedAlumnoCompleto)
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center space-y-4">
        <Spinner className="w-10 h-10 text-primary animate-spin" />
        <p className="text-muted-foreground animate-pulse">
          Cargando perfil...
        </p>
      </div>
    );

  return (
    <div className="space-y-6">
      {/* Header */}
      {seeDataInfo ? (
        <>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-1">Detalle del Alumno</h1>
              <p className="text-muted-foreground">
                Información completa y historial
              </p>
            </div>
          </div>

          <StudentInfoCard
            alumno={selectedAlumnoCompleto.alumno}
            puntos={{
              deportes:
                selectedAlumnoCompleto.puntos.deportes +
                getPrizePoints({ departamento: "Deportes" }),
              cultura:
                selectedAlumnoCompleto.puntos.cultura +
                getPrizePoints({ departamento: "Cultura" }),
              total:
                selectedAlumnoCompleto.puntos.total +
                getPrizePoints({ departamento: "Deportes" }) +
                getPrizePoints({ departamento: "Cultura" }),
            }}
            userRole={role || ""}
          />
        </>
      ) : (
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-1">
              Historial de Actividades
            </h1>
            <p className="text-muted-foreground">
              Información completa y historial
            </p>
          </div>
        </div>
      )}

      <Tabs defaultValue="activities" className="space-y-4">
        <TabsList>
          <TabsTrigger value="activities">Historial de Actividades</TabsTrigger>
          <TabsTrigger value="stats">Estadísticas</TabsTrigger>
        </TabsList>

        <TabsContent value="activities" className="space-y-4">
          {/* Filtros - Se pueden extraer a su propio componente si crecen más */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" /> Filtros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 w-full">
                  <Label>Ciclo Escolar</Label>
                  <Select value={filterCycle} onValueChange={setFilterCycle}>
                    <SelectTrigger className="w-full ">
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      {ciclos?.map((c) => (
                        <SelectItem key={c.id_ciclo} value={c.nombre}>
                          {c.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {role !== "COORDINADOR_CULTURA" &&
                  role !== "COORDINADOR_DEPORTES" && (
                    <div className="space-y-2 w-full">
                      <Label>Departamento</Label>
                      <Select
                        value={filterDepartment}
                        onValueChange={setFilterDepartment}
                      >
                        <SelectTrigger className="w-full ">
                          <SelectValue placeholder="Todos" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos</SelectItem>
                          <SelectItem value="Deportes">Deportes</SelectItem>
                          <SelectItem value="Cultura">Cultura</SelectItem>
                          <SelectItem value="Orientación Educativa">
                            Orientación Educativa
                          </SelectItem>
                          <SelectItem value="Servicio Social">
                            Servicio Social
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
              </div>
            </CardContent>
          </Card>

          {/* Resumen rápido */}
          {seeDataInfo && (
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Total de Actividades</CardDescription>
                  <CardTitle className="text-3xl">
                    {filteredActivities?.length}
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Puntos Totales (Filtrados)</CardDescription>
                  <CardTitle className="text-3xl text-primary">
                    {totalPointsFiltered}
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Actividades Realizadas</CardTitle>
              <CardDescription>
                {filteredActivities?.length} actividad(es)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ActivitiesTable
                activities={(filteredActivities || []).map((a) => ({
                  ...a,
                  fecha:
                    a.fecha instanceof Date ? a.fecha.toISOString() : a.fecha,
                  premio: a.premio ? [a.premio] : [],
                }))}
                onEdit={openEditDialog}
                onDelete={(id) => {
                  setEditActivityId(id);
                  setRemoveDialogOpen(true);
                }}
                seeOnly={seeDataInfo}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <StatsView
            totalPoints={totalPointsFiltered}
            sportsPoints={sportsPointsFiltered}
            culturePoints={culturePointsFiltered}
            orientationPoints={orientationPointsFiltered}
            serviceSocialPoints={serviceSocialPointsFiltered}
            totalActivities={filteredActivities?.length || 0}
            totalWithPrize={
              filteredActivities?.filter((a) => a.premio).length || 0
            }
          />
        </TabsContent>
      </Tabs>

      <EditActivityDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        lugarPremio={lugarPremio}
        setLugarPremio={setLugarPremio}
        prizes={activitiesPrizes}
        onSave={handleSaveEdit}
      />

      <DeleteActivityDialog
        open={removeDialogOpen}
        onOpenChange={setRemoveDialogOpen}
        deleteLoading={deleteLoading}
        reason={deleteReason}
        setReason={setDeleteReason}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default CoordinatorStudentDetail;
