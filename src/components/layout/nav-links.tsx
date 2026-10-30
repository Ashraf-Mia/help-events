import Link from "next/link";
import { cn } from "cn";

export const NAV_LINKS = [
  { label: "Upcoming Events", href: "/#upcoming-events" },
  { label: "How it works", href: "/#features" },
  { label: "Stories", href: "/#gallery" },
];

type NavLinksProps = {
  className?: string;
  onNavigate?: () => void;
};

export function NavLinks({ className, onNavigate }: NavLinksProps) {
  return (
    <nav aria-label="Main navigation" className={cn("items-center", className)}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
