"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function BoxFade() {
  const box = useRef(null);

  useEffect(() => {
    // ทำให้กล่องเลื่อนจากซ้ายไปขวา
    gsap.to(
  box.current,{x:100}
);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div ref={box} className="w-24 h-24 bg-green-400 rounded-xl shadow-lg"></div>
    </div>
  );
}
