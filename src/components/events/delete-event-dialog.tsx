"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "@/components/ui/toast";
import { IEvent } from "@/lib/events";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

type Props = {
  event: IEvent;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DeleteEventDialog = ({ event, open, onOpenChange }: Props) => {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const onDelete = async () => {
    setPending(true);

    const token = await getTokenFromClient();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/my-events/${event._id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );

      if (!res.ok) {
        throw new Error("Failed to delete the event.");
      }

      toast.add({
        type: "success",
        title: "Event deleted",
        description: `${event.title} has been deleted successfully.`,
      });

      onOpenChange(false);
      router.refresh();
    } catch (error) {
      console.error("Failed to delete event:", error);
      toast.add({
        type: "error",
        title: "Delete failed",
        description: "Something went wrong while deleting the event.",
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this event?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete &quot;{event.title}&quot;. This action
            cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={pending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onDelete}
            disabled={pending}
            className="bg-destructive/10 text-destructive hover:bg-destructive/20"
          >
            {pending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteEventDialog;
