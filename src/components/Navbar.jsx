import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="flex items-center px-3 py-3 fixed top-0 left-0 w-full z-50 overflow-hidden"
      style={{
        background: "#FFFFFFB5",
        boxShadow: "0px 4px 62.9px 0px #00000026",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Code X Novas" className="w-[150px] h-auto" />
      </Link>

      {/* Desktop Links in wider container */}
      <div className="hidden md:flex ml-auto">
        <div className="flex items-center space-x-7 w-[120%]">
          <Link to="/services" className="font-sora text-[16px] text-black">
            Services
          </Link>
          <Link to="/works" className="font-sora text-[16px] text-black">
            Our Works
          </Link>
          <Link to="/products" className="font-sora text-[16px] text-black">
            Products
          </Link>
          <Link to="/blogs" className="font-sora text-[16px] text-black">
            Blogs
          </Link>
          <Link to="/about" className="font-sora text-[16px] text-black">
            About us
          </Link>
          <Link to="/career" className="font-sora text-[16px] text-black">
            Career
          </Link>

          {/* Contact Button pushed far right */}
          <Link
            to="/contact"
            className="ml-3 px-4 py-2 text-white rounded-md font-poppins text-[18px] font-normal leading-[120%] tracking-[0%]"
            style={{
              background: "linear-gradient(90deg, #2352A5 0%, #3CA9E2 100%)",
              marginLeft: "auto",      // keeps it at far right
              marginRight: "150px",    // pushes it beyond MacBook Air viewport
            }}
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center text-gray-700 ml-3"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>
    </nav>
  );
}
