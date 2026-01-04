import React from "react";
import "./globals.css";
import {
  Sometype_Mono,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Noise from "@/components/Noise";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometype-mono",
  subsets: ["latin"],
});
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad | maykls — Web Developer and Designer",
  description:
    "Muhammad is a developer and web designer exploring the space between design and code — crafting digital experiences where logic meets emotion.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sometypeMono.variable} ${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
        <header>
          <div className="w-full px-5 py-2 flex items-center justify-between fixed top-0 z-10">
            <div>
              {/* <h1 className="text-4xl font-serif">maykls</h1> */}
              <Image src="/maykls.svg" width={80} height={34} alt="maykl" />
            </div>
            <div className="hidden lg:flex items-center gap-5">
              <Link href="/" className="font-sans tracking-tighter">
                about
              </Link>
              <Link href="/" className="font-sans tracking-tighter">
                projects
              </Link>
              <Link href="/" className="font-sans tracking-tighter">
                contact
              </Link>
            </div>
          </div>
        </header>
        <main className="flex flex-auto">{children}</main>
        <footer>
          <div className="w-full px-5 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2.5">
              <Link href="/" className="font-sans tracking-tight">
                Instagram
              </Link>
              <Link href="/" className="font-sans tracking-tight">
                Telegram
              </Link>
              <Link href="/" className="font-sans tracking-tight">
                GitHub
              </Link>
              <Link href="/" className="font-sans tracking-tight">
                Twitter[X]
              </Link>
            </div>
            <div className="">
              <Link href="/" className="text-sm font-sans text-center tracking-tighter">
                © 2025 Muhammad Quranbayev
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
