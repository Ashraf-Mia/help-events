"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import { IEvent } from "@/lib/events";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

type Props = {
  event: IEvent;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const eventTypes = [
  "Donation",
  "Cleanup",
  "Plantation",
  "Winter Relief",
  "Food Drive",
  "Health Camp",
  "Education",
];

const selectClass =
  "h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50";

const toDateInputValue = (date: string) => {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime())
    ? ""
    : parsed.toISOString().slice(0, 10);
};

const EditEventDialog = ({ event, open, onOpenChange }: Props) => {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    const token = await getTokenFromClient();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/my-events/${event._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to update the event.");
      }

      toast.add({
        type: "success",
        title: "Event updated",
        description: `${updatedData.title} has been updated successfully.`,
      });

      onOpenChange(false);
      router.refresh();
    } catch (error) {
      console.error("Failed to update event:", error);
      toast.add({
        type: "error",
        title: "Update failed",
        description: "Something went wrong while updating the event.",
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogDescription>
            Update the details of your event and save the changes.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor={`title-${event._id}`}>
                Event Title
              </FieldLabel>
              <Input
                id={`title-${event._id}`}
                name="title"
                defaultValue={event.title}
                placeholder="e.g. Winter Clothes Distribution"
                required
              />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor={`type-${event._id}`}>
                  Event Type
                </FieldLabel>
                <select
                  id={`type-${event._id}`}
                  name="type"
                  required
                  defaultValue={event.type}
                  className={selectClass}
                >
                  <option value="" disabled>
                    Select a type
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <Field>
                <FieldLabel htmlFor={`date-${event._id}`}>
                  Event Date
                </FieldLabel>
                <Input
                  id={`date-${event._id}`}
                  name="date"
                  type="date"
                  defaultValue={toDateInputValue(event.date)}
                  required
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor={`location-${event._id}`}>
                Location
              </FieldLabel>
              <Input
                id={`location-${event._id}`}
                name="location"
                defaultValue={event.location}
                placeholder="e.g. Mirpur 10, Dhaka"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor={`thumbnail-${event._id}`}>
                Thumbnail Image URL
              </FieldLabel>
              <Input
                id={`thumbnail-${event._id}`}
                name="thumbnail"
                type="url"
                defaultValue={event.thumbnail}
                placeholder="https://example.com/image.jpg"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor={`description-${event._id}`}>
                Event Description
              </FieldLabel>
              <Textarea
                id={`description-${event._id}`}
                name="description"
                defaultValue={event.description}
                placeholder="Tell people what this event is about, what to bring and who it helps."
                className="min-h-28 resize-none"
                required
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-6">
            <DialogClose render={<Button type="button" variant="outline" />}>
              Cancel
            </DialogClose>
            <Button
              type="submit"
              disabled={pending}
              className="bg-[#0E3B43] text-white hover:bg-[#206470]"
            >
              {pending ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditEventDialog;
