// To make it pixel-perfect like the figma prototype, 
// I have used the pictures in the assets folder with named categories to which folder it belongs
// I have also used framer-motion to animate the pictures in the hero section, I have used react icons to make it exactly like the figma prototype
// I have also used react router dom to make the navbar functional 
// I have also used lucide-react to make the navbar functional on different aspects like menu and icons.
// Used tailwind css which has a major role in shaping this pixel perfect assigmnent. 
//To make it more readable and understanable , I have used comments. Kindly refer to the readme for better reference.

{/*New Changes*/}
//Now, The Hero section is made responsive by adjusting the frame size and overlapping of the inages and animation. 
//The navbar has a subtle hover effect . 
//The buttons and text have been resized to fit the screen size.
//Contact us button to be placed exactly like the prototype.
//Pictures and animation boxes have been aligned properly .


/* Few Imports */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";


import ellipse from "../assets/Home/Ellipse.png";

import R1_1 from "../assets/Home/Rectangles2/Rectangle1big.png";
import R1_2 from "../assets/Home/Rectangles2/Rectangle2small.png";
import R2_1 from "../assets/Home/Rectangles3/Rectangle3big.png";
import R2_2 from "../assets/Home/Rectangles3/Rectangle4small.png";

const layouts = [
  {
    rectangles: [
      { src: R1_1, style: { top: "95px", left: "50%", width: "300px", height: "400px" } },
      { src: R1_2, style: { top: "400px", left: "68%", width: "270px", height: "250px" } },
    ],
  },
  {
    rectangles: [
      { src: R2_1, style: { top: "95px", left: "50%", width: "300px", height: "400px" } },
      { src: R2_2, style: { top: "400px", left: "68%", width: "270px", height: "250px" } },
    ],
  },
];

const topics = [
  "Custom Website Development",
  "App Development",
  "Graphics Designing",
  "Website Audit",
  "Google My Business",
];

export default function HeroWithNavbar() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("up");
  const [offset, setOffset] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);
  const [groupWidth, setGroupWidth] = useState(0);
  const [open, setOpen] = useState(false);

  const boxRef = useRef(null);
  const measureRefs = useRef({});
  const location = useLocation();
const navigate = useNavigate();

const handleNavClick = (id, path) => {
  if (location.pathname === "/") {
    if (id === "contact") {
      const section = document.getElementById("contact");
      if (section) section.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(path);
  } else {
    navigate(path);
  }
};



  useEffect(() => {
    if (boxRef.current) setBoxHeight(boxRef.current.offsetHeight + 18);
  }, []);

  useEffect(() => {
    const group = ["App Development", "Graphics Designing", "Google My Business"];
    let maxWidth = 0;
    for (const topic of group) {
      const width = measureRefs.current[topic]?.offsetWidth || 0;
      if (width > maxWidth) maxWidth = width;
    }
    if (maxWidth) setGroupWidth(maxWidth + 80);
  }, []);

  useEffect(() => {
    if (!boxHeight) return;
    const interval = setInterval(() => {
      setOffset(direction === "up" ? -boxHeight : 0);
      setIndex((prev) => (prev + 1) % layouts.length);
      setDirection((d) => (d === "up" ? "down" : "up"));
    }, 3000);
    return () => clearInterval(interval);
  }, [direction, boxHeight]);

  const current = layouts[index];
  const activeIndex = offset === 0 ? 0 : 1;
  const top1 = parseInt(current.rectangles[0].style.top, 10);
  const top2 = parseInt(current.rectangles[1].style.top, 10);
  const midpoint = (top1 + top2) / 2;

  return (
<section
  id="hero"
  className="relative overflow-hidden"
  style={{
    width: "100%",
    background:
      window.innerWidth <= 768
        ? "linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #75C5EB 80%, #44A1E2 100%)"
        : "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #75C5EB 75%, #44A1E2 100%)",
    backgroundAttachment: window.innerWidth <= 768 ? "scroll" : "fixed",
    minHeight: window.innerWidth <= 768 ? "120vh" : "100vh",
  }}
>

<nav
  className="flex items-center justify-between px-6 h-[65px] md:h-[80px] lg:h-[90px] absolute top-0 left-0 z-50"
  style={{
    width: "100%",
    background: "#FFFFFFB5",
    boxShadow: "0px 4px 62.9px 0px #00000026",
    backdropFilter: "blur(10px)",
  }}
>
  <Link to="/" className="flex items-center pl-2">
    <img src={logo} alt="Code X Novas" className="h-[25px] sm:h-[-10px] md:h-[60px] lg:h-[55px] w-auto transition-all duration-300" />
  </Link>

  <div className="hidden md:flex items-center">
    <div className="flex items-center mr-80 space-x-6 lg:space-x-6 xl:space-x-8">
      <button onClick={() => handleNavClick("services", "/services")} className="font-sora text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4">Services</button>
      <button onClick={() => handleNavClick("works", "/works")} className="font-sora text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4">Works</button>
      <button onClick={() => handleNavClick("products", "/products")} className="font-sora text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4">Products</button>
      <button onClick={() => handleNavClick("blogs", "/blogs")} className="font-sora text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4">Blogs</button>
      <button onClick={() => handleNavClick("about", "/about")} className="font-sora text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4">About</button>
      <button onClick={() => handleNavClick("career", "/career")} className="font-sora text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4">Career</button>
    </div>
    <button
  onClick={() => handleNavClick("contact", "/contact")}
  className="relative overflow-hidden ml-auto px-6 py-2 rounded-md font-poppins text-[16px] text-white"
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
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  }}
>
  Contact us
