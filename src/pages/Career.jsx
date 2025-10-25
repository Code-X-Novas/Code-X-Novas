{/**Few Imports*/}
import React from "react";
import UIUX from "../assets/Career/uiux.png";
import Backend from "../assets/Career/backend.png";
import AI from "../assets/Career/ai.png";
import Community from "../assets/Career/community.png";

{/**Careers Section*/}
const careers = [
  { title: "UI/ UX Designer", img: UIUX },
  { title: "Backend Developer", img: Backend },
  { title: "AI Prompt Engineer", img: AI},
  { title: "Community Evangelist", img: Community },
];

const Careers = () => {
  return (
    <section className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#fdfdfd] to-[#f5f9ff] text-center overflow-hidden">
      <span className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-br from-blue-200 to-transparent opacity-5 rounded-full blur-2xl pointer-events-none"></span>

      <span className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-blue-200 to-transparent opacity-5 rounded-full blur-2xl pointer-events-none"></span>

      <h2
        className="text-2xl sm:text-4xl md:text-4xl font-bold mb-3 relative z-10 leading-tight"
        style={{ fontFamily: "Sora" }}
      >
        <span className="text-black">Join Our Product </span>
        <span className="text-blue-600">Team / Careers</span>
      </h2>
      <p className="text-black mb-12 text-base md:text-lg relative z-10">
        Replace mentorship with talent recruitment
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 relative z-10">
        {careers.map((career, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden cursor-pointer rounded-md"
          >
            <img
              src={career.img}
              alt={career.title}
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105 rounded-md"
            />

            <div
              className="absolute w-full flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out bottom-4 md:bottom-6 md:group-hover:bottom-1/2 md:group-hover:translate-y-1/2 p-3"
            >
              <h3 className="text-white text-sm md:text-lg font-semibold drop-shadow-md transition-all duration-500 leading-tight">
                {career.title}
              </h3>

    
              <button
                className="hidden md:inline-flex mt-3 px-4 py-2 bg-white text-gray-800 font-medium rounded-md shadow-lg transition-all duration-300 md:opacity-0 md:group-hover:opacity-100"
              >
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center relative z-10">
        <button className="relative flex items-center overflow-hidden rounded-md transition-all group">

          <span className="absolute inset-0 bg-gradient-to-r from-[#016FAE] to-[#4FA3FF] w-0 group-hover:w-full transition-all duration-300 rounded-md"></span>


          <span className="relative z-10 flex items-center justify-center w-12 h-10 rounded-sm bg-blue-600 text-white font-bold mr-3 transition-all duration-300">
            &gt;
          </span>


          <span className="relative z-10 pr-6 font-medium text-gray-800 md:group-hover:text-white transition-all duration-300">
            Join the Build Force
          </span>
        </button>
      </div>
    </section>
  );
};

export default Careers;
