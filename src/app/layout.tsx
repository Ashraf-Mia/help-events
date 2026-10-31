import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import { Toaster } from "@/components/ui/toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Help Events | Small actions, lasting change",
    template: "%s | Help Events",
  },
  description:
    "Discover local community events, lend a hand, and meet neighbours who care. Help Events makes it easy to show up for the place you call home.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={cn("h-full", inter.variable, geistMono.variable, "font-sans")}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <div> {children}</div>
        <Toaster />
      </body>
    </html>
  );
}
