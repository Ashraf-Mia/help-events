import EventCardSkeleton from "@/components/shared/event-card-skeleton";

const UpcomingEventsLoading = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <div className="h-8 w-56 animate-pulse rounded bg-muted sm:h-9" />
          <div className="h-4 w-72 max-w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-60 max-w-full animate-pulse rounded bg-muted" />
        </div>
        <div className="h-10 w-full animate-pulse rounded-md bg-muted sm:w-40" />
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-24 animate-pulse rounded-full bg-muted"
            />
          ))}
        </div>
        <div className="h-9 w-full animate-pulse rounded-md bg-muted md:w-72" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsLoading;
