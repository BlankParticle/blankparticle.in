import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { CommandPanel } from "../command-panel";
import type { PropsWithChildren } from "react";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="w-full border-b">
      <header className="mx-auto flex max-w-screen-lg items-center justify-between px-2 py-5">
        <div className="flex items-center gap-5">
          <Link
            className="font-mono group font-bold opacity-90 hover:opacity-100"
            href="/"
            title="Go to Homepage"
          >
            <span className="text-fuchsia-500 underline decoration-primary/20 decoration-dashed decoration-1 underline-offset-2 transition-[text-decoration-color] duration-500 ease-in-out group-hover:decoration-primary/60 dark:text-fuchsia-300">
              blankparticle
            </span>
            <span className="text-orange-500 dark:text-orange-300">()</span>
            <span className="text-gray-500 dark:text-gray-300">;</span>
          </Link>
          <DesktopNavbar />
        </div>
        <div className="flex items-center gap-2 p-2">
          <CommandPanel />
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}

function DesktopNavbar() {
  return (
    <NavigationMenu className="max-sm:hidden">
      <NavigationMenuList>
        <NavLink href="/about">about</NavLink>
        <NavLink href="/blog">blog</NavLink>
        <NavLink href="/projects">projects</NavLink>
        <MoreLinks />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavLink({
  children,
  href,
}: PropsWithChildren<{ href: string; children: React.ReactNode }>) {
  return (
    <NavigationMenuItem>
      <Button variant="ghost" className="font-medium" asChild>
        <NavigationMenuLink asChild>
          <Link href={href}>{children}</Link>
        </NavigationMenuLink>
      </Button>
    </NavigationMenuItem>
  );
}

const moreLinks = [
  // href, title, description
  ["/notes", "notes", "my notes about various stuff that people might useful"],
  ["/snippets", "snippets", "useful code snippets i have collected over years"],
  ["/links", "links", "a page dedicated to every thing linked with me"],
  ["/setup", "setup", "info about my setup and workflow"],
  ["/bookmarks", "bookmarks", "collection of useful sites and resources i have accumulated"],
  ["/guestbook", "guestbook", "digital register where everyone can leave a message for me"],
  ["/anime", "anime", "everything about anime and related stuff that i like"],
  ["/music", "music", "my music taste and what i listen to"],
];

function MoreLinks() {
  return (
    <NavigationMenuItem>
      <Button variant="ghost" className="font-medium" asChild>
        <NavigationMenuTrigger>more</NavigationMenuTrigger>
      </Button>
      <NavigationMenuContent>
        <ul className="grid w-max grid-cols-2 gap-3 p-3">
          {moreLinks.map(([href, title, description]) => (
            <li key={href}>
              <NavigationMenuLink asChild>
                <Link
                  href={href}
                  className={
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  }
                >
                  <div className="text-sm font-bold leading-none">{title}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
