import { TooltipProvider } from "~/components/ui/tooltip";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";
import { Toaster } from "~/components/ui/sonner";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { cn } from "~/lib/utils";
import "./globals.css";

const sans = Inter({
  weight: "variable",
  preload: true,
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  weight: "variable",
  preload: true,
  variable: "--font-mono",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Mishra",
  description: "homepage of blankparticle",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          sans.variable,
          mono.variable,
          "flex min-h-svh flex-col font-sans antialiased"
        )}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          enableColorScheme
          defaultTheme="system"
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
