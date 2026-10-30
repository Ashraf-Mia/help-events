"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CalendarAdd01Icon,
  CalendarCheckIn01Icon,
  CalendarLove01Icon,
  Logout01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

type UserMenuProps = {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function UserMenu({ user }: UserMenuProps) {
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="group relative rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`Open profile menu for ${user.name}`}
      >
        <span className="pointer-events-none absolute -top-10 right-0 z-50 hidden whitespace-nowrap rounded-full bg-foreground px-2.5 py-1 text-[11px] font-medium text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
          {user.name}
        </span>

        <Avatar className="size-10 shadow-sm ring-2 ring-background transition-transform group-hover:scale-105">
          {user.image ? <AvatarImage src={user.image} alt={user.name} /> : null}
          <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
            {getInitials(user.name) || "HE"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 p-1.5">
        <DropdownMenuLabel className="p-2">
          <span className="flex items-center gap-3">
            <Avatar className="size-9">
              {user.image ? <AvatarImage src={user.image} alt="" /> : null}
              <AvatarFallback className="bg-primary/10 text-[11px] font-semibold text-primary">
                {getInitials(user.name) || "HE"}
              </AvatarFallback>
            </Avatar>
            <span className="min-w-0">
              <span className="block truncate text-xs font-semibold text-foreground">
                {user.name}
              </span>
              <span className="block truncate text-[11px] font-normal text-muted-foreground">
                {user.email}
              </span>
            </span>
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="gap-2.5 py-2 text-xs"
          render={<Link href="/create-event" />}
        >
          <HugeiconsIcon icon={CalendarAdd01Icon} strokeWidth={1.8} />
          Create Event
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2.5 py-2 text-xs"
          render={<Link href="/manage-events" />}
        >
          <HugeiconsIcon icon={CalendarCheckIn01Icon} strokeWidth={1.8} />
          Manage Events
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2.5 py-2 text-xs"
          render={<Link href="/joined-events" />}
        >
          <HugeiconsIcon icon={CalendarLove01Icon} strokeWidth={1.8} />
          Joined Events
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          className="gap-2.5 py-2 text-xs"
          onClick={handleSignOut}
        >
          <HugeiconsIcon icon={Logout01Icon} strokeWidth={1.8} />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
