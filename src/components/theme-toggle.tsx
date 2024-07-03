"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { MoonStar, Monitor, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { isMac } from "~/lib/utils";
import { useEffect } from "react";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  // toggle theme to dark/light with option+t or alt+t
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.code === "KeyT" && e.altKey) {
        e.preventDefault();
        setTheme(() => (resolvedTheme === "dark" ? "light" : "dark"));
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [resolvedTheme, setTheme]);

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="relative overflow-hidden rounded-full"
            >
              <MoonStar size={16} className="translate-y-6 dark:translate-y-0" />
              <Sun size={16} className="absolute translate-y-0 dark:translate-y-6" />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <kbd suppressHydrationWarning>
            {isMac() ? <span className="text-[14px]">⌥</span> : "Alt"}
          </kbd>
          {" + "}
          <kbd>T</kbd>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="dark" className="gap-2">
            <MoonStar size={14} /> dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light" className="gap-2">
            <Sun size={14} /> light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system" className="gap-2">
            <Monitor size={14} /> system
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
