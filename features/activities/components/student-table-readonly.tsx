import { Search } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useContext } from "react";
import CoordinatorContext from "@/app/coordinador/context/coordinator-context";

interface Alumno {
  id_usuario: number;
  nombre: string;
  num_cuenta: string;
  grupo?: string;
  puntos?: {
    deportes: number;
    cultura: number;
  };
}

interface StudentsTableReadOnlyProps {
  students: Alumno[];
  filteredStudents: Alumno[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  loading?: boolean;
  title: string;
  description: string;
  userRole?: string | null;
  showGroupColumn?: boolean;
  isSingleStudent?: boolean;
}

export const StudentsTableReadOnly = ({
  students,
  filteredStudents,
  searchTerm,
  onSearchChange,
  loading = false,
  title,
  description,
  userRole = null,
  showGroupColumn = false,
  isSingleStudent = false,
}: StudentsTableReadOnlyProps) => {
  // Calcular número de columnas dinámicamente
  const {role} = useContext(CoordinatorContext);
  const getColSpan = () => {
    let cols = 3; // Nombre, Cuenta, Acciones
    if (showGroupColumn) cols++;
    if (role === "COORDINADOR_CULTURA" || role === "COORDINADOR_DEPORTES") {
      cols++; // Solo una columna de puntos
    } else {
      cols += 2; // Dos columnas de puntos
    }
    return cols;
  };

  if(loading) {
    return 
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>

          {/* Barra de búsqueda - solo si NO es alumno individual */}
          {!isSingleStudent && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre o número de cuenta..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
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
                {showGroupColumn && <TableHead>Grupo</TableHead>}

                {role === "COORDINADOR_CULTURA" ? (
                  <TableHead>Puntos Cultura</TableHead>
                ) : role === "COORDINADOR_DEPORTES" ? (
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
              {/* Estado de carga */}
              {loading ? (
                <TableRow>
                  <TableCell colSpan={getColSpan()} className="h-24 text-center">
                    <div className="flex flex-col items-center justify-center gap-2 mx-auto">
                      <Spinner className="h-8 w-8 animate-spin text-primary" />
                      <span className="text-sm text-muted-foreground">
                        Cargando alumnos...
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : students.length === 0 ? (
                /* No hay alumnos en el grupo/selección */
                <TableRow>
                  <TableCell
                    colSpan={getColSpan()}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No se encontraron alumnos en este grupo.
                  </TableCell>
                </TableRow>
              ) : filteredStudents.length === 0 ? (
                /* Búsqueda sin resultados */
                <TableRow>
                  <TableCell
                    colSpan={getColSpan()}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No se encontraron alumnos con ese nombre o cuenta.
                  </TableCell>
                </TableRow>
              ) : (
                /* Lista de estudiantes */
                filteredStudents.map((student) => (
                  <TableRow key={student.id_usuario}>
                    <TableCell className="font-medium">
                      {student.nombre}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {student.num_cuenta}
                    </TableCell>
                    {showGroupColumn && (
                      <TableCell>{student?.grupo ?? "N/A"}</TableCell>
                    )}

                    {role === "COORDINADOR_CULTURA" ? (
                      <TableCell className="text-center">
                        {student.puntos?.cultura}
                      </TableCell>
                    ) : role === "COORDINADOR_DEPORTES" ? (
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
        </div>
      </CardContent>
    </Card>
  );
};