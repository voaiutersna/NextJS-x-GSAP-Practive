"use client"
import Sinewave from "../components/Sinewave"
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const texts = useRef(null)
  const text1 = useRef(null)
  const text2 = useRef(null)
  useEffect(()=>{
    // const text = texts.current.querySelector(".texter")
    const timer = setTimeout(() => {

    console.log("Already use effect")
    const tl = gsap.timeline({defaults:{yoyo:true,repeat:-1,repeatDelay:5}})
    tl.from(text1.current,{y:-100,duration:2,opacity:0},0).from(text2.current,{y:50,duration:2,opacity:0},0) //ใส่0 ให้มันเริ่มพร้อมกัน
    }, 800);
    return () => clearTimeout(timer);
  },[])

  return (
    <div className='relative w-screen h-screen'>
      <div ref={texts}>
        <div ref={text1} className='texter absolute top-50 left-1/2 -translate-x-1/2 text-[#D9D9D9] text-7xl font-bold text-center w-full'>Welcome to my Website</div>
        <div ref={text2} className='texter absolute top-72 left-1/2 -translate-x-1/2 text-[#D9D9D9] text-1xl text-center opacity-60 w-full'>Using GSAP for animation,Using Spline for 3D Model,Using VDO Loop for Background</div>
      </div>
      <Sinewave />
    </div>
  );
}

//text1.current คือ “ตัว DOM จริง” อย่าลืมใส่ .current ไม่งั้นมันจะเป็น object
// console.log(text1) { current: div } 
// console.log(text1.current) <div class="texter">…

//tailwind
// w-full = ขยาย div เต็มจอ
// absolute → วางตำแหน่งแบบอิสระจาก parent (relative ของ div หลัก)
// top-10 → เว้นขอบบนลงมานิดหน่อย (เปลี่ยนได้ เช่น top-0 ให้ชิดขอบ)
// left-1/2 → วางกึ่งกลางแนวนอน
// -translate-x-1/2 → ขยับกลับครึ่งนึงของความกว้างตัวเองให้ “กึ่งกลางจริง ๆ”
