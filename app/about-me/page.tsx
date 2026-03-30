import Link from "next/link";
import React from "react";

function AboutMe() {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[calc(100svh-96px)] flex flex-col justify-between">
        <div className="mt-10 mr-5 flex justify-end">
          <div className="w-50">
            <img
              width="234"
              height="300"
              src="https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-234x300.png"
              className="w-full object-cover aspect-3/4"
              alt=""
              decoding="async"
              fetchPriority="high"
              srcSet="https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-234x300.png 234w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-799x1024.png 799w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-768x984.png 768w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-1199x1536.png 1199w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2.png 1201w"
              sizes="(max-width: 234px) 100vw, 234px"
              style={
                {
                  "--smush-placeholder-width": "234px",
                  "--smush-placeholder-aspect-ratio": "234/300",
                } as React.CSSProperties
              }
            />
          </div>
        </div>
        <div>
          <div className="max-w-90 text-xs">
            About me I am an independent designer specialising in website,
            e-commerce and Shopify design. I believe in the harmony between
            aesthetics and usability, and it is around this philosophy that I
            create minimal, unique, and memorable digital projects.
            <br />
            <br />
            Through design, I aim to inspire and craft experiences that resonate
            on a deeper level, helping brands build strong, meaningful, and
            authentic relationships with their customers.
          </div>
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3">
          <div className="hidden lg:block"></div>
          <div></div>
          <div className="w-full h-full text-xs flex gap-5 items-center">
            <Link href="/art-work">
             / Art Work
            </Link>
            <Link href="/art-work">
              / Contact
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-12 mb-80 sm:mb-60">
        <div className="col-span-1 col-start-3 sm:col-span-3 sm:col-start-10 md:col-span-2 md:col-start-10 max-w-[230px]">
          <div className="ripple-img js-ripple-img">
            <img
              width="234"
              height="300"
              src="https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-234x300.png"
              className="w-full object-cover aspect-3/4"
              alt=""
              decoding="async"
              fetchPriority="high"
              srcSet="https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-234x300.png 234w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-799x1024.png 799w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-768x984.png 768w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-1199x1536.png 1199w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2.png 1201w"
              sizes="(max-width: 234px) 100vw, 234px"
              style={
                {
                  "--smush-placeholder-width": "234px",
                  "--smush-placeholder-aspect-ratio": "234/300",
                } as React.CSSProperties
              }
            />
            <div className="ripple-canvas js-ripple-canvas"></div>
          </div>
          <div className="mt-4"></div>
        </div>
      </div> */}
      {/* <div className="">
        <div className="text-xs">
          About me
          <br /> <br /> I am an independent designer specialising in website,
          e-commerce and Shopify design. I believe in the harmony between
          aesthetics and usability, and it is around this philosophy that I
          create minimal, unique, and memorable digital projects.
          <br /> <br /> Through design, I aim to inspire and craft experiences
          that resonate on a deeper level, helping brands build strong,
          meaningful, and authentic relationships with their customers.
        </div>
      </div> */}
      {/* <div className="h-screen flex flex-col justify-end -mt-3"> */}
      {/* <div className="gap-5 grid-cols-12 invisible lg:visible lg:grid">
          <div
            className="invisible lg:visible col-span-2 col-start-10 max-w-[230px] mb-14 mix-blend-multiply  lg:opacity-0 lg:transition-all lg:ease-in-out js-nav-hover-img"
            data-target="about-me"
          >
            <img
              width="234"
              height="300"
              data-src="https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-234x300.png"
              className="w-full ls-is-cached lazyloaded"
              alt=""
              decoding="async"
              data-srcset="https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-234x300.png 234w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-799x1024.png 799w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-768x984.png 768w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-1199x1536.png 1199w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2.png 1201w"
              data-sizes="(max-width: 234px) 100vw, 234px"
              src="https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-234x300.png"
              sizes="(max-width: 234px) 100vw, 234px"
              srcSet="https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-234x300.png 234w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-799x1024.png 799w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-768x984.png 768w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-1199x1536.png 1199w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2.png 1201w"
            />
          </div>
        </div> */}
      {/* <div className="grid gap-5 grid-cols-2 js-navigation md:grid-cols-4 lg:grid-cols-12 mb-80 lg:mb-5 lg:mt-5">
          <div
            className="hidden lg:flex col-span-1 -mt-5 mix-blend-multiply  lg:opacity-0 lg:transition-all lg:ease-in-out js-nav-hover-img"
            data-target="manifest"
          ></div>
          <div
            className="hidden lg:flex col-span-3 col-start-4 -mt-5 mix-blend-multiply  lg:opacity-0 lg:transition-all lg:ease-in-out js-nav-hover-img"
            data-target="projects"
          ></div>
          <div className="text-xs col-span-1 col-start-2 flex md:col-start-4 lg:col-span-2 lg:col-start-10 flex-col items-baseline md:flex-row">
            <a
              className="hover:italic mr-5 mb-4 md:mb-0 js-nav-hover-target"
              data-target="projects"
              href="/art-work"
              title="/Art Work"
            >
              /Art Work
            </a>
            <a
              className="hover:italic mr-5 mb-4 md:mb-0 js-nav-hover-target"
              data-target="manifest"
              href="https://bskrodzka.com/manifest/"
              title="/Manifest"
            >
              /Manifest
            </a>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default AboutMe;
