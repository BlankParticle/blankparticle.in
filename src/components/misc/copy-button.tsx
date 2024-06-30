"use client";

import { Button, type ButtonProps } from "../ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function CopyButton({
  text,
  iconSize = 14,
  ...props
}: Omit<ButtonProps, "onClick"> & { text: string; iconSize?: number }) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      {...props}
      onClick={async () =>
        await navigator.clipboard
          .writeText(text)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          })
          .catch(() => toast.error("Failed to copy to clipboard"))
      }
    >
      {copied ? <Check size={iconSize} /> : <Copy size={iconSize} />}
    </Button>
  );
}
