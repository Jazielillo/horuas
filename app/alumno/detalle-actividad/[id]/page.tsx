"use client";
import React, { act, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Award,
  Trophy,
  Users,
  ExternalLink,
  Clock,
  Share2,
  MapPin,
  ClockCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import { useActivityStore } from "@/lib/store/use-activity-store";

export default function ActivityDetailPage() {
  const { id } = useParams();
  const { activities, selectedActivityId, fetchActivityById } =
    useActivityStore();

  useEffect(() => {
    fetchActivityById(Number(id));
  }, [id, fetchActivityById]);

  const activitySelected = activities.find(
    (a) => a.id_actividad === Number(id),
  );

  const isLoading = !activitySelected;
  const isSports = activitySelected?.departamento.toLowerCase() === "deportes";
  const isClub = activitySelected?.actividad_grupal;

  const formattedDate = activitySelected
    ? new Date(activitySelected.fecha).toLocaleDateString("es-MX", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const formattedTime = activitySelected
    ? new Date(activitySelected.fecha).toLocaleTimeString("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  // -------------------------------------------------------
  // LOADING SKELETON
  // -------------------------------------------------------
  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20 pb-20">
        <div className="container max-w-7xl mx-auto py-6 px-4">
          <div className="h-4 w-40 bg-muted rounded-full animate-pulse" />
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative w-full h-[280px] md:h-[420px] bg-linear-to-br from-muted via-muted/80 to-muted rounded-3xl animate-pulse" />
        </div>

        <div className="container max-w-7xl mx-auto mt-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="h-64 bg-muted rounded-2xl animate-pulse" />
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="h-6 w-64 bg-muted rounded-full animate-pulse" />
            <div className="h-4 bg-muted rounded-full w-full animate-pulse" />
            <div className="h-4 bg-muted rounded-full w-4/5 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------
  // PAGINA YA CARGADA
  // -------------------------------------------------------
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/10 pb-20">
      {/* Header con navegación mejorada */}
      <div className="container max-w-7xl mx-auto py-6 px-4">
        <Link
          href="/alumno"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-300 hover:gap-3 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Volver a actividades
        </Link>
      </div>

      {/* HERO mejorado con efectos visuales */}
      <div className="container max-w-7xl mx-auto px-4 mb-12">
        <div className="relative w-full h-[280px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
          {activitySelected?.foto_url ? (
            <>
              <img
                src={activitySelected.foto_url}
                alt={activitySelected.nombre}
                className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
              />
              {/* Overlay con gradiente más sofisticado */}
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-background/80 via-transparent to-transparent" />
            </>
          ) : (
            <div
              className={`w-full h-full ${
                isSports
                  ? "bg-linear-to-br from-blue-600 via-blue-500 to-cyan-500"
                  : "bg-linear-to-br from-orange-500 via-pink-500 to-purple-500"
              } flex items-center justify-center relative overflow-hidden`}
            >
              {/* Patrón de fondo */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
              </div>
            </div>
          )}

          {/* Contenido del hero */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                className={`px-4 py-1.5 shadow-lg backdrop-blur-sm border-0 text-sm font-semibold transition-all hover:scale-105 ${
                  isSports
                    ? "bg-blue-600/90 hover:bg-blue-600 text-white"
                    : "bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                {activitySelected?.departamento}
              </Badge>

              {isClub && (
                <Badge className="gap-1.5 bg-white/95 text-black backdrop-blur-sm px-4 py-1.5 shadow-lg text-sm font-semibold hover:bg-white transition-all hover:scale-105 border-0">
                  <Users className="w-3.5 h-3.5" />
                  Actividad grupal
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight dark:text-white text-black drop-shadow-2xl mb-2 leading-tight">
              {activitySelected?.nombre}
            </h1>

            <p className="dark:text-white/80 text-black/80 text-sm md:text-base font-medium drop-shadow-lg max-w-2xl">
              {formatFechaLarga(activitySelected?.fecha)}
            </p>
          </div>
        </div>
      </div>

      {/* CONTENIDO con diseño mejorado */}
      <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* SIDEBAR con diseño premium */}
        <div className="space-y-6 lg:order-1">
          <Card className="sticky top-6 shadow-xl border-border/50 bg-linear-to-br from-card to-card/50 backdrop-blur-xl rounded-2xl overflow-hidden">
            <CardContent className="p-6 space-y-6">
              {/* Puntos con diseño llamativo */}
              <div className="relative p-6 bg-linear-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

                <div className="relative z-10 text-center">
                  <span className="text-muted-foreground text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Puntos por participación
                  </span>

                  <div className="flex items-center justify-center gap-2 mt-3">
                    <Award className="w-7 h-7 text-primary animate-pulse" />
                    <span className="text-5xl md:text-6xl font-black bg-linear-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                      +{activitySelected?.puntos_participacion}
                    </span>
                    <span className="text-xl font-bold text-primary/80">
                      pts
                    </span>
                  </div>
                </div>
              </div>

              <Separator className="bg-border/50" />

              {/* Información con iconos mejorados */}
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="mt-0.5 p-2 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-foreground mb-1">
                      Fecha
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {formatFechaLarga(activitySelected?.fecha)}
                    </p>
                  </div>
                </div>

                {activitySelected?.hora_actividad && (
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="mt-0.5 p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground mb-1">
                        Hora
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {new Date(
                          `2000-01-01 ${activitySelected?.hora_actividad}`,
                        ).toLocaleTimeString("es-MX", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </p>
                    </div>
                  </div>
                )}

                {activitySelected?.ubicacion && (
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="mt-0.5 p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground mb-1">
                        Ubicación
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {activitySelected?.ubicacion}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Botón de inscripción mejorado */}
              {activitySelected?.enlace_participacion && (
                <>
                  <Separator className="bg-border/50" />
                  <Button
                    className="w-full text-base font-semibold h-12 gap-2 shadow-lg rounded-xl bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all hover:shadow-xl hover:scale-[1.02]"
                    size="lg"
                    asChild
                  >
                    <a
                      href={activitySelected.enlace_participacion}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Inscribirme ahora
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="lg:col-span-2 space-y-8 lg:order-2">
          {/* Descripción con mejor tipografía */}
          <Card className="shadow-lg border-border/50 rounded-2xl overflow-hidden bg-linear-to-br from-card to-card/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full" />
                Sobre esta actividad
              </h3>

              <div className="prose prose-stone dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                  {activitySelected?.descripcion_promocion_alumnos}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* PREMIOS con diseño mejorado */}
          {activitySelected?.premio?.length > 0 && (
            <Card className="shadow-lg border-border/50 rounded-2xl overflow-hidden bg-linear-to-br from-card to-card/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Premiación</h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {activitySelected.premio.map((award, index) => {
                    const colors = [
                      "from-yellow-500 to-yellow-600",
                      "from-gray-400 to-gray-500",
                      "from-orange-600 to-orange-700",
                    ];

                    return (
                      <Card
                        key={award?.lugar}
                        className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] bg-linear-to-br from-card to-muted/30"
                      >
                        <div
                          className={`h-1.5 bg-linear-to-r ${
                            colors[index] || "from-primary to-primary/80"
                          }`}
                        />
                        <CardContent className="p-5">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Trophy
                                className={`w-5 h-5 ${
                                  index === 0
                                    ? "text-yellow-600"
                                    : index === 1
                                      ? "text-gray-500"
                                      : "text-orange-600"
                                }`}
                              />
                              <p className="font-bold text-lg">
                                {award?.lugar}º Lugar
                              </p>
                            </div>
                          </div>

                          <Badge
                            className={`text-base px-3 py-1 font-bold border-0 ${
                              index === 0
                                ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-500"
                                : index === 1
                                  ? "bg-gray-500/20 text-gray-700 dark:text-gray-400"
                                  : "bg-orange-500/20 text-orange-700 dark:text-orange-500"
                            }`}
                          >
                            +{award?.puntos_otorgados} pts
                          </Badge>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export function formatFechaLarga(fechaStr: string): string {
  const date = new Date(fechaStr + "T00:00:00"); // evita desfases por timezone
  const opciones: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // "12 de diciembre de 2025"
  let formateada = date.toLocaleDateString("es-MX", opciones);

  // Reemplazar "de 2025" por "del 2025"
  formateada = formateada.replace(" de ", " de ").replace(" del ", " del ");

  return formateada;
}
