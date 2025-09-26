{/**Few Imports*/}
import React, { useState } from "react";
import Synchrotask from "../assets/Works/synchrotask.png";
import SkillLoop from "../assets/Works/skillloop.png";
import UrbanPilgrim from "../assets/Works/urbanpilgrim.png";
import Ecommerce from "../assets/Works/ecommerce.png";
import TakshilaFM from "../assets/Works/takshilafm.png";
import CurveGlow from "../assets/Works/curve-glow.png";  
import CornerGlow from "../assets/Works/corner-glow.png"; 

{/**Works Section*/}
const projectsData = [
  { title: "Synchrotask", desc: "AI-Powered Productivity with Human Precision", img: Synchrotask, category: "Website" },
  { title: "Skill Loop", desc: "AI-Powered Productivity with Human Precision", img: UrbanPilgrim, category: "Website" },
  { title: "Urban Pilgrim", desc: "Urban Wellness Rooted in Indian Wisdom", img: SkillLoop, category: "Website" },
  { title: "Ecommerce Website", desc: "AI-Powered Productivity", img: Ecommerce, category: "Website" },
  { title: "Takshila FM", desc: "AI-Powered Productivity", img: TakshilaFM, category: "Website" },
];

{/*Categories- Various options as mentioned in the figma protoype */}
const categories = ["All", "Animation", "Development", "Illustration", "Social Media", "Website", "App Design"];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-black overflow-hidden">
     
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

      
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap items-center gap-0 bg-black border border-gray-700 rounded-xl px-2 py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 text-sm sm:text-base font-medium transition rounded-lg ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#016FAE] to-[#4FA3FF] text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

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
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.desc}</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-gray-900 
                                   flex items-center justify-center 
                                   hover:bg-gradient-to-r hover:from-[#016FAE] hover:to-[#4FA3FF] transition">
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
                <div className="text-left">
                  <h3 className="text-md font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.desc}</p>
                </div>
                <button className="w-9 h-9 rounded-full bg-gray-900 
                                   flex items-center justify-center 
                                   hover:bg-gradient-to-r hover:from-[#016FAE] hover:to-[#4FA3FF] transition">
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
    </section>
  );
};

export default Works;
