import { getStudentPoints } from "@/app/api/utils/getPoints";
import { Alumno } from "@/app/models";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { AlertTriangle, Check } from "lucide-react";

export const SummaryDetailsPoints = ({
  open,
  onOpenChange,
  onConfirm,
  selectedActivityData,
  selectedStudents,
  studentsAwards,
}: any) => {
  const whatPrizeIs = (student_id: number) => {
    const award = studentsAwards[student_id];
    if (!award) {
      return { lugar: null, puntos: 0 };
    }
    const lugarMap: Record<number, string> = {
      1: "1er lugar",
      2: "2do lugar",
      3: "3er lugar",
      4: "4to lugar",
      5: "5to lugar",
    };
    const lugar = lugarMap[award.lugar] != null ? `${award.lugar}° lugar` : `Participación`;
    return { lugar, puntos: award.puntos_otorgados };
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-3xl bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Confirmar Asignación de Puntos
          </DialogTitle>
          <DialogDescription>
            Por favor revisa el resumen antes de confirmar la asignación
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Activity Summary */}
          <div className="p-4  rounded-lg">
            <h4 className="font-semibold mb-2">Actividad</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-muted-foreground">Nombre:</span>
              <span className="font-medium">
                {selectedActivityData?.nombre}
              </span>
              <span className="text-muted-foreground">Departamento:</span>
              <span>{selectedActivityData?.departamento}</span>
              <span className="text-muted-foreground">Puntos base:</span>
              <span>{selectedActivityData?.puntos_participacion} pts</span>
            </div>
          </div>

          {/* Students Summary */}
          <div className="p-4 rounded-lg">
            <h4 className="font-semibold mb-2">
              Alumnos a recibir puntos ({selectedStudents.length})
            </h4>
            <div className="max-h-48 overflow-y-auto rounded-2xl border border-muted-foreground">
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead>Alumno</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead className="text-right">Puntos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedStudents.map((student: Alumno) => {
                    const prize = whatPrizeIs(student.id_usuario);
                    console.log(prize.lugar)
                    return (
                      <TableRow
                        key={student.id_usuario}
                        className={`${
                          prize.lugar === "1° lugar"
                            ? "bg-yellow-200 hover:bg-yellow-300"
                            : prize.lugar === "2° lugar"
                            ? "bg-gray-200 hover:bg-gray-300"
                            : prize.lugar === "3° lugar"
                            ? "bg-amber-700 text-white hover:bg-amber-800"
                            : ""
                        }`}
                      >
                        <TableCell className="font-medium">
                          {student.nombre}
                          <span className="block text-xs text-muted-foreground">
                            {student.num_cuenta}
                          </span>
                        </TableCell>
                        <TableCell>
                          {prize.lugar != null ? (
                            <span className="font-semibold">{prize.lugar}</span>
                          ) : (
                            "Participación"
                          )}
                        </TableCell>
                        <TableCell className="text-right text-primary font-semibold">
                          {prize.puntos +
                            selectedActivityData?.puntos_participacion}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 ">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={onConfirm}>
            <Check className="w-4 h-4 mr-2" />
            Confirmar Asignación
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
