"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const items = ["Home","Work","About","Contact","Lab"];

export default function Step3() {
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const els = listRef.current?.querySelectorAll("li") ?? [];
    gsap.from(els, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.09, // ← ไล่ทีละชิ้น
    });
  }, []);

  return (
    <ul ref={listRef} className="p-8 space-y-2">
      {items.map((t) => (
        <li key={t} className="text-2xl">{t}</li>
      ))}
    </ul>
  );
}
