import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarCheck, HeartHandshake, MapPin, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: CalendarCheck, value: "120+", label: "Events hosted" },
  { icon: Users, value: "2,400+", label: "Volunteers" },
  { icon: MapPin, value: "15", label: "Areas covered" },
  { icon: HeartHandshake, value: "9,800+", label: "People helped" },
];

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0E3B43] text-white">
      <div className="absolute -right-32 -top-32 size-96 rounded-full bg-[#2FA37A]/25" />
      <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-[#FFC94A]/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium sm:text-sm">
            Community-driven social service platform
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Extend a hand,
            <span className="block text-[#FFC94A]">change a street.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base text-white/80 sm:text-lg">
            Find winter clothes drives, food camps and cleanup events near you.
            Join in, or start your own and bring your neighborhood together.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/upcoming-events"
              className={cn(
                buttonVariants(),
                "h-12 bg-[#FFC94A] px-8 text-base font-semibold text-[#0E3B43] hover:bg-[#ffd36d]",
              )}
            >
              Explore Events
            </Link>
            <Link
              href="/createEvent"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 border-white/40 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white",
              )}
            >
              Create an Event
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
            >
              <s.icon className="size-6 text-[#FFC94A]" />
              <p className="mt-3 text-2xl font-bold sm:text-3xl">{s.value}</p>
              <p className="text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
