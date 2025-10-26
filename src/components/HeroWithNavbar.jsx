import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";

import ellipse from "../assets/Home/Ellipse.png";

import brand1 from "../assets/About/brand1.png";
import brand2 from "../assets/About/brand2.png";
import brand3 from "../assets/About/brand3.png";
import brand4 from "../assets/About/brand4.png";

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
  className="relative overflow-hidden mb-6"
  style={{
    width: "100%",
    // Base is white. The visible blue-to-white top layer is rendered by the element below
    background: "#ffffff",
    // Reduce the mobile min-height (was 120vh) to avoid excessive vertical space
    // on small phones. Desktop remains unchanged.
    minHeight: window.innerWidth <= 768 ? "1vh" : "100vh",
  }}
>
  {/* Top gradient layer to create a smooth blue-to-white upper section (not a hard rectangle) */}
  <div
    aria-hidden
    className="absolute top-0 left-0 w-full z-0"
    style={{
      // smaller gradient band on very small phones to match Figma spacing
      height: window.innerWidth <= 640 ? "36vh" : window.innerWidth <= 768 ? "48vh" : "60vh",
      background: "linear-gradient(180deg, #e6f6ff 0%, #d7f0ff 35%, rgba(255,255,255,0.95) 100%)",
      // rounded bottom to avoid a sharp rectangular cut
      borderBottomLeftRadius: window.innerWidth <= 768 ? "40% 20%" : "28% 12%",
      borderBottomRightRadius: window.innerWidth <= 768 ? "40% 20%" : "28% 12%",
      pointerEvents: "none",
    }}
  />

  {/* Right-side atmospheric gradient (desktop lg+): stronger, blurred radial glow */}
  <div
    aria-hidden
    className="absolute top-0 right-0 h-full z-0 hidden lg:block"
    style={{
      width: '48%',
      // Smooth right-side color wash (less clustered, more uniform)
      // Use a wide linear gradient from subtle transparency into the brand blues
      background: 'linear-gradient(90deg, rgba(230,246,255,0) 0%, rgba(213,238,255,0.6) 25%, rgba(135,195,235,0.6) 55%, rgba(52,138,217,0.9) 100%)',
      opacity: 1,
      // small blur to soften transition edges without producing a concentrated "spot"
      filter: 'blur(18px)',
      transform: 'translateX(2%)',
      pointerEvents: 'none',
    }}
  />
{/* The rest of the code remains unchanged */}
<nav
  className="flex items-center justify-between px-6 h-[65px] md:h-[80px] lg:h-[90px] fixed top-0 left-0 z-50"
  style={{
    width: "100%",
    background: "#FFFFFFB5",
    boxShadow: "0px 4px 62.9px 0px #00000026",
    backdropFilter: "blur(10px)",
  }}
