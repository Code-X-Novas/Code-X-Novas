
{/**Few Imports**/}

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [active, setActive] = useState(location.pathname);

  const handleNavClick = (id, path) => {
    setActive(path);
    navigate(path);
  };

  const gradientText = {
    background:
      "linear-gradient(90deg, #2352A5 0%, #137DD1 25%, #02A7FD 45%, #7DE2FF 65%, #42ACEF 85%, #B7F1FF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const navItems = [
    { label: "Services", path: "/services" },
    { label: "Works", path: "/works" },
    { label: "Products", path: "/products" },
    { label: "Blogs", path: "/blogs" },
    { label: "About", path: "/about" },
    { label: "Career", path: "/career" },
  ];

  return (
    <nav
      className="flex items-center justify-between 
                 px-4 sm:px-5 md:px-6 lg:px-10 
                 h-[65px] sm:h-[75px] md:h-[80px] lg:h-[90px] 
                 fixed top-0 left-0 z-50"
      style={{
        width: "100%",
        background: "#FFFFFFB5",
        boxShadow: "0px 4px 62.9px 0px #00000026",
        backdropFilter: "blur(10px)",
      }}
    >
      <Link to="/" className="flex items-center pl-2">
        <img
          src={logo}
          alt="Code X Novas"
          className="h-[40px] sm:h-[20px] md:h-[40px] lg:h-[100px] xl:h-[55px] w-auto transition-all duration-300"
        />
      </Link>
  
      <div className="hidden md:flex items-center">
        <div
          className="
            flex items-center 
            md:mr-15 lg:mr-60 xl:mr-80 
            space-x-4 sm:space-x-5 md:space-x-5 lg:space-x-6 xl:space-x-8
          "
        >
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.label.toLowerCase(), item.path)}
              className="font-sora 
                         text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] 
                         hover:underline decoration-gray-400 underline-offset-4 
                         transition-all duration-300"
              style={active === item.path ? gradientText : { color: "#000000" }}
            >
              {item.label}
            </button>
          ))}
        </div>
  
        <button
          onClick={() => handleNavClick("contact", "/contact")}
          className="relative overflow-hidden ml-auto 
                     px-4 sm:px-5 md:px-6 lg:px-6 
                     py-[6px] sm:py-[7px] md:py-[8px] lg:py-2 
                     rounded-md font-poppins 
                     text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] 
                     text-white whitespace-nowrap"
          style={{
            background: `
            linear-gradient(
              90deg,
            #2352A5 0%,
              #137DD1 20%,
              #02A7FD 45%,
              #42ACEF 70%,
              #7DE2FF 92%,
              #B7F1FF 100%
            )
          `,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
          }}
        >
          Contact us
        </button>
      </div>
  
      <button
        className="md:hidden text-gray-700 ml-3"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>
  
      {open && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md z-40 flex flex-col p-6 space-y-6 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.label.toLowerCase(), item.path)}
              style={active === item.path ? gradientText : { color: "#000000" }}
              className="font-sora text-[16px] text-left"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact", "/contact")}
            className="w-full text-center px-6 py-3 rounded-md font-poppins text-[16px] text-white bg-gradient-to-r from-[#2352A5] to-[#3CA9E2]"
          >
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
  
}
