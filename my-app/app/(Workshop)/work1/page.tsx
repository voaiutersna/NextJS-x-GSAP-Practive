"use client"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Workshop_one(){
  const container = useRef(null)
  useEffect(()=>{
    const boxes = container.current.querySelectorAll(".box"); // ✅ จับทุกกล่องข้างใน
    gsap.from(boxes,{
      y:200,
      ease: "back.out(1.7)",
      stagger: 0.08, // ← ไล่ทีละชิ้น
      duration: 3
    })
  },[]);

  return(
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div ref={container} className="flex flex-row gap-2">
        <div className="box w-24 h-24 bg-red-400 rounded-xl shadow-lg"></div>
        <div className="box w-24 h-24 bg-green-400 rounded-xl shadow-lg"></div>
        <div className="box w-24 h-24 bg-blue-400 rounded-xl shadow-lg"></div>
      </div>
    </div>
  )
}