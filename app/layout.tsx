import React from "react";
import "./globals.css";
import { Special_Elite } from "next/font/google";
import Link from "next/link";

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  weight: "400",
});

export const metadata = {
  title: "Quranbaev Muhammad | maykls — Web Development and Design",
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
      <body className={`${specialElite.variable}  antialiased`}>
        <div className="noise"></div>
        <div className="wrapper">
          <header className="w-full p-5 flex justify-between">
            <Link href="/" className="text-sm">
              Quranbaev Muhammad
            </Link>
            {/* <button className="text-xs">Inquiry</button> */}
          </header>
          <main className="w-full p-5 flex flex-col flex-auto">
            {children}
          </main>
          <footer className="flex flex-col lg:flex-row gap-2 p-5">
            <div className="w-full block text-[10px]">
              Development for a better harmonious world.
            </div>
            <div className="w-full flex flex-row lg:flex-row-reverse justify-between">
              <div className="text-[10px] flex gap-3">
                <Link target="_blank" href="https://instagram.com/mayklsss">
                  Instagram
                </Link>
                <Link target="_blank" href="/">
                  LinkedIn
                </Link>
                <Link target="_blank" href="https://github.com/mayklweb">
                  GitHub
                </Link>
              </div>
              <p className="text-[10px]"> © 2025 Quranbaev Muhammad</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
