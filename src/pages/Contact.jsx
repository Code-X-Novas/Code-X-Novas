{/*Few Imports*/}

import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo.svg"; 

{/**Contact Section**/}
const Contact = () => {
  return (
    <>
      <section className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-100">
      
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Sora" }}
          >
            <span className="text-black">Get in </span>
            <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
            Have questions? We’re here for you. <br />
            Drop us a line, write us an email, or send us a text.
          </p>
        </div>

   
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-lg overflow-hidden min-h-[700px]">
          <div className="relative bg-black text-white p-12 flex flex-col justify-center overflow-hidden">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-8 text-gray-300 text-lg">
              Say something to start a live chat!
            </p>
            <ul className="space-y-6 text-lg">
              <li className="flex items-center space-x-4">
                <FiPhone className="text-xl text-white" />
                <span>(949) 880-6134</span>
              </li>
              <li className="flex items-center space-x-4">
                <FiMail className="text-xl text-white" />
                <span>team@turn.me</span>
              </li>
            </ul>

      
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-900/40 rounded-full translate-x-12 translate-y-12"></div>
            <div className="absolute bottom-20 right-28 w-32 h-32 bg-blue-700/40 rounded-full"></div>
          </div>

      
          <div className="bg-white p-12 flex flex-col justify-center">
            <form className="space-y-6">
           
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-b border-gray-400 focus:outline-none focus:border-blue-600 py-3 text-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b border-gray-400 focus:outline-none focus:border-blue-600 py-3 text-lg"
                />
              </div>

       
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-3 text-lg"
              />

           
              <textarea
                placeholder="Write your message.."
                rows="5"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 pt-1 pb-0 text-lg -mt-6"
              ></textarea>

         
              <div className="flex items-start space-x-3 -mt-2">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="mt-1 w-4 h-4 rounded-full appearance-none border border-gray-400 
                             checked:bg-black checked:border-black checked:before:content-['✔'] 
                             checked:before:text-white checked:before:block checked:before:text-xs 
                             checked:before:text-center"
                />
                <label htmlFor="subscribe" className="text-sm text-gray-700">
                  Subscribe to receive the latest news and exclusive offers
                </label>
              </div>

             
              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-black text-white px-16 py-3 rounded-md hover:bg-gray-900 transition text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

   
      <footer className="bg-[#0B1221] text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      
          <div>
            <img src={Logo} alt="CodeX Novas" className="h-40 -mb-2" /> 
<div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md border border-gray-300">
  <input
    type="email"
    placeholder="Your Email address"
    className="flex-1 px-4 py-2 text-black bg-transparent focus:outline-none"
  />
  <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition m-1">
    Submit
  </button>
</div>

<div className="flex space-x-6 mt-6">
  <a
    href="#"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-blue-600 hover:bg-gray-700 transition"
  >
    <FaLinkedinIn className="text-2xl" />
  </a>
  <a
    href="#"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-blue-600 hover:bg-gray-700 transition"
  >
    <FaInstagram className="text-2xl" />
  </a>
  <a
    href="#"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-blue-600 hover:bg-gray-700 transition"
  >
    <FaYoutube className="text-2xl" />
  </a>
</div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#">Synchrotask</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>©Code-X-Novas 2025 All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Use</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
