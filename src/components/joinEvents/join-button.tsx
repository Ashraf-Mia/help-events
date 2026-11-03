"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";
import { IEvent } from "@/lib/events";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  event: IEvent;
  isPast: boolean;
};

const JoinButton = ({ event, isPast }: Props) => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [isJoined, setIsJoined] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const email = user?.email;

  const checking = isPending || (!!email && isJoined === null);

  useEffect(() => {
    if (!email) return;

    const checkJoined = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/is-joined?eventId=${event._id}&userEmail=${encodeURIComponent(email)}`,
      );
      const data = await res.json();
      setIsJoined(data.isJoined);
    };

    checkJoined();
  }, [email, event._id]);

  const handleClick = async () => {
    if (!user) {
      toast.add({
        type: "Warning",
        title: "Sign in required",
        description: "Please sign in to join this event.",
      });
      router.push("/signIn");
      return;
    }

    if (user.email === event.email) {
      toast.add({
        type: "Warning",
        title: "Not allowed",
        description: "You cannot join an event you created.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/join-event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          ...event,
          userEmail: user.email,
          userName: user.name,
          userImage: user.image,
        }),
      });
      const result = await res.json();

      if (!res.ok) {
        toast.add({
          type: "Warning",
          title: "Could not join",
          description: result.msg || "Something went wrong.",
        });
        return;
      }

      if (result.insertedId) {
        setIsJoined(true);
        toast.add({
          type: "Success",
          title: "Joined!",
          description: "You have joined this event.",
        });
      } else if (result.deletedCount) {
        setIsJoined(false);
        toast.add({
          type: "Success",
          title: "Left event",
          description: "You are no longer part of this event.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (isPast) {
    return (
      <Button disabled className="h-11 w-full">
        Event Ended
      </Button>
    );
  }

  return (
    <div className="space-y-3">
      {isJoined === true && (
        <p className="flex items-center justify-center gap-2 text-sm font-medium text-[#2FA37A]">
          <Check className="size-4" />
          You have joined this event
        </p>
      )}

      <Button
        onClick={handleClick}
        disabled={checking || loading}
        variant={isJoined === true ? "outline" : "default"}
        className={
          isJoined === true
            ? "h-11 w-full border-red-300 text-red-600 hover:bg-red-50 hover:text-red-600"
            : "h-11 w-full bg-[#0E3B43] text-white hover:bg-[#206470]"
        }
      >
        {checking
          ? "Loading..."
          : loading
            ? "Please wait..."
            : isJoined === true
              ? "Leave Event"
              : "Join Event"}
      </Button>
    </div>
  );
};

export default JoinButton;
