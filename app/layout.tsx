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
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}
