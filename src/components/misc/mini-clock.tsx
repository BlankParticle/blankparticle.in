///@refresh reset
"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { changeTimeZone } from "~/lib/utils";
import { useEffect, useState } from "react";

const getMyLocalTime = () => changeTimeZone(new Date(), "Asia/Kolkata");

export function MiniClock() {
  const [time, setTime] = useState(getMyLocalTime());
  useEffect(() => {
    const interval = setInterval(() => setTime(getMyLocalTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="relative h-6 w-6 rotate-180 rounded-full border border-muted-foreground">
          <div
            suppressHydrationWarning
            className="absolute left-[calc(50%-0.25px)] top-1/2 h-[10px] w-[0.5px] origin-[center_0] bg-muted-foreground"
            style={{
              transform: `rotate(${time.getSeconds() * 6}deg)`,
            }}
          />
          <div
            suppressHydrationWarning
            className="absolute left-[calc(50%-0.25px)] top-1/2 h-[8px] w-[1px] origin-[center_0] bg-muted-foreground"
            style={{
              transform: `rotate(${time.getMinutes() * 6}deg)`,
            }}
          />
          <div
            suppressHydrationWarning
            className="absolute left-[calc(50%-0.5px)] top-1/2 h-[6px] w-[1px] origin-[center_0] bg-muted-foreground"
            style={{
              transform: `rotate(${(time.getHours() % 12) * 30}deg)`,
            }}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent suppressHydrationWarning>{time?.toLocaleTimeString()} (IST)</TooltipContent>
    </Tooltip>
  );
}