</button>

  </div>

<div className="flex items-center gap-3 md:hidden">
  <button
    onClick={() => handleNavClick("contact", "/contact")}
    className="px-4 py-[6px] rounded-md font-poppins text-[14px] text-white whitespace-nowrap"
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
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
    }}
  >
    Contact us
  </button>
  <button
    className="text-gray-700"
    onClick={() => setOpen(!open)}
  >
    {open ? <X size={26} /> : <Menu size={26} />}
  </button>
</div>

</nav>

{open && (
  <div className="absolute top-[90px] left-0 w-full bg-white shadow-md z-40 flex flex-col p-6 space-y-6 md:hidden">
    <button onClick={() => handleNavClick("services", "/services")}>Services</button>
    <button onClick={() => handleNavClick("works", "/works")}>Works</button>
    <button onClick={() => handleNavClick("products", "/products")}>Products</button>
    <button onClick={() => handleNavClick("blogs", "/blogs")}>Blogs</button>
    <button onClick={() => handleNavClick("about", "/about")}>About</button>
    <button onClick={() => handleNavClick("career", "/career")}>Career</button>
    <button
      onClick={() => handleNavClick("contact", "/contact")}
      className="w-full text-center px-6 py-3 rounded-md font-poppins text-[16px] text-white bg-gradient-to-r from-[#2352A5] to-[#3CA9E2]"
    >
      Contact us
    </button>
  </div>
)}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pr-6 md:pr-28 z-10 h-screen">
        <img
          src={ellipse}
          alt="background ellipse"
          className="absolute left-[-2px] top-20 w-[600px] opacity-90 z-0 hidden md:block"
        />

        <div className="max-w-5xl z-10 flex-shrink-0 mt-[80px] md:ml-30 text-center md:text-left">
          <h1 className="font-sora font-semibold text-black mb-6 text-[24px] sm:text-[28px] md:text-[56px] lg:text-[64px] leading-[120%]">
            We Build Products <br /> that Work – Fast.
          </h1>
          <p className="font-sora text-black mb-8 text-[13px] sm:text-[15px] md:text-[20px] leading-[140%] font-normal">
            From startup tools to enterprise systems – Code-X- <br />
            Novas crafts scalable, AI-powered solutions that <br />
            redefine productivity
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 sm:mt-10 justify-center md:justify-start">
          <button
  onClick={() => {
    const section = document.getElementById("products");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }}
  className="relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold text-white"
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
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  }} 
>
  Explore Our Products
