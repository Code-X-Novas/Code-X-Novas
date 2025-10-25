import React, { useState, useEffect } from "react";
import Synchrotask from "../assets/Works/synchrotask.png";
import SkillLoop from "../assets/Works/skillloop.png";
import UrbanPilgrim from "../assets/Works/urbanpilgrim.png";
import Ecommerce from "../assets/Works/ecommerce.png";
import TakshilaFM from "../assets/Works/takshilafm.png";
import CurveGlow from "../assets/Works/curve-glow.png";  
import CornerGlow from "../assets/Works/corner-glow.png"; 

/**Works Section*/
const projectsData = [
  { title: "Synchrotask", desc: "AI-Powered Productivity with Human Precision", img: Synchrotask, category: "Website" },
  { title: "Skill Loop", desc: "AI-Powered Productivity with Human Precision", img: UrbanPilgrim, category: "Website" },
  { title: "Urban Pilgrim", desc: "Urban Wellness Rooted in Indian Wisdom", img: SkillLoop, category: "Website" },
  { title: "Ecommerce Website", desc: "AI-Powered Productivity", img: Ecommerce, category: "Website" },
  { title: "Takshila FM", desc: "AI-Powered Productivity", img: TakshilaFM, category: "Website" },
];

/**Categories- Various options as mentioned in the figma protoype */
const categories = ["All", "Animation", "Development", "Illustration", "Social Media", "Website", "App Design"];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  // mobile-only: number of visible project cards (shows 3, then +3 per Load More)
  const [mobileVisibleCount, setMobileVisibleCount] = useState(3);

  // Reset mobile visible count when category changes to ensure mobile shows first 3 of new filter
  useEffect(() => {
    setMobileVisibleCount(3);
  }, [activeCategory]);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  // --- Mobile Glassmorphism Class ---
  // Using a class for the new glass effect: low white background, slight border, and backdrop blur.
  const glassEffectClassMobile = "bg-white/5 border border-white/10 backdrop-blur-sm";

  return (
    <section className="relative w-full py-8 px-6 md:px-12 bg-black overflow-hidden">
     
      <img
        src={CornerGlow}
        alt="Glow"
        className="absolute top-0 right-0 w-[300px] md:w-[500px] pointer-events-none select-none"
      />
      <img
        src={CurveGlow}
        alt="Glow"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] pointer-events-none select-none"
      />
      <div className="relative z-10">
 
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora" }}
          >
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-[#0A5FFF] to-[#4FA3FF] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
        </div>
      
        <div className="flex justify-center mb-8">
          {/* 1. Mobile: horizontal scroll showing only a few category chips; Updated with Glass effect for mobile */}
          {/* Note: The desktop styling (md:bg-black border border-white/10) is now inside the md: flex-wrap to keep it separate */}
          <div 
            className={`flex items-center gap-2 rounded-xl px-2 py-2 overflow-x-auto whitespace-nowrap md:flex-wrap md:justify-center ${glassEffectClassMobile} md:bg-black md:border-gray-700 md:border md:backdrop-blur-none`} 
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                // inline-block + whitespace-nowrap (mobile) allow horizontal scrolling on small screens
                // md:whitespace-normal restores wrap behavior on larger screens (no desktop change)
                className={`inline-block px-4 sm:px-6 py-2 text-sm sm:text-base font-medium transition rounded-lg whitespace-nowrap md:whitespace-normal ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#016FAE] to-[#4FA3FF] text-white shadow-lg"
                    : "text-white/70 hover:text-white md:text-gray-300"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* MOBILE: show limited number of project cards (single column), expand by 3 on Load More */}
        <div className="md:hidden">
          <div className="flex flex-col gap-6 mb-6 items-center">
            {filteredProjects.slice(0, mobileVisibleCount).map((project, index) => (
              <div key={index} className="flex flex-col w-[92%] max-w-[440px] mx-auto">
                <div className="border border-gray-800 hover:border-[#016FAE] transition aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="text-left flex-1 pr-3">
                    {/* 3. Mobile: Ensure title and description are on separate lines and description clamps to 2 lines */}
                    <h3 className="text-lg font-semibold text-white leading-tight mb-1">{project.title}</h3>
                    <p
                      className="text-sm text-white/60 leading-tight"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.desc}
                    </p>
                  </div>
                  {/* 2. Mobile: Updated arrow button with Glass effect */}
                  <button
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition focus:outline-none ${glassEffectClassMobile} hover:bg-gradient-to-r hover:from-[#016FAE] hover:to-[#4FA3FF] active:bg-gradient-to-r active:from-[#016FAE] active:to-[#4FA3FF]`}
                    aria-label={`Open ${project.title}`}
                  >
                    <span className="text-white text-xl transform -rotate-45">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            {mobileVisibleCount < filteredProjects.length ? (
              <button
                onClick={() => setMobileVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length))}
                className="px-6 py-3 bg-gradient-to-r from-[#016FAE] to-[#4FA3FF] text-white rounded-lg hover:opacity-90 transition"
              >
                Load More
              </button>
            ) : null}
          </div>
        </div>
        
        {/* DESKTOP & TABLET: original layout preserved exactly */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_40%] justify-center gap-6 lg:gap-x-4 mb-6">
            {filteredProjects.slice(0, 2).map((project, index) => (
              <div key={index} className="flex flex-col w-full">
                <div className="border border-gray-800 hover:border-[#016FAE] transition aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="text-left flex-1 pr-3">
                    <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                    <p
                      className="text-sm text-gray-400"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.desc}
                    </p>
                  </div>
                  <button
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition focus:outline-none ${glassEffectClassMobile} hover:bg-gradient-to-r hover:from-[#016FAE] hover:to-[#4FA3FF] active:bg-gradient-to-r active:from-[#016FAE] active:to-[#4FA3FF]`}
                    aria-label={`Open ${project.title}`}
                  >
                    <span className="text-white text-xl transform -rotate-45">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[27%_27%_27%] justify-center gap-6 lg:gap-x-4">
            {filteredProjects.slice(2).map((project, index) => (
              <div key={index} className="flex flex-col w-full">
                <div className="border border-gray-800 hover:border-[#016FAE] transition aspect-square overflow-hidden rounded-lg">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-left flex-1 pr-3">
                    <h3 className="text-md font-semibold text-white mb-1">{project.title}</h3>
                    <p
                      className="text-sm text-gray-400"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.desc}
                    </p>
                  </div>
                  <button
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition focus:outline-none ${glassEffectClassMobile} hover:bg-gradient-to-r hover:from-[#016FAE] hover:to-[#4FA3FF] active:bg-gradient-to-r active:from-[#016FAE] active:to-[#4FA3FF]`}
                    aria-label={`Open ${project.title}`}
                  >
                    <span className="text-white text-lg transform -rotate-45">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-gradient-to-r from-[#016FAE] to-[#4FA3FF] text-white rounded-lg hover:opacity-90 transition">
              Load More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
