import React from "react";
import "./globals.css";
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  weight: "400",
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
      <body className={`${specialElite.variable}  antialiased`}>
        <header className="w-full p-2.5 flex justify-between">
          <h1 className="text-sm">Khuranboyev Muhammad</h1>
          {/* <button className="text-xs">Inquiry</button> */}
        </header>
        <main className="w-full h-[calc(100%-96px)]">{children}</main>
        <footer className="p-2.5">
          <div className="text-[10px]"> Designing for a better harmonious world.</div>
          <div className="mt-1.5 flex justify-between">
            <div className="text-[10px] flex gap-2">
              <a href="">Instagram</a>
              <a href="">LinkedIn</a>
              <a href="">GitHub</a>
            </div>
            <p className="text-[10px]"> © 2025 Khuranboyev Muhammad</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
