"use client";
import { Spinner } from "@/components/ui/spinner";
import ProgressChart from "../components/progress-chart";
import { useAlumnoStore } from "@/store/use-alumno-store";
import { useEffect } from "react";

export const Student = () => {
  // Mock data - in production, this would come from API
  const { selectedAlumno, loading } = useAlumnoStore();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Mi Progreso</h1>
        {loading ? (
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <Spinner></Spinner>
            </div>
            <p>Cargando información del alumno...</p>
          </div>
        ) : (
          <div>
            <p className="text-lg">
              Bienvenido, {selectedAlumno?.nombre}! | Grupo:{" "}
              {selectedAlumno?.grupo}
            </p>
          </div>
        )}
      </div>

      {/* Progress Section */}
      <div className="space-y-4">
        {loading ? (
          <div className="flex gap-2">
            
          </div>
        ) : (
          <ProgressChart puntos_hoy={selectedAlumno?.puntos ?? 0} />
        )}
      </div>
    </div>
  );
};

export default Student;
