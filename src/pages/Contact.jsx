import React, { useState, useRef } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Logo from "../assets/logo.png";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subscribe: false,
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        "service_5hqfkmn",
        "template_zfp7e0s",
        form.current,
        "SuuyPe1FNbCGOQaWM"
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          subscribe: false,
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative w-full py-6 sm:py-12 md:py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-100"
      >
        <div className="text-center mb-6 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora" }}
          >
            <span className="text-black">Get in </span>
            <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Have questions? We’re here for you. <br />
            Drop us a line, write us an email, or send us a text.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-lg overflow-hidden md:min-h-[700px]">
          <div className="relative bg-black text-white p-8 md:p-12 flex flex-col justify-center overflow-hidden">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-8 text-gray-300 text-[15.25px] sm:text-lg">
              Say something to start a live chat!
            </p>
            <ul className="space-y-6 text-base md:text-lg">
              <li className="flex items-center space-x-4">
                <FiPhone className="text-xl text-white" />
                <span>+91 9348976663</span>
              </li>
              <li className="flex items-center space-x-4">
                <FiMail className="text-xl text-white" />
                <span>info@codexnovas.in</span>
              </li>
            </ul>
            <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-blue-900/40 rounded-full translate-x-12 translate-y-12"></div>
            <div className="absolute bottom-7 right-8 w-12 h-12 sm:w-28 sm:bottom-16 sm:right-20 md:bottom-20 md:right-28 sm:h-28 md:w-32 md:h-32 bg-blue-700/40 rounded-full"></div>
          </div>
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-b border-gray-400 focus:outline-none focus:border-blue-600 py-3 text-base md:text-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-b border-gray-400 focus:outline-none focus:border-blue-600 py-3 text-base md:text-lg"
                />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-3 text-base md:text-lg"
              />
              <textarea
                name="message"
                placeholder="Write your message.."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 pt-1 pb-0 text-base md:text-lg -mt-6"
              ></textarea>
              <div className="flex items-start space-x-3 -mt-2">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="peer mt-1 w-4 h-4 rounded-full appearance-none border border-gray-400 
               checked:bg-black checked:border-black checked:before:content-['✔'] 
               checked:before:text-white checked:before:block checked:before:text-xs 
               checked:before:text-center"
                />
                <label
                  htmlFor="subscribe"
                  className="text-sm text-gray-700 peer-checked:font-semibold"
                >
                  Subscribe to receive the latest news and exclusive offers
                </label>
              </div>
              {status.message && (
                <div
                  className={`p-4 rounded-md text-sm ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-red-100 text-red-700 border border-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group bg-black text-white px-16 py-3 rounded-md hover:bg-gray-900 transition text-base md:text-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="inline-block group-hover:animate-[jumpOnce_0.8s_ease-in-out]">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                </button>
                <style>
                  {`
                    @keyframes jumpOnce {
                      0% { transform: translateY(0); }
                      40% { transform: translateY(-120%); }
                      60% { transform: translateY(120%); }
                      100% { transform: translateY(0); }
                    }
                  `}
                </style>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-[#0B1221] text-white py-12 px-3 md:px-20">
        <div className="max-w-7xl mx-auto block md:hidden px-6">
          <div className="pt-2 sm:pt-6">
            <img src={Logo} alt="CodeX Novas" className="h-8 mb-4 -mt-8" />
            <div className="hidden bg-white rounded-full overflow-hidden w-full max-w-[240px] border border-gray-300">
              <input
                type="email"
                placeholder="Your Email address"
                className="flex-1 min-w-0 px-4 py-2 text-black bg-transparent focus:outline-none placeholder:text-xs"
              />
              <button className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-700 transition m-1">
                Submit
              </button>
            </div>
            <div className="flex justify-start gap-4 mt-5 ml-1">
              <a
                href="https://www.linkedin.com/company/code-x-novas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F2030] text-blue-400"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/codexnovas?igsh=NHdpbmk1amJyNnc1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F2030] text-blue-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@code-x-novas?si=5JWCRETLXGoSgqJ0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F2030] text-blue-400"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="flex justify-between mt-8 text-gray-400">
              <ul className="space-y-3">
                <li className="font-semibold text-sm text-gray-200 mb-2">
                  Company
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/career">Careers</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              <ul className="space-y-3 text-left">
                <li className="font-semibold text-sm text-gray-400 mb-2">
                  Products
                </li>
                <li className="text-gray-600">
                  <a href="/products">Synchrotask</a>
                </li>
              </ul>
            </div>
            <div className="w-full h-[2px] bg-gray-700 mt-8 mb-4 -mx-0"></div>
            <p className="text-center text-gray-500 text-[13px] mt-4 mb-2">
              ©Code-X-Novas 2025 All Rights Reserved
            </p>
            <div className="flex ml-2 justify-between text-sm px-2 text-gray-400">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms Of Use</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto hidden md:grid md:grid-cols-3 gap-12">
          <div>
            <img src={Logo} alt="CodeX Novas" className="h-10 mb-5" />
            <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md border border-gray-300">
              <input
                type="email"
                placeholder="Your Email address"
                className="flex-1 min-w-0 px-2 sm:px-4 py-2 text-black bg-transparent 
                         focus:outline-none placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition m-1">
                Submit
              </button>
            </div>
            <div className="flex space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/company/code-x-novas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-blue-600 hover:bg-gray-700 transition"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/codexnovas?igsh=NHdpbmk1amJyNnc1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-blue-600 hover:bg-gray-700 transition"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://youtube.com/@code-x-novas?si=5JWCRETLXGoSgqJ0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-blue-600 hover:bg-gray-700 transition"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/career">Careers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="/products">Synchrotask</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 hidden md:flex justify-between items-center text-gray-400 text-sm">
          <p>©Code-X-Novas 2025 All Rights Reserved</p>
          <div className="flex space-x-6">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms Of Use</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
