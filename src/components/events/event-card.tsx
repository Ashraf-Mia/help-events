import Image from "next/image";
import { format } from "date-fns";
import {
  Clock01Icon,
  Location01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { UpcomingEvent } from "@/lib/events";
import { cn } from "cn";

const CATEGORY_STYLES: Record<string, string> = {
  Environment: "bg-brand-mint text-primary",
  Food: "bg-orange-100 text-orange-800",
  Youth: "bg-violet-100 text-violet-700",
  Community: "bg-sky-100 text-sky-800",
  Health: "bg-rose-100 text-rose-700",
};

export function EventCard({ event }: { event: UpcomingEvent }) {
  const eventDate = new Date(event.date);
  const spotsLeft = Math.max(event.capacity - event.attendees, 0);
  const filledPercent = event.capacity
    ? Math.min(Math.round((event.attendees / event.capacity) * 100), 100)
    : 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={event.coverImage}
          alt={`${event.title} community event`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/35 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 grid size-14 place-items-center rounded-2xl bg-background/95 text-center shadow-md backdrop-blur">
          <span className="-mb-1 text-[10px] font-semibold tracking-[0.12em] text-brand-coral uppercase">
            {format(eventDate, "MMM")}
          </span>
          <span className="font-heading text-xl leading-none font-semibold tracking-[-0.04em] text-foreground">
            {format(eventDate, "d")}
          </span>
        </div>

        <span
          className={cn(
            "absolute top-5 right-4 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] uppercase",
            CATEGORY_STYLES[event.category] ?? "bg-muted text-foreground",
          )}
        >
          {event.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-lg leading-snug font-semibold tracking-[-0.03em] text-balance text-foreground">
          {event.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {event.description}
        </p>

        <div className="mt-5 space-y-2 text-xs text-muted-foreground">
          <p className="flex items-center gap-2">
            <HugeiconsIcon
              icon={Location01Icon}
              strokeWidth={1.7}
              className="text-primary"
            />
            {event.location}
          </p>
          <p className="flex items-center gap-2">
            <HugeiconsIcon
              icon={Clock01Icon}
              strokeWidth={1.7}
              className="text-primary"
            />
            {format(eventDate, "EEE, MMM d · h:mm a")}
          </p>
        </div>

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-3 text-[11px] font-medium">
            <span className="flex items-center gap-1.5 text-foreground">
              <HugeiconsIcon icon={UserGroupIcon} strokeWidth={1.7} />
              {event.attendees} going
            </span>
            <span className={spotsLeft === 0 ? "text-brand-coral" : "text-muted-foreground"}>
              {spotsLeft === 0 ? "Fully booked" : `${spotsLeft} spots left`}
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${filledPercent}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
