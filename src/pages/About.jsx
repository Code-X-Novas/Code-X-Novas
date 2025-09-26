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
      
      {/* Section with Mobile Mockup Image (Right now , made it with image soon will replace with the exact interface)*/}

      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full px-6 md:px-0 overflow-hidden">
        <div className="w-full md:w-[50%] flex justify-center items-start bg-white">
          <img
            src={mobileFrame}
            alt="Mobile mockup"
            className="h-[60vh] md:h-[80vh] w-auto object-contain mt-6 md:ml-[120px]"
          />
        </div>

        <div className="w-full md:w-[50%] flex flex-col justify-center px-4 md:px-12 lg:pl-80 xl:pl-80 py-12 md:py-20 text-center md:text-left">
          <h2
            className="mb-8 md:mb-14 text-[42px] md:text-[56px] leading-[110%]"
            style={{
              fontFamily: "Sora",
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#000000" }}>About</span>{" "}
            <span style={{ color: "#0368FF" }}>Us</span>
          </h2>

          {/* Followed exact paragraphs from figma design */}
          <p
            style={{
              fontFamily: "Sora",
              fontWeight: 100,
              fontSize: "25px",
              lineHeight: "120%",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            We're not an agency. We're a product-
            <br />
            driven innovation studio.
            <br />
            Code-X-Novas is a team of
            <br />
            full-stack engineers, designers, and strategists
            <br />
            building impactful digital platforms
            <br />
            like SyncroTask and more.
          </p>
        </div>
      </section>

      {/* The Parallex Section */}

      <section className="relative min-h-[100vh] w-screen overflow-hidden">
        
        <div
          className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover grayscale"
          style={{ backgroundImage: `url(${aboutBg})` }}
        ></div>

        
        <div className="absolute inset-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-start pt-40 md:pt-60 pb-20 md:pb-40 space-y-20 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:space-x-20">
            <div className="flex flex-col items-center">
              <img
                src={firstImg}
                alt="Product Engineering"
                className="shadow-lg w-[260px] md:w-[340px] h-auto"
              />
              <p className="text-white mt-4 text-base md:text-lg">
                Product Engineering
              </p>
            </div>

            <div className="flex flex-col items-center md:mt-20">
              <img
                src={secondImg}
                alt="AI Integrations"
                className="shadow-lg w-[280px] md:w-[360px] h-auto"
              />
              <p className="text-white mt-4 text-base md:text-lg">
                AI Integrations
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={thirdImg}
                alt="SaaS Infrastructure"
                className="shadow-lg w-[260px] md:w-[340px] h-auto"
              />
              <p className="text-white mt-4 text-base md:text-lg">
                Scalable SaaS Infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*The brands section- A small card of trusted brands as mentioned in figma prototype */}

      <section className="relative flex flex-col items-center justify-center w-full bg-white py-12 md:py-20 overflow-hidden">
        <h2
          className="text-center text-lg md:text-2xl font-bold mb-10"
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

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <img src={brand1} alt="Brand 1" className="w-[100px] md:w-[150px] h-auto" />
          <img src={brand2} alt="Brand 2" className="w-[100px] md:w-[150px] h-auto" />
          <img src={brand3} alt="Brand 3" className="w-[100px] md:w-[150px] h-auto" />
          <img src={brand4} alt="Brand 4" className="w-[100px] md:w-[150px] h-auto" />
        </div>
      </section>
    </div>
  );
};

export default About;
