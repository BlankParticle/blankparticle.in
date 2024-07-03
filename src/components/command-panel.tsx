"use client";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { CommandIcon, Menu, Monitor, MoonStar, StickyNote, Sun } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { isMac } from "~/lib/utils";

const pages: Record<`/${string}`, string> = {
  "/": "home",
  "/about": "about me",
  "/blog": "my blog",
  "/projects": "my projects",
  "/links": "links related to me",
  "/notes": "my notes",
  "/snippets": "snippets",
  "/setup": "my setup",
  "/bookmarks": "bookmarks",
  "/guestbook": "guestbook",
  "/anime": "anime",
  "/music": "music",
};

export function CommandPanel() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();
  const runCommand = useCallback((cmd: () => void) => () => (setOpen(false), cmd()), []);

  // open command panel with ctrl+k or cmd+k
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.code === "KeyK" && (isMac() ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon-sm"
            variant="ghost"
            className="rounded-full"
            onClick={() => setOpen(true)}
          >
            <CommandIcon size={16} className="max-sm:hidden" />
            <Menu size={16} className="sm:hidden" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <kbd suppressHydrationWarning>
            {isMac() ? <span className="text-[14px]">⌘</span> : "Ctrl"}
          </kbd>
          {" + "}
          <kbd>K</kbd>
        </TooltipContent>
      </Tooltip>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="search..." />
        <CommandList>
          <CommandEmpty>no page or command found</CommandEmpty>
          <CommandGroup heading="pages">
            {Object.entries(pages).map(([href, title]) => (
              <CommandItem
                key={href}
                className="gap-2"
                value={href}
                keywords={[title]}
                onSelect={runCommand(() => router.push(href))}
              >
                <StickyNote size={14} /> {title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="theme">
            <CommandItem
              className="gap-2"
              value="toggle-theme-dark"
              keywords={["toggle theme to dark"]}
              onSelect={runCommand(() => setTheme("dark"))}
            >
              <MoonStar size={12} /> toggle theme to dark
            </CommandItem>
            <CommandItem
              className="gap-2"
              value="toggle-theme-light"
              keywords={["toggle theme to light"]}
              onSelect={runCommand(() => setTheme("light"))}
            >
              <Sun size={12} /> toggle theme to light
            </CommandItem>
            <CommandItem
              className="gap-2"
              value="toggle-theme-system"
              keywords={["toggle theme to system"]}
              onSelect={runCommand(() => setTheme("system"))}
            >
              <Monitor size={12} /> toggle theme to system
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
