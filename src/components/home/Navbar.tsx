"use client";
// import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

// import { cn } from "cn";
import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import HelpEventsLogo from "../shared/HelpEventsLogo";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

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
        {/* Left: logo */}
        <Link href="/">
          <HelpEventsLogo />
        </Link>

        {/* Center: link */}
        <Link
          href="/upcoming-events"
          className="justify-self-center text-sm font-medium text-white sm:text-base"
        >
          Upcoming Events
        </Link>

        {/* Right: login button */}
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
                <PopoverContent align="start">
                  <PopoverHeader>
                    <PopoverTitle>{user?.name}</PopoverTitle>
                    <PopoverDescription>
                      <p>{user?.email}</p>
                      <Link href="/profile" className="hover:text-[#00A5CC]">
                        Your profile
                      </Link>{" "}
                      <br />
                      <Button onClick={handleSignOut} variant={"destructive"}>
                        Sign Out
                      </Button>
                    </PopoverDescription>
                  </PopoverHeader>
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
