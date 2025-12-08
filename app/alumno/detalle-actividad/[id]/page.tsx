'use client';
import React, { useEffect } from "react";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import { useActivityStore } from "@/store/use-activity-store";

export default function ActivityDetailPage() {
  const { id } = useParams();
  const { loadActivityById, setActivitySelected, getActivityById, activitySelected } =
    useActivityStore();

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
      <div className="container py-4">
        <Link
          href="/alumno"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a actividades
        </Link>
      </div>

      {/* HERO */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-muted overflow-hidden">
        {activitySelected?.foto_url ? (
          <img
            src={activitySelected.foto_url}
            alt={activitySelected.nombre}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className={`w-full h-full bg-linear-to-br ${
              isSports ? "from-blue-600 to-cyan-400" : "from-orange-500 to-rose-500"
            } flex items-center justify-center`}
          >
            <Award className="w-32 h-32 text-white/20" />
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 container">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge
              className={
                isSports ? "bg-info hover:bg-info/90" : "bg-chart-5 hover:bg-chart-5/90"
              }
            >
              {activitySelected?.departamento}
            </Badge>

            {isClub && (
              <Badge variant="secondary" className="gap-1 bg-white/90 text-black backdrop-blur">
                <Users className="w-3 h-3" />
                Club / Grupal
              </Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground ">
            {activitySelected?.nombre}
          </h1>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="container mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* IZQUIERDA — SIDEBAR */}
        <div className="space-y-6 lg:order-1">
          <Card className="sticky top-6 shadow-lg border-muted">
            <CardContent className="p-6 space-y-6">
              <div className="text-center p-4 bg-muted/50 rounded-xl border border-dashed">
                <span className="text-muted-foreground text-sm uppercase font-bold tracking-wider">
                  Participación
                </span>
                <div className="flex items-center justify-center gap-2 text-primary mt-1">
                  <Award className="w-6 h-6" />
                  <span className="text-4xl font-black">+{activitySelected?.puntos_participacion}</span>
                  <span className="text-xl font-bold">PTS</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Fecha</p>
                    <p className="text-muted-foreground capitalized">{formattedDate}</p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Hora</p>
                    <p className="text-muted-foreground">{formattedTime}</p>
                  </div>
                </div> */}
              </div>

              <Separator />

              <div className="space-y-3">
                {activitySelected?.enlace_participacion ? (
                  <Button className="w-full text-lg h-12 gap-2 shadow-md" size="lg" asChild>
                    <a
                      href={activitySelected.enlace_participacion}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Inscribirme ahora
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="secondary" className="w-full cursor-not-allowed opacity-80" disabled>
                    Registro presencial
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* DERECHA — DESCRIPCIÓN */}
        <div className="lg:col-span-2 space-y-8 lg:order-2">
          <section>
            <h3 className="text-xl font-semibold mb-4">Sobre esta actividad</h3>
            <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              <p className="whitespace-pre-line">{activitySelected?.descripcion}</p>
            </div>
          </section>

          <Separator />

          {/* PREMIOS */}
          {activitySelected?.premio && activitySelected.premio.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <h3 className="text-xl font-semibold">Tabla de Premios</h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {activitySelected.premio.map((award) => (
                  <Card key={award?.lugar} className="overflow-hidden border-l-4 border-l-yellow-500">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg">{award?.lugar}º Lugar</p>
                        <p className="text-sm text-muted-foreground">Posición final</p>
                      </div>
                      <Badge variant="secondary" className="text-base px-3 py-1 bg-yellow-500/10 text-yellow-700">
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
