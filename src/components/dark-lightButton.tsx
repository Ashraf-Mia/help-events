"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkAndLightModeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-white hover:bg-white/10 hover:text-white cursor-pointer"
    >
      <Moon className="size-5 dark:hidden" />

      <Sun className="hidden size-5 dark:block" />
    </Button>
  );
};

export default DarkAndLightModeButton;
