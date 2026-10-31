import Link from "next/link";
import HelpEventsLogo from "../shared/HelpEventsLogo";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0E3B43] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <HelpEventsLogo />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            A community platform to create, join and track social service events
            in your neighborhood.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#FFC94A]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/upcoming-events"
                className="transition-colors hover:text-white"
              >
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link
                href="/createEvent"
                className="transition-colors hover:text-white"
              >
                Create Event
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#FFC94A]">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-[#FFC94A]" />
              Dhaka, Bangladesh
            </li>
            <li>
              <a
                href="tel:+8801709165682"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-[#FFC94A]" />
                01709-165682
              </a>
            </li>
            <li>
              <a
                href="mailto:ashrafali27483@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-[#FFC94A]" />
                ashrafali27483@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        © 2026 Help Events. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
