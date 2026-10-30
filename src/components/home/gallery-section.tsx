import Image from "next/image";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SectionHeading } from "@/components/home/section-heading";

const GALLERY_ITEMS = [
  {
    src: "/images/gallery-hands.jpg",
    alt: "A group of smiling volunteers standing together outdoors",
    title: "Many hands, one garden",
    location: "Riverside",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery-group.jpg",
    alt: "A smiling group of community volunteers",
    title: "The Saturday crew",
    location: "Eastside",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/images/gallery-friends.jpg",
    alt: "Friends laughing together outdoors",
    title: "Neighbours becoming friends",
    location: "Maplewood",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-hands-up.jpg",
    alt: "Hands knitting a red scarf at a community craft session",
    title: "Crafting comfort, one stitch at a time",
    location: "Willow Creek",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-team.jpg",
    alt: "A volunteer team working together",
    title: "A team that shows up",
    location: "Northgate",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/images/gallery-community.jpg",
    alt: "A diverse community gathering outdoors",
    title: "Community, in full colour",
    location: "Southside",
    className: "col-span-2 row-span-1",
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Moments that stay"
          title="The good stuff, in pictures."
          description="A few frames from the mornings, afternoons, and happy accidents that happen when people decide to show up."
          action={
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-xs font-semibold transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              Follow the moments
              <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={1.8} />
            </a>
          }
        />

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] lg:grid-cols-4">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.title}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-muted ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute right-4 bottom-4 left-4 translate-y-1 text-white transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-brand-lime uppercase">
                  {item.location}
                </p>
                <p className="mt-1 font-heading text-sm font-semibold tracking-[-0.02em] sm:text-base">
                  {item.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
