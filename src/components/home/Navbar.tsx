"use client";
// import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

// import { cn } from "cn";
import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";

import HelpEventsLogo from "../shared/HelpEventsLogo";
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarCheck, CalendarCog, CalendarPlus, LogOut } from "lucide-react";

export default function Navbar() {
  const handleSignOut = () => {
    signOut();
    redirect("/signIn");
  };

  const { data: session } = useSession();
  const user = session?.user;
  // console.log(user);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0E3B43]">
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <HelpEventsLogo />
        </Link>

        <Link
          href="/upcoming-events"
          className="justify-self-center text-sm font-medium text-white sm:text-base"
        >
          Upcoming Events
        </Link>

        <div className="flex items-center justify-end gap-4 sm:gap-6">
          {user ? (
            <>
              <Popover>
                <PopoverTrigger
                  render={
                    <Avatar>
                      <AvatarImage
                        referrerPolicy="no-referrer"
                        src={user?.image as string}
                      />
                      <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  }
                />
                <PopoverContent
                  align="end"
                  className="w-64 overflow-hidden p-0"
                >
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
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-[#0E3B43]/10 hover:text-[#0E3B43]"
                    >
                      <CalendarPlus className="size-4" />
                      Create Event
                    </Link>
                    <Link
                      href="/manageEvents"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-[#0E3B43]/10 hover:text-[#0E3B43]"
                    >
                      <CalendarCog className="size-4" />
                      Manage Events
                    </Link>
                    <Link
                      href="/joinedEvents"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-[#0E3B43]/10 hover:text-[#0E3B43]"
                    >
                      <CalendarCheck className="size-4" />
                      Joined Events
                    </Link>
                  </div>

                  <div className="border-t p-2">
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
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
            </>
          ) : (
            <>
              {" "}
              <Link
                href="/signIn"
                className="hidden rounded-full bg-[#FFC94A] px-6 py-2 text-sm font-semibold text-[#0E3B43] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffd36d] hover:shadow-md active:translate-y-0 sm:inline-flex"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
