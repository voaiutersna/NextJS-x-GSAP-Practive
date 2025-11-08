"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Akaza() {
  const Allletter = useRef(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!Allletter.current) return;
      const texts = Allletter.current.querySelectorAll(".texter");
      gsap.from(texts, {
        y: 50,
        stagger: 0.2,
        duration: 2,
        ease: "back.out(1.7)",
        opacity: 0,
        yoyo:true,
        repeat:-1,
        repeatDelay:2
      })
    }, 700);
    return () => clearTimeout(timer);
  }, [])
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover -z-10" src="/vdo_akaza.mp4" autoPlay loop muted playsInline />
      <div ref={Allletter} className="absolute bottom-40 left-10 flex gap-0.5 text-9xl font-bold text-white">
        <div className="texter  bottom-10 left-10 w-24 h-24 ">A</div>
        <div className="texter  bottom-10 left-10 w-24 h-24 ">K</div>
        <div className="texter  bottom-10 left-10 w-24 h-24 ">A</div>
        <div className="texter  bottom-10 left-10 w-24 h-24 ">Z</div>
        <div className="texter  bottom-10 left-10 w-24 h-24 ">A</div>
      </div>
    </div>

  );
}
