"use client"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Sachiro() {
  const Allletter = useRef(null)
  useEffect(()=>{
  const texts = Allletter.current.querySelectorAll(".texter")
  gsap.fromTo(texts,
    { opacity: 0, y: 0},
    { opacity: 1, x: 50, duration: 2, ease: "power3.out" ,stagger:0.2,repeat:-1,yoyo:true,repeatDelay: 2.6,delay:3});
  },[])
return (
  <div className="relative h-screen w-screen overflow-hidden">
    <video className="absolute inset-0 h-full w-full object-cover -z-10" src="/vdo_sachiro.mp4" autoPlay loop muted playsInline />
    <div ref={Allletter} className="absolute flex gap-0.5 text-9xl font-bold font-mono bottom-37 left-95 text-[#00FF00]" style={{ WebkitTextStroke: "2px gray" }}>
      <div className="texter w-24 h-24 ">S</div>
      <div className="texter w-24 h-24 ">A</div>
      <div className="texter w-24 h-24 ">C</div>
      <div className="texter w-24 h-24 ">H</div>
      <div className="texter w-24 h-24 ">I</div>
      <div className="texter w-24 h-24 ">R</div>
      <div className="texter w-24 h-24 ">O</div>
    </div>
  </div>
)
}