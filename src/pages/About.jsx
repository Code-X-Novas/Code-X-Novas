{/*Few Imports*/ }
import React from "react";
import mobileFrame from "../assets/About/MobileFrame.png";
import firstImg from "../assets/About/1st.png";
import secondImg from "../assets/About/2nd.png";
import thirdImg from "../assets/About/3rd.png";

import brand1 from "../assets/About/brand1.png";
import brand2 from "../assets/About/brand2.png";
import brand3 from "../assets/About/brand3.png";
import brand4 from "../assets/About/brand4.png";

import aboutBg from "../assets/About/AboutSection.png";

{/*About Section*/}
const About = () => {
  return (
    <div className="w-full overflow-x-hidden relative">
      
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full px-4 md:px-6 lg:px-12 overflow-hidden mt-4 md:mt-6 lg:mt-2">
      
        <div className="hidden md:flex w-full md:w-[50%] justify-center items-start bg-white">
          <img
            src={mobileFrame}
            alt="Mobile mockup"
            className="h-[82vh] lg:h-[88vh] w-auto object-contain mt-0 md:mt-4 md:ml-[20px] lg:ml-[40px]"
          />
        </div>

        <div className="w-full md:w-[50%] flex flex-col justify-center px-4 md:px-10 lg:pl-20 xl:pl-80 py-16 md:py-20 lg:py-24 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2
              className="text-[36px] sm:text-[32px] md:text-[48px] lg:text-[56px] leading-[110%] mb-8"
              style={{
                fontFamily: "Sora",
                fontWeight: 600,
              }}
            >
              <span style={{ color: "#000000" }}>About</span>{" "}
              <span style={{ color: "#0368FF" }}>Us</span>
            </h2>

            <p
              style={{
                fontFamily: "Sora",
                fontWeight: 100,
                color: "#555555",
                maxWidth: "650px", 
                margin: "0 auto",
                lineHeight: "1.5",
                letterSpacing: "0.2px",
              }}
              className="text-[18px] sm:text-[20px] md:text-[24px] text-center md:text-left mb-4"
            >
              We're not an agency. We're a product-driven innovation studio.
              <br />
              <br />
              Code-X-Novas is a team of full-stack engineers, designers, and
              strategists building impactful digital platforms like SyncroTask
              and more.
            </p>

            <div className="flex justify-center md:hidden mt-2">
              <img
                src={mobileFrame}
                alt="Mobile mockup"
                className="h-[40vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Parallex Section */}
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
          <img src={brand1} alt="Brand 1" className="w-[100px] md:w-[120px] lg:w-[150px] h-auto" />
          <img src={brand2} alt="Brand 2" className="w-[100px] md:w-[120px] lg:w-[150px] h-auto" />
          <img src={brand3} alt="Brand 3" className="w-[100px] md:w-[120px] lg:w-[150px] h-auto" />
          <img src={brand4} alt="Brand 4" className="w-[100px] md:w-[120px] lg:w-[150px] h-auto" />
        </div>
      </section>
    </div>
  );
};

export default About;
