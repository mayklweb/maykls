"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex relative">
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
        <button className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-50 cursor-pointer">
          enter
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
      </div>
    </div>
  );
}
