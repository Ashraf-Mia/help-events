import Link from "next/link";
import { connection } from "next/server";
import { ArrowRight01Icon, Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { EventCard } from "@/components/events/event-card";
import { SectionHeading } from "@/components/home/section-heading";
import { getUpcomingEvents, type UpcomingEvent } from "@/lib/events";

export async function UpcomingEventsSection() {
  await connection();

  let events: UpcomingEvent[] = [];

  try {
    events = await getUpcomingEvents(6);
  } catch (error) {
    console.error("Unable to load upcoming events", error);
  }

  return (
    <section
      id="upcoming-events"
      className="scroll-mt-24 bg-brand-cream/45 py-20 sm:py-24 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Happening soon"
          title="Good things, close to home."
          description="Six upcoming ways to lend a hand, learn something new, and meet the people making your neighbourhood feel like home."
          action={
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-xs font-semibold transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              View all events
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.8} />
            </Link>
          }
        />

        {events.length > 0 ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center rounded-[1.75rem] border border-dashed border-border bg-background/60 px-6 py-16 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
              <HugeiconsIcon icon={Calendar03Icon} strokeWidth={1.7} size={26} />
            </span>
            <h3 className="mt-5 font-heading text-xl font-semibold tracking-[-0.03em]">
              The calendar is taking a breath.
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              New community events will appear here as soon as they are
              published. In the meantime, you can be the one who starts
              something.
            </p>
            <Link
              href="/create-event"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Create an event
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.8} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
