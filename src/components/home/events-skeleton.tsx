export function EventsSkeleton() {
  return (
    <section
      id="upcoming-events"
      aria-busy="true"
      aria-label="Loading upcoming events"
      className="scroll-mt-24 bg-brand-cream/45 py-20 sm:py-24 lg:py-28"
    >
      <div className="shell">
        <div className="max-w-2xl">
          <span className="h-6 w-32 animate-pulse rounded-full bg-primary/10" />
          <div className="mt-4 h-11 w-80 max-w-full animate-pulse rounded-xl bg-primary/10" />
          <div className="mt-4 h-4 w-full max-w-xl animate-pulse rounded-full bg-primary/10" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-card"
            >
              <div className="aspect-[4/3] animate-pulse bg-muted" />
              <div className="space-y-4 p-6">
                <div className="h-5 w-3/4 animate-pulse rounded-full bg-muted" />
                <div className="h-3 w-full animate-pulse rounded-full bg-muted" />
                <div className="h-3 w-5/6 animate-pulse rounded-full bg-muted" />
                <div className="pt-4">
                  <div className="h-2 w-full animate-pulse rounded-full bg-muted" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
