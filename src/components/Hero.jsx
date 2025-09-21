import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ellipse from "../assets/Ellipse.png";

// =============================
// IMPORTS: Rectangles
// =============================
import R1_1 from "../assets/Rectangles1/Rectangle1.png";
import R1_2 from "../assets/Rectangles1/Rectangle2.png";
import R2_1 from "../assets/Rectangles2/Rectangle1(1).png";
import R2_2 from "../assets/Rectangles2/Rectangle2(1).png";
import R3_1 from "../assets/Rectangles3/Rectangle1(2).png";
import R3_2 from "../assets/Rectangles3/Rectangle2(2).png";
import R4_1 from "../assets/Rectangles4/Rectangle1(3).png";
import R4_2 from "../assets/Rectangles4/Rectangle2(3).png";

// =============================
// CONFIG: LAYOUTS
// =============================
const layouts = [
  {
    rectangles: [
      { src: R1_1, style: { top: "120px", left: "950px", width: "420px" } },
      { src: R1_2, style: { top: "500px", left: "1250px", width: "360px" } },
    ],
    topics: [
      "Website Maintenance",
      "Custom Website Development",
      "App Development",
      "Graphics Designing",
    ],
  },
  {
    rectangles: [
      { src: R2_1, style: { top: "130px", left: "930px", width: "430px" } },
      { src: R2_2, style: { top: "520px", left: "1230px", width: "350px" } },
    ],
    topics: ["Website Audit", "Google My Business", "SEO Optimization", "Hosting"],
  },
  {
    rectangles: [
      { src: R3_1, style: { top: "140px", left: "940px", width: "420px" } },
      { src: R3_2, style: { top: "530px", left: "1240px", width: "340px" } },
    ],
    topics: ["UI/UX Design", "Product Strategy", "Marketing Automation", "Branding"],
  },
  {
    rectangles: [
      { src: R4_1, style: { top: "150px", left: "960px", width: "430px" } },
      { src: R4_2, style: { top: "540px", left: "1260px", width: "330px" } },
    ],
    topics: ["E-commerce", "Landing Pages", "Analytics", "Content Writing"],
  },
];

// =============================
// HERO COMPONENT
// =============================
export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % layouts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = layouts[index];

  return (
<section
  id="hero"
  className="relative flex justify-center items-center overflow-hidden pt-24"
  style={{
    background:
      "linear-gradient(90deg, #ffffff 0%, #ffffff 40%, #75C5EB 70%, #44A1E2 100%)",
  }}
>
      <div
        className="relative flex items-center justify-between px-20"
        style={{ width: "1728px", height: "1117px" }}
      >
        {/* ✅ Ellipse Background */}
        <img
          src={ellipse}
          alt="background ellipse"
          className="absolute left-[200px] top-32 w-[850px] opacity-80 z-0"
        />

        {/* LEFT SIDE: TEXT */}
        <div className="max-w-xl space-y-6 z-10">
          <h1
            className="font-sora font-semibold text-black"
            style={{
              fontSize: "72px",
              lineHeight: "100%",
              letterSpacing: "0",
            }}
          >
            We Build Products <br />
            that Work – Fast.
          </h1>
          <p
            className="font-sora text-black"
            style={{
              fontSize: "22px",
              fontWeight: "400",
              lineHeight: "100%",
            }}
          >
            From startup tools to enterprise systems – Code-X-Novas crafts
            scalable, AI-powered solutions that redefine productivity
          </p>
          <div className="flex gap-6">
            <button className="px-8 py-4 rounded-md bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold hover:opacity-90">
              Explore Our Products
            </button>
            <button className="px-8 py-4 rounded-md border-2 border-sky-500 text-sky-600 font-semibold hover:bg-sky-50">
              Partner With Us
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: ANIMATED IMAGES + TOPICS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {current.rectangles.map((rect, i) => (
              <img
                key={i}
                src={rect.src}
                alt={`Rectangle ${i + 1}`}
                className="absolute rounded-md shadow-lg"
                style={rect.style}
              />
            ))}

            {/* Topics */}
            <div className="absolute top-60 left-[1050px] flex flex-col space-y-5">
              {current.topics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white shadow-lg px-6 py-4 text-lg font-sora font-medium text-gray-900 flex items-center justify-between w-[420px] cursor-pointer hover:shadow-xl"
                >
                  <span>{topic}</span>
                  <span className="text-sky-600 text-xl font-bold">↗</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
