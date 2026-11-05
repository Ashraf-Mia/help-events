import EventCardSkeleton from "@/components/shared/event-card-skeleton";

const MyEventsLoading = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 space-y-3 border-b pb-6">
        <div className="h-8 w-56 animate-pulse rounded bg-muted sm:h-9" />
        <div className="h-4 w-72 max-w-full animate-pulse rounded bg-muted" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default MyEventsLoading;
