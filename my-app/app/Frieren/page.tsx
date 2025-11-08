"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Frieren() {
  const frieren = useRef(null);
  const logo = useRef(null);

  useEffect(() => {
    // ใช้ timeline เพื่อควบคุมลำดับ
    gsap.fromTo(frieren.current,
      { y: 500 },
      { y: 65, duration: 2, ease: "power3.out",delay:1 })
    // frieren ลอยขึ้นนิดเดียว พร้อม fade-in
    // logo ตามมาทีหลังนิดนึง
    gsap.fromTo(logo.current,
      { opacity: 0, y: -280 },
      { opacity: 1, y: -100, duration: 2, ease: "power3.out",delay:1 }, // overlap เข้ามานิดหน่อย
    );
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[url('/bg_frieren.jpeg')] bg-cover bg-center">

      <Image
        ref={logo}
        src="/logo.webp"
        alt="Frieren Logo"
        width={1200}
        height={400}
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 pointer-events-none select-none"
        priority
      />

      <Image
        ref={frieren}
        src="/frieren.png"
        alt="Frieren"
        width={900}
        height={900}
        className="absolute left-[25%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        priority
      />
    </div>
  );
}
