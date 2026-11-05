const EventCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="h-48 w-full animate-pulse bg-muted" />

      <div className="space-y-3 p-5">
        <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />

        <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />

        <div className="h-4 w-full animate-pulse rounded bg-muted" />

        <div className="!mt-5 h-10 w-full animate-pulse rounded-md bg-muted" />
      </div>
    </div>
  );
};

export default EventCardSkeleton;