</button>

            <button
              className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-md text-black font-normal hover:bg-sky-50"
              style={{ border: "3px solid #1E5FB3" }}
            >
              Partner With Us
            </button>
          </div>
        </div>

        {/* Desktop Interface- seperated for clarity*/}
        <motion.div className="absolute inset-0 mt-10 z-10 hidden lg:block">
          {current.rectangles.map((rect, i) => (
            <img key={i} src={rect.src} alt={`Rectangle ${i + 1}`} className="absolute" style={rect.style} />
          ))}
          <div
            className="absolute left-[60%] overflow-hidden"
            style={{ top: midpoint + 130, transform: "translateY(-50%)", height: boxHeight * 3.5 }}
          >
            <motion.div animate={{ y: offset }} transition={{ duration: 0.5, ease: "easeInOut" }} className="flex flex-col space-y-[8px]">
              {topics.map((topic, i) => {
                const isActive = i === activeIndex;
                const group = ["App Development", "Graphics Designing", "Google My Business"];
                let widthStyle = "fit-content";
                if (group.includes(topic) && groupWidth) widthStyle = `${groupWidth - 40}px`;
                if (topic === "Custom Website Development" && measureRefs.current[topic]) {
                  const cWidth = measureRefs.current[topic]?.offsetWidth || 0;
                  widthStyle = `${cWidth}px`;
                }
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      if (el) measureRefs.current[topic] = el;
                      if (i === 0) boxRef.current = el;
                    }}
                    className="relative flex items-start bg-white"
                    style={{
                      transform: "scale(0.85)",
                      width: widthStyle,
                      padding: "20px 40px 16px 24px",
                      minHeight: "50px",
                      boxSizing: "border-box",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Sora",
                        fontWeight: 500,
                        fontSize: "20px",
                        color: isActive ? "#2352A5" : "#000000",
                      }}
                    >
                      {topic}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-3 right-3 transform rotate-90"
                    >
                      <path d="M20 4H8V16" stroke={isActive ? "#2352A5" : "#000000"} strokeWidth="2" />
                    </svg>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

{/* Tablet or iPad Interface- For seperated clarity */}

<div className="hidden md:flex lg:hidden flex-col items-center gap-6 mt-4 w-full">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
    {current.rectangles.map((rect, i) => (
      <img
        key={i}
        src={rect.src}
        alt={`Rectangle ${i + 1}`}
        className="w-[220px] sm:w-[110px] h-auto rounded shadow"
      />
    ))}
  </div>


  <motion.div
    animate={{ y: offset }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="flex flex-col items-center gap-3 mt-6 ml-3"
  >
    {topics.map((topic, i) => {
      const isActive = i === activeIndex;
      return (
        <div
          key={i}
          className="relative flex items-start bg-white shadow px-6 py-3 rounded"
        >
          <span
            style={{
              fontFamily: "Sora",
              fontWeight: 200,
              fontSize: "16px",
              color: isActive ? "#2352A5" : "#000000",
            }}
          >
            {topic}
          </span>
        </div>
      );
    })}
  </motion.div>
</div>


{/*Mobile Interface -Seperated for clarity*/}

<div className="flex md:hidden w-full flex-col items-center mt-6">
  <div className="relative w-[85%] sm:w-[70%] max-w-[220px] flex flex-col items-center">
    <img
      src={current.rectangles[0].src}
      alt="Big Rectangle"
      className="w-full rounded shadow"
    />

  
    <img
      src={current.rectangles[1].src}
      alt="Small Rectangle"
      className="w-[65%] sm:w-[60%] max-w-[120px] rounded shadow absolute bottom-[-12px] right-[-12px]"
    />

    <motion.div
      animate={{ y: offset }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute inset-0 flex flex-col justify-center items-center gap-[-12px]"
    >
      {topics.map((topic, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={i}
            className="relative flex items-center justify-center bg-white shadow rounded"
            style={{
              transform: "scale(0.55)",  
              padding: "12px 24px",
              minHeight: "40px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "Sora",
                fontWeight: 500,
                fontSize: "12px",
                color: isActive ? "#2352A5" : "#000000",
              }}
            >
              {topic}
            </span>

            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1 right-1 transform rotate-90"
            >
              <path
                d="M20 4H8V16"
                stroke={isActive ? "#2352A5" : "#000000"}
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      })}
    </motion.div>
  </div>
</div>

      </div>
    </section>
  );
}