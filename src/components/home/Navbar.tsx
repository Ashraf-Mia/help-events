"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut, useSession } from "@/lib/auth-client";
import {
  CalendarCheck,
  CalendarCog,
  CalendarPlus,
  LogOut,
  User,
} from "lucide-react";
import HelpEventsLogo from "../shared/HelpEventsLogo";
import DarkAndLightModeButton from "../dark-lightButton";

export default function Navbar() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/signIn");
  };

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0E3B43]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:grid sm:grid-cols-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <HelpEventsLogo />
        </Link>

        <Link
          href="/upcoming-events"
          className="whitespace-nowrap text-xs font-medium text-white sm:justify-self-center sm:text-base"
        >
          Upcoming Events
        </Link>

        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-6">
          <DarkAndLightModeButton />
          {user ? (
            <Popover>
              <PopoverTrigger
                render={
                  <button
                    type="button"
                    className="rounded-full outline-none cursor-pointer"
                  >
                    <Avatar>
                      <AvatarImage
                        referrerPolicy="no-referrer"
                        src={user?.image as string}
                      />
                      <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </button>
                }
              />
              <PopoverContent align="end" className="w-64 overflow-hidden p-0">
                <div className="bg-[#0E3B43] px-4 py-3">
                  <PopoverTitle className="truncate text-sm font-semibold text-white">
                    {user?.name}
                  </PopoverTitle>
                  <p className="truncate text-xs text-white/70">
                    {user?.email}
                  </p>
                </div>

                <div className="flex flex-col gap-1 p-2">
                  <Link
                    href="/createEvent"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#0E3B43]/10 hover:text-[#0E3B43] dark:hover:text-[#FFC94A]"
                  >
                    <CalendarPlus className="size-4" />
                    Create Event
                  </Link>
                  <Link
                    href="/manageEvents"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#0E3B43]/10 hover:text-[#0E3B43] dark:hover:text-[#FFC94A]"
                  >
                    <CalendarCog className="size-4" />
                    Manage Events
                  </Link>
                  <Link
                    href="/joinedEvents"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#0E3B43]/10 hover:text-[#0E3B43] dark:hover:text-[#FFC94A]"
                  >
                    <CalendarCheck className="size-4" />
                    Joined Events
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-2  text-sm font-medium text-foreground transition-colors hover:bg-[#0E3B43]/10 hover:text-[#0E3B43] dark:hover:text-[#FFC94A]"
                  >
                    <User className="size-4" />
                    Profile
                  </Link>
                </div>

                <div className="border-t p-2">
                  <button
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-950/30"
                  >
                    <LogOut className="size-4" />
                    Sign Out
                  </button>
                </div>
              </PopoverContent>

              <button
                onClick={handleSignOut}
                className="hidden rounded-full bg-[#FFC94A] px-6 py-2 text-sm font-semibold text-[#0E3B43] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffd36d] hover:shadow-md active:translate-y-0 sm:inline-flex"
              >
                Sign Out
              </button>
            </Popover>
          ) : (
            <Link
              href="/signIn"
              className="inline-flex rounded-full bg-[#FFC94A] px-4 py-1.5 text-xs font-semibold text-[#0E3B43] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffd36d] hover:shadow-md active:translate-y-0 sm:px-6 sm:py-2 sm:text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
