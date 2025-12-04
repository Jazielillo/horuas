// EditActivityDialog.tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const EditActivityDialog = ({
  open,
  onOpenChange,
  lugarPremio,
  setLugarPremio,
  prizes,
  onSave,
}: any) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>Editar Participación</DialogTitle>
        <DialogDescription>
          Modificar detalles de la actividad.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-2">
        <Label>Tipo de participación</Label>
        <Select value={lugarPremio} onValueChange={setLugarPremio}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="participation">Participación</SelectItem>
            {prizes?.map((prize: any) => (
              <SelectItem
                key={prize?.lugar}
                value={prize?.lugar?.toString() ?? "participation"}
              >
                {prize?.lugar === 1
                  ? "1er lugar"
                  : prize?.lugar === 2
                  ? "2do lugar"
                  : `Lugar ${prize?.lugar}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)}>
          Cancelar
        </Button>
        <Button onClick={onSave}>Guardar cambios</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
