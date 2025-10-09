{/*Few Imports*/}

import React from "react";
import Big1 from "../assets/Blogs/big1.png";
import Blog1 from "../assets/Blogs/1st.png";
import Blog2 from "../assets/Blogs/2nd.png";
import Blog3 from "../assets/Blogs/3rd.png";

{/*Blogs Section*/}
const Blogs = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-b from-[#fdfdfd] to-[#f5f9ff]">
      
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "Sora" }}
        >
          <span className="text-black">Our Latest </span>
          <span className="text-blue-600">Blogs</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
       
        <div>
          <h3 className="text-2xl font-bold text-black mb-4 leading-snug">
            Lorem ipsum is placeholder text <br />
            commonly
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum is placeholder text commonly used in the graphic, <br />
            print, and publishing industries for previewing layouts and visual <br />
            mockups.
          </p>
        </div>
       
        <div className="relative">
          <div className="absolute -top-6 -right-6 w-full h-full bg-gray-200"></div>
          <img
            src={Big1}
            alt="Featured blog"
            className="relative w-full h-[350px] object-cover z-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[{ img: Blog1 }, { img: Blog2 }, { img: Blog3 }].map((blog, idx) => (
          <div key={idx} className="flex flex-col">
            <img
              src={blog.img}
              alt={`Blog ${idx + 1}`}
              className="w-full h-[220px] object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-black leading-snug mb-2">
              Lorem ipsum is placeholder text <br />
              commonly
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
