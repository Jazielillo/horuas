'use client';
import { useState } from "react";
import { ArrowLeft, Edit, Trash2, Users, UserPlus, Search, X, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";

// Mock data
const mockClub = {
  id: 1,
  name: "Club de Fútbol",
  description: "Entrenamientos y torneos de fútbol soccer. El club busca desarrollar habilidades deportivas y valores de trabajo en equipo.",
  status: "Activo",
  members: 45,
  cycle: "2024-2025",
  createdAt: "01/08/2024",
  image: null
};

const mockMembers = [
  { id: 1, name: "Juan Pérez", accountNumber: "20230001", grade: "3", group: "A", cycle: "2024-2025", joinDate: "15/08/2024" },
  { id: 2, name: "María García", accountNumber: "20230002", grade: "3", group: "B", cycle: "2024-2025", joinDate: "15/08/2024" },
  { id: 3, name: "Carlos López", accountNumber: "20230003", grade: "2", group: "A", cycle: "2024-2025", joinDate: "20/08/2024" },
  { id: 4, name: "Ana Martínez", accountNumber: "20230004", grade: "3", group: "A", cycle: "2024-2025", joinDate: "15/08/2024" },
  { id: 5, name: "Luis Rodríguez", accountNumber: "20230005", grade: "2", group: "C", cycle: "2024-2025", joinDate: "22/08/2024" },
];

const mockPointRules = [
  { id: 1, type: "Fijo", value: 10, description: "Puntos por participación mensual", active: true },
  { id: 2, type: "Por Asistencia", value: 5, description: "Puntos por cada asistencia a entrenamiento", active: true },
  { id: 3, type: "Por Evento", value: 20, description: "Puntos por participación en torneos", active: false },
];

const mockHistory = [
  { cycle: "2023-2024", members: 38, status: "Finalizado", changes: 5 },
  { cycle: "2022-2023", members: 32, status: "Finalizado", changes: 3 },
];

const mockAvailableStudents = [
  { id: 6, name: "Pedro Sánchez", accountNumber: "20230006", grade: "3", group: "B" },
  { id: 7, name: "Laura Torres", accountNumber: "20230007", grade: "2", group: "A" },
  { id: 8, name: "Diego Ramírez", accountNumber: "20230008", grade: "3", group: "C" },
];

const CoordinatorClubDetail = () => {
  
  const [addMemberOpen, setAddMemberOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [removeMemberId, setRemoveMemberId] = useState<number | null>(null);
  const [searchStudent, setSearchStudent] = useState("");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");

  const filteredStudents = mockAvailableStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
                         student.accountNumber.includes(searchStudent);
    const matchesGrade = selectedGrade === "all" || student.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  const handleAddMember = (studentId: number) => {
    const student = mockAvailableStudents.find(s => s.id === studentId);
    toast({
      title: "Alumno agregado",
      description: `${student?.name} ha sido agregado al club exitosamente`,
    });
    setAddMemberOpen(false);
    setSearchStudent("");
  };

  const handleRemoveMember = (memberId: number) => {
    setRemoveMemberId(memberId);
  };

  const confirmRemoveMember = () => {
    const member = mockMembers.find(m => m.id === removeMemberId);
    toast({
      title: "Alumno removido",
      description: `${member?.name} ha sido removido del club`,
      variant: "destructive"
    });
    setRemoveMemberId(null);
  };

  const handleDeleteClub = () => {
    toast({
      title: "Club eliminado",
      description: `El club "${mockClub.name}" ha sido eliminado`,
      variant: "destructive"
    });
  };

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <Button variant="ghost" size="icon" onClick={() => window.location.href = "/coordinador/clubes"}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">{mockClub.name}</h1>
                <Badge variant={mockClub.status === "Activo" ? "default" : "secondary"}>
                  {mockClub.status}
                </Badge>
              </div>
              <p className="text-muted-foreground">{mockClub.description}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {mockClub.members} miembros
                </span>
                <span>Ciclo: {mockClub.cycle}</span>
                <span>Creado: {mockClub.createdAt}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => window.location.href = `/coordinador/clubes/${mockClub.id}/editar`}>
              <Edit className="w-4 h-4 mr-2" />
              Editar
            </Button>
            <Button variant="destructive" onClick={() => setDeleteDialogOpen(true)}>
              <Trash2 className="w-4 h-4 mr-2" />
              Eliminar
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="info" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="info">Información General</TabsTrigger>
            <TabsTrigger value="members">Miembros</TabsTrigger>
            <TabsTrigger value="rules">Reglas de Puntos</TabsTrigger>
            <TabsTrigger value="history">Historial</TabsTrigger>
          </TabsList>

          {/* Information Tab */}
          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detalles del Club</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-muted-foreground">Nombre</Label>
                    <p className="text-lg font-medium">{mockClub.name}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Estado</Label>
                    <p className="text-lg font-medium">{mockClub.status}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Ciclo Escolar</Label>
                    <p className="text-lg font-medium">{mockClub.cycle}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Total de Miembros</Label>
                    <p className="text-lg font-medium">{mockClub.members}</p>
                  </div>
                  <div className="md:col-span-2">
                    <Label className="text-muted-foreground">Descripción</Label>
                    <p className="text-base mt-1">{mockClub.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Members Tab */}
          <TabsContent value="members" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Miembros del Club</CardTitle>
                    <CardDescription>Total: {mockMembers.length} alumnos</CardDescription>
                  </div>
                  <Button onClick={() => setAddMemberOpen(true)}>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Agregar Alumno
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Matrícula</TableHead>
                      <TableHead>Grado</TableHead>
                      <TableHead>Grupo</TableHead>
                      <TableHead>Fecha de Ingreso</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockMembers.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="font-medium">{member.name}</TableCell>
                        <TableCell>{member.accountNumber}</TableCell>
                        <TableCell>{member.grade}°</TableCell>
                        <TableCell>{member.group}</TableCell>
                        <TableCell>{member.joinDate}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveMember(member.id)}
                          >
                            <X className="w-4 h-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rules Tab */}
          <TabsContent value="rules" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reglas de Asignación de Puntos</CardTitle>
                <CardDescription>Configuración actual de puntos para este club</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPointRules.map((rule) => (
                    <Card key={rule.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{rule.type}</Badge>
                              <Badge variant={rule.active ? "default" : "secondary"}>
                                {rule.active ? (
                                  <>
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Activa
                                  </>
                                ) : (
                                  <>
                                    <XCircle className="w-3 h-3 mr-1" />
                                    Inactiva
                                  </>
                                )}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{rule.description}</p>
                            <p className="text-2xl font-bold text-primary">{rule.value} puntos</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Historial del Club</CardTitle>
                <CardDescription>Ciclos escolares anteriores</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ciclo Escolar</TableHead>
                      <TableHead>Miembros</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Cambios Realizados</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockHistory.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{record.cycle}</TableCell>
                        <TableCell>{record.members}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{record.status}</Badge>
                        </TableCell>
                        <TableCell>{record.changes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add Member Dialog */}
        <Dialog open={addMemberOpen} onOpenChange={setAddMemberOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Agregar Alumno al Club</DialogTitle>
              <DialogDescription>
                Busca y selecciona un alumno para agregarlo a {mockClub.name}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Buscar por nombre o matrícula..."
                    value={searchStudent}
                    onChange={(e) => setSearchStudent(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Grado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="1">1° Grado</SelectItem>
                    <SelectItem value="2">2° Grado</SelectItem>
                    <SelectItem value="3">3° Grado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="border rounded-lg max-h-[400px] overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Matrícula</TableHead>
                      <TableHead>Grado</TableHead>
                      <TableHead className="text-right">Acción</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                          No se encontraron alumnos
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredStudents.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">{student.name}</TableCell>
                          <TableCell>{student.accountNumber}</TableCell>
                          <TableCell>{student.grade}° {student.group}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              size="sm"
                              onClick={() => handleAddMember(student.id)}
                            >
                              Agregar
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setAddMemberOpen(false)}>
                Cerrar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Remove Member Confirmation */}
        <AlertDialog open={removeMemberId !== null} onOpenChange={(open: boolean) => !open && setRemoveMemberId(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Remover alumno del club?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción removerá al alumno de {mockClub.name}. Esta acción puede revertirse agregando al alumno nuevamente.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={confirmRemoveMember} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                Remover
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Delete Club Confirmation */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Eliminar club?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción eliminará permanentemente el club "{mockClub.name}" y toda su información. Esta acción no se puede deshacer.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteClub} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                Eliminar Club
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
};

export default CoordinatorClubDetail;
