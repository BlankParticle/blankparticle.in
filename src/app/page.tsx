import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";
import { CopyButton } from "~/components/misc/copy-button";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { differenceInYears } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const creations = [
  {
    title: "tailwind-plugin-realtime-colors",
    description:
      "🧩 A Tailwind CSS plugin that allows you to load colors from URL of Realtime Colors",
    url: "https://github.com/BlankParticle/tailwind-plugin-realtime-colors",
  },
  {
    title: "get-palette",
    description:
      "🎨 A simple JS library to get the dominant color or color palette of an image just by its URL.",
    url: "https://github.com/BlankParticle/get-palette",
  },
  {
    title: "gnome-bluetooth-quick-connect",
    description: "🔌 Allow to connect bluetooth paired devices from gnome control panel.",
    url: "https://github.com/Extensions-Valhalla/gnome-bluetooth-quick-connect",
  },
];

const workingOn = [
  {
    title: "UnInbox",
    description:
      "Modern email for teams and professionals. A replacement for outdated email technology and tools. Alt to hey.com, front.com, missiveapp.com",
    url: "https://github.com/un/inbox",
  },
  {
    title: "UnWebhook",
    description:
      "A simple tool for working with webhooks. Supports forwarding messages to one or multiple destinations, and replaying messages",
    url: "https://github.com/un/webhook-proxy",
  },
];

const writings = [
  {
    title: "Creating a tailwind plugin shouldn't be that hard, right?",
    description: "A guide to create a Tailwind CSS plugin",
    url: "https://blog.blankparticle.in/creating-a-tailwind-plugin-shouldnt-be-that-hard",
  },
  {
    title: "Redirecting Your Domains using Cloudflare",
    description: "Redirect your domains using Cloudflare",
    url: "https://blog.blankparticle.in/redirecting-your-domains-using-cloudflare",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-2">
      <div className="flex flex-col gap-12 py-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-medium">Rahul Mishra</h1>
          <h2 className="text-sm text-muted-foreground">
            {differenceInYears(new Date(), new Date("9 June 2005"))} yo, student, software developer
          </h2>
          <div className="text-sm text-muted-foreground">
            working remotely at
            <Badge variant="secondary" className="mx-1 px-1">
              @
              <Link
                href="https://uninbox.com/?ref=blankparticle"
                className="peer underline decoration-primary/40 transition-colors duration-300 ease-in-out hover:decoration-foreground"
                target="_blank"
              >
                UnInbox
              </Link>
              <ArrowUpRight
                size={12}
                className="w-0 transition-all duration-500 ease-in-out peer-hover:w-[12px]"
              />
            </Badge>
            from India
          </div>
        </div>
        <div className="flex flex-col gap-2 text-balance text-sm text-muted-foreground">
          <div>hello, i am Rahul Mishra.</div>
          <div>
            for some reason i don&apos;t remember, i go by
            <Badge variant="secondary" className="mx-[2px] px-1">
              @
              <Link
                href="/gh"
                className="underline decoration-primary/40 transition-colors duration-300 ease-in-out hover:decoration-primary"
              >
                blankparticle
              </Link>
            </Badge>
            on internet. i am currently a Second Year student studying computer science. i am self
            taught and work mostly with web apps and backends.
          </div>
          <div>
            i am a former arch linux user, but currently I have a macbook pro, so macos it is.
          </div>
          <div>
            besides all of that, i enjoy watching{" "}
            <Link
              href="/anime"
              className="decoration-text/40 underline transition-colors duration-300 ease-in-out hover:text-foreground hover:decoration-primary"
            >
              anime
            </Link>{" "}
            and casually listening to{" "}
            <Link
              href="/music"
              className="decoration-text/40 underline transition-colors duration-300 ease-in-out hover:text-foreground hover:decoration-primary"
            >
              music
            </Link>
            .
          </div>
          <div>
            reach out to me on{" "}
            <Link
              href="/discord"
              className="decoration-text/40 underline transition-colors duration-300 ease-in-out hover:text-foreground hover:decoration-primary"
            >
              discord
            </Link>{" "}
            or at{" "}
            <Tooltip>
              <TooltipTrigger>
                <span className="decoration-text/40 underline transition-colors duration-300 ease-in-out hover:text-foreground hover:decoration-primary">
                  hello@blankparticle.in
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">
                <Button asChild variant="ghost" size="icon-sm">
                  <Link href="mailto:hello@blankparticle.in">
                    <ArrowUpRight size={12} />
                  </Link>
                </Button>
                <CopyButton
                  text="hello@blankparticle.in"
                  variant="ghost"
                  size="icon-sm"
                  iconSize={12}
                />
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <svg
          width="113"
          height="7"
          viewBox="0 0 113 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6.23519L7.16667 3.6176C11.1076 1.94477 15.5591 1.94477 19.5 3.61759V3.61759C23.4409 5.29042 27.8924 5.29042 31.8333 3.61759V3.61759C35.7743 1.94477 40.2257 1.94477 44.1667 3.61759V3.61759C48.1076 5.29042 52.5591 5.29042 56.5 3.61759V3.61759C60.4409 1.94477 64.8924 1.94477 68.8333 3.61759V3.61759C72.7743 5.29042 77.2257 5.29042 81.1667 3.61759V3.61759C85.1076 1.94477 89.5591 1.94476 93.5 3.61759V3.61759C97.4409 5.29042 101.892 5.29043 105.833 3.6176L112 1"
            stroke="#434343"
          />
        </svg>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-0">
          <div className="flex-1 px-2">
            <div className="text-sm text-muted-foreground sm:py-2 sm:text-left">creations</div>
            <div className="flex flex-col">
              {creations.map((_) => (
                <div key={_.title} className="flex flex-col gap-1 border-b py-3 last:border-none">
                  <Link
                    className="text-sm font-medium underline decoration-foreground/50 transition-colors duration-300 ease-in-out hover:decoration-foreground"
                    href={_.url}
                    target="_blank"
                  >
                    {_.title}
                    <ArrowUpRight size={12} className="inline stroke-muted-foreground" />
                  </Link>
                  <div className="text-pretty text-sm text-muted-foreground">{_.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 px-2 sm:border-x sm:border-y-0">
            <div className="text-sm text-muted-foreground sm:py-2 sm:text-center">working on</div>
            <div className="flex flex-col">
              {workingOn.map((_) => (
                <div key={_.title} className="flex flex-col gap-1 border-b py-3 last:border-none">
                  <Link
                    className="text-sm font-medium underline decoration-foreground/50 transition-colors duration-300 ease-in-out hover:decoration-foreground"
                    href={_.url}
                    target="_blank"
                  >
                    {_.title}
                    <ArrowUpRight size={12} className="inline stroke-muted-foreground" />
                  </Link>
                  <div className="text-pretty text-sm text-muted-foreground">{_.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 px-2">
            <div className="text-sm text-muted-foreground sm:py-2 sm:text-right">writings</div>
            <div className="flex flex-col">
              {writings.map((_) => (
                <div key={_.title} className="flex flex-col gap-1 border-b py-3 last:border-none">
                  <Link
                    className="text-sm font-medium underline decoration-foreground/50 transition-colors duration-300 ease-in-out hover:decoration-foreground"
                    href={_.url}
                    target="_blank"
                  >
                    {_.title}
                    <ArrowUpRight size={12} className="inline stroke-muted-foreground" />
                  </Link>
                  <div className="text-pretty text-sm text-muted-foreground">{_.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
