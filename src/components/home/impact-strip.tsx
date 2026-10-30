const IMPACT_STATS = [
  { value: "128", label: "events hosted" },
  { value: "2.4k", label: "volunteers" },
  { value: "38", label: "neighbourhoods" },
  { value: "96%", label: "come back" },
];

export function ImpactStrip() {
  return (
    <section
      aria-label="Our community impact"
      className="border-y border-border/60 bg-brand-cream/70"
    >
      <div className="shell grid grid-cols-2 divide-x divide-border/60 lg:grid-cols-4">
        {IMPACT_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={
              index > 1
                ? "border-t border-border/60 px-4 py-6 lg:border-t-0"
                : "px-4 py-6"
            }
          >
            <p className="font-heading text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
