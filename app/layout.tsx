import React from "react";
import "./globals.css";
import {
  Sometype_Mono,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";

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
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}
