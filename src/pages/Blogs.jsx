import React, { useState } from "react";
import Big1 from "../assets/Blogs/big1.png";
import Blog1 from "../assets/Blogs/1st.png";
import Blog2 from "../assets/Blogs/2nd.png";
import Blog3 from "../assets/Blogs/3rd.png";

const Blogs = () => {
  const posts = [
    {
      id: 0,
      img: Big1,
      title: "Lorem ipsum is placeholder text commonly",
      desc:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      id: 1,
      img: Blog1,
      title: "Lorem ipsum is place holder text",
      desc:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      id: 2,
      img: Blog2,
      title: "Lorem ipsum is place holder text",
      desc:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      id: 3,
      img: Blog3,
      title: "Lorem ipsum is place holder text",
      desc:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ];

  const [selectedId, setSelectedId] = useState(0);

  return (
    <section
      id="blogs"
      className="w-full py-8 lg:py-20 px-6 md:px-12 bg-gradient-to-b from-[#fdfdfd] to-[#f5f9ff]"
    >
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "Sora" }}
        >
          <span className="text-black">Our Latest </span>
          <span className="text-blue-600">Blogs</span>
        </h2>
      </div>

      <div className="block lg:hidden mb-12">
        <div className="mr-6 relative mb-6">
          <div className="absolute -top-6 -right-6 left-5 w-full h-full bg-gray-200"></div>
          <img
            src={posts.find((p) => p.id === selectedId).img}
            alt="Featured blog mobile"
            className="relative w-full h-[230px] object-cover z-10"
          />
        </div>

        <h3 className="text-xl font-bold text-black mb-4 leading-snug">
          {posts
            .find((p) => p.id === selectedId)
            .title.split("\n")
            .map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i <
                  posts
                    .find((p) => p.id === selectedId)
                    .title.split("\n").length -
                    1 && <br />}
              </React.Fragment>
            ))}
        </h3>
        <p className="text-gray-600 text-md leading-relaxed mb-6">
          {posts.find((p) => p.id === selectedId).desc}
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4 leading-snug">
              Lorem ipsum is placeholder text <br />
              commonly
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum is placeholder text commonly used in the graphic, <br />
              print, and publishing industries for previewing layouts and visual{" "}
              <br />
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
      </div>

      <div className="block lg:hidden">
        <div className="space-y-4">
          {posts
            .filter((p) => p.id !== selectedId)
            .map((blog) => (
              <button
                key={blog.id}
                onClick={() => {
                  setSelectedId(blog.id);
                  const el = document.getElementById("blogs");
                  if (el && typeof el.scrollIntoView === "function") {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="w-full flex items-center gap-3 bg-white shadow-sm overflow-hidden"
              >
                <div className="w-1/2 h-[110px] flex-shrink-0">
                  <img
                    src={blog.img}
                    alt={`Blog ${blog.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 px-3 py-2 text-left flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-black leading-tight mb-1">
                    {blog.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-snug line-clamp-3">
                    {blog.desc}
                  </p>
                </div>
              </button>
            ))}
        </div>
      </div>

      <div className="hidden lg:block">
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
      </div>
    </section>
  );
};

export default Blogs;
