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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import { useActivityStore } from "@/store/use-activity-store";

export default function ActivityDetailPage() {
  const { id } = useParams();
  const {
    loadActivityById,
    setActivitySelected,
    getActivityById,
    activitySelected,
  } = useActivityStore();

  useEffect(() => {
    if (!id) return;

    const cached = getActivityById(Number(id));

    if (cached) {
      setActivitySelected(cached);
    } else {
      loadActivityById(Number(id));
    }
  }, [id, getActivityById, loadActivityById, setActivitySelected]);

  const isLoading = !activitySelected;
  const isSports = activitySelected?.departamento === "Deportes";
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
      <div className="min-h-screen bg-background pb-20 animate-pulse">
        <div className="container py-4">
          <div className="h-4 w-40 bg-muted rounded" />
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] bg-muted rounded" />

        <div className="container mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* IZQUIERDA – SIDEBAR */}
          <div className="space-y-4">
            <div className="h-48 bg-muted rounded-xl" />
            <div className="h-10 bg-muted rounded" />
            <div className="h-10 bg-muted rounded" />
          </div>

          {/* DERECHA – DESCRIPCIÓN */}
          <div className="lg:col-span-2 space-y-4">
            <div className="h-6 w-64 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-4/5" />
            <div className="h-4 bg-muted rounded w-3/5" />
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------
  // PAGINA YA CARGADA
  // -------------------------------------------------------
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="container py-5">
        <Link
          href="/alumno"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a actividades
        </Link>
      </div>

      {/* HERO */}
      <div className="relative w-full h-40 md:h-[450px] rounded-b-3xl overflow-hidden shadow-lg">
        {activitySelected?.foto_url ? (
          <img
            src={activitySelected.foto_url}
            alt={activitySelected.nombre}
            className="w-full h-full object-cover scale-[1.02]"
          />
        ) : (
          <div
            className={`w-full h-full bg-linear-to-br ${
              isSports
                ? "from-blue-600 to-cyan-500"
                : "from-orange-500 to-pink-500"
            } flex items-center justify-center`}
          >
            {/* <Award className="w-40 h-40 text-white/25" /> */}
          </div>
        )}

        {/* Overlay elegante */}
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent backdrop-blur-[2px]" />

        {/* TÍTULO */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 container">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge
              className={`px-3 py-1 shadow-md text-sm ${
                isSports
                  ? "bg-info hover:bg-info/90"
                  : "bg-chart-5 hover:bg-chart-5/90"
              }`}
            >
              {activitySelected?.departamento}
            </Badge>

            {isClub && (
              <Badge className="gap-1 bg-white/90 text-black backdrop-blur px-3 py-1 shadow-sm text-sm">
                <Users className="w-3 h-3" />
                Actividad grupal
              </Badge>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-sm">
            {activitySelected?.nombre}
          </h1>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="container mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* IZQUIERDA — SIDEBAR */}
        <div className="space-y-6 lg:order-1">
          <Card className="sticky top-10 shadow-lg border bg-card/40 backdrop-blur-md rounded-2xl">
            <CardContent className="p-6 space-y-7">
              {/* PUNTOS */}
              <div className="text-center p-5 bg-primary/5 rounded-xl border border-primary/10 shadow-inner">
                <span className="text-muted-foreground text-xs uppercase font-semibold tracking-wider">
                  Puntos por participación
                </span>

                <div className="flex items-center justify-center gap-2 mt-2">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-5xl font-extrabold text-primary">
                    +{activitySelected?.puntos_participacion}
                  </span>
                  <span className="text-xl font-bold text-primary/80">pts</span>
                </div>
              </div>

              {/* FECHA */}
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Fecha</p>
                    <p className="text-muted-foreground">{formatFechaLarga(activitySelected?.fecha)}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5 flex gap-5">
                <div className="flex items-start gap-3 w-full">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Ubicación</p>
                    <p className="text-muted-foreground">
                      {activitySelected?.ubicacion}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 w-full">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Hora</p>
                    <p className="text-muted-foreground">
                      {new Date(
                        `2000-01-01 ${activitySelected?.hora_actividad}`
                      ).toLocaleTimeString("es-MX", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* BOTÓN DE INSCRIPCIÓN */}
              {activitySelected?.enlace_participacion ? (
                <Button
                  className="w-full text-lg h-12 gap-2 shadow-md rounded-xl"
                  size="lg"
                  asChild
                >
                  <a
                    href={activitySelected.enlace_participacion}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inscribirme
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  className="w-full cursor-not-allowed opacity-70 rounded-xl"
                  disabled
                >
                  Registro presencial
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* DERECHA — DESCRIPCIÓN */}
        <div className="lg:col-span-2 space-y-10 lg:order-2">
          {/* Descripción */}
          <section>
            <h3 className="text-2xl font-bold mb-3">Sobre esta actividad</h3>

            <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
              <p className="whitespace-pre-line">
                {activitySelected?.descripcion_promocion_alumnos}
              </p>
            </div>
          </section>

          <Separator />

          {/* PREMIOS */}
          {activitySelected?.premio?.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl font-bold">Premiación</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {activitySelected.premio.map((award) => (
                  <Card
                    key={award?.lugar}
                    className="overflow-hidden border-l-8 border-yellow-500/80 shadow-md rounded-xl"
                  >
                    <CardContent className="p-5 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg">
                          {award?.lugar}º Lugar
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Posición final
                        </p>
                      </div>

                      <Badge
                        variant="secondary"
                        className="text-lg px-4 py-1 bg-yellow-500/15 text-yellow-700 shadow-sm"
                      >
                        +{award?.puntos_otorgados} pts
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
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