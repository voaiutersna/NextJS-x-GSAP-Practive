"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Workshop_two(){
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    
    useEffect(()=>{
        const timeline = gsap.timeline({defaults: {duration: 0.9, ease: "back.out(3)"}})
        timeline.from(box1.current,{y:50 ,opacity:0}).from(box2.current,{y:100, opacity:0}).from(box3.current,{y:150,opacity:0})
    })


    return(
        <div className = "h-screen flex justify-center items-center bg-gray-900">
            <div className="flex flex-row gap-2">
                <div ref={box1} className="box1 w-24 h-24 bg-red-400 rounded-xl shadow-lg"></div>
                <div ref={box2} className="box2 w-24 h-24 bg-green-400 rounded-xl shadow-lg"></div>
                <div ref={box3} className="box3 w-24 h-24 bg-blue-400 rounded-xl shadow-lg"></div>
            </div>
        </div>

    )
}