"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center lg:items-center gap-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-center ">
          <div className="w-full ">
            <p className="text-xs">/Minimal Web, Development and Design.</p>
            <p className="text-xs mt-2">
              Harmony between aesthetics, usability, and conversion.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex">
          <div className="w-full flex flex-col lg:flex-row gap-10">
            <div className="w-1/2 text-xs">
              /Services
              <br />
              <br /> E-Commerce
              <br /> Website Design
              <br /> Web Development
            </div>
            <div className="w-1/2 text-xs">
              <div className="flex gap-2 flex-col ">
                <Link className="underline" title="About Me" href="/about-me">
                  About me
                </Link>
                <Link className="underline" title="Artwork" href="/artwork">
                  Artwork
                </Link>

                <Link
                  className="underline"
                  href="mailto:mayklweb@gmail.com"
                  title="Contact"
                  target="_blank"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-full absolute top-0 left-0 flex items-end justify-end pointer-events-none">
        <div className="w-75 h-25 bg-[#ede6da] p-2 flex gap-2.5">
          <div className="w-22 h-full bg-black"></div>
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-sm">Call Out My Name</h1>
            <p className="text-sm">The Weeknd</p>
            <div className="w-full mt-2">
              <div className="w-full h-1 bg-black rounded-full"></div>
              <div className="w-full flex items-center justify-center gap-3 mt-2">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="w-5 h-5 bg-black rounded-full"></div>
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
