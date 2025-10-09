import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import Contact from "../Contact";

import Picture from "../../assets/InternalPages/BlogsPage/Picture.png";

import frame1 from "../../assets/InternalPages/BlogsPage/Frames/Frame1.png";
import frame2 from "../../assets/InternalPages/BlogsPage/Frames/Frame2.png";
import frame3 from "../../assets/InternalPages/BlogsPage/Frames/Frame3.png";
import frame4 from "../../assets/InternalPages/BlogsPage/Frames/Frame4.png";
import frame5 from "../../assets/InternalPages/BlogsPage/Frames/Frame5.png";
import frame6 from "../../assets/InternalPages/BlogsPage/Frames/Frame6.png";
import frame7 from "../../assets/InternalPages/BlogsPage/Frames/Frame7.png";
import frame8 from "../../assets/InternalPages/BlogsPage/Frames/Frame8.png";
import frame9 from "../../assets/InternalPages/BlogsPage/Frames/Frame9.png";
import frame10 from "../../assets/InternalPages/BlogsPage/Frames/Frame10.png";
import frame11 from "../../assets/InternalPages/BlogsPage/Frames/Frame11.png";
import frame12 from "../../assets/InternalPages/BlogsPage/Frames/Frame12.png";

export default function BlogsPage() {

  const [showBlur, setShowBlur] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [activeCategory, setActiveCategory] = useState("AI & Automation");

  const sectionRef = useRef(null);
  const contactRef = useRef(null);


  const frames = [
    frame1, frame2, frame3, frame4, frame5, frame6,
    frame7, frame8, frame9, frame10, frame11, frame12,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBlur(!entry.isIntersecting);
      },
      { threshold: 0.2 } 
    );
  
    if (contactRef.current) observer.observe(contactRef.current);
  
    return () => observer.disconnect();
  }, []);
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [frames.length]);
  const blurLevel = 6; 
  const opacityLevel = 1;
  
  const nextFrame = (currentFrame + 1) % frames.length;

  return (
    <>
      <Navbar />

      <div className="relative w-full bg-white overflow-hidden min-h-screen">
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
                  "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
                zIndex: 2,
              }}
            />
            {frames.map((f, i) => (
              <img
                key={i}
                src={f}
                alt={`blog-frame-${i}`}
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

=        <section
          ref={sectionRef}
          className="relative z-10 pt-[130px] pb-[40px] text-left px-[3%] max-w-[1400px] mx-auto"
        >
          <h3
            className="uppercase mb-2 text-[#2352A5] font-[600]"
            style={{ fontFamily: "Sora", fontSize: "16px" }}
          >
            Blogs
          </h3>
          <h1
            className="text-[52px] md:text-[62px] font-[600] text-black leading-[1.1] mb-[8px]"
            style={{ fontFamily: "Sora" }}
          >
            Insights, Trends & Tips
          </h1>
          <p
            className="text-[#333] text-[17px] md:text-[17px] max-w-[750px] mb-[40px]"
            style={{ fontFamily: "Sora", fontWeight: 400 }}
          >
            Stay updated with the latest in tech, AI, and business growth strategies.
          </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-[40px]">
  <div className="w-full flex justify-start">
    <img
      src={Picture}
      alt="Featured Blog"
      className="rounded-lg shadow-md w-[85%] h-[300px] object-cover md:h-[260px] lg:h-[300px]"
    />
  </div>

<div className="flex flex-col justify-start mt-0 md:ml-[-30px] md:mt-[8px]"> 
<span
  className="inline-flex items-center gap-2 px-2 py-[3px] text-[11px] font-[500] rounded-full bg-white text-[#2352A5] mb-3 shadow-sm w-auto"
  style={{
    fontFamily: "Sora",
    display: "inline-flex",
    width: "fit-content",
  }}
>
  <span className="w-[12px] h-[12px] bg-[#2352A5] rounded-full inline-block"></span>
  Artificial Intelligence
</span>

<h2
  className="
    text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px]
    font-[600] text-[#111]
    leading-[1.25]
    mb-3
    max-w-[600px]
  "
  style={{ fontFamily: 'Sora' }}
>
  <span className="hidden lg:inline">
    Mastering ChatGPT Blog <br />
    Creation: Dos and Don'ts for <br />
    SaaS Marketing Managers
  </span>

  <span className="inline lg:hidden">
    Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers
  </span>
</h2>


  <p
    className="text-[#444] text-[15.5px] max-w-[520px] mb-4"
    style={{ fontFamily: "Sora", fontWeight: 400 }}
  >
    Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS <br />
    Marketing Managers
  </p>

  <p
  className="text-gray-500 text-[14px] mb-1"
  style={{ fontFamily: "Sora" }}
>
  Oct 19 · 10 min read
</p>

<p
  className="text-[#2352A5] text-[15px] font-[600] hover:underline cursor-pointer"
  style={{ fontFamily: "Sora" }}
>
  Read more →
</p>

</div>

</div>
      </section>

<section className="relative z-10 px-[0%] pb-[80px] max-w-[1300px] mx-auto text-left -mt-[25px]">
  <div className="flex justify-between items-center mb-5 px-[1%]">
    <h2
      className="text-[20px] md:text-[22px] font-[600] text-black"
      style={{ fontFamily: "Sora" }}
    >
      Top Reads
    </h2>

    <div className="flex space-x-3 mr-[2%]">
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#08306F] text-[#08306F] hover:bg-[#2352A5] hover:text-white transition-all duration-300 group">
        <span className="text-xl transition-transform duration-300 group-hover:-translate-x-[3px]">
          ‹
        </span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#08306F] text-[#08306F] hover:bg-[#2352A5] hover:text-white transition-all duration-300 group">
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-[3px]">
          ›
        </span>
      </button>
    </div>
  </div>

  <div className="   grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3 
    gap-8 sm:gap-10 md:gap-12 
    px-[2%] md:px-[1%] 
    max-w-[1300px] mx-auto">
    {[1, 2, 3].map((idx) => (
      <div
        key={idx}
        className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
      >
        <img
          src={Picture}
          alt={`Blog ${idx}`}
          className="w-full h-[200px] object-cover rounded-lg"
        />

        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[8px] rounded-b-xl transition-opacity duration-300 group-hover:opacity-90" />

        <div className="absolute bottom-6 left-4 right-4 text-white">
          <span
            className="inline-flex items-center gap-2 px-2 py-[2px] text-[10.5px] font-[500] rounded-full bg-white/90 text-[#2352A5] mb-2"
            style={{ fontFamily: "Sora" }}
          >
            <span className="w-[8px] h-[8px] bg-[#2352A5] rounded-full inline-block"></span>
            Artificial Intelligence
          </span>

          <h3
            className="text-[22px] font-[600] leading-[1.2] mb-[-15px]"
            style={{ fontFamily: "Sora" }}
          >
            Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>
   <section
          className="relative z-10 w-full py-[70px] px-[6%] mt-[0px] overflow-hidden"
        >
          <h2
            className="text-[22px] md:text-[24px] font-[600] text-black mb-8"
            style={{ fontFamily: "Sora" }}
          >
            Browse By Categories
          </h2>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div
  className="flex flex-wrap gap-3 justify-center md:justify-start 
             border border-[#ccc] 
             rounded-2xl md:rounded-full 
             px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 
             w-full md:w-auto bg-white/80 backdrop-blur-sm"
  style={{
    transition: "all 0.3s ease-in-out",
  }}
>
              {[
                "All",
                "AI & Automation",
                "Startups & Business",
                "Design & Development",
                "Productivity Hacks",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-[10px] rounded-full border text-[15px] font-[500] transition-all duration-300 ${
                    activeCategory === cat
                      ? "text-black"
                      : "text-black hover:border-[#2352A5]"
                  }`}
                  style={{
                    fontFamily: "Sora",
                    background:
                      activeCategory === cat
                        ? "radial-gradient(circle at top, #D7FFFE 10%, #3EB9FF 100%)"
                        : "transparent",
                    borderColor:
                      activeCategory === cat ? "transparent" : "transparent",
                    boxShadow:
                      activeCategory === cat
                        ? "0 0 0 1px #ccc inset"
                        : "none",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center border border-[#ccc] rounded-full px-4 py-[16px] w-[240px] md:w-[280px] bg-white/80 backdrop-blur-sm">
              <input
                type="text"
                placeholder="Search Blogs"
                className="flex-1 bg-transparent outline-none text-[15.5px] text-gray-700 placeholder-black"
                style={{ fontFamily: "Sora" }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </div>
          </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-[0.2%] max-w-[1220px] mx-auto mt-[30px]">
  {[
    {
      category: "Artificial Intelligence",
      color: "#2352A5",
      date: "Oct 19 · 10 min read",
      title:
        "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
      image: Picture,
    },
    {
      category: "The Future of Work",
      color: "#2352A5",
      date: "Nov 5 · 8 min read",
      title:
        "Embracing Remote Teams: Strategies for Success in a Hybrid Environment",
      image: Picture,
    },
    {
      category: "UX Design Trends",
      color: "#2352A5",
      date: "Dec 12 · 15 min read",
      title: "Top 10 UX Design Trends to Watch in 2024",
      image: Picture,
    },
    {
      category: "Artificial Intelligence",
      color:"#2352A5",
      date: "Oct 19 · 10 min read",
      title:"Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
      image: Picture,
    },
    {
      category: "Machine Learning Trends",
      color: "#2352A5",
      date: "Nov 5 · 15 min read",
        title:"Top 5 Machine Learning Trends to Watch in 2023",
      image: Picture,
    },
    {
      category: "Data Privacy",
      color: "#2352A5",
      date: "Dec 12 · 8 min read",
      title:
      "Navigating Data Privacy Regulations: Essential Tips for Businesses",
      image: Picture,
    },
  ].map((blog, idx) => (
    <div
      key={idx}
      className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <img
        src={blog.image}
        alt={`Blog ${idx}`}
        className="w-full h-[230px] object-cover rounded-lg"
      />

      <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[8px] rounded-b-xl transition-opacity duration-300 group-hover:opacity-90" />

      <div className="absolute bottom-6 left-4 right-4 text-white">
        <span
          className="inline-flex items-center gap-2 px-2 py-[2px] text-[10.5px] font-[500] rounded-full bg-white/90 mb-2"
          style={{ color: blog.color, fontFamily: "Sora" }}
        >
          <span
            className="w-[8px] h-[8px] rounded-full inline-block"
            style={{ backgroundColor: blog.color }}
          ></span>
          {blog.category}
        </span>

        <p
          className="text-gray-300 text-[13px] mb-[3px]"
          style={{ fontFamily: "Sora" }}
        >
          {blog.date}
        </p>

        <h3
          className="text-[16px] font-[600] leading-[1.3]"
          style={{ fontFamily: "Sora" }}
        >
          {blog.title}
        </h3>
      </div>
    </div>
  ))}
</div>


<div className="flex justify-center items-center mt-12 space-x-3">
  {[1, 2, 3, "...", 5].map((num, i) => (
    <button
      key={i}
      disabled={num === "..."}
      className={`${
        num === "..."
          ? "text-[#2352A5] text-[18px] font-[600] cursor-default px-2"
          : `w-8 h-8 flex items-center justify-center rounded-full text-[15px] font-[500] border ${
              num === 1
                ? "bg-[#2352A5] text-white border-[#2352A5]"
                : "border-[#2352A5] text-[#2352A5] hover:bg-[#2352A5] hover:text-white"
            }`
      }`}
      style={{ fontFamily: "Sora" }}
    >
      {num}
    </button>
  ))}
</div>

        </section>
        </div> 
        <div
  ref={contactRef}
  className="relative z-20 bg-white w-full"
  style={{
    boxShadow: "0 -10px 30px rgba(0,0,0,0.05)", 
  }}
>
  <Contact />
</div>

</>

  );
}
