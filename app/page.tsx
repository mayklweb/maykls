"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen"; // adjust path if needed

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      <div
        className="w-full h-full"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "all 0.1s ease-in-out",
        }}
      >
        {/* <div className="flex items-center justify-around">
          <button className="text-white bg-primary">about</button>
          <button className="text-white bg-primary">work</button>
          <button className="text-white bg-primary">services</button>
          <button className="text-white bg-primary">contact</button>
        </div>
        <div>
          <p className="text-[#E00000] text-2xl">
            I’m a curious and creative soul who loves turning ideas into
            reality. I enjoy exploring my imagination and creating projects that
            truly reflect my style. I’m always learning, growing, and looking
            for new ways to challenge myself. Outside of work, I enjoy
            exploring, finding inspiration in everyday life, and connecting with
            people who spark my curiosity.
          </p>
        </div> */}
        <div className="w-full h-ful">
          <video autoPlay muted className="w-auto h-screen">
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </>
  );
}
