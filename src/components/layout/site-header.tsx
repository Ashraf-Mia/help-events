"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Cancel01Icon,
  Login01Icon,
  Logout01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Logo } from "@/components/brand/logo";
import { NavLinks } from "@/components/layout/nav-links";
import { UserMenu } from "@/components/layout/user-menu";
import { Button } from "@/components/ui/button";
import { authClient, useSession } from "@/lib/auth-client";

const ACCOUNT_LINKS = [
  { label: "Create Event", href: "/create-event" },
  { label: "Manage Events", href: "/manage-events" },
  { label: "Joined Events", href: "/joined-events" },
];

export function SiteHeader() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = session?.user;

  async function handleSignOut() {
    await authClient.signOut();
    setMobileOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Logo />

        <NavLinks className="hidden gap-1 lg:flex" />

        <div className="flex items-center gap-2">
          {isPending ? (
            <span className="size-10 animate-pulse rounded-full bg-muted" />
          ) : user ? (
            <UserMenu user={user} />
          ) : (
            <Button
              size="lg"
              nativeButton={false}
              className="hidden h-10 rounded-full px-5 text-sm sm:inline-flex"
              render={<Link href="/login" />}
            >
              <HugeiconsIcon icon={Login01Icon} strokeWidth={1.8} />
              Login
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <HugeiconsIcon
              icon={mobileOpen ? Cancel01Icon : Menu01Icon}
              strokeWidth={1.8}
              className="size-5"
            />
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-border/60 bg-background lg:hidden"
        >
          <div className="shell flex flex-col gap-5 py-5">
            <NavLinks
              className="flex flex-col items-stretch gap-1"
              onNavigate={() => setMobileOpen(false)}
            />

            <div className="border-t border-border/60 pt-5">
              {user ? (
                <div className="flex flex-col gap-1">
                  <p className="px-3 pb-2 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Your account
                  </p>
                  <p className="px-3 pb-2 text-sm font-medium">{user.name}</p>
                  {ACCOUNT_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="mt-2 flex items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm text-destructive transition-colors hover:bg-destructive/5"
                  >
                    <HugeiconsIcon icon={Logout01Icon} strokeWidth={1.8} />
                    Logout
                  </button>
                </div>
              ) : (
                <Button
                  nativeButton={false}
                  className="h-11 w-full rounded-full text-sm"
                  render={<Link href="/login" />}
                  onClick={() => setMobileOpen(false)}
                >
                  <HugeiconsIcon icon={Login01Icon} strokeWidth={1.8} />
                  Login to Help Events
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