>
  <Link to="/" className="flex items-center pl-2">
    <img
      src={logo}
      alt="Code X Novas"
      className="w-auto transition-all duration-300"
      style={{ height: window.innerWidth <= 640 ? 36 : window.innerWidth <= 768 ? 48 : 64 }}
    />
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
  {/* Mobile-only Contact button removed so only hamburger is visible on small screens */}
  <button
    className="text-gray-700"
    onClick={() => setOpen(!open)}
    aria-label={open ? "Close menu" : "Open menu"}
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
  <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pr-6 md:pr-28 z-10 h-auto md:h-screen">
        <img
          src={ellipse}
          alt="background ellipse"
          className="absolute left-[-2px] top-20 w-[600px] opacity-90 z-0 hidden md:block"
        />

        {/* Mobile: top gradient band that contains heading + CTAs only; below this is white (so white starts after CTAs) */}
  {/* reduce top gap on phones so CTAs and logos sit higher (mobile-only) */}
  <div className="w-full md:hidden mt-28">
          <div className="w-full px-6 py-6">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="font-sora font-semibold text-black mb-10 sm:mb-6 text-[28px] sm:text-[32px] leading-[120%]">
                We Build <span className="text-[#2352A5]">Products</span> <br /> that Work – <span className="text-[#2352A5]">Fast.</span>
              </h1>
              <p className="font-sora text-gray-600 mb-8 text-[14px] sm:text-[16px] leading-[140%] font-normal tracking-tight">
                From startup tools to enterprise systems – Code-X- 
                Novas crafts scalable, AI-powered solutions that 
                redefine productivity
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-10 sm:mt-10 justify-center mb-6 sm:mb-0">
                <button
                  onClick={() => {
                    const section = document.getElementById("products");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-[230px] sm:w-auto mx-auto sm:mx-0 relative overflow-hidden px-6 py-3 sm:px-6 sm:py-3 rounded-md font-semibold text-white text-[16px] sm:text-[18px]"
                  style={{
                    background: `linear-gradient(90deg,#2352A5 0%,#137DD1 20%,#02A7FD 45%,#42ACEF 70%,#7DE2FF 92%,#B7F1FF 100%)`,
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  Explore Our Products
                </button>

                <button
                  className="w-[190px] sm:w-auto mx-auto sm:mx-0 px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-md sm:rounded-md text-[#1E5FB3] font-medium text-[15px] sm:text-[17px] hover:bg-sky-50 border-[#1E5FB3] border-[1.5px] sm:border-[3px] text-center bg-transparent"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </div>

          {/* Mobile logos sit on the white section below the gradient band */}
          <div className="w-full bg-white py-2 sm:py-4 flex flex-col items-center -mb-2 sm:mb-0">
            <h3 className="text-center text-[#2352A5] font-semibold tracking-wide text-[14px] sm:text-[15px] mb-10 sm:mb-4 px-4">
              TRUSTED BY CURRENT AND SOON TO BE <span className="">WORLD-CLASS BRANDS</span>
            </h3>
            <div className="flex items-center justify-center gap-6 px-4 mb-6 sm:mb-0">
              <img src={brand1} alt="brand1" className="h-10 object-contain" />
              <img src={brand2} alt="brand2" className="h-10 object-contain" />
              <img src={brand3} alt="brand3" className="h-10 object-contain" />
              <img src={brand4} alt="brand4" className="h-10 object-contain" />
            </div>
          </div>

        </div>

        {/* Desktop / tablet: original hero content (kept for md+) */}
        <div className="max-w-5xl z-10 flex-shrink-0 mt-28 md:mt-[80px] md:ml-30 text-center md:text-left hidden md:block">
          <h1 className="font-sora font-semibold text-black mb-6 text-[24px] sm:text-[28px] md:text-[56px] lg:text-[64px] leading-[120%]">
            We Build <span className="text-[#2352A5] md:text-black">Products</span> <br /> that Work – <span className="text-[#2352A5] md:text-black">Fast.</span>
          </h1>
          <p className="font-sora text-gray-600 md:text-black mb-8 text-[12px] sm:text-[15px] md:text-[20.5px] leading-[140%] font-normal tracking-tight">
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
              className="w-[220px] sm:w-auto mx-auto sm:mx-0 relative overflow-hidden px-6 py-3 sm:px-6 sm:py-3 rounded-md font-semibold text-white text-[15px] sm:text-[16px]"
              style={{
                background: `linear-gradient(90deg,#2352A5 0%,#137DD1 20%,#02A7FD 45%,#42ACEF 70%,#7DE2FF 92%,#B7F1FF 100%)`,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
              }}
            >
              Explore Our Products
            </button>

            <button
              className="w-[190px] sm:w-auto mx-auto sm:mx-0 px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-md sm:rounded-md text-[#1E5FB3] font-medium text-[14px] sm:text-[16px] hover:bg-sky-50 border-[#1E5FB3] border-[1.5px] sm:border-[3px] text-center bg-transparent"
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
                  // For this specific long label we want it to wrap into two lines
                  // (matching the first screenshot). Cap the rendered width so the
                  // text naturally breaks. Use measured text width + small padding,
                  // but don't exceed 180px to force wrapping.
                  const capped = Math.min(cWidth + 40, 340);
                  widthStyle = `${capped}px`;
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

{/* Hide the heavy rectangle/topic visual on very small phones so the About
  section (which is rendered right after this hero) appears immediately
  after the brand logos. This is a mobile-only adjustment — desktop/tablet
  behavior is unchanged. */}

<div className="hidden sm:flex md:hidden w-full flex-col items-center mt-6">
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
                fontSize: "14px",
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
