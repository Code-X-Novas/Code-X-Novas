{/*Few Imports*/}
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import frame1 from "../../assets/InternalPages/ServicesPage/Frame1.png";
import frame2 from "../../assets/InternalPages/ServicesPage/Frame2.png";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [textOffset, setTextOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromTop = Math.max(0, windowHeight - rect.top);
        setTextOffset(distanceFromTop * 0.1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blurLevel = Math.min(scrollY / 200, 3);
  const opacityLevel = Math.max(0.25, 1 - scrollY / 700);

  const technologies = ["React.js", "Spring Boot", "Kotlin", "Flutter", "Node.js"];

  return (
    <>
      <Navbar />

      <div className="relative w-full min-h-[200vh] bg-white overflow-hidden">
        <div
          className="fixed top-[0px] right-[-70px] w-[75%] h-[100%] pointer-events-none transition-all duration-500 ease-out"
          style={{
            opacity: opacityLevel,
            filter: `blur(${blurLevel}px)`,
            zIndex: 1,
          }}
        >
          <img
            src={frame1}
            alt="Decorative Blur"
            className="w-full h-full object-contain"
            style={{
              objectPosition: "right center",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-28 pt-[130px] pb-[0px] max-w-[1000px]">
          <h3
            className="uppercase mb-2"
            style={{
              fontFamily: "Sora",
              fontWeight: 600,
              fontSize: "16px",
              color: "#2352A5",
            }}
          >
            Services
          </h3>

          <h1
            className="mb-5"
            style={{
              fontFamily: "Sora",
              fontWeight: 600,
              fontSize: "62px",
              color: "#000000",
              lineHeight: "1.25",
            }}
          >
            Our Expertise, <br /> Your Growth
          </h1>

          <p
            className="leading-relaxed mb-3 max-w-[520px]"
            style={{
              fontFamily: "Sora",
              fontWeight: 400,
              fontSize: "16px",
              color: "#555555",
            }}
          >
            At Code-X-Novas, we blend creativity, technology, and strategy to deliver tailor-made
            solutions for startups, brands, and individuals.
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

        <div
          ref={sectionRef}
          className="relative z-10 flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-28 mt-[80px]"
        >
          <div
            className="w-full md:w-1/2 overflow-visible"
            style={{
              height: "auto",
              marginTop: "-5vh",
              transform: `translateY(${textOffset * 0.6}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <img
              src={frame2}
              alt="Web and App Development"
              className="w-full h-auto object-cover"
            />
          </div>

          <div
            className="w-full md:w-1/2 flex flex-col justify-start text-left md:pl-10"
            style={{
              marginTop: "-40px",
              transform: `translateY(${textOffset * 0.6}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "Sora",
                fontWeight: 600,
                fontSize: "60px",
                color: "#000000",
                lineHeight: "1.25",
              }}
            >
              Web & App <br /> Development
            </h2>

            <p
              className="leading-relaxed mb-6 max-w-[560px]"
              style={{
                fontFamily: "Sora",
                fontWeight: 400,
                fontSize: "16px",
                color: "#555555",
              }}
            >
              Custom, scalable, and high-performing solutions for every platform.
              <br />
              <span style={{ fontWeight: 400 }}>Technologies:</span>
            </p>

            <div className="space-y-3 w-full">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 pb-3"
                >
                  <div className="flex items-center space-x-4">
                    <span
                      style={{
                        fontFamily: "Sora",
                        fontSize: "15px",
                        color: "#444",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "Sora",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      {tech}
                    </span>
                  </div>

                  <button
                    className="p-1.5 rounded-full border border-gray-300 hover:bg-[#2352A5] transition-all duration-300 group flex items-center justify-center"
                    style={{
                      width: "34px",
                      height: "34px",
                    }}
                  >
                    <ArrowRight
                      size={18}
                      className="text-[#2352A5] transition-transform duration-300 group-hover:text-white group-hover:translate-x-[4px]"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-300 opacity-70 mt-[80px]"></div>
      </div>
    </>
  );
}
