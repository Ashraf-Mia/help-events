"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Pencil, Trash2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import DeleteEventDialog from "@/components/events/delete-event-dialog";
import EditEventDialog from "@/components/events/edit-event-dialog";
import { IEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

const ManageEventCard = ({ event }: { event: IEvent }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={event.thumbnail}
          width={300}
          height={200}
          alt={event.title}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-card px-3 py-1 text-xs font-semibold text-[#0E3B43] shadow-sm">
          {event.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 text-lg font-semibold text-foreground">
          {event.title}
        </h3>

        <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-[#2FA37A]" />
            {formattedDate}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-[#2FA37A]" />
            <span className="line-clamp-1">{event.location}</span>
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
          {event.description}
        </p>

        <div className="mt-5 border-t border-gray-300 pt-4 grid grid-cols-3 gap-2">
          <Link
            href={`/events/${event._id}`}
            className={cn(
              buttonVariants(),
              "h-10 w-full bg-[#0E3B43] text-white hover:bg-[#206470] flex items-center justify-center",
            )}
          >
            View
          </Link>

          <Button
            variant="outline"
            className="h-10 w-full flex items-center justify-center gap-1.5"
            onClick={() => setEditOpen(true)}
          >
            <Pencil className="size-4" />
            Edit
          </Button>

          <Button
            variant="destructive"
            className="h-10 w-full flex items-center justify-center gap-1.5"
            onClick={() => setDeleteOpen(true)}
          >
            <Trash2 className="size-4" />
            Delete
          </Button>
        </div>
      </div>

      <EditEventDialog
        event={event}
        open={editOpen}
        onOpenChange={setEditOpen}
      />
      <DeleteEventDialog
        event={event}
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
      />
    </div>
  );
};

export default ManageEventCard;
