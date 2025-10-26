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

import BackgroundPicture from "../../assets/InternalPages/ProductsPage/BackgroundPicture.png";
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
              display: showBlur ? "block" : "none",
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

        <section className="relative z-10 pt-[95px] sm:pt-[140px] px-6 md:px-[2%] lg:px-[1.5%] max-w-[1300px] mx-auto">
          <h3
            className="uppercase mb-3 text-[#2352A5] font-[600]"
            style={{ fontFamily: "Sora", fontSize: "16px" }}
          >
            Products
          </h3>
          <h1
            className="mb-2 sm:mb-5 font-[600] text-[30px] sm:text-[50px] md:text-[48px] lg:text-[65px] text-black leading-[1.2] sm:leading-[1.25]"
            style={{ fontFamily: "Sora" }}
          >
            <span style={{ color: "#2352A5", letterSpacing: "2px" }}>SyncroTask</span> – All-in-One <br className="hidden md:block" /> Productivity Platform
          </h1>
          <p
            className="mb-3 md:mb-[80px] max-w-[550px] text-[#555] font-sora font-normal text-sm sm:text-lg md:text-[17px] leading-[2]"
            style={{ fontFamily: "Sora", fontWeight: 400 }}
          >
            AI + Human Expertise, at a fraction of the cost.
          </p>
        </section>

        <section
          className="relative z-10 w-full flex justify-center items-end overflow-hidden mt-[40px] sm:mt-[80px] h-[55vh] sm:h-[100vh]"
          style={{
            backgroundImage: `url(${BackgroundPicture})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-2 sm:top-5 sm:relative flex justify-center w-full">
            <div
              className="shadow-lg px-8 py-2 sm:px-4 sm:py-4 flex items-center justify-center w-[90%] sm:w-[85%] max-w-[1100px] min-h-[140px] sm:min-h-[270px] mb-[80px] sm:mb-[390px]"
              style={{
                background: "rgba(255,255,255,0.75)",
                WebkitBackdropFilter: "blur(14px)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "12px",
              }}
            >
              <p
                className="text-[#222] text-[14px] sm:text-[17px] md:text-[24px] leading-[1.15] sm:leading-[1.3] text-start mt-[10px] sm:mt-[40px]"
                style={{ fontFamily: "Sora", fontWeight: 500 }}
              >
                SyncroTask is your ultimate productivity companion — combining cutting-edge
                <br className="hidden md:block" /> AI tools with skilled human expertise to
                help you achieve more in less time, <br className="hidden md:block" /> without
                breaking the bank.
              </p>
            </div>
          </div>
        </section>

        <div
          className="shadow-lg px-6 py-6 md:px-8 md:py-8 flex flex-col justify-center mx-auto -mt-[120px] md:-mt-[200px]"
          style={{
            position: "relative",
            background: "rgba(255,255,255,0.75)",
            WebkitBackdropFilter: "blur(14px)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.25)",
            width: "90%",
            maxWidth: "1100px",
            borderRadius: "12px",
            minHeight: "400px",
            marginBottom: "50px",
            zIndex: 20,
          }}
        >
          <h2
            className="text-[#2352A5] text-[32px] md:text-[35px] font-[600] mb-[20px]"
            style={{ fontFamily: "Sora" }}
          >
            Key Features
          </h2>

          <ul
            className="text-[#111] text-[15px] sm:text-[16px] md:text-[20px] leading-[1.25] md:leading-[2.2] list-disc pl-5"
            style={{
              fontFamily: "Sora",
              fontWeight: 400,
              fontStyle: "light",
              listStyleType: "disc",
            }}
          >
            <li className="mb-2 sm:mb-0">
              <b>Resume Creation</b> – Professional, ATS-friendly resumes in minutes.
            </li>
            <li className="mb-2 sm:mb-0">
              <b>Blog Writing</b> – SEO-friendly articles that engage and convert.
            </li>
            <li className="mb-2 sm:mb-0">
              <b>Pitch Deck Design</b> – Investor-ready presentations that impress.
            </li>
            <li className="mb-2 sm:mb-0">
              <b>Website & App Development</b> – Custom solutions for any business
              need.
            </li>
            <li className="mb-2 sm:mb-0">
              <b>AI + Human Collaboration</b> – Get the speed of AI with the precision
              of expert review.
            </li>
          </ul>

            <h3
            className="text-[#2352A5] text-[28px] md:text-[35px] font-[600] mt-[20px] mb-[10px]"
            style={{ fontFamily: "Sora" }}
          >
            USP
          </h3>
          <p
            className="text-[#222] text-[16px] md:text-[20px] break-words"
            style={{ fontFamily: "Sora", fontWeight: 400 }}
          >
            All services at unbelievably affordable rates — making professional-quality work accessible to everyone.
          </p>

          <button
            style={{
              background: `
                linear-gradient(
                  90deg,
                  #2352A5 0%,
                  #137DD1 20%,
                  #02A7FD 45%,
                  #42ACEF 70%,
                  #7DE2FF 92%,
                  #B7F1FF 100%
                )
              `,
              color: "#fff",
              fontFamily: "Sora",
              fontWeight: 500,
              fontSize: "16px",
              padding: "10px 24px",
              borderRadius: "6px",
              marginTop: "70px",
              alignSelf: "flex-start",
            }}
          >
            Try SyncroTask Now
          </button>
        </div>

        <div className="px-6 md:px-[2%] lg:px-[1.5%] max-w-[1300px] mx-auto">
          <h2
            className="text-[#2352A5] text-[28px] md:text-[30px] font-[600] text-start tracking-wide mb-[60px]"
            style={{ fontFamily: "Sora", marginLeft: "10px" }}
          >
            COMING&nbsp;SOON<span style={{ color: "#2352A5" }}>...</span>
          </h2>
        </div>

        <div
          ref={contactRef}
          className="relative z-20 bg-white w-full"
          style={{
            boxShadow: "0 -10px 30px rgba(0,0,0,0.05)",
            paddingTop: "50px",
          }}
        >
          <Contact />
        </div>
      </div>
    </>
  );
}
