"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center lg:items-center gap-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
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
                <Link className="underline" href="/about-me">
                  About me
                </Link>
                <Link className="underline" href="/art-work">
                  Art Work
                </Link>

                <Link
                  className="underline"
                  href="mailto:basia.skrodzka@gmail.com"
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

      <div className="fixed inset-0 -z-1">
        <Image
          src="/banner-1.png"
          alt="Image"
          width={3840}
          height={2160}
          className="block m-auto max-w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
