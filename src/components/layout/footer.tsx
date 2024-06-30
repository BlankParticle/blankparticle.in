import { MiniClock } from "../misc/mini-clock";
import { changeTimeZone } from "~/lib/utils";

export function Footer() {
  return (
    <div className="border-t">
      <footer className="mx-auto flex w-full max-w-3xl items-center justify-between p-2">
        <div className="text-xs font-semibold text-muted-foreground">
          Made with 💚 by BlankParticle
        </div>
        <div className="flex flex-wrap items-center gap-2 whitespace-nowrap text-sm text-muted-foreground">
          {changeTimeZone(new Date(), "Asia/Kolkata").toDateString()}
          <MiniClock />
        </div>
      </footer>
    </div>
  );
}
