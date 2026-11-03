import { buttonVariants } from "@/components/ui/button";
import { IJoinedEvent } from "@/lib/events";
import { cn } from "@/lib/utils";
import { CalendarCheck, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getJoinedDate = (event: IJoinedEvent) => {
  if (event.joinedAt) {
    return new Date(event.joinedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  if (/^[0-9a-fA-F]{24}$/.test(event._id)) {
    const timestamp = parseInt(event._id.slice(0, 8), 16) * 1000;
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return null;
};

const JoinedEventCard = ({ event }: { event: IJoinedEvent }) => {
  const eventDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  const joinedDate = getJoinedDate(event);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={event.thumbnail}
          width={300}
          height={200}
          alt={event.title}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0E3B43] shadow-sm">
          {event.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {event.title}
        </h3>

        <div className="mt-3 space-y-1.5 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-[#2FA37A]" />
            {eventDate}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-[#2FA37A]" />
            <span className="line-clamp-1">{event.location}</span>
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-gray-500">
          {event.description}
        </p>

        <div className="mt-auto pt-5">
          {joinedDate && (
            <p className="mb-4 flex items-center gap-2 text-xs font-medium text-[#2FA37A]">
              <CalendarCheck className="size-4 shrink-0" />
              Joined on {joinedDate}
            </p>
          )}

          <div className="border-t border-gray-300 pt-4">
            <Link
              href={`/events/${event.eventId}`}
              className={cn(
                buttonVariants(),
                "flex h-10 w-full items-center justify-center bg-[#0E3B43] text-white hover:bg-[#206470]",
              )}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinedEventCard;
