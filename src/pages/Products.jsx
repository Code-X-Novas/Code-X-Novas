{/* Few Imports */}
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import Client1 from "../assets/Products/Client1.png";
import Client2 from "../assets/Products/Client2.png";
import Client3 from "../assets/Products/Client3.png";

// Testimonial data
const testimonials = [Client1, Client2, Client3];

const Products = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Button functions
  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-white text-center overflow-hidden">
   
      <h2
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
        style={{ fontFamily: "Sora" }}
      >
        <span className="text-black">What Our </span>
        <span className="text-blue-600">Clients Say</span>
      </h2>
  
      <div className="relative flex items-center justify-center max-w-6xl mx-auto">
        <button
          onClick={handlePrev}
          className="absolute -left-10 z-20 w-9 h-9 flex items-center justify-center 
                     border border-blue-800 rounded-full text-blue-800 
                     hover:bg-blue-800 hover:text-white transition"
        >
          <FiChevronLeft size={18} />
        </button>

        <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center perspective-[2000px]">
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[100%] h-7 bg-black/60 rounded-xl blur-lg"></div>

          <img
            src={testimonials[(index + 2) % testimonials.length]}
            alt="third stacked"
            className="absolute w-[80%] h-[80%] object-contain -top-14 z-10"
          />

          <img
            src={testimonials[(index + 1) % testimonials.length]}
            alt="second stacked"
            className="absolute w-[90%] h-[90%] object-contain -top-8 z-20"
          />

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={testimonials[index]}
              alt="Client"
              initial={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
                zIndex: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
                zIndex: 30,
              }}
              exit={{
                opacity: 1,
                scale: 0.85,
                y: 100,
                rotateX: direction === 1 ? 25 : -25,
                zIndex: 5,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-[100%] h-[100%] object-contain"
              style={{ transformOrigin: "center bottom" }}
            />
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="absolute -right-10 z-20 w-9 h-9 flex items-center justify-center 
                     border border-blue-800 rounded-full text-blue-800 
                     hover:bg-blue-800 hover:text-white transition"
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Products;
