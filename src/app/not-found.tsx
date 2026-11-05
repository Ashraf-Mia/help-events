"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="text-8xl font-extrabold tracking-tight text-[#0E3B43] dark:text-white sm:text-9xl">
        4<span className="text-[#FFC94A]">0</span>4
      </h1>

      <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Page not found</h2>
      <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
        Sorry, we couldn&apos;t find what you were looking for. The page may
        have been moved, or the event may no longer exist.
      </p>

      <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <Link
          href="/"
          className={cn(
            buttonVariants(),
            "h-11 bg-[#0E3B43] px-6 text-white hover:bg-[#206470]",
          )}
        >
          <Home className="size-4" />
          Go Home
        </Link>

        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          className="h-11 px-6"
        >
          <ArrowLeft className="size-4" />
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
