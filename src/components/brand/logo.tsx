"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "cn";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  showName?: boolean;
};

export function Logo({ className, inverted = false, showName = true }: LogoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Link
      href="/"
      aria-label="Help Events home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-2xl shadow-sm ring-1 transition-transform duration-300 group-hover:-rotate-3",
          inverted
            ? "bg-white/10 ring-white/15"
            : "bg-primary ring-primary/10",
        )}
      >
        {imageFailed ? (
          <span
            className={cn(
              "font-heading text-sm font-bold tracking-tight",
              inverted ? "text-brand-lime" : "text-primary-foreground",
            )}
          >
            HE
          </span>
        ) : (
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            onError={() => setImageFailed(true)}
            className="size-full object-contain p-1"
          />
        )}
      </span>

      {showName ? (
        <span
          className={cn(
            "font-heading text-lg font-semibold tracking-[-0.04em]",
            inverted ? "text-white" : "text-foreground",
          )}
        >
          Help{" "}
          <span className={inverted ? "text-brand-lime" : "text-primary"}>
            Events
          </span>
        </span>
      ) : null}
    </Link>
  );
}
