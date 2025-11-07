"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function WorkshopFour() {
    const wrap = useRef(null)

    useEffect(() => {
        const cards = wrap.current.querySelectorAll(".card")
        cards.forEach((card)=>{
            gsap.from(card, {
            y: 100,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cards,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
                // markers: true
            }
        })
        })
    }, [])

    return (
        <>
            <div className="bg-gray-900 min-h-screen"></div>
            <div ref={wrap} className="bg-gray-900 text-white min-h-[200vh] flex flex-col items-center justify-center gap-10 py-20">
                <div className="card w-64 h-40 bg-red-500 rounded-xl"></div>
                <div className="card w-64 h-40 bg-green-500 rounded-xl"></div>
                <div className="card w-64 h-40 bg-blue-500 rounded-xl"></div>
                <div className="card w-64 h-40 bg-yellow-500 rounded-xl"></div>
            </div>
        </>
    )
}
