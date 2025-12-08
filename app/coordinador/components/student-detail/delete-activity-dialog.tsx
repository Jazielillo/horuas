import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const DeleteActivityDialog = ({
  open,
  onOpenChange,
  reason,
  setReason,
  onConfirm,
}: any) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>Eliminar Actividad</DialogTitle>
        <DialogDescription>
          Proporciona una razón para eliminar:
        </DialogDescription>
      </DialogHeader>
      <Textarea
        placeholder="Escribe la razón aquí..."
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required={true}
        className="w-full resize-none h-24"
      />
      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)}>
          Cancelar
        </Button>
        <Button variant="destructive" onClick={() => {
          if(reason.trim() === "") {
            alert("Por favor, proporciona una razón para eliminar la actividad.");
            return;
          }
          onConfirm(reason);
          onOpenChange(false);
        }}>
          Confirmar Eliminación
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
