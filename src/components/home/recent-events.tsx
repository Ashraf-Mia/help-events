import EventCard from "@/components/events/event-card";
import { buttonVariants } from "@/components/ui/button";
import { IEvent } from "@/lib/events";
import { cn } from "@/lib/utils";
import Link from "next/link";

const RecentEvents = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sixEvents`, {
    cache: "no-store",
  });
  const events: IEvent[] = await res.json();

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Upcoming Events</h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Pick an event near you and be part of the change.
            </p>
          </div>
          <Link
            href="/upcoming-events"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-10 w-full sm:w-auto",
            )}
          >
            View All Events
          </Link>
        </div>

        {events.length === 0 ? (
          <p className="py-12 text-center text-gray-500">
            No upcoming events right now.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <EventCard key={e._id} event={e} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentEvents;
