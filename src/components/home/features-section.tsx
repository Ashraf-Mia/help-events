import {
  CalendarHeartIcon,
  ChartIncreaseIcon,
  Search01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SectionHeading } from "@/components/home/section-heading";
import { cn } from "cn";

const FEATURES = [
  {
    number: "01",
    title: "Discover what matters",
    description:
      "Browse nearby causes by date, category, and the time you actually have. No endless scrolling, just good reasons to get out the door.",
    icon: Search01Icon,
  },
  {
    number: "02",
    title: "Host in minutes",
    description:
      "Create a public or private event, add the details, and invite the right people with one simple link.",
    icon: CalendarHeartIcon,
  },
  {
    number: "03",
    title: "Keep everyone close",
    description:
      "Manage sign-ups, updates, and your volunteer crew from one calm dashboard built for real community work.",
    icon: UserGroupIcon,
  },
  {
    number: "04",
    title: "See your impact",
    description:
      "Watch small mornings add up. Track the causes you care about and the difference your neighbourhood is making together.",
    icon: ChartIncreaseIcon,
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-24 bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Why Help Events"
          title="Built for people who care."
          description="Everything you need to turn good intentions into a good Saturday morning — without the paperwork."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isFeatured = index === 0;

            return (
              <article
                key={feature.title}
                className={cn(
                  "group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5",
                  isFeatured
                    ? "border-brand-ink bg-brand-ink text-white"
                    : "border-border/70 bg-card text-foreground hover:border-primary/30",
                )}
              >
                {isFeatured ? (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-14 -bottom-14 size-48 rounded-full bg-primary/60 blur-2xl"
                  />
                ) : null}

                <div className="relative flex items-start justify-between">
                  <span
                    className={cn(
                      "grid size-11 place-items-center rounded-2xl",
                      isFeatured
                        ? "bg-brand-lime text-brand-ink"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    <HugeiconsIcon icon={Icon} strokeWidth={1.7} size={22} />
                  </span>
                  <span
                    className={cn(
                      "font-heading text-xs font-semibold tracking-[0.18em]",
                      isFeatured ? "text-white/35" : "text-muted-foreground/60",
                    )}
                  >
                    {feature.number}
                  </span>
                </div>

                <div className="relative mt-8">
                  <h3 className="font-heading text-lg font-semibold tracking-[-0.03em]">
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-6",
                      isFeatured ? "text-white/60" : "text-muted-foreground",
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
