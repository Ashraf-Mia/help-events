const EventDetailsLoading = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 h-4 w-32 animate-pulse rounded bg-muted" />

      <div className="h-56 w-full animate-pulse rounded-2xl bg-muted sm:h-80 lg:h-96" />

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="h-6 w-24 animate-pulse rounded-full bg-muted" />

          <div className="h-8 w-3/4 animate-pulse rounded bg-muted sm:h-9" />

          <div className="!mt-8 h-6 w-48 animate-pulse rounded bg-muted" />
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
          </div>

          <div className="!mt-8 h-6 w-44 animate-pulse rounded bg-muted" />
          <div className="space-y-2">
            <div className="h-4 w-11/12 animate-pulse rounded bg-muted" />
            <div className="h-4 w-4/5 animate-pulse rounded bg-muted" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
          </div>
        </div>

        <div className="h-fit space-y-5 rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="size-5 animate-pulse rounded bg-muted" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-16 animate-pulse rounded bg-muted" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              </div>
            </div>
          ))}

          <div className="flex items-center gap-3">
            <div className="size-10 animate-pulse rounded-full bg-muted" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-16 animate-pulse rounded bg-muted" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="h-11 w-full animate-pulse rounded-md bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsLoading;
