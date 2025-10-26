import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import frame1 from "../../assets/InternalPages/ServicesPage/Frames/Frame1.png";
import frame2 from "../../assets/InternalPages/ServicesPage/Frames/Frame2.png";
import frame3 from "../../assets/InternalPages/ServicesPage/Frames/Frame3.png";
import frame4 from "../../assets/InternalPages/ServicesPage/Frames/Frame4.png";
import frame5 from "../../assets/InternalPages/ServicesPage/Frames/Frame5.png";
import frame6 from "../../assets/InternalPages/ServicesPage/Frames/Frame6.png";
import frame7 from "../../assets/InternalPages/ServicesPage/Frames/Frame7.png";
import frame8 from "../../assets/InternalPages/ServicesPage/Frames/Frame8.png";
import frame9 from "../../assets/InternalPages/ServicesPage/Frames/Frame9.png";
import frame10 from "../../assets/InternalPages/ServicesPage/Frames/Frame10.png";
import frame11 from "../../assets/InternalPages/ServicesPage/Frames/Frame11.png";
import frame12 from "../../assets/InternalPages/ServicesPage/Frames/Frame12.png";

import picture from "../../assets/InternalPages/ServicesPage/Picture.png";
import Contact from "../Contact";

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [textOffset, setTextOffset] = useState(0);
  const [showBlur, setShowBlur] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const sectionRef = useRef(null);
  const contactRef = useRef(null);

  const frames = [
    frame1, frame2, frame3, frame4, frame5, frame6,
    frame7, frame8, frame9, frame10, frame11, frame12
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromTop = Math.max(0, windowHeight - rect.top);
        setTextOffset(distanceFromTop * 0.1);
      }

      if (contactRef.current) {
        const contactTop = contactRef.current.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        const isContactVisible = contactTop < screenHeight * 0.9;
        setShowBlur(!isContactVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 9000); 
    return () => clearInterval(interval);
  }, [frames.length]);

  const blurLevel = Math.min(scrollY / 200, 3);
  const opacityLevel = Math.max(0.3, 1 - scrollY / 700);
  const nextFrame = (currentFrame + 1) % frames.length;
  const technologies = ["React.js", "Spring Boot", "Kotlin", "Flutter", "Node.js"];

  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M6.854 4.646a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L9.793 8 6.854 5.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );

  const services = [
    { title: "Web & App Development", description: "Custom, scalable, and high-performing solutions for every platform." },
    { title: "AI-Powered Solutions", description: "From AI agents to automation tools — boost productivity and decision-making." },
    { title: "UI/UX Design", description: "Intuitive, user-friendly interfaces designed for maximum engagement." },
    { title: "Custom LMS Development", description: "Feature-rich e-learning platforms for schools, institutes, and corporates." },
    { title: "E-commerce Solutions", description: "Secure, conversion-focused stores to help you sell smarter." },
    { title: "Digital Branding & Pitch Decks", description: "Present your business with clarity, confidence, and creativity." },
  ];

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
        background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 100%)",
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
        <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-28 pt-[95px] sm:pt-[130px] max-w-[1000px]">
          <h3 className="uppercase mb-2 text-[#2352A5] font-[600]" style={{ fontFamily: "Sora", fontSize: "16px" }}>
            Services
          </h3>
          <h1 className="mb-5 font-[600] text-[30px] sm:text-[50px] md:text-[56px] lg:text-[62px] text-black leading-[1.25]" style={{ fontFamily: "Sora" }}>
            Our Expertise, <br /> Your Growth
          </h1>
          <p
            className="mb-3 max-w-[520px] text-[#555] font-sora font-normal text-sm sm:text-lg md:text-[16px]"
          >
            At Code-X-Novas, we blend creativity, technology, and strategy to deliver tailor-made solutions for startups, brands, and individuals.
          </p>

          <button
            className="relative overflow-hidden mt-1 px-6 py-3 rounded-md font-poppins text-[15px] text-white shadow-md group"
            style={{
              background:
                "linear-gradient(90deg, #2352A5 0%, #137DD1 11%, #02A7FD 26%, #7DE2FF 44%, #42ACEF 72%, #B7F1FF 100%)",
            }}
          >
            <span className="relative z-10">Explore Our Products</span>
            <span
              className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[130%] transition-all duration-[1.2s] ease-in-out"
              style={{ transform: "skewX(-20deg)" }}
            ></span>
          </button>
        </div>

        {services.map((s, i) => (
          <React.Fragment key={i}>
            <section className="relative z-10 -mt-[10px] sm:mt-[80px]">
              <div
                ref={sectionRef}
                className={`hidden md:flex px-6 md:px-16 lg:px-28 items-start justify-between ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className="w-1/2 overflow-visible"
                  style={{
                    marginTop: "-5vh",
                    transform:
                      i === services.length - 1 ? "none" : `translateY(${textOffset * 0.6}px)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  <img src={picture} alt={s.title} className="w-full h-auto object-cover" />
                </div>

                <div
                  className={`w-1/2 flex flex-col justify-start text-left ${
                    i % 2 === 0 ? "md:pl-10" : "md:pr-10"
                  }`}
                  style={{
                    marginTop: "-40px",
                    transform:
                      i === services.length - 1 ? "none" : `translateY(${textOffset * 0.6}px)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  <h2
                    className="mb-4 text-[32px] sm:text-[42px] md:text-[50px] lg:text-[60px] text-black font-[600]"
                    style={{ fontFamily: "Sora", lineHeight: "1.25" }}
                  >
                    {s.title}
                  </h2>
                  <p
                    className="mb-6 max-w-[560px] text-[#555]"
                    style={{ fontFamily: "Sora", fontWeight: 400, fontSize: "16px" }}
                  >
                    {s.description}
                    <br />
                    <span style={{ fontWeight: 400 }}>Technologies:</span>
                  </p>

                  <div className="space-y-3 w-full">
                    {technologies.map((t, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between border-b border-gray-200 pb-3"
                      >
                        <div className="flex items-center space-x-4">
                          <span style={{ fontFamily: "Sora", fontSize: "15px", color: "#444" }}>
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span
                            style={{
                              fontFamily: "Sora",
                              fontSize: "16px",
                              fontWeight: 500,
                              color: "#000",
                            }}
                          >
                            {t}
                          </span>
                        </div>

                        <button
                          className="p-1.5 rounded-full border border-[#08306F] hover:bg-[#2352A5] transition-all duration-300 group flex items-center justify-center"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <span className="text-[#2352A5] transition-transform duration-300 group-hover:text-white group-hover:translate-x-[4px]">
                            <ArrowIcon />
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:hidden px-6 mt-6">
                <div className="w-full text-left mb-6">
                  {/* Mobile heading: match main H1 mobile size (base/mobile = 30px). Desktop is untouched because this block is hidden on md+. */}
                  <h2 className="mb-2 text-[30px] font-[600] text-black" style={{ fontFamily: "Sora", lineHeight: "1.15" }}>
                    {s.title}
                  </h2>
                  {/* Mobile paragraph: match main paragraph mobile size (base/mobile = text-sm). Keep line-height and font family. */}
                  <p className="text-[#555] text-sm" style={{ fontFamily: "Sora", lineHeight: "1.5" }}>
                    {s.description}
                  </p>
                </div>
                <div className="w-full mb-6 flex justify-center">
                  {/* Mobile image: constrain width to match Home hero mobile rectangles (centered, capped width) */}
                  <img src={picture} alt={s.title} className="w-[85%] max-w-[300px] h-auto object-cover rounded-lg" />
                </div>
              </div>
            </section>

            <div className="w-full border-t border-gray-300 opacity-70 mt-6 md:mt-[60px] relative z-[5]" />
          </React.Fragment>
        ))}

        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}
