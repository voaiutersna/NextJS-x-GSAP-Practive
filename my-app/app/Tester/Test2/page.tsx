"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Step6() {
  const wrap = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".grid",
          start: "top 80%",   // เมื่อกริดเข้ามา 80% ของ viewport
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrap} className="min-h-screen bg-neutral-950 p-8 text-white">
      <h2 className="text-3xl mb-8">Scroll down</h2>
      <div className="h-[60vh]" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card h-32 rounded-xl bg-white/10" />
        ))}
      </div>
      <div className="h-[60vh]" />
    </div>
  );
}
