"use client";

import { useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-full p-2.5">
      <div className="w-full h-full flex items-center">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="w-full">
            <p className="text-xs">
              /Minimal Web, E-commerce and Shopify Designer.
            </p>
            <p className="text-xs">
              Harmony between aesthetics, usability, and conversion.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center">
          <div className="w-full flex">
            <div className="w-1/2 text-xs col-span-2 md:col-span-1">
              /Services
              <br />
              <br /> Shopify Design
              <br /> Shopify Development
              <br /> E-Commerce Design
              <br /> Website Design
              <br />
            </div>
            <div className="w-1/2 text-xs col-span-2 md:col-span-1">
              <div className="flex gap-1 flex-col items-baseline">
                <a className="underline" href="">
                  About
                </a>
                <a className="underline" href="">
                  Art Work
                </a>

                <a
                  className="underline"
                  href="mailto:basia.skrodzka@gmail.com"
                  title="Contact"
                  target="_blank"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-full flex relative">
        <div className="w-1/2">
          <Image
            src={
              "https://cdn.cosmos.so/6a59095f-7f2a-420a-821d-dc9f56d32758?format=jpeg"
            }
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference text-white cursor-pointer">
          {`{ enter }`}
        </button>
        <div className="w-1/2">
          <Image
            src={
              "https://cdn.cosmos.so/d944eddc-689f-4639-87b0-3b55cb318a67?format=jpeg"
            }
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}
    </div>
  );
}
