import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";

import frame1 from "../../assets/InternalPages/ProductsPage/Frames/Frame1.png";
import frame2 from "../../assets/InternalPages/ProductsPage/Frames/Frame2.png";
import frame3 from "../../assets/InternalPages/ProductsPage/Frames/Frame3.png";
import frame4 from "../../assets/InternalPages/ProductsPage/Frames/Frame4.png";
import frame5 from "../../assets/InternalPages/ProductsPage/Frames/Frame5.png";
import frame6 from "../../assets/InternalPages/ProductsPage/Frames/Frame6.png";
import frame7 from "../../assets/InternalPages/ProductsPage/Frames/Frame7.png";
import frame8 from "../../assets/InternalPages/ProductsPage/Frames/Frame8.png";
import frame9 from "../../assets/InternalPages/ProductsPage/Frames/Frame9.png";
import frame10 from "../../assets/InternalPages/ProductsPage/Frames/Frame10.png";
import frame11 from "../../assets/InternalPages/ProductsPage/Frames/Frame11.png";
import frame12 from "../../assets/InternalPages/ProductsPage/Frames/Frame12.png";

import Picture from "../../assets/InternalPages/ProductsPage/Picture.png";
import Contact from "../Contact";

export default function ProductsPage() {
  const [showBlur, setShowBlur] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const contactRef = useRef(null);

  const frames = [
    frame1, frame2, frame3, frame4, frame5, frame6,
    frame7, frame8, frame9, frame10, frame11, frame12,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [frames.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBlur(!entry.isIntersecting);
      },
      { threshold: 0.15 } 
    );
  
    if (contactRef.current) observer.observe(contactRef.current);
  
    return () => observer.disconnect();
  }, []);
  

  const blurLevel = Math.min(scrollY / 200, 3);
  const opacityLevel = Math.max(0.3, 1 - scrollY / 700);
  const nextFrame = (currentFrame + 1) % frames.length;

  return (
    <>
      <Navbar />

      <div className="relative w-full bg-white overflow-hidden">
        {showBlur && (
          <div
            className="fixed top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-[1]"
            style={{
              opacity: opacityLevel,
              filter: `blur(${blurLevel}px)`,
              transition: "opacity 1s ease-out",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            {frames.map((f, i) => (
              <img
                key={i}
                src={f}
                alt={`blur-${i}`}
                className="absolute top-0 right-0 w-full h-full object-contain transition-opacity duration-[6000ms] ease-[cubic-bezier(0.45,0.05,0.2,0.95)]"
                style={{
                  opacity:
                    i === currentFrame
                      ? 1
                      : i === nextFrame
                      ? 0.6
                      : 0,
                  objectPosition: "right center",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                  zIndex: 1,
                }}
              />
            ))}
          </div>
        )}

<section className="relative z-10 pt-[140px] px-6 md:px-[2%] lg:px-[1.5%] max-w-[1300px] mx-auto">
  <h3
    className="uppercase mb-3 text-[#2352A5] font-[600]"
    style={{ fontFamily: "Sora", fontSize: "16px" }}
  >
    Products
  </h3>
  <h1
    className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-[600] text-black leading-[1.25]"
    style={{ fontFamily: "Sora" }}
  >
    SyncroTask – All-in-One <br /> Productivity Platform
  </h1>
  <p
    className="text-[#555] text-[16px] md:text-[17px] max-w-[550px] mb-[60px]"
    style={{ fontFamily: "Sora", fontWeight: 400 }}
  >
    AI + Human Expertise, at a fraction of the cost.
  </p>
</section>
      
<section className="relative z-10 w-full flex justify-center mt-[-40px] mb-[60px]">
  <div
    className="rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between"
    style={{
      background: "rgba(255,255,255,0.7)",

      WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.25)",
      width: "92%",         
      maxWidth: "1300px",   
      marginLeft: "-30px",    
      marginRight: "0",
      minHeight: "360px",  
    }}
  >
    <div className="w-full md:w-[42%] flex justify-start mb-8 md:mb-0 ">
      <img
        src={Picture}
        alt="SyncroTask Preview"
        className="w-[92%] rounded-xl object-cover"
      />
    </div>

    <div className="w-full md:w-[52%] text-left md:pl-0">
      <p
        className="text-[#333] text-[17px] leading-[1.8]"
        style={{ fontFamily: "Sora", fontWeight: 400 }}
      >
        <span className="font-[500] text-[#000]">SyncroTask</span> is your ultimate productivity
        companion — combining cutting-edge AI tools with skilled human expertise to help you
        achieve more in less time, without breaking the bank.
      </p>
    </div>
  </div>
</section>


<div
  ref={contactRef}
  className="relative z-20 bg-white w-full"
  style={{
    boxShadow: "0 -10px 30px rgba(0,0,0,0.05)", 
  }}
>
  <Contact />
</div>

      </div>
    </>
  );
}
