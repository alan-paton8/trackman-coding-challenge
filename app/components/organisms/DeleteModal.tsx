import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import Button from "../molecules/Button";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  facilityId: string;
  facilityName: string;
}

function DeleteModal({
  isOpen,
  onClose,
  onDelete,
  facilityId,
  facilityName,
}: DeleteModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white w-xs md:w-md">
        <DialogHeader>
          <DialogTitle>Delete Facility</DialogTitle>
        </DialogHeader>
        <hr className="h-px bg-[#D9D9D9] border-0" />
        <DialogDescription>
          Are you sure you want to delete this facility? This action cannot be
          undone.
          <br />
          Facility: <span className="font-semibold">{facilityName}</span>
        </DialogDescription>
        <hr className="h-px bg-[#D9D9D9] border-0" />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary" text="Cancel" onClick={onClose} />
          </DialogClose>
          <Button
            variant="primary"
            text="Yes, Delete"
            onClick={() => {
              onDelete();
              onClose();
            }}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteModal;
