import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutMe() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[calc(100svh-96px)] flex flex-col justify-between">
        <div className=" flex justify-end ">
          <div className="w-50 md:w-75">
            <Image
              width={300}
              height={400}
              src="/hero.jpg"
              className="w-full h-full object-cover aspect-3/4"
              alt=""
              // decoding="async"
              // fetchPriority="high"
              // srcSet="https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-234x300.png 234w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-799x1024.png 799w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-768x984.png 768w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2-1199x1536.png 1199w, https://bskrodzka.com/bend/wp-content/uploads/2024/05/Me-02-2.png 1201w"
              // sizes="(max-width: 234px) 100vw, 234px"
              // style={
              //   {
              //     "--smush-placeholder-width": "234px",
              //     "--smush-placeholder-aspect-ratio": "234/300",
              //   } as React.CSSProperties
              // }
            />
          </div>
        </div>
        <div className="">
          <p className="max-w-90 text-xs">
            About me
            <br />
            <br />
            I am an independent developer specialising in website, e-commerce,
            and web application development. I believe in the harmony between
            functionality and usability, and it is around this philosophy that I
            create minimal, unique, and memorable digital projects.
            <br />
            <br />
            Through development, I aim to craft digital experiences that
            resonate with users, creating meaningful and lasting interactions.
          </p>
        </div>
      </div>
      <div className="w-full h-[calc(100svh-76px)] flex justify-end items-end">
        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3">
          <div className="hidden lg:block"></div>
          <div></div>
          <div className="w-full h-full text-xs flex gap-5 items-center">
            <Link href="/artwork">/ Artwork</Link>
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
  );
}

export default AboutMe;
