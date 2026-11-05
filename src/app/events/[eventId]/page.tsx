import JoinButton from "@/components/joinEvents/join-button";
import { IEvent } from "@/lib/events";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) => {
  const { eventId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) notFound();

  const event: IEvent = await res.json();
  if (!event) notFound();

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
  }).format(new Date());
  const isPast = event.date < today;

  const organizerName = event.creatorName || event.email.split("@")[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/upcoming-events"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-[#0E3B43] dark:hover:text-[#FFC94A]"
      >
        ← Back to events
      </Link>

      <div className="overflow-hidden rounded-2xl bg-muted">
        <Image
          src={event.thumbnail}
          width={56}
          height={50}
          alt={event.title}
          className="h-56 w-full object-cover sm:h-80 lg:h-96"
        />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <span className="inline-block rounded-full bg-[#0E3B43]/10 px-3 py-1 text-xs font-semibold text-[#0E3B43] dark:text-[#FFC94A]">
            {event.type}
          </span>
          <h1 className="mt-3 text-2xl font-bold sm:text-3xl">{event.title}</h1>

          <h2 className="mt-8 text-lg font-semibold">About this event</h2>

          <p className="mt-2 whitespace-pre-line text-muted-foreground">
            {event.description}
          </p>

          <h2 className="mt-8 text-lg font-semibold">Event guidelines</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              Please arrive 10 minutes early and be respectful to everyone.
            </li>
            <li>Follow the organizer&apos;s instructions during the event.</li>
            <li>You can leave the event anytime before it starts.</li>
          </ul>
        </div>

        <div className="h-fit rounded-2xl border bg-card p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 size-5 shrink-0 text-[#2FA37A]" />
              <span>
                <span className="block text-xs text-muted-foreground">
                  Date
                </span>
                {formattedDate}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-[#2FA37A]" />
              <span>
                <span className="block text-xs text-muted-foreground">
                  Location
                </span>
                {event.location}
              </span>
            </p>

            <div className="flex items-center gap-3">
              {event.creatorImage ? (
                <Image
                  src={event.creatorImage}
                  width={10}
                  height={10}
                  alt={organizerName}
                  className="size-10 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#0E3B43] font-semibold uppercase text-white">
                  {organizerName.charAt(0)}
                </div>
              )}
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">
                  Organizer
                </span>
                <span className="block truncate font-medium">
                  {organizerName}
                </span>
              </span>
            </div>
          </div>

          <div className="mt-6 border-t pt-6">
            <JoinButton event={event} isPast={isPast} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
