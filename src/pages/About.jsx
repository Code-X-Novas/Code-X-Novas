import React, { useRef, useEffect, useState } from "react";
import mobileFrame from "../assets/About/MobileFrame.png";
import firstImg from "../assets/About/1st.png";
import secondImg from "../assets/About/2nd.png";
import thirdImg from "../assets/About/3rd.png";

import brand1 from "../assets/About/brand1.png";
import brand2 from "../assets/About/brand2.png";
import brand3 from "../assets/About/brand3.png";
import brand4 from "../assets/About/brand4.png";

import aboutBg from "../assets/About/AboutSection.png";

const About = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const sectionRef = useRef(null);
  const visibleRef = useRef(visibleIndex);
  const [visibleProgress, setVisibleProgress] = useState(-1);
  const visibleProgressRef = useRef(visibleProgress);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 768) return;

    const inSectionRef = { current: false };
    let ticking = false;

    const computeAndSetIndex = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      inSectionRef.current = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (!inSectionRef.current) {
        setVisibleIndex(-1);
        setVisibleProgress(-1);
        visibleProgressRef.current = -1;
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const offset = viewportCenter - rect.top;
      const ratio = Math.max(0, Math.min(1, offset / rect.height));
      const prog = ratio * 2;
      setVisibleProgress(prog);
      visibleProgressRef.current = prog;
      setVisibleIndex(Math.round(prog));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          computeAndSetIndex();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    computeAndSetIndex();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const getMobileImageStyle = (i) => {
    const prog = typeof visibleProgress === "number" ? visibleProgress : -1;
    const diff = Math.max(0, 1 - Math.abs(prog - i));
    const translateY = 40 - 64 * diff;
    const opacity = diff;
    const zIndex = diff > 0.45 ? 20 : 10;
    return {
      transform: `translateY(${translateY}px)`,
      opacity,
      transition: "transform 420ms cubic-bezier(.2,.9,.2,1), opacity 360ms ease",
      zIndex,
    };
  };

  const getLabelStyle = (i) => {
    const prog = typeof visibleProgress === "number" ? visibleProgress : -1;
    const diff = Math.max(0, 1 - Math.abs(prog - i));
    const opacity = diff;
    const translateY = (1 - diff) * 24; // moved text lower
    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      transition: "transform 380ms cubic-bezier(.2,.9,.2,1), opacity 300ms ease",
    };
  };

  useEffect(() => {
    visibleRef.current = visibleIndex;
  }, [visibleIndex]);

  return (
    <div className="w-full overflow-x-hidden relative">
      <div className="hidden md:block w-full">
        <section className="flex flex-col md:flex-row items-center justify-between md:min-h-screen w-full px-4 md:px-6 lg:px-12 overflow-hidden mt-0 md:mt-6 lg:mt-2">
          <div className="w-full md:w-[50%] justify-center items-start bg-white flex">
            <img
              src={mobileFrame}
              loading="lazy"
              alt="Mobile mockup"
              className="h-[82vh] lg:h-[88vh] w-auto object-contain mt-0 md:mt-4 md:ml-[20px] lg:ml-[40px]"
            />
          </div>

          <div className="w-full md:w-[50%] flex flex-col justify-center px-4 md:px-10 lg:pl-20 xl:pl-80 py-6 md:py-20 lg:py-24 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h2
                className="text-[28px] sm:text-[32px] md:text-[48px] lg:text-[56px] leading-[110%] mb-6 md:mb-8"
                style={{ fontFamily: "Sora", fontWeight: 600 }}
              >
                <span style={{ color: "#000000" }}>About</span>{" "}
                <span style={{ color: "#0368FF" }}>Us</span>
              </h2>

              <p
                style={{
                  fontFamily: "Sora",
                  fontWeight: 300,
                  color: "#6b6b6b",
                  maxWidth: "650px",
                  margin: "0 auto",
                  lineHeight: "1.6",
                  letterSpacing: "0.2px",
                }}
                className="text-[15px] sm:text-[18px] md:text-[24px] text-center md:text-left mb-3 md:mb-4"
              >
                We're not an agency. We're a product-driven innovation studio.
                <br />
                <br className="hidden md:block" />
                Code-X-Novas is a team of full-stack engineers, designers, and
                strategists building impactful digital platforms like SyncroTask
                and more.
              </p>
            </div>
          </div>
        </section>

        <section className="relative min-h-[100vh] w-screen overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover grayscale"
            style={{ backgroundImage: `url(${aboutBg})` }}
          ></div>
          <div className="absolute inset-0 w-full h-full bg-black/40"></div>
          <div className="relative z-10 flex flex-col items-center justify-start pt-32 md:pt-48 lg:pt-60 pb-16 md:pb-28 lg:pb-40 space-y-16 md:space-y-20 w-full">
            <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 md:gap-8 lg:gap-20">
              <div className="flex flex-col items-center">
                <img
                  src={firstImg}
                  loading="lazy"
                  alt="Product Engineering"
                  className="shadow-lg w-full max-w-[160px] md:max-w-[200px] lg:max-w-[300px] h-auto object-contain mb-6"
                />
                <p className="text-white mt-2 text-sm md:text-base lg:text-lg">
                  Product Engineering
                </p>
              </div>

              <div className="flex flex-col items-center md:mt-6 lg:mt-20">
                <img
                  src={secondImg}
                  loading="lazy"
                  alt="AI Integrations"
                  className="shadow-lg w-full max-w-[180px] md:max-w-[220px] lg:max-w-[320px] h-auto object-contain mb-6"
                />
                <p className="text-white mt-2 text-sm md:text-base lg:text-lg">
                  AI Integrations
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={thirdImg}
                  loading="lazy"
                  alt="SaaS Infrastructure"
                  className="shadow-lg w-full max-w-[160px] md:max-w-[200px] lg:max-w-[300px] h-auto object-contain mb-6"
                />
                <p className="text-white mt-2 text-sm md:text-base lg:text-lg">
                  Scalable SaaS Infrastructure
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col items-center justify-center w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
          <h2
            className="text-center text-lg md:text-xl lg:text-2xl font-bold mb-8 md:mb-10"
            style={{
              fontFamily: "Sora",
              background:
                "linear-gradient(90.23deg, #082F6E -4.75%, #2352A5 48.42%, #02A2FD 100.57%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TRUSTED BY CURRENT AND SOON TO BE WORLD-CLASS BRANDS
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12">
            <img loading="lazy" src={brand1} alt="Brand 1" className="w-[100px] md:w-[120px] lg:w-[150px] h-auto" />
            <img loading="lazy" src={brand2} alt="Brand 2" className="w-[100px] md:w-[120px] lg:w-[150px] h-auto" />
            <img loading="lazy" src={brand3} alt="Brand 3" className="w-[100px] md:w-[120px] lg:w-[150px] h-auto" />
            <img loading="lazy" src={brand4} alt="Brand 4" className="w-[100px] md:w-[120px] lg:w-[150px] h-auto" />
          </div>
        </section>
      </div>

      <div className="block md:hidden w-full">
        <section className="flex flex-col items-center justify-center w-full px-4 mt-6">
          <div className="flex flex-col items-center text-center">
            <h2
              className="text-[28px] sm:text-[32px] leading-[110%] mb-6"
              style={{ fontFamily: "Sora", fontWeight: 600 }}
            >
              <span style={{ color: "#000000" }}>About</span>{" "}
              <span style={{ color: "#0368FF" }}>Us</span>
            </h2>

            <p
              style={{
                fontFamily: "Sora",
                fontWeight: 300,
                color: "#6b6b6b",
                maxWidth: "650px",
                margin: "0 auto",
                lineHeight: "1.6",
                letterSpacing: "0.2px",
              }}
              className="text-[15px] sm:text-[18px] mb-3"
            >
              We're not an agency. We're a product-driven innovation studio.
              <br />
              Code-X-Novas is a team of full-stack engineers, designers, and
              strategists building impactful digital platforms like SyncroTask
              and more.
            </p>

            <img
              src={mobileFrame}
              loading="lazy"
              alt="Mobile mockup"
              className="h-[40vh] w-auto object-contain mt-4"
            />
          </div>
        </section>

        <section ref={sectionRef} className="relative h-[45vh] w-screen overflow-hidden mt-10">
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover grayscale"
            style={{ backgroundImage: `url(${aboutBg})` }}
          ></div>
          <div className="absolute inset-0 w-full h-full bg-black/40"></div>

          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={firstImg}
              loading="lazy"
              alt="Product Engineering"
              className="absolute w-[70%] h-auto object-contain"
              style={getMobileImageStyle(0)}
            />
            <img
              src={secondImg}
              loading="lazy"
              alt="AI Integrations"
              className="absolute w-[70%] h-auto object-contain"
              style={getMobileImageStyle(1)}
            />
            <img
              src={thirdImg}
              loading="lazy"
              alt="SaaS Infrastructure"
              className="absolute w-[70%] h-auto object-contain"
              style={getMobileImageStyle(2)}
            />

            <p
              className="absolute bottom-8 text-white text-center w-full"
              style={{ ...getLabelStyle(0), fontFamily: "Sora", fontWeight: 500 }}
            >
              Product Engineering
            </p>

            <p
              className="absolute bottom-8 text-white text-center w-full"
              style={{ ...getLabelStyle(1), fontFamily: "Sora", fontWeight: 500 }}
            >
              AI Integrations
            </p>

            <p
              className="absolute bottom-8 text-white text-center w-full"
              style={{ ...getLabelStyle(2), fontFamily: "Sora", fontWeight: 500 }}
            >
              Scalable SaaS Infrastructure
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
