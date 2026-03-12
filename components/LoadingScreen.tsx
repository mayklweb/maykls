"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ─── CONFIG ───────────────────────────────────────────────────────────────
const INTERVAL_MS = 80; // ms per frame (lower = faster)
const TOTAL_MS = 2800; // total loader duration in ms
const SIZE = 200; // square size px
// ──────────────────────────────────────────────────────────────────────────

const IMAGES = [
  "/bones.jpg",
  "/daft.jpg",
  "/punk.jpg",
  "/esdeekid.jpg",
  "/gesaffelstein.jpg",
  "/sade.jpg",
  "/theweeknd.jpg",
  "/travisscott.webp",
  "/thenieghbourhood.webp",
  "/sade.webp",
  "/lanadelrey.webp",
  "/cigarettesaftersex.webp",
  "/centralcee.webp",
  "/glassbeams.webp",
];

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);
  const elapsed = useRef(0);

  // Preload all images before cycling starts
  useEffect(() => {
    let loaded = 0;
    IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === IMAGES.length) setReady(true);
      };
    });
  }, []);

  // Start cycling only after preload
  useEffect(() => {
    if (!ready) return;

    const id = setInterval(() => {
      elapsed.current += INTERVAL_MS;
      setCurrent((c) => (c + 1) % IMAGES.length);

      if (elapsed.current >= TOTAL_MS) {
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          onComplete?.();
        }, 150);
      }
    }, INTERVAL_MS);

    return () => clearInterval(id);
  }, [ready, onComplete]);

  return (
    <div
      className={`w-screen h-screen flex items-center justify-center fixed z-9999 bg-black transition-all duration-500 linear `}
      style={{
        opacity: done ? 0 : 1,
        visibility: done ? "hidden" : "visible",
      }}
    >
      <div className="relative w-25 h-25 lg:w-50 lg:h-50">
        {IMAGES.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`absolute top-0 left-0 w-25 h-25 lg:w-50 lg:h-50 transition-all duration-75 linear `}
            style={{
              opacity: i === current ? 1 : 0,
            }}
          >
            <Image
              src={src}
              alt=""
              width={200}
              height={200}
              className="grayscale w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
