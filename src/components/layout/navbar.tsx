"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoonStar, PaintRoller, Palette, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mx-auto w-full max-w-3xl px-2 py-6">
      <nav className="flex items-center justify-between">
        <Link
          className="font-semibold text-primary/80 underline decoration-primary/40 decoration-dashed decoration-1 underline-offset-2 transition-colors duration-300 ease-in-out hover:text-primary hover:decoration-blue-500"
          href="/"
        >
          blankparticle
        </Link>
        <div className="flex items-center gap-2 p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="rounded-full">
                <Palette size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                <DropdownMenuRadioItem value="dark" className="gap-2">
                  <MoonStar size={14} /> dark
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="light" className="gap-2">
                  <SunDim size={14} /> light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system" className="gap-2">
                  <PaintRoller size={14} /> system
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
