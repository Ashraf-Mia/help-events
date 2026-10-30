import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Calendar03Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const HERO_AVATARS = [
  { src: "/images/gallery-group.jpg", name: "Amara" },
  { src: "/images/gallery-friends.jpg", name: "Jonah" },
  { src: "/images/gallery-team.jpg", name: "Mina" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-brand-lime/20 blur-3xl"
      />

      <div className="shell relative grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div className="max-w-2xl animate-rise">
          <span className="eyebrow">
            <span className="size-1.5 animate-pulse rounded-full bg-brand-coral" />
            Community-powered since 2020
          </span>

          <h1 className="mt-6 font-heading text-[3rem] leading-[0.94] font-semibold tracking-[-0.065em] text-balance text-foreground sm:text-6xl lg:text-[5.1rem]">
            Small actions.
            <br />
            <span className="text-primary">Lasting change.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Find local causes, meet neighbours who care, and turn a free
            morning into something that matters. Help Events makes showing up
            the easy part.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 rounded-full px-6 text-sm shadow-lg shadow-primary/15"
              render={<Link href="/#upcoming-events" />}
            >
              Find your next cause
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.8} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              className="h-12 rounded-full border-border bg-background/70 px-6 text-sm backdrop-blur"
              render={<Link href="/create-event" />}
            >
              Host an event
              <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={1.8} />
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <AvatarGroup>
              {HERO_AVATARS.map((avatar) => (
                <Avatar key={avatar.name} className="size-9">
                  <AvatarImage src={avatar.src} alt="" />
                  <AvatarFallback>{avatar.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
            <p className="text-xs leading-5 text-muted-foreground">
              <span className="block font-semibold text-foreground">
                1,200+ neighbours
              </span>
              already showing up for their city
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] animate-rise animate-rise-delay-1 lg:max-w-none">
          <div
            aria-hidden
            className="absolute -top-8 -right-8 size-52 rounded-full bg-brand-lime/40 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-10 -left-10 size-48 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-muted shadow-2xl shadow-primary/15">
            <Image
              src="/images/hero-volunteers.jpg"
              alt="A volunteer in a bright event shirt at a community gathering"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/5 to-transparent" />

            <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-brand-ink shadow-sm backdrop-blur">
              <HugeiconsIcon icon={Calendar03Icon} strokeWidth={1.8} />
              This week
            </span>

            <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md sm:left-44">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-white/60 uppercase">
                Next up
              </p>
              <p className="mt-1 font-heading text-lg font-semibold tracking-[-0.03em]">
                Riverside Garden Reset
              </p>
              <p className="mt-2 flex items-center gap-2 text-xs text-white/70">
                <HugeiconsIcon icon={UserGroupIcon} strokeWidth={1.7} />
                28 neighbours going
              </p>
            </div>
          </div>

          <div className="absolute -bottom-9 -left-5 hidden w-40 overflow-hidden rounded-[1.75rem] border-4 border-background shadow-xl sm:block lg:-left-8 lg:w-44">
            <div className="relative aspect-square">
              <Image
                src="/images/hero-garden.jpg"
                alt="Hands tending plants in a community garden"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -top-3 -right-3 rotate-3 rounded-2xl bg-brand-lime px-4 py-3 text-brand-ink shadow-xl sm:-right-5">
            <p className="font-heading text-3xl font-semibold tracking-[-0.05em]">
              3.2k
            </p>
            <p className="text-[10px] font-semibold tracking-[0.16em] uppercase">
              hours given
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
