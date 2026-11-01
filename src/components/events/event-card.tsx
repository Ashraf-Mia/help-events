import { buttonVariants } from "@/components/ui/button";
import { IEvent } from "@/lib/events";
import { cn } from "@/lib/utils";
import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";

const EventCard = ({ event }: { event: IEvent }) => {
  // timeZone "UTC" keeps "2026-11-01" from shifting to the previous day
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.thumbnail}
          alt={event.title}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0E3B43] shadow-sm">
          {event.type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {event.title}
        </h3>

        <div className="mt-3 space-y-1.5 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-[#2FA37A]" />
            {formattedDate}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-[#2FA37A]" />
            <span className="line-clamp-1">{event.location}</span>
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-gray-500">
          {event.description}
        </p>

        <Link
          href={`/events/${event._id}`}
          className={cn(
            buttonVariants(),
            "mt-5 h-10 w-full bg-[#0E3B43] text-white hover:bg-[#206470]",
          )}
        >
          View Event
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
