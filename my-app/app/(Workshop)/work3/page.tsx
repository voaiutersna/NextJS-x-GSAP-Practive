"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function StaggerExample() {
  const listRef = useRef(null);
  useEffect(() => {
    // const items = listRef.current.querySelectorAll("li"); กรณีอยาก select ผ่าน tag ไม่ได้ผ่าน classname ก็ทำได้
    const texts = listRef.current.querySelectorAll(".texter");
    const tl = gsap.timeline({defaults:{yoyo: true,repeat:-1}})
    tl.from(texts,{y:20,opacity:0,duration: 0.6,ease: "power2.out",stagger: 0.15})
  }, []);

  return (
    <ul ref={listRef} className="text-white text-2xl space-y-2 p-10 bg-gray-900 min-h-screen">
      <li className="texter">HTML</li>
      <li className="texter">CSS</li>
      <li className="texter">JavaScript</li>
      <li className="texter">React</li>
      <li className="texter">GSAP</li>
    </ul>
  );
}

// 🧠 สรุป Flow ที่เกิดขึ้น

// React render <ul>

// useRef เก็บ DOM จริงไว้ใน listRef.current

// useEffect → สร้าง timeline

// GSAP หา .texter ทั้งหมด → Animate ทีละตัว (stagger 0.15s)

// เล่นจากล่างขึ้นบน (y:20 → 0) + fade in

// เมื่อเล่นจบ → ย้อนกลับ (เพราะ yoyo:true, repeat:1)

// ลบ timeline เมื่อ component ถูกถอดออก