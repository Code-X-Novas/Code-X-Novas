// To make it pixel-perfect like the figma prototype, 
// I have used the pictures in the assets folder with named categories to which folder it belongs
// I have also used framer-motion to animate the pictures in the hero section, I have used react icons to make it exactly like the figma prototype
// I have also used react router dom to make the navbar functional 
// I have also used lucide-react to make the navbar functional on different aspects like menu and icons.
// Used tailwind css which has a major role in shaping this pixel perfect assigmnent. 
//To make it more readable and understanable , I have used comments. Kindly refer to the readme for better reference.


{/*Few Imports*/}
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import logo from "../assets/logo.svg";
import ellipse from "../assets/Home/Ellipse.png";

import R1_1 from "../assets/Home/Rectangles2/Rectangle1big.png";
import R1_2 from "../assets/Home/Rectangles2/Rectangle2small.png";
import R2_1 from "../assets/Home/Rectangles3/Rectangle3big.png";
import R2_2 from "../assets/Home/Rectangles3/Rectangle4small.png";

{/*The layouts for the picture animation provided in figma Prototype*/}
const layouts = [
  {
    rectangles: [
      {
        src: R1_1,
        style: { top: "145px", left: "1140px", width: "360px", height: "490px" },
      },
      {
        src: R1_2,
        style: { top: "520px", left: "1380px", width: "300px", height: "290px" },
      },
    ],
  },
  {
    rectangles: [
      {
        src: R2_1,
        style: { top: "145px", left: "1140px", width: "360px", height: "490px" },
      },
      {
        src: R2_2,
        style: { top: "520px", left: "1380px", width: "300px", height: "290px" },
      },
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

{/*HerowithNavbar provided together for Home Page build Everything is collectively combined here.*/}
export default function HeroWithNavbar() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("up");
  const [offset, setOffset] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);
  const [groupWidth, setGroupWidth] = useState(0);
  const [open, setOpen] = useState(false);

  const boxRef = useRef(null);
  const measureRefs = useRef({});

  useEffect(() => {
    if (boxRef.current) setBoxHeight(boxRef.current.offsetHeight + 20);
  }, []);
 

 {/*Using UseEffect here to calculate the width of the group of topics and set the width accordingly*/}

  useEffect(() => {
    const group = ["App Development", "Graphics Designing", "Google My Business"];
    let maxWidth = 0;
    for (const topic of group) {
      const width = measureRefs.current[topic]?.offsetWidth || 0;
      if (width > maxWidth) maxWidth = width;
    }
    if (maxWidth) {
      setGroupWidth(maxWidth + 80);
    }
  }, []);

  useEffect(() => {
    if (!boxHeight) return;
    const interval = setInterval(() => {
      if (direction === "up") {
        setOffset(-boxHeight);
        setIndex((prev) => (prev + 1) % layouts.length);
      } else {
        setOffset(0);
        setIndex((prev) => (prev + 1) % layouts.length);
      }
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
      className="relative overflow-x-auto"
      style={{
        minWidth: "1728px",
        background:
          "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #75C5EB 75%, #44A1E2 100%)",
      }}
    >
      {/*The Navbar Section with all the components and logo.*/}
      <nav
        className="flex items-center justify-between px-6 h-[90px] md:h-[110px] lg:h-[130px] absolute top-0 left-0 z-50"
        style={{
          minWidth: "1728px",
          background: "#FFFFFFB5",
          boxShadow: "0px 4px 62.9px 0px #00000026",
          backdropFilter: "blur(10px)",
        }}
      >
        <Link to="/" className="flex items-center pl-2">
          <img
            src={logo}
            alt="Code X Novas"
            className="h-[80px] md:h-[150px] lg:h-[220px] w-auto"
          />
        </Link>

        {/* Desktop version of the navbar Links*/}

        <div className="hidden md:flex mr-24 items-center space-x-6 lg:space-x-10 xl:space-x-14">
          <a href="#services" className="font-sora text-[16px] text-black">
            Services
          </a>
          <a href="#works" className="font-sora text-[16px] text-black">
            Our Works
          </a>
          <a href="#products" className="font-sora text-[16px] text-black">
            Products
          </a>
          <a href="#blogs" className="font-sora text-[16px] text-black">
            Blogs
          </a>
          <a href="#about" className="font-sora text-[16px] text-black">
            About us
          </a>
          <a href="#career" className="font-sora text-[16px] text-black">
            Career
          </a>
          <a
  href="#contact"
  className="relative overflow-hidden ml-6 px-6 py-2 rounded-md font-poppins text-[16px] text-white bg-gradient-to-r from-[#2352A5] to-[#3CA9E2]
    before:content-[''] before:absolute before:top-0 before:left-[-150%]
    before:w-[150%] before:h-full before:bg-gradient-to-r
    before:from-transparent before:via-white/60 before:to-transparent
    before:skew-x-[-20deg]
    hover:before:animate-shine"
>
  Contact us
</a>

        </div>

       {/*Mobile version of the navbar with Hamburger menu*/}

        <button
          className="md:hidden flex items-center text-gray-700 ml-3"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/*Hamburger- Also known as the dropdown menu of the collection of items in the navbar has been made here!*/}
      {open && (
        <div className="absolute top-[90px] left-0 w-full bg-white shadow-md z-40 flex flex-col items-start p-6 space-y-6 md:hidden">
          <a href="#services" className="font-sora text-[16px] text-black">
            Services
          </a>
          <a href="#works" className="font-sora text-[16px] text-black">
            Our Works
          </a>
          <a href="#products" className="font-sora text-[16px] text-black">
            Products
          </a>
          <a href="#blogs" className="font-sora text-[16px] text-black">
            Blogs
          </a>
          <a href="#about" className="font-sora text-[16px] text-black">
            About us
          </a>
          <a href="#career" className="font-sora text-[16px] text-black">
            Career
          </a>
          <Link
            to="/contact"
            className="w-full text-center px-6 py-3 rounded-md font-poppins text-[16px] text-white bg-gradient-to-r from-[#2352A5] to-[#3CA9E2]"
          >
            Contact us
          </Link>
        </div>
      )}

      {/*The Hero Section has aninmation for boxes and the interface has been made here*/}
      <div
        className="relative flex items-center justify-between px-20 pr-28 z-10"
        style={{
          minWidth: "1728px",
          height: "1117px",
        }}
      >
        <img
          src={ellipse}
          alt="background ellipse"
          className="absolute left-[1px] top-40 w-[850px] opacity-80 z-0"
        />

        {/* The left side of it contains the heading and the paragraph */}
        <div className="max-w-4xl z-10 flex-shrink-0 mt-15">
          <h1
            className="font-sora font-semibold text-black mb-6"
            style={{ fontSize: "72px", lineHeight: "130%" }}
          >
            We Build Products <br /> that Work – Fast.
          </h1>
          <p
            className="font-sora text-black mb-12"
            style={{
              fontSize: "22px",
              fontWeight: 400,
              lineHeight: "140%",
            }}
          >
            From startup tools to enterprise systems – Code-X- <br />
            Novas crafts scalable, AI-powered solutions that <br />
            redefine productivity
          </p>

          <div className="flex gap-10 mt-16">
            <button
              onClick={() => {
                const section = document.getElementById("products");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative overflow-hidden px-8 py-4 rounded-md font-semibold text-white cursor-pointer bg-gradient-to-r from-[#2352A5] to-[#3CA9E2]
                before:content-[''] before:absolute before:top-0 before:left-[-150%]
                before:w-[150%] before:h-full before:bg-gradient-to-r
                before:from-transparent before:via-white/60 before:to-transparent
                before:skew-x-[-20deg]
                hover:before:animate-shine"
            >
              Explore Our Products
            </button>
            <button className="px-8 py-4 rounded-md border-2 border-sky-500 text-sky-600 font-semibold hover:bg-sky-50">
              Partner With Us
            </button>
          </div>
        </div>

        {/*The right side of it contains the boxes animation alaong with*/}
        <motion.div className="absolute inset-0 mt-16 z-10">
          {current.rectangles.map((rect, i) => (
            <img
              key={i}
              src={rect.src}
              alt={`Rectangle ${i + 1}`}
              className="absolute"
              style={rect.style}
            />
          ))}

          <div
            className="absolute left-[1250px] overflow-hidden"
            style={{
              top: midpoint + 165,
              transform: "translateY(-50%)",
              height: boxHeight * 4,
            }}
          >
            <motion.div
              animate={{ y: offset }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col space-y-[20px]"
            >
              {topics.map((topic, i) => {
                const isActive = i === activeIndex;
                const group = [
                  "App Development",
                  "Graphics Designing",
                  "Google My Business",
                ];

                let widthStyle = "fit-content";
                if (group.includes(topic) && groupWidth) {
                  widthStyle = `${groupWidth - 40}px`;
                }
                if (
                  topic === "Custom Website Development" &&
                  measureRefs.current[topic]
                ) {
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
                    className="relative inline-flex items-center bg-white"
                    style={{
                      transform: "rotate(0deg)",
                      opacity: 1,
                      width: widthStyle,
                      padding: "20px 50px 20px 30px",
                      minHeight: "80px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Sora",
                        fontWeight: 50,
                        fontSize: "24px",
                        color: isActive ? "#2352A5" : "#000000",
                        opacity: 1,
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
        </motion.div>
      </div>

    </section>
  );
}
