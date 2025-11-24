'use client';
import { useState } from "react";
import { Search, Plus, Users, Grid3x3, List } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data
const mockClubs = [
  {
    id: 1,
    name: "Club de Fútbol",
    description: "Entrenamientos y torneos de fútbol soccer",
    status: "Activo",
    members: 45,
    cycle: "2024-2025"
  },
  {
    id: 2,
    name: "Club de Básquetbol",
    description: "Práctica y competencias de basketball",
    status: "Activo",
    members: 32,
    cycle: "2024-2025"
  },
  {
    id: 3,
    name: "Club de Ajedrez",
    description: "Desarrollo de habilidades estratégicas y torneos",
    status: "Activo",
    members: 28,
    cycle: "2024-2025"
  },
  {
    id: 4,
    name: "Club de Robótica",
    description: "Diseño y programación de robots",
    status: "Inactivo",
    members: 15,
    cycle: "2023-2024"
  },
  {
    id: 5,
    name: "Club de Debate",
    description: "Desarrollo de habilidades de oratoria y argumentación",
    status: "Activo",
    members: 22,
    cycle: "2024-2025"
  },
  {
    id: 6,
    name: "Club de Música",
    description: "Práctica instrumental y presentaciones",
    status: "Activo",
    members: 38,
    cycle: "2024-2025"
  }
];

const CoordinatorClubs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [cycleFilter, setCycleFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredClubs = mockClubs.filter((club) => {
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || club.status === statusFilter;
    const matchesCycle = cycleFilter === "all" || club.cycle === cycleFilter;
    return matchesSearch && matchesStatus && matchesCycle;
  });

  const cycles = [...new Set(mockClubs.map(club => club.cycle))];

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gestión de Clubes</h1>
            <p className="text-muted-foreground mt-1">
              Administra todos los clubes estudiantiles
            </p>
          </div>
          <Button onClick={() => window.location.href = "/coordinador/clubes/nuevo"} className="gap-2">
            <Plus className="w-4 h-4" />
            Crear Club
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar por nombre o descripción..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full lg:w-[180px]">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  <SelectItem value="Activo">Activo</SelectItem>
                  <SelectItem value="Inactivo">Inactivo</SelectItem>
                </SelectContent>
              </Select>

              <Select value={cycleFilter} onValueChange={setCycleFilter}>
                <SelectTrigger className="w-full lg:w-[180px]">
                  <SelectValue placeholder="Ciclo escolar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los ciclos</SelectItem>
                  {cycles.map((cycle) => (
                    <SelectItem key={cycle} value={cycle}>
                      {cycle}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results count */}
        <div className="text-sm text-muted-foreground">
          Mostrando {filteredClubs.length} de {mockClubs.length} clubes
        </div>

        {/* Empty state */}
        {filteredClubs.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Users className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No se encontraron clubes</h3>
              <p className="text-muted-foreground text-center mb-4">
                {searchQuery || statusFilter !== "all" || cycleFilter !== "all"
                  ? "Intenta ajustar los filtros de búsqueda"
                  : "Comienza creando tu primer club"}
              </p>
              {!searchQuery && statusFilter === "all" && cycleFilter === "all" && (
                <Button onClick={() => window.location.href = "/coordinador/clubes/nuevo"}>
                  <Plus className="w-4 h-4 mr-2" />
                  Crear primer club
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {/* Clubs Grid/List */}
        {filteredClubs.length > 0 && (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-4"
          }>
            {filteredClubs.map((club) => (
              <Card 
                key={club.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => { window.location.href = `/coordinador/clubes/${club.id}`; }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{club.name}</CardTitle>
                    <Badge variant={club.status === "Activo" ? "default" : "secondary"}>
                      {club.status}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {club.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{club.members} miembros</span>
                  </div>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  Ciclo: {club.cycle}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
  );
};

export default CoordinatorClubs;
