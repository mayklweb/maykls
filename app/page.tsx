"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center lg:items-center gap-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="w-full ">
            <p className="text-xs">
              /Minimal Web, E-commerce and Shopify Designer.
            </p>
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
              <br /> Shopify Design
              <br /> Shopify Development
              <br /> E-Commerce Design
              <br /> Website Design
              <br />
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

      {/* <div className="h-screen flex flex-col justify-center pb-20 sm:pb-[70px] -mb-[60px] sm:-mb-[50px]">
        <div className="grid grid-cols-4 gap-5 ">
          <div className="col-span-4 mb-5 md:col-span-2 max-w-md">
            /Minimal Web, E-commerce and Shopify Designer.
            <br /> Harmony between aesthetics, usability, and conversion.
          </div>
          <div className="col-span-2 md:col-span-1">
            {" "}
            /Services
            <br /> <br /> Shopify Design
            <br /> Shopify Development
            <br /> E-Commerce Design
            <br /> Website Design
            <br /> <br /> <br />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-baseline">
            {" "}
            <a
              className="underline mb-2"
              href="https://6l1q5xoi1mt.typeform.com/to/AkhHZvBh"
              title="Submit an Inquiry"
              target=""
            >
              {" "}
              Submit an Inquiry{" "}
            </a>{" "}
            <a
              className="underline mb-2"
              href="mailto:basia.skrodzka@gmail.com"
              title="Contact"
              target="_blank"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div> */}

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
