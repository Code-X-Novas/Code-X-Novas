{/**Few Imports**/}
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

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
      className="flex items-center justify-between px-6 h-[65px] md:h-[80px] lg:h-[90px] fixed top-0 left-0 z-50"
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
          className="h-[80px] md:h-[150px] lg:h-[200px] w-auto"
        />
      </Link>

      <div className="hidden md:flex items-center">
        <div className="flex items-center mr-80 space-x-6 lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.label.toLowerCase(), item.path)}
              className={`font-sora text-[16px] hover:underline decoration-gray-400 underline-offset-4 transition-all duration-300`}
              style={active === item.path ? gradientText : { color: "#000000" }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNavClick("contact", "/contact")}
          className="relative overflow-hidden ml-auto px-6 py-2 rounded-md font-poppins text-[16px] text-white"
          style={{
            background:
              "linear-gradient(90deg, #2352A5 0%, #137DD1 11%, #02A7FD 26%, #7DE2FF 44%, #42ACEF 72%, #127CD1 83%, #2352A5 99%)",
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
        <div className="absolute top-[90px] left-0 w-full bg-white shadow-md z-40 flex flex-col p-6 space-y-6 md:hidden">
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
