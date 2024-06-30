import { TooltipProvider } from "~/components/ui/tooltip";
import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";
import { Toaster } from "~/components/ui/sonner";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "~/lib/utils";
import "./globals.css";

const sans = Inter({
  weight: "variable",
  preload: true,
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Mishra",
  description: "homepage of blankparticle",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(sans.variable, "flex min-h-svh flex-col font-sans")}>
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
