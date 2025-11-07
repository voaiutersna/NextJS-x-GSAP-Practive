Workshop 4: Scroll Animation (ScrollTrigger)
🎯 สิ่งที่จะได้เรียนรู้


ใช้ ScrollTrigger plugin ร่วมกับ GSAP


ทำให้ element “โผล่ขึ้นทีละชิ้น” ตอน scroll ผ่าน


เข้าใจคำว่า trigger, start, end, scrub



⚙️ ติดตั้งก่อน
ถ้าคุณยังไม่ได้ติดตั้ง GSAP (มีอยู่แล้วก็ข้ามได้)
npm install gsap


🧠 อธิบายแนวคิดสั้น ๆ
ปกติ GSAP จะเล่น animation ทันทีที่ component render
แต่บางครั้งเราต้องการ “ให้เล่นตอนเลื่อนถึง”
เราจึงใช้ plugin ชื่อว่า
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

มันจะตรวจว่าหน้าเว็บ scroll ถึง element หรือยัง
แล้วค่อย trigger แอนิเมชันให้เริ่ม

💡 ตัวอย่างสอนก่อน
(อ่านก่อนทำ Workshop)
"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function ScrollDemo() {
  const container = useRef(null)

  useEffect(() => {
    const boxes = container.current.querySelectorAll(".card")

    gsap.from(boxes, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: container.current, // จุดเริ่มตรวจจับ
        start: "top 80%",           // เมื่อ top ของ container เข้าถึง 80% ของ viewport
      },
    })
  }, [])

  return (
    <div ref={container} className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-10">
      <h2 className="text-4xl mb-10">Scroll Down</h2>
      <div className="card w-64 h-40 bg-green-500 rounded-xl"></div>
      <div className="card w-64 h-40 bg-blue-500 rounded-xl"></div>
      <div className="card w-64 h-40 bg-pink-500 rounded-xl"></div>
    </div>
  )
}

ผลลัพธ์
เมื่อเลื่อนหน้าจอถึงกล่อง →
จะเห็นกล่องแต่ละใบ “โผล่ขึ้นทีละใบ” ด้วย stagger 💨

🔍 อธิบายพารามิเตอร์สำคัญของ ScrollTrigger
keyความหมายตัวอย่างtriggerจุดที่ใช้ตรวจว่า scroll ถึงหรือยัง.card หรือ ref.currentstartตำแหน่งเริ่มเล่น animation"top 80%"endตำแหน่งสิ้นสุด"bottom 20%"scrubผูกการเคลื่อนไหวตาม scroll (true = smooth)scrub: truemarkersแสดงเส้น start/end บนจอเพื่อ debugmarkers: truetoggleActionsตั้งค่าการเล่น (เช่น play, reverse, restart, none)"play reverse play reverse"

🧩 Workshop 4 — โจทย์ของคุณ

สร้างกล่อง 4 ใบ (แต่ละใบสีต่างกัน)
ให้แต่ละใบ “เลื่อนขึ้น + fade in” ตอน scroll ผ่าน


ใช้ scrollTrigger


แต่ละใบเล่นแยกกัน (ไม่ใช้ container เดียว)


ใส่ markers: true ชั่วคราวเพื่อดูจุด trigger


ให้ animation smooth ด้วย ease: "power2.out"


เมื่อเลื่อนกลับขึ้น ให้กล่อง fade out กลับ (ใช้ toggleActions)



Hint:
scrollTrigger: {
  trigger: element,
  start: "top 80%",
  toggleActions: "play reverse play reverse",
}


🔧 ตัวอย่างโครงสร้างเริ่มต้น (คุณต้องเติม gsap เอง)
"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function WorkshopFour() {
  const wrap = useRef(null)

  useEffect(() => {
    const cards = wrap.current.querySelectorAll(".card")
    // ✨ เขียนโค้ด gsap.from() ที่นี่
  }, [])

  return (
    <div ref={wrap} className="bg-gray-900 text-white min-h-[200vh] flex flex-col items-center justify-center gap-10 py-20">
      <div className="card w-64 h-40 bg-red-500 rounded-xl"></div>
      <div className="card w-64 h-40 bg-green-500 rounded-xl"></div>
      <div className="card w-64 h-40 bg-blue-500 rounded-xl"></div>
      <div className="card w-64 h-40 bg-yellow-500 rounded-xl"></div>
    </div>
  )
}


🧠 สิ่งที่อยากให้คุณฝึกใน Workshop 4


เขียน gsap.from() สำหรับแต่ละ .card


ตั้งค่า scrollTrigger แยกให้แต่ละใบ


ใช้ toggleActions "play reverse play reverse" เพื่อให้มันกลับตอน scroll ขึ้น


ปิด markers เมื่อเสร็จ



อยากไหมครับให้ผมเพิ่ม “Workshop 5” ต่อ (ระดับสูงขึ้น):
จะสอน ScrollTrigger + Timeline + Pin (เอาไว้ทำพารัลแลกซ์และแอนิเมชันแนว storytelling แบบเว็บโปร) 🚀