"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen"; // adjust path if needed

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      {loaded && (
        <div
          className="w-full h-full"
          style={{
            opacity: loaded ? 1 : 0,
            visibility: loaded ? "visible" : "hidden",
            transition: "opacity  0.1s ease-in-out",
          }}
        >

          <h1 className="text-primary">GEY</h1>
        </div>
      )}
    </>
  );
}
