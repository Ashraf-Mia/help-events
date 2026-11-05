import EventCard from "@/components/events/event-card";
import SearchBox from "@/components/events/search-box";
import UpcomingType from "@/components/events/upcomingType";
import { buttonVariants } from "@/components/ui/button";
import { IEvent } from "@/lib/events";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

type Props = {
  type?: string;
  search?: string;
};

const EventsView = async ({ type, search }: Props) => {
  const params = new URLSearchParams();
  if (type) params.set("type", type);
  if (search) params.set("search", search);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events?${params.toString()}`,
    { cache: "no-store" },
  );
  const data = await res.json();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Upcoming Events</h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            Find social service events near you and be part of the change. Join
            an event, or start your own and bring your community together.
          </p>
        </div>

        <Link
          href="/createEvent"
          className={cn(
            buttonVariants(),
            "h-10 w-full shrink-0 bg-[#FFC94A] px-5 font-semibold text-[#0E3B43] hover:bg-[#ffd36d] sm:w-auto",
          )}
        >
          <Plus className="size-4" />
          Create Event
        </Link>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <UpcomingType type={type} />

        <SearchBox key={type ?? "all"} type={type} search={search} />
      </div>

      {data.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No events found.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((e: IEvent) => (
            <EventCard key={e._id} event={e} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsView;
