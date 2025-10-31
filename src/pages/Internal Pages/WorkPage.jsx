import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import SynchroTask from "../../assets/Works/synchrotask.png";
import SkillLoop from "../../assets/Works/skillloop.png";
import UrbanPilgrim from "../../assets/Works/urbanpilgrim.png";
import TakshilaFm from "../../assets/Works/takshilafm.png";
import eCommerce from "../../assets/Works/ecommerce.png";
import curve from "../../assets/Works/curve-glow.png";
import corner from "../../assets/Works/corner-glow.png";
import Contact from "../Contact";
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

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrollY, setScrollY] = useState(0);
  const [showBlur, setShowBlur] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const contactRef = useRef(null);

  const frames = [
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
    frame10,
    frame11,
    frame12,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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

  return (
    <>
      <SEO
        title="Our Work — Code X Novas | Portfolio & Case Studies"
        description="View our portfolio of web apps, mobile solutions, and digital products. See how we've helped businesses scale with innovative technology."
        url="https://codexnovas.in/works"
      />
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
              }}
            />
            {frames.map((f, i) => (
              <img
                key={i}
                loading="lazy"
                src={f}
                alt={`blur-${i}`}
                className="absolute top-0 right-0 w-full h-full object-contain transition-opacity duration-[6000ms] ease-[cubic-bezier(0.45,0.05,0.2,0.95)]"
                style={{
                  opacity: i === currentFrame ? 1 : i === nextFrame ? 0.6 : 0,
                  objectPosition: "right center",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              />
            ))}
          </div>
        )}

        <img
          src={curve}
          loading="lazy"
          alt="curve"
          className="hidden lg:block absolute top-0 right-0 w-[420px] opacity-80 pointer-events-none -z-10"
        />
        <img
          loading="lazy"
          src={corner}
          alt="corner"
          className="hidden lg:block absolute bottom-0 left-0 w-[380px] opacity-70 pointer-events-none -z-10"
        />

        <section className="relative z-10 pt-[95px] sm:pt-[120px] pb-[10px] px-6 md:px-[5%] max-w-[1400px] mx-auto text-left">
          <h3
            className="uppercase mb-[10px] text-[#2352A5] font-[600] text-[13px] sm:text-[14px] md:text-[16px]"
            style={{ fontFamily: "Sora", letterSpacing: "1px" }}
          >
            Our Works
          </h3>
          <h1
            className="font-[700] text-black leading-[1.15] sm:leading-[1.05] mb-3 text-[30px] sm:text-[42px] md:text-[48px] lg:text-[56px]"
            style={{ fontFamily: "Sora" }}
          >
            Designed. Developed.
            <br />
            <span className="text-[#0B74D1]">Delivered.</span>
          </h1>
          <p className="text-[#333] font-[400] text-[14px] sm:text-[16px] leading-[1.6] max-w-[820px]">
            Every project we deliver blends creativity with technology — built
            to solve problems, inspire users, and push possibilities forward.
          </p>
        </section>

        <section className="relative w-full py-6 px-6 md:px-[5%] bg-white text-left z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <div className="w-full sm:w-auto flex-1">
                <div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl shadow-md px-4 py-3">
                  <div className="overflow-x-auto scrollbar-none">
                    <div className="flex items-center gap-3 min-w-max">
                      {[
                        "All",
                        "Animation",
                        "Development",
                        "Illustration",
                        "Social Media",
                        "Website",
                        "App Design",
                      ].map((c) => (
                        <button
                          key={c}
                          onClick={() => setActiveCategory(c)}
                          aria-pressed={activeCategory === c}
                          className={`px-4 py-2 text-[13px] sm:text-[14px] rounded-lg font-medium transition-all ${
                            activeCategory === c
                              ? "bg-gradient-to-r from-[#2352A5] to-[#3CA9E2] text-white shadow-md"
                              : "bg-white/70 text-[#08306F] hover:bg-white"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-[300px] md:w-[340px]">
                <div
                  className="flex items-center justify-between gap-3 bg-white/50 backdrop-blur-lg border border-[#D6D6D6]/60 rounded-[9999px] px-6 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_4px_18px_rgba(0,0,0,0.08)]"
                  style={{ minHeight: "56px" }}
                >
                  <input
                    placeholder="Search"
                    className="flex-1 outline-none bg-transparent text-sm placeholder:text-gray-500"
                    aria-label="Search"
                  />
                  <button
                    aria-label="Search"
                    className="p-2 rounded-full text-[#2352A5] hover:bg-white/60 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2352A5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="6" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {[{ img: SynchroTask, title: "Synchrotask" }, { img: SkillLoop, title: "Skill Loop" }].map(
                ({ img, title }) => (
                  <div
                    key={title}
                    className="relative bg-white rounded-lg overflow-hidden shadow-md border border-transparent hover:border-[#2352A5] transition"
                  >
                    <img
                      loading="lazy"
                      src={img}
                      alt={title}
                      className="w-full h-[200px] md:h-[300px] lg:h-[320px] object-cover rounded-t-lg"
                    />
                    <div className="p-6 flex items-center justify-between">
                      <div className="pr-3">
                        <h3 className="text-[20px] md:text-[22px] font-[600] text-[#0B1730]">
                          {title}
                        </h3>
                        <p className="text-[13px] text-[#6B7280] mt-2">
                          AI-Powered Productivity with Human Precision
                        </p>
                      </div>
                      <button
                        aria-label={`Open ${title}`}
                        className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-gray-100 bg-[#F6F5F8]"
                      >
                        <span className="text-[#2352A5] text-xl transform -rotate-45" aria-hidden>
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                {
                  img: UrbanPilgrim,
                  title: "Urban Pilgrim",
                  subtitle: "Urban Wellness Rooted in Indian Wisdom",
                },
                {
                  img: eCommerce,
                  title: "Ecommerce Website",
                  subtitle: "AI-Powered Productivity",
                },
                {
                  img: TakshilaFm,
                  title: "Takshila FM",
                  subtitle: "AI-Powered Productivity",
                },
              ].map(({ img, title, subtitle }) => (
                <div
                  key={title}
                  className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-transparent hover:border-[#2352A5] transition"
                >
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-t-lg"
                  />
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-[16px] font-[600]">{title}</h4>
                      <p className="text-[12px] text-[#6B7280] mt-1">
                        {subtitle}
                      </p>
                    </div>
                    <button
                      aria-label={`Open ${title}`}
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-gray-100 bg-[#F6F5F8]"
                    >
                      <span className="text-[#2352A5] text-xl transform -rotate-45" aria-hidden>
                        →
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="px-6 py-2 md:py-3.5 sm:py-2.5 rounded-md bg-gradient-to-r from-[#2352A5] to-[#3CA9E2] text-white text-lg shadow-md">
                Load More
              </button>
            </div>
          </div>
        </section>

        <div ref={contactRef} className="mt-6 sm:mt-[40px]">
          <div className="w-full border-t border-gray-300 opacity-70 relative z-[5]" />
          <Contact />
        </div>
      </div>
    </>
  );
}
