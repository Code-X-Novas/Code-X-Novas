import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import Contact from "../Contact";

import UIUX from "../../assets/Career/uiux.png";
import Backend from "../../assets/Career/backend.png";
import AI from "../../assets/Career/ai.png";
import Community from "../../assets/Career/community.png";

import frame1 from "../../assets/InternalPages/CareerPage/Frames/Frame1.png";
import frame2 from "../../assets/InternalPages/CareerPage/Frames/Frame2.png";
import frame3 from "../../assets/InternalPages/CareerPage/Frames/Frame3.png";
import frame4 from "../../assets/InternalPages/CareerPage/Frames/Frame4.png";
import frame5 from "../../assets/InternalPages/CareerPage/Frames/Frame5.png";
import frame6 from "../../assets/InternalPages/CareerPage/Frames/Frame6.png";
import frame7 from "../../assets/InternalPages/CareerPage/Frames/Frame7.png";
import frame8 from "../../assets/InternalPages/CareerPage/Frames/Frame8.png";
import frame9 from "../../assets/InternalPages/CareerPage/Frames/Frame9.png";
import frame10 from "../../assets/InternalPages/CareerPage/Frames/Frame10.png";
import frame11 from "../../assets/InternalPages/CareerPage/Frames/Frame11.png";
import frame12 from "../../assets/InternalPages/CareerPage/Frames/Frame12.png";

export default function CareerPage() {
    const [scrollY, setScrollY] = useState(0);
    const [showBlur, setShowBlur] = useState(true);
    const [currentFrame, setCurrentFrame] = useState(0);
    const contactRef = useRef(null);

    const frames = [
        frame1, frame2, frame3, frame4, frame5, frame6,
        frame7, frame8, frame9, frame10, frame11, frame12
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (contactRef.current) {
                const contactTop = contactRef.current.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;
                const isContactVisible = contactTop < screenHeight * 0.9;
                setShowBlur(!isContactVisible);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % frames.length);
        }, 9000);
        return () => clearInterval(interval);
    }, [frames.length]);

    const blurLevel = Math.min(scrollY / 200, 3);
    const opacityLevel = Math.max(0.3, 1 - scrollY / 700);
    const nextFrame = (currentFrame + 1) % frames.length;

    const careers = [
        { title: "UI/ UX Designer", img: UIUX },
        { title: "Backend Developer", img: Backend },
        { title: "Frontend Developer", img: AI },
        { title: "Business Development Executive", img: Community },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <SEO
                title="Careers — Code X Novas | Join Our Team"
                description="Explore career opportunities at Code X Novas. We're hiring UI/UX designers, developers, and business professionals. Build the future with us."
                url="https://codexnovas.in/career"
            />
            <Navbar />

            <div className="relative w-full bg-white overflow-hidden">
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
                                    "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                                zIndex: 2,
                                pointerEvents: "none",
                            }}
                        />

                        {frames.map((f, i) => (
                            <img
                                key={i}
                                src={f}
                                loading="lazy"
                                alt={`career-frame-${i}`}
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

                <section className="relative z-10 pt-[95px] sm:pt-[140px] md:pt-[100px] lg:pt-[100px] pb-[20px] px-6 md:px-[5%] max-w-[1400px] mx-auto text-left">
                    <motion.h3
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="uppercase mb-[10px] text-[#2352A5] font-[600] text-[13px] sm:text-[14px] md:text-[16px]"
                        style={{ fontFamily: "Sora", letterSpacing: "1px" }}
                    >
                        Career
                    </motion.h3>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                        className="
      font-[600]
      text-black
      leading-[1.2]
      mb-3
      text-[30px] sm:text-[42px] md:text-[52px] lg:text-[62px]
    "
                        style={{ fontFamily: "Sora" }}
                    >
                        Join the Code-X-Novas <br className="hidden sm:block" /> Family
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        className="
      text-[#333]
      font-[400]
      text-[14px] sm:text-[16px] md:text-[17px]
      leading-[1.6]
      max-w-[750px]
      text-left
      sm:whitespace-normal whitespace-normal
    "
                        style={{ fontFamily: "Sora" }}
                    >
                        We're always on the lookout for passionate innovators, problem solvers, and creators.
                    </motion.p>
                </section>


                <section className="relative w-full py-4 px-6 md:px-12 bg-white text-center overflow-hidden -mt-[35px]">
                    <div className="flex justify-between items-center mb-5 px-[2.5%]">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-[20px] md:text-[20px] font-[600] text-black text-left mt-[25px]"
                            style={{ fontFamily: "Sora" }}
                        >
                            Open Positions
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            className="
    flex space-x-3 mr-[4%] mt-[25px] sm:mt-[0] 
    relative z-[20]
    will-change-transform
  "
                            style={{
                                transform: "translateZ(0)",
                                backfaceVisibility: "hidden",
                            }}
                        >

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#08306F] text-[#08306F] hover:bg-[#2352A5] hover:text-white transition-all duration-300 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                    className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-[3px]"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#08306F] text-[#08306F] hover:bg-[#2352A5] hover:text-white transition-all duration-300 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[3px]"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </motion.div>

                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, staggerChildren: 0.15, delayChildren: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-1  mb-12 relative z-10"
                    >
                        {careers.map((career, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative group overflow-hidden cursor-pointer w-[90%] md:w-[85%] lg:w-[80%] mx-auto"
                            >
                                <img
                                    src={career.img}
                                    loading="lazy"
                                    alt={career.title}
                                    className="w-full h-[220px] sm:h-[330px] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div
                                    className="absolute w-full flex flex-col items-center justify-center text-center 
                              transition-all duration-500 ease-in-out
                              bottom-6 group-hover:bottom-1/2 group-hover:translate-y-1/2"
                                >
                                    <h3 className="text-white text-lg font-semibold drop-shadow-md transition-all duration-500">
                                        {career.title}
                                    </h3>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="opacity-0 group-hover:opacity-100 mt-3 px-5 py-2 bg-white text-gray-800 
                                font-medium rounded-md shadow-lg transition-all duration-500"
                                    >
                                        Join Now
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <div ref={contactRef}>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 0.7, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full border-t border-gray-300 opacity-70 sm:mt-[40px] relative z-[5]"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <Contact />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
