import Link from "next/link";
import {
  Facebook01Icon,
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
  MapPinIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Logo } from "@/components/brand/logo";

const FOOTER_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "Upcoming events", href: "/#upcoming-events" },
      { label: "How it works", href: "/#features" },
      { label: "Community stories", href: "/#gallery" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { label: "Create an event", href: "/create-event" },
      { label: "Manage events", href: "/manage-events" },
      { label: "Joined events", href: "/joined-events" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact us", href: "mailto:hello@helpevents.org" },
      { label: "Volunteer guide", href: "/#features" },
      { label: "Privacy", href: "/#newsletter" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook01Icon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin01Icon },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 size-96 rounded-full bg-brand-lime/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 left-1/4 size-96 rounded-full bg-primary/40 blur-3xl"
      />

      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo inverted />
            <p className="mt-5 text-sm leading-7 text-white/60">
              A neighbourhood-powered platform for the people who show up.
              Find a cause, bring a friend, and leave your corner of the world
              a little better than you found it.
            </p>

            <div className="mt-6 space-y-2.5 text-sm text-white/60">
              <a
                href="mailto:hello@helpevents.org"
                className="flex items-center gap-2.5 transition-colors hover:text-brand-lime"
              >
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={1.7} />
                hello@helpevents.org
              </a>
              <p className="flex items-center gap-2.5">
                <HugeiconsIcon icon={MapPinIcon} strokeWidth={1.7} />
                Riverside Community Hub, Your City
              </p>
            </div>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="text-[11px] font-semibold tracking-[0.18em] text-brand-lime uppercase">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © 2026 Help Events. Made for good neighbours.
          </p>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid size-9 place-items-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-brand-lime/40 hover:bg-brand-lime hover:text-brand-ink"
              >
                <HugeiconsIcon icon={social.icon} strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
