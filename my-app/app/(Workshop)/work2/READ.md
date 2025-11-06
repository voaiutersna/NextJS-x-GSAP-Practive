🧩 Workshop 2: การจัดลำดับด้วย Timeline
🎯 สิ่งที่จะเรียนรู้

ใช้ gsap.timeline()

ควบคุมลำดับให้แอนิเมชันเล่นต่อเนื่องอย่างสวยงาม

🧠 ตัวอย่างสอน
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TimelineExample() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });

    tl.from(box1.current, { y: 50, opacity: 0 })
      .from(box2.current, { y: 50, opacity: 0 })
      .from(box3.current, { y: 50, opacity: 0 });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center gap-4 bg-neutral-900">
      <div ref={box1} className="w-20 h-20 bg-red-500 rounded-xl"></div>
      <div ref={box2} className="w-20 h-20 bg-green-500 rounded-xl"></div>
      <div ref={box3} className="w-20 h-20 bg-blue-500 rounded-xl"></div>
    </div>
  );
}

🧩 โจทย์ฝึก (Workshop 2)

สร้าง timeline ที่มีข้อความ 3 บรรทัด:
1️⃣ “Hello”
2️⃣ “This is GSAP”
3️⃣ “Animation”

ให้แต่ละบรรทัดเลื่อนขึ้น + ค่อย ๆ โผล่ (opacity จาก 0 → 1)
แล้วหลังจากแสดงครบทั้ง 3 บรรทัด → ให้ทั้งหมด scale ขึ้นเล็กน้อย (1.05) แล้วกลับเป็นปกติ

💡 hint: ใช้ timeline แบบนี้

tl.from(...).from(...).from(...).to([...], {...});